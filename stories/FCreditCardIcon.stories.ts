import { Story } from '@storybook/vue3';
import FsCreditCardIconsGrid, {
  FsCreditCardIconGridProps,
} from './components/FsCreditCardIconsGrid.vue';

export default {
  title: 'Components/FsCreditCardIcon',
  component: FsCreditCardIconsGrid,
};

const Template = (args: FsCreditCardIconGridProps) => ({
  components: { FsCreditCardIconsGrid },
  setup: () => ({ args }),
  template: '<FsCreditCardIconsGrid v-bind="args" />',
});

export const Default: Story<FsCreditCardIconGridProps> = Template.bind({});
Default.args = {
  size: 32,
};
