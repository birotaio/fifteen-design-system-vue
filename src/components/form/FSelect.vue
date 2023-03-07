<template lang="pug">
FField.FSelect(
  :style="style"
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FMenu(
    v-model="isMenuOpen"
    v-model:selected-option="fieldValue"
    :options="options"
    :width="menuWidth"
    :empty-text="emptyText"
    :color="optionsMenuColor || color"
    :text-color="optionTextColor"
    :selected-option-color="selectedOptionColor"
    :selected-option-text-color="selectedOptionTextColor"
    :prevent-selection="preventSelection"
    :disabled="disabled || loading"
    @before-select-option="onBeforeSelectOption"
  )
    template(#option-prefix="scope")
      slot(
        name="option-prefix"
        v-bind="scope"
      )

    template(#option="scope")
      slot(
        name="option"
        v-bind="scope"
      )

    template(#activator)
      .FSelect__select(
        tabindex="0"
        role="listbox"
        ref="selectRef"
        @blur="handleBlur"
        @focus="handleFocus"
      )
        .FSelect__select__selectionStart
          FIcon.FSelect__select__errorIcon(
            v-if="!isValid"
            name="exclamationCircle"
            :color="errorColor"
            size="16"
          )
          .FSelect__selectValue
            slot(
              name="selected-value"
              v-bind="{ value: fieldValue, label: getValueLabel(fieldValue) }"
              v-if="fieldValue"
            )
              .FSelect__text {{ getValueLabel(fieldValue) }}
            .FSelect__placeholder(v-else) {{ placeholder }}
        FIcon.FSelect__icon(
          v-if="!disabled && !loading"
          :name="iconName"
          :size="16"
          color="transparent"
          :stroke-color="textColor"
          :stroke-width="2"
          :class="iconClasses"
          @click="handleIconClick"
        )
        FLoader.FSelect__loader(
          v-if="loading"
          height="24"
          :color="placeholderTextColor"
        )
</template>

<style lang="stylus">
.FSelect__select
  display flex
  z-index 10
  justify-content space-between
  align-items center
  color var(--fselect--text-color)
  background var(--fselect--color)
  border none
  border-radius rem(24)
  height rem(48)
  font-size rem(16)
  transition background 200ms, box-shadow 200ms
  user-select none
  padding rem(16)
  padding-right rem(8)
  outline none
  cursor pointer

  &:hover
    box-shadow 0 0 0 2px var(--fselect--border-color)

  &:focus
    background var(--fselect--focus-color)
    box-shadow 0 0 0 2px var(--fselect--focus-border-color), 0 0 0 6px 'rgba(%s, 0.8)' % var(--fselect--outline-color)

.FSelect__selectValue
  width 100%

.FSelect__text
  white-space nowrap
  overflow hidden
  text-overflow ellipsis
  position relative

.FSelect__icon
  cursor pointer
  transition transform 300ms
  border-radius rem(24)
  padding rem(8)

  &--flipped
    transform rotateX(-180deg)

.FSelect__select__selectionStart
  display flex
  align-items center
  position relative
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  width 'calc(100% - %s)' % rem(32)

.FSelect__select__errorIcon
  margin-right rem(9)

.FSelect__placeholder
  color var(--fselect--placeholder-text-color)

.FSelect--error
  .FSelect__select
    &,
    &:hover,
    &:focus
      box-shadow 0 0 0 2px var(--fselect--error-color)
      caret-color var(--fselect--error-color)

.FSelect--disabled .FSelect__select
  cursor default

  .FSelect__placeholder
    color var(--color--neutral--light-1)

  &,
  &:hover,
  &:focus
    color var(--color--neutral--light-1)
    background var(--color--neutral--light-3)
    box-shadow none

.FSelect--loading
  .FSelect__select
    pointer-events none
    opacity 0.7

.FSelect__loader
  margin rem(4)
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';
import FMenu from '@/components/FMenu.vue';
import FLoader from '@/components/FLoader.vue';

import equal from 'fast-deep-equal/es6';
import { ref, computed, watch } from 'vue';
import { getCssColor } from '@/utils/getCssColor';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

import type { FMenuOption } from '@/components/FMenu.vue';

export interface FSelectProps {
  /**
   * Current option of the select
   * @model
   */
  modelValue?: any;
  /**
   * Label, placed on top of select
   */
  label?: string;
  /**
   * Array of options
   */
  options: FMenuOption[];
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Background color of the select
   */
  color?: Color;
  /**
   * Background color of the options menu
   */
  optionsMenuColor?: Color;
  /**
   * Text color of option item
   */
  optionTextColor?: Color;
  /**
   * Background color of the selected option
   */
  selectedOptionColor?: Color;
  /**
   * Text color of the selected option
   */
  selectedOptionTextColor?: Color;
  /**
   * Color of the border
   */
  borderColor?: Color;
  /**
   * Text color of the select
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
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the select
   */
  hint?: string;
  /**
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
  /**
   * Width of the options menu
   */
  menuWidth?: string | number;
  /**
   * Can clear the current value
   */
  clearable?: boolean;
  /**
   * Text to display in popper when no option is provided
   */
  emptyText?: string;
  /**
   * Disable interactions with the select
   */
  disabled?: boolean;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'change' | 'focus';
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Prevent item selection
   */
  preventSelection?: boolean;
  /**
   * Loading state of the select
   */
  loading?: boolean;
}

const props = withDefaults(defineProps<FSelectProps>(), {
  borderColor: 'neutral--dark-1',
  color: 'neutral--light-3',
  disabled: false,
  emptyText: '',
  errorColor: 'danger',
  errorMessage: '',
  focusBorderColor: 'secondary',
  focusColor: 'neutral--light-5',
  hideHint: false,
  hint: '',
  hintIcon: null,
  hintTextColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  menuWidth: 300,
  modelValue: undefined,
  name: '',
  options: () => [],
  optionsMenuColor: 'neutral--light-3',
  optionTextColor: 'neutral--dark-4',
  outlineColor: 'neutral--light-3',
  placeholder: '',
  placeholderTextColor: 'neutral--dark-2',
  preventSelection: false,
  rules: () => [],
  selectedOptionColor: 'primary--light-2',
  selectedOptionTextColor: 'primary--dark-2',
  textColor: 'neutral--dark-4',
  type: 'text',
  validateOnMount: false,
  validationTrigger: 'change',
  value: null,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: any): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'clear'): void;
  /** @deprecated Use before-select-option instead */
  (name: 'select-option', value: any): void;
  (name: 'before-select-option', value: any): void;
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
} = useFieldWithValidation<any>(props, {
  validateOnMount: props?.validateOnMount,
});
const { handleFocus, handleChange } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);

const preselectedOptionIndex = ref(0);
const isMenuOpen = ref(false);

const style = computed(
  (): Style => ({
    '--fselect--border-color': getCssColor(props.borderColor),
    '--fselect--color': getCssColor(props.color),
    '--fselect--error-color': getCssColor(props.errorColor),
    '--fselect--focus-border-color': getCssColor(props.focusBorderColor),
    '--fselect--focus-color': getCssColor(props.focusColor),
    '--fselect--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--fselect--placeholder-text-color': getCssColor(
      props.placeholderTextColor
    ),
    '--fselect--text-color': getCssColor(props.textColor),
  })
);

const classes = computed(() => ({
  'FSelect--error': !isValid.value,
  'FSelect--disabled': props.disabled,
  'FSelect--loading': props.loading,
}));

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const iconClasses = computed(() => ({
  'FSelect__icon--flipped':
    isMenuOpen.value && iconName.value === 'chevronDown',
}));

const iconName = computed(() =>
  props.clearable && isMenuOpen.value && fieldValue.value
    ? 'close'
    : 'chevronDown'
);

watch(fieldValue, newValue => handleChange(newValue));

/**
 * Get the label of the selected option
 * @param value
 */
function getValueLabel(value: string) {
  return props.options.find(option => option.value === value)?.label;
}

/**
 * Handle click on select action icon.
 * @param event - Click event
 */
function handleIconClick(event: Event) {
  if (props.clearable && isMenuOpen.value && fieldValue.value) {
    event.stopPropagation();
    fieldValue.value = null;
    emit('clear');
  }
}

/**
 * Handle select blur
 */
function handleBlur(event: Event): void {
  // Preselect the current value on blur
  preselectedOptionIndex.value = props.options.findIndex(option =>
    equal(option.value, fieldValue.value)
  );
  emit('blur', event);
}

const selectRef = ref<HTMLElement>();

/**
 * Focus the input
 */
function focus() {
  selectRef.value?.focus();
}

/**
 * Handle before select option event
 */
function onBeforeSelectOption(value: any) {
  emit('select-option', value);
  emit('before-select-option', value);
}
</script>
