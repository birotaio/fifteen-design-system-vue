import { Story } from '@storybook/vue3';
import FCard, { FCardProps } from '@/components/FCard.vue';
import { colorDesignTokens } from '@@/config/colors';

export default {
  title: 'Components/FCard',
  component: FCard,
  argTypes: {
    color: {
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

export const Default: Story<FCardArgs> = Template.bind({});
Default.args = {
  width: '800px',
  color: 'info',
  text: `“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”`,
};
