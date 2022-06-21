import { tokens } from 'maska';

/**
 * Validate a value based on mask
 * @param value - Value to test
 * @param mask - Mask used to test the value
 * @returns True if valid, false otherwise
 */
export function mask(value: string, mask: string): boolean {
  const maskAsRegex = mask
    .split('')
    .map(maskChar => {
      return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        tokens[maskChar]?.pattern.toString().replace(/\//g, '') ?? maskChar
      );
    })
    .join('');
  return new RegExp(maskAsRegex).test(value);
}
