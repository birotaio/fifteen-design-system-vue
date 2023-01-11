import type CSS from 'csstype';
import { baseColorDesignTokens, colorDesignTokens } from '@/constants/colors';

export type BaseColorDesignToken = typeof baseColorDesignTokens[number];
export type ColorDesignToken = typeof colorDesignTokens[number];
export type Color = ColorDesignToken | CSS.Property.Color;
