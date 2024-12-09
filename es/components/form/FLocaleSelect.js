import v from "./FSelect.js";
/* empty css         */
import { defineComponent as T, ref as y, computed as B, openBlock as F, createBlock as M, mergeProps as O, unref as l, isRef as _, withCtx as k, createElementVNode as S, toDisplayString as V } from "vue";
import * as L from "../../vendor/date-fns/locale.js";
import { useFieldWithValidation as I } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as W } from "../../composables/useInputEventBindings.js";
const j = /* @__PURE__ */ T({
  __name: "FLocaleSelect",
  props: {
    localeCodes: { default: () => [] },
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
  setup(i, { expose: d, emit: u }) {
    const e = i, s = u, c = {
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
      hint: p,
      value: t,
      validate: f
    } = I(e, {
      validateOnMount: e?.validateOnMount
    }), { handleFocus: C, handleBlur: m } = W(
      f,
      e.validationTrigger,
      s
    );
    d({
      focus: h
    });
    const n = y();
    function h() {
      n.value?.focus();
    }
    const g = Object.values(L).map((a) => a.code), b = B(() => (e.localeCodes.length ? e.localeCodes : g).map((o) => ({
      label: e.optionLabelFormat?.(o) ?? o,
      value: o
    })));
    return (a, o) => {
      const x = v;
      return F(), M(x, O({
        class: "FLocaleSelect",
        ref_key: "localeSelectRef",
        ref: n,
        modelValue: l(t),
        "onUpdate:modelValue": o[0] || (o[0] = (r) => _(t) ? t.value = r : null)
      }, c, {
        options: l(b),
        hint: l(p),
        onFocus: l(C),
        onBlur: l(m)
      }), {
        option: k(({ option: r }) => [
          S("span", null, V(r.label), 1)
        ]),
        _: 1
      }, 16, ["modelValue", "options", "hint", "onFocus", "onBlur"]);
    };
  }
});
export {
  j as default
};
