import G from "../../components/form/FForm.js";
import V from "../../components/FGrid.js";
/* empty css                      */
import R from "../../components/FButton.js";
/* empty css                        */
import D from "../../components/form/FToggle.js";
/* empty css                             */
import L from "../../components/form/FAutocomplete.js";
/* empty css                                   */
import P from "../../components/form/FTextarea.js";
/* empty css                               */
import w from "../../components/form/FLocaleSelect.js";
/* empty css                                   */
import N from "../../components/form/FCountrySelect.js";
/* empty css                                    */
import q from "../../components/form/FSelect.js";
/* empty css                             */
import U from "../../components/form/FRadioGroup.js";
/* empty css                                 */
import j from "../../components/form/FCreditCardInput.js";
/* empty css                                      */
import z from "../../components/form/FPhoneInput.js";
/* empty css                                 */
import E from "../../components/form/FInput.js";
/* empty css                            */
import J from "../../components/form/FDigitsInput.js";
/* empty css                                  */
import K from "../../components/FGridItem.js";
/* empty css                          */
import M from "../../components/form/FCheckbox.js";
/* empty css                               */
import { defineComponent as Q, computed as W, openBlock as p, createBlock as m, withCtx as n, createVNode as o, unref as a, createTextVNode as s, createCommentVNode as X } from "vue";
import { required as Y } from "@vee-validate/rules";
const Go = /* @__PURE__ */ Q({
  __name: "FsForm",
  props: {
    initialValues: {},
    loading: { type: Boolean },
    withValidation: { type: Boolean }
  },
  setup(u) {
    const c = u, d = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ], _ = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ], f = [
      { label: "Option A", value: "a" },
      { label: "Option B", value: "b" },
      { label: "Option C", value: "c" }
    ], l = W(() => c.withValidation ? [Y] : []);
    return (e, i) => {
      const F = M, t = K, g = J, b = E, C = z, h = j, I = U, $ = q, S = N, H = w, O = P, k = L, v = D, r = R, T = V, y = G;
      return p(), m(y, {
        class: "FsForm",
        "initial-values": e.initialValues
      }, {
        default: n(({ submit: B, reset: A }) => [
          o(T, { gap: "24" }, {
            default: n(() => [
              o(t, { span: "12" }, {
                default: n(() => [
                  o(F, {
                    label: "FCheckbox",
                    name: "FCheckbox",
                    hint: "Hint for FCheckbox"
                  })
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(g, {
                    label: "FDigitsInput",
                    name: "FDigitsInput",
                    hint: "Hint for FDigitsInput",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(b, {
                    label: "FInput",
                    name: "FInput",
                    hint: "Hint for FInput",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(C, {
                    label: "FPhoneInput",
                    name: "FPhoneInput",
                    hint: "Hint for FPhoneInput",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(h, {
                    label: "FCreditCardInput",
                    name: "FCreditCardInput",
                    hint: "Hint for FCreditCardInput",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(I, {
                    label: "FRadioGroup",
                    name: "FRadioGroup",
                    hint: "Hint for FRadioGroup",
                    options: d,
                    rules: a(l)
                  }, null, 8, ["rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o($, {
                    label: "FSelect",
                    name: "FSelect",
                    hint: "Hint for FSelect",
                    options: _,
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(S, {
                    label: "FCountrySelect",
                    name: "FCountrySelect",
                    hint: "Hint for FCountrySelect",
                    "country-codes": ["US", "FR"],
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(H, {
                    label: "FLocaleSelect",
                    name: "FLocaleSelect",
                    hint: "Hint for FLocaleSelect",
                    "locale-codes": ["en", "fr"],
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(O, {
                    label: "FTextarea",
                    name: "FTextarea",
                    hint: "Hint for FTextarea",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(k, {
                    label: "FAutocomplete",
                    name: "FAutocomplete",
                    hint: "Hint for FAutocomplete",
                    options: f,
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, { span: "12" }, {
                default: n(() => [
                  o(v, {
                    label: "FToggle",
                    name: "FToggle",
                    hint: "Hint for FToggle",
                    loading: e.loading,
                    rules: a(l)
                  }, null, 8, ["loading", "rules"])
                ]),
                _: 1
              }),
              o(t, {
                class: "FsForm__actions",
                span: "12"
              }, {
                default: n(() => [
                  o(r, {
                    loading: e.loading,
                    onClick: B
                  }, {
                    default: n(() => i[0] || (i[0] = [
                      s("Submit")
                    ])),
                    _: 2
                  }, 1032, ["loading", "onClick"]),
                  e.loading ? X("", !0) : (p(), m(r, {
                    key: 0,
                    onClick: () => A()
                  }, {
                    default: n(() => i[1] || (i[1] = [
                      s("Reset")
                    ])),
                    _: 2
                  }, 1032, ["onClick"]))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["initial-values"]);
    };
  }
});
export {
  Go as default
};
