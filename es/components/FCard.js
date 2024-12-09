import { defineComponent as s, computed as e, openBlock as n, createElementBlock as f, normalizeClass as i, unref as t, normalizeStyle as C, renderSlot as m } from "vue";
import { genSize as h } from "../utils/genSize.js";
import { getCssColor as r } from "../utils/getCssColor.js";
const _ = /* @__PURE__ */ s({
  __name: "FCard",
  props: {
    color: { default: "primary" },
    hoverColor: { default: void 0 },
    textColor: { default: "neutral--light-5" },
    hoverTextColor: { default: void 0 },
    width: { default: "" }
  },
  setup(l) {
    const o = l, a = e(
      () => ({
        "--fcard--color": r(o.color),
        "--fcard--hover-color": r(o.hoverColor ?? o.color),
        "--fcard--width": h(o.width),
        "--fcard--text-color": r(o.textColor),
        "--fcard--hover-text-color": r(
          o.hoverTextColor ?? o.textColor
        )
      })
    ), c = e(() => ({
      "FCard--hoverAnimated": !!o.hoverColor || !!o.hoverTextColor
    }));
    return (d, p) => (n(), f("div", {
      class: i(["FCard", t(c)]),
      style: C(t(a))
    }, [
      m(d.$slots, "default")
    ], 6));
  }
});
export {
  _ as default
};
