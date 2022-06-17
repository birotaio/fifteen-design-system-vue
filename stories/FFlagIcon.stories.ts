import { Story } from '@storybook/vue3';
import FFlagIcon, { FFlagIconProps } from '@/components/FFlagIcon.vue';

export default {
  title: 'Components/FFlagIcon',
  component: FFlagIcon,
};

const Template = (args: FFlagIconProps) => ({
  components: { FFlagIcon },
  setup: () => ({ args }),
  template: '<FFlagIcon v-bind="args" />',
});

export const Default: Story<FFlagIconProps> = Template.bind({});
Default.args = {
  countryCode: 'FR',
};
