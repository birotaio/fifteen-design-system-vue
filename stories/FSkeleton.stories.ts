import { Story } from '@storybook/vue3';
import { genSize } from '@/modules/utils';
import FSkeleton, { FSkeletonProps } from '@/components/FSkeleton.vue';

export default {
  title: 'Components/FSkeleton',
  component: FSkeleton,
};

const Template = (args: FSkeletonProps) => ({
  components: { FSkeleton },
  setup: () => ({ args }),
  template: '<FSkeleton v-bind="args" />',
});

export const Default: Story<FSkeletonProps> = Template.bind({});
Default.args = {};

export const Rounded: Story<FSkeletonProps> = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const RoundedFull: Story<FSkeletonProps> = Template.bind({});
RoundedFull.args = {
  roundedFull: true,
  height: genSize(64),
  width: genSize(150),
};

export const Colored: Story<FSkeletonProps> = Template.bind({});
Colored.args = {
  rounded: true,
  backgroundColor: 'primary',
  backgroundColorTo: 'primary--light-1',
  width: '50%',
};
