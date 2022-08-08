import { Story } from '@storybook/vue3';
import FRadio, { FRadioProps } from '@/components/form/FRadio.vue';
import FButton from '@/components/FButton.vue';
import { ref } from 'vue';

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
};

export const Disabled: Story<FRadioProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
};

export const WithHint: Story<FRadioProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  value: 'newsletter',
};

export const Error: Story<FRadioProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  value: 'privacy-policy',
  errorMessage: 'Select the radio button to dismiss the error',
  rules: [value => value === 'privacy-policy'],
  validateOnMount: true,
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
  label: 'Focus my by clicking on the button',
};
