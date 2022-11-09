import { Story } from '@storybook/vue3';
import FAutocompleteInput, {
  FAutocompleteInputProps,
} from '@/components/form/FAutocompleteInput.vue';
import FButton from '@/components/FButton.vue';
import { ref } from 'vue';

export default {
  title: 'Components/Form/FAutocompleteInput',
  component: FAutocompleteInput,
};

const Template = (args: FAutocompleteInputProps) => ({
  components: { FAutocompleteInput },
  setup: () => ({ args }),
  template: '<FAutocompleteInput v-bind="args" />',
});

const capitals = [
  { label: 'Amsterdam', description: 'Capital of Netherlands', value: 'amsterdam' },
  { label: 'Berlin', description: 'Capital of Germany', value: 'berlin' },
  { label: 'Madrid', description: 'Capital of Spain', value: 'madrid' },
  { label: 'Rome', value: 'rome' },
  { label: 'London', value: 'london' },
  { label: 'Paris', description: 'Capital of France', value: 'paris' },
  { label: 'Prague', description: 'Capital of Czech Republic', value: 'prague' },
  { label: 'Stockholm', description: 'Capital of Sweden', value: 'stockholm' },
  { label: 'Vienna', value: 'vienna' },
];

export const Default: Story<FAutocompleteInputProps> = Template.bind({});
Default.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  errorMessage: 'Select a value in the list to validate',
};

export const WithLabel: Story<FAutocompleteInputProps> = Template.bind({});
WithLabel.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  errorMessage: 'Select a value in the list to validate',
};

export const WithHint: Story<FAutocompleteInputProps> = Template.bind({});
WithHint.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const Full: Story<FAutocompleteInputProps> = Template.bind({});
Full.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  errorMessage: 'Select a value in the list to validate',
};

export const Error: Story<FAutocompleteInputProps> = Template.bind({});
Error.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  validateOnMount: true,
  errorMessage: 'Choose an option to dismiss the error',
};

export const Disabled: Story<FAutocompleteInputProps> = Template.bind({});
Disabled.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  label: 'Choose a capital',
  hint: `You can navigate in the menu through keyboard`,
  hintIcon: 'infoCircle',
  disabled: true,
};

const FocusTemplate = (args: FAutocompleteInputProps) => ({
  components: { FAutocompleteInput, FButton },
  setup() {
    const creditCardInputRef = ref();
    function focus() {
      creditCardInputRef.value?.focus();
    }
    return { args, focus, creditCardInputRef };
  },
  template: `
<div>
  <FAutocompleteInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});

export const FocusProgrammatically: Story<FAutocompleteInputProps> =
  FocusTemplate.bind({});

FocusProgrammatically.args = {
  options: capitals,
};

export const Loading: Story<FAutocompleteInputProps> = Template.bind({});
Loading.args = {
  placeholder: 'Search capitals...',
  loadingText: 'Loading...',
  loading: true,
};

export const Clearable: Story<FAutocompleteInputProps> = Template.bind({});
Clearable.args = {
  placeholder: 'Search capitals...',
  options: capitals,
  clearable: true,
  errorMessage: 'Select a value in the list to validate',
};


const WithAsyncOptionsTemplate = (args: FAutocompleteInputProps) => ({
  components: { FAutocompleteInput },
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
    <FAutocompleteInput @input-value="fetchCapitals" v-bind="args" :options="fetchedCapitals" :loading="loading" />
  </div>`,
});

export const WithAsyncOptions: Story<FAutocompleteInputProps> =
  WithAsyncOptionsTemplate.bind({});

WithAsyncOptions.args = {
  placeholder: 'Search capitals...',
  errorMessage: 'Select a value in the list to validate',
  loadingText: 'Fetching capitals...',
  hint: 'Capitals are fetched asynchronously on input',
};
