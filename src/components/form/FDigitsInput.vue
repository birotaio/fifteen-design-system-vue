<template lang="pug">
FField.FDigitsInput(
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
  :class="classes"
)
  .FDigitsInput__input
    FInput(
      v-for="(_, index) in digits"
      :key="index"
      ref="digitRefs"
      v-model="digitsValue[index]"
      text-align="center"
      validation-trigger="input"
      hide-hint
      mask="#"
      type="text"
      :attrs="inputAttrs"
      :rules="[() => isValid]"
      :validate-on-mount="validateOnMount"
      hide-error-icon
      :disabled="disabled"
      :color="color"
      :text-color="textColor"
      :outline-color="outlineColor"
      :placeholder-text-color="placeholderTextColor"
      :focus-color="focusColor"
      :border-color="borderColor"
      :focus-border-color="focusBorderColor"
      :error-color="errorColor"
      @change="handleDigitChange"
      @focus="handleFocus(index)"
      @input="selectNextDigit(index)"
      @keydown.delete="selectPrevDigit(index)"
    )
    FLoader(
      v-if="loading"
      :color="placeholderTextColor"
      height="32"
    )
</template>

<style lang="stylus">
.FDigitsInput__input
  display grid
  grid-template-columns 'repeat(auto-fill, minmax(%s, 1fr))' % rem(40)
  align-items center
  gap rem(32)

  > *
    width rem(40)

  // In this specific case, we want the content of the input
  // to be centered, so we directly override it here
  input
    text-align center

.FDigitsInput--error
  .FDigitsInput__input
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--fdigitsinput--error-color)

.FDigitsInput--loading
  .FDigitsInput__input
    pointer-events none
    opacity 0.7
</style>

<script setup lang="ts">
import { computed, ref, watch, nextTick } from 'vue';

import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import FLoader from '@/components/FLoader.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';

import type { InputHTMLAttributes } from 'vue';

export interface FDigitsInputProps {
  /**
   * Number of digits
   */
  digits?: number;
  /**
   * Digits input value
   * @model
   */
  modelValue?: string;
  /**
   * Background color of the digits
   */
  color?: Color;
  /**
   * Color of the digits border
   */
  borderColor?: Color;
  /**
   * Text color of the digits
   */
  textColor?: Color;
  /**
   * Color of the digits outline
   */
  outlineColor?: Color;
  /**
   * Text color of the digits placeholder
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
   * Label, placed on top of digit input
   */
  label?: string;
  /**
   * Disable the field
   */
  disabled?: boolean;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * A hint to display under the digits input
   */
  hint?: string;
  /**
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * Digits input validation rule
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Text and caret error color
   */
  errorColor?: Color;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
  /**
   * Loading state of the input
   */
  loading?: boolean;
}

const props = withDefaults(defineProps<FDigitsInputProps>(), {
  digits: 4,
  errorColor: 'danger',
  errorMessage: '',
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  label: '',
  labelTextColor: 'neutral--dark-4',
  modelValue: undefined,
  name: '',
  rules: () => [],
  validationTrigger: 'change',
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  placeholderTextColor: 'neutral--dark-2',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'input', value: Event): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'digit-input', value: string): void;
  (name: 'complete'): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const classes = computed(() => ({
  'FDigitsInput--loading': props.loading,
}));

const {
  isValid,
  hint,
  value: fieldValue,
  validate,
} = useFieldWithValidation<string>(props, {
  validateOnMount: props.validateOnMount,
});

const digitRefs = ref<InstanceType<typeof FInput>[]>([]);
const digitsValue = computed<string[]>(() => fieldValue.value.split(''));

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

watch(digitsValue, () => {
  if (
    digitsValue.value.length === props.digits &&
    !digitsValue.value.some(value => value === '')
  ) {
    validate(digitsValue.value.join(''));
    emit('complete');
  }
});

/**
 * Select the prevous digit of the digits input
 * @param index - Index of currently selected index
 */
function selectPrevDigit(index: number): void {
  // Trick to clear the current field value before select the previous one
  setTimeout(() => {
    if (index > 0) {
      digitRefs.value[index - 1].ref?.focus();
      digitRefs.value[index - 1].ref?.select();
    } else {
      digitRefs.value[index].ref?.blur();
    }
  }, 0);
}

/** Select the next digit of the digits input
 * @param index - Index of currently selected index
 */
async function selectNextDigit(index: number): Promise<void> {
  await nextTick();
  if (!/[0-9]/.test(digitsValue.value[index])) {
    return;
  }

  if (index + 1 < props.digits) {
    digitRefs.value[index + 1].ref?.focus();
    digitRefs.value[index + 1].ref?.select();
  } else {
    digitRefs.value[index].ref?.blur();
  }
}

/**
 * Select the current input field on focus
 * @param index - Index of focused field
 */
function handleFocus(index: number): void {
  digitRefs.value[index].ref?.select();
}

/**
 * Force validation for each field digit, to sync validation status with digits input
 */
function forceDigitsValidation(): void {
  digitRefs.value.forEach(digitRef => digitRef?.forceValidation());
}
watch(isValid, forceDigitsValidation);

function handleDigitChange(): void {
  validate(digitsValue.value.join(''));
}

/**
 * Focus the first digit
 */
function focus(): void {
  digitRefs.value[0]?.ref?.focus();
}

// In the specific case of the digit input, we want to hide the browsers "spin box"
// so we do not use `type="number"` but `type="text"` alongside these following attibutes,
// (see https://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box)
const inputAttrs: InputHTMLAttributes = {
  inputmode: 'numeric',
  pattern: '[0-9]*',
};
</script>
