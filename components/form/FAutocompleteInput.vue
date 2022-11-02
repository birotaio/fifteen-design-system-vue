<template lang="pug">
FField.FAutocompleteInput(
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  FMenu(
    :options="matchingOptions"
    :width="menuWidth"
    :empty-text="loading ? loadingText : fieldValue ? noMatchText : emptyText"
    :color="optionsMenuColor || color"
    :text-color="optionTextColor"
    :selected-option-color="selectedOptionColor"
    :selected-option-text-color="selectedOptionTextColor"
    :prevent-selection="preventSelection"
    :disabled="disabled"
    @select-option="handleSelectOption"
    :loading="loading"
  )
    template(#option="scope")
      slot.FAutocompleteInput__option(
        name="option"
        v-bind="scope"
      )
        div(v-html="getSplittedOption(scope.option)")
    template(#activator="{ openMenu }")
      FInput(
        v-model="formattedFieldValue"
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
        @focus="e => handleFocus(e, openMenu)"
        @blur="handleBlur"
        @change="handleChange"
        @input="handleInput"
      )
</template>
<style lang="stylus">
.FAutocompleteInput__option--match
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
    opacity .15
</style>

<script setup lang="ts">
import FInput from '@/components/form/FInput.vue';
import FField from '@/components/form/FField.vue';
import FMenu from '@/components/FMenu.vue';

import { computed, ref, watch } from 'vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import { escapeRegex } from '@/utils/text';

import type { FMenuOption } from '@/components/FMenu.vue';

export interface FAutocompleteInputProps {
  /**
   * Input value
   */
  modelValue?: string;
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
  modelValue: '',
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
  emptyText: 'Empty text',
  noMatchText: 'No Match text',
  loadingText: 'Loading text',
  clearable: false,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | null): void;
  (name: 'input', value: InputEvent): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
  (name: 'new-value', value: string | null): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const formattedFieldValue = computed({
  get(): string {
    if (!inputIsActive.value && !!currentOptionMatched.value) {
      return currentOptionMatched.value.label;
    }
    return fieldValue.value;
  },
  set(inputValue: string) {
    fieldValue.value = inputValue;
    inputIsActive.value = true;
    currentOptionMatched.value = undefined;
  },
});

const inputIsActive = ref(false);

const filterRegex = computed(
  () => new RegExp(`(${escapeRegex(fieldValue.value)})`, 'ig')
);

const matchingOptions = computed(() => {
  if (!fieldValue.value || !!currentOptionMatched.value) return props.options;
  return props.options.filter(option => option.label.match(filterRegex.value));
});

const currentOptionMatched = ref<FMenuOption>();

function getSplittedOption(option: FMenuOption) {
  if (!fieldValue.value || !props.options.length) return option.label;
  return option.label.replace(
    filterRegex.value,
    '<span class="FAutocompleteInput__option--match">$1</span>'
  );
}

const {
  isValid,
  hint,
  value: fieldValue,
  validate,
} = useFieldWithValidation<string | number>(props, {
  validateOnMount: props?.validateOnMount,
  rules: [isValidMatch],
});

const {
  handleBlur,
  handleChange,
  handleFocus: veeHandleFocus,
  handleInput,
} = useInputEventBindings(validate, props.validationTrigger, emit);

function handleFocus(e: Event, openMenu: () => void) {
  openMenu();
  veeHandleFocus(e);
}

watch(fieldValue, newValue => {
  // Fire an event whenever field value change to handle eventual API calls
  emit('new-value', newValue);
});

function isValidMatch() {
  return !!currentOptionMatched.value;
}

function handleSelectOption(optionValue: string | number | null) {
  inputIsActive.value = false;

  fieldValue.value = optionValue;
  currentOptionMatched.value = props.options.find(
    option => fieldValue.value === option.value
  );

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

/**
 * Focus the input
 */
function focus() {
  inputRef.value?.ref?.focus();
}
</script>
