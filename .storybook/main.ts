const path = require('path');
const ViteSvgLoader = require('vite-svg-loader');
const AutoImport = require('unplugin-auto-import/vite');
module.exports = {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal(config) {
    config.base = './';
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@': path.resolve(__dirname, '../src'),
          '@@': path.resolve(__dirname, '..')
        }
      },
      plugins: [...config.plugins, ViteSvgLoader(), AutoImport({
        imports: ['vue-router']
      })],
      css: {
        preprocessorOptions: {
          stylus: {
            // import this file so that is is available for each component
            imports: [path.resolve(__dirname, '../src/styles/components.styl')]
          }
        }
      }
    };
  },
  docs: {
    autodocs: true
  }
};