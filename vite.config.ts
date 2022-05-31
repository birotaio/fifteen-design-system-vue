import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ViteSvgLoader from 'vite-svg-loader';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
  server: { port: 3003 },
  root: '.',
  resolve: {
    alias: {
      '@': __dirname,
    },
  },
  plugins: [
    vue(),
    ViteSvgLoader(),
    AutoImport({ imports: ['vue', '@vueuse/core'] }),
    Components({
      resolvers: [
        async name => {
          if (name.startsWith('F')) {
            return `@/components/${name}.vue`;
          }
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        // import this file so that is is available for each component
        imports: [path.resolve(__dirname, './styles/components.styl')],
      },
    },
  },
});
