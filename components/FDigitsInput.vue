<template lang="pug">
.FDigitsInput
  FFieldLabel(
    :name="_name"
    :label="label"
    :text-color="labelTextColor"
  )
  .FDigitsInput__input
    FInput(
      v-for="(_, index) in digits"
      ref="digitRefs"
      text-align="center"
      :attrs="{ maxlength: 1 }"
      @keydown.delete="clearDigitValue($event, index)"
      @input="setDigitValue($event, index)"
      @focus="handleFocus(index)"
      hide-hint
      :rules="[() => isValid]"
      :validate-on-mount="validateOnMount"
      hide-error-icon
      :disabled="disabled"
    )
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
  )
</template>

<style lang="stylus">
.FDigitsInput
  display flex
  flex-direction column

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
import FInput from '@/components/FInput.vue';
import FFieldLabel from '@/components/FFieldLabel.vue';
import FFieldHint from '@/components/FFieldHint.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { genId } from '@/utils/genId';
import { computed, ref, watch } from 'vue';

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
}

const props = withDefaults(defineProps<FDigitsInputProps>(), {
  modelValue: '',
  digits: 4,
  name: '',
  label: '',
  labelTextColor: 'neutral--dark-4',
  hint: '',
  hintTextColor: 'neutral--dark-4',
  rules: () => [],
  errorMessage: '',
  errorColor: 'danger',
});

const _name = computed(() => props?.name || genId());

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'digit-input', value: string): void;
}>();

const digitRefs = ref<InstanceType<typeof FInput>[]>([]);
const digitsValue = ref<string[]>([]);

const { isValid, hint, handleValidation, value } = useFieldWithValidation(
  props,
  { validateOnMount: props.validateOnMount }
);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

watch(isValid, () => {
  forceDigitsValidation();
});

/**
 * Select the previous digit of the digits input
 * @param index - Index of currently selected index
 */
function selectPrevDigit(index: number) {
  if (index - 1 > -1) {
    digitRefs.value[index - 1].ref?.focus();
    digitRefs.value[index - 1].ref?.select();
  } else {
    digitRefs.value[index].ref?.blur();
  }
}

/**
 * Select the next digit of the digits input
 * @param index - Index of currently selected index
 */
function selectNextDigit(index: number) {
  if (index + 1 < props.digits) {
    digitRefs.value[index + 1].ref?.focus();
    digitRefs.value[index + 1].ref?.select();
  }
}

function handleFocus(index: number) {
  digitRefs.value[index].ref?.select();
}

/**
 * Register a digit value, and select the next one
 * @param event - Keyboard event
 * @param index - Digit index
 */
function setDigitValue(event: InputEvent, index: number) {
  event.preventDefault();
  const currentDigitValue = digitRefs.value[index].ref;

  const isInputValid = /[0-9]/.test(event.data ?? '');
  if (currentDigitValue) {
    currentDigitValue.value = isInputValid ? event.data ?? '' : '';
    if (isInputValid) {
      digitsValue.value[index] = currentDigitValue.value;
      selectNextDigit(index);
      handleValidation(digitsValue.value.join(''));
      emit('digit-input', value.value);
    }
  }
}

/**
 * Clear the current digit value, and select the previous one
 * @param event - Keyboard event
 * @param index - Digit index
 */
function clearDigitValue(event: KeyboardEvent, index: number) {
  event.preventDefault();
  const currentDigitValue = digitRefs.value[index].ref;
  if (currentDigitValue) {
    currentDigitValue.value = '';
    digitsValue.value[index] = '';
  }
  handleValidation(digitsValue.value.join(''));
  selectPrevDigit(index);
  emit('digit-input', value.value);
}

/**
 * Force validation for each field digit, to sync validation status with digits input
 */
function forceDigitsValidation() {
  digitRefs.value.forEach(digitRef => digitRef?.forceValidation());
}
</script>
