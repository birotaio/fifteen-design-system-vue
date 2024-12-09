import S from "./FSelect.js";
/* empty css         */
import O from "../FFlagIcon.js";
/* empty css            */
import { defineComponent as z, ref as V, computed as s, openBlock as k, createBlock as I, mergeProps as W, unref as l, isRef as H, withCtx as r, createElementVNode as a, createVNode as c, toDisplayString as f } from "vue";
import { getFlagIconList as L } from "../../.generated/utils.js";
import { useFieldWithValidation as R } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as E } from "../../composables/useInputEventBindings.js";
const N = { class: "FCountrySelect__selectedValue" }, G = /* @__PURE__ */ z({
  __name: "FCountrySelect",
  props: {
    countryCodes: { default: () => [] },
    optionLabelFormat: { type: Function, default: void 0 },
    optionsMenuColor: { default: "neutral--light-5" },
    optionTextColor: { default: "secondary" },
    selectedOptionColor: { default: "neutral--light-2" },
    selectedOptionTextColor: { default: "primary--dark-2" },
    outlineColor: { default: "neutral--light-3" },
    placeholder: { default: "" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusBorderColor: { default: "secondary" },
    menuWidth: { default: 300 },
    clearable: { type: Boolean },
    emptyText: { default: "" },
    size: { default: "medium" },
    validationTrigger: { default: "change" },
    preventSelection: { type: Boolean },
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
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean },
    focusColor: { default: "neutral--light-5" },
    borderColor: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  setup(p, { expose: C, emit: m }) {
    const e = p, g = m, h = {
      label: e.label,
      name: e.name,
      color: e.color,
      textColor: e.textColor,
      focusColor: e.focusColor,
      borderColor: e.borderColor,
      focusBorderColor: e.focusBorderColor,
      outlineColor: e.outlineColor,
      optionsMenuColor: e.optionsMenuColor,
      optionTextColor: e.optionTextColor,
      selectedOptionTextColor: e.selectedOptionTextColor,
      labelTextColor: e.labelTextColor,
      hint: e.hint,
      hideHint: e.hideHint,
      hintTextColor: e.hintTextColor,
      hintIcon: e.hintIcon,
      placeholder: e.placeholder,
      clearable: e.clearable,
      errorMessage: e.errorMessage,
      errorColor: e.errorColor,
      disabled: e.disabled,
      loading: e.loading,
      rules: e.rules,
      size: e.size,
      validationTrigger: e.validationTrigger,
      validateOnMount: e.validateOnMount,
      menuWidth: e.menuWidth
    }, {
      hint: y,
      value: n,
      validate: x
    } = R(e, {
      validateOnMount: e?.validateOnMount
    }), { handleFocus: _, handleBlur: b } = E(
      x,
      e.validationTrigger,
      g
    );
    C({
      focus: v
    });
    const i = V(), u = s(() => e.size === "medium" ? 24 : 20);
    function v() {
      i.value?.focus();
    }
    const T = s(() => (e.countryCodes.length ? e.countryCodes : L()).map((t) => ({
      label: e.optionLabelFormat?.(t) ?? t,
      value: t
    })));
    return (F, t) => {
      const d = O, B = S;
      return k(), I(B, W({
        class: "FCountrySelect",
        ref_key: "countryCodeSelectRef",
        ref: i,
        modelValue: l(n),
        "onUpdate:modelValue": t[0] || (t[0] = (o) => H(n) ? n.value = o : null)
      }, h, {
        options: l(T),
        hint: l(y),
        onFocus: l(_),
        onBlur: l(b)
      }), {
        "selected-value": r(({ value: o, label: M }) => [
          a("div", N, [
            c(d, {
              class: "FCountrySelect__flag",
              "flag-code": o,
              size: l(u)
            }, null, 8, ["flag-code", "size"]),
            a("span", null, f(M), 1)
          ])
        ]),
        "option-prefix": r(({ option: o }) => [
          c(d, {
            class: "FCountrySelect__flag",
            "flag-code": o.value,
            size: l(u)
          }, null, 8, ["flag-code", "size"])
        ]),
        option: r(({ option: o }) => [
          a("span", null, f(o.label), 1)
        ]),
        _: 1
      }, 16, ["modelValue", "options", "hint", "onFocus", "onBlur"]);
    };
  }
});
export {
  G as default
};
