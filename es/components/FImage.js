import I from "./FIcon.js";
/* empty css       */
import { defineComponent as y, ref as b, computed as t, openBlock as r, createElementBlock as s, normalizeClass as C, unref as a, normalizeStyle as F, createCommentVNode as i, createVNode as z } from "vue";
import { genSize as n } from "../utils/genSize.js";
import { getCssColor as d } from "../utils/getCssColor.js";
import { landscape as v } from "../.generated/icons.js";
import { registerIcons as w } from "../composables/useIcon.js";
import { useLazyImage as S } from "../composables/useLazyImage.js";
const R = ["srcset", "alt"], j = ["src", "alt"], B = ["src", "alt"], L = {
  key: 3,
  class: "FImage__fallback"
}, H = /* @__PURE__ */ y({
  __name: "FImage",
  props: {
    src: {},
    alt: {},
    height: { default: "auto" },
    width: { default: "auto" },
    fit: { default: "contain" },
    position: { default: "center" },
    loading: { default: "lazy" },
    placeholder: { default: "" },
    corners: { default: "rounded" },
    backgroundColor: { default: "" }
  },
  setup(u) {
    const e = u;
    w("icons", { landscape: v });
    const m = b(), { isInit: g, isLoaded: f } = S(m, e.src), c = t(
      () => e.loading === "eager" || g.value ? e.src : ""
    ), o = t(
      () => e.loading === "lazy" && e.placeholder
    ), p = t(() => {
      switch (e.corners) {
        case "sharp":
          return "0";
        case "circular":
          return "50%";
        default:
        case "rounded":
          return n(16);
      }
    }), _ = t(
      () => ({
        "--fimage--height": n(e.height),
        "--fimage--width": n(e.width),
        "--fimage--object-fit": e.fit,
        "--fimage--object-position": String(e.position),
        "--fimage--border-radius": p.value,
        "--fimage--background-color": d(e.backgroundColor),
        "--fimage--fallback-background-color": d(
          e.backgroundColor || "neutral--light-3"
        )
      })
    ), h = t(() => ({
      "FImage--loaded": f.value,
      "FImage--placeholder": o.value
    }));
    return (l, N) => {
      const k = I;
      return r(), s("picture", {
        class: C(["FImage", a(h)]),
        ref_key: "imageRef",
        ref: m,
        style: F(a(_))
      }, [
        a(o) ? (r(), s("source", {
          key: 0,
          class: "FImage__image",
          srcset: a(c),
          alt: l.alt
        }, null, 8, R)) : i("", !0),
        a(o) ? (r(), s("img", {
          key: 1,
          class: "FImage__placeholder",
          src: a(o),
          alt: l.alt
        }, null, 8, j)) : a(c) ? (r(), s("img", {
          key: 2,
          class: "FImage__image",
          src: a(o) || a(c),
          alt: l.alt
        }, null, 8, B)) : i("", !0),
        l.src ? i("", !0) : (r(), s("div", L, [
          z(k, {
            name: "landscape",
            color: "secondary",
            size: "100%"
          })
        ]))
      ], 6);
    };
  }
});
export {
  H as default
};
