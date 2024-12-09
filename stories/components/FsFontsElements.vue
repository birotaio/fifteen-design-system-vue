<template lang="pug">
.FsFontsElements
  caption Use the following html elements.
  hr
  template(
    v-for="index in 6"
    :key="index"
  )
    .FsFontsElements__element
      component(:is="`h${index}`") Heading level {{ index }}
      code h{{ index }}
  .FsFontsElements__element
    p Paragraph
    code p
  .FsFontsElements__element
    ul: li List item
    code li
  .FsFontsElements__element
    // eslint-disable-next-line vuejs-accessibility/label-has-for
    label Label
    code label
  .FsFontsElements__element
    small Small
    code small
  .FsFontsElements__element
    figure: figcaption Figure caption
    code figcaption
  .FsFontsElements__element
    table: caption Caption
    code caption
</template>

<style lang="stylus">
.FsFontsElements__element
  display flex
  align-items center
  margin rem(8) 0

  code
    font-size rem(12)
    margin-left rem(8)
</style>
