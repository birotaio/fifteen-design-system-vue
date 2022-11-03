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