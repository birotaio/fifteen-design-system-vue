import FsForm from './components/FsForm.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FsFormProps } from './components/FsForm.vue';

export default {
  title: 'Components/Form/FForm',
  component: FsForm,
  argTypes: {
    onValid: { action: 'valid' },
  },
};

const Template = (args: FsFormProps) => ({
  components: {
    FsForm,
  },
  setup: () => ({ args }),
  template: `<FsForm v-bind="args" />`,
});

export const Default: StoryFn<FsFormProps> = Template.bind({});
Default.args = {
  initialValues: {
    FInput: 'Default value',
    FCheckbox: true,
    FDigitsInput: '1234',
    FPhoneInput: '+12345678910',
    FCreditCardInput: '4242424242424242',
    FRadioGroup: 'b',
    FSelect: 'c',
    FLocaleSelect: 'FR',
    FTextarea: 'Default value',
    FAutocomplete: 'a',
    FToggle: true,
  },
};

export const Loading: StoryFn<FsFormProps> = Template.bind({});
Loading.args = {
  loading: true,
  initialValues: {
    FInput: 'Default value',
    FCheckbox: true,
    FDigitsInput: '1234',
    FPhoneInput: '',
    FCreditCardInput: '',
    FRadioGroup: 'b',
    FSelect: 'c',
    FLocaleSelect: 'FR',
    FTextarea: 'Default value',
    FAutocomplete: 'a',
  },
};

export const Validation: StoryFn<FsFormProps> = Template.bind({});
Validation.args = {
  withValidation: true,
  initialValues: {
    FInput: '',
    FCheckbox: false,
    FDigitsInput: '',
    FPhoneInput: '',
    FCreditCardInput: '',
    FRadioGroup: '',
    FSelect: '',
    FLocaleSelect: '',
    FTextarea: '',
    FAutocomplete: '',
  },
};
