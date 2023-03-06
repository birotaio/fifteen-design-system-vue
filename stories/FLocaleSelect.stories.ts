import { Story } from '@storybook/vue3';

import FLocaleSelect from '@/components/form/FLocaleSelect.vue';
import FSelect from '@/components/form/FSelect.vue';

import type { FLocaleSelectProps } from '@/components/form/FLocaleSelect.vue';

export default {
  title: 'Components/Form/FLocaleSelect',
  component: FLocaleSelect,
  parameters: {
    backgrounds: { default: 'secondary' },
  },
};

const Template = (args: FLocaleSelectProps) => ({
  components: { FLocaleSelect, FSelect },
  setup: () => ({ args }),
  template: `<FLocaleSelect v-bind="args" />`,
});

export const Default: Story<FLocaleSelectProps> = Template.bind({});
Default.args = {
  modelValue: 'FR',
};

export const LimitedLocales: Story<FLocaleSelectProps> = Template.bind({});
LimitedLocales.args = {
  modelValue: 'FR',
  locales: ['FR', 'AST', 'ES'],
};

export const FormattedLabel: Story<FLocaleSelectProps> = Template.bind({});
FormattedLabel.args = {
  modelValue: 'ES',
  labelFormat: locale => `app__lang__${locale.toLowerCase()}`,
  locales: ['FR', 'AST', 'ES'],
};
