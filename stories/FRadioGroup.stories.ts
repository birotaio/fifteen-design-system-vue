import { StoryFn } from '@storybook/vue3';
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

export const Default: StoryFn<FRadioGroupProps> = Template.bind({});
Default.args = {
  label: 'Pick a fruit',
  options: [
    { label: 'Apple', value: 'apple', name: 'apple' },
    { label: 'Banana', value: 'banana', name: 'banana' },
    { label: 'Pear', value: 'pear', name: 'pear' },
    { label: 'Kiwi', value: 'kiwi', name: 'kiwi' },
  ],
};

export const Horizontal: StoryFn<FRadioGroupProps> = Template.bind({});
Horizontal.args = {
  label: 'Pick a fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple', name: 'apple' },
    { label: 'Banana', value: 'banana', name: 'banana' },
    { label: 'Pear', value: 'pear', name: 'pear' },
    { label: 'Kiwi', value: 'kiwi', name: 'kiwi' },
  ],
};

export const WithHint: StoryFn<FRadioGroupProps> = Template.bind({});
WithHint.args = {
  hint: 'Choose your favorite fruit 🍏 🍌 🍐 🥝 ',
  options: [
    { label: 'Apple', value: 'apple', name: 'apple' },
    { label: 'Banana', value: 'banana', name: 'banana' },
    { label: 'Pear', value: 'pear', name: 'pear' },
    { label: 'Kiwi', value: 'kiwi', name: 'kiwi' },
  ],
};

export const Disabled: StoryFn<FRadioGroupProps> = Template.bind({});
Disabled.args = {
  disabled: true,
  label: 'Pick a fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple', name: 'apple' },
    { label: 'Banana', value: 'banana', name: 'banana' },
    { label: 'Pear', value: 'pear', name: 'pear' },
    { label: 'Kiwi', value: 'kiwi', name: 'kiwi' },
  ],
};

export const Error: StoryFn<FRadioGroupProps> = Template.bind({});
Error.args = {
  rules: [value => value === 'kiwi'],
  label: 'Pick the greenest fruit',
  displayMode: 'horizontal',
  options: [
    { label: 'Apple', value: 'apple', name: 'apple' },
    { label: 'Banana', value: 'banana', name: 'banana' },
    { label: 'Pear', value: 'pear', name: 'pear' },
    { label: 'Kiwi', value: 'kiwi', name: 'kiwi' },
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
export const FocusProgrammatically: StoryFn<FRadioGroupProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  options: [
    { label: 'Option A', value: 'a', name: 'a' },
    { label: 'Option B', value: 'b', name: 'b' },
    { label: 'Option C', value: 'c', name: 'c' },
  ],
};
