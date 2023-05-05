import { Story } from '@storybook/vue3';
import { ref } from 'vue';

import FToggle, { FToggleProps } from '@/components/form/FToggle.vue';
import FButton from '@/components/FButton.vue';

export default {
  title: 'Components/Form/FToggle',
  component: FToggle,
};

const Template = (args: FToggleProps) => ({
  components: { FToggle },
  setup: () => ({ args }),
  template: '<FToggle v-bind="args" />',
});

export const Default: Story<FToggleProps> = Template.bind({});
Default.args = {
  label: 'Check me',
};

export const Disabled: Story<FToggleProps> = Template.bind({});
Disabled.args = {
  label: 'The toggle is disabled',
  disabled: true,
};

export const WithHint: Story<FToggleProps> = Template.bind({});
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

export const WithLinks: Story<FToggleProps> = LinkTemplate.bind({});
WithLinks.args = {
};

export const Error: Story<FToggleProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  errorMessage: 'Check the checkbox to dismiss the error',
  rules: [value => value === true],
  validateOnMount: true,
};

export const NoCheckmarkIcon: Story<FToggleProps> = Template.bind({});
NoCheckmarkIcon.args = {
  label: 'I agree with the privacy policy',
  noCheckmarkIcon: true
};

const FocusTemplate = (args: FToggleProps) => ({
  components: { FToggle, FButton },
  setup() {
    const checkboxRef = ref();
    function focus() {
      checkboxRef.value?.focus();
    }
    return { args, focus, checkboxRef };
  },
  template: `
<div>
  <FToggle ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: Story<FToggleProps> = FocusTemplate.bind(
  {}
);
FocusProgrammatically.args = {
  label: 'Focus me by clicking on the button',
};
