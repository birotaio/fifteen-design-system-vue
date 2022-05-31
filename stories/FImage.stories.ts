import FImage, { FImageProps } from '@/components/FImage.vue';
import { Story } from '@storybook/vue3';

export default {
  title: 'Components/FImage',
  component: FImage,
};

const Template = (args: FImageProps) => ({
  components: { FImage },
  setup: () => ({ args }),
  template: '<FImage v-bind="args" />',
});

export const Default: Story<FImageProps> = Template.bind({});
Default.args = {
  src: 'https://picsum.photos/seed/picsum/400/400',
  placeholder: 'https://picsum.photos/seed/picsum/20/20',
  height: '400px',
  width: '400px',
  alt: '',
};

export const SharpCorners: Story<FImageProps> = Template.bind({});
SharpCorners.args = {
  width: '400px',
  height: '600px',
  src: 'https://picsum.photos/seed/picsum/400/600',
  alt: '',
  corners: 'sharp',
};

export const Circular: Story<FImageProps> = Template.bind({});
Circular.args = {
  width: '400px',
  height: '400px',
  src: 'https://picsum.photos/seed/picsum/400/400',
  alt: '',
  corners: 'circular',
};

export const FullWidth: Story<FImageProps> = Template.bind({});
FullWidth.args = {
  width: '100%',
  src: 'https://picsum.photos/seed/picsum/1200/1200',
  alt: '',
};

export const NoSource: Story<FImageProps> = Template.bind({});
NoSource.args = {
  width: '100%',
  height: '400px',
  src: '',
  alt: '',
};
