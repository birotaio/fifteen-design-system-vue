import { defineComponent as u, computed as o, openBlock as s, createElementBlock as c, normalizeClass as f, unref as t, normalizeStyle as i } from "vue";
import { genSize as l } from "../utils/genSize.js";
import { getCssColor as n } from "../utils/getCssColor.js";
const C = /* @__PURE__ */ u({
  __name: "FSkeleton",
  props: {
    backgroundColor: { default: "neutral--light-3" },
    backgroundColorTo: { default: "neutral--light-4" },
    animate: { type: Boolean, default: !0 },
    height: { default: "48px" },
    width: { default: "auto" },
    rounded: { type: Boolean, default: !1 },
    roundedFull: { type: Boolean, default: !1 }
  },
  setup(r) {
    const e = r, a = o(() => ({
      "FSkeleton--rounded": e.rounded,
      "FSkeleton--roundedFull": e.roundedFull,
      "FSkeleton--fade": e.animate
    })), d = o(
      () => ({
        "--fskeleton--background-color": n(e.backgroundColor),
        "--fskeleton--background-color-to": n(e.backgroundColorTo),
        "--fskeleton--width": l(e.width),
        "--fskeleton--height": l(e.height)
      })
    );
    return (k, p) => (s(), c("div", {
      class: f(["FSkeleton", t(a)]),
      style: i(t(d))
    }, null, 6));
  }
});
export {
  C as default
};
