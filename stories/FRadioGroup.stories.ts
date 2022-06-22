import { Story } from '@storybook/vue3';
import FRadioGroup, { FRadioGroupProps } from '@/components/FRadioGroup.vue';

export default {
  title: 'Components/Form/FRadioGroup',
  component: FRadioGroup,
  argTypes: {
    displayMode: {
      options: ['vertical', 'horizontal'],
    },
  },
};

const Template = (args: FRadioGroupProps) => ({
  components: { FRadioGroup },
  setup: () => ({ args }),
  template: '<FRadioGroup v-bind="args" />',
});

export const Default: Story<FRadioGroupProps> = Template.bind({});
Default.args = {
  label: 'Pick a fruit',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
    { label: 'Kiwi', value: 'kiwi' },
  ],
};

export const Horizontal: Story<FRadioGroupProps> = Template.bind({});
Horizontal.args = {
  label: 'Pick a fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
    { label: 'Kiwi', value: 'kiwi' },
  ],
};

export const WithHint: Story<FRadioGroupProps> = Template.bind({});
WithHint.args = {
  hint: 'You can use your personal or professional email',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
    { label: 'Kiwi', value: 'kiwi' },
  ],
};

export const Disabled: Story<FRadioGroupProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Pick a fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
    { label: 'Kiwi', value: 'kiwi' },
  ],
};

export const Error: Story<FRadioGroupProps> = Template.bind({});
Error.args = {
  rules: [value => value === 'kiwi'],
  label: 'Pick the greenest fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
    { label: 'Kiwi', value: 'kiwi' },
  ],
  modelValue: 'apple',
  errorMessage: 'Please select the kiwi',
  validateOnMount: true,
};
