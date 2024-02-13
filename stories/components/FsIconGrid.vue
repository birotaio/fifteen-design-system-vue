<template lang="pug">
.FsIconGrid
  .FsIconGrid__item(
    v-for="iconName in iconNames"
    :key="iconName"
  )
    //- TS error on `name` prop is expected because it has a partial litteral type
    FIcon(
      :size="size"
      :color="color"
      :name="iconName"
      :stroke-width="strokeWidth"
      :stroke-color="color"
    )
    span {{ iconName }}
</template>

<style lang="stylus">
$border = lightgay

.FsIconGrid
  display grid
  justify-content center
  grid-template-columns repeat(auto-fill, 6rem)
  gap rem(48)

.FsIconGrid__item
  display flex
  flex-direction column
  align-items center
  justify-content center
  font-size rem(12)

  * + *
    margin-top rem(4)
</style>

<script setup lang="ts">
import FIcon from '@/components/FIcon.vue';
import { getIconList } from '@/.generated/utils';
import * as icons from '@/.generated/icons';

import type { Color } from '@/types/colors';

export interface FsIconGridProps {
  /**
   * Size of each icon
   */
  size?: string | number;
  /**
   * Color of each icon
   */
  color?: Color;
  /**
   * Stroke width
   */
  strokeWidth?: number;
}

withDefaults(defineProps<FsIconGridProps>(), {
  size: '24px',
  color: 'secondary',
  strokeWidth: 0,
});

registerIcons('icons', icons);

const iconNames = getIconList();
</script>
