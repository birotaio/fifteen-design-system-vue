import { Story } from '@storybook/vue3';
import FLogoAnimatable, {
  FLogoAnimatableProps,
} from '@/components/FLogoAnimatable.vue';
import { colorDesignTokens } from '@/config/colors';

export default {
  title: 'Components/FLogoAnimatable',
  component: FLogoAnimatable,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
  },
};

const Template = (args: FLogoAnimatableProps) => ({
  components: { FLogoAnimatable },
  setup: () => ({ args }),
  template: '<FLogoAnimatable v-bind="args" />',
});

export const Normal: Story<FLogoAnimatableProps> = Template.bind({});
Normal.args = {
  width: 140,
};

export const Color: Story<FLogoAnimatableProps> = Template.bind({});
Color.args = {
  width: 140,
  color: 'success',
};

export const GrowLines: Story<FLogoAnimatableProps> = Template.bind({});
GrowLines.args = {
  width: 140,
  color: 'success',
  delta: { 4: 200, 6: 500, 12: 320 },
};
