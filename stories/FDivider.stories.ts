import { Story } from '@storybook/vue3';

import FDivider, { FDividerProps } from '@/components/FDivider.vue';
import { colorDesignTokens } from '@/constants/colors';

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

export const Default: Story<FDividerProps> = Template.bind({});

export const Vertical: Story<FDividerProps> = Template.bind({});
Vertical.args = {
  vertical: true,
  height: '400px',
  color: 'danger--dark-1',
};

export const Light: Story<FDividerProps> = Template.bind({});
Light.parameters = {
  backgrounds: { default: 'secondary' },
};
Light.args = {
  theme: 'light',
};

export const Dark: Story<FDividerProps> = Template.bind({});
Dark.args = {
  theme: 'dark',
};

export const Primary: Story<FDividerProps> = Template.bind({});
Primary.args = {
  color: 'primary',
};
