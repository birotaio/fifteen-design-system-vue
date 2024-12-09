import { iconsInjectionKeys as a } from "./composables/useIcon.js";
const r = {
  icons: {},
  flagIcons: {},
  creditCardIcons: {}
};
function n(e = r) {
  return {
    install(s) {
      s.provide(a.icons, {
        ...e?.icons
      }), s.provide(a.flags, {
        ...e?.flagIcons
      }), s.provide(a.creditCards, {
        ...e?.creditCardIcons
      });
    }
  };
}
n.__docgenInfo = { exportName: "createFds", displayName: "createFds", type: 2, props: [{ name: "icons", global: !1, description: "", tags: [], required: !1, type: "Icons", declarations: [], schema: { kind: "array", type: "Icons" } }, { name: "flagIcons", global: !1, description: "", tags: [], required: !1, type: "FlagIcons", declarations: [], schema: { kind: "array", type: "FlagIcons" } }, { name: "creditCardIcons", global: !1, description: "", tags: [], required: !1, type: "CreditCardIcons", declarations: [], schema: { kind: "array", type: "CreditCardIcons" } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/createFds.ts" };
export {
  n as createFds
};
