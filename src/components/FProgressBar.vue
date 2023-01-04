<template lang="pug">
.FProgressBar(:style="style")
</template>

<style lang="stylus">
.FProgressBar
  position relative
  width 100%
  height var(--fprogressbar--height)
  border-radius rem(32)
  background var(--color--neutral--light-3)
  overflow-x hidden

  &::before
    content ''
    top 0
    left 0
    width 100%
    height 100%
    position absolute
    border-radius rem(32)
    background var(--fprogressbar--color)
    transform translateX(calc(-100% + var(--fprogressbar--progress)))
    transition transform var(--transition--ease-out) 1s
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

export interface FProgressBarProps {
  /**
   * The progress bar value in percentage
   */
  value?: number;
  /**
   * The color of the progress bar
   */
  color?: Color;
  /**
   * The height of the progress bar
   */
  height?: string | number;
}

const props = withDefaults(defineProps<FProgressBarProps>(), {
  value: 0,
  color: 'primary',
  height: '8px',
});

const progressValue = computed(
  () => (props.value <= 100 ? props.value : 100) + '%'
);

const style = computed(
  (): Style => ({
    '--fprogressbar--progress': String(progressValue.value),
    '--fprogressbar--color': getCssColor(props.color),
    '--fprogressbar--height': genSize(props.height),
  })
);
</script>
