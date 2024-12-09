import e from "./FLogo.js";
/* empty css       */
import { defineComponent as r, openBlock as a, createBlock as i } from "vue";
const m = /* @__PURE__ */ r({
  __name: "FLoader",
  props: {
    color: { default: "primary" },
    width: { default: "auto" },
    height: { default: "auto" }
  },
  setup(n) {
    return (o, l) => {
      const t = e;
      return a(), i(t, {
        class: "FLoader",
        variant: "image-only",
        height: o.height,
        width: o.width,
        color: o.color
      }, null, 8, ["height", "width", "color"]);
    };
  }
});
export {
  m as default
};
