import { Story } from '@storybook/vue3';
import FGrid, { FGridProps } from '@/components/FGrid.vue';

export default {
  title: 'Components/FGrid',
  component: FGrid,
  argTypes: {
    columns: { type: 'number' },
    gap: { type: 'number' },
  },
};

const Template = (args: FGridProps) => ({
  components: { FGrid },
  setup: () => ({ args }),
  template: `
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>`,
});

export const Default: Story<FGridProps> = Template.bind({});
Default.args = {};

export const Columns: Story<FGridProps> = Template.bind({});
Columns.args = {
  columns: 7,
};

export const Gutter: Story<FGridProps> = Template.bind({});
Gutter.args = {
  gap: 32,
};
