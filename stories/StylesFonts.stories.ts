import { Story } from '@storybook/vue3';
import FsFontsElements from '@/stories/components/FsFontsElements.vue';
import FsFontsMixins from '@/stories/components/FsFontsMixins.vue';

export default {
  title: 'Styles/Fonts',
};

const ElementsTemplate = () => ({
  components: { FsFontsElements },
  template: `<FsFontsElements />`,
});

export const Elements: Story = ElementsTemplate.bind({});

const MixinsTemplate = () => ({
  components: { FsFontsMixins },
  template: `<FsFontsMixins />`,
});

export const Mixins: Story = MixinsTemplate.bind({});
