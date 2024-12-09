import { defineComponent as r, openBlock as s, createElementBlock as t, createElementVNode as n, createTextVNode as o, Fragment as a, renderList as m, unref as u, normalizeClass as d, toDisplayString as p } from "vue";
import { typographies as c } from "../../constants/typography.js";
const f = { class: "FsFontsMixins" }, k = /* @__PURE__ */ r({
  __name: "FsFontsMixins",
  setup(_) {
    return (x, e) => (s(), t("div", f, [
      e[0] || (e[0] = n("div", { class: "FsFontsMixins__caption" }, [
        o("Use the stylus mixin "),
        n("code", null, "use-font($name)"),
        o(", where "),
        n("code", null, "$name"),
        o(" is in the following names.")
      ], -1)),
      e[1] || (e[1] = n("hr", null, null, -1)),
      (s(!0), t(a, null, m(u(c), (i, l) => (s(), t("div", {
        key: l,
        class: d(i)
      }, p(i), 3))), 128))
    ]));
  }
});
export {
  k as default
};
