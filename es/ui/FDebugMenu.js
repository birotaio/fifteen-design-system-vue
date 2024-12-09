import pe from "../components/FExpandable.js";
/* empty css                         */
import fe from "../components/form/FSelect.js";
/* empty css                          */
import ve from "../components/form/FCheckbox.js";
/* empty css                            */
import ge from "../components/FButton.js";
/* empty css                     */
import me from "../components/FIcon.js";
/* empty css                   */
import { defineComponent as he, ref as v, computed as T, watch as W, openBlock as s, createBlock as D, unref as n, normalizeClass as R, isRef as be, normalizeStyle as P, withCtx as c, createVNode as d, createElementVNode as b, toDisplayString as M, Transition as _e, createElementBlock as S, createCommentVNode as V, Fragment as Q, renderList as Z, createTextVNode as Ce, withModifiers as j } from "vue";
import { useVModelProxy as ye } from "../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../vendor/countup.js/dist/countUp.min.js";
import { useElementSize as I, useLocalStorage as ke, useDraggable as $e, useDebounceFn as Me, watchOnce as Fe } from "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
/* empty css                      */
import we from "../components/FCard.js";
/* empty css                   */
import { genSize as A } from "../utils/genSize.js";
import "../utils/getCssColor.js";
import { arrowExpand as De, printedCircuitBoard as Ve, close as Ee } from "../.generated/icons.js";
import { registerIcons as Se } from "../composables/useIcon.js";
import "../composables/useLazyImage.js";
/* empty css                    */
/* empty css                     */
/* empty css                             */
/* empty css                   */
/* empty css                          */
/* empty css                      */
/* empty css                            */
/* empty css                             */
import "vee-validate";
/* empty css                   */
/* empty css                       */
/* empty css                       */
/* empty css                   */
/* empty css                     */
/* empty css                             */
/* empty css                          */
/* empty css                       */
/* empty css                       */
/* empty css                             */
/* empty css                   */
import "xss";
/* empty css                          */
import He from "../components/FPopup.js";
/* empty css                    */
/* empty css                         */
import Te from "../components/form/FInput.js";
/* empty css                         */
import "../utils/credit-cards.js";
import "../composables/useFieldWithValidation.js";
/* empty css                                   */
/* empty css                               */
import "libphonenumber-js";
/* empty css                              */
/* empty css                         */
/* empty css                              */
/* empty css                                 */
/* empty css                                */
/* empty css                            */
import "@vee-validate/rules";
/* empty css                              */
/* empty css                                */
/* empty css                          */
import "../composables/useSmartLink.js";
import "../createFds.js";
const We = { class: "FDebugMenu__header" }, Re = { class: "FDebugMenu__header__controls" }, Be = ["onClick"], ze = { class: "FDebugMenu__item__text" }, Ke = { class: "FDebugMenu__item__title" }, Ue = { class: "FDebugMenu__item__description" }, Le = { key: 4 }, a = 8, ll = /* @__PURE__ */ he({
  __name: "FDebugMenu",
  props: {
    modelValue: { type: Boolean, default: !1 },
    config: { default: () => [] },
    color: { default: "secondary" },
    textColor: { default: "neutral--light-4" },
    controlColor: { default: "primary" },
    maxWidth: { default: 460 },
    snapMode: { default: "edges" },
    name: { default: "Debug menu" }
  },
  emits: ["update:modelValue"],
  setup(ee) {
    const _ = ee;
    Se("icons", {
      arrowExpand: De,
      printedCircuitBoard: Ve,
      close: Ee
    });
    const X = v(null), Y = T(() => X.value?.$el), B = v(!1), z = v(!1), C = v(!1), K = v(null), g = ye({ props: _ });
    W(g, (e) => e && (C.value = !1));
    const q = v(null), { height: oe } = I(q);
    W(oe, () => window.dispatchEvent(new Event("resize")));
    const F = ke("debug-menu", {
      position: { x: a, y: a },
      values: {}
    });
    function le() {
      for (const [e, o] of Object.entries(
        F.value?.values ?? {}
      ))
        _.config.forEach((i) => {
          i.items.forEach((t) => {
            e === t.localStorageKey && (t.type === "toggle" && G(o, t), (t.type === "input" || t.type === "select") && L(o, t));
          });
        });
    }
    le();
    const { width: E, height: w } = I(Y), { x: u, y: r } = $e(Y, {
      initialValue: {
        x: F.value.position.x,
        y: F.value.position.y
      },
      onStart: (e, o) => {
        if (o.target?.closest(".FDebugMenu__content"))
          return !1;
      },
      onMove: () => {
        g.value = !1, B.value = !0;
      },
      onEnd: () => U(!0)
    });
    function H(e, o) {
      return e < a ? a : o - a < e ? o - a : e;
    }
    function x(e, o) {
      return e < o / 2 ? a : o - a;
    }
    function U(e) {
      switch (e && (z.value = !0, setTimeout(() => z.value = !1, 200)), _.snapMode) {
        case "edges":
          const o = Math.PI, i = u.value / window.innerWidth - 0.5, t = 0.5 - r.value / window.innerHeight, h = Math.atan2(t, i);
          -o / 4 < h && h < o / 4 ? u.value = window.innerWidth - E.value - a : o / 4 < h && h < 3 * o / 4 ? r.value = a : -o / 4 > h && h > -3 * o / 4 ? r.value = window.innerHeight - w.value - a : u.value = a, u.value = H(u.value, window.innerWidth - E.value), r.value = H(r.value, window.innerHeight - w.value);
          break;
        case "free":
          u.value = H(u.value, window.innerWidth - E.value), r.value = H(r.value, window.innerHeight - w.value);
          break;
        case "corners":
          u.value = x(u.value, window.innerWidth - E.value), r.value = x(r.value, window.innerHeight - w.value);
          break;
      }
    }
    addEventListener(
      "resize",
      Me(() => U(!0), 300)
    ), Fe([E, w], () => U(!1)), W([u, r], () => {
      F.value.position = { x: u.value, y: r.value };
    });
    const re = T(
      () => Math.max(r.value, window.innerHeight - w.value - r.value) - a * 2
    );
    function te() {
      if (B.value) {
        B.value = !1;
        return;
      }
      g.value = !g.value;
    }
    function ne(e) {
      return {
        "FDebugMenu__item--disabled": p(e.disabled),
        "FDebugMenu__item--clickable": e.type === "toggle",
        "FDebugMenu__item--block": e.type === "content"
      };
    }
    function ae(e) {
      e.disabled || e.type === "toggle" && (e.ref.value = !e.ref.value);
    }
    function G(e, o) {
      o.ref.value = e ?? !1, o.localStorageKey && (F.value.values[o.localStorageKey] = o.ref.value);
    }
    function L(e, o) {
      e instanceof Event ? o.ref.value = e.target.value : o.ref.value = e ?? "", o.localStorageKey && (F.value.values[o.localStorageKey] = o.ref.value);
    }
    function p(e, o) {
      return n(e) ?? o;
    }
    function J(e) {
      return { "--FDebugMenu--inputWidth": A(e.width) };
    }
    const m = v(null), N = v(!1), O = v(null);
    W(m, () => {
      O.value && clearTimeout(O.value), m.value && (O.value = setTimeout(() => m.value = null, 5e3));
    });
    async function ue(e, o) {
      if (!(e.disabled || e.type !== "trigger"))
        try {
          K.value = o;
          const i = await e.action();
          N.value = !1, m.value = i ?? null;
        } catch (i) {
          N.value = !0, m.value = i.message;
        } finally {
          K.value = null;
        }
    }
    const ie = T(() => ({
      "FDebugMenu--transition": z.value,
      "FDebugMenu--full": C.value
    })), se = T(() => ({
      left: `${u.value}px`,
      top: `${r.value}px`,
      "--FDebugMenu--groupColor": `var(--color--${_.controlColor}--light-2)`,
      "--FDebugMenu--controlColor": `var(--color--${_.controlColor})`,
      "--FDebugMenu--controlColor--rgb": `var(--color--${_.controlColor}--rgb)`,
      "--FDebugMenu--maxWidth": C.value ? "none" : A(_.maxWidth),
      "--FDebugMenu--maxHeight": C.value ? "none" : A(re.value)
    }));
    return (e, o) => {
      const i = me, t = ge, h = ve, ce = fe, de = pe;
      return s(), D(n(He), {
        class: R(["FDebugMenu", n(ie)]),
        ref_key: "popupRef",
        ref: X,
        modelValue: n(g),
        "onUpdate:modelValue": o[6] || (o[6] = (f) => be(g) ? g.value = f : null),
        style: P(n(se)),
        "offset-distance": 8,
        "prevent-activation": ""
      }, {
        activator: c(() => [
          d(t, {
            class: "FDebugMenu__activator",
            icon: "",
            static: "",
            color: e.color,
            "text-color": e.textColor,
            onClick: te
          }, {
            default: c(() => [
              d(i, { name: "printedCircuitBoard" })
            ]),
            _: 1
          }, 8, ["color", "text-color"])
        ]),
        default: c(() => [
          d(n(we), {
            class: "FDebugMenu__content",
            ref_key: "contentRef",
            ref: q,
            color: e.color,
            "text-color": e.textColor
          }, {
            default: c(() => [
              b("div", We, [
                b("h5", null, M(e.name), 1),
                b("div", Re, [
                  d(t, {
                    icon: "",
                    ghost: "",
                    background: e.textColor,
                    color: e.textColor,
                    onClick: o[0] || (o[0] = (f) => C.value = !n(C))
                  }, {
                    default: c(() => [
                      d(i, {
                        class: R(["FDebugMenu__header__icon", n(C) ? "FDebugMenu__header__icon--reduce" : "FDebugMenu__header__icon--expand"]),
                        name: "arrowExpand"
                      }, null, 8, ["class"])
                    ]),
                    _: 1
                  }, 8, ["background", "color"]),
                  d(t, {
                    icon: "",
                    ghost: "",
                    background: e.textColor,
                    color: e.textColor,
                    onClick: o[1] || (o[1] = (f) => g.value = !1)
                  }, {
                    default: c(() => [
                      d(i, { name: "close" })
                    ]),
                    _: 1
                  }, 8, ["background", "color"])
                ])
              ]),
              d(_e, { name: "FDebugMenu__message--transition" }, {
                default: c(() => [
                  n(m) ? (s(), S("div", {
                    key: 0,
                    class: R(["FDebugMenu__message", { "FDebugMenu__message--error": n(N) }])
                  }, [
                    b("span", null, M(n(m)), 1),
                    d(t, {
                      icon: "",
                      ghost: "",
                      background: e.textColor,
                      color: e.textColor,
                      size: "tiny",
                      onClick: o[2] || (o[2] = (f) => m.value = null)
                    }, {
                      default: c(() => [
                        d(i, { name: "close" })
                      ]),
                      _: 1
                    }, 8, ["background", "color"])
                  ], 2)) : V("", !0)
                ]),
                _: 1
              }),
              (s(!0), S(Q, null, Z(e.config, (f, y) => (s(), D(de, {
                key: f.title,
                "model-value": f.expanded,
                "icon-scale": 0.5,
                "title-vertical-padding": 8,
                gap: 8,
                "text-hover-color": e.controlColor,
                "no-isolation": ""
              }, {
                title: c(() => [
                  b("h6", null, M(f.title), 1)
                ]),
                default: c(() => [
                  (s(!0), S(Q, null, Z(f.items, (l, k) => (s(), S("div", {
                    class: R(["FDebugMenu__item", ne(l)]),
                    key: `${y}-${k}`,
                    onClick: ($) => ae(l)
                  }, [
                    b("div", ze, [
                      b("div", Ke, M(l.title), 1),
                      b("div", Ue, M(l.description), 1)
                    ]),
                    l.type === "trigger" ? (s(), D(t, {
                      key: `${y}-${k}`,
                      disabled: p(l.disabled),
                      color: e.controlColor,
                      "hover-color": `${e.controlColor}--light-1`,
                      loading: n(K) === `${y}-${k}`,
                      onClick: ($) => ue(l, `${y}-${k}`)
                    }, {
                      default: c(() => [
                        Ce(M(l.triggerText), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "color", "hover-color", "loading", "onClick"])) : V("", !0),
                    l.type === "toggle" ? (s(), D(h, {
                      key: `${y}-${k}`,
                      "model-value": l.ref.value,
                      disabled: p(l.disabled),
                      "hover-border-color": `${e.controlColor}--light-1`,
                      "checked-border-color": `${e.controlColor}--light-1`,
                      "checked-color": e.controlColor,
                      "onUpdate:modelValue": ($) => G($, l),
                      onClick: o[3] || (o[3] = j(() => {
                      }, ["stop"]))
                    }, null, 8, ["model-value", "disabled", "hover-border-color", "checked-border-color", "checked-color", "onUpdate:modelValue"])) : V("", !0),
                    l.type === "input" ? (s(), D(n(Te), {
                      key: `${y}-${k}`,
                      style: P(J(l)),
                      "model-value": l.ref.value,
                      disabled: p(l.disabled),
                      "hover-border-color": `${e.controlColor}--light-1`,
                      "checked-border-color": `${e.controlColor}--light-1`,
                      placeholder: p(l.placeholder, ""),
                      "outline-color": e.controlColor,
                      "focus-color": `${e.controlColor}--light-2`,
                      color: `${e.controlColor}--light-2`,
                      onChange: ($) => L($, l),
                      onClick: o[4] || (o[4] = j(() => {
                      }, ["stop"]))
                    }, null, 8, ["style", "model-value", "disabled", "hover-border-color", "checked-border-color", "placeholder", "outline-color", "focus-color", "color", "onChange"])) : V("", !0),
                    l.type === "select" ? (s(), D(ce, {
                      key: `${y}-${k}`,
                      style: P(J(l)),
                      "model-value": l.ref.value,
                      disabled: p(l.disabled),
                      "hover-border-color": `${e.controlColor}--light-1`,
                      "checked-border-color": `${e.controlColor}--light-1`,
                      "options-menu-color": `${e.controlColor}--light-2`,
                      placeholder: p(l.placeholder, ""),
                      "outline-color": e.controlColor,
                      "focus-color": `${e.controlColor}--light-2`,
                      color: `${e.controlColor}--light-2`,
                      options: p(l.options),
                      clearable: p(l.clearable),
                      size: "small",
                      "onUpdate:modelValue": ($) => L($, l),
                      onClick: o[5] || (o[5] = j(() => {
                      }, ["stop"]))
                    }, null, 8, ["style", "model-value", "disabled", "hover-border-color", "checked-border-color", "options-menu-color", "placeholder", "outline-color", "focus-color", "color", "options", "clearable", "onUpdate:modelValue"])) : V("", !0),
                    l.type === "content" ? (s(), S("code", Le, M(l.content), 1)) : V("", !0)
                  ], 10, Be))), 128))
                ]),
                _: 2
              }, 1032, ["model-value", "text-hover-color"]))), 128))
            ]),
            _: 1
          }, 8, ["color", "text-color"])
        ]),
        _: 1
      }, 8, ["modelValue", "style", "class"]);
    };
  }
});
export {
  ll as default
};
