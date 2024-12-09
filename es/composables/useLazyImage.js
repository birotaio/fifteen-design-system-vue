import { useIntersectionObserver as i } from "@vueuse/core";
import { ref as n } from "vue";
const u = "400px";
function l(o, a) {
  const t = n(!1), e = n(!1);
  if (typeof window > "u") return { isInit: t, isLoaded: e };
  const s = new Image();
  return s.addEventListener("load", () => {
    e.value = !0;
  }), i(
    o,
    ([{ isIntersecting: r }]) => {
      r && (t.value = !0, e.value = !0, s.src = a);
    },
    {
      rootMargin: u
    }
  ), { isInit: t, isLoaded: e };
}
l.__docgenInfo = { exportName: "useLazyImage", displayName: "useLazyImage", type: 2, props: [{ name: "value", global: !1, description: "", tags: [], required: !0, type: "HTMLElement", declarations: [], schema: { kind: "object", type: "HTMLElement" } }, { name: "__@RefSymbol@57839", global: !1, description: `Type differentiator only.
We need this to be in public d.ts but don't want it to show up in IDE
autocomplete, so we use a private Symbol instead.`, tags: [], required: !0, type: "true", declarations: [], schema: "true" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/composables/useLazyImage.ts" };
export {
  l as useLazyImage
};
