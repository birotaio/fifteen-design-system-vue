<template lang="pug">
FSelect.FLocaleSelect(
  v-model="locale"
  :options="selectOptions"
  width="20"
  color="transparent"
  text-color="secondary--light-1"
  focus-color="transparent"
  border-color="secondary--light-1"
  focus-border-color="secondary--light-1"
  outline-color="secondary"
  options-menu-color="neutral--light-5"
  option-text-color="secondary"
  selected-option-color="neutral--light-3"
  selected-option-text-color="secondary"
  hide-hint
)
  template(#selected-value="{ value, label }")
    .FLocaleSelect__selectedValue
      FFlagIcon.FLocaleSelect__option__img(:country-code="value")
      span {{ label }}
  template(#option-prefix="{ option }")
    FFlagIcon.FLocaleSelect__option__img(:country-code="option.value")
  template(#option="{ option }")
    span {{ option.label }}
</template>

<style lang="stylus">
.FLocaleSelect__selectedValue
  display flex

.FLocaleSelect__option__img
  margin-right rem(12)
  height rem(24)
</style>

<script setup lang="ts">
import FFlagIcon from '@/components/FFlagIcon.vue';
import FSelect from '@/components/form/FSelect.vue';
import { computed } from 'vue';
import { getFlagIconList } from '@/constants/icons/.utils';
import { useVModelProxy } from '@fifteen/shared-lib';

export interface FLocaleSelectProps {
  /**
   * Value of the locale select
   */
  modelValue?: CountryCode;
  /**
   * Optionnally format the label. Defaults to locale value
   */
  labelFormat?: (locale: string) => string;
  /**
   * List of locales to use. Default to all availables country codes
   */
  locales?: CountryCode[];
}

const props = withDefaults(defineProps<FLocaleSelectProps>(), {
  modelValue: undefined,
  labelFormat: undefined,
  locales: () => [],
});

const locale = useVModelProxy<boolean>(props);

const selectOptions = computed(() => {
  const locales = props.locales.length ? props.locales : getFlagIconList();
  return locales.map(locale => ({
    label: props.labelFormat?.(locale) ?? locale,
    value: locale,
  }));
});
</script>
