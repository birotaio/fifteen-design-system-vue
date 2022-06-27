<template lang="pug">
.FFlagIcon
  .FFlagIcon__flagWrapper
    FSvgImage(
      :markup="flagFiles[currentFlagPath]"
      fill-color="none"
      use-svg-colors
    )
</template>

<style lang="stylus">
.FFlagIcon
  position relative
  overflow hidden
  width rem(24)
  height rem(24)

.FFlagIcon__flagWrapper
  > *
    border-radius rem(4)
    overflow hidden
</style>

<script setup lang="ts">
import FSvgImage from './FSvgImage.vue';
import type { CountryCode } from 'libphonenumber-js';
import { computed } from 'vue';

export interface FFlagIconProps {
  countryCode: CountryCode;
}

const props = withDefaults(defineProps<FFlagIconProps>(), {
  countryCode: 'FR',
});

// TODO: dynamic import to reduce bundle size
const flagFiles: Record<string, string> = import.meta.globEager(
  '@/assets/icons/country-flags/*.svg',
  {
    as: 'raw',
  }
);
const flagPaths = Object.keys(flagFiles);

const currentFlagPath = computed(
  () =>
    flagPaths.find(path =>
      new RegExp(`/${props.countryCode}.svg`).test(path)
    ) ?? flagPaths[0]
);
</script>
