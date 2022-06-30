<template lang="pug">
.FsIconGrid
  .FsIconGrid__item(v-for="icon in icons")
    //- TS error on `name` prop is expected because it has a partial litteral type
    FIcon(
      :size="size"
      :color="color"
      :name="icon"
      :stroke-width="strokeWidth"
      :stroke-color="color"
    )
    span {{ icon }}
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

import { withDefaults } from 'vue';
import { getIconList } from '../../config/icons/.utils';

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

const icons = getIconList();
</script>
