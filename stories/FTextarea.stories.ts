import FTextarea from '@/components/form/FTextarea.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FTextareaProps } from '@/components/form/FTextarea.vue';

export default {
  title: 'Components/Form/FTextarea',
  component: FTextarea,
  argTypes: {
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
    onChange: { action: 'change' },
    onInput: { action: 'input' },
  },
};

const Template = (args: FTextareaProps) => ({
  components: { FTextarea },
  setup: () => ({ args }),
  template: '<FTextarea v-bind="args" />',
});

export const Default: StoryFn<FTextareaProps> = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'primary' },
};
Default.args = {
  placeholder: 'Email address',
};

export const WithLabel: StoryFn<FTextareaProps> = Template.bind({});
WithLabel.parameters = {
  backgrounds: { default: 'success' },
};
WithLabel.args = {
  label: 'Contact motivation',
  placeholder: 'I contact you today because...',
};

export const WithHint: StoryFn<FTextareaProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'success' },
};
WithHint.args = {
  placeholder: 'I contact you today because...',
  hint: 'Feel free to write anything',
};

export const Full: StoryFn<FTextareaProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'success' },
};
Full.args = {
  label: 'Contact motivation',

  placeholder: 'I contact you today because...',
  hint: 'Feel free to write anything',
};

export const Error: StoryFn<FTextareaProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'secondary' },
};
Error.args = {
  placeholder: 'Email address',
  rules: [() => false],
  validateOnMount: true,
  hideHint: true,
};

export const ErrorWithHint: StoryFn<FTextareaProps> = Template.bind({});
ErrorWithHint.parameters = {
  backgrounds: { default: 'secondary' },
};
ErrorWithHint.args = {
  placeholder: 'Augmented Bike Networks',
  rules: [value => value === 'Augmented Bike Networks'],
  validateOnMount: true,
  errorMessage: `Type "Augmented Bike Networks" to dismiss the error`,
};

export const Disabled: StoryFn<FTextareaProps> = Template.bind({});
Disabled.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
  disabled: true,
};

export const Loading: StoryFn<FTextareaProps> = Template.bind({});
Loading.args = {
  placeholder: 'Email address',
  errorColor: 'danger',
  hint: 'You can use your personal or professional email',
  loading: true,
};

const FocusTemplate = (args: FTextareaProps) => ({
  components: { FTextarea, FButton },
  setup() {
    const textareaRef = ref();
    function focus() {
      textareaRef.value?.focus();
    }
    return { args, focus, textareaRef };
  },
  template: `
<div>
  <FTextarea ref="textareaRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FTextareaProps> =
  FocusTemplate.bind({});
