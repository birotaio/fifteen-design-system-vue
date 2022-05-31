<template lang="pug">
FImage.FAvatar(
  :src="src"
  :placeholder="placeholder"
  :alt="alt"
  :width="size"
  :height="size"
  :loading="loading"
  corners="circular"
)
</template>

<style lang="stylus">
.FAvatar
  position relative
</style>

<script setup lang="ts">
export interface FAvatarProps {
  /**
   * Source of the avatar
   */
  src: string;
  /**
   * Alt text for the avatar
   */
  alt?: string;
  /**
   * Size of the avatar
   */
  size?: string | number;
  /**
   * Placeholder image source
   */
  placeholder?: string;
  /**
   * Loading mode of the avatar. Default to lazy
   */
  loading?: 'lazy' | 'eager';
}

const props = withDefaults(defineProps<FAvatarProps>(), {
  src: '',
  alt: '',
  loading: 'lazy',
  placeholder: '',
  size: '80',
});
</script>
