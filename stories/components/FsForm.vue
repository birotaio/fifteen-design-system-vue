<template lang="pug">
FForm.FsForm(
  v-slot="{ submit, reset }"
  :initial-values="initialValues"
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
      FLocaleSelect(
        label="FLocaleSelect"
        name="FLocaleSelect"
        hint="Hint for FLocaleSelect"
        :locales="['US', 'FR']"
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
      FAutocomplete(
        label="FAutocomplete"
        name="FAutocomplete"
        hint="Hint for FAutocomplete"
        :options="autocompleteOptions"
        :loading="loading"
      )
    FGridItem(span="12")
      FToggle(
        label="FToggle"
        name="FToggle"
        hint="Hint for FToggle"
        :loading="loading"
      ) 
    FGridItem.FsForm__actions(span="12")
      FButton(
        :loading="loading"
        @click="submit"
      ) Submit
      FButton(@click="() => reset()") Reset
</template>

<style lang="stylus">
.FsForm
  padding-bottom rem(16)

.FsForm__actions
  > * + *
    margin-left rem(24)
</style>

<script setup lang="ts">
import type { FFormProps } from '../../src/components/form/FForm.vue';

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
