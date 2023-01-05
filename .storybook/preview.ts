import '@/styles/elements.styl';
import '@/styles/theme.styl';
import { app } from '@storybook/vue3';

import { createRouter, createWebHistory } from 'vue-router';

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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/test',
      name: 'test',
      redirect: '/',
    },
    {
      path: '/',
      name: 'root',
      component: null, // it's only a mock
    },
  ],
});

app.use(router);
