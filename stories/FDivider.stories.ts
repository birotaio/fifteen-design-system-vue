
import FDivider from '@/components/FDivider.vue';
import { colorDesignTokens } from '@/constants/colors';

import type { StoryFn } from '@storybook/vue3';
import type { FDividerProps } from '@/components/FDivider.vue';

export default {
  title: 'Components/FDivider',
  component: FDivider,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
  },
};

const Template = (args: FDividerProps) => ({
  components: { FDivider },
  setup: () => ({ args }),
  template: '<FDivider v-bind="args" />',
});

export const Default: StoryFn<FDividerProps> = Template.bind({});

export const Vertical: StoryFn<FDividerProps> = Template.bind({});
Vertical.args = {
  vertical: true,
  height: '400px',
  color: 'danger--dark-1',
};

export const Light: StoryFn<FDividerProps> = Template.bind({});
Light.parameters = {
  backgrounds: { default: 'secondary' },
};
Light.args = {
  theme: 'light',
};

export const Dark: StoryFn<FDividerProps> = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const Primary: StoryFn<FDividerProps> = Template.bind({});
Primary.args = {
  color: 'primary',
};
