import { createRouter, createWebHistory } from 'vue-router';

import '@/styles/elements.styl';
import '@/styles/theme.styl';
import { setup } from '@storybook/vue3-vite';

import { createFds } from '../src/createFds';

import type { App } from 'vue';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  backgrounds: {
    options: {
      neutral: {
        name: 'neutral',
        value: '#FFFFFF',
      },

      primary: {
        name: 'primary',
        value: '#FF0062',
      },

      secondary: {
        name: 'secondary',
        value: '#012433',
      },

      success: {
        name: 'success',
        value: '#83DEC9',
      },

      info: {
        name: 'info',
        value: '#A900E7',
      }
    }
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

// No icon is registered _a priori_ so we can test that
// each component is registering its own icons properly
const fds = createFds();

setup((app: App) => {
  app.use(vueRouter);
  app.use(fds);
});

export const initialGlobals = {
  backgrounds: {
    value: 'neutral'
  }
};
export const tags = ['autodocs'];
