import { StoryFn } from '@storybook/vue3';

import FLogo, { FLogoProps, FLogoVariant } from '@/components/FLogo.vue';
import { colorDesignTokens } from '@/constants/colors';

const logoVariants: FLogoVariant[] = [
  'vertical',
  'horizontal',
  'text-only',
  'image-only',
  'product',
];

export default {
  title: 'Components/FLogo',
  component: FLogo,
  argTypes: {
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
    variant: {
      type: 'select',
      options: logoVariants,
    },
  },
};

const Template = (args: FLogoProps) => ({
  components: { FLogo },
  setup: () => ({ args }),
  template: '<FLogo v-bind="args" />',
});

export const Horizontal: StoryFn<FLogoProps> = Template.bind({});
Horizontal.args = {
  width: '200px',
};

export const Vertical: StoryFn<FLogoProps> = Template.bind({});
Vertical.args = {
  width: '140px',
  variant: 'vertical',
  color: 'success',
};

export const ImageOnly: StoryFn<FLogoProps> = Template.bind({});
ImageOnly.args = {
  width: '140px',
  variant: 'image-only',
  color: 'secondary',
};

export const TextOnly: StoryFn<FLogoProps> = Template.bind({});
TextOnly.args = {
  width: '200px',
  variant: 'text-only',
  color: 'info',
};

export const Product: StoryFn<FLogoProps> = Template.bind({});
Product.args = {
  width: '200px',
  variant: 'product',
  color: 'success',
  productName: 'analytics',
  productNameColor: 'success--dark-1',
};
