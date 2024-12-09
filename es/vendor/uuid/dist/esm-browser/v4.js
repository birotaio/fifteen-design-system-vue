import n from "./native.js";
import t from "./rng.js";
import { unsafeStringify as a } from "./stringify.js";
function x(r, m, e) {
  if (n.randomUUID && !m && !r)
    return n.randomUUID();
  r = r || {};
  const f = r.random || (r.rng || t)();
  return f[6] = f[6] & 15 | 64, f[8] = f[8] & 63 | 128, a(f);
}
export {
  x as default
};
