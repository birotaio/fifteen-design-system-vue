import { StoryFn } from '@storybook/vue3';

import FGrid from '@/components/FGrid.vue';
import FCard from '@/components/FCard.vue';
import FGridItem, { FGridItemProps } from '@/components/FGridItem.vue';

export default {
  title: 'Components/FGridItem',
  component: FGridItem,
  argTypes: {
    columns: { type: 'number' },
    gutter: { type: 'number' },
  },
};

const Template = (args: FGridItemProps) => ({
  components: { FGrid, FGridItem, FCard },
  setup: () => ({ args }),
  template: `
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    `,
});

export const Default: StoryFn<FGridItemProps> = Template.bind({});
Default.args = {};

export const Responsive: StoryFn<FGridItemProps> = Template.bind({});
Responsive.args = {
  span: 2,
  xxs: 12,
  xs: 9,
  sm: 6,
  md: 4,
  lg: 3,
};
