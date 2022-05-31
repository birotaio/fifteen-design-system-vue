import { typographies } from '@/config/typography';

declare global {
  type Typography = typeof typographies[number];
}

export {};
