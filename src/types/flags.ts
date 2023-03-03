import type { CountryCode as _CountryCode } from 'libphonenumber-js';

declare global {
  type CountryCode = _CountryCode | 'AST';
}
