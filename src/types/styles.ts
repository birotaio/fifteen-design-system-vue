import type { CSSProperties } from 'vue';

export type CSSVariable = `--${string}`;
export type Style = CSSProperties;

export type VueClasses =
  | Record<string, boolean | null | undefined>
  | (VueClasses | string)[];
