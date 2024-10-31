import FCountrySelect from '@/components/form/FCountrySelect.vue';
import FSelect from '@/components/form/FSelect.vue';
import FButton from '@/components/FButton.vue';
import { registerIcons } from '@/composables/useIcon';
import { flagIcons } from '@/icons';

import type { StoryFn } from '@storybook/vue3';
import type { FCountrySelectProps } from '@/components/form/FCountrySelect.vue';

export default {
  title: 'Components/Form/FCountrySelect',
  component: FCountrySelect,
};

const Template = (args: FCountrySelectProps) => ({
  components: { FCountrySelect, FSelect },
  setup: () => {
    registerIcons('flags', flagIcons);
    return { args };
  },
  template: `<FCountrySelect v-bind="args" />`,
});

export const Default: StoryFn<FCountrySelectProps> = Template.bind({});
Default.args = {
  modelValue: 'FR',
};

export const Small: StoryFn<FCountrySelectProps> = Template.bind({});
Small.args = {
  size: 'small',
  modelValue: 'FR',
};

export const LimitedCountries: StoryFn<FCountrySelectProps> = Template.bind({});
LimitedCountries.args = {
  modelValue: 'FR',
  countryCodes: ['FR', 'AST', 'ES'],
};

export const FormattedLabel: StoryFn<FCountrySelectProps> = Template.bind({});
FormattedLabel.args = {
  modelValue: 'ES',
  optionLabelFormat: countryCode =>
    `app__country_code__${countryCode.toLowerCase()}`,
  countryCodes: ['FR', 'AST', 'ES'],
};

export const WithLabel: StoryFn<FCountrySelectProps> = Template.bind({});
WithLabel.args = {
  label: 'Pick a country',
  placeholder: 'FR',
};

export const WithHint: StoryFn<FCountrySelectProps> = Template.bind({});
WithHint.args = {
  placeholder: 'FR',
  hint: 'Pick a country',
};

export const Full: StoryFn<FCountrySelectProps> = Template.bind({});
Full.args = {
  label: 'Pick a country',
  placeholder: 'FR',
  hint: 'Pick a country',
};

export const Clearable: StoryFn<FCountrySelectProps> = Template.bind({});
Clearable.args = {
  placeholder: 'FR',
  errorColor: 'danger',
  hint: 'Clear the input clicking on the cross icon',
  clearable: true,
};

export const Error: StoryFn<FCountrySelectProps> = Template.bind({});
Error.args = {
  modelValue: 'ES',
  rules: [value => value === 'FR'],
  errorMessage: 'Select "FR" to dismiss the error',
  countryCodes: ['FR', 'GB', 'ES'],
  validationTrigger: 'change',
  validateOnMount: true,
};

export const Disabled: StoryFn<FCountrySelectProps> = Template.bind({});
Disabled.args = {
  placeholder: 'FR',
  disabled: true,
};

export const Loading: StoryFn<FCountrySelectProps> = Template.bind({});
Loading.args = {
  placeholder: 'FR',
  loading: true,
};

const FocusTemplate = (args: FCountrySelectProps) => ({
  components: { FCountrySelect, FButton },
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
  <FCountrySelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FCountrySelectProps> =
  FocusTemplate.bind({});
FocusProgrammatically.args = {
  modelValue: 'ES',
};
