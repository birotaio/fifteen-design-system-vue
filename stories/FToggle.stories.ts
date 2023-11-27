import { ref } from 'vue';

import FToggle from '@/components/form/FToggle.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FToggleProps } from '@/components/form/FToggle.vue';

export default {
  title: 'Components/Form/FToggle',
  component: FToggle,
};

const Template = (args: FToggleProps) => ({
  components: { FToggle },
  setup: () => ({ args }),
  template: '<FToggle v-bind="args" />',
});

export const Default: StoryFn<FToggleProps> = Template.bind({});
Default.args = {
  label: 'Check me',
};

export const Disabled: StoryFn<FToggleProps> = Template.bind({});
Disabled.args = {
  label: 'The toggle is disabled',
  disabled: true,
};

export const WithHint: StoryFn<FToggleProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Toggle on if you want to receive our amazing newsletter',
};

const LinkTemplate = (args: FToggleProps) => ({
  components: { FToggle },
  setup: () => ({ args }),
  template: `<FToggle v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FToggle>`,
});

export const WithLinks: StoryFn<FToggleProps> = LinkTemplate.bind({});
WithLinks.args = {};

export const Error: StoryFn<FToggleProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  errorMessage: 'Check the checkbox to dismiss the error',
  rules: [value => value === true],
  validateOnMount: true,
};

const FocusTemplate = (args: FToggleProps) => ({
  components: { FToggle, FButton },
  setup() {
    const toggleRef = ref();
    function focus() {
      toggleRef.value?.focus();
    }
    return { args, focus, toggleRef };
  },
  template: `
<div>
  <FToggle ref="toggleRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FToggleProps> = FocusTemplate.bind(
  {}
);
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
};

export const NoCheckmarkIcon: StoryFn<FToggleProps> = Template.bind({});
NoCheckmarkIcon.args = {
  label: 'I agree with the privacy policy',
  noCheckmarkIcon: true,
};

const ReverseTemplate = (args: FToggleProps) => ({
  components: { FToggle },
  setup: () => ({ args }),
  template: `
<div style="width: 325px;">
  <FToggle v-bind="args" />
</div>`,
});

export const Reverse: StoryFn<FToggleProps> = ReverseTemplate.bind({});
Reverse.args = {
  label: 'I agree with the privacy policy',
  reverse: true,
};

export const SmallText: StoryFn<FToggleProps> = Template.bind({});
SmallText.args = {
  label: 'I agree with the privacy policy',
  smallText: true,
};
