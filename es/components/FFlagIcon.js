import { defineComponent as s, computed as a, openBlock as l, createElementBlock as c, createVNode as d, unref as i } from "vue";
import u from "./FSvgImage.js";
/* empty css           */
import { useIcon as m } from "../composables/useIcon.js";
const p = { class: "FFlagIcon" }, k = /* @__PURE__ */ s({
  __name: "FFlagIcon",
  props: {
    countryCode: { default: void 0 },
    flagCode: { default: "FR" },
    size: { default: 24 }
  },
  setup(t) {
    const e = t, r = a(() => e.countryCode ?? e.flagCode), { markup: n } = m("flags", r);
    return (o, f) => (l(), c("div", p, [
      d(u, {
        markup: i(n),
        "fill-color": "none",
        "use-svg-colors": "",
        alt: o.countryCode,
        height: o.size,
        width: o.size
      }, null, 8, ["markup", "alt", "height", "width"])
    ]));
  }
});
export {
  k as default
};
