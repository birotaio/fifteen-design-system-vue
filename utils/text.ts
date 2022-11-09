const accentCharactersMap: Record<string, string> = {
  a: '(a|á|ă|ắ|ặ|ằ|ẳ|ẵ|ǎ|â|ấ|ậ|ầ|ẩ|ẫ|ä|ǟ|ȧ|ǡ|ạ|ȁ|à|ả|ȃ|ā|ą|ᶏ|ẚ|å|ǻ|ḁ|ⱥ|ã)',
  c: '(c|ć|č|ç|ḉ|ĉ|ɕ|ċ|ƈ|ȼ)',
  e: '(e|é|ĕ|ě|ȩ|ḝ|ê|ế|ệ|ề|ể|ễ|ḙ|ë|ė|ẹ|ȅ|è|ẻ|ȇ|ē|ḗ|ḕ|ⱸ|ę|ᶒ|ɇ|ẽ|ḛ)',
  i: '(i|í|ĭ|ǐ|î|ï|ḯ|ị|ȉ|ì|ỉ|ȋ|ī|į|ᶖ|ɨ|ĩ|ḭ)',
  n: '(n|ń|ň|ņ|ṋ|ȵ|ṅ|ṇ|ǹ|ɲ|ṉ|ƞ|ᵰ|ᶇ|ɳ|ñ)',
  o: '(o|ó|ŏ|ǒ|ô|ố|ộ|ồ|ổ|ỗ|ö|ȫ|ȯ|ȱ|ọ|ő|ȍ|ò|ỏ|ơ|ớ|ợ|ờ|ở|ỡ|ȏ|ō|ṓ|ṑ|ǫ|ǭ|ø|ǿ|õ|ṍ|ṏ|ȭ)',
  u: '(u|ú|ŭ|ǔ|û|ṷ|ü|ǘ|ǚ|ǜ|ǖ|ṳ|ụ|ű|ȕ|ù|ủ|ư|ứ|ự|ừ|ử|ữ|ȗ|ū|ṻ|ų|ᶙ|ů|ũ|ṹ|ṵ)',
};

const ligatureCharactersMap: Record<string, string> = {
  oe: '(oe|ᴔ|œ|Œ)',
  ue: '(ue|ᵫ)',
  ae: '(ae|æ|ǽ|ǣ|ᴁ)',
}

/**
 * Escape string for use in regular expression
 * @param str - The input string to escape
 * @returns The escaped string to be used in RegExp constructor
 */
