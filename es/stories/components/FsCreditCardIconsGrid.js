import { defineComponent as i, openBlock as r, createElementBlock as t, Fragment as n, renderList as d, unref as a, createVNode as c, createElementVNode as m, toDisplayString as p } from "vue";
import l from "../../components/FCreditCardIcon.js";
/* empty css                                */
import { getCreditCardIcons as _ } from "../../.generated/utils.js";
import * as f from "../../.generated/credit-cards.js";
import { registerIcons as u } from "../../composables/useIcon.js";
const C = { class: "FsCreditCardIconGrid" }, h = /* @__PURE__ */ i({
  __name: "FsCreditCardIconsGrid",
  props: {
    size: { default: "24px" }
  },
  setup(I) {
    u("creditCards", f);
    const s = _();
    return (o, g) => (r(), t("div", C, [
      (r(!0), t(n, null, d(a(s), (e) => (r(), t("div", {
        class: "FsCreditCardIconGrid__item",
        key: e
      }, [
        c(l, {
          size: o.size,
          "card-type": e
        }, null, 8, ["size", "card-type"]),
        m("span", null, p(e), 1)
      ]))), 128))
    ]));
  }
});
export {
  h as default
};
