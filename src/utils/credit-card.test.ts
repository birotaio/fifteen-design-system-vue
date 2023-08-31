import { describe, it, expect } from 'vitest';

import { getCardInfo, matchCardNumberByPattern, luhnCheck } from './credit-cards';

describe('Credit Card Utils', () => {
  describe('matchCardNumberByPattern', () => {
    it('should match single-digit pattern', () => {
      expect(matchCardNumberByPattern('4', 4)).toBe(true);
      expect(matchCardNumberByPattern('5', 4)).toBe(false);
    });

    it('should match range pattern', () => {
      expect(matchCardNumberByPattern('51', [51, 55])).toBe(true);
      expect(matchCardNumberByPattern('56', [51, 55])).toBe(false);
    });
  });

  describe('getCardInfo', () => {
    it('should return null for empty input', () => {
      expect(getCardInfo('')).toBeNull();
    });

    it('should return null for unmatched input', () => {
      expect(getCardInfo('1234567890123456')).toBeNull();
    });

    it('should correctly return a Visa card type', () => {
      expect(getCardInfo('4242424242424242')?.name).toBe('Visa');
    });

    it('should correctly return a Mastercard card type', () => {
      expect(getCardInfo('5555555555554444')?.name).toBe('Mastercard');
    });
  });

  describe('luhnCheck', () => {
    it('should return true for a valid card number', () => {
      expect(luhnCheck('4242424242424242')).toBe(true);
      expect(luhnCheck('5555555555554444')).toBe(true);
    });

    it('should return false for an invalid card number', () => {
      expect(luhnCheck('1234567890123456')).toBe(false);
    });
  });
});
