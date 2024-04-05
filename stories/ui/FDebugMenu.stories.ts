import FDebugMenu from '@/ui/FDebugMenu.vue';

import type { StoryFn } from '@storybook/vue3';
import type { FDebugMenuProps, DebugMenuConfig } from '@/ui/FDebugMenu.vue';

export default {
  title: 'UI/FDebugMenu',
  component: FDebugMenu,
  argTypes: {
    useWindowSize: {
      options: ['medium', 'large'],
    },
  },
};

const Template = (args: FDebugMenuProps) => ({
  components: { FDebugMenu },
  setup: () => ({ args }),
  template: '<FDebugMenu v-bind="args" />',
});

export const Default: StoryFn<FDebugMenuProps> = Template.bind({});
Default.args = {};

export const Open: StoryFn<FDebugMenuProps> = Template.bind({});
Open.args = {
  modelValue: true,
};

export const Name: StoryFn<FDebugMenuProps> = Template.bind({});
Name.args = {
  name: 'Custom name 🪲',
};

export const SnapFree: StoryFn<FDebugMenuProps> = Template.bind({});
SnapFree.args = {
  snapMode: 'free',
};

export const SnapEdges: StoryFn<FDebugMenuProps> = Template.bind({});
SnapEdges.args = {
  snapMode: 'edges',
};

export const SnapCorners: StoryFn<FDebugMenuProps> = Template.bind({});
SnapCorners.args = {
  snapMode: 'corners',
};

export const MaxWidth: StoryFn<FDebugMenuProps> = Template.bind({});
MaxWidth.args = {
  config: [
    {
      title: 'Favorite debug group',
      items: [
        {
          type: 'content',
          title: 'Huge overflowing content',
          content:
            'This is a very long content that will overflow the debug menu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi.',
        },
      ],
    },
  ],
  maxWidth: '733px',
};

const ConfigTemplate = (args: FDebugMenuProps) => ({
  components: { FDebugMenu },
  setup: () => {
    const testToggle1 = ref(false);
    const testToggle2 = ref(true);
    const refInput1 = ref<string>();
    const refInput2 = ref('World');
    const refSelect1 = ref<string>();
    const refSelect2 = ref('Hallo');
    const testContent = ref({
      projects: [
        {
          name: 'Project 1',
          description: 'This is a project',
        },
        {
          name: 'Project 2',
          description: 'This is another project',
        },
      ],
    });

    const config: DebugMenuConfig = [
      {
        title: 'A debug group',
        expanded: true,
        items: [
          {
            type: 'trigger',
            title: 'First test action',
            description: 'This one will succeed',
            triggerText: 'Call',
            action: async () => {
              await new Promise(resolve => setTimeout(resolve, 2000));
              return 'Success message after waiting 2 seconds';
            },
          },
          {
            type: 'trigger',
            title: 'Second test action',
            description: 'But this one will fail',
            triggerText: 'Try',
            action: () => {
              throw new Error(
                'When I throw, the error is handled and displayed'
              );
            },
          },
          {
            type: 'trigger',
            title: 'Third test action, no description',
            triggerText: 'Launch',
            action: () => 'Launched to Mars',
          },
          {
            type: 'trigger',
            title: 'Fourth test action',
            description: 'This is disabled',
            triggerText: 'Call',
            disabled: true,
            action: () => {},
          },
        ],
      },
      {
        title: 'Another debug group',
        expanded: true,
        items: [
          {
            type: 'toggle',
            title: 'First test toggle',
            description: 'I can have a wonderful description too',
            ref: testToggle1,
          },
          {
            type: 'toggle',
            title: 'Second test toggle',
            description: 'I can be disabled',
            disabled: true,
            ref: testToggle2,
          },
          {
            type: 'input',
            title: 'Free input, no description, with placeholder',
            placeholder: 'Type here',
            ref: refInput1,
          },
          {
            type: 'input',
            title: 'Second input',
            description: 'This one is disabled and prefilled',
            disabled: true,
            ref: refInput2,
          },
          {
            type: 'select',
            title: 'Select clearable with placeholder',
            placeholder: 'Choose...',
            clearable: true,
            options: ['Me', 'Moi', 'Ich'].map(text => ({
              value: text,
              label: text,
            })),
            ref: refSelect1,
          },
          {
            type: 'select',
            title: 'Second select',
            description: 'This one is disabled and prefilled',
            disabled: true,
            options: ['Hello', 'Bonjour', 'Hallo'].map(text => ({
              value: text,
              label: text,
            })),
            ref: refSelect2,
          },
        ],
      },
      {
        title: 'A third group',
        items: [
          {
            type: 'content',
            title: 'I can display config',
            content: testContent,
          },
        ],
      },
    ];
    return {
      args,
      config,
    };
  },
  template: '<FDebugMenu :config="config" v-bind="args" />',
});

export const Config: StoryFn<FDebugMenuProps> = ConfigTemplate.bind({});
Config.args = {};

export const Colors: StoryFn<FDebugMenuProps> = ConfigTemplate.bind({});
Colors.args = {
  color: 'royalblue',
  textColor: 'danger--light-1',
  controlColor: 'secondary',
};
