<template lang="pug">
.FPhoneInput(
  :class="classes"
  :style="style"
)
  FField(
    v-bind="{ name, label, labelTextColor, hint, hideHint: true, hintTextColor }"
  )
    FMenu(
      :options="countries"
      v-model:is-open="isMenuOpen"
      v-model="countryCode"
      width="100"
      :color="optionsMenuColor"
      :text-color="optionTextColor"
    )
      template(#activator="{ toggleMenu }")
        FInput(
          v-bind="{ placeholder }"
          v-model="phoneNumber"
          :color="color"
          :text-color="textColor"
          :error-message="errorMessage"
          :placeholder-text-color="placeholderTextColor"
          :rules="[() => isValidPhone]"
          :validate-on-mount="validateOnMount"
          :validation-trigger="validationTrigger"
          :disabled="disabled"
          :hint="hint"
          :hide-hint="hideHint"
          :hint-text-color="hintTextColor"
          :mask="phoneNumberMask"
        )
          template(#prefix)
            .FPhoneInput__prefix
              .FPhoneInput__selectedValue(
                @click="!disabled && toggleMenu()"
                tabindex="0"
              )
                FFlagIcon.FPhoneInput__selectedFlag(
                  :country-code="countryCode"
                )
                FIcon.FPhoneInput__icon(
                  name="chevronDown"
                  :class="iconClasses"
                  color="transparent"
                  :size="12"
                  :stroke-color="textPhonePrefixColor"
                  :stroke-width="2"
                )
              FDivider(
                vertical
                height="24"
                :margins="false"
                color="neutral--light-5"
              )
              span.FPhoneInput__phonePrefix {{ phonePrefix }}
      template(#option-prefix="{ option }")
        FFlagIcon.FPhoneInput__optionPrefix(
          :country-code="getCountryCode(option)"
        )
</template>

<style lang="stylus">
.FPhoneInput
  background none

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
  cursor pointer
  margin-right rem(4)

  &:focus
    outline-offset rem(6)
    outline solid rem(2) var(--fphoneinput--textColor)
    z-index 1
    transition $outline-transition

  &:hover
    border-radius rem(24)

.FPhoneInput__prefix
  display flex
  margin-right rem(4)

  > span
    font-size rem(16)
    color var(--fphoneinput--textPhonePrefixColor)

.FPhoneInput__optionPrefix
  margin-right rem(8)

.FPhoneInput__icon
  margin-left rem(2)
  transition transform 300ms

  &--flipped
    transform rotateX(-180deg)

.FPhoneInput--disabled
  .FPhoneInput__selectedFlag
    filter grayscale(1)

  .FPhoneInput__prefix
    > span
      color var(--color--neutral--light-2)

  .FPhoneInput__selectedValue
    cursor default
    outline none

    &:hover
      box-shadow none
      background transparent
      border-radius rem(24)

  .FInput__input input
    background var(--color--neutral--light-3)

.FPhoneInput__phonePrefix
  margin-left rem(8)
</style>

<script setup lang="ts">
import FInput from '@/components/form/FInput.vue';
import FDivider from '@/components/FDivider.vue';
import FFlagIcon from '@/components/FFlagIcon.vue';
import FMenu from '@/components/FMenu.vue';
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';

import type { CountryCode } from 'libphonenumber-js';
import {
  isValidNumberForRegion,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
} from 'libphonenumber-js';
import { computed, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import type { FSelectOption } from '@/components/form/FSelect.vue';
import examples from 'libphonenumber-js/mobile/examples';
import { getCssColor } from '@/utils/getCssColor';
import { useVModelProxy } from '@/composables/useVModelProxy';

export interface FPhoneInputProps {
  /**
   * Full phone number value
   */
  modelValue?: string | null;
  /**
   * Phone number without prefix. Value of the input field
   */
  phoneNumber?: string;
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
  /**
   * Background color of the input
   */
  color?: Color;
  /**
   * Text color of the input
   */
  textColor?: Color;
  /**
   * Text color of the phone prefix
   */
  textPhonePrefixColor?: Color;
  /**
   * Color of the placeholder text
   */
  placeholderTextColor?: Color;
  /**
   * Background color of the options menu
   */
  optionsMenuColor?: Color;
  /**
   * Text color of option item
   */
  optionTextColor?: Color;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
}

const props = withDefaults(defineProps<FPhoneInputProps>(), {
  modelValue: '',
  phoneNumber: '',
  label: '',
  labelTextColor: 'neutral--dark-4',
  name: '',
  validateOnMount: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  rules: () => [],
  errorMessage: '',
  errorColor: 'danger',
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  textPhonePrefixColor: 'neutral--dark-3',
  placeholderTextColor: 'neutral--dark-2',
  optionsMenuColor: 'neutral--light-3',
  optionTextColor: 'neutral--dark-3',
  validationTrigger: 'change',
});

defineEmits<{
  (name: 'update:modelValue', value: string | null): void;
  (name: 'update:phoneNumber', value: string | null): void;
}>();

const { isValid, hint, handleValidation } = useFieldWithValidation<
  string | number
>(props, {
  validateOnMount: props?.validateOnMount,
});

const classes = computed(() => ({
  'FPhoneInput--disabled': props.disabled,
}));

const style = computed(
  (): Style => ({
    '--fphoneinput--textColor': getCssColor(props.textColor),
    '--fphoneinput--textPhonePrefixColor': getCssColor(
      props.textPhonePrefixColor
    ),
  })
);

const placeholder = computed(() =>
  getExampleNumber(countryCode.value, examples)
    ?.format('INTERNATIONAL')
    .replace(`+${getCountryCallingCode(countryCode.value)} `, '')
);
const countryCode = ref<CountryCode>('FR');
const phonePrefix = computed(
  () => `+${getCountryCallingCode(countryCode.value)}`
);
const phoneNumber = useVModelProxy<string>(props, 'phoneNumber');

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
  isValidNumberForRegion(phoneNumber.value ?? '', countryCode.value)
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
