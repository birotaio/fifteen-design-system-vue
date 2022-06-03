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
</style>

<script setup lang="ts">
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
}

const props = withDefaults(defineProps<FCardProps>(), {
  color: 'primary',
  textColor: 'neutral--light-5',
  width: '',
});

const style = computed(
  (): Style => ({
    '--fcard--color': getCssColor(props.color),
    '--fcard--width': genSize(props.width),
    '--fcard--text-color': getCssColor(props.textColor),
  })
);
</script>
