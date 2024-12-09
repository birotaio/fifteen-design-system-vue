import d from "./FFieldHint2.js";
/* empty css           */
import m from "./FFieldLabel2.js";
/* empty css            */
import { defineComponent as f, computed as s, openBlock as t, createBlock as l, resolveDynamicComponent as p, normalizeStyle as u, unref as c, withCtx as h, createCommentVNode as b, renderSlot as y, createVNode as F } from "vue";
import { genSize as C } from "../../utils/genSize.js";
const $ = /* @__PURE__ */ f({
  __name: "FField",
  props: {
    fieldset: { type: Boolean, default: !1 },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: { default: "neutral--dark-4" },
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean, default: !1 },
    hintIcon: { default: null }
  },
  setup(o) {
    const n = o, a = s(
      () => ({
        "--ffield--margin-bottom": C(n.hideHint ? 0 : 16)
      })
    );
    return (e, _) => {
      const i = m, r = d;
      return t(), l(p(e.fieldset ? "fieldset" : "div"), {
        class: "FField",
        style: u(c(a))
      }, {
        default: h(() => [
          e.label ? (t(), l(i, {
            key: 0,
            name: e.name,
            label: e.label,
            "text-color": e.labelTextColor,
            type: e.fieldset ? "legend" : "label"
          }, null, 8, ["name", "label", "text-color", "type"])) : b("", !0),
          y(e.$slots, "default"),
          F(r, {
            class: "FField__hint",
            text: e.hint,
            hidden: e.hideHint,
            "text-color": e.hintTextColor,
            icon: e.hintIcon
          }, null, 8, ["text", "hidden", "text-color", "icon"])
        ]),
        _: 3
      }, 8, ["style"]);
    };
  }
});
export {
  $ as default
};
