import { Story } from '@storybook/vue3';
import FDigitsInput, { FDigitsInputProps } from '@/components/FDigitsInput.vue';

export default {
  title: 'Components/FDigitsInput',
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
  hint: 'Check your SMS',
  digits: 5,
  inputRules: [
    value => {
      return /[0-9]{1}/.test(value as string);
    },
  ],
  rules: [
    value => {
      return /[0-9]{5}/.test(value as string);
    },
  ],
  errorMessage: 'Your confirmation code in incorrect',
  validateOnMount: true,
};
