<template lang="pug">
FField.FCreditCardInput(
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FInput(
    v-model="value"
    ref="inputRef"
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
    @focus="handleFocusAndResetValidation"
    @blur="handleBlur"
    @change="handleChange"
    @input="handleInput"
    :loading="loading"
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
import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import FLoader from '@/components/FLoader.vue';
import FCreditCardIcon from '@/components/FCreditCardIcon.vue';
import FIcon from '@/components/FIcon.vue';

import { computed, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import type { CreditCardInfo } from '@/modules/credit-card-types';
import { getCardInfo } from '@/modules/credit-card-types';

export interface FCreditCardInputProps {
  /**
   * Credit card value
   */
  modelValue?: string;
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
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
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
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Background color of the input
   */
  color?: Color;
  /**
   * Color of the border
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

const props = withDefaults(defineProps<FCreditCardInputProps>(), {
  modelValue: '',
  label: '',
  labelTextColor: 'neutral--dark-4',
  name: '',
  validateOnMount: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
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

const { isValid, hint, value, handleValidation, handleResetValidation } =
  useFieldWithValidation<string | number>(props, {
    validateOnMount: props?.validateOnMount,
    rules: [isValidCreditCard],
  });
const { handleBlur, handleChange, handleFocus, handleInput } =
  useInputEventBindings(handleValidation, props.validationTrigger, emit);

const classes = computed(() => ({
  'FCreditCardInput--disabled': props.disabled,
}));

function luhnCheck(cardNumber: string) {
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
    handleValidation(newValue);
  } else {
    // Else trigger field validation reset to remove eventual errors while user is interacting with input
    handleResetValidation();
  }

  creditCard.value = newCreditCard;
  emit('credit-card', newCreditCard);
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

  if (valid) emit('complete');
  return valid;
}

function handleFocusAndResetValidation(e: Event) {
  handleResetValidation();
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
function forceValidation() {
  inputRef.value.forceValidation();
}
watch(isValid, forceValidation);

/**
 * Focus the input
 */
function focus() {
  inputRef.value?.ref?.focus();
}
</script>
