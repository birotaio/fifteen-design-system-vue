<template lang="pug">
fieldset.FRadioGroup(
  :style="style"
  :class="classes"
  :disabled="disabled"
)
  FFieldLabel(
    :label="label"
    :name="name"
    type="legend"
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
      hide-hint
    )
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
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
import FFieldLabel from '@/components/form/FFieldLabel.vue';
import FFieldHint from '@/components/form/FFieldHint.vue';
import FRadio from '@/components/form/FRadio.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import { genSize } from '@/utils/genSize';

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
  validationTrigger?: 'focus' | 'input' | 'change' | null;
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
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-radio', value: string | number | null): void;
}>();

const { value, isValid, hint, handleValidation } = useFieldWithValidation(
  props,
  {
    validateOnMount: props.validateOnMount,
  }
);
const { handleChange } = useInputEventBindings(
  handleValidation,
  props.validationTrigger,
  emit
);

const style = computed(
  (): Style => ({
    '--fradiogroup--margin-bottom': genSize(props.hideHint ? 0 : 16),
  })
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
