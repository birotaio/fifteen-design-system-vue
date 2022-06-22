<template lang="pug">
form.FForm(@submit="submit")
  // @slot Form content
  slot(:submit="submit")
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

const props = defineProps<FFormProps>();

const emit = defineEmits<{
  (name: 'valid', values: Record<string, unknown>): void;
}>();

const { values, validate } = useForm({
  initialValues: props.initialValues,
});

async function submit() {
  const result = await validate();

  if (result.valid) {
    emit('valid', values);
  }
}
</script>
