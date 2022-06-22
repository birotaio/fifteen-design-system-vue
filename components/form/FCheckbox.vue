<template lang="pug">
.FCheckbox(
  :class="classes"
  :style="style"
)
  label.FCheckbox__label
    .FCheckbox__wrapper
      input.FCheckbox__checkbox(
        type="checkbox"
        v-model="checked"
        @keypress.enter="checked = !checked"
        :disabled="disabled"
        :class="checkboxClasses"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      )
      FIcon.FCheckbox__checkedIcon(
        name="checkmark"
        color="neutral--light-5"
        size="10"
        :class="iconClasses"
      )
      FIcon.FCheckbox__indeterminateIcon(
        v-if="fieldValue === null"
        name="checkboxIndeterminate"
        color="neutral--light-5"
        size="10"
      )
    span.FCheckbox__labelText {{ label }}
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
  )
</template>

<style lang="stylus">
.FCheckbox
  position relative
  margin-bottom var(--fcheckbox--margin-bottom)

.FCheckbox__label
  position relative
  display flex
  align-items center
  cursor pointer
  z-index 1

  +media-down('sm')
    align-items flex-start

    .FCheckbox__labelText
      margin-top 0.25ch

.FCheckbox__wrapper
  display flex
  position relative
  align-items center

.FCheckbox__checkbox
  width rem(20)
  height rem(20)
  cursor pointer
  appearance none
  border-radius rem(8)
  border 2px solid var(--fcheckbox--border-color)
  background var(--fcheckbox--color)
  transition border 200ms, background 200ms

  &:focus
    outline none
    border 2px solid var(--fcheckbox--focus-border-color)
    background var(--fcheckbox--focus-color)

  &:hover
    border 2px solid var(--fcheckbox--hover-border-color)

  &:checked,
  &--indeterminate,
  &--indeterminate:focus
    background var(--fcheckbox--checked-color)
    border 2px solid var(--fcheckbox--checked-border-color)

.FCheckbox__checkedIcon
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%) scale(0.5)
  opacity 0
  transition opacity 200ms, transform 200ms

  &--visible
    opacity 1
    transform translate(-50%, -50%) scale(1)

.FCheckbox__indeterminateIcon
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%) scale(1)
  opacity 1

.FCheckbox__labelText
  color var(--fcheckbox--text-color) !important
  use-font('caption')
  user-select none
  margin-left rem(8)
  cursor pointer

.FCheckbox--disabled
  cursor default

  .FCheckbox__checkbox
    cursor default

    &,
    &:hover,
    &:focus
      border 2px solid var(--color--neutral--light-3)
      background var(--color--neutral--light-4)

      &:checked
        border 2px solid var(--color--neutral--light-3)
        background var(--color--neutral--light-3)

  .FCheckbox__label,
  .FCheckbox__labelText
    cursor default
    color var(--color--neutral--dark-1) !important

.FCheckbox--error
  color var(--fcheckbox--error-color)
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import FFieldHint from '@/components/form/FFieldHint.vue';

import { computed } from 'vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import { genSize } from '@/utils/genSize';

export interface FCheckboxProps {
  /**
   * Checkbox v-model value
   */
  modelValue?: boolean | null;
  /**
   * Label of the checkbox
   */
  label?: string;
  /**
   * Disable the checkbox usage
   */
  disabled?: boolean;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the checkbox
   */
  hint?: string;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Background color of the checkbox
   */
  color?: Color;
  /**
   * Text color of the checkbox
   */
  textColor?: Color;
  /**
   * Color of the border
   */
  borderColor?: Color;
  /**
   * Color of the border on hover
   */
  hoverBorderColor?: Color;
  /**
   * Background focus color
   */
  focusColor?: Color;
  /**
   * Border focus color
   */
  focusBorderColor?: Color;
  /**
   * Background color when checkbox is checked
   */
  checkedColor?: Color;
  /**
   * Border color when checkbox is checked
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

const props = withDefaults(defineProps<FCheckboxProps>(), {
  borderColor: 'neutral--dark-1',
  checkedBorderColor: 'secondary',
  checkedColor: 'secondary',
  color: 'neutral--light-4',
  disabled: false,
  errorColor: 'danger',
  errorMessage: '',
  focusBorderColor: 'neutral--dark-2',
  focusColor: 'neutral--light-2',
  hideHint: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hoverBorderColor: 'secondary',
  label: '',
  modelValue: false,
  name: '',
  rules: () => [],
  textColor: 'neutral--dark-3',
  validateOnMount: false,
  validationTrigger: 'change',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: boolean | null): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const {
  isValid,
  hint,
  value: fieldValue,
  handleValidation,
} = useFieldWithValidation(props, { validateOnMount: props.validateOnMount });
const { handleBlur, handleFocus, handleChange } = useInputEventBindings(
  handleValidation,
  props.validationTrigger,
  emit
);

const checked = computed({
  get: () => Boolean(fieldValue.value),
  set: newValue => {
    fieldValue.value = fieldValue.value === null ? true : newValue;
  },
});

const style = computed(
  (): Style => ({
    '--fcheckbox--border-color': getCssColor(props.borderColor),
    '--fcheckbox--checked-border-color': getCssColor(props.checkedBorderColor),
    '--fcheckbox--checked-color': getCssColor(props.checkedColor),
    '--fcheckbox--color': getCssColor(props.color),
    '--fcheckbox--error-color': getCssColor(props.errorColor),
    '--fcheckbox--focus-border-color': getCssColor(props.focusBorderColor),
    '--fcheckbox--focus-color': getCssColor(props.focusColor),
    '--fcheckbox--hover-border-color': getCssColor(props.hoverBorderColor),
    '--fcheckbox--margin-bottom': genSize(props.hideHint ? 0 : 16),
    '--fcheckbox--text-color': getCssColor(props.textColor),
  })
);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const iconClasses = computed(() => ({
  'FCheckbox__checkedIcon--visible': checked.value,
}));

const classes = computed(() => ({
  'FCheckbox--error': !isValid.value,
  'FCheckbox--disabled': props.disabled,
}));

const checkboxClasses = computed(() => ({
  'FCheckbox__checkbox--indeterminate': fieldValue.value === null,
}));
</script>
