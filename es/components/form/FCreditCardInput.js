import P from "./FField.js";
/* empty css        */
import U from "./FInput.js";
/* empty css        */
import W from "../FLoader.js";
/* empty css          */
import j from "../FCreditCardIcon.js";
/* empty css                  */
import q from "../FIcon.js";
/* empty css        */
import { defineComponent as D, computed as g, ref as v, watch as b, openBlock as f, createBlock as p, mergeProps as G, unref as o, withCtx as k, createVNode as y, isRef as J, createElementVNode as K, normalizeClass as Q } from "vue";
import { getCardInfo as S, luhnCheck as X } from "../../utils/credit-cards.js";
import { checkmark as Y } from "../../.generated/icons.js";
import * as Z from "../../.generated/credit-cards.js";
import { registerIcons as I } from "../../composables/useIcon.js";
import { useFieldWithValidation as ee } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as oe } from "../../composables/useInputEventBindings.js";
const F = "#### #### #### ####", ve = /* @__PURE__ */ D({
  __name: "FCreditCardInput",
  props: {
    placeholder: { default: "4000 1234 5678 9012" },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    optionsMenuColor: { default: "neutral--light-3" },
    optionTextColor: { default: "neutral--dark-3" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: { default: "neutral--dark-4" },
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean },
    hintIcon: { default: null },
    modelValue: { default: void 0 },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    borderColor: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "credit-card", "complete"],
  setup(V, { expose: T, emit: B }) {
    const t = V, i = B;
    T({
      focus: A
    }), I("icons", { checkmark: Y }), I("creditCards", Z);
    const {
      isValid: d,
      hint: _,
      value: a,
      validate: m,
      resetValidation: h
    } = ee(t, {
      validateOnMount: t?.validateOnMount,
      rules: [s]
    }), { handleBlur: M, handleChange: x, handleFocus: $, handleInput: E } = oe(m, t.validationTrigger, i), O = g(() => ({
      "FCreditCardInput--disabled": t.disabled
    })), n = v(null);
    b(
      a,
      (e) => {
        const l = (e ?? "").replace(/\s/g, ""), r = S(l);
        r?.lengths.every(
          (c) => l.length > c
        ) || (r && r.lengths.includes(l.length) || !r && l.length === F.split("#").length - 1 ? m(e) : h(), n.value = r, i("credit-card", r), s(e) && i("complete"));
      },
      { immediate: !0 }
    );
    function s(e) {
      if (typeof e != "string" || !n.value) return !1;
      const l = e.replace(/\s/g, "");
      return X(l) && n.value.lengths.includes(l.length);
    }
    function R(e) {
      h(), $(e);
    }
    const z = g(
      () => t.disabled ? "neutral--dark-1" : d.value ? t.hintTextColor : t.errorColor
    ), u = v();
    function H() {
      u.value.forceValidation();
    }
    b(d, H);
    function A() {
      u.value?.ref?.focus();
    }
    return (e, l) => {
      const r = q, C = j, c = W, N = U, w = P;
      return f(), p(w, G({
        class: ["FCreditCardInput", o(O)]
      }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: o(_), hideHint: e.hideHint, hintTextColor: o(z), hintIcon: e.hintIcon }), {
        default: k(() => [
          y(N, {
            ref_key: "inputRef",
            ref: u,
            modelValue: o(a),
            "onUpdate:modelValue": l[0] || (l[0] = (L) => J(a) ? a.value = L : null),
            color: e.color,
            "border-color": e.borderColor,
            "text-color": e.textColor,
            "error-message": e.errorMessage,
            placeholder: e.placeholder,
            "placeholder-text-color": e.placeholderTextColor,
            "outline-color": e.outlineColor,
            "focus-color": e.focusColor,
            "focus-border-color": e.focusBorderColor,
            "error-color": e.errorColor,
            "validate-on-mount": e.validateOnMount,
            "validation-trigger": e.validationTrigger,
            disabled: e.disabled,
            rules: [() => o(d)],
            "hide-error-icon": "",
            "hide-hint": "",
            mask: o(n)?.mask ?? F,
            loading: e.loading,
            onFocus: R,
            onBlur: o(M),
            onChange: o(x),
            onInput: o(E)
          }, {
            suffix: k(() => [
              K("div", {
                class: Q(["FCreditCardInput__suffix", { "FCreditCardInput__suffix--valid": s(o(a)) }])
              }, [
                y(r, {
                  name: "checkmark",
                  color: "success",
                  size: 16
                }),
                e.loading ? (f(), p(c, {
                  key: 1,
                  color: e.placeholderTextColor,
                  height: "24"
                }, null, 8, ["color"])) : (f(), p(C, {
                  key: 0,
                  "card-type": o(n)?.type,
                  size: "32"
                }, null, 8, ["card-type"]))
              ], 2)
            ]),
            _: 1
          }, 8, ["modelValue", "color", "border-color", "text-color", "error-message", "placeholder", "placeholder-text-color", "outline-color", "focus-color", "focus-border-color", "error-color", "validate-on-mount", "validation-trigger", "disabled", "rules", "mask", "loading", "onBlur", "onChange", "onInput"])
        ]),
        _: 1
      }, 16, ["class"]);
    };
  }
});
export {
  ve as default
};
