<template lang="pug">
FField.FTextarea(
  :style="style"
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  .FTextarea__content
    textarea.FTextarea__textarea(
      ref="textareaRef"
      v-bind="attrs"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :aria-label="label"
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    )
    FIcon.FTextarea__errorIcon(
      v-if="!isValid && !loading"
      name="exclamationCircle"
      :color="errorColor"
      size="16"
    )
    FLoader.FTextarea__loader(
      v-else-if="loading"
      :color="placeholderTextColor"
      height="24"
    )
</template>

<style lang="stylus">
.FTextarea__content
  position relative

.FTextarea__textarea
  max-width 100%
  width 100%
  color var(--ftextarea--text-color)
  background var(--ftextarea--color)
  border none
  border-radius rem(24)
  min-height rem(48)
  font-size rem(16)
  transition background 200ms, box-shadow 200ms
  padding rem(12)
  outline none
  resize var(--ftextarea--resize)

  &:hover
    box-shadow 0 0 0 2px var(--ftextarea--border-color)

  &::placeholder
    color var(--ftextarea--placeholder-text-color)

  &:focus
    background var(--ftextarea--focus-color)
    box-shadow 0 0 0 2px var(--ftextarea--focus-border-color), 0 0 0 6px 'rgba(%s, 0.8)' % var(--ftextarea--outline-color)

.FTextarea--error
  .FTextarea__textarea
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--ftextarea--error-color)
      caret-color var(--ftextarea--error-color)

  .FTextarea__hint
    color var(--ftextarea--error-color)

.FTextarea--disabled .FTextarea__textarea
  &::placeholder
    color var(--color--neutral--light-1)

  &,
  &:hover,
  &:focus
    color var(--color--neutral--light-1)
    background var(--color--neutral--light-3)
    box-shadow none

.FTextarea__errorIcon,
.FTextarea__loader
  position absolute
  right 'calc(100% - var(--ftextarea--width) + %s)' % rem(12)
  top rem(16)

.FTextarea__loader
  top rem(12)

.FTextarea--loading
  .FTextarea__textarea
    pointer-events none
    opacity 0.7
    resize none
</style>

<script setup lang="ts">
import { useElementBounding } from '@vueuse/core';

import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';
import { exclamationCircle } from '@/.generated/icons';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { TextareaHTMLAttributes } from 'vue';
import type CSS from 'csstype';
import type { CommonFormFieldProps } from '@/types/forms';
import type { Color } from '@/types/colors';

export interface FTextareaProps
  extends FFieldProps,
    CommonFormFieldProps<string> {
  /**
   * Text area placeholder
   */
  placeholder?: string;
  /**
   * Number of rows of the text area
   */
  rows?: number;
  /**
   * Allowed resize directions
   */
  resize?: CSS.Properties['resize'];
  /** Any text area element attribute. It will be bind to the native textarea as it is.
   */
  attrs?: Omit<
    TextareaHTMLAttributes,
    'disabled' | 'placeholder' | 'class' | 'style' | 'rows'
  >;
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
}

const props = withDefaults(defineProps<FTextareaProps>(), {
  modelValue: undefined,
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  placeholderTextColor: 'neutral--dark-2',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  placeholder: '',
  disabled: false,
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  rows: 3,
  resize: 'vertical',
  rules: () => [],
  name: '',
  validationTrigger: 'blur',
  attrs: () => ({}),
  errorMessage: '',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'input', value: Event): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

registerIcons('icons', { exclamationCircle });

const textareaRef = ref();

const { isValid, hint, value, validate } = useFieldWithValidation<string>(
  props,
  {
    validateOnMount: props.validateOnMount,
  }
);
const { handleChange, handleFocus, handleBlur } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);

const { width } = useElementBounding(textareaRef);

const style = computed(
  (): Style => ({
    '--ftextarea--color': getCssColor(props.color),
    '--ftextarea--text-color': getCssColor(props.textColor),
    '--ftextarea--placeholder-text-color': getCssColor(
      props.placeholderTextColor
    ),
    '--ftextarea--border-color': getCssColor(props.borderColor),
    '--ftextarea--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--ftextarea--focus-color': getCssColor(props.focusColor),
    '--ftextarea--focus-border-color': getCssColor(props.focusBorderColor),
    '--ftextarea--error-color': getCssColor(props.errorColor),
    '--ftextarea--resize': !props.disabled ? props.resize : 'none',
    '--ftextarea--width': genSize(width.value),
  })
);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const classes = computed(() => ({
  'FTextarea--error': !isValid.value,
  'FTextarea--disabled': props.disabled,
  'FTextarea--loading': props.loading,
}));

/**
 * Focus the input
 */
function focus(): void {
  textareaRef.value?.focus();
}
</script>
