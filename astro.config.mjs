import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Replace 'shaniascripts' with your actual GitHub username if different
  site: 'https://shaniascripts.github.io',
  base: '/',
  integrations: [tailwind()],
});
