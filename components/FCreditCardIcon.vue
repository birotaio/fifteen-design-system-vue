<template lang="pug">
.FCreditCardIcon(:style="style")
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
  width var(--FCreditCardIcon--size)
  transition transform 0.3s ease
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';
import { computed } from 'vue';
import type { CreditCardBrandId } from '@/modules/credit-card-types';
import { genSize } from '@/utils/genSize';

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

const style = computed(
  (): Style => ({
    '--FCreditCardIcon--size': genSize(props.size),
  })
);
</script>
