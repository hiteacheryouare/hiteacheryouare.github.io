import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import vue from "@astrojs/vue";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), sitemap(), svelte(), react(), vue(), prefetch()],
  site: 'https://hiteacheryourare.github.io',
  base: "/"
});