export function escapeRegex(str: string) {
  return str.replace(/[. *+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Create search regex based on input
 * @param input - The input string
 * @returns A search regex to be used in RegExp constructor
 */
export function composeSearchRegex(input: string) {
  const accentCharactersRegex = new RegExp(Object.keys(accentCharactersMap).join('|'), 'g');
  const ligatureCharactersRegex = new RegExp(Object.keys(ligatureCharactersMap).join('|'), 'g');

  return (`(${escapeRegex(input).toLowerCase().replace(accentCharactersRegex, m => accentCharactersMap[m] ?? m)}|${escapeRegex(input).toLowerCase().replace(ligatureCharactersRegex, m => ligatureCharactersMap[m] ?? m)})`)
}

/**
 * Map of special characters that are not covered in the unicode range [\u0300-\u036f]
 */
export const specialCharMap = {
  // prettier-ignore
  'Ⱥ': 'A', 'Æ': 'AE', 'Ꜻ': 'AV', 'Ɓ': 'B', 'Ƀ': 'B', 'Ƃ': 'B', 'Ƈ': 'C', 'Ȼ': 'C', 'Ɗ': 'D',
  'ǲ': 'D', 'ǅ': 'D', 'Đ': 'D', 'Ƌ': 'D', 'Ǆ': 'DZ', 'Ɇ': 'E', 'Ꝫ': 'ET', 'Ƒ': 'F', 'Ɠ': 'G',
  'Ǥ': 'G', 'Ⱨ': 'H', 'Ħ': 'H', 'Ɨ': 'I', 'Ꝺ': 'D', 'Ꝼ': 'F', 'Ᵹ': 'G', 'Ꞃ': 'R', 'Ꞅ': 'S',
  'Ꞇ': 'T', 'Ꝭ': 'IS', 'Ɉ': 'J', 'Ⱪ': 'K', 'Ꝃ': 'K', 'Ƙ': 'K', 'Ꝁ': 'K', 'Ꝅ': 'K', 'Ƚ': 'L',
  'Ⱡ': 'L', 'Ꝉ': 'L', 'Ŀ': 'L', 'Ɫ': 'L', 'ǈ': 'L', 'Ł': 'L', 'Ɱ': 'M', 'Ɲ': 'N', 'Ƞ': 'N',
  'ǋ': 'N', 'Ꝋ': 'O', 'Ꝍ': 'O', 'Ɵ': 'O', 'Ø': 'O', 'Ƣ': 'OI', 'Ɛ': 'E', 'Ɔ': 'O', 'Ȣ': 'OU',
  'Ꝓ': 'P', 'Ƥ': 'P', 'Ꝕ': 'P', 'Ᵽ': 'P', 'Ꝑ': 'P', 'Ꝙ': 'Q', 'Ꝗ': 'Q', 'Ɍ': 'R', 'Ɽ': 'R',
  'Ꜿ': 'C', 'Ǝ': 'E', 'Ⱦ': 'T', 'Ƭ': 'T', 'Ʈ': 'T', 'Ŧ': 'T', 'Ɐ': 'A', 'Ꞁ': 'L', 'Ɯ': 'M', 'Ʌ':
    'V', 'Ꝟ': 'V', 'Ʋ': 'V', 'Ⱳ': 'W', 'Ƴ': 'Y', 'Ỿ': 'Y', 'Ɏ': 'Y', 'Ⱬ': 'Z', 'Ȥ': 'Z', 'Ƶ': 'Z',
  'Œ': 'OE', 'ᴀ': 'A', 'ᴁ': 'AE', 'ʙ': 'B', 'ᴃ': 'B', 'ᴄ': 'C', 'ᴅ': 'D', 'ᴇ': 'E', 'ꜰ': 'F',
  'ɢ': 'G', 'ʛ': 'G', 'ʜ': 'H', 'ɪ': 'I', 'ʁ': 'R', 'ᴊ': 'J', 'ᴋ': 'K', 'ʟ': 'L', 'ᴌ': 'L', 'ᴍ': 'M',
  'ɴ': 'N', 'ᴏ': 'O', 'ɶ': 'OE', 'ᴐ': 'O', 'ᴕ': 'OU', 'ᴘ': 'P', 'ʀ': 'R', 'ᴎ': 'N', 'ᴙ': 'R', 'ꜱ': 'S',
  'ᴛ': 'T', 'ⱻ': 'E', 'ᴚ': 'R', 'ᴜ': 'U', 'ᴠ': 'V', 'ᴡ': 'W', 'ʏ': 'Y', 'ᴢ': 'Z', 'ᶏ': 'a', 'ẚ': 'a',
  'ⱥ': 'a', 'æ': 'ae', 'ꜻ': 'av', 'ɓ': 'b', 'ᵬ': 'b', 'ᶀ': 'b', 'ƀ': 'b', 'ƃ': 'b', 'ɵ': 'o',
  'ɕ': 'c', 'ƈ': 'c', 'ȼ': 'c', 'ȡ': 'd', 'ɗ': 'd', 'ᶑ': 'd', 'ᵭ': 'd', 'ᶁ': 'd', 'đ': 'd', 'ɖ': 'd',
  'ƌ': 'd', 'ı': 'i', 'ȷ': 'j', 'ɟ': 'j', 'ʄ': 'j', 'ǆ': 'dz', 'ⱸ': 'e', 'ᶒ': 'e', 'ɇ': 'e',
  'ꝫ': 'et', 'ƒ': 'f', 'ᵮ': 'f', 'ᶂ': 'f', 'ɠ': 'g', 'ᶃ': 'g', 'ǥ': 'g', 'ⱨ': 'h', 'ɦ': 'h',
  'ħ': 'h', 'ƕ': 'hv', 'ᶖ': 'i', 'ɨ': 'i', 'ꝺ': 'd', 'ꝼ': 'f', 'ᵹ': 'g', 'ꞃ': 'r', 'ꞅ': 's', 'ꞇ': 't',
  'ꝭ': 'is', 'ʝ': 'j', 'ɉ': 'j', 'ⱪ': 'k', 'ꝃ': 'k', 'ƙ': 'k', 'ᶄ': 'k', 'ꝁ': 'k', 'ꝅ': 'k', 'ƚ': 'l',
  'ɬ': 'l', 'ȴ': 'l', 'ⱡ': 'l', 'ꝉ': 'l', 'ŀ': 'l', 'ɫ': 'l', 'ᶅ': 'l', 'ɭ': 'l', 'ł': 'l', 'ſ': 's',
  'ẜ': 's', 'ẝ': 's', 'ɱ': 'm', 'ᵯ': 'm', 'ᶆ': 'm', 'ȵ': 'n', 'ɲ': 'n', 'ƞ': 'n', 'ᵰ': 'n', 'ᶇ': 'n',
  'ɳ': 'n', 'ꝋ': 'o', 'ꝍ': 'o', 'ⱺ': 'o', 'ø': 'o', 'ƣ': 'oi', 'ɛ': 'e', 'ᶓ': 'e', 'ɔ': 'o', 'ᶗ': 'o',
  'ȣ': 'ou', 'ꝓ': 'p', 'ƥ': 'p', 'ᵱ': 'p', 'ᶈ': 'p', 'ꝕ': 'p', 'ᵽ': 'p', 'ꝑ': 'p', 'ꝙ': 'q',
  'ʠ': 'q', 'ɋ': 'q', 'ꝗ': 'q', 'ɾ': 'r', 'ᵳ': 'r', 'ɼ': 'r', 'ᵲ': 'r', 'ᶉ': 'r', 'ɍ': 'r', 'ɽ': 'r',
  'ↄ': 'c', 'ꜿ': 'c', 'ɘ': 'e', 'ɿ': 'r', 'ʂ': 's', 'ᵴ': 's', 'ᶊ': 's', 'ȿ': 's', 'ɡ': 'g', 'ᴑ': 'o',
  'ᴓ': 'o', 'ᴝ': 'u', 'ȶ': 't', 'ⱦ': 't', 'ƭ': 't', 'ᵵ': 't', 'ƫ': 't', 'ʈ': 't', 'ŧ': 't', 'ᵺ': 'th',
  'ɐ': 'a', 'ᴂ': 'ae', 'ǝ': 'e', 'ᵷ': 'g', 'ɥ': 'h', 'ʮ': 'h', 'ʯ': 'h', 'ᴉ': 'i', 'ʞ': 'k', 'ꞁ': 'l',
  'ɯ': 'm', 'ɰ': 'm', 'ᴔ': 'oe', 'ɹ': 'r', 'ɻ': 'r', 'ɺ': 'r', 'ⱹ': 'r', 'ʇ': 't', 'ʌ': 'v', 'ʍ': 'w',
  'ʎ': 'y', 'ᶙ': 'u', 'ᵫ': 'ue', 'ꝸ': 'um', 'ⱴ': 'v', 'ꝟ': 'v', 'ʋ': 'v', 'ᶌ': 'v', 'ⱱ': 'v', 'ⱳ': 'w',
  'ᶍ': 'x', 'ƴ': 'y', 'ỿ': 'y', 'ɏ': 'y', 'ʑ': 'z', 'ⱬ': 'z', 'ȥ': 'z', 'ᵶ': 'z', 'ᶎ': 'z', 'ʐ': 'z',
  'ƶ': 'z', 'ɀ': 'z', 'œ': 'oe', 'ₓ': 'x', 'ð': 'd', 'Ð': 'D'
};
/**
 * Remove diacritics from a string
 * @param text - Text to which remove diacritics
 */
export function removeDiacritics(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(
      new RegExp(`(${Object.keys(specialCharMap).join('|')})`, 'g'),
      char => specialCharMap[char as keyof typeof specialCharMap]
    );
}

/**
 * Returns a stringified version of an unknown value
 * @param value - Value to stringify
 */
export function stringify(value: unknown) {
  const t = typeof value === 'object' ? JSON.stringify(value) : String(value);
  return t
}