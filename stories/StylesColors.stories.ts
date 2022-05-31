import { Story } from '@storybook/vue3';
import FsColorsCssVars from '@/.storybook/components/FsColorsCssVars.vue';
import FsColorsMixins from '@/.storybook/components/FsColorsMixins.vue';

export default {
  title: 'Styles/Colors',
};

const CssVarsTemplate = () => ({
  components: { FsColorsCssVars },
  template: `<FsColorsCssVars />`,
});

export const CssVars: Story = CssVarsTemplate.bind({});

const MixinsTemplate = () => ({
  components: { FsColorsMixins },
  template: `<FsColorsMixins />`,
});

export const Mixins: Story = MixinsTemplate.bind({});
