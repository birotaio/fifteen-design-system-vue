const i = [];
for (let n = 0; n < 256; ++n)
  i.push((n + 256).toString(16).slice(1));
function c(n, u = 0) {
  return i[n[u + 0]] + i[n[u + 1]] + i[n[u + 2]] + i[n[u + 3]] + "-" + i[n[u + 4]] + i[n[u + 5]] + "-" + i[n[u + 6]] + i[n[u + 7]] + "-" + i[n[u + 8]] + i[n[u + 9]] + "-" + i[n[u + 10]] + i[n[u + 11]] + i[n[u + 12]] + i[n[u + 13]] + i[n[u + 14]] + i[n[u + 15]];
}
export {
  c as unsafeStringify
};
