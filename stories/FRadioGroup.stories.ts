import { Story } from '@storybook/vue3';
import { ref } from 'vue';

import FRadioGroup, {
  FRadioGroupProps,
} from '@/components/form/FRadioGroup.vue';
import FButton from '@/components/FButton.vue';

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
  errorMessage: 'Select "kiwi" to dismiss the error',
  validateOnMount: true,
};

const FocusTemplate = (args: FRadioGroupProps) => ({
  components: { FRadioGroup, FButton },
  setup() {
    const radioGroupRef = ref();
    function focus() {
      radioGroupRef.value?.focus();
    }
    return { args, focus, radioGroupRef };
  },
  template: `
<div>
  <FRadioGroup ref="radioGroupRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: Story<FRadioGroupProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  options: [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ],
};
