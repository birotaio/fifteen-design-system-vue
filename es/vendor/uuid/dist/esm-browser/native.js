const o = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), t = {
  randomUUID: o
};
export {
  t as default
};
