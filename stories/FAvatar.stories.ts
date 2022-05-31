import { Story } from '@storybook/vue3';
import FAvatar, { FAvatarProps } from '@/components/FAvatar.vue';

export default {
  title: 'Components/FAvatar',
  component: FAvatar,
  argTypes: {
    useWindowSize: {
      options: ['medium', 'large'],
    },
  },
};

const Template = (args: FAvatarProps) => ({
  components: { FAvatar },
  setup: () => ({ args }),
  template: '<FAvatar v-bind="args" />',
});

export const Small: Story<FAvatarProps> = Template.bind({});
Small.args = {
  src: 'https://i.pravatar.cc/300?img=35',
  alt: 'Some random avatar',
};

export const Large: Story<FAvatarProps> = Template.bind({});
Large.args = {
  src: 'https://i.pravatar.cc/300?img=7',
  alt: 'Some random avatar',
  size: 192,
};

export const Lazy: Story<FAvatarProps> = Template.bind({});
Lazy.args = {
  src: 'https://i.pravatar.cc/300?img=9',
  placeholder: 'https://i.pravatar.cc/10?img=9',
  alt: 'Some random avatar',
  size: 192,
};
