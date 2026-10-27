import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';

// GitHub Pages serves this repo as a project site:
//   https://erkuldeepkushwah.github.io/brivora.ai/
// The deploy workflow injects BASE_PATH=/brivora.ai/ so assets resolve correctly.
// Local dev, Vercel, Netlify etc. keep serving from the root.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
