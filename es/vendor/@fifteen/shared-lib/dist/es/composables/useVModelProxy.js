import { shallowRef as v, getCurrentInstance as p, watch as V, computed as g } from "vue";
function h(s) {
  const {
    props: r,
    propName: o = "modelValue",
    defaultValue: l,
    eventName: c,
    internalRef: d,
    transform: u,
    emit: f
  } = s, e = d ?? v(l ?? r[o]), a = p(), t = f || a?.emit, i = c || `update:${String(o)}`;
  return l != null && t?.(i, e.value), V(
    () => r[o],
    (n) => e.value = n
  ), g({
    get() {
      return e.value;
    },
    set: (n) => {
      const m = typeof u == "function" ? u(n) : n;
      e.value = m, t?.(i, m);
    }
  });
}
export {
  h as useVModelProxy
};
