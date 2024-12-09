import { tokens as o } from "../vendor/maska/dist/maska.js";
function p(t, n) {
  if (typeof t != "string") return !1;
  const r = n.split("").map((e) => (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    o[e]?.pattern.toString().replace(/\//g, "") ?? e
  )).join("");
  return new RegExp(r).test(t);
}
export {
  p as mask
};
