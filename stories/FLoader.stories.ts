import { Story } from '@storybook/vue3';

import FLoader, { FLoaderProps } from '@/components/FLoader.vue';

export default {
  title: 'Components/FLoader',
  component: FLoader,
};

const Template = (args: FLoaderProps) => ({
  components: { FLoader },
  setup: () => ({ args }),
  template: '<FLoader v-bind="args" />',
});

export const Default: Story<FLoaderProps> = Template.bind({});
Default.args = {
  width: '64px',
  height: '64px',
};
