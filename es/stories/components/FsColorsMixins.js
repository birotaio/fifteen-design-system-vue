import { defineComponent as p, openBlock as s, createElementBlock as r, createElementVNode as n, Fragment as e, renderList as d, toDisplayString as o, normalizeClass as a, createTextVNode as u, mergeProps as f } from "vue";
const v = { class: "FsColorsMixins" }, _ = { class: "FsColorsMixins__container" }, g = { class: "FsColorsMixins__container" }, $ = /* @__PURE__ */ p({
  __name: "FsColorsMixins",
  setup(F) {
    const x = ["primary", "danger", "success--dark-1", "secondary--light-1"], m = ["hover", "focus"];
    return (b, l) => (s(), r("div", v, [
      l[6] || (l[6] = n("caption", null, "Use the following mixins", -1)),
      l[7] || (l[7] = n("hr", null, null, -1)),
      l[8] || (l[8] = n("span", null, "no transition", -1)),
      n("div", _, [
        (s(), r(e, null, d(x, (i) => n("div", {
          key: i,
          class: "FsColorsMixins__item"
        }, [
          n("caption", null, [
            n("code", null, o(`bg-color('${i}')`), 1)
          ]),
          n("div", {
            class: a(`FsColorsMixins__bg-color--${i}`)
          }, null, 2),
          l[0] || (l[0] = n("div", null, null, -1)),
          n("caption", null, [
            n("code", null, o(`text-color('${i}')`), 1)
          ]),
          n("div", {
            class: a(`FsColorsMixins__text-color--${i}`)
          }, o(i), 3)
        ])), 64))
      ]),
      (s(), r(e, null, d(m, (i) => (s(), r(e, { key: i }, [
        n("span", null, "with transition, on " + o(i), 1),
        n("div", g, [
          (s(), r(e, null, d(x, (t) => n("div", {
            key: t,
            class: "FsColorsMixins__item"
          }, [
            l[3] || (l[3] = n("caption", null, [
              n("code", null, o("bg-color-transition()"))
            ], -1)),
            n("caption", null, [
              n("code", null, [
                u(":" + o(i) + " ", 1),
                l[1] || (l[1] = n("br", null, null, -1)),
                u(" " + o(` bg-color('${t}')`), 1)
              ])
            ]),
            n("div", f({
              class: `FsColorsMixins__bg-color--${t}--${i}`,
              ref_for: !0
            }, i === "focus" ? { tabindex: 1 } : {}), null, 16),
            l[4] || (l[4] = n("div", null, null, -1)),
            l[5] || (l[5] = n("caption", null, [
              n("code", null, o("text-color-transition()"))
            ], -1)),
            n("caption", null, [
              n("code", null, [
                u(":" + o(i) + " ", 1),
                l[2] || (l[2] = n("br", null, null, -1)),
                u(" " + o(` text-color('${t}')`), 1)
              ])
            ]),
            n("div", f({
              class: `FsColorsMixins__text-color--${t}--${i}`,
              ref_for: !0
            }, i === "focus" ? { tabindex: 0 } : {}), o(["before", "after"].includes(i) ? "" : t), 17)
          ])), 64))
        ])
      ], 64))), 64)),
      l[9] || (l[9] = n("span", null, "etc...", -1))
    ]));
  }
});
export {
  $ as default
};
