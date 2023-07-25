<template lang="pug">
FField.FCreditCardInput(
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FInput(
    ref="inputRef"
    v-model="value"
    :color="color"
    :border-color="borderColor"
    :text-color="textColor"
    :error-message="errorMessage"
    :placeholder="placeholder"
    :placeholder-text-color="placeholderTextColor"
    :outline-color="outlineColor"
    :focus-color="focusColor"
    :focus-border-color="focusBorderColor"
    :error-color="errorColor"
    :validate-on-mount="validateOnMount"
    :validation-trigger="validationTrigger"
    :disabled="disabled"
    :rules="[() => isValid]"
    hide-error-icon
    hide-hint
    :mask="creditCard?.mask ?? defaultMask"
    :loading="loading"
    @focus="handleFocusAndResetValidation"
    @blur="handleBlur"
    @change="handleChange"
    @input="handleInput"
  )
    template(#suffix)
      .FCreditCardInput__suffix(
        :class="{ 'FCreditCardInput__suffix--valid': isValidCreditCard(value) }"
      )
        FIcon(
          name="checkmark"
          color="success"
          :size="16"
        )
        FCreditCardIcon(
          v-if="!loading"
          :card-type="creditCard?.type"
          size="32"
        )
        FLoader(
          v-else
          :color="placeholderTextColor"
          height="24"
        )
</template>

<style lang="stylus">
.FCreditCardInput
  background none

.FCreditCardInput__optionPrefix
  margin-right rem(8)

.FCreditCardInput__icon
  margin-left rem(2)
  transition transform 300ms

  &--flipped
    transform rotateX(-180deg)

.FCreditCardInput--disabled
  .FInput__input input
    background var(--color--neutral--light-3)

.FCreditCardInput__suffix
  position relative

  .FCreditCardIcon
    transition transform 0.3s ease

  .FIcon
    position absolute
    top 50%
    right 0
    transform translateY(calc(-50% + 2px))
    opacity 0
    transition opacity 0.5s ease

.FCreditCardInput__suffix--valid
  .FIcon
    opacity 1

  .FCreditCardIcon
    transform translateX(-24px)
</style>

<script setup lang="ts">
import { getCardInfo } from '@/helpers/credit-cards';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { CreditCardInfo } from '@/helpers/credit-cards';
import type { CommonFormFieldProps } from '@/types/forms';

export interface FCreditCardInputProps
  extends FFieldProps,
    CommonFormFieldProps<string> {
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Color of the digits outline
   */
  outlineColor?: Color;
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
}

const props = withDefaults(defineProps<FCreditCardInputProps>(), {
  modelValue: undefined,
  name: '',
  validateOnMount: false,
  placeholder: '4000 1234 5678 9012',
  rules: () => [],
  errorMessage: '',
  errorColor: 'danger',
  color: 'neutral--light-3',
  borderColor: 'secondary',
  textColor: 'neutral--dark-4',
  placeholderTextColor: 'neutral--dark-2',
  optionsMenuColor: 'neutral--light-3',
  optionTextColor: 'neutral--dark-3',
  validationTrigger: 'change',
  outlineColor: 'neutral--light-3',
  focusColor: 'neutral--light-5',
  focusBorderColor: 'secondary',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | null): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'credit-card', value: CreditCardInfo | null): void;
  (name: 'complete'): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const { isValid, hint, value, validate, resetValidation } =
  useFieldWithValidation<string>(props, {
    validateOnMount: props?.validateOnMount,
    rules: [isValidCreditCard],
  });
const { handleBlur, handleChange, handleFocus, handleInput } =
  useInputEventBindings(validate, props.validationTrigger, emit);

const classes = computed(() => ({
  'FCreditCardInput--disabled': props.disabled,
}));

function luhnCheck(cardNumber: string): boolean {
  const cardNumbers = cardNumber
    .split('')
    .reverse()
    .map(x => parseInt(x));
  const lastDigit = cardNumbers.shift() ?? 0;

  const sum =
    cardNumbers.reduce(
      (acc, val, i) =>
        i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val),
      0
    ) + lastDigit;
  return sum % 10 === 0;
}

const defaultMask = '#### #### #### ####';
const creditCard = ref<CreditCardInfo | null>(null);

watch(value, newValue => {
  const spacelessValue = newValue.replace(/\s/g, '');
  const newCreditCard = getCardInfo(spacelessValue);

  let lengthExceeded = newCreditCard?.lengths.every(
    length => spacelessValue.length > length
  );
  if (lengthExceeded) return;

  if (
    (newCreditCard && newCreditCard.lengths.includes(spacelessValue.length)) ||
    (!newCreditCard &&
      spacelessValue.length === defaultMask.split('#').length - 1)
  ) {
    // Manually trigger validation if :
    // - Input value length matches one of the lengths of the matched credit card
    // - No credit card was found but input value length reached the number of digits of default mask
    validate(newValue);
  } else {
    // Else trigger field validation reset to remove eventual errors while user is interacting with input
    resetValidation();
  }

  creditCard.value = newCreditCard;
  emit('credit-card', newCreditCard);

  if (isValidCreditCard(newValue)) {
    emit('complete');
  }
});

/**
 * Internal validation rule, always applied
 */
function isValidCreditCard(value: unknown): boolean {
  if (typeof value !== 'string' || !creditCard.value) return false;

  const spacelessValue = value.replace(/\s/g, '');
  const valid =
    luhnCheck(spacelessValue) &&
    creditCard.value.lengths.includes(spacelessValue.length);
  return valid;
}

function handleFocusAndResetValidation(e: Event): void {
  resetValidation();
  handleFocus(e);
}

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const inputRef = ref();
/**
 * Force validation to sync FCreditCardInput validation status with underlying FInput
 */
function forceValidation(): void {
  inputRef.value.forceValidation();
}
watch(isValid, forceValidation);

/**
 * Focus the input
 */
function focus(): void {
  inputRef.value?.ref?.focus();
}
</script>
