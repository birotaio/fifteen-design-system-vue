import { Story } from '@storybook/vue3';
import FForm, { FFormProps } from '@/components/FForm.vue';
import FGrid from '@/components/FGrid.vue';
import FGridItem from '@/components/FGridItem.vue';
import FButton from '@/components/FButton.vue';

import FInput from '@/components/FInput.vue';
import FCheckbox from '@/components/FCheckbox.vue';
import FDigitsInput from '@/components/FDigitsInput.vue';
import FPhoneInput from '@/components/FPhoneInput.vue';
import FRadioGroup from '@/components/FRadioGroup.vue';
import FSelect from '@/components/FSelect.vue';
import FTextarea from '@/components/FTextarea.vue';

export default {
  title: 'Components/FForm',
  component: FForm,
  argTypes: {
    onValid: { action: 'valid' },
  },
};

const Template = (args: FFormProps) => ({
  components: {
    FForm,
    FButton,
    FGrid,
    FGridItem,
    FCheckbox,
    FDigitsInput,
    FInput,
    FPhoneInput,
    FRadioGroup,
    FSelect,
    FTextarea,
  },
  setup: () => ({ args }),
  template: `
<FForm v-bind="args" v-slot="{ submit }">
  <FGrid gap="24">
    <FGridItem span="12">
      <FCheckbox label="FCheckbox" name="FCheckbox" hint="FCheckbox" />
    </FGridItem>
    <FGridItem span="12">
      <FDigitsInput label="FDigitsInput" name="FDigitsInput" hint="Hint for FDigitsInput" />
    </FGridItem>
    <FGridItem span="12">
      <FInput label="FInput" name="FInput" hint="Hint for FInput" />
    </FGridItem>
    <FGridItem span="12">
      <FPhoneInput label="FPhoneInput" name="FPhoneInput" hint="Hint for FPhoneInput" />
    </FGridItem>
    <FGridItem span="12">
      <FRadioGroup label="FRadioGroup" name="FRadioGroup" hint="Hint for FRadioGroup" :options="[{ label: 'Option A', value: 'a'}, { label: 'Option B', value: 'b'}, { label: 'Option C', value: 'c'}]" />
    </FGridItem>
    <FGridItem span="12">
      <FSelect label="FSelect" name="FSelect" hint="Hint for FSelect" :options="[{ label: 'Option A', value: 'a'}, { label: 'Option B', value: 'b'}, { label: 'Option C', value: 'c'}]" />
    </FGridItem>
    <FGridItem span="12">
      <FTextarea label="FTextarea" name="FTextarea" hint="Hint for FTextarea" />
    </FGridItem>
    <FGridItem span="12">
      <FButton @click="submit">Submit</FButton>
    </FGridItem>
  </FGrid>
</FForm>`,
});

export const Default: Story<FFormProps> = Template.bind({});
Default.args = {
  initialValues: {
    FInput: 'Default value',
    FCheckbox: true,
    FDigitsInput: '1234',
    FPhoneInput: '712345678',
    FRadioGroup: 'b',
    FSelect: 'c',
    FTextarea: 'Default value',
  },
};
