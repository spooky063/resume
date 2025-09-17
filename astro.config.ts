// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

import tailwindcss from '@tailwindcss/vite';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@icons': path.resolve('./src/components/icons'),
        '@ui': path.resolve('./src/components/ui'),
        '@data': path.resolve('./src/data'),
      }
    }
  },
  build: {
    inlineStylesheets: 'always'
  },
  devToolbar: {
    enabled: false,
  }
});