<template lang="pug">
.FAvatar(:style="style")
  .FAvatar__letter(v-if="!src && resolvedLetter") {{ resolvedLetter }}
  FImage(
    v-else
    :src="src"
    :placeholder="placeholder"
    :alt="alt"
    :width="size"
    :height="size"
    :loading="loading"
    :background-color="color"
    corners="circular"
  )
</template>

<style lang="stylus">
.FAvatar
  position relative
  width var(--FAvatar--size)
  height var(--FAvatar--size)

.FAvatar__letter
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  color var(--FAvatar--textColor)
  background-color var(--FAvatar--color)
  line-height var(--FAvatar--size)
  border-radius calc(var(--FAvatar--size) * 0.5)
  font-size calc((14 / 24) * var(--FAvatar--size))
  text-align center
  font-weight 700
  letter-spacing 0
</style>

<script setup lang="ts">
import FImage from '@/components/FImage.vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';
import { computed } from 'vue';

export interface FAvatarProps {
  /**
   * Source of the avatar
   */
  src?: string;
  /**
   * Alt text for the avatar
   */
  alt?: string;
  /**
   * Size of the avatar
   */
  size?: string | number;
  /**
   * Placeholder image source
   */
  placeholder?: string;
  /**
   * Loading mode of the avatar. Default to lazy
   */
  loading?: 'lazy' | 'eager';
  /**
   * Display initial letter. It will be displayed if no src is given or as a placeholder if no placehoder
   * given in lazy mode. As typescript cannot restrict the length of a string, any string is valid but the
   * component will display only the first letter in uppercase anyway.
   */
  letter?: string;
  /**
   * Avatar color, defaults to transparent
   */
  color?: Color;
  /**
   * Avatar text color, when initial letter is displayed, defaults to secondary
   */
  textColor?: Color;
}

const props = withDefaults(defineProps<FAvatarProps>(), {
  src: '',
  alt: '',
  loading: 'lazy',
  placeholder: '',
  size: '80',
  letter: '',
  color: 'transparent',
  textColor: 'secondary',
});

const resolvedLetter = computed(() => {
  return (props.letter[0] ?? '').toUpperCase();
});

const style = computed<Style>(() => ({
  '--FAvatar--size': genSize(props.size),
  '--FAvatar--color': getCssColor(props.color),
  '--FAvatar--textColor': getCssColor(props.textColor),
}));
</script>
