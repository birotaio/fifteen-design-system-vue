import N from "./FField.js";
/* empty css        */
import j from "../FLoader.js";
/* empty css          */
import L from "../FIcon.js";
/* empty css        */
import { defineComponent as P, ref as S, computed as u, openBlock as i, createBlock as d, mergeProps as v, unref as l, withCtx as U, createElementVNode as k, createElementBlock as F, renderSlot as B, createCommentVNode as s, withDirectives as W, isRef as q, vModelDynamic as G, withModifiers as _, withKeys as J } from "vue";
import { vMaska as Q } from "../../vendor/maska/dist/maska.js";
import { getCssColor as r } from "../../utils/getCssColor.js";
import { close as X, exclamationCircle as Y } from "../../.generated/icons.js";
import { registerIcons as Z } from "../../composables/useIcon.js";
import { useFieldWithValidation as ee } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as oe } from "../../composables/useInputEventBindings.js";
const le = {
  key: 0,
  class: "FInput__input__prefix"
}, te = ["name", "type", "placeholder", "disabled", "aria-label"], re = {
  key: 1,
  class: "FInput__input__suffix"
}, ye = /* @__PURE__ */ P({
  __name: "FInput",
  props: {
    placeholder: { default: "" },
    type: { default: "text" },
    attrs: { default: () => ({}) },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    hideErrorIcon: { type: Boolean, default: !1 },
    textAlign: { default: "left" },
    mask: { default: "" },
    clearable: { type: Boolean, default: !1 },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: { default: "neutral--dark-4" },
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean, default: !1 },
    hintIcon: { default: null },
    modelValue: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "blur" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean },
    borderColor: { default: "secondary" }
  },
  emits: ["update:modelValue", "input", "change", "focus", "blur", "clear"],
  setup(x, { expose: T, emit: V }) {
    const o = x, c = V, f = S();
    T({
      ref: f,
      forceValidation: H,
      focus: g
    }), Z("icons", { close: X, exclamationCircle: Y });
    const { isValid: p, hint: $, value: a, validate: m } = ee(
      o,
      {
        validateOnMount: o.validateOnMount
      }
    ), {
      handleBlur: h,
      handleChange: C,
      handleInput: M,
      handleFocus: b
    } = oe(m, o.validationTrigger, c), w = u(() => ({
      mask: o.mask
    })), E = u(
      () => ({
        "--finput--color": r(o.color),
        "--finput--text-color": r(o.textColor),
        "--finput--placeholder-text-color": r(o.placeholderTextColor),
        "--finput--border-color": r(o.borderColor),
        "--finput--outline-color": r(`${o.outlineColor}--rgb`),
        "--finput--focus-color": r(o.focusColor),
        "--finput--focus-border-color": r(o.focusBorderColor),
        "--finput--error-color": r(o.errorColor),
        "--finput--text-align": o.textAlign
      })
    ), A = u(() => ({
      "FInput--error": !p.value,
      "FInput--disabled": o.disabled,
      "FInput--loading": o.loading
    })), O = u(
      () => o.disabled ? "neutral--dark-1" : p.value ? o.hintTextColor : o.errorColor
    );
    function y() {
      a.value = "", c("clear");
    }
    function H() {
      m(a.value);
    }
    function g() {
      f.value?.focus();
    }
    function K(e) {
      e instanceof InputEvent && M(e);
    }
    const R = u(() => ({
      ...o.attrs,
      ...o.type === "number" ? { pattern: "[0-9]*" } : {}
    }));
    return (e, t) => {
      const I = L, z = j, D = N;
      return i(), d(D, v({
        class: ["FInput", l(A)],
        style: l(E)
      }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: l($), hideHint: e.hideHint, hintTextColor: l(O), hintIcon: e.hintIcon }), {
        default: U(() => [
          k("div", {
            class: "FInput__input",
            role: "textbox",
            tabindex: "-1",
            onFocus: g
          }, [
            e.$slots.prefix ? (i(), F("div", le, [
              B(e.$slots, "prefix")
            ])) : s("", !0),
            W(k("input", v({
              ref_key: "inputRef",
              ref: f
            }, l(R), {
              "onUpdate:modelValue": t[0] || (t[0] = (n) => q(a) ? a.value = n : null),
              name: e.name,
              type: e.type,
              placeholder: e.placeholder,
              disabled: e.disabled,
              "aria-label": e.label,
              onBlur: t[1] || (t[1] = //@ts-ignore
              (...n) => l(h) && l(h)(...n)),
              onChange: t[2] || (t[2] = //@ts-ignore
              (...n) => l(C) && l(C)(...n)),
              onFocus: t[3] || (t[3] = //@ts-ignore
              (...n) => l(b) && l(b)(...n)),
              onInput: K
            }), null, 16, te), [
              [G, l(a)],
              [l(Q), void 0, l(w)]
            ]),
            e.$slots.suffix || e.loading || e.clearable ? (i(), F("div", re, [
              B(e.$slots, "suffix", {}, () => [
                e.clearable && l(a) ? (i(), d(I, {
                  key: 0,
                  class: "FInput__input__suffix__clearableIcon",
                  name: "close",
                  tabindex: "0",
                  size: 24,
                  color: e.textColor,
                  onClick: _(y, ["stop"]),
                  onKeydown: J(_(y, ["stop"]), ["enter", "space"])
                }, null, 8, ["color", "onKeydown"])) : s("", !0),
                e.loading ? (i(), d(z, {
                  key: 1,
                  color: e.placeholderTextColor,
                  height: "24"
                }, null, 8, ["color"])) : s("", !0)
              ])
            ])) : s("", !0),
            !l(p) && !e.hideErrorIcon && !e.loading ? (i(), d(I, {
              key: 2,
              class: "FInput__errorIcon",
              name: "exclamationCircle",
              color: e.errorColor,
              size: "16"
            }, null, 8, ["color"])) : s("", !0)
          ], 32)
        ]),
        _: 3
      }, 16, ["style", "class"]);
    };
  }
});
export {
  ye as default
};
