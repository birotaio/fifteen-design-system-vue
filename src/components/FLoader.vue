<template lang="pug">
FLogo.FLoader(
  variant="image-only"
  :height="height"
  :width="width"
  :color="color"
)
</template>

<style lang="stylus">
.FLoader
  animation 2600ms rotate infinite forwards cubic-bezier(0.2, 0.2, 0.15, 0.8)

@keyframes rotate
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>

<script setup lang="ts">
import type { Color } from '@/types/colors';

export interface FLoaderProps {
  /**
   * Color of the loader icon
   */
  color?: Color;
  /**
   * Width of the loader
   */
  width?: string | number;
  /**
   * Height of the loader
   */
  height?: string | number;
}

withDefaults(defineProps<FLoaderProps>(), {
  color: 'primary',
  width: 'auto',
  height: 'auto',
});
</script>
