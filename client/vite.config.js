// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Markdown from 'vite-plugin-md'; // Markdown eklentisi

export default defineConfig({
  plugins: [
    react(),
    Markdown({
      exclude: [/\.md$/], // .md dosyalarını işlememe
    }),

  ], // Markdown eklentisini ekleyin
});
