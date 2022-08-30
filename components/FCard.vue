<template lang="pug">
.FCard(
  :style="style"
  :class="classes"
)
  // @slot The card content
  slot
</template>

<style lang="stylus">
.FCard
  position relative
  color var(--fcard--text-color)
  width var(--fcard--width)
  border-radius rem(16px)
  background-color var(--fcard--color)

for $z in 'inset' 1 2 3 4 5 6
  .FCard--elevation--{$z}
    elevation-light($z)
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

export interface FCardProps {
  /**
   * Background color of the card
   */
  color?: Color;
  /**
   * Color of the card's text
   */
  textColor?: Color;
  /**
   * Width of the card
   */
  width?: string | number;
  /**
   * Elevation of the card
   */
  elevation?: string | number;
}

const props = withDefaults(defineProps<FCardProps>(), {
  color: 'primary',
  textColor: 'neutral--light-5',
  width: '',
  elevation: 0,
});

const style = computed(
  (): Style => ({
    '--fcard--color': getCssColor(props.color),
    '--fcard--width': genSize(props.width),
    '--fcard--text-color': getCssColor(props.textColor),
  })
);

const classes = computed(() => ({
  [`FCard--elevation--${props.elevation}`]: !!props.elevation,
}));
</script>
