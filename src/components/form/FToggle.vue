<template lang="pug">
FField.FToggle(
  :class="classes"
  :style="style"
  v-bind="{ name, hint, hideHint, hintTextColor, hintIcon }"
)
  label.FToggle__label(:for="name" :class="labelClasses")
    .FToggle__wrapper
      input.FToggle__hiddenCheckbox(
        :id="name"
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
  outline-style solid
  outline-width rem(0)
  outline-color var(--FToggle--border-color)
  transition outline .1s, background-color .2s

  &:hover, &:focus
    outline-width rem(2)
    outline-color var(--FToggle--hover-border-color)

  &--toggled
    background-color var(--FToggle--toggled-color)
    outline-color var(--FToggle--toggled-border-color)
    .FToggle__track__thumb
      left 'calc(100% - %s)' % rem(22)
  
.FToggle__track__thumb
  position absolute
  left rem(2)
  top rem(2)
  width rem(20)
  height rem(20)
  border-radius rem(50%)
  transition left .2s
  background-color var(--FToggle--thumb-color)
  elevation-light(2)

.FToggle__toggledIcon
    position absolute
    left 50%
    top calc(50% + 1px)
    transform translate(-50%, -50%)
    opacity 0
    transition opacity .1s, transform .1s
    
    &--visible
      opacity 1

.FToggle__hiddenCheckbox
    opacity 0
    width 0
    height 0

    &:focus + .FToggle__track
      outline-width rem(2)
      outline-color var(--FToggle--hover-border-color)
  
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
    border-width rem(1) !important
    border-color var(--FToggle--border-color) !important

  .FToggle__label,
  .FToggle__labelText
    cursor default
    color var(--color--neutral--dark-1) !important
  
.FToggle--error
    color var(--FToggle--error-color)
</style>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

export interface FToggleProps {
  /**
   * Checkbox v-model value
   * @model
   */
  modelValue?: boolean;
  /**
   * Label of the toggle
   */
  label?: string;
  /**
   * Position the label to the right of the toggle
   */
  reverse?: boolean;
  /**
   * Disable the toggle usage
   */
  disabled?: boolean;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the toggle
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
   * Background color of the toggle
   */
  color?: Color;
  /**
   * Background color of the thumb
   */
  thumbColor?: Color;
  /**
   * Text color of the toggle
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

const props = withDefaults(defineProps<FToggleProps>(), {
  modelValue: false,
  borderColor: 'neutral--light-2',
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
  name: 'toggle',
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
    '--FToggle--border-color': getCssColor(props.borderColor),
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
  