# Dipawesh Pawar — Personal Website

Personal portfolio built with React and Vite. GitHub Pages deploys the static build from the `main` branch through GitHub Actions.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

The deploy workflow publishes `dist/client` to GitHub Pages after each push to `main`.
