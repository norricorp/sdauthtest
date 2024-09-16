import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    include: ["dayjs/plugin/relativeTime.js"],
  },
  build: {
    emptyOutDir: false,
  },
  server: {
     host: true,
     port: 5183,
    fs: {
      allow: [".."]
    } 
  }
})
