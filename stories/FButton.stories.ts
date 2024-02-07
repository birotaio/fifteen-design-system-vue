import FButton from '@/components/FButton.vue';
import FIcon from '@/components/FIcon.vue';
import { colorDesignTokens } from '@/constants/colors';
import { getIconList } from '@/.generated/utils';
import { registerIcons } from '@/composables/useIcon';
import { icons } from '@/icons';

import type { StoryFn } from '@storybook/vue3';
import type { FButtonProps } from '@/components/FButton.vue';

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
    registerIcons('icons', icons);
    const { text, iconName, ...rest } = toRefs(args);
    const props = toReactive(rest);
    return { text, iconName, props };
  },
  template:
    '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>',
});

export const Default: StoryFn<FButtonArgs> = Template.bind({});
Default.args = {
  text: 'Click me',
  color: 'info',
  ghost: false,
};

export const Disabled: StoryFn<FButtonArgs> = Template.bind({});
Disabled.args = {
  text: 'Click me',
  color: 'info',
  disabled: true,
};
export const AnyColor: StoryFn<FButtonArgs> = Template.bind({});
AnyColor.args = {
  text: 'Click me',
  color: '#33C5FF',
  focusColor: '#AAE6FF',
  hoverColor: '#AAE6FF',
};

export const Ghost: StoryFn<FButtonArgs> = Template.bind({});
Ghost.args = {
  text: 'Ghost',
  color: 'info',
  ghost: true,
};

export const Outlined: StoryFn<FButtonArgs> = Template.bind({});
Outlined.args = {
  text: 'Outlined',
  color: 'info',
  outlined: true,
};

export const Link: StoryFn<FButtonArgs> = Template.bind({});
Link.args = {
  text: 'I am a link',
  color: 'info',
  href: 'https://fifteen.eu',
  target: '_blank',
};

export const WithIcon: StoryFn<FButtonArgs> = Template.bind({});
WithIcon.args = {
  text: 'With Icon, go square',
  color: 'info',
  iconName: 'crossSquare',
};

export const IconOnly: StoryFn<FButtonArgs> = Template.bind({});
IconOnly.args = {
  color: 'info',
  icon: true,
  iconName: 'zoovBikeAlt',
};

const AllSizesTemplate = (args: FButtonArgs) => ({
  components: { FButton, FIcon },
  setup() {
    registerIcons('icons', icons);
    const { text, iconName, ...rest } = toRefs(args);
    const props = toReactive(rest);
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

export const Loading: StoryFn<FButtonArgs> = AllSizesTemplate.bind({});
Loading.args = {
  text: 'Loading',
  color: 'secondary',
  iconName: 'zoovBikeAlt',
  loading: true,
};
