import { breakpointsValues } from '@/config/breakpoints';

declare global {
  type Breakpoint = keyof typeof breakpointsValues;
}

export {};
