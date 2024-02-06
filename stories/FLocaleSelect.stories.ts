import { ref } from 'vue';

import FLocaleSelect from '@/components/form/FLocaleSelect.vue';
import FSelect from '@/components/form/FSelect.vue';
import FButton from '@/components/FButton.vue';
import { registerIcons } from '@/composables/useIcon';
import { flagIcons } from '@/icons';

import type { StoryFn } from '@storybook/vue3';
import type { FLocaleSelectProps } from '@/components/form/FLocaleSelect.vue';

export default {
  title: 'Components/Form/FLocaleSelect',
  component: FLocaleSelect,
};

const Template = (args: FLocaleSelectProps) => ({
  components: { FLocaleSelect, FSelect },
  setup: () => {
    registerIcons('flags', flagIcons);
    return { args };
  },
  template: `<FLocaleSelect v-bind="args" />`,
});

export const Default: StoryFn<FLocaleSelectProps> = Template.bind({});
Default.args = {
  modelValue: 'FR',
};

export const Small: StoryFn<FLocaleSelectProps> = Template.bind({});
Small.args = {
  size: 'small',
  modelValue: 'FR',
};

export const LimitedLocales: StoryFn<FLocaleSelectProps> = Template.bind({});
LimitedLocales.args = {
  modelValue: 'FR',
  locales: ['FR', 'AST', 'ES'],
};

export const FormattedLabel: StoryFn<FLocaleSelectProps> = Template.bind({});
FormattedLabel.args = {
  modelValue: 'ES',
  optionLabelFormat: locale => `app__lang__${locale.toLowerCase()}`,
  locales: ['FR', 'AST', 'ES'],
};

export const WithLabel: StoryFn<FLocaleSelectProps> = Template.bind({});
WithLabel.args = {
  label: 'Pick a locale',
  placeholder: 'FR',
};

export const WithHint: StoryFn<FLocaleSelectProps> = Template.bind({});
WithHint.args = {
  placeholder: 'FR',
  hint: 'Pick a locale',
};

export const Full: StoryFn<FLocaleSelectProps> = Template.bind({});
Full.args = {
  label: 'Pick a locale',
  placeholder: 'FR',
  hint: 'Pick a locale',
};

export const Clearable: StoryFn<FLocaleSelectProps> = Template.bind({});
Clearable.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'Clear the input clicking on the cross icon',
  clearable: true,
};

export const Error: StoryFn<FLocaleSelectProps> = Template.bind({});
Error.args = {
  modelValue: 'ES',
  rules: [value => value === 'FR'],
  errorMessage: 'Select "FR" to dismiss the error',
  locales: ['FR', 'GB', 'ES'],
  validationTrigger: 'change',
  validateOnMount: true,
};

export const Disabled: StoryFn<FLocaleSelectProps> = Template.bind({});
Disabled.args = {
  placeholder: 'FR',
  disabled: true,
};

export const Loading: StoryFn<FLocaleSelectProps> = Template.bind({});
Loading.args = {
  placeholder: 'FR',
  loading: true,
};

const FocusTemplate = (args: FLocaleSelectProps) => ({
  components: { FLocaleSelect, FButton },
  setup() {
    const selectRef = ref();
    function focus() {
      selectRef.value?.focus();
    }
    return { args, focus, selectRef };
  },
  template: `
<div>
  <FLocaleSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FLocaleSelectProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  modelValue: 'ES',
};
