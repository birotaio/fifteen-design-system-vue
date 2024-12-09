import b from "../FButton.js";
/* empty css          */
import { defineComponent as F, computed as _, resolveComponent as h, unref as o, openBlock as i, createBlock as c, withCtx as s, createVNode as P, mergeProps as d, renderSlot as p } from "vue";
import { useSmartLink as R } from "../../composables/useSmartLink.js";
const D = /* @__PURE__ */ F({
  __name: "FButtonLink",
  props: {
    location: { default: null },
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
    target: { default: void 0 },
    hreflang: { default: void 0 },
    activeClass: { default: null },
    exactActiveClass: { default: null },
    replace: { type: Boolean, default: !1 }
  },
  emits: ["click", "focus"],
  setup(m, { emit: k }) {
    const n = m, l = k;
    function B(e, t) {
      t(e), l("click", e);
    }
    const { isHref: y, isExternal: C, getProps: g, getClasses: v } = R(n), $ = _(() => n.location);
    return (e, t) => {
      const f = b, L = h("RouterLink");
      return e.location && !o(y) ? (i(), c(L, {
        key: 0,
        to: e.location,
        replace: e.replace,
        custom: ""
      }, {
        default: s(({ navigate: a, href: u }) => [
          P(f, d({ ...e.$attrs, ...o(g)(u) }, {
            class: o(v)(u),
            onClick: (r) => B(r, a),
            onFocus: t[0] || (t[0] = (r) => l("focus"))
          }), {
            default: s(() => [
              p(e.$slots, "default")
            ]),
            _: 2
          }, 1040, ["class", "onClick"])
        ]),
        _: 3
      }, 8, ["to", "replace"])) : (i(), c(f, d({ key: 1 }, n, {
        href: o($),
        target: e.target ?? o(C) ? "_blank" : "_self",
        onClick: t[1] || (t[1] = (a) => l("click", a)),
        onFocus: t[2] || (t[2] = (a) => l("focus"))
      }), {
        default: s(() => [
          p(e.$slots, "default")
        ]),
        _: 3
      }, 16, ["href", "target"]));
    };
  }
});
export {
  D as default
};
