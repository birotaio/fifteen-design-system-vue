<template lang="pug">
.FsFontsMixins
  caption Use the stylus mixin <code>use-font($name)</code>, where <code>$name</code> is in the following names.
  hr
  template(
    v-for="(typography, index) in typographies"
    :key="index"
  )
    div(:class="typography") {{ typography }}
</template>

<style lang="stylus">
for $key in $fonts
  .{$key}
    use-font($key)
</style>

<script setup lang="ts">
import { typographies } from '@/constants/typography';
</script>
