# Vidéo promo Devis Vocal NC : Reel vertical 25 s

Livrable : `devis-vocal-nc-promo.mp4` (1080 × 1920, 30 i/s, H.264, 25 s, piste audio muette).

## 1. Diagnostic (27/09/2026)

- Disponible : ffmpeg complet (libx264/AAC, via `pip install imageio-ffmpeg`) et Chromium/Playwright, qui permettent de rendre une animation HTML image par image. Pas de génération vidéo IA ni de synthèse vocale correcte (seul espeak serait installable, trop robotique pour la marque).
- Absent de ce clone : le dossier `5. Vendre/Facebook/` (le dépôt cloné est `Heat-it-NC` et ne contient que `index.html`). Rien trouvé non plus sur le Google Drive. Les écrans ont donc été reconstitués d'après le fichier de démonstration de l'app `dossier-annuel-2026.xlsx` (Drive) : libellés du catalogue, unités, « TGC 11 % taux normal (travaux) », numérotation DEV/FAC, statuts Brouillon/Envoyé/Accepté, état Soldée.
- Référence de DA (`x.com/jackfriks/status/2103881791002357918`) : **non consultable**, x.com et twimg sont bloqués par la politique réseau de l'environnement. La DA appliquée est donc une hypothèse : codes « Reel natif » d'un fondateur solo (accroche texte dès la 1re seconde, sous-titres en étiquettes blanches, écran d'app au centre, coupes sèches, pas d'intro logo).
- Format retenu : **motion design d'écrans d'app + sous-titres, lisible sans le son**. C'est le seul format réalisable de bout en bout ici sans tournage, et la majorité des Reels sont regardés muets.

## 2. Script

| Temps | Plan / visuel | Texte à l'écran | Voix off (optionnelle, à enregistrer par Cédric) |
|---|---|---|---|
| 0,0–2,6 s | Fond sombre, texte plein écran, les lignes tombent une à une | Le devis, / vous le tapez / **encore le soir ?** | « Vos devis, vous les tapez encore le soir ? » |
| 2,6–8,4 s | Le téléphone monte. Écran « Nouveau devis » : micro jaune qui pulse, onde sonore, transcription mot à mot : « Chantier à Païta. Dalle béton armé 15 cm, 45 m². Mur en agglos de 20, 30 m². Enduit de façade gratté, 60 m². » | Vous le dictez **sur le chantier.** | « Avec Devis Vocal NC, vous dictez le chantier, sur place. » |
| 8,4–11,2 s | Glissement vers le devis DEV-2026-001 (étiquette « Exemple ») : 3 lignes chiffrées, puis compteur Total HT 1 287 000 F, TGC 11 % 141 570 F, Total TTC 1 428 570 F | Le devis sort **chiffré.** | « Le devis sort chiffré. » |
| 11,2–14,2 s | Même écran, les pastilles TGC 11 %, F CFP et Païta s'entourent de jaune l'une après l'autre | La TGC, les francs CFP / et les communes d'ici / **compris.** | « La TGC, les francs CFP et les communes d'ici sont compris. » |
| 14,2–18,4 s | Écran « Devis prêt » : aperçu PDF, appui sur « Envoyer le devis », statut Brouillon → Envoyé → Accepté, bandeau vert « Devis signé à distance » | PDF prêt à envoyer. / Le client signe / **à distance.** | « Le PDF part au client, qui signe le devis à distance. » |
| 18,4–21,6 s | Écran « Facture FAC-2026-001 » : barre Encaissé qui se remplit, Reste dû qui descend à 0 F, état « Soldée » | Ensuite, facture / et encaissement / **suivis.** | « Ensuite, la facture et l'encaissement sont suivis. » |
| 21,6–25,0 s | Carton de fin jaune | **Devis Vocal NC** / Dictez votre devis sur le chantier. La TGC, les francs CFP et les communes d'ici compris. / 5 500 F/mois ou 55 000 F/an / Écrivez-nous en message privé. | « Devis Vocal NC. Écrivez-nous. » |

Vérification des chiffres affichés : 45 × 14 000 = 630 000 ; 30 × 11 500 = 345 000 ; 60 × 5 200 = 312 000 ; HT = 1 287 000 F ; TGC 11 % = 141 570 F ; TTC = 1 428 570 F. Prix unitaires repris du catalogue de démonstration, devis marqué « Exemple ». Aucun client, aucun témoignage, aucun chiffre d'activité.

## 3. Assets

- **Réutilisé tel quel depuis `5. Vendre/Facebook/`** : rien, le dossier n'est pas dans ce clone. À vérifier sur le poste de Cédric : si les visuels PNG existants ont une charte (couleurs, police, logo) différente du jaune chantier/noir utilisé ici, il faut l'aligner (variables `--jaune`, `--noir` en tête de `promo.html`).
- **Réutilisé** : l'accroche validée (carton de fin, mot pour mot) ; les libellés et prix du catalogue de démo de l'app.
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

1. La DA : envoyer la vidéo jackfriks (fichier MP4 déposé dans ce dossier, ou autoriser `x.com` et `video.twimg.com` dans les réglages réseau de l'environnement) pour réaligner le style.
2. Le CTA « Écrivez-nous en message privé » : le garder ou le remplacer par le lien de l'app.
3. La musique : à choisir dans la bibliothèque Instagram/Facebook au moment de publier (la vidéo est livrée muette).
4. La voix off : optionnelle, texte prêt ci-dessus.
