<template lang="pug">
.FsFlagGrid
  .FsFlagGrid__item(
    v-for="flag in flags"
    :key="flag"
  )
    FFlagIcon(
      :size="size"
      :flag-code="flag"
    )
    span {{ flag }}
</template>

<style lang="stylus">
$border = lightgay

.FsFlagGrid
  display grid
  justify-content center
  grid-template-columns repeat(auto-fill, 3rem)
  gap rem(32)

.FsFlagGrid__item
  display flex
  flex-direction column
  align-items center
  justify-content center
  font-size rem(12)

  * + *
    margin-top rem(4)
</style>

<script setup lang="ts">
import FFlagIcon from '@/components/FFlagIcon.vue';
import { getFlagIconList } from '@/.generated/utils';
import * as flagIcons from '@/.generated/flags';

import type { Color } from '@/types/colors';

export interface FsFlagGridProps {
  /**
   * Size of each flag
   */
  size?: string | number;
  /**
   * Color of each flag
   */
  color?: Color;
  /**
   * Stroke width
   */
  strokeWidth?: number;
}

withDefaults(defineProps<FsFlagGridProps>(), {
  size: '24px',
  color: 'secondary',
  strokeWidth: 0,
});

registerIcons('flags', flagIcons);

const flags = getFlagIconList();
</script>
