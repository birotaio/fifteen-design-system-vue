import h from "../../../uuid/dist/esm-browser/v4.js";
const { addons: E } = __STORYBOOK_MODULE_PREVIEW_API__, { ImplicitActionsDuringRendering: T } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__, { global: _ } = __STORYBOOK_MODULE_GLOBAL__;
var m = "storybook/actions", A = `${m}/action-event`, v = { depth: 10, clearOnStoryChange: !0, limit: 50 }, u = (e, t) => {
  let r = Object.getPrototypeOf(e);
  return !r || t(r) ? r : u(r, t);
}, S = (e) => !!(typeof e == "object" && e && u(e, (t) => /^Synthetic(?:Base)?Event$/.test(t.constructor.name)) && typeof e.persist == "function"), b = (e) => {
  if (S(e)) {
    let t = Object.create(e.constructor.prototype, Object.getOwnPropertyDescriptors(e));
    t.persist();
    let r = Object.getOwnPropertyDescriptor(t, "view"), n = r?.value;
    return typeof n == "object" && n?.constructor.name === "Window" && Object.defineProperty(t, "view", { ...r, value: Object.create(n.constructor.prototype) }), t;
  }
  return e;
}, w = () => typeof crypto == "object" && typeof crypto.getRandomValues == "function" ? h() : Date.now().toString(36) + Math.random().toString(36).substring(2);
function p(e, t = {}) {
  let r = { ...v, ...t }, n = function(...o) {
    if (t.implicit) {
      let O = ("__STORYBOOK_PREVIEW__" in _ ? _.__STORYBOOK_PREVIEW__ : void 0)?.storyRenders.find((c) => c.phase === "playing" || c.phase === "rendering");
      if (O) {
        let c = !window?.FEATURES?.disallowImplicitActionsInRenderV8, d = new T({ phase: O.phase, name: e, deprecated: c });
        if (c) console.warn(d);
        else throw d;
      }
    }
    let i = E.getChannel(), s = w(), a = 5, l = o.map(b), R = o.length > 1 ? l : l[0], f = { id: s, count: 0, data: { name: e, args: R }, options: { ...r, maxDepth: a + (r.depth || 3), allowFunction: r.allowFunction || !1 } };
    i.emit(A, f);
  };
  return n.isAction = !0, n.implicit = t.implicit, n;
}
var y = (e, t) => typeof t[e] > "u" && !(e in t), x = (e) => {
  let { initialArgs: t, argTypes: r, id: n, parameters: { actions: o } } = e;
  if (!o || o.disable || !o.argTypesRegex || !r) return {};
  let i = new RegExp(o.argTypesRegex);
  return Object.entries(r).filter(([s]) => !!i.test(s)).reduce((s, [a, l]) => (y(a, t) && (s[a] = p(a, { implicit: !0, id: n })), s), {});
}, D = (e) => {
  let { initialArgs: t, argTypes: r, parameters: { actions: n } } = e;
  return n?.disable || !r ? {} : Object.entries(r).filter(([o, i]) => !!i.action).reduce((o, [i, s]) => (y(i, t) && (o[i] = p(typeof s.action == "string" ? s.action : i)), o), {});
}, C = [D, x], g = !1, I = (e) => {
  let { parameters: { actions: t } } = e;
  if (!t?.disable && !g && "__STORYBOOK_TEST_ON_MOCK_CALL__" in _ && typeof _.__STORYBOOK_TEST_ON_MOCK_CALL__ == "function") {
    let r = _.__STORYBOOK_TEST_ON_MOCK_CALL__;
    r((n, o) => {
      let i = n.getMockName();
      i !== "spy" && (!/^next\/.*::/.test(i) || ["next/router::useRouter()", "next/navigation::useRouter()", "next/navigation::redirect", "next/cache::", "next/headers::cookies().set", "next/headers::cookies().delete", "next/headers::headers().set", "next/headers::headers().delete"].some((s) => i.startsWith(s))) && p(i)(o);
    }), g = !0;
  }
}, K = [I];
export {
  C as argsEnhancers,
  K as loaders
};