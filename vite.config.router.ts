import * as path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': __dirname,
    },
  },
  plugins: [Vue()],
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'src/components/router/index.ts'),
      name: 'fifteen-design-system-vue/router',
      fileName: format => `${format}/router/index.js`,
    },
  },
});
