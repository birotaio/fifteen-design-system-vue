import { defineComponent as d, computed as t, openBlock as n, createElementBlock as s, normalizeClass as c, unref as i, normalizeStyle as m } from "vue";
import { genSize as r } from "../utils/genSize.js";
import { getCssColor as f } from "../utils/getCssColor.js";
const D = /* @__PURE__ */ d({
  __name: "FDivider",
  props: {
    color: { default: "neutral" },
    theme: { default: null },
    width: { default: "100%" },
    height: { default: "1px" },
    vertical: { type: Boolean, default: !1 },
    margins: { type: Boolean, default: !0 }
  },
  setup(l) {
    const e = l, o = t(() => ({
      "FDivider--light": e.theme === "light",
      "FDivider--dark": e.theme === "dark",
      "FDivider--vertical": e.vertical,
      "FDivider--margins": e.margins
    })), a = t(
      () => ({
        "--fdivider--color": f(e.color),
        "--fdivider--width": r(e.width),
        "--fdivider--height": r(e.height)
      })
    );
    return (u, h) => (n(), s("div", {
      class: c(["FDivider", i(o)]),
      style: m(i(a))
    }, null, 6));
  }
});
export {
  D as default
};
