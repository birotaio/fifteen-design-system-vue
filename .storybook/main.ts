import path from 'path';
import { UserConfig, loadConfigFromFile, mergeConfig } from 'vite';

export default {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },

  async viteFinal(baseConfig) {
    const { config: userConfig } = (await loadConfigFromFile(
      { command: 'serve', mode: 'production' },
      path.resolve(__dirname, '../vite.config.ts')
    )) as { config: UserConfig };

    // Base config and FDS vite config are both registering vite:vue, which causes issues
    baseConfig.plugins = (baseConfig.plugins ?? []).filter(
      plugin => plugin && plugin.name !== 'vite:vue'
    );

    return mergeConfig(baseConfig, userConfig ?? {});
  },
  docs: {
    autodocs: true,
  },
};
