import { d as k } from "../../../../jsdoc-type-pratt-parser/dist/index.js";
var Re = Object.defineProperty, a = (e, t) => Re(e, "name", { value: t, configurable: !0 });
const { UnknownArgTypesError: Ve } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var Ae = /* @__PURE__ */ a((e) => e.name === "literal", "isLiteral"), Fe = /* @__PURE__ */ a((e) => e.value.replace(/['|"]/g, ""), "toEnumOption"), Ce = /* @__PURE__ */ a((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((n) => {
        t[n.key] = h(n.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new Ve({ type: e, language: "Flow" });
  }
}, "convertSig"), h = /* @__PURE__ */ a((e) => {
  let { name: t, raw: n } = e, r = {};
  switch (typeof n < "u" && (r.raw = n), e.name) {
    case "literal":
      return { ...r, name: "other", value: e.value };
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...r, name: t };
    case "Array":
      return { ...r, name: "array", value: e.elements.map(h) };
    case "signature":
      return { ...r, ...Ce(e) };
    case "union":
      return e.elements?.every(Ae) ? { ...r, name: "enum", value: e.elements?.map(Fe) } : { ...r, name: t, value: e.elements?.map(h) };
    case "intersection":
      return { ...r, name: t, value: e.elements?.map(h) };
    default:
      return { ...r, name: "other", value: t };
  }
}, "convert");
function F(e, t) {
  let n = {}, r = Object.keys(e);
  for (let s = 0; s < r.length; s++) {
    let i = r[s], l = e[i];
    n[i] = t(l, i, e);
  }
  return n;
}
a(F, "mapValues");
var C = /^['"]|['"]$/g, Le = /* @__PURE__ */ a((e) => e.replace(C, ""), "trimQuotes"), $e = /* @__PURE__ */ a((e) => C.test(e), "includesQuotes"), L = /* @__PURE__ */ a((e) => {
  let t = Le(e);
  return $e(e) || Number.isNaN(Number(t)) ? t : Number(t);
}, "parseLiteral"), Ie = /^\(.*\) => /, y = /* @__PURE__ */ a((e) => {
  let { name: t, raw: n, computed: r, value: s } = e, i = {};
  switch (typeof n < "u" && (i.raw = n), t) {
    case "enum": {
      let o = r ? s : s.map((u) => L(u.value));
      return { ...i, name: t, value: o };
    }
    case "string":
    case "number":
    case "symbol":
      return { ...i, name: t };
    case "func":
      return { ...i, name: "function" };
    case "bool":
    case "boolean":
      return { ...i, name: "boolean" };
    case "arrayOf":
    case "array":
      return { ...i, name: "array", value: s && y(s) };
    case "object":
      return { ...i, name: t };
    case "objectOf":
      return { ...i, name: t, value: y(s) };
    case "shape":
    case "exact":
      let l = F(s, (o) => y(o));
      return { ...i, name: "object", value: l };
    case "union":
      return { ...i, name: "union", value: s.map((o) => y(o)) };
    case "instanceOf":
    case "element":
    case "elementType":
    default: {
      if (t?.indexOf("|") > 0)
        try {
          let m = t.split("|").map((p) => JSON.parse(p));
          return { ...i, name: "enum", value: m };
        } catch {
        }
      let o = s ? `${t}(${s})` : t, u = Ie.test(t) ? "function" : "other";
      return { ...i, name: u, value: o };
    }
  }
}, "convert");
const { UnknownArgTypesError: We } = __STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;
var Be = /* @__PURE__ */ a((e) => {
  switch (e.type) {
    case "function":
      return { name: "function" };
    case "object":
      let t = {};
      return e.signature.properties.forEach((n) => {
        t[n.key] = v(n.value);
      }), {
        name: "object",
        value: t
      };
    default:
      throw new We({ type: e, language: "Typescript" });
  }
}, "convertSig"), v = /* @__PURE__ */ a((e) => {
  let { name: t, raw: n } = e, r = {};
  switch (typeof n < "u" && (r.raw = n), e.name) {
    case "string":
    case "number":
    case "symbol":
    case "boolean":
      return { ...r, name: t };
    case "Array":
      return { ...r, name: "array", value: e.elements.map(v) };
    case "signature":
      return { ...r, ...Be(e) };
    case "union":
      let s;
      return e.elements?.every((i) => i.name === "literal") ? s = {
        ...r,
        name: "enum",
        // @ts-expect-error fix types
        value: e.elements?.map((i) => L(i.value))
      } : s = { ...r, name: t, value: e.elements?.map(v) }, s;
    case "intersection":
      return { ...r, name: t, value: e.elements?.map(v) };
    default:
      return { ...r, name: "other", value: t };
  }
}, "convert"), S = /* @__PURE__ */ a((e) => {
  let { type: t, tsType: n, flowType: r } = e;
  try {
    if (t != null)
      return y(t);
    if (n != null)
      return v(n);
    if (r != null)
      return h(r);
  } catch (s) {
    console.error(s);
  }
  return null;
}, "convert"), Ue = ["null", "undefined"];
function T(e) {
  return Ue.some((t) => t === e);
}
a(T, "isDefaultValueBlacklisted");
var qe = /* @__PURE__ */ a((e) => {
  if (!e)
    return "";
  if (typeof e == "string")
    return e;
  throw new Error(`Description: expected string, got: ${JSON.stringify(e)}`);
}, "str");
function w(e) {
  return !!e.__docgenInfo;
}
a(w, "hasDocgen");
function $(e) {
  return e != null && Object.keys(e).length > 0;
}
a($, "isValidDocgenSection");
function I(e, t) {
  return w(e) ? e.__docgenInfo[t] : null;
}
a(I, "getDocgenSection");
function W(e) {
  return w(e) ? qe(e.__docgenInfo.description) : "";
}
a(W, "getDocgenDescription");
var f;
(function(e) {
  e.start = "/**", e.nostart = "/***", e.delim = "*", e.end = "*/";
})(f = f || (f = {}));
function B(e) {
  return /^\s+$/.test(e);
}
a(B, "isSpace");
function U(e) {
  let t = e.match(/\r+$/);
  return t == null ? ["", e] : [e.slice(-t[0].length), e.slice(0, -t[0].length)];
}
a(U, "splitCR");
function g(e) {
  let t = e.match(/^\s+/);
  return t == null ? ["", e] : [e.slice(0, t[0].length), e.slice(t[0].length)];
}
a(g, "splitSpace");
function q(e) {
  return e.split(/\n/);
}
a(q, "splitLines");
function z(e = {}) {
  return Object.assign({ tag: "", name: "", type: "", optional: !1, description: "", problems: [], source: [] }, e);
}
a(z, "seedSpec");
function Y(e = {}) {
  return Object.assign({
    start: "",
    delimiter: "",
    postDelimiter: "",
    tag: "",
    postTag: "",
    name: "",
    postName: "",
    type: "",
    postType: "",
    description: "",
    end: "",
    lineEnd: ""
  }, e);
}
a(Y, "seedTokens");
var ze = /^@\S+/;
function K({ fence: e = "```" } = {}) {
  let t = M(e), n = /* @__PURE__ */ a((r, s) => t(r) ? !s : s, "toggleFence");
  return /* @__PURE__ */ a(function(r) {
    let s = [[]], i = !1;
    for (let l of r)
      ze.test(l.tokens.description) && !i ? s.push([l]) : s[s.length - 1].push(l), i = n(l.tokens.description, i);
    return s;
  }, "parseBlock");
}
a(K, "getParser");
function M(e) {
  return typeof e == "string" ? (t) => t.split(e).length % 2 === 0 : e;
}
a(M, "getFencer");
function Q({ startLine: e = 0, markers: t = f } = {}) {
  let n = null, r = e;
  return /* @__PURE__ */ a(function(s) {
    let i = s, l = Y();
    if ([l.lineEnd, i] = U(i), [l.start, i] = g(i), n === null && i.startsWith(t.start) && !i.startsWith(t.nostart) && (n = [], l.delimiter = i.slice(0, t.start.length), i = i.slice(t.start.length), [l.postDelimiter, i] = g(i)), n === null)
      return r++, null;
    let o = i.trimRight().endsWith(t.end);
    if (l.delimiter === "" && i.startsWith(t.delim) && !i.startsWith(t.end) && (l.delimiter = t.delim, i = i.slice(t.delim.length), [
      l.postDelimiter,
      i
    ] = g(i)), o) {
      let u = i.trimRight();
      l.end = i.slice(u.length - t.end.length), i = u.slice(0, -t.end.length);
    }
    if (l.description = i, n.push({ number: r, source: s, tokens: l }), r++, o) {
      let u = n.slice();
      return n = null, u;
    }
    return null;
  }, "parseSource");
}
a(Q, "getParser");
function G({ tokenizers: e }) {
  return /* @__PURE__ */ a(function(t) {
    var n;
    let r = z({ source: t });
    for (let s of e)
      if (r = s(r), !((n = r.problems[r.problems.length - 1]) === null || n === void 0) && n.critical)
        break;
    return r;
  }, "parseSpec");
}
a(G, "getParser");
function H() {
  return (e) => {
    let { tokens: t } = e.source[0], n = t.description.match(/\s*(@(\S+))(\s*)/);
    return n === null ? (e.problems.push({
      code: "spec:tag:prefix",
      message: 'tag should start with "@" symbol',
      line: e.source[0].number,
      critical: !0
    }), e) : (t.tag = n[1], t.postTag = n[3], t.description = t.description.slice(n[0].length), e.tag = n[2], e);
  };
}
a(H, "tagTokenizer");
function X(e = "compact") {
  let t = Z(e);
  return (n) => {
    let r = 0, s = [];
    for (let [o, { tokens: u }] of n.source.entries()) {
      let m = "";
      if (o === 0 && u.description[0] !== "{")
        return n;
      for (let p of u.description)
        if (p === "{" && r++, p === "}" && r--, m += p, r === 0)
          break;
      if (s.push([u, m]), r === 0)
        break;
    }
    if (r !== 0)
      return n.problems.push({
        code: "spec:type:unpaired-curlies",
        message: "unpaired curlies",
        line: n.source[0].number,
        critical: !0
      }), n;
    let i = [], l = s[0][0].postDelimiter.length;
    for (let [o, [u, m]] of s.entries())
      u.type = m, o > 0 && (u.type = u.postDelimiter.slice(l) + m, u.postDelimiter = u.postDelimiter.slice(0, l)), [u.postType, u.description] = g(u.description.slice(m.length)), i.push(u.type);
    return i[0] = i[0].slice(1), i[i.length - 1] = i[i.length - 1].slice(0, -1), n.type = t(i), n;
  };
}
a(X, "typeTokenizer");
var Ye = /* @__PURE__ */ a((e) => e.trim(), "trim");
function Z(e) {
  return e === "compact" ? (t) => t.map(Ye).join("") : e === "preserve" ? (t) => t.join(`
`) : e;
}
a(Z, "getJoiner");
var Ke = /* @__PURE__ */ a((e) => e && e.startsWith('"') && e.endsWith('"'), "isQuoted");
function ee() {
  let e = /* @__PURE__ */ a((t, { tokens: n }, r) => n.type === "" ? t : r, "typeEnd");
  return (t) => {
    let { tokens: n } = t.source[t.source.reduce(e, 0)], r = n.description.trimLeft(), s = r.split('"');
    if (s.length > 1 && s[0] === "" && s.length % 2 === 1)
      return t.name = s[1], n.name = `"${s[1]}"`, [n.postName, n.description] = g(r.slice(n.name.length)), t;
    let i = 0, l = "", o = !1, u;
    for (let p of r) {
      if (i === 0 && B(p))
        break;
      p === "[" && i++, p === "]" && i--, l += p;
    }
    if (i !== 0)
      return t.problems.push({
        code: "spec:name:unpaired-brackets",
        message: "unpaired brackets",
        line: t.source[0].number,
        critical: !0
      }), t;
    let m = l;
    if (l[0] === "[" && l[l.length - 1] === "]") {
      o = !0, l = l.slice(1, -1);
      let p = l.split("=");
      if (l = p[0].trim(), p[1] !== void 0 && (u = p.slice(1).join("=").trim()), l === "")
        return t.problems.push({
          code: "spec:name:empty-name",
          message: "empty name",
          line: t.source[0].number,
          critical: !0
        }), t;
      if (u === "")
        return t.problems.push({
          code: "spec:name:empty-default",
          message: "empty default value",
          line: t.source[0].number,
          critical: !0
        }), t;
      if (!Ke(u) && /=(?!>)/.test(u))
        return t.problems.push({
          code: "spec:name:invalid-default",
          message: "invalid default value syntax",
          line: t.source[0].number,
          critical: !0
        }), t;
    }
    return t.optional = o, t.name = l, n.name = m, u !== void 0 && (t.default = u), [n.postName, n.description] = g(r.slice(n.name.length)), t;
  };
}
a(ee, "nameTokenizer");
function te(e = "compact", t = f) {
  let n = O(e);
  return (r) => (r.description = n(r.source, t), r);
}
a(te, "descriptionTokenizer");
function O(e) {
  return e === "compact" ? ne : e === "preserve" ? re : e;
}
a(O, "getJoiner");
function ne(e, t = f) {
  return e.map(({ tokens: { description: n } }) => n.trim()).filter((n) => n !== "").join(" ");
}
a(ne, "compactJoiner");
var Me = /* @__PURE__ */ a((e, { tokens: t }, n) => t.type === "" ? e : n, "lineNo"), Qe = /* @__PURE__ */ a(({ tokens: e }) => (e.delimiter === "" ? e.start : e.postDelimiter.slice(1)) + e.description, "getDescription");
function re(e, t = f) {
  if (e.length === 0)
    return "";
  e[0].tokens.description === "" && e[0].tokens.delimiter === t.start && (e = e.slice(1));
  let n = e[e.length - 1];
  return n !== void 0 && n.tokens.description === "" && n.tokens.end.endsWith(t.end) && (e = e.slice(0, -1)), e = e.slice(e.reduce(Me, 0)), e.map(Qe).join(`
`);
}
a(re, "preserveJoiner");
function ae({ startLine: e = 0, fence: t = "```", spacing: n = "compact", markers: r = f, tokenizers: s = [
  H(),
  X(n),
  ee(),
  te(n)
] } = {}) {
  if (e < 0 || e % 1 > 0)
    throw new Error("Invalid startLine");
  let i = Q({ startLine: e, markers: r }), l = K({ fence: t }), o = G({ tokenizers: s }), u = O(n);
  return function(m) {
    let p = [];
    for (let Je of q(m)) {
      let D = i(Je);
      if (D === null)
        continue;
      let V = l(D), A = V.slice(1).map(o);
      p.push({
        description: u(V[0], r),
        tags: A,
        source: D,
        problems: A.reduce((xe, Pe) => xe.concat(Pe.problems), [])
      });
    }
    return p;
  };
}
a(ae, "getParser");
function ie(e) {
  return e.start + e.delimiter + e.postDelimiter + e.tag + e.postTag + e.type + e.postType + e.name + e.postName + e.description + e.end + e.lineEnd;
}
a(ie, "join");
function Ge() {
  return (e) => e.source.map(({ tokens: t }) => ie(t)).join(`
`);
}
a(Ge, "getStringifier");
function se(e, t = {}) {
  return ae(t)(e);
}
a(se, "parse");
function le(e) {
  return e != null && e.includes("@");
}
a(le, "containsJsDoc");
function ue(e) {
  let t = `/**
` + (e ?? "").split(`
`).map((r) => ` * ${r}`).join(`
`) + `
*/`, n = se(t, {
    spacing: "preserve"
  });
  if (!n || n.length === 0)
    throw new Error("Cannot parse JSDoc tags.");
  return n[0];
}
a(ue, "parse");
var He = {
  tags: ["param", "arg", "argument", "returns", "ignore", "deprecated"]
}, Xe = /* @__PURE__ */ a((e, t = He) => {
  if (!le(e))
    return {
      includesJsDoc: !1,
      ignore: !1
    };
  let n = ue(e), r = oe(n, t.tags);
  return r.ignore ? {
    includesJsDoc: !0,
    ignore: !0
  } : {
    includesJsDoc: !0,
    ignore: !1,
    // Always use the parsed description to ensure JSDoc is removed from the description.
    description: n.description.trim(),
    extractedTags: r
  };
}, "parseJsDoc");
function oe(e, t) {
  let n = {
    params: null,
    deprecated: null,
    returns: null,
    ignore: !1
  };
  for (let r of e.tags)
    if (!(t !== void 0 && !t.includes(r.tag)))
      if (r.tag === "ignore") {
        n.ignore = !0;
        break;
      } else
        switch (r.tag) {
          case "param":
          case "arg":
          case "argument": {
            let s = pe(r);
            s != null && (n.params == null && (n.params = []), n.params.push(s));
            break;
          }
          case "deprecated": {
            let s = me(r);
            s != null && (n.deprecated = s);
            break;
          }
          case "returns": {
            let s = fe(r);
            s != null && (n.returns = s);
            break;
          }
        }
  return n;
}
a(oe, "extractJsDocTags");
function ce(e) {
  return e.replace(/[\.-]$/, "");
}
a(ce, "normaliseParamName");
function pe(e) {
  if (!e.name || e.name === "-")
    return null;
  let t = N(e.type);
  return {
    name: e.name,
    type: t,
    description: j(e.description),
    getPrettyName: /* @__PURE__ */ a(() => ce(e.name), "getPrettyName"),
    getTypeName: /* @__PURE__ */ a(() => t ? _(t) : null, "getTypeName")
  };
}
a(pe, "extractParam");
function me(e) {
  return e.name ? E(e.name, e.description) : null;
}
a(me, "extractDeprecated");
function E(e, t) {
  let n = e === "" ? t : `${e} ${t}`;
  return j(n);
}
a(E, "joinNameAndDescription");
function j(e) {
  let t = e.replace(/^- /g, "").trim();
  return t === "" ? null : t;
}
a(j, "normaliseDescription");
function fe(e) {
  let t = N(e.type);
  return t ? {
    type: t,
    description: E(e.name, e.description),
    getTypeName: /* @__PURE__ */ a(() => _(t), "getTypeName")
  } : null;
}
a(fe, "extractReturns");
var d = k.stringifyRules(), Ze = d.JsdocTypeObject;
d.JsdocTypeAny = () => "any";
d.JsdocTypeObject = (e, t) => `(${Ze(e, t)})`;
d.JsdocTypeOptional = (e, t) => t(e.element);
d.JsdocTypeNullable = (e, t) => t(e.element);
d.JsdocTypeNotNullable = (e, t) => t(e.element);
d.JsdocTypeUnion = (e, t) => e.elements.map(t).join("|");
function N(e) {
  try {
    return k.parse(e, "typescript");
  } catch {
    return null;
  }
}
a(N, "extractType");
function _(e) {
  return k.transform(d, e);
}
a(_, "extractTypeName");
function J(e) {
  return e.length > 90;
}
a(J, "isTooLongForTypeSummary");
function de(e) {
  return e.length > 50;
}
a(de, "isTooLongForDefaultValueSummary");
function c(e, t) {
  return e === t ? { summary: e } : { summary: e, detail: t };
}
a(c, "createSummaryValue");
function ge(e, t) {
  if (e != null) {
    let { value: n } = e;
    if (!T(n))
      return de(n) ? c(t?.name, n) : c(n);
  }
  return null;
}
a(ge, "createDefaultValue");
function x({ name: e, value: t, elements: n, raw: r }) {
  return t ?? (n != null ? n.map(x).join(" | ") : r ?? e);
}
a(x, "generateUnionElement");
function ye({ name: e, raw: t, elements: n }) {
  return n != null ? c(n.map(x).join(" | ")) : t != null ? c(t.replace(/^\|\s*/, "")) : c(e);
}
a(ye, "generateUnion");
function he({ type: e, raw: t }) {
  return t != null ? c(t) : c(e);
}
a(he, "generateFuncSignature");
function ve({ type: e, raw: t }) {
  return t != null ? J(t) ? c(e, t) : c(t) : c(e);
}
a(ve, "generateObjectSignature");
function be(e) {
  let { type: t } = e;
  return t === "object" ? ve(e) : he(e);
}
a(be, "generateSignature");
function Te({ name: e, raw: t }) {
  return t != null ? J(t) ? c(e, t) : c(t) : c(e);
}
a(Te, "generateDefault");
function De(e) {
  if (e == null)
    return null;
  switch (e.name) {
    case "union":
      return ye(e);
    case "signature":
      return be(e);
    default:
      return Te(e);
  }
}
a(De, "createType");
var et = /* @__PURE__ */ a((e, t) => {
  let { flowType: n, description: r, required: s, defaultValue: i } = t;
  return {
    name: e,
    type: De(n),
    required: s,
    description: r,
    defaultValue: ge(i ?? null, n ?? null)
  };
}, "createFlowPropDef");
function ke({ defaultValue: e }) {
  if (e != null) {
    let { value: t } = e;
    if (!T(t))
      return c(t);
  }
  return null;
}
a(ke, "createDefaultValue");
function Se({ tsType: e, required: t }) {
  if (e == null)
    return null;
  let n = e.name;
  return t || (n = n.replace(" | undefined", "")), c(
    ["Array", "Record", "signature"].includes(e.name) ? e.raw : n
  );
}
a(Se, "createType");
var tt = /* @__PURE__ */ a((e, t) => {
  let { description: n, required: r } = t;
  return {
    name: e,
    type: Se(t),
    required: r,
    description: n,
    defaultValue: ke(t)
  };
}, "createTsPropDef");
function we(e) {
  return e != null ? c(e.name) : null;
}
a(we, "createType");
function Oe(e) {
  let { computed: t, func: n } = e;
  return typeof t > "u" && typeof n > "u";
}
a(Oe, "isReactDocgenTypescript");
function Ee(e) {
  return e ? e.name === "string" ? !0 : e.name === "enum" ? Array.isArray(e.value) && e.value.every(
    ({ value: t }) => typeof t == "string" && t[0] === '"' && t[t.length - 1] === '"'
  ) : !1 : !1;
}
a(Ee, "isStringValued");
function je(e, t) {
  if (e != null) {
    let { value: n } = e;
    if (!T(n))
      return Oe(e) && Ee(t) ? c(JSON.stringify(n)) : c(n);
  }
  return null;
}
a(je, "createDefaultValue");
function P(e, t, n) {
  let { description: r, required: s, defaultValue: i } = n;
  return {
    name: e,
    type: we(t),
    required: s,
    description: r,
    defaultValue: je(i, t)
  };
}
a(P, "createBasicPropDef");
function b(e, t) {
  if (t?.includesJsDoc) {
    let { description: n, extractedTags: r } = t;
    n != null && (e.description = t.description);
    let s = {
      ...r,
      params: r?.params?.map(
        (i) => ({
          name: i.getPrettyName(),
          description: i.description
        })
      )
    };
    Object.values(s).filter(Boolean).length > 0 && (e.jsDocTags = s);
  }
  return e;
}
a(b, "applyJsDocResult");
var nt = /* @__PURE__ */ a((e, t, n) => {
  let r = P(e, t.type, t);
  return r.sbType = S(t), b(r, n);
}, "javaScriptFactory"), rt = /* @__PURE__ */ a((e, t, n) => {
  let r = tt(e, t);
  return r.sbType = S(t), b(r, n);
}, "tsFactory"), at = /* @__PURE__ */ a((e, t, n) => {
  let r = et(e, t);
  return r.sbType = S(t), b(r, n);
}, "flowFactory"), it = /* @__PURE__ */ a((e, t, n) => {
  let r = P(e, { name: "unknown" }, t);
  return b(r, n);
}, "unknownFactory"), Ne = /* @__PURE__ */ a((e) => {
  switch (e) {
    case "JavaScript":
      return nt;
    case "TypeScript":
      return rt;
    case "Flow":
      return at;
    default:
      return it;
  }
}, "getPropDefFactory"), _e = /* @__PURE__ */ a(
  (e) => e.type != null ? "JavaScript" : e.flowType != null ? "Flow" : e.tsType != null ? "TypeScript" : "Unknown",
  "getTypeSystem"
), st = /* @__PURE__ */ a((e) => {
  let t = _e(e[0]), n = Ne(t);
  return e.map((r) => {
    let s = r;
    return r.type?.elements && (s = {
      ...r,
      type: {
        ...r.type,
        value: r.type.elements
      }
    }), R(s.name, s, t, n);
  });
}, "extractComponentSectionArray"), lt = /* @__PURE__ */ a((e) => {
  let t = Object.keys(e), n = _e(e[t[0]]), r = Ne(n);
  return t.map((s) => {
    let i = e[s];
    return i != null ? R(s, i, n, r) : null;
  }).filter(Boolean);
}, "extractComponentSectionObject"), ft = /* @__PURE__ */ a((e, t) => {
  let n = I(e, t);
  return $(n) ? Array.isArray(n) ? st(n) : lt(n) : [];
}, "extractComponentProps");
function R(e, t, n, r) {
  let s = Xe(t.description);
  return s.includesJsDoc && s.ignore ? null : {
    propDef: r(e, t, s),
    jsDocTags: s.extractedTags,
    docgenInfo: t,
    typeSystem: n
  };
}
a(R, "extractProp");
function ut(e) {
  return e != null ? W(e) : "";
}
a(ut, "extractComponentDescription");
const { combineParameters: ot } = __STORYBOOK_MODULE_PREVIEW_API__;
var dt = /* @__PURE__ */ a((e) => {
  let {
    component: t,
    argTypes: n,
    parameters: { docs: r = {} }
  } = e, { extractArgTypes: s } = r, i = s && t ? s(t) : {};
  return i ? ot(i, n) : n;
}, "enhanceArgTypes"), ct = "storybook/docs", gt = `${ct}/snippet-rendered`, pt = /* @__PURE__ */ ((e) => (e.AUTO = "auto", e.CODE = "code", e.DYNAMIC = "dynamic", e))(pt || {});
export {
  ct as ADDON_ID,
  gt as SNIPPET_RENDERED,
  pt as SourceType,
  S as convert,
  c as createSummaryValue,
  dt as enhanceArgTypes,
  ut as extractComponentDescription,
  ft as extractComponentProps,
  st as extractComponentSectionArray,
  lt as extractComponentSectionObject,
  W as getDocgenDescription,
  I as getDocgenSection,
  w as hasDocgen,
  T as isDefaultValueBlacklisted,
  de as isTooLongForDefaultValueSummary,
  J as isTooLongForTypeSummary,
  $ as isValidDocgenSection,
  Xe as parseJsDoc,
  qe as str
};
