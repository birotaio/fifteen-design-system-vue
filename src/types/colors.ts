import { baseColorDesignTokens, colorDesignTokens } from '@/constants/colors';

import type CSS from 'csstype';

export type BaseColorDesignToken = typeof baseColorDesignTokens[number];
export type ColorDesignToken = typeof colorDesignTokens[number];
export type Color = ColorDesignToken | CSS.Property.Color;
