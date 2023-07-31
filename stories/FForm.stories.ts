import { StoryFn } from '@storybook/vue3';

import FsForm from './components/FsForm.vue';

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
    FRadioGroup: 'b',
    FSelect: 'c',
    FLocaleSelect: 'FR',
    FTextarea: 'Default value',
    FAutocomplete: 'a',
  },
};
