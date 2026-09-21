# Portfolio — Harsh Mehta

Single-page portfolio: hero, about, background (work + education), skills and
projects. React + Vite + Tailwind CSS v4, prerendered to static HTML at build
time so the content is in the initial response for crawlers and share cards.

## Running it

```bash
npm install
npm run dev      # vite dev server on :5173
npm run build    # client build + SSR build + prerender to dist/
npm run preview  # serve the built dist/
npm run lint
```

## Layout

- `src/components/` — one file per section. `Projects.jsx` and `Skills.jsx`
  export their data arrays; `Hero.jsx` imports both so the stat counters can
  never drift from the lists they count.
- `src/index.css` — design tokens (color, radius, shadow, type scale) plus the
  `t-*` typography utilities every component uses. Light and dark are two sets
  of the same variables; nothing hardcodes a hex outside this file.
- `scripts/prerender.mjs` — renders the SSR bundle into `dist/index.html`.
- `public/Harsh_resume.pdf` — served by the Download CV buttons.

## Editing content

Everything a recruiter reads lives in a data array at the top of its component:
work and education in `Background.jsx`, projects in `Projects.jsx`, skills in
`Skills.jsx`. A project can carry an optional `highlights` array, which renders
as bullets under the description.
