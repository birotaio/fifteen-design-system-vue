import { unref, Ref } from 'vue';
import { colorDesignTokens } from '../config/colors';

const designSystemColorRegex = new RegExp(
  `^(${colorDesignTokens.join('|')})(--rgb)?$`
);

export function getCssColor(
  color: Ref<Color | null> | Color | null
): string {
  const colorValue = unref(color);
  if (!colorValue) return '';
  return designSystemColorRegex.test(colorValue)
    ? 'var(--color--' + colorValue + ')'
    : colorValue;
}
