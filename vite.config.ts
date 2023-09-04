import * as path from 'path';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import ViteSvgLoader from 'vite-svg-loader';
import Visualizer from 'rollup-plugin-visualizer';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import dts from 'vite-plugin-dts';

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
      filename: path.resolve(__dirname, 'report/treemap.html'),
      title: 'Bundle Visualizer',
      gzipSize: true,
      brotliSize: true,
      template: 'treemap',
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./src/composables/**'],
    }),
    Components({
      dirs: ['./src/components/**'],
    }),
    dts({
      entryRoot: 'src',
      outDir: 'dist/types',
      cleanVueFileName: true,
      exclude: ['stories', '**/*.test.ts'],
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
    target: 'esnext',
    lib: {
      formats: ['es', 'cjs'],
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      // externalize deps that shouldn't be bundled into the library
      external: [
        'vue',
        '@vueuse/core',
        'libphonenumber-js',
        'xss',
        ...(process.env.DEV_BUILD
          ? []
          : ['vee-validate', '@vee-validate/rules']),
      ],
      input: [
        path.resolve(__dirname, 'src/index.ts'),
        path.resolve(__dirname, 'src/icons.ts'),
        path.resolve(__dirname, 'src/rules/index.ts'),
        path.resolve(__dirname, 'src/resolvers/index.ts'),
        path.resolve(__dirname, 'src/components/router/index.ts'),
      ],
      output: {
        preserveModules: true,
        entryFileNames: ({ name }) => {
          return `[format]/${name
            .replace(/^src\//, '')
            .replace(/\.(vue|svg)$/, '')
            // We need to rename the node_modules sub-folder so that
            // its content is copied when installing the package from npm
            .replace(/^node_modules/, 'vendor')}.js`;
        },
      },
    },
  },
});
