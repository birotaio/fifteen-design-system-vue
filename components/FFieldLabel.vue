<template lang="pug">
component.FFieldLabel(
  :is="type"
  :for="type === 'label' ? name : null"
) {{ label }}
</template>

<style lang="stylus">
.FFieldLabel
  margin 0
  padding 0
  margin-bottom rem(8)
</style>

<script setup lang="ts">
export interface FFieldLabelProps {
  /**
   * Label text
   */
  label: string;
  /**
   * Type of the label. Use `legend` in `fieldset` context
   */
  type?: 'label' | 'legend';
  /**
   * Label field reference
   */
  name: string;
  /**
   * Label text color
   */
  textColor?: Color;
}

withDefaults(defineProps<FFieldLabelProps>(), {
  textColor: 'neutral--dark-4',
  type: 'label',
});
</script>
