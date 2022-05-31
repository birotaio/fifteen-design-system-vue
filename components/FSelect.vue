<template lang="pug">
.FSelect(
  :style="style"
  :class="classes"
)
  Popper(:show="!disabled && isMenuOpen")
    .FSelect__select(
      tabindex="0"
      @keydown.up.prevent="keyboardPreselectPrevOption"
      @keydown.down.prevent="keyboardPreselectNextOption"
      @keydown.enter="handleEnter"
      @click="isMenuOpen = !isMenuOpen"
      @focus="handleFocus"
      @blur="handleBlur"
      role="listbox"
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
            v-bind="{ value, label: getValueLabel(value) }"
            v-if="value"
          )
            .FSelect__text {{ getValueLabel(value) }}
          .FSelect__placeholder(v-else) {{ placeholder }}
      FIcon.FSelect__icon(
        v-if="!disabled"
        @click="handleIconClick($event)"
        :name="iconName"
        :color="textColor"
        :class="iconClasses"
      )
    template(#content)
      .FSelect__optionsMenu(
        v-if="options.length"
        ref="selectOptionsRef"
      )
        .FSelect__option(
          role="option"
          @click="selectOption(option)"
          @mouseenter="mousePreselectOption(index)"
          @mousemove="isKeyboardInteracting = false"
          v-for="(option, index) in options"
          :key="option.value"
          :class="selectOptionClasses(index)"
          ref="optionRefs"
        )
          slot(
            name="option-prefix"
            v-bind="{ option, index, isSelected: isSelected(index) }"
          )
          slot(
            name="option"
            v-bind="{ option, index, isSelected: isSelected(index) }"
          )
            span {{ option.label }}
        .FSelect__noOption(v-if="options.length === 0")
        span {{ emptyText }}
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
  )
</template>

<style lang="stylus">
.FSelect
  --popper-theme-border-radius rem(16)

  .popper
    width 100%
    overflow hidden

  .inline-block
    width var(--fselect--width)
    position relative !important
    border none !important
    margin 0 !important

.FSelect__select
  z-index 10
  display flex
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

  &--flipped
    transform rotateX(-180deg)

.FSelect__optionsMenu
  background var(--fselect--options-menu-color)
  border-radius rem(16)
  padding rem(8)
  elevation(2)
  max-height rem(300)
  overflow auto
  overscroll-behavior contain
  scroll-behavior smooth
  scroll-padding-top rem(0)
  scrollbar(var(--fselect--border-color))

  > * + *
    margin-top rem(4)

.FSelect__noOption
  display flex
  justify-content center
  background var(--fselect--color)
  border-radius rem(16)
  elevation(2)
  color var(--fselect--text-color)
  padding rem(8)

.FSelect__option
  display flex
  align-items center
  border-radius rem(16)
  min-height rem(24)
  padding rem(12) rem(8)
  color var(--fselect--option-text-color)
  font-size rem(14)
  transition background 300ms, color 300ms
  cursor pointer

  &--preselected
    background 'rgba(%s, 0.3)' % var(--color--neutral--light-2--rgb)

  &--selected
    color var(--fselect--selected-option-text-color)
    background var(--fselect--selected-option-color)
    font-weight 700

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
  .FSelect__placeholder
    color var(--color--neutral--light-1)

  &,
  &:hover,
  &:focus
    color var(--color--neutral--light-1)
    background var(--color--neutral--light-3)
    box-shadow none
</style>

<script setup lang="ts">
import { getCssColor, genSize } from '@/modules/utils';
import Popper from 'vue3-popper/dist/popper.esm';

export interface FSelectOption {
  label: string;
  value: string | number;
}

export interface FSelectProps {
  /**
   * Current option of the select
   */
  modelValue?: string | number | null;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Array of options
   */
  options: FSelectOption[];
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
   * Color of the border
   */
  borderColor?: Color;
  /**
   * Text color of the select
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
   * Text, hint and caret error color
   */
  errorColor?: Color;
  /**
   * Background color of the selected option
   */
  selectedOptionColor?: Color;
  /**
   * Text color of the selected option
   */
  selectedOptionTextColor?: Color;
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
   * Width of the select
   */
  width?: string | number;
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
  validationTrigger?: 'focus' | 'input' | 'change' | null;
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
   * Disable item selection
   */
  disableSelection?: boolean;
}

