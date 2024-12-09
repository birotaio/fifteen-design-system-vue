import { defineComponent as l, computed as r, openBlock as a, createElementBlock as p, normalizeStyle as n, unref as c } from "vue";
import { genSize as u } from "../utils/genSize.js";
import { getCssColor as f } from "../utils/getCssColor.js";
const _ = /* @__PURE__ */ l({
  __name: "FProgressBar",
  props: {
    value: { default: 0 },
    color: { default: "primary" },
    height: { default: "8px" }
  },
  setup(o) {
    const e = o, s = r(
      () => (e.value <= 100 ? e.value : 100) + "%"
    ), t = r(
      () => ({
        "--fprogressbar--progress": String(s.value),
        "--fprogressbar--color": f(e.color),
        "--fprogressbar--height": u(e.height)
      })
    );
    return (g, i) => (a(), p("div", {
      class: "FProgressBar",
      style: n(c(t))
    }, null, 4));
  }
});
export {
  _ as default
};
