<template lang="pug">
FSelect.FLocaleSelect(
  ref="localeSelectRef"
  v-model="localeCode"
  v-bind="selectProps"
  :options="selectOptions"
  :hint="hint"
  @focus="handleFocus"
  @blur="handleBlur"
)
  template(#option="{ option }")
    span {{ option.label }}
</template>

<style lang="stylus">
.FLocaleSelect__selectedValue
  display flex
</style>

<script setup lang="ts">
import * as allLocales from 'date-fns/locale';

import type { FSelectSize } from '@/components/form/FSelect.vue';
import type { FFieldProps } from './FField.vue';
import type { CommonFormFieldProps } from '@/types/forms';
import type { Color } from '@/types/colors';
import type { Locale } from 'date-fns';

type LocaleCode = Locale['code'];

export interface FLocaleSelectProps
  extends FFieldProps,
    CommonFormFieldProps<LocaleCode | null> {
  /**
   * List of locales codes to use. Default to all available locales.
   */
  localeCodes?: LocaleCode[];
  /**
   * Optionally format the label. Defaults to locale value
   */
  optionLabelFormat?: (localeCode: LocaleCode) => string;
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
   * Color of the outline
   */
  outlineColor?: Color;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Color of the placeholder text
   */
  placeholderTextColor?: Color;
  /**
   * Border focus color
   */
  focusBorderColor?: Color;
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
   * Size of the select input
   */
  size?: FSelectSize;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'change' | 'focus';
  /**
   * Prevent item selection
   */
  preventSelection?: boolean;
}

const props = withDefaults(defineProps<FLocaleSelectProps>(), {
  localeCodes: () => [],
  borderColor: 'secondary',
  color: 'neutral--light-3',
  emptyText: '',
  errorColor: 'danger',
  errorMessage: '',
  focusBorderColor: 'secondary',
  focusColor: 'neutral--light-5',
  hint: '',
  hintIcon: null,
  hintTextColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  menuWidth: 300,
  modelValue: undefined,
  name: '',
  optionLabelFormat: undefined,
  optionsMenuColor: 'neutral--light-5',
  optionTextColor: 'secondary',
  outlineColor: 'neutral--light-3',
  placeholder: '',
  placeholderTextColor: 'neutral--dark-2',
  rules: () => [],
  selectedOptionColor: 'neutral--light-2',
  selectedOptionTextColor: 'primary--dark-2',
  size: 'medium',
  textColor: 'neutral--dark-4',
  validationTrigger: 'change',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: LocaleCode | null): void;
  (name: 'input', value: InputEvent, inputValue: string): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const selectProps = {
  label: props.label,
  name: props.name,
  color: props.color,
  textColor: props.textColor,
  focusColor: props.focusColor,
  borderColor: props.borderColor,
  focusBorderColor: props.focusBorderColor,
  outlineColor: props.outlineColor,
  optionsMenuColor: props.optionsMenuColor,
  optionTextColor: props.optionTextColor,
  selectedOptionTextColor: props.selectedOptionTextColor,
  labelTextColor: props.labelTextColor,
  hint: props.hint,
  hideHint: props.hideHint,
  hintTextColor: props.hintTextColor,
  hintIcon: props.hintIcon,
  placeholder: props.placeholder,
  clearable: props.clearable,
  errorMessage: props.errorMessage,
  errorColor: props.errorColor,
  disabled: props.disabled,
  loading: props.loading,
  rules: props.rules,
  size: props.size,
  validationTrigger: props.validationTrigger,
  validateOnMount: props.validateOnMount,
  menuWidth: props.menuWidth,
};

const {
  hint,
  value: localeCode,
  validate,
} = useFieldWithValidation<LocaleCode>(props, {
  validateOnMount: props?.validateOnMount,
});

const { handleFocus, handleBlur } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const localeSelectRef = ref<HTMLElement>();

/**
 * Focus the input
 */
function focus(): void {
  localeSelectRef.value?.focus();
}

const defaultLocaleCodes = Object.values(allLocales).map(locale => locale.code);

const selectOptions = computed(() => {
  const locales = props.localeCodes.length
    ? props.localeCodes
    : defaultLocaleCodes;

  return locales.map(locale => ({
    label: props.optionLabelFormat?.(locale) ?? locale,
    value: locale,
  }));
});
</script>
