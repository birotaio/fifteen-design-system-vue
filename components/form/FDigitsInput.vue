<template lang="pug">
FField.FDigitsInput(
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor }"
)
  .FDigitsInput__input
    FInput(
      v-for="(_, index) in digits"
      ref="digitRefs"
      text-align="center"
      v-model="digitsValue[index]"
      validation-trigger="input"
      @input="selectNextDigit(index)"
      @keydown.delete="selectPrevDigit(index)"
      @focus="handleFocus(index)"
      @change="handleDigitChange"
      hide-hint
      mask="#"
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
    )
</template>

<style lang="stylus">
.FDigitsInput__input
  display grid
  grid-template-columns 'repeat(auto-fill, minmax(%s, 1fr))' % rem(40)
  gap rem(32)

  > *
    width rem(40)

.FDigitsInput--error
  .FDigitsInput__input
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--fdigitsinput--error-color)
</style>

<script setup lang="ts">
import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { computed, ref, watch, nextTick } from 'vue';

export interface FDigitsInputProps {
  /**
   * Number of digits
   */
  digits?: number;
  /**
   * Digits input value
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
}

const props = withDefaults(defineProps<FDigitsInputProps>(), {
  digits: 4,
  errorColor: 'danger',
  errorMessage: '',
  hint: '',
  hintTextColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  modelValue: '',
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

const {
  isValid,
  hint,
  value: fieldValue,
  handleValidation,
} = useFieldWithValidation(props, {
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
    handleValidation(digitsValue.value.join(''));
    emit('complete');
  }
});

/**
 * Select the prevous digit of the digits input
 * @param index - Index of currently selected index
 */
function selectPrevDigit(index: number) {
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
async function selectNextDigit(index: number) {
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
function handleFocus(index: number) {
  digitRefs.value[index].ref?.select();
}

/**
 * Force validation for each field digit, to sync validation status with digits input
 */
function forceDigitsValidation() {
  digitRefs.value.forEach(digitRef => digitRef?.forceValidation());
}
watch(isValid, forceDigitsValidation);

function handleDigitChange() {
  handleValidation(digitsValue.value.join(''));
}

/**
 * Focus the first digit
 */
function focus() {
  digitRefs.value[0]?.ref?.focus();
}
</script>
