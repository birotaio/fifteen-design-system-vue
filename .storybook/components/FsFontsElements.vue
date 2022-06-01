<template lang="pug">
.FsFontsElements
  caption Use the following html elements.
  hr
  each i in [1, 2, 3, 4, 5, 6]
    .FsFontsElements__element
      #{'h'+i} Heading level #{ i }
      code h#{ i }
  .FsFontsElements__element
    p Paragraph
    code p
  .FsFontsElements__element
    ul: li List item
    code li
  .FsFontsElements__element
    label Label
    code label
  .FsFontsElements__element
    small Small
    code small
  .FsFontsElements__element
    caption Caption
    code caption
</template>

<style lang="stylus">
.FsFontsElements__element
  display flex
  align-items center
  margin 8px 0

  code
    font-prop('caption', 'font-size')
    margin-left 8px
</style>
