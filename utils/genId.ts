/**
 * Generate a pseudo random ID
 * @param length Id length. Defaults to 16
 */
export function genId(length = 16): string {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  return new Array(length)
    .fill(null)
    .map(_ => characters.charAt(randomNumber(characters.length)))
    .join('');
}

const randomNumber = (length: number) => {
  return Math.floor(Math.random() * length);
};
