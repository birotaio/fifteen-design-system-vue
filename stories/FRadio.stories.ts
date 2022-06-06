import { Story } from '@storybook/vue3';
import FRadio, { FRadioProps } from '@/components/FRadio.vue';

export default {
  title: 'Components/FRadio',
  component: FRadio,
  argTypes: {
    modelValue: {
      type: 'boolean',
    },
  },
};

const Template = (args: FRadioProps) => ({
  components: { FRadio },
  setup: () => ({ args }),
  template: '<FRadio v-bind="args" />',
});

export const Default: Story<FRadioProps> = Template.bind({});
Default.args = {
  label: 'Check me',
};

export const Disabled: Story<FRadioProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
};

export const WithHint: Story<FRadioProps> = Template.bind({});
WithHint.args = {
  modelValue: false,
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter.',
};

export const Error: Story<FRadioProps> = Template.bind({});
Error.args = {
  modelValue: false,
  label: 'I agree with the privacy policy',
  errorMessage: 'You must accept the privacy policy.',
  rules: [() => false],
  validateOnMount: true,
};
