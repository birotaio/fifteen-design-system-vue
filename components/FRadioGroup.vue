<template lang="pug">
fieldset.FRadioGroup(
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
      :name="_name"
      :value="option.value"
      :label="option.label"
      v-model="value"
      hide-hint
      :disabled="disabled"
    )
</template>

<style lang="stylus">
.FRadioGroup
  border none
  padding 0

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
import FFieldLabel from '@/components/FFieldLabel.vue';
import FRadio from '@/components/FRadio.vue';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';
import { genId } from '@/utils/genId';
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
   * Display mode of the radio group
   */
  displayMode?: 'horizontal' | 'vertical';
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
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
}

const props = withDefaults(defineProps<FRadioGroupProps>(), {
  modelValue: '',
  name: '',
  label: '',
  validationTrigger: 'change',
  displayMode: 'vertical',
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-radio', value: string | number | null): void;
}>();

const { value, handleValidation } = useFieldWithValidation(props, {
  validateOnMount: props.validateOnMount,
});
useInputEventBindings(handleValidation, props.validationTrigger, emit);

watch(value, () => {
  emit('select-radio', value.value);
});

const _name = computed(() => props?.name || genId());

const classes = computed(() => ({
  'FRadioGroup--horizontal': props.displayMode === 'horizontal',
}));
</script>
