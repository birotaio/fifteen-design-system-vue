import { Story } from '@storybook/vue3';
import FPhoneInput, { FPhoneInputProps } from '@/components/FPhoneInput.vue';

export default {
  title: 'Components/FPhoneInput',
  component: FPhoneInput,
};

const Template = (args: FPhoneInputProps) => ({
  components: { FPhoneInput },
  setup: () => ({ args }),
  template: '<FPhoneInput v-bind="args" />',
});

export const Default: Story<FPhoneInputProps> = Template.bind({});
Default.args = {
  placeholder: '6 66 66 66 66',
};

export const WithLabel: Story<FPhoneInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter you phone number',
  placeholder: '6 66 66 66 66',
};

export const WithHint: Story<FPhoneInputProps> = Template.bind({});
WithHint.args = {
  hint: `Don't forget to pick the right prefix`,
  placeholder: '6 66 66 66 66',
};

export const Full: Story<FPhoneInputProps> = Template.bind({});
Full.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  placeholder: '6 66 66 66 66',
};

export const Error: Story<FPhoneInputProps> = Template.bind({});
Error.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  placeholder: '6 66 66 66 66',
  rules: [() => false],
  validateOnMount: true,
  errorMessage: 'The phone number does not respect the format',
};

export const Disabled: Story<FPhoneInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  placeholder: '6 66 66 66 66',
  errorMessage: 'The phone number does not respect the format',
  disabled: true,
};
