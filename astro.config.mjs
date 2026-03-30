import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://shaniascripts.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
