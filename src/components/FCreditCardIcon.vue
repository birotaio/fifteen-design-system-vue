<template lang="pug">
.FCreditCardIcon(:style="style")
  FSvgImage(
    :markup="markup"
    :alt="cardType ?? ''"
    :width="size"
    fill-color="none"
    height="100%"
    use-svg-colors
  )
</template>

<style lang="stylus">
.FCreditCardIcon
  position relative
  width var(--FCreditCardIcon--size)
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';

import { genSize } from '@/utils/genSize';

import type { CreditCardBrandId } from '@/utils/credit-cards';

export interface FCreditCardIconProps {
  /**
   * Code of the country, following the ISO 3166 standard
   */
  cardType: CreditCardBrandId | null;
  /**
   * Size of the credit card icon
   */
  size?: string | number;
}

const props = withDefaults(defineProps<FCreditCardIconProps>(), {
  cardType: null,
  size: 24,
});

const style = computed(
  (): Style => ({
    '--FCreditCardIcon--size': genSize(props.size),
  })
);

const { markup } = useIcon('creditCards', toRef(props, 'cardType'));
</script>
