import p from "./FLink.js";
/* empty css       */
import { defineComponent as d, computed as u, openBlock as e, createElementBlock as o, normalizeStyle as f, unref as _, Fragment as h, renderList as y, createBlock as b, withCtx as k, createTextVNode as v, toDisplayString as s } from "vue";
import { getCssColor as c } from "../utils/getCssColor.js";
const C = ["data-separator"], B = { key: 1 }, L = /* @__PURE__ */ d({
  __name: "FBreadcrumbs",
  props: {
    items: {},
    color: { default: "" },
    activeItemColor: { default: "primary" },
    separator: { default: ">" }
  },
  setup(l) {
    const t = l, n = u(
      () => ({
        "--fbreadcrumbs--color": c(t.color),
        "--fbreadcrumbs--active-item-color": c(t.activeItemColor)
      })
    );
    return (a, F) => {
      const m = p;
      return e(), o("div", {
        class: "FBreadcrumbs",
        style: f(_(n))
      }, [
        (e(!0), o(h, null, y(t.items, (r, i) => (e(), o("span", {
          class: "FBreadcrumbs__item",
          key: i,
          "data-separator": a.separator
        }, [
          r.href ? (e(), b(m, {
            key: 0,
            location: r.href,
            "hover-color": a.activeItemColor,
            "hide-arrow": "",
            uppercase: ""
          }, {
            default: k(() => [
              v(s(r.text), 1)
            ]),
            _: 2
          }, 1032, ["location", "hover-color"])) : (e(), o("span", B, s(r.text), 1))
        ], 8, C))), 128))
      ], 4);
    };
  }
});
export {
  L as default
};
