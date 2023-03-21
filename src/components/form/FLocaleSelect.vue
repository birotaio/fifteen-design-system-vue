<template lang="pug">
FSelect.FLocaleSelect(
  ref="localeSelectRef"
  v-model="locale"
  :class="classes"
  :label="label"
  :color="color"
  :text-color="textColor"
  :focus-color="focusColor"
  :border-color="borderColor"
  :focus-border-color="focusBorderColor"
  :outline-color="outlineColor"
  :options-menu-color="optionsMenuColor"
  :option-text-color="optionTextColor"
  :selected-option-text-color="selectedOptionTextColor"
  :label-text-color="labelTextColor"
  :hint="hint"
  :hide-hint="hideHint"
  :hint-text-color="hintTextColor"
  :hint-icon="hintIcon"
  :placeholder="placeholder"
  :clearable="clearable"
  :options="selectOptions"
  :error-message="errorMessage"
  :error-color="errorColor"
  :disabled="disabled"
  :loading="loading"
  :rules="rules"
  :size="size"
  :validation-trigger="validationTrigger"
  :validate-on-mount="validateOnMount"
  :menu-width="menuWidth"
  @focus="handleFocus"
  @blur="handleBlur"
)
  template(#selected-value="{ value, label: flagLabel }")
    .FLocaleSelect__selectedValue
      FFlagIcon.FLocaleSelect__flag(
        :country-code="value"
        :size="flagIconSize"
      )
      span {{ flagLabel }}
  template(#option-prefix="{ option }")
    FFlagIcon.FLocaleSelect__flag(
      :country-code="option.value"
      :size="flagIconSize"
    )
  template(#option="{ option }")
    span {{ option.label }}
</template>

<style lang="stylus">
.FLocaleSelect__selectedValue
  display flex

.FLocaleSelect__flag
  margin-right rem(12)
</style>

<script setup lang="ts">
import { computed, ref } from 'vue';

import FFlagIcon from '@/components/FFlagIcon.vue';
import FSelect from '@/components/form/FSelect.vue';
import { getFlagIconList } from '@/constants/icons/.utils';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

import type { FSelectSize } from '@/components/form/FSelect.vue';

export interface FLocaleSelectProps {
  /**
   * Value of the locale select
   * @model
   */
  modelValue?: CountryCode | null;
  /**
   * List of locales to use. Default to all availables country codes
   */
  locales?: CountryCode[];
  /**
   * Label, placed on top of select
   */
  label?: string;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Optionally format the label. Defaults to locale value
   */
  optionLabelFormat?: (locale: string) => string;
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
   * Placeholder text
   */
  placeholder?: string;
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
   * Size of the select input
   */
  size?: FSelectSize;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'change' | 'focus';
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
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

const props = withDefaults(defineProps<FLocaleSelectProps>(), {
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
  locales: () => [],
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
  (name: 'update:modelValue', value: CountryCode | null): void;
  (name: 'input', value: InputEvent, inputValue: string): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const {
  hint,
  value: locale,
  validate,
} = useFieldWithValidation<CountryCode>(props, {
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

const classes = computed(() => ({
  ['FLocaleSelect--' + props.size]: true,
}));

const flagIconSize = computed(() => (props.size === 'medium' ? 24 : 20));

/**
 * Focus the input
 */
function focus(): void {
  localeSelectRef.value?.focus();
}

const selectOptions = computed(() => {
  const locales = props.locales.length ? props.locales : getFlagIconList();
  return locales.map(locale => ({
    label: props.optionLabelFormat?.(locale) ?? locale,
    value: locale,
  }));
});
</script>
