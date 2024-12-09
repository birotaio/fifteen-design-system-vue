import { isRef as n, toValue as f, watch as u } from "vue";
function l(e, ...t) {
  const { refOrGetters: r } = t.reduce(
    (o, s) => (typeof s == "function" || n(s) ? o.refOrGetters.push(s) : o.refOrGetters.push(() => s), o),
    { refOrGetters: [] }
  );
  console[e](...r.map(f)), u(r, (o) => {
    console[e](...o);
  });
}
Object.keys(console).reduce((e, t) => (t !== "Console" && (e[t] = (...r) => l(t, ...r)), e), {});
export {
  l as consoleWatchFn
};
