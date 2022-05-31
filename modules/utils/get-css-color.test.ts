import { colorDesignTokens } from '@/config/colors';
import { ref } from 'vue';
import getCssColor from './get-css-color';
import { describe, it, expect } from 'vitest';

describe('Get CSS color', () => {
  it('Returns empty string if input is empty', () => {
    expect(getCssColor(null)).toBe('');
    expect(getCssColor('')).toBe('');
  });
  it('Returns the CSS variable corresponding to the color design token', () => {
    colorDesignTokens.forEach(color => {
      expect(getCssColor(color)).toBe('var(--color--' + color + ')');
    });
  });
  it('Returns the color that is any other string', () => {
    expect(getCssColor('#fff')).toBe('#fff');
    expect(getCssColor('aliceblue')).toBe('aliceblue');
    expect(getCssColor('rgba(100,20,3,1)')).toBe('rgba(100,20,3,1)');
  });
  it('All the above works with refs', () => {
    expect(getCssColor(ref(null))).toBe('');
    expect(getCssColor(ref(''))).toBe('');
    colorDesignTokens.forEach(color => {
      expect(getCssColor(ref(color))).toBe('var(--color--' + color + ')');
    });
    expect(getCssColor(ref('#fff'))).toBe('#fff');
    expect(getCssColor(ref('aliceblue'))).toBe('aliceblue');
    expect(getCssColor(ref('rgba(100,20,3,1)'))).toBe('rgba(100,20,3,1)');
  });
});
