import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    target: 'esnext' //browsers can handle the latest ES features
  },
  server: {
    port: 3000,
  },
});
