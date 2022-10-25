<template lang="pug">
FField.FInput(
  :style="style"
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  .FInput__input(@click="focus")
    .FInput__input__prefix(v-if="$slots['prefix']")
      slot(name="prefix")
    input(
      ref="inputRef"
      v-bind="resolvedAttrs"
      v-model="value"
      v-maska="resolvedMask"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    )
    .FInput__input__suffix(v-if="$slots['suffix'] || loading")
      slot(name="suffix")
        FLoader(
          v-if="loading"
          :color="placeholderTextColor"
          height="24"
        )
    FIcon.FInput__errorIcon(
      v-if="!isValid && !hideErrorIcon && !loading"
      name="exclamationCircle"
      :color="errorColor"
      size="16"
    )
</template>

<style lang="stylus">
.FInput__input
  display flex
  position relative
  background var(--finput--color)
  overflow hidden
  border-radius rem(24)
  transition background 200ms, box-shadow 200ms
  height rem(48)
  padding rem(12)
  outline none
  cursor text
  text-align var(--finput--text-align)

  &:hover
    box-shadow 0 0 0 2px var(--finput--border-color)

  &:focus-within
    background var(--finput--focus-color)
    box-shadow 0 0 0 2px var(--finput--focus-border-color), 0 0 0 6px 'rgba(%s, 0.8)' % var(--finput--outline-color)

    input
      background var(--finput--focus-color)

  input
    width 100%
    border none
    outline none
    color var(--finput--text-color)
    background var(--finput--color)
    font-size rem(16)
    transition background 200ms, box-shadow 200ms

    &:focus
      background var(--finput--focus-color)

    &::placeholder
      color var(--finput--placeholder-text-color)

.FInput--error
  .FInput__input
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--finput--error-color)
      caret-color var(--finput--error-color)

.FInput--disabled .FInput__input
  input::placeholder
    color var(--color--neutral--light-1)

  &,
  &:hover,
  &:focus
    color var(--color--neutral--light-1)
    background var(--color--neutral--light-3)
    box-shadow none

.FInput__errorIcon
  position absolute
  right rem(16)
  top rem(16)

.FInput--loading
  .FInput__input
    pointer-events none
    opacity 0.7
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';
import FLoader from '@/components/FLoader.vue';

import type CSS from 'csstype';
import type { InputHTMLAttributes, Ref } from 'vue';

import { ref } from 'vue';
import { maska as vMaska } from 'maska';

import { computed } from 'vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

export interface FInputProps {
  /**
   * Input value
   */
  modelValue?: string;
  /**
   * Label, placed on top of input
   */
  label?: string;
  /**
   * Disable the field
   */
  disabled?: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string;
  /**
   * Input type
   */
  type?: HTMLInputElement['type'];
  /**
   * Any input element attribute. It will be bind to the native input as it is.
   */
  attrs?: Omit<
    InputHTMLAttributes,
    'disabled' | 'placeholder' | 'type' | 'class' | 'style'
  >;
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
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Color of the outline
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
   * Text and caret error color
   */
  errorColor?: Color;
  /**
   * Hide error exclamation circle icon
   */
  hideErrorIcon?: boolean;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the input
   */
  hint?: string;
  /**
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Input value alignment
   */
  textAlign?: CSS.Properties['textAlign'];
  /**
   * Restrict input value to a specific mask
   */
  mask?: string | string[];
  /**
   * Loading state of the input
   */
  loading?: boolean;
}

const props = withDefaults(defineProps<FInputProps>(), {
  modelValue: '',
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  type: 'text',
  placeholderTextColor: 'neutral--dark-2',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  hideErrorIcon: false,
  hint: '',
  hideHint: false,
  hintIcon: null,
  hintTextColor: 'neutral--dark-4',
  placeholder: '',
  disabled: false,
  attrs: () => ({}),
  name: '',
  validationTrigger: 'blur',
  rules: () => [],
  errorMessage: '',
  textAlign: 'left',
  mask: '',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const inputRef = ref<HTMLInputElement>();

defineExpose<{
  ref: Ref<HTMLInputElement | undefined>;
  forceValidation: () => void;
  focus: () => void;
}>({
  ref: inputRef,
  forceValidation,
  focus,
});

const { isValid, hint, value, handleValidation } = useFieldWithValidation(
  props,
  { validateOnMount: props.validateOnMount }
);
const { handleBlur, handleChange, handleInput, handleFocus } =
  useInputEventBindings(handleValidation, props.validationTrigger, emit);

const style = computed(
  (): Style => ({
    '--finput--color': getCssColor(props.color),
    '--finput--text-color': getCssColor(props.textColor),
    '--finput--placeholder-text-color': getCssColor(props.placeholderTextColor),
    '--finput--border-color': getCssColor(props.borderColor),
    '--finput--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--finput--focus-color': getCssColor(props.focusColor),
    '--finput--focus-border-color': getCssColor(props.focusBorderColor),
    '--finput--error-color': getCssColor(props.errorColor),
    '--finput--text-align': props.textAlign,
  })
);

const classes = computed(() => ({
  'FInput--error': !isValid.value,
  'FInput--disabled': props.disabled,
  'FInput--loading': props.loading,
}));

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

/**
 * Force validation from parent component, eg. in case of rules change
 */
function forceValidation() {
  handleValidation(value.value);
}

/**
 * Focus the input
 */
function focus() {
  inputRef.value?.focus();
}

// When the prop `type="number"` is given, we add a `pattern="[0-9]*` attribute
// to handle the Safari iOS case, see https://stackoverflow.com/a/14447832/1471747
const resolvedAttrs = computed(() => ({
  ...props.attrs,
  ...(props.type === 'number' ? { pattern: '[0-9]*' } : {}),
}));
// Also use a default mask in case of a number input to prevent unwanted letter inputs in desktop
const resolvedMask = computed(() => {
  if (props.type === 'number') {
    Array.isArray(props.mask) ? ['#*', ...props.mask] : ['#*', props.mask];
  }
  return Array.isArray(props.mask) ? [...props.mask] : props.mask;
});
</script>
