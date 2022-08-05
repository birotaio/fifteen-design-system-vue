<template lang="pug">
FField.FPhoneInput(
  :class="classes"
  :style="style"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor }"
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
        v-model="phoneNumber"
        ref="inputRef"
        :color="color"
        :text-color="textColor"
        :error-message="errorMessage"
        :placeholder="placeholder"
        :placeholder-text-color="placeholderTextColor"
        :validate-on-mount="validateOnMount"
        :validation-trigger="validationTrigger"
        :disabled="disabled"
        :rules="[() => isValid]"
        :outline-color="outlineColor"
        :focus-color="focusColor"
        :border-color="borderColor"
        :focus-border-color="focusBorderColor"
        :error-color="errorColor"
        hide-hint
        :mask="phoneNumberMask"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
        :loading="loading"
      )
        template(#prefix)
          .FPhoneInput__prefix(
            @keydown.enter.prevent="!disabled && toggleMenu()"
          )
            .FPhoneInput__selectedValue(
              @click="!disabled && toggleMenu()"
              tabindex="0"
            )
              FFlagIcon.FPhoneInput__selectedFlag(:country-code="countryCode")
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

.FPhoneInput--loading
  .FPhoneInput
    pointer-events none
    opacity 0.7
</style>

<script setup lang="ts">
import FInput from '@/components/form/FInput.vue';
import FDivider from '@/components/FDivider.vue';
import FFlagIcon from '@/components/FFlagIcon.vue';
import FMenu from '@/components/FMenu.vue';
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';
import FLoader from '@/components/FLoader.vue';

import type { CountryCode } from 'libphonenumber-js';
import {
  isValidNumber,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  parsePhoneNumber,
} from 'libphonenumber-js';
import { computed, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import type { FSelectOption } from '@/components/form/FSelect.vue';
import examples from 'libphonenumber-js/mobile/examples';
import { getCssColor } from '@/utils/getCssColor';
import { useVModelProxy } from '@/composables/useVModelProxy';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

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
   * Color of the digits border
   */
  borderColor?: Color;
  /**
   * Text color of the input
   */
  textColor?: Color;
  /**
   * Color of the digits outline
   */
  outlineColor?: Color;
  /**
   * Text color of the phone prefix
   */
  textPhonePrefixColor?: Color;
  /**
   * Color of the placeholder text
   */
  placeholderTextColor?: Color;
  /**
   * Background focus color
   */
  focusColor?: Color;
  /**
   * Border focus color
   */
  focusBorderColor?: Color;
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
  /**
   * Loading state of the input
   */
  loading?: boolean;
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
  outlineColor: 'neutral--light-3',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | null): void;
  (name: 'update:phoneNumber', value: string | null): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const { isValid, hint, handleValidation } = useFieldWithValidation<
  string | number
>(props, {
  validateOnMount: props?.validateOnMount,
  rules: [isValidPhone],
});
const { handleBlur, handleChange, handleFocus, handleInput } =
  useInputEventBindings(
    () => handleValidation(fullPhone.value),
    props.validationTrigger,
    emit
  );

const classes = computed(() => ({
  'FPhoneInput--disabled': props.disabled,
  'FPhoneInput--loading': props.loading,
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

const fullPhone = computed(() => {
  return isValidPhone(phonePrefix.value + phoneNumber.value)
    ? parsePhoneNumber(phonePrefix.value + phoneNumber.value).number
    : phonePrefix.value + phoneNumber.value;
});

// Handle value update only. Validation is performed with 'validation-trigger' event
watch([phonePrefix, phoneNumber], () => {
  handleValidation(fullPhone.value, false);
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

// Internal validation rule, always applied
function isValidPhone(value: unknown) {
  if (typeof value !== 'string') return true;
  return isValidNumber(value);
}

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

const inputRef = ref();
/**
 * Force validation to sync FPhoneInput validation status with underlying FInput
 */
function forceValidation() {
  inputRef.value.forceValidation();
}
watch(isValid, forceValidation);
</script>
