import { unref, Ref } from 'vue';

const numValueMatcher = /-?\d+\.?\d*/;

/**
 * Extracts the first numeric value from anything that contains one
 * @param input - Input value to extract from
 * @returns Numeric value extracted from input value
 */
export default function getNumVal(
  input: Ref<string | number | null> | string | number | null
): number {
  if (!input) return 0;
  const value = unref(input);

  if (!value) return 0;
  else if (typeof value === 'number') return value;

  const match = value.match(numValueMatcher);
  return match?.[0] ? parseInt(match[0]) : 0;
}
