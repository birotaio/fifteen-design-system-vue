import { defineComponent as C, computed as d, ref as u, watch as z, onMounted as _, nextTick as A, openBlock as R, createElementBlock as E, normalizeClass as V, unref as a, normalizeStyle as D, createVNode as K, mergeProps as M, withCtx as v, createElementVNode as b, withKeys as p, renderSlot as y, normalizeProps as h, guardReactiveProps as w, withModifiers as $ } from "vue";
import I from "../vendor/vue3-popper/dist/popper.esm.js";
import { useVModelProxy as O } from "../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../vendor/countup.js/dist/countUp.min.js";
import { onClickOutside as N, useMutationObserver as j } from "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
import { genSize as q } from "../utils/genSize.js";
const Y = /* @__PURE__ */ C({
  __name: "FPopup",
  props: {
    modelValue: { type: Boolean, default: !1 },
    persistent: { type: Boolean, default: !1 },
    width: { default: 300 },
    disabled: { type: Boolean, default: !1 },
    inanimated: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    absolute: { type: Boolean, default: !1 },
    zIndex: { default: 9999 },
    offsetSkid: { default: 0 },
    offsetDistance: { default: 16 },
    preventActivation: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue"],
  setup(x) {
    const e = x, P = d(
      () => ({
        "--FPopup--width": q(e.width)
      })
    ), k = d(
      () => ({
        placement: "bottom-start",
        strategy: e.absolute ? "absolute" : "fixed",
        zIndex: e.zIndex,
        offsetSkid: String(e.offsetSkid),
        offsetDistance: String(e.offsetDistance)
      })
    ), t = O({ props: e }), i = u(), F = d(() => ({
      "FPopup--disabled": e.disabled,
      "FPopup--inanimated": e.inanimated
    })), B = [
      "button:not(.FButton)",
      "[href]",
      "input",
      "select",
      "textarea",
      '[tabindex]:not([tabindex="-1"])'
    ].join(", ");
    function s() {
      if (!t.value || e.disabled) return;
      Array.from(
        i.value?.querySelectorAll(B) ?? []
      ).some((n) => !n.hasAttribute("disabled")) || i.value?.focus();
    }
    async function l() {
      e.disabled || (t.value = !t.value);
    }
    function r() {
      e.disabled || (t.value = !0);
    }
    function f() {
      e.disabled || (t.value = !1);
    }
    z(t, (o) => {
      o && s();
    });
    function S(o) {
      e.preventActivation || (r(), o.preventDefault());
    }
    const c = u();
    N(c, () => {
      e.persistent || (t.value = !1);
    });
    const m = u();
    return _(() => {
      j(
        m,
        () => A(() => window.dispatchEvent(new Event("resize"))),
        { childList: !0 }
      );
    }), (o, n) => (R(), E("div", {
      class: V(["FPopup", a(F)]),
      ref_key: "popupRef",
      ref: c,
      style: D(a(P)),
      role: "button",
      tabindex: "-1"
    }, [
      K(a(I), M({ show: a(t) }, a(k)), {
        content: v(() => [
          b("div", {
            class: "FPopup__content",
            ref_key: "contentRef",
            ref: m,
            role: "listbox",
            tabindex: "-1",
            onClick: s,
            onKeydown: p(s, ["enter"])
          }, [
            y(o.$slots, "default", h(w({ toggle: l, open: r, close: f })))
          ], 544)
        ]),
        default: v(() => [
          b("div", {
            class: "FPopup__activator",
            ref_key: "activatorRef",
            ref: i,
            role: "button",
            tabindex: "-1",
            onKeydown: [
              p(S, ["enter"]),
              n[0] || (n[0] = p($((g) => f(), ["prevent"]), ["esc"]))
            ],
            onClick: n[1] || (n[1] = (g) => !o.preventActivation && l())
          }, [
            y(o.$slots, "activator", h(w({ toggle: l, open: r, close: f })))
          ], 544)
        ]),
        _: 3
      }, 16, ["show"])
    ], 6));
  }
});
export {
  Y as default
};
