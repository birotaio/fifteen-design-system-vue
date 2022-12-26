<template lang="pug">
picture.FImage(
  :style="style"
  :class="getImageClasses"
  ref="imageRef"
)
  source.FImage__image(
    v-if="imagePlaceholder"
    :srcset="imageSrc"
    :alt="alt"
  )
  img.FImage__placeholder(
    v-if="imagePlaceholder"
    :src="imagePlaceholder"
    :alt="alt"
  )
  img.FImage__image(
    v-else-if="imageSrc"
    :src="imagePlaceholder || imageSrc"
    :alt="alt"
  )
  .FImage__fallback(v-if="!src")
    FIcon(
      name="landscape"
      color="secondary"
      size="100%"
    )
</template>

<style lang="stylus">
.FImage
  position relative
  height var(--fimage--height)
  width var(--fimage--width)
  border-radius var(--fimage--border-radius)
  overflow hidden
  background-color var(--fimage--background-color, transparent)

  &--placeholder
    filter blur(4px)
    transition filter 500ms var(--transition--ease-out)

  &--loaded
    filter blur(0)

.FImage__image,
.FImage__placeholder,
.FImage__fallback
  height var(--fimage--height)
  width var(--fimage--width)
  border-radius var(--fimage--border-radius)
  object-fit var(--fimage--object-fit)
  object-position var(--fimage--object-position)

.FImage__fallback
  display flex
  align-items center
  justify-content center
  background var(--fimage--fallback-background-color)

  .FIcon
    width rem(160)
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';

import type CSS from 'csstype';
import { ref, computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { useLazyImage } from '@/composables/useLazyImage';
import { getCssColor } from '@/utils/getCssColor';

export interface FImageProps {
  /**
   * Source of the image
   */
  src: string;
  /**
   * Alternative text of the image
   */
  alt: string;
  /**
   * Height of the image
   */
  height?: string | number;
  /**
   * Width of the image
   */
  width?: string | number;
  /**
   * Determine how the image should adjust to its parent. Mapped to object-fit property
   */
  fit?: CSS.Properties['objectFit'];
  /**
   * Determine how the image should be aligned to its parent. Mapped to object-position property
   */
  position?: CSS.Properties['objectPosition'];
  /**
   * Loading mode of the image. Default to lazy.
   */
  loading?: 'eager' | 'lazy';
  /**
   * Placeholder image of the image
   */
  placeholder?: string;
  /**
   * If image angles should be sharped or not
   */
  corners?: 'sharp' | 'rounded' | 'circular';
  /**
   * Background color, default is transparent
   */
  backgroundColor?: Color;
}

const props = withDefaults(defineProps<FImageProps>(), {
  fit: 'contain',
  position: 'center',
  height: 'auto',
  width: 'auto',
  loading: 'lazy',
  placeholder: '',
  squared: false,
  corners: 'rounded',
  backgroundColor: '',
});

const imageRef = ref();
const { isInit, isLoaded } = useLazyImage(imageRef, props.src);
const imageSrc = computed(() =>
  props.loading === 'eager' || isInit.value ? props.src : ''
);
const imagePlaceholder = computed(
  () => props.loading === 'lazy' && props.placeholder
);
const borderRadius = computed(() => {
  switch (props.corners) {
    case 'sharp':
      return '0';
    case 'circular':
      return '50%';
    default:
    case 'rounded':
      return genSize(16);
  }
});

const style = computed(
  (): Style => ({
    '--fimage--height': genSize(props.height),
    '--fimage--width': genSize(props.width),
    '--fimage--object-fit': props.fit,
    '--fimage--object-position': String(props.position),
    '--fimage--border-radius': borderRadius.value,
    '--fimage--background-color': getCssColor(props.backgroundColor),
    '--fimage--fallback-background-color': getCssColor(
      props.backgroundColor || 'neutral--light-3'
    ),
  })
);

const getImageClasses = computed(() => ({
  'FImage--loaded': isLoaded.value,
  'FImage--placeholder': imagePlaceholder.value,
}));
</script>
