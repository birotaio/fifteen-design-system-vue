import { defineComponent as a, computed as r, openBlock as n, createBlock as s, resolveDynamicComponent as p, normalizeStyle as m, unref as f, withCtx as d, createTextVNode as i, toDisplayString as u, createCommentVNode as c } from "vue";
import { getCssColor as y } from "../../utils/getCssColor.js";
const F = /* @__PURE__ */ a({
  __name: "FFieldLabel",
  props: {
    label: {},
    type: { default: "label" },
    name: {},
    textColor: { default: "neutral--dark-4" }
  },
  setup(l) {
    const t = l, o = r(
      () => ({
        "--ffieldlabel--text-color": y(t.textColor)
      })
    );
    return (e, b) => e.label !== "" ? (n(), s(p(e.type), {
      key: 0,
      class: "FFieldLabel",
      for: e.type === "label" ? e.name : null,
      style: m(f(o))
    }, {
      default: d(() => [
        i(u(e.label), 1)
      ]),
      _: 1
    }, 8, ["for", "style"])) : c("", !0);
  }
});
export {
  F as default
};
