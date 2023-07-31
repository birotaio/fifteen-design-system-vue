import * as path from 'path';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteSvgLoader from 'vite-svg-loader';
import Visualizer from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@@': __dirname,
    },
  },
  plugins: [
    Vue(),
    ViteSvgLoader(),
    Visualizer({
      filename: path.resolve(__dirname, 'report/router-treemap.html'),
      title: 'Bundle Visualizer',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./src/composables/*'],
    }),
    Components({
      dirs: ['./src/components/**'],
    }),
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        // import this file so that is is available for each component
        imports: [path.resolve(__dirname, 'src/styles/components.styl')],
      },
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'src/components/router/index.ts'),
      name: 'fifteen-design-system-vue/router',
      fileName: format => `${format}/router/index.js`,
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: ['vue', 'vue-router'],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo.name === 'style.css') return 'router-style.css';
          return assetInfo.name as string;
        },
      },
    },
  },
});
