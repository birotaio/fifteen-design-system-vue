<!-- eslint-disable vue/no-v-html -->
<!-- The purpose of FTextContent is to render any HTML content -->
<template lang="pug">
.FTextContent(
  :class="classes"
  v-html="textContent"
)
</template>

<style lang="stylus">
.FTextContent
  use-font('body-2')

  .FTextContent__h1
    use-font('heading-1') // We render h1 tags as h2 for a11y reasons, therefore we need to apply the correct style

  h2,
  h3,
  h4,
  h5,
  h6
    margin rem(24) 0

  p,
  ul,
  ol,
  blockquote,
  pre
    margin rem(16) 0

  a
    text-decoration underline

  p,
  ul,
  ol,
  li,
  a,
  table,
  div,
  span
    font-size inherit
    font-weight inherit
    line-height inherit
    letter-spacing inherit

  blockquote
    padding-left rem(16)
    position relative

    &::before
      content ''
      position absolute
      width rem(4)
      border-radius rem(2)
      height 100%
      background-color: $colors.neutral.base
      left 0

  // if anything is wrapped in a figure, when it overflows
  // (such as in mobile) allow scroll
  figure
    overflow-x auto
    margin rem(16) 0

  table
    border-collapse collapse
    margin rem(16) 0

    ul,
    ol
      margin 0

  tbody,
  th,
  td
    border 1px solid $colors.neutral.dark-3

  table
    tbody
      tr:first-of-type
        td
          font-weight 600

  th,
  td
    padding rem(8)

  small
    font-size 80%

  ul
    list-style-type disc
    padding-left rem(16)

  ol
    list-style-type decimal
    padding-left rem(20)

  ul,
  ol
    li
      margin rem(4) 0

      ol
        list-style-type lower-alpha

      ul
        list-style-type circle

      ul,
      ol,
      li
        ol
          list-style-type lower-roman

        ul
          list-style-type square

  &.FTextContent--dense
    use-font('caption')

    .FTextContent__h1
      use-font('heading-2')

    h2
      use-font('heading-3')

    h3
      use-font('heading-4')

    h4
      use-font('heading-5')

    h5
      use-font('heading-6')

    h6
      use-font('body-2')

    h2,
    h3,
    h4,
    h5,
    h6
      margin rem(16) 0

    blockquote
      padding-left rem(8)

      &::before
        width rem(2)
        border-radius rem(1)

    figure
      margin rem(8) 0

    table
      margin rem(8) 0

      ul,
      ol
        margin 0

    th,
    td
      padding rem(4)

    ul
      padding-left rem(12)

    ol
      padding-left rem(16)

    ul,
    ol
      li
        margin rem(2) 0

    figcaption,
    caption
      font-size 80%
</style>

<script setup lang="ts">
import xss from 'xss';
import { avoidOrphanPunct } from '@fifteen/shared-lib';

export interface FTextContentProps {
  /**
   * HTML or raw text content as string
   */
  source: string;
  /**
   * Allowed tags
   */
  allowedTags?: (keyof HTMLElementTagNameMap)[];
  /**
   * Denser styling
   */
  dense?: boolean;
}

const props = withDefaults(defineProps<FTextContentProps>(), {
  // prettier-ignore
  allowedTags: () => [
    'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b','bdo', 'blockquote', 'br', 'caption', 'cite', 'code', 'data','datalist', 'dd', 'del', 'details', 'dfn', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'fieldset', 'footer', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'i', 'img', 'ins', 'kbd', 'li', 'legend', 'main', 'mark', 'meter', 'nav', 'ol', 'optgroup', 'option', 'output', 'p', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section', 'small', 'source', 'span', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'th', 'thead', 'time', 'tr', 'u', 'ul', 'var', 'wbr',
    ],
  dense: false,
});

const xssOptions: XSS.IFilterXSSOptions = {
  whiteList: {
    ...(props.allowedTags ?? []).reduce((acc: XSS.IWhiteList, tag) => {
      acc[tag] = [];
      return acc;
    }, {}),
    a: ['href', 'target', 'rel'],
    abbr: ['title'],
    bdo: ['dir'],
    data: ['value'],
    h2: ['id'],
    meter: ['value', 'min', 'max'],
    ol: ['style'],
    time: ['datetime'],
    ul: ['style'],
  },
  onIgnoreTag: (tag, html, options) => {
    // Replace h1 tags with h2 tags for accessibility purposes
    if (tag === 'h1') {
      const renderedTag = options.isClosing
        ? html.replace('h1', 'h2')
        : html.replace('h1', 'h2 class="FTextContent__h1"');
      return renderedTag;
    }
  },
};

// prettier-ignore
const everySpaces = [
    '\s', '\u200B', '\u0020', '\u00A0', '\u1680', '\u2000', '\u2001', '\u2002', '\u2003', '\u2004',
    '\u2005', '\u2006', '\u2007', '\u2008', '\u2009', '\u200A', '\u202F', '\u205F', '\u3000',
    '&nbsp;', '&ensp;', '&emsp;', '&emsp13;', '&numsp;', '&puncsp;', '&thinsp;', '&hairsp;',
  ];
const emptyParagraphRegex = new RegExp(
  `<p>(${everySpaces.join('|')})*<\/p>`,
  'gi'
);

const textContent = computed(() =>
  avoidOrphanPunct(xss(props.source, xssOptions))
    // remove empty paragraphs
    .replace(emptyParagraphRegex, '')
);

const classes = computed(() => ({
  'FTextContent--dense': props.dense,
}));
</script>
