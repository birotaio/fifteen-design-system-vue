import { defineComponent as W, computed as a, openBlock as r, createElementBlock as m, normalizeStyle as X, unref as y, Fragment as Y, renderList as z, mergeProps as A } from "vue";
import { genSize as p } from "../utils/genSize.js";
import { getCssColor as H } from "../utils/getCssColor.js";
const P = ["viewBox"], n = 4.8, q = /* @__PURE__ */ W({
  __name: "FLogoAnimatable",
  props: {
    width: { default: 116 },
    color: { default: "primary" },
    delta: { default: () => ({}) }
  },
  setup(g) {
    const w = [
      { x1: 58.012, y1: 74.038, x2: 58.033, y2: 115.391 },
      { x1: 64.787, y1: 72.586, x2: 81.63, y2: 110.362 },
      { x1: 70.383, y1: 68.504, x2: 101.142, y2: 96.171 },
      { x1: 73.855, y1: 62.511, x2: 113.194, y2: 75.27 },
      { x1: 74.579, y1: 55.618, x2: 115.704, y2: 51.274 },
      { x1: 72.423, y1: 49.034, x2: 108.236, y2: 28.332 },
      { x1: 67.784, y1: 43.892, x2: 92.083, y2: 10.411 },
      { x1: 61.46, y1: 41.064, x2: 70.037, y2: 0.609 },
      { x1: 54.529, y1: 41.068, x2: 45.91, y2: 0.622 },
      { x1: 48.208, y1: 43.902, x2: 23.875, y2: 10.446 },
      { x1: 43.574, y1: 49.048, x2: 7.74, y2: 28.384 },
      { x1: 41.425, y1: 55.635, x2: 0.296, y2: 51.334 },
      { x1: 42.157, y1: 62.527, x2: 2.831, y2: 75.327 },
      { x1: 45.635, y1: 68.517, x2: 14.905, y2: 96.215 },
      { x1: 51.234, y1: 72.593, x2: 34.431, y2: 110.387 }
    ], l = g, o = a(
      () => w.map(({ x1: t, y1: e, x2: i, y2: x }, d) => {
        const C = (x - e) / (i - t);
        let s = Math.atan(C);
        d >= 8 && (s = s - Math.PI);
        const f = l.delta[d + 1] ?? 0, F = f * Math.cos(s), S = f * Math.sin(s);
        return {
          x1: t,
          y1: e,
          x2: i + F,
          y2: x + S
        };
      })
    ), c = a(
      () => Math.min(...o.value.map(({ x1: t, x2: e }) => Math.min(t, e))) - n / 2
    ), u = a(
      () => Math.min(...o.value.map(({ y1: t, y2: e }) => Math.min(t, e))) - n / 2
    ), M = a(
      () => Math.max(...o.value.map(({ x1: t, x2: e }) => Math.max(t, e))) + n / 2
    ), B = a(
      () => Math.max(...o.value.map(({ y1: t, y2: e }) => Math.max(t, e))) + n / 2
    ), h = a(() => M.value - c.value), v = a(() => B.value - u.value), _ = a(
      () => [
        c.value,
        u.value,
        h.value,
        v.value
      ].join(" ")
    ), b = a(() => l.width / 116 * h.value), k = a(() => l.width / 116 * v.value), L = a(
      () => ({
        /**
         * Width of the svg
         */
        "--flogoanimatable--width": p(b),
        /**
         * Height of the svg
         */
        "--flogoanimatable--height": p(k),
        /**
         * Color of the logo lines
         */
        "--flogoanimatable--color": H(l.color),
        /**
         * Stroke width of the logo lines
         */
        "--flogoanimatable--stroke-width": String(n)
      })
    );
    return (t, e) => (r(), m("svg", {
      class: "FLogoAnimatable",
      style: X(y(L)),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: y(_)
    }, [
      (r(!0), m(Y, null, z(y(o), (i, x) => (r(), m("line", A({
        key: x,
        ref_for: !0
      }, i), null, 16))), 128))
    ], 12, P));
  }
});
export {
  q as default
};
