<template lang="pug">
FField.FPhoneInput(
  :class="classes"
  :style="style"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FMenu(
    v-model="isMenuOpen"
    v-model:selected-option="countryCode"
    :options="countries"
    :color="optionsMenuColor"
    :text-color="optionTextColor"
    :disabled="disabled"
    width="100"
    option-height="48"
    prevent-activation
  )
    template(#activator="{ toggleMenu, openMenu, closeMenu }")
      FInput(
        ref="inputRef"
        v-model="phoneNumber"
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
        :loading="loading"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      )
        template(#prefix)
          .FPhoneInput__prefix
            .FPhoneInput__selectedValue(
              role="switch"
              :aria-checked="isMenuOpen"
              tabindex="0"
              @keydown.enter="openMenu"
              @click.stop="toggleMenu"
              @blur="closeMenu"
            )
              FFlagIcon.FPhoneInput__selectedFlag(:flag-code="countryCode")
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
            span.FPhoneInput__phonePrefix(
              role="switch"
              :aria-checked="isMenuOpen"
              tabindex="-1"
              @keydown.enter="openMenu"
              @click.stop="toggleMenu"
              @blur="closeMenu"
            ) {{ phonePrefix }}
    template(#option-prefix="{ option }")
      FFlagIcon.FPhoneInput__optionPrefix(:flag-code="getCountryCode(option)")
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

  &:focus-visible
    color var(--fphoneinput--textColor)
    outline-offset rem(6)
    outline solid rem(2) var(--fphoneinput--textColor)
    transition $outline-transition
    z-index 1

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
    opacity 0.7

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
import {
  isValidPhoneNumber,
  getCountries,
  getCountryCallingCode,
  getExampleNumber,
  parsePhoneNumber,
} from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
import { useVModelProxy } from '@fifteen/shared-lib';

import FInput from '@/components/form/FInput.vue';
import { getCssColor } from '@/utils/getCssColor';
import { chevronDown } from '@/.generated/icons';
import * as flagIcons from '@/.generated/flags';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { CountryCode } from '@/types/flags';
import type { FMenuOption } from '@/components/FMenu.vue';
import type { CommonFormFieldProps } from '@/types/forms';
import type { Color } from '@/types/colors';

export interface FPhoneInputProps
  extends FFieldProps,
    CommonFormFieldProps<string | null> {
  /**
   * Phone number without prefix. Value of the input field
   */
  phoneNumber?: string;
  /**
   * Country code, used to show the appropriate flag
   */
  countryCode?: CountryCode;
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
}

const props = withDefaults(defineProps<FPhoneInputProps>(), {
  phoneNumber: '',
  countryCode: 'FR',
  name: '',
  validateOnMount: false,
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
  (name: 'update:phoneNumber', value: string | null): void;
  (name: 'update:countryCode', value: CountryCode): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

registerIcons('icons', { chevronDown });
// When using this component, all the flag icons are registered because all phone numbers are supported
registerIcons('flags', flagIcons);

const countryCode = useVModelProxy({
  props,
  propName: 'countryCode',
});

const {
  isValid,
  hint,
  validate,
  value: rawValue,
} = useFieldWithValidation<string | number>(props, {
  validateOnMount: props?.validateOnMount,
  rules: [
    value => isValidPhone(value) || isEmptyPhone(value),
    ...(Array.isArray(props.rules) ? props.rules : [props.rules]),
  ],
});
const { handleBlur, handleChange, handleFocus, handleInput } =
  useInputEventBindings(
    () => validate(fullPhone.value),
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
const phonePrefix = computed(
  () => `+${getCountryCallingCode(countryCode.value)}`
);
const phoneNumber = useVModelProxy({ props, propName: 'phoneNumber' });

const fullPhone = computed(() => {
  const phoneValue =
    phoneNumber.value !== '' ? phonePrefix.value + phoneNumber.value : '';

  return !isEmptyPhone(phoneValue) && isValidPhone(phoneValue)
    ? parsePhoneNumber(phoneValue).number
    : phoneValue;
});

// Handle value update only. Validation is performed with 'validation-trigger' event
watch([phonePrefix, phoneNumber], () => {
  validate(fullPhone.value, false);
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

// Internal validation rule that checks is phone input is empty
function isEmptyPhone(value: unknown): boolean {
  if (typeof value !== 'string') return false;

  const countryCallingCode = `+${getCountryCallingCode(countryCode.value)}`;
  return value === '' || value === countryCallingCode;
}

// Internal validation rule, always applied
function isValidPhone(value: unknown): boolean {
  if (typeof value !== 'string') return false;
  return isValidPhoneNumber(value);
}

const isMenuOpen = ref(false);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

function getCountryCode(option: FMenuOption): CountryCode {
  return option.value as CountryCode;
}

const inputRef = ref<InstanceType<typeof FInput>>();
/**
 * Force validation to sync FPhoneInput validation status with underlying FInput
 */
function forceValidation(): void {
  inputRef.value?.forceValidation();
}
watch(isValid, forceValidation);

/**
 * Focus the input
 */
function focus(): void {
  inputRef.value?.ref?.focus();
}

watch(
  rawValue,
  newValue => {
    // Handle initial value or reset
    const value = String(newValue);
    if (value === '') phoneNumber.value = '';
    if (!isValidPhoneNumber(value)) return;
    const parsedNumber = parsePhoneNumber(value);
    phoneNumber.value = parsedNumber.nationalNumber;
    if (parsedNumber.country) countryCode.value = parsedNumber.country;
  },
  { immediate: true }
);
</script>
