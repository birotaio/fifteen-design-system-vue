import u from "./FSvgImage.js";
/* empty css           */
import { defineComponent as g, computed as e, openBlock as r, createElementBlock as l, createVNode as f, unref as a, normalizeStyle as s, toDisplayString as h, createCommentVNode as y } from "vue";
import { getCssColor as N } from "../utils/getCssColor.js";
import { genSize as C } from "../utils/genSize.js";
import _ from "../assets/logos/fifteen_horizontal.js";
import v from "../assets/logos/fifteen_vertical.js";
import m from "../assets/logos/fifteen_text-only.js";
import F from "../assets/logos/fifteen_image-only.js";
import z from "../assets/logos/fifteen_half-image-only.js";
const S = { class: "FLogo" }, $ = /* @__PURE__ */ g({
  __name: "FLogo",
  props: {
    variant: { default: "horizontal" },
    color: { default: "primary" },
    width: { default: "auto" },
    height: { default: "auto" },
    productName: { default: "" },
    productNameColor: { default: void 0 }
  },
  setup(n) {
    const t = n, i = {
      horizontal: _,
      vertical: v,
      "image-only": F,
      "half-image-only": z,
      "text-only": m,
      product: m
    }, p = e(() => i[t.variant]), c = e(
      () => ({
        "--FLogo--productNameColor": N(
          t.productNameColor ?? t.color
        ),
        "--FLogo--productNameFontSize": C(t.width, 0.104)
      })
    );
    return (o, w) => {
      const d = u;
      return r(), l("div", S, [
        f(d, {
          component: a(p),
          width: o.width,
          height: o.height,
          "fill-color": o.color
        }, null, 8, ["component", "width", "height", "fill-color"]),
        o.variant === "product" ? (r(), l("div", {
          key: 0,
          class: "FLogo__productName",
          style: s(a(c))
        }, h(o.productName), 5)) : y("", !0)
      ]);
    };
  }
});
export {
  $ as default
};
