import { defineComponent as v, computed as a, ref as w, openBlock as s, createBlock as g, resolveDynamicComponent as C, normalizeClass as y, unref as i, normalizeStyle as b, withCtx as B, createElementVNode as d, renderSlot as F, createElementBlock as L, createCommentVNode as x } from "vue";
import { getCssColor as t } from "../utils/getCssColor.js";
const A = { class: "FLink__content" }, S = {
  key: 0,
  class: "FLink__arrow"
}, E = /* @__PURE__ */ v({
  __name: "FLink",
  props: {
    color: { default: "secondary" },
    hoverColor: { default: "primary" },
    arrowColor: { default: "neutral--light-5" },
    arrowHoverColor: { default: "neutral--light-5" },
    prevent: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    hideArrow: { type: Boolean, default: !1 },
    underlined: { type: Boolean, default: !1 },
    uppercase: { type: Boolean, default: !1 },
    href: { default: void 0 },
    hreflang: { default: void 0 },
    target: { default: void 0 },
    role: { default: void 0 },
    tabindex: { default: void 0 }
  },
  emits: ["click", "focus", "blur"],
  setup(f, { emit: u }) {
    const e = f, n = u, p = a(
      () => e.disabled ? "-1" : e.tabindex !== void 0 ? String(e.tabindex) : void 0
    ), c = a(() => ({
      "FLink--disabled": e.disabled,
      "FLink--hided-arrow": e.hideArrow,
      "FLink--underlined": e.underlined,
      "FLink--uppercase": e.uppercase
    })), k = a(
      () => ({
        "--flink--arrow--color": t(e.arrowColor),
        "--flink--arrow--hover-color": t(e.arrowHoverColor),
        "--flink--color": t(e.color),
        "--flink--hover-color": t(e.hoverColor)
      })
    ), h = w();
    function m(o) {
      e.prevent && o.preventDefault(), e.disabled || n("click", o);
    }
    return (o, r) => (s(), g(C(o.href ? "a" : "span"), {
      class: y(["FLink", i(c)]),
      ref_key: "linkRef",
      ref: h,
      style: b(i(k)),
      href: o.href,
      hreflang: o.hreflang,
      target: o.target,
      role: o.role,
      tabindex: i(p),
      onBlur: r[0] || (r[0] = (l) => n("blur", l)),
      onClick: r[1] || (r[1] = (l) => m(l)),
      onFocus: r[2] || (r[2] = (l) => n("focus", l))
    }, {
      default: B(() => [
        d("span", A, [
          F(o.$slots, "default")
        ]),
        o.hideArrow ? x("", !0) : (s(), L("span", S, r[3] || (r[3] = [
          d("svg", {
            width: "6.3",
            height: "10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, [
            d("path", {
              d: "M1 9l4-4-4-4",
              "stroke-width": "2"
            })
          ], -1)
        ])))
      ]),
      _: 3
    }, 40, ["style", "class", "href", "hreflang", "target", "role", "tabindex"]));
  }
});
export {
  E as default
};
