import { mask } from './mask';
import { describe, it, expect } from 'vitest';

describe('Mask validation', () => {
  it('Returns true if the value match a birth date pattern', () => {
    expect(mask('01/10/2012', '##/##/####')).toBe(true);
  });

  it('Returns false if a birth date value does not match a birth date pattern', () => {
    expect(mask('01/10/AAAA', '##/##/####')).toBe(false);
  });

  it('Returns false if a birth date value only match partially a birth date pattern', () => {
    expect(mask('01/10', '##/##/####')).toBe(false);
  });

  it('Returns true if the value match a credit card pattern', () => {
    expect(mask('4012 8888 8888 1881', '#### #### #### ####')).toBe(true);
  });

  it('Returns false if the value only match partially a credit card pattern', () => {
    expect(mask('4012 8888', '#### #### #### ####')).toBe(false);
  });

  it('Returns false if the value does not match a credit card pattern', () => {
    expect(mask('401w 888x 888y 188z', '#### #### #### ####')).toBe(false);
  });
});
