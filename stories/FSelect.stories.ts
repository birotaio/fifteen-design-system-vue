import { StoryFn } from '@storybook/vue3';
import { ref } from 'vue';

import FSelect from '@/components/form/FSelect.vue';
import FIcon from '@/components/FIcon.vue';
import FButton from '@/components/FButton.vue';

import type { FSelectProps } from '@/components/form/FSelect.vue';

export default {
  title: 'Components/Form/FSelect',
  component: FSelect,
};

const Template = (args: FSelectProps) => ({
  components: { FSelect },
  setup: () => ({ args }),
  template: '<FSelect v-bind="args" />',
});

export const Default: StoryFn<FSelectProps> = Template.bind({});
Default.parameters = {
  backgrounds: { default: 'neutral' },
};
Default.args = {
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const Small: StoryFn<FSelectProps> = Template.bind({});
Small.parameters = {
  backgrounds: { default: 'neutral' },
};
Small.args = {
  size: 'small',
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const WithLabel: StoryFn<FSelectProps> = Template.bind({});
WithLabel.parameters = {
  backgrounds: { default: 'neutral' },
};
WithLabel.args = {
  label: 'Pick a topic',
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const WithHint: StoryFn<FSelectProps> = Template.bind({});
WithHint.parameters = {
  backgrounds: { default: 'neutral' },
};
WithHint.args = {
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
  hint: 'Pick a contact motivation',
};

export const Full: StoryFn<FSelectProps> = Template.bind({});
Full.parameters = {
  backgrounds: { default: 'neutral' },
};
Full.args = {
  label: 'Pick a topic',
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
  hint: 'Pick a contact motivation',
};

export const Clearable: StoryFn<FSelectProps> = Template.bind({});
Clearable.parameters = {
  backgrounds: { default: 'neutral' },
};
Clearable.args = {
  clearable: true,
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

const CustomTemplate = (args: FSelectProps) => ({
  components: { FSelect, FIcon },
  setup: () => ({ args }),
  template: `
<FSelect v-bind="args">
  <template #option-prefix>
    <FIcon name="arrowRight" />
  </template>
</FSelect>`,
});

export const CustomOptionPrefix: StoryFn<FSelectProps> = CustomTemplate.bind(
  {}
);
CustomOptionPrefix.parameters = {
  backgrounds: { default: 'neutral' },
};
CustomOptionPrefix.args = {
  placeholder: 'All topics',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
  hint: 'Choose a contact motivation',
};

export const Error: StoryFn<FSelectProps> = Template.bind({});
Error.parameters = {
  backgrounds: { default: 'neutral' },
};
Error.args = {
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  rules: [value => value === 'data'],
  errorMessage: 'Select "data" to dismiss the error',
  validationTrigger: 'change',
  validateOnMount: true,
  clearable: true,
  placeholder: 'All topics',
  errorColor: 'danger',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const NoOption: StoryFn<FSelectProps> = Template.bind({});
NoOption.parameters = {
  backgrounds: { default: 'neutral' },
};
NoOption.args = {
  emptyText: 'No option here',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  color: 'secondary',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  clearable: true,
  placeholder: 'All topics',
  options: [],
  hint: 'Pick a contact motivation',
};

export const Disabled: StoryFn<FSelectProps> = Template.bind({});
Disabled.parameters = {
  backgrounds: { default: 'neutral' },
};
Disabled.args = {
  color: 'secondary',
  placeholder: 'All topics',
  options: [],
  disabled: true,
};

export const Loading: StoryFn<FSelectProps> = Template.bind({});
Loading.args = {
  color: 'secondary',
  placeholder: 'All topics',
  options: [],
  loading: true,
};

export const LongOptionsLabel: StoryFn<FSelectProps> = Template.bind({});
LongOptionsLabel.parameters = {
  backgrounds: { default: 'neutral' },
};
LongOptionsLabel.args = {
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  placeholder: 'All topics',
  options: [
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Benefits', value: 'benefits' },
    {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 'acquisition',
    },
    {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 'acquisition',
    },
    {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 'acquisition',
    },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const ManyOptions: StoryFn<FSelectProps> = Template.bind({});
ManyOptions.parameters = {
  backgrounds: { default: 'neutral' },
};
ManyOptions.args = {
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  placeholder: 'All topics',
  options: new Array(10).fill(null).map((_, index) => ({
    label: `Option ${index}`,
    value: `option-${index}`,
  })),
};

export const Unselectable: StoryFn<FSelectProps> = Template.bind({});
Unselectable.parameters = {
  backgrounds: { default: 'neutral' },
};
Unselectable.args = {
  preventSelection: true,
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  placeholder: 'All topics',
  options: new Array(10).fill(null).map((_, index) => ({
    label: `Option ${index}`,
    value: `option-${index}`,
  })),
};

export const SmallWidthMenu: StoryFn<FSelectProps> = Template.bind({});
SmallWidthMenu.parameters = {
  backgrounds: { default: 'neutral' },
};
SmallWidthMenu.args = {
  menuWidth: 200,
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  optionTextColor: 'neutral--light-3',
  textColor: 'neutral--light-5',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  placeholder: 'All topics',
  options: new Array(10).fill(null).map((_, index) => ({
    label: `Option with a long label ${index}`,
    value: `option-${index}`,
  })),
};

const FocusTemplate = (args: FSelectProps) => ({
  components: { FSelect, FButton },
  setup() {
    const selectRef = ref();
    function focus() {
      selectRef.value?.focus();
    }
    return { args, focus, selectRef };
  },
  template: `
<div>
  <FSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`,
});
export const FocusProgrammatically: StoryFn<FSelectProps> = FocusTemplate.bind(
  {}
);
FocusProgrammatically.args = {
  options: [
    { label: 'Option A', value: 'a' },
    { label: 'Option B', value: 'b' },
    { label: 'Option C', value: 'c' },
  ],
};
