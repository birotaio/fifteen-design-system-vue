import FsIconGrid, {
  FsIconGridProps,
} from '@@/stories/components/FsIconGrid.vue';
import { Story } from '@storybook/vue3';
import { colorDesignTokens } from '@/constants/colors';

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

export const Default: Story<FsIconGridProps> = Template.bind({});
Default.args = {
  color: 'primary',
};

export const Secondary: Story<FsIconGridProps> = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Danger: Story<FsIconGridProps> = Template.bind({});
Danger.args = {
  color: 'danger',
};
