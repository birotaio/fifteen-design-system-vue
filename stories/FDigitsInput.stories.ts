import FDigitsInput from '@/components/form/FDigitsInput.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FDigitsInputProps } from '@/components/form/FDigitsInput.vue';

export default {
  title: 'Components/Form/FDigitsInput',
  component: FDigitsInput,
};

const Template = (args: FDigitsInputProps) => ({
  components: { FDigitsInput },
  setup: () => ({ args }),
  template: '<FDigitsInput v-bind="args" />',
});

export const Default: StoryFn<FDigitsInputProps> = Template.bind({});
Default.args = {
  label: 'Enter validation code',
};

export const WithLabel: StoryFn<FDigitsInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter validation code',
};

export const WithHint: StoryFn<FDigitsInputProps> = Template.bind({});
WithHint.args = {
  hint: 'Check the SMS on your phone',
};

export const Full: StoryFn<FDigitsInputProps> = Template.bind({});
Full.args = {
  label: 'Enter validation code',
  hint: 'Check your SMS',
};

export const Error: StoryFn<FDigitsInputProps> = Template.bind({});
Error.args = {
  digits: 5,
  rules: [value => value === '12345'],
  errorMessage: 'Type "12345" to dismiss the error',
  validateOnMount: true,
};

export const Disabled: StoryFn<FDigitsInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter validation code',
  hint: 'Check your SMS',
  disabled: true,
};

export const Loading: StoryFn<FDigitsInputProps> = Template.bind({});
Loading.args = {
  label: 'Enter validation code',
  hint: 'Check your SMS',
  loading: true,
};

const FocusTemplate = (args: FDigitsInputProps) => ({
  components: { FDigitsInput, FButton },
  setup() {
    const digitsInputRef = ref();
    function focus() {
      digitsInputRef.value?.focus();
    }
    return { args, focus, digitsInputRef };
  },
  template: `
<div>
  <FDigitsInput ref="digitsInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FDigitsInputProps> =
  FocusTemplate.bind({});
