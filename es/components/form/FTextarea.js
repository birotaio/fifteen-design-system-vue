import M from "./FField.js";
/* empty css        */
import $ from "../FLoader.js";
/* empty css          */
import E from "../FIcon.js";
/* empty css        */
import { defineComponent as H, ref as O, computed as s, openBlock as u, createBlock as f, mergeProps as C, unref as l, withCtx as R, createElementVNode as h, withDirectives as N, isRef as A, vModelText as D, createCommentVNode as L } from "vue";
import { genSize as P } from "../../utils/genSize.js";
import { getCssColor as t } from "../../utils/getCssColor.js";
import { exclamationCircle as S } from "../../.generated/icons.js";
import { registerIcons as U } from "../../composables/useIcon.js";
import { useFieldWithValidation as W } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as j } from "../../composables/useInputEventBindings.js";
import { useElementBounding as q } from "@vueuse/core";
const G = { class: "FTextarea__content" }, J = ["placeholder", "disabled", "rows", "aria-label"], se = /* @__PURE__ */ H({
  __name: "FTextarea",
  props: {
    placeholder: { default: "" },
    rows: { default: 3 },
    resize: { default: "vertical" },
    attrs: { default: () => ({}) },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
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
  emits: ["update:modelValue", "input", "change", "focus", "blur"],
  setup(x, { expose: g, emit: b }) {
    const e = x, T = b;
    g({
      focus: w
    }), U("icons", { exclamationCircle: S });
    const n = O(), { isValid: i, hint: v, value: d, validate: F } = W(
      e,
      {
        validateOnMount: e.validateOnMount
      }
    ), { handleChange: c, handleFocus: m, handleBlur: p } = j(
      F,
      e.validationTrigger,
      T
    ), { width: y } = q(n), B = s(
      () => ({
        "--ftextarea--color": t(e.color),
        "--ftextarea--text-color": t(e.textColor),
        "--ftextarea--placeholder-text-color": t(
          e.placeholderTextColor
        ),
        "--ftextarea--border-color": t(e.borderColor),
        "--ftextarea--outline-color": t(`${e.outlineColor}--rgb`),
        "--ftextarea--focus-color": t(e.focusColor),
        "--ftextarea--focus-border-color": t(e.focusBorderColor),
        "--ftextarea--error-color": t(e.errorColor),
        "--ftextarea--resize": e.disabled ? "none" : e.resize,
        "--ftextarea--width": P(y.value)
      })
    ), k = s(
      () => e.disabled ? "neutral--dark-1" : i.value ? e.hintTextColor : e.errorColor
    ), _ = s(() => ({
      "FTextarea--error": !i.value,
      "FTextarea--disabled": e.disabled,
      "FTextarea--loading": e.loading
    }));
    function w() {
      n.value?.focus();
    }
    return (o, r) => {
      const I = E, V = $, z = M;
      return u(), f(z, C({
        class: ["FTextarea", l(_)],
        style: l(B)
      }, { name: o.name, label: o.label, labelTextColor: o.labelTextColor, hint: l(v), hideHint: o.hideHint, hintTextColor: l(k), hintIcon: o.hintIcon }), {
        default: R(() => [
          h("div", G, [
            N(h("textarea", C({
              class: "FTextarea__textarea",
              ref_key: "textareaRef",
              ref: n
            }, o.attrs, {
              "onUpdate:modelValue": r[0] || (r[0] = (a) => A(d) ? d.value = a : null),
              placeholder: o.placeholder,
              disabled: o.disabled,
              rows: o.rows,
              "aria-label": o.label,
              onBlur: r[1] || (r[1] = //@ts-ignore
              (...a) => l(p) && l(p)(...a)),
              onChange: r[2] || (r[2] = //@ts-ignore
              (...a) => l(c) && l(c)(...a)),
              onFocus: r[3] || (r[3] = //@ts-ignore
              (...a) => l(m) && l(m)(...a))
            }), null, 16, J), [
              [D, l(d)]
            ]),
            !l(i) && !o.loading ? (u(), f(I, {
              key: 0,
              class: "FTextarea__errorIcon",
              name: "exclamationCircle",
              color: o.errorColor,
              size: "16"
            }, null, 8, ["color"])) : o.loading ? (u(), f(V, {
              key: 1,
              class: "FTextarea__loader",
              color: o.placeholderTextColor,
              height: "24"
            }, null, 8, ["color"])) : L("", !0)
          ])
        ]),
        _: 1
      }, 16, ["style", "class"]);
    };
  }
});
export {
  se as default
};
