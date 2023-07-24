<template lang="pug">
FField.FInput(
  :style="style"
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  .FInput__input(
    role="textbox"
    tabindex="-1"
    @focus="focus"
  )
    .FInput__input__prefix(v-if="$slots['prefix']")
      slot(name="prefix")
    input(
      ref="inputRef"
      v-bind="resolvedAttrs"
      v-model="value"
      v-maska="mask"
      :name="name"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :aria-label="label"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
      @input="handleInput"
    )
    .FInput__input__suffix(v-if="$slots['suffix'] || loading || clearable")
      slot(name="suffix")
        FIcon.FInput__input__suffix__clearableIcon(
          v-if="clearable && value"
          name="close"
          tabindex="0"
          :size="24"
          :color="textColor"
          @click.stop="handleClear"
          @keydown.enter.space.stop="handleClear"
        )
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
.FInput
  isolation isolate

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

.FInput__input__suffix__clearableIcon
  cursor pointer

  &:focus-visible
    color var(--finput--focus-border-color)
    border-radius rem(12)
    outline-offset rem(4)
    outline solid rem(2) var(--finput--focus-border-color)
    transition $outline-transition
    z-index 1
</style>

<script setup lang="ts">
import { maska as vMaska } from 'maska';

import { getCssColor } from '@/utils/getCssColor';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { InputHTMLAttributes, Ref } from 'vue';
import type CSS from 'csstype';

export interface FInputProps extends FFieldProps {
  /**
   * Input value
   * @model
   */
  modelValue?: string;
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
  /**
   * Can clear the current value
   */
  clearable?: boolean;
}

const props = withDefaults(defineProps<FInputProps>(), {
  modelValue: undefined,
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  type: 'text',
  placeholderTextColor: 'neutral--dark-2',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  hideErrorIcon: false,
  placeholder: '',
  disabled: false,
  attrs: () => ({}),
  name: '',
  validationTrigger: 'blur',
  rules: () => [],
  errorMessage: '',
  textAlign: 'left',
  mask: '',
  clearable: false,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'clear'): void;
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

const { isValid, hint, value, validate } = useFieldWithValidation<string>(
  props,
  {
    validateOnMount: props.validateOnMount,
  }
);
const { handleBlur, handleChange, handleInput, handleFocus } =
  useInputEventBindings(validate, props.validationTrigger, emit);

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

function handleClear(): void {
  value.value = '';
  emit('clear');
}
/**
 * Force validation from parent component, eg. in case of rules change
 */
function forceValidation(): void {
  validate(value.value);
}

/**
 * Focus the input
 */
function focus(): void {
  inputRef.value?.focus();
}

// When the prop `type="number"` is given, we add a `pattern="[0-9]*` attribute
// to handle the Safari iOS case, see https://stackoverflow.com/a/14447832/1471747
const resolvedAttrs = computed(() => ({
  ...props.attrs,
  ...(props.type === 'number' ? { pattern: '[0-9]*' } : {}),
}));
</script>
