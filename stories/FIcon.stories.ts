import FsIconGrid from '@@/stories/components/FsIconGrid.vue';
import { StoryFn } from '@storybook/vue3';

import { colorDesignTokens } from '@/constants/colors';

import type { FsIconGridProps } from '@@/stories/components/FsIconGrid.vue';

export default {
  title: 'Components/FIcon',
  component: FsIconGrid,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
    size: { type: 'number' },
  },
  args: {
    size: 44,
    strokeWidth: 0,
  },
};

const Template = (args: FsIconGridProps) => ({
  components: { FsIconGrid },
  setup: () => ({ args }),
  template: '<FsIconGrid v-bind="args" />',
});

export const Default: StoryFn<FsIconGridProps> = Template.bind({});
Default.args = {
  color: 'primary',
};

export const Secondary: StoryFn<FsIconGridProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Danger: StoryFn<FsIconGridProps> = Template.bind({});
Danger.args = {
  color: 'danger',
};
