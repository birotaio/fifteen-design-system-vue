import ponyLogoComponent from '@@/stories/assets/pony.svg?component';
import ponyLogoMarkup from '@@/stories/assets/pony.svg?raw';

import { colorDesignTokens } from '@/constants/colors';
import FSvgImage from '@/components/FSvgImage.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FSvgImageProps } from '@/components/FSvgImage.vue';

export default {
  title: 'Components/FSvgImage',
  component: FSvgImage,
  argTypes: {
    fillColor: {
      type: 'select',
      options: ['', 'none', ...colorDesignTokens],
    },
    strokeColor: {
      type: 'select',
      options: ['', 'none', ...colorDesignTokens],
    },
  },
};

const Template = (args: FSvgImageProps) => ({
  components: { FSvgImage },
  setup: () => ({ args }),
  template: '<FSvgImage v-bind="args" />',
});

export const SvgComponent: StoryFn<FSvgImageProps> = Template.bind({});
SvgComponent.args = {
  component: ponyLogoComponent,
  alt: 'component svg',
  fillColor: 'primary',
  width: '240',
  height: '80',
};

export const SvgMarkup: StoryFn<FSvgImageProps> = Template.bind({});
SvgMarkup.args = {
  markup: ponyLogoMarkup,
  alt: 'markup svg',
  fillColor: 'primary',
  width: '240',
  height: '80',
};

export const SvgSrc: StoryFn<FSvgImageProps> = Template.bind({});
SvgSrc.args = {
  src: 'https://placeholder.pics/svg/24',
  alt: 'src svg',
  fillColor: 'primary',
  width: '24',
  height: '24',
};
