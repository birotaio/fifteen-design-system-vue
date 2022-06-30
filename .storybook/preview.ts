import '@/styles/elements.styl';
import '@/styles/theme.styl';

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
