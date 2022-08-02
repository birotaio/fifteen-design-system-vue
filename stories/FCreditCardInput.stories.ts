import { Story } from '@storybook/vue3';
import FCreditCardInput, {
  FCreditCardInputProps,
} from '@/components/form/FCreditCardInput.vue';

export default {
  title: 'Components/Form/FCreditCardInput',
  component: FCreditCardInput,
};

const Template = (args: FCreditCardInputProps) => ({
  components: { FCreditCardInput },
  setup: () => ({ args }),
  template: '<FCreditCardInput v-bind="args" />',
});

export const Default: Story<FCreditCardInputProps> = Template.bind({});
Default.args = {
  errorMessage: 'The credit card format is not a valid format',
};

export const WithLabel: Story<FCreditCardInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Fill your credit card numbers',
  errorMessage: 'The credit card format is not a valid format',
};

export const WithHint: Story<FCreditCardInputProps> = Template.bind({});
WithHint.args = {
  hint: `All credit cards operations are crypted`,
  errorMessage: 'The credit card format is not a valid format',
};

export const Full: Story<FCreditCardInputProps> = Template.bind({});
Full.args = {
  label: 'Enter you credit card',
  hint: `All credit cards operations are crypted`,
  errorMessage: 'The credit card format is not a valid format',
};

export const Error: Story<FCreditCardInputProps> = Template.bind({});
Error.args = {
  label: 'Enter you credit card',
  validateOnMount: true,
  errorMessage: 'Enter any valid number to dismiss the error',
  rules: value => value !== '',
};

export const Disabled: Story<FCreditCardInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter you credit card',
  hint: `All credit cards operations are crypted`,
  disabled: true,
};
