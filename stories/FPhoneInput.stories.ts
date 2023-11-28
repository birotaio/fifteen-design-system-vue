import { ref } from 'vue';
import { required } from '@vee-validate/rules';

import FPhoneInput from '@/components/form/FPhoneInput.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FPhoneInputProps } from '@/components/form/FPhoneInput.vue';

export default {
  title: 'Components/Form/FPhoneInput',
  component: FPhoneInput,
};

const Template = (args: FPhoneInputProps) => ({
  components: { FPhoneInput },
  setup: () => ({ args }),
  template: '<FPhoneInput v-bind="args" />',
});

export const Default: StoryFn<FPhoneInputProps> = Template.bind({});
Default.args = {
  errorMessage: 'The phone number does not match the expected format',
  rules: [required],
};

export const WithLabel: StoryFn<FPhoneInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter your phone number',
  errorMessage: 'The phone number does not match the expected format',
};

export const WithHint: StoryFn<FPhoneInputProps> = Template.bind({});
WithHint.args = {
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Full: StoryFn<FPhoneInputProps> = Template.bind({});
Full.args = {
  label: 'Enter your phone number',
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Error: StoryFn<FPhoneInputProps> = Template.bind({});
Error.args = {
  label: 'Enter your phone number',
  validateOnMount: true,
  errorMessage:
    'A phone number is required. Enter any valid number to dismiss the error',
  rules: [required],
};

export const Disabled: StoryFn<FPhoneInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter your phone number',
  hint: `Don't forget to pick the right prefix`,
  disabled: true,
};

const FocusTemplate = (args: FPhoneInputProps) => ({
  components: { FPhoneInput, FButton },
  setup() {
    const phoneInputRef = ref();
    function focus() {
      phoneInputRef.value?.focus();
    }
    return { args, focus, phoneInputRef };
  },
  template: `
<div>
  <FPhoneInput ref="phoneInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FPhoneInputProps> =
  FocusTemplate.bind({});

export const Loading: StoryFn<FPhoneInputProps> = Template.bind({});
Loading.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  loading: true,
};
