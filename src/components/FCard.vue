<template lang="pug">
.FCard(:style="style")
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
  transition all 0.5s var(--transition--ease-out)

  &:hover
    color var(--fcard--hover-text-color)
    background-color var(--fcard--hover-color)
</style>

<script setup lang="ts">
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

import type { Color } from '@/types/colors';

export interface FCardProps {
  /**
   * Background color of the card
   */
  color?: Color;
  /**
   * Background color of the card on hover
   */
  hoverColor?: Color;
  /**
   * Color of the card's text
   */
  textColor?: Color;
  /**
   * Color of the card's text on hover
   */
  hoverTextColor?: Color;
  /**
   * Width of the card
   */
  width?: string | number;
}

const props = withDefaults(defineProps<FCardProps>(), {
  color: 'primary',
  hoverColor: 'primary',
  textColor: 'neutral--light-5',
  hoverTextColor: 'neutral--light-5',
  width: '',
});

const style = computed(
  (): Style => ({
    '--fcard--color': getCssColor(props.color),
    '--fcard--hover-color': getCssColor(props.hoverColor),
    '--fcard--width': genSize(props.width),
    '--fcard--text-color': getCssColor(props.textColor),
    '--fcard--hover-text-color': getCssColor(props.hoverTextColor),
  })
);
</script>
