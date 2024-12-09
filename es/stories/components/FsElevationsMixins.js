import { defineComponent as x, openBlock as e, createElementBlock as o, createElementVNode as n, createTextVNode as s, Fragment as a, renderList as r, toDisplayString as t, normalizeClass as d, mergeProps as c } from "vue";
const m = { class: "FsElevationsMixins" }, p = { class: "FsElevationsMixins__container" }, E = { class: "FsElevationsMixins__row" }, F = { class: "FsElevationsMixins__row" }, w = /* @__PURE__ */ x({
  __name: "FsElevationsMixins",
  setup(f) {
    const u = ["inset", 0, 1, 2, 3, 4, 5, 6], _ = ["hover", "focus"];
    return (M, l) => (e(), o("div", m, [
      l[5] || (l[5] = n("caption", null, [
        s("Use the following elevation mixins, with "),
        n("code", null, "z"),
        s(" from "),
        n("code", null, "0"),
        s(" to "),
        n("code", null, "6"),
        s(", or "),
        n("code", null, '"inset"'),
        s(".")
      ], -1)),
      l[6] || (l[6] = n("hr", null, null, -1)),
      n("div", p, [
        n("div", E, [
          l[0] || (l[0] = n("span", null, "normal shadow", -1)),
          (e(), o(a, null, r(u, (i) => n("div", {
            key: i,
            class: "FsElevationsMixins__item"
          }, [
            n("caption", null, [
              n("code", null, t(`elevation(${JSON.stringify(i)})`), 1)
            ]),
            n("div", {
              class: d(`FsElevationsMixins__elevation--${i}`)
            }, null, 2)
          ])), 64))
        ]),
        n("div", F, [
          l[1] || (l[1] = n("span", null, "lighter shadow", -1)),
          (e(), o(a, null, r(u, (i) => n("div", {
            key: i,
            class: "FsElevationsMixins__item"
          }, [
            n("caption", null, [
              n("code", null, t(`elevation-light(${JSON.stringify(i)})`), 1)
            ]),
            n("div", {
              class: d(`FsElevationsMixins__elevation-light--${i}`)
            }, null, 2)
          ])), 64))
        ]),
        (e(), o(a, null, r(_, (i) => n("div", {
          key: i,
          class: "FsElevationsMixins__row"
        }, [
          n("span", null, "with transition, on " + t(i), 1),
          (e(), o(a, null, r(u, (v) => n("div", {
            key: v,
            class: "FsElevationsMixins__item"
          }, [
            l[3] || (l[3] = n("caption", null, [
              n("code", null, t("elevation-transition()"))
            ], -1)),
            n("caption", null, [
              n("code", null, [
                s(":" + t(i) + " ", 1),
                l[2] || (l[2] = n("br", null, null, -1)),
                s(" " + t(` elevation(${JSON.stringify(v)})`), 1)
              ])
            ]),
            n("div", c({
              class: `FsElevationsMixins__elevation--${v}--${i}`,
              ref_for: !0
            }, i === "focus" ? { tabindex: 0 } : {}), null, 16)
          ])), 64))
        ])), 64)),
        l[4] || (l[4] = n("div", { class: "FsElevationsMixins__row" }, [
          n("span", null, "etc...")
        ], -1))
      ])
    ]));
  }
});
export {
  w as default
};
