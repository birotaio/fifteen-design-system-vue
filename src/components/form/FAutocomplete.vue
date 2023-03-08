<template lang="pug">
FField.FAutocomplete(
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FMenu(
    ref="menuRef"
    v-model="isMenuOpen"
    v-model:selected-option="fieldValue"
    :options="matchingOptions"
    :width="menuWidth"
    :empty-text="loading ? loadingText : inputValue ? noMatchText : emptyText"
    :color="optionsMenuColor || color"
    :text-color="optionTextColor"
    :selected-option-color="selectedOptionColor"
    :selected-option-text-color="selectedOptionTextColor"
    :prevent-selection="preventSelection"
    :disabled="disabled"
    :loading="loading"
    prevent-activation
    prevent-search
    inanimated
  )
    template(#option="scope")
      slot.FAutocomplete__option(
        name="option"
        v-bind="scope"
      )
        div(v-html="formatOption(scope.option)")
    template(#activator)
      FInput(
        ref="inputRef"
        v-model="inputValue"
        :color="color"
        :border-color="borderColor"
        :text-color="textColor"
        :error-message="errorMessage"
        :placeholder="placeholder"
        :placeholder-text-color="placeholderTextColor"
        :outline-color="outlineColor"
        :focus-color="focusColor"
        :focus-border-color="focusBorderColor"
        :error-color="errorColor"
        :validate-on-mount="validateOnMount"
        :validation-trigger="validationTrigger"
        :disabled="disabled"
        :clearable="clearable"
        :rules="[() => isValid]"
        :loading="loading"
        hide-hint
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      )
</template>
<style lang="stylus">
.FAutocomplete__option__match
  padding 0 rem(1)
  position relative

  &::before
    content ''
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    border-radius rem(4)
    background currentColor
    opacity 0.15
</style>

<script setup lang="ts">
import equal from 'fast-deep-equal/es6';
import { computed, ref, watch } from 'vue';
import { composeSearchRegex } from '@fifteen/shared-lib';

import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import FMenu from '@/components/FMenu.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';

import type { FMenuOption } from '@/components/FMenu.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FAutocompleteModelValue = any;

export interface FAutocompleteProps {
  /**
   * Option value
   * @model
   */
  modelValue?: FAutocompleteModelValue;
  /**
   * Propositions based on user input
   */
  options?: FMenuOption[];
  /**
   * Label, placed on top of select
   */
  label?: string;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Validate the number on mount
   */
  validateOnMount?: boolean;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Text, hint and caret error color
   */
  errorColor?: Color;
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
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Disable interactions with the select
   */
  disabled?: boolean;
  /**
   * Input placeholder
   */
  placeholder?: string;
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
   * Color of the digits outline
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
   * Background color of the options menu
   */
  optionsMenuColor?: Color;
  /**
   * Text color of option
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
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
  /**
   * Loading state of the input
   */
  loading?: boolean;
  /**
   * Width of the options menu
   */
  menuWidth?: string | number;
  /**
   * Prevent item selection
   */
  preventSelection?: boolean;
  /**
   * Prevent item filtering
   * Note: this prop has no effect if a formatInputFn is provided, as formatting the input value requires to prevent filtering.
   */
  preventFiltering?: boolean;
  /**
   * Text displayed in menu when input is empty
   */
  emptyText?: string;
  /**
   * Text displayed in menu when no match for current input
   */
  noMatchText?: string;
  /**
   * Text displayed in menu when loading
   */
  loadingText?: string;
  /**
   * Can clear the current value
   */
  clearable?: boolean;
  /**
   * Custom function to format the input value based on current option selected
   */
  formatInputFn?: ((label: string, description: string) => string) | null;
}

const props = withDefaults(defineProps<FAutocompleteProps>(), {
  modelValue: undefined,
  options: () => [],
  label: '',
  labelTextColor: 'neutral--dark-4',
  name: '',
  validateOnMount: false,
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  placeholder: '',
  rules: () => [],
  errorMessage: '',
  preventSelection: false,
  preventFiltering: false,
  errorColor: 'danger',
  color: 'neutral--light-3',
  borderColor: 'secondary',
  textColor: 'neutral--dark-4',
  placeholderTextColor: 'neutral--dark-2',
  optionsMenuColor: 'neutral--light-3',
  optionTextColor: 'neutral--dark-3',
  selectedOptionColor: 'primary--light-2',
  selectedOptionTextColor: 'primary--dark-2',
  validationTrigger: 'change',
  menuWidth: 300,
  outlineColor: 'neutral--light-3',
  focusColor: 'neutral--light-5',
  focusBorderColor: 'secondary',
  emptyText: 'Type something to begin the search',
  noMatchText: 'No match found for the current input.',
  loadingText: 'Loading...',
  clearable: false,
  formatInputFn: null,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: FAutocompleteModelValue): void;
  (name: 'input', value: InputEvent, inputValue: string): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const inputValue = ref<string>();

const filterRegex = computed(
  () => new RegExp(composeSearchRegex(inputValue.value), 'ig')
);

const matchingOptions = computed(() => {
  if (
    !inputValue.value ||
    currentOptionMatched.value?.label === inputValue.value ||
    props.preventFiltering ||
    props.formatInputFn
  ) {
    return props.options;
  }
  return props.options.filter(option => option.label.match(filterRegex.value));
});

function formatOption(option: FMenuOption): string {
  if (!inputValue.value || !props.options.length) return option.label;
  return option.label.replace(
    filterRegex.value,
    '<span class="FAutocomplete__option__match">$1</span>'
  );
}

const isMenuOpen = ref(false);
watch(isMenuOpen, value => {
  if (!value) {
    // When closing the menu, wait for Popper to properly close the menu before changing input value,
    // to avoid seeing menu content breaks due to menu items changing
    setTimeout(formatInputValue, 25);
  }
});

function formatInputValue(): void {
  inputValue.value = props.formatInputFn
    ? props.formatInputFn(
        currentOptionMatched.value?.label ?? '',
        currentOptionMatched.value?.description ?? ''
      )
    : currentOptionMatched.value?.label ?? '';
}

const {
  isValid,
  hint,
  value: fieldValue,
} = useFieldWithValidation<FAutocompleteModelValue>(props, {
  validateOnMount: props?.validateOnMount,
  validateOnModelValueUpdate: true,
  rules: [isValidMatch],
});

function handleBlur(event: Event): void {
  emit('blur', event);
}

function handleFocus(event: Event): void {
  emit('focus', event);
  isMenuOpen.value = true;
}

function handleChange(event: Event): void {
  emit('change', event);
}

function handleInput(e: InputEvent): void {
  emit('input', e, inputValue.value ?? '');
  isMenuOpen.value = true;
}

function isValidMatch(): boolean {
  return !inputValue.value || !!currentOptionMatched.value;
}

const currentOptionMatched = computed((): FMenuOption | undefined =>
  props.options.find(option => equal(fieldValue.value, option.value))
);
watch(fieldValue, formatInputValue, { immediate: true });

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const inputRef = ref();

/**
 * Force validation to sync FAutocomplete validation status with underlying FInput
 */
function forceValidation(): void {
  inputRef.value.forceValidation();
}

watch(isValid, forceValidation);

const menuRef = ref<InstanceType<typeof FMenu>>();

watch(() => props.modelValue, matchModelValue, { immediate: true });

function matchModelValue(modelValue: FAutocompleteProps['modelValue']): void {
  const matchingOption = props.options.find(option =>
    equal(modelValue, option.value)
  );
  menuRef.value?.selectOption(matchingOption ?? null);
}

// Clearing the input clears the field value
watch(inputValue, newInputValue => {
  if (!newInputValue) fieldValue.value = null;
});

/**
 * Focus the input
 */
function focus(): void {
  inputRef.value?.ref?.focus();
}
</script>
