import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//@ts-ignore
import { resolve } from 'path-browserify';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': '/src/utils',
    },
  },
})
