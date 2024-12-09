import { defineComponent as u, openBlock as c, createElementBlock as p, withModifiers as f, renderSlot as d, unref as v } from "vue";
import { useForm as F } from "vee-validate";
const b = /* @__PURE__ */ u({
  __name: "FForm",
  props: {
    initialValues: {}
  },
  emits: ["valid", "error"],
  setup(i, { expose: n, emit: a }) {
    const l = i, t = a, {
      values: o,
      validate: m,
      resetForm: s
    } = F({
      initialValues: l.initialValues
    });
    async function r() {
      const e = await m();
      return e.valid && t("valid", o), e.errors.length && t("error", e.errors), {
        errors: e.errors,
        values: o
      };
    }
    return n({
      reset: s,
      submit: r
    }), (e, _) => (c(), p("form", {
      class: "FForm",
      onSubmit: f(r, ["prevent"])
    }, [
      d(e.$slots, "default", {
        submit: r,
        reset: v(s)
      })
    ], 32));
  }
});
export {
  b as default
};
