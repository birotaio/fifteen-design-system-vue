import { Story } from '@storybook/vue3';
import FRadio, { FRadioProps } from '@/components/form/FRadio.vue';

export default {
  title: 'Components/Form/FRadio',
  component: FRadio,
};

const Template = (args: FRadioProps) => ({
  components: { FRadio },
  setup: () => ({ args }),
  template: '<FRadio v-bind="args" />',
});

export const Default: Story<FRadioProps> = Template.bind({});
Default.args = {
  label: 'Check me',
  value: 'check-me',
};

export const Disabled: Story<FRadioProps> = Template.bind({});
Disabled.args = {
  label: 'A disabled one',
  disabled: true,
};

export const WithHint: Story<FRadioProps> = Template.bind({});
WithHint.args = {
  label: 'Receive our monthly newsletter',
  hint: 'Check this if you want to receive our amazing newsletter',
  value: 'newsletter',
};

export const Error: Story<FRadioProps> = Template.bind({});
Error.args = {
  label: 'I agree with the privacy policy',
  value: 'privacy-policy',
  errorMessage: 'You must tick the radio button',
  rules: [value => value === 'privacy-policy'],
  validateOnMount: true,
};
