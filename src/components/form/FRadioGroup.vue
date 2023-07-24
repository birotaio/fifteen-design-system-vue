<template lang="pug">
FField.FRadioGroup(
  fieldset
  :class="classes"
  :disabled="disabled"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  .FRadioGroup__options
    FRadio(
      v-for="option in options"
      :key="option.name"
      ref="radioRefs"
      v-model="value"
      :name="option.name"
      :value="option.value"
      :label="option.label"
      :disabled="disabled"
      hide-hint
      @blur="handleBlur"
      @change="handleChange"
      @focus="handleFocus"
    )
</template>

<style lang="stylus">
.FRadioGroup__options
  display flex
  flex-direction column

  > * + *
    margin-top rem(8)

.FRadioGroup--horizontal
  .FRadioGroup__options
    flex-direction row

    > * + *
      margin-top 0
      margin-left rem(16)
</style>

<script setup lang="ts">
import type { FFieldProps } from '@/components/form/FField.vue';

export interface FRadioGroupOption {
  label: string;
  value: string | number | boolean;
  name?: string;
}

export interface FRadioGroupProps extends FFieldProps {
  /**
   * Selected value or values
   * @model
   */
  modelValue?: string | number | null;
  /**
   * Radio group options
   */
  options: FRadioGroupOption[];
  /**
   * Display mode of the radio group
   */
  displayMode?: 'horizontal' | 'vertical';
  /**
   * Whether the radio group should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Field name
   */
  name?: string;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'change' | 'focus' | 'blur';
  /**
   * Disable interactions with the radio group
   */
  disabled?: boolean;
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Hint error color
   */
  errorColor?: Color;
}

const props = withDefaults(defineProps<FRadioGroupProps>(), {
  displayMode: 'vertical',
  errorColor: 'danger',
  errorMessage: '',
  hint: '',
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  label: '',
  modelValue: undefined,
  name: '',
  rules: () => [],
  validationTrigger: 'change',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-radio', value: string | number | null): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

defineExpose<{
  focus: () => void;
}>({
  focus,
});

const { value, isValid, hint, validate } = useFieldWithValidation<
  string | number
>(props, {
  validateOnMount: props.validateOnMount,
});
const { handleChange, handleFocus, handleBlur } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);

watch(value, () => {
  emit('select-radio', value.value);
});

const classes = computed(() => ({
  'FRadioGroup--horizontal': props.displayMode === 'horizontal',
}));

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const radioRefs = ref();

/**
 * Focus the first radio
 */
function focus(): void {
  radioRefs.value[0]?.focus();
}
</script>
