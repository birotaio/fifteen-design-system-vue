import { openBlock as n, createElementBlock as s, createElementVNode as t, Fragment as i, renderList as a, createBlock as d, resolveDynamicComponent as m, withCtx as c, createTextVNode as r, toDisplayString as o, createStaticVNode as F } from "vue";
const p = { class: "FsFontsElements" };
function _(v, e) {
  return n(), s("div", p, [
    e[0] || (e[0] = t("caption", null, "Use the following html elements.", -1)),
    e[1] || (e[1] = t("hr", null, null, -1)),
    (n(), s(i, null, a(6, (l) => t("div", {
      key: l,
      class: "FsFontsElements__element"
    }, [
      (n(), d(m(`h${l}`), null, {
        default: c(() => [
          r("Heading level " + o(l), 1)
        ]),
        _: 2
      }, 1024)),
      t("code", null, "h" + o(l), 1)
    ])), 64)),
    e[2] || (e[2] = F('<div class="FsFontsElements__element"><p>Paragraph</p><code>p</code></div><div class="FsFontsElements__element"><ul><li>List item</li></ul><code>li</code></div><div class="FsFontsElements__element"><label>Label</label><code>label</code></div><div class="FsFontsElements__element"><small>Small</small><code>small</code></div><div class="FsFontsElements__element"><caption>Caption</caption><code>caption</code></div>', 5))
  ]);
}
export {
  _ as render
};
