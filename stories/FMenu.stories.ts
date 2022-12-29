import { Story } from '@storybook/vue3';
import FMenu, { FMenuProps, FMenuOption } from '@/components/FMenu.vue';
import FButton from '@/components/FButton.vue';
import { ref, watch } from 'vue';

export default {
  title: 'Components/FMenu',
  component: FMenu,
};

const Template = (args: FMenuProps) => ({
  components: { FMenu, FButton },
  setup: () => ({ args }),
  template: `
<FMenu v-bind="args">
  <template #activator="{ toggleMenu }">
    <FButton @click="toggleMenu">Open Menu</FButton>
  </template>
</FMenu>`,
});

const options: FMenuOption[] = [
  { label: 'Acquisition', value: 'acquisition' },
  { label: 'Benefits', value: 'benefits' },
  { label: 'Data', value: 'data' },
];

export const Default: Story<FMenuProps> = Template.bind({});
Default.args = {
  options,
};

export const WithDescriptions: Story<FMenuProps> = Template.bind({});
WithDescriptions.args = {
  options: [
    {
      label: 'Acquisition',
      description: 'A description about acquisition',
      value: 'acquisition',
    },
    {
      label: 'Benefits',
      description: 'A description about benefits',
      value: 'benefits',
    },
    { label: 'Data', value: 'data' },
  ],
};

export const Disabled: Story<FMenuProps> = Template.bind({});
Disabled.args = {
  options,
  disabled: true,
};

export const Offsets: Story<FMenuProps> = Template.bind({});
Offsets.args = {
  options,
  offsetSkid: 24,
  offsetDistance: 48,
};

export const OptionHeight: Story<FMenuProps> = Template.bind({});
OptionHeight.args = {
  options,
  optionHeight: 32,
};

const AutoPlacementTemplate = () => ({
  components: { FMenu, FButton },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const updatingOptions = ref<FMenuOption[]>([]);
    const isOpen = ref(false);
    watch(isOpen, (value: boolean) => {
      if (timeout) clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => (updatingOptions.value = options), 1000);
      } else {
        timeout = setTimeout(() => (updatingOptions.value = []), 250);
      }
    });
    return {
      updatingOptions,
      isOpen,
    };
  },
  template: `
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" v-model="isOpen">
  <template #activator="{ toggleMenu }">
    <FButton @click="toggleMenu">Open Menu</FButton>
  </template>
</FMenu>
`,
});

export const AutoPlacement: Story<FMenuProps> = AutoPlacementTemplate.bind({});

const ToggleTemplate = (args: FMenuProps) => ({
  components: { FMenu, FButton },
  setup: () => {
    const isOpen = ref(false);
    setInterval(() => (isOpen.value = !isOpen.value), 2000);
    return { isOpen, args };
  },
  template: `
<FMenu v-model="isOpen" v-bind="args">
  <template #activator>
    <div>Menu is {{ isOpen ? 'open' : 'closed' }}</div>
  </template>
</FMenu>`,
});

export const ToggleExternally: Story<FMenuProps> = ToggleTemplate.bind({});
ToggleExternally.args = {
  options,
};
