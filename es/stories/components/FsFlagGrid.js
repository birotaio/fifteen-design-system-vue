import { defineComponent as a, openBlock as r, createElementBlock as t, Fragment as i, renderList as n, unref as l, createVNode as c, createElementVNode as m, toDisplayString as d } from "vue";
import p from "../../components/FFlagIcon.js";
/* empty css                          */
import { getFlagIconList as f } from "../../.generated/utils.js";
import * as u from "../../.generated/flags.js";
import { registerIcons as _ } from "../../composables/useIcon.js";
const g = { class: "FsFlagGrid" }, x = /* @__PURE__ */ a({
  __name: "FsFlagGrid",
  props: {
    size: { default: "24px" },
    color: { default: "secondary" },
    strokeWidth: { default: 0 }
  },
  setup(F) {
    _("flags", u);
    const o = f();
    return (s, k) => (r(), t("div", g, [
      (r(!0), t(i, null, n(l(o), (e) => (r(), t("div", {
        class: "FsFlagGrid__item",
        key: e
      }, [
        c(p, {
          size: s.size,
          "flag-code": e
        }, null, 8, ["size", "flag-code"]),
        m("span", null, d(e), 1)
      ]))), 128))
    ]));
  }
});
export {
  x as default
};
