import { Story } from '@storybook/vue3';
import FSelect, { FSelectProps } from '@/components/FSelect.vue';
import FIcon from '@/components/FIcon.vue';

export default {
  title: 'Components/Form/FSelect',
  component: FSelect,
};

const Template = (args: FSelectProps) => ({
  components: { FSelect },
  setup: () => ({ args }),
  template: '<FSelect v-bind="args" />',
});

export const Default: Story<FSelectProps> = Template.bind({});
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

export const WithLabel: Story<FSelectProps> = Template.bind({});
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

export const WithHint: Story<FSelectProps> = Template.bind({});
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

export const Full: Story<FSelectProps> = Template.bind({});
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

export const Clearable: Story<FSelectProps> = Template.bind({});
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

export const CustomOptionPrefix: Story<FSelectProps> = CustomTemplate.bind({});
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

export const Error: Story<FSelectProps> = Template.bind({});
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
  rules: [() => false],
  errorMessage: 'Error sample',
  validateOnMount: true,
  clearable: true,
  placeholder: 'All topics',
  errorColor: 'danger',
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
  hint: 'Pick a contact motivation',
};

export const NoOption: Story<FSelectProps> = Template.bind({});
NoOption.parameters = {
  backgrounds: { default: 'neutral' },
};
NoOption.args = {
  emptyText: 'No option here',
  color: 'secondary',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  clearable: true,
  placeholder: 'All topics',
  options: [],
  hint: 'Pick a contact motivation',
};

export const Disabled: Story<FSelectProps> = Template.bind({});
Disabled.parameters = {
  backgrounds: { default: 'neutral' },
};
Disabled.args = {
  color: 'secondary',
  placeholder: 'All topics',
  options: [],
  disabled: true,
};

export const LongOptionsLabel: Story<FSelectProps> = Template.bind({});
LongOptionsLabel.parameters = {
  backgrounds: { default: 'neutral' },
};
LongOptionsLabel.args = {
  color: 'secondary',
  placeholderTextColor: 'neutral--light-3',
  focusColor: 'secondary',
  optionsMenuColor: 'secondary',
  placeholder: 'All topics',
  options: [
    {
      label:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      value: 'acquisition',
    },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};

export const ManyOptions: Story<FSelectProps> = Template.bind({});
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

export const Unselectable: Story<FSelectProps> = Template.bind({});
Unselectable.parameters = {
  backgrounds: { default: 'neutral' },
};
Unselectable.args = {
  disableSelection: true,
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

export const SmallWidth: Story<FSelectProps> = Template.bind({});
SmallWidth.parameters = {
  backgrounds: { default: 'neutral' },
};
SmallWidth.args = {
  menuWidth: 300,
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
