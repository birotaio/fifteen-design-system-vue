import E from "./FLoader.js";
/* empty css         */
import { defineComponent as K, ref as P, computed as e, openBlock as p, createBlock as m, resolveDynamicComponent as R, unref as a, mergeProps as $, withKeys as b, withModifiers as g, withCtx as z, createElementVNode as A, renderSlot as H, createCommentVNode as L } from "vue";
import N from "./FLink.js";
/* empty css       */
import { colorDesignTokens as O } from "../constants/colors.js";
import { getCssColor as n } from "../utils/getCssColor.js";
import { useFBreakpoints as T } from "../composables/useFBreakpoints.js";
const V = { class: "FButton__container" }, Q = /* @__PURE__ */ K({
  __name: "FButton",
  props: {
    submit: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    preventDefault: { type: Boolean, default: !1 },
    ghost: { type: Boolean, default: !1 },
    outlined: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    icon: { type: Boolean, default: !1 },
    size: { default: "medium" },
    preventClick: { type: Boolean, default: !1 },
    preventBlurOnClick: { type: Boolean, default: !1 },
    color: { default: "primary" },
    background: { default: "" },
    hoverColor: { default: "" },
    focusColor: { default: "" },
    anchorPoint: { default: "center" },
    circle: { type: Boolean, default: !1 },
    static: { type: Boolean, default: !1 },
    href: { default: void 0 },
    hreflang: { default: void 0 },
    target: { default: void 0 }
  },
  emits: ["click", "focus", "blur"],
  setup(h, { emit: v }) {
    const o = h, i = v, { isXsAndDown: B } = T(), f = P(), u = e(
      () => !!(o.color && o.background)
    ), s = e(
      () => o.disabled ? "neutral--light-2" : u.value ? o.color : o.ghost || o.outlined ? "neutral--dark-5" : "neutral--light-5"
    ), k = e(
      () => u.value && o.color.includes("-") ? o.background : o.color + "--dark-2"
    ), y = e(
      () => o.ghost || o.outlined ? "" : o.disabled ? "neutral--light-4" : u.value ? o.background : o.color
    ), C = e(() => {
      if (o.hoverColor) return o.hoverColor;
      if (O.includes(o.color)) {
        const l = /--(light|dark)-[0-5]/;
        return l.test(o.color) ? o.color.replace(l, "") : o.color + "--light-2";
      }
      return s.value;
    }), F = e(
      () => o.focusColor || (u.value ? "neutral--light-2" : o.disabled ? "" : o.color.includes("-") ? o.color : o.color + "--light-2")
    ), _ = e(() => ({
      ["FButton--" + o.size]: !0,
      "FButton--icon": o.icon,
      "FButton--disabled": o.disabled,
      "FButton--loading": o.loading,
      "FButton--ghost": o.ghost,
      "FButton--outlined": o.outlined,
      "FButton--circle": o.circle,
      "FButton--static": B.value || o.static
    })), c = e(() => o.href && !o.submit), w = e(
      () => c.value ? {
        hideArrow: !0,
        role: "button",
        prevent: o.preventDefault,
        href: o.href,
        hreflang: o.hreflang,
        target: o.target
      } : {
        type: o.submit && !o.loading && !o.disabled ? "submit" : "button"
      }
    ), D = e(
      () => ({
        "--fbutton--text-color": n(s),
        "--fbutton--text-color--hover": n(k),
        "--fbutton--background-color": n(y),
        "--fbutton--background-color--hover": n(C),
        "--fbutton--outline-color": n(s),
        "--fbutton--focus-color": n(F),
        "--fbutton--anchor-point": o.anchorPoint
      })
    );
    function d(l) {
      !o.href && !o.submit && l.preventDefault(), !o.loading && !o.disabled && !o.preventClick && i("click", l), !!l.detail && !o.preventBlurOnClick && !c.value && f.value?.blur();
    }
    return (l, t) => {
      const x = E;
      return p(), m(R(a(c) ? N : "button"), $({
        class: ["FButton", a(_)],
        ref_key: "buttonRef",
        ref: f,
        style: a(D)
      }, a(w), {
        onBlur: t[0] || (t[0] = (r) => i("blur", r)),
        onClick: t[1] || (t[1] = (r) => d(r)),
        onFocus: t[2] || (t[2] = (r) => i("focus", r)),
        onKeydown: [
          t[3] || (t[3] = b(g((r) => d(r), ["stop"]), ["space"])),
          t[4] || (t[4] = b(g((r) => d(r), ["stop"]), ["enter"]))
        ]
      }), {
        default: z(() => [
          A("div", V, [
            H(l.$slots, "default"),
            l.loading ? (p(), m(x, {
              key: 0,
              class: "FButton__loader",
              height: "100%",
              width: "100%",
              color: a(s)
            }, null, 8, ["color"])) : L("", !0)
          ])
        ]),
        _: 3
      }, 16, ["style", "class"]);
    };
  }
});
export {
  Q as default
};
