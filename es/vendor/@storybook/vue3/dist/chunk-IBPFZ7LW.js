import { __export as O } from "./chunk-CEH6MNVV.js";
import { h as l, createApp as U, reactive as f, isVNode as y, isReactive as h } from "vue";
const { sanitizeStoryContextUpdate: b } = __STORYBOOK_MODULE_PREVIEW_API__;
var N = {};
O(N, { applyDecorators: () => j, mount: () => F, parameters: () => C, render: () => w, renderToCanvas: () => I });
var w = (r, e) => {
  let { id: t, component: o } = e;
  if (!o) throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);
  return () => l(o, r, v(r, e));
}, G = (r) => {
  globalThis.PLUGINS_SETUP_FUNCTIONS ??= /* @__PURE__ */ new Set(), globalThis.PLUGINS_SETUP_FUNCTIONS.add(r);
}, P = async (r, e) => {
  globalThis && globalThis.PLUGINS_SETUP_FUNCTIONS && await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map((t) => t(r, e)));
}, c = /* @__PURE__ */ new Map();
async function I({ storyFn: r, forceRemount: e, showMain: t, showException: o, storyContext: n, id: a }, s) {
  let p = c.get(s);
  if (p && !e) {
    let u = r(), g = m(u, n);
    return A(p.reactiveArgs, g), () => {
      d(p.vueApp, s);
    };
  }
  p && e && d(p.vueApp, s);
  let i = U({ setup() {
    n.args = f(n.args);
    let u = r(), g = m(u, n), _ = { vueApp: i, reactiveArgs: f(g) };
    return c.set(s, _), () => l(u);
  } });
  return i.config.errorHandler = (u, g, _) => {
    window.__STORYBOOK_PREVIEW__?.storyRenders.some((S) => S.id === a && S.phase === "playing") ? setTimeout(() => {
      throw u;
    }, 0) : o(u);
  }, await P(i, n), i.mount(s), t(), () => {
    d(i, s);
  };
}
function v(r, e) {
  let { argTypes: t } = e, o = Object.entries(r).filter(([n]) => t[n]?.table?.category === "slots").map(([n, a]) => [n, typeof a == "function" ? a : () => a]);
  return Object.fromEntries(o);
}
function m(r, e) {
  return r.props && y(r) ? r.props : e.args;
}
function A(r, e) {
  if (Object.keys(e).length === 0) return;
  let t = h(r) ? r : f(r);
  Object.keys(t).forEach((o) => {
    o in e || delete t[o];
  }), Object.assign(t, e);
}
function d(r, e) {
  r?.unmount(), c.has(e) && c.delete(e);
}
function E(r) {
  return typeof r == "function" ? { render: r, name: r.name } : r;
}
function T(r, e) {
  let t = r;
  return t === null ? null : typeof t == "function" ? t : e ? { ...E(t), components: { ...t.components || {}, story: e } } : { render() {
    return l(t);
  } };
}
function j(r, e) {
  return e.reduce((t, o) => (n) => {
    let a, s = o((p) => {
      let i = b(p);
      return p && (i.args = Object.assign(n.args, i.args)), a = t({ ...n, ...i }), a;
    }, n);
    return a || (a = t(n)), s === a ? a : T(s, () => l(a));
  }, (t) => T(r(t)));
}
var F = (r) => async (e, t) => (e && (r.originalStoryFn = () => () => l(e, t?.props, t?.slots)), await r.renderToCanvas(), r.canvas), C = { renderer: "vue3" };
export {
  j as decorateStory,
  N as entry_preview_exports,
  F as mount,
  C as parameters,
  w as render,
  I as renderToCanvas,
  G as setup
};
