<template lang="pug">
.FDigitsInput
  FField(
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
import { computed, reactive, ref, watch, nextTick } from 'vue';

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

const digitRefs = ref<InstanceType<typeof FInput>[]>([]);
const digitsValue = reactive<string[]>([]);

const { isValid, hint, handleValidation } = useFieldWithValidation(props, {
  validateOnMount: props.validateOnMount,
});

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

watch(digitsValue, () => {
  if (
    digitsValue.length === props.digits &&
    !digitsValue.some(value => value === '')
  ) {
    handleValidation(digitsValue.join(''));
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
  if (!/[0-9]/.test(digitsValue[index])) {
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

function handleDigitChange() {
  handleValidation(digitsValue.join(''));
}
</script>
