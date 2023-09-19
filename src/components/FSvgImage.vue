<!-- eslint-disable vue/no-v-html -->
<!-- An XSS attack is not a risk here -->
<template lang="pug">
.FSvgImage(
  ref="svgRef"
  :style="style"
  :class="classes"
)
  .FSvgImage__content(
    v-if="markup"
    role="img"
    :aria-label="alt"
    v-html="markup"
  )
  .FSvgImage__content(v-else-if="src")
    img(
      :src="src"
      :alt="alt"
    )
  .FSvgImage__content(
    v-else
    role="img"
    :aria-label="alt"
  )
    component(:is="component")
</template>

<style lang="stylus">
.FSvgImage
  width var(--fsvgimage--width)
  height var(--fsvgimage--height)

.FSvgImage__content
  display flex
  width var(--fsvgimage--width)
  height var(--fsvgimage--height)
  min-width var(--fsvgimage--width)
  min-height var(--fsvgimage--height)
  transition all 0.12s var(--transition--ease-out)

  img
    width 100%

  svg
    flex-grow 1
    width 100%
    height 100%

  path
    transition fill 0.12s var(--transition--ease-out)

.FSvgImage--colored .FSvgImage__content
  path
    fill var(--fsvgimage--fill-color, currentColor)
    stroke var(--fsvgimage--stroke-color, none)
</style>

<script setup lang="ts">
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

import type { FunctionalComponent, SVGAttributes } from 'vue';
import type { Color } from '@/types/colors';

export interface FSvgImageProps {
  /**
   * Use an svg markup (svg file content as string)
   */
  markup?: string | null;
  /**
   * Use a built component (_e.g._ from vite-svg-loader)
   */
  component?: FunctionalComponent<SVGAttributes> | null;
  /**
   * Use a src (public image url)
   */
  src?: string;
  /**
   * Alternative text for the image
   */
  alt?: string;
  /**
   * Width of the image
   */
  width?: string | number;
  /**
   * Width of the image
   */
  height?: string | number;
  /**
   * Stroke color of the SVG
   */
  strokeColor?: Color;
  /**
   * Fill color of the SVG
   */
  fillColor?: Color;
  /**
   * Use the colors of the svg
   */
  useSvgColors?: boolean;
}

const props = withDefaults(defineProps<FSvgImageProps>(), {
  markup: null,
  component: null,
  src: '',
  alt: '',
  width: '',
  height: '',
  strokeColor: '',
  fillColor: '',
  useSvgColors: false,
});

const classes = computed(() => ({
  'FSvgImage--colored': !props.useSvgColors,
}));

const style = computed(
  (): Style => ({
    '--fsvgimage--width': genSize(props.width),
    '--fsvgimage--height': genSize(props.height),
    '--fsvgimage--stroke-color': getCssColor(props.strokeColor),
    '--fsvgimage--fill-color': getCssColor(props.fillColor),
  })
);
</script>
