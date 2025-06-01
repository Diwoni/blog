import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  server: {
    host: 'localhost',
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // @ → src 경로
    },
  },
});
