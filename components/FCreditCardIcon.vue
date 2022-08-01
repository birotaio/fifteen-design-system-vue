<template lang="pug">
.FCreditCardIcon
  FSvgImage(
    :markup="creditCardFiles[currentCreditCardPath]"
    fill-color="none"
    use-svg-colors
    :alt="cardType ?? ''"
    height="100%"
    :width="size"
  )
</template>

<style lang="stylus">
.FCreditCardIcon
  position relative
  overflow hidden
  width var(--FCreditCardIcon--size)
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';
import { computed } from 'vue';
import { CreditCardTypeCardBrandId } from 'credit-card-type/dist/types';

export interface FCreditCardIconProps {
  /**
   * Code of the country, following the ISO 3166 standard
   */
  cardType: CreditCardTypeCardBrandId | null;
  /**
   * Size of the credit card icon
   */
  size?: string | number;
}

const props = withDefaults(defineProps<FCreditCardIconProps>(), {
  cardType: null,
  size: 24,
});

// TODO: dynamic import to reduce bundle size
const creditCardFiles: Record<string, string> = import.meta.globEager(
  '@/assets/icons/credit-cards/*.svg',
  {
    as: 'raw',
  }
);
const creditCardPaths = Object.keys(creditCardFiles);

const currentCreditCardPath = computed(
  () =>
    creditCardPaths.find(path =>
      new RegExp(`/${props.cardType}.svg`).test(path)
    ) ?? ''
);
</script>
