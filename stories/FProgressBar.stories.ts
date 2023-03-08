import { Story } from '@storybook/vue3';

import { colorDesignTokens } from '@/constants/colors';
import FProgressBar, { FProgressBarProps } from '@/components/FProgressBar.vue';

export default {
  title: 'Components/FProgressBar',
  component: FProgressBar,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
  },
};

const Template = (args: FProgressBarProps) => ({
  components: { FProgressBar },
  setup: () => ({ args }),
  template: '<FProgressBar v-bind="args" />',
});

export const Default: Story<FProgressBarProps> = Template.bind({});
Default.args = {
  value: 20,
};

export const Larger: Story<FProgressBarProps> = Template.bind({});
Larger.args = {
  color: 'info',
  height: '20px',
  value: 60,
};
