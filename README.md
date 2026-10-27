# Brivora.ai

Enterprise AI & managed IT services site — **React 19 + TypeScript + Vite + Tailwind CSS v4**.

This repository used to be a Next.js (App Router) app. It is now a plain client-side
React SPA built with Vite: `app/`, `next.config.ts`, `next-env.d.ts`, `postcss.config.mjs`
and the Next ESLint config have been removed, and the code now lives under `src/`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server with HMR on port 3000 |
| `npm run build` | Type-check (`tsc -b`) then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint (flat config) |
| `npm run typecheck` | TypeScript check only |

## Project structure

```
index.html            # single entry HTML (fonts, meta/OG tags, JSON-LD)
vite.config.ts        # Vite + React + Tailwind plugins, "@" -> ./src alias
src/
  main.tsx            # createRoot(<App />)
  App.tsx             # hash-based page router + modal orchestration
  index.css           # Tailwind v4 entry (@import "tailwindcss") + custom utilities
  pages/              # Home, About, Services, Portfolio, Blog, Contact
  components/         # Header, Footer, modals, shared UI
  data/content.ts     # site copy, blog posts, projects, team
  hooks/use-mobile.ts
  lib/utils.ts        # cn() helper (clsx + tailwind-merge)
public/               # static files copied as-is
```

## Deployment

`.github/workflows/deploy.yml` builds with Vite and publishes `dist/` to GitHub Pages
on every push to `main`. It sets `BASE_PATH=/brivora.ai/` so the project site at
`https://erkuldeepkushwah.github.io/brivora.ai/` resolves its assets correctly.

Any other host (Vercel, Netlify, Cloudflare Pages) works with build command
`npm run build` and output directory `dist`.

## Environment

Copy `.env.example` to `.env` if you need to override the canonical site URL.
All client-side variables must be prefixed with `VITE_`.
