<template lang="pug">
.FRadio(
  :class="classes"
  :style="style"
)
  label.FRadio__label
    .FRadio__wrapper
      input.FRadio__radio(
        :name="name"
        type="radio"
        v-model="fieldValue"
        :value="value"
        :checked="fieldValue === value"
        @keypress.enter="fieldValue = value"
        :disabled="disabled"
        @focus="handleFocus"
        @blur="handleBlur"
      )
    span.FRadio__labelText {{ label }}
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
  )
</template>

<style lang="stylus">
.FRadio__label
  position relative
  display flex
  align-items center
  cursor pointer
  z-index 1

  +media-down('sm')
    align-items flex-start

    .FRadio__labelText
      margin-top 0.25ch

.FRadio__wrapper
  display flex
  position relative
  align-items center

.FRadio__radio
  width rem(20)
  height rem(20)
  cursor pointer
  appearance none
  border-radius rem(32)
  background var(--fradio--color)
  border 2px solid var(--fradio--border-color)
  transition border 200ms, background 200ms

  &:focus
    outline none
    box-shadow 0 0 0 2px 'rgba(%s, 0.8)' % var(--fradio--outline-color)

  &:hover
    border 2px solid var(--fradio--hover-border-color)

  &::before
    content ''
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    width rem(8)
    height rem(8)
    border-radius rem(32)
    background transparent
    transition background 200ms

  &:checked
    background var(--fradio--checked-color)
    border 2px solid var(--fradio--checked-border-color)

    &::before
      background var(--fradio--checked-border-color)

.FRadio__labelText
  color var(--fradio--text-color) !important
  use-font('caption')
  user-select none
  margin-left rem(8)
  cursor pointer

.FRadio--disabled
  cursor default

  .FRadio__radio
    cursor default

    &:checked::before
      background var(--color--neutral--light-2)

    &,
    &:hover,
    &:focus
      border 2px solid var(--color--neutral--light-3)
      background var(--color--neutral--light-4)

      &:checked
        border 2px solid var(--color--neutral--light-2)
        background var(--color--neutral--light-5)

  .FRadio__label,
  .FRadio__labelText
    cursor default
    color var(--color--neutral--dark-1) !important

.FRadio--error
  color var(--fradio--error-color)
</style>

<script setup lang="ts">
import FFieldHint from '@/components/FFieldHint.vue';

import { computed } from 'vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

export interface FRadioProps {
  /**
   * Radio v-model value
   */
  modelValue?: string | boolean | null;
  /**
   * Value of the radio
   */
  value?: string | boolean | null;
  /**
   * Label of the radio
   */
  label?: string;
  /**
   * Disable the radio usage
   */
  disabled?: boolean;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the radio
   */
  hint?: string;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Background color of the radio
   */
  color?: Color;
  /**
   * Text color of the radio
   */
  textColor?: Color;
  /**
   * Color of the border
   */
  borderColor?: Color;
  /**
   * Color of the outline
   */
  outlineColor?: Color;
  /**
   * Color of the border on hover
   */
  hoverBorderColor?: Color;
  /**
   * Background color when radio is checked
   */
  checkedColor?: Color;
  /**
   * Border color when radio is checked
   */
  checkedBorderColor?: Color;
  /**
   * Hint error color
   */
  errorColor?: Color;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'blur' | null;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
}

const props = withDefaults(defineProps<FRadioProps>(), {
  label: '',
  value: null,
  color: 'neutral--light-4',
  textColor: 'neutral--dark-3',
  borderColor: 'neutral--dark-1',
  hoverBorderColor: 'secondary',
  outlineColor: 'neutral--light-2',
  checkedColor: 'neutral--light-5',
  checkedBorderColor: 'secondary',
  disabled: false,
  modelValue: false,
  errorColor: 'danger',
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
  name: '',
  validationTrigger: null,
  validateOnMount: false,
  rules: () => [],
  errorMessage: '',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | boolean | null): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const {
  isValid,
  hint,
  value: fieldValue,
  handleValidation,
} = useFieldWithValidation(props, { validateOnMount: props.validateOnMount });
const { handleBlur, handleFocus } = useInputEventBindings(
  handleValidation,
  props.validationTrigger,
  emit
);
const style = computed(
  (): Style => ({
    '--fradio--color': getCssColor(props.color),
    '--fradio--text-color': getCssColor(props.textColor),
    '--fradio--border-color': getCssColor(props.borderColor),
    '--fradio--hover-border-color': getCssColor(props.hoverBorderColor),
    '--fradio--checked-color': getCssColor(props.checkedColor),
    '--fradio--checked-border-color': getCssColor(props.checkedBorderColor),
    '--fradio--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--fradio--error-color': getCssColor(props.errorColor),
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
  'FRadio--error': !isValid.value,
  'FRadio--disabled': props.disabled,
}));
</script>
