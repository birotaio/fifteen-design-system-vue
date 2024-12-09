/*! maska v2.1.11 | (c) Alexander Shabunevich | Released under the MIT license */
var V = Object.defineProperty, P = (a, t, e) => t in a ? V(a, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[t] = e, g = (a, t, e) => (P(a, typeof t != "symbol" ? t + "" : t, e), e);
const R = {
  "#": { pattern: /[0-9]/ },
  "@": { pattern: /[a-zA-Z]/ },
  "*": { pattern: /[a-zA-Z0-9]/ }
};
class b {
  constructor(t = {}) {
    g(this, "opts", {}), g(this, "memo", /* @__PURE__ */ new Map());
    const e = { ...t };
    if (e.tokens != null) {
      e.tokens = e.tokensReplace ? { ...e.tokens } : { ...R, ...e.tokens };
      for (const s of Object.values(e.tokens))
        typeof s.pattern == "string" && (s.pattern = new RegExp(s.pattern));
    } else
      e.tokens = R;
    Array.isArray(e.mask) && (e.mask.length > 1 ? e.mask = [...e.mask].sort((s, n) => s.length - n.length) : e.mask = e.mask[0] ?? ""), e.mask === "" && (e.mask = null), this.opts = e;
  }
  masked(t) {
    return this.process(t, this.findMask(t));
  }
  unmasked(t) {
    return this.process(t, this.findMask(t), !1);
  }
  isEager() {
    return this.opts.eager === !0;
  }
  isReversed() {
    return this.opts.reversed === !0;
  }
  completed(t) {
    const e = this.findMask(t);
    if (this.opts.mask == null || e == null)
      return !1;
    const s = this.process(t, e).length;
    return typeof this.opts.mask == "string" ? s >= this.opts.mask.length : typeof this.opts.mask == "function" ? s >= e.length : this.opts.mask.filter((n) => s >= n.length).length === this.opts.mask.length;
  }
  findMask(t) {
    const e = this.opts.mask;
    if (e == null)
      return null;
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return e(t);
    const s = this.process(t, e.slice(-1).pop() ?? "", !1);
    return e.find((n) => this.process(t, n, !1).length >= s.length) ?? "";
  }
  escapeMask(t) {
    const e = [], s = [];
    return t.split("").forEach((n, i) => {
      n === "!" && t[i - 1] !== "!" ? s.push(i - s.length) : e.push(n);
    }), { mask: e.join(""), escaped: s };
  }
  process(t, e, s = !0) {
    if (e == null)
      return t;
    const n = `value=${t},mask=${e},masked=${s ? 1 : 0}`;
    if (this.memo.has(n))
      return this.memo.get(n);
    const { mask: i, escaped: p } = this.escapeMask(e), o = [], k = this.opts.tokens != null ? this.opts.tokens : {}, l = this.isReversed() ? -1 : 1, m = this.isReversed() ? "unshift" : "push", c = this.isReversed() ? 0 : i.length - 1, T = this.isReversed() ? () => r > -1 && u > -1 : () => r < i.length && u < t.length, S = (d) => !this.isReversed() && d <= c || this.isReversed() && d >= c;
    let E, f = -1, r = this.isReversed() ? i.length - 1 : 0, u = this.isReversed() ? t.length - 1 : 0, y = !1;
    for (; T(); ) {
      const d = i.charAt(r), h = k[d], v = h?.transform != null ? h.transform(t.charAt(u)) : t.charAt(u);
      if (!p.includes(r) && h != null ? (v.match(h.pattern) != null ? (o[m](v), h.repeated ? (f === -1 ? f = r : r === c && r !== f && (r = f - l), c === f && (r -= l)) : h.multiple && (y = !0, r -= l), r += l) : h.multiple ? y && (r += l, u -= l, y = !1) : v === E ? E = void 0 : h.optional && (r += l, u -= l), u += l) : (s && !this.isEager() && o[m](d), v === d && !this.isEager() ? u += l : E = d, this.isEager() || (r += l)), this.isEager())
        for (; S(r) && (k[i.charAt(r)] == null || p.includes(r)); )
          s ? o[m](i.charAt(r)) : i.charAt(r) === t.charAt(u) && (u += l), r += l;
    }
    return this.memo.set(n, o.join("")), this.memo.get(n);
  }
}
const O = (a) => JSON.parse(a.replaceAll("'", '"')), w = (a, t = {}) => {
  const e = { ...t };
  return a.dataset.maska != null && a.dataset.maska !== "" && (e.mask = W(a.dataset.maska)), a.dataset.maskaEager != null && (e.eager = M(a.dataset.maskaEager)), a.dataset.maskaReversed != null && (e.reversed = M(a.dataset.maskaReversed)), a.dataset.maskaTokensReplace != null && (e.tokensReplace = M(a.dataset.maskaTokensReplace)), a.dataset.maskaTokens != null && (e.tokens = j(a.dataset.maskaTokens)), e;
}, M = (a) => a !== "" ? !!JSON.parse(a) : !0, W = (a) => a.startsWith("[") && a.endsWith("]") ? O(a) : a, j = (a) => {
  if (a.startsWith("{") && a.endsWith("}"))
    return O(a);
  const t = {};
  return a.split("|").forEach((e) => {
    const s = e.split(":");
    t[s[0]] = {
      pattern: new RegExp(s[1]),
      optional: s[2] === "optional",
      multiple: s[2] === "multiple",
      repeated: s[2] === "repeated"
    };
  }), t;
};
class L {
  constructor(t, e = {}) {
    g(this, "items", /* @__PURE__ */ new Map()), g(this, "beforeinputEvent", (s) => {
      const n = s.target, i = this.items.get(n);
      i.isEager() && "inputType" in s && s.inputType.startsWith("delete") && i.unmasked(n.value).length <= 1 && this.setMaskedValue(n, "");
    }), g(this, "inputEvent", (s) => {
      if (s instanceof CustomEvent && s.type === "input" && s.detail != null && typeof s.detail == "object" && "masked" in s.detail)
        return;
      const n = s.target, i = this.items.get(n), p = n.value, o = n.selectionStart, k = n.selectionEnd;
      let l = p;
      if (i.isEager()) {
        const m = i.masked(p), c = i.unmasked(p);
        c === "" && "data" in s && s.data != null ? l = s.data : c !== i.unmasked(m) && (l = c);
      }
      if (this.setMaskedValue(n, l), "inputType" in s && (s.inputType.startsWith("delete") || o != null && o < p.length))
        try {
          n.setSelectionRange(o, k);
        } catch {
        }
    }), this.options = e, typeof t == "string" ? this.init(
      Array.from(document.querySelectorAll(t)),
      this.getMaskOpts(e)
    ) : this.init(
      "length" in t ? Array.from(t) : [t],
      this.getMaskOpts(e)
    );
  }
  destroy() {
    for (const t of this.items.keys())
      t.removeEventListener("input", this.inputEvent), t.removeEventListener("beforeinput", this.beforeinputEvent);
    this.items.clear();
  }
  needUpdateOptions(t, e) {
    const s = this.items.get(t), n = new b(w(t, this.getMaskOpts(e)));
    return JSON.stringify(s.opts) !== JSON.stringify(n.opts);
  }
  needUpdateValue(t) {
    const e = t.dataset.maskaValue;
    return e == null && t.value !== "" || e != null && e !== t.value;
  }
  getMaskOpts(t) {
    const { onMaska: e, preProcess: s, postProcess: n, ...i } = t;
    return i;
  }
  init(t, e) {
    for (const s of t) {
      const n = new b(w(s, e));
      this.items.set(s, n), s.value !== "" && this.setMaskedValue(s, s.value), s.addEventListener("input", this.inputEvent), s.addEventListener("beforeinput", this.beforeinputEvent);
    }
  }
  setMaskedValue(t, e) {
    const s = this.items.get(t);
    this.options.preProcess != null && (e = this.options.preProcess(e));
    const n = s.masked(e), i = s.unmasked(s.isEager() ? n : e), p = s.completed(e), o = { masked: n, unmasked: i, completed: p };
    e = n, this.options.postProcess != null && (e = this.options.postProcess(e)), t.value = e, t.dataset.maskaValue = e, this.options.onMaska != null && (Array.isArray(this.options.onMaska) ? this.options.onMaska.forEach((k) => k(o)) : this.options.onMaska(o)), t.dispatchEvent(new CustomEvent("maska", { detail: o })), t.dispatchEvent(new CustomEvent("input", { detail: o }));
  }
}
const A = /* @__PURE__ */ new WeakMap(), C = (a) => {
  setTimeout(() => {
    var t;
    ((t = A.get(a)) == null ? void 0 : t.needUpdateValue(a)) === !0 && a.dispatchEvent(new CustomEvent("input"));
  });
}, J = (a, t) => {
  const e = a instanceof HTMLInputElement ? a : a.querySelector("input"), s = { ...t.arg };
  if (e == null || e?.type === "file")
    return;
  C(e);
  const n = A.get(e);
  if (n != null) {
    if (!n.needUpdateOptions(e, s))
      return;
    n.destroy();
  }
  if (t.value != null) {
    const i = t.value, p = (o) => {
      i.masked = o.masked, i.unmasked = o.unmasked, i.completed = o.completed;
    };
    s.onMaska = s.onMaska == null ? p : Array.isArray(s.onMaska) ? [...s.onMaska, p] : [s.onMaska, p];
  }
  A.set(e, new L(e, s));
};
export {
  b as Mask,
  L as MaskInput,
  R as tokens,
  J as vMaska
};
