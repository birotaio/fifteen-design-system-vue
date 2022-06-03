<template lang="pug">
.FInput(
  :style="style"
  :class="classes"
)
  input.FInput__input(
    v-bind="attrs"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    :disabled="disabled"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @input="handleInput"
  )
  FIcon.FInput__errorIcon(
    v-if="!isValid"
    name="exclamationCircle"
    :color="errorColor"
    size="16"
  )
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
  )
</template>

<style lang="stylus">
.FInput
  position relative

.FInput__input
  width 100%
  color var(--finput--text-color)
  background var(--finput--color)
  border none
  border-radius rem(24)
  height rem(48)
  font-size rem(16)
  transition background 200ms, box-shadow 200ms
  user-select none
  padding rem(12)
  outline none

  &:hover
    box-shadow 0 0 0 2px var(--finput--border-color)

  &::placeholder
    color var(--finput--placeholder-text-color)

  &:focus
    background var(--finput--focus-color)
    box-shadow 0 0 0 2px var(--finput--focus-border-color), 0 0 0 6px 'rgba(%s, 0.8)' % var(--finput--outline-color)

.FInput--error
  .FInput__input
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--finput--error-color)
      caret-color var(--finput--error-color)

.FInput--disabled .FInput__input
  &::placeholder
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
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import FFieldHint from '@/components/FFieldHint.vue';

import type { InputHTMLAttributes } from 'vue';
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
   * Disable the attribute
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

const props = withDefaults(defineProps<FInputProps>(), {
  modelValue: '',
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  type: 'text',
  placeholderTextColor: 'neutral--dark-3',
  focusColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
  placeholder: '',
  disabled: false,
  attrs: () => ({}),
  name: '',
  validationTrigger: 'blur',
  rules: () => [],
  errorMessage: '',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'input', value: Event): void;
}>();

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
  })
);

const classes = computed(() => ({
  'FInput--error': !isValid.value,
  'FInput--disabled': props.disabled,
}));

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);
</script>
