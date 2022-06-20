import { mask } from './mask';
import { describe, it, expect } from 'vitest';

// Test suite is really lean as maska lib handle under the hood the mask check
describe('Mask validation', () => {
  it('Returns true if the value match a birth date pattern', () => {
    expect(mask('01/10/2012', '##/##/####')).toBe(true);
  });

  it('Returns false if a birth date value does not match a birth date pattern', () => {
    expect(mask('01/10/AAAA', '##/##/####')).toBe(false);
  });

  it('Returns true if the value match a credit card pattern', () => {
    expect(mask('4012 8888 8888 1881', '#### #### #### ####')).toBe(true);
  });

  it('Returns false if the value does not match a credit card pattern', () => {
    expect(mask('401w 888x 888y 188z', '#### #### #### ####')).toBe(false);
  });
});
