import { StoryFn } from '@storybook/vue3';

import FCard from '@/components/FCard.vue';
import { colorDesignTokens } from '@/constants/colors';

import type { FCardProps } from '@/components/FCard.vue';

export default {
  title: 'Components/FCard',
  component: FCard,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
    hoverColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    textColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    hoverTextColor: {
      type: 'select',
      options: colorDesignTokens,
    },
  },
};

interface FCardArgs extends FCardProps {
  text: string;
}

const Template = (args: FCardProps) => ({
  components: { FCard },
  setup: () => ({ args }),
  template:
    '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>',
});

export const Default: StoryFn<FCardArgs> = Template.bind({});
Default.args = {
  width: '800px',
  color: 'info',
  hoverColor: 'info',
  text: `“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”`,
  textColor: 'neutral--light-5',
  hoverTextColor: 'neutral--light-5',
};
