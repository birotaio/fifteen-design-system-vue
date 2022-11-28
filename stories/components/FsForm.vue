<template lang="pug">
FForm(
  :initial-values="initialValues"
  v-slot="{ submit, reset }"
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
        :loading="loading"
      )
    FGridItem(span="12")
      FInput(
        label="FInput"
        name="FInput"
        hint="Hint for FInput"
        :loading="loading"
      )
    FGridItem(span="12")
      FPhoneInput(
        label="FPhoneInput"
        name="FPhoneInput"
        hint="Hint for FPhoneInput"
        :loading="loading"
      )
    FGridItem(span="12")
      FCreditCardInput(
        label="FCreditCardInput"
        name="FCreditCardInput"
        hint="Hint for FCreditCardInput"
        :loading="loading"
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
        :loading="loading"
      )
    FGridItem(span="12")
      FTextarea(
        label="FTextarea"
        name="FTextarea"
        hint="Hint for FTextarea"
        :loading="loading"
      )
    FGridItem(span="12")
      FAutocompleteInput(
        label="FAutocompleteInput"
        name="FAutocompleteInput"
        hint="Hint for FAutocompleteInput"
        :options="autocompleteOptions"
        :loading="loading"
      )
    FGridItem.FsForm__actions(span="12")
      FButton(
        @click="submit"
        :loading="loading"
      ) Submit
      FButton(@click="() => reset()") Reset
  FGrid
</template>

<style lang="stylus">
.FsForm__actions
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
import FAutocompleteInput from '@/components/form/FAutocompleteInput.vue';

import type { FFormProps } from '@/components/form/FForm.vue';
import FCreditCardInput from '@/components/form/FCreditCardInput.vue';

export interface FsFormProps {
  /**
   * Initial values of the form
   */
  initialValues: FFormProps['initialValues'];
  /**
   * Loading state of the form items
   */
  loading?: boolean;
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

const autocompleteOptions = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
];
</script>
