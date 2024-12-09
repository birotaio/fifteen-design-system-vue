import { defineComponent as p, computed as t, toRef as k, openBlock as r, createElementBlock as n, unref as o, normalizeStyle as i, createElementVNode as _, createCommentVNode as h } from "vue";
import { genSize as m } from "../utils/genSize.js";
import { getCssColor as u } from "../utils/getCssColor.js";
import { useIcon as y } from "../composables/useIcon.js";
const C = { class: "FIcon" }, v = ["aria-label", "innerHTML"], z = ["src", "alt"], b = /* @__PURE__ */ p({
  __name: "FIcon",
  props: {
    name: { default: null },
    size: { default: "24" },
    color: { default: "" },
    strokeColor: { default: "" },
    strokeWidth: { default: 0 },
    src: { default: "" },
    alt: { default: "" },
    markup: { default: "" }
  },
  setup(d) {
    const e = d, l = t(() => e.alt || e.name || ""), s = t(
      () => ({
        "--ficon--size": m(e.size),
        "--ficon--color": u(e.color),
        "--ficon--stroke-color": u(e.strokeColor),
        "--ficon--stroke-width": m(e.strokeWidth)
      })
    ), { markup: f } = y(
      "icons",
      k(() => e.name)
    ), c = t(() => e.markup || f.value);
    return (a, I) => (r(), n("div", C, [
      o(c) ? (r(), n("div", {
        key: 0,
        class: "FIcon__content",
        role: "img",
        "aria-label": o(l),
        style: i(o(s)),
        innerHTML: o(c)
      }, null, 12, v)) : a.src ? (r(), n("div", {
        key: 1,
        class: "FIcon__content",
        style: i(o(s))
      }, [
        _("img", {
          src: a.src,
          alt: o(l)
        }, null, 8, z)
      ], 4)) : h("", !0)
    ]));
  }
});
export {
  b as default
};
