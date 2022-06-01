<template lang="pug">
.FsIconGrid
  .FsIconGrid__item(v-for="icon in icons")
    //- TS error on `name` prop is expected because it has a partial litteral type
    FIcon(
      :size="size"
      :color="color"
      :name="icon"
    )
    span {{ icon }}
</template>

<style lang="stylus">
$border = lightgay

.FsIconGrid
  display grid
  grid-template-columns repeat(auto-fill, 180px)
  grid-gap rem(4px)

.FsIconGrid__item
  display flex
  height 100px
  flex-direction column
  align-items center
  justify-content center
  padding rem(2px)
  font-size rem(12px)

  * + *
    margin-top rem(4px)
</style>

<script setup lang="ts">
import { withDefaults, ref } from 'vue';
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
}

withDefaults(defineProps<FsIconGridProps>(), {
  size: '24px',
  color: 'secondary',
});

const icons = ref(getIconList());
</script>
