import FsElevationsMixins from '@@/stories/components/FsElevationsMixins.vue';

import type { StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Styles/Elevations',
};

const MixinsTemplate = () => ({
  components: { FsElevationsMixins },
  template: `<FsElevationsMixins />`,
});

export const Mixins: StoryFn = MixinsTemplate.bind({});
