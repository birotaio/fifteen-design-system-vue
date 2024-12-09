import { defineComponent as d, openBlock as l, createElementBlock as o, createElementVNode as s, createTextVNode as t, Fragment as a, renderList as i, unref as u, toDisplayString as c, normalizeStyle as p } from "vue";
import { baseColorDesignTokens as _, colorDesignTokens as m } from "../../constants/colors.js";
const C = { class: "FsColorsCssVars" }, f = { class: "FsColorsCssVars__container" }, F = /* @__PURE__ */ d({
  __name: "FsColorsCssVars",
  setup(g) {
    return (v, n) => (l(), o("div", C, [
      n[0] || (n[0] = s("caption", null, [
        t("Use the following CSS variables. You can also append "),
        s("code", null, "--rgb"),
        t(" to get the RGB values.")
      ], -1)),
      n[1] || (n[1] = s("hr", null, null, -1)),
      s("div", f, [
        (l(!0), o(a, null, i(u(_), (r) => (l(), o("div", {
          class: "FsColorsCssVars__color",
          key: r
        }, [
          s("span", null, c(r), 1),
          (l(!0), o(a, null, i(u(m).filter((e) => e.includes(r)), (e) => (l(), o("div", {
            key: e,
            class: "FsColorsCssVars__item"
          }, [
            s("caption", null, [
              s("code", null, c(e), 1)
            ]),
            s("div", {
              style: p({ backgroundColor: `var(--color--${e})` })
            }, null, 4)
          ]))), 128))
        ]))), 128))
      ])
    ]));
  }
});
export {
  F as default
};
