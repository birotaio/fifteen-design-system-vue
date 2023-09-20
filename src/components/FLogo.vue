<template lang="pug">
.FLogo
  FSvgImage(
    :component="logoComponent"
    :width="width"
    :height="height"
    :fill-color="color"
  )
  .FLogo__productName(
    v-if="variant === 'product'"
    :style="productNameStyle"
  ) {{ productName }}
</template>

<style lang="stylus">
.FLogo
  width fit-content

.FLogo__productName
  font-family $font-family-text
  text-align right
  color var(--FLogo--productNameColor)
  font-size var(--FLogo--productNameFontSize)
  letter-spacing 0
  font-weight 700
  margin-top 0.1ch
  transform translate(0.4%, -10%)
</style>

<script setup lang="ts">
import { getCssColor } from '@/utils/getCssColor';
import { genSize } from '@/utils/genSize';
import logoHorizontal from '@/assets/logos/fifteen_horizontal.svg?component';
import logoVertical from '@/assets/logos/fifteen_vertical.svg?component';
import logoTextOnly from '@/assets/logos/fifteen_text-only.svg?component';
import logoImageOnly from '@/assets/logos/fifteen_image-only.svg?component';
import logoHalfImageOnly from '@/assets/logos/fifteen_half-image-only.svg?component';

import type { FunctionalComponent, SVGAttributes } from 'vue';
import type { Color } from '@/types/colors';

export type FLogoVariant =
  | 'horizontal'
  | 'vertical'
  | 'image-only'
  | 'half-image-only'
  | 'text-only'
  | 'product';

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
  /**
   * Sub-text, representing the product name, displayed in case of 'product' variant
   */
  productName?: string;
  /**
   * Sub-text color, defaults to the logo color if absent
   */
  productNameColor?: Color;
}

const props = withDefaults(defineProps<FLogoProps>(), {
  color: 'primary',
  variant: 'horizontal',
  width: 'auto',
  height: 'auto',
  productName: '',
  productNameColor: undefined,
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
  product: logoTextOnly,
};

const logoComponent = computed(() => logoComponents[props.variant]);

const productNameStyle = computed(
  (): Style => ({
    '--FLogo--productNameColor': getCssColor(
      props.productNameColor ?? props.color
    ),
    '--FLogo--productNameFontSize': genSize(props.width, 0.104),
  })
);
</script>
