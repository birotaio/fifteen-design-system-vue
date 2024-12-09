import { defineComponent as n, openBlock as r, createElementBlock as t, Fragment as i, renderList as c, unref as l, createVNode as a, createElementVNode as m, toDisplayString as d } from "vue";
import p from "../../components/FIcon.js";
/* empty css                      */
import { getIconList as f } from "../../.generated/utils.js";
import * as u from "../../.generated/icons.js";
import { registerIcons as _ } from "../../composables/useIcon.js";
const k = { class: "FsIconGrid" }, v = /* @__PURE__ */ n({
  __name: "FsIconGrid",
  props: {
    size: { default: "24px" },
    color: { default: "secondary" },
    strokeWidth: { default: 0 }
  },
  setup(h) {
    _("icons", u);
    const s = f();
    return (o, I) => (r(), t("div", k, [
      (r(!0), t(i, null, c(l(s), (e) => (r(), t("div", {
        class: "FsIconGrid__item",
        key: e
      }, [
        a(p, {
          size: o.size,
          color: o.color,
          name: e,
          "stroke-width": o.strokeWidth,
          "stroke-color": o.color
        }, null, 8, ["size", "color", "name", "stroke-width", "stroke-color"]),
        m("span", null, d(e), 1)
      ]))), 128))
    ]));
  }
});
export {
  v as default
};
