import { defineComponent as i, openBlock as t, createElementBlock as s, createElementVNode as n, createTextVNode as o, Fragment as m, renderList as u, unref as a, normalizeClass as d, toDisplayString as p } from "vue";
import { typographies as c } from "../../constants/typography.js";
const f = { class: "FsFontsMixins" }, k = /* @__PURE__ */ i({
  __name: "FsFontsMixins",
  setup(x) {
    return (_, e) => (t(), s("div", f, [
      e[0] || (e[0] = n("caption", null, [
        o("Use the stylus mixin "),
        n("code", null, "use-font($name)"),
        o(", where "),
        n("code", null, "$name"),
        o(" is in the following names.")
      ], -1)),
      e[1] || (e[1] = n("hr", null, null, -1)),
      (t(!0), s(m, null, u(a(c), (l, r) => (t(), s("div", {
        key: r,
        class: d(l)
      }, p(l), 3))), 128))
    ]));
  }
});
export {
  k as default
};
