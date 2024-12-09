import { defineComponent as g, computed as a, openBlock as o, createElementBlock as t, normalizeClass as f, unref as s, normalizeStyle as u, createElementVNode as d, createBlock as p, resolveDynamicComponent as v } from "vue";
import { genSize as r } from "../utils/genSize.js";
import { getCssColor as n } from "../utils/getCssColor.js";
const h = ["aria-label", "innerHTML"], k = {
  key: 1,
  class: "FSvgImage__content"
}, _ = ["src", "alt"], C = ["aria-label"], b = /* @__PURE__ */ g({
  __name: "FSvgImage",
  props: {
    markup: { default: null },
    component: { type: [Function, Object, null], default: null },
    src: { default: "" },
    alt: { default: "" },
    width: { default: "" },
    height: { default: "" },
    strokeColor: { default: "" },
    fillColor: { default: "" },
    useSvgColors: { type: Boolean, default: !1 }
  },
  setup(i) {
    const l = i, m = a(() => ({
      "FSvgImage--colored": !l.useSvgColors
    })), c = a(
      () => ({
        "--fsvgimage--width": r(l.width),
        "--fsvgimage--height": r(l.height),
        "--fsvgimage--stroke-color": n(l.strokeColor),
        "--fsvgimage--fill-color": n(l.fillColor)
      })
    );
    return (e, S) => (o(), t("div", {
      class: f(["FSvgImage", s(m)]),
      ref: "svgRef",
      style: u(s(c))
    }, [
      e.markup ? (o(), t("div", {
        key: 0,
        class: "FSvgImage__content",
        role: "img",
        "aria-label": e.alt,
        innerHTML: e.markup
      }, null, 8, h)) : e.src ? (o(), t("div", k, [
        d("img", {
          src: e.src,
          alt: e.alt
        }, null, 8, _)
      ])) : (o(), t("div", {
        key: 2,
        class: "FSvgImage__content",
        role: "img",
        "aria-label": e.alt
      }, [
        (o(), p(v(e.component)))
      ], 8, C))
    ], 6));
  }
});
export {
  b as default
};
