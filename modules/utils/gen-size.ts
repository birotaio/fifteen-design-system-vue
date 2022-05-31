import { Ref, unref } from 'vue';

export type CssUnit =
  | 'em'
  | 'ex'
  | '%'
  | 'px'
  | 'cm'
  | 'mm'
  | 'in'
  | 'pt'
  | 'pc'
  | 'ch'
  | 'rem'
  | 'vh'
  | 'vw'
  | 'vmin'
  | 'vmax'
  | 'rpx';

export const cssUnits: CssUnit[] = [
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
];

type SizeRaw = string | number | null | undefined;

const unitRegexp = new RegExp('^(-?[0-9.]+)([a-z]+)?$', 'i');

/**
 * Generate proper CSS size value from a number or string, where px are converted into rem.
 * @param size - Size to parse
 * @returns Proper CSS size value
 */
export default function genSize(size: Ref<SizeRaw> | SizeRaw): string {
  const sizeValue = unref(size);
  if (!sizeValue && sizeValue !== 0) {
    return ''; // fallback to empty string so that we handle default in CSS
  }

  if (typeof sizeValue === 'number') {
    return sizeValue / 16 + 'rem';
  }

  const cssUnitMatch = unitRegexp.exec(sizeValue);
  const [_, value, unit] = cssUnitMatch || Array(3);
  if (value && !isNaN(+value) && (!cssUnits.includes(unit) || unit === 'px')) {
    return parseFloat(value) / 16 + 'rem';
  }
  return sizeValue;
}
