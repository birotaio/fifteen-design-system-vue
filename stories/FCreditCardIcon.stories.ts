import { StoryFn } from '@storybook/vue3';

import FsCreditCardIconsGrid from './components/FsCreditCardIconsGrid.vue';

import type { FsCreditCardIconGridProps } from './components/FsCreditCardIconsGrid.vue';

export default {
  title: 'Components/FCreditCardIcon',
  component: FsCreditCardIconsGrid,
};

const Template = (args: FsCreditCardIconGridProps) => ({
  components: { FsCreditCardIconsGrid },
  setup: () => ({ args }),
  template: '<FsCreditCardIconsGrid v-bind="args" />',
});

export const Default: StoryFn<FsCreditCardIconGridProps> = Template.bind({});
Default.args = {
  size: 32,
};
