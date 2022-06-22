import { Story } from '@storybook/vue3';
import FInput, { FInputProps } from '@/components/FInput.vue';
import { mask, required } from '@/rules';

export default {
  title: 'Components/Form/FInput',
  component: FInput,
  argTypes: {
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
  },
};

const Template = (args: FInputProps) => ({
  components: { FInput },
  setup: () => ({ args }),
  template: '<FInput v-bind="args" />',
});

export const Default: Story<FInputProps> = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'primary' },
};
Default.args = {
  placeholder: 'Email address',
};

export const WithLabel: Story<FInputProps> = Template.bind({});
WithLabel.parameters = {
  backgrounds: { default: 'primary' },
};
WithLabel.args = {
  label: 'Email address',
  placeholder: 'contact@fifteen.eu',
};

export const WithHint: Story<FInputProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'success' },
};
WithHint.args = {
  placeholder: 'Email address',
  hint: 'You can use your personal or professional email',
};

export const Full: Story<FInputProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'success' },
};
Full.args = {
  label: 'Email address',
  placeholder: 'contact@fifteen.eu',
  hint: 'You can use your personal or professional email',
};

export const Error: Story<FInputProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'secondary' },
};
Error.args = {
  placeholder: 'Fifteen',
  label: 'Fifteen input',
  labelTextColor: 'neutral--light-5',
  rules: [value => value === 'Fifteen'],
  errorMessage: 'Please type Fifteen',
  validateOnMount: true,
};

export const Disabled: Story<FInputProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
};

export const Mask: Story<FInputProps> = Template.bind({});
Mask.args = {
  label: 'Birth date',
  placeholder: 'DD/MM/YYYY',
  mask: '##/##/####',
  errorColor: 'danger',
  errorMessage: 'Birth date is not valid',
  rules: [required, value => mask(value, '##/##/####')],
};
