import { defineComponent as c, computed as i, toRef as s, openBlock as l, createElementBlock as d, normalizeStyle as p, unref as o, createVNode as m } from "vue";
import u from "./FSvgImage.js";
/* empty css           */
import { genSize as f } from "../utils/genSize.js";
import { useIcon as C } from "../composables/useIcon.js";
const g = /* @__PURE__ */ c({
  __name: "FCreditCardIcon",
  props: {
    cardType: { default: null },
    size: { default: 24 }
  },
  setup(t) {
    const e = t, n = i(
      () => ({
        "--FCreditCardIcon--size": f(e.size)
      })
    ), { markup: a } = C("creditCards", s(e, "cardType"));
    return (r, y) => (l(), d("div", {
      class: "FCreditCardIcon",
      style: p(o(n))
    }, [
      m(u, {
        markup: o(a),
        alt: r.cardType ?? "",
        width: r.size,
        "fill-color": "none",
        height: "100%",
        "use-svg-colors": ""
      }, null, 8, ["markup", "alt", "width"])
    ], 4));
  }
});
export {
  g as default
};
