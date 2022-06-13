import { Story } from '@storybook/vue3';
import FCheckbox, { FCheckboxProps } from '@/components/FCheckbox.vue';

export default {
  title: 'Components/Form/FCheckbox',
  component: FCheckbox,
};

const Template = (args: FCheckboxProps) => ({
  components: { FCheckbox },
  setup: () => ({ args }),
  template: '<FCheckbox v-bind="args" />',
});

export const Default: Story<FCheckboxProps> = Template.bind({});
Default.args = {
  label: 'Check me',
};

export const Indeterminate: Story<FCheckboxProps> = Template.bind({});
Indeterminate.args = {
  modelValue: null,
  label: 'Indeterminate state',
};

export const Disabled: Story<FCheckboxProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
};

export const WithHint: Story<FCheckboxProps> = Template.bind({});
WithHint.args = {
  modelValue: false,
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter.',
};

export const Error: Story<FCheckboxProps> = Template.bind({});
Error.args = {
  modelValue: false,
  label: 'I agree with the privacy policy',
  errorMessage: 'You must accept the privacy policy.',
  rules: [() => false],
  validateOnMount: true,
};
