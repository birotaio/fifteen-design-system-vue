import FLoader from '@/components/FLoader.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FLoaderProps } from '@/components/FLoader.vue';

export default {
  title: 'Components/FLoader',
  component: FLoader,
};

const Template = (args: FLoaderProps) => ({
  components: { FLoader },
  setup: () => ({ args }),
  template: '<FLoader v-bind="args" />',
});

export const Default: StoryFn<FLoaderProps> = Template.bind({});
Default.args = {
  width: '64px',
  height: '64px',
};
