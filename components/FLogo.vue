<template lang="pug">
FSvgImage.FLogo(
  :component="logoComponent"
  :width="width"
  :height="height"
  :fill-color="color"
)
</template>

<style lang="stylus"></style>

<script setup lang="ts">
import FSvgImage from '@/components/FSvgImage.vue';

import { computed } from 'vue';
import type { FunctionalComponent, SVGAttributes } from 'vue';

import logoHorizontal from '@/assets/images/logos/fifteen_horizontal.svg?component';
import logoVertical from '@/assets/images/logos/fifteen_vertical.svg?component';
import logoTextOnly from '@/assets/images/logos/fifteen_text-only.svg?component';
import logoImageOnly from '@/assets/images/logos/fifteen_image-only.svg?component';
import logoHalfImageOnly from '@/assets/images/logos/fifteen_half-image-only.svg?component';

export type FLogoVariant =
  | 'horizontal'
  | 'vertical'
  | 'image-only'
  | 'half-image-only'
  | 'text-only';

export interface FLogoProps {
  /**
   * Variant of the logo
   */
  variant?: FLogoVariant;
  /**
   * Color of the logo
   */
  color?: Color;
  /**
   * Width of the logo
   */
  width?: string | number;
  /**
   * Height of the logo
   */
  height?: string | number;
}

const props = withDefaults(defineProps<FLogoProps>(), {
  color: 'primary',
  size: 2,
  variant: 'horizontal',
  width: 'auto',
  height: 'auto',
});

const logoComponents: Record<
  FLogoVariant,
  FunctionalComponent<SVGAttributes>
> = {
  horizontal: logoHorizontal,
  vertical: logoVertical,
  'image-only': logoImageOnly,
  'half-image-only': logoHalfImageOnly,
  'text-only': logoTextOnly,
};

const logoComponent = computed(() => logoComponents[props.variant]);
</script>
