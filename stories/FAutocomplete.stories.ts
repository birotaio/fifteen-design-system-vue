import { ref } from 'vue';
import { required } from '@vee-validate/rules';

import FAutocomplete from '@/components/form/FAutocomplete.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FAutocompleteProps } from '@/components/form/FAutocomplete.vue';

export default {
  title: 'Components/Form/FAutocomplete',
  component: FAutocomplete,
};

const Template = (args: FAutocompleteProps) => ({
  components: { FAutocomplete },
  setup: () => ({ args }),
  template: '<FAutocomplete v-bind="args" />',
});

const capitals = [
  {
    label: 'Amsterdam',
    description: 'Capital of Netherlands',
    value: 'amsterdam',
  },
  { label: 'Berlin', description: 'Capital of Germany', value: 'berlin' },
  { label: 'Madrid', description: 'Capital of Spain', value: 'madrid' },
  { label: 'Rome', value: 'rome' },
  { label: 'London', value: 'london' },
  { label: 'Paris', description: 'Capital of France', value: 'paris' },
  {
    label: 'Prague',
    description: 'Capital of Czech Republic',
    value: 'prague',
  },
  { label: 'Stockholm', description: 'Capital of Sweden', value: 'stockholm' },
  { label: 'Vienna', value: 'vienna' },
];

export const Default: StoryFn<FAutocompleteProps> = Template.bind({});
Default.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  errorMessage: 'Select a value in the list to validate',
};

export const WithLabel: StoryFn<FAutocompleteProps> = Template.bind({});
WithLabel.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  errorMessage: 'Select a value in the list to validate',
};

export const WithHint: StoryFn<FAutocompleteProps> = Template.bind({});
WithHint.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const Full: StoryFn<FAutocompleteProps> = Template.bind({});
Full.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const Error: StoryFn<FAutocompleteProps> = Template.bind({});
Error.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  validateOnMount: true,
  rules: [required],
  errorMessage: 'Choose an option to dismiss the error',
};

export const Disabled: StoryFn<FAutocompleteProps> = Template.bind({});
Disabled.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  disabled: true,
};

const FocusTemplate = (args: FAutocompleteProps) => ({
  components: { FAutocomplete, FButton },
  setup() {
    const creditCardInputRef = ref();
    function focus() {
      creditCardInputRef.value?.focus();
    }
    return { args, focus, creditCardInputRef };
  },
  template: `
<div>
  <FAutocomplete ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});

export const FocusProgrammatically: StoryFn<FAutocompleteProps> =
  FocusTemplate.bind({});

FocusProgrammatically.args = {
  options: capitals,
};

export const Loading: StoryFn<FAutocompleteProps> = Template.bind({});
Loading.args = {
  placeholder: 'Search capitals...',
  loadingText: 'Loading...',
  loading: true,
};

export const Clearable: StoryFn<FAutocompleteProps> = Template.bind({});
Clearable.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  clearable: true,
  errorMessage: 'Select a value in the list to validate',
};

export const PreventFiltering: StoryFn<FAutocompleteProps> = Template.bind({});
PreventFiltering.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  hint: `Autocomplete propositions are not filtered based on input value.`,
  preventFiltering: true,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const WithFormattedInputValue: StoryFn<FAutocompleteProps> =
  Template.bind({});
WithFormattedInputValue.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  hint: `The description of the input will show after its label.`,
  formatInputFn(label, description) {
    return label + (description ? `, ${description}` : description);
  },
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const WithInitialValue: StoryFn<FAutocompleteProps> = Template.bind({});

WithInitialValue.args = {
  modelValue: 'berlin',
  placeholder: 'Search capitals...',
  options: capitals,
  hint: `The initial value is set to Berlin.`,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

const WithAsyncOptionsTemplate = (args: FAutocompleteProps) => ({
  components: { FAutocomplete },
  setup() {
    let timeoutId: NodeJS.Timeout | undefined;

    const fetchedCapitals = ref<unknown[]>([]);
    const loading = ref(false);

    function fetchCapitals() {
      clearTimeout(timeoutId);

      fetchedCapitals.value = [];
      loading.value = true;
      return new Promise(() => {
        timeoutId = setTimeout(() => {
          fetchedCapitals.value = capitals;
          loading.value = false;
        }, 1500);
      });
    }

    return { args, fetchedCapitals, fetchCapitals, loading };
  },
  template: `
  <div>
    <FAutocomplete @input="fetchCapitals" v-bind="args" :options="fetchedCapitals" :loading="loading" />
  </div>`,
});

export const WithAsyncOptions: StoryFn<FAutocompleteProps> =
  WithAsyncOptionsTemplate.bind({});

WithAsyncOptions.args = {
  placeholder: 'Search capitals...',
  errorMessage: 'Select a value in the list to validate',
  loadingText: 'Fetching capitals...',
  hint: 'Capitals are fetched asynchronously on input',
};
