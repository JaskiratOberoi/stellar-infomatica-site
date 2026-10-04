# stellarinfomatica.com

The public site for Stellar Infomatica: twelve laboratory software products shown as frames on one cutting-bench select rail.

## Stack

- Next.js 16 (app router), React 19, Tailwind CSS v4, framer-motion
- Static export (`output: "export"`, `trailingSlash: true`); no server runtime, API or database
- Fonts: Barlow and Barlow Condensed, self-hosted at build time through `next/font`

## Develop

```bash
npm install
npm run dev      # http://localhost:3001
npm run lint
npm run build    # writes the static site to out/
```

## Where things live

| Path | What it is |
| --- | --- |
| `lib/products.ts` | The product catalogue: names, frame numbers, groups, summaries, features, provenance and state marks. Edit copy here. |
| `components/screens/` | Authored screen vignettes for each product, with synthetic data only. Never paste real patient, unit or payroll data here. |
| `components/bench/` | The world's primitives: wordmark, plates (buttons), punched windows, perforated edges, tape flag, pins, the select rail. |
| `app/page.tsx` | Home: headline, rail, bench, scenes 01–04, pins, contact. |
| `app/products/[slug]/` | One static page per product, generated from the catalogue. |
| `app/clinical/` | BioSentry clinical logic (pathologies, MoM explainer, covariates). |
| `app/privacy`, `app/terms`, `app/disclaimer` | Legal pages for the prenatal software. |
| `PRODUCT.md`, `DESIGN.md` | Product truth and the recorded visual system (Impeccable). |

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml`, which builds and syncs `out/` to Hostinger over FTPS with a clean-slate sync. Treat `main` as production: build locally before pushing.
