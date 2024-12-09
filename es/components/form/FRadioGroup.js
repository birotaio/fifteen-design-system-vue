import V from "./FField.js";
/* empty css        */
import k from "./FRadio.js";
/* empty css        */
import { defineComponent as M, watch as x, computed as s, ref as G, openBlock as n, createBlock as u, mergeProps as I, unref as l, withCtx as E, createElementVNode as H, createElementBlock as O, Fragment as w, renderList as z, isRef as $ } from "vue";
import { useFieldWithValidation as A } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as L } from "../../composables/useInputEventBindings.js";
const N = { class: "FRadioGroup__options" }, K = /* @__PURE__ */ M({
  __name: "FRadioGroup",
  props: {
    options: {},
    displayMode: { default: "vertical" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: {},
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean },
    hintIcon: { default: null },
    modelValue: { default: void 0 },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    color: {},
    textColor: {},
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean },
    focusColor: {},
    borderColor: {}
  },
  emits: ["update:modelValue", "select-radio", "change", "focus", "blur"],
  setup(m, { expose: f, emit: c }) {
    const o = m, r = c;
    f({
      focus: y
    });
    const { value: a, isValid: p, hint: h, validate: b } = A(o, {
      validateOnMount: o.validateOnMount
    }), { handleChange: v, handleFocus: C, handleBlur: g } = L(
      b,
      o.validationTrigger,
      r
    );
    x(a, () => {
      r("select-radio", a.value);
    });
    const F = s(() => ({
      "FRadioGroup--horizontal": o.displayMode === "horizontal"
    })), B = s(
      () => o.disabled ? "neutral--dark-1" : p.value ? o.hintTextColor : o.errorColor
    ), i = G();
    function y() {
      i.value[0]?.focus();
    }
    return (e, d) => {
      const _ = k, T = V;
      return n(), u(T, I({
        class: ["FRadioGroup", l(F)],
        fieldset: "",
        disabled: e.disabled
      }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: l(h), hideHint: e.hideHint, hintTextColor: l(B), hintIcon: e.hintIcon }), {
        default: E(() => [
          H("div", N, [
            (n(!0), O(w, null, z(e.options, (t) => (n(), u(_, {
              key: t.name,
              ref_for: !0,
              ref_key: "radioRefs",
              ref: i,
              modelValue: l(a),
              "onUpdate:modelValue": d[0] || (d[0] = (R) => $(a) ? a.value = R : null),
              name: t.name,
              value: t.value,
              label: t.label,
              disabled: e.disabled,
              "hide-hint": "",
              onBlur: l(g),
              onChange: l(v),
              onFocus: l(C)
            }, null, 8, ["modelValue", "name", "value", "label", "disabled", "onBlur", "onChange", "onFocus"]))), 128))
          ])
        ]),
        _: 1
      }, 16, ["class", "disabled"]);
    };
  }
});
export {
  K as default
};
