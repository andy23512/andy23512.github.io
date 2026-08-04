# Tangent's Star Chart

The landing page at [andy23512.github.io](https://andy23512.github.io) — a
catalog of Tangent's unofficial [CharaChorder](https://www.charachorder.com/)
web tools, apps, and browser extensions.

Some of the projects are named after stars (Alnitak, Alnilam, Chara, Castor,
Sirius). The page renders an interactive 3D celestial sphere: hovering or
focusing one of those projects spins the sphere to that star and lights it up.

## How it works

- Projects live in the `pageGroup` array in [`src/pages/index.astro`](src/pages/index.astro),
  split into two groups (**Web Tools**, **Apps & Extensions**). Cards are sorted
  alphabetically by title at render time.
- A card is either a single link (the whole card is clickable) or a
  multi-destination card that renders its `links` as buttons (e.g. an extension
  on Chrome + Firefox, or an app on Download + GitHub). A `badge` shows a small
  tag such as `APP` or `EXTENSION`.
- To tie a project to a star, give its card a `star: '<key>'` that matches a
  star's `key` in [`src/data/stars.ts`](src/data/stars.ts). That renders a ✦
  marker and makes the sphere focus that star on hover/focus.
- [`src/components/CelestialSphere.astro`](src/components/CelestialSphere.astro)
  draws and animates the sphere; [`src/components/StarfieldBackdrop.astro`](src/components/StarfieldBackdrop.astro)
  paints the static starfield behind the cards that each card reveals on hover.
  Both honor `prefers-reduced-motion`.

## Project structure

```text
/
├── public/                       # static assets served as-is (favicons, robots.txt, sitemap)
├── src
│   ├── components
│   │   ├── CelestialSphere.astro  # the rotating, star-lighting sphere
│   │   └── StarfieldBackdrop.astro
│   ├── data
│   │   └── stars.ts               # star catalog + constellation lines + starByKey
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro            # the project catalog and page markup
│   └── styles
│       └── global.css
└── astro.config.mjs
```

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build the production site to `./dist/`           |
| `npm run preview`         | Preview the build locally, before deploying      |

Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).
Requires Node `>=22.12.0`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and deploys it to GitHub Pages.

## License

[MIT](LICENSE) © andy23512
