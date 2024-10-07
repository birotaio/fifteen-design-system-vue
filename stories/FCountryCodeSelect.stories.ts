import FCountryCodeSelect from '@/components/form/FCountryCodeSelect.vue';
import FSelect from '@/components/form/FSelect.vue';
import FButton from '@/components/FButton.vue';
import { registerIcons } from '@/composables/useIcon';
import { flagIcons } from '@/icons';

import type { StoryFn } from '@storybook/vue3';
import type { FCountryCodeSelectProps } from '@/components/form/FCountryCodeSelect.vue';

export default {
  title: 'Components/Form/FCountryCodeSelect',
  component: FCountryCodeSelect,
};

const Template = (args: FCountryCodeSelectProps) => ({
  components: { FCountryCodeSelect, FSelect },
  setup: () => {
    registerIcons('flags', flagIcons);
    return { args };
  },
  template: `<FCountryCodeSelect v-bind="args" />`,
});

export const Default: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Default.args = {
  modelValue: 'FR',
};

export const Small: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Small.args = {
  size: 'small',
  modelValue: 'FR',
};

export const LimitedCountries: StoryFn<FCountryCodeSelectProps> = Template.bind(
  {}
);
LimitedCountries.args = {
  modelValue: 'FR',
  countryCodes: ['FR', 'AST', 'ES'],
};

export const FormattedLabel: StoryFn<FCountryCodeSelectProps> = Template.bind(
  {}
);
FormattedLabel.args = {
  modelValue: 'ES',
  optionLabelFormat: countryCode =>
    `app__country_code__${countryCode.toLowerCase()}`,
  countryCodes: ['FR', 'AST', 'ES'],
};

export const WithLabel: StoryFn<FCountryCodeSelectProps> = Template.bind({});
WithLabel.args = {
  label: 'Pick a country',
  placeholder: 'FR',
};

export const WithHint: StoryFn<FCountryCodeSelectProps> = Template.bind({});
WithHint.args = {
  placeholder: 'FR',
  hint: 'Pick a country',
};

export const Full: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Full.args = {
  label: 'Pick a country',
  placeholder: 'FR',
  hint: 'Pick a country',
};

export const Clearable: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Clearable.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'Clear the input clicking on the cross icon',
  clearable: true,
};

export const Error: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Error.args = {
  modelValue: 'ES',
  rules: [value => value === 'FR'],
  errorMessage: 'Select "FR" to dismiss the error',
  countryCodes: ['FR', 'GB', 'ES'],
  validationTrigger: 'change',
  validateOnMount: true,
};

export const Disabled: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Disabled.args = {
  placeholder: 'FR',
  disabled: true,
};

export const Loading: StoryFn<FCountryCodeSelectProps> = Template.bind({});
Loading.args = {
  placeholder: 'FR',
  loading: true,
};

const FocusTemplate = (args: FCountryCodeSelectProps) => ({
  components: { FCountryCodeSelect, FButton },
  setup() {
    registerIcons('flags', flagIcons);
    const selectRef = ref();
    function focus() {
      selectRef.value?.focus();
    }
    return { args, focus, selectRef };
  },
  template: `
<div>
  <FCountryCodeSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FCountryCodeSelectProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  modelValue: 'ES',
};
