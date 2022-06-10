<template lang="pug">
.FFlagIcon
  .FFlagIcon__flagWrapper
    FSvgImage(
      :src="`../assets/icons/country-flags/${countryCode.toUpperCase()}.svg`"
    )
</template>

<style lang="stylus">
.FFlagIcon
  position relative
  overflow hidden
  width rem(24)
  height rem(24)

.FFlagIcon__flagWrapper
  margin-top rem(4)

  > *
    border-radius rem(4)
    overflow hidden
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';
import type { CountryCode } from 'libphonenumber-js';

export interface FFlagIconProps {
  countryCode: CountryCode;
}

withDefaults(defineProps<FFlagIconProps>(), {
  countryCode: 'FR',
});
</script>
