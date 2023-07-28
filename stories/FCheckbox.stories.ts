import { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import FCheckbox from '@/components/form/FCheckbox.vue';
import FButton from '@/components/FButton.vue';

import type { FCheckboxProps } from '@/components/form/FCheckbox.vue';

export default {
  title: 'Components/Form/FCheckbox',
  component: FCheckbox,
};

const Template = (args: FCheckboxProps) => ({
  components: { FCheckbox },
  setup: () => ({ args }),
  template: '<FCheckbox v-bind="args" />',
});

export const Default: StoryFn<FCheckboxProps> = Template.bind({});
Default.args = {
  label: 'Check me',
  name: 'checkbox',
};

export const Indeterminate: StoryFn<FCheckboxProps> = Template.bind({});
Indeterminate.args = {
  modelValue: null,
  label: 'Indeterminate state',
};

export const Disabled: StoryFn<FCheckboxProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
  name: 'checkbox',
};

export const WithHint: StoryFn<FCheckboxProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  name: 'checkbox',
};

const LinkTemplate = (args: FCheckboxProps) => ({
  components: { FCheckbox },
  setup: () => ({ args }),
  template: `<FCheckbox v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a> 
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FCheckbox>`,
});

export const WithLinks: StoryFn<FCheckboxProps> = LinkTemplate.bind({});
WithLinks.args = {
  name: 'checkbox',
};

export const Error: StoryFn<FCheckboxProps> = Template.bind({});
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
export const FocusProgrammatically: StoryFn<FCheckboxProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
  name: 'checkbox',
};
