<template lang="pug">
form.FForm(@submit.prevent="submit")
  // @slot Form content
  slot(
    :submit="submit"
    :reset="reset"
  )
</template>

<style lang="stylus"></style>

<script setup lang="ts">
import { useForm } from 'vee-validate';

export interface FFormProps {
  /**
   * Initial values of the form
   */
  initialValues: Record<string, unknown>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FormValues = any;

const props = defineProps<FFormProps>();

const emit = defineEmits<{
  (name: 'valid', values: FormValues): void | Promise<void>;
}>();

const {
  values,
  validate,
  resetForm: reset,
} = useForm({
  initialValues: props.initialValues,
});

async function submit(): Promise<void> {
  const result = await validate();
  result.valid && emit('valid', values);
}

defineExpose({
  reset,
  submit,
});
</script>
