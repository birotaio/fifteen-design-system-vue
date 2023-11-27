import FRouterLink from '@/components/router/FRouterLink.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FRouterLinkProps } from '@/components/router/FRouterLink.vue';

export default {
  title: 'Components/Router/FRouterLink',
  component: FRouterLink,
  argTypes: {
    onClick: { action: 'click' },
  },
};

interface FRouterLinkArgs extends FRouterLinkProps {
  text: string;
}

const Template = (args: FRouterLinkArgs) => ({
  components: { FRouterLink },
  setup() {
    const { text, ...props } = args;
    return { text, props };
  },
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>',
});

export const Default: StoryFn<FRouterLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  location: '/',
};

export const Uppercase: StoryFn<FRouterLinkArgs> = Template.bind({});
Uppercase.args = {
  text: 'Uppercase',
  location: '/',
  uppercase: true,
};

export const Info: StoryFn<FRouterLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  location: '/',
};

export const ObjectLocation: StoryFn<FRouterLinkArgs> = Template.bind({});
ObjectLocation.args = {
  text: 'Object Location',
  location: { name: 'test' },
};

export const External: StoryFn<FRouterLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  location: 'https://fifteen.eu',
};

export const AnchorLink: StoryFn<FRouterLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  location: '#anchor',
};

export const EmailLink: StoryFn<FRouterLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'Email Link',
  color: 'info',
  location: 'mailto:?subject=test',
};

export const Disabled: StoryFn<FRouterLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  location: '/',
};

export const WithoutArrow: StoryFn<FRouterLinkArgs> = Template.bind({});
WithoutArrow.args = {
  text: 'Without Arrow',
  hideArrow: true,
  location: '/',
};

export const ArrowHover: StoryFn<FRouterLinkArgs> = Template.bind({});
ArrowHover.parameters = {
  backgrounds: { default: 'info' },
};
ArrowHover.args = {
  text: 'Click me',
  location: '/test',
  color: 'secondary',
  hoverColor: 'neutral--light-5',
  arrowHoverColor: 'secondary',
};

export const NullLocation: StoryFn<FRouterLinkArgs> = Template.bind({});
NullLocation.args = {
  text: 'Null Location',
  location: null,
};
