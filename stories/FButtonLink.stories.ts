import FButtonLink from '@/components/router/FButtonLink.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FButtonLinkProps } from '@/components/router/FButtonLink.vue';

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
    const { text, ...rest } = toRefs(args);
    const props = toReactive(rest);
    return { text, props };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>',
});

export const Default: StoryFn<FButtonLinkArgs> = Template.bind({});
Default.args = {
  text: 'Default',
  location: '/',
};

export const Info: StoryFn<FButtonLinkArgs> = Template.bind({});
Info.args = {
  text: 'Info',
  color: 'info',
  location: '/',
};

export const ObjectLocation: StoryFn<FButtonLinkArgs> = Template.bind({});
ObjectLocation.args = {
  text: 'Object Location',
  location: { name: 'test' },
};

export const External: StoryFn<FButtonLinkArgs> = Template.bind({});
External.args = {
  text: 'External',
  color: 'warning',
  location: 'https://fifteen.eu',
};

export const AnchorLink: StoryFn<FButtonLinkArgs> = Template.bind({});
AnchorLink.args = {
  text: 'AnchorLink',
  color: 'success',
  location: '#anchor',
};

export const EmailLink: StoryFn<FButtonLinkArgs> = Template.bind({});
EmailLink.args = {
  text: 'EmailLink',
  color: 'info',
  location: 'mailto:?subject=test',
};

export const Disabled: StoryFn<FButtonLinkArgs> = Template.bind({});
Disabled.args = {
  text: 'Disabled',
  disabled: true,
  location: '/',
};

export const NullLocation: StoryFn<FButtonLinkArgs> = Template.bind({});
NullLocation.args = {
  text: 'Null Location',
  location: null,
};
