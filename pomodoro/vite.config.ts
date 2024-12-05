import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  build: {
    target: 'esnext',
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: resolve(__dirname, 'src/spa.tsx'),
      output: {
        format: 'system',
        dir: 'dist',
        entryFileNames: 'main.js',
      },
    },
  },
})
