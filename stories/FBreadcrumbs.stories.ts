import { Story } from '@storybook/vue3';

import { colorDesignTokens } from '@/constants/colors';
import FBreadcrumbs, { FBreadcrumbsProps } from '@/components/FBreadcrumbs.vue';

export default {
  title: 'Components/FBreadcrumbs',
  component: FBreadcrumbs,
  argTypes: {
    activeItemColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    itemsColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
  },
};

const Template = (args: FBreadcrumbsProps) => ({
  components: { FBreadcrumbs },
  setup: () => ({ args }),
  template: '<FBreadcrumbs v-bind="args" />',
});

export const OneItem: Story<FBreadcrumbsProps> = Template.bind({});
OneItem.args = {
  items: [{ text: 'Guide' }],
};

export const ThreeItems: Story<FBreadcrumbsProps> = Template.bind({});
ThreeItems.args = {
  items: [
    { text: 'Guide' },
    { text: 'Operators' },
    { text: '9 ways to boost user retention' },
  ],
  activeItemColor: 'info',
};

export const FiveItems: Story<FBreadcrumbsProps> = Template.bind({});
FiveItems.args = {
  items: [
    { text: 'Guide', href: '/resources/guides' },
    { text: 'Operators' },
    { text: '9 ways to boost user retention' },
    { text: 'Another level' },
    { text: 'Last level' },
  ],
};
