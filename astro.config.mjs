import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), sitemap(), svelte()],
  site: 'https://hiteacheryouare.github.io',
  base: "/",
  redirects: {
    '/blog': '/press',
    '/blog/data/posts/[release]': '/press/[release]',
  },
});
