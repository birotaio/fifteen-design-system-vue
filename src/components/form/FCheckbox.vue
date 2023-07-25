<template lang="pug">
FField.FCheckbox(
  :class="classes"
  :style="style"
  v-bind="{ name, hint, hideHint, hintTextColor, hintIcon }"
)
  label.FCheckbox__label(:for="name")
    .FCheckbox__wrapper
      input.FCheckbox__checkbox(
        :id="name"
        ref="checkboxRef"
        v-model="checked"
        :name="name"
        type="checkbox"
        :disabled="disabled"
        :class="checkboxClasses"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @keypress.enter="checked = !checked"
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
    span.FCheckbox__labelText(v-if="label") {{ label }}

    span.FCheckbox__labelText(v-else)
      slot(name="label")
</template>

<style lang="stylus">
.FCheckbox
  isolation isolate

.FCheckbox__label
  position relative
  display flex
  align-items flex-start
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
  margin-top rem(3)
  cursor pointer
  max-width rem(640)

.FCheckbox__label .FCheckbox__labelText *
  use-font('caption')

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
import { getCssColor } from '@/utils/getCssColor';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { CommonFormFieldProps } from '@/types/forms';

export interface FCheckboxProps
  extends FFieldProps,
    CommonFormFieldProps<boolean | null> {
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
  hintIcon: null,
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
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const checkboxRef = ref<HTMLElement>();

const {
  isValid,
  hint,
  value: fieldValue,
  validate,
} = useFieldWithValidation<boolean>(props, {
  validateOnMount: props.validateOnMount,
});
const { handleBlur, handleFocus } = useInputEventBindings(
  validate,
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

/**
 * Custom handle change function because native onChange emits a "on" value when true
 */
function handleChange(): void {
  validate(fieldValue.value, props.validationTrigger === 'change');
}

/**
 * Focus the input
 */
function focus(): void {
  checkboxRef.value?.focus();
}
</script>
