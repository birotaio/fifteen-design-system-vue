<template lang="pug">
FField.FRadio(
  :class="classes"
  :style="style"
  v-bind="{ name, hint, hideHint, hintTextColor, hintIcon }"
)
  label.FRadio__label(:for="name")
    .FRadio__wrapper
      input.FRadio__radio(
        :id="name"
        ref="radioRef"
        v-model="fieldValue"
        :name="name"
        type="radio"
        :value="value"
        :checked="fieldValue === value"
        :disabled="disabled"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @keypress.enter="fieldValue = value"
      )
    span.FRadio__labelText(v-if="label") {{ label }}

    span.FRadio__labelText(v-else)
      slot(name="label")
</template>

<style lang="stylus">
.FRadio
  isolation isolate

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

.FRadio__label .FRadio__labelText *
  use-font('caption')

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
import { computed, ref } from 'vue';

import FField from '@/components/form/FField.vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

export interface FRadioProps {
  /**
   * Radio v-model value
   * @model
   */
  modelValue?: string | boolean | number | null;
  /**
   * Value of the radio
   */
  value?: string | boolean | number | null;
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
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
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
  validationTrigger?: 'change' | 'focus' | 'blur';
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
  borderColor: 'neutral--dark-1',
  checkedBorderColor: 'secondary',
  checkedColor: 'neutral--light-5',
  color: 'neutral--light-4',
  disabled: false,
  errorColor: 'danger',
  errorMessage: '',
  hideHint: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  hoverBorderColor: 'secondary',
  label: '',
  modelValue: false,
  name: '',
  outlineColor: 'neutral--light-2',
  rules: () => [],
  textColor: 'neutral--dark-3',
  validateOnMount: false,
  validationTrigger: 'change',
  value: null,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | boolean | number | null): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
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
  validate,
} = useFieldWithValidation(props, { validateOnMount: props.validateOnMount });
const { handleBlur, handleFocus, handleChange } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);
const style = computed(
  (): Style => ({
    '--fradio--border-color': getCssColor(props.borderColor),
    '--fradio--checked-border-color': getCssColor(props.checkedBorderColor),
    '--fradio--checked-color': getCssColor(props.checkedColor),
    '--fradio--color': getCssColor(props.color),
    '--fradio--error-color': getCssColor(props.errorColor),
    '--fradio--hover-border-color': getCssColor(props.hoverBorderColor),
    '--fradio--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--fradio--text-color': getCssColor(props.textColor),
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

const radioRef = ref<HTMLElement>();

/**
 * Focus the radio
 */
function focus(): void {
  radioRef.value?.focus();
}
</script>
