<template lang="pug">
.FGridItem(
  :class="classes"
  :style="style"
)
  // @slot The content in the grid item
  slot
</template>

<style lang="stylus">
.FGridItem
  grid-column: auto / span var(--fgrid-item--span)

  for $breakpoint in lg md sm xs xxs
    &--{$breakpoint}
      +media-down($breakpoint)
        grid-column 'auto / span var(--fgrid-item--span--%s)' % $breakpoint
</style>

<script setup lang="ts">
export interface FGridItemProps {
  /**
   * The span value for xxs breakpoint and below
   */
  xxs?: Span | null;
  /**
   * The span value for xs breakpoint and below
   */
  xs?: Span | null;
  /**
   * The span value for sm breakpoint and below
   */
  sm?: Span | null;
  /**
   * The span value for md breakpoint and below
   */
  md?: Span | null;
  /**
   * The span value for lg breakpoint and below
   */
  lg?: Span | null;
  /**
   * Base span value for all media queries above the last greatest defined breakpoint
   */
  span?: Span;
}

const props = withDefaults(defineProps<FGridItemProps>(), {
  span: 1,
  xxs: null,
  xs: null,
  sm: null,
  md: null,
  lg: null,
});

function getSpanValue(span: Span | null) {
  return span ? String(span) : '';
}

/**
 * Classes added if any breakpoint prop is passed, so that the media-query style is toggled
 */
const classes = computed(() => ({
  'FGridItem--xxs': !!props.xxs,
  'FGridItem--xs': !!props.xs,
  'FGridItem--sm': !!props.sm,
  'FGridItem--md': !!props.md,
  'FGridItem--lg': !!props.lg,
}));

const style = computed(
  (): Style => ({
    '--fgrid-item--span': getSpanValue(props.span),
    '--fgrid-item--span--xxs': getSpanValue(props.xxs),
    '--fgrid-item--span--xs': getSpanValue(props.xs),
    '--fgrid-item--span--sm': getSpanValue(props.sm),
    '--fgrid-item--span--md': getSpanValue(props.md),
    '--fgrid-item--span--lg': getSpanValue(props.lg),
  })
);
</script>
