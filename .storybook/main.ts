// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from 'node:url';
import path, { dirname } from 'path';
import { UserConfig, loadConfigFromFile, mergeConfig } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  stories: ['../stories/**/*.stories.ts'],
  addons: ['@storybook/addon-links', '@storybook/addon-docs'],

  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },

  async viteFinal(baseConfig) {
    baseConfig.base = './';

    const { config: userConfig } = (await loadConfigFromFile(
      { command: 'serve', mode: 'production' },
      path.resolve(__dirname, '../vite.config.ts')
    )) as { config: UserConfig };

    // Base config and FDS vite config are both registering vite:vue, which causes issues
    baseConfig.plugins = (baseConfig.plugins ?? []).filter(
      plugin => plugin && plugin.name !== 'vite:vue'
    );

    // Exclude build config: vite.config is for the library (formats: es, cjs), not Storybook
    const { build: _build, ...storybookSafeConfig } = userConfig ?? {};

    return mergeConfig(baseConfig, storybookSafeConfig);
  },
};
