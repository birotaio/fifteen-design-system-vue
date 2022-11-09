import { Story } from '@storybook/vue3';
import FFileUpload, {
  FFileUploadProps,
} from '@/components/form/FFileUpload.vue';

export default {
  title: 'Components/Form/FFileUpload',
  component: FFileUpload,
};

const Template = (args: FFileUploadProps) => ({
  components: { FFileUpload },
  setup: () => ({ args }),
  template: '<FFileUpload v-bind="args" />',
});

export const Default: Story<FFileUploadProps> = Template.bind({});
Default.args = {
  buttonText: 'Import a file',
  errorMessage: 'Invalid file',
};

export const WithLabel: Story<FFileUploadProps> = Template.bind({});
WithLabel.args = {
  label: 'Your student card',
  buttonText: 'Import a file',
  errorMessage: 'Invalid file',
};

export const WithHint: Story<FFileUploadProps> = Template.bind({});
WithHint.args = {
  hint: 'Click the button to import a file',
  buttonText: 'Import a file',
  errorMessage: 'Invalid file',
};

export const Full: Story<FFileUploadProps> = Template.bind({});
Full.args = {
  label: 'Your student card',
  buttonText: 'Import a file',
  hint: 'Click the button to import a file',
  errorMessage: 'Invalid file',
};

export const AllowMultiple: Story<FFileUploadProps> = Template.bind({});
AllowMultiple.args = {
  buttonText: 'Import a file',
  hint: 'Click the button to import one or many files',
  errorMessage: 'Invalid file',
  multiple: true,
};

export const WithRestrictions: Story<FFileUploadProps> = Template.bind({});
WithRestrictions.args = {
  buttonText: 'Import a file',
  hint: 'Maximum size: 5 MB, Accepted format : PDF, JPG, PNG',
  errorMessage: 'Invalid file',
  allowedMimeTypes: ['application/pdf', 'image/jpeg', 'image/png'],
  maximumSize: 5000,
};

export const Disabled: Story<FFileUploadProps> = Template.bind({});
Disabled.args = {
  label: 'Your student card',
  buttonText: 'Import a file',
  errorMessage: 'Invalid file',
  disabled: true,
};

export const Loading: Story<FFileUploadProps> = Template.bind({});
Loading.args = {
  label: 'Your student card',
  buttonText: 'Import a file',
  errorMessage: 'Invalid file',
  loading: true,
};
