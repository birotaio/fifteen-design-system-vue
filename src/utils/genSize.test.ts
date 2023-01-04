import { ref } from 'vue';
import { genSize, cssUnits } from './genSize';
import { describe, it, expect } from 'vitest';

const cssUnitsWithoutPixel = cssUnits.filter(unit => unit !== 'px');

describe('Generate size', () => {
  it('Returns an empty string if input is empty', () => {
    expect(genSize('')).toBe('');
    expect(genSize(null)).toBe('');
  });
  it('Returns a size in rem if input is a number', () => {
    expect(genSize(12)).toBe('0.75rem');
  });
  it('Returns a size in rem if input is a pixel number', () => {
    expect(genSize('12px')).toBe('0.75rem');
  });
  it('Returns a size in rem if input has no unit', () => {
    expect(genSize('12')).toBe('0.75rem');
  });
  it('Returns the input size if it has valid CSS unit', () => {
    cssUnitsWithoutPixel.forEach(unit =>
      expect(genSize('5' + unit)).toBe('5' + unit)
    );
  });
  it('Returns the input size if it a string', () => {
    expect(genSize('auto')).toBe('auto');
  });
  it('Returns the input in rem if it is zero', () => {
    expect(genSize(0)).toBe('0rem');
  });
  it('Returns the input size casted into a pixel number if it has an invalid CSS unit', () => {
    expect(genSize('16zm')).toBe('1rem');
  });
  it('All the above works with refs', () => {
    expect(genSize(ref(''))).toBe('');
    expect(genSize(ref(null))).toBe('');
    expect(genSize(ref(12))).toBe('0.75rem');
    expect(genSize(ref('12'))).toBe('0.75rem');
    cssUnitsWithoutPixel.forEach(unit =>
      expect(genSize(ref('5' + unit))).toBe('5' + unit)
    );
    expect(genSize(ref('8zm'))).toBe('0.5rem');
  });
});

describe('Multiplies generated size by a factor', () => {
  it('Returns an empty string if input is empty', () => {
    expect(genSize('', 2)).toBe('');
    expect(genSize(null, 2)).toBe('');
  });
  it('Returns a size in rem if input is a number, doubled', () => {
    expect(genSize(12, 2)).toBe('1.5rem');
  });
  it('Returns a size in rem if input is a pixel number, doubled', () => {
    expect(genSize('12px', 2)).toBe('1.5rem');
  });
  it('Returns a size in rem if input has no unit, doubled', () => {
    expect(genSize('12', 2)).toBe('1.5rem');
  });
  it('Returns the input size if it has valid CSS unit, doubled', () => {
    cssUnitsWithoutPixel.forEach(unit =>
      expect(genSize('5' + unit, 2)).toBe('10' + unit)
    );
  });
  it('Returns the input size if it a string', () => {
    expect(genSize('auto', 2)).toBe('auto');
  });
  it('Always returns 0rem if input is zero', () => {
    expect(genSize(0, 2)).toBe('0rem');
  });
  it('Returns the input size casted into a pixel number if it has an invalid CSS unit, doubled', () => {
    expect(genSize('16zm', 2)).toBe('2rem');
  });
  it('All the above works with refs', () => {
    expect(genSize(ref(''), ref(2))).toBe('');
    expect(genSize(ref(null), ref(2))).toBe('');
    expect(genSize(ref(12), ref(2))).toBe('1.5rem');
    expect(genSize(ref('12'), ref(2))).toBe('1.5rem');
    cssUnitsWithoutPixel.forEach(unit =>
      expect(genSize(ref('5' + unit), ref(2))).toBe('10' + unit)
    );
    expect(genSize(ref('8zm'), ref(2))).toBe('1rem');
  });
});
