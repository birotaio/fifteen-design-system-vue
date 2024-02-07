import { getCssColor } from './getCssColor';

import { colorDesignTokens } from '@/constants/colors';

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

  it('Returns only the variable name when nameOnly param is set to true', () => {
    expect(getCssColor('neutral--light-5', true)).toBe(
      '--color--neutral--light-5'
    );
    expect(getCssColor('primary', true)).toBe('--color--primary');
    expect(getCssColor(ref('aliceblue'), true)).toBe('aliceblue');
    expect(getCssColor(ref('rgba(100,20,3,1)'), true)).toBe('rgba(100,20,3,1)');
  });
});
