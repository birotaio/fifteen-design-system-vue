let t;
const e = new Uint8Array(16);
function o() {
  if (!t && (t = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !t))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return t(e);
}
export {
  o as default
};
