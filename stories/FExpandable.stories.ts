import { StoryFn } from '@storybook/vue3';

import FExpandable, { FExpandableProps } from '@/components/FExpandable.vue';
import FButton from '@/components/FButton.vue';

export default {
  title: 'Components/FExpandable',
  component: FExpandable,
};

interface FExpandableArgs extends FExpandableProps {
  title: string;
  text: string;
}

const title = 'Emissions de CO2';
const text =
  'En moyenne, un kilomètre parcouru sur un vélo électrique Fifteen économise Xg de CO2. Dans une ville comme Epinal avec 150 vélos électriques en libre-service, nous parlons de Xt de CO2 économisées par an.';

const Template = (args: FExpandableProps) => ({
  components: { FExpandable },
  setup: () => ({ args }),
  template: `
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>`,
});

export const Default: StoryFn<FExpandableArgs> = Template.bind({});
Default.args = {
  title,
  text,
};

export const ContentGap: StoryFn<FExpandableArgs> = Template.bind({});
ContentGap.args = {
  title,
  text,
  gap: 8,
};

export const IconScale: StoryFn<FExpandableArgs> = Template.bind({});
IconScale.args = {
  title,
  text,
  iconScale: 0.75,
};

const TemplateSlots = (args: FExpandableProps) => ({
  components: { FExpandable, FButton },
  setup: () => ({ args }),
  template: `
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h6>{{ args.title }}</h6>
        <p>I am the title slot</p>
      </template>
      <div>{{ args.text }}</div>
      <FButton style="margin-top: 16px">Hello</FButton>
    </FExpandable>`,
});
export const Slots: StoryFn<FExpandableArgs> = TemplateSlots.bind({});
Slots.args = {
  title,
  text,
};

export const WithHoverAnimation: StoryFn<FExpandableArgs> = Template.bind({});

WithHoverAnimation.args = {
  title,
  text,
  withHoverAnimation: true,
};
