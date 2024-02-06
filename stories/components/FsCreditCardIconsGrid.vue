<template lang="pug">
.FsCreditCardIconGrid
  .FsCreditCardIconGrid__item(
    v-for="cardType in cardTypes"
    :key="cardType"
  )
    FCreditCardIcon(
      :size="size"
      :card-type="cardType"
    )
    span {{ cardType }}
</template>

<style lang="stylus">
$border = lightgay

.FsCreditCardIconGrid
  display grid
  justify-content center
  grid-template-columns repeat(auto-fill, 5rem)
  gap rem(32)

.FsCreditCardIconGrid__item
  display flex
  flex-direction column
  align-items center
  justify-content center
  font-size rem(12)

  * + *
    margin-top rem(4)
</style>

<script setup lang="ts">
import FCreditCardIcon from '@/components/FCreditCardIcon.vue';
import { getCreditCardIcons } from '@/.generated/utils';
import * as creditCardIcons from '@/.generated/credit-cards';

export interface FsCreditCardIconGridProps {
  /**
   * Size of each credit card icon
   */
  size?: string | number;
}

withDefaults(defineProps<FsCreditCardIconGridProps>(), {
  size: '24px',
});

registerIcons('creditCards', creditCardIcons);

const cardTypes = getCreditCardIcons();
</script>
