<template lang="pug">
.FBackgroundImage
  .FBackgroundImage__image(
    :style="style"
    ref="backgroundImageRef"
  )
  .FBackgroundImage__placeholder(
    v-if="placeholder"
    :style="style"
    :class="placeholderClasses"
  )
</template>

<style lang="stylus">
.FBackgroundImage
  height 100%
  width 100%

.FBackgroundImage__image
  background-image var(--fbackgroundimage--src)

.FBackgroundImage__placeholder
  position absolute
  top 0
  left 0
  height 100%
  min-height var(--fbackgroundimage--height)
  width 100%
  min-width var(--fbackgroundimage--width)
  background-image var(--fbackgroundimage--placeholder)
  filter blur(4px)
  transition opacity 500ms var(--transition--ease-out), filter 500ms var(--transition--ease-out)
  opacity 1
  z-index 1

  &--loaded
    opacity 0
    filter blur(0)

.FBackgroundImage__image,
.FBackgroundImage__placeholder
  height var(--fbackgroundimage--height)
  width var(--fbackgroundimage--width)
  background-color var(--fbackgroundimage--color)
  background-position var(--fbackgroundimage--position)
  background-size var(--fbackgroundimage--size)
  background-repeat var(--fbackgroundimage--repeat)
  mix-blend-mode var(--fbackgroundimage--blend-mode)
</style>

<script setup lang="ts">
import type CSS from 'csstype';
import { genSize, getCssColor } from '@/modules/utils';

export interface FBackgroundImageProps {
  /**
   * Source of the image
   */
  src: string;
  /**
   * Height of the image
   */
  height?: string | number;
  /**
   * Width of the image
   */
  width?: string | number;
  /**
   * Position of the image
   */
  position?: string | number;
  /**
   * Size of the image, mapped on background-size
   */
  size: CSS.Properties['backgroundSize'];
  /**
   * Repeat property of the image, mapped to background-repeat
   */
  repeat?: CSS.Properties['backgroundRepeat'];
  /**
   * Blend mode of the image, mapped to mix-blend-mode
   */
  blendMode?: CSS.Properties['mixBlendMode'];
  /**
   * Background color, used instead of source if no provided
   */
  color?: string;
  /**
   * Loading rule of the image.
   */
  loading?: 'lazy' | 'eager';
  /**
   * Second image source used as placeholder
   */
  placeholder?: string;
}

const props = withDefaults(defineProps<FBackgroundImageProps>(), {
  width: '100%',
  height: '100%',
  position: 'initial',
  repeat: 'no-repeat',
  blendMode: 'normal',
  color: 'none',
  loading: 'lazy',
  placeholder: '',
});

const backgroundImageRef = ref();
const { isInit, isLoaded } = useLazyImage(backgroundImageRef, props.src);

const imageSrc = computed(() => {
  if (props.loading !== 'lazy') return props.src;
  return isInit.value ? props.src : '';
});

const style = computed(
  (): Style => ({
    '--fbackgroundimage--src': `url(${imageSrc.value})`,
    '--fbackgroundimage--height': genSize(props.height),
    '--fbackgroundimage--width': genSize(props.width),
    '--fbackgroundimage--color': getCssColor(props.color),
    '--fbackgroundimage--position': genSize(props.position),
    '--fbackgroundimage--size': genSize(props.size),
    '--fbackgroundimage--repeat': genSize(props.repeat),
    '--fbackgroundimage--blend-mode': genSize(props.blendMode),
    '--fbackgroundimage--placeholder': `url(${props.placeholder})`,
  })
);

const placeholderClasses = computed(() => ({
  'FBackgroundImage__placeholder--loaded': isLoaded.value,
}));
</script>
