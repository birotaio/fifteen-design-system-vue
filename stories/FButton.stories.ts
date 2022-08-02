import { Story } from '@storybook/vue3';
import FButton, { FButtonProps } from '@/components/FButton.vue';
import FIcon from '@/components/FIcon.vue';
import { colorDesignTokens } from '@/config/colors';
import { getIconList } from '@/config/icons/.utils';

export default {
  title: 'Components/FButton',
  component: FButton,
  argTypes: {
    location: {
      type: 'string',
    },
    rel: {
      type: 'string',
    },
    color: {
      type: 'select',
      options: colorDesignTokens,
    },
    focusColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    hoverColor: {
      type: 'select',
      options: colorDesignTokens,
    },
    size: {
      type: 'select',
      options: ['tiny', 'small', 'medium', 'large', 'giant'],
    },
    iconName: {
      type: 'select',
      options: getIconList(),
    },
    onClick: { action: 'click' },
    onFocus: { action: 'focus' },
    onBlur: { action: 'blur' },
  },
};

interface FButtonArgs extends FButtonProps {
  text: string;
  iconName?: string;
}

const Template = (args: FButtonArgs) => ({
  components: { FButton, FIcon },
  setup() {
    const { text, iconName, ...props } = args;
    return { text, iconName, props };
  },
  template:
    '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>',
});

export const Default: Story<FButtonArgs> = Template.bind({});
Default.args = {
  text: 'Click me',
  color: 'info',
  ghost: false,
};

export const Disabled: Story<FButtonArgs> = Template.bind({});
Disabled.args = {
  text: 'Click me',
  color: 'info',
  disabled: true,
};
export const AnyColor: Story<FButtonArgs> = Template.bind({});
AnyColor.args = {
  text: 'Click me',
  color: '#33C5FF',
  focusColor: '#AAE6FF',
  hoverColor: '#AAE6FF',
};

export const Ghost: Story<FButtonArgs> = Template.bind({});
Ghost.args = {
  text: 'Ghost',
  color: 'info',
  ghost: true,
};

export const Outlined: Story<FButtonArgs> = Template.bind({});
Outlined.args = {
  text: 'Outlined',
  color: 'info',
  outlined: true,
};

export const Link: Story<FButtonArgs> = Template.bind({});
Link.args = {
  text: 'I am a link',
  color: 'info',
  href: 'https://fifteen.eu',
  target: '_blank',
};

export const WithIcon: Story<FButtonArgs> = Template.bind({});
WithIcon.args = {
  text: 'With Icon, go square',
  color: 'info',
  iconName: 'crossSquare',
};

export const IconOnly: Story<FButtonArgs> = Template.bind({});
IconOnly.args = {
  color: 'info',
  icon: true,
  iconName: 'zoovBikeAlt',
};

const AllSizesTemplate = (args: FButtonArgs) => ({
  components: { FButton, FIcon },
  setup() {
    const { text, iconName, ...props } = args;
    return { text, iconName, props };
  },
  template: `
<div style="display:flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
  <FButton v-bind="props" size="tiny"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="small"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="medium"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="large"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="giant"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
</div>
`,
});

export const Loading: Story<FButtonArgs> = AllSizesTemplate.bind({});
Loading.args = {
  text: 'Loading',
  color: 'secondary',
  iconName: 'zoovBikeAlt',
  loading: true,
};
