import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://shaniascripts.github.io',
  base: '/',
  integrations: [tailwind()],
});
