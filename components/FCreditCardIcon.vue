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
  FIcon(
    v-if="isValid"
    name="checkmark"
    :size="Number(size) / 3"
  )
</template>

<style lang="stylus">
.FCreditCardIcon
  position relative
  width var(--FCreditCardIcon--size)

  .FIcon
    position absolute
    bottom var(--FCreditCardIcon--bottom)
    left var(--FCreditCardIcon--left)
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';
import FIcon from '@/components/FIcon.vue';
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
  /**
   * Show a validation icon bottom left of the credit card icon
   */
  isValid?: boolean;
}

const props = withDefaults(defineProps<FCreditCardIconProps>(), {
  cardType: null,
  size: 24,
  isValid: false,
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
    '--FCreditCardIcon--bottom': genSize(-(Number(props.size) / 5)),
    '--FCreditCardIcon--left': genSize(-(Number(props.size) / 5)),
  })
);
</script>
