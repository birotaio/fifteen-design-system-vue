<template lang="pug">
FField.FToggle(
  :class="classes"
  :style="style"
  v-bind="{ name, hint, hideHint, hintTextColor, hintIcon }"
)
  label.FToggle__label(
    :for="id"
    :class="labelClasses"
  )
    .FToggle__wrapper
      input.FToggle__hiddenCheckbox(
        :id="id"
        ref="toggleRef"
        v-model="fieldValue"
        :name="name"
        type="checkbox"
        :disabled="disabled"
        @blur="handleBlur"
        @change="handleChange"
        @focus="handleFocus"
        @keypress.enter="fieldValue = !fieldValue"
      )
      .FToggle__track(:class="toggleClasses")
        .FToggle__track__thumb
          FIcon.FToggle__toggledIcon(
            v-if="!noCheckmarkIcon"
            name="checkmark"
            :color="toggledColor"
            size="10"
            :class="iconClasses"
          )
    span.FToggle__labelText(v-if="label") {{ label }}

    span.FToggle__labelText(v-else)
      slot(name="label")
</template>

<style lang="stylus">
.FToggle__label
  position relative
  display flex
  cursor pointer
  z-index 1
  align-items flex-start
  gap rem(12)

  &--reverse
    flex-direction row-reverse
    justify-content space-between

.FToggle__wrapper
  display flex
  position relative
  align-items center

.FToggle__track
  width rem(44)
  height rem(24)
  background-color var(--FToggle--color)
  position relative
  border-radius rem(12)
  elevation-light('inset')
  transition border 0.1s, background-color 0.2s

  &::before
    content ''
    position absolute
    top rem(0)
    right rem(0)
    left rem(0)
    bottom rem(0)
    border-radius rem(14)
    box-shadow 0 0 0 0 var(--FToggle--hover-border-color)
    transition box-shadow 0.1s

  &:hover,
  &:focus
    &::before,
    background red
      box-shadow 0 0 0 rem(2) var(--FToggle--toggled-color)

  &--toggled
    background-color var(--FToggle--toggled-color)

    &::before
      box-shadow 0 0 0 rem(0) var(--FToggle--toggled-border-color)
      background var(--FToggle--toggled-border-color)

    .FToggle__track__thumb
      left 'calc(100% - %s)' % rem(22)

.FToggle__track__thumb
  position absolute
  left rem(2)
  top rem(2)
  width rem(20)
  height rem(20)
  border-radius rem(50%)
  transition left 0.2s
  background-color var(--FToggle--thumb-color)
  elevation-light(2)

.FToggle__toggledIcon
  position absolute
  left 50%
  top calc(50% + 1px)
  transform translate(-50%, -50%)
  opacity 0
  transition opacity 0.1s, transform 0.1s

  &--visible
    opacity 1

.FToggle__hiddenCheckbox
  opacity 0
  width 0
  height 0

  &:focus + .FToggle__track
    &::before
      box-shadow 0 0 0 rem(2) var(--FToggle--toggled-color)

.FToggle__labelText
  color var(--FToggle--text-color) !important
  user-select none
  cursor pointer
  max-width rem(640)

.FToggle__labelText *
  font-size inherit

.FToggle--smallText
  .FToggle__labelText
    use-font('caption')
    margin-top rem(4)

.FToggle--disabled
  cursor default

  .FToggle__track
    background-color var(--color--neutral--light-3)
    box-shadow none

    &::before
      box-shadow none

  .FToggle__label,
  .FToggle__labelText
    cursor default
    color var(--color--neutral--dark-1) !important

.FToggle--error
  color var(--FToggle--error-color)
</style>

<script setup lang="ts">
import { getCssColor } from '@/utils/getCssColor';
import { checkmark } from '@/.generated/icons';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { CommonFormFieldProps } from '@/types/forms';
import type { Color } from '@/types/colors';

export interface FToggleProps
  extends FFieldProps,
    CommonFormFieldProps<boolean> {
  /**
   * Position the label to the right of the toggle
   */
  reverse?: boolean;
  /**
   * Background color of the thumb
   */
  thumbColor?: Color;
  /**
   * Color of the border on hover
   */
  hoverBorderColor?: Color;
  /**
   * Background color when toggle is toggled
   */
  toggledColor?: Color;
  /**
   * Border color when toggle is toggled
   */
  toggledBorderColor?: Color;
  /**
   * Don't show a checkmark icon when toggle is on
   */
  noCheckmarkIcon?: boolean;
  /**
   * Smaller label text
   */
  smallText?: boolean;
}

const props = withDefaults(defineProps<FToggleProps>(), {
  modelValue: undefined,
  toggledBorderColor: 'secondary',
  toggledColor: 'secondary',
  color: 'neutral--light-2',
  thumbColor: 'neutral--light-5',
  disabled: false,
  errorColor: 'danger',
  errorMessage: '',
  hideHint: false,
  noCheckmarkIcon: false,
  smallText: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  hoverBorderColor: 'secondary',
  label: '',
  reverse: false,
  name: '',
  rules: () => [],
  textColor: 'neutral--dark-4',
  validateOnMount: false,
  validationTrigger: 'change',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: boolean): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

registerIcons('icons', { checkmark });

const id = useId();

const toggleRef = ref<HTMLElement>();

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

const style = computed(
  (): Style => ({
    '--FToggle--toggled-border-color': getCssColor(props.toggledBorderColor),
    '--FToggle--toggled-color': getCssColor(props.toggledColor),
    '--FToggle--color': getCssColor(props.color),
    '--FToggle--thumb-color': getCssColor(props.thumbColor),
    '--FToggle--error-color': getCssColor(props.errorColor),
    '--FToggle--hover-border-color': getCssColor(props.hoverBorderColor),
    '--FToggle--text-color': getCssColor(props.textColor),
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
  'FToggle__toggledIcon--visible': fieldValue.value,
}));

const classes = computed(() => ({
  'FToggle--error': !isValid.value,
  'FToggle--disabled': props.disabled,
  'FToggle--smallText': props.smallText,
}));

const labelClasses = computed(() => ({
  'FToggle__label--reverse': props.reverse,
}));

const toggleClasses = computed(() => ({
  'FToggle__track--toggled': fieldValue.value,
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
  toggleRef.value?.focus();
}
</script>
