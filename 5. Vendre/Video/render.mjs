// Rendu image par image de promo.html en MP4 vertical 1080x1920, 30 i/s.
// Usage :
//   node render.mjs                       -> devis-vocal-nc-promo.mp4
//   node render.mjs --stills 1,5,10,20    -> captures PNG aux instants donnés (contrôle)
//   node render.mjs --voix voix-off.m4a   -> mixe une voix off enregistrée à part
//   node render.mjs --site monsite.nc     -> adresse affichée sur le carton de fin
// ffmpeg : variable FFMPEG, sinon `ffmpeg` du PATH, sinon celui de imageio-ffmpeg (pip install imageio-ffmpeg).
import { chromium } from 'playwright';
import { spawn, execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const dir = path.dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : null; };
const FPS = 30;

function ffmpegBin() {
  if (process.env.FFMPEG) return process.env.FFMPEG;
  try { execSync('ffmpeg -version', { stdio: 'ignore' }); return 'ffmpeg'; } catch {}
  return execSync(`python3 -c "import imageio_ffmpeg as i; print(i.get_ffmpeg_exe())"`).toString().trim();
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
const url = pathToFileURL(path.join(dir, 'promo.html'));
if (opt('--site')) url.searchParams.set('site', opt('--site'));
await page.goto(url.href);
await page.evaluate(() => document.fonts.ready);
const duration = await page.evaluate(() => window.DURATION);

if (opt('--stills')) {
  for (const s of opt('--stills').split(',').map(Number)) {
    await page.evaluate(t => window.render(t), s);
    await page.screenshot({ path: path.join(dir, `still-${s.toFixed(1)}.png`) });
  }
  await browser.close();
  process.exit(0);
}

const out = path.join(dir, opt('--out') || 'devis-vocal-nc-promo.mp4');
const voix = opt('--voix');
const audioIn = voix ? ['-i', voix] : ['-f', 'lavfi', '-i', 'anullsrc=channel_layout=stereo:sample_rate=48000'];
const ff = spawn(ffmpegBin(), [
  '-y', '-loglevel', 'error',
  '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
  ...audioIn,
  '-map', '0:v', '-map', '1:a',
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '18', '-pix_fmt', 'yuv420p', '-r', String(FPS),
  '-c:a', 'aac', '-b:a', '160k', '-t', String(duration),
  '-movflags', '+faststart', out,
], { stdio: ['pipe', 'inherit', 'inherit'] });

const frames = Math.round(duration * FPS);
for (let f = 0; f < frames; f++) {
  await page.evaluate(t => window.render(t), f / FPS);
  const buf = await page.screenshot({ type: 'jpeg', quality: 95 });
  if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  if (f % 150 === 0) process.stdout.write(`image ${f}/${frames}\n`);
}
ff.stdin.end();
await new Promise((res, rej) => ff.on('close', c => (c === 0 ? res() : rej(new Error('ffmpeg ' + c)))));
await browser.close();
console.log('OK ->', out);
