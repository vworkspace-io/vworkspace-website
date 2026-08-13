# vworkspace-website

Marketing website for **vWorkspace** — https://vworkspace.io

Built with [Astro](https://astro.build): static output (zero JS shipped by
default), shared layouts and components, and a small design system so new pages
are quick to add. Product/API documentation lives separately on the docs
subdomains (`operator.docs.vworkspace.io`, `server.docs.vworkspace.io`).

## Tech

- **Astro 5** — static site generator, outputs plain HTML/CSS to `dist/`
- **@astrojs/sitemap** — generates `sitemap-index.xml`
- **Inter (self-hosted)** via `@fontsource-variable/inter` — no CDN, works offline
- No UI framework — pure `.astro` components

## Project structure

```text
src/
├── components/   # Header, Footer, Logo, CTA, PageHero
├── layouts/      # BaseLayout (head/meta, header, footer)
├── pages/        # home, product, knowledge, AI experts, NetBird, cloud pilot, deployment pages
├── styles/       # global.css (design tokens)
└── config.ts     # nav, links, footer; single source of truth
public/            # CNAME, robots.txt, favicon, .nojekyll
```

Adding a page = drop a `.astro` file in `src/pages/` and (optionally) add it to
`nav` in `src/config.ts`. Legacy `/platform` and `/ai` routes redirect to
`/product` and `/ai-experts` through `astro.config.mjs`.

## Develop

> Requires Node 20+ and npm.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # preview the production build
```

## Deploy (GitHub Pages)

CI builds and deploys on every push to `main` via
`.github/workflows/deploy.yml` (official `withastro/action`).

1. Push to **`vworkspace-io/vworkspace-website`**.
2. **Settings → Pages → Build and deployment → Source:** select **GitHub Actions**.
3. Merge to `main`; the **Deploy site** workflow publishes `dist/`.
4. **Settings → Pages → Custom domain:** enter `vworkspace.io`, wait for the DNS
   check, then enable **Enforce HTTPS**.

The `public/CNAME` file (`vworkspace.io`) is copied into the build output so the
custom domain survives redeploys.

## DNS for the apex domain

Unlike the docs subdomains (which `CNAME` to `vworkspace-io.github.io`), the apex
`vworkspace.io` cannot be a CNAME. Configure GitHub Pages apex records:

| Type | Name | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `vworkspace-io.github.io` |

If your DNS provider supports `ALIAS`/`ANAME` flattening, point `@` at
`vworkspace-io.github.io` instead of the A/AAAA records. Verify current apex IPs
in the [GitHub Pages docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
before going live.
