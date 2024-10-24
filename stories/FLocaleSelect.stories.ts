import FLocaleSelect from '@/components/form/FLocaleSelect.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FLocaleSelectProps } from '@/components/form/FLocaleSelect.vue';

export default {
  title: 'Components/Form/FLocaleSelect',
  component: FLocaleSelect,
  argTypes: {
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
  },
};

const Template = (args: FLocaleSelectProps) => ({
  components: { FLocaleSelect },
  setup: () => ({ args }),
  template: '<FLocaleSelect v-bind="args" />',
});

export const Default: StoryFn<FLocaleSelectProps> = Template.bind({});
Default.args = {
  modelValue: 'fr',
};

export const Small: StoryFn<FLocaleSelectProps> = Template.bind({});
Small.args = {
  size: 'small',
  modelValue: 'fr',
};

export const LimitedLocales: StoryFn<FLocaleSelectProps> = Template.bind({});
LimitedLocales.args = {
  modelValue: 'fr',
  localeCodes: ['fr', 'es'],
};

export const FormattedLabel: StoryFn<FLocaleSelectProps> = Template.bind({});
FormattedLabel.args = {
  modelValue: 'es',
  optionLabelFormat: countryCode =>
    `app__country_code__${countryCode.toLowerCase()}`,
  localeCodes: ['fr', 'es'],
};

export const WithLabel: StoryFn<FLocaleSelectProps> = Template.bind({});
WithLabel.args = {
  label: 'Pick a locale',
  placeholder: 'fr',
};

export const WithHint: StoryFn<FLocaleSelectProps> = Template.bind({});
WithHint.args = {
  placeholder: 'fr',
  hint: 'Pick a locale',
};

export const Full: StoryFn<FLocaleSelectProps> = Template.bind({});
Full.args = {
  label: 'Pick a locale',
  placeholder: 'fr',
  hint: 'Pick a locale',
};

export const Clearable: StoryFn<FLocaleSelectProps> = Template.bind({});
Clearable.args = {
  placeholder: 'fr',
  errorColor: 'danger',
  hint: 'Clear the input clicking on the cross icon',
  clearable: true,
};

export const Error: StoryFn<FLocaleSelectProps> = Template.bind({});
Error.args = {
  modelValue: 'es',
  rules: [value => value === 'fr'],
  errorMessage: 'Select "fr" to dismiss the error',
  localeCodes: ['fr', 'pl', 'es'],
  validationTrigger: 'change',
  validateOnMount: true,
};

export const Disabled: StoryFn<FLocaleSelectProps> = Template.bind({});
Disabled.args = {
  placeholder: 'fr',
  disabled: true,
};

export const Loading: StoryFn<FLocaleSelectProps> = Template.bind({});
Loading.args = {
  placeholder: 'fr',
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
  modelValue: 'es',
};
