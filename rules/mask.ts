import { mask as maska, tokens } from 'maska';

/**
 * Validate a value based on mask
 * @param value - Value to test
 * @param mask - Mask used to test the value
 * @returns True if valid, false otherwise
 */
export function mask(value: unknown, mask: string): boolean {
  return maska(value, mask, tokens) === value;
}
