import { Story } from '@storybook/vue3';
import FInput, { FInputProps } from '@/components/FInput.vue';

export default {
  title: 'Components/FInput',
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
  name: 'test-input',
  hint: 'You can use your personal or professional email',
};

export const Full: Story<FInputProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'success' },
};
Full.args = {
  label: 'Email address',
  placeholder: 'contact@&fifteen.eu',
  hint: 'You can use your personal or professional email',
};

export const Error: Story<FInputProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'secondary' },
};
Error.args = {
  placeholder: 'Email address',
  rules: [() => false],
  errorMessage: 'This field has an error',
  validateOnMount: true,
};

export const Disabled: Story<FInputProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
};
