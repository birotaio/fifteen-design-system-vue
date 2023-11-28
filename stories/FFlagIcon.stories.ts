import FsFlagGrid from './components/FsFlagGrid.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FsFlagGridProps } from './components/FsFlagGrid.vue';

export default {
  title: 'Components/FFlagIcon',
  component: FsFlagGrid,
};

const Template = (args: FsFlagGridProps) => ({
  components: { FsFlagGrid },
  setup: () => ({ args }),
  template: '<FsFlagGrid v-bind="args" />',
});

export const Default: StoryFn<FsFlagGridProps> = Template.bind({});
Default.args = {
  size: 32,
};
