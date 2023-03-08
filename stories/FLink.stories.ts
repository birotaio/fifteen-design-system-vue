import { Story } from '@storybook/vue3';

import FLink, { FLinkProps } from '@/components/FLink.vue';

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
    const { text, ...props } = args;
    return { text, props };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>',
});

export const Default: Story<FLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  href: '/',
};

export const Uppercase: Story<FLinkArgs> = Template.bind({});
Uppercase.args = {
  text: 'Uppercase',
  href: '/',
  uppercase: true,
};

export const Info: Story<FLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  href: '/',
};

export const External: Story<FLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  href: 'https://fifteen.eu',
  target: '_blank',
};

export const AnchorLink: Story<FLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  href: '#anchor',
};

export const EmailLink: Story<FLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'EmailLink',
  color: 'info',
  href: 'mailto:?subject=test',
};

export const Disabled: Story<FLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  href: '/',
};

export const WithoutArrow: Story<FLinkArgs> = Template.bind({});
WithoutArrow.args = {
  text: 'Without Arrow',
  hideArrow: true,
  href: '/',
};

export const ArrowHover: Story<FLinkArgs> = Template.bind({});
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

export const NoLinkTabindex: Story<FLinkArgs> = Template.bind({});
NoLinkTabindex.args = {
  text: 'No link but a tabindex',
  tabindex: 0,
};
