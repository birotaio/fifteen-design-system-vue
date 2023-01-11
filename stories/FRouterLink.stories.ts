import { Story } from '@storybook/vue3';
import FRouterLink, {
  FRouterLinkProps,
} from '@/components/router/FRouterLink.vue';

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

export const Default: Story<FRouterLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  location: '/',
};

export const Uppercase: Story<FRouterLinkArgs> = Template.bind({});
Uppercase.args = {
  text: 'Uppercase',
  location: '/',
  uppercase: true,
};

export const Info: Story<FRouterLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  location: '/',
};

export const ObjectLocation: Story<FRouterLinkArgs> = Template.bind({});
ObjectLocation.args = {
  text: 'Object Location',
  location: { name: 'test' },
};

export const External: Story<FRouterLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  location: 'https://fifteen.eu',
};

export const AnchorLink: Story<FRouterLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  location: '#anchor',
};

export const EmailLink: Story<FRouterLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'Email Link',
  color: 'info',
  location: 'mailto:?subject=test',
};

export const Disabled: Story<FRouterLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  location: '/',
};

export const WithoutArrow: Story<FRouterLinkArgs> = Template.bind({});
WithoutArrow.args = {
  text: 'Without Arrow',
  hideArrow: true,
  location: '/',
};

export const ArrowHover: Story<FRouterLinkArgs> = Template.bind({});
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

export const NullLocation: Story<FRouterLinkArgs> = Template.bind({});
NullLocation.args = {
  text: 'Null Location',
  location: null,
};
