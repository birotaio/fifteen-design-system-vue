import { ref } from 'vue';
import getTanFromDegrees from './get-tan-from-degrees';
import { describe, it, expect } from 'vitest';

describe('Calculates the tangent value from an angle value in degrees', () => {
  it('should return the correct tangent value of the provided angle', () => {
    expect(getTanFromDegrees(45)).toBeCloseTo(1);
    expect(getTanFromDegrees(-45)).toBeCloseTo(-1);
    expect(getTanFromDegrees(135)).toBeCloseTo(-1);

    const a = getTanFromDegrees(30);

    expect(a).toBeDefined();
    expect(a).not.toBeNull();
    expect(a).toBeCloseTo(0.57735026919);
  });
  it('should work the same with refs', () => {
    expect(getTanFromDegrees(ref(45))).toBeCloseTo(1);
    expect(getTanFromDegrees(ref(-45))).toBeCloseTo(-1);
    expect(getTanFromDegrees(ref(135))).toBeCloseTo(-1);

    const thirtyDegreesInTan = getTanFromDegrees(ref(30));
    expect(thirtyDegreesInTan).toBeDefined();
    expect(thirtyDegreesInTan).not.toBeNull();
    expect(thirtyDegreesInTan).toBeCloseTo(0.57735026919);
  });
});
