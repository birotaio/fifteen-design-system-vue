import { defineComponent as E, ref as b, computed as n, openBlock as F, createElementBlock as y, normalizeClass as c, unref as o, normalizeStyle as C, createElementVNode as a, withKeys as p, withModifiers as f, renderSlot as m } from "vue";
import { useVModelProxy as w } from "../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../vendor/countup.js/dist/countUp.min.js";
import { useElementSize as S } from "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
import { genSize as i } from "../utils/genSize.js";
import { getCssColor as u } from "../utils/getCssColor.js";
const k = ["aria-checked", "onKeydown"], H = { class: "FExpandable__container" }, T = /* @__PURE__ */ E({
  __name: "FExpandable",
  props: {
    modelValue: { type: Boolean, default: !1 },
    gap: { default: 24 },
    titleVerticalPadding: { default: 16 },
    iconScale: { default: 1 },
    withHoverAnimation: { type: Boolean, default: !1 },
    hoverColor: { default: "primary" },
    textHoverColor: { default: "neutral--light-5" },
    noIsolation: { type: Boolean, default: !1 }
  },
  setup(h) {
    const e = h, t = w({ props: e }), r = b(), { height: g } = S(r), v = n(() => ({
      "FExpandable--toggled": t.value
    })), x = n(() => ({
      "FExpandable__title--withHover": e.withHoverAnimation
    })), _ = n(
      () => ({
        "--FExpandable--container-height": i(g.value),
        "--FExpandable--container-gap": i(e.gap),
        "--FExpandable--title-vertical-padding": i(
          e.titleVerticalPadding
        ),
        "--FExpandable--icon-scale": String(e.iconScale),
        "--FExpandable--hover-color": u(e.hoverColor),
        "--FExpandable--text-hover-color": u(e.textHoverColor),
        "--FExpandable--isolation": e.noIsolation ? "auto" : "isolate"
      })
    );
    function l() {
      t.value = !t.value;
    }
    return (s, d) => (F(), y("div", {
      class: c(["FExpandable", o(v)]),
      style: C(o(_))
    }, [
      a("div", {
        class: c(["FExpandable__title", o(x)]),
        tabindex: "0",
        role: "switch",
        "aria-checked": o(t),
        onClick: l,
        onKeydown: [
          p(f(l, ["stop"]), ["enter"]),
          p(f(l, ["prevent"]), ["space"])
        ]
      }, [
        m(s.$slots, "title"),
        d[0] || (d[0] = a("div", { class: "FExpandable__title__highlighter" }, null, -1))
      ], 42, k),
      a("div", H, [
        a("div", {
          class: "FExpandable__content",
          ref_key: "contentRef",
          ref: r
        }, [
          m(s.$slots, "default")
        ], 512)
      ])
    ], 6));
  }
});
export {
  T as default
};
