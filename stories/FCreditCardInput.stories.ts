import { ref } from 'vue';

import FCreditCardInput from '@/components/form/FCreditCardInput.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FCreditCardInputProps } from '@/components/form/FCreditCardInput.vue';

export default {
  title: 'Components/Form/FCreditCardInput',
  component: FCreditCardInput,
};

const Template = (args: FCreditCardInputProps) => ({
  components: { FCreditCardInput },
  setup: () => ({ args }),
  template: '<FCreditCardInput v-bind="args" />',
});

export const Default: StoryFn<FCreditCardInputProps> = Template.bind({});
Default.args = {
  errorMessage: 'The credit card format is not a valid format',
};

export const WithLabel: StoryFn<FCreditCardInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Fill your credit card numbers',
  errorMessage: 'The credit card format is not a valid format',
};

export const WithHint: StoryFn<FCreditCardInputProps> = Template.bind({});
WithHint.args = {
  hint: `All credit cards operations are crypted`,
  hintIcon: 'lock',
  errorMessage: 'The credit card format is not a valid format',
};

export const Full: StoryFn<FCreditCardInputProps> = Template.bind({});
Full.args = {
  label: 'Enter your credit card',
  hint: `All credit cards operations are crypted`,
  hintIcon: 'lock',
  errorMessage: 'The credit card format is not a valid format',
};

export const Error: StoryFn<FCreditCardInputProps> = Template.bind({});
Error.args = {
  label: 'Enter your credit card',
  validateOnMount: true,
  errorMessage: 'Enter any valid number to dismiss the error',
  rules: value => value !== '',
};

export const Disabled: StoryFn<FCreditCardInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter your credit card',
  hint: `All credit cards operations are crypted`,
  hintIcon: 'lock',
  disabled: true,
};

const FocusTemplate = (args: FCreditCardInputProps) => ({
  components: { FCreditCardInput, FButton },
  setup() {
    const creditCardInputRef = ref();
    function focus() {
      creditCardInputRef.value?.focus();
    }
    return { args, focus, creditCardInputRef };
  },
  template: `
<div>
  <FCreditCardInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FCreditCardInputProps> =
  FocusTemplate.bind({});

export const Loading: StoryFn<FCreditCardInputProps> = Template.bind({});
Loading.args = {
  label: 'Enter your credit card',
  hint: `All credit cards operations are crypted`,
  loading: true,
};
