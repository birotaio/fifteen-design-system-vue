import $ from "./FField.js";
/* empty css        */
import M from "../FLoader.js";
/* empty css          */
import { defineComponent as O, computed as s, ref as E, watch as f, openBlock as i, createBlock as d, mergeProps as H, unref as a, withCtx as K, createElementVNode as N, createElementBlock as j, Fragment as A, renderList as L, withKeys as P, createCommentVNode as R, nextTick as U } from "vue";
import W from "./FInput.js";
/* empty css        */
import { useFieldWithValidation as q } from "../../composables/useFieldWithValidation.js";
const z = { class: "FDigitsInput__input" }, te = /* @__PURE__ */ O({
  __name: "FDigitsInput",
  props: {
    digits: { default: 4 },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: {},
    labelTextColor: {},
    hint: {},
    hintTextColor: {},
    hideHint: { type: Boolean },
    hintIcon: {},
    modelValue: { default: void 0 },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean },
    borderColor: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "digit-input", "complete"],
  setup(p, { expose: m, emit: h }) {
    const t = p, g = h;
    m({
      focus: I
    });
    const v = s(() => ({
      "FDigitsInput--loading": t.loading
    })), {
      isValid: u,
      hint: C,
      value: b,
      validate: c
    } = q(t, {
      validateOnMount: t.validateOnMount
    }), o = E([]), l = s(
      () => (b.value ?? "").split("")
    ), y = s(
      () => t.disabled ? "neutral--dark-1" : u.value ? t.hintTextColor : t.errorColor
    );
    f(l, () => {
      l.value.length === t.digits && !l.value.some((e) => e === "") && (c(l.value.join("")), g("complete"));
    });
    function V(e) {
      setTimeout(() => {
        e > 0 ? (o.value[e - 1].ref?.focus(), o.value[e - 1].ref?.select()) : o.value[e].ref?.blur();
      }, 0);
    }
    async function F(e) {
      await U(), /[0-9]/.test(l.value[e]) && (e + 1 < t.digits ? (o.value[e + 1].ref?.focus(), o.value[e + 1].ref?.select()) : o.value[e].ref?.blur());
    }
    function T(e) {
      o.value[e].ref?.select();
    }
    function k() {
      o.value.forEach((e) => e?.forceValidation());
    }
    f(u, k);
    function B() {
      c(l.value.join(""));
    }
    function I() {
      o.value[0]?.ref?.focus();
    }
    const D = {
      inputmode: "numeric",
      pattern: "[0-9]*"
    };
    return (e, G) => {
      const w = M, _ = $;
      return i(), d(_, H({ class: "FDigitsInput" }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: a(C), hideHint: e.hideHint, hintTextColor: a(y), hintIcon: e.hintIcon }, { class: a(v) }), {
        default: K(() => [
          N("div", z, [
            (i(!0), j(A, null, L(e.digits, (J, r) => (i(), d(W, {
              key: r,
              ref_for: !0,
              ref_key: "digitRefs",
              ref: o,
              modelValue: a(l)[r],
              "onUpdate:modelValue": (n) => a(l)[r] = n,
              "text-align": "center",
              "validation-trigger": "input",
              "hide-hint": "",
              mask: "#",
              type: "text",
              attrs: D,
              rules: [() => a(u)],
              "validate-on-mount": e.validateOnMount,
              "hide-error-icon": "",
              disabled: e.disabled,
              color: e.color,
              "text-color": e.textColor,
              "outline-color": e.outlineColor,
              "placeholder-text-color": e.placeholderTextColor,
              "focus-color": e.focusColor,
              "border-color": e.borderColor,
              "focus-border-color": e.focusBorderColor,
              "error-color": e.errorColor,
              onChange: B,
              onFocus: (n) => T(r),
              onInput: (n) => F(r),
              onKeydown: P((n) => V(r), ["delete"])
            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules", "validate-on-mount", "disabled", "color", "text-color", "outline-color", "placeholder-text-color", "focus-color", "border-color", "focus-border-color", "error-color", "onFocus", "onInput", "onKeydown"]))), 128)),
            e.loading ? (i(), d(w, {
              key: 0,
              color: e.placeholderTextColor,
              height: "32"
            }, null, 8, ["color"])) : R("", !0)
          ])
        ]),
        _: 1
      }, 16, ["class"]);
    };
  }
});
export {
  te as default
};
