import { defineComponent as a, computed as l, openBlock as i, createElementBlock as u, normalizeClass as o, unref as n, normalizeStyle as f, renderSlot as p } from "vue";
const g = /* @__PURE__ */ a({
  __name: "FGridItem",
  props: {
    xxs: { default: null },
    xs: { default: null },
    sm: { default: null },
    md: { default: null },
    lg: { default: null },
    span: { default: 1 }
  },
  setup(m) {
    const e = m;
    function t(s) {
      return s ? String(s) : "";
    }
    const r = l(() => ({
      "FGridItem--xxs": !!e.xxs,
      "FGridItem--xs": !!e.xs,
      "FGridItem--sm": !!e.sm,
      "FGridItem--md": !!e.md,
      "FGridItem--lg": !!e.lg
    })), d = l(
      () => ({
        "--fgrid-item--span": t(e.span),
        "--fgrid-item--span--xxs": t(e.xxs),
        "--fgrid-item--span--xs": t(e.xs),
        "--fgrid-item--span--sm": t(e.sm),
        "--fgrid-item--span--md": t(e.md),
        "--fgrid-item--span--lg": t(e.lg)
      })
    );
    return (s, x) => (i(), u("div", {
      class: o(["FGridItem", n(r)]),
      style: f(n(d))
    }, [
      p(s.$slots, "default")
    ], 6));
  }
});
export {
  g as default
};
