import { defineComponent as n, computed as l, openBlock as s, createElementBlock as m, normalizeStyle as p, unref as c, renderSlot as a } from "vue";
import { genSize as i } from "../utils/genSize.js";
import { columns as d } from "../constants/grid.js";
const S = /* @__PURE__ */ n({
  __name: "FGrid",
  props: {
    columns: { default: d },
    gap: { default: "4px" }
  },
  setup(o) {
    const e = o, r = l(
      () => ({
        "--fgrid--columns": String(e.columns),
        "--fgrid--grid-gap": i(e.gap)
      })
    );
    return (t, u) => (s(), m("div", {
      class: "FGrid",
      style: p(c(r))
    }, [
      a(t.$slots, "default")
    ], 4));
  }
});
export {
  S as default
};
