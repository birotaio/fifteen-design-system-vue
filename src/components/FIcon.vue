<!-- eslint-disable vue/no-v-html -->
<!-- An XSS attack is not a risk here -->
<template lang="pug">
.FIcon
  .FIcon__content(
    v-if="resolvedMarkup"
    role="img"
    :aria-label="altText"
    :style="style"
    v-html="resolvedMarkup"
  )
  .FIcon__content(
    v-else-if="src"
    :style="style"
  )
    img(
      :src="src"
      :alt="altText"
    )
</template>

<style lang="stylus">
.FIcon__content
  width var(--ficon--size)
  height var(--ficon--size)
  min-width var(--ficon--size)
  min-height var(--ficon--size)
  transition all 0.12s var(--transition--ease-out)

  img
    width 100%

  svg
    flex-grow 1
    color var(--ficon--color)

  path
    fill currentColor
    stroke var(--ficon--stroke-color)
    stroke-width var(--ficon--stroke-width)
    transition fill 0.12s var(--transition--ease-out)

  @media (prefers-reduced-motion )
    transition none

    path
      transition none
</style>

<script setup lang="ts">
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCssColor';

import type { Color } from '@/types/colors';
import type { Icon } from '@/types/icons';

export interface FIconProps {
  /**
   * Name of the icon
   */
  name?: Icon | null;
  /**
   * Size of the icon
   */
  size?: string | number;
  /**
   * Color of the icon
   */
  color?: Color;
  /**
   * Stroke color of the icon
   */
  strokeColor?: Color;
  /**
   * Stroke width
   */
  strokeWidth?: number;
  /**
   * Source of the icon
   */
  src?: string;
  /**
   * Optional alternate text for the icon,
   * will override the auto-generated one based on the icon name
   */
  alt?: string;
  /**
   * Svg markup of the icon
   */
  markup?: string;
}

const props = withDefaults(defineProps<FIconProps>(), {
  name: null,
  size: '24',
  color: '',
  strokeColor: '',
  src: '',
  alt: '',
  markup: '',
  strokeWidth: 0,
});

const altText = computed(() => {
  // Ideally, props.name should be internationaized, e.g. `$t('icon__alt__' + icon.name)`
  // but at this point we don’t want to introduce a hight coupling between this atomic component
  // and the website integration. To be discussed in the future.
  return props.alt || props.name || '';
});

const style = computed(
  (): Style => ({
    '--ficon--size': genSize(props.size),
    '--ficon--color': getCssColor(props.color),
    '--ficon--stroke-color': getCssColor(props.strokeColor),
    '--ficon--stroke-width': genSize(props.strokeWidth),
  })
);

const { markup } = useIcon(
  'icons',
  toRef(() => props.name)
);
const resolvedMarkup = computed(() => props.markup || markup.value);
</script>
