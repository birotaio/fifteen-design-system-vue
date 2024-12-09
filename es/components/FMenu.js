import de from "./FLoader.js";
/* empty css         */
import { defineComponent as ce, computed as E, ref as d, watch as H, onMounted as me, nextTick as ve, openBlock as c, createElementBlock as b, normalizeClass as W, unref as r, normalizeStyle as ye, createVNode as be, mergeProps as C, withCtx as q, createElementVNode as g, withKeys as a, Fragment as ge, renderList as he, renderSlot as w, toDisplayString as I, createCommentVNode as S, createBlock as Me, withModifiers as m, normalizeProps as Oe, guardReactiveProps as ke } from "vue";
import Ce from "../vendor/@fifteen/vue3-popper/dist/popper.esm.js";
import Y from "../vendor/fast-deep-equal/es6/index.js";
import { useVModelProxy as j } from "../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../vendor/countup.js/dist/countUp.min.js";
import { useElementBounding as we, onClickOutside as Se, useMutationObserver as Fe } from "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import { stringify as G, removeDiacritics as P } from "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
import { noop as F } from "../utils/noop.js";
import { getCssColor as _ } from "../utils/getCssColor.js";
import { genSize as J } from "../utils/genSize.js";
const _e = ["aria-selected", "onClick", "onKeydown", "onMouseenter"], xe = { class: "FMenu__option__content" }, Be = {
  key: 0,
  class: "FMenu__option__description"
}, Re = {
  key: 1,
  class: "FMenu__noOption"
}, $e = 800, Ye = /* @__PURE__ */ ce({
  __name: "FMenu",
  props: {
    modelValue: { type: Boolean, default: !1 },
    selectedOption: { default: void 0 },
    options: { default: () => [] },
    preventSelection: { type: Boolean, default: !1 },
    preventSearch: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    emptyText: { default: "" },
    width: { default: 300 },
    color: { default: "primary" },
    textColor: { default: "neutral--light-5" },
    selectedOptionColor: { default: "primary--light-2" },
    selectedOptionTextColor: { default: "primary--dark-2" },
    disabled: { type: Boolean, default: !1 },
    inanimated: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    absolute: { type: Boolean, default: !1 },
    zIndex: { default: 9999 },
    offsetSkid: { default: 0 },
    offsetDistance: { default: 16 },
    optionHeight: { default: 52 },
    preventActivation: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "update:selectedOption", "before-select-option"],
  setup(Q, { expose: U, emit: X }) {
    const o = Q;
    U({
      selectOption: k
    });
    const Z = X, ee = E(
      () => ({
        "--fmenu--width": J(o.width),
        "--fmenu--color": _(o.color),
        "--fmenu--text-color": _(o.textColor),
        "--fmenu--selected-option-color": _(o.selectedOptionColor),
        "--fmenu--selected-option-text-color": _(
          o.selectedOptionTextColor
        ),
        "--fmenu-option-height": J(o.optionHeight)
      })
    ), te = E(
      () => ({
        placement: "bottom-start",
        strategy: o.absolute ? "absolute" : "fixed",
        zIndex: o.zIndex,
        offsetSkid: String(o.offsetSkid),
        offsetDistance: String(o.offsetDistance)
      })
    ), l = j({ props: o }), M = j({
      props: o,
      propName: "selectedOption"
    }), K = d([]), x = d(), oe = E(() => ({
      "FMenu--disabled": o.disabled,
      "FMenu--inanimated": o.inanimated
    })), f = d(-1), B = d(!1);
    async function D() {
      o.disabled || (l.value = !l.value);
    }
    const ne = [
      "button:not(.FButton)",
      "[href]",
      "input",
      "select",
      "textarea",
      '[tabindex]:not([tabindex="-1"])'
    ].join(", ");
    function R() {
      if (!l.value || o.disabled) return;
      Array.from(
        x.value?.querySelectorAll(ne) ?? []
      ).some((e) => !e.hasAttribute("disabled")) || x.value?.focus();
    }
    function L() {
      o.disabled || (l.value = !0);
    }
    function $() {
      o.disabled || (l.value = !1);
    }
    H(l, (t) => {
      t ? R() : v(-1);
    }), H(
      () => o.options,
      () => {
        v(0);
      }
    );
    function v(t) {
      f.value = t;
    }
    function h(t) {
      return o.options.findIndex(
        (e) => Y(e.value, M.value)
      ) === t;
    }
    function se(t) {
      return {
        "FMenu__option--preselected": f.value === t,
        "FMenu__option--selected": h(t)
      };
    }
    function z(t) {
      B.value || v(t);
    }
    function le(t) {
      switch (t) {
        case "first":
          return 0;
        case "last":
          return o.options.length - 1;
        case "prev":
          return f.value - 1 < 0 ? o.options.length - 1 : f.value - 1;
        case "next":
          return f.value + 1 > o.options.length - 1 ? 0 : f.value + 1;
      }
    }
    function y(t) {
      if (!l.value || !o.options.length) return;
      B.value = !0;
      const e = le(t);
      T(e), v(e);
    }
    const O = d(), {
      top: re,
      bottom: ie,
      height: ae
    } = we(O);
    function T(t) {
      const e = K.value[t], {
        top: i,
        bottom: n,
        height: s
      } = e.getBoundingClientRect();
      if (i < re.value)
        return O.value.scrollTo(0, t * (s + 4));
      if (n > ie.value)
        return O.value.scrollTo(
          0,
          (t + 1) * (s + 4) - ae.value + 12
        );
    }
    function k(t) {
      if (!o.options.length || o.disabled) return;
      if (!t && f.value === -1) {
        if (M.value) {
          const i = o.options.findIndex(
            (n) => Y(n.value, M.value)
          );
          v(i), T(i);
        }
        return;
      }
      const e = t ?? o.options[f.value];
      Z("before-select-option", e.value), !o.preventSelection && (M.value = e.value, $());
    }
    let p = "", A;
    function ue(t) {
      if (t.stopPropagation(), !l.value || o.preventSearch) return;
      p = P(
        p + t.key
      ).toLocaleLowerCase();
      function e(s) {
        const u = P(s.label.toLowerCase()), pe = P(G(s.value).toLowerCase());
        return u.startsWith(p) || pe.startsWith(p);
      }
      A = setTimeout(() => {
        clearTimeout(A), p = "";
      }, $e);
      const i = o.options.findIndex(e), n = o.options.filter(e).length;
      if (i === -1) {
        p = "";
        return;
      }
      T(i), v(i), n === 1 && (p = "");
    }
    function fe(t) {
      o.preventActivation || (L(), t.preventDefault()), k();
    }
    const V = d();
    Se(V, () => {
      o.persistent || (l.value = !1);
    });
    const N = d();
    return me(() => {
      Fe(
        N,
        () => ve(() => window.dispatchEvent(new Event("resize"))),
        { childList: !0 }
      );
    }), (t, e) => {
      const i = de;
      return c(), b("div", {
        class: W(["FMenu", r(oe)]),
        ref_key: "menuRef",
        ref: V,
        style: ye(r(ee)),
        role: "button",
        tabindex: "-1",
        onKeydown: ue
      }, [
        be(r(Ce), C({ show: r(l) }, r(te)), {
          content: q(() => [
            g("div", {
              class: "FMenu__content",
              ref_key: "contentRef",
              ref: N,
              role: "listbox",
              tabindex: "-1",
              onClick: R,
              onKeydown: a(R, ["enter"]),
              onMousemove: e[12] || (e[12] = (n) => B.value = !1)
            }, [
              t.options.length ? (c(), b("div", {
                key: 0,
                class: "FMenu__optionsMenu",
                ref_key: "menuOptionsRef",
                ref: O
              }, [
                (c(!0), b(ge, null, he(t.options, (n, s) => (c(), b("div", {
                  class: W(["FMenu__option", se(s)]),
                  ref_for: !0,
                  ref_key: "optionRefs",
                  ref: K,
                  key: r(G)(n.value),
                  role: "option",
                  tabindex: "-1",
                  "aria-selected": h(s),
                  onClick: (u) => k(n),
                  onKeydown: a((u) => k(n), ["enter"]),
                  onMouseenter: (u) => z(s),
                  onMouseleave: e[9] || (e[9] = (u) => z(-1)),
                  onFocus: e[10] || (e[10] = //@ts-ignore
                  (...u) => r(F) && r(F)(...u)),
                  onFocusout: e[11] || (e[11] = //@ts-ignore
                  (...u) => r(F) && r(F)(...u))
                }, [
                  w(t.$slots, "option-prefix", C({ ref_for: !0 }, { option: n, index: s, isSelected: h(s) })),
                  g("div", xe, [
                    w(t.$slots, "option", C({ ref_for: !0 }, { option: n, index: s, isSelected: h(s) }), () => [
                      g("span", null, I(n.label), 1)
                    ]),
                    n.description ? (c(), b("span", Be, I(n.description), 1)) : S("", !0)
                  ]),
                  e[13] || (e[13] = g("div", { class: "FMenu__option__spacer" }, null, -1)),
                  w(t.$slots, "option-suffix", C({ ref_for: !0 }, { option: n, index: s, isSelected: h(s) }))
                ], 42, _e))), 128))
              ], 512)) : S("", !0),
              t.options.length === 0 ? (c(), b("div", Re, [
                t.loading ? (c(), Me(i, {
                  key: 0,
                  class: "FMenu__loader",
                  height: "20"
                })) : S("", !0),
                g("span", null, I(t.emptyText), 1)
              ])) : S("", !0)
            ], 544)
          ]),
          default: q(() => [
            g("div", {
              class: "FMenu__activator",
              ref_key: "activatorRef",
              ref: x,
              role: "button",
              tabindex: "-1",
              onKeydown: [
                e[0] || (e[0] = a(m((n) => y("next"), ["prevent"]), ["down"])),
                e[1] || (e[1] = a(m((n) => y("prev"), ["prevent"]), ["up"])),
                e[2] || (e[2] = a(m((n) => y("first"), ["prevent"]), ["home"])),
                e[3] || (e[3] = a(m((n) => y("last"), ["prevent"]), ["end"])),
                e[4] || (e[4] = a(m((n) => {
                  y("next"), r(l) && n.preventDefault();
                }, ["exact"]), ["tab"])),
                e[5] || (e[5] = a(m((n) => {
                  y("prev"), r(l) && n.preventDefault();
                }, ["shift"]), ["tab"])),
                e[6] || (e[6] = a((n) => fe(n), ["enter"])),
                e[7] || (e[7] = a(m((n) => $(), ["prevent"]), ["esc"]))
              ],
              onClick: e[8] || (e[8] = (n) => !t.preventActivation && D())
            }, [
              w(t.$slots, "activator", Oe(ke({ toggleMenu: D, openMenu: L, closeMenu: $ })))
            ], 544)
          ]),
          _: 3
        }, 16, ["show"])
      ], 38);
    };
  }
});
export {
  Ye as default
};
