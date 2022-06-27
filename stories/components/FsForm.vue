<template lang="pug">
FForm(
  :initial-values="initialValues"
  v-slot="{ submit }"
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
    FGridItem(span="12")
      FButton(@click="submit") Submit

  FGrid
</template>

<script setup lang="ts">
import FForm from '@/components/FForm.vue';
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

import type { FFormProps } from '@/components/FForm.vue';

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
