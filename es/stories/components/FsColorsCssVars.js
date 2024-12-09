import { defineComponent as d, openBlock as o, createElementBlock as r, createElementVNode as s, createTextVNode as t, Fragment as a, renderList as i, unref as u, toDisplayString as c, normalizeStyle as _ } from "vue";
import { baseColorDesignTokens as C, colorDesignTokens as p } from "../../constants/colors.js";
const m = { class: "FsColorsCssVars" }, v = { class: "FsColorsCssVars__container" }, V = { class: "FsColorsCssVars__caption" }, y = /* @__PURE__ */ d({
  __name: "FsColorsCssVars",
  setup(f) {
    return (g, l) => (o(), r("div", m, [
      l[0] || (l[0] = s("div", { class: "FsColorsCssVars__caption" }, [
        t("Use the following CSS variables. You can also append "),
        s("code", null, "--rgb"),
        t(" to get the RGB values.")
      ], -1)),
      l[1] || (l[1] = s("hr", null, null, -1)),
      s("div", v, [
        (o(!0), r(a, null, i(u(C), (n) => (o(), r("div", {
          class: "FsColorsCssVars__color",
          key: n
        }, [
          s("span", null, c(n), 1),
          (o(!0), r(a, null, i(u(p).filter((e) => e.includes(n)), (e) => (o(), r("div", {
            key: e,
            class: "FsColorsCssVars__item"
          }, [
            s("div", V, [
              s("code", null, c(e), 1)
            ]),
            s("div", {
              style: _({ backgroundColor: `var(--color--${e})` })
            }, null, 4)
          ]))), 128))
        ]))), 128))
      ])
    ]));
  }
});
export {
  y as default
};
