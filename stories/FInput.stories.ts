import { Story } from '@storybook/vue3';
import { ref } from 'vue';

import FInput, { FInputProps } from '@/components/form/FInput.vue';
import FButton from '@/components/FButton.vue';
import { mask, required } from '@/rules';

export default {
  title: 'Components/Form/FInput',
  component: FInput,
  argTypes: {
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
  },
};

const Template = (args: FInputProps) => ({
  components: { FInput },
  setup: () => ({ args }),
  template: '<FInput v-bind="args" />',
});

export const Default: Story<FInputProps> = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'primary' },
};
Default.args = {
  placeholder: 'Email address',
};

export const WithLabel: Story<FInputProps> = Template.bind({});
WithLabel.parameters = {
  backgrounds: { default: 'primary' },
};
WithLabel.args = {
  label: 'Email address',
  placeholder: 'contact@fifteen.eu',
};

export const WithHint: Story<FInputProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'success' },
};
WithHint.args = {
  placeholder: 'Email address',
  hint: 'You can use your personal or professional email',
};

export const Full: Story<FInputProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'success' },
};
Full.args = {
  label: 'Email address',
  placeholder: 'contact@fifteen.eu',
  hint: 'You can use your personal or professional email',
};

export const Error: Story<FInputProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'secondary' },
};
Error.args = {
  placeholder: 'Fifteen',
  labelTextColor: 'neutral--light-5',
  rules: [value => value === 'Fifteen'],
  errorMessage: 'Type "Fifteen" to dismiss the input',
  validateOnMount: true,
};

export const Disabled: Story<FInputProps> = Template.bind({});
Disabled.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
  disabled: true,
};

export const Loading: Story<FInputProps> = Template.bind({});
Loading.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
  loading: true,
};

export const Clearable: Story<FInputProps> = Template.bind({});
Clearable.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'Clear the input clicking on the cross icon',
  clearable: true,
};

export const Mask: Story<FInputProps> = Template.bind({});
Mask.args = {
  label: 'Birth date',
  placeholder: 'DD/MM/YYYY',
  mask: '##/##/####',
  errorColor: 'danger',
  errorMessage: 'Birth date is not valid',
  rules: [required, value => mask(value, '##/##/####')],
};

export const TypeNumber: Story<FInputProps> = Template.bind({});
TypeNumber.args = {
  placeholder: 'Number',
  type: 'number',
};

const FocusTemplate = (args: FInputProps) => ({
  components: { FInput, FButton },
  setup: () => {
    const inputRef = ref();

    function focus() {
      inputRef.value?.focus();
    }

    return { args, focus, inputRef };
  },
  template: `
<div>
  <FInput ref="inputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: Story<FInputProps> = FocusTemplate.bind({});
