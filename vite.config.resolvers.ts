import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@@': __dirname,
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'resolvers/index.ts'),
      name: 'fifteen-design-system-vue/resolvers',
      fileName: format => `${format}/resolvers/index.js`,
    },
  },
});
