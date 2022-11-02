/**
 * Remove diacritics from a string
 * @param value - Text to which remove diacritics
 */
export function removeDiacritics(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * Escape string for use in regular expression
 * @param str - The input string to escape
 * @returns The escaped string to be used in RegExp constructor
 */
 export function escapeRegex(str: string) {
  return str.replace(/[. *+?^${}()|[\]\\]/g, '\\$&');
}
