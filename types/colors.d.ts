import { baseColorDesignTokens, colorDesignTokens } from '../config/colors';

export type BaseColorDesignToken = typeof baseColorDesignTokens[number];
export type ColorDesignToken = typeof colorDesignTokens[number];
export type Color = ColorDesignToken | string;
