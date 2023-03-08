<template lang="pug">
.FsColorsMixins
  caption Use the following mixins
  hr
  span no transition
  .FsColorsMixins__container
    template(
      v-for="color in colors"
      :key="color"
    )
      .FsColorsMixins__item
        caption: code {{ `bg-color('${color}')` }}
        div(:class="`FsColorsMixins__bg-color--${color}`")
        div
        caption: code {{ `text-color('${color}')` }}
        div(:class="`FsColorsMixins__text-color--${color}`") {{ color }}

  template(
    v-for="pseudoClass in pseudoClasses"
    :key="pseudoClass"
  )
    span with transition, on {{ pseudoClass }}
    .FsColorsMixins__container
      template(
        v-for="color in colors"
        :key="color"
      )
        .FsColorsMixins__item
          caption: code {{ `bg-color-transition()` }}
          caption: code :{{ pseudoClass }} <br/> {{ ` bg-color('${color}')` }}
          div(
            :class="`FsColorsMixins__bg-color--${color}--${pseudoClass}`"
            v-bind="pseudoClass === 'focus' ? { tabindex: 1 } : {}"
          )
          div
          caption: code {{ `text-color-transition()` }}
          caption: code :{{ pseudoClass }} <br/> {{ ` text-color('${color}')` }}
          div(
            :class="`FsColorsMixins__text-color--${color}--${pseudoClass}`"
            v-bind="pseudoClass === 'focus' ? { tabindex: 0 } : {}"
          ) {{ ['before', 'after'].includes(pseudoClass) ? '' : color }}

  span etc...
</template>

<style lang="stylus">
.FsColorsMixins
  hr
    margin-bottom rem(16)

.FsColorsMixins__container
  padding-top rem(8)
  padding-bottom rem(16)
  display flex
  flex-wrap wrap

.FsColorsMixins__item
  width rem(360)
  padding rem(8)

  div
    position relative
    height rem(36)

for $color in 'primary' 'danger' 'success--dark-1' 'secondary--light-1'
  .FsColorsMixins__bg-color--{$color}
    bg-color($color)

    &--hover
      background-color rgba(0, 0, 0, 0.05)
      bg-color-transition()

      &:hover
        bg-color($color)

    &--focus
      outline none
      background-color rgba(0, 0, 0, 0.05)
      bg-color-transition()

      &:focus
        bg-color($color)

  .FsColorsMixins__text-color--{$color}
    text-color($color)

    &--hover
      color black
      text-color-transition()

      &:hover
        text-color($color)

    &--focus
      outline none
      color black
      text-color-transition()

      &:focus
        text-color($color)
</style>

<script setup lang="ts">
const colors = ['primary', 'danger', 'success--dark-1', 'secondary--light-1'];
const pseudoClasses = ['hover', 'focus'];
</script>
