# arsaljafri.github.io

Personal site and writing. Built with [Astro](https://astro.build), deployed to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321 (drafts are visible here)
npm run build    # production build into dist/ (drafts excluded)
npm run preview  # serve the production build
```

## Add a post

Create `src/content/posts/<slug>.md` (or `.mdx` to use components like `<Figure>`):

```md
---
title: Three ways to serve 1,000 connections
description: One or two sentences for cards, RSS, and link previews.
date: 2026-12-01
kind: write-up        # or: note
tags: [systems]
project: unix-shell   # optional: id of a file in src/content/projects
draft: true           # remove (or set false) to publish
---
```

The URL is `/writing/<slug>`. Images go in `public/images/<slug>/`. For a caption, put an italic line right under a Markdown image.

## Add a project

Create `src/content/projects/<slug>.md`:

```md
---
title: Unix shell
summary: One line.
status: in-progress   # or: shipped
repo: https://github.com/ArsalJafri/...
tags: [systems, c]
featured: true        # show on the home page
order: 1              # manual sort within status
---

Optional longer description.
```

## Deploy

Pushing to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).
One-time setup: **Settings → Pages → Source: GitHub Actions**.

## Customize

- Name, tagline, and links: `src/site.config.ts`
- Colors, type scale, spacing: `src/styles/global.css`
- Social preview image: edit `design/og-default.svg`, then
  `rsvg-convert -w 1200 -h 630 design/og-default.svg -o public/og-default.png`

## Custom domain (later)

1. Add DNS records per the GitHub Pages docs.
2. Add `public/CNAME` containing the domain.
3. Update `site` in `astro.config.mjs` and enable **Enforce HTTPS** in Pages settings.
