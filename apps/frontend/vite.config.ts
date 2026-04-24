import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryBase = '/catalogo_test/';

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? repositoryBase : '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
