const path = require('path');
const ViteSvgLoader = require('vite-svg-loader');
const AutoImport = require('unplugin-auto-import/vite');
const Components = require('unplugin-vue-components/vite');

module.exports = {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite',
  },
  viteFinal(config) {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '..'),
        },
      },
      plugins: [
        ...config.plugins,
        // ImportComposables.vite(),
        ViteSvgLoader(),
        AutoImport({
          imports: ['vue', '@vueuse/core'],
          dirs: ['composables'],
        }),
        Components({
          dirs: ['components'],
        }),
      ],
      css: {
        preprocessorOptions: {
          stylus: {
            // import this file so that is is available for each component
            imports: [path.resolve(__dirname, '../styles/components.styl')],
          },
        },
      },
    };
  },
};
