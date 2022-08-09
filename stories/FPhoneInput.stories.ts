import { Story } from '@storybook/vue3';
import FPhoneInput, {
  FPhoneInputProps,
} from '@/components/form/FPhoneInput.vue';
import FButton from '@/components/FButton.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Form/FPhoneInput',
  component: FPhoneInput,
};

const Template = (args: FPhoneInputProps) => ({
  components: { FPhoneInput },
  setup: () => ({ args }),
  template: '<FPhoneInput v-bind="args" />',
});

export const Default: Story<FPhoneInputProps> = Template.bind({});
Default.args = {
  errorMessage: 'The phone number does not match the expected format',
};

export const WithLabel: Story<FPhoneInputProps> = Template.bind({});
WithLabel.args = {
  label: 'Enter you phone number',
  errorMessage: 'The phone number does not match the expected format',
};

export const WithHint: Story<FPhoneInputProps> = Template.bind({});
WithHint.args = {
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Full: Story<FPhoneInputProps> = Template.bind({});
Full.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  errorMessage: 'The phone number does not match the expected format',
};

export const Error: Story<FPhoneInputProps> = Template.bind({});
Error.args = {
  label: 'Enter you phone number',
  validateOnMount: true,
  errorMessage: 'Enter any valid number to dismiss the error',
};

export const Disabled: Story<FPhoneInputProps> = Template.bind({});
Disabled.args = {
  label: 'Enter you phone number',
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
export const FocusProgrammatically: Story<FPhoneInputProps> =
  FocusTemplate.bind({});

export const Loading: Story<FPhoneInputProps> = Template.bind({});
Loading.args = {
  label: 'Enter you phone number',
  hint: `Don't forget to pick the right prefix`,
  loading: true,
};