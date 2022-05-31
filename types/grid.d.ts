import { spanValues } from '@/config/grid';

declare global {
  type Span = typeof spanValues[number];
}

export {};
