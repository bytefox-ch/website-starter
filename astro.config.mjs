// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Beim Onboarding auf die echte Domain setzen (wichtig für sitemap/OG):
  site: 'https://example.ch',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
