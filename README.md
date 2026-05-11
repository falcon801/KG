# Kelley Groves portfolio

Vite, React, TypeScript, Tailwind, Framer Motion. Static build only: no backend, no API keys.

Project demos live under `public/projects/<slug>/` and load in iframes from `/projects/:slug`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is `dist/`. `scripts/postbuild.mjs` copies `index.html` to `404.html` so client-side routes work on GitHub Pages.

## GitHub Pages (free)

**Do not upload `public/` as the website.** In Vite, `public/` is only raw assets that get copied when you run a production build. The site GitHub Pages must serve is the **`dist/`** folder produced by `npm run build` (compiled JS, CSS, `index.html`, demos, PDFs, etc.).

If Pages is set to “Deploy from branch” and your `main` branch only has source code (or you dragged `public` into the repo as the whole site), you will get a blank or minimal page—not this app.

**1. Repo URL shape**

- Site at `https://YOURNAME.github.io/REPO/` (normal project repo): Vite needs a base path that matches the repo name.

  PowerShell before build:

  ```powershell
  $env:VITE_BASE="/REPO/"
  npm run build
  ```

  Replace `REPO` with your GitHub repo name (slashes as shown).

- Site at `https://YOURNAME.github.io/` (repo must be named `YOURNAME.github.io`): do not set `VITE_BASE`. Default base `/` is correct.

**2. Turn on Pages**

In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch” unless you know you are publishing only `dist/`).

This repo includes `.github/workflows/deploy-pages.yml`: push to `main` and it runs `npm ci`, `npm run build` with `VITE_BASE` set to `/<repo-name>/`, then deploys **`dist/`**. Commit and push that file once.

Exception: if the repository name is exactly `YOURNAME.github.io` (user site at domain root), change the workflow so `VITE_BASE` is `/` instead of `/${{ github.event.repository.name }}/`.

**3. Manual deploy (no Actions)**

From your PC, with the same `VITE_BASE` as your repo name:

```powershell
$env:VITE_BASE="/portfolio/"
npm run build
npx gh-pages -d dist
```

Then set Pages source to the `gh-pages` branch (or whatever tool you use publishes).

**4. First load**

After the first deploy, wait a minute or two, then open the Pages URL GitHub shows in Settings.

## Content

Edit `src/data/profile.ts`, `projects.ts`, and `skills.ts`. Put the resume PDF in `public/` and point `resumePdfHref` at it.
