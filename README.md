# Didier Bignoux — Portfolio

Portfolio React moderne, construit avec Vite et déployé sur GitHub Pages.

## Développement

```bash
npm install
npm run dev
```

Le script `npm start` expose également le site sur le réseau local, au port `8080`.

## Commandes

- `npm run dev` : serveur de développement Vite
- `npm start` : serveur local sur toutes les interfaces
- `npm run build` : build de production dans `dist/`
- `npm run preview` : aperçu du build de production
- `npm run deploy` : publication de `dist/` sur la branche `gh-pages`

## Structure active

```text
src/
├── components/  Composants et sections du portfolio
├── data/        Données des projets
├── hooks/       Hooks React et routage statique
├── pages/       Page d’accueil et page projet
├── assets/      Styles, images et polices
├── app.jsx      Sélection de la page active
└── main.jsx     Point d’entrée React
```

Le routage utilise le hash de l’URL afin de rester compatible avec un hébergement statique GitHub Pages.
