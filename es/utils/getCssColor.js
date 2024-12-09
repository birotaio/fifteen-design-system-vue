import { unref as s } from "vue";
import { colorDesignTokens as n } from "../constants/colors.js";
const c = new RegExp(
  `^(${n.join("|")})(--rgb)?$`
);
function m(e, t = !1) {
  const o = s(e);
  if (!o) return "";
  const r = `--color--${o}`;
  return c.test(o) ? t ? r : `var(${r})` : o;
}
export {
  m as getCssColor
};
