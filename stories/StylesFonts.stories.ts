import FsFontsElements from '@@/stories/components/FsFontsElements.vue';
import FsFontsMixins from '@@/stories/components/FsFontsMixins.vue';

import type { StoryFn } from '@storybook/vue3';

export default {
  title: 'Styles/Fonts',
};

const ElementsTemplate = () => ({
  components: { FsFontsElements },
  template: `<FsFontsElements />`,
});

export const Elements: StoryFn = ElementsTemplate.bind({});

const MixinsTemplate = () => ({
  components: { FsFontsMixins },
  template: `<FsFontsMixins />`,
});

export const Mixins: StoryFn = MixinsTemplate.bind({});
