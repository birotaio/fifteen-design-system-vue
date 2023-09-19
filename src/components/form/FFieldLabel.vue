<template lang="pug">
component.FFieldLabel(
  :is="type"
  v-if="label !== ''"
  :for="type === 'label' ? name : null"
  :style="style"
) {{ label }}
</template>

<style lang="stylus">
.FFieldLabel
  color var(--ffieldlabel--text-color)
  margin 0
  padding 0
  margin-bottom rem(8)
</style>

<script setup lang="ts">
import { computed } from 'vue';

import { getCssColor } from '@/utils/getCssColor';

import type { Color } from '@/types/colors';

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

const props = withDefaults(defineProps<FFieldLabelProps>(), {
  textColor: 'neutral--dark-4',
  type: 'label',
});

const style = computed(
  (): Style => ({
    '--ffieldlabel--text-color': getCssColor(props.textColor),
  })
);
</script>
