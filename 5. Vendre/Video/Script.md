# Vidéo promo Devis Vocal NC : Reel vertical 25 s

Livrable : `devis-vocal-nc-promo.mp4` (1080 × 1920, 30 i/s, H.264, 25 s, piste audio muette).

## 1. Diagnostic (27/09/2026)

- Disponible : ffmpeg complet (libx264/AAC, via `pip install imageio-ffmpeg`) et Chromium/Playwright, qui permettent de rendre une animation HTML image par image. Pas de génération vidéo IA ni de synthèse vocale correcte (seul espeak serait installable, trop robotique pour la marque).
- Absent de ce clone : le dossier `5. Vendre/Facebook/` (le dépôt cloné est `Heat-it-NC` et ne contient que `index.html`). Rien trouvé non plus sur le Google Drive. Les écrans ont donc été reconstitués d'après le fichier de démonstration de l'app `dossier-annuel-2026.xlsx` (Drive) : libellés du catalogue, unités, « TGC 11 % taux normal (travaux) », numérotation DEV/FAC, statuts Brouillon/Envoyé/Accepté, état Soldée.
- Référence de DA (`x.com/jackfriks/status/2103881791002357918`) : **non consultable**, x.com et twimg sont bloqués par la politique réseau de l'environnement. La DA appliquée est donc une hypothèse : codes « Reel natif » d'un fondateur solo (accroche texte dès la 1re seconde, sous-titres en étiquettes blanches, écran d'app au centre, coupes sèches, pas d'intro logo).
- Format retenu : **motion design d'écrans d'app + sous-titres, lisible sans le son**. C'est le seul format réalisable de bout en bout ici sans tournage, et la majorité des Reels sont regardés muets.

## 2. Script (v2, textes corrigés par Cédric le 27/09)

| Temps | Plan / visuel | Texte à l'écran | Voix off (optionnelle, à enregistrer par Cédric) |
|---|---|---|---|
| 0,0–3,2 s | Fond sombre, texte plein écran, les lignes tombent une à une | Le devis, / vous le tapez / **encore le soir ?** / **Ou même le week-end ?** | « Vos devis, vous les tapez encore le soir ? Ou même le week-end ? » |
| 3,2–8,8 s | Écran de dictée de l'app : dictée d'un chantier | Vous le dictez **sur le chantier.** | « Avec Devis Vocal NC, vous dictez le chantier, sur place. » |
| 8,8–11,6 s | Le devis chiffré apparaît | Le devis est écrit **avec vos prix.** | « Le devis est écrit avec vos prix. » |
| 11,6–13,8 s | La TGC est mise en évidence sur le devis | La TGC **comprise.** | « La TGC est comprise. » |
| 13,8–18,0 s | Aperçu PDF, envoi, statut Accepté, « Devis signé à distance » | PDF prêt à envoyer. / Le client signe / **à distance.** | « Le PDF part au client, qui signe le devis à distance. » |
| 18,0–21,6 s | Facture : encaissé qui monte, reste dû à 0 F, « Soldée » | Ensuite, facture et / encaissement suivis / **depuis l'application.** | « Ensuite, la facture et l'encaissement sont suivis depuis l'application. » |
| 21,6–25,0 s | Carton de fin jaune | **Devis Vocal NC** / Dictez votre devis sur le chantier. / Inscrivez-vous sur **[adresse à confirmer]** / ou contactez-nous au **94 01 91** | « Devis Vocal NC. Inscrivez-vous, ou appelez-nous au 94 01 91. » |

Prix retirés de la vidéo. Adresse du site : passée au rendu (`?site=` dans l'URL de `promo.html`, voir `render.mjs`) tant qu'elle n'est pas confirmée.

**Écrans : encore reconstitués.** À remplacer par les vrais écrans de l'app (enregistrement d'écran du téléphone), voir « À trancher ».

Vérification des chiffres affichés : 45 × 14 000 = 630 000 ; 30 × 11 500 = 345 000 ; 60 × 5 200 = 312 000 ; HT = 1 287 000 F ; TGC 11 % = 141 570 F ; TTC = 1 428 570 F. Prix unitaires repris du catalogue de démonstration, devis marqué « Exemple ». Aucun client, aucun témoignage, aucun chiffre d'activité.

## 3. Assets

- **Réutilisé tel quel depuis `5. Vendre/Facebook/`** : rien, le dossier n'est pas dans ce clone. À vérifier sur le poste de Cédric : si les visuels PNG existants ont une charte (couleurs, police, logo) différente du jaune chantier/noir utilisé ici, il faut l'aligner (variables `--jaune`, `--noir` en tête de `promo.html`).
- **Réutilisé** : la première phrase de l'accroche validée (carton de fin) ; les libellés et prix du catalogue de démo de l'app.
- **Créé** : `promo.html` (animation, écrans reconstitués), `render.mjs` (rendu MP4), la vidéo.

## 4. Refaire ou modifier la vidéo

```bash
npm install                 # police Inter + Playwright
pip install imageio-ffmpeg  # si ffmpeg n'est pas installé
npm run stills              # captures PNG de contrôle
npm run render              # -> devis-vocal-nc-promo.mp4 (~45 s de calcul)
node render.mjs --voix voix-off.m4a   # même vidéo avec une voix off enregistrée au téléphone
```

Textes et minutage : tableau `CAPTIONS` et objet `T` dans `promo.html`.

## Option secondaire (plus ambitieuse, nécessite un tournage)

Remplacer les écrans reconstitués par une **capture d'écran réelle** de l'app sur le téléphone de Cédric (dictée en direct sur un vrai chantier, au soleil), plus 2 plans filmés de 2 s : mains sur le téléphone devant un chantier, PDF reçu sur un second téléphone. Mêmes sous-titres, même carton de fin. Plus crédible, mais demande 1 h de tournage et un chantier accessible.

## À trancher par Cédric

1. **Les vrais écrans** : enregistrer l'écran du téléphone (compte de démonstration, aucune donnée client réelle) sur 4 courts clips : dictée, devis, envoi du PDF, facture. Les déposer dans ce dépôt GitHub via « Add files via upload » (25 Mo max par fichier). Ne pas y mettre le code source : le dépôt est public.
2. **L'adresse exacte du site** pour le carton de fin.
3. La DA de référence (vidéo jackfriks) : toujours non consultée.
4. La musique : à choisir dans Instagram/Facebook à la publication (vidéo livrée muette).
