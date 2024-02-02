import { ref, watch } from 'vue';

import FPopup from '@/components/FPopup.vue';
import FButton from '@/components/FButton.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FPopupProps } from '@/components/FPopup.vue';

export default {
  title: 'Components/FPopup',
  component: FPopup,
};

const Template = (args: FPopupProps) => ({
  components: { FPopup, FButton },
  setup: () => ({ args }),
  template: `
    <FPopup v-bind="args">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div>Laboris quis amet aliqua cupidatat.</div>
    </FPopup>`,
});

export const Default: StoryFn<FPopupProps> = Template.bind({});

export const Disabled: StoryFn<FPopupProps> = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Offsets: StoryFn<FPopupProps> = Template.bind({});
Offsets.args = {
  offsetSkid: 24,
  offsetDistance: 48,
};

const AutoPlacementTemplate = () => ({
  components: { FPopup, FButton },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const loading = ref(true);
    const isOpen = ref(false);
    watch(isOpen, (value: boolean) => {
      if (timeout) clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => (loading.value = false), 1500);
      } else {
        timeout = setTimeout(() => (loading.value = true), 250);
      }
    });
    return {
      loading,
      isOpen,
    };
  },
  template: `
    <div style="height: 300px"></div>
    <FPopup v-model="isOpen">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div v-if="loading">Loading...</div>
      <div v-else style="max-width: 400px">Laboris quis amet aliqua cupidatat.
        Lorem nulla sunt deserunt fugiat occaecat adipisicing consequat elit.
        Laboris proident laboris sit consequat proident anim occaecat minim deserunt.
        Minim officia dolore duis Lorem quis consectetur nostrud exercitation consequat commodo veniam minim adipisicing.
        Exercitation veniam et duis duis adipisicing culpa. Lorem et tempor qui officia aliquip.
      </div>
    </FPopup>`,
});

export const AutoPlacement: StoryFn<FPopupProps> = AutoPlacementTemplate.bind(
  {}
);

const ToggleTemplate = (args: FPopupProps) => ({
  components: { FPopup, FButton },
  setup: () => {
    const isOpen = ref(false);
    setInterval(() => (isOpen.value = !isOpen.value), 2000);
    return { isOpen, args };
  },
  template: `
    <FPopup v-model="isOpen" v-bind="args">
      <template #activator>
        <div>Popup is {{ isOpen ? 'open' : 'closed' }}</div>
      </template>
      <div>Exercitation veniam et duis duis adipisicing culpa.</div>
    </FPopup>`,
});

export const ToggleExternally: StoryFn<FPopupProps> = ToggleTemplate.bind({});
