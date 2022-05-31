import { ref } from 'vue';
import genAngle from './gen-angle';
import { describe, it, expect } from 'vitest';

describe('Generate an angle value in degrees', () => {
  it('should return default angle value if input is empty', () => {
    expect(genAngle(null)).toBe('0deg');
    expect(genAngle('')).toBe('0deg');
    expect(genAngle(null, '90deg')).toBe('90deg');
    expect(genAngle('', '60deg')).toBe('60deg');
  });
  it('should return default angle if the input contains other characters than "deg"', () => {
    expect(genAngle('12px')).toBe('0deg');
    expect(genAngle('aze')).toBe('0deg');
    expect(genAngle('12rem')).toBe('0deg');
  });
  it('should return the correct angle value if input type correct', () => {
    expect(genAngle('14')).toBe('14deg');
    expect(genAngle(14)).toBe('14deg');
    expect(genAngle('14deg')).toBe('14deg');
  });
  it('should work the same with refs', () => {
    expect(genAngle(ref(null))).toBe('0deg');
    expect(genAngle(ref(''))).toBe('0deg');
    expect(genAngle(ref(null), '90deg')).toBe('90deg');
    expect(genAngle(ref(''), '60deg')).toBe('60deg');
    expect(genAngle(ref('12px'))).toBe('0deg');
    expect(genAngle(ref('aze'))).toBe('0deg');
    expect(genAngle(ref('12rem'))).toBe('0deg');
    expect(genAngle(ref('14'))).toBe('14deg');
    expect(genAngle(ref(14))).toBe('14deg');
    expect(genAngle(ref('14deg'))).toBe('14deg');
  });
});
