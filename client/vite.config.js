// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Markdown from 'vite-plugin-md';
import * as path from "path"

export default defineConfig({
  plugins: [
    react(),
    Markdown({
      exclude: [/\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  }
});
