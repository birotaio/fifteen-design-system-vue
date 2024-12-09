import I from "./FField.js";
/* empty css        */
import { defineComponent as M, useId as w, computed as n, ref as S, openBlock as i, createBlock as $, mergeProps as x, unref as o, withCtx as E, createElementVNode as s, withDirectives as H, isRef as N, withKeys as O, vModelRadio as D, createElementBlock as C, toDisplayString as K, renderSlot as A } from "vue";
import { getCssColor as t } from "../../utils/getCssColor.js";
import { useFieldWithValidation as P } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as U } from "../../composables/useInputEventBindings.js";
const W = ["for"], j = { class: "FRadio__wrapper" }, q = ["id", "name", "value", "checked", "disabled"], z = {
  key: 0,
  class: "FRadio__labelText"
}, G = {
  key: 1,
  class: "FRadio__labelText"
}, ee = /* @__PURE__ */ M({
  __name: "FRadio",
  props: {
    value: { type: [String, Boolean, Number, null], default: null },
    outlineColor: { default: "neutral--light-2" },
    hoverBorderColor: { default: "secondary" },
    checkedColor: { default: "neutral--light-5" },
    checkedBorderColor: { default: "secondary" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: {},
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean, default: !1 },
    hintIcon: { default: null },
    modelValue: { type: [Boolean, String, Number, null], default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-4" },
    textColor: { default: "neutral--dark-3" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    focusColor: {},
    borderColor: { default: "neutral--dark-1" }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(v, { expose: b, emit: g }) {
    const e = v, y = g;
    b({
      focus: T
    });
    const u = w(), {
      isValid: f,
      hint: k,
      value: d,
      validate: B
    } = P(e, { validateOnMount: e.validateOnMount }), { handleBlur: c, handleFocus: p, handleChange: h } = U(
      B,
      e.validationTrigger,
      y
    ), F = n(
      () => ({
        "--fradio--border-color": t(e.borderColor),
        "--fradio--checked-border-color": t(e.checkedBorderColor),
        "--fradio--checked-color": t(e.checkedColor),
        "--fradio--color": t(e.color),
        "--fradio--error-color": t(e.errorColor),
        "--fradio--hover-border-color": t(e.hoverBorderColor),
        "--fradio--outline-color": t(`${e.outlineColor}--rgb`),
        "--fradio--text-color": t(e.textColor)
      })
    ), R = n(
      () => e.disabled ? "neutral--dark-1" : f.value ? e.hintTextColor : e.errorColor
    ), _ = n(() => ({
      "FRadio--error": !f.value,
      "FRadio--disabled": e.disabled
    })), m = S();
    function T() {
      m.value?.focus();
    }
    return (l, r) => {
      const V = I;
      return i(), $(V, x({
        class: ["FRadio", o(_)],
        style: o(F)
      }, { name: l.name, hint: o(k), hideHint: l.hideHint, hintTextColor: o(R), hintIcon: l.hintIcon }), {
        default: E(() => [
          s("label", {
            class: "FRadio__label",
            for: o(u)
          }, [
            s("div", j, [
              H(s("input", {
                class: "FRadio__radio",
                id: o(u),
                ref_key: "radioRef",
                ref: m,
                "onUpdate:modelValue": r[0] || (r[0] = (a) => N(d) ? d.value = a : null),
                name: l.name,
                type: "radio",
                value: l.value,
                checked: o(d) === l.value,
                disabled: l.disabled,
                onBlur: r[1] || (r[1] = //@ts-ignore
                (...a) => o(c) && o(c)(...a)),
                onChange: r[2] || (r[2] = //@ts-ignore
                (...a) => o(h) && o(h)(...a)),
                onFocus: r[3] || (r[3] = //@ts-ignore
                (...a) => o(p) && o(p)(...a)),
                onKeypress: r[4] || (r[4] = O((a) => d.value = l.value, ["enter"]))
              }, null, 40, q), [
                [D, o(d)]
              ])
            ]),
            l.label ? (i(), C("span", z, K(l.label), 1)) : (i(), C("span", G, [
              A(l.$slots, "label")
            ]))
          ], 8, W)
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
export {
  ee as default
};
