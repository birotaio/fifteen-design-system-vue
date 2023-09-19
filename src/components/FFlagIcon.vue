<template lang="pug">
.FFlagIcon
  FSvgImage(
    :markup="markup"
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
import FSvgImage from '@/components/FSvgImage.vue';

import type { FlagCode } from '@/types/flags';

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

const resolvedCode = computed(() => props.countryCode ?? props.flagCode);
const { markup } = useIcon('flags', resolvedCode);
</script>
