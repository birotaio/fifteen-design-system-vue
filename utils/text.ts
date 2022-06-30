/**
 * Remove diacritics from a string
 * @param value - Text to which remove diacritics
 */
export function removeDiacritics(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
