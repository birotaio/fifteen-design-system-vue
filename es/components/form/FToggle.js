import O from "./FField.js";
/* empty css        */
import R from "../FIcon.js";
/* empty css        */
import { defineComponent as z, useId as D, ref as K, computed as s, openBlock as i, createBlock as C, mergeProps as N, unref as o, withCtx as S, createElementVNode as d, normalizeClass as g, withDirectives as A, isRef as P, withKeys as U, vModelCheckbox as W, createCommentVNode as j, createElementBlock as T, toDisplayString as q, renderSlot as G } from "vue";
import { getCssColor as a } from "../../utils/getCssColor.js";
import { checkmark as J } from "../../.generated/icons.js";
import { registerIcons as L } from "../../composables/useIcon.js";
import { useFieldWithValidation as Q } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as X } from "../../composables/useInputEventBindings.js";
const Y = ["for"], Z = { class: "FToggle__wrapper" }, ee = ["id", "name", "disabled"], oe = { class: "FToggle__track__thumb" }, le = {
  key: 0,
  class: "FToggle__labelText"
}, te = {
  key: 1,
  class: "FToggle__labelText"
}, me = /* @__PURE__ */ z({
  __name: "FToggle",
  props: {
    reverse: { type: Boolean, default: !1 },
    thumbColor: { default: "neutral--light-5" },
    hoverBorderColor: { default: "secondary" },
    toggledColor: { default: "secondary" },
    toggledBorderColor: { default: "secondary" },
    noCheckmarkIcon: { type: Boolean, default: !1 },
    smallText: { type: Boolean, default: !1 },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: {},
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean, default: !1 },
    hintIcon: { default: null },
    modelValue: { type: Boolean, default: void 0 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-2" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    focusColor: {},
    borderColor: {}
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(_, { expose: v, emit: b }) {
    const e = _, F = b;
    v({
      focus: $
    }), L("icons", { checkmark: J });
    const u = D(), c = K(), {
      isValid: f,
      hint: y,
      value: t,
      validate: m
    } = Q(e, {
      validateOnMount: e.validateOnMount
    }), { handleBlur: p, handleFocus: h } = X(
      m,
      e.validationTrigger,
      F
    ), k = s(
      () => ({
        "--FToggle--toggled-border-color": a(e.toggledBorderColor),
        "--FToggle--toggled-color": a(e.toggledColor),
        "--FToggle--color": a(e.color),
        "--FToggle--thumb-color": a(e.thumbColor),
        "--FToggle--error-color": a(e.errorColor),
        "--FToggle--hover-border-color": a(e.hoverBorderColor),
        "--FToggle--text-color": a(e.textColor)
      })
    ), B = s(
      () => e.disabled ? "neutral--dark-1" : f.value ? e.hintTextColor : e.errorColor
    ), I = s(() => ({
      "FToggle__toggledIcon--visible": t.value
    })), x = s(() => ({
      "FToggle--error": !f.value,
      "FToggle--disabled": e.disabled,
      "FToggle--smallText": e.smallText
    })), V = s(() => ({
      "FToggle__label--reverse": e.reverse
    })), M = s(() => ({
      "FToggle__track--toggled": t.value
    }));
    function w() {
      m(t.value, e.validationTrigger === "change");
    }
    function $() {
      c.value?.focus();
    }
    return (l, r) => {
      const E = R, H = O;
      return i(), C(H, N({
        class: ["FToggle", o(x)],
        style: o(k)
      }, { name: l.name, hint: o(y), hideHint: l.hideHint, hintTextColor: o(B), hintIcon: l.hintIcon }), {
        default: S(() => [
          d("label", {
            class: g(["FToggle__label", o(V)]),
            for: o(u)
          }, [
            d("div", Z, [
              A(d("input", {
                class: "FToggle__hiddenCheckbox",
                id: o(u),
                ref_key: "toggleRef",
                ref: c,
                "onUpdate:modelValue": r[0] || (r[0] = (n) => P(t) ? t.value = n : null),
                name: l.name,
                type: "checkbox",
                disabled: l.disabled,
                onBlur: r[1] || (r[1] = //@ts-ignore
                (...n) => o(p) && o(p)(...n)),
                onChange: w,
                onFocus: r[2] || (r[2] = //@ts-ignore
                (...n) => o(h) && o(h)(...n)),
                onKeypress: r[3] || (r[3] = U((n) => t.value = !o(t), ["enter"]))
              }, null, 40, ee), [
                [W, o(t)]
              ]),
              d("div", {
                class: g(["FToggle__track", o(M)])
              }, [
                d("div", oe, [
                  l.noCheckmarkIcon ? j("", !0) : (i(), C(E, {
                    key: 0,
                    class: g(["FToggle__toggledIcon", o(I)]),
                    name: "checkmark",
                    color: l.toggledColor,
                    size: "10"
                  }, null, 8, ["color", "class"]))
                ])
              ], 2)
            ]),
            l.label ? (i(), T("span", le, q(l.label), 1)) : (i(), T("span", te, [
              G(l.$slots, "label")
            ]))
          ], 10, Y)
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
export {
  me as default
};
