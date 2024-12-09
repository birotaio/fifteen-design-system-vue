import G from "./FField.js";
/* empty css        */
import J from "../FMenu.js";
/* empty css        */
import K from "../FLoader.js";
/* empty css          */
import Q from "../FIcon.js";
/* empty css        */
import { defineComponent as X, watch as Y, ref as h, computed as s, openBlock as d, createBlock as u, mergeProps as T, unref as l, withCtx as p, createVNode as Z, isRef as B, renderSlot as C, normalizeProps as v, guardReactiveProps as x, createElementVNode as f, createCommentVNode as g, toDisplayString as V, createElementBlock as ee, normalizeClass as oe } from "vue";
import le from "../../vendor/fast-deep-equal/es6/index.js";
import { getCssColor as a } from "../../utils/getCssColor.js";
import { chevronDown as te, close as re, exclamationCircle as ne } from "../../.generated/icons.js";
import { registerIcons as ae } from "../../composables/useIcon.js";
import { useFieldWithValidation as ie } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as se } from "../../composables/useInputEventBindings.js";
const ce = { class: "FSelect__select__selectionStart" }, de = { class: "FSelect__selectValue" }, ue = { class: "FSelect__text" }, pe = {
  key: 1,
  class: "FSelect__placeholder"
}, Ve = /* @__PURE__ */ X({
  __name: "FSelect",
  props: {
    options: { default: () => [] },
    placeholder: { default: "" },
    optionsMenuColor: { default: "neutral--light-3" },
    optionTextColor: { default: "neutral--dark-4" },
    selectedOptionColor: { default: "primary--light-2" },
    selectedOptionTextColor: { default: "primary--dark-2" },
    outlineColor: { default: "neutral--light-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    menuWidth: { default: 300 },
    clearable: { type: Boolean },
    emptyText: { default: "" },
    size: { default: "medium" },
    validationTrigger: { default: "change" },
    preventSelection: { type: Boolean, default: !1 },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: {},
    labelTextColor: {},
    hint: {},
    hintTextColor: {},
    hideHint: { type: Boolean },
    hintIcon: {},
    modelValue: { default: void 0 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    borderColor: { default: "neutral--dark-1" }
  },
  emits: ["update:modelValue", "change", "focus", "blur", "clear", "select-option", "before-select-option"],
  setup(O, { expose: I, emit: w }) {
    const o = O, c = w;
    I({
      focus: L
    }), ae("icons", {
      chevronDown: te,
      close: re,
      exclamationCircle: ne
    });
    const {
      isValid: m,
      hint: M,
      value: t,
      validate: b
    } = ie(o, {
      validateOnMount: o?.validateOnMount
    }), { handleFocus: y } = se(
      b,
      o.validationTrigger,
      c
    );
    Y(t, (e) => {
      e === "" || e === null || e === void 0 || b(e);
    });
    const $ = h(0), i = h(!1), z = s(
      () => ({
        "--fselect--border-color": a(o.borderColor),
        "--fselect--color": a(o.color),
        "--fselect--error-color": a(o.errorColor),
        "--fselect--focus-border-color": a(o.focusBorderColor),
        "--fselect--focus-color": a(o.focusColor),
        "--fselect--outline-color": a(`${o.outlineColor}--rgb`),
        "--fselect--placeholder-text-color": a(
          o.placeholderTextColor
        ),
        "--fselect--text-color": a(o.textColor)
      })
    ), D = s(() => ({
      ["FSelect--" + o.size]: !0,
      "FSelect--error": !m.value,
      "FSelect--disabled": o.disabled,
      "FSelect--loading": o.loading
    })), H = s(
      () => o.disabled ? "neutral--dark-1" : m.value ? o.hintTextColor : o.errorColor
    ), N = s(() => ({
      "FSelect__icon--flipped": i.value && F.value === "chevronDown"
    })), F = s(
      () => o.clearable && i.value && t.value ? "close" : "chevronDown"
    ), P = s(() => o.size === "medium" ? 52 : 44);
    function _(e) {
      return o.options.find((r) => r.value === e)?.label;
    }
    function R(e) {
      o.clearable && i.value && t.value && (e.stopPropagation(), E());
    }
    function E() {
      t.value = null, c("clear");
    }
    function W(e) {
      $.value = o.options.findIndex(
        (r) => le(r.value, t.value)
      ), c("blur", e);
    }
    const S = h();
    function L() {
      S.value?.focus();
    }
    function U(e) {
      c("select-option", e), c("before-select-option", e);
    }
    return (e, r) => {
      const k = Q, q = K, A = J, j = G;
      return d(), u(j, T({
        class: ["FSelect", l(D)],
        style: l(z)
      }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: l(M), hideHint: e.hideHint, hintTextColor: l(H), hintIcon: e.hintIcon }), {
        default: p(() => [
          Z(A, {
            modelValue: l(i),
            "onUpdate:modelValue": r[1] || (r[1] = (n) => B(i) ? i.value = n : null),
            "selected-option": l(t),
            "onUpdate:selectedOption": r[2] || (r[2] = (n) => B(t) ? t.value = n : null),
            options: e.options,
            width: e.menuWidth,
            "empty-text": e.emptyText,
            color: e.optionsMenuColor || e.color,
            "text-color": e.optionTextColor,
            "selected-option-color": e.selectedOptionColor,
            "selected-option-text-color": e.selectedOptionTextColor,
            "prevent-selection": e.preventSelection,
            disabled: e.disabled || e.loading,
            "option-height": l(P),
            onBeforeSelectOption: U
          }, {
            "option-prefix": p((n) => [
              C(e.$slots, "option-prefix", v(x(n)))
            ]),
            option: p((n) => [
              C(e.$slots, "option", v(x(n)))
            ]),
            activator: p(() => [
              f("div", {
                class: "FSelect__select",
                ref_key: "selectRef",
                ref: S,
                tabindex: "0",
                role: "listbox",
                onBlur: W,
                onFocus: r[0] || (r[0] = //@ts-ignore
                (...n) => l(y) && l(y)(...n))
              }, [
                f("div", ce, [
                  l(m) ? g("", !0) : (d(), u(k, {
                    key: 0,
                    class: "FSelect__select__errorIcon",
                    name: "exclamationCircle",
                    color: e.errorColor,
                    size: "16"
                  }, null, 8, ["color"])),
                  f("div", de, [
                    l(t) ? C(e.$slots, "selected-value", v(T({ key: 0 }, { value: l(t), label: _(l(t)) })), () => [
                      f("div", ue, V(_(l(t))), 1)
                    ]) : (d(), ee("div", pe, V(e.placeholder), 1))
                  ])
                ]),
                e.loading ? g("", !0) : (d(), u(k, {
                  key: 0,
                  class: oe(["FSelect__icon", l(N)]),
                  name: l(F),
                  size: 16,
                  color: "transparent",
                  "stroke-color": e.textColor,
                  "stroke-width": 2,
                  onClick: R
                }, null, 8, ["name", "stroke-color", "class"])),
                e.loading ? (d(), u(q, {
                  key: 1,
                  class: "FSelect__loader",
                  height: "24",
                  color: e.placeholderTextColor
                }, null, 8, ["color"])) : g("", !0)
              ], 544)
            ]),
            _: 3
          }, 8, ["modelValue", "selected-option", "options", "width", "empty-text", "color", "text-color", "selected-option-color", "selected-option-text-color", "prevent-selection", "disabled", "option-height"])
        ]),
        _: 3
      }, 16, ["style", "class"]);
    };
  }
});
export {
  Ve as default
};
