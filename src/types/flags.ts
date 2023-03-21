import type { CountryCode as _CountryCode } from 'libphonenumber-js';

export type CountryCode = _CountryCode;

// Extension of CountryCode, used to handle custom flags (regional ones)
export type FlagCode = CountryCode | 'AST';
