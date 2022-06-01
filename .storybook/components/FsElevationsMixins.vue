<template lang="pug">
.FsElevationsMixins
  caption Use the following elevation mixins, with <code>z</code> from <code>0</code> to <code>6</code>, or <code>"inset"</code>.
  hr
  .FsElevationsMixins__container
    .FsElevationsMixins__row
      span normal shadow
      template(v-for="z in elevationsValues")
        .FsElevationsMixins__item
          caption: code {{ `elevation(${JSON.stringify(z)})` }}
          div(:class="`FsElevationsMixins__elevation--${z}`")

    .FsElevationsMixins__row
      span lighter shadow
      template(v-for="z in elevationsValues")
        .FsElevationsMixins__item
          caption: code {{ `elevation-light(${JSON.stringify(z)})` }}
          div(:class="`FsElevationsMixins__elevation-light--${z}`")

    template(v-for="pseudoClass in pseudoClasses")
      .FsElevationsMixins__row
        span with transition, on {{ pseudoClass }}
        template(v-for="z in elevationsValues")
          .FsElevationsMixins__item
            caption: code {{ `elevation-transition()` }}
            caption: code :{{ pseudoClass }} <br/> {{ ` elevation(${JSON.stringify(z)})` }}
            div(
              :class="`FsElevationsMixins__elevation--${z}--${pseudoClass}`"
              v-bind="pseudoClass === 'focus' ? { tabindex: 0 } : {}"
            )

    .FsElevationsMixins__row
      span etc...
</template>

<style lang="stylus">
.FsElevationsMixins
  hr
    margin-bottom rem(16)

.FsElevationsMixins__container
  display flex

.FsElevationsMixins__row
  margin 0 rem(16)

.FsElevationsMixins__item
  margin rem(8) 0
  width rem(220)

  div
    position relative
    height rem(36)

for $z in 'inset' 0 1 2 3 4 5 6
  .FsElevationsMixins__elevation-light--{$z}
    elevation-light($z)

  .FsElevationsMixins__elevation--{$z}
    elevation($z)

    &--hover
      background-color rgba(0, 0, 0, 0.05)
      elevation-transition()

      &:hover
        elevation($z)

    &--focus
      outline none
      background-color rgba(0, 0, 0, 0.05)
      elevation-transition()

      &:focus
        elevation($z)
</style>

<script setup lang="ts">
const elevationsValues = ['inset', 0, 1, 2, 3, 4, 5, 6];
const pseudoClasses = ['hover', 'focus'];
</script>
