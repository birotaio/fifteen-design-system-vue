import { Story } from '@storybook/vue3';
import { ref } from 'vue';

import FCheckbox, { FCheckboxProps } from '@/components/form/FCheckbox.vue';
import FButton from '@/components/FButton.vue';

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
  name: 'checkbox',
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
  name: 'checkbox',
};

export const WithHint: Story<FCheckboxProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  name: 'checkbox',
};

export const WithLinks: Story<FCheckboxProps> = Template.bind({});
WithLinks.args = {
  label:
    'I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank">terms</a> and <a href="https://fifteen.eu/fr/privacy" target="_blank" >privacy policy</a>.',
  linkColor: 'primary',
  name: 'checkbox',
};

export const Error: Story<FCheckboxProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  errorMessage: 'Check the checkbox to dismiss the error',
  rules: [value => value === true],
  validateOnMount: true,
  name: 'checkbox',
};

const FocusTemplate = (args: FCheckboxProps) => ({
  components: { FCheckbox, FButton },
  setup() {
    const checkboxRef = ref();
    function focus() {
      checkboxRef.value?.focus();
    }
    return { args, focus, checkboxRef };
  },
  template: `
<div>
  <FCheckbox ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: Story<FCheckboxProps> = FocusTemplate.bind(
  {}
);
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
  name: 'checkbox',
};
