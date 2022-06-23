<template lang="pug">
fieldset.FRadioGroup(
  :class="classes"
  :disabled="disabled"
)
  FField(
    v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor }"
  )
    .FRadioGroup__options
      FRadio(
        v-for="option in options"
        :name="name"
        :value="option.value"
        :label="option.label"
        v-model="value"
        :disabled="disabled"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
        hide-hint
      )
</template>

<style lang="stylus">
.FRadioGroup
  display flex
  flex-direction column
  position relative
  border none
  padding 0
  margin-bottom var(--fradiogroup--margin-bottom)

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
import { computed, watch } from 'vue';
import FField from '@/components/form/FField.vue';
import FRadio from '@/components/form/FRadio.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';

export interface FRadioGroupOption {
  label: string;
  value: string | number | boolean;
}

export interface FRadioGroupProps {
  /**
   * Selected value or values
   */
  modelValue?: string | number | null;
  /**
   * Radio group options
   */
  options: FRadioGroupOption[];
  /**
   * Label, placed on top of radio group
   */
  label?: string;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
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
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the radio group
   */
  hint?: string;
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
<<<<<<< HEAD
   * Text error color
=======
   * Text and caret error color
   */
const props = withDefaults(defineProps<FRadioGroupProps>(), {
  displayMode: 'vertical',
  errorColor: 'danger',
  errorMessage: '',
  hint: '',
  hintTextColor: 'neutral--dark-4',
  label: '',
  modelValue: '',
  name: '',
  rules: () => [],
  validationTrigger: 'change',
  labelTextColor: 'neutral--dark-4',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-radio', value: string | number | null): void;
  (name: 'change', value: Event): void;
  (name: 'focus', value: Event): void;
  (name: 'blur', value: Event): void;
}>();

const { value, isValid, hint, handleValidation } = useFieldWithValidation(
  props,
  {
    validateOnMount: props.validateOnMount,
  }
);
const { handleChange, handleFocus, handleBlur } = useInputEventBindings(
  handleValidation,
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
</script>
