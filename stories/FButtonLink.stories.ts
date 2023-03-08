import { Story } from '@storybook/vue3';

import FButtonLink, {
  FButtonLinkProps,
} from '@/components/router/FButtonLink.vue';

export default {
  title: 'Components/Router/FButtonLink',
  component: FButtonLink,
  argTypes: {
    onClick: { action: 'click' },
  },
};

interface FButtonLinkArgs extends FButtonLinkProps {
  text: string;
}

const Template = (args: FButtonLinkArgs) => ({
  components: { FButtonLink },
  setup() {
    const { text, ...props } = args;
    return { text, props };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>',
});

export const Default: Story<FButtonLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  location: '/',
};

export const Info: Story<FButtonLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  location: '/',
};

export const ObjectLocation: Story<FButtonLinkArgs> = Template.bind({});
ObjectLocation.args = {
  text: 'Object Location',
  location: { name: 'test' },
};

export const External: Story<FButtonLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  location: 'https://fifteen.eu',
};

export const AnchorLink: Story<FButtonLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  location: '#anchor',
};

export const EmailLink: Story<FButtonLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'EmailLink',
  color: 'info',
  location: 'mailto:?subject=test',
};

export const Disabled: Story<FButtonLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  location: '/',
};

export const NullLocation: Story<FButtonLinkArgs> = Template.bind({});
NullLocation.args = {
  text: 'Null Location',
  location: null,
};
