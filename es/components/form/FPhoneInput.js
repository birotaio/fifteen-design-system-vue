import ao from "./FField.js";
/* empty css        */
import io from "../FMenu.js";
/* empty css        */
import so from "../FDivider.js";
/* empty css           */
import uo from "../FIcon.js";
/* empty css        */
import co from "../FFlagIcon.js";
/* empty css            */
import { defineComponent as po, computed as s, watch as C, ref as x, openBlock as fo, createBlock as mo, mergeProps as ho, unref as e, withCtx as c, createVNode as d, isRef as g, createElementVNode as v, withKeys as k, withModifiers as N, normalizeClass as Co, toDisplayString as go } from "vue";
import { getExampleNumber as V, getCountryCallingCode as p, parsePhoneNumber as T, getCountries as vo, isValidPhoneNumber as B } from "libphonenumber-js";
import w from "../../vendor/libphonenumber-js/examples.mobile.json.js";
import { useVModelProxy as M } from "../../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../../vendor/countup.js/dist/countUp.min.js";
import "@vueuse/core";
import "../../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import "../../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
import bo from "./FInput.js";
/* empty css        */
import { getCssColor as $ } from "../../utils/getCssColor.js";
import { chevronDown as yo } from "../../.generated/icons.js";
import * as Po from "../../.generated/flags.js";
import { registerIcons as A } from "../../composables/useIcon.js";
import { useFieldWithValidation as Fo } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as Io } from "../../composables/useInputEventBindings.js";
const _o = { class: "FPhoneInput__prefix" }, xo = ["aria-checked", "onKeydown", "onClick", "onBlur"], ko = ["aria-checked", "onKeydown", "onClick", "onBlur"], Zo = /* @__PURE__ */ po({
  __name: "FPhoneInput",
  props: {
    phoneNumber: { default: "" },
    countryCode: { default: "FR" },
    outlineColor: { default: "neutral--light-3" },
    textPhonePrefixColor: { default: "neutral--dark-3" },
    placeholderTextColor: { default: "neutral--dark-2" },
    focusColor: { default: "neutral--light-5" },
    focusBorderColor: { default: "secondary" },
    optionsMenuColor: { default: "neutral--light-3" },
    optionTextColor: { default: "neutral--dark-3" },
    validationTrigger: { default: "change" },
    fieldset: { type: Boolean },
    name: { default: "" },
    label: {},
    labelTextColor: {},
    hint: {},
    hintTextColor: {},
    hideHint: { type: Boolean },
    hintIcon: {},
    modelValue: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    borderColor: { default: "secondary" }
  },
  emits: ["update:modelValue", "update:phoneNumber", "update:countryCode", "input", "change", "focus", "blur"],
  setup(O, { expose: E, emit: R }) {
    const r = O, K = R;
    E({
      focus: oo
    }), A("icons", { chevronDown: yo }), A("flags", Po);
    const n = M({
      props: r,
      propName: "countryCode"
    }), {
      isValid: f,
      hint: D,
      validate: b,
      value: H
    } = Fo(r, {
      validateOnMount: r?.validateOnMount,
      rules: [
        (o) => F(o) || P(o),
        ...Array.isArray(r.rules) ? r.rules : [r.rules]
      ]
    }), { handleBlur: L, handleChange: U, handleFocus: z, handleInput: S } = Io(
      () => b(y.value),
      r.validationTrigger,
      K
    ), W = s(() => ({
      "FPhoneInput--disabled": r.disabled,
      "FPhoneInput--loading": r.loading
    })), j = s(
      () => ({
        "--fphoneinput--textColor": $(r.textColor),
        "--fphoneinput--textPhonePrefixColor": $(
          r.textPhonePrefixColor
        )
      })
    ), q = s(
      () => V(n.value, w)?.format("INTERNATIONAL").replace(`+${p(n.value)} `, "")
    ), m = s(
      () => `+${p(n.value)}`
    ), l = M({ props: r, propName: "phoneNumber" }), y = s(() => {
      const o = l.value !== "" ? m.value + l.value : "";
      return !P(o) && F(o) ? T(o).number : o;
    });
    C([m, l], () => {
      b(y.value, !1);
    });
    const G = vo().map((o) => ({
      label: o,
      value: o
    })), J = s(() => ({
      "FPhoneInput__icon--flipped": u.value
    })), Q = s(() => {
      const o = V(n.value, w), t = o?.format("NATIONAL", { nationalPrefix: !1 })?.replace(/[0-9]/g, "#") ?? "", a = o?.format("INTERNATIONAL").replace(`+${p(n.value)} `, "").replace(/[0-9]/g, "#") ?? "";
      return [t, a];
    });
    function P(o) {
      if (typeof o != "string") return !1;
      const t = `+${p(n.value)}`;
      return o === "" || o === t;
    }
    function F(o) {
      return typeof o != "string" ? !1 : B(o);
    }
    const u = x(!1), X = s(
      () => r.disabled ? "neutral--dark-1" : f.value ? r.hintTextColor : r.errorColor
    );
    function Y(o) {
      return o.value;
    }
    const h = x();
    function Z() {
      h.value?.forceValidation();
    }
    C(f, Z);
    function oo() {
      h.value?.ref?.focus();
    }
    return C(
      H,
      (o) => {
        const t = String(o);
        if (t === "" && (l.value = ""), !B(t)) return;
        const a = T(t);
        l.value = a.nationalNumber, a.country && (n.value = a.country);
      },
      { immediate: !0 }
    ), (o, t) => {
      const a = co, eo = uo, ro = so, to = io, no = ao;
      return fo(), mo(no, ho({
        class: ["FPhoneInput", e(W)],
        style: e(j)
      }, { name: o.name, label: o.label, labelTextColor: o.labelTextColor, hint: e(D), hideHint: o.hideHint, hintTextColor: e(X), hintIcon: o.hintIcon }), {
        default: c(() => [
          d(to, {
            modelValue: e(u),
            "onUpdate:modelValue": t[1] || (t[1] = (i) => g(u) ? u.value = i : null),
            "selected-option": e(n),
            "onUpdate:selectedOption": t[2] || (t[2] = (i) => g(n) ? n.value = i : null),
            options: e(G),
            color: o.optionsMenuColor,
            "text-color": o.optionTextColor,
            disabled: o.disabled,
            width: "100",
            "option-height": "48",
            "prevent-activation": ""
          }, {
            activator: c(({ toggleMenu: i, openMenu: I, closeMenu: _ }) => [
              d(bo, {
                ref_key: "inputRef",
                ref: h,
                modelValue: e(l),
                "onUpdate:modelValue": t[0] || (t[0] = (lo) => g(l) ? l.value = lo : null),
                color: o.color,
                "text-color": o.textColor,
                "error-message": o.errorMessage,
                placeholder: e(q),
                "placeholder-text-color": o.placeholderTextColor,
                "validate-on-mount": o.validateOnMount,
                "validation-trigger": o.validationTrigger,
                disabled: o.disabled,
                rules: [() => e(f)],
                "outline-color": o.outlineColor,
                "focus-color": o.focusColor,
                "border-color": o.borderColor,
                "focus-border-color": o.focusBorderColor,
                "error-color": o.errorColor,
                "hide-hint": "",
                mask: e(Q),
                loading: o.loading,
                onFocus: e(z),
                onBlur: e(L),
                onChange: e(U),
                onInput: e(S)
              }, {
                prefix: c(() => [
                  v("div", _o, [
                    v("div", {
                      class: "FPhoneInput__selectedValue",
                      role: "switch",
                      "aria-checked": e(u),
                      tabindex: "0",
                      onKeydown: k(I, ["enter"]),
                      onClick: N(i, ["stop"]),
                      onBlur: _
                    }, [
                      d(a, {
                        class: "FPhoneInput__selectedFlag",
                        "flag-code": e(n)
                      }, null, 8, ["flag-code"]),
                      d(eo, {
                        class: Co(["FPhoneInput__icon", e(J)]),
                        name: "chevronDown",
                        color: "transparent",
                        size: 12,
                        "stroke-color": o.textPhonePrefixColor,
                        "stroke-width": 2
                      }, null, 8, ["class", "stroke-color"])
                    ], 40, xo),
                    d(ro, {
                      vertical: "",
                      height: "24",
                      margins: !1,
                      color: "neutral--light-5"
                    }),
                    v("span", {
                      class: "FPhoneInput__phonePrefix",
                      role: "switch",
                      "aria-checked": e(u),
                      tabindex: "-1",
                      onKeydown: k(I, ["enter"]),
                      onClick: N(i, ["stop"]),
                      onBlur: _
                    }, go(e(m)), 41, ko)
                  ])
                ]),
                _: 2
              }, 1032, ["modelValue", "color", "text-color", "error-message", "placeholder", "placeholder-text-color", "validate-on-mount", "validation-trigger", "disabled", "rules", "outline-color", "focus-color", "border-color", "focus-border-color", "error-color", "mask", "loading", "onFocus", "onBlur", "onChange", "onInput"])
            ]),
            "option-prefix": c(({ option: i }) => [
              d(a, {
                class: "FPhoneInput__optionPrefix",
                "flag-code": Y(i)
              }, null, 8, ["flag-code"])
            ]),
            _: 1
          }, 8, ["modelValue", "selected-option", "options", "color", "text-color", "disabled"])
        ]),
        _: 1
      }, 16, ["class", "style"]);
    };
  }
});
export {
  Zo as default
};
