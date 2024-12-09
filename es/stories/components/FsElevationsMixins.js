import { defineComponent as c, openBlock as e, createElementBlock as o, createElementVNode as s, createTextVNode as l, Fragment as a, renderList as r, toDisplayString as t, normalizeClass as d, mergeProps as x } from "vue";
const E = { class: "FsElevationsMixins" }, F = { class: "FsElevationsMixins__container" }, M = { class: "FsElevationsMixins__row" }, m = { class: "FsElevationsMixins__caption" }, p = { class: "FsElevationsMixins__row" }, f = { class: "FsElevationsMixins__caption" }, g = { class: "FsElevationsMixins__caption" }, k = /* @__PURE__ */ c({
  __name: "FsElevationsMixins",
  setup(w) {
    const v = ["inset", 0, 1, 2, 3, 4, 5, 6], u = ["hover", "focus"];
    return (y, i) => (e(), o("div", E, [
      i[5] || (i[5] = s("div", { class: "FsElevationsMixins__caption" }, [
        l("Use the following elevation mixins, with "),
        s("code", null, "z"),
        l(" from "),
        s("code", null, "0"),
        l(" to "),
        s("code", null, "6"),
        l(", or "),
        s("code", null, '"inset"'),
        l(".")
      ], -1)),
      i[6] || (i[6] = s("hr", null, null, -1)),
      s("div", F, [
        s("div", M, [
          i[0] || (i[0] = s("span", null, "normal shadow", -1)),
          (e(), o(a, null, r(v, (n) => s("div", {
            key: n,
            class: "FsElevationsMixins__item"
          }, [
            s("div", m, [
              s("code", null, t(`elevation(${JSON.stringify(n)})`), 1)
            ]),
            s("div", {
              class: d(`FsElevationsMixins__elevation--${n}`)
            }, null, 2)
          ])), 64))
        ]),
        s("div", p, [
          i[1] || (i[1] = s("span", null, "lighter shadow", -1)),
          (e(), o(a, null, r(v, (n) => s("div", {
            key: n,
            class: "FsElevationsMixins__item"
          }, [
            s("div", f, [
              s("code", null, t(`elevation-light(${JSON.stringify(n)})`), 1)
            ]),
            s("div", {
              class: d(`FsElevationsMixins__elevation-light--${n}`)
            }, null, 2)
          ])), 64))
        ]),
        (e(), o(a, null, r(u, (n) => s("div", {
          key: n,
          class: "FsElevationsMixins__row"
        }, [
          s("span", null, "with transition, on " + t(n), 1),
          (e(), o(a, null, r(v, (_) => s("div", {
            key: _,
            class: "FsElevationsMixins__item"
          }, [
            i[3] || (i[3] = s("div", { class: "FsElevationsMixins__caption" }, [
              s("code", null, t("elevation-transition()"))
            ], -1)),
            s("div", g, [
              s("code", null, [
                l(":" + t(n) + " ", 1),
                i[2] || (i[2] = s("br", null, null, -1)),
                l(" " + t(` elevation(${JSON.stringify(_)})`), 1)
              ])
            ]),
            s("div", x({
              class: `FsElevationsMixins__elevation--${_}--${n}`,
              ref_for: !0
            }, n === "focus" ? { tabindex: 0 } : {}), null, 16)
          ])), 64))
        ])), 64)),
        i[4] || (i[4] = s("div", { class: "FsElevationsMixins__row" }, [
          s("span", null, "etc...")
        ], -1))
      ])
    ]));
  }
});
export {
  k as default
};
