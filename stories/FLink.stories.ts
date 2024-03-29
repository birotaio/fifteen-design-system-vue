import FLink from '@/components/FLink.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FLinkProps } from '@/components/FLink.vue';

export default {
  title: 'Components/FLink',
  component: FLink,
  argTypes: {
    onClick: { action: 'click' },
  },
};

interface FLinkArgs extends FLinkProps {
  text: string;
}

const Template = (args: FLinkArgs) => ({
  components: { FLink },
  setup() {
    const { text, ...rest } = toRefs(args);
    const props = toReactive(rest);
    return { text, props };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>',
});

export const Default: StoryFn<FLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  href: '/',
};

export const Uppercase: StoryFn<FLinkArgs> = Template.bind({});
Uppercase.args = {
  text: 'Uppercase',
  href: '/',
  uppercase: true,
};

export const Info: StoryFn<FLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  href: '/',
};

export const External: StoryFn<FLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  href: 'https://fifteen.eu',
  target: '_blank',
};

export const AnchorLink: StoryFn<FLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  href: '#anchor',
};

export const EmailLink: StoryFn<FLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'EmailLink',
  color: 'info',
  href: 'mailto:?subject=test',
};

export const Disabled: StoryFn<FLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  href: '/',
};

export const WithoutArrow: StoryFn<FLinkArgs> = Template.bind({});
WithoutArrow.args = {
  text: 'Without Arrow',
  hideArrow: true,
  href: '/',
};

export const ArrowHover: StoryFn<FLinkArgs> = Template.bind({});
ArrowHover.parameters = {
  backgrounds: { default: 'info' },
};
ArrowHover.args = {
  text: 'Click me',
  href: '/test',
  color: 'secondary',
  hoverColor: 'neutral--light-5',
  arrowHoverColor: 'secondary',
};

export const NoLinkTabindex: StoryFn<FLinkArgs> = Template.bind({});
NoLinkTabindex.args = {
  text: 'No link but a tabindex',
  tabindex: 0,
};
