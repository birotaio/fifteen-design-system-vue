import { Story } from '@storybook/vue3';
import FPhoneInput, { FPhoneInputProps } from '@/components/FPhoneInput.vue';

export default {
  title: 'Components/Form/FPhoneInput',
  component: FPhoneInput,
};

const Template = (args: FPhoneInputProps) => ({
  components: { FPhoneInput },
  setup: () => ({ args }),
  template: '<FPhoneInput v-bind="args" />',
});

export const Default: Story<FPhoneInputProps> = Template.bind({});
Default.args = {
  errorMessage: 'The phone number does not match the expected format',
};

export const WithLabel: Story<FPhoneInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter you phone number',
  errorMessage: 'The phone number does not match the expected format',
};

export const WithHint: Story<FPhoneInputProps> = Template.bind({});
WithHint.args = {
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Full: Story<FPhoneInputProps> = Template.bind({});
Full.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Error: Story<FPhoneInputProps> = Template.bind({});
Error.args = {
  label: 'Enter you phone number',
  rules: [value => value !== ''],
  validateOnMount: true,
  errorMessage: 'Please input a number',
};

export const Disabled: Story<FPhoneInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  disabled: true,
};
