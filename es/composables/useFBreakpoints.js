import { breakpointsValues as w } from "../constants/breakpoints.js";
import { useBreakpoints as A, useMounted as D } from "@vueuse/core";
import { computed as l } from "vue";
function M() {
  const e = A(w), o = {
    xxs: e.smaller("xxs"),
    xs: e.smaller("xs"),
    sm: e.smaller("sm"),
    md: e.smaller("md"),
    lg: e.smaller("lg")
  }, u = D(), t = l(() => u.value && o.xxs.value), r = l(() => u.value && o.xs.value), a = l(() => u.value && o.sm.value), m = l(() => u.value && o.md.value), i = l(() => u.value && o.lg.value);
  function d(n, s) {
    return t.value ? n : s;
  }
  function c(n, s) {
    return r.value ? n : s;
  }
  function v(n, s) {
    return a.value ? n : s;
  }
  function x(n, s) {
    return m.value ? n : s;
  }
  function f(n, s) {
    return i.value ? n : s;
  }
  return {
    isXxsAndDown: t,
    isXsAndDown: r,
    isSmAndDown: a,
    isMdAndDown: m,
    isLgAndDown: i,
    xxsAndDown: d,
    xsAndDown: c,
    smAndDown: v,
    mdAndDown: x,
    lgAndDown: f
  };
}
export {
  M as useFBreakpoints
};
