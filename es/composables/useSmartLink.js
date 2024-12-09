import { useRoute as u } from "vue-router";
import { computed as r } from "vue";
function g(e) {
  const n = u(), s = r(
    () => !!e.location && /^(https?:\/\/|mailto:|tel:)/.test(e.location)
  ), o = r(
    () => !!e.location && (s.value || /^#/.test(e.location))
  );
  return {
    isExternal: s,
    isHref: o,
    getProps: (t) => {
      const { location: i, replace: l, ...a } = e;
      return i ? o.value ? {
        ...a,
        hreflang: e.hreflang,
        href: i,
        target: e.target ?? (s.value ? "_blank" : null)
      } : {
        ...a,
        hreflang: e.hreflang,
        href: t
      } : a;
    },
    getClasses: (t) => {
      const i = e.activeClass ?? "link--active", l = e.exactActiveClass ?? "link--exactActive", a = t && n?.path.startsWith(t) || !1, c = t === n?.path.replace(/\/$/, "");
      return {
        [i]: a,
        [l]: c
      };
    }
  };
}
g.__docgenInfo = { exportName: "useSmartLink", displayName: "useSmartLink", type: 2, props: [{ name: "location", global: !1, description: "Target location or url", tags: [], required: !1, type: "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric", declarations: [], schema: { kind: "enum", type: "string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric", schema: ["string", { kind: "object", type: "RouteLocationAsRelativeGeneric" }, { kind: "object", type: "RouteLocationAsPathGeneric" }] } }, { name: "target", global: !1, description: "Link target, overrides the one computed automatically on location", tags: [], required: !1, type: "string", declarations: [], schema: "string" }, { name: "hreflang", global: !1, description: "Link hreflang, overrides the one computed automatically on location", tags: [], required: !1, type: "string", declarations: [], schema: "string" }, { name: "activeClass", global: !1, description: "RouterLink-like active class, defaults to 'link--active'", tags: [], required: !1, type: "string", declarations: [], schema: "string" }, { name: "exactActiveClass", global: !1, description: "RouterLink-like exact active class, defaults to 'link--exactActive'", tags: [], required: !1, type: "string", declarations: [], schema: "string" }, { name: "replace", global: !1, description: "RouterLink replace prop", tags: [], required: !1, type: "boolean", declarations: [], schema: { kind: "enum", type: "boolean", schema: ["false", "true"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/composables/useSmartLink.ts" };
export {
  g as useSmartLink
};
