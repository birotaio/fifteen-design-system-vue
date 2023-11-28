import FAvatar from '@/components/FAvatar.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FAvatarProps } from '@/components/FAvatar.vue';

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

export const Tiny: StoryFn<FAvatarProps> = Template.bind({});
Tiny.args = {
  src: 'https://i.pravatar.cc/48?img=12',
  alt: 'Some random avatar',
  size: 24,
};

export const Small: StoryFn<FAvatarProps> = Template.bind({});
Small.args = {
  src: 'https://i.pravatar.cc/160?img=35',
  alt: 'Some random avatar',
};

export const Large: StoryFn<FAvatarProps> = Template.bind({});
Large.args = {
  src: 'https://i.pravatar.cc/364?img=7',
  alt: 'Some random avatar',
  size: 192,
};

export const Lazy: StoryFn<FAvatarProps> = Template.bind({});
Lazy.args = {
  src: 'https://i.pravatar.cc/364?img=9',
  placeholder: 'https://i.pravatar.cc/10?img=9',
  alt: 'Some random avatar',
  size: 192,
};

export const Initials: StoryFn<FAvatarProps> = Template.bind({});
Initials.args = {
  size: 48,
  letter: 'J',
  color: 'secondary',
  textColor: 'neutral--light-5',
};
