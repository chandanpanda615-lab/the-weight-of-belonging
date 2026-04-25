# The Weight of Belonging

An Astro site for a personal letter and dispatches from Saranagada, a village in Kandhamal, Odisha. The site is built as a quiet, photo-led publication: part invitation, part field note, part archive of returning home.

Live site:

https://chandanpanda615-lab.github.io/the-weight-of-belonging/

## What is inside

- `src/pages/index.astro` - the main letter.
- `src/pages/dispatch/` - the dispatch listing and individual dispatch route.
- `src/content/dispatch/` - Markdown dispatch issues.
- `src/layouts/Base.astro` - shared page shell, navigation, metadata, and footer photos.
- `src/styles/global.css` - global typography, color, and layout rules.
- `public/photos/` - static photo assets used by the site.

## Local development

```sh
npm install
npm run dev
```

The dev server usually runs at `http://localhost:4321`.

## Production build

```sh
npm run build
npm run preview
```

The site is configured for GitHub Pages in `astro.config.mjs`:

```js
site: "https://chandanpanda615-lab.github.io",
base: "/the-weight-of-belonging",
output: "static"
```

Because the site is served from a subpath, internal asset links should use Astro's `import.meta.env.BASE_URL` instead of hard-coded root paths like `/photos/...`.

## Adding a dispatch

Create a new Markdown file in `src/content/dispatch/`, for example:

```md
---
title: A title for the dispatch
vol: 1
issue: 4
date: "May 2026"
lede: "A one-sentence preview for the dispatch index."
heroPhoto: "/photos/06-group-road.jpeg"
heroAlt: "Clear description of the hero photo"
heroCaption: "short caption"
---

Write the dispatch here.
```

Keep `vol` and `issue` numeric so the dispatch index can sort issues correctly.

## Photo notes

Photos live in `public/photos/` and are served as static files. Before adding more images, resize or compress them so the live site stays fast on mobile connections.

## Deployment

Deployments run through GitHub Actions with `.github/workflows/deploy.yml`. Every push to `main` builds the Astro site and publishes `dist/` to GitHub Pages.
