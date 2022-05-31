import { ref } from 'vue';
import getNumVal from './get-num-val';
import { describe, it, expect } from 'vitest';

describe('Extract the first numeric value from an input', () => {
  it('should return 0 if no input', () => {
    expect(getNumVal(null)).toBe(0);
    expect(getNumVal('')).toBe(0);
  });
  it("should return 0 if the input doesn't contain a numeric value", () => {
    expect(getNumVal('iakzid')).toBe(0);
  });
  it('should return the first numeric value from the input', () => {
    expect(getNumVal(-12)).toBe(-12);
    expect(getNumVal('-14deg')).toBe(-14);
    expect(getNumVal('12px')).toBe(12);
    expect(getNumVal('42xp95')).toBe(42);
    expect(getNumVal('22 pommes')).toBe(22);
  });
  it('should work the same with refs', () => {
    expect(getNumVal(ref(null))).toBe(0);
    expect(getNumVal(ref(''))).toBe(0);
    expect(getNumVal(ref('iakzid'))).toBe(0);
    expect(getNumVal(ref(-12))).toBe(-12);
    expect(getNumVal(ref('-14deg'))).toBe(-14);
    expect(getNumVal(ref('12px'))).toBe(12);
    expect(getNumVal(ref('42xp95'))).toBe(42);
    expect(getNumVal(ref('22 pommes'))).toBe(22);
  });
});