const props = withDefaults(defineProps<FSelectProps>(), {
  modelValue: null,
  value: null,
  options: () => [],
  color: 'primary',
  optionsMenuColor: 'primary',
  textColor: 'neutral--light-5',
  optionTextColor: 'neutral--light-5',
  outlineColor: 'neutral--light-3',
  type: 'text',
  placeholderTextColor: 'neutral--light-5',
  borderColor: 'secondary',
  focusColor: 'primary',
  focusBorderColor: 'secondary',
  errorColor: 'danger',
  selectedOptionColor: 'primary--light-2',
  selectedOptionTextColor: 'primary--dark-2',
  placeholder: '',
  disabled: false,
  hideHint: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  attrs: () => ({}),
  width: 300,
  clearable: false,
  emptyText: '',
  validationTrigger: null,
  rules: () => [],
  name: '',
  errorMessage: '',
  validateOnMount: false,
  disableSelection: false,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-option', value: string | number | null): void;
  (name: 'focus'): void;
  (name: 'blur'): void;
  (name: 'clear'): void;
}>();

const { isValid, hint, value, handleValidation } = useFieldWithValidation<
  string | number
>(props, {
  validateOnMount: props?.validateOnMount,
});
const { handleFocus } = useInputEventBindings(
  handleValidation,
  props.validationTrigger,
  emit
);

const preselectedOptionIndex = ref(0);
const isMenuOpen = ref(false);

const optionRefs = ref<Element[]>([]);

const style = computed(
  (): Style => ({
    '--fselect--width': genSize(props.width),
    '--fselect--color': getCssColor(props.color),
    '--fselect--options-menu-color': getCssColor(
      props.optionsMenuColor || props.color
    ),
    // Background color of the selected option, using a rgb color format
    '--fselect--option-color': getCssColor(`${props.color}--rgb`),
    '--fselect--text-color': getCssColor(props.textColor),
    '--fselect--placeholder-text-color': getCssColor(
      props.placeholderTextColor
    ),
    '--fselect--border-color': getCssColor(props.borderColor),
    '--fselect--outline-color': getCssColor(`${props.outlineColor}--rgb`),
    '--fselect--focus-color': getCssColor(props.focusColor),
    '--fselect--focus-border-color': getCssColor(props.focusBorderColor),
    '--fselect--error-color': getCssColor(props.errorColor),
    '--fselect--option-text-color': getCssColor(props.optionTextColor),
    '--fselect--selected-option-color': getCssColor(props.selectedOptionColor),
    '--fselect--selected-option-text-color': getCssColor(
      props.selectedOptionTextColor
    ),
  })
);

const classes = computed(() => ({
  'FSelect--error': !isValid.value,
  'FSelect--disabled': props.disabled,
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
    isMenuOpen.value && !value.value && iconName.value === 'chevronDown',
}));

/**
 * Select an option as select value
 * @param option - Option to select
 */
function selectOption(option: FSelectOption): void {
  if (!props.disableSelection) {
    handleValidation(option.value);
  }
  emit('select-option', option.value);
}

const iconName = computed(() =>
  props.clearable && value.value ? 'close' : 'chevronDown'
);

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
  if (props.clearable && value.value) {
    event.stopPropagation();

    handleValidation(null);
    emit('clear');
  }
}

/**
 * Classes to apply to select option
 * @param index - Index of the option
 */
function selectOptionClasses(index: number) {
  return {
    'FSelect__option--preselected': preselectedOptionIndex.value === index,
    'FSelect__option--selected': isSelected(index),
  };
}

/**
 * Returns the selection status of an option based on index
 * @param index - Index of the option
 */
function isSelected(index: number): boolean {
  return (
    props.options.findIndex(option => option.value === value.value) === index
  );
}
/**
 * Preselect an option
 * @param index - Index of option to preselect
 */
function preselectOption(index: number) {
  preselectedOptionIndex.value = index;
}

/**
 * Preselect an option from a mouse interaction
 */
function mousePreselectOption(index: number) {
  if (isKeyboardInteracting.value) return;
  preselectOption(index);
}

/**
 * Automatically scroll options menu when having used the keyboard to preselect a non visible option
 */
const selectOptionsRef = ref();
const { top: selectOptionsTop, bottom: selectOptionsBottom } =
  useElementBounding(selectOptionsRef);

function scrollOptionIntoView(index: number) {
  const el = optionRefs?.value[index];
  const { top, bottom, height } = el.getBoundingClientRect();
  const isVisible =
    top >= selectOptionsTop.value && bottom <= selectOptionsBottom.value;
  if (!isVisible) {
    selectOptionsRef.value.scrollTo(
      0,
      selectOptionsRef.value.scrollTop -
        (preselectedOptionIndex.value - index) * (height + 4)
    );
  }
}

const isKeyboardInteracting = ref(false);

/**
 * Preselect the previous option. If the first is already selected, select the last
 */
function keyboardPreselectPrevOption(): void {
  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value - 1 < 0
      ? props.options.length - 1
      : preselectedOptionIndex.value - 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

/**
 * Preselect the next option. If the last is already selected, select the first
 */
function keyboardPreselectNextOption(): void {
  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value + 1 > props.options.length - 1
      ? 0
      : preselectedOptionIndex.value + 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

/**
 * Handle select blur
 */
function handleBlur(): void {
  isMenuOpen.value = false;
  // Preselect the current value on blur
  preselectedOptionIndex.value = props.options.findIndex(
    option => option.value === value.value
  );
  emit('blur');
}

/**
 * Handle enter key down
 */
function handleEnter(): void {
  if (isMenuOpen.value) {
    const selectedOption = props.options[preselectedOptionIndex.value];
    handleValidation(selectedOption.value);
  }
  isMenuOpen.value = !isMenuOpen.value;
}
</script>
