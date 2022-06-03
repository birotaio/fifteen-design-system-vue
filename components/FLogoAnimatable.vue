<template lang="pug">
svg.FLogoAnimatable(
  :style="style"
  xmlns="http://www.w3.org/2000/svg"
  :viewBox="viewBox"
)
  line(
    v-for="line in lines"
    v-bind="line"
  )
</template>

<style lang="stylus">
.FLogoAnimatable
  width var(--flogoanimatable--width)
  height var(--flogoanimatable--height)
  min-width var(--flogoanimatable--width)
  min-height var(--flogoanimatable--height)

  line
    fill none
    stroke var(--flogoanimatable--color)
    stroke-width var(--flogoanimatable--stroke-width)
</style>

<script setup lang="ts">
export type FLogoLineNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15;

export type FLogoLineDelta = {
  [K in FLogoLineNumber]?: number;
};

export interface FLogoAnimatableProps {
  /**
   * Base width of the svg, regardless line displacements
   */
  width?: number;
  /**
   * Logo color
   */
  color?: Color;
  /**
   * Line outer displacements
   */
  delta?: FLogoLineDelta;
}

const defaultLines = [
  { x1: 58.012, y1: 74.038, x2: 58.033, y2: 115.391 },
  { x1: 64.787, y1: 72.586, x2: 81.63, y2: 110.362 },
  { x1: 70.383, y1: 68.504, x2: 101.142, y2: 96.171 },
  { x1: 73.855, y1: 62.511, x2: 113.194, y2: 75.27 },
  { x1: 74.579, y1: 55.618, x2: 115.704, y2: 51.274 },
  { x1: 72.423, y1: 49.034, x2: 108.236, y2: 28.332 },
  { x1: 67.784, y1: 43.892, x2: 92.083, y2: 10.411 },
  { x1: 61.46, y1: 41.064, x2: 70.037, y2: 0.609 },
  { x1: 54.529, y1: 41.068, x2: 45.91, y2: 0.622 },
  { x1: 48.208, y1: 43.902, x2: 23.875, y2: 10.446 },
  { x1: 43.574, y1: 49.048, x2: 7.74, y2: 28.384 },
  { x1: 41.425, y1: 55.635, x2: 0.296, y2: 51.334 },
  { x1: 42.157, y1: 62.527, x2: 2.831, y2: 75.327 },
  { x1: 45.635, y1: 68.517, x2: 14.905, y2: 96.215 },
  { x1: 51.234, y1: 72.593, x2: 34.431, y2: 110.387 },
] as const;

const props = withDefaults(defineProps<FLogoAnimatableProps>(), {
  width: 116,
  color: 'primary',
  delta: () => ({}),
});

const strokeWidth = 4.8;

/*
 * Compute new line coordinates based on displacements
 */
const lines = computed(() =>
  defaultLines.map(({ x1, y1, x2, y2 }, index) => {
    // f(x) = a * x + b
    const a = (y2 - y1) / (x2 - x1); // tan(α)
    let angle = Math.atan(a); // α = atan(a)
    if (index >= 8) angle = angle - Math.PI; // lines beyond 90°
    const delta = props.delta[(index + 1) as FLogoLineNumber] ?? 0;
    const deltaX = delta * Math.cos(angle);
    const deltaY = delta * Math.sin(angle);
    return {
      x1,
      y1,
      x2: x2 + deltaX,
      y2: y2 + deltaY,
    };
  })
);

/**
 * Computed svg viewBox based on line coordinates
 */
const viewBoxMinX = computed(
  () =>
    Math.min(...lines.value.map(({ x1, x2 }) => Math.min(x1, x2))) -
    strokeWidth / 2
);
const viewBoxMinY = computed(
  () =>
    Math.min(...lines.value.map(({ y1, y2 }) => Math.min(y1, y2))) -
    strokeWidth / 2
);
const viewBoxMaxX = computed(
  () =>
    Math.max(...lines.value.map(({ x1, x2 }) => Math.max(x1, x2))) +
    strokeWidth / 2
);
const viewBoxMaxY = computed(
  () =>
    Math.max(...lines.value.map(({ y1, y2 }) => Math.max(y1, y2))) +
    strokeWidth / 2
);
const viewBoxWidth = computed(() => viewBoxMaxX.value - viewBoxMinX.value);
const viewBoxHeight = computed(() => viewBoxMaxY.value - viewBoxMinY.value);
const viewBox = computed(() =>
  [
    viewBoxMinX.value,
    viewBoxMinY.value,
    viewBoxWidth.value,
    viewBoxHeight.value,
  ].join(' ')
);

/**
 * Compute final width based on the props width and the computed viewBox
 */
const finalWidth = computed(() => (props.width / 116) * viewBoxWidth.value);
const finalHeight = computed(() => (props.width / 116) * viewBoxHeight.value);

const style = computed(
  (): Style => ({
    /**
     * Width of the svg
     */
    '--flogoanimatable--width': genSize(finalWidth),
    /**
     * Height of the svg
     */
    '--flogoanimatable--height': genSize(finalHeight),
    /**
     * Color of the logo lines
     */
    '--flogoanimatable--color': getCssColor(props.color),
    /**
     * Stroke width of the logo lines
     */
    '--flogoanimatable--stroke-width': String(strokeWidth),
  })
);
</script>
