<template lang="pug">
.FDivider(
  :style="style"
  :class="classes"
)
</template>

<style lang="stylus">
.FDivider
  overflow hidden
  width var(--fdivider--width)
  height var(--fdivider--height)
  background-color var(--fdivider--color)
  transition height 0.5s cubic-bezier(0.76, 0, 0.24, 1)

  &--margins
    margin rem(8) 0

  &--dark
    opacity 0.25
    background-color var(--color--secondary)

  &--light
    opacity 0.5
    background-color var(--color--neutral--light-5)

  &.FDivider--vertical
    width 1px
    margin 0 rem(8)
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

export interface FDividerProps {
  /**
   * Color of the divider
   */
  color?: Color;
  /**
   * Light theme of the divider
   */
  theme?: 'light' | 'dark' | null;
  /**
   * Width of the divider
   */
  width?: string | number;
  /**
   * Height of the disvider
   */
  height?: string | number;
  /**
   * Direction of the divider
   */
  vertical?: boolean;
  /**
   * Add margins to the divider
   */
  margins?: boolean;
}

const props = withDefaults(defineProps<FDividerProps>(), {
  color: 'neutral',
  theme: null,
  light: false,
  height: '1px',
  width: '100%',
  vertical: false,
  margins: true,
});

const classes = computed(() => ({
  'FDivider--light': props.theme === 'light',
  'FDivider--dark': props.theme === 'dark',
  'FDivider--vertical': props.vertical,
  'FDivider--margins': props.margins,
}));

const style = computed(
  (): Style => ({
    '--fdivider--color': getCssColor(props.color),
    '--fdivider--width': genSize(props.width),
    '--fdivider--height': genSize(props.height),
  })
);
</script>
