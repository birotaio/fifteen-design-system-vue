import { Story } from '@storybook/vue3';
import FMenu, { FMenuProps } from '@/components/FMenu.vue';
import FButton from '@/components/FButton.vue';

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

export const Default: Story<FMenuProps> = Template.bind({});
Default.args = {
  options: [
    { label: 'Acquisition', value: 'acquisition' },
    { label: 'Benefits', value: 'benefits' },
    { label: 'Data', value: 'data' },
  ],
};
