import c from "../FIcon.js";
/* empty css        */
import { defineComponent as d, computed as o, openBlock as n, createElementBlock as m, normalizeClass as p, unref as i, normalizeStyle as f, createBlock as u, createCommentVNode as F, createElementVNode as _, toDisplayString as h } from "vue";
import { getCssColor as C } from "../../utils/getCssColor.js";
const y = { class: "FFieldHint__hint" }, z = /* @__PURE__ */ d({
  __name: "FFieldHint",
  props: {
    text: { default: "" },
    hidden: { type: Boolean },
    textColor: { default: "neutral--dark-4" },
    icon: { default: null }
  },
  setup(l) {
    const e = l, r = o(() => ({
      "FFieldHint--visible": e.text !== "",
      "FFieldHint--hidden": e.hidden
    })), s = o(
      () => ({
        "--ffieldhint--text-color": C(e.textColor)
      })
    );
    return (t, k) => {
      const a = c;
      return n(), m("div", {
        class: p(["FFieldHint", i(r)]),
        style: f(i(s))
      }, [
        t.icon ? (n(), u(a, {
          key: 0,
          name: t.icon,
          size: 16
        }, null, 8, ["name"])) : F("", !0),
        _("div", y, h(t.text), 1)
      ], 6);
    };
  }
});
export {
  z as default
};
