<template lang="pug">
.FTextarea(
  :style="style"
  :class="classes"
)
  FField(
    v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor }"
  )
    textarea.FTextarea__textarea(
      ref="textareaRef"
      v-bind="attrs"
      v-model="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      @change="handleChange"
      @focus="handleFocus"
      @blur="handleBlur"
    )
    FIcon.FTextarea__errorIcon(
      v-if="!isValid"
      name="exclamationCircle"
      :color="errorColor"
      size="16"
    )
</template>

<style lang="stylus">
.FTextarea
  display flex
  flex-direction column
  position relative
  max-width 100%
  width 100%
  margin-bottom var(--ftextarea--margin-bottom)

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
  user-select none
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

.FTextarea__errorIcon
  position absolute
  right 'calc(100% - var(--ftextarea--width) + %s)' % rem(16)
  top rem(16)
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';

import type CSS from 'csstype';
import type { TextareaHTMLAttributes } from 'vue';
import { ref, computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import { useElementBounding } from '@vueuse/core';

export interface FTextareaProps {
  /**
   * Text area value
   */
  modelValue?: string | null;
  /**
   * Label, placed on top of select
   */
  label?: string;
  /**
   * Disable the attribute
   */
  disabled?: boolean;
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
   * Background color of the textarea
   */
  color?: Color;
  /**
   * Color of the border
   */
  borderColor?: Color;
  /**
   * Text color of the textarea
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
   * Text, hint and caret error color
   */
  errorColor?: Color;
  /**
   * A hint to display under the textarea
   */
  hint?: string;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'focus' | 'input' | 'change' | 'blur';
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
}

const props = withDefaults(defineProps<FTextareaProps>(), {
  modelValue: null,
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  placeholderTextColor: 'neutral--dark-3',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  placeholder: '',
  disabled: false,
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
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
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const textareaRef = ref();

const { isValid, hint, value, handleValidation } =
  useFieldWithValidation<string>(props, {
    validateOnMount: props.validateOnMount,
  });
const { handleChange, handleFocus, handleBlur } = useInputEventBindings(
  handleValidation,
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
}));
</script>
