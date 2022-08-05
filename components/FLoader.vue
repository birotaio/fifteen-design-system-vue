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
  animation 1800ms rotate infinite forwards cubic-bezier(0.6, 0.52, 0.3, 0.85)

@keyframes rotate
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>

<script setup lang="ts">
import FLogo from '@/components/FLogo.vue';

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
