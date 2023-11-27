import FsColorsCssVars from '@@/stories/components/FsColorsCssVars.vue';
import FsColorsMixins from '@@/stories/components/FsColorsMixins.vue';

import type { StoryFn } from '@storybook/vue3';

export default {
  title: 'Styles/Colors',
};

const CssVarsTemplate = () => ({
  components: { FsColorsCssVars },
  template: `<FsColorsCssVars />`,
});

export const CssVars: StoryFn = CssVarsTemplate.bind({});

const MixinsTemplate = () => ({
  components: { FsColorsMixins },
  template: `<FsColorsMixins />`,
});

export const Mixins: StoryFn = MixinsTemplate.bind({});
