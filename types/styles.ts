import type { CSSProperties } from 'vue';

export type CSSVariable = `--${string}`;
export interface Style extends CSSProperties {
  [key: CSSVariable]: string;
}
