<template lang="pug">
.FPhoneInput(:class="classes")
  FFieldLabel(
    :name="_name"
    :label="label"
    :text-color="labelTextColor"
  )
  FMenu(
    :options="countries"
    v-model:is-open="isMenuOpen"
    v-model="countryCode"
    width="100"
    color="neutral--light-3"
    text-color="neutral--dark-3"
  )
    template(#activator="{ toggleMenu }")
      FInput(
        v-bind="{ placeholder }"
        v-model="phoneNumber"
        text-color="neutral--dark-4"
        :error-message="errorMessage"
        placeholder-text-color="neutral--dark-2"
        :rules="[() => isValidPhone]"
        :validate-on-mount="validateOnMount"
        validation-trigger="change"
        :disabled="disabled"
        :hide-hint="hideHint || isMenuOpen"
        :hint="hint"
        :hint-text-color="hintTextColor"
        :mask="phoneNumberMask"
      )
        template(#prefix)
          .FPhoneInput__prefix
            .FPhoneInput__selectedValue(
              @click="!disabled && toggleMenu()"
              tabindex="0"
            )
              FFlagIcon.FPhoneInput__selectedFlag(:country-code="countryCode")
              FIcon.FPhoneInput__icon(
                name="chevronDown"
                :class="iconClasses"
              )
            FDivider(
              vertical
              height="24"
            )
            span {{ phonePrefix }}
    template(#option-prefix="{ option }")
      FFlagIcon.FPhoneInput__optionPrefix(
        :country-code="getCountryCode(option)"
      )
</template>

<style lang="stylus">
.FPhoneInput
  display flex
  flex-direction column

.FPhoneInput__select
  display flex
  position relative
  font-size rem(16)

.FPhoneInput__selectedValue
  display flex
  justify-content center
  align-items center
  border none
  background none
  border-radius rem(24)
  transition box-shadow 200ms, background 200ms
  cursor pointer
  margin-right rem(4)

  &:hover
    box-shadow 0 0 0 rem(8) var(--color--neutral--light-5)
    background var(--color--neutral--light-5)
    border-radius rem(24)

.FPhoneInput__selectedFlag
  margin-right rem(4)

.FPhoneInput__select__phonePrefix
  height 100%
  display flex
  position relative

.FPhoneInput__select__optionPrefix
  display flex
  justify-content center
  padding-right rem(8)
  padding-top rem(6)

.FPhoneInput__flagInput
  margin-right rem(8)

  img
    border-radius rem(4)
    overflow hidden

.FPhoneInput__prefix
  display flex
  margin-right rem(4)

  > span
    font-size rem(16)
    color var(--color--neutral--dark-3)

.FPhoneInput__optionPrefix
  margin-right rem(8)

.FPhoneInput__icon
  transition transform 300ms

  &--flipped
    transform rotateX(-180deg)

.FPhoneInput--disabled
  .FPhoneInput__selectedFlag
    filter grayscale(1)

  .FPhoneInput__prefix
    > p
      color var(--color--neutral--light-2)

  .FPhoneInput__selectedValue
    cursor default

    &:hover
      box-shadow none
      background transparent
      border-radius rem(24)
</style>

<script setup lang="ts">
import FInput from '@/components/FInput.vue';
import FDivider from '@/components/FDivider.vue';
import FFlagIcon from '@/components/FFlagIcon.vue';
import FMenu from '@/components/FMenu.vue';
import FIcon from '@/components/FIcon.vue';
import FFieldLabel from './FFieldLabel.vue';
import FFieldHint from '@/components/FFieldHint.vue';

import type { CountryCode } from 'libphonenumber-js';
import {
  isValidNumberForRegion,
  validatePhoneNumberLength,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  AsYouType,
} from 'libphonenumber-js';
import { computed, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { genId } from '@/utils/genId';
import type { FSelectOption } from './FSelect.vue';
import examples from 'libphonenumber-js/mobile/examples';

export interface FPhoneInputProps {
  /**
   * Current option of the select
   */
  modelValue?: string | number | null;
  /**
   * Label, placed on top of select
   */
  label?: string;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Validate the number on mount
   */
  validateOnMount?: boolean;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Text, hint and caret error color
   */
  errorColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the select
   */
  hint?: string;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Disable interactions with the select
   */
  disabled?: boolean;
}

const props = withDefaults(defineProps<FPhoneInputProps>(), {
  modelValue: '',
  label: '',
  labelTextColor: 'neutral--dark-4',
  name: '',
  validateOnMount: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  rules: () => [],
  errorMessage: '',
  errorColor: 'danger',
});

const _name = computed(() => props?.name || genId());

const classes = computed(() => ({
  'FPhoneInput--disabled': props.disabled,
}));

const { isValid, hint, value, handleValidation } = useFieldWithValidation<
  string | number
>(props, {
  validateOnMount: props?.validateOnMount,
});

const placeholder = computed(() =>
  getExampleNumber(countryCode.value, examples)
    ?.format('INTERNATIONAL')
    .replace('+' + getCountryCallingCode(countryCode.value) + ' ', '')
);
const countryCode = ref<CountryCode>('FR');
const phonePrefix = computed(
  () => '+' + getCountryCallingCode(countryCode.value)
);

const phoneNumber = ref<string>('');

watch([phonePrefix, phoneNumber], () => {
  handleValidation(phonePrefix.value + phoneNumber.value);
});

const countries = getCountries().map((country: CountryCode) => ({
  label: country,
  value: country,
}));

const iconClasses = computed(() => ({
  'FPhoneInput__icon--flipped': isMenuOpen.value,
}));

const phoneNumberMask = computed(() => {
  const number = getExampleNumber(countryCode.value, examples);
  const nationalFormat =
    number
      ?.format('NATIONAL', { nationalPrefix: false })
      ?.replace(/[0-9]/g, '#') ?? '';
  const internationalFormatWithoutCountryCallingCode =
    number
      ?.format('INTERNATIONAL')
      .replace(`+${getCountryCallingCode(countryCode.value)} `, '')
      .replace(/[0-9]/g, '#') ?? '';

  return [nationalFormat, internationalFormatWithoutCountryCallingCode];
});

const isValidPhone = computed(() =>
  isValidNumberForRegion(phoneNumber.value, countryCode.value)
);

const isMenuOpen = ref(false);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

function getCountryCode(option: FSelectOption) {
  return option.value as CountryCode;
}
</script>
