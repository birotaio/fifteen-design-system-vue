<template lang="pug">
.FsCreditCardIconGrid
  .FsCreditCardIconGrid__item(v-for="cardType in cardTypes")
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
  grid-template-columns repeat(auto-fill, 3rem)
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
import { getCreditCardIcons } from '@/config/icons/.utils';

export interface FsCreditCardIconGridProps {
  /**
   * Size of each credit card
   */
  size?: string | number;
  /**
   * Stroke width
   */
  strokeWidth?: number;
}

withDefaults(defineProps<FsCreditCardIconGridProps>(), {
  size: '24px',
  color: 'secondary',
  strokeWidth: 0,
});
const cardTypes = getCreditCardIcons();
</script>
