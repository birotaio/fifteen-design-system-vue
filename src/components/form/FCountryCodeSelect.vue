<template lang="pug">
FSelect.FCountryCodeSelect(
  ref="countryCodeSelectRef"
  v-model="countryCode"
  :class="classes"
  v-bind="selectProps"
  :options="selectOptions"
  :hint="hint"
  @focus="handleFocus"
  @blur="handleBlur"
)
  template(#selected-value="{ value, label: flagLabel }")
    .FCountryCodeSelect__selectedValue
      FFlagIcon.FCountryCodeSelect__flag(
        :flag-code="value"
        :size="flagIconSize"
      )
      span {{ flagLabel }}
  template(#option-prefix="{ option }")
    FFlagIcon.FCountryCodeSelect__flag(
      :flag-code="option.value"
      :size="flagIconSize"
    )
  template(#option="{ option }")
    span {{ option.label }}
</template>

<style lang="stylus">
.FCountryCodeSelect__selectedValue
  display flex

.FCountryCodeSelect__flag
  margin-right rem(12)
</style>

<script setup lang="ts">
import { getFlagIconList } from '@/.generated/utils';

import type { FSelectSize } from '@/components/form/FSelect.vue';
import type { FFieldProps } from './FField.vue';
import type { CommonFormFieldProps } from '@/types/forms';
import type { Color } from '@/types/colors';
import type { FlagCode } from '@/types/flags';

export interface FCountryCodeSelectProps
  extends FFieldProps,
    CommonFormFieldProps<FlagCode | null> {
  /**
   * List of countryCodes to use. Default to all availables country codes.
   * @warning You will need to import the flag icons manually _via_ `createFds`
   */
  countryCodes?: FlagCode[];
  /**
   * Optionally format the label. Defaults to countryCode value
   */
  optionLabelFormat?: (countryCode: string) => string;
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

const props = withDefaults(defineProps<FCountryCodeSelectProps>(), {
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
  countryCodes: () => [],
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
  (name: 'update:modelValue', value: FlagCode | null): void;
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
  value: countryCode,
  validate,
} = useFieldWithValidation<FlagCode>(props, {
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

// Flag icons are not registered by the component, because it can restrict the available country codes.
// Thus, we can benefit from significative bundle size reduction if we import the country codes manually.

const countryCodeSelectRef = ref<HTMLElement>();

const classes = computed(() => ({
  ['FCountryCodeSelect--' + props.size]: true,
}));

const flagIconSize = computed(() => (props.size === 'medium' ? 24 : 20));

/**
 * Focus the input
 */
function focus(): void {
  countryCodeSelectRef.value?.focus();
}

const selectOptions = computed(() => {
  const countryCodes = props.countryCodes.length
    ? props.countryCodes
    : getFlagIconList();
  return countryCodes.map(countryCode => ({
    label: props.optionLabelFormat?.(countryCode) ?? countryCode,
    value: countryCode,
  }));
});
</script>
