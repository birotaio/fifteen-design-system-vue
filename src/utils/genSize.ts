import type { Ref } from 'vue';

export const cssUnits = [
  'em',
  'ex',
  '%',
  'px',
  'cm',
  'mm',
  'in',
  'pt',
  'pc',
  'ch',
  'rem',
  'vh',
  'vw',
  'vmin',
  'vmax',
  'rpx',
] as const;

type SizeRaw = string | number | null | undefined;

const unitRegexp = new RegExp('^(-?[0-9.]+)([a-z%]+)?$', 'i');

/**
 * Generate proper CSS size value from a number or string, where px are converted into rem.
 * @param size - Size to parse
 * @param factor - Optional factor to multiply with the input size, defaults to 1.
 * @returns Proper CSS size value
 */
export function genSize(
  size: Ref<SizeRaw> | SizeRaw,
  factor?: Ref<number | null | undefined> | number | null
): string {
  const sizeValue = unref(size);
  const factorValue = unref(factor) ?? 1;
  if (!sizeValue && sizeValue !== 0) {
    return ''; // fallback to empty string so that we handle default in CSS
  }

  if (typeof sizeValue === 'number') {
    return (sizeValue * factorValue) / 16 + 'rem';
  }

  const cssUnitMatch = unitRegexp.exec(sizeValue);
  const [_, value, unit] = cssUnitMatch || Array(3);
  if (value && !isNaN(+value)) {
    // If no unit or a px unit, cast the result into `rem`
    if (!cssUnits.includes(unit) || unit === 'px') {
      return (parseFloat(value) * factorValue) / 16 + 'rem';
    }
    // Otherwise multiply the value by the factor and keep the input unit
    return parseFloat(value) * factorValue + unit;
  }
  return sizeValue;
}
