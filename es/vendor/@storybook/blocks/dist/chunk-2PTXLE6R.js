var D = Object.create, O = Object.defineProperty, A = Object.getOwnPropertyDescriptor, _ = Object.getOwnPropertyNames, x = Object.getPrototypeOf, B = Object.prototype.hasOwnProperty, C = ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (r, t) => (typeof require < "u" ? require : r)[t] }) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
}), N = (e, r) => function() {
  return r || (0, e[_(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, S = (e, r, t, n) => {
  if (r && typeof r == "object" || typeof r == "function") for (let l of _(r)) !B.call(e, l) && l !== t && O(e, l, { get: () => r[l], enumerable: !(n = A(r, l)) || n.enumerable });
  return e;
}, L = (e, r, t) => (t = e != null ? D(x(e)) : {}, S(r || !e || !e.__esModule ? O(t, "default", { value: e, enumerable: !0 }) : t, e));
function T(e, r, { signal: t, edges: n } = {}) {
  let l, u = null, a = n != null && n.includes("leading"), g = n == null || n.includes("trailing"), f = () => {
    u !== null && (e.apply(l, u), l = void 0, u = null);
  }, c = () => {
    g && f(), s();
  }, i = null, o = () => {
    i != null && clearTimeout(i), i = setTimeout(() => {
      i = null, c();
    }, r);
  }, d = () => {
    i !== null && (clearTimeout(i), i = null);
  }, s = () => {
    d(), l = void 0, u = null;
  }, v = () => {
    d(), f();
  }, w = function(...P) {
    if (t?.aborted) return;
    l = this, u = P;
    let m = i == null;
    o(), a && m && f();
  };
  return w.schedule = o, w.cancel = s, w.flush = v, t?.addEventListener("abort", s, { once: !0 }), w;
}
function R(e, r = 0, t = {}) {
  typeof t != "object" && (t = {});
  let { signal: n, leading: l = !1, trailing: u = !0, maxWait: a } = t, g = Array(2);
  l && (g[0] = "leading"), u && (g[1] = "trailing");
  let f, c = null, i = T(function(...s) {
    f = e.apply(this, s), c = null;
  }, r, { signal: n, edges: g }), o = function(...s) {
    if (a != null) {
      if (c === null) c = Date.now();
      else if (Date.now() - c >= a) return f = e.apply(this, s), c = Date.now(), i.cancel(), i.schedule(), f;
    }
    return i.apply(this, s), f;
  }, d = () => (i.flush(), f);
  return o.cancel = i.cancel, o.flush = d, o;
}
function $(e) {
  return Array.from(new Set(e));
}
function J(e, r) {
  let t = {}, n = Object.entries(e);
  for (let l = 0; l < n.length; l++) {
    let [u, a] = n[l];
    r(a, u) && (t[u] = a);
  }
  return t;
}
function q(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function E(e) {
  return e == null || typeof e != "object" && typeof e != "function";
}
function h(e) {
  return y(e);
}
function y(e, r = /* @__PURE__ */ new Map()) {
  if (E(e)) return e;
  if (r.has(e)) return r.get(e);
  if (Array.isArray(e)) {
    let t = new Array(e.length);
    r.set(e, t);
    for (let n = 0; n < e.length; n++) t[n] = y(e[n], r);
    return Object.prototype.hasOwnProperty.call(e, "index") && (t.index = e.index), Object.prototype.hasOwnProperty.call(e, "input") && (t.input = e.input), t;
  }
  if (e instanceof Date) return new Date(e.getTime());
  if (e instanceof RegExp) {
    let t = new RegExp(e.source, e.flags);
    return t.lastIndex = e.lastIndex, t;
  }
  if (e instanceof Map) {
    let t = /* @__PURE__ */ new Map();
    r.set(e, t);
    for (let [n, l] of e.entries()) t.set(n, y(l, r));
    return t;
  }
  if (e instanceof Set) {
    let t = /* @__PURE__ */ new Set();
    r.set(e, t);
    for (let n of e.values()) t.add(y(n, r));
    return t;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(e)) return e.subarray();
  if (q(e)) {
    let t = new (Object.getPrototypeOf(e)).constructor(e.length);
    r.set(e, t);
    for (let n = 0; n < e.length; n++) t[n] = y(e[n], r);
    return t;
  }
  if (e instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && e instanceof SharedArrayBuffer) return e.slice(0);
  if (e instanceof DataView) {
    let t = new DataView(e.buffer.slice(0), e.byteOffset, e.byteLength);
    return r.set(e, t), p(t, e, r), t;
  }
  if (typeof File < "u" && e instanceof File) {
    let t = new File([e], e.name, { type: e.type });
    return r.set(e, t), p(t, e, r), t;
  }
  if (e instanceof Blob) {
    let t = new Blob([e], { type: e.type });
    return r.set(e, t), p(t, e, r), t;
  }
  if (e instanceof Error) {
    let t = new e.constructor();
    return r.set(e, t), t.message = e.message, t.name = e.name, t.stack = e.stack, t.cause = e.cause, p(t, e, r), t;
  }
  if (typeof e == "object" && e !== null) {
    let t = {};
    return r.set(e, t), p(t, e, r), t;
  }
  return e;
}
function p(e, r, t) {
  let n = Object.keys(r);
  for (let l = 0; l < n.length; l++) {
    let u = n[l], a = Object.getOwnPropertyDescriptor(r, u);
    (a?.writable || a?.set) && (e[u] = y(r[u], t));
  }
}
var I = "[object String]", M = "[object Number]", F = "[object Boolean]", V = "[object Arguments]";
function W(e) {
  if (typeof e != "object") return h(e);
  switch (Object.prototype.toString.call(e)) {
    case M:
    case I:
    case F: {
      let r = new e.constructor(e?.valueOf());
      return p(r, e), r;
    }
    case V: {
      let r = {};
      return p(r, e), r.length = e.length, r[Symbol.iterator] = e[Symbol.iterator], r;
    }
    default:
      return h(e);
  }
}
var z = (e) => `control-${e.replace(/\s+/g, "-")}`, G = (e) => `set-${e.replace(/\s+/g, "-")}`;
export {
  N as __commonJS,
  C as __require,
  L as __toESM,
  W as cloneDeep,
  R as debounce,
  z as getControlId,
  G as getControlSetterButtonId,
  J as pickBy,
  $ as uniq
};
