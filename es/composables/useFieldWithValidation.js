import { validate as f, useField as O } from "vee-validate";
import { toRef as q, ref as g, watch as d, getCurrentInstance as x, computed as V } from "vue";
import { useVModelProxy as W } from "../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js";
import "../vendor/countup.js/dist/countUp.min.js";
import "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
function h(e, a) {
  return V(
    () => a.value?.length > 0 ? e?.errorMessage || a.value?.[0] : e.hint ?? ""
  );
}
function k(e, a, y) {
  const o = q(e, "name"), s = [
    ...e?.rules ? [e.rules] : [],
    ...a?.rules ? [a.rules] : []
  ].flat(1);
  if (!o.value) {
    const t = W({ props: e }), i = g(!0), n = g([]);
    let c = !1;
    return d(
      t,
      async () => {
        if (a?.validateOnMount && !c || a?.validateOnModelValueUpdate) {
          const l = await f(t.value, s);
          n.value = l.errors, i.value = l.valid, c = !0;
        }
      },
      { immediate: a?.validateOnMount }
    ), {
      validate: async (l, w = !0) => {
        const F = l instanceof Event ? t.value : l;
        if (w) {
          const v = await f(F ?? t.value, s);
          n.value = v.errors, i.value = v.valid;
        }
      },
      resetValidation: () => {
        n.value = [], i.value = !0;
      },
      value: t,
      hint: h(e, n),
      isValid: i
    };
  }
  const { value: r, handleChange: m, errors: u } = O(o, s, {
    initialValue: e?.modelValue ?? void 0,
    validateOnValueUpdate: !1,
    validateOnMount: a?.validateOnMount
  }), M = x(), p = y || M?.emit;
  d(r, () => {
    p?.("update:modelValue", r.value);
  }), d(
    () => e?.modelValue,
    (t) => {
      m(t, a?.validateOnModelValueUpdate ?? !1);
    }
  );
  const b = V(() => u.value.length === 0);
  return {
    validate: m,
    resetValidation: () => {
      u.value = [];
    },
    value: r,
    hint: h(e, u),
    isValid: b
  };
}
k.__docgenInfo = { exportName: "useFieldWithValidation", displayName: "useFieldWithValidation", type: 2, props: [{ name: "modelValue", global: !1, description: "", tags: [], required: !1, type: "unknown", declarations: [], schema: "unknown" }, { name: "name", global: !1, description: "", tags: [], required: !0, type: "string", declarations: [], schema: "string" }, { name: "rules", global: !1, description: "", tags: [], required: !1, type: "any", declarations: [], schema: "any" }, { name: "hint", global: !1, description: "", tags: [], required: !1, type: "string", declarations: [], schema: "string" }, { name: "errorMessage", global: !1, description: "", tags: [], required: !1, type: "string", declarations: [], schema: "string" }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/composables/useFieldWithValidation.ts" };
export {
  k as useFieldWithValidation
};
