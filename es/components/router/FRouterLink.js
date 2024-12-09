import w from "../FLink.js";
/* empty css        */
import { defineComponent as F, computed as _, resolveComponent as h, unref as l, openBlock as i, createBlock as d, withCtx as s, createVNode as R, mergeProps as c, renderSlot as p } from "vue";
import { useSmartLink as $ } from "../../composables/useSmartLink.js";
const S = /* @__PURE__ */ F({
  __name: "FRouterLink",
  props: {
    location: { default: null },
    color: { default: "secondary" },
    hoverColor: { default: "primary" },
    arrowColor: { default: "neutral--light-5" },
    arrowHoverColor: { default: "neutral--light-5" },
    prevent: { type: Boolean },
    disabled: { type: Boolean, default: !1 },
    hideArrow: { type: Boolean, default: !1 },
    underlined: { type: Boolean, default: !1 },
    uppercase: { type: Boolean, default: !1 },
    target: { default: void 0 },
    hreflang: { default: void 0 },
    role: { default: void 0 },
    activeClass: { default: null },
    exactActiveClass: { default: null },
    replace: { type: Boolean, default: !1 }
  },
  emits: ["click", "focus"],
  setup(m, { emit: k }) {
    const n = m, a = k, { isHref: C, isExternal: g, getProps: y, getClasses: v } = $(n), B = _(() => n.location);
    return (e, o) => {
      const u = w, L = h("RouterLink");
      return e.location && !l(C) ? (i(), d(L, {
        key: 0,
        to: e.location,
        replace: e.replace,
        custom: ""
      }, {
        default: s(({ navigate: t, href: f }) => [
          R(u, c({ ...e.$attrs, ...l(y)(f) }, {
            class: l(v)(f),
            onClick: (r) => {
              a("click", r), t(r);
            },
            onFocus: o[0] || (o[0] = (r) => a("focus", r))
          }), {
            default: s(() => [
              p(e.$slots, "default")
            ]),
            _: 2
          }, 1040, ["class", "onClick"])
        ]),
        _: 3
      }, 8, ["to", "replace"])) : (i(), d(u, c({ key: 1 }, n, {
        href: l(B),
        target: e.target ?? l(g) ? "_blank" : "_self",
        onClick: o[1] || (o[1] = (t) => a("click", t)),
        onFocus: o[2] || (o[2] = (t) => a("focus", t))
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
  S as default
};
