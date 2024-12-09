import E from "./FField.js";
/* empty css        */
import q from "./FInput.js";
/* empty css        */
import { defineComponent as P, ref as s, computed as f, watch as d, openBlock as j, createBlock as z, mergeProps as y, unref as a, withCtx as v, createVNode as V, isRef as g, renderSlot as D, createElementVNode as G } from "vue";
import F from "../../vendor/fast-deep-equal/es6/index.js";
import "../../vendor/countup.js/dist/countUp.min.js";
import "@vueuse/core";
import "../../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import { createSearchRegexString as J } from "../../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
import K from "../FMenu.js";
/* empty css        */
import { useFieldWithValidation as Q } from "../../composables/useFieldWithValidation.js";
const X = ["innerHTML"], se = /* @__PURE__ */ P({
  __name: "FAutocomplete",
  props: {
    options: { default: () => [] },
    placeholder: { default: "" },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    optionsMenuColor: { default: "neutral--light-3" },
    optionTextColor: { default: "neutral--dark-3" },
    selectedOptionColor: { default: "primary--light-2" },
    selectedOptionTextColor: { default: "primary--dark-2" },
    menuWidth: { default: 300 },
    preventSelection: { type: Boolean, default: !1 },
    preventFiltering: { type: Boolean, default: !1 },
    emptyText: { default: "Type something to begin the search" },
    noMatchText: { default: "No match found for the current input." },
    loadingText: { default: "Loading..." },
    clearable: { type: Boolean, default: !1 },
    formatInputFn: { type: [Function, null], default: null },
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
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  setup(M, { expose: O, emit: B }) {
    const o = M, p = B;
    O({
      focus: N
    });
    const l = s(), C = f(
      () => new RegExp(J(l.value), "ig")
    ), k = f(() => !l.value || u.value?.label === l.value || o.preventFiltering || o.formatInputFn ? o.options : o.options.filter((e) => e.label.match(C.value)));
    function I(e) {
      return !l.value || !o.options.length ? e.label : e.label.replace(
        C.value,
        '<span class="FAutocomplete__option__match">$1</span>'
      );
    }
    const r = s(!1);
    d(r, (e) => {
      e || setTimeout(b, 25);
    });
    function b() {
      l.value = o.formatInputFn ? o.formatInputFn(
        u.value?.label ?? "",
        u.value?.description ?? ""
      ) : u.value?.label ?? "";
    }
    const {
      isValid: c,
      hint: R,
      value: i
    } = Q(o, {
      validateOnMount: o?.validateOnMount,
      validateOnModelValueUpdate: !0,
      rules: [$]
    });
    function w(e) {
      p("blur", e);
    }
    function A(e) {
      p("focus", e), r.value = !0;
    }
    function H(e) {
      p("change", e);
    }
    function S(e) {
      p("input", e, l.value ?? ""), r.value = !0;
    }
    function $() {
      return !l.value || !!u.value;
    }
    const u = f(
      () => o.options.find((e) => F(i.value, e.value))
    );
    d(i, b, { immediate: !0 });
    const x = f(
      () => o.disabled ? "neutral--dark-1" : c.value ? o.hintTextColor : o.errorColor
    ), m = s();
    function U() {
      m.value.forceValidation();
    }
    d(c, U);
    const T = s();
    d(() => o.modelValue, L, { immediate: !0 });
    function L(e) {
      const t = o.options.find(
        (h) => F(e, h.value)
      );
      T.value?.selectOption(t ?? null);
    }
    d(l, (e) => {
      e || (i.value = null);
    });
    function N() {
      m.value?.ref?.focus();
    }
    return (e, t) => {
      const h = q, W = E;
      return j(), z(W, y({ class: "FAutocomplete" }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: a(R), hideHint: e.hideHint, hintTextColor: a(x), hintIcon: e.hintIcon }), {
        default: v(() => [
          V(K, {
            ref_key: "menuRef",
            ref: T,
            modelValue: a(r),
            "onUpdate:modelValue": t[1] || (t[1] = (n) => g(r) ? r.value = n : null),
            "selected-option": a(i),
            "onUpdate:selectedOption": t[2] || (t[2] = (n) => g(i) ? i.value = n : null),
            options: a(k),
            width: e.menuWidth,
            "empty-text": e.loading ? e.loadingText : a(l) ? e.noMatchText : e.emptyText,
            color: e.optionsMenuColor || e.color,
            "text-color": e.optionTextColor,
            "selected-option-color": e.selectedOptionColor,
            "selected-option-text-color": e.selectedOptionTextColor,
            "prevent-selection": e.preventSelection,
            disabled: e.disabled,
            loading: e.loading,
            "prevent-activation": "",
            "prevent-search": "",
            inanimated: ""
          }, {
            option: v((n) => [
              D(e.$slots, "option", y({ class: "FAutocomplete__option" }, n), () => [
                G("div", {
                  innerHTML: I(n.option)
                }, null, 8, X)
              ])
            ]),
            activator: v(() => [
              V(h, {
                ref_key: "inputRef",
                ref: m,
                modelValue: a(l),
                "onUpdate:modelValue": t[0] || (t[0] = (n) => g(l) ? l.value = n : null),
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
                clearable: e.clearable,
                rules: [() => a(c)],
                loading: e.loading,
                "hide-hint": "",
                onFocus: A,
                onBlur: w,
                onChange: H,
                onInput: S
              }, null, 8, ["modelValue", "color", "border-color", "text-color", "error-message", "placeholder", "placeholder-text-color", "outline-color", "focus-color", "focus-border-color", "error-color", "validate-on-mount", "validation-trigger", "disabled", "clearable", "rules", "loading"])
            ]),
            _: 3
          }, 8, ["modelValue", "selected-option", "options", "width", "empty-text", "color", "text-color", "selected-option-color", "selected-option-text-color", "prevent-selection", "disabled", "loading"])
        ]),
        _: 3
      }, 16);
    };
  }
});
export {
  se as default
};
