import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
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
