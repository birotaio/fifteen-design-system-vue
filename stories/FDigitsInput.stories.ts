import { Story } from '@storybook/vue3';
import FDigitsInput, { FDigitsInputProps } from '@/components/FDigitsInput.vue';

export default {
  title: 'Components/Form/FDigitsInput',
  component: FDigitsInput,
};

const Template = (args: FDigitsInputProps) => ({
  components: { FDigitsInput },
  setup: () => ({ args }),
  template: '<FDigitsInput v-bind="args" />',
});

export const Default: Story<FDigitsInputProps> = Template.bind({});
Default.args = {
  label: 'Enter validation code',
};

export const WithLabel: Story<FDigitsInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter validation code',
};

export const WithHint: Story<FDigitsInputProps> = Template.bind({});
WithHint.args = {
  hint: 'Check the SMS on your phone',
};

export const Full: Story<FDigitsInputProps> = Template.bind({});
Full.args = {
  label: 'Enter validation code',
  hint: 'Check your SMS',
};

export const Error: Story<FDigitsInputProps> = Template.bind({});
Error.args = {
  digits: 5,
  rules: [value => value === '12345'],
  errorMessage: 'Please type 12345',
  validateOnMount: true,
};

export const Disabled: Story<FDigitsInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter validation code',
  disabled: true,
  hint: 'Check your SMS',
};
