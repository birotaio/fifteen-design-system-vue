import { Story } from '@storybook/vue3';
import FTextarea, { FTextareaProps } from '@/components/FTextarea.vue';

export default {
  title: 'Components/FTextarea',
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

export const WithHint: Story<FTextareaProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'success' },
};
WithHint.args = {
  placeholder: 'Email address',
  hint: 'You can use your personal or professional email',
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
  placeholder: 'Email address',
  rules: [() => false],
  validateOnMount: true,
  errorMessage: 'This field as an error',
  hint: 'You can use your personal or professional email',
};

export const Disabled: Story<FTextareaProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
};
