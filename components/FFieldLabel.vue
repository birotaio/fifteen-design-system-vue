<template lang="pug">
.FFieldLabel(:for="name")
  label {{ label }}
</template>

<style lang="stylus">
.FFieldLabel
  margin-bottom rem(8)
</style>

<script setup lang="ts">
export interface FFieldLabelProps {
  /**
   * Label text
   */
  label: string;
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
});
</script>
