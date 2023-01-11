import { Story } from '@storybook/vue3';
import FLogo, { FLogoProps, FLogoVariant } from '@/components/FLogo.vue';
import { colorDesignTokens } from '@/constants/colors';

const logoVariants: FLogoVariant[] = [
  'vertical',
  'horizontal',
  'text-only',
  'image-only',
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

export const Horizontal: Story<FLogoProps> = Template.bind({});
Horizontal.args = {
  width: '200px',
};

export const Vertical: Story<FLogoProps> = Template.bind({});
Vertical.args = {
  width: '140px',
  variant: 'vertical',
  color: 'success',
};

export const ImageOnly: Story<FLogoProps> = Template.bind({});
ImageOnly.args = {
  width: '140px',
  variant: 'image-only',
  color: 'secondary',
};

export const TextOnly: Story<FLogoProps> = Template.bind({});
TextOnly.args = {
  width: '200px',
  variant: 'text-only',
  color: 'info',
};

export const Product: Story<FLogoProps> = Template.bind({});
Product.args = {
  width: '200px',
  variant: 'product',
  color: 'success',
  productName: 'analytics',
  productNameColor: 'success--dark-1',
};
