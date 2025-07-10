// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://BryanGuti.github.io",
  base: "/samsung-galaxy-s25-ultra-landing/",
  vite: {
    plugins: [tailwindcss()]
  }
});