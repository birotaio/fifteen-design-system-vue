import type { CSSProperties } from '@vue/runtime-dom';

declare global {
  type CSSVariable = `--${string}`;
  interface Style extends CSSProperties {
    [key: CSSVariable]: string;
  }
}

export {};
