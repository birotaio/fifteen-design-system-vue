import { openBlock as s, createElementBlock as n, createElementVNode as t, Fragment as i, renderList as a, createBlock as c, resolveDynamicComponent as d, withCtx as m, createTextVNode as r, toDisplayString as o, createStaticVNode as F } from "vue";
const p = { class: "FsFontsElements" };
function u(v, e) {
  return s(), n("div", p, [
    e[0] || (e[0] = t("div", { class: "FsFontsElements__caption" }, "Use the following html elements.", -1)),
    e[1] || (e[1] = t("hr", null, null, -1)),
    (s(), n(i, null, a(6, (l) => t("div", {
      key: l,
      class: "FsFontsElements__element"
    }, [
      (s(), c(d(`h${l}`), null, {
        default: m(() => [
          r("Heading level " + o(l), 1)
        ]),
        _: 2
      }, 1024)),
      t("code", null, "h" + o(l), 1)
    ])), 64)),
    e[2] || (e[2] = F('<div class="FsFontsElements__element"><p>Paragraph</p><code>p</code></div><div class="FsFontsElements__element"><ul><li>List item</li></ul><code>li</code></div><div class="FsFontsElements__element"><label>Label</label><code>label</code></div><div class="FsFontsElements__element"><small>Small</small><code>small</code></div><div class="FsFontsElements__element"><figure><figcaption>Figure caption</figcaption></figure><code>figcaption</code></div><div class="FsFontsElements__element"><table><caption>Caption</caption></table><code>caption</code></div>', 6))
  ]);
}
export {
  u as render
};
