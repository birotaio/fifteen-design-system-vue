import { Story } from '@storybook/vue3';
import { ref } from 'vue';

import FRadio, { FRadioProps } from '@/components/form/FRadio.vue';
import FButton from '@/components/FButton.vue';

export default {
  title: 'Components/Form/FRadio',
  component: FRadio,
};

const Template = (args: FRadioProps) => ({
  components: { FRadio },
  setup: () => ({ args }),
  template: '<FRadio v-bind="args" />',
});

export const Default: Story<FRadioProps> = Template.bind({});
Default.args = {
  label: 'Check me',
  value: 'check-me',
  name: 'radio'
};

export const Disabled: Story<FRadioProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
  name: 'radio'
};

export const WithHint: Story<FRadioProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  value: 'newsletter',
  name: 'radio'
};

export const Error: Story<FRadioProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  value: 'privacy-policy',
  errorMessage: 'Select the radio button to dismiss the error',
  rules: [value => value === 'privacy-policy'],
  validateOnMount: true,
  name: 'radio'
};

const FocusTemplate = (args: FRadioProps) => ({
  components: { FRadio, FButton },
  setup() {
    const radioRef = ref();
    function focus() {
      radioRef.value?.focus();
    }
    return { args, focus, radioRef };
  },
  template: `
<div>
  <FRadio ref="radioRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: Story<FRadioProps> = FocusTemplate.bind({});
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
  name: 'radio'
};
