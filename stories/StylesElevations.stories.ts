import { Story } from '@storybook/vue3';
import FsElevationsMixins from '@/stories/components/FsElevationsMixins.vue';

export default {
  title: 'Styles/Elevations',
};

const MixinsTemplate = () => ({
  components: { FsElevationsMixins },
  template: `<FsElevationsMixins />`,
});

export const Mixins: Story = MixinsTemplate.bind({});
