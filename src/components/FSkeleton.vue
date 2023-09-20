<template lang="pug">
.FSkeleton(
  :style="style"
  :class="classes"
)
</template>

<style lang="stylus">
.FSkeleton
  background var(--fskeleton--background-color)
  height var(--fskeleton--height)
  width var(--fskeleton--width)
  border-radius rem(8)

  &--rounded
    border-radius rem(24)

  &--roundedFull
    border-radius rem(72)

  &--fade
    animation colorFade 1.5s ease alternate infinite

@keyframes colorFade
  0%
    background var(--fskeleton--background-color)

  100%
    background var(--fskeleton--background-color-to)
</style>

<script setup lang="ts">
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

import type { Color } from '@/types/colors';

export interface FSkeletonProps {
  /**
   * Default background color of the skeleton
   */
  backgroundColor?: Color;
  /**
   * Background color used as second color of the animation
   */
  backgroundColorTo?: Color;
  /**
   * Animate or not the background color of the skeleton with a fade effect
   */
  animate?: boolean;
  /**
   * Height of the skeleton
   */
  height?: string | number;
  /**
   * Width of the skeleton
   */
  width?: string | number;
  /**
   * Default rounded border (used e.g. on input) for the skeleton
   */
  rounded?: boolean;
  /**
   * Bigger rounded border (used e.g. on the button) for the skeleton
   */
  roundedFull?: boolean;
}

const props = withDefaults(defineProps<FSkeletonProps>(), {
  backgroundColor: 'neutral--light-3',
  backgroundColorTo: 'neutral--light-4',
  animate: true,
  rounded: false,
  roundedFull: false,
  height: '48px',
  width: 'auto',
});

const classes = computed(() => ({
  'FSkeleton--rounded': props.rounded,
  'FSkeleton--roundedFull': props.roundedFull,
  'FSkeleton--fade': props.animate,
}));

const style = computed(
  (): Style => ({
    '--fskeleton--background-color': getCssColor(props.backgroundColor),
    '--fskeleton--background-color-to': getCssColor(props.backgroundColorTo),
    '--fskeleton--width': genSize(props.width),
    '--fskeleton--height': genSize(props.height),
  })
);
</script>
