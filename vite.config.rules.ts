import * as path from 'path';

import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'src/rules/index.ts'),
      name: 'fifteen-design-system-vue/rules',
      fileName: format => `${format}/rules/index.js`,
    },
  },
});
