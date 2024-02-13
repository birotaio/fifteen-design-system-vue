import FRadio from '@/components/form/FRadio.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FRadioProps } from '@/components/form/FRadio.vue';
import type { FCheckboxProps } from '@/components/form/FCheckbox.vue';

export default {
  title: 'Components/Form/FRadio',
  component: FRadio,
};

const Template = (args: FRadioProps) => ({
  components: { FRadio },
  setup: () => ({ args }),
  template: '<FRadio v-bind="args" />',
});

export const Default: StoryFn<FRadioProps> = Template.bind({});
Default.args = {
  label: 'Check me',
  value: 'check-me',
  name: 'radio',
};

export const Disabled: StoryFn<FRadioProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
  name: 'radio',
};

export const WithHint: StoryFn<FRadioProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  value: 'newsletter',
  name: 'radio',
};

const LinkTemplate = (args: FRadioProps) => ({
  components: { FRadio },
  setup: () => ({ args }),
  template: `
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/smart-station" target="_blank" style="color:var(--color--primary);">smart station</a>
    </template>
  </FRadio>
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/electric-bike" target="_blank" style="color:var(--color--primary);">electric bikes</a>
    </template>
  </FRadio>`,
});

export const WithLinks: StoryFn<FCheckboxProps> = LinkTemplate.bind({});
WithLinks.args = {
  name: 'checkbox',
};

export const Error: StoryFn<FRadioProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  value: 'privacy-policy',
  errorMessage: 'Select the radio button to dismiss the error',
  rules: [value => value === 'privacy-policy'],
  validateOnMount: true,
  name: 'radio',
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
export const FocusProgrammatically: StoryFn<FRadioProps> = FocusTemplate.bind(
  {}
);
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
  name: 'radio',
};
