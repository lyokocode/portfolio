// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Markdown from 'vite-plugin-md';

export default defineConfig({
  build: { manifest: true, outDir: './dist' },
  base: '/',
  // root: './src',
  plugins: [
    react(),
    Markdown({
      exclude: [/\.md$/],
    }),

  ],
});
