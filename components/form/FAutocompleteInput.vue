<template lang="pug">
FField.FAutocompleteInput(
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FMenu(
    :options="matchingOptions"
    :width="menuWidth"
    :empty-text="loading ? loadingText : inputValue ? noMatchText : emptyText"
    :color="optionsMenuColor || color"
    :text-color="optionTextColor"
    :selected-option-color="selectedOptionColor"
    :selected-option-text-color="selectedOptionTextColor"
    :prevent-selection="preventSelection"
    prevent-search
    persistent
    :disabled="disabled"
    :loading="loading"
    @select-option="handleSelectOption"
    ref="menuRef"
  )
    template(#option="scope")
      slot.FAutocompleteInput__option(
        name="option"
        v-bind="scope"
      )
        div(v-html="formatOption(scope.option)")
    template(#activator="{ closeMenu, openMenu }")
      FInput(
        v-model="inputValue"
        ref="inputRef"
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
        hide-error-icon
        hide-hint
        @focus="openMenu(); handleFocus($event)"
        @blur="closeMenu(); handleBlur($event)"
        @change="handleChange"
        @input="handleInput"
      )
</template>
<style lang="stylus">
.FAutocompleteInput__option__match
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
import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import FMenu from '@/components/FMenu.vue';

import equal from 'fast-deep-equal/es6';
import { computed, onMounted, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { composeSearchRegex } from '@/utils/text';

import type { FMenuOption } from '@/components/FMenu.vue';

export interface FAutocompleteInputProps {
  /**
   * Option value
   */
  modelValue?: any;
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
}

const props = withDefaults(defineProps<FAutocompleteInputProps>(), {
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
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: any): void;
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
    !!currentOptionMatched.value ||
    props.preventFiltering
  ) {
    return props.options;
  }
  return props.options.filter(option => option.label.match(filterRegex.value));
});

const currentOptionMatched = ref<FMenuOption>(); // the selected FMenuOption, until new user input

function formatOption(option: FMenuOption) {
  if (!inputValue.value || !props.options.length) return option.label;
  return option.label.replace(
    filterRegex.value,
    '<span class="FAutocompleteInput__option__match">$1</span>'
  );
}

const {
  isValid,
  hint,
  value: fieldValue,
  validate,
} = useFieldWithValidation<any>(props, {
  validateOnMount: props?.validateOnMount,
  rules: [isValidMatch],
});

function handleBlur(e: Event) {
  emit('blur', e);

  // Wait for the menu to fade out before clearing the input to avoid seeing options change
  setTimeout(() => {
    if (!currentOptionMatched.value) {
      inputValue.value = '';
      fieldValue.value = undefined;
    }
  }, 300);
}

function handleFocus(e: Event) {
  emit('focus', e);
}

function handleChange(e: Event) {
  emit('focus', e);
}

function handleInput(e: InputEvent) {
  emit('input', e, inputValue.value ?? '');
  currentOptionMatched.value = undefined;
}

function isValidMatch() {
  return !!currentOptionMatched.value;
}

function handleSelectOption(optionValue: any) {
  fieldValue.value = optionValue;
  currentOptionMatched.value = props.options.find(option =>
    equal(optionValue, option.value)
  );

  inputValue.value = currentOptionMatched.value?.label;

  validate(fieldValue.value);
}

const classes = computed(() => ({}));

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
function forceValidation() {
  inputRef.value.forceValidation();
}

watch(isValid, forceValidation);

const menuRef = ref<InstanceType<typeof FMenu>>();

onMounted(() => {
  const matchingOption = props.options.find(option =>
    equal(props.modelValue, option.value)
  );
  menuRef.value?.selectOption(matchingOption ?? null);
});

/**
 * Focus the input
 */
function focus() {
  inputRef.value?.ref?.focus();
}
</script>
