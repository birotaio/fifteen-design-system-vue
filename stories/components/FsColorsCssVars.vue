<template lang="pug">
.FsColorsCssVars
  caption Use the following CSS variables. You can also append <code>--rgb</code> to get the RGB values.
  hr
  .FsColorsCssVars__container
    .FsColorsCssVars__color(v-for="baseColor in baseColorDesignTokens")
      span {{ baseColor }}
      template(
        v-for="color in colorDesignTokens.filter(c => c.includes(baseColor))"
      )
        .FsColorsCssVars__item
          caption: code {{ color }}
          div(:style="{ backgroundColor: `var(--color--${color})` }")
</template>

<style lang="stylus">
.FsColorsCssVars__container
  padding-top rem(16)
  display flex
  flex-wrap wrap

.FsColorsCssVars__item
  width rem(230)
  padding rem(8)

  div
    height rem(36)
</style>

<script setup lang="ts">
import { colorDesignTokens, baseColorDesignTokens } from '@/constants/colors';
</script>
