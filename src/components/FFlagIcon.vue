<template lang="pug">
.FFlagIcon
  FSvgImage(
    :markup="flagFiles[currentFlagPath]"
    fill-color="none"
    use-svg-colors
    :alt="countryCode"
    :height="size"
    :width="size"
  )
</template>

<style lang="stylus">
.FFlagIcon
  position relative
  overflow hidden
</style>

<script setup lang="ts">
import { computed } from 'vue';

import FSvgImage from './FSvgImage.vue';

export interface FFlagIconProps {
  /**
   * Code of the country, following the ISO 3166 standard
   * @deprecated Use flagCode prop instead
   */
  countryCode?: FlagCode;
  /**
   * Code of the flag, following the ISO 3166 standard + regional flags (see /src/flags.ts for full list)
   */
  flagCode: FlagCode;
  /**
   * Size of the flag icon
   */
  size?: string | number;
}

const props = withDefaults(defineProps<FFlagIconProps>(), {
  countryCode: undefined,
  flagCode: 'FR',
  size: 24,
});

// TODO: dynamic import to reduce bundle size
const flagFiles: Record<string, string> = import.meta.glob(
  '@/assets/icons/country-flags/*.svg',
  {
    as: 'raw',
    eager: true,
  }
);
const flagPaths = Object.keys(flagFiles);

const currentFlagPath = computed(
  () =>
    flagPaths.find(path =>
      new RegExp(`/${props.countryCode ?? props.flagCode}.svg`).test(path)
    ) ?? flagPaths[0]
);
</script>
