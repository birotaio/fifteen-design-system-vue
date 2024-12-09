import N from "./FField.js";
/* empty css        */
import _ from "../FButton.js";
/* empty css          */
import S from "../FIcon.js";
/* empty css        */
import { defineComponent as A, ref as U, computed as n, watch as w, openBlock as r, createBlock as b, mergeProps as $, unref as o, withCtx as h, createElementVNode as d, createVNode as E, createCommentVNode as H, toDisplayString as F, createElementBlock as y, Fragment as O, renderList as R } from "vue";
import { mimes as j, size as D } from "@vee-validate/rules";
import { upload as L } from "../../.generated/icons.js";
import { registerIcons as P } from "../../composables/useIcon.js";
import { useFieldWithValidation as W } from "../../composables/useFieldWithValidation.js";
import { useInputEventBindings as q } from "../../composables/useInputEventBindings.js";
const G = { class: "FFileUpload__content" }, J = ["id", "name", "multiple", "disabled", "accept", "aria-label"], K = { class: "FFileUpload__fileNames" }, re = /* @__PURE__ */ A({
  __name: "FFileUpload",
  props: {
    multiple: { type: Boolean, default: !1 },
    allowedMimeTypes: { default: () => [] },
    maximumSize: { default: 5e4 },
    iconName: { default: "upload" },
    size: { default: "medium" },
    buttonText: { default: "" },
    fieldset: { type: Boolean },
    name: { default: "defaultName" },
    label: {},
    labelTextColor: {},
    hint: {},
    hintTextColor: {},
    hideHint: { type: Boolean },
    hintIcon: {},
    modelValue: { default: null },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean },
    color: { default: "neutral--light-3" },
    textColor: { default: "neutral--dark-4" },
    errorColor: { default: "danger" },
    validationTrigger: { default: "change" },
    rules: { type: [Function, Array], default: () => [] },
    errorMessage: { default: "" },
    validateOnMount: { type: Boolean, default: !1 },
    focusColor: {},
    borderColor: {}
  },
  emits: ["update:modelValue", "change", "files"],
  setup(C, { emit: T }) {
    const l = C;
    P("icons", { upload: L });
    const m = U(), {
      isValid: v,
      hint: k,
      value: i,
      validate: z
    } = W(l, {
      validateOnMount: l?.validateOnMount,
      rules: [p]
    }), u = T;
    function p(e) {
      const t = l.allowedMimeTypes.length > 0 ? j(e, l.allowedMimeTypes) : !0, s = D(e, { size: l.maximumSize });
      return t && s;
    }
    const f = n(
      () => i.value ? Array.isArray(i.value) ? i.value : [i.value] : []
    );
    w(f, (e) => {
      e.length > 0 && p(e) && u("files", e);
    });
    const { handleChange: c } = q(
      z,
      l.validationTrigger,
      u
    ), B = n(
      () => l.disabled ? "neutral--dark-1" : v.value ? l.hintTextColor : l.errorColor
    ), V = n(
      () => l.disabled ? "neutral--dark-1" : l.textColor
    ), I = n(() => ({
      "FFileUpload--disabled": l.disabled
    }));
    return (e, t) => {
      const s = S, g = _, M = N;
      return r(), b(M, $({
        class: ["FFileUpload", o(I)]
      }, { name: e.name, label: e.label, labelTextColor: e.labelTextColor, hint: o(k), hideHint: e.hideHint, hintTextColor: o(B), hintIcon: e.hintIcon }), {
        default: h(() => [
          d("div", G, [
            d("input", {
              id: e.name,
              ref_key: "underlyingFileInputRef",
              ref: m,
              name: e.name,
              multiple: e.multiple,
              disabled: e.disabled,
              accept: e.allowedMimeTypes?.join(","),
              "aria-label": e.buttonText,
              type: "file",
              onChange: t[0] || (t[0] = //@ts-ignore
              (...a) => o(c) && o(c)(...a))
            }, null, 40, J),
            E(g, {
              size: e.size,
              disabled: e.disabled,
              background: e.color,
              color: e.textColor,
              loading: e.loading,
              static: "",
              onClick: t[1] || (t[1] = (a) => o(m)?.click())
            }, {
              default: h(() => [
                e.iconName ? (r(), b(s, {
                  key: 0,
                  name: e.iconName,
                  color: o(V)
                }, null, 8, ["name", "color"])) : H("", !0),
                d("span", null, F(e.buttonText), 1)
              ]),
              _: 1
            }, 8, ["size", "disabled", "background", "color", "loading"]),
            d("ul", K, [
              (r(!0), y(O, null, R(o(f), (a) => (r(), y("li", {
                key: a.name
              }, F(a?.name ?? ""), 1))), 128))
            ])
          ])
        ]),
        _: 1
      }, 16, ["class"]);
    };
  }
});
export {
  re as default
};
