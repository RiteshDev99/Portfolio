# Ritesh Chaudhary — Portfolio

A compact, fast personal portfolio built with React + Vite and styled with Tailwind CSS (via CDN).

This repo contains the source for a single-page portfolio site and a minimal Vite-based toolchain to run, build, and preview the site locally.

Quick facts

- Framework: React 19
- Bundler / dev server: Vite
- Styling: Tailwind CSS (loaded from CDN in `index.html`)
- Icons: lucide-react
- Entry points: `index.html`, `index.tsx`, `App.tsx`

Getting started (local)

1. Install dependencies

   ```bash
   npm install
   ```

2. Run the dev server

   ```bash
   npm run dev
   ```

   Open the URL printed by Vite (usually http://localhost:5173).

Build & preview (production)

```bash
npm run build
npm run preview
```

Project structure (high level)

- `index.html` — main HTML, fonts, Tailwind CDN and small global styles
- `index.tsx` — React entry that mounts `App`
- `App.tsx` — top-level React component that composes the site
- `components/` — UI sections (Hero, Navbar, Skills, Projects, Contact, Footer, etc.)
- `assets/` — images and icons (avatar at `assets/icons/me.jpg`)
- `vite.config.ts`, `tsconfig.json`, `package.json` — build + types config

Where to edit content

- Most visible text/content lives in `components/` (e.g. `Hero.tsx`, `Projects.tsx`, `Contact.tsx`).
- Global styles and Tailwind config live inline in `index.html`.

Notes & small suggestions

- Favicon: `index.html` currently points to `/assets/icons/me.jpg`. Consider using an SVG circle-masked favicon (`assets/icons/me-rounded.svg`) for a rounded tab image.
- Tailwind via CDN is fine for quick iterations. For production you may prefer a local Tailwind build (postcss) to purge unused utilities and reduce bundle size.
- Add a LICENSE file if you want to clarify reuse terms.

Dev tips

- If you add packages run `npm install <pkg>` and commit `package-lock.json`.
- Vite provides fast HMR — edits should reflect instantly.

Contact

- Update contact details in `components/Contact.tsx`.

Made with ❤️ — enjoy customizing your portfolio.
