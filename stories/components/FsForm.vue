<template lang="pug">
FForm.FForm(
  :initial-values="initialValues"
  v-slot="{ submit, resetForm }"
)
  FGrid(gap="24")
    FGridItem(span="12")
      FCheckbox(
        label="FCheckbox"
        name="FCheckbox"
        hint="Hint for FCheckbox"
      )
    FGridItem(span="12")
      FDigitsInput(
        label="FDigitsInput"
        name="FDigitsInput"
        hint="Hint for FDigitsInput"
      )
    FGridItem(span="12")
      FInput(
        label="FInput"
        name="FInput"
        hint="Hint for FInput"
      )
    FGridItem(span="12")
      FPhoneInput(
        label="FPhoneInput"
        name="FPhoneInput"
        hint="Hint for FPhoneInput"
      )
    FGridItem(span="12")
      FCreditCardInput(
        label="FCreditCardInput"
        name="FCreditCardInput"
        hint="Hint for FCreditCardInput"
      )
    FGridItem(span="12")
      FRadioGroup(
        label="FRadioGroup"
        name="FRadioGroup"
        hint="Hint for FRadioGroup"
        :options="radioGroupOptions"
      )
    FGridItem(span="12")
      FSelect(
        label="FSelect"
        name="FSelect"
        hint="Hint for FSelect"
        :options="selectOptions"
      )
    FGridItem(span="12")
      FTextarea(
        label="FTextarea"
        name="FTextarea"
        hint="Hint for FTextarea"
      )
    FGridItem.FForm__actions(span="12")
      FButton(@click="submit") Submit
      FButton(@click="resetForm") Reset
  FGrid
</template>

<style lang="stylus">
.FForm__actions
  > * + *
    margin-left rem(24)
</style>

<script setup lang="ts">
import FForm from '@/components/form/FForm.vue';
import FGrid from '@/components/FGrid.vue';
import FGridItem from '@/components/FGridItem.vue';
import FButton from '@/components/FButton.vue';

import FInput from '@/components/form/FInput.vue';
import FCheckbox from '@/components//form/FCheckbox.vue';
import FDigitsInput from '@/components/form/FDigitsInput.vue';
import FPhoneInput from '@/components/form/FPhoneInput.vue';
import FRadioGroup from '@/components/form/FRadioGroup.vue';
import FSelect from '@/components/form/FSelect.vue';
import FTextarea from '@/components/form/FTextarea.vue';

import type { FFormProps } from '@/components/form/FForm.vue';
import FCreditCardInput from '@/components/form/FCreditCardInput.vue';

export interface FsFormProps {
  initialValues: FFormProps['initialValues'];
}

defineProps<FsFormProps>();

const radioGroupOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];

const selectOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];
</script>
