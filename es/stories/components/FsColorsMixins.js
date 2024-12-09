import { defineComponent as v, openBlock as t, createElementBlock as r, createElementVNode as s, Fragment as e, renderList as _, toDisplayString as o, normalizeClass as x, createTextVNode as d, mergeProps as a } from "vue";
const F = { class: "FsColorsMixins" }, M = { class: "FsColorsMixins__container" }, f = { class: "FsColorsMixins__caption" }, m = { class: "FsColorsMixins__caption" }, p = { class: "FsColorsMixins__container" }, C = { class: "FsColorsMixins__caption" }, g = { class: "FsColorsMixins__caption" }, y = /* @__PURE__ */ v({
  __name: "FsColorsMixins",
  setup(b) {
    const u = ["primary", "danger", "success--dark-1", "secondary--light-1"], c = ["hover", "focus"];
    return ($, n) => (t(), r("div", F, [
      n[6] || (n[6] = s("div", { class: "FsColorsMixins__caption" }, "Use the following mixins", -1)),
      n[7] || (n[7] = s("hr", null, null, -1)),
      n[8] || (n[8] = s("span", null, "no transition", -1)),
      s("div", M, [
        (t(), r(e, null, _(u, (i) => s("div", {
          key: i,
          class: "FsColorsMixins__item"
        }, [
          s("div", f, [
            s("code", null, o(`bg-color('${i}')`), 1)
          ]),
          s("div", {
            class: x(`FsColorsMixins__bg-color--${i}`)
          }, null, 2),
          n[0] || (n[0] = s("div", null, null, -1)),
          s("div", m, [
            s("code", null, o(`text-color('${i}')`), 1)
          ]),
          s("div", {
            class: x(`FsColorsMixins__text-color--${i}`)
          }, o(i), 3)
        ])), 64))
      ]),
      (t(), r(e, null, _(c, (i) => (t(), r(e, { key: i }, [
        s("span", null, "with transition, on " + o(i), 1),
        s("div", p, [
          (t(), r(e, null, _(u, (l) => s("div", {
            key: l,
            class: "FsColorsMixins__item"
          }, [
            n[3] || (n[3] = s("div", { class: "FsColorsMixins__caption" }, [
              s("code", null, o("bg-color-transition()"))
            ], -1)),
            s("div", C, [
              s("code", null, [
                d(":" + o(i) + " ", 1),
                n[1] || (n[1] = s("br", null, null, -1)),
                d(" " + o(` bg-color('${l}')`), 1)
              ])
            ]),
            s("div", a({
              class: `FsColorsMixins__bg-color--${l}--${i}`,
              ref_for: !0
            }, i === "focus" ? { tabindex: 1 } : {}), null, 16),
            n[4] || (n[4] = s("div", null, null, -1)),
            n[5] || (n[5] = s("div", { class: "FsColorsMixins__caption" }, [
              s("code", null, o("text-color-transition()"))
            ], -1)),
            s("div", g, [
              s("code", null, [
                d(":" + o(i) + " ", 1),
                n[2] || (n[2] = s("br", null, null, -1)),
                d(" " + o(` text-color('${l}')`), 1)
              ])
            ]),
            s("div", a({
              class: `FsColorsMixins__text-color--${l}--${i}`,
              ref_for: !0
            }, i === "focus" ? { tabindex: 0 } : {}), o(["before", "after"].includes(i) ? "" : l), 17)
          ])), 64))
        ])
      ], 64))), 64)),
      n[9] || (n[9] = s("span", null, "etc...", -1))
    ]));
  }
});
export {
  y as default
};
