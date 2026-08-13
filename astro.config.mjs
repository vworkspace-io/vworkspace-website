// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Production site is the apex domain served by GitHub Pages.
export default defineConfig({
  site: "https://vworkspace.io",
  integrations: [sitemap()],
  redirects: {
    "/platform": "/product/",
    "/ai": "/ai-experts/",
    "/ai-team": "/ai-experts/",
  },
  build: {
    inlineStylesheets: "auto",
  },
});
