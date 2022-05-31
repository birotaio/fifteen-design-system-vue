import { baseColorDesignTokens, colorDesignTokens } from '@/config/colors';

declare global {
  type BaseColorDesignToken = typeof baseColorDesignTokens[number];
  type ColorDesignToken = typeof colorDesignTokens[number];
  type Color = ColorDesignToken | string;
}

export {};
