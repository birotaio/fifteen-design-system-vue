import { createRouter, createWebHistory } from 'vue-router';

import '@/styles/elements.styl';
import '@/styles/theme.styl';
import { setup } from '@storybook/vue3';

import { createFds } from '../src/createFds';
import { icons, flagIcons, creditCardIcons } from '../src/icons';

import type { App } from 'vue';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'neutral',
    values: [
      {
        name: 'neutral',
        value: '#FFFFFF',
      },
      {
        name: 'primary',
        value: '#FF0062',
      },
      {
        name: 'secondary',
        value: '#012433',
      },
      {
        name: 'success',
        value: '#83DEC9',
      },
      {
        name: 'info',
        value: '#A900E7',
      },
    ],
  },
};

export const decorators = [
  story => ({
    components: { story },
    template: '<div class="Fifteen"><story /></div>',
  }),
];

const vueRouter = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'test',
      redirect: '/',
    },
    {
      path: '/',
      component: {},
    },
  ],
});

const fds = createFds({
  icons,
  flagIcons,
  creditCardIcons,
});

setup((app: App) => {
  app.use(vueRouter);
  app.use(fds);
});
