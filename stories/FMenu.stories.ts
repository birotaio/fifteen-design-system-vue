import { Story } from '@storybook/vue3';
import FMenu, { FMenuProps, FMenuOption } from '@/components/FMenu.vue';
import FButton from '@/components/FButton.vue';
import { ref } from 'vue';

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

const AutoPlacementTemplate = () => ({
  components: { FMenu, FButton },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const updatingOptions = ref<FMenuOption[]>([]);
    function handleToggle(open: boolean) {
      if (timeout) clearTimeout(timeout);
      if (open) {
        timeout = setTimeout(() => (updatingOptions.value = options), 1000);
      } else {
        timeout = setTimeout(() => (updatingOptions.value = []), 250);
      }
    }
    return {
      updatingOptions,
      handleToggle,
    };
  },
  template: `
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" @toggle="handleToggle">
  <template #activator="{ toggleMenu }">
    <FButton @click="toggleMenu">Open Menu</FButton>
  </template>
</FMenu>
`,
});

export const AutoPlacement: Story<FMenuProps> = AutoPlacementTemplate.bind({});
