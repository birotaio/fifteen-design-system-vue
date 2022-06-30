import { Story } from '@storybook/vue3';
import FTextarea, { FTextareaProps } from '@/components/form/FTextarea.vue';

export default {
  title: 'Components/Form/FTextarea',
  component: FTextarea,
  argTypes: {
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
  },
};

const Template = (args: FTextareaProps) => ({
  components: { FTextarea },
  setup: () => ({ args }),
  template: '<FTextarea v-bind="args" />',
});

export const Default: Story<FTextareaProps> = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'primary' },
};
Default.args = {
  placeholder: 'Email address',
};

export const WithLabel: Story<FTextareaProps> = Template.bind({});
WithLabel.parameters = {
  backgrounds: { default: 'success' },
};
WithLabel.args = {
  label: 'Contact motivation',
  placeholder: 'I contact you today because...',
};

export const WithHint: Story<FTextareaProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'success' },
};
WithHint.args = {
  placeholder: 'I contact you today because...',
  hint: 'Feel free to write anything',
};

export const Full: Story<FTextareaProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'success' },
};
Full.args = {
  label: 'Contact motivation',

  placeholder: 'I contact you today because...',
  hint: 'Feel free to write anything',
};

export const Error: Story<FTextareaProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'secondary' },
};
Error.args = {
  placeholder: 'Email address',
  rules: [() => false],
  validateOnMount: true,
  hideHint: true,
};

export const ErrorWithHint: Story<FTextareaProps> = Template.bind({});
ErrorWithHint.parameters = {
  backgrounds: { default: 'secondary' },
};
ErrorWithHint.args = {
  placeholder: 'Augmented Bike Networks',
  rules: [value => value === 'Augmented Bike Networks'],
  validateOnMount: true,
  errorMessage: `Type "Augmented Bike Networks" to dismiss the error`,
};

export const Disabled: Story<FTextareaProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
};
