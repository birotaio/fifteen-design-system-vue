import { Story } from '@storybook/vue3';
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

export const Default: Story<FsFormProps> = Template.bind({});
Default.args = {
  initialValues: {
    FInput: 'Default value',
    FCheckbox: true,
    FDigitsInput: '1234',
    FPhoneInput: '',
    FRadioGroup: 'b',
    FSelect: 'c',
    FTextarea: 'Default value',
    FAutocompleteInput: 'a',
  },
};

export const Loading: Story<FsFormProps> = Template.bind({});
Loading.args = {
  loading: true,
  initialValues: {
    FInput: 'Default value',
    FCheckbox: true,
    FDigitsInput: '1234',
    FPhoneInput: '',
    FRadioGroup: 'b',
    FSelect: 'c',
    FTextarea: 'Default value',
    FAutocompleteInput: 'a',
  },
};
