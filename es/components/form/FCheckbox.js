import H from "./FField.js";
/* empty css        */
import N from "../FIcon.js";
/* empty css        */
import { defineComponent as O, useId as R, ref as D, computed as s, openBlock as d, createBlock as p, mergeProps as K, unref as o, withCtx as S, createElementVNode as i, withDirectives as A, normalizeClass as x, isRef as P, withKeys as U, vModelCheckbox as W, createVNode as j, createCommentVNode as q, createElementBlock as v, toDisplayString as G, renderSlot as J } from "vue";
import { getCssColor as r } from "../../utils/getCssColor.js";
import { checkmark as L, checkboxIndeterminate as Q } from "../../.generated/icons.js";
import { registerIcons as X } from "../../composables/useIcon.js";
import { useFieldWithValidation as Y } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as Z } from "../../composables/useInputEventBindings.js";
const ee = ["for"], oe = { class: "FCheckbox__wrapper" }, le = ["id", "name", "disabled"], re = {
  key: 0,
  class: "FCheckbox__labelText"
}, te = {
  key: 1,
  class: "FCheckbox__labelText"
}, be = /* @__PURE__ */ O({
  __name: "FCheckbox",
  props: {
    hoverBorderColor: { default: "secondary" },
    focusColor: { default: "neutral--light-2" },
    focusBorderColor: { default: "neutral--dark-2" },
    checkedColor: { default: "secondary" },
    checkedBorderColor: { default: "secondary" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: { default: "" },
    labelTextColor: {},
    hint: { default: "" },
    hintTextColor: { default: "neutral--dark-4" },
    hideHint: { type: Boolean, default: !1 },
    hintIcon: { default: null },
    modelValue: { type: [Boolean, null], default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-4" },
    textColor: { default: "neutral--dark-3" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    borderColor: { default: "neutral--dark-1" }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(_, { expose: g, emit: y }) {
    const e = _, F = y;
    g({
      focus: z
    }), X("icons", {
      checkmark: L,
      checkboxIndeterminate: Q
    });
    const u = R(), h = D(), {
      isValid: f,
      hint: B,
      value: a,
      validate: k
    } = Y(e, {
      validateOnMount: e.validateOnMount
    }), { handleBlur: b, handleFocus: m } = Z(
      k,
      e.validationTrigger,
      F
    ), n = s({
      get: () => !!a.value,
      set: (l) => {
        a.value = a.value === null ? !0 : l;
      }
    }), I = s(
      () => ({
        "--fcheckbox--border-color": r(e.borderColor),
        "--fcheckbox--checked-border-color": r(e.checkedBorderColor),
        "--fcheckbox--checked-color": r(e.checkedColor),
        "--fcheckbox--color": r(e.color),
        "--fcheckbox--error-color": r(e.errorColor),
        "--fcheckbox--focus-border-color": r(e.focusBorderColor),
        "--fcheckbox--focus-color": r(e.focusColor),
        "--fcheckbox--hover-border-color": r(e.hoverBorderColor),
        "--fcheckbox--text-color": r(e.textColor)
      })
    ), T = s(
      () => e.disabled ? "neutral--dark-1" : f.value ? e.hintTextColor : e.errorColor
    ), V = s(() => ({
      "FCheckbox__checkedIcon--visible": n.value
    })), M = s(() => ({
      "FCheckbox--error": !f.value,
      "FCheckbox--disabled": e.disabled
    })), w = s(() => ({
      "FCheckbox__checkbox--indeterminate": a.value === null
    }));
    function $() {
      k(a.value, e.validationTrigger === "change");
    }
    function z() {
      h.value?.focus();
    }
    return (l, t) => {
      const C = N, E = H;
      return d(), p(E, K({
        class: ["FCheckbox", o(M)],
        style: o(I)
      }, { name: l.name, hint: o(B), hideHint: l.hideHint, hintTextColor: o(T), hintIcon: l.hintIcon }), {
        default: S(() => [
          i("label", {
            class: "FCheckbox__label",
            for: o(u)
          }, [
            i("div", oe, [
              A(i("input", {
                class: x(["FCheckbox__checkbox", o(w)]),
                id: o(u),
                ref_key: "checkboxRef",
                ref: h,
                "onUpdate:modelValue": t[0] || (t[0] = (c) => P(n) ? n.value = c : null),
                name: l.name,
                type: "checkbox",
                disabled: l.disabled,
                onBlur: t[1] || (t[1] = //@ts-ignore
                (...c) => o(b) && o(b)(...c)),
                onChange: $,
                onFocus: t[2] || (t[2] = //@ts-ignore
                (...c) => o(m) && o(m)(...c)),
                onKeypress: t[3] || (t[3] = U((c) => n.value = !o(n), ["enter"]))
              }, null, 42, le), [
                [W, o(n)]
              ]),
              j(C, {
                class: x(["FCheckbox__checkedIcon", o(V)]),
                name: "checkmark",
                color: "neutral--light-5",
                size: "10"
              }, null, 8, ["class"]),
              o(a) === null ? (d(), p(C, {
                key: 0,
                class: "FCheckbox__indeterminateIcon",
                name: "checkboxIndeterminate",
                color: "neutral--light-5",
                size: "10"
              })) : q("", !0)
            ]),
            l.label ? (d(), v("span", re, G(l.label), 1)) : (d(), v("span", te, [
              J(l.$slots, "label")
            ]))
          ], 8, ee)
        ]),
        _: 3
      }, 16, ["class", "style"]);
    };
  }
});
export {
  be as default
};
