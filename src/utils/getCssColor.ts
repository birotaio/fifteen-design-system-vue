import { unref, Ref } from 'vue';
import { colorDesignTokens } from '@/constants/colors';

const designSystemColorRegex = new RegExp(
  `^(${colorDesignTokens.join('|')})(--rgb)?$`
);

export function getCssColor(
  color: Ref<Color | null> | Color | null,
  nameOnly = false
): string {
  const colorValue = unref(color);
  if (!colorValue) return '';

  const cssCustomPropertyName = `--color--${colorValue}`;

  return designSystemColorRegex.test(colorValue)
    ? nameOnly
      ? cssCustomPropertyName
      : `var(${cssCustomPropertyName})`
    : colorValue;
}
