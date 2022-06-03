<template lang="pug">
.FGrid(:style="style")
  // @slot Use FGridItem components in this slot
  slot
</template>

<style lang="stylus">
.FGrid
  display grid
  grid-template-columns repeat(var(--fgrid--columns), 1fr)
  grid-gap var(--fgrid--grid-gap)
</style>

<script setup lang="ts">
import { columns } from '../config/grid';

export interface FGridProps {
  /**
   * Number of columns, default is set by the value in config/grid
   */
  columns?: string | number;
  /**
   * The gutter size, default is 4px
   */
  gap?: string | number;
}

const props = withDefaults(defineProps<FGridProps>(), {
  columns,
  gap: '4px',
});

const style = computed(
  (): Style => ({
    '--fgrid--columns': String(props.columns),
    '--fgrid--grid-gap': genSize(props.gap),
  })
);
</script>
