import * as path from 'path';
import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteSvgLoader from 'vite-svg-loader';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': __dirname,
    },
  },
  plugins: [Vue(), ViteSvgLoader()],
  css: {
    preprocessorOptions: {
      stylus: {
        // import this file so that is is available for each component
        imports: [path.resolve(__dirname, 'styles/components.styl')],
      },
    },
  },
  build: {
    lib: {
      formats: ['es'],
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'fifteen-design-system-vue',
      fileName: () => 'index.js',
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: ['vue', '@vueuse/core', 'vee-validate', '@vee-validate/rules'],
    },
  },
});
