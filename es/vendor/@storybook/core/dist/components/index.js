import k, { r as i } from "../../../../react/index.js";
import { styled as I, keyframes as xa, ignoreSsrWarning as O1, isPropValid as C2, color as s6, typography as N1, lighten as Fn } from "../theming/index.js";
import { j as W } from "../../../../react/jsx-runtime.js";
import x2, { r as yi } from "../../../../react-dom/index.js";
import { sanitize as S2 } from "../../../csf/dist/index.js";
var u6 = Object.create, Ei = Object.defineProperty, c6 = Object.getOwnPropertyDescriptor, d6 = Object.getOwnPropertyNames, p6 = Object.getPrototypeOf, h6 = Object.prototype.hasOwnProperty, l = (e, t) => Ei(e, "name", { value: t, configurable: !0 }), Ga = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, {
  get: (t, r) => (typeof require < "u" ? require : t)[r]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
}), z = (e, t) => () => (e && (t = e(e = 0)), t), H = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), vn = (e, t) => {
  for (var r in t)
    Ei(e, r, { get: t[r], enumerable: !0 });
}, f6 = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let a of d6(t))
      !h6.call(e, a) && a !== r && Ei(e, a, { get: () => t[a], enumerable: !(n = c6(t, a)) || n.enumerable });
  return e;
}, ce = (e, t, r) => (r = e != null ? u6(p6(e)) : {}, f6(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Ei(r, "default", { value: e, enumerable: !0 }) : r,
  e
));
function U() {
  return U = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, U.apply(null, arguments);
}
var Xe = z(() => {
  l(U, "_extends");
});
function A2(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
var m6 = z(() => {
  l(A2, "_assertThisInitialized");
});
function ln(e, t) {
  return ln = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, ln(e, t);
}
var Q0 = z(() => {
  l(ln, "_setPrototypeOf");
});
function No(e) {
  return No = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, No(e);
}
var g6 = z(() => {
  l(No, "_getPrototypeOf");
}), Ci, ec = z(() => {
  Ci = (() => {
    let e;
    return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ? e = self : e = {}, e;
  })();
}), xi = H((e, t) => {
  (function(r) {
    if (typeof e == "object" && typeof t < "u")
      t.exports = r();
    else if (typeof define == "function" && define.amd)
      define([], r);
    else {
      var n;
      typeof window < "u" ? n = window : typeof global < "u" ? n = global : typeof self < "u" ? n = self : n = this, n.memoizerific = r();
    }
  })(function() {
    return (/* @__PURE__ */ l(function r(n, a, o) {
      function s(d, p) {
        if (!a[d]) {
          if (!n[d]) {
            var f = typeof Ga == "function" && Ga;
            if (!p && f) return f(d, !0);
            if (u) return u(d, !0);
            var h = new Error("Cannot find module '" + d + "'");
            throw h.code = "MODULE_NOT_FOUND", h;
          }
          var m = a[d] = { exports: {} };
          n[d][0].call(m.exports, function(v) {
            var g = n[d][1][v];
            return s(g || v);
          }, m, m.exports, r, n, a, o);
        }
        return a[d].exports;
      }
      l(s, "s");
      for (var u = typeof Ga == "function" && Ga, c = 0; c < o.length; c++) s(o[c]);
      return s;
    }, "e"))({ 1: [function(r, n, a) {
      n.exports = function(o) {
        if (typeof Map != "function" || o) {
          var s = r("./similar");
          return new s();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(r, n, a) {
      function o() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      l(o, "Similar"), o.prototype.get = function(s) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, s))
          return this.lastItem.val;
        if (u = this.indexOf(s), u >= 0)
          return this.lastItem = this.list[u], this.list[u].val;
      }, o.prototype.set = function(s, u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, s) ? (this.lastItem.val = u, this) : (c = this.indexOf(s), c >= 0 ? (this.lastItem = this.list[c], this.list[c].val = u, this) : (this.lastItem = { key: s, val: u }, this.list.push(this.lastItem), this.size++, this));
      }, o.prototype.delete = function(s) {
        var u;
        if (this.lastItem && this.isEqual(this.lastItem.key, s) && (this.lastItem = void 0), u = this.indexOf(s), u >= 0)
          return this.size--, this.list.splice(u, 1)[0];
      }, o.prototype.has = function(s) {
        var u;
        return this.lastItem && this.isEqual(this.lastItem.key, s) ? !0 : (u = this.indexOf(s), u >= 0 ? (this.lastItem = this.list[u], !0) : !1);
      }, o.prototype.forEach = function(s, u) {
        var c;
        for (c = 0; c < this.size; c++)
          s.call(u || this, this.list[c].val, this.list[c].key, this);
      }, o.prototype.indexOf = function(s) {
        var u;
        for (u = 0; u < this.size; u++)
          if (this.isEqual(this.list[u].key, s))
            return u;
        return -1;
      }, o.prototype.isEqual = function(s, u) {
        return s === u || s !== s && u !== u;
      }, n.exports = o;
    }, {}], 3: [function(r, n, a) {
      var o = r("map-or-similar");
      n.exports = function(d) {
        var p = new o(!1), f = [];
        return function(h) {
          var m = /* @__PURE__ */ l(function() {
            var v = p, g, D, y = arguments.length - 1, E = Array(y + 1), w = !0, b;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== y + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (b = 0; b < y; b++) {
              if (E[b] = {
                cacheItem: v,
                arg: arguments[b]
              }, v.has(arguments[b])) {
                v = v.get(arguments[b]);
                continue;
              }
              w = !1, g = new o(!1), v.set(arguments[b], g), v = g;
            }
            return w && (v.has(arguments[y]) ? D = v.get(arguments[y]) : w = !1), w || (D = h.apply(null, arguments), v.set(arguments[y], D)), d > 0 && (E[y] = {
              cacheItem: v,
              arg: arguments[y]
            }, w ? s(f, E) : f.push(E), f.length > d && u(f.shift())), m.wasMemoized = w, m.numArgs = y + 1, D;
          }, "memoizerific");
          return m.limit = d, m.wasMemoized = !1, m.cache = p, m.lru = f, m;
        };
      };
      function s(d, p) {
        var f = d.length, h = p.length, m, v, g;
        for (v = 0; v < f; v++) {
          for (m = !0, g = 0; g < h; g++)
            if (!c(d[v][g].arg, p[g].arg)) {
              m = !1;
              break;
            }
          if (m)
            break;
        }
        d.push(d.splice(v, 1)[0]);
      }
      l(s, "moveToMostRecentLru");
      function u(d) {
        var p = d.length, f = d[p - 1], h, m;
        for (f.cacheItem.delete(f.arg), m = p - 2; m >= 0 && (f = d[m], h = f.cacheItem.get(f.arg), !h || !h.size); m--)
          f.cacheItem.delete(f.arg);
      }
      l(u, "removeCachedResult");
      function c(d, p) {
        return d === p || d !== d && p !== p;
      }
      l(c, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});
function Si(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) >= 0) continue;
    r[n] = e[n];
  }
  return r;
}
var tc = z(() => {
  l(Si, "_objectWithoutPropertiesLoose");
});
function k2(e, t) {
  if (e == null) return {};
  var r, n, a = Si(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || {}.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  }
  return a;
}
var v6 = z(() => {
  tc(), l(k2, "_objectWithoutProperties");
});
function Po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
var F2 = z(() => {
  l(Po, "_arrayLikeToArray");
});
function B2(e) {
  if (Array.isArray(e)) return Po(e);
}
var w6 = z(() => {
  F2(), l(B2, "_arrayWithoutHoles");
});
function z2(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
var b6 = z(() => {
  l(z2, "_iterableToArray");
});
function _2(e, t) {
  if (e) {
    if (typeof e == "string") return Po(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Po(e, t) : void 0;
  }
}
var D6 = z(() => {
  F2(), l(_2, "_unsupportedIterableToArray");
});
function I2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var y6 = z(() => {
  l(I2, "_nonIterableSpread");
});
function R2(e) {
  return B2(e) || z2(e) || _2(e) || I2();
}
var E6 = z(() => {
  w6(), b6(), D6(), y6(), l(R2, "_toConsumableArray");
});
function sn(e) {
  "@babel/helpers - typeof";
  return sn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, sn(e);
}
var L2 = z(() => {
  l(sn, "_typeof");
});
function T2(e, t) {
  if (sn(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (sn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var C6 = z(() => {
  L2(), l(T2, "toPrimitive");
});
function M2(e) {
  var t = T2(e, "string");
  return sn(t) == "symbol" ? t : t + "";
}
var x6 = z(() => {
  L2(), C6(), l(M2, "toPropertyKey");
});
function rc(e, t, r) {
  return (t = M2(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
var H2 = z(() => {
  x6(), l(rc, "_defineProperty");
});
function Cu(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function cr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Cu(Object(r), !0).forEach(function(n) {
      rc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Cu(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function O2(e) {
  var t = e.length;
  if (t === 0 || t === 1) return e;
  if (t === 2)
    return [e[0], e[1], "".concat(e[0], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0])];
  if (t === 3)
    return [e[0], e[1], e[2], "".concat(e[0], ".").concat(e[1]), "".concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(e[0]), "".concat(
      e[1],
      "."
    ).concat(e[2]), "".concat(e[2], ".").concat(e[0]), "".concat(e[2], ".").concat(e[1]), "".concat(e[0], ".").concat(e[1], ".").concat(
      e[2]
    ), "".concat(e[0], ".").concat(e[2], ".").concat(e[1]), "".concat(e[1], ".").concat(e[0], ".").concat(e[2]), "".concat(e[1], ".").concat(
      e[2],
      "."
    ).concat(e[0]), "".concat(e[2], ".").concat(e[0], ".").concat(e[1]), "".concat(e[2], ".").concat(e[1], ".").concat(e[0])];
  if (t >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      "".concat(e[0], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[3]),
      "".concat(e[3], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(
        e[3],
        "."
      ).concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(
        e[1],
        "."
      ).concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[2], ".").concat(
        e[3]
      ),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[2]),
      "".concat(e[2], ".").concat(
        e[0],
        "."
      ).concat(e[1]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0]),
      "".concat(
        e[2],
        "."
      ).concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(
        e[1]
      ),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(
        e[1],
        "."
      ).concat(e[0]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0]),
      "".concat(
        e[3],
        "."
      ).concat(e[2], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[1], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[0], ".").concat(
        e[1],
        "."
      ).concat(e[3], ".").concat(e[2]),
      "".concat(e[0], ".").concat(e[2], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[0], ".").concat(
        e[2],
        "."
      ).concat(e[3], ".").concat(e[1]),
      "".concat(e[0], ".").concat(e[3], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[0], ".").concat(
        e[3],
        "."
      ).concat(e[2], ".").concat(e[1]),
      "".concat(e[1], ".").concat(e[0], ".").concat(e[2], ".").concat(e[3]),
      "".concat(e[1], ".").concat(
        e[0],
        "."
      ).concat(e[3], ".").concat(e[2]),
      "".concat(e[1], ".").concat(e[2], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[1], ".").concat(
        e[2],
        "."
      ).concat(e[3], ".").concat(e[0]),
      "".concat(e[1], ".").concat(e[3], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[1], ".").concat(
        e[3],
        "."
      ).concat(e[2], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[0], ".").concat(e[1], ".").concat(e[3]),
      "".concat(e[2], ".").concat(
        e[0],
        "."
      ).concat(e[3], ".").concat(e[1]),
      "".concat(e[2], ".").concat(e[1], ".").concat(e[0], ".").concat(e[3]),
      "".concat(e[2], ".").concat(
        e[1],
        "."
      ).concat(e[3], ".").concat(e[0]),
      "".concat(e[2], ".").concat(e[3], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[2], ".").concat(
        e[3],
        "."
      ).concat(e[1], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[0], ".").concat(e[1], ".").concat(e[2]),
      "".concat(e[3], ".").concat(
        e[0],
        "."
      ).concat(e[2], ".").concat(e[1]),
      "".concat(e[3], ".").concat(e[1], ".").concat(e[0], ".").concat(e[2]),
      "".concat(e[3], ".").concat(
        e[1],
        "."
      ).concat(e[2], ".").concat(e[0]),
      "".concat(e[3], ".").concat(e[2], ".").concat(e[0], ".").concat(e[1]),
      "".concat(e[3], ".").concat(
        e[2],
        "."
      ).concat(e[1], ".").concat(e[0])
    ];
}
function N2(e) {
  if (e.length === 0 || e.length === 1) return e;
  var t = e.join(".");
  return Do[t] || (Do[t] = O2(e)), Do[t];
}
function P2(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : void 0, n = e.filter(
    function(o) {
      return o !== "token";
    }
  ), a = N2(n);
  return a.reduce(function(o, s) {
    return cr(cr({}, o), r[s]);
  }, t);
}
function xu(e) {
  return e.join(" ");
}
function $2(e, t) {
  var r = 0;
  return function(n) {
    return r += 1, n.map(function(a, o) {
      return Ai({
        node: a,
        stylesheet: e,
        useInlineStyles: t,
        key: "code-segment-".concat(r, "-").concat(o)
      });
    });
  };
}
function Ai(e) {
  var t = e.node, r = e.stylesheet, n = e.style, a = n === void 0 ? {} : n, o = e.useInlineStyles, s = e.key, u = t.properties, c = t.type, d = t.tagName, p = t.value;
  if (c === "text")
    return p;
  if (d) {
    var f = $2(r, o), h;
    if (!o)
      h = cr(cr({}, u), {}, {
        className: xu(u.className)
      });
    else {
      var m = Object.keys(r).reduce(function(y, E) {
        return E.split(".").forEach(function(w) {
          y.includes(w) || y.push(w);
        }), y;
      }, []), v = u.className && u.className.includes("token") ? ["token"] : [], g = u.className && v.concat(u.className.filter(function(y) {
        return !m.includes(y);
      }));
      h = cr(cr({}, u), {}, {
        className: xu(g) || void 0,
        style: P2(u.className, Object.assign({}, u.style, a), r)
      });
    }
    var D = f(t.children);
    return /* @__PURE__ */ k.createElement(d, U({
      key: s
    }, h), D);
  }
}
var Do, j2 = z(() => {
  Xe(), H2(), l(Cu, "ownKeys"), l(cr, "_objectSpread"), l(O2, "powerSetPermutations"), Do = {}, l(N2, "getClassNameCombinations"), l(P2, "createStyleObject"), l(xu, "createClassNameString"), l($2, "createChildren"), l(Ai, "createElement");
}), V2, S6 = z(() => {
  V2 = /* @__PURE__ */ l(function(e, t) {
    var r = e.listLanguages();
    return r.indexOf(t) !== -1;
  }, "default");
});
function Su(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Su(Object(r), !0).forEach(function(n) {
      rc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Su(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function q2(e) {
  return e.match(Q2);
}
function W2(e) {
  var t = e.lines, r = e.startingLineNumber, n = e.style;
  return t.map(function(a, o) {
    var s = o + r;
    return /* @__PURE__ */ k.createElement("span", {
      key: "line-".concat(o),
      className: "react-syntax-highlighter-line-number",
      style: typeof n == "function" ? n(s) : n
    }, "".concat(s, `
`));
  });
}
function U2(e) {
  var t = e.codeString, r = e.codeStyle, n = e.containerStyle, a = n === void 0 ? {
    float: "left",
    paddingRight: "10px"
  } : n, o = e.numberStyle, s = o === void 0 ? {} : o, u = e.startingLineNumber;
  return /* @__PURE__ */ k.createElement("code", {
    style: Object.assign({}, r, a)
  }, W2({
    lines: t.replace(/\n$/, "").split(`
`),
    style: s,
    startingLineNumber: u
  }));
}
function G2(e) {
  return "".concat(e.toString().length, ".25em");
}
function nc(e, t) {
  return {
    type: "element",
    tagName: "span",
    properties: {
      key: "line-number--".concat(e),
      className: ["comment", "linenumber", "react-syntax-highlighter-line-number"],
      style: t
    },
    children: [{
      type: "text",
      value: e
    }]
  };
}
function ac(e, t, r) {
  var n = {
    display: "inline-block",
    minWidth: G2(r),
    paddingRight: "1em",
    textAlign: "right",
    userSelect: "none"
  }, a = typeof e == "function" ? e(t) : e, o = je(je({}, n), a);
  return o;
}
function ta(e) {
  var t = e.children, r = e.lineNumber, n = e.lineNumberStyle, a = e.largestLineNumber, o = e.showInlineLineNumbers, s = e.lineProps, u = s === void 0 ? {} : s, c = e.className, d = c === void 0 ? [] : c, p = e.showLineNumbers, f = e.wrapLongLines, h = typeof u == "function" ? u(r) : u;
  if (h.className = d, r && o) {
    var m = ac(n, r, a);
    t.unshift(nc(r, m));
  }
  return f & p && (h.style = je(je({}, h.style), {}, {
    display: "flex"
  })), {
    type: "element",
    tagName: "span",
    properties: h,
    children: t
  };
}
function oc(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [], n = 0; n < e.length; n++) {
    var a = e[n];
    if (a.type === "text")
      r.push(ta({
        children: [a],
        className: R2(new Set(t))
      }));
    else if (a.children) {
      var o = t.concat(a.properties.className);
      oc(a.children, o).forEach(function(s) {
        return r.push(s);
      });
    }
  }
  return r;
}
function Z2(e, t, r, n, a, o, s, u, c) {
  var d, p = oc(e.value), f = [], h = -1, m = 0;
  function v(C, S) {
    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return ta({
      children: C,
      lineNumber: S,
      lineNumberStyle: u,
      largestLineNumber: s,
      showInlineLineNumbers: a,
      lineProps: r,
      className: A,
      showLineNumbers: n,
      wrapLongLines: c
    });
  }
  l(v, "createWrappedLine");
  function g(C, S) {
    if (n && S && a) {
      var A = ac(u, S, s);
      C.unshift(nc(S, A));
    }
    return C;
  }
  l(g, "createUnwrappedLine");
  function D(C, S) {
    var A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return t || A.length > 0 ? v(C, S, A) : g(C, S);
  }
  l(D, "createLine");
  for (var y = /* @__PURE__ */ l(function() {
    var C = p[m], S = C.children[0].value, A = q2(S);
    if (A) {
      var x = S.split(`
`);
      x.forEach(function(F, B) {
        var _ = n && f.length + o, L = {
          type: "text",
          value: "".concat(F, `
`)
        };
        if (B === 0) {
          var R = p.slice(h + 1, m).concat(ta({
            children: [L],
            className: C.properties.className
          })), V = D(R, _);
          f.push(V);
        } else if (B === x.length - 1) {
          var T = p[m + 1] && p[m + 1].children && p[m + 1].children[0], O = {
            type: "text",
            value: "".concat(F)
          };
          if (T) {
            var j = ta({
              children: [O],
              className: C.properties.className
            });
            p.splice(m + 1, 0, j);
          } else {
            var Y = [O], P = D(Y, _, C.properties.className);
            f.push(P);
          }
        } else {
          var q = [L], K = D(q, _, C.properties.className);
          f.push(K);
        }
      }), h = m;
    }
    m++;
  }, "_loop"); m < p.length; )
    y();
  if (h !== p.length - 1) {
    var E = p.slice(h + 1, p.length);
    if (E && E.length) {
      var w = n && f.length + o, b = D(E, w);
      f.push(b);
    }
  }
  return t ? f : (d = []).concat.apply(d, f);
}
function Y2(e) {
  var t = e.rows, r = e.stylesheet, n = e.useInlineStyles;
  return t.map(function(a, o) {
    return Ai({
      node: a,
      stylesheet: r,
      useInlineStyles: n,
      key: "code-segement".concat(o)
    });
  });
}
function ic(e) {
  return e && typeof e.highlightAuto < "u";
}
function X2(e) {
  var t = e.astGenerator, r = e.language, n = e.code, a = e.defaultCodeValue;
  if (ic(t)) {
    var o = V2(t, r);
    return r === "text" ? {
      value: a,
      language: "text"
    } : o ? t.highlight(r, n) : t.highlightAuto(n);
  }
  try {
    return r && r !== "text" ? {
      value: t.highlight(n, r)
    } : {
      value: a
    };
  } catch {
    return {
      value: a
    };
  }
}
function K2(e, t) {
  return /* @__PURE__ */ l(function(r) {
    var n = r.language, a = r.children, o = r.style, s = o === void 0 ? t : o, u = r.customStyle, c = u === void 0 ? {} : u, d = r.codeTagProps, p = d === void 0 ? {
      className: n ? "language-".concat(n) : void 0,
      style: je(je({}, s['code[class*="language-"]']), s['code[class*="language-'.concat(n, '"]')])
    } : d, f = r.useInlineStyles, h = f === void 0 ? !0 : f, m = r.showLineNumbers, v = m === void 0 ? !1 : m, g = r.showInlineLineNumbers, D = g === void 0 ? !0 : g, y = r.startingLineNumber, E = y === void 0 ? 1 : y, w = r.lineNumberContainerStyle, b = r.lineNumberStyle, C = b === void 0 ? {} : b, S = r.wrapLines, A = r.wrapLongLines, x = A === void 0 ? !1 : A, F = r.lineProps, B = F === void 0 ? {} : F, _ = r.renderer, L = r.PreTag, R = L === void 0 ? "pre" : L, V = r.CodeTag, T = V === void 0 ? "code" : V, O = r.code, j = O === void 0 ? (Array.isArray(a) ? a[0] : a) || "" : O, Y = r.astGenerator, P = k2(r, J2);
    Y = Y || e;
    var q = v ? /* @__PURE__ */ k.createElement(U2, {
      containerStyle: w,
      codeStyle: p.style || {},
      numberStyle: C,
      startingLineNumber: E,
      codeString: j
    }) : null, K = s.hljs || s['pre[class*="language-"]'] || {
      backgroundColor: "#fff"
    }, de = ic(Y) ? "hljs" : "prismjs", J = h ? Object.assign({}, P, {
      style: Object.assign({}, K, c)
    }) : Object.assign({}, P, {
      className: P.className ? "".concat(de, " ").concat(P.className) : de,
      style: Object.assign({}, c)
    });
    if (x ? p.style = je(je({}, p.style), {}, {
      whiteSpace: "pre-wrap"
    }) : p.style = je(je({}, p.style), {}, {
      whiteSpace: "pre"
    }), !Y)
      return /* @__PURE__ */ k.createElement(R, J, q, /* @__PURE__ */ k.createElement(T, p, j));
    (S === void 0 && _ || x) && (S = !0), _ = _ || Y2;
    var me = [{
      type: "text",
      value: j
    }], M = X2({
      astGenerator: Y,
      language: n,
      code: j,
      defaultCodeValue: me
    });
    M.language === null && (M.value = me);
    var G = M.value.length + E, Z = Z2(M, S, B, v, D, E, G, C, x);
    return /* @__PURE__ */ k.createElement(R, J, /* @__PURE__ */ k.createElement(T, p, !D && q, _({
      rows: Z,
      stylesheet: s,
      useInlineStyles: h
    })));
  }, "SyntaxHighlighter");
}
var J2, Q2, A6 = z(() => {
  v6(), E6(), H2(), j2(), S6(), J2 = ["language", "children", "style", "customStyle", "codeTagProps", "useInlineStyles", "showLineNumbers", "showInlineLineNumbers", "startingLineNumber", "lineNumberContainerStyle", "lineNumberStyle", "wrapLines", "wrapLongLines", "lineProps", "renderer", "PreTag", "CodeTag", "code", "astGenerator"], l(Su, "ownKeys"), l(je, "_objectSpread"), Q2 = /\n/g, l(q2, "getNewLines"), l(W2, "getAllLineNumbers"), l(U2, "AllLineNumbers"), l(G2, "getEmWidthOfNumber"), l(nc, "getInlineLineNumber"), l(ac, "assembleLineNumberStyles"), l(ta, "createLineElement"), l(oc, "flattenCodeTree"), l(Z2, "processLines"), l(Y2, "defaultRenderer"), l(ic, "isHighlightJs"), l(X2, "getCodeTree"), l(K2, "default");
}), k6 = H((e, t) => {
  t.exports = n;
  var r = Object.prototype.hasOwnProperty;
  function n() {
    for (var a = {}, o = 0; o < arguments.length; o++) {
      var s = arguments[o];
      for (var u in s)
        r.call(s, u) && (a[u] = s[u]);
    }
    return a;
  }
  l(n, "extend");
}), em = H((e, t) => {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.normal = {}, r.property = {};
  function n(a, o, s) {
    this.property = a, this.normal = o, s && (this.space = s);
  }
  l(n, "Schema");
}), F6 = H((e, t) => {
  var r = k6(), n = em();
  t.exports = a;
  function a(o) {
    for (var s = o.length, u = [], c = [], d = -1, p, f; ++d < s; )
      p = o[d], u.push(p.property), c.push(p.normal), f = p.space;
    return new n(
      r.apply(null, u),
      r.apply(null, c),
      f
    );
  }
  l(a, "merge");
}), lc = H((e, t) => {
  t.exports = r;
  function r(n) {
    return n.toLowerCase();
  }
  l(r, "normalize");
}), tm = H((e, t) => {
  t.exports = n;
  var r = n.prototype;
  r.space = null, r.attribute = null, r.property = null, r.boolean = !1, r.booleanish = !1, r.overloadedBoolean = !1, r.number = !1, r.commaSeparated = !1, r.spaceSeparated = !1, r.commaOrSpaceSeparated = !1, r.mustUseProperty = !1, r.defined = !1;
  function n(a, o) {
    this.property = a, this.attribute = o;
  }
  l(n, "Info");
}), sc = H((e) => {
  var t = 0;
  e.boolean = r(), e.booleanish = r(), e.overloadedBoolean = r(), e.number = r(), e.spaceSeparated = r(), e.commaSeparated = r(), e.commaOrSpaceSeparated = r();
  function r() {
    return Math.pow(2, ++t);
  }
  l(r, "increment");
}), rm = H((e, t) => {
  var r = tm(), n = sc();
  t.exports = s, s.prototype = new r(), s.prototype.defined = !0;
  var a = [
    "boolean",
    "booleanish",
    "overloadedBoolean",
    "number",
    "commaSeparated",
    "spaceSeparated",
    "commaOrSpaceSeparated"
  ], o = a.length;
  function s(c, d, p, f) {
    var h = -1, m;
    for (u(this, "space", f), r.call(this, c, d); ++h < o; )
      m = a[h], u(this, m, (p & n[m]) === n[m]);
  }
  l(s, "DefinedInfo");
  function u(c, d, p) {
    p && (c[d] = p);
  }
  l(u, "mark");
}), Sa = H((e, t) => {
  var r = lc(), n = em(), a = rm();
  t.exports = o;
  function o(s) {
    var u = s.space, c = s.mustUseProperty || [], d = s.attributes || {}, p = s.properties, f = s.transform, h = {}, m = {}, v, g;
    for (v in p)
      g = new a(
        v,
        f(d, v),
        p[v],
        u
      ), c.indexOf(v) !== -1 && (g.mustUseProperty = !0), h[v] = g, m[r(v)] = v, m[r(g.attribute)] = v;
    return new n(h, m, u);
  }
  l(o, "create");
}), B6 = H((e, t) => {
  var r = Sa();
  t.exports = r({
    space: "xlink",
    transform: n,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
  function n(a, o) {
    return "xlink:" + o.slice(5).toLowerCase();
  }
  l(n, "xlinkTransform");
}), z6 = H((e, t) => {
  var r = Sa();
  t.exports = r({
    space: "xml",
    transform: n,
    properties: {
      xmlLang: null,
      xmlBase: null,
      xmlSpace: null
    }
  });
  function n(a, o) {
    return "xml:" + o.slice(3).toLowerCase();
  }
  l(n, "xmlTransform");
}), _6 = H((e, t) => {
  t.exports = r;
  function r(n, a) {
    return a in n ? n[a] : a;
  }
  l(r, "caseSensitiveTransform");
}), nm = H((e, t) => {
  var r = _6();
  t.exports = n;
  function n(a, o) {
    return r(a, o.toLowerCase());
  }
  l(n, "caseInsensitiveTransform");
}), I6 = H((e, t) => {
  var r = Sa(), n = nm();
  t.exports = r({
    space: "xmlns",
    attributes: {
      xmlnsxlink: "xmlns:xlink"
    },
    transform: n,
    properties: {
      xmlns: null,
      xmlnsXLink: null
    }
  });
}), R6 = H((e, t) => {
  var r = sc(), n = Sa(), a = r.booleanish, o = r.number, s = r.spaceSeparated;
  t.exports = n({
    transform: u,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: a,
      ariaAutoComplete: null,
      ariaBusy: a,
      ariaChecked: a,
      ariaColCount: o,
      ariaColIndex: o,
      ariaColSpan: o,
      ariaControls: s,
      ariaCurrent: null,
      ariaDescribedBy: s,
      ariaDetails: null,
      ariaDisabled: a,
      ariaDropEffect: s,
      ariaErrorMessage: null,
      ariaExpanded: a,
      ariaFlowTo: s,
      ariaGrabbed: a,
      ariaHasPopup: null,
      ariaHidden: a,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: s,
      ariaLevel: o,
      ariaLive: null,
      ariaModal: a,
      ariaMultiLine: a,
      ariaMultiSelectable: a,
      ariaOrientation: null,
      ariaOwns: s,
      ariaPlaceholder: null,
      ariaPosInSet: o,
      ariaPressed: a,
      ariaReadOnly: a,
      ariaRelevant: null,
      ariaRequired: a,
      ariaRoleDescription: s,
      ariaRowCount: o,
      ariaRowIndex: o,
      ariaRowSpan: o,
      ariaSelected: a,
      ariaSetSize: o,
      ariaSort: null,
      ariaValueMax: o,
      ariaValueMin: o,
      ariaValueNow: o,
      ariaValueText: null,
      role: null
    }
  });
  function u(c, d) {
    return d === "role" ? d : "aria-" + d.slice(4).toLowerCase();
  }
  l(u, "ariaTransform");
}), L6 = H((e, t) => {
  var r = sc(), n = Sa(), a = nm(), o = r.boolean, s = r.overloadedBoolean, u = r.booleanish, c = r.number, d = r.spaceSeparated, p = r.commaSeparated;
  t.exports = n({
    space: "html",
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    transform: a,
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: p,
      acceptCharset: d,
      accessKey: d,
      action: null,
      allow: null,
      allowFullScreen: o,
      allowPaymentRequest: o,
      allowUserMedia: o,
      alt: null,
      as: null,
      async: o,
      autoCapitalize: null,
      autoComplete: d,
      autoFocus: o,
      autoPlay: o,
      capture: o,
      charSet: null,
      checked: o,
      cite: null,
      className: d,
      cols: c,
      colSpan: null,
      content: null,
      contentEditable: u,
      controls: o,
      controlsList: d,
      coords: c | p,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: o,
      defer: o,
      dir: null,
      dirName: null,
      disabled: o,
      download: s,
      draggable: u,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: o,
      formTarget: null,
      headers: d,
      height: c,
      hidden: o,
      high: c,
      href: null,
      hrefLang: null,
      htmlFor: d,
      httpEquiv: d,
      id: null,
      imageSizes: null,
      imageSrcSet: p,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: o,
      itemId: null,
      itemProp: d,
      itemRef: d,
      itemScope: o,
      itemType: d,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: o,
      low: c,
      manifest: null,
      max: null,
      maxLength: c,
      media: null,
      method: null,
      min: null,
      minLength: c,
      multiple: o,
      muted: o,
      name: null,
      nonce: null,
      noModule: o,
      noValidate: o,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: o,
      optimum: c,
      pattern: null,
      ping: d,
      placeholder: null,
      playsInline: o,
      poster: null,
      preload: null,
      readOnly: o,
      referrerPolicy: null,
      rel: d,
      required: o,
      reversed: o,
      rows: c,
      rowSpan: c,
      sandbox: d,
      scope: null,
      scoped: o,
      seamless: o,
      selected: o,
      shape: null,
      size: c,
      sizes: null,
      slot: null,
      span: c,
      spellCheck: u,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: p,
      start: c,
      step: null,
      style: null,
      tabIndex: c,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: o,
      useMap: null,
      value: u,
      width: c,
      wrap: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: d,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: c,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: c,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: o,
      // Lists. Use CSS to reduce space between items instead
      declare: o,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: c,
      // `<img>` and `<object>`
      leftMargin: c,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: c,
      // `<body>`
      marginWidth: c,
      // `<body>`
      noResize: o,
      // `<frame>`
      noHref: o,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: o,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: o,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: c,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: u,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: c,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: c,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: o,
      disableRemotePlayback: o,
      prefix: null,
      property: null,
      results: c,
      security: null,
      unselectable: null
    }
  });
}), T6 = H((e, t) => {
  var r = F6(), n = B6(), a = z6(), o = I6(), s = R6(), u = L6();
  t.exports = r([a, n, o, s, u]);
}), M6 = H((e, t) => {
  var r = lc(), n = rm(), a = tm(), o = "data";
  t.exports = d;
  var s = /^data[-\w.:]+$/i, u = /-[a-z]/g, c = /[A-Z]/g;
  function d(v, g) {
    var D = r(g), y = g, E = a;
    return D in v.normal ? v.property[v.normal[D]] : (D.length > 4 && D.slice(0, 4) === o && s.test(g) && (g.charAt(4) === "-" ? y = p(g) : g = f(g), E = n), new E(y, g));
  }
  l(d, "find");
  function p(v) {
    var g = v.slice(5).replace(u, m);
    return o + g.charAt(0).toUpperCase() + g.slice(1);
  }
  l(p, "datasetToProperty");
  function f(v) {
    var g = v.slice(4);
    return u.test(g) ? v : (g = g.replace(c, h), g.charAt(0) !== "-" && (g = "-" + g), o + g);
  }
  l(f, "datasetToAttribute");
  function h(v) {
    return "-" + v.toLowerCase();
  }
  l(h, "kebab");
  function m(v) {
    return v.charAt(1).toUpperCase();
  }
  l(m, "camelcase");
}), H6 = H((e, t) => {
  t.exports = n;
  var r = /[#.]/g;
  function n(a, o) {
    for (var s = a || "", u = o || "div", c = {}, d = 0, p, f, h; d < s.length; )
      r.lastIndex = d, h = r.exec(s), p = s.slice(d, h ? h.index : s.length), p && (f ? f === "#" ? c.id = p : c.className ? c.className.push(
        p
      ) : c.className = [p] : u = p, d += p.length), h && (f = h[0], d++);
    return { type: "element", tagName: u, properties: c, children: [] };
  }
  l(n, "parse");
}), O6 = H((e) => {
  e.parse = a, e.stringify = o;
  var t = "", r = " ", n = /[ \t\n\r\f]+/g;
  function a(s) {
    var u = String(s || t).trim();
    return u === t ? [] : u.split(n);
  }
  l(a, "parse");
  function o(s) {
    return s.join(r).trim();
  }
  l(o, "stringify");
}), N6 = H((e) => {
  e.parse = a, e.stringify = o;
  var t = ",", r = " ", n = "";
  function a(s) {
    for (var u = [], c = String(s || n), d = c.indexOf(t), p = 0, f = !1, h; !f; )
      d === -1 && (d = c.length, f = !0), h = c.slice(p, d).trim(), (h || !f) && u.push(h), p = d + 1, d = c.indexOf(t, p);
    return u;
  }
  l(a, "parse");
  function o(s, u) {
    var c = u || {}, d = c.padLeft === !1 ? n : r, p = c.padRight ? r : n;
    return s[s.length - 1] === n && (s = s.concat(n)), s.join(p + t + d).trim();
  }
  l(o, "stringify");
}), P6 = H((e, t) => {
  var r = M6(), n = lc(), a = H6(), o = O6().parse, s = N6().parse;
  t.exports = c;
  var u = {}.hasOwnProperty;
  function c(D, y, E) {
    var w = E ? g(E) : null;
    return b;
    function b(S, A) {
      var x = a(S, y), F = Array.prototype.slice.call(arguments, 2), B = x.tagName.toLowerCase(), _;
      if (x.tagName = w && u.call(w, B) ? w[B] : B, A && d(A, x) && (F.unshift(A), A = null), A)
        for (_ in A)
          C(x.properties, _, A[_]);
      return f(x.children, F), x.tagName === "template" && (x.content = { type: "root", children: x.children }, x.children = []), x;
    }
    function C(S, A, x) {
      var F, B, _;
      x == null || x !== x || (F = r(D, A), B = F.property, _ = x, typeof _ == "string" && (F.spaceSeparated ? _ = o(_) : F.commaSeparated ? _ = s(_) : F.commaOrSpaceSeparated && (_ = o(s(_).join(" ")))), B === "style" && typeof x != "string" && (_ = v(_)), B === "className" && S.className && (_ = S.className.concat(_)), S[B] = h(F, B, _));
    }
  }
  l(c, "factory");
  function d(D, y) {
    return typeof D == "string" || "length" in D || p(y.tagName, D);
  }
  l(d, "isChildren");
  function p(D, y) {
    var E = y.type;
    return D === "input" || !E || typeof E != "string" ? !1 : typeof y.children == "object" && "length" in y.children ? !0 : (E = E.toLowerCase(), D === "button" ? E !== "menu" && E !== "submit" && E !== "reset" && E !== "button" : "value" in y);
  }
  l(p, "isNode");
  function f(D, y) {
    var E, w;
    if (typeof y == "string" || typeof y == "number") {
      D.push({ type: "text", value: String(y) });
      return;
    }
    if (typeof y == "object" && "length" in y) {
      for (E = -1, w = y.length; ++E < w; )
        f(D, y[E]);
      return;
    }
    if (typeof y != "object" || !("type" in y))
      throw new Error("Expected node, nodes, or string, got `" + y + "`");
    D.push(y);
  }
  l(f, "addChild");
  function h(D, y, E) {
    var w, b, C;
    if (typeof E != "object" || !("length" in E))
      return m(D, y, E);
    for (b = E.length, w = -1, C = []; ++w < b; )
      C[w] = m(D, y, E[w]);
    return C;
  }
  l(h, "parsePrimitives");
  function m(D, y, E) {
    var w = E;
    return D.number || D.positiveNumber ? !isNaN(w) && w !== "" && (w = Number(w)) : (D.boolean || D.overloadedBoolean) && typeof w == "string" && (w === "" || n(E) === n(y)) && (w = !0), w;
  }
  l(m, "parsePrimitive");
  function v(D) {
    var y = [], E;
    for (E in D)
      y.push([E, D[E]].join(": "));
    return y.join("; ");
  }
  l(v, "style");
  function g(D) {
    for (var y = D.length, E = -1, w = {}, b; ++E < y; )
      b = D[E], w[b.toLowerCase()] = b;
    return w;
  }
  l(g, "createAdjustMap");
}), $6 = H((e, t) => {
  var r = T6(), n = P6(), a = n(r, "div");
  a.displayName = "html", t.exports = a;
}), j6 = H((e, t) => {
  t.exports = $6();
}), V6 = H((e, t) => {
  t.exports = {
    AElig: "Æ",
    AMP: "&",
    Aacute: "Á",
    Acirc: "Â",
    Agrave: "À",
    Aring: "Å",
    Atilde: "Ã",
    Auml: "Ä",
    COPY: "©",
    Ccedil: "Ç",
    ETH: "Ð",
    Eacute: "É",
    Ecirc: "Ê",
    Egrave: "È",
    Euml: "Ë",
    GT: ">",
    Iacute: "Í",
    Icirc: "Î",
    Igrave: "Ì",
    Iuml: "Ï",
    LT: "<",
    Ntilde: "Ñ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ograve: "Ò",
    Oslash: "Ø",
    Otilde: "Õ",
    Ouml: "Ö",
    QUOT: '"',
    REG: "®",
    THORN: "Þ",
    Uacute: "Ú",
    Ucirc: "Û",
    Ugrave: "Ù",
    Uuml: "Ü",
    Yacute: "Ý",
    aacute: "á",
    acirc: "â",
    acute: "´",
    aelig: "æ",
    agrave: "à",
    amp: "&",
    aring: "å",
    atilde: "ã",
    auml: "ä",
    brvbar: "¦",
    ccedil: "ç",
    cedil: "¸",
    cent: "¢",
    copy: "©",
    curren: "¤",
    deg: "°",
    divide: "÷",
    eacute: "é",
    ecirc: "ê",
    egrave: "è",
    eth: "ð",
    euml: "ë",
    frac12: "½",
    frac14: "¼",
    frac34: "¾",
    gt: ">",
    iacute: "í",
    icirc: "î",
    iexcl: "¡",
    igrave: "ì",
    iquest: "¿",
    iuml: "ï",
    laquo: "«",
    lt: "<",
    macr: "¯",
    micro: "µ",
    middot: "·",
    nbsp: " ",
    not: "¬",
    ntilde: "ñ",
    oacute: "ó",
    ocirc: "ô",
    ograve: "ò",
    ordf: "ª",
    ordm: "º",
    oslash: "ø",
    otilde: "õ",
    ouml: "ö",
    para: "¶",
    plusmn: "±",
    pound: "£",
    quot: '"',
    raquo: "»",
    reg: "®",
    sect: "§",
    shy: "­",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    szlig: "ß",
    thorn: "þ",
    times: "×",
    uacute: "ú",
    ucirc: "û",
    ugrave: "ù",
    uml: "¨",
    uuml: "ü",
    yacute: "ý",
    yen: "¥",
    yuml: "ÿ"
  };
}), q6 = H((e, t) => {
  t.exports = {
    0: "�",
    128: "€",
    130: "‚",
    131: "ƒ",
    132: "„",
    133: "…",
    134: "†",
    135: "‡",
    136: "ˆ",
    137: "‰",
    138: "Š",
    139: "‹",
    140: "Œ",
    142: "Ž",
    145: "‘",
    146: "’",
    147: "“",
    148: "”",
    149: "•",
    150: "–",
    151: "—",
    152: "˜",
    153: "™",
    154: "š",
    155: "›",
    156: "œ",
    158: "ž",
    159: "Ÿ"
  };
}), am = H((e, t) => {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 48 && a <= 57;
  }
  l(r, "decimal");
}), W6 = H((e, t) => {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 97 && a <= 102 || a >= 65 && a <= 70 || a >= 48 && a <= 57;
  }
  l(r, "hexadecimal");
}), U6 = H((e, t) => {
  t.exports = r;
  function r(n) {
    var a = typeof n == "string" ? n.charCodeAt(0) : n;
    return a >= 97 && a <= 122 || a >= 65 && a <= 90;
  }
  l(r, "alphabetical");
}), G6 = H((e, t) => {
  var r = U6(), n = am();
  t.exports = a;
  function a(o) {
    return r(o) || n(o);
  }
  l(a, "alphanumerical");
}), Z6 = H((e, t) => {
  var r, n = 59;
  t.exports = a;
  function a(o) {
    var s = "&" + o + ";", u;
    return r = r || document.createElement("i"), r.innerHTML = s, u = r.textContent, u.charCodeAt(u.length - 1) === n && o !== "semi" || u === s ? !1 : u;
  }
  l(a, "decodeEntity");
}), Y6 = H((e, t) => {
  var r = V6(), n = q6(), a = am(), o = W6(), s = G6(), u = Z6();
  t.exports = K;
  var c = {}.hasOwnProperty, d = String.fromCharCode, p = Function.prototype, f = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0
  }, h = 9, m = 10, v = 12, g = 32, D = 38, y = 59, E = 60, w = 61, b = 35, C = 88, S = 120, A = 65533, x = "named", F = "hexadecimal", B = "decimal", _ = {};
  _[F] = 16, _[B] = 10;
  var L = {};
  L[x] = s, L[B] = a, L[F] = o;
  var R = 1, V = 2, T = 3, O = 4, j = 5, Y = 6, P = 7, q = {};
  q[R] = "Named character references must be terminated by a semicolon", q[V] = "Numeric character references must be terminated by a semicolon", q[T] = "Named character references cannot be empty", q[O] = "Numeric character references cannot be empty", q[j] = "Named character references must be known", q[Y] = "Numeric character references cannot be disallowed", q[P] = "Numeric character references cannot be outside the permissible Unicode range";
  function K(M, G) {
    var Z = {}, pe, Se;
    G || (G = {});
    for (Se in f)
      pe = G[Se], Z[Se] = pe ?? f[Se];
    return (Z.position.indent || Z.position.start) && (Z.indent = Z.position.indent || [], Z.position = Z.position.start), de(M, Z);
  }
  l(K, "parseEntities");
  function de(M, G) {
    var Z = G.additional, pe = G.nonTerminated, Se = G.text, Jt = G.reference, Qe = G.warning, _t = G.textContext, Ir = G.referenceContext, Qt = G.warningContext, xn = G.position, Va = G.indent || [], Rr = M.length, et = 0, qa = -1, ge = xn.column || 1, er = xn.line || 1, tt = "", Lr = [], rt, Tr, nt, he, Oe, oe, te, at, Wa, cl, tr, Sn, rr, bt, L1, An, Ua, ot, ie;
    for (typeof Z == "string" && (Z = Z.charCodeAt(0)), An = kn(), at = Qe ? l6 : p, et--, Rr++; ++et < Rr; )
      if (Oe === m && (ge = Va[qa] || 1), Oe = M.charCodeAt(et), Oe === D) {
        if (te = M.charCodeAt(et + 1), te === h || te === m || te === v || te === g || te === D || te === E || te !== te || Z && te === Z) {
          tt += d(Oe), ge++;
          continue;
        }
        for (rr = et + 1, Sn = rr, ie = rr, te === b ? (ie = ++Sn, te = M.charCodeAt(ie), te === C || te === S ? (bt = F, ie = ++Sn) : bt = B) : bt = x, rt = "", tr = "", he = "", L1 = L[bt], ie--; ++ie < Rr && (te = M.charCodeAt(ie), !!L1(te)); )
          he += d(te), bt === x && c.call(r, he) && (rt = he, tr = r[he]);
        nt = M.charCodeAt(ie) === y, nt && (ie++, Tr = bt === x ? u(he) : !1, Tr && (rt = he, tr = Tr)), ot = 1 + ie - rr, !nt && !pe || (he ? bt === x ? (nt && !tr ? at(j, 1) : (rt !== he && (ie = Sn + rt.length, ot = 1 + ie - Sn, nt = !1), nt || (Wa = rt ? R : T, G.attribute ? (te = M.charCodeAt(ie), te === w ? (at(Wa, ot), tr = null) : s(te) ? tr = null : at(Wa, ot)) : at(Wa, ot))), oe = tr) : (nt || at(V, ot), oe = parseInt(he, _[bt]), J(oe) ? (at(P, ot), oe = d(A)) : oe in n ? (at(Y, ot), oe = n[oe]) : (cl = "", me(oe) && at(Y, ot), oe > 65535 && (oe -= 65536, cl += d(oe >>> 10 | 55296), oe = 56320 | oe & 1023), oe = cl + d(oe))) : bt !== x && at(O, ot)), oe ? (T1(), An = kn(), et = ie - 1, ge += ie - rr + 1, Lr.push(oe), Ua = kn(), Ua.offset++, Jt && Jt.call(
          Ir,
          oe,
          { start: An, end: Ua },
          M.slice(rr - 1, ie)
        ), An = Ua) : (he = M.slice(rr - 1, ie), tt += he, ge += he.length, et = ie - 1);
      } else
        Oe === 10 && (er++, qa++, ge = 0), Oe === Oe ? (tt += d(Oe), ge++) : T1();
    return Lr.join("");
    function kn() {
      return {
        line: er,
        column: ge,
        offset: et + (xn.offset || 0)
      };
    }
    function l6(M1, H1) {
      var dl = kn();
      dl.column += H1, dl.offset += H1, Qe.call(Qt, q[M1], dl, M1);
    }
    function T1() {
      tt && (Lr.push(tt), Se && Se.call(_t, tt, { start: An, end: kn() }), tt = "");
    }
  }
  l(de, "parse");
  function J(M) {
    return M >= 55296 && M <= 57343 || M > 1114111;
  }
  l(J, "prohibited");
  function me(M) {
    return M >= 1 && M <= 8 || M === 11 || M >= 13 && M <= 31 || M >= 127 && M <= 159 || M >= 64976 && M <= 65007 || (M & 65535) === 65535 || (M & 65535) === 65534;
  }
  l(me, "disallowed");
}), X6 = H((e, t) => {
  var r = typeof window < "u" ? window : typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope ? self : {}, n = function(a) {
    var o = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i, s = 0, u = {}, c = {
      /**
       * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
       * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
       * additional languages or plugins yourself.
       *
       * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
       *
       * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.manual = true;
       * // add a new <script> to load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      manual: a.Prism && a.Prism.manual,
      /**
       * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
       * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
       * own worker, you don't want it to do this.
       *
       * By setting this value to `true`, Prism will not add its own listeners to the worker.
       *
       * You obviously have to change this value before Prism executes. To do this, you can add an
       * empty Prism object into the global scope before loading the Prism script like this:
       *
       * ```js
       * window.Prism = window.Prism || {};
       * Prism.disableWorkerMessageHandler = true;
       * // Load Prism's script
       * ```
       *
       * @default false
       * @type {boolean}
       * @memberof Prism
       * @public
       */
      disableWorkerMessageHandler: a.Prism && a.Prism.disableWorkerMessageHandler,
      /**
       * A namespace for utility methods.
       *
       * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
       * change or disappear at any time.
       *
       * @namespace
       * @memberof Prism
       */
      util: {
        encode: /* @__PURE__ */ l(function w(b) {
          return b instanceof d ? new d(b.type, w(b.content), b.alias) : Array.isArray(b) ? b.map(w) : b.replace(/&/g, "&amp;").replace(
            /</g,
            "&lt;"
          ).replace(/\u00a0/g, " ");
        }, "encode"),
        /**
         * Returns the name of the type of the given value.
         *
         * @param {any} o
         * @returns {string}
         * @example
         * type(null)      === 'Null'
         * type(undefined) === 'Undefined'
         * type(123)       === 'Number'
         * type('foo')     === 'String'
         * type(true)      === 'Boolean'
         * type([1, 2])    === 'Array'
         * type({})        === 'Object'
         * type(String)    === 'Function'
         * type(/abc+/)    === 'RegExp'
         */
        type: /* @__PURE__ */ l(function(w) {
          return Object.prototype.toString.call(w).slice(8, -1);
        }, "type"),
        /**
         * Returns a unique number for the given object. Later calls will still return the same number.
         *
         * @param {Object} obj
         * @returns {number}
         */
        objId: /* @__PURE__ */ l(function(w) {
          return w.__id || Object.defineProperty(w, "__id", { value: ++s }), w.__id;
        }, "objId"),
        /**
         * Creates a deep clone of the given object.
         *
         * The main intended use of this function is to clone language definitions.
         *
         * @param {T} o
         * @param {Record<number, any>} [visited]
         * @returns {T}
         * @template T
         */
        clone: /* @__PURE__ */ l(function w(b, C) {
          C = C || {};
          var S, A;
          switch (c.util.type(b)) {
            case "Object":
              if (A = c.util.objId(b), C[A])
                return C[A];
              S = /** @type {Record<string, any>} */
              {}, C[A] = S;
              for (var x in b)
                b.hasOwnProperty(x) && (S[x] = w(b[x], C));
              return (
                /** @type {any} */
                S
              );
            case "Array":
              return A = c.util.objId(b), C[A] ? C[A] : (S = [], C[A] = S, /** @type {Array} */
              /** @type {any} */
              b.forEach(function(F, B) {
                S[B] = w(F, C);
              }), /** @type {any} */
              S);
            default:
              return b;
          }
        }, "deepClone"),
        /**
         * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
         *
         * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
         *
         * @param {Element} element
         * @returns {string}
         */
        getLanguage: /* @__PURE__ */ l(function(w) {
          for (; w; ) {
            var b = o.exec(w.className);
            if (b)
              return b[1].toLowerCase();
            w = w.parentElement;
          }
          return "none";
        }, "getLanguage"),
        /**
         * Sets the Prism `language-xxxx` class of the given element.
         *
         * @param {Element} element
         * @param {string} language
         * @returns {void}
         */
        setLanguage: /* @__PURE__ */ l(function(w, b) {
          w.className = w.className.replace(RegExp(o, "gi"), ""), w.classList.add("language-" + b);
        }, "setLanguage"),
        /**
         * Returns the script element that is currently executing.
         *
         * This does __not__ work for line script element.
         *
         * @returns {HTMLScriptElement | null}
         */
        currentScript: /* @__PURE__ */ l(function() {
          if (typeof document > "u")
            return null;
          if ("currentScript" in document)
            return (
              /** @type {any} */
              document.currentScript
            );
          try {
            throw new Error();
          } catch (S) {
            var w = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(S.stack) || [])[1];
            if (w) {
              var b = document.getElementsByTagName("script");
              for (var C in b)
                if (b[C].src == w)
                  return b[C];
            }
            return null;
          }
        }, "currentScript"),
        /**
         * Returns whether a given class is active for `element`.
         *
         * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
         * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
         * given class is just the given class with a `no-` prefix.
         *
         * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
         * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
         * ancestors have the given class or the negated version of it, then the default activation will be returned.
         *
         * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
         * version of it, the class is considered active.
         *
         * @param {Element} element
         * @param {string} className
         * @param {boolean} [defaultActivation=false]
         * @returns {boolean}
         */
        isActive: /* @__PURE__ */ l(function(w, b, C) {
          for (var S = "no-" + b; w; ) {
            var A = w.classList;
            if (A.contains(b))
              return !0;
            if (A.contains(S))
              return !1;
            w = w.parentElement;
          }
          return !!C;
        }, "isActive")
      },
      /**
       * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
       *
       * @namespace
       * @memberof Prism
       * @public
       */
      languages: {
        /**
         * The grammar for plain, unformatted text.
         */
        plain: u,
        plaintext: u,
        text: u,
        txt: u,
        /**
         * Creates a deep copy of the language with the given id and appends the given tokens.
         *
         * If a token in `redef` also appears in the copied language, then the existing token in the copied language
         * will be overwritten at its original position.
         *
         * ## Best practices
         *
         * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
         * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
         * understand the language definition because, normally, the order of tokens matters in Prism grammars.
         *
         * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
         * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
         *
         * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
         * @param {Grammar} redef The new tokens to append.
         * @returns {Grammar} The new language created.
         * @public
         * @example
         * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
         *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
         *     // at its original position
         *     'comment': { ... },
         *     // CSS doesn't have a 'color' token, so this token will be appended
         *     'color': /\b(?:red|green|blue)\b/
         * });
         */
        extend: /* @__PURE__ */ l(function(w, b) {
          var C = c.util.clone(c.languages[w]);
          for (var S in b)
            C[S] = b[S];
          return C;
        }, "extend"),
        /**
         * Inserts tokens _before_ another token in a language definition or any other grammar.
         *
         * ## Usage
         *
         * This helper method makes it easy to modify existing languages. For example, the CSS language definition
         * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
         * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
         * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
         * this:
         *
         * ```js
         * Prism.languages.markup.style = {
         *     // token
         * };
         * ```
         *
         * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
         * before existing tokens. For the CSS example above, you would use it like this:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'cdata', {
         *     'style': {
         *         // token
         *     }
         * });
         * ```
         *
         * ## Special cases
         *
         * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
         * will be ignored.
         *
         * This behavior can be used to insert tokens after `before`:
         *
         * ```js
         * Prism.languages.insertBefore('markup', 'comment', {
         *     'comment': Prism.languages.markup.comment,
         *     // tokens after 'comment'
         * });
         * ```
         *
         * ## Limitations
         *
         * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
         * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
         * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
         * deleting properties which is necessary to insert at arbitrary positions.
         *
         * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
         * Instead, it will create a new object and replace all references to the target object with the new one. This
         * can be done without temporarily deleting properties, so the iteration order is well-defined.
         *
         * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
         * you hold the target object in a variable, then the value of the variable will not change.
         *
         * ```js
         * var oldMarkup = Prism.languages.markup;
         * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
         *
         * assert(oldMarkup !== Prism.languages.markup);
         * assert(newMarkup === Prism.languages.markup);
         * ```
         *
         * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
         * object to be modified.
         * @param {string} before The key to insert before.
         * @param {Grammar} insert An object containing the key-value pairs to be inserted.
         * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
         * object to be modified.
         *
         * Defaults to `Prism.languages`.
         * @returns {Grammar} The new grammar object.
         * @public
         */
        insertBefore: /* @__PURE__ */ l(function(w, b, C, S) {
          S = S || /** @type {any} */
          c.languages;
          var A = S[w], x = {};
          for (var F in A)
            if (A.hasOwnProperty(F)) {
              if (F == b)
                for (var B in C)
                  C.hasOwnProperty(B) && (x[B] = C[B]);
              C.hasOwnProperty(F) || (x[F] = A[F]);
            }
          var _ = S[w];
          return S[w] = x, c.languages.DFS(c.languages, function(L, R) {
            R === _ && L != w && (this[L] = x);
          }), x;
        }, "insertBefore"),
        // Traverse a language definition with Depth First Search
        DFS: /* @__PURE__ */ l(function w(b, C, S, A) {
          A = A || {};
          var x = c.util.objId;
          for (var F in b)
            if (b.hasOwnProperty(F)) {
              C.call(b, F, b[F], S || F);
              var B = b[F], _ = c.util.type(B);
              _ === "Object" && !A[x(B)] ? (A[x(B)] = !0, w(B, C, null, A)) : _ === "Array" && !A[x(B)] && (A[x(B)] = !0, w(B, C, F, A));
            }
        }, "DFS")
      },
      plugins: {},
      /**
       * This is the most high-level function in Prism’s API.
       * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
       * each one of them.
       *
       * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
       *
       * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
       * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
       * @memberof Prism
       * @public
       */
      highlightAll: /* @__PURE__ */ l(function(w, b) {
        c.highlightAllUnder(document, w, b);
      }, "highlightAll"),
      /**
       * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
       * {@link Prism.highlightElement} on each one of them.
       *
       * The following hooks will be run:
       * 1. `before-highlightall`
       * 2. `before-all-elements-highlight`
       * 3. All hooks of {@link Prism.highlightElement} for each element.
       *
       * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
       * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
       * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
       * @memberof Prism
       * @public
       */
      highlightAllUnder: /* @__PURE__ */ l(function(w, b, C) {
        var S = {
          callback: C,
          container: w,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        c.hooks.run("before-highlightall", S), S.elements = Array.prototype.slice.apply(S.container.querySelectorAll(S.selector)), c.hooks.run(
          "before-all-elements-highlight",
          S
        );
        for (var A = 0, x; x = S.elements[A++]; )
          c.highlightElement(x, b === !0, S.callback);
      }, "highlightAllUnder"),
      /**
       * Highlights the code inside a single element.
       *
       * The following hooks will be run:
       * 1. `before-sanity-check`
       * 2. `before-highlight`
       * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
       * 4. `before-insert`
       * 5. `after-highlight`
       * 6. `complete`
       *
       * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
       * the element's language.
       *
       * @param {Element} element The element containing the code.
       * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
       * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
       * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
       * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
       *
       * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
       * asynchronous highlighting to work. You can build your own bundle on the
       * [Download page](https://prismjs.com/download.html).
       * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
       * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
       * @memberof Prism
       * @public
       */
      highlightElement: /* @__PURE__ */ l(function(w, b, C) {
        var S = c.util.getLanguage(w), A = c.languages[S];
        c.util.setLanguage(w, S);
        var x = w.parentElement;
        x && x.nodeName.toLowerCase() === "pre" && c.util.setLanguage(x, S);
        var F = w.textContent, B = {
          element: w,
          language: S,
          grammar: A,
          code: F
        };
        function _(R) {
          B.highlightedCode = R, c.hooks.run("before-insert", B), B.element.innerHTML = B.highlightedCode, c.hooks.run("after-highlight", B), c.hooks.run("complete", B), C && C.call(B.element);
        }
        if (l(_, "insertHighlightedCode"), c.hooks.run("before-sanity-check", B), x = B.element.parentElement, x && x.nodeName.toLowerCase() === "pre" && !x.hasAttribute("tabindex") && x.setAttribute("tabindex", "0"), !B.code) {
          c.hooks.run("complete", B), C && C.call(B.element);
          return;
        }
        if (c.hooks.run("before-highlight", B), !B.grammar) {
          _(c.util.encode(B.code));
          return;
        }
        if (b && a.Worker) {
          var L = new Worker(c.filename);
          L.onmessage = function(R) {
            _(R.data);
          }, L.postMessage(JSON.stringify({
            language: B.language,
            code: B.code,
            immediateClose: !0
          }));
        } else
          _(c.highlight(B.code, B.grammar, B.language));
      }, "highlightElement"),
      /**
       * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
       * and the language definitions to use, and returns a string with the HTML produced.
       *
       * The following hooks will be run:
       * 1. `before-tokenize`
       * 2. `after-tokenize`
       * 3. `wrap`: On each {@link Token}.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @param {string} language The name of the language definition passed to `grammar`.
       * @returns {string} The highlighted HTML.
       * @memberof Prism
       * @public
       * @example
       * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
       */
      highlight: /* @__PURE__ */ l(function(w, b, C) {
        var S = {
          code: w,
          grammar: b,
          language: C
        };
        if (c.hooks.run("before-tokenize", S), !S.grammar)
          throw new Error('The language "' + S.language + '" has no grammar.');
        return S.tokens = c.tokenize(S.code, S.grammar), c.hooks.run("after-tokenize", S), d.stringify(c.util.encode(S.tokens), S.language);
      }, "highlight"),
      /**
       * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
       * and the language definitions to use, and returns an array with the tokenized code.
       *
       * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
       *
       * This method could be useful in other contexts as well, as a very crude parser.
       *
       * @param {string} text A string with the code to be highlighted.
       * @param {Grammar} grammar An object containing the tokens to use.
       *
       * Usually a language definition like `Prism.languages.markup`.
       * @returns {TokenStream} An array of strings and tokens, a token stream.
       * @memberof Prism
       * @public
       * @example
       * let code = `var foo = 0;`;
       * let tokens = Prism.tokenize(code, Prism.languages.javascript);
       * tokens.forEach(token => {
       *     if (token instanceof Prism.Token && token.type === 'number') {
       *         console.log(`Found numeric literal: ${token.content}`);
       *     }
       * });
       */
      tokenize: /* @__PURE__ */ l(function(w, b) {
        var C = b.rest;
        if (C) {
          for (var S in C)
            b[S] = C[S];
          delete b.rest;
        }
        var A = new h();
        return m(A, A.head, w), f(w, A, b, A.head, 0), g(A);
      }, "tokenize"),
      /**
       * @namespace
       * @memberof Prism
       * @public
       */
      hooks: {
        all: {},
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: /* @__PURE__ */ l(function(w, b) {
          var C = c.hooks.all;
          C[w] = C[w] || [], C[w].push(b);
        }, "add"),
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: /* @__PURE__ */ l(function(w, b) {
          var C = c.hooks.all[w];
          if (!(!C || !C.length))
            for (var S = 0, A; A = C[S++]; )
              A(b);
        }, "run")
      },
      Token: d
    };
    a.Prism = c;
    function d(w, b, C, S) {
      this.type = w, this.content = b, this.alias = C, this.length = (S || "").length | 0;
    }
    l(d, "Token"), d.stringify = /* @__PURE__ */ l(function w(b, C) {
      if (typeof b == "string")
        return b;
      if (Array.isArray(b)) {
        var S = "";
        return b.forEach(function(_) {
          S += w(_, C);
        }), S;
      }
      var A = {
        type: b.type,
        content: w(b.content, C),
        tag: "span",
        classes: ["token", b.type],
        attributes: {},
        language: C
      }, x = b.alias;
      x && (Array.isArray(x) ? Array.prototype.push.apply(A.classes, x) : A.classes.push(x)), c.hooks.run("wrap", A);
      var F = "";
      for (var B in A.attributes)
        F += " " + B + '="' + (A.attributes[B] || "").replace(/"/g, "&quot;") + '"';
      return "<" + A.tag + ' class="' + A.classes.join(" ") + '"' + F + ">" + A.content + "</" + A.tag + ">";
    }, "stringify");
    function p(w, b, C, S) {
      w.lastIndex = b;
      var A = w.exec(C);
      if (A && S && A[1]) {
        var x = A[1].length;
        A.index += x, A[0] = A[0].slice(x);
      }
      return A;
    }
    l(p, "matchPattern");
    function f(w, b, C, S, A, x) {
      for (var F in C)
        if (!(!C.hasOwnProperty(F) || !C[F])) {
          var B = C[F];
          B = Array.isArray(B) ? B : [B];
          for (var _ = 0; _ < B.length; ++_) {
            if (x && x.cause == F + "," + _)
              return;
            var L = B[_], R = L.inside, V = !!L.lookbehind, T = !!L.greedy, O = L.alias;
            if (T && !L.pattern.global) {
              var j = L.pattern.toString().match(/[imsuy]*$/)[0];
              L.pattern = RegExp(L.pattern.source, j + "g");
            }
            for (var Y = L.pattern || L, P = S.next, q = A; P !== b.tail && !(x && q >= x.reach); q += P.value.length, P = P.next) {
              var K = P.value;
              if (b.length > w.length)
                return;
              if (!(K instanceof d)) {
                var de = 1, J;
                if (T) {
                  if (J = p(Y, q, w, V), !J || J.index >= w.length)
                    break;
                  var Z = J.index, me = J.index + J[0].length, M = q;
                  for (M += P.value.length; Z >= M; )
                    P = P.next, M += P.value.length;
                  if (M -= P.value.length, q = M, P.value instanceof d)
                    continue;
                  for (var G = P; G !== b.tail && (M < me || typeof G.value == "string"); G = G.next)
                    de++, M += G.value.length;
                  de--, K = w.slice(q, M), J.index -= q;
                } else if (J = p(Y, 0, K, V), !J)
                  continue;
                var Z = J.index, pe = J[0], Se = K.slice(0, Z), Jt = K.slice(Z + pe.length), Qe = q + K.length;
                x && Qe > x.reach && (x.reach = Qe);
                var _t = P.prev;
                Se && (_t = m(b, _t, Se), q += Se.length), v(b, _t, de);
                var Ir = new d(F, R ? c.tokenize(pe, R) : pe, O, pe);
                if (P = m(b, _t, Ir), Jt && m(b, P, Jt), de > 1) {
                  var Qt = {
                    cause: F + "," + _,
                    reach: Qe
                  };
                  f(w, b, C, P.prev, q, Qt), x && Qt.reach > x.reach && (x.reach = Qt.reach);
                }
              }
            }
          }
        }
    }
    l(f, "matchGrammar");
    function h() {
      var w = { value: null, prev: null, next: null }, b = { value: null, prev: w, next: null };
      w.next = b, this.head = w, this.tail = b, this.length = 0;
    }
    l(h, "LinkedList");
    function m(w, b, C) {
      var S = b.next, A = { value: C, prev: b, next: S };
      return b.next = A, S.prev = A, w.length++, A;
    }
    l(m, "addAfter");
    function v(w, b, C) {
      for (var S = b.next, A = 0; A < C && S !== w.tail; A++)
        S = S.next;
      b.next = S, S.prev = b, w.length -= A;
    }
    l(v, "removeRange");
    function g(w) {
      for (var b = [], C = w.head.next; C !== w.tail; )
        b.push(C.value), C = C.next;
      return b;
    }
    if (l(g, "toArray"), !a.document)
      return a.addEventListener && (c.disableWorkerMessageHandler || a.addEventListener("message", function(w) {
        var b = JSON.parse(w.data), C = b.language, S = b.code, A = b.immediateClose;
        a.postMessage(c.highlight(S, c.languages[C], C)), A && a.close();
      }, !1)), c;
    var D = c.util.currentScript();
    D && (c.filename = D.src, D.hasAttribute("data-manual") && (c.manual = !0));
    function y() {
      c.manual || c.highlightAll();
    }
    if (l(y, "highlightAutomaticallyCallback"), !c.manual) {
      var E = document.readyState;
      E === "loading" || E === "interactive" && D && D.defer ? document.addEventListener("DOMContentLoaded", y) : window.requestAnimationFrame ? window.requestAnimationFrame(y) : window.setTimeout(y, 16);
    }
    return c;
  }(r);
  typeof t < "u" && t.exports && (t.exports = n), typeof global < "u" && (global.Prism = n);
}), om = H((e, t) => {
  t.exports = r, r.displayName = "markup", r.aliases = ["html", "mathml", "svg", "xml", "ssml", "atom", "rss"];
  function r(n) {
    n.languages.markup = {
      comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
      },
      prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
      },
      doctype: {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
          "internal-subset": {
            pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
            lookbehind: !0,
            greedy: !0,
            inside: null
            // see below
          },
          string: {
            pattern: /"[^"]*"|'[^']*'/,
            greedy: !0
          },
          punctuation: /^<!|>$|[[\]]/,
          "doctype-tag": /^DOCTYPE/i,
          name: /[^\s<>'"]+/
        }
      },
      cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
      },
      tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
          tag: {
            pattern: /^<\/?[^\s>\/]+/,
            inside: {
              punctuation: /^<\/?/,
              namespace: /^[^\s>\/:]+:/
            }
          },
          "special-attr": [],
          "attr-value": {
            pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
            inside: {
              punctuation: [
                {
                  pattern: /^=/,
                  alias: "attr-equals"
                },
                /"|'/
              ]
            }
          },
          punctuation: /\/?>/,
          "attr-name": {
            pattern: /[^\s>\/]+/,
            inside: {
              namespace: /^[^\s>\/:]+:/
            }
          }
        }
      },
      entity: [
        {
          pattern: /&[\da-z]{1,8};/i,
          alias: "named-entity"
        },
        /&#x?[\da-f]{1,8};/i
      ]
    }, n.languages.markup.tag.inside["attr-value"].inside.entity = n.languages.markup.entity, n.languages.markup.doctype.inside["internal-subset"].inside = n.languages.markup, n.hooks.add("wrap", function(a) {
      a.type === "entity" && (a.attributes.title = a.content.value.replace(/&amp;/, "&"));
    }), Object.defineProperty(n.languages.markup.tag, "addInlined", {
      /**
       * Adds an inlined language to markup.
       *
       * An example of an inlined language is CSS with `<style>` tags.
       *
       * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addInlined('style', 'css');
       */
      value: /* @__PURE__ */ l(function(a, o) {
        var s = {};
        s["language-" + o] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: n.languages[o]
        }, s.cdata = /^<!\[CDATA\[|\]\]>$/i;
        var u = {
          "included-cdata": {
            pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
            inside: s
          }
        };
        u["language-" + o] = {
          pattern: /[\s\S]+/,
          inside: n.languages[o]
        };
        var c = {};
        c[a] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function() {
                return a;
              }
            ),
            "i"
          ),
          lookbehind: !0,
          greedy: !0,
          inside: u
        }, n.languages.insertBefore("markup", "cdata", c);
      }, "addInlined")
    }), Object.defineProperty(n.languages.markup.tag, "addAttribute", {
      /**
       * Adds an pattern to highlight languages embedded in HTML attributes.
       *
       * An example of an inlined language is CSS with `style` attributes.
       *
       * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
       * case insensitive.
       * @param {string} lang The language key.
       * @example
       * addAttribute('style', 'css');
       */
      value: /* @__PURE__ */ l(function(a, o) {
        n.languages.markup.tag.inside["special-attr"].push({
          pattern: RegExp(
            /(^|["'\s])/.source + "(?:" + a + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            "i"
          ),
          lookbehind: !0,
          inside: {
            "attr-name": /^[^\s=]+/,
            "attr-value": {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [o, "language-" + o],
                  inside: n.languages[o]
                },
                punctuation: [
                  {
                    pattern: /^=/,
                    alias: "attr-equals"
                  },
                  /"|'/
                ]
              }
            }
          }
        });
      }, "value")
    }), n.languages.html = n.languages.markup, n.languages.mathml = n.languages.markup, n.languages.svg = n.languages.markup, n.languages.xml = n.languages.extend("markup", {}), n.languages.ssml = n.languages.xml, n.languages.atom = n.languages.xml, n.languages.rss = n.languages.xml;
  }
  l(r, "markup");
}), im = H((e, t) => {
  t.exports = r, r.displayName = "css", r.aliases = [];
  function r(n) {
    (function(a) {
      var o = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
      a.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
          pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
          inside: {
            rule: /^@[\w-]+/,
            "selector-function-argument": {
              pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
              lookbehind: !0,
              alias: "selector"
            },
            keyword: {
              pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
              lookbehind: !0
            }
            // See rest below
          }
        },
        url: {
          // https://drafts.csswg.org/css-values-3/#urls
          pattern: RegExp(
            "\\burl\\((?:" + o.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)",
            "i"
          ),
          greedy: !0,
          inside: {
            function: /^url/i,
            punctuation: /^\(|\)$/,
            string: {
              pattern: RegExp("^" + o.source + "$"),
              alias: "url"
            }
          }
        },
        selector: {
          pattern: RegExp(
            `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + o.source + ")*(?=\\s*\\{)"
          ),
          lookbehind: !0
        },
        string: {
          pattern: o,
          greedy: !0
        },
        property: {
          pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
          lookbehind: !0
        },
        important: /!important\b/i,
        function: {
          pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
          lookbehind: !0
        },
        punctuation: /[(){};:,]/
      }, a.languages.css.atrule.inside.rest = a.languages.css;
      var s = a.languages.markup;
      s && (s.tag.addInlined("style", "css"), s.tag.addAttribute("style", "css"));
    })(n);
  }
  l(r, "css");
}), K6 = H((e, t) => {
  t.exports = r, r.displayName = "clike", r.aliases = [];
  function r(n) {
    n.languages.clike = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
          lookbehind: !0,
          greedy: !0
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: !0,
          greedy: !0
        }
      ],
      string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0
      },
      "class-name": {
        pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: {
          punctuation: /[.\\]/
        }
      },
      keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
      boolean: /\b(?:false|true)\b/,
      function: /\b\w+(?=\()/,
      number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
      operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
      punctuation: /[{}[\];(),.:]/
    };
  }
  l(r, "clike");
}), J6 = H((e, t) => {
  t.exports = r, r.displayName = "javascript", r.aliases = ["js"];
  function r(n) {
    n.languages.javascript = n.languages.extend("clike", {
      "class-name": [
        n.languages.clike["class-name"],
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
          lookbehind: !0
        }
      ],
      keyword: [
        {
          pattern: /((?:^|\})\s*)catch\b/,
          lookbehind: !0
        },
        {
          pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
          lookbehind: !0
        }
      ],
      // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
      function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
      number: {
        pattern: RegExp(
          /(^|[^\w$])/.source + "(?:" + // constant
          (/NaN|Infinity/.source + "|" + // binary integer
          /0[bB][01]+(?:_[01]+)*n?/.source + "|" + // octal integer
          /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + // hexadecimal integer
          /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + // decimal bigint
          /\d+(?:_\d+)*n/.source + "|" + // decimal number (integer or float) but no bigint
          /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source
        ),
        lookbehind: !0
      },
      operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), n.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, n.languages.insertBefore("javascript", "keyword", {
      regex: {
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          "regex-source": {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: "language-regex",
            inside: n.languages.regex
          },
          "regex-delimiter": /^\/|\/$/,
          "regex-flags": /^[a-z]+$/
        }
      },
      // This must be declared before keyword because we use "function" inside the look-forward
      "function-variable": {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: "function"
      },
      parameter: [
        {
          pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: n.languages.javascript
        },
        {
          pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: n.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), n.languages.insertBefore("javascript", "string", {
      hashbang: {
        pattern: /^#!.*/,
        greedy: !0,
        alias: "comment"
      },
      "template-string": {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          "template-punctuation": {
            pattern: /^`|`$/,
            alias: "string"
          },
          interpolation: {
            pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              "interpolation-punctuation": {
                pattern: /^\$\{|\}$/,
                alias: "punctuation"
              },
              rest: n.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      "string-property": {
        pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: "property"
      }
    }), n.languages.insertBefore("javascript", "operator", {
      "literal-property": {
        pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: "property"
      }
    }), n.languages.markup && (n.languages.markup.tag.addInlined("script", "javascript"), n.languages.markup.tag.addAttribute(
      /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
      "javascript"
    )), n.languages.js = n.languages.javascript;
  }
  l(r, "javascript");
}), Q6 = H((e, t) => {
  var r = typeof globalThis == "object" ? globalThis : typeof self == "object" ? self : typeof window == "object" ? window : typeof global == "object" ? global : {}, n = A();
  r.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
  var a = j6(), o = Y6(), s = X6(), u = om(), c = im(), d = K6(), p = J6();
  n();
  var f = {}.hasOwnProperty;
  function h() {
  }
  l(h, "Refractor"), h.prototype = s;
  var m = new h();
  t.exports = m, m.highlight = D, m.register = v, m.alias = g, m.registered = y, m.listLanguages = E, v(u), v(c), v(d), v(p), m.util.encode = C, m.Token.stringify = w;
  function v(x) {
    if (typeof x != "function" || !x.displayName)
      throw new Error("Expected `function` for `grammar`, got `" + x + "`");
    m.languages[x.displayName] === void 0 && x(m);
  }
  l(v, "register");
  function g(x, F) {
    var B = m.languages, _ = x, L, R, V, T;
    F && (_ = {}, _[x] = F);
    for (L in _)
      for (R = _[L], R = typeof R == "string" ? [R] : R, V = R.length, T = -1; ++T < V; )
        B[R[T]] = B[L];
  }
  l(g, "alias");
  function D(x, F) {
    var B = s.highlight, _;
    if (typeof x != "string")
      throw new Error("Expected `string` for `value`, got `" + x + "`");
    if (m.util.type(F) === "Object")
      _ = F, F = null;
    else {
      if (typeof F != "string")
        throw new Error("Expected `string` for `name`, got `" + F + "`");
      if (f.call(m.languages, F))
        _ = m.languages[F];
      else
        throw new Error("Unknown language: `" + F + "` is not registered");
    }
    return B.call(this, x, _, F);
  }
  l(D, "highlight");
  function y(x) {
    if (typeof x != "string")
      throw new Error("Expected `string` for `language`, got `" + x + "`");
    return f.call(m.languages, x);
  }
  l(y, "registered");
  function E() {
    var x = m.languages, F = [], B;
    for (B in x)
      f.call(x, B) && typeof x[B] == "object" && F.push(B);
    return F;
  }
  l(E, "listLanguages");
  function w(x, F, B) {
    var _;
    return typeof x == "string" ? { type: "text", value: x } : m.util.type(x) === "Array" ? b(x, F) : (_ = {
      type: x.type,
      content: m.Token.stringify(x.content, F, B),
      tag: "span",
      classes: ["token", x.type],
      attributes: {},
      language: F,
      parent: B
    }, x.alias && (_.classes = _.classes.concat(x.alias)), m.hooks.run("wrap", _), a(
      _.tag + "." + _.classes.join("."),
      S(_.attributes),
      _.content
    ));
  }
  l(w, "stringify");
  function b(x, F) {
    for (var B = [], _ = x.length, L = -1, R; ++L < _; )
      R = x[L], R !== "" && R !== null && R !== void 0 && B.push(R);
    for (L = -1, _ = B.length; ++L < _; )
      R = B[L], B[L] = m.Token.stringify(R, F, B);
    return B;
  }
  l(b, "stringifyAll");
  function C(x) {
    return x;
  }
  l(C, "encode");
  function S(x) {
    var F;
    for (F in x)
      x[F] = o(x[F]);
    return x;
  }
  l(S, "attributes");
  function A() {
    var x = "Prism" in r, F = x ? r.Prism : void 0;
    return B;
    function B() {
      x ? r.Prism = F : delete r.Prism, x = void 0, F = void 0;
    }
  }
  l(A, "capture");
}), Za, Ya, yo, e8 = z(() => {
  A6(), Za = ce(Q6()), Ya = K2(Za.default, {}), Ya.registerLanguage = function(e, t) {
    return Za.default.register(t);
  }, Ya.alias = function(e, t) {
    return Za.default.alias(e, t);
  }, yo = Ya;
}), t8 = z(() => {
  j2();
}), r8 = H((e, t) => {
  t.exports = r, r.displayName = "bash", r.aliases = ["shell"];
  function r(n) {
    (function(a) {
      var o = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b", s = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: "punctuation",
        // this looks reasonably well in all themes
        inside: null
        // see below
      }, u = {
        bash: s,
        environment: {
          pattern: RegExp("\\$" + o),
          alias: "constant"
        },
        variable: [
          // [0]: Arithmetic Environment
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              // If there is a $ sign at the beginning highlight $(( and )) as variable
              variable: [
                {
                  pattern: /(^\$\(\([\s\S]+)\)\)/,
                  lookbehind: !0
                },
                /^\$\(\(/
              ],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              // If there is no $ sign at the beginning highlight (( and )) as punctuation
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          // [1]: Command Substitution
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: {
              variable: /^\$\(|^`|\)$|`$/
            }
          },
          // [2]: Brace expansion
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp("(\\{)" + o),
                lookbehind: !0,
                alias: "constant"
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        // Escape sequences from echo and printf's manuals, and escaped quotes.
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
      a.languages.bash = {
        shebang: {
          pattern: /^#!\s*\/.*/,
          alias: "important"
        },
        comment: {
          pattern: /(^|[^"{\\$])#.*/,
          lookbehind: !0
        },
        "function-name": [
          // a) function foo {
          // b) foo() {
          // c) function foo() {
          // but not “foo {”
          {
            // a) and c)
            pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
            lookbehind: !0,
            alias: "function"
          },
          {
            // b)
            pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
            alias: "function"
          }
        ],
        // Highlight variable names as variables in for and select beginnings.
        "for-or-select": {
          pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
          alias: "variable",
          lookbehind: !0
        },
        // Highlight variable names as variables in the left-hand part
        // of assignments (“=” and “+=”).
        "assign-left": {
          pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
          inside: {
            environment: {
              pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + o),
              lookbehind: !0,
              alias: "constant"
            }
          },
          alias: "variable",
          lookbehind: !0
        },
        string: [
          // Support for Here-documents https://en.wikipedia.org/wiki/Here_document
          {
            pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
            lookbehind: !0,
            greedy: !0,
            inside: u
          },
          // Here-document with quotes around the tag
          // → No expansion (so no “inside”).
          {
            pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              bash: s
            }
          },
          // “Normal” string
          {
            // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
            pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
            lookbehind: !0,
            greedy: !0,
            inside: u
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
            pattern: /(^|[^$\\])'[^']*'/,
            lookbehind: !0,
            greedy: !0
          },
          {
            // https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
            pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
            greedy: !0,
            inside: {
              entity: u.entity
            }
          }
        ],
        environment: {
          pattern: RegExp("\\$?" + o),
          alias: "constant"
        },
        variable: u.variable,
        function: {
          pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
          lookbehind: !0
        },
        keyword: {
          pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
          lookbehind: !0
        },
        // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
        builtin: {
          pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
          lookbehind: !0,
          // Alias added to make those easier to distinguish from strings.
          alias: "class-name"
        },
        boolean: {
          pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
          lookbehind: !0
        },
        "file-descriptor": {
          pattern: /\B&\d\b/,
          alias: "important"
        },
        operator: {
          // Lots of redirections here, but not just that.
          pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
          inside: {
            "file-descriptor": {
              pattern: /^\d/,
              alias: "important"
            }
          }
        },
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
        number: {
          pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
          lookbehind: !0
        }
      }, s.inside = a.languages.bash;
      for (var c = [
        "comment",
        "function-name",
        "for-or-select",
        "assign-left",
        "string",
        "environment",
        "function",
        "keyword",
        "builtin",
        "boolean",
        "file-descriptor",
        "operator",
        "punctuation",
        "number"
      ], d = u.variable[1].inside, p = 0; p < c.length; p++)
        d[c[p]] = a.languages.bash[c[p]];
      a.languages.shell = a.languages.bash;
    })(n);
  }
  l(r, "bash");
}), P1, lm, n8 = z(() => {
  P1 = ce(r8()), lm = P1.default;
}), $1, sm, a8 = z(() => {
  $1 = ce(im()), sm = $1.default;
}), o8 = H((e, t) => {
  t.exports = r, r.displayName = "graphql", r.aliases = [];
  function r(n) {
    n.languages.graphql = {
      comment: /#.*/,
      description: {
        pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
        greedy: !0,
        alias: "string",
        inside: {
          "language-markdown": {
            pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
            lookbehind: !0,
            inside: n.languages.markdown
          }
        }
      },
      string: {
        pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
        greedy: !0
      },
      number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      boolean: /\b(?:false|true)\b/,
      variable: /\$[a-z_]\w*/i,
      directive: {
        pattern: /@[a-z_]\w*/i,
        alias: "function"
      },
      "attr-name": {
        pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
        greedy: !0
      },
      "atom-input": {
        pattern: /\b[A-Z]\w*Input\b/,
        alias: "class-name"
      },
      scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
      constant: /\b[A-Z][A-Z_\d]*\b/,
      "class-name": {
        pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
        lookbehind: !0
      },
      fragment: {
        pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
      },
      "definition-mutation": {
        pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
      },
      "definition-query": {
        pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
        lookbehind: !0,
        alias: "function"
      },
      keyword: /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
      operator: /[!=|&]|\.{3}/,
      "property-query": /\w+(?=\s*\()/,
      object: /\w+(?=\s*\{)/,
      punctuation: /[!(){}\[\]:=,]/,
      property: /\w+/
    }, n.hooks.add("after-tokenize", /* @__PURE__ */ l(function(a) {
      if (a.language !== "graphql")
        return;
      var o = a.tokens.filter(function(E) {
        return typeof E != "string" && E.type !== "comment" && E.type !== "scalar";
      }), s = 0;
      function u(E) {
        return o[s + E];
      }
      l(u, "getToken");
      function c(E, w) {
        w = w || 0;
        for (var b = 0; b < E.length; b++) {
          var C = u(b + w);
          if (!C || C.type !== E[b])
            return !1;
        }
        return !0;
      }
      l(c, "isTokenType");
      function d(E, w) {
        for (var b = 1, C = s; C < o.length; C++) {
          var S = o[C], A = S.content;
          if (S.type === "punctuation" && typeof A == "string") {
            if (E.test(A))
              b++;
            else if (w.test(A) && (b--, b === 0))
              return C;
          }
        }
        return -1;
      }
      l(d, "findClosingBracket");
      function p(E, w) {
        var b = E.alias;
        b ? Array.isArray(b) || (E.alias = b = [b]) : E.alias = b = [], b.push(w);
      }
      for (l(p, "addAlias"); s < o.length; ) {
        var f = o[s++];
        if (f.type === "keyword" && f.content === "mutation") {
          var h = [];
          if (c(["definition-mutation", "punctuation"]) && u(1).content === "(") {
            s += 2;
            var m = d(/^\($/, /^\)$/);
            if (m === -1)
              continue;
            for (; s < m; s++) {
              var v = u(0);
              v.type === "variable" && (p(v, "variable-input"), h.push(v.content));
            }
            s = m + 1;
          }
          if (c(["punctuation", "property-query"]) && u(0).content === "{" && (s++, p(u(0), "property-mutation"), h.length > 0)) {
            var g = d(/^\{$/, /^\}$/);
            if (g === -1)
              continue;
            for (var D = s; D < g; D++) {
              var y = o[D];
              y.type === "variable" && h.indexOf(y.content) >= 0 && p(y, "variable-input");
            }
          }
        }
      }
    }, "afterTokenizeGraphql"));
  }
  l(r, "graphql");
}), j1, um, i8 = z(() => {
  j1 = ce(o8()), um = j1.default;
}), l8 = H((e, t) => {
  t.exports = r, r.displayName = "jsExtras", r.aliases = [];
  function r(n) {
    (function(a) {
      a.languages.insertBefore("javascript", "function-variable", {
        "method-variable": {
          pattern: RegExp(
            "(\\.\\s*)" + a.languages.javascript["function-variable"].pattern.source
          ),
          lookbehind: !0,
          alias: ["function-variable", "method", "function", "property-access"]
        }
      }), a.languages.insertBefore("javascript", "function", {
        method: {
          pattern: RegExp(
            "(\\.\\s*)" + a.languages.javascript.function.source
          ),
          lookbehind: !0,
          alias: ["function", "property-access"]
        }
      }), a.languages.insertBefore("javascript", "constant", {
        "known-class-name": [
          {
            // standard built-ins
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
            pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: "class-name"
          },
          {
            // errors
            pattern: /\b(?:[A-Z]\w*)Error\b/,
            alias: "class-name"
          }
        ]
      });
      function o(f, h) {
        return RegExp(
          f.replace(/<ID>/g, function() {
            return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
          }),
          h
        );
      }
      l(o, "withId"), a.languages.insertBefore("javascript", "keyword", {
        imports: {
          // https://tc39.es/ecma262/#sec-imports
          pattern: o(
            /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source
          ),
          lookbehind: !0,
          inside: a.languages.javascript
        },
        exports: {
          // https://tc39.es/ecma262/#sec-exports
          pattern: o(
            /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source
          ),
          lookbehind: !0,
          inside: a.languages.javascript
        }
      }), a.languages.javascript.keyword.unshift(
        {
          pattern: /\b(?:as|default|export|from|import)\b/,
          alias: "module"
        },
        {
          pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: "control-flow"
        },
        {
          pattern: /\bnull\b/,
          alias: ["null", "nil"]
        },
        {
          pattern: /\bundefined\b/,
          alias: "nil"
        }
      ), a.languages.insertBefore("javascript", "operator", {
        spread: {
          pattern: /\.{3}/,
          alias: "operator"
        },
        arrow: {
          pattern: /=>/,
          alias: "operator"
        }
      }), a.languages.insertBefore("javascript", "punctuation", {
        "property-access": {
          pattern: o(/(\.\s*)#?<ID>/.source),
          lookbehind: !0
        },
        "maybe-class-name": {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0
        },
        dom: {
          // this contains only a few commonly used DOM variables
          pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: "variable"
        },
        console: {
          pattern: /\bconsole(?=\s*\.)/,
          alias: "class-name"
        }
      });
      for (var s = [
        "function",
        "function-variable",
        "method",
        "method-variable",
        "property-access"
      ], u = 0; u < s.length; u++) {
        var c = s[u], d = a.languages.javascript[c];
        a.util.type(d) === "RegExp" && (d = a.languages.javascript[c] = {
          pattern: d
        });
        var p = d.inside || {};
        d.inside = p, p["maybe-class-name"] = /^[A-Z][\s\S]*/;
      }
    })(n);
  }
  l(r, "jsExtras");
}), V1, cm, s8 = z(() => {
  V1 = ce(l8()), cm = V1.default;
}), u8 = H((e, t) => {
  t.exports = r, r.displayName = "json", r.aliases = ["webmanifest"];
  function r(n) {
    n.languages.json = {
      property: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
        lookbehind: !0,
        greedy: !0
      },
      string: {
        pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
        lookbehind: !0,
        greedy: !0
      },
      comment: {
        pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: !0
      },
      number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
      punctuation: /[{}[\],]/,
      operator: /:/,
      boolean: /\b(?:false|true)\b/,
      null: {
        pattern: /\bnull\b/,
        alias: "keyword"
      }
    }, n.languages.webmanifest = n.languages.json;
  }
  l(r, "json");
}), q1, dm, c8 = z(() => {
  q1 = ce(u8()), dm = q1.default;
}), pm = H((e, t) => {
  t.exports = r, r.displayName = "jsx", r.aliases = [];
  function r(n) {
    (function(a) {
      var o = a.util.clone(a.languages.javascript), s = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source, u = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source, c = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
      function d(h, m) {
        return h = h.replace(/<S>/g, function() {
          return s;
        }).replace(/<BRACES>/g, function() {
          return u;
        }).replace(/<SPREAD>/g, function() {
          return c;
        }), RegExp(h, m);
      }
      l(d, "re"), c = d(c).source, a.languages.jsx = a.languages.extend("markup", o), a.languages.jsx.tag.pattern = d(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source
      ), a.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/, a.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/, a.languages.jsx.tag.inside.tag.inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/, a.languages.jsx.tag.inside.comment = o.comment, a.languages.insertBefore(
        "inside",
        "attr-name",
        {
          spread: {
            pattern: d(/<SPREAD>/.source),
            inside: a.languages.jsx
          }
        },
        a.languages.jsx.tag
      ), a.languages.insertBefore(
        "inside",
        "special-attr",
        {
          script: {
            // Allow for two levels of nesting
            pattern: d(/=<BRACES>/.source),
            alias: "language-javascript",
            inside: {
              "script-punctuation": {
                pattern: /^=(?=\{)/,
                alias: "punctuation"
              },
              rest: a.languages.jsx
            }
          }
        },
        a.languages.jsx.tag
      );
      var p = /* @__PURE__ */ l(function(h) {
        return h ? typeof h == "string" ? h : typeof h.content == "string" ? h.content : h.content.map(p).join("") : "";
      }, "stringifyToken"), f = /* @__PURE__ */ l(function(h) {
        for (var m = [], v = 0; v < h.length; v++) {
          var g = h[v], D = !1;
          if (typeof g != "string" && (g.type === "tag" && g.content[0] && g.content[0].type === "tag" ? g.content[0].content[0].content === "</" ? m.length > 0 && m[m.length - 1].tagName === p(g.content[0].content[1]) && m.pop() : g.content[g.content.length - 1].content === "/>" || m.push({
            tagName: p(g.content[0].content[1]),
            openedBraces: 0
          }) : m.length > 0 && g.type === "punctuation" && g.content === "{" ? m[m.length - 1].openedBraces++ : m.length > 0 && m[m.length - 1].openedBraces > 0 && g.type === "punctuation" && g.content === "}" ? m[m.length - 1].openedBraces-- : D = !0), (D || typeof g == "string") && m.length > 0 && m[m.length - 1].openedBraces === 0) {
            var y = p(g);
            v < h.length - 1 && (typeof h[v + 1] == "string" || h[v + 1].type === "plain-text") && (y += p(h[v + 1]), h.splice(v + 1, 1)), v > 0 && (typeof h[v - 1] == "string" || h[v - 1].type === "plain-text") && (y = p(h[v - 1]) + y, h.splice(v - 1, 1), v--), h[v] = new a.Token(
              "plain-text",
              y,
              null,
              y
            );
          }
          g.content && typeof g.content != "string" && f(g.content);
        }
      }, "walkTokens");
      a.hooks.add("after-tokenize", function(h) {
        h.language !== "jsx" && h.language !== "tsx" || f(h.tokens);
      });
    })(n);
  }
  l(r, "jsx");
}), W1, hm, d8 = z(() => {
  W1 = ce(pm()), hm = W1.default;
}), p8 = H((e, t) => {
  t.exports = r, r.displayName = "markdown", r.aliases = ["md"];
  function r(n) {
    (function(a) {
      var o = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
      function s(v) {
        return v = v.replace(/<inner>/g, function() {
          return o;
        }), RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + v + ")");
      }
      l(s, "createInline");
      var u = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source, c = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function() {
          return u;
        }
      ), d = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
      a.languages.markdown = a.languages.extend("markup", {}), a.languages.insertBefore("markdown", "prolog", {
        "front-matter-block": {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            "front-matter": {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ["yaml", "language-yaml"],
              inside: a.languages.yaml
            }
          }
        },
        blockquote: {
          // > ...
          pattern: /^>(?:[\t ]*>)*/m,
          alias: "punctuation"
        },
        table: {
          pattern: RegExp(
            "^" + c + d + "(?:" + c + ")*",
            "m"
          ),
          inside: {
            "table-data-rows": {
              pattern: RegExp(
                "^(" + c + d + ")(?:" + c + ")*$"
              ),
              lookbehind: !0,
              inside: {
                "table-data": {
                  pattern: RegExp(u),
                  inside: a.languages.markdown
                },
                punctuation: /\|/
              }
            },
            "table-line": {
              pattern: RegExp("^(" + c + ")" + d + "$"),
              lookbehind: !0,
              inside: {
                punctuation: /\||:?-{3,}:?/
              }
            },
            "table-header-row": {
              pattern: RegExp("^" + c + "$"),
              inside: {
                "table-header": {
                  pattern: RegExp(u),
                  alias: "important",
                  inside: a.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            // Prefixed by 4 spaces or 1 tab and preceded by an empty line
            pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: "keyword"
          },
          {
            // ```optional language
            // code block
            // ```
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              "code-block": {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0
              },
              "code-language": {
                pattern: /^(```).+/,
                lookbehind: !0
              },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            // title 1
            // =======
            // title 2
            // -------
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: "important",
            inside: {
              punctuation: /==+$|--+$/
            }
          },
          {
            // # title 1
            // ###### title 6
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: "important",
            inside: {
              punctuation: /^#+|#+$/
            }
          }
        ],
        hr: {
          // ***
          // ---
          // * * *
          // -----------
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: "punctuation"
        },
        list: {
          // * item
          // + item
          // - item
          // 1. item
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: "punctuation"
        },
        "url-reference": {
          // [id]: http://example.com "Optional title"
          // [id]: http://example.com 'Optional title'
          // [id]: http://example.com (Optional title)
          // [id]: <http://example.com> "Optional title"
          pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: {
              pattern: /^(!?\[)[^\]]+/,
              lookbehind: !0
            },
            string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: "url"
        },
        bold: {
          // **strong**
          // __strong__
          // allow one nested instance of italic text using the same delimiter
          pattern: s(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {}
              // see below
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          // *em*
          // _em_
          // allow one nested instance of bold text using the same delimiter
          pattern: s(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {}
              // see below
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          // ~~strike through~~
          // ~strike~
          // eslint-disable-next-line regexp/strict
          pattern: s(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {}
              // see below
            },
            punctuation: /~~?/
          }
        },
        "code-snippet": {
          // `code`
          // ``code``
          pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ["code", "keyword"]
        },
        url: {
          // [example](http://example.com "Optional title")
          // [example][id]
          // [example] [id]
          pattern: s(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {}
              // see below
            },
            variable: {
              pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
              lookbehind: !0
            },
            url: {
              pattern: /(^\]\()[^\s)]+/,
              lookbehind: !0
            },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0
            }
          }
        }
      }), ["url", "bold", "italic", "strike"].forEach(function(v) {
        ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(g) {
          v !== g && (a.languages.markdown[v].inside.content.inside[g] = a.languages.markdown[g]);
        });
      }), a.hooks.add("after-tokenize", function(v) {
        if (v.language !== "markdown" && v.language !== "md")
          return;
        function g(D) {
          if (!(!D || typeof D == "string"))
            for (var y = 0, E = D.length; y < E; y++) {
              var w = D[y];
              if (w.type !== "code") {
                g(w.content);
                continue;
              }
              var b = w.content[1], C = w.content[3];
              if (b && C && b.type === "code-language" && C.type === "code-block" && typeof b.content == "string") {
                var S = b.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
                S = (/[a-z][\w-]*/i.exec(S) || [""])[0].toLowerCase();
                var A = "language-" + S;
                C.alias ? typeof C.alias == "string" ? C.alias = [C.alias, A] : C.alias.push(A) : C.alias = [A];
              }
            }
        }
        l(g, "walkTokens"), g(v.tokens);
      }), a.hooks.add("wrap", function(v) {
        if (v.type === "code-block") {
          for (var g = "", D = 0, y = v.classes.length; D < y; D++) {
            var E = v.classes[D], w = /language-(.+)/.exec(E);
            if (w) {
              g = w[1];
              break;
            }
          }
          var b = a.languages[g];
          if (b)
            v.content = a.highlight(
              m(v.content.value),
              b,
              g
            );
          else if (g && g !== "none" && a.plugins.autoloader) {
            var C = "md-" + (/* @__PURE__ */ new Date()).valueOf() + "-" + Math.floor(Math.random() * 1e16);
            v.attributes.id = C, a.plugins.autoloader.loadLanguages(g, function() {
              var S = document.getElementById(C);
              S && (S.innerHTML = a.highlight(
                S.textContent,
                a.languages[g],
                g
              ));
            });
          }
        }
      });
      var p = RegExp(a.languages.markup.tag.pattern.source, "gi"), f = {
        amp: "&",
        lt: "<",
        gt: ">",
        quot: '"'
      }, h = String.fromCodePoint || String.fromCharCode;
      function m(v) {
        var g = v.replace(p, "");
        return g = g.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(D, y) {
          if (y = y.toLowerCase(), y[0] === "#") {
            var E;
            return y[1] === "x" ? E = parseInt(y.slice(2), 16) : E = Number(y.slice(1)), h(E);
          } else {
            var w = f[y];
            return w || D;
          }
        }), g;
      }
      l(m, "textContent"), a.languages.md = a.languages.markdown;
    })(n);
  }
  l(r, "markdown");
}), U1, fm, h8 = z(() => {
  U1 = ce(p8()), fm = U1.default;
}), G1, mm, f8 = z(() => {
  G1 = ce(om()), mm = G1.default;
}), gm = H((e, t) => {
  t.exports = r, r.displayName = "typescript", r.aliases = ["ts"];
  function r(n) {
    (function(a) {
      a.languages.typescript = a.languages.extend("javascript", {
        "class-name": {
          pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
          lookbehind: !0,
          greedy: !0,
          inside: null
          // see below
        },
        builtin: /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
      }), a.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        // keywords that have to be followed by an identifier
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        // This is for `import type *, {}`
        /\btype\b(?=\s*(?:[\{*]|$))/
      ), delete a.languages.typescript.parameter, delete a.languages.typescript["literal-property"];
      var o = a.languages.extend("typescript", {});
      delete o["class-name"], a.languages.typescript["class-name"].inside = o, a.languages.insertBefore("typescript", "function", {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: {
              pattern: /^@/,
              alias: "operator"
            },
            function: /^[\s\S]+/
          }
        },
        "generic-function": {
          // e.g. foo<T extends "bar" | "baz">( ...
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: {
              pattern: /<[\s\S]+/,
              // everything after the first <
              alias: "class-name",
              inside: o
            }
          }
        }
      }), a.languages.ts = a.languages.typescript;
    })(n);
  }
  l(r, "typescript");
}), m8 = H((e, t) => {
  var r = pm(), n = gm();
  t.exports = a, a.displayName = "tsx", a.aliases = [];
  function a(o) {
    o.register(r), o.register(n), function(s) {
      var u = s.util.clone(s.languages.typescript);
      s.languages.tsx = s.languages.extend("jsx", u), delete s.languages.tsx.parameter, delete s.languages.tsx["literal-property"];
      var c = s.languages.tsx.tag;
      c.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + "(?:" + c.pattern.source + ")",
        c.pattern.flags
      ), c.lookbehind = !0;
    }(o);
  }
  l(a, "tsx");
}), Z1, vm, g8 = z(() => {
  Z1 = ce(m8()), vm = Z1.default;
}), Y1, wm, v8 = z(() => {
  Y1 = ce(gm()), wm = Y1.default;
}), w8 = H((e, t) => {
  t.exports = r, r.displayName = "yaml", r.aliases = ["yml"];
  function r(n) {
    (function(a) {
      var o = /[*&][^\s[\]{},]+/, s = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/, u = "(?:" + s.source + "(?:[ 	]+" + o.source + ")?|" + o.source + "(?:[ 	]+" + s.source + ")?)", c = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
        /<PLAIN>/g,
        function() {
          return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
        }
      ), d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
      function p(f, h) {
        h = (h || "").replace(/m/g, "") + "m";
        var m = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
          return u;
        }).replace(/<<value>>/g, function() {
          return f;
        });
        return RegExp(m, h);
      }
      l(p, "createValuePattern"), a.languages.yaml = {
        scalar: {
          pattern: RegExp(
            /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
              /<<prop>>/g,
              function() {
                return u;
              }
            )
          ),
          lookbehind: !0,
          alias: "string"
        },
        comment: /#.*/,
        key: {
          pattern: RegExp(
            /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
              return u;
            }).replace(/<<key>>/g, function() {
              return "(?:" + c + "|" + d + ")";
            })
          ),
          lookbehind: !0,
          greedy: !0,
          alias: "atrule"
        },
        directive: {
          pattern: /(^[ \t]*)%.+/m,
          lookbehind: !0,
          alias: "important"
        },
        datetime: {
          pattern: p(
            /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source
          ),
          lookbehind: !0,
          alias: "number"
        },
        boolean: {
          pattern: p(/false|true/.source, "i"),
          lookbehind: !0,
          alias: "important"
        },
        null: {
          pattern: p(/null|~/.source, "i"),
          lookbehind: !0,
          alias: "important"
        },
        string: {
          pattern: p(d),
          lookbehind: !0,
          greedy: !0
        },
        number: {
          pattern: p(
            /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source,
            "i"
          ),
          lookbehind: !0
        },
        tag: s,
        important: o,
        punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
      }, a.languages.yml = a.languages.yaml;
    })(n);
  }
  l(r, "yaml");
}), X1, bm, b8 = z(() => {
  X1 = ce(w8()), bm = X1.default;
}), K1, pl, Dm, ym = z(() => {
  K1 = I.div(({ theme: e }) => ({
    position: "absolute",
    bottom: 0,
    right: 0,
    maxWidth: "100%",
    display: "flex",
    background: e.background.content,
    zIndex: 1
  })), pl = I.button(
    ({ theme: e }) => ({
      margin: 0,
      border: "0 none",
      padding: "4px 10px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      color: e.color.defaultText,
      background: e.background.content,
      fontSize: 12,
      lineHeight: "16px",
      fontFamily: e.typography.fonts.base,
      fontWeight: e.typography.weight.bold,
      borderTop: `1px solid ${e.appBorderColor}`,
      borderLeft: `1px solid ${e.appBorderColor}`,
      marginLeft: -1,
      borderRadius: "4px 0 0 0",
      "&:not(:last-child)": { borderRight: `1px solid ${e.appBorderColor}` },
      "& + *": {
        borderLeft: `1px solid ${e.appBorderColor}`,
        borderRadius: 0
      },
      "&:focus": {
        boxShadow: `${e.color.secondary} 0 -3px 0 0 inset`,
        outline: "0 none"
      }
    }),
    ({ disabled: e }) => e && {
      cursor: "not-allowed",
      opacity: 0.5
    }
  ), pl.displayName = "ActionButton", Dm = /* @__PURE__ */ l(({ actionItems: e, ...t }) => /* @__PURE__ */ k.createElement(K1, { ...t }, e.map(({
    title: r,
    className: n,
    onClick: a,
    disabled: o
  }, s) => /* @__PURE__ */ k.createElement(pl, { key: s, className: n, onClick: a, disabled: !!o }, r))), "ActionBar");
});
function Em(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Cm(...e) {
  return (t) => e.forEach((r) => Em(r, t));
}
var D8 = z(() => {
  l(Em, "setRef"), l(Cm, "composeRefs");
});
function J1(e) {
  return i.isValidElement(e) && e.type === xm;
}
function Q1(e, t) {
  let r = { ...t };
  for (let n in t) {
    let a = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...s) => {
      o(...s), a(...s);
    } : a && (r[n] = a) : n === "style" ? r[n] = { ...a, ...o } : n === "className" && (r[n] = [a, o].filter(Boolean).join(" "));
  }
  return { ...e, ...r };
}
function ed(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var $o, Xa, xm, Sm = z(() => {
  D8(), $o = i.forwardRef((e, t) => {
    let { children: r, ...n } = e, a = i.Children.toArray(r), o = a.find(J1);
    if (o) {
      let s = o.props.children, u = a.map((c) => c === o ? i.Children.count(s) > 1 ? i.Children.only(null) : i.isValidElement(s) ? s.props.children : null : c);
      return /* @__PURE__ */ W.jsx(Xa, { ...n, ref: t, children: i.isValidElement(s) ? i.cloneElement(s, void 0, u) : null });
    }
    return /* @__PURE__ */ W.jsx(Xa, { ...n, ref: t, children: r });
  }), $o.displayName = "Slot", Xa = i.forwardRef((e, t) => {
    let { children: r, ...n } = e;
    if (i.isValidElement(r)) {
      let a = ed(r);
      return i.cloneElement(r, {
        ...Q1(n, r.props),
        // @ts-ignore
        ref: t ? Cm(t, a) : a
      });
    }
    return i.Children.count(r) > 1 ? i.Children.only(null) : null;
  }), Xa.displayName = "SlotClone", xm = /* @__PURE__ */ l(({ children: e }) => /* @__PURE__ */ W.jsx(W.Fragment, { children: e }), "Slottable"), l(J1, "isSlottable"), l(Q1, "mergeProps"), l(ed, "getElementRef");
}), td, jr, y8 = z(() => {
  Sm(), td = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul"
  ], jr = td.reduce((e, t) => {
    let r = i.forwardRef((n, a) => {
      let { asChild: o, ...s } = n, u = o ? $o : t;
      return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ W.jsx(u, { ...s, ref: a });
    });
    return r.displayName = `Primitive.${t}`, { ...e, [t]: r };
  }, {});
});
function Am(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function km(...e) {
  return (t) => e.forEach((r) => Am(r, t));
}
function Lt(...e) {
  return i.useCallback(km(...e), e);
}
var Fm = z(() => {
  l(Am, "setRef"), l(km, "composeRefs"), l(Lt, "useComposedRefs");
}), jo, Bm = z(() => {
  jo = globalThis?.document ? i.useLayoutEffect : () => {
  };
});
function zm(e, t) {
  return i.useReducer((r, n) => t[r][n] ?? r, e);
}
function rd(e) {
  let [t, r] = i.useState(), n = i.useRef({}), a = i.useRef(e), o = i.useRef("none"), s = e ? "mounted" : "unmounted", [u, c] = zm(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    let d = qn(n.current);
    o.current = u === "mounted" ? d : "none";
  }, [u]), jo(() => {
    let d = n.current, p = a.current;
    if (p !== e) {
      let f = o.current, h = qn(d);
      e ? c("MOUNT") : h === "none" || d?.display === "none" ? c("UNMOUNT") : c(p && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [e, c]), jo(() => {
    if (t) {
      let d = /* @__PURE__ */ l((f) => {
        let h = qn(n.current).includes(f.animationName);
        f.target === t && h && yi.flushSync(() => c("ANIMATION_END"));
      }, "handleAnimationEnd"), p = /* @__PURE__ */ l((f) => {
        f.target === t && (o.current = qn(n.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(u),
    ref: i.useCallback((d) => {
      d && (n.current = getComputedStyle(d)), r(d);
    }, [])
  };
}
function qn(e) {
  return e?.animationName || "none";
}
function nd(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
var Zr, E8 = z(() => {
  "use client";
  Fm(), Bm(), l(zm, "useStateMachine"), Zr = /* @__PURE__ */ l((e) => {
    let { present: t, children: r } = e, n = rd(t), a = typeof r == "function" ? r({ present: n.isPresent }) : i.Children.only(r), o = Lt(n.ref, nd(a));
    return typeof r == "function" || n.isPresent ? i.cloneElement(a, { ref: o }) : null;
  }, "Presence"), Zr.displayName = "Presence", l(rd, "usePresence"), l(qn, "getAnimationName"), l(nd, "getElementRef");
});
function _m(e, t = []) {
  let r = [];
  function n(o, s) {
    let u = i.createContext(s), c = r.length;
    r = [...r, s];
    function d(f) {
      let { scope: h, children: m, ...v } = f, g = h?.[e][c] || u, D = i.useMemo(() => v, Object.values(v));
      return /* @__PURE__ */ W.jsx(g.Provider, { value: D, children: m });
    }
    l(d, "Provider");
    function p(f, h) {
      let m = h?.[e][c] || u, v = i.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return l(p, "useContext2"), d.displayName = o + "Provider", [d, p];
  }
  l(n, "createContext3");
  let a = /* @__PURE__ */ l(() => {
    let o = r.map((s) => i.createContext(s));
    return /* @__PURE__ */ l(function(s) {
      let u = s?.[e] || o;
      return i.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: u } }),
        [s, u]
      );
    }, "useScope");
  }, "createScope");
  return a.scopeName = e, [n, Im(a, ...t)];
}
function Im(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = /* @__PURE__ */ l(() => {
    let n = e.map((a) => ({
      useScope: a(),
      scopeName: a.scopeName
    }));
    return /* @__PURE__ */ l(function(a) {
      let o = n.reduce((s, { useScope: u, scopeName: c }) => {
        let d = u(a)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return i.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    }, "useComposedScopes");
  }, "createScope");
  return r.scopeName = t.scopeName, r;
}
var C8 = z(() => {
  l(_m, "createContextScope"), l(Im, "composeContextScopes");
});
function Ht(e) {
  let t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(() => (...r) => t.current?.(...r), []);
}
var x8 = z(() => {
  l(Ht, "useCallbackRef");
});
function Rm(e) {
  let t = i.useContext(Lm);
  return e || t || "ltr";
}
var Lm, S8 = z(() => {
  Lm = i.createContext(void 0), l(Rm, "useDirection");
});
function Tm(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
var A8 = z(() => {
  l(Tm, "clamp");
});
function Rt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return /* @__PURE__ */ l(function(n) {
    if (e?.(n), r === !1 || !n.defaultPrevented)
      return t?.(n);
  }, "handleEvent");
}
var k8 = z(() => {
  l(Rt, "composeEventHandlers");
});
function ad(e, t) {
  return i.useReducer((r, n) => t[r][n] ?? r, e);
}
function Bn(e) {
  return e ? parseInt(e, 10) : 0;
}
function Au(e, t) {
  let r = e / t;
  return isNaN(r) ? 0 : r;
}
function ra(e) {
  let t = Au(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function od(e, t, r, n = "ltr") {
  let a = ra(r), o = a / 2, s = t || o, u = a - s, c = r.scrollbar.paddingStart + s, d = r.scrollbar.size - r.scrollbar.paddingEnd - u, p = r.content - r.viewport, f = n === "ltr" ? [0, p] : [p * -1, 0];
  return uc([c, d], f)(e);
}
function hl(e, t, r = "ltr") {
  let n = ra(t), a = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - a, s = t.content - t.viewport, u = o - n, c = r === "ltr" ? [0, s] : [s * -1, 0], d = Tm(e, c);
  return uc([0, s], [0, u])(d);
}
function uc(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1]) return t[0];
    let n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function fl(e, t) {
  return e > 0 && e < t;
}
function zn(e, t) {
  let r = Ht(e), n = i.useRef(0);
  return i.useEffect(() => () => window.clearTimeout(n.current), []), i.useCallback(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [r, t]);
}
function nr(e, t) {
  let r = Ht(t);
  jo(() => {
    let n = 0;
    if (e) {
      let a = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return a.observe(e), () => {
        window.cancelAnimationFrame(n), a.unobserve(e);
      };
    }
  }, [e, r]);
}
function id(e, t) {
  let { asChild: r, children: n } = e;
  if (!r) return typeof t == "function" ? t(n) : t;
  let a = i.Children.only(n);
  return i.cloneElement(a, {
    children: typeof t == "function" ? t(a.props.children) : t
  });
}
var Ka, ml, F8, ld, Ae, gl, vl, wl, Ne, bl, sd, ud, Dl, Ja, cd, dd, pd, yl, El, _n, Cl, hd, Qa, xl, fd, md, Mm, Hm, Om, Nm, Pm, B8 = z(() => {
  "use client";
  y8(), E8(), C8(), Fm(), x8(), S8(), Bm(), A8(), k8(), l(ad, "useStateMachine"), Ka = "ScrollArea", [ml, F8] = _m(Ka), [ld, Ae] = ml(Ka), gl = i.forwardRef(
    (e, t) => {
      let {
        __scopeScrollArea: r,
        type: n = "hover",
        dir: a,
        scrollHideDelay: o = 600,
        ...s
      } = e, [u, c] = i.useState(null), [d, p] = i.useState(null), [f, h] = i.useState(null), [m, v] = i.useState(null), [g, D] = i.useState(
        null
      ), [y, E] = i.useState(0), [w, b] = i.useState(0), [C, S] = i.useState(!1), [A, x] = i.useState(!1), F = Lt(t, (_) => c(_)), B = Rm(
        a
      );
      return /* @__PURE__ */ W.jsx(
        ld,
        {
          scope: r,
          type: n,
          dir: B,
          scrollHideDelay: o,
          scrollArea: u,
          viewport: d,
          onViewportChange: p,
          content: f,
          onContentChange: h,
          scrollbarX: m,
          onScrollbarXChange: v,
          scrollbarXEnabled: C,
          onScrollbarXEnabledChange: S,
          scrollbarY: g,
          onScrollbarYChange: D,
          scrollbarYEnabled: A,
          onScrollbarYEnabledChange: x,
          onCornerWidthChange: E,
          onCornerHeightChange: b,
          children: /* @__PURE__ */ W.jsx(
            jr.div,
            {
              dir: B,
              ...s,
              ref: F,
              style: {
                position: "relative",
                // Pass corner sizes as CSS vars to reduce re-renders of context consumers
                "--radix-scroll-area-corner-width": y + "px",
                "--radix-scroll-area-corner-height": w + "px",
                ...e.style
              }
            }
          )
        }
      );
    }
  ), gl.displayName = Ka, vl = "ScrollAreaViewport", wl = i.forwardRef(
    (e, t) => {
      let { __scopeScrollArea: r, children: n, asChild: a, nonce: o, ...s } = e, u = Ae(vl, r), c = i.useRef(null), d = Lt(t, c, u.onViewportChange);
      return /* @__PURE__ */ W.jsxs(W.Fragment, { children: [
        /* @__PURE__ */ W.jsx(
          "style",
          {
            dangerouslySetInnerHTML: {
              __html: `
[data-radix-scroll-area-viewport] {
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
[data-radix-scroll-area-viewport]::-webkit-scrollbar {
  display: none;
}
:where([data-radix-scroll-area-viewport]) {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
:where([data-radix-scroll-area-content]) {
  flex-grow: 1;
}
`
            },
            nonce: o
          }
        ),
        /* @__PURE__ */ W.jsx(
          jr.div,
          {
            "data-radix-scroll-area-viewport": "",
            ...s,
            asChild: a,
            ref: d,
            style: {
              /**
               * We don't support `visible` because the intention is to have at least one scrollbar
               * if this component is used and `visible` will behave like `auto` in that case
               * https://developer.mozilla.org/en-US/docs/Web/CSS/overflow#description
               *
               * We don't handle `auto` because the intention is for the native implementation
               * to be hidden if using this component. We just want to ensure the node is scrollable
               * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
               * the browser from having to work out whether to render native scrollbars or not,
               * we tell it to with the intention of hiding them in CSS.
               */
              overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
              overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
              ...e.style
            },
            children: id({ asChild: a, children: n }, (p) => /* @__PURE__ */ W.jsx(
              "div",
              {
                "data-radix-scroll-area-content": "",
                ref: u.onContentChange,
                style: { minWidth: u.scrollbarXEnabled ? "fit-content" : void 0 },
                children: p
              }
            ))
          }
        )
      ] });
    }
  ), wl.displayName = vl, Ne = "ScrollAreaScrollbar", bl = i.forwardRef(
    (e, t) => {
      let { forceMount: r, ...n } = e, a = Ae(Ne, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: s } = a, u = e.orientation === "horizontal";
      return i.useEffect(() => (u ? o(!0) : s(!0), () => {
        u ? o(!1) : s(!1);
      }), [u, o, s]), a.type === "hover" ? /* @__PURE__ */ W.jsx(sd, { ...n, ref: t, forceMount: r }) : a.type === "scroll" ? /* @__PURE__ */ W.jsx(
        ud,
        { ...n, ref: t, forceMount: r }
      ) : a.type === "auto" ? /* @__PURE__ */ W.jsx(Dl, { ...n, ref: t, forceMount: r }) : a.type === "always" ? /* @__PURE__ */ W.jsx(Ja, { ...n, ref: t }) : null;
    }
  ), bl.displayName = Ne, sd = i.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e, a = Ae(Ne, e.__scopeScrollArea), [o, s] = i.useState(!1);
    return i.useEffect(() => {
      let u = a.scrollArea, c = 0;
      if (u) {
        let d = /* @__PURE__ */ l(() => {
          window.clearTimeout(c), s(!0);
        }, "handlePointerEnter"), p = /* @__PURE__ */ l(() => {
          c = window.setTimeout(() => s(!1), a.scrollHideDelay);
        }, "handlePointerLeave");
        return u.addEventListener("pointerenter", d), u.addEventListener("pointerleave", p), () => {
          window.clearTimeout(c), u.removeEventListener("pointerenter", d), u.removeEventListener("pointerleave", p);
        };
      }
    }, [a.scrollArea, a.scrollHideDelay]), /* @__PURE__ */ W.jsx(Zr, { present: r || o, children: /* @__PURE__ */ W.jsx(
      Dl,
      {
        "data-state": o ? "visible" : "hidden",
        ...n,
        ref: t
      }
    ) });
  }), ud = i.forwardRef((e, t) => {
    let { forceMount: r, ...n } = e, a = Ae(Ne, e.__scopeScrollArea), o = e.orientation === "horizontal", s = zn(() => c("SCROLL_END"), 100), [u, c] = ad("hidden", {
      hidden: {
        SCROLL: "scrolling"
      },
      scrolling: {
        SCROLL_END: "idle",
        POINTER_ENTER: "interacting"
      },
      interacting: {
        SCROLL: "interacting",
        POINTER_LEAVE: "idle"
      },
      idle: {
        HIDE: "hidden",
        SCROLL: "scrolling",
        POINTER_ENTER: "interacting"
      }
    });
    return i.useEffect(() => {
      if (u === "idle") {
        let d = window.setTimeout(() => c("HIDE"), a.scrollHideDelay);
        return () => window.clearTimeout(d);
      }
    }, [u, a.scrollHideDelay, c]), i.useEffect(() => {
      let d = a.viewport, p = o ? "scrollLeft" : "scrollTop";
      if (d) {
        let f = d[p], h = /* @__PURE__ */ l(() => {
          let m = d[p];
          f !== m && (c("SCROLL"), s()), f = m;
        }, "handleScroll");
        return d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
      }
    }, [a.viewport, o, c, s]), /* @__PURE__ */ W.jsx(Zr, { present: r || u !== "hidden", children: /* @__PURE__ */ W.jsx(
      Ja,
      {
        "data-state": u === "hidden" ? "hidden" : "visible",
        ...n,
        ref: t,
        onPointerEnter: Rt(e.onPointerEnter, () => c("POINTER_ENTER")),
        onPointerLeave: Rt(e.onPointerLeave, () => c("POINTER_LEAVE"))
      }
    ) });
  }), Dl = i.forwardRef((e, t) => {
    let r = Ae(Ne, e.__scopeScrollArea), { forceMount: n, ...a } = e, [o, s] = i.useState(!1), u = e.orientation === "horizontal", c = zn(() => {
      if (r.viewport) {
        let d = r.viewport.offsetWidth < r.viewport.scrollWidth, p = r.viewport.offsetHeight < r.viewport.scrollHeight;
        s(u ? d : p);
      }
    }, 10);
    return nr(r.viewport, c), nr(r.content, c), /* @__PURE__ */ W.jsx(Zr, { present: n || o, children: /* @__PURE__ */ W.jsx(
      Ja,
      {
        "data-state": o ? "visible" : "hidden",
        ...a,
        ref: t
      }
    ) });
  }), Ja = i.forwardRef((e, t) => {
    let { orientation: r = "vertical", ...n } = e, a = Ae(Ne, e.__scopeScrollArea), o = i.useRef(null), s = i.useRef(0), [u, c] = i.useState(
      {
        content: 0,
        viewport: 0,
        scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
      }
    ), d = Au(u.viewport, u.content), p = {
      ...n,
      sizes: u,
      onSizesChange: c,
      hasThumb: d > 0 && d < 1,
      onThumbChange: /* @__PURE__ */ l((h) => o.current = h, "onThumbChange"),
      onThumbPointerUp: /* @__PURE__ */ l(() => s.current = 0, "onThumbPointerUp"),
      onThumbPointerDown: /* @__PURE__ */ l((h) => s.current = h, "onThumbPointerDown")
    };
    function f(h, m) {
      return od(h, s.current, u, m);
    }
    return l(f, "getScrollPosition"), r === "horizontal" ? /* @__PURE__ */ W.jsx(
      cd,
      {
        ...p,
        ref: t,
        onThumbPositionChange: /* @__PURE__ */ l(() => {
          if (a.viewport && o.current) {
            let h = a.viewport.scrollLeft, m = hl(h, u, a.dir);
            o.current.style.transform = `translate3d(${m}px, 0, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ l((h) => {
          a.viewport && (a.viewport.scrollLeft = h);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ l((h) => {
          a.viewport && (a.viewport.scrollLeft = f(h, a.dir));
        }, "onDragScroll")
      }
    ) : r === "vertical" ? /* @__PURE__ */ W.jsx(
      dd,
      {
        ...p,
        ref: t,
        onThumbPositionChange: /* @__PURE__ */ l(() => {
          if (a.viewport && o.current) {
            let h = a.viewport.scrollTop, m = hl(h, u);
            o.current.style.transform = `translate3d(0, ${m}px, 0)`;
          }
        }, "onThumbPositionChange"),
        onWheelScroll: /* @__PURE__ */ l((h) => {
          a.viewport && (a.viewport.scrollTop = h);
        }, "onWheelScroll"),
        onDragScroll: /* @__PURE__ */ l((h) => {
          a.viewport && (a.viewport.scrollTop = f(h));
        }, "onDragScroll")
      }
    ) : null;
  }), cd = i.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e, o = Ae(Ne, e.__scopeScrollArea), [s, u] = i.useState(), c = i.useRef(null), d = Lt(t, c, o.onScrollbarXChange);
    return i.useEffect(() => {
      c.current && u(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ W.jsx(
      El,
      {
        "data-orientation": "horizontal",
        ...a,
        ref: d,
        sizes: r,
        style: {
          bottom: 0,
          left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
          right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
          "--radix-scroll-area-thumb-width": ra(r) + "px",
          ...e.style
        },
        onThumbPointerDown: /* @__PURE__ */ l((p) => e.onThumbPointerDown(p.x), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ l((p) => e.onDragScroll(p.x), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ l((p, f) => {
          if (o.viewport) {
            let h = o.viewport.scrollLeft + p.deltaX;
            e.onWheelScroll(h), fl(h, f) && p.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ l(() => {
          c.current && o.viewport && s && n({
            content: o.viewport.scrollWidth,
            viewport: o.viewport.offsetWidth,
            scrollbar: {
              size: c.current.clientWidth,
              paddingStart: Bn(s.paddingLeft),
              paddingEnd: Bn(s.paddingRight)
            }
          });
        }, "onResize")
      }
    );
  }), dd = i.forwardRef((e, t) => {
    let { sizes: r, onSizesChange: n, ...a } = e, o = Ae(Ne, e.__scopeScrollArea), [s, u] = i.useState(), c = i.useRef(null), d = Lt(t, c, o.onScrollbarYChange);
    return i.useEffect(() => {
      c.current && u(getComputedStyle(c.current));
    }, [c]), /* @__PURE__ */ W.jsx(
      El,
      {
        "data-orientation": "vertical",
        ...a,
        ref: d,
        sizes: r,
        style: {
          top: 0,
          right: o.dir === "ltr" ? 0 : void 0,
          left: o.dir === "rtl" ? 0 : void 0,
          bottom: "var(--radix-scroll-area-corner-height)",
          "--radix-scroll-area-thumb-height": ra(r) + "px",
          ...e.style
        },
        onThumbPointerDown: /* @__PURE__ */ l((p) => e.onThumbPointerDown(p.y), "onThumbPointerDown"),
        onDragScroll: /* @__PURE__ */ l((p) => e.onDragScroll(p.y), "onDragScroll"),
        onWheelScroll: /* @__PURE__ */ l((p, f) => {
          if (o.viewport) {
            let h = o.viewport.scrollTop + p.deltaY;
            e.onWheelScroll(h), fl(h, f) && p.preventDefault();
          }
        }, "onWheelScroll"),
        onResize: /* @__PURE__ */ l(() => {
          c.current && o.viewport && s && n({
            content: o.viewport.scrollHeight,
            viewport: o.viewport.offsetHeight,
            scrollbar: {
              size: c.current.clientHeight,
              paddingStart: Bn(s.paddingTop),
              paddingEnd: Bn(s.paddingBottom)
            }
          });
        }, "onResize")
      }
    );
  }), [pd, yl] = ml(Ne), El = i.forwardRef((e, t) => {
    let {
      __scopeScrollArea: r,
      sizes: n,
      hasThumb: a,
      onThumbChange: o,
      onThumbPointerUp: s,
      onThumbPointerDown: u,
      onThumbPositionChange: c,
      onDragScroll: d,
      onWheelScroll: p,
      onResize: f,
      ...h
    } = e, m = Ae(Ne, r), [v, g] = i.useState(null), D = Lt(t, (F) => g(F)), y = i.useRef(null), E = i.useRef(""), w = m.viewport, b = n.content - n.viewport, C = Ht(p), S = Ht(c), A = zn(f, 10);
    function x(F) {
      if (y.current) {
        let B = F.clientX - y.current.left, _ = F.clientY - y.current.top;
        d({ x: B, y: _ });
      }
    }
    return l(x, "handleDragScroll"), i.useEffect(() => {
      let F = /* @__PURE__ */ l((B) => {
        let _ = B.target;
        v?.contains(_) && C(B, b);
      }, "handleWheel");
      return document.addEventListener("wheel", F, { passive: !1 }), () => document.removeEventListener("wheel", F, { passive: !1 });
    }, [w, v, b, C]), i.useEffect(S, [n, S]), nr(v, A), nr(m.content, A), /* @__PURE__ */ W.jsx(
      pd,
      {
        scope: r,
        scrollbar: v,
        hasThumb: a,
        onThumbChange: Ht(o),
        onThumbPointerUp: Ht(s),
        onThumbPositionChange: S,
        onThumbPointerDown: Ht(u),
        children: /* @__PURE__ */ W.jsx(
          jr.div,
          {
            ...h,
            ref: D,
            style: { position: "absolute", ...h.style },
            onPointerDown: Rt(e.onPointerDown, (F) => {
              F.button === 0 && (F.target.setPointerCapture(F.pointerId), y.current = v.getBoundingClientRect(), E.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), x(F));
            }),
            onPointerMove: Rt(e.onPointerMove, x),
            onPointerUp: Rt(e.onPointerUp, (F) => {
              let B = F.target;
              B.hasPointerCapture(F.pointerId) && B.releasePointerCapture(F.pointerId), document.body.style.webkitUserSelect = E.current, m.viewport && (m.viewport.style.scrollBehavior = ""), y.current = null;
            })
          }
        )
      }
    );
  }), _n = "ScrollAreaThumb", Cl = i.forwardRef(
    (e, t) => {
      let { forceMount: r, ...n } = e, a = yl(_n, e.__scopeScrollArea);
      return /* @__PURE__ */ W.jsx(Zr, { present: r || a.hasThumb, children: /* @__PURE__ */ W.jsx(hd, { ref: t, ...n }) });
    }
  ), hd = i.forwardRef(
    (e, t) => {
      let { __scopeScrollArea: r, style: n, ...a } = e, o = Ae(_n, r), s = yl(_n, r), { onThumbPositionChange: u } = s, c = Lt(
        t,
        (f) => s.onThumbChange(f)
      ), d = i.useRef(), p = zn(() => {
        d.current && (d.current(), d.current = void 0);
      }, 100);
      return i.useEffect(() => {
        let f = o.viewport;
        if (f) {
          let h = /* @__PURE__ */ l(() => {
            if (p(), !d.current) {
              let m = md(f, u);
              d.current = m, u();
            }
          }, "handleScroll");
          return u(), f.addEventListener("scroll", h), () => f.removeEventListener("scroll", h);
        }
      }, [o.viewport, p, u]), /* @__PURE__ */ W.jsx(
        jr.div,
        {
          "data-state": s.hasThumb ? "visible" : "hidden",
          ...a,
          ref: c,
          style: {
            width: "var(--radix-scroll-area-thumb-width)",
            height: "var(--radix-scroll-area-thumb-height)",
            ...n
          },
          onPointerDownCapture: Rt(e.onPointerDownCapture, (f) => {
            let h = f.target.getBoundingClientRect(), m = f.clientX - h.left, v = f.clientY - h.top;
            s.onThumbPointerDown({ x: m, y: v });
          }),
          onPointerUp: Rt(e.onPointerUp, s.onThumbPointerUp)
        }
      );
    }
  ), Cl.displayName = _n, Qa = "ScrollAreaCorner", xl = i.forwardRef(
    (e, t) => {
      let r = Ae(Qa, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
      return r.type !== "scroll" && n ? /* @__PURE__ */ W.jsx(fd, { ...e, ref: t }) : null;
    }
  ), xl.displayName = Qa, fd = i.forwardRef((e, t) => {
    let { __scopeScrollArea: r, ...n } = e, a = Ae(Qa, r), [o, s] = i.useState(0), [u, c] = i.useState(0), d = !!(o && u);
    return nr(a.scrollbarX, () => {
      let p = a.scrollbarX?.offsetHeight || 0;
      a.onCornerHeightChange(p), c(p);
    }), nr(a.scrollbarY, () => {
      let p = a.scrollbarY?.offsetWidth || 0;
      a.onCornerWidthChange(p), s(p);
    }), d ? /* @__PURE__ */ W.jsx(
      jr.div,
      {
        ...n,
        ref: t,
        style: {
          width: o,
          height: u,
          position: "absolute",
          right: a.dir === "ltr" ? 0 : void 0,
          left: a.dir === "rtl" ? 0 : void 0,
          bottom: 0,
          ...e.style
        }
      }
    ) : null;
  }), l(Bn, "toInt"), l(Au, "getThumbRatio"), l(ra, "getThumbSize"), l(od, "getScrollPositionFromPointer"), l(hl, "getThumbOffsetFromScroll"), l(uc, "linearScale"), l(fl, "isScrollingWithinScrollbarBounds"), md = /* @__PURE__ */ l((e, t = () => {
  }) => {
    let r = { left: e.scrollLeft, top: e.scrollTop }, n = 0;
    return (/* @__PURE__ */ l(function a() {
      let o = { left: e.scrollLeft, top: e.scrollTop }, s = r.left !== o.left, u = r.top !== o.top;
      (s || u) && t(), r = o, n = window.requestAnimationFrame(a);
    }, "loop"))(), () => window.cancelAnimationFrame(n);
  }, "addUnlinkedScrollListener"), l(zn, "useDebounceCallback"), l(nr, "useResizeObserver"), l(id, "getSubtree"), Mm = gl, Hm = wl, Om = bl, Nm = Cl, Pm = xl;
}), gd, vd, Sl, Al, Vo, cc = z(() => {
  B8(), gd = I(Mm)(
    ({ scrollbarsize: e, offset: t }) => ({
      width: "100%",
      height: "100%",
      overflow: "hidden",
      "--scrollbar-size": `${e + t}px`,
      "--radix-scroll-area-thumb-width": `${e}px`
    })
  ), vd = I(Hm)({
    width: "100%",
    height: "100%"
  }), Sl = I(Om)(({ offset: e, horizontal: t, vertical: r }) => ({
    display: "flex",
    userSelect: "none",
    // ensures no selection
    touchAction: "none",
    // disable browser handling of all panning and zooming gestures on touch devices
    background: "transparent",
    transition: "all 0.2s ease-out",
    borderRadius: "var(--scrollbar-size)",
    zIndex: 1,
    '&[data-orientation="vertical"]': {
      width: "var(--scrollbar-size)",
      paddingRight: e,
      marginTop: e,
      marginBottom: t === "true" && r === "true" ? 0 : e
    },
    '&[data-orientation="horizontal"]': {
      flexDirection: "column",
      height: "var(--scrollbar-size)",
      paddingBottom: e,
      marginLeft: e,
      marginRight: t === "true" && r === "true" ? 0 : e
    }
  })), Al = I(Nm)(({ theme: e }) => ({
    flex: 1,
    background: e.textMutedColor,
    opacity: 0.5,
    borderRadius: "var(--scrollbar-size)",
    position: "relative",
    transition: "opacity 0.2s ease-out",
    "&:hover": { opacity: 0.8 },
    /* increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html */
    "::before": {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100%",
      height: "100%"
    }
  })), Vo = i.forwardRef(
    ({ children: e, horizontal: t = !1, vertical: r = !1, offset: n = 2, scrollbarSize: a = 6, className: o }, s) => /* @__PURE__ */ k.createElement(
      gd,
      { scrollbarsize: a, offset: n, className: o },
      /* @__PURE__ */ k.createElement(vd, { ref: s }, e),
      t && /* @__PURE__ */ k.createElement(
        Sl,
        {
          orientation: "horizontal",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        /* @__PURE__ */ k.createElement(Al, null)
      ),
      r && /* @__PURE__ */ k.createElement(
        Sl,
        {
          orientation: "vertical",
          offset: n,
          horizontal: t.toString(),
          vertical: r.toString()
        },
        /* @__PURE__ */ k.createElement(Al, null)
      ),
      t && r && /* @__PURE__ */ k.createElement(Pm, null)
    )
  ), Vo.displayName = "ScrollArea";
}), dc = {};
vn(dc, {
  SyntaxHighlighter: () => na,
  createCopyToClipboardFunction: () => ku,
  default: () => $m,
  supportedLanguages: () => Bu
});
const { logger: z8 } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
function ku() {
  return Fu?.clipboard ? (e) => Fu.clipboard.writeText(e) : async (e) => {
    let t = Vr.createElement("TEXTAREA"), r = Vr.activeElement;
    t.value = e, Vr.body.appendChild(t), t.select(), Vr.execCommand("copy"), Vr.body.removeChild(t), r.focus();
  };
}
var wd, Fu, Vr, bd, Bu, Dd, yd, Ed, Cd, xd, Sd, Ad, kl, kd, Fd, na, $m, ki = z(() => {
  ec(), wd = ce(xi(), 1), t8(), n8(), a8(), i8(), s8(), c8(), d8(), h8(), f8(), g8(), v8(), b8(), e8(), ym(), cc(), { navigator: Fu, document: Vr, window: bd } = Ci, Bu = {
    jsextra: cm,
    jsx: hm,
    json: dm,
    yml: bm,
    md: fm,
    bash: lm,
    css: sm,
    html: mm,
    tsx: vm,
    typescript: wm,
    graphql: um
  }, Object.entries(Bu).forEach(([e, t]) => {
    yo.registerLanguage(e, t);
  }), Dd = (0, wd.default)(2)(
    (e) => Object.entries(e.code || {}).reduce((t, [r, n]) => ({ ...t, [`* .${r}`]: n }), {})
  ), yd = ku(), l(ku, "createCopyToClipboardFunction"), Ed = I.div(
    ({ theme: e }) => ({
      position: "relative",
      overflow: "hidden",
      color: e.color.defaultText
    }),
    ({ theme: e, bordered: t }) => t ? {
      border: `1px solid ${e.appBorderColor}`,
      borderRadius: e.borderRadius,
      background: e.background.content
    } : {},
    ({ showLineNumbers: e }) => e ? {
      // use the before pseudo element to display line numbers
      ".react-syntax-highlighter-line-number::before": {
        content: "attr(data-line-number)"
      }
    } : {}
  ), Cd = /* @__PURE__ */ l(({ children: e, className: t }) => /* @__PURE__ */ k.createElement(
    Vo,
    { horizontal: !0, vertical: !0, className: t },
    e
  ), "UnstyledScroller"), xd = I(Cd)(
    {
      position: "relative"
    },
    ({ theme: e }) => Dd(e)
  ), Sd = I.pre(({ theme: e, padded: t }) => ({
    display: "flex",
    justifyContent: "flex-start",
    margin: 0,
    padding: t ? e.layoutMargin : 0
  })), Ad = I.div(({ theme: e }) => ({
    flex: 1,
    paddingLeft: 2,
    // TODO: To match theming/global.ts for now
    paddingRight: e.layoutMargin,
    opacity: 1,
    fontFamily: e.typography.fonts.mono
  })), kl = /* @__PURE__ */ l((e) => {
    let t = [...e.children], r = t[0], n = r.children[0].value, a = {
      ...r,
      // empty the line-number element
      children: [],
      properties: {
        ...r.properties,
        // add a data-line-number attribute to line-number element, so we can access the line number with `content: attr(data-line-number)`
        "data-line-number": n,
        // remove the 'userSelect: none' style, which will produce extra empty lines when copy-pasting in firefox
        style: { ...r.properties.style, userSelect: "auto" }
      }
    };
    return t[0] = a, { ...e, children: t };
  }, "processLineNumber"), kd = /* @__PURE__ */ l(({ rows: e, stylesheet: t, useInlineStyles: r }) => e.map((n, a) => Ai({
    node: kl(n),
    stylesheet: t,
    useInlineStyles: r,
    key: `code-segement${a}`
  })), "defaultRenderer"), Fd = /* @__PURE__ */ l((e, t) => t ? e ? ({ rows: r, ...n }) => e({ rows: r.map((a) => kl(a)), ...n }) : kd : e, "wrapRenderer"), na = /* @__PURE__ */ l(({
    children: e,
    language: t = "jsx",
    copyable: r = !1,
    bordered: n = !1,
    padded: a = !1,
    format: o = !0,
    formatter: s = void 0,
    className: u = void 0,
    showLineNumbers: c = !1,
    ...d
  }) => {
    if (typeof e != "string" || !e.trim())
      return null;
    let [p, f] = i.useState("");
    i.useEffect(() => {
      s ? s(o, e).then(f) : f(e.trim());
    }, [e, o, s]);
    let [h, m] = i.useState(!1), v = i.useCallback(
      (D) => {
        D.preventDefault(), yd(p).then(() => {
          m(!0), bd.setTimeout(() => m(!1), 1500);
        }).catch(z8.error);
      },
      [p]
    ), g = Fd(d.renderer, c);
    return /* @__PURE__ */ k.createElement(
      Ed,
      {
        bordered: n,
        padded: a,
        showLineNumbers: c,
        className: u
      },
      /* @__PURE__ */ k.createElement(xd, null, /* @__PURE__ */ k.createElement(
        yo,
        {
          padded: a || n,
          language: t,
          showLineNumbers: c,
          showInlineLineNumbers: c,
          useInlineStyles: !1,
          PreTag: Sd,
          CodeTag: Ad,
          lineNumberContainerStyle: {},
          ...d,
          renderer: g
        },
        p
      )),
      r ? /* @__PURE__ */ k.createElement(Dm, { actionItems: [{ title: h ? "Copied" : "Copy", onClick: v }] }) : null
    );
  }, "SyntaxHighlighter"), na.registerLanguage = (...e) => yo.registerLanguage(...e), $m = na;
});
function Bd(e) {
  if (typeof e == "string") return Ti;
  if (Array.isArray(e)) return Mi;
  if (!e) return;
  let { type: t } = e;
  if (Rc.has(t)) return t;
}
function zd(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Hi(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = Yg([...Rc].map((a) => `'${a}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
function Ke(e) {
  return qt(e), { type: ha, contents: e };
}
function pc(e, t) {
  return qt(t), { type: fa, contents: t, n: e };
}
function re(e, t = {}) {
  return qt(e), Oi(t.expandedStates, !0), { type: cn, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function jm(e) {
  return pc(Number.NEGATIVE_INFINITY, e);
}
function Vm(e) {
  return pc({ type: "root" }, e);
}
function hc(e) {
  return Oi(e), { type: ma, parts: e };
}
function da(e, t = "", r = {}) {
  return qt(e), t !== "" && qt(t), { type: ga, breakContents: e, flatContents: t, groupId: r.groupId };
}
function qm(e, t) {
  return qt(e), { type: va, contents: e, groupId: t.groupId, negate: t.negate };
}
function Cr(e, t) {
  qt(e), Oi(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function Fi(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(o) {
    if (r.has(o)) return r.get(o);
    let s = a(o);
    return r.set(o, s), s;
  }
  function a(o) {
    switch (Hi(o)) {
      case Mi:
        return t(o.map(n));
      case ma:
        return t({ ...o, parts: o.parts.map(n) });
      case ga:
        return t({ ...o, breakContents: n(o.breakContents), flatContents: n(o.flatContents) });
      case cn: {
        let { expandedStates: s, contents: u } = o;
        return s ? (s = s.map(n), u = s[0]) : u = n(u), t({ ...o, contents: u, expandedStates: s });
      }
      case fa:
      case ha:
      case va:
      case Jo:
      case Xo:
        return t({ ...o, contents: n(o.contents) });
      case Ti:
      case Zo:
      case Yo:
      case Ko:
      case Tt:
      case ia:
        return t(o);
      default:
        throw new Lc(o);
    }
  }
}
function Wm(e) {
  switch (Hi(e)) {
    case ma:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case cn:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === cn && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
        return e.contents;
      break;
    case fa:
    case ha:
    case va:
    case Xo:
      if (!e.contents) return "";
      break;
    case ga:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case Mi: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...a] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof dn(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...a);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Ti:
    case Zo:
    case Yo:
    case Ko:
    case Tt:
    case Jo:
    case ia:
      break;
    default:
      throw new Lc(e);
  }
  return e;
}
function Um(e) {
  return Fi(e, (t) => Wm(t));
}
function Re(e, t = Xg) {
  return Fi(e, (r) => typeof r == "string" ? Cr(t, r.split(`
`)) : r);
}
function _d(e, t) {
  let r = t === !0 || t === Yn ? Yn : Hu, n = r === Yn ? Hu : Yn, a = 0, o = 0;
  for (let s of e) s === r ? a++ : s === n && o++;
  return a > o ? n : r;
}
function Id(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Rd(e) {
  return e?.type === "front-matter";
}
function Fl(e, t) {
  var r;
  if (e.type === "text" || e.type === "comment" || Ra(e) || e.type === "yaml" || e.type === "toml") return null;
  if (e.type === "attribute" && delete t.value, e.type === "docType" && delete t.value, e.type === "angularControlFlowBlock" && (r = e.parameters) != null && r.children) for (let n of t.parameters.children) Qg.has(e.name) ? delete n.expression : n.expression = n.expression.trim();
  e.type === "angularIcuExpression" && (t.switchValue = e.switchValue.trim()), e.type === "angularLetDeclarationInitializer" && delete t.value;
}
async function Ld(e, t) {
  if (e.language === "yaml") {
    let r = e.value.trim(), n = r ? await t(r, { parser: "yaml" }) : "";
    return Vm([e.startDelimiter, e.explicitLanguage, X, n, n ? X : "", e.endDelimiter]);
  }
}
function Aa(e, t = !0) {
  return [Ke([ue, e]), t ? ue : ""];
}
function xr(e, t) {
  let r = e.type === "NGRoot" ? e.node.type === "NGMicrosyntax" && e.node.body.length === 1 && e.node.body[0].type === "NGMicrosyntaxExpression" ? e.node.body[0].expression : e.node : e.type === "JsExpressionRoot" ? e.node : e;
  return r && (r.type === "ObjectExpression" || r.type === "ArrayExpression" || (t.parser === "__vue_expression" || t.parser === "__vue_ts_expression") && (r.type === "TemplateLiteral" || r.type === "StringLiteral"));
}
async function Te(e, t, r, n) {
  r = { __isInHtmlAttribute: !0, __embeddedInHtml: !0, ...r };
  let a = !0;
  n && (r.__onHtmlBindingRoot = (s, u) => {
    a = n(s, u);
  });
  let o = await t(e, r, t);
  return a ? re(o) : Aa(o);
}
function Td(e, t, r, n) {
  let { node: a } = r, o = n.originalText.slice(a.sourceSpan.start.offset, a.sourceSpan.end.offset);
  return /^\s*$/u.test(o) ? "" : Te(o, e, { parser: "__ng_directive", __isInHtmlAttribute: !1 }, xr);
}
function zu(e, t) {
  if (!t) return;
  let r = r4(t).toLowerCase();
  return e.find(({ filenames: n }) => n?.some((a) => a.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n?.some((a) => r.endsWith(a)));
}
function Gm(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r?.includes(t)) ?? e.find(({ extensions: r }) => r?.includes(`.${t}`));
}
function Md(e, t) {
  let r = e.plugins.flatMap((a) => a.languages ?? []);
  return (Gm(r, t.language) ?? zu(r, t.physicalFile) ?? zu(r, t.file) ?? (t.physicalFile, void 0))?.parsers[0];
}
function Hd(e) {
  return e.type === "element" && !e.hasExplicitNamespace && !["html", "svg"].includes(e.namespace);
}
function fc(e, t) {
  return !!(e.type === "ieConditionalComment" && e.lastChild && !e.lastChild.isSelfClosing && !e.lastChild.endSourceSpan || e.type === "ieConditionalComment" && !e.complete || vr(e) && e.children.some((r) => r.type !== "text" && r.type !== "interpolation") || zi(e, t) && !dt(e) && e.type !== "interpolation");
}
function ka(e) {
  return e.type === "attribute" || !e.parent || !e.prev ? !1 : Zm(e.prev);
}
function Zm(e) {
  return e.type === "comment" && e.value.trim() === "prettier-ignore";
}
function Fe(e) {
  return e.type === "text" || e.type === "comment";
}
function dt(e) {
  return e.type === "element" && (e.fullName === "script" || e.fullName === "style" || e.fullName === "svg:style" || e.fullName === "svg:script" || pn(e) && (e.name === "script" || e.name === "style"));
}
function Ym(e) {
  return e.children && !dt(e);
}
function Xm(e) {
  return dt(e) || e.type === "interpolation" || mc(e);
}
function mc(e) {
  return Ec(e).startsWith("pre");
}
function Km(e, t) {
  var r, n;
  let a = o();
  if (a && !e.prev && (n = (r = e.parent) == null ? void 0 : r.tagDefinition) != null && n.ignoreFirstLf) return e.type === "interpolation";
  return a;
  function o() {
    return Ra(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.prev && (e.prev.type === "text" || e.prev.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : vr(e.parent) ? !0 : !(!e.prev && (e.parent.type === "root" || vr(e) && e.parent || dt(e.parent) || Fa(e.parent, t) || !ig(e.parent.cssDisplay)) || e.prev && !ug(e.prev.cssDisplay));
  }
}
function Jm(e, t) {
  return Ra(e) || e.type === "angularControlFlowBlock" ? !1 : (e.type === "text" || e.type === "interpolation") && e.next && (e.next.type === "text" || e.next.type === "interpolation") ? !0 : !e.parent || e.parent.cssDisplay === "none" ? !1 : vr(e.parent) ? !0 : !(!e.next && (e.parent.type === "root" || vr(e) && e.parent || dt(e.parent) || Fa(e.parent, t) || !lg(e.parent.cssDisplay)) || e.next && !sg(e.next.cssDisplay));
}
function Qm(e) {
  return cg(e.cssDisplay) && !dt(e);
}
function Wn(e) {
  return Ra(e) || e.next && e.sourceSpan.end && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line;
}
function eg(e) {
  return gc(e) || e.type === "element" && e.children.length > 0 && (["body", "script", "style"].includes(e.name) || e.children.some((t) => rg(
    t
  ))) || e.firstChild && e.firstChild === e.lastChild && e.firstChild.type !== "text" && wc(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || bc(e.lastChild));
}
function gc(e) {
  return e.type === "element" && e.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e.name) || e.cssDisplay.startsWith(
    "table"
  ) && e.cssDisplay !== "table-cell");
}
function Eo(e) {
  return Dc(e) || e.prev && tg(e.prev) || vc(e);
}
function tg(e) {
  return Dc(e) || e.type === "element" && e.fullName === "br" || vc(e);
}
function vc(e) {
  return wc(e) && bc(e);
}
function wc(e) {
  return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : e.parent.type === "root" || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line);
}
function bc(e) {
  return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : e.parent.type === "root" || e.parent.endSourceSpan && e.parent.endSourceSpan.start.line > e.sourceSpan.end.line);
}
function Dc(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return !0;
    case "element":
      return ["script", "select"].includes(e.name);
  }
  return !1;
}
function Bi(e) {
  return e.lastChild ? Bi(e.lastChild) : e;
}
function rg(e) {
  var t;
  return (t = e.children) == null ? void 0 : t.some((r) => r.type !== "text");
}
function yc(e) {
  if (e) switch (e) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (e.endsWith("json") || e.endsWith("importmap") || e === "speculationrules") return "json";
  }
}
function ng(e, t) {
  let { name: r, attrMap: n } = e;
  if (r !== "script" || Object.prototype.hasOwnProperty.call(n, "src")) return;
  let { type: a, lang: o } = e.attrMap;
  return !o && !a ? "babel" : La(t, { language: o }) ?? yc(a);
}
function ag(e, t) {
  if (!zi(e, t)) return;
  let { attrMap: r } = e;
  if (Object.prototype.hasOwnProperty.call(r, "src")) return;
  let { type: n, lang: a } = r;
  return La(t, { language: a }) ?? yc(n);
}
function og(e, t) {
  if (e.name !== "style") return;
  let { lang: r } = e.attrMap;
  return r ? La(t, { language: r }) : "css";
}
function _u(e, t) {
  return ng(e, t) ?? og(e, t) ?? ag(e, t);
}
function wn(e) {
  return e === "block" || e === "list-item" || e.startsWith("table");
}
function ig(e) {
  return !wn(e) && e !== "inline-block";
}
function lg(e) {
  return !wn(e) && e !== "inline-block";
}
function sg(e) {
  return !wn(e);
}
function ug(e) {
  return !wn(e);
}
function cg(e) {
  return !wn(e) && e !== "inline-block";
}
function vr(e) {
  return Ec(e).startsWith("pre");
}
function dg(e, t) {
  let r = e;
  for (; r; ) {
    if (t(r)) return !0;
    r = r.parent;
  }
  return !1;
}
function pg(e, t) {
  var r;
  if (Sr(e, t)) return "block";
  if (((r = e.prev) == null ? void 0 : r.type) === "comment") {
    let a = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (a) return a[1];
  }
  let n = !1;
  if (e.type === "element" && e.namespace === "svg") if (dg(e, (a) => a.fullName === "svg:foreignObject")) n = !0;
  else return e.name === "svg" ? "inline-block" : "block";
  switch (t.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return e.type === "element" && (!e.namespace || n || pn(e)) && a4[e.name] || n4;
  }
}
function Ec(e) {
  return e.type === "element" && (!e.namespace || pn(e)) && i4[e.name] || o4;
}
function hg(e) {
  let t = Number.POSITIVE_INFINITY;
  for (let r of e.split(`
`)) {
    if (r.length === 0) continue;
    let n = qe.getLeadingWhitespaceCount(r);
    if (n === 0) return 0;
    r.length !== n && n < t && (t = n);
  }
  return t === Number.POSITIVE_INFINITY ? 0 : t;
}
function Cc(e, t = hg(e)) {
  return t === 0 ? e : e.split(`
`).map((r) => r.slice(t)).join(`
`);
}
function xc(e) {
  return Ee(!1, Ee(!1, e, "&apos;", "'"), "&quot;", '"');
}
function Bt(e) {
  return xc(e.value);
}
function Fa(e, t) {
  return Sr(e, t) && !s4.has(e.fullName);
}
function Sr(e, t) {
  return t.parser === "vue" && e.type === "element" && e.parent.type === "root" && e.fullName.toLowerCase() !== "html";
}
function zi(e, t) {
  return Sr(e, t) && (Fa(e, t) || e.attrMap.lang && e.attrMap.lang !== "html");
}
function fg(e) {
  let t = e.fullName;
  return t.charAt(0) === "#" || t === "slot-scope" || t === "v-slot" || t.startsWith("v-slot:");
}
function mg(e, t) {
  let r = e.parent;
  if (!Sr(r, t)) return !1;
  let n = r.fullName, a = e.fullName;
  return n === "script" && a === "setup" || n === "style" && a === "vars";
}
function Sc(e, t = e.value) {
  return e.parent.isWhitespaceSensitive ? e.parent.isIndentationSensitive ? Re(t) : Re(Cc(Tc(t)), X) : Cr(ae, qe.split(t));
}
function Ac(e, t) {
  return Sr(e, t) && e.name === "script";
}
async function gg(e, t) {
  let r = [];
  for (let [n, a] of e.split(Mc).entries()) if (n % 2 === 0) r.push(Re(a));
  else try {
    r.push(re(["{{", Ke([ae, await Te(a, t, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), ae, "}}"]));
  } catch {
    r.push("{{", Re(a), "}}");
  }
  return r;
}
function eo({ parser: e }) {
  return (t, r, n) => Te(Bt(n.node), t, { parser: e }, xr);
}
function Od(e, t) {
  if (t.parser !== "angular") return;
  let { node: r } = e, n = r.fullName;
  if (n.startsWith("(") && n.endsWith(")") || n.startsWith("on-")) return u4;
  if (n.startsWith("[") && n.endsWith("]") || /^bind(?:on)?-/u.test(n) || /^ng-(?:if|show|hide|class|style)$/u.test(n)) return c4;
  if (n.startsWith("*")) return d4;
  let a = Bt(r);
  if (/^i18n(?:-.+)?$/u.test(n)) return () => Aa(hc(Sc(r, a.trim())), !a.includes("@@"));
  if (Mc.test(a)) return (o) => gg(a, o);
}
function Nd(e, t) {
  let { node: r } = e, n = Bt(r);
  if (r.fullName === "class" && !t.parentParser && !n.includes("{{")) return () => n.trim().split(/\s+/u).join(" ");
}
function Iu(e) {
  return e === "	" || e === `
` || e === "\f" || e === "\r" || e === " ";
}
function Pd(e) {
  let t = e.length, r, n, a, o, s, u = 0, c;
  function d(m) {
    let v, g = m.exec(e.substring(u));
    if (g) return [v] = g, u += v.length, v;
  }
  l(d, "p");
  let p = [];
  for (; ; ) {
    if (d(m4), u >= t) {
      if (p.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return p;
    }
    c = u, r = d(g4), n = [], r.slice(-1) === "," ? (r = r.replace(v4, ""), h()) : f();
  }
  function f() {
    for (d(f4), a = "", o = "in descriptor"; ; ) {
      if (s = e.charAt(u), o === "in descriptor") if (Iu(s)) a && (n.push(a), a = "", o = "after descriptor");
      else if (s === ",") {
        u += 1, a && n.push(a), h();
        return;
      } else if (s === "(") a += s, o = "in parens";
      else if (s === "") {
        a && n.push(a), h();
        return;
      } else a += s;
      else if (o === "in parens") if (s === ")") a += s, o = "in descriptor";
      else if (s === "") {
        n.push(a), h();
        return;
      } else a += s;
      else if (o === "after descriptor" && !Iu(s)) if (s === "") {
        h();
        return;
      } else o = "in descriptor", u -= 1;
      u += 1;
    }
  }
  l(f, "f");
  function h() {
    let m = !1, v, g, D, y, E = {}, w, b, C, S, A;
    for (y = 0; y < n.length; y++) w = n[y], b = w[w.length - 1], C = w.substring(0, w.length - 1), S = parseInt(C, 10), A = parseFloat(C), Ou.test(C) && b === "w" ? ((v || g) && (m = !0), S === 0 ? m = !0 : v = S) : w4.test(C) && b === "x" ? ((v || g || D) && (m = !0), A < 0 ? m = !0 : g = A) : Ou.test(C) && b === "h" ? ((D || g) && (m = !0), S === 0 ? m = !0 : D = S) : m = !0;
    if (!m) E.source = { value: r, startOffset: c }, v && (E.width = { value: v }), g && (E.density = { value: g }), D && (E.height = { value: D }), p.push(E);
    else throw new Error(`Invalid srcset descriptor found in "${e}" at "${w}".`);
  }
  l(h, "d");
}
function $d(e) {
  if (e.node.fullName === "srcset" && (e.parent.fullName === "img" || e.parent.fullName === "source")) return () => vg(Bt(e.node));
}
function vg(e) {
  let t = b4(e), r = D4.filter((p) => t.some((f) => Object.prototype.hasOwnProperty.call(f, p)));
  if (r.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n] = r, a = Nu[n], o = t.map((p) => p.source.value), s = Math.max(...o.map((p) => p.length)), u = t.map((p) => p[n] ? String(p[n].value) : ""), c = u.map((p) => {
    let f = p.indexOf(".");
    return f === -1 ? p.length : f;
  }), d = Math.max(...c);
  return Aa(Cr([",", ae], o.map((p, f) => {
    let h = [p], m = u[f];
    if (m) {
      let v = s - p.length + 1, g = d - c[f], D = " ".repeat(v + g);
      h.push(da(D, " "), m + a);
    }
    return h;
  })));
}
function wg(e, t) {
  let { node: r } = e, n = Bt(e.node).trim();
  if (r.fullName === "style" && !t.parentParser && !n.includes("{{")) return async (a) => Aa(await a(n, { parser: "css", __isHTMLStyleAttribute: !0 }));
}
function jd(e, t) {
  let { root: r } = e;
  return Co.has(r) || Co.set(r, r.children.some((n) => Ac(n, t) && ["ts", "typescript"].includes(n.attrMap.lang))), Co.get(r);
}
function bg(e, t, r) {
  let { node: n } = r, a = Bt(n);
  return Te(`type T<${a}> = any`, e, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: !0 }, xr);
}
function Dg(e, t, { parseWithTs: r }) {
  return Te(`function _(${e}) {}`, t, { parser: r ? "babel-ts" : "babel", __isVueBindings: !0 });
}
function yg(e) {
  let t = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/u, r = /^[$_a-z][\w$]*(?:\.[$_a-z][\w$]*|\['[^']*'\]|\["[^"]*"\]|\[\d+\]|\[[$_a-z][\w$]*\])*$/iu, n = e.trim();
  return t.test(n) || r.test(n);
}
async function Eg(e, t, r, n) {
  let a = Bt(r.node), { left: o, operator: s, right: u } = Cg(a), c = Ni(r, n);
  return [re(await Te(`function _(${o}) {}`, e, { parser: c ? "babel-ts" : "babel", __isVueForBindingLeft: !0 })), " ", s, " ", await Te(
    u,
    e,
    { parser: c ? "__ts_expression" : "__js_expression" }
  )];
}
function Cg(e) {
  let t = /(.*?)\s+(in|of)\s+(.*)/su, r = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n = /^\(|\)$/gu, a = e.match(t);
  if (!a) return;
  let o = {};
  if (o.for = a[3].trim(), !o.for) return;
  let s = Ee(!1, a[1].trim(), n, ""), u = s.match(r);
  u ? (o.alias = s.replace(r, ""), o.iterator1 = u[1].trim(), u[2] && (o.iterator2 = u[2].trim())) : o.alias = s;
  let c = [o.alias, o.iterator1, o.iterator2];
  if (!c.some((d, p) => !d && (p === 0 || c.slice(p + 1).some(Boolean)))) return { left: c.filter(Boolean).join(","), operator: a[2], right: o.for };
}
function Vd(e, t) {
  if (t.parser !== "vue") return;
  let { node: r } = e, n = r.fullName;
  if (n === "v-for") return Eg;
  if (n === "generic" && Ac(r.parent, t)) return bg;
  let a = Bt(r), o = Ni(e, t);
  if (fg(r) || mg(r, t)) return (s) => Dg(a, s, { parseWithTs: o });
  if (n.startsWith("@") || n.startsWith("v-on:")) return (s) => xg(a, s, { parseWithTs: o });
  if (n.startsWith(":") || n.startsWith("v-bind:")) return (s) => Sg(a, s, { parseWithTs: o });
  if (n.startsWith("v-")) return (s) => kc(a, s, { parseWithTs: o });
}
function xg(e, t, { parseWithTs: r }) {
  return yg(e) ? kc(e, t, { parseWithTs: r }) : Te(e, t, { parser: r ? "__vue_ts_event_binding" : "__vue_event_binding" }, xr);
}
function Sg(e, t, { parseWithTs: r }) {
  return Te(e, t, { parser: r ? "__vue_ts_expression" : "__vue_expression" }, xr);
}
function kc(e, t, { parseWithTs: r }) {
  return Te(e, t, { parser: r ? "__ts_expression" : "__js_expression" }, xr);
}
function qd(e, t) {
  let { node: r } = e;
  if (r.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(t.originalText.slice(r.valueSpan.start.offset, r.valueSpan.end.offset)) || t.parser === "lwc" && r.value.startsWith("{") && r.value.endsWith("}")) return [r.rawName, "=", r.value];
    for (let n of [y4, wg, h4, E4, p4]) {
      let a = n(e, t);
      if (a) return Ag(a);
    }
  }
}
function Ag(e) {
  return async (t, r, n, a) => {
    let o = await e(t, r, n, a);
    if (o) return o = Fi(o, (s) => typeof s == "string" ? Ee(!1, s, '"', "&quot;") : s), [n.node.rawName, '="', re(o), '"'];
  };
}
function Wd(e) {
  return Array.isArray(e) && e.length > 0;
}
function Ba(e) {
  return e.sourceSpan.start.offset;
}
function za(e) {
  return e.sourceSpan.end.offset;
}
function qo(e, t) {
  return [e.isSelfClosing ? "" : kg(e, t), Xr(e, t)];
}
function kg(e, t) {
  return e.lastChild && un(e.lastChild) ? "" : [Fg(e, t), _i(e, t)];
}
function Xr(e, t) {
  return (e.next ? jt(e.next) : Dn(e.parent)) ? "" : [bn(e, t), $t(e, t)];
}
function Fg(e, t) {
  return Dn(e) ? bn(e.lastChild, t) : "";
}
function $t(e, t) {
  return un(e) ? _i(e.parent, t) : _a(e) ? Ii(e.next) : "";
}
function _i(e, t) {
  if (Hc(!e.isSelfClosing), Fc(e, t)) return "";
  switch (e.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (e.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${e.rawName}`;
  }
}
function bn(e, t) {
  if (Fc(e, t)) return "";
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (e.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function Fc(e, t) {
  return !e.isSelfClosing && !e.endSourceSpan && (ka(e) || fc(e.parent, t));
}
function jt(e) {
  return e.prev && e.prev.type !== "docType" && e.type !== "angularControlFlowBlock" && !Fe(e.prev) && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function Dn(e) {
  var t;
  return ((t = e.lastChild) == null ? void 0 : t.isTrailingSpaceSensitive) && !e.lastChild.hasTrailingSpaces && !Fe(Bi(e.lastChild)) && !vr(
    e
  );
}
function un(e) {
  return !e.next && !e.hasTrailingSpaces && e.isTrailingSpaceSensitive && Fe(Bi(e));
}
function _a(e) {
  return e.next && !Fe(e.next) && Fe(e) && e.isTrailingSpaceSensitive && !e.hasTrailingSpaces;
}
function Bg(e) {
  let t = e.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return t ? t[1] ? t[1].split(/\s+/u) : !0 : !1;
}
function Ia(e) {
  return !e.prev && e.isLeadingSpaceSensitive && !e.hasLeadingSpaces;
}
function zg(e, t, r) {
  var n;
  let { node: a } = e;
  if (!Pi(a.attrs)) return a.isSelfClosing ? " " : "";
  let o = ((n = a.prev) == null ? void 0 : n.type) === "comment" && Bg(a.prev.value), s = typeof o == "boolean" ? () => o : Array.isArray(o) ? (f) => o.includes(f.rawName) : () => !1, u = e.map(({ node: f }) => s(f) ? Re(t.originalText.slice(Ba(f), za(f))) : r(), "attrs"), c = a.type === "element" && a.fullName === "script" && a.attrs.length === 1 && a.attrs[0].fullName === "src" && a.children.length === 0, d = t.singleAttributePerLine && a.attrs.length > 1 && !Sr(a, t) ? X : ae, p = [Ke([c ? " " : ae, Cr(d, u)])];
  return a.firstChild && Ia(a.firstChild) || a.isSelfClosing && Dn(a.parent) || c ? p.push(a.isSelfClosing ? " " : "") : p.push(t.bracketSameLine ? a.isSelfClosing ? " " : "" : a.isSelfClosing ? ae : ue), p;
}
function _g(e) {
  return e.firstChild && Ia(e.firstChild) ? "" : Ri(e);
}
function Wo(e, t, r) {
  let { node: n } = e;
  return [Kr(n, t), zg(e, t, r), n.isSelfClosing ? "" : _g(n)];
}
function Kr(e, t) {
  return e.prev && _a(e.prev) ? "" : [Vt(e, t), Ii(e)];
}
function Vt(e, t) {
  return Ia(e) ? Ri(e.parent) : jt(e) ? bn(e.prev, t) : "";
}
function Ii(e) {
  switch (e.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${e.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType":
      return e.value === "html" ? "<!doctype" : "<!DOCTYPE";
    case "angularIcuExpression":
      return "{";
    case "element":
      if (e.condition) return `<!--[if ${e.condition}]><!--><${e.rawName}`;
    default:
      return `<${e.rawName}`;
  }
}
function Ri(e) {
  switch (Hc(!e.isSelfClosing), e.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (e.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Ud(e, t) {
  if (!e.endSourceSpan) return "";
  let r = e.startSourceSpan.end.offset;
  e.firstChild && Ia(e.firstChild) && (r -= Ri(e).length);
  let n = e.endSourceSpan.start.offset;
  return e.lastChild && un(e.lastChild) ? n += _i(e, t).length : Dn(e) && (n -= bn(e.lastChild, t).length), t.originalText.slice(r, n);
}
function Gd(e, t) {
  let { node: r } = e;
  switch (r.type) {
    case "element":
      if (dt(r) || r.type === "interpolation") return;
      if (!r.isSelfClosing && zi(r, t)) {
        let n = _u(r, t);
        return n ? async (a, o) => {
          let s = Oc(r, t), u = /^\s*$/u.test(s), c = "";
          return u || (c = await a(Tc(s), { parser: n, __embeddedInHtml: !0 }), u = c === ""), [Vt(r, t), re(Wo(e, t, o)), u ? "" : X, c, u ? "" : X, qo(r, t), $t(r, t)];
        } : void 0;
      }
      break;
    case "text":
      if (dt(r.parent)) {
        let n = _u(r.parent, t);
        if (n) return async (a) => {
          let o = n === "markdown" ? Cc(r.value.replace(/^[^\S\n]*\n/u, "")) : r.value, s = { parser: n, __embeddedInHtml: !0 };
          if (t.parser === "html" && n === "babel") {
            let u = "script", { attrMap: c } = r.parent;
            c && (c.type === "module" || c.type === "text/babel" && c["data-type"] === "module") && (u = "module"), s.__babelSourceType = u;
          }
          return [Qr, Vt(r, t), await a(o, s), $t(r, t)];
        };
      } else if (r.parent.type === "interpolation") return async (n) => {
        let a = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
        return t.parser === "angular" ? a.parser = "__ng_interpolation" : t.parser === "vue" ? a.parser = Ni(e, t) ? "__vue_ts_expression" : "__vue_expression" : a.parser = "__js_expression", [Ke([ae, await n(r.value, a)]), r.parent.next && jt(r.parent.next) ? " " : ae];
      };
      break;
    case "attribute":
      return C4(e, t);
    case "front-matter":
      return (n) => e4(r, n);
    case "angularControlFlowBlockParameters":
      return x4.has(e.parent.name) ? t4 : void 0;
    case "angularLetDeclarationInitializer":
      return (n) => Te(r.value, n, { parser: "__ng_binding", __isInHtmlAttribute: !1 });
  }
}
function Jr(e) {
  if (Wr !== null && typeof Wr.property) {
    let t = Wr;
    return Wr = Jr.prototype = null, t;
  }
  return Wr = Jr.prototype = e ?? /* @__PURE__ */ Object.create(null), new Jr();
}
function Ig(e) {
  return Jr(e);
}
function Zd(e, t = "type") {
  Ig(e);
  function r(n) {
    let a = n[t], o = e[a];
    if (!Array.isArray(o)) throw Object.assign(new Error(`Missing visitor keys for '${a}'.`), { node: n });
    return o;
  }
  return l(r, "r"), r;
}
function Rg(e) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(e);
}
function Yd(e) {
  return `<!-- @format -->

` + e;
}
function Bc(e) {
  let t = za(e);
  return e.type === "element" && !e.endSourceSpan && Pi(e.children) ? Math.max(t, Bc(dn(!1, e.children, -1))) : t;
}
function qr(e, t, r) {
  let n = e.node;
  if (ka(n)) {
    let a = Bc(n);
    return [Vt(n, t), Re(qe.trimEnd(t.originalText.slice(Ba(n) + (n.prev && _a(n.prev) ? Ii(n).length : 0), a - (n.next && jt(n.next) ? bn(
      n,
      t
    ).length : 0)))), $t(n, t)];
  }
  return r();
}
function Un(e, t) {
  return Fe(e) && Fe(t) ? e.isTrailingSpaceSensitive ? e.hasTrailingSpaces ? Eo(t) ? X : ae : "" : Eo(t) ? X : ue : _a(e) && (ka(t) || t.firstChild || t.isSelfClosing || t.type === "element" && t.attrs.length > 0) || e.type === "element" && e.isSelfClosing && jt(t) ? "" : !t.isLeadingSpaceSensitive || Eo(t) || jt(t) && e.lastChild && un(e.lastChild) && e.lastChild.lastChild && un(e.lastChild.lastChild) ? X : t.hasLeadingSpaces ? ae : ue;
}
function Li(e, t, r) {
  let { node: n } = e;
  if (gc(n)) return [Qr, ...e.map((o) => {
    let s = o.node, u = s.prev ? Un(s.prev, s) : "";
    return [u ? [u, Wn(s.prev) ? X : ""] : "", qr(o, t, r)];
  }, "children")];
  let a = n.children.map(() => Symbol(""));
  return e.map((o, s) => {
    let u = o.node;
    if (Fe(u)) {
      if (u.prev && Fe(u.prev)) {
        let v = Un(u.prev, u);
        if (v) return Wn(u.prev) ? [X, X, qr(o, t, r)] : [v, qr(o, t, r)];
      }
      return qr(o, t, r);
    }
    let c = [], d = [], p = [], f = [], h = u.prev ? Un(u.prev, u) : "", m = u.next ? Un(u, u.next) : "";
    return h && (Wn(u.prev) ? c.push(X, X) : h === X ? c.push(X) : Fe(u.prev) ? d.push(h) : d.push(da("", ue, { groupId: a[s - 1] }))), m && (Wn(u) ? Fe(u.next) && f.push(X, X) : m === X ? Fe(u.next) && f.push(X) : p.push(m)), [
      ...c,
      re([...d, re([qr(o, t, r), ...p], { id: a[s] })]),
      ...f
    ];
  }, "children");
}
function Lg(e, t, r) {
  let { node: n } = e, a = [];
  Tg(e) && a.push("} "), a.push("@", n.name), n.parameters && a.push(" (", re(r("parameters")), ")"), a.push(" {");
  let o = zc(n);
  return n.children.length > 0 ? (n.firstChild.hasLeadingSpaces = !0, n.lastChild.hasTrailingSpaces = !0, a.push(Ke([X, Li(e, t, r)])), o && a.push(X, "}")) : o && a.push("}"), re(a, { shouldBreak: !0 });
}
function zc(e) {
  var t, r;
  return !(((t = e.next) == null ? void 0 : t.type) === "angularControlFlowBlock" && (r = S4.get(e.name)) != null && r.has(e.next.name));
}
function Tg(e) {
  let { previous: t } = e;
  return t?.type === "angularControlFlowBlock" && !ka(t) && !zc(t);
}
function Mg(e, t, r) {
  return [Ke([ue, Cr([";", ae], e.map(r, "children"))]), ue];
}
function Hg(e, t, r) {
  let { node: n } = e;
  return [Kr(n, t), re([n.switchValue.trim(), ", ", n.clause, n.cases.length > 0 ? [",", Ke([ae, Cr(ae, e.map(r, "cases"))])] : "", ue]), Xr(
    n,
    t
  )];
}
function Og(e, t, r) {
  let { node: n } = e;
  return [n.value, " {", re([Ke([ue, e.map(({ node: a }) => a.type === "text" && !qe.trim(a.value) ? "" : r(), "expression")]), ue]), "}"];
}
function Ng(e, t, r) {
  let { node: n } = e;
  if (fc(n, t)) return [Vt(n, t), re(Wo(e, t, r)), Re(Oc(n, t)), ...qo(n, t), $t(n, t)];
  let a = n.children.length === 1 && (n.firstChild.type === "interpolation" || n.firstChild.type === "angularIcuExpression") && n.firstChild.isLeadingSpaceSensitive && !n.firstChild.hasLeadingSpaces && n.lastChild.isTrailingSpaceSensitive && !n.lastChild.hasTrailingSpaces, o = Symbol(
    "element-attr-group-id"
  ), s = /* @__PURE__ */ l((p) => re([re(Wo(e, t, r), { id: o }), p, qo(n, t)]), "a"), u = /* @__PURE__ */ l((p) => a ? qm(p, { groupId: o }) : (dt(n) || Fa(n, t)) && n.parent.type === "root" && t.parser === "vue" && !t.vueIndentScriptAndStyle ? p : Ke(p), "o"), c = /* @__PURE__ */ l(() => a ? da(ue, "", { groupId: o }) : n.firstChild.hasLeadingSpaces && n.firstChild.isLeadingSpaceSensitive ? ae : n.firstChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive ? jm(ue) : ue, "u"), d = /* @__PURE__ */ l(() => (n.next ? jt(n.next) : Dn(n.parent)) ? n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? " " : "" : a ? da(ue, "", { groupId: o }) : n.lastChild.hasTrailingSpaces && n.lastChild.isTrailingSpaceSensitive ? ae : (n.lastChild.type === "comment" || n.lastChild.type === "text" && n.isWhitespaceSensitive && n.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${t.tabWidth * (e.ancestors.length - 1)}}$`, "u").test(n.lastChild.value) ? "" : ue, "p");
  return n.children.length === 0 ? s(n.hasDanglingSpaces && n.isDanglingSpaceSensitive ? ae : "") : s([
    eg(n) ? Qr : "",
    u([c(), Li(e, t, r)]),
    d()
  ]);
}
function aa(e) {
  return e >= 9 && e <= 32 || e == 160;
}
function Uo(e) {
  return 48 <= e && e <= 57;
}
function oa(e) {
  return e >= 97 && e <= 122 || e >= 65 && e <= 90;
}
function Pg(e) {
  return e >= 97 && e <= 102 || e >= 65 && e <= 70 || Uo(e);
}
function to(e) {
  return e === 10 || e === 13;
}
function Bl(e) {
  return 48 <= e && e <= 55;
}
function ro(e) {
  return e === 39 || e === 34 || e === 96;
}
function Xd(e) {
  return e.replace(A4, (...t) => t[1].toUpperCase());
}
function Kd(e, t) {
  for (let r of k4) r(e, t);
  return e;
}
function Jd(e) {
  e.walk((t) => {
    if (t.type === "element" && t.tagDefinition.ignoreFirstLf && t.children.length > 0 && t.children[0].type === "text" && t.children[0].value[0] === `
`) {
      let r = t.children[0];
      r.value.length === 1 ? t.removeChild(r) : r.value = r.value.slice(1);
    }
  });
}
function Qd(e) {
  let t = /* @__PURE__ */ l((r) => {
    var n, a;
    return r.type === "element" && ((n = r.prev) == null ? void 0 : n.type) === "ieConditionalStartComment" && r.prev.sourceSpan.end.offset === r.startSourceSpan.start.offset && ((a = r.firstChild) == null ? void 0 : a.type) === "ieConditionalEndComment" && r.firstChild.sourceSpan.start.offset === r.startSourceSpan.end.offset;
  }, "e");
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let a = r.children[n];
      if (!t(a)) continue;
      let o = a.prev, s = a.firstChild;
      r.removeChild(o), n--;
      let u = new $(o.sourceSpan.start, s.sourceSpan.end), c = new $(u.start, a.sourceSpan.end);
      a.condition = o.condition, a.sourceSpan = c, a.startSourceSpan = u, a.removeChild(s);
    }
  });
}
function $g(e, t, r) {
  e.walk((n) => {
    if (n.children) for (let a = 0; a < n.children.length; a++) {
      let o = n.children[a];
      if (o.type !== "text" && !t(o)) continue;
      o.type !== "text" && (o.type = "text", o.value = r(o));
      let s = o.prev;
      !s || s.type !== "text" || (s.value += o.value, s.sourceSpan = new $(s.sourceSpan.start, o.sourceSpan.end), n.removeChild(o), a--);
    }
  });
}
function ep(e) {
  return $g(e, (t) => t.type === "cdata", (t) => `<![CDATA[${t.value}]]>`);
}
function tp(e) {
  let t = /* @__PURE__ */ l((r) => {
    var n, a;
    return r.type === "element" && r.attrs.length === 0 && r.children.length === 1 && r.firstChild.type === "text" && !qe.hasWhitespaceCharacter(
      r.children[0].value
    ) && !r.firstChild.hasLeadingSpaces && !r.firstChild.hasTrailingSpaces && r.isLeadingSpaceSensitive && !r.hasLeadingSpaces && r.isTrailingSpaceSensitive && !r.hasTrailingSpaces && ((n = r.prev) == null ? void 0 : n.type) === "text" && ((a = r.next) == null ? void 0 : a.type) === "text";
  }, "e");
  e.walk((r) => {
    if (r.children) for (let n = 0; n < r.children.length; n++) {
      let a = r.children[n];
      if (!t(a)) continue;
      let o = a.prev, s = a.next;
      o.value += `<${a.rawName}>` + a.firstChild.value + `</${a.rawName}>` + s.value, o.sourceSpan = new $(o.sourceSpan.start, s.sourceSpan.end), o.isTrailingSpaceSensitive = s.isTrailingSpaceSensitive, o.hasTrailingSpaces = s.hasTrailingSpaces, r.removeChild(a), n--, r.removeChild(
        s
      );
    }
  });
}
function rp(e, t) {
  if (t.parser === "html") return;
  let r = /\{\{(.+?)\}\}/su;
  e.walk((n) => {
    if (Ym(n)) for (let a of n.children) {
      if (a.type !== "text") continue;
      let o = a.sourceSpan.start, s = null, u = a.value.split(r);
      for (let c = 0; c < u.length; c++, o = s) {
        let d = u[c];
        if (c % 2 === 0) {
          s = o.moveBy(d.length), d.length > 0 && n.insertChildBefore(a, { type: "text", value: d, sourceSpan: new $(o, s) });
          continue;
        }
        s = o.moveBy(d.length + 4), n.insertChildBefore(a, { type: "interpolation", sourceSpan: new $(o, s), children: d.length === 0 ? [] : [{ type: "text", value: d, sourceSpan: new $(o.moveBy(2), s.moveBy(-2)) }] });
      }
      n.removeChild(a);
    }
  });
}
function np(e) {
  e.walk((t) => {
    if (!t.children) return;
    if (t.children.length === 0 || t.children.length === 1 && t.children[0].type === "text" && qe.trim(t.children[0].value).length === 0) {
      t.hasDanglingSpaces = t.children.length > 0, t.children = [];
      return;
    }
    let r = Xm(t), n = mc(t);
    if (!r) for (let a = 0; a < t.children.length; a++) {
      let o = t.children[a];
      if (o.type !== "text") continue;
      let { leadingWhitespace: s, text: u, trailingWhitespace: c } = l4(o.value), d = o.prev, p = o.next;
      u ? (o.value = u, o.sourceSpan = new $(o.sourceSpan.start.moveBy(s.length), o.sourceSpan.end.moveBy(-c.length)), s && (d && (d.hasTrailingSpaces = !0), o.hasLeadingSpaces = !0), c && (o.hasTrailingSpaces = !0, p && (p.hasLeadingSpaces = !0))) : (t.removeChild(o), a--, (s || c) && (d && (d.hasTrailingSpaces = !0), p && (p.hasLeadingSpaces = !0)));
    }
    t.isWhitespaceSensitive = r, t.isIndentationSensitive = n;
  });
}
function ap(e) {
  e.walk((t) => {
    t.isSelfClosing = !t.children || t.type === "element" && (t.tagDefinition.isVoid || t.endSourceSpan && t.startSourceSpan.start === t.endSourceSpan.start && t.startSourceSpan.end === t.endSourceSpan.end);
  });
}
function op(e, t) {
  e.walk((r) => {
    r.type === "element" && (r.hasHtmComponentClosingTag = r.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(t.originalText.slice(r.endSourceSpan.start.offset, r.endSourceSpan.end.offset)));
  });
}
function ip(e, t) {
  e.walk((r) => {
    r.cssDisplay = pg(r, t);
  });
}
function lp(e, t) {
  e.walk((r) => {
    let { children: n } = r;
    if (n) {
      if (n.length === 0) {
        r.isDanglingSpaceSensitive = Qm(r);
        return;
      }
      for (let a of n) a.isLeadingSpaceSensitive = Km(a, t), a.isTrailingSpaceSensitive = Jm(a, t);
      for (let a = 0; a < n.length; a++) {
        let o = n[a];
        o.isLeadingSpaceSensitive = (a === 0 || o.prev.isTrailingSpaceSensitive) && o.isLeadingSpaceSensitive, o.isTrailingSpaceSensitive = (a === n.length - 1 || o.next.isLeadingSpaceSensitive) && o.isTrailingSpaceSensitive;
      }
    }
  });
}
function sp(e, t, r) {
  let { node: n } = e;
  switch (n.type) {
    case "front-matter":
      return Re(n.raw);
    case "root":
      return t.__onHtmlRoot && t.__onHtmlRoot(n), [re(Li(e, t, r)), X];
    case "element":
    case "ieConditionalComment":
      return Ng(e, t, r);
    case "angularControlFlowBlock":
      return Lg(e, t, r);
    case "angularControlFlowBlockParameters":
      return Mg(e, t, r);
    case "angularControlFlowBlockParameter":
      return qe.trim(n.expression);
    case "angularLetDeclaration":
      return re(["@let ", re([n.id, " =", re(Ke([ae, r("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n.value;
    case "angularIcuExpression":
      return Hg(e, t, r);
    case "angularIcuCase":
      return Og(e, t, r);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [Kr(n), Xr(n)];
    case "interpolation":
      return [Kr(n, t), ...e.map(r, "children"), Xr(n, t)];
    case "text": {
      if (n.parent.type === "interpolation") {
        let o = /\n[^\S\n]*$/u, s = o.test(n.value), u = s ? n.value.replace(o, "") : n.value;
        return [Re(u), s ? X : ""];
      }
      let a = Um([Vt(n, t), ...Sc(n), $t(n, t)]);
      return Array.isArray(a) ? hc(a) : a;
    }
    case "docType":
      return [re([Kr(n, t), " ", Ee(!1, n.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), Xr(n, t)];
    case "comment":
      return [Vt(n, t), Re(t.originalText.slice(Ba(n), za(n))), $t(n, t)];
    case "attribute": {
      if (n.value === null) return n.rawName;
      let a = xc(n.value), o = Kg(a, '"');
      return [n.rawName, "=", o, Re(o === '"' ? Ee(!1, a, '"', "&quot;") : Ee(!1, a, "'", "&apos;")), o];
    }
    case "cdata":
    default:
      throw new Jg(n, "HTML");
  }
}
function pa(e, t = !0) {
  if (e[0] != ":") return [null, e];
  let r = e.indexOf(":", 1);
  if (r === -1) {
    if (t) throw new Error(`Unsupported format "${e}" expecting ":namespace:name"`);
    return [null, e];
  }
  return [e.slice(1, r), e.slice(r + 1)];
}
function zl(e) {
  return pa(e)[1] === "ng-container";
}
function _l(e) {
  return pa(e)[1] === "ng-content";
}
function Gn(e) {
  return e === null ? null : pa(e)[0];
}
function In(e, t) {
  return e ? `:${e}:${t}` : t;
}
function Il() {
  return xo || (xo = {}, Zn(dr.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Zn(dr.STYLE, ["*|style"]), Zn(dr.URL, [
    "*|formAction",
    "area|href",
    "area|ping",
    "audio|src",
    "a|href",
    "a|ping",
    "blockquote|cite",
    "body|background",
    "del|cite",
    "form|action",
    "img|src",
    "input|src",
    "ins|cite",
    "q|cite",
    "source|src",
    "track|src",
    "video|poster",
    "video|src"
  ]), Zn(dr.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), xo;
}
function Zn(e, t) {
  for (let r of t) xo[r.toLowerCase()] = e;
}
function up(e) {
  switch (e) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return !0;
    default:
      return !1;
  }
}
function Go(e) {
  return Ln || (ch = new N({ canSelfClose: !0 }), Ln = Object.assign(/* @__PURE__ */ Object.create(null), {
    base: new N({ isVoid: !0 }),
    meta: new N(
      { isVoid: !0 }
    ),
    area: new N({ isVoid: !0 }),
    embed: new N({ isVoid: !0 }),
    link: new N({ isVoid: !0 }),
    img: new N({ isVoid: !0 }),
    input: new N(
      { isVoid: !0 }
    ),
    param: new N({ isVoid: !0 }),
    hr: new N({ isVoid: !0 }),
    br: new N({ isVoid: !0 }),
    source: new N({ isVoid: !0 }),
    track: new N(
      { isVoid: !0 }
    ),
    wbr: new N({ isVoid: !0 }),
    p: new N({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: !0 }),
    thead: new N({ closedByChildren: ["tbody", "tfoot"] }),
    tbody: new N({ closedByChildren: ["tbody", "tfoot"], closedByParent: !0 }),
    tfoot: new N({ closedByChildren: ["tbody"], closedByParent: !0 }),
    tr: new N({ closedByChildren: ["tr"], closedByParent: !0 }),
    td: new N(
      { closedByChildren: ["td", "th"], closedByParent: !0 }
    ),
    th: new N({ closedByChildren: ["td", "th"], closedByParent: !0 }),
    col: new N({ isVoid: !0 }),
    svg: new N({ implicitNamespacePrefix: "svg" }),
    foreignObject: new N({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: !0 }),
    math: new N({ implicitNamespacePrefix: "math" }),
    li: new N({ closedByChildren: ["li"], closedByParent: !0 }),
    dt: new N({ closedByChildren: [
      "dt",
      "dd"
    ] }),
    dd: new N({ closedByChildren: ["dt", "dd"], closedByParent: !0 }),
    rb: new N({
      closedByChildren: ["rb", "rt", "rtc", "rp"],
      closedByParent: !0
    }),
    rt: new N({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
    rtc: new N({ closedByChildren: [
      "rb",
      "rtc",
      "rp"
    ], closedByParent: !0 }),
    rp: new N({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: !0 }),
    optgroup: new N({ closedByChildren: [
      "optgroup"
    ], closedByParent: !0 }),
    option: new N({ closedByChildren: ["option", "optgroup"], closedByParent: !0 }),
    pre: new N({ ignoreFirstLf: !0 }),
    listing: new N({ ignoreFirstLf: !0 }),
    style: new N({ contentType: Ve.RAW_TEXT }),
    script: new N({ contentType: Ve.RAW_TEXT }),
    title: new N(
      { contentType: { default: Ve.ESCAPABLE_RAW_TEXT, svg: Ve.PARSABLE_DATA } }
    ),
    textarea: new N({ contentType: Ve.ESCAPABLE_RAW_TEXT, ignoreFirstLf: !0 })
  }), new F4().allKnownElementNames().forEach((t) => {
    !Ln[t] && Gn(t) === null && (Ln[t] = new N({ canSelfClose: !1 }));
  })), Ln[e] ?? ch;
}
function Ru(e, t, r = null) {
  let n = [], a = e.visit ? (o) => e.visit(o, r) || o.visit(e, r) : (o) => o.visit(e, r);
  return t.forEach((o) => {
    let s = a(o);
    s && n.push(s);
  }), n;
}
function cp(e, t) {
  if (t != null && !(Array.isArray(t) && t.length == 2)) throw new Error(`Expected '${e}' to be an array, [start, end].`);
  if (t != null) {
    let r = t[0], n = t[1];
    z4.forEach((a) => {
      if (a.test(r) || a.test(n)) throw new Error(`['${r}', '${n}'] contains unusable interpolation symbol.`);
    });
  }
}
function dp(e, t, r, n = {}) {
  let a = new I4(new Nc(e, t), r, n);
  return a.tokenize(), new _4(jg(a.tokens), a.errors, a.nonNormalizedIcuExpressions);
}
function ar(e) {
  return `Unexpected character "${e === 0 ? "EOF" : String.fromCharCode(e)}"`;
}
function Rl(e) {
  return `Unknown entity "${e}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function pp(e, t) {
  return `Unable to parse entity "${t}" - ${e} character reference entities must end with ";"`;
}
function ee(e) {
  return !aa(e) || e === 0;
}
function Ll(e) {
  return aa(e) || e === 62 || e === 60 || e === 47 || e === 39 || e === 34 || e === 61 || e === 0;
}
function hp(e) {
  return (e < 97 || 122 < e) && (e < 65 || 90 < e) && (e < 48 || e > 57);
}
function fp(e) {
  return e === 59 || e === 0 || !Pg(e);
}
function mp(e) {
  return e === 59 || e === 0 || !oa(e);
}
function gp(e) {
  return e !== 125;
}
function vp(e, t) {
  return Lu(e) === Lu(t);
}
function Lu(e) {
  return e >= 97 && e <= 122 ? e - 97 + 65 : e;
}
function Tl(e) {
  return oa(e) || Uo(e) || e === 95;
}
function Ml(e) {
  return e !== 59 && ee(e);
}
function jg(e) {
  let t = [], r;
  for (let n = 0; n < e.length; n++) {
    let a = e[n];
    r && r.type === 5 && a.type === 5 || r && r.type === 16 && a.type === 16 ? (r.parts[0] += a.parts[0], r.sourceSpan.end = a.sourceSpan.end) : (r = a, t.push(r));
  }
  return t;
}
function Hl(e, t) {
  return e.length > 0 && e[e.length - 1] === t;
}
function Ol(e, t) {
  return la[t] !== void 0 ? la[t] || e : /^#x[a-f0-9]+$/i.test(t) ? String.fromCodePoint(parseInt(t.slice(2), 16)) : /^#\d+$/.test(t) ? String.fromCodePoint(parseInt(t.slice(1), 10)) : e;
}
function Tu(e, t = {}) {
  let {
    canSelfClose: r = !1,
    allowHtmComponentClosingTags: n = !1,
    isTagNameCaseSensitive: a = !1,
    getTagContentType: o,
    tokenizeAngularBlocks: s = !1,
    tokenizeAngularLetDeclaration: u = !1
  } = t;
  return R4().parse(e, "angular-html-parser", {
    tokenizeExpansionForms: s,
    interpolationConfig: void 0,
    canSelfClose: r,
    allowHtmComponentClosingTags: n,
    tokenizeBlocks: s,
    tokenizeLet: u
  }, a, o);
}
function wp(e, t) {
  let r = new SyntaxError(e + " (" + t.loc.start.line + ":" + t.loc.start.column + ")");
  return Object.assign(r, t);
}
function Vg(e) {
  let t = e.slice(0, Ur);
  if (t !== "---" && t !== "+++") return;
  let r = e.indexOf(`
`, Ur);
  if (r === -1) return;
  let n = e.slice(Ur, r).trim(), a = e.indexOf(`
${t}`, r), o = n;
  if (o || (o = t === "+++" ? "toml" : "yaml"), a === -1 && t === "---" && o === "yaml" && (a = e.indexOf(`
...`, r)), a === -1) return;
  let s = a + 1 + Ur, u = e.charAt(s + 1);
  if (!/\s?/u.test(u)) return;
  let c = e.slice(0, s);
  return { type: "front-matter", language: o, explicitLanguage: n, value: e.slice(r + 1, a), startDelimiter: t, endDelimiter: c.slice(-Ur), raw: c };
}
function bp(e) {
  let t = Vg(e);
  if (!t) return { content: e };
  let { raw: r } = t;
  return { frontMatter: t, content: Ee(!1, r, /[^\n]/gu, " ") + e.slice(r.length) };
}
function Dp(e, t) {
  let r = e.map(t);
  return r.some((n, a) => n !== e[a]) ? r : e;
}
function qg(e, t) {
  if (e.value) for (let { regex: r, parse: n } of H4) {
    let a = e.value.match(r);
    if (a) return n(e, t, a);
  }
  return null;
}
function yp(e, t, r) {
  let [, n, a, o] = r, s = 4 + n.length, u = e.sourceSpan.start.moveBy(s), c = u.moveBy(o.length), [d, p] = (() => {
    try {
      return [!0, t(o, u).children];
    } catch {
      return [!1, [{ type: "text", value: o, sourceSpan: new $(u, c) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: d, children: p, condition: Ee(!1, a.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan, startSourceSpan: new $(
    e.sourceSpan.start,
    u
  ), endSourceSpan: new $(c, e.sourceSpan.end) };
}
function Ep(e, t, r) {
  let [, n] = r;
  return { type: "ieConditionalStartComment", condition: Ee(!1, n.trim(), /\s+/gu, " "), sourceSpan: e.sourceSpan };
}
function Cp(e) {
  return { type: "ieConditionalEndComment", sourceSpan: e.sourceSpan };
}
function Wg(e) {
  if (e.type === "block") {
    if (e.name = Ee(!1, e.name.toLowerCase(), /\s+/gu, " ").trim(), e.type = "angularControlFlowBlock", !Pi(e.parameters)) {
      delete e.parameters;
      return;
    }
    for (let t of e.parameters) t.type = "angularControlFlowBlockParameter";
    e.parameters = { type: "angularControlFlowBlockParameters", children: e.parameters, sourceSpan: new $(e.parameters[0].sourceSpan.start, dn(
      !1,
      e.parameters,
      -1
    ).sourceSpan.end) };
  }
}
function Ug(e) {
  e.type === "letDeclaration" && (e.type = "angularLetDeclaration", e.id = e.name, e.init = { type: "angularLetDeclarationInitializer", sourceSpan: new $(
    e.valueSpan.start,
    e.valueSpan.end
  ), value: e.value }, delete e.name, delete e.value);
}
function Gg(e) {
  (e.type === "plural" || e.type === "select") && (e.clause = e.type, e.type = "angularIcuExpression"), e.type === "expansionCase" && (e.type = "angularIcuCase");
}
function _c(e, t, r) {
  let {
    name: n,
    canSelfClose: a = !0,
    normalizeTagName: o = !1,
    normalizeAttributeName: s = !1,
    allowHtmComponentClosingTags: u = !1,
    isTagNameCaseSensitive: c = !1,
    shouldParseAsRawText: d
  } = t, { rootNodes: p, errors: f } = Tu(e, {
    canSelfClose: a,
    allowHtmComponentClosingTags: u,
    isTagNameCaseSensitive: c,
    getTagContentType: d ? (...E) => d(...E) ? Ve.RAW_TEXT : void 0 : void 0,
    tokenizeAngularBlocks: n === "angular" ? !0 : void 0,
    tokenizeAngularLetDeclaration: n === "angular" ? !0 : void 0
  });
  if (n === "vue") {
    if (p.some((C) => C.type === "docType" && C.value === "html" || C.type === "element" && C.name.toLowerCase() === "html")) return _c(
      e,
      Pu,
      r
    );
    let E, w = /* @__PURE__ */ l(() => E ?? (E = Tu(e, { canSelfClose: a, allowHtmComponentClosingTags: u, isTagNameCaseSensitive: c })), "y"), b = /* @__PURE__ */ l(
      (C) => w().rootNodes.find(({ startSourceSpan: S }) => S && S.start.offset === C.startSourceSpan.start.offset) ?? C,
      "M"
    );
    for (let [C, S] of p.entries()) {
      let { endSourceSpan: A, startSourceSpan: x } = S;
      if (A === null) f = w().errors, p[C] = b(S);
      else if (Zg(S, r)) {
        let F = w().errors.find((B) => B.span.start.offset > x.start.offset && B.span.start.offset < A.end.offset);
        F && Mu(F), p[C] = b(S);
      }
    }
  }
  f.length > 0 && Mu(f[0]);
  let h = /* @__PURE__ */ l((E) => {
    let w = E.name.startsWith(":") ? E.name.slice(1).split(":")[0] : null, b = E.nameSpan.toString(), C = w !== null && b.startsWith(`${w}:`), S = C ? b.slice(w.length + 1) : b;
    E.name = S, E.namespace = w, E.hasExplicitNamespace = C;
  }, "d"), m = /* @__PURE__ */ l((E) => {
    switch (E.type) {
      case "element":
        h(E);
        for (let w of E.attrs) h(w), w.valueSpan ? (w.value = w.valueSpan.toString(), /["']/u.test(w.value[0]) && (w.value = w.value.slice(
          1,
          -1
        ))) : w.value = null;
        break;
      case "comment":
        E.value = E.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        E.value = E.sourceSpan.toString();
        break;
    }
  }, "C"), v = /* @__PURE__ */ l((E, w) => {
    let b = E.toLowerCase();
    return w(b) ? b : E;
  }, "A"), g = /* @__PURE__ */ l((E) => {
    if (E.type === "element" && (o && (!E.namespace || E.namespace === E.tagDefinition.implicitNamespacePrefix || pn(E)) && (E.name = v(
      E.name,
      (w) => O4.has(w)
    )), s)) for (let w of E.attrs) w.namespace || (w.name = v(w.name, (b) => So.has(E.name) && (So.get("*").has(b) || So.get(
      E.name
    ).has(b))));
  }, "D"), D = /* @__PURE__ */ l((E) => {
    E.sourceSpan && E.endSourceSpan && (E.sourceSpan = new $(E.sourceSpan.start, E.endSourceSpan.end));
  }, "R"), y = /* @__PURE__ */ l((E) => {
    if (E.type === "element") {
      let w = Go(c ? E.name : E.name.toLowerCase());
      !E.namespace || E.namespace === w.implicitNamespacePrefix || pn(E) ? E.tagDefinition = w : E.tagDefinition = Go("");
    }
  }, "F");
  return Ru(new class extends B4 {
    visitExpansionCase(E, w) {
      n === "angular" && this.visitChildren(w, (b) => {
        b(E.expression);
      });
    }
    visit(E) {
      m(E), y(E), g(E), D(E);
    }
  }(), p), p;
}
function Zg(e, t) {
  var r;
  if (e.type !== "element" || e.name !== "template") return !1;
  let n = (r = e.attrs.find((a) => a.name === "lang")) == null ? void 0 : r.value;
  return !n || La(t, { language: n }) === "html";
}
function Mu(e) {
  let { msg: t, span: { start: r, end: n } } = e;
  throw L4(t, { loc: { start: { line: r.line + 1, column: r.col + 1 }, end: { line: n.line + 1, column: n.col + 1 } }, cause: e });
}
function Ic(e, t, r = {}, n = !0) {
  let { frontMatter: a, content: o } = n ? T4(e) : { frontMatter: null, content: e }, s = new Nc(e, r.filepath), u = new Qo(s, 0, 0, 0), c = u.moveBy(e.length), d = { type: "root", sourceSpan: new $(u, c), children: _c(o, t, r) };
  if (a) {
    let h = new Qo(s, 0, 0, 0), m = h.moveBy(a.raw.length);
    a.sourceSpan = new $(h, m), d.children.unshift(a);
  }
  let p = new M4(d), f = /* @__PURE__ */ l((h, m) => {
    let { offset: v } = m, g = Ee(!1, e.slice(0, v), /[^\n\r]/gu, " "), D = Ic(g + h, t, r, !1);
    D.sourceSpan = new $(m, dn(!1, D.children, -1).sourceSpan.end);
    let y = D.children[0];
    return y.length === v ? D.children.shift() : (y.sourceSpan = new $(y.sourceSpan.start.moveBy(v), y.sourceSpan.end), y.value = y.value.slice(
      v
    )), D;
  }, "f");
  return p.walk((h) => {
    if (h.type === "comment") {
      let m = qg(h, f);
      m && h.parent.replaceChild(h, m);
    }
    Wg(h), Ug(h), Gg(h);
  }), p;
}
function Rn(e) {
  return { parse: /* @__PURE__ */ l((t, r) => Ic(t, e, r), "parse"), hasPragma: Rg, astFormat: "html", locStart: Ba, locEnd: za };
}
var xp, Nl, Pl, $l, Dt, Sp, Ap, jl, kp, Ee, Ti, Mi, Zo, ha, fa, Yo, cn, ma, ga, va, Xo, Ko, Tt, Jo, ia, Rc, Hi, Yg, Vl, Fp, Lc, ql, qt, Oi, Qr, Bp, zp, ae, ue, X, Xg, _p, dn, Yn, Hu, Kg, Pe, Wl, Ip, Rp, Lp, Tp, qe, Ul, Mp, Jg, Ra, Hp, Qg, Op, e4, t4, r4, La, n4, a4, o4, i4, pn, Np, Tc, l4, s4, Mc, u4, c4, d4, p4, h4, f4, m4, g4, v4, Ou, w4, b4, Nu, D4, y4, Co, Ni, E4, C4, Gl, Hc, Pi, Oc, x4, Pp, Wr, $p, jp, Vp, qp, Wp, Up, S4, A4, no, Qo, Zl, Nc, Yl, $, ao, Xl, Kl, k4, Gp, Zp, Yp, Xp, Jl, Ql, Kp, Jp, es, Qp, eh, th, ts, rs, dr, rh, Ve, xo, ns, nh, ah, oh, ih, lh, sh, as, uh, os, F4, is, N, ch, Ln, ls, or, ss, dh, us, ph, cs, hh, ds, fh, ps, mh, hs, yt, fs, gh, ms, vh, gs, ir, vs, ws, bs, Ds, ys, B4, la, wh, z4, oo, bh, Es, Cs, io, xs, _4, Dh, lo, Ss, so, As, I4, Tn, ks, Mn, yh, Fs, uo, co, fe, Bs, Eh, zs, Ch, po, xh, _s, Sh, ho, R4, L4, Ur, T4, Hn, Is, lr, M4, H4, So, O4, Pu, Ah, kh, Fh, Bh, zh, N4, _8 = z(() => {
  xp = Object.defineProperty, Nl = /* @__PURE__ */ l((e) => {
    throw TypeError(e);
  }, "Xr"), Pl = /* @__PURE__ */ l((e, t) => {
    for (var r in t) xp(e, r, { get: t[r], enumerable: !0 });
  }, "Jr"), $l = /* @__PURE__ */ l((e, t, r) => t.has(e) || Nl("Cannot " + r), "Zr"), Dt = /* @__PURE__ */ l((e, t, r) => ($l(e, t, "read from private field"), r ? r.call(e) : t.get(e)), "Q"), Sp = /* @__PURE__ */ l((e, t, r) => t.has(e) ? Nl("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), "en"), Ap = /* @__PURE__ */ l((e, t, r, n) => ($l(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), "tn"), jl = {}, Pl(jl, { languages: /* @__PURE__ */ l(() => Xp, "languages"), options: /* @__PURE__ */ l(() => Jp, "options"), parsers: /* @__PURE__ */ l(
    () => es,
    "parsers"
  ), printers: /* @__PURE__ */ l(() => zh, "printers") }), kp = /* @__PURE__ */ l((e, t, r, n) => {
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  }, "si"), Ee = kp, Ti = "string", Mi = "array", Zo = "cursor", ha = "indent", fa = "align", Yo = "trim", cn = "group", ma = "fill", ga = "if-break", va = "indent-if-break", Xo = "line-suffix", Ko = "line-suffix-boundary", Tt = "line", Jo = "label", ia = "break-parent", Rc = /* @__PURE__ */ new Set(
    [Zo, ha, fa, Yo, cn, ma, ga, va, Xo, Ko, Tt, Jo, ia]
  ), l(Bd, "ii"), Hi = Bd, Yg = /* @__PURE__ */ l((e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), "ai"), l(zd, "oi"), Fp = (Vl = class extends Error {
    name = "InvalidDocError";
    constructor(e) {
      super(zd(e)), this.doc = e;
    }
  }, l(Vl, "lr"), Vl), Lc = Fp, ql = /* @__PURE__ */ l(() => {
  }, "rn"), qt = ql, Oi = ql, l(Ke, "k"), l(pc, "nn"), l(re, "_"), l(jm, "sn"), l(Vm, "an"), l(hc, "At"), l(da, "ge"), l(qm, "on"), Qr = { type: ia }, Bp = { type: Tt, hard: !0 }, zp = { type: Tt, hard: !0, literal: !0 }, ae = { type: Tt }, ue = { type: Tt, soft: !0 }, X = [Bp, Qr], Xg = [zp, Qr], l(Cr, "q"), _p = /* @__PURE__ */ l((e, t, r) => {
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  }, "ci"), dn = _p, l(Fi, "Dt"), l(Wm, "pi"), l(Um, "ln"), l(Re, "B"), Yn = "'", Hu = '"', l(_d, "hi"), Kg = _d, l(Id, "cr"), Ip = (Wl = class {
    constructor(e) {
      Sp(this, Pe), Ap(this, Pe, new Set(e));
    }
    getLeadingWhitespaceCount(e) {
      let t = Dt(this, Pe), r = 0;
      for (let n = 0; n < e.length && t.has(e.charAt(n)); n++) r++;
      return r;
    }
    getTrailingWhitespaceCount(e) {
      let t = Dt(this, Pe), r = 0;
      for (let n = e.length - 1; n >= 0 && t.has(e.charAt(n)); n--) r++;
      return r;
    }
    getLeadingWhitespace(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(0, t);
    }
    getTrailingWhitespace(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(e.length - t);
    }
    hasLeadingWhitespace(e) {
      return Dt(this, Pe).has(e.charAt(0));
    }
    hasTrailingWhitespace(e) {
      return Dt(this, Pe).has(dn(!1, e, -1));
    }
    trimStart(e) {
      let t = this.getLeadingWhitespaceCount(e);
      return e.slice(t);
    }
    trimEnd(e) {
      let t = this.getTrailingWhitespaceCount(e);
      return e.slice(0, e.length - t);
    }
    trim(e) {
      return this.trimEnd(this.trimStart(e));
    }
    split(e, t = !1) {
      let r = `[${Id([...Dt(this, Pe)].join(""))}]+`, n = new RegExp(t ? `(${r})` : r, "u");
      return e.split(n);
    }
    hasWhitespaceCharacter(e) {
      let t = Dt(this, Pe);
      return Array.prototype.some.call(e, (r) => t.has(r));
    }
    hasNonWhitespaceCharacter(e) {
      let t = Dt(this, Pe);
      return Array.prototype.some.call(e, (r) => !t.has(r));
    }
    isWhitespaceOnly(e) {
      let t = Dt(this, Pe);
      return Array.prototype.every.call(e, (r) => t.has(r));
    }
  }, l(Wl, "pr"), Wl), Pe = /* @__PURE__ */ new WeakMap(), Rp = Ip, Lp = ["	", `
`, "\f", "\r", " "], Tp = new Rp(Lp), qe = Tp, Mp = (Ul = class extends Error {
    name = "UnexpectedNodeError";
    constructor(e, t, r = "type") {
      super(`Unexpected ${t} node ${r}: ${JSON.stringify(e[r])}.`), this.node = e;
    }
  }, l(Ul, "hr"), Ul), Jg = Mp, l(Rd, "di"), Ra = Rd, Hp = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]), Qg = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]), l(Fl, "fn"), Fl.ignoredProperties = Hp, Op = Fl, l(Ld, "Si"), e4 = Ld, l(Aa, "Ce"), l(xr, "j"), l(Te, "T"), l(Td, "_i"), t4 = Td, r4 = /* @__PURE__ */ l((e) => String(e).split(/[/\\]/u).pop(), "Ei"), l(zu, "Sn"), l(Gm, "Ai"), l(Md, "Di"), La = Md, n4 = "inline", a4 = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", marquee: "inline-block", source: "block", track: "block", details: "block", summary: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, o4 = "normal", i4 = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, l(Hd, "vi"), pn = Hd, Np = /* @__PURE__ */ l((e) => Ee(!1, e, /^[\t\f\r ]*\n/gu, ""), "yi"), Tc = /* @__PURE__ */ l((e) => Np(qe.trimEnd(e)), "mr"), l4 = /* @__PURE__ */ l((e) => {
    let t = e, r = qe.getLeadingWhitespace(t);
    r && (t = t.slice(r.length));
    let n = qe.getTrailingWhitespace(t);
    return n && (t = t.slice(0, -n.length)), { leadingWhitespace: r, trailingWhitespace: n, text: t };
  }, "vn"), l(fc, "yt"), l(ka, "Ee"), l(Zm, "wi"), l(Fe, "$"), l(dt, "U"), l(Ym, "yn"), l(Xm, "wn"), l(mc, "fr"), l(Km, "bn"), l(Jm, "Tn"), l(Qm, "xn"), l(Wn, "Qe"), l(eg, "kn"), l(gc, "dr"), l(Eo, "wt"), l(tg, "bi"), l(vc, "Bn"), l(wc, "Ln"), l(bc, "Fn"), l(Dc, "Nn"), l(Bi, "bt"), l(rg, "Ti"), l(yc, "Pn"), l(ng, "xi"), l(ag, "ki"), l(og, "Bi"), l(_u, "gr"), l(wn, "Xe"), l(ig, "Li"), l(lg, "Fi"), l(sg, "Ni"), l(ug, "Pi"), l(cg, "Ii"), l(vr, "_e"), l(dg, "Ri"), l(pg, "In"), l(Ec, "Rn"), l(hg, "$i"), l(Cc, "Cr"), l(xc, "Sr"), l(Bt, "P"), s4 = /* @__PURE__ */ new Set(["template", "style", "script"]), l(Fa, "Je"), l(Sr, "Ae"), l(zi, "Tt"), l(fg, "$n"), l(mg, "On"), l(Sc, "xt"), l(Ac, "kt"), Mc = /\{\{(.+?)\}\}/su, l(gg, "Mn"), l(eo, "Er"), u4 = eo({ parser: "__ng_action" }), c4 = eo({ parser: "__ng_binding" }), d4 = eo({ parser: "__ng_directive" }), l(Od, "Vi"), p4 = Od, l(Nd, "Ui"), h4 = Nd, l(Iu, "Vn"), f4 = /^[ \t\n\r\u000c]+/, m4 = /^[, \t\n\r\u000c]+/, g4 = /^[^ \t\n\r\u000c]+/, v4 = /[,]+$/, Ou = /^\d+$/, w4 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, l(Pd, "Ki"), b4 = Pd, l($d, "Qi"), Nu = { width: "w", height: "h", density: "x" }, D4 = Object.keys(Nu), l(vg, "Ji"), y4 = $d, l(wg, "Yn"), Co = /* @__PURE__ */ new WeakMap(), l(jd, "Zi"), Ni = jd, l(bg, "jn"), l(Dg, "Kn"), l(yg, "Qn"), l(Eg, "Xn"), l(Cg, "ea"), l(Vd, "ta"), l(xg, "ra"), l(Sg, "na"), l(kc, "Jn"), E4 = Vd, l(qd, "sa"), l(Ag, "ia"), C4 = qd, Gl = new Proxy(() => {
  }, { get: /* @__PURE__ */ l(() => Gl, "get") }), Hc = Gl, l(Wd, "aa"), Pi = Wd, l(Ba, "se"), l(za, "ie"), l(qo, "Ze"), l(kg, "oa"), l(Xr, "De"), l(Fg, "ua"), l($t, "W"), l(_i, "Bt"), l(bn, "ve"), l(Fc, "rs"), l(jt, "K"), l(Dn, "ye"), l(un, "we"), l(_a, "et"), l(Bg, "la"), l(Ia, "tt"), l(zg, "ca"), l(_g, "pa"), l(Wo, "rt"), l(Kr, "be"), l(Vt, "z"), l(Ii, "Lt"), l(Ri, "Ft"), l(Ud, "ha"), Oc = Ud, x4 = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]), l(Gd, "fa"), Pp = Gd, Wr = null, l(Jr, "st"), $p = 10;
  for (let e = 0; e <= $p; e++) Jr();
  l(Ig, "vr"), l(Zd, "ga"), jp = Zd, Vp = {
    "front-matter": [],
    root: ["children"],
    element: ["attrs", "children"],
    ieConditionalComment: ["children"],
    ieConditionalStartComment: [],
    ieConditionalEndComment: [],
    interpolation: ["children"],
    text: ["children"],
    docType: [],
    comment: [],
    attribute: [],
    cdata: [],
    angularControlFlowBlock: [
      "children",
      "parameters"
    ],
    angularControlFlowBlockParameters: ["children"],
    angularControlFlowBlockParameter: [],
    angularLetDeclaration: [
      "init"
    ],
    angularLetDeclarationInitializer: [],
    angularIcuExpression: ["cases"],
    angularIcuCase: ["expression"]
  }, qp = Vp, Wp = jp(qp), Up = Wp, l(Rg, "os"), l(Yd, "us"), S4 = /* @__PURE__ */ new Map([
    ["if", /* @__PURE__ */ new Set(["else if", "else"])],
    ["else if", /* @__PURE__ */ new Set(["else if", "else"])],
    ["for", /* @__PURE__ */ new Set(["empty"])],
    ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])],
    ["placeholder", /* @__PURE__ */ new Set(
      ["placeholder", "error", "loading"]
    )],
    ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])],
    ["loading", /* @__PURE__ */ new Set(
      ["placeholder", "error", "loading"]
    )]
  ]), l(Bc, "cs"), l(qr, "it"), l(Un, "Pt"), l(Li, "He"), l(Lg, "ps"), l(zc, "hs"), l(Tg, "_a"), l(Mg, "ms"), l(Hg, "fs"), l(Og, "ds"), l(Ng, "gs"), l(aa, "at"), l(Uo, "It"), l(oa, "ot"), l(Pg, "Cs"), l(to, "Rt"), l(Bl, "yr"), l(ro, "$t"), A4 = /-+([a-z0-9])/g, l(Xd, "_s"), Qo = (no = class {
    constructor(e, t, r, n) {
      this.file = e, this.offset = t, this.line = r, this.col = n;
    }
    toString() {
      return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
    }
    moveBy(e) {
      let t = this.file.content, r = t.length, n = this.offset, a = this.line, o = this.col;
      for (; n > 0 && e < 0; ) if (n--, e++, t.charCodeAt(n) == 10) {
        a--;
        let s = t.substring(0, n - 1).lastIndexOf(`
`);
        o = s > 0 ? n - s : n;
      } else o--;
      for (; n < r && e > 0; ) {
        let s = t.charCodeAt(n);
        n++, e--, s == 10 ? (a++, o = 0) : o++;
      }
      return new no(this.file, n, a, o);
    }
    getContext(e, t) {
      let r = this.file.content, n = this.offset;
      if (n != null) {
        n > r.length - 1 && (n = r.length - 1);
        let a = n, o = 0, s = 0;
        for (; o < e && n > 0 && (n--, o++, !(r[n] == `
` && ++s == t)); ) ;
        for (o = 0, s = 0; o < e && a < r.length - 1 && (a++, o++, !(r[a] == `
` && ++s == t)); ) ;
        return { before: r.substring(n, this.offset), after: r.substring(this.offset, a + 1) };
      }
      return null;
    }
  }, l(no, "t"), no), Nc = (Zl = class {
    constructor(e, t) {
      this.content = e, this.url = t;
    }
  }, l(Zl, "Te"), Zl), $ = (Yl = class {
    constructor(e, t, r = e, n = null) {
      this.start = e, this.end = t, this.fullStart = r, this.details = n;
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  }, l(Yl, "h"), Yl), function(e) {
    e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR";
  }(ao || (ao = {})), Kl = (Xl = class {
    constructor(e, t, r = ao.ERROR) {
      this.span = e, this.msg = t, this.level = r;
    }
    contextualMessage() {
      let e = this.span.start.getContext(100, 3);
      return e ? `${this.msg} ("${e.before}[${ao[this.level]} ->]${e.after}")` : this.msg;
    }
    toString() {
      let e = this.span.details ? `, ${this.span.details}` : "";
      return `${this.contextualMessage()}: ${this.span.start}${e}`;
    }
  }, l(Xl, "Ue"), Xl), k4 = [Jd, Qd, ep, rp, np, ip, ap, op, lp, tp], l(Kd, "Da"), l(Jd, "va"), l(Qd, "ya"), l($g, "wa"), l(ep, "ba"), l(tp, "Ta"), l(rp, "xa"), l(np, "ka"), l(ap, "Ba"), l(op, "La"), l(ip, "Fa"), l(lp, "Na"), Gp = Kd, l(sp, "Pa"), Zp = { preprocess: Gp, print: sp, insertPragma: Yd, massageAstNode: Op, embed: Pp, getVisitorKeys: Up }, Yp = Zp, Xp = [
    {
      linguistLanguageId: 146,
      name: "Angular",
      type: "markup",
      tmScope: "text.html.basic",
      aceMode: "html",
      codemirrorMode: "htmlmixed",
      codemirrorMimeType: "text/html",
      color: "#e34c26",
      aliases: ["xhtml"],
      extensions: [".component.html"],
      parsers: ["angular"],
      vscodeLanguageIds: ["html"],
      filenames: []
    },
    { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: [
      "html"
    ], vscodeLanguageIds: ["html"] },
    { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: [
      "lwc"
    ], vscodeLanguageIds: ["html"], filenames: [] },
    { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [
      ".vue"
    ], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }
  ], Jl = { bracketSpacing: { category: "Common", type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { category: "Common", type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: {
    category: "Common",
    type: "choice",
    default: "preserve",
    description: "How to wrap prose.",
    choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }]
  }, bracketSameLine: { category: "Common", type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } }, Ql = "HTML", Kp = { bracketSameLine: Jl.bracketSameLine, htmlWhitespaceSensitivity: {
    category: Ql,
    type: "choice",
    default: "css",
    description: "How to handle whitespaces in HTML.",
    choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }]
  }, singleAttributePerLine: Jl.singleAttributePerLine, vueIndentScriptAndStyle: { category: Ql, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } }, Jp = Kp, es = {}, Pl(es, {
    angular: /* @__PURE__ */ l(() => kh, "angular"),
    html: /* @__PURE__ */ l(() => Ah, "html"),
    lwc: /* @__PURE__ */ l(() => Bh, "lwc"),
    vue: /* @__PURE__ */ l(() => Fh, "vue")
  }), function(e) {
    e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom";
  }(Qp || (Qp = {})), function(e) {
    e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default";
  }(eh || (eh = {})), function(e) {
    e[e.None = 0] = "None", e[e.SignalBased = 1] = "SignalBased", e[e.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
  }(th || (th = {})), ts = { name: "custom-elements" }, rs = { name: "no-errors-schema" }, function(e) {
    e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL";
  }(dr || (dr = {})), function(e) {
    e[e.Error = 0] = "Error", e[e.Warning = 1] = "Warning", e[e.Ignore = 2] = "Ignore";
  }(rh || (rh = {})), function(e) {
    e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA";
  }(Ve || (Ve = {})), l(pa, "ut"), l(zl, "xr"), l(_l, "kr"), l(Gn, "We"), l(In, "ze"), l(Il, "Br"), l(Zn, "Mt"), nh = (ns = class {
  }, l(ns, "Ht"), ns), ah = "boolean", oh = "number", ih = "string", lh = "object", sh = [
    "[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored",
    "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy",
    "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume",
    ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":svg:graphics^:svg:|",
    ":svg:animation^:svg:|*begin,*end,*repeat",
    ":svg:geometry^:svg:|",
    ":svg:componentTransferFunction^:svg:|",
    ":svg:gradient^:svg:|",
    ":svg:textContent^:svg:graphics|",
    ":svg:textPositioning^:svg:textContent|",
    "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username",
    "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username",
    "audio^media|",
    "br^[HTMLElement]|clear",
    "base^[HTMLElement]|href,target",
    "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink",
    "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value",
    "canvas^[HTMLElement]|#height,#width",
    "content^[HTMLElement]|select",
    "dl^[HTMLElement]|!compact",
    "data^[HTMLElement]|value",
    "datalist^[HTMLElement]|",
    "details^[HTMLElement]|!open",
    "dialog^[HTMLElement]|!open,returnValue",
    "dir^[HTMLElement]|!compact",
    "div^[HTMLElement]|align",
    "embed^[HTMLElement]|align,height,name,src,type,width",
    "fieldset^[HTMLElement]|!disabled,name",
    "font^[HTMLElement]|color,face,size",
    "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target",
    "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src",
    "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows",
    "hr^[HTMLElement]|align,color,!noShade,size,width",
    "head^[HTMLElement]|",
    "h1,h2,h3,h4,h5,h6^[HTMLElement]|align",
    "html^[HTMLElement]|version",
    "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width",
    "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width",
    "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width",
    "li^[HTMLElement]|type,#value",
    "label^[HTMLElement]|htmlFor",
    "legend^[HTMLElement]|align",
    "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type",
    "map^[HTMLElement]|name",
    "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width",
    "menu^[HTMLElement]|!compact",
    "meta^[HTMLElement]|content,httpEquiv,media,name,scheme",
    "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value",
    "ins,del^[HTMLElement]|cite,dateTime",
    "ol^[HTMLElement]|!compact,!reversed,#start,type",
    "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width",
    "optgroup^[HTMLElement]|!disabled,label",
    "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value",
    "output^[HTMLElement]|defaultValue,%htmlFor,name,value",
    "p^[HTMLElement]|align",
    "param^[HTMLElement]|name,type,value,valueType",
    "picture^[HTMLElement]|",
    "pre^[HTMLElement]|#width",
    "progress^[HTMLElement]|#max,#value",
    "q,blockquote,cite^[HTMLElement]|",
    "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type",
    "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value",
    "slot^[HTMLElement]|name",
    "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width",
    "span^[HTMLElement]|",
    "style^[HTMLElement]|!disabled,media,type",
    "caption^[HTMLElement]|align",
    "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width",
    "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width",
    "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width",
    "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign",
    "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign",
    "template^[HTMLElement]|",
    "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap",
    "time^[HTMLElement]|dateTime",
    "title^[HTMLElement]|text",
    "track^[HTMLElement]|!default,kind,label,src,srclang",
    "ul^[HTMLElement]|!compact,type",
    "unknown^[HTMLElement]|",
    "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width",
    ":svg:a^:svg:graphics|",
    ":svg:animate^:svg:animation|",
    ":svg:animateMotion^:svg:animation|",
    ":svg:animateTransform^:svg:animation|",
    ":svg:circle^:svg:geometry|",
    ":svg:clipPath^:svg:graphics|",
    ":svg:defs^:svg:graphics|",
    ":svg:desc^:svg:|",
    ":svg:discard^:svg:|",
    ":svg:ellipse^:svg:geometry|",
    ":svg:feBlend^:svg:|",
    ":svg:feColorMatrix^:svg:|",
    ":svg:feComponentTransfer^:svg:|",
    ":svg:feComposite^:svg:|",
    ":svg:feConvolveMatrix^:svg:|",
    ":svg:feDiffuseLighting^:svg:|",
    ":svg:feDisplacementMap^:svg:|",
    ":svg:feDistantLight^:svg:|",
    ":svg:feDropShadow^:svg:|",
    ":svg:feFlood^:svg:|",
    ":svg:feFuncA^:svg:componentTransferFunction|",
    ":svg:feFuncB^:svg:componentTransferFunction|",
    ":svg:feFuncG^:svg:componentTransferFunction|",
    ":svg:feFuncR^:svg:componentTransferFunction|",
    ":svg:feGaussianBlur^:svg:|",
    ":svg:feImage^:svg:|",
    ":svg:feMerge^:svg:|",
    ":svg:feMergeNode^:svg:|",
    ":svg:feMorphology^:svg:|",
    ":svg:feOffset^:svg:|",
    ":svg:fePointLight^:svg:|",
    ":svg:feSpecularLighting^:svg:|",
    ":svg:feSpotLight^:svg:|",
    ":svg:feTile^:svg:|",
    ":svg:feTurbulence^:svg:|",
    ":svg:filter^:svg:|",
    ":svg:foreignObject^:svg:graphics|",
    ":svg:g^:svg:graphics|",
    ":svg:image^:svg:graphics|decoding",
    ":svg:line^:svg:geometry|",
    ":svg:linearGradient^:svg:gradient|",
    ":svg:mpath^:svg:|",
    ":svg:marker^:svg:|",
    ":svg:mask^:svg:|",
    ":svg:metadata^:svg:|",
    ":svg:path^:svg:geometry|",
    ":svg:pattern^:svg:|",
    ":svg:polygon^:svg:geometry|",
    ":svg:polyline^:svg:geometry|",
    ":svg:radialGradient^:svg:gradient|",
    ":svg:rect^:svg:geometry|",
    ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan",
    ":svg:script^:svg:|type",
    ":svg:set^:svg:animation|",
    ":svg:stop^:svg:|",
    ":svg:style^:svg:|!disabled,media,title,type",
    ":svg:switch^:svg:graphics|",
    ":svg:symbol^:svg:|",
    ":svg:tspan^:svg:textPositioning|",
    ":svg:text^:svg:textPositioning|",
    ":svg:textPath^:svg:textContent|",
    ":svg:title^:svg:|",
    ":svg:use^:svg:graphics|",
    ":svg:view^:svg:|#zoomAndPan",
    "data^[HTMLElement]|value",
    "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name",
    "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default",
    "summary^[HTMLElement]|",
    "time^[HTMLElement]|dateTime",
    ":svg:cursor^:svg:|",
    ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex",
    ":math:math^:math:|",
    ":math:maction^:math:|",
    ":math:menclose^:math:|",
    ":math:merror^:math:|",
    ":math:mfenced^:math:|",
    ":math:mfrac^:math:|",
    ":math:mi^:math:|",
    ":math:mmultiscripts^:math:|",
    ":math:mn^:math:|",
    ":math:mo^:math:|",
    ":math:mover^:math:|",
    ":math:mpadded^:math:|",
    ":math:mphantom^:math:|",
    ":math:mroot^:math:|",
    ":math:mrow^:math:|",
    ":math:ms^:math:|",
    ":math:mspace^:math:|",
    ":math:msqrt^:math:|",
    ":math:mstyle^:math:|",
    ":math:msub^:math:|",
    ":math:msubsup^:math:|",
    ":math:msup^:math:|",
    ":math:mtable^:math:|",
    ":math:mtd^:math:|",
    ":math:mtext^:math:|",
    ":math:mtr^:math:|",
    ":math:munder^:math:|",
    ":math:munderover^:math:|",
    ":math:semantics^:math:|"
  ], as = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" })), uh = Array.from(as).reduce((e, [t, r]) => (e.set(t, r), e), /* @__PURE__ */ new Map()), F4 = (os = class extends nh {
    constructor() {
      super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), sh.forEach((e) => {
        let t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), [n, a] = e.split("|"), o = a.split(","), [s, u] = n.split("^");
        s.split(",").forEach((d) => {
          this._schema.set(d.toLowerCase(), t), this._eventSchema.set(d.toLowerCase(), r);
        });
        let c = u && this._schema.get(u.toLowerCase());
        if (c) {
          for (let [d, p] of c) t.set(d, p);
          for (let d of this._eventSchema.get(u.toLowerCase())) r.add(d);
        }
        o.forEach((d) => {
          if (d.length > 0) switch (d[0]) {
            case "*":
              r.add(d.substring(1));
              break;
            case "!":
              t.set(d.substring(1), ah);
              break;
            case "#":
              t.set(d.substring(1), oh);
              break;
            case "%":
              t.set(d.substring(1), lh);
              break;
            default:
              t.set(d, ih);
          }
        });
      });
    }
    hasProperty(e, t, r) {
      if (r.some((n) => n.name === rs.name)) return !0;
      if (e.indexOf("-") > -1) {
        if (zl(e) || _l(e)) return !1;
        if (r.some((n) => n.name === ts.name)) return !0;
      }
      return (this._schema.get(e.toLowerCase()) || this._schema.get("unknown")).has(t);
    }
    hasElement(e, t) {
      return t.some((r) => r.name === rs.name) || e.indexOf("-") > -1 && (zl(e) || _l(e) || t.some((r) => r.name === ts.name)) ? !0 : this._schema.has(e.toLowerCase());
    }
    securityContext(e, t, r) {
      r && (t = this.getMappedPropName(t)), e = e.toLowerCase(), t = t.toLowerCase();
      let n = Il()[e + "|" + t];
      return n || (n = Il()["*|" + t], n || dr.NONE);
    }
    getMappedPropName(e) {
      return as.get(e) ?? e;
    }
    getDefaultComponentElementName() {
      return "ng-component";
    }
    validateProperty(e) {
      return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event property '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...
If '${e}' is a directive input, make sure the directive is imported by the current module.` } : { error: !1 };
    }
    validateAttribute(e) {
      return e.toLowerCase().startsWith("on") ? { error: !0, msg: `Binding to event attribute '${e}' is disallowed for security reasons, please use (${e.slice(2)})=...` } : { error: !1 };
    }
    allKnownElementNames() {
      return Array.from(this._schema.keys());
    }
    allKnownAttributesOfElement(e) {
      let t = this._schema.get(e.toLowerCase()) || this._schema.get("unknown");
      return Array.from(t.keys()).map((r) => uh.get(r) ?? r);
    }
    allKnownEventsOfElement(e) {
      return Array.from(this._eventSchema.get(e.toLowerCase()) ?? []);
    }
    normalizeAnimationStyleProperty(e) {
      return Xd(e);
    }
    normalizeAnimationStyleValue(e, t, r) {
      let n = "", a = r.toString().trim(), o = null;
      if (up(e) && r !== 0 && r !== "0") if (typeof r == "number") n = "px";
      else {
        let s = r.match(/^[+-]?[\d\.]+([a-z]*)$/);
        s && s[1].length == 0 && (o = `Please provide a CSS unit value for ${t}:${r}`);
      }
      return { error: o, value: a + n };
    }
  }, l(os, "Vt"), os), l(up, "Ua"), N = (is = class {
    constructor({
      closedByChildren: e,
      implicitNamespacePrefix: t,
      contentType: r = Ve.PARSABLE_DATA,
      closedByParent: n = !1,
      isVoid: a = !1,
      ignoreFirstLf: o = !1,
      preventNamespaceInheritance: s = !1,
      canSelfClose: u = !1
    } = {}) {
      this.closedByChildren = {}, this.closedByParent = !1, e && e.length > 0 && e.forEach((c) => this.closedByChildren[c] = !0), this.isVoid = a, this.closedByParent = n || a, this.implicitNamespacePrefix = t || null, this.contentType = r, this.ignoreFirstLf = o, this.preventNamespaceInheritance = s, this.canSelfClose = u ?? a;
    }
    isClosedByChild(e) {
      return this.isVoid || e.toLowerCase() in this.closedByChildren;
    }
    getContentType(e) {
      return typeof this.contentType == "object" ? (e === void 0 ? void 0 : this.contentType[e]) ?? this.contentType.default : this.contentType;
    }
  }, l(is, "m"), is), l(Go, "Ge"), or = (ls = class {
    constructor(e, t) {
      this.sourceSpan = e, this.i18n = t;
    }
  }, l(ls, "oe"), ls), dh = (ss = class extends or {
    constructor(e, t, r, n) {
      super(t, n), this.value = e, this.tokens = r, this.type = "text";
    }
    visit(e, t) {
      return e.visitText(this, t);
    }
  }, l(ss, "Ut"), ss), ph = (us = class extends or {
    constructor(e, t, r, n) {
      super(t, n), this.value = e, this.tokens = r, this.type = "cdata";
    }
    visit(e, t) {
      return e.visitCdata(this, t);
    }
  }, l(us, "Wt"), us), hh = (cs = class extends or {
    constructor(e, t, r, n, a, o) {
      super(n, o), this.switchValue = e, this.type = t, this.cases = r, this.switchValueSourceSpan = a;
    }
    visit(e, t) {
      return e.visitExpansion(this, t);
    }
  }, l(cs, "zt"), cs), fh = (ds = class {
    constructor(e, t, r, n, a) {
      this.value = e, this.expression = t, this.sourceSpan = r, this.valueSourceSpan = n, this.expSourceSpan = a, this.type = "expansionCase";
    }
    visit(e, t) {
      return e.visitExpansionCase(this, t);
    }
  }, l(ds, "Gt"), ds), mh = (ps = class extends or {
    constructor(e, t, r, n, a, o, s) {
      super(r, s), this.name = e, this.value = t, this.keySpan = n, this.valueSpan = a, this.valueTokens = o, this.type = "attribute";
    }
    visit(e, t) {
      return e.visitAttribute(this, t);
    }
    get nameSpan() {
      return this.keySpan;
    }
  }, l(ps, "Yt"), ps), yt = (hs = class extends or {
    constructor(e, t, r, n, a, o = null, s = null, u) {
      super(n, u), this.name = e, this.attrs = t, this.children = r, this.startSourceSpan = a, this.endSourceSpan = o, this.nameSpan = s, this.type = "element";
    }
    visit(e, t) {
      return e.visitElement(this, t);
    }
  }, l(hs, "G"), hs), gh = (fs = class {
    constructor(e, t) {
      this.value = e, this.sourceSpan = t, this.type = "comment";
    }
    visit(e, t) {
      return e.visitComment(this, t);
    }
  }, l(fs, "jt"), fs), vh = (ms = class {
    constructor(e, t) {
      this.value = e, this.sourceSpan = t, this.type = "docType";
    }
    visit(e, t) {
      return e.visitDocType(this, t);
    }
  }, l(ms, "Kt"), ms), ir = (gs = class extends or {
    constructor(e, t, r, n, a, o, s = null, u) {
      super(n, u), this.name = e, this.parameters = t, this.children = r, this.nameSpan = a, this.startSourceSpan = o, this.endSourceSpan = s, this.type = "block";
    }
    visit(e, t) {
      return e.visitBlock(this, t);
    }
  }, l(gs, "Z"), gs), ws = (vs = class {
    constructor(e, t) {
      this.expression = e, this.sourceSpan = t, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
    }
    visit(e, t) {
      return e.visitBlockParameter(this, t);
    }
  }, l(vs, "ct"), vs), Ds = (bs = class {
    constructor(e, t, r, n, a) {
      this.name = e, this.value = t, this.sourceSpan = r, this.nameSpan = n, this.valueSpan = a, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
    }
    visit(e, t) {
      return e.visitLetDeclaration(this, t);
    }
  }, l(bs, "pt"), bs), l(Ru, "Qt"), B4 = (ys = class {
    constructor() {
    }
    visitElement(e, t) {
      this.visitChildren(t, (r) => {
        r(e.attrs), r(e.children);
      });
    }
    visitAttribute(e, t) {
    }
    visitText(e, t) {
    }
    visitCdata(e, t) {
    }
    visitComment(e, t) {
    }
    visitDocType(e, t) {
    }
    visitExpansion(e, t) {
      return this.visitChildren(t, (r) => {
        r(e.cases);
      });
    }
    visitExpansionCase(e, t) {
    }
    visitBlock(e, t) {
      this.visitChildren(t, (r) => {
        r(e.parameters), r(e.children);
      });
    }
    visitBlockParameter(e, t) {
    }
    visitLetDeclaration(e, t) {
    }
    visitChildren(e, t) {
      let r = [], n = this;
      function a(o) {
        o && r.push(Ru(n, o, e));
      }
      return l(a, "i"), t(a), Array.prototype.concat.apply([], r);
    }
  }, l(ys, "ht"), ys), la = {
    AElig: "Æ",
    AMP: "&",
    amp: "&",
    Aacute: "Á",
    Abreve: "Ă",
    Acirc: "Â",
    Acy: "А",
    Afr: "𝔄",
    Agrave: "À",
    Alpha: "Α",
    Amacr: "Ā",
    And: "⩓",
    Aogon: "Ą",
    Aopf: "𝔸",
    ApplyFunction: "⁡",
    af: "⁡",
    Aring: "Å",
    angst: "Å",
    Ascr: "𝒜",
    Assign: "≔",
    colone: "≔",
    coloneq: "≔",
    Atilde: "Ã",
    Auml: "Ä",
    Backslash: "∖",
    setminus: "∖",
    setmn: "∖",
    smallsetminus: "∖",
    ssetmn: "∖",
    Barv: "⫧",
    Barwed: "⌆",
    doublebarwedge: "⌆",
    Bcy: "Б",
    Because: "∵",
    becaus: "∵",
    because: "∵",
    Bernoullis: "ℬ",
    Bscr: "ℬ",
    bernou: "ℬ",
    Beta: "Β",
    Bfr: "𝔅",
    Bopf: "𝔹",
    Breve: "˘",
    breve: "˘",
    Bumpeq: "≎",
    HumpDownHump: "≎",
    bump: "≎",
    CHcy: "Ч",
    COPY: "©",
    copy: "©",
    Cacute: "Ć",
    Cap: "⋒",
    CapitalDifferentialD: "ⅅ",
    DD: "ⅅ",
    Cayleys: "ℭ",
    Cfr: "ℭ",
    Ccaron: "Č",
    Ccedil: "Ç",
    Ccirc: "Ĉ",
    Cconint: "∰",
    Cdot: "Ċ",
    Cedilla: "¸",
    cedil: "¸",
    CenterDot: "·",
    centerdot: "·",
    middot: "·",
    Chi: "Χ",
    CircleDot: "⊙",
    odot: "⊙",
    CircleMinus: "⊖",
    ominus: "⊖",
    CirclePlus: "⊕",
    oplus: "⊕",
    CircleTimes: "⊗",
    otimes: "⊗",
    ClockwiseContourIntegral: "∲",
    cwconint: "∲",
    CloseCurlyDoubleQuote: "”",
    rdquo: "”",
    rdquor: "”",
    CloseCurlyQuote: "’",
    rsquo: "’",
    rsquor: "’",
    Colon: "∷",
    Proportion: "∷",
    Colone: "⩴",
    Congruent: "≡",
    equiv: "≡",
    Conint: "∯",
    DoubleContourIntegral: "∯",
    ContourIntegral: "∮",
    conint: "∮",
    oint: "∮",
    Copf: "ℂ",
    complexes: "ℂ",
    Coproduct: "∐",
    coprod: "∐",
    CounterClockwiseContourIntegral: "∳",
    awconint: "∳",
    Cross: "⨯",
    Cscr: "𝒞",
    Cup: "⋓",
    CupCap: "≍",
    asympeq: "≍",
    DDotrahd: "⤑",
    DJcy: "Ђ",
    DScy: "Ѕ",
    DZcy: "Џ",
    Dagger: "‡",
    ddagger: "‡",
    Darr: "↡",
    Dashv: "⫤",
    DoubleLeftTee: "⫤",
    Dcaron: "Ď",
    Dcy: "Д",
    Del: "∇",
    nabla: "∇",
    Delta: "Δ",
    Dfr: "𝔇",
    DiacriticalAcute: "´",
    acute: "´",
    DiacriticalDot: "˙",
    dot: "˙",
    DiacriticalDoubleAcute: "˝",
    dblac: "˝",
    DiacriticalGrave: "`",
    grave: "`",
    DiacriticalTilde: "˜",
    tilde: "˜",
    Diamond: "⋄",
    diam: "⋄",
    diamond: "⋄",
    DifferentialD: "ⅆ",
    dd: "ⅆ",
    Dopf: "𝔻",
    Dot: "¨",
    DoubleDot: "¨",
    die: "¨",
    uml: "¨",
    DotDot: "⃜",
    DotEqual: "≐",
    doteq: "≐",
    esdot: "≐",
    DoubleDownArrow: "⇓",
    Downarrow: "⇓",
    dArr: "⇓",
    DoubleLeftArrow: "⇐",
    Leftarrow: "⇐",
    lArr: "⇐",
    DoubleLeftRightArrow: "⇔",
    Leftrightarrow: "⇔",
    hArr: "⇔",
    iff: "⇔",
    DoubleLongLeftArrow: "⟸",
    Longleftarrow: "⟸",
    xlArr: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    Longleftrightarrow: "⟺",
    xhArr: "⟺",
    DoubleLongRightArrow: "⟹",
    Longrightarrow: "⟹",
    xrArr: "⟹",
    DoubleRightArrow: "⇒",
    Implies: "⇒",
    Rightarrow: "⇒",
    rArr: "⇒",
    DoubleRightTee: "⊨",
    vDash: "⊨",
    DoubleUpArrow: "⇑",
    Uparrow: "⇑",
    uArr: "⇑",
    DoubleUpDownArrow: "⇕",
    Updownarrow: "⇕",
    vArr: "⇕",
    DoubleVerticalBar: "∥",
    par: "∥",
    parallel: "∥",
    shortparallel: "∥",
    spar: "∥",
    DownArrow: "↓",
    ShortDownArrow: "↓",
    darr: "↓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    duarr: "⇵",
    DownBreve: "̑",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    leftharpoondown: "↽",
    lhard: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    rhard: "⇁",
    rightharpoondown: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    top: "⊤",
    DownTeeArrow: "↧",
    mapstodown: "↧",
    Dscr: "𝒟",
    Dstrok: "Đ",
    ENG: "Ŋ",
    ETH: "Ð",
    Eacute: "É",
    Ecaron: "Ě",
    Ecirc: "Ê",
    Ecy: "Э",
    Edot: "Ė",
    Efr: "𝔈",
    Egrave: "È",
    Element: "∈",
    in: "∈",
    isin: "∈",
    isinv: "∈",
    Emacr: "Ē",
    EmptySmallSquare: "◻",
    EmptyVerySmallSquare: "▫",
    Eogon: "Ę",
    Eopf: "𝔼",
    Epsilon: "Ε",
    Equal: "⩵",
    EqualTilde: "≂",
    eqsim: "≂",
    esim: "≂",
    Equilibrium: "⇌",
    rightleftharpoons: "⇌",
    rlhar: "⇌",
    Escr: "ℰ",
    expectation: "ℰ",
    Esim: "⩳",
    Eta: "Η",
    Euml: "Ë",
    Exists: "∃",
    exist: "∃",
    ExponentialE: "ⅇ",
    ee: "ⅇ",
    exponentiale: "ⅇ",
    Fcy: "Ф",
    Ffr: "𝔉",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    blacksquare: "▪",
    squarf: "▪",
    squf: "▪",
    Fopf: "𝔽",
    ForAll: "∀",
    forall: "∀",
    Fouriertrf: "ℱ",
    Fscr: "ℱ",
    GJcy: "Ѓ",
    GT: ">",
    gt: ">",
    Gamma: "Γ",
    Gammad: "Ϝ",
    Gbreve: "Ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    Gcy: "Г",
    Gdot: "Ġ",
    Gfr: "𝔊",
    Gg: "⋙",
    ggg: "⋙",
    Gopf: "𝔾",
    GreaterEqual: "≥",
    ge: "≥",
    geq: "≥",
    GreaterEqualLess: "⋛",
    gel: "⋛",
    gtreqless: "⋛",
    GreaterFullEqual: "≧",
    gE: "≧",
    geqq: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    gl: "≷",
    gtrless: "≷",
    GreaterSlantEqual: "⩾",
    geqslant: "⩾",
    ges: "⩾",
    GreaterTilde: "≳",
    gsim: "≳",
    gtrsim: "≳",
    Gscr: "𝒢",
    Gt: "≫",
    NestedGreaterGreater: "≫",
    gg: "≫",
    HARDcy: "Ъ",
    Hacek: "ˇ",
    caron: "ˇ",
    Hat: "^",
    Hcirc: "Ĥ",
    Hfr: "ℌ",
    Poincareplane: "ℌ",
    HilbertSpace: "ℋ",
    Hscr: "ℋ",
    hamilt: "ℋ",
    Hopf: "ℍ",
    quaternions: "ℍ",
    HorizontalLine: "─",
    boxh: "─",
    Hstrok: "Ħ",
    HumpEqual: "≏",
    bumpe: "≏",
    bumpeq: "≏",
    IEcy: "Е",
    IJlig: "Ĳ",
    IOcy: "Ё",
    Iacute: "Í",
    Icirc: "Î",
    Icy: "И",
    Idot: "İ",
    Ifr: "ℑ",
    Im: "ℑ",
    image: "ℑ",
    imagpart: "ℑ",
    Igrave: "Ì",
    Imacr: "Ī",
    ImaginaryI: "ⅈ",
    ii: "ⅈ",
    Int: "∬",
    Integral: "∫",
    int: "∫",
    Intersection: "⋂",
    bigcap: "⋂",
    xcap: "⋂",
    InvisibleComma: "⁣",
    ic: "⁣",
    InvisibleTimes: "⁢",
    it: "⁢",
    Iogon: "Į",
    Iopf: "𝕀",
    Iota: "Ι",
    Iscr: "ℐ",
    imagline: "ℐ",
    Itilde: "Ĩ",
    Iukcy: "І",
    Iuml: "Ï",
    Jcirc: "Ĵ",
    Jcy: "Й",
    Jfr: "𝔍",
    Jopf: "𝕁",
    Jscr: "𝒥",
    Jsercy: "Ј",
    Jukcy: "Є",
    KHcy: "Х",
    KJcy: "Ќ",
    Kappa: "Κ",
    Kcedil: "Ķ",
    Kcy: "К",
    Kfr: "𝔎",
    Kopf: "𝕂",
    Kscr: "𝒦",
    LJcy: "Љ",
    LT: "<",
    lt: "<",
    Lacute: "Ĺ",
    Lambda: "Λ",
    Lang: "⟪",
    Laplacetrf: "ℒ",
    Lscr: "ℒ",
    lagran: "ℒ",
    Larr: "↞",
    twoheadleftarrow: "↞",
    Lcaron: "Ľ",
    Lcedil: "Ļ",
    Lcy: "Л",
    LeftAngleBracket: "⟨",
    lang: "⟨",
    langle: "⟨",
    LeftArrow: "←",
    ShortLeftArrow: "←",
    larr: "←",
    leftarrow: "←",
    slarr: "←",
    LeftArrowBar: "⇤",
    larrb: "⇤",
    LeftArrowRightArrow: "⇆",
    leftrightarrows: "⇆",
    lrarr: "⇆",
    LeftCeiling: "⌈",
    lceil: "⌈",
    LeftDoubleBracket: "⟦",
    lobrk: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    dharl: "⇃",
    downharpoonleft: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    lfloor: "⌊",
    LeftRightArrow: "↔",
    harr: "↔",
    leftrightarrow: "↔",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    dashv: "⊣",
    LeftTeeArrow: "↤",
    mapstoleft: "↤",
    LeftTeeVector: "⥚",
    LeftTriangle: "⊲",
    vartriangleleft: "⊲",
    vltri: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    ltrie: "⊴",
    trianglelefteq: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    uharl: "↿",
    upharpoonleft: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    leftharpoonup: "↼",
    lharu: "↼",
    LeftVectorBar: "⥒",
    LessEqualGreater: "⋚",
    leg: "⋚",
    lesseqgtr: "⋚",
    LessFullEqual: "≦",
    lE: "≦",
    leqq: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    lg: "≶",
    LessLess: "⪡",
    LessSlantEqual: "⩽",
    leqslant: "⩽",
    les: "⩽",
    LessTilde: "≲",
    lesssim: "≲",
    lsim: "≲",
    Lfr: "𝔏",
    Ll: "⋘",
    Lleftarrow: "⇚",
    lAarr: "⇚",
    Lmidot: "Ŀ",
    LongLeftArrow: "⟵",
    longleftarrow: "⟵",
    xlarr: "⟵",
    LongLeftRightArrow: "⟷",
    longleftrightarrow: "⟷",
    xharr: "⟷",
    LongRightArrow: "⟶",
    longrightarrow: "⟶",
    xrarr: "⟶",
    Lopf: "𝕃",
    LowerLeftArrow: "↙",
    swarr: "↙",
    swarrow: "↙",
    LowerRightArrow: "↘",
    searr: "↘",
    searrow: "↘",
    Lsh: "↰",
    lsh: "↰",
    Lstrok: "Ł",
    Lt: "≪",
    NestedLessLess: "≪",
    ll: "≪",
    Map: "⤅",
    Mcy: "М",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mscr: "ℳ",
    phmmat: "ℳ",
    Mfr: "𝔐",
    MinusPlus: "∓",
    mnplus: "∓",
    mp: "∓",
    Mopf: "𝕄",
    Mu: "Μ",
    NJcy: "Њ",
    Nacute: "Ń",
    Ncaron: "Ň",
    Ncedil: "Ņ",
    Ncy: "Н",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    ZeroWidthSpace: "​",
    NewLine: `
`,
    Nfr: "𝔑",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    nbsp: " ",
    Nopf: "ℕ",
    naturals: "ℕ",
    Not: "⫬",
    NotCongruent: "≢",
    nequiv: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    npar: "∦",
    nparallel: "∦",
    nshortparallel: "∦",
    nspar: "∦",
    NotElement: "∉",
    notin: "∉",
    notinva: "∉",
    NotEqual: "≠",
    ne: "≠",
    NotEqualTilde: "≂̸",
    nesim: "≂̸",
    NotExists: "∄",
    nexist: "∄",
    nexists: "∄",
    NotGreater: "≯",
    ngt: "≯",
    ngtr: "≯",
    NotGreaterEqual: "≱",
    nge: "≱",
    ngeq: "≱",
    NotGreaterFullEqual: "≧̸",
    ngE: "≧̸",
    ngeqq: "≧̸",
    NotGreaterGreater: "≫̸",
    nGtv: "≫̸",
    NotGreaterLess: "≹",
    ntgl: "≹",
    NotGreaterSlantEqual: "⩾̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    NotGreaterTilde: "≵",
    ngsim: "≵",
    NotHumpDownHump: "≎̸",
    nbump: "≎̸",
    NotHumpEqual: "≏̸",
    nbumpe: "≏̸",
    NotLeftTriangle: "⋪",
    nltri: "⋪",
    ntriangleleft: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    nltrie: "⋬",
    ntrianglelefteq: "⋬",
    NotLess: "≮",
    nless: "≮",
    nlt: "≮",
    NotLessEqual: "≰",
    nle: "≰",
    nleq: "≰",
    NotLessGreater: "≸",
    ntlg: "≸",
    NotLessLess: "≪̸",
    nLtv: "≪̸",
    NotLessSlantEqual: "⩽̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    NotLessTilde: "≴",
    nlsim: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    NotPrecedes: "⊀",
    npr: "⊀",
    nprec: "⊀",
    NotPrecedesEqual: "⪯̸",
    npre: "⪯̸",
    npreceq: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    nprcue: "⋠",
    NotReverseElement: "∌",
    notni: "∌",
    notniva: "∌",
    NotRightTriangle: "⋫",
    nrtri: "⋫",
    ntriangleright: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    nrtrie: "⋭",
    ntrianglerighteq: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    nsqsube: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    nsqsupe: "⋣",
    NotSubset: "⊂⃒",
    nsubset: "⊂⃒",
    vnsub: "⊂⃒",
    NotSubsetEqual: "⊈",
    nsube: "⊈",
    nsubseteq: "⊈",
    NotSucceeds: "⊁",
    nsc: "⊁",
    nsucc: "⊁",
    NotSucceedsEqual: "⪰̸",
    nsce: "⪰̸",
    nsucceq: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    nsccue: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    nsupset: "⊃⃒",
    vnsup: "⊃⃒",
    NotSupersetEqual: "⊉",
    nsupe: "⊉",
    nsupseteq: "⊉",
    NotTilde: "≁",
    nsim: "≁",
    NotTildeEqual: "≄",
    nsime: "≄",
    nsimeq: "≄",
    NotTildeFullEqual: "≇",
    ncong: "≇",
    NotTildeTilde: "≉",
    nap: "≉",
    napprox: "≉",
    NotVerticalBar: "∤",
    nmid: "∤",
    nshortmid: "∤",
    nsmid: "∤",
    Nscr: "𝒩",
    Ntilde: "Ñ",
    Nu: "Ν",
    OElig: "Œ",
    Oacute: "Ó",
    Ocirc: "Ô",
    Ocy: "О",
    Odblac: "Ő",
    Ofr: "𝔒",
    Ograve: "Ò",
    Omacr: "Ō",
    Omega: "Ω",
    ohm: "Ω",
    Omicron: "Ο",
    Oopf: "𝕆",
    OpenCurlyDoubleQuote: "“",
    ldquo: "“",
    OpenCurlyQuote: "‘",
    lsquo: "‘",
    Or: "⩔",
    Oscr: "𝒪",
    Oslash: "Ø",
    Otilde: "Õ",
    Otimes: "⨷",
    Ouml: "Ö",
    OverBar: "‾",
    oline: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    tbrk: "⎴",
    OverParenthesis: "⏜",
    PartialD: "∂",
    part: "∂",
    Pcy: "П",
    Pfr: "𝔓",
    Phi: "Φ",
    Pi: "Π",
    PlusMinus: "±",
    plusmn: "±",
    pm: "±",
    Popf: "ℙ",
    primes: "ℙ",
    Pr: "⪻",
    Precedes: "≺",
    pr: "≺",
    prec: "≺",
    PrecedesEqual: "⪯",
    pre: "⪯",
    preceq: "⪯",
    PrecedesSlantEqual: "≼",
    prcue: "≼",
    preccurlyeq: "≼",
    PrecedesTilde: "≾",
    precsim: "≾",
    prsim: "≾",
    Prime: "″",
    Product: "∏",
    prod: "∏",
    Proportional: "∝",
    prop: "∝",
    propto: "∝",
    varpropto: "∝",
    vprop: "∝",
    Pscr: "𝒫",
    Psi: "Ψ",
    QUOT: '"',
    quot: '"',
    Qfr: "𝔔",
    Qopf: "ℚ",
    rationals: "ℚ",
    Qscr: "𝒬",
    RBarr: "⤐",
    drbkarow: "⤐",
    REG: "®",
    circledR: "®",
    reg: "®",
    Racute: "Ŕ",
    Rang: "⟫",
    Rarr: "↠",
    twoheadrightarrow: "↠",
    Rarrtl: "⤖",
    Rcaron: "Ř",
    Rcedil: "Ŗ",
    Rcy: "Р",
    Re: "ℜ",
    Rfr: "ℜ",
    real: "ℜ",
    realpart: "ℜ",
    ReverseElement: "∋",
    SuchThat: "∋",
    ni: "∋",
    niv: "∋",
    ReverseEquilibrium: "⇋",
    leftrightharpoons: "⇋",
    lrhar: "⇋",
    ReverseUpEquilibrium: "⥯",
    duhar: "⥯",
    Rho: "Ρ",
    RightAngleBracket: "⟩",
    rang: "⟩",
    rangle: "⟩",
    RightArrow: "→",
    ShortRightArrow: "→",
    rarr: "→",
    rightarrow: "→",
    srarr: "→",
    RightArrowBar: "⇥",
    rarrb: "⇥",
    RightArrowLeftArrow: "⇄",
    rightleftarrows: "⇄",
    rlarr: "⇄",
    RightCeiling: "⌉",
    rceil: "⌉",
    RightDoubleBracket: "⟧",
    robrk: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    dharr: "⇂",
    downharpoonright: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rfloor: "⌋",
    RightTee: "⊢",
    vdash: "⊢",
    RightTeeArrow: "↦",
    map: "↦",
    mapsto: "↦",
    RightTeeVector: "⥛",
    RightTriangle: "⊳",
    vartriangleright: "⊳",
    vrtri: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    rtrie: "⊵",
    trianglerighteq: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    uharr: "↾",
    upharpoonright: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    rharu: "⇀",
    rightharpoonup: "⇀",
    RightVectorBar: "⥓",
    Ropf: "ℝ",
    reals: "ℝ",
    RoundImplies: "⥰",
    Rrightarrow: "⇛",
    rAarr: "⇛",
    Rscr: "ℛ",
    realine: "ℛ",
    Rsh: "↱",
    rsh: "↱",
    RuleDelayed: "⧴",
    SHCHcy: "Щ",
    SHcy: "Ш",
    SOFTcy: "Ь",
    Sacute: "Ś",
    Sc: "⪼",
    Scaron: "Š",
    Scedil: "Ş",
    Scirc: "Ŝ",
    Scy: "С",
    Sfr: "𝔖",
    ShortUpArrow: "↑",
    UpArrow: "↑",
    uarr: "↑",
    uparrow: "↑",
    Sigma: "Σ",
    SmallCircle: "∘",
    compfn: "∘",
    Sopf: "𝕊",
    Sqrt: "√",
    radic: "√",
    Square: "□",
    squ: "□",
    square: "□",
    SquareIntersection: "⊓",
    sqcap: "⊓",
    SquareSubset: "⊏",
    sqsub: "⊏",
    sqsubset: "⊏",
    SquareSubsetEqual: "⊑",
    sqsube: "⊑",
    sqsubseteq: "⊑",
    SquareSuperset: "⊐",
    sqsup: "⊐",
    sqsupset: "⊐",
    SquareSupersetEqual: "⊒",
    sqsupe: "⊒",
    sqsupseteq: "⊒",
    SquareUnion: "⊔",
    sqcup: "⊔",
    Sscr: "𝒮",
    Star: "⋆",
    sstarf: "⋆",
    Sub: "⋐",
    Subset: "⋐",
    SubsetEqual: "⊆",
    sube: "⊆",
    subseteq: "⊆",
    Succeeds: "≻",
    sc: "≻",
    succ: "≻",
    SucceedsEqual: "⪰",
    sce: "⪰",
    succeq: "⪰",
    SucceedsSlantEqual: "≽",
    sccue: "≽",
    succcurlyeq: "≽",
    SucceedsTilde: "≿",
    scsim: "≿",
    succsim: "≿",
    Sum: "∑",
    sum: "∑",
    Sup: "⋑",
    Supset: "⋑",
    Superset: "⊃",
    sup: "⊃",
    supset: "⊃",
    SupersetEqual: "⊇",
    supe: "⊇",
    supseteq: "⊇",
    THORN: "Þ",
    TRADE: "™",
    trade: "™",
    TSHcy: "Ћ",
    TScy: "Ц",
    Tab: "	",
    Tau: "Τ",
    Tcaron: "Ť",
    Tcedil: "Ţ",
    Tcy: "Т",
    Tfr: "𝔗",
    Therefore: "∴",
    there4: "∴",
    therefore: "∴",
    Theta: "Θ",
    ThickSpace: "  ",
    ThinSpace: " ",
    thinsp: " ",
    Tilde: "∼",
    sim: "∼",
    thicksim: "∼",
    thksim: "∼",
    TildeEqual: "≃",
    sime: "≃",
    simeq: "≃",
    TildeFullEqual: "≅",
    cong: "≅",
    TildeTilde: "≈",
    ap: "≈",
    approx: "≈",
    asymp: "≈",
    thickapprox: "≈",
    thkap: "≈",
    Topf: "𝕋",
    TripleDot: "⃛",
    tdot: "⃛",
    Tscr: "𝒯",
    Tstrok: "Ŧ",
    Uacute: "Ú",
    Uarr: "↟",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    Ubreve: "Ŭ",
    Ucirc: "Û",
    Ucy: "У",
    Udblac: "Ű",
    Ufr: "𝔘",
    Ugrave: "Ù",
    Umacr: "Ū",
    UnderBar: "_",
    lowbar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    bbrk: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    bigcup: "⋃",
    xcup: "⋃",
    UnionPlus: "⊎",
    uplus: "⊎",
    Uogon: "Ų",
    Uopf: "𝕌",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    udarr: "⇅",
    UpDownArrow: "↕",
    updownarrow: "↕",
    varr: "↕",
    UpEquilibrium: "⥮",
    udhar: "⥮",
    UpTee: "⊥",
    bot: "⊥",
    bottom: "⊥",
    perp: "⊥",
    UpTeeArrow: "↥",
    mapstoup: "↥",
    UpperLeftArrow: "↖",
    nwarr: "↖",
    nwarrow: "↖",
    UpperRightArrow: "↗",
    nearr: "↗",
    nearrow: "↗",
    Upsi: "ϒ",
    upsih: "ϒ",
    Upsilon: "Υ",
    Uring: "Ů",
    Uscr: "𝒰",
    Utilde: "Ũ",
    Uuml: "Ü",
    VDash: "⊫",
    Vbar: "⫫",
    Vcy: "В",
    Vdash: "⊩",
    Vdashl: "⫦",
    Vee: "⋁",
    bigvee: "⋁",
    xvee: "⋁",
    Verbar: "‖",
    Vert: "‖",
    VerticalBar: "∣",
    mid: "∣",
    shortmid: "∣",
    smid: "∣",
    VerticalLine: "|",
    verbar: "|",
    vert: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    wr: "≀",
    wreath: "≀",
    VeryThinSpace: " ",
    hairsp: " ",
    Vfr: "𝔙",
    Vopf: "𝕍",
    Vscr: "𝒱",
    Vvdash: "⊪",
    Wcirc: "Ŵ",
    Wedge: "⋀",
    bigwedge: "⋀",
    xwedge: "⋀",
    Wfr: "𝔚",
    Wopf: "𝕎",
    Wscr: "𝒲",
    Xfr: "𝔛",
    Xi: "Ξ",
    Xopf: "𝕏",
    Xscr: "𝒳",
    YAcy: "Я",
    YIcy: "Ї",
    YUcy: "Ю",
    Yacute: "Ý",
    Ycirc: "Ŷ",
    Ycy: "Ы",
    Yfr: "𝔜",
    Yopf: "𝕐",
    Yscr: "𝒴",
    Yuml: "Ÿ",
    ZHcy: "Ж",
    Zacute: "Ź",
    Zcaron: "Ž",
    Zcy: "З",
    Zdot: "Ż",
    Zeta: "Ζ",
    Zfr: "ℨ",
    zeetrf: "ℨ",
    Zopf: "ℤ",
    integers: "ℤ",
    Zscr: "𝒵",
    aacute: "á",
    abreve: "ă",
    ac: "∾",
    mstpos: "∾",
    acE: "∾̳",
    acd: "∿",
    acirc: "â",
    acy: "а",
    aelig: "æ",
    afr: "𝔞",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    alpha: "α",
    amacr: "ā",
    amalg: "⨿",
    and: "∧",
    wedge: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    angle: "∠",
    ange: "⦤",
    angmsd: "∡",
    measuredangle: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angzarr: "⍼",
    aogon: "ą",
    aopf: "𝕒",
    apE: "⩰",
    apacir: "⩯",
    ape: "≊",
    approxeq: "≊",
    apid: "≋",
    apos: "'",
    aring: "å",
    ascr: "𝒶",
    ast: "*",
    midast: "*",
    atilde: "ã",
    auml: "ä",
    awint: "⨑",
    bNot: "⫭",
    backcong: "≌",
    bcong: "≌",
    backepsilon: "϶",
    bepsi: "϶",
    backprime: "‵",
    bprime: "‵",
    backsim: "∽",
    bsim: "∽",
    backsimeq: "⋍",
    bsime: "⋍",
    barvee: "⊽",
    barwed: "⌅",
    barwedge: "⌅",
    bbrktbrk: "⎶",
    bcy: "б",
    bdquo: "„",
    ldquor: "„",
    bemptyv: "⦰",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    twixt: "≬",
    bfr: "𝔟",
    bigcirc: "◯",
    xcirc: "◯",
    bigodot: "⨀",
    xodot: "⨀",
    bigoplus: "⨁",
    xoplus: "⨁",
    bigotimes: "⨂",
    xotime: "⨂",
    bigsqcup: "⨆",
    xsqcup: "⨆",
    bigstar: "★",
    starf: "★",
    bigtriangledown: "▽",
    xdtri: "▽",
    bigtriangleup: "△",
    xutri: "△",
    biguplus: "⨄",
    xuplus: "⨄",
    bkarow: "⤍",
    rbarr: "⤍",
    blacklozenge: "⧫",
    lozf: "⧫",
    blacktriangle: "▴",
    utrif: "▴",
    blacktriangledown: "▾",
    dtrif: "▾",
    blacktriangleleft: "◂",
    ltrif: "◂",
    blacktriangleright: "▸",
    rtrif: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bnot: "⌐",
    bopf: "𝕓",
    bowtie: "⋈",
    boxDL: "╗",
    boxDR: "╔",
    boxDl: "╖",
    boxDr: "╓",
    boxH: "═",
    boxHD: "╦",
    boxHU: "╩",
    boxHd: "╤",
    boxHu: "╧",
    boxUL: "╝",
    boxUR: "╚",
    boxUl: "╜",
    boxUr: "╙",
    boxV: "║",
    boxVH: "╬",
    boxVL: "╣",
    boxVR: "╠",
    boxVh: "╫",
    boxVl: "╢",
    boxVr: "╟",
    boxbox: "⧉",
    boxdL: "╕",
    boxdR: "╒",
    boxdl: "┐",
    boxdr: "┌",
    boxhD: "╥",
    boxhU: "╨",
    boxhd: "┬",
    boxhu: "┴",
    boxminus: "⊟",
    minusb: "⊟",
    boxplus: "⊞",
    plusb: "⊞",
    boxtimes: "⊠",
    timesb: "⊠",
    boxuL: "╛",
    boxuR: "╘",
    boxul: "┘",
    boxur: "└",
    boxv: "│",
    boxvH: "╪",
    boxvL: "╡",
    boxvR: "╞",
    boxvh: "┼",
    boxvl: "┤",
    boxvr: "├",
    brvbar: "¦",
    bscr: "𝒷",
    bsemi: "⁏",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bumpE: "⪮",
    cacute: "ć",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    caps: "∩︀",
    caret: "⁁",
    ccaps: "⩍",
    ccaron: "č",
    ccedil: "ç",
    ccirc: "ĉ",
    ccups: "⩌",
    ccupssm: "⩐",
    cdot: "ċ",
    cemptyv: "⦲",
    cent: "¢",
    cfr: "𝔠",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    chi: "χ",
    cir: "○",
    cirE: "⧃",
    circ: "ˆ",
    circeq: "≗",
    cire: "≗",
    circlearrowleft: "↺",
    olarr: "↺",
    circlearrowright: "↻",
    orarr: "↻",
    circledS: "Ⓢ",
    oS: "Ⓢ",
    circledast: "⊛",
    oast: "⊛",
    circledcirc: "⊚",
    ocir: "⊚",
    circleddash: "⊝",
    odash: "⊝",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    clubs: "♣",
    clubsuit: "♣",
    colon: ":",
    comma: ",",
    commat: "@",
    comp: "∁",
    complement: "∁",
    congdot: "⩭",
    copf: "𝕔",
    copysr: "℗",
    crarr: "↵",
    cross: "✗",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    curlyeqprec: "⋞",
    cuesc: "⋟",
    curlyeqsucc: "⋟",
    cularr: "↶",
    curvearrowleft: "↶",
    cularrp: "⤽",
    cup: "∪",
    cupbrcap: "⩈",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curvearrowright: "↷",
    curarrm: "⤼",
    curlyvee: "⋎",
    cuvee: "⋎",
    curlywedge: "⋏",
    cuwed: "⋏",
    curren: "¤",
    cwint: "∱",
    cylcty: "⌭",
    dHar: "⥥",
    dagger: "†",
    daleth: "ℸ",
    dash: "‐",
    hyphen: "‐",
    dbkarow: "⤏",
    rBarr: "⤏",
    dcaron: "ď",
    dcy: "д",
    ddarr: "⇊",
    downdownarrows: "⇊",
    ddotseq: "⩷",
    eDDot: "⩷",
    deg: "°",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    dfr: "𝔡",
    diamondsuit: "♦",
    diams: "♦",
    digamma: "ϝ",
    gammad: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    djcy: "ђ",
    dlcorn: "⌞",
    llcorner: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    dopf: "𝕕",
    doteqdot: "≑",
    eDot: "≑",
    dotminus: "∸",
    minusd: "∸",
    dotplus: "∔",
    plusdo: "∔",
    dotsquare: "⊡",
    sdotb: "⊡",
    drcorn: "⌟",
    lrcorner: "⌟",
    drcrop: "⌌",
    dscr: "𝒹",
    dscy: "ѕ",
    dsol: "⧶",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    triangledown: "▿",
    dwangle: "⦦",
    dzcy: "џ",
    dzigrarr: "⟿",
    eacute: "é",
    easter: "⩮",
    ecaron: "ě",
    ecir: "≖",
    eqcirc: "≖",
    ecirc: "ê",
    ecolon: "≕",
    eqcolon: "≕",
    ecy: "э",
    edot: "ė",
    efDot: "≒",
    fallingdotseq: "≒",
    efr: "𝔢",
    eg: "⪚",
    egrave: "è",
    egs: "⪖",
    eqslantgtr: "⪖",
    egsdot: "⪘",
    el: "⪙",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    eqslantless: "⪕",
    elsdot: "⪗",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    emptyv: "∅",
    varnothing: "∅",
    emsp13: " ",
    emsp14: " ",
    emsp: " ",
    eng: "ŋ",
    ensp: " ",
    eogon: "ę",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    epsilon: "ε",
    epsiv: "ϵ",
    straightepsilon: "ϵ",
    varepsilon: "ϵ",
    equals: "=",
    equest: "≟",
    questeq: "≟",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erDot: "≓",
    risingdotseq: "≓",
    erarr: "⥱",
    escr: "ℯ",
    eta: "η",
    eth: "ð",
    euml: "ë",
    euro: "€",
    excl: "!",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    ffr: "𝔣",
    filig: "ﬁ",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    fopf: "𝕗",
    fork: "⋔",
    pitchfork: "⋔",
    forkv: "⫙",
    fpartint: "⨍",
    frac12: "½",
    half: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    sfrown: "⌢",
    fscr: "𝒻",
    gEl: "⪌",
    gtreqqless: "⪌",
    gacute: "ǵ",
    gamma: "γ",
    gap: "⪆",
    gtrapprox: "⪆",
    gbreve: "ğ",
    gcirc: "ĝ",
    gcy: "г",
    gdot: "ġ",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    gfr: "𝔤",
    gimel: "ℷ",
    gjcy: "ѓ",
    glE: "⪒",
    gla: "⪥",
    glj: "⪤",
    gnE: "≩",
    gneqq: "≩",
    gnap: "⪊",
    gnapprox: "⪊",
    gne: "⪈",
    gneq: "⪈",
    gnsim: "⋧",
    gopf: "𝕘",
    gscr: "ℊ",
    gsime: "⪎",
    gsiml: "⪐",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtrdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrarr: "⥸",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    hardcy: "ъ",
    harrcir: "⥈",
    harrw: "↭",
    leftrightsquigarrow: "↭",
    hbar: "ℏ",
    hslash: "ℏ",
    planck: "ℏ",
    plankv: "ℏ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    mldr: "…",
    hercon: "⊹",
    hfr: "𝔥",
    hksearow: "⤥",
    searhk: "⤥",
    hkswarow: "⤦",
    swarhk: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    larrhk: "↩",
    hookrightarrow: "↪",
    rarrhk: "↪",
    hopf: "𝕙",
    horbar: "―",
    hscr: "𝒽",
    hstrok: "ħ",
    hybull: "⁃",
    iacute: "í",
    icirc: "î",
    icy: "и",
    iecy: "е",
    iexcl: "¡",
    ifr: "𝔦",
    igrave: "ì",
    iiiint: "⨌",
    qint: "⨌",
    iiint: "∭",
    tint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    ijlig: "ĳ",
    imacr: "ī",
    imath: "ı",
    inodot: "ı",
    imof: "⊷",
    imped: "Ƶ",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    intcal: "⊺",
    intercal: "⊺",
    intlarhk: "⨗",
    intprod: "⨼",
    iprod: "⨼",
    iocy: "ё",
    iogon: "į",
    iopf: "𝕚",
    iota: "ι",
    iquest: "¿",
    iscr: "𝒾",
    isinE: "⋹",
    isindot: "⋵",
    isins: "⋴",
    isinsv: "⋳",
    itilde: "ĩ",
    iukcy: "і",
    iuml: "ï",
    jcirc: "ĵ",
    jcy: "й",
    jfr: "𝔧",
    jmath: "ȷ",
    jopf: "𝕛",
    jscr: "𝒿",
    jsercy: "ј",
    jukcy: "є",
    kappa: "κ",
    kappav: "ϰ",
    varkappa: "ϰ",
    kcedil: "ķ",
    kcy: "к",
    kfr: "𝔨",
    kgreen: "ĸ",
    khcy: "х",
    kjcy: "ќ",
    kopf: "𝕜",
    kscr: "𝓀",
    lAtail: "⤛",
    lBarr: "⤎",
    lEg: "⪋",
    lesseqqgtr: "⪋",
    lHar: "⥢",
    lacute: "ĺ",
    laemptyv: "⦴",
    lambda: "λ",
    langd: "⦑",
    lap: "⪅",
    lessapprox: "⪅",
    laquo: "«",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrlp: "↫",
    looparrowleft: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    leftarrowtail: "↢",
    lat: "⪫",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lcub: "{",
    lbrack: "[",
    lsqb: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    lcaron: "ľ",
    lcedil: "ļ",
    lcy: "л",
    ldca: "⤶",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    le: "≤",
    leq: "≤",
    leftleftarrows: "⇇",
    llarr: "⇇",
    leftthreetimes: "⋋",
    lthree: "⋋",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessdot: "⋖",
    ltdot: "⋖",
    lfisht: "⥼",
    lfr: "𝔩",
    lgE: "⪑",
    lharul: "⥪",
    lhblk: "▄",
    ljcy: "љ",
    llhard: "⥫",
    lltri: "◺",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnE: "≨",
    lneqq: "≨",
    lnap: "⪉",
    lnapprox: "⪉",
    lne: "⪇",
    lneq: "⪇",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    longmapsto: "⟼",
    xmap: "⟼",
    looparrowright: "↬",
    rarrlp: "↬",
    lopar: "⦅",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    loz: "◊",
    lozenge: "◊",
    lpar: "(",
    lparlt: "⦓",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    lscr: "𝓁",
    lsime: "⪍",
    lsimg: "⪏",
    lsquor: "‚",
    sbquo: "‚",
    lstrok: "ł",
    ltcc: "⪦",
    ltcir: "⩹",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltrPar: "⦖",
    ltri: "◃",
    triangleleft: "◃",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    mDDot: "∺",
    macr: "¯",
    strns: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    marker: "▮",
    mcomma: "⨩",
    mcy: "м",
    mdash: "—",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    midcir: "⫰",
    minus: "−",
    minusdu: "⨪",
    mlcp: "⫛",
    models: "⊧",
    mopf: "𝕞",
    mscr: "𝓂",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nGg: "⋙̸",
    nGt: "≫⃒",
    nLeftarrow: "⇍",
    nlArr: "⇍",
    nLeftrightarrow: "⇎",
    nhArr: "⇎",
    nLl: "⋘̸",
    nLt: "≪⃒",
    nRightarrow: "⇏",
    nrArr: "⇏",
    nVDash: "⊯",
    nVdash: "⊮",
    nacute: "ń",
    nang: "∠⃒",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    natur: "♮",
    natural: "♮",
    ncap: "⩃",
    ncaron: "ň",
    ncedil: "ņ",
    ncongdot: "⩭̸",
    ncup: "⩂",
    ncy: "н",
    ndash: "–",
    neArr: "⇗",
    nearhk: "⤤",
    nedot: "≐̸",
    nesear: "⤨",
    toea: "⤨",
    nfr: "𝔫",
    nharr: "↮",
    nleftrightarrow: "↮",
    nhpar: "⫲",
    nis: "⋼",
    nisd: "⋺",
    njcy: "њ",
    nlE: "≦̸",
    nleqq: "≦̸",
    nlarr: "↚",
    nleftarrow: "↚",
    nldr: "‥",
    nopf: "𝕟",
    not: "¬",
    notinE: "⋹̸",
    notindot: "⋵̸",
    notinvb: "⋷",
    notinvc: "⋶",
    notnivb: "⋾",
    notnivc: "⋽",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    nrarr: "↛",
    nrightarrow: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nscr: "𝓃",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsubseteqq: "⫅̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupseteqq: "⫆̸",
    ntilde: "ñ",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvDash: "⊭",
    nvHarr: "⤄",
    nvap: "≍⃒",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwArr: "⇖",
    nwarhk: "⤣",
    nwnear: "⤧",
    oacute: "ó",
    ocirc: "ô",
    ocy: "о",
    odblac: "ő",
    odiv: "⨸",
    odsold: "⦼",
    oelig: "œ",
    ofcir: "⦿",
    ofr: "𝔬",
    ogon: "˛",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    olcir: "⦾",
    olcross: "⦻",
    olt: "⧀",
    omacr: "ō",
    omega: "ω",
    omicron: "ο",
    omid: "⦶",
    oopf: "𝕠",
    opar: "⦷",
    operp: "⦹",
    or: "∨",
    vee: "∨",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    oscr: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oslash: "ø",
    osol: "⊘",
    otilde: "õ",
    otimesas: "⨶",
    ouml: "ö",
    ovbar: "⌽",
    para: "¶",
    parsim: "⫳",
    parsl: "⫽",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    pertenk: "‱",
    pfr: "𝔭",
    phi: "φ",
    phiv: "ϕ",
    straightphi: "ϕ",
    varphi: "ϕ",
    phone: "☎",
    pi: "π",
    piv: "ϖ",
    varpi: "ϖ",
    planckh: "ℎ",
    plus: "+",
    plusacir: "⨣",
    pluscir: "⨢",
    plusdu: "⨥",
    pluse: "⩲",
    plussim: "⨦",
    plustwo: "⨧",
    pointint: "⨕",
    popf: "𝕡",
    pound: "£",
    prE: "⪳",
    prap: "⪷",
    precapprox: "⪷",
    precnapprox: "⪹",
    prnap: "⪹",
    precneqq: "⪵",
    prnE: "⪵",
    precnsim: "⋨",
    prnsim: "⋨",
    prime: "′",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prurel: "⊰",
    pscr: "𝓅",
    psi: "ψ",
    puncsp: " ",
    qfr: "𝔮",
    qopf: "𝕢",
    qprime: "⁗",
    qscr: "𝓆",
    quatint: "⨖",
    quest: "?",
    rAtail: "⤜",
    rHar: "⥤",
    race: "∽̱",
    racute: "ŕ",
    raemptyv: "⦳",
    rangd: "⦒",
    range: "⦥",
    raquo: "»",
    rarrap: "⥵",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrpl: "⥅",
    rarrsim: "⥴",
    rarrtl: "↣",
    rightarrowtail: "↣",
    rarrw: "↝",
    rightsquigarrow: "↝",
    ratail: "⤚",
    ratio: "∶",
    rbbrk: "❳",
    rbrace: "}",
    rcub: "}",
    rbrack: "]",
    rsqb: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    rcaron: "ř",
    rcedil: "ŗ",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdsh: "↳",
    rect: "▭",
    rfisht: "⥽",
    rfr: "𝔯",
    rharul: "⥬",
    rho: "ρ",
    rhov: "ϱ",
    varrho: "ϱ",
    rightrightarrows: "⇉",
    rrarr: "⇉",
    rightthreetimes: "⋌",
    rthree: "⋌",
    ring: "˚",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    ropar: "⦆",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rsaquo: "›",
    rscr: "𝓇",
    rtimes: "⋊",
    rtri: "▹",
    triangleright: "▹",
    rtriltri: "⧎",
    ruluhar: "⥨",
    rx: "℞",
    sacute: "ś",
    scE: "⪴",
    scap: "⪸",
    succapprox: "⪸",
    scaron: "š",
    scedil: "ş",
    scirc: "ŝ",
    scnE: "⪶",
    succneqq: "⪶",
    scnap: "⪺",
    succnapprox: "⪺",
    scnsim: "⋩",
    succnsim: "⋩",
    scpolint: "⨓",
    scy: "с",
    sdot: "⋅",
    sdote: "⩦",
    seArr: "⇘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    tosa: "⤩",
    sext: "✶",
    sfr: "𝔰",
    sharp: "♯",
    shchcy: "щ",
    shcy: "ш",
    shy: "­",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    varsigma: "ς",
    simdot: "⩪",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    smashp: "⨳",
    smeparsl: "⧤",
    smile: "⌣",
    ssmile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    sqcaps: "⊓︀",
    sqcups: "⊔︀",
    sscr: "𝓈",
    star: "☆",
    sub: "⊂",
    subset: "⊂",
    subE: "⫅",
    subseteqq: "⫅",
    subdot: "⪽",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subsetneqq: "⫋",
    subne: "⊊",
    subsetneq: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    sung: "♪",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supE: "⫆",
    supseteqq: "⫆",
    supdot: "⪾",
    supdsub: "⫘",
    supedot: "⫄",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supsetneqq: "⫌",
    supne: "⊋",
    supsetneq: "⊋",
    supplus: "⫀",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swArr: "⇙",
    swnwar: "⤪",
    szlig: "ß",
    target: "⌖",
    tau: "τ",
    tcaron: "ť",
    tcedil: "ţ",
    tcy: "т",
    telrec: "⌕",
    tfr: "𝔱",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    vartheta: "ϑ",
    thorn: "þ",
    times: "×",
    timesbar: "⨱",
    timesd: "⨰",
    topbot: "⌶",
    topcir: "⫱",
    topf: "𝕥",
    topfork: "⫚",
    tprime: "‴",
    triangle: "▵",
    utri: "▵",
    triangleq: "≜",
    trie: "≜",
    tridot: "◬",
    triminus: "⨺",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    tscr: "𝓉",
    tscy: "ц",
    tshcy: "ћ",
    tstrok: "ŧ",
    uHar: "⥣",
    uacute: "ú",
    ubrcy: "ў",
    ubreve: "ŭ",
    ucirc: "û",
    ucy: "у",
    udblac: "ű",
    ufisht: "⥾",
    ufr: "𝔲",
    ugrave: "ù",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    umacr: "ū",
    uogon: "ų",
    uopf: "𝕦",
    upsi: "υ",
    upsilon: "υ",
    upuparrows: "⇈",
    uuarr: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    uring: "ů",
    urtri: "◹",
    uscr: "𝓊",
    utdot: "⋰",
    utilde: "ũ",
    uuml: "ü",
    uwangle: "⦧",
    vBar: "⫨",
    vBarv: "⫩",
    vangrt: "⦜",
    varsubsetneq: "⊊︀",
    vsubne: "⊊︀",
    varsubsetneqq: "⫋︀",
    vsubnE: "⫋︀",
    varsupsetneq: "⊋︀",
    vsupne: "⊋︀",
    varsupsetneqq: "⫌︀",
    vsupnE: "⫌︀",
    vcy: "в",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    vfr: "𝔳",
    vopf: "𝕧",
    vscr: "𝓋",
    vzigzag: "⦚",
    wcirc: "ŵ",
    wedbar: "⩟",
    wedgeq: "≙",
    weierp: "℘",
    wp: "℘",
    wfr: "𝔴",
    wopf: "𝕨",
    wscr: "𝓌",
    xfr: "𝔵",
    xi: "ξ",
    xnis: "⋻",
    xopf: "𝕩",
    xscr: "𝓍",
    yacute: "ý",
    yacy: "я",
    ycirc: "ŷ",
    ycy: "ы",
    yen: "¥",
    yfr: "𝔶",
    yicy: "ї",
    yopf: "𝕪",
    yscr: "𝓎",
    yucy: "ю",
    yuml: "ÿ",
    zacute: "ź",
    zcaron: "ž",
    zcy: "з",
    zdot: "ż",
    zeta: "ζ",
    zfr: "𝔷",
    zhcy: "ж",
    zigrarr: "⇝",
    zopf: "𝕫",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }, wh = "", la.ngsp = wh, z4 = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//], l(cp, "Ls"), bh = (oo = class {
    static fromArray(e) {
      return e ? (cp("interpolation", e), new oo(e[0], e[1])) : Es;
    }
    constructor(e, t) {
      this.start = e, this.end = t;
    }
  }, l(oo, "t"), oo), Es = new bh("{{", "}}"), io = (Cs = class extends Kl {
    constructor(e, t, r) {
      super(r, e), this.tokenType = t;
    }
  }, l(Cs, "ft"), Cs), _4 = (xs = class {
    constructor(e, t, r) {
      this.tokens = e, this.errors = t, this.nonNormalizedIcuExpressions = r;
    }
  }, l(xs, "$r"), xs), l(dp, "Ws"), Dh = /\r\n?/g, l(ar, "je"), l(Rl, "Rs"), l(pp, "ho"), function(e) {
    e.HEX = "hexadecimal", e.DEC = "decimal";
  }(lo || (lo = {})), so = (Ss = class {
    constructor(e) {
      this.error = e;
    }
  }, l(Ss, "dt"), Ss), I4 = (As = class {
    constructor(e, t, r) {
      this._getTagContentType = t, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = !1, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = r.tokenizeExpansionForms || !1, this._interpolationConfig = r.interpolationConfig || Es, this._leadingTriviaCodePoints = r.leadingTriviaChars && r.leadingTriviaChars.map((a) => a.codePointAt(0) || 0), this._canSelfClose = r.canSelfClose || !1, this._allowHtmComponentClosingTags = r.allowHtmComponentClosingTags || !1;
      let n = r.range || { endPos: e.content.length, startPos: 0, startLine: 0, startCol: 0 };
      this._cursor = r.escapedString ? new yh(e, n) : new ks(e, n), this._preserveLineEndings = r.preserveLineEndings || !1, this._i18nNormalizeLineEndingsInICUs = r.i18nNormalizeLineEndingsInICUs || !1, this._tokenizeBlocks = r.tokenizeBlocks ?? !0, this._tokenizeLet = r.tokenizeLet ?? !0;
      try {
        this._cursor.init();
      } catch (a) {
        this.handleError(a);
      }
    }
    _processCarriageReturns(e) {
      return this._preserveLineEndings ? e : e.replace(Dh, `
`);
    }
    tokenize() {
      for (; this._cursor.peek() !== 0; ) {
        let e = this._cursor.clone();
        try {
          if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr(
            "--"
          ) ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(
            e
          );
          else if (this._attemptCharCode(47)) this._consumeTagClose(e);
          else {
            let t = this._cursor.clone();
            this._attemptCharCode(63) ? (this._cursor = t, this._consumeBogusComment(e)) : this._consumeTagOpen(e);
          }
          else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(
            e
          ) : this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
        } catch (t) {
          this.handleError(t);
        }
      }
      this._beginToken(34), this._endToken([]);
    }
    _getBlockName() {
      let e = !1, t = this._cursor.clone();
      return this._attemptCharCodeUntilFn((r) => aa(r) ? !e : Tl(r) ? (e = !0, !1) : !0), this._cursor.getChars(t).trim();
    }
    _consumeBlockStart(e) {
      this._beginToken(25, e);
      let t = this._endToken([this._getBlockName()]);
      if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(ee), this._attemptCharCode(
        41
      )) this._attemptCharCodeUntilFn(ee);
      else {
        t.type = 29;
        return;
      }
      this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : t.type = 29;
    }
    _consumeBlockEnd(e) {
      this._beginToken(27, e), this._endToken([]);
    }
    _consumeBlockParameters() {
      for (this._attemptCharCodeUntilFn(Ml); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
        this._beginToken(28);
        let e = this._cursor.clone(), t = null, r = 0;
        for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || t !== null; ) {
          let n = this._cursor.peek();
          if (n === 92) this._cursor.advance();
          else if (n === t) t = null;
          else if (t === null && ro(n)) t = n;
          else if (n === 40 && t === null) r++;
          else if (n === 41 && t === null) {
            if (r === 0) break;
            r > 0 && r--;
          }
          this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e)]), this._attemptCharCodeUntilFn(Ml);
      }
    }
    _consumeLetDeclaration(e) {
      if (this._beginToken(30, e), aa(this._cursor.peek())) this._attemptCharCodeUntilFn(ee);
      else {
        let r = this._endToken([this._cursor.getChars(e)]);
        r.type = 33;
        return;
      }
      let t = this._endToken([this._getLetDeclarationName()]);
      if (this._attemptCharCodeUntilFn(ee), !this._attemptCharCode(61)) {
        t.type = 33;
        return;
      }
      this._attemptCharCodeUntilFn((r) => ee(r) && !to(r)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(
        32
      ), this._endToken([]), this._cursor.advance()) : (t.type = 33, t.sourceSpan = this._cursor.getSpan(e));
    }
    _getLetDeclarationName() {
      let e = this._cursor.clone(), t = !1;
      return this._attemptCharCodeUntilFn((r) => oa(r) || r == 36 || r === 95 || t && Uo(r) ? (t = !0, !1) : !0), this._cursor.getChars(e).trim();
    }
    _consumeLetDeclarationValue() {
      let e = this._cursor.clone();
      for (this._beginToken(31, e); this._cursor.peek() !== 0; ) {
        let t = this._cursor.peek();
        if (t === 59) break;
        ro(t) && (this._cursor.advance(), this._attemptCharCodeUntilFn((r) => r === 92 ? (this._cursor.advance(), !1) : r === t)), this._cursor.advance();
      }
      this._endToken([this._cursor.getChars(e)]);
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), !0;
      if (gp(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
      if (this._cursor.peek() === 125) {
        if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
        if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0;
      }
      return !1;
    }
    _beginToken(e, t = this._cursor.clone()) {
      this._currentTokenStart = t, this._currentTokenType = e;
    }
    _endToken(e, t) {
      if (this._currentTokenStart === null) throw new io(
        "Programming error - attempted to end a token when there was no start to the token",
        this._currentTokenType,
        this._cursor.getSpan(t)
      );
      if (this._currentTokenType === null) throw new io("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
      let r = { type: this._currentTokenType, parts: e, sourceSpan: (t ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
      return this.tokens.push(r), this._currentTokenStart = null, this._currentTokenType = null, r;
    }
    _createError(e, t) {
      this._isInExpansionForm() && (e += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      let r = new io(e, this._currentTokenType, t);
      return this._currentTokenStart = null, this._currentTokenType = null, new so(r);
    }
    handleError(e) {
      if (e instanceof uo && (e = this._createError(e.msg, this._cursor.getSpan(e.cursor))), e instanceof so) this.errors.push(e.error);
      else throw e;
    }
    _attemptCharCode(e) {
      return this._cursor.peek() === e ? (this._cursor.advance(), !0) : !1;
    }
    _attemptCharCodeCaseInsensitive(e) {
      return vp(this._cursor.peek(), e) ? (this._cursor.advance(), !0) : !1;
    }
    _requireCharCode(e) {
      let t = this._cursor.clone();
      if (!this._attemptCharCode(e)) throw this._createError(ar(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptStr(e) {
      let t = e.length;
      if (this._cursor.charsLeft() < t) return !1;
      let r = this._cursor.clone();
      for (let n = 0; n < t; n++) if (!this._attemptCharCode(e.charCodeAt(n))) return this._cursor = r, !1;
      return !0;
    }
    _attemptStrCaseInsensitive(e) {
      for (let t = 0; t < e.length; t++) if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
      return !0;
    }
    _requireStr(e) {
      let t = this._cursor.clone();
      if (!this._attemptStr(e)) throw this._createError(ar(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _requireStrCaseInsensitive(e) {
      let t = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(ar(this._cursor.peek()), this._cursor.getSpan(t));
    }
    _attemptCharCodeUntilFn(e) {
      for (; !e(this._cursor.peek()); ) this._cursor.advance();
    }
    _requireCharCodeUntilFn(e, t) {
      let r = this._cursor.clone();
      if (this._attemptCharCodeUntilFn(e), this._cursor.diff(r) < t) throw this._createError(ar(this._cursor.peek()), this._cursor.getSpan(r));
    }
    _attemptUntilChar(e) {
      for (; this._cursor.peek() !== e; ) this._cursor.advance();
    }
    _readChar() {
      let e = String.fromCodePoint(this._cursor.peek());
      return this._cursor.advance(), e;
    }
    _consumeEntity(e) {
      this._beginToken(9);
      let t = this._cursor.clone();
      if (this._cursor.advance(), this._attemptCharCode(35)) {
        let r = this._attemptCharCode(120) || this._attemptCharCode(88), n = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(fp), this._cursor.peek() != 59) {
          this._cursor.advance();
          let o = r ? lo.HEX : lo.DEC;
          throw this._createError(pp(o, this._cursor.getChars(t)), this._cursor.getSpan());
        }
        let a = this._cursor.getChars(n);
        this._cursor.advance();
        try {
          let o = parseInt(a, r ? 16 : 10);
          this._endToken([String.fromCharCode(o), this._cursor.getChars(t)]);
        } catch {
          throw this._createError(Rl(this._cursor.getChars(t)), this._cursor.getSpan());
        }
      } else {
        let r = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(mp), this._cursor.peek() != 59) this._beginToken(e, t), this._cursor = r, this._endToken(["&"]);
        else {
          let n = this._cursor.getChars(r);
          this._cursor.advance();
          let a = la[n];
          if (!a) throw this._createError(Rl(n), this._cursor.getSpan(t));
          this._endToken([a, `&${n};`]);
        }
      }
    }
    _consumeRawText(e, t) {
      this._beginToken(e ? 6 : 7);
      let r = [];
      for (; ; ) {
        let n = this._cursor.clone(), a = t();
        if (this._cursor = n, a) break;
        e && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(r.join(""))]), r.length = 0, this._consumeEntity(6), this._beginToken(6)) : r.push(this._readChar());
      }
      this._endToken([this._processCarriageReturns(r.join(""))]);
    }
    _consumeComment(e) {
      this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr(
        "-->"
      ), this._endToken([]);
    }
    _consumeBogusComment(e) {
      this._beginToken(10, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
    }
    _consumeCdata(e) {
      this._beginToken(12, e), this._endToken([]), this._consumeRawText(!1, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr(
        "]]>"
      ), this._endToken([]);
    }
    _consumeDocType(e) {
      this._beginToken(18, e), this._endToken([]), this._consumeRawText(!1, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
    }
    _consumePrefixAndName() {
      let e = this._cursor.clone(), t = "";
      for (; this._cursor.peek() !== 58 && !hp(this._cursor.peek()); ) this._cursor.advance();
      let r;
      this._cursor.peek() === 58 ? (t = this._cursor.getChars(e), this._cursor.advance(), r = this._cursor.clone()) : r = e, this._requireCharCodeUntilFn(
        Ll,
        t === "" ? 0 : 1
      );
      let n = this._cursor.getChars(r);
      return [t, n];
    }
    _consumeTagOpen(e) {
      let t, r, n, a = [];
      try {
        if (!oa(this._cursor.peek())) throw this._createError(ar(this._cursor.peek()), this._cursor.getSpan(e));
        for (n = this._consumeTagOpenStart(e), r = n.parts[0], t = n.parts[1], this._attemptCharCodeUntilFn(ee); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
          let [s, u] = this._consumeAttributeName();
          if (this._attemptCharCodeUntilFn(ee), this._attemptCharCode(61)) {
            this._attemptCharCodeUntilFn(ee);
            let c = this._consumeAttributeValue();
            a.push({ prefix: s, name: u, value: c });
          } else a.push({ prefix: s, name: u });
          this._attemptCharCodeUntilFn(ee);
        }
        this._consumeTagOpenEnd();
      } catch (s) {
        if (s instanceof so) {
          n ? n.type = 4 : (this._beginToken(5, e), this._endToken(["<"]));
          return;
        }
        throw s;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
      let o = this._getTagContentType(t, r, this._fullNameStack.length > 0, a);
      this._handleFullNameStackForTagOpen(r, t), o === Ve.RAW_TEXT ? this._consumeRawTextWithTagClose(r, t, !1) : o === Ve.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r, t, !0);
    }
    _consumeRawTextWithTagClose(e, t, r) {
      this._consumeRawText(r, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(ee), !this._attemptStrCaseInsensitive(
        e ? `${e}:${t}` : t
      )) ? !1 : (this._attemptCharCodeUntilFn(ee), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn(
        (n) => n === 62,
        3
      ), this._cursor.advance(), this._endToken([e, t]), this._handleFullNameStackForTagClose(e, t);
    }
    _consumeTagOpenStart(e) {
      this._beginToken(0, e);
      let t = this._consumePrefixAndName();
      return this._endToken(t);
    }
    _consumeAttributeName() {
      let e = this._cursor.peek();
      if (e === 39 || e === 34) throw this._createError(ar(e), this._cursor.getSpan());
      this._beginToken(14);
      let t = this._consumePrefixAndName();
      return this._endToken(t), t;
    }
    _consumeAttributeValue() {
      let e;
      if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
        let t = this._cursor.peek();
        this._consumeQuote(t);
        let r = /* @__PURE__ */ l(() => this._cursor.peek() === t, "n");
        e = this._consumeWithInterpolation(16, 17, r, r), this._consumeQuote(t);
      } else {
        let t = /* @__PURE__ */ l(() => Ll(this._cursor.peek()), "r");
        e = this._consumeWithInterpolation(16, 17, t, t);
      }
      return e;
    }
    _consumeQuote(e) {
      this._beginToken(15), this._requireCharCode(e), this._endToken([String.fromCodePoint(e)]);
    }
    _consumeTagOpenEnd() {
      let e = this._attemptCharCode(47) ? 2 : 1;
      this._beginToken(e), this._requireCharCode(62), this._endToken([]);
    }
    _consumeTagClose(e) {
      if (this._beginToken(3, e), this._attemptCharCodeUntilFn(ee), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(
        ee
      ), this._requireCharCode(62), this._endToken([]);
      else {
        let [t, r] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(ee), this._requireCharCode(62), this._endToken([t, r]), this._handleFullNameStackForTagClose(t, r);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
      let e = this._readUntil(44), t = this._processCarriageReturns(e);
      if (this._i18nNormalizeLineEndingsInICUs) this._endToken([t]);
      else {
        let n = this._endToken([e]);
        t !== e && this.nonNormalizedIcuExpressions.push(n);
      }
      this._requireCharCode(44), this._attemptCharCodeUntilFn(ee), this._beginToken(7);
      let r = this._readUntil(44);
      this._endToken([r]), this._requireCharCode(44), this._attemptCharCodeUntilFn(ee);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(21);
      let e = this._readUntil(123).trim();
      this._endToken([e]), this._attemptCharCodeUntilFn(ee), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(
        ee
      ), this._expansionCaseStack.push(22);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(ee), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeWithInterpolation(e, t, r, n) {
      this._beginToken(e);
      let a = [];
      for (; !r(); ) {
        let s = this._cursor.clone();
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(a.join(
          ""
        ))], s), a.length = 0, this._consumeInterpolation(t, s, n), this._beginToken(e)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(a.join(""))]), a.length = 0, this._consumeEntity(e), this._beginToken(e)) : a.push(this._readChar());
      }
      this._inInterpolation = !1;
      let o = this._processCarriageReturns(a.join(""));
      return this._endToken([o]), o;
    }
    _consumeInterpolation(e, t, r) {
      let n = [];
      this._beginToken(e, t), n.push(this._interpolationConfig.start);
      let a = this._cursor.clone(), o = null, s = !1;
      for (; this._cursor.peek() !== 0 && (r === null || !r()); ) {
        let u = this._cursor.clone();
        if (this._isTagStart()) {
          this._cursor = u, n.push(this._getProcessedChars(a, u)), this._endToken(n);
          return;
        }
        if (o === null) if (this._attemptStr(this._interpolationConfig.end)) {
          n.push(this._getProcessedChars(a, u)), n.push(this._interpolationConfig.end), this._endToken(n);
          return;
        } else this._attemptStr("//") && (s = !0);
        let c = this._cursor.peek();
        this._cursor.advance(), c === 92 ? this._cursor.advance() : c === o ? o = null : !s && o === null && ro(c) && (o = c);
      }
      n.push(this._getProcessedChars(a, this._cursor)), this._endToken(n);
    }
    _getProcessedChars(e, t) {
      return this._processCarriageReturns(t.getChars(e));
    }
    _isTextEnd() {
      return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 64 || this._cursor.peek() === 125));
    }
    _isTagStart() {
      if (this._cursor.peek() === 60) {
        let e = this._cursor.clone();
        e.advance();
        let t = e.peek();
        if (97 <= t && t <= 122 || 65 <= t && t <= 90 || t === 47 || t === 33) return !0;
      }
      return !1;
    }
    _isBlockStart() {
      if (this._tokenizeBlocks && this._cursor.peek() === 64) {
        let e = this._cursor.clone();
        if (e.advance(), Tl(e.peek())) return !0;
      }
      return !1;
    }
    _readUntil(e) {
      let t = this._cursor.clone();
      return this._attemptUntilChar(e), this._cursor.getChars(t);
    }
    _isInExpansion() {
      return this._isInExpansionCase() || this._isInExpansionForm();
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== 123) return !1;
      if (this._interpolationConfig) {
        let e = this._cursor.clone(), t = this._attemptStr(this._interpolationConfig.start);
        return this._cursor = e, !t;
      }
      return !0;
    }
    _handleFullNameStackForTagOpen(e, t) {
      let r = In(e, t);
      (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === r) && this._fullNameStack.push(r);
    }
    _handleFullNameStackForTagClose(e, t) {
      let r = In(e, t);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r && this._fullNameStack.pop();
    }
  }, l(As, "Or"), As), l(ee, "b"), l(Ll, "$s"), l(hp, "mo"), l(fp, "fo"), l(mp, "go"), l(gp, "Co"), l(vp, "So"), l(Lu, "Os"), l(Tl, "Ms"), l(Ml, "qs"), l(jg, "_o"), ks = (Tn = class {
    constructor(e, t) {
      if (e instanceof Tn) {
        this.file = e.file, this.input = e.input, this.end = e.end;
        let r = e.state;
        this.state = { peek: r.peek, offset: r.offset, line: r.line, column: r.column };
      } else {
        if (!t) throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = e, this.input = e.content, this.end = t.endPos, this.state = { peek: -1, offset: t.startPos, line: t.startLine, column: t.startCol };
      }
    }
    clone() {
      return new Tn(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(e) {
      return this.state.offset - e.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(e, t) {
      e = e || this;
      let r = e;
      if (t) for (; this.diff(e) > 0 && t.indexOf(e.peek()) !== -1; ) r === e && (e = e.clone()), e.advance();
      let n = this.locationFromCursor(e), a = this.locationFromCursor(this), o = r !== e ? this.locationFromCursor(r) : n;
      return new $(n, a, o);
    }
    getChars(e) {
      return this.input.substring(e.state.offset, this.state.offset);
    }
    charAt(e) {
      return this.input.charCodeAt(e);
    }
    advanceState(e) {
      if (e.offset >= this.end) throw this.state = e, new uo('Unexpected character "EOF"', this);
      let t = this.charAt(e.offset);
      t === 10 ? (e.line++, e.column = 0) : to(t) || e.column++, e.offset++, this.updatePeek(e);
    }
    updatePeek(e) {
      e.peek = e.offset >= this.end ? 0 : this.charAt(e.offset);
    }
    locationFromCursor(e) {
      return new Qo(e.file, e.state.offset, e.state.line, e.state.column);
    }
  }, l(Tn, "t"), Tn), yh = (Mn = class extends ks {
    constructor(e, t) {
      e instanceof Mn ? (super(e), this.internalState = { ...e.internalState }) : (super(e, t), this.internalState = this.state);
    }
    advance() {
      this.state = this.internalState, super.advance(), this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new Mn(this);
    }
    getChars(e) {
      let t = e.clone(), r = "";
      for (; t.internalState.offset < this.internalState.offset; ) r += String.fromCodePoint(t.peek()), t.advance();
      return r;
    }
    processEscapeSequence() {
      let e = /* @__PURE__ */ l(() => this.internalState.peek, "e");
      if (e() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e() === 110) this.state.peek = 10;
      else if (e() === 114) this.state.peek = 13;
      else if (e() === 118) this.state.peek = 11;
      else if (e() === 116) this.state.peek = 9;
      else if (e() === 98) this.state.peek = 8;
      else if (e() === 102) this.state.peek = 12;
      else if (e() === 117) if (this.advanceState(this.internalState), e() === 123) {
        this.advanceState(this.internalState);
        let t = this.clone(), r = 0;
        for (; e() !== 125; ) this.advanceState(this.internalState), r++;
        this.state.peek = this.decodeHexDigits(t, r);
      } else {
        let t = this.clone();
        this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 4);
      }
      else if (e() === 120) {
        this.advanceState(this.internalState);
        let t = this.clone();
        this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(t, 2);
      } else if (Bl(e())) {
        let t = "", r = 0, n = this.clone();
        for (; Bl(e()) && r < 3; ) n = this.clone(), t += String.fromCodePoint(e()), this.advanceState(this.internalState), r++;
        this.state.peek = parseInt(t, 8), this.internalState = n.internalState;
      } else to(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(e, t) {
      let r = this.input.slice(e.internalState.offset, e.internalState.offset + t), n = parseInt(r, 16);
      if (isNaN(n)) throw e.state = e.internalState, new uo("Invalid hexadecimal escape sequence", e);
      return n;
    }
  }, l(Mn, "t"), Mn), uo = (Fs = class {
    constructor(e, t) {
      this.msg = e, this.cursor = t;
    }
  }, l(Fs, "gt"), Fs), fe = (co = class extends Kl {
    static create(e, t, r) {
      return new co(e, t, r);
    }
    constructor(e, t, r) {
      super(t, r), this.elementName = e;
    }
  }, l(co, "t"), co), Eh = (Bs = class {
    constructor(e, t) {
      this.rootNodes = e, this.errors = t;
    }
  }, l(Bs, "Vr"), Bs), Ch = (zs = class {
    constructor(e) {
      this.getTagDefinition = e;
    }
    parse(e, t, r, n = !1, a) {
      let o = /* @__PURE__ */ l((m) => (v, ...g) => m(v.toLowerCase(), ...g), "a"), s = n ? this.getTagDefinition : o(this.getTagDefinition), u = /* @__PURE__ */ l((m) => s(m).getContentType(), "u"), c = n ? a : o(a), d = dp(e, t, a ? (m, v, g, D) => {
        let y = c(m, v, g, D);
        return y !== void 0 ? y : u(m);
      } : u, r), p = r && r.canSelfClose || !1, f = r && r.allowHtmComponentClosingTags || !1, h = new xh(d.tokens, s, p, f, n);
      return h.build(), new Eh(h.rootNodes, d.errors.concat(h.errors));
    }
  }, l(zs, "nr"), zs), xh = (po = class {
    constructor(e, t, r, n, a) {
      this.tokens = e, this.getTagDefinition = t, this.canSelfClose = r, this.allowHtmComponentClosingTags = n, this.isTagNameCaseSensitive = a, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
    }
    build() {
      for (; this._peek.type !== 34; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(
        this._advance()
      )) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
      for (let e of this._containerStack) e instanceof ir && this.errors.push(fe.create(e.name, e.sourceSpan, `Unclosed block "${e.name}"`));
    }
    _advance() {
      let e = this._peek;
      return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e;
    }
    _advanceIf(e) {
      return this._peek.type === e ? this._advance() : null;
    }
    _consumeCdata(e) {
      let t = this._advance(), r = this._getText(t), n = this._advanceIf(13);
      this._addToParent(new ph(r, new $(e.sourceSpan.start, (n || t).sourceSpan.end), [t]));
    }
    _consumeComment(e) {
      let t = this._advanceIf(7), r = this._advanceIf(11), n = t != null ? t.parts[0].trim() : null, a = r == null ? e.sourceSpan : new $(e.sourceSpan.start, r.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new gh(n, a));
    }
    _consumeDocType(e) {
      let t = this._advanceIf(7), r = this._advanceIf(19), n = t != null ? t.parts[0].trim() : null, a = new $(e.sourceSpan.start, (r || t || e).sourceSpan.end);
      this._addToParent(new vh(n, a));
    }
    _consumeExpansion(e) {
      let t = this._advance(), r = this._advance(), n = [];
      for (; this._peek.type === 21; ) {
        let o = this._parseExpansionCase();
        if (!o) return;
        n.push(o);
      }
      if (this._peek.type !== 24) {
        this.errors.push(fe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
        return;
      }
      let a = new $(e.sourceSpan.start, this._peek.sourceSpan.end, e.sourceSpan.fullStart);
      this._addToParent(new hh(t.parts[0], r.parts[0], n, a, t.sourceSpan)), this._advance();
    }
    _parseExpansionCase() {
      let e = this._advance();
      if (this._peek.type !== 22) return this.errors.push(fe.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
      let t = this._advance(), r = this._collectExpansionExpTokens(t);
      if (!r) return null;
      let n = this._advance();
      r.push({ type: 34, parts: [], sourceSpan: n.sourceSpan });
      let a = new po(r, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
      if (a.build(), a.errors.length > 0) return this.errors = this.errors.concat(a.errors), null;
      let o = new $(e.sourceSpan.start, n.sourceSpan.end, e.sourceSpan.fullStart), s = new $(t.sourceSpan.start, n.sourceSpan.end, t.sourceSpan.fullStart);
      return new fh(e.parts[0], a.rootNodes, o, e.sourceSpan, s);
    }
    _collectExpansionExpTokens(e) {
      let t = [], r = [22];
      for (; ; ) {
        if ((this._peek.type === 20 || this._peek.type === 22) && r.push(this._peek.type), this._peek.type === 23) if (Hl(r, 22)) {
          if (r.pop(), r.length === 0) return t;
        } else return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 24) if (Hl(r, 20)) r.pop();
        else return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (this._peek.type === 34) return this.errors.push(fe.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        t.push(this._advance());
      }
    }
    _getText(e) {
      let t = e.parts[0];
      if (t.length > 0 && t[0] == `
`) {
        let r = this._getClosestParentElement();
        r != null && r.children.length == 0 && this.getTagDefinition(r.name).ignoreFirstLf && (t = t.substring(1));
      }
      return t;
    }
    _consumeText(e) {
      let t = [e], r = e.sourceSpan, n = e.parts[0];
      if (n.length > 0 && n[0] === `
`) {
        let a = this._getContainer();
        a != null && a.children.length === 0 && this.getTagDefinition(a.name).ignoreFirstLf && (n = n.substring(1), t[0] = { type: e.type, sourceSpan: e.sourceSpan, parts: [n] });
      }
      for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) e = this._advance(), t.push(e), e.type === 8 ? n += e.parts.join("").replace(/&([^;]+);/g, Ol) : e.type === 9 ? n += e.parts[0] : n += e.parts.join("");
      if (n.length > 0) {
        let a = e.sourceSpan;
        this._addToParent(new dh(n, new $(r.start, a.end, r.fullStart, r.details), t));
      }
    }
    _closeVoidElement() {
      let e = this._getContainer();
      e instanceof yt && this.getTagDefinition(e.name).isVoid && this._containerStack.pop();
    }
    _consumeStartTag(e) {
      let [t, r] = e.parts, n = [];
      for (; this._peek.type === 14; ) n.push(this._consumeAttr(this._advance()));
      let a = this._getElementFullName(t, r, this._getClosestParentElement()), o = !1;
      if (this._peek.type === 2) {
        this._advance(), o = !0;
        let h = this.getTagDefinition(a);
        this.canSelfClose || h.canSelfClose || Gn(a) !== null || h.isVoid || this.errors.push(fe.create(a, e.sourceSpan, `Only void, custom and foreign elements can be self closed "${e.parts[1]}"`));
      } else this._peek.type === 1 && (this._advance(), o = !1);
      let s = this._peek.sourceSpan.fullStart, u = new $(e.sourceSpan.start, s, e.sourceSpan.fullStart), c = new $(e.sourceSpan.start, s, e.sourceSpan.fullStart), d = new $(e.sourceSpan.start.moveBy(1), e.sourceSpan.end), p = new yt(a, n, [], u, c, void 0, d), f = this._getContainer();
      this._pushContainer(p, f instanceof yt && this.getTagDefinition(f.name).isClosedByChild(p.name)), o ? this._popContainer(a, yt, u) : e.type === 4 && (this._popContainer(a, yt, null), this.errors.push(fe.create(a, u, `Opening tag "${a}" not terminated.`)));
    }
    _pushContainer(e, t) {
      t && this._containerStack.pop(), this._addToParent(e), this._containerStack.push(e);
    }
    _consumeEndTag(e) {
      let t = this.allowHtmComponentClosingTags && e.parts.length === 0 ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getClosestParentElement());
      if (t && this.getTagDefinition(t).isVoid) this.errors.push(fe.create(t, e.sourceSpan, `Void elements do not have end tags "${e.parts[1]}"`));
      else if (!this._popContainer(t, yt, e.sourceSpan)) {
        let r = `Unexpected closing tag "${t}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
        this.errors.push(fe.create(t, e.sourceSpan, r));
      }
    }
    _popContainer(e, t, r) {
      let n = !1;
      for (let a = this._containerStack.length - 1; a >= 0; a--) {
        let o = this._containerStack[a];
        if (Gn(o.name) ? o.name === e : (e == null || o.name.toLowerCase() === e.toLowerCase()) && o instanceof t) return o.endSourceSpan = r, o.sourceSpan.end = r !== null ? r.end : o.sourceSpan.end, this._containerStack.splice(a, this._containerStack.length - a), !n;
        (o instanceof ir || o instanceof yt && !this.getTagDefinition(o.name).closedByParent) && (n = !0);
      }
      return !1;
    }
    _consumeAttr(e) {
      let t = In(e.parts[0], e.parts[1]), r = e.sourceSpan.end, n;
      this._peek.type === 15 && (n = this._advance());
      let a = "", o = [], s, u;
      if (this._peek.type === 16) for (s = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
        let d = this._advance();
        o.push(d), d.type === 17 ? a += d.parts.join("").replace(/&([^;]+);/g, Ol) : d.type === 9 ? a += d.parts[0] : a += d.parts.join(""), u = r = d.sourceSpan.end;
      }
      this._peek.type === 15 && (u = r = this._advance().sourceSpan.end);
      let c = s && u && new $(n?.sourceSpan.start ?? s.start, u, n?.sourceSpan.fullStart ?? s.fullStart);
      return new mh(t, a, new $(e.sourceSpan.start, r, e.sourceSpan.fullStart), e.sourceSpan, c, o.length > 0 ? o : void 0, void 0);
    }
    _consumeBlockOpen(e) {
      let t = [];
      for (; this._peek.type === 28; ) {
        let s = this._advance();
        t.push(new ws(s.parts[0], s.sourceSpan));
      }
      this._peek.type === 26 && this._advance();
      let r = this._peek.sourceSpan.fullStart, n = new $(e.sourceSpan.start, r, e.sourceSpan.fullStart), a = new $(e.sourceSpan.start, r, e.sourceSpan.fullStart), o = new ir(e.parts[0], t, [], n, e.sourceSpan, a);
      this._pushContainer(o, !1);
    }
    _consumeBlockClose(e) {
      this._popContainer(null, ir, e.sourceSpan) || this.errors.push(fe.create(null, e.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
    }
    _consumeIncompleteBlock(e) {
      let t = [];
      for (; this._peek.type === 28; ) {
        let s = this._advance();
        t.push(new ws(s.parts[0], s.sourceSpan));
      }
      let r = this._peek.sourceSpan.fullStart, n = new $(e.sourceSpan.start, r, e.sourceSpan.fullStart), a = new $(e.sourceSpan.start, r, e.sourceSpan.fullStart), o = new ir(e.parts[0], t, [], n, e.sourceSpan, a);
      this._pushContainer(o, !1), this._popContainer(null, ir, null), this.errors.push(fe.create(e.parts[0], n, `Incomplete block "${e.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
    }
    _consumeLet(e) {
      let t = e.parts[0], r, n;
      if (this._peek.type !== 31) {
        this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Invalid @let declaration "${t}". Declaration must have a value.`));
        return;
      } else r = this._advance();
      if (this._peek.type !== 32) {
        this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Unterminated @let declaration "${t}". Declaration must be terminated with a semicolon.`));
        return;
      } else n = this._advance();
      let a = n.sourceSpan.fullStart, o = new $(e.sourceSpan.start, a, e.sourceSpan.fullStart), s = e.sourceSpan.toString().lastIndexOf(t), u = e.sourceSpan.start.moveBy(s), c = new $(u, e.sourceSpan.end), d = new Ds(t, r.parts[0], o, c, r.sourceSpan);
      this._addToParent(d);
    }
    _consumeIncompleteLet(e) {
      let t = e.parts[0] ?? "", r = t ? ` "${t}"` : "";
      if (t.length > 0) {
        let n = e.sourceSpan.toString().lastIndexOf(t), a = e.sourceSpan.start.moveBy(n), o = new $(a, e.sourceSpan.end), s = new $(e.sourceSpan.start, e.sourceSpan.start.moveBy(0)), u = new Ds(t, "", e.sourceSpan, o, s);
        this._addToParent(u);
      }
      this.errors.push(fe.create(e.parts[0], e.sourceSpan, `Incomplete @let declaration${r}. @let declarations must be written as \`@let <name> = <value>;\``));
    }
    _getContainer() {
      return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
    }
    _getClosestParentElement() {
      for (let e = this._containerStack.length - 1; e > -1; e--) if (this._containerStack[e] instanceof yt) return this._containerStack[e];
      return null;
    }
    _addToParent(e) {
      let t = this._getContainer();
      t === null ? this.rootNodes.push(e) : t.children.push(e);
    }
    _getElementFullName(e, t, r) {
      if (e === "" && (e = this.getTagDefinition(t).implicitNamespacePrefix || "", e === "" && r != null)) {
        let n = pa(r.name)[1];
        this.getTagDefinition(n).preventNamespaceInheritance || (e = Gn(r.name));
      }
      return In(e, t);
    }
  }, l(po, "t"), po), l(Hl, "zs"), l(Ol, "Gs"), Sh = (_s = class extends Ch {
    constructor() {
      super(Go);
    }
    parse(e, t, r, n = !1, a) {
      return super.parse(e, t, r, n, a);
    }
  }, l(_s, "sr"), _s), ho = null, R4 = /* @__PURE__ */ l(() => (ho || (ho = new Sh()), ho), "Eo"), l(Tu, "zr"), l(wp, "Ao"), L4 = wp, Ur = 3, l(Vg, "Do"), l(bp, "vo"), T4 = bp, Hn = { attrs: !0, children: !0, cases: !0, expression: !0 }, Is = /* @__PURE__ */ new Set(["parent"]), M4 = (lr = class {
    constructor(e = {}) {
      for (let t of /* @__PURE__ */ new Set([...Is, ...Object.keys(e)])) this.setProperty(t, e[t]);
    }
    setProperty(e, t) {
      if (this[e] !== t) {
        if (e in Hn && (t = t.map((r) => this.createChild(r))), !Is.has(e)) {
          this[e] = t;
          return;
        }
        Object.defineProperty(this, e, { value: t, enumerable: !1, configurable: !0 });
      }
    }
    map(e) {
      let t;
      for (let r in Hn) {
        let n = this[r];
        if (n) {
          let a = Dp(n, (o) => o.map(e));
          t !== n && (t || (t = new lr({ parent: this.parent })), t.setProperty(r, a));
        }
      }
      if (t) for (let r in this) r in Hn || (t[r] = this[r]);
      return e(t || this);
    }
    walk(e) {
      for (let t in Hn) {
        let r = this[t];
        if (r) for (let n = 0; n < r.length; n++) r[n].walk(e);
      }
      e(this);
    }
    createChild(e) {
      let t = e instanceof lr ? e.clone() : new lr(e);
      return t.setProperty("parent", this), t;
    }
    insertChildBefore(e, t) {
      this.children.splice(this.children.indexOf(e), 0, this.createChild(t));
    }
    removeChild(e) {
      this.children.splice(this.children.indexOf(e), 1);
    }
    replaceChild(e, t) {
      this.children[this.children.indexOf(e)] = this.createChild(t);
    }
    clone() {
      return new lr(this);
    }
    get firstChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[0];
    }
    get lastChild() {
      var e;
      return (e = this.children) == null ? void 0 : e[this.children.length - 1];
    }
    get prev() {
      var e, t;
      return (t = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : t[this.parent.children.indexOf(this) - 1];
    }
    get next() {
      var e, t;
      return (t = (e = this.parent) == null ? void 0 : e.children) == null ? void 0 : t[this.parent.children.indexOf(this) + 1];
    }
    get rawName() {
      return this.hasExplicitNamespace ? this.fullName : this.name;
    }
    get fullName() {
      return this.namespace ? this.namespace + ":" + this.name : this.name;
    }
    get attrMap() {
      return Object.fromEntries(this.attrs.map((e) => [e.fullName, e.value]));
    }
  }, l(lr, "t"), lr), l(Dp, "yo"), H4 = [{ regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: yp }, { regex: /^\[if([^\]]*)\]><!$/u, parse: Ep }, {
    regex: /^<!\s*\[endif\]$/u,
    parse: Cp
  }], l(qg, "Qs"), l(yp, "bo"), l(Ep, "To"), l(Cp, "xo"), So = /* @__PURE__ */ new Map([
    ["*", /* @__PURE__ */ new Set([
      "accesskey",
      "autocapitalize",
      "autofocus",
      "class",
      "contenteditable",
      "dir",
      "draggable",
      "enterkeyhint",
      "hidden",
      "id",
      "inert",
      "inputmode",
      "is",
      "itemid",
      "itemprop",
      "itemref",
      "itemscope",
      "itemtype",
      "lang",
      "nonce",
      "popover",
      "slot",
      "spellcheck",
      "style",
      "tabindex",
      "title",
      "translate",
      "writingsuggestions"
    ])],
    ["a", /* @__PURE__ */ new Set(
      ["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"]
    )],
    ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])],
    ["area", /* @__PURE__ */ new Set([
      "alt",
      "coords",
      "download",
      "href",
      "hreflang",
      "nohref",
      "ping",
      "referrerpolicy",
      "rel",
      "shape",
      "target",
      "type"
    ])],
    ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])],
    ["base", /* @__PURE__ */ new Set(
      ["href", "target"]
    )],
    ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])],
    ["blockquote", /* @__PURE__ */ new Set(["cite"])],
    ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])],
    ["br", /* @__PURE__ */ new Set(["clear"])],
    ["button", /* @__PURE__ */ new Set([
      "disabled",
      "form",
      "formaction",
      "formenctype",
      "formmethod",
      "formnovalidate",
      "formtarget",
      "name",
      "popovertarget",
      "popovertargetaction",
      "type",
      "value"
    ])],
    ["canvas", /* @__PURE__ */ new Set(["height", "width"])],
    ["caption", /* @__PURE__ */ new Set(
      ["align"]
    )],
    ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])],
    ["colgroup", /* @__PURE__ */ new Set(
      ["align", "char", "charoff", "span", "valign", "width"]
    )],
    ["data", /* @__PURE__ */ new Set(["value"])],
    ["del", /* @__PURE__ */ new Set([
      "cite",
      "datetime"
    ])],
    ["details", /* @__PURE__ */ new Set(["name", "open"])],
    ["dialog", /* @__PURE__ */ new Set(["open"])],
    ["dir", /* @__PURE__ */ new Set(
      ["compact"]
    )],
    ["div", /* @__PURE__ */ new Set(["align"])],
    ["dl", /* @__PURE__ */ new Set(["compact"])],
    ["embed", /* @__PURE__ */ new Set(
      ["height", "src", "type", "width"]
    )],
    ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])],
    ["font", /* @__PURE__ */ new Set(
      ["color", "face", "size"]
    )],
    ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])],
    ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])],
    ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])],
    ["h1", /* @__PURE__ */ new Set(["align"])],
    ["h2", /* @__PURE__ */ new Set(
      ["align"]
    )],
    ["h3", /* @__PURE__ */ new Set(["align"])],
    ["h4", /* @__PURE__ */ new Set(["align"])],
    ["h5", /* @__PURE__ */ new Set(["align"])],
    ["h6", /* @__PURE__ */ new Set(["align"])],
    ["head", /* @__PURE__ */ new Set(["profile"])],
    ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])],
    ["html", /* @__PURE__ */ new Set(["manifest", "version"])],
    ["iframe", /* @__PURE__ */ new Set([
      "align",
      "allow",
      "allowfullscreen",
      "allowpaymentrequest",
      "allowusermedia",
      "frameborder",
      "height",
      "loading",
      "longdesc",
      "marginheight",
      "marginwidth",
      "name",
      "referrerpolicy",
      "sandbox",
      "scrolling",
      "src",
      "srcdoc",
      "width"
    ])],
    ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])],
    ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])],
    ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])],
    ["isindex", /* @__PURE__ */ new Set(
      ["prompt"]
    )],
    ["label", /* @__PURE__ */ new Set(["for", "form"])],
    ["legend", /* @__PURE__ */ new Set(["align"])],
    ["li", /* @__PURE__ */ new Set(
      ["type", "value"]
    )],
    ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])],
    ["map", /* @__PURE__ */ new Set(
      ["name"]
    )],
    ["menu", /* @__PURE__ */ new Set(["compact"])],
    ["meta", /* @__PURE__ */ new Set([
      "charset",
      "content",
      "http-equiv",
      "media",
      "name",
      "scheme"
    ])],
    ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])],
    ["object", /* @__PURE__ */ new Set(
      [
        "align",
        "archive",
        "border",
        "classid",
        "codebase",
        "codetype",
        "data",
        "declare",
        "form",
        "height",
        "hspace",
        "name",
        "standby",
        "type",
        "typemustmatch",
        "usemap",
        "vspace",
        "width"
      ]
    )],
    ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])],
    ["optgroup", /* @__PURE__ */ new Set(
      ["disabled", "label"]
    )],
    ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])],
    ["output", /* @__PURE__ */ new Set(
      ["for", "form", "name"]
    )],
    ["p", /* @__PURE__ */ new Set(["align"])],
    ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])],
    ["pre", /* @__PURE__ */ new Set(["width"])],
    ["progress", /* @__PURE__ */ new Set(["max", "value"])],
    ["q", /* @__PURE__ */ new Set(
      ["cite"]
    )],
    ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])],
    ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])],
    ["slot", /* @__PURE__ */ new Set(["name"])],
    ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])],
    ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])],
    ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])],
    ["tbody", /* @__PURE__ */ new Set([
      "align",
      "char",
      "charoff",
      "valign"
    ])],
    ["td", /* @__PURE__ */ new Set([
      "abbr",
      "align",
      "axis",
      "bgcolor",
      "char",
      "charoff",
      "colspan",
      "headers",
      "height",
      "nowrap",
      "rowspan",
      "scope",
      "valign",
      "width"
    ])],
    ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootmode"])],
    ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])],
    ["tfoot", /* @__PURE__ */ new Set([
      "align",
      "char",
      "charoff",
      "valign"
    ])],
    ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])],
    ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])],
    ["time", /* @__PURE__ */ new Set(
      ["datetime"]
    )],
    ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])],
    ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])],
    ["ul", /* @__PURE__ */ new Set(["compact", "type"])],
    ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]
  ]), O4 = /* @__PURE__ */ new Set(
    [
      "a",
      "abbr",
      "acronym",
      "address",
      "applet",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "basefont",
      "bdi",
      "bdo",
      "bgsound",
      "big",
      "blink",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "center",
      "cite",
      "code",
      "col",
      "colgroup",
      "command",
      "content",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "dir",
      "div",
      "dl",
      "dt",
      "element",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "font",
      "footer",
      "form",
      "frame",
      "frameset",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "image",
      "img",
      "input",
      "ins",
      "isindex",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "listing",
      "main",
      "map",
      "mark",
      "marquee",
      "math",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "multicol",
      "nav",
      "nextid",
      "nobr",
      "noembed",
      "noframes",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "plaintext",
      "pre",
      "progress",
      "q",
      "rb",
      "rbc",
      "rp",
      "rt",
      "rtc",
      "ruby",
      "s",
      "samp",
      "script",
      "search",
      "section",
      "select",
      "shadow",
      "slot",
      "small",
      "source",
      "spacer",
      "span",
      "strike",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "svg",
      "table",
      "tbody",
      "td",
      "template",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "tt",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "xmp"
    ]
  ), l(Wg, "ko"), l(Ug, "Bo"), l(Gg, "Lo"), l(_c, "Zs"), l(Zg, "Fo"), l(Mu, "Js"), l(Ic, "ei"), l(Rn, "ur"), Pu = { name: "html", normalizeTagName: !0, normalizeAttributeName: !0, allowHtmComponentClosingTags: !0 }, Ah = Rn(Pu), kh = Rn({ name: "angular" }), Fh = Rn({ name: "vue", isTagNameCaseSensitive: !0, shouldParseAsRawText(e, t, r, n) {
    return e.toLowerCase() !== "html" && !r && (e !== "template" || n.some(({ name: a, value: o }) => a === "lang" && o !== "html" && o !== "" && o !== void 0));
  } }), Bh = Rn({ name: "lwc", canSelfClose: !1 }), zh = { html: Yp }, N4 = jl;
});
function Et() {
}
function _h(e, t, r, n, a) {
  for (var o = [], s; t; ) o.push(t), s = t.previousComponent, delete t.previousComponent, t = s;
  o.reverse();
  for (var u = 0, c = o.length, d = 0, p = 0; u < c; u++) {
    var f = o[u];
    if (f.removed) {
      if (f.value = e.join(n.slice(p, p + f.count)), p += f.count, u && o[u - 1].added) {
        var h = o[u - 1];
        o[u - 1] = o[u], o[u] = h;
      }
    } else {
      if (!f.added && a) {
        var m = r.slice(d, d + f.count);
        m = m.map(function(g, D) {
          var y = n[p + D];
          return y.length > g.length ? y : g;
        }), f.value = e.join(m);
      } else f.value = e.join(r.slice(d, d + f.count));
      d += f.count, f.added || (p += f.count);
    }
  }
  var v = o[c - 1];
  return c > 1 && typeof v.value == "string" && (v.added || v.removed) && e.equals("", v.value) && (o[c - 2].value += v.value, o.pop()), o;
}
function sa(e) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? sa = /* @__PURE__ */ l(function(t) {
    return typeof t;
  }, "$e") : sa = /* @__PURE__ */ l(function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, "$e"), sa(e);
}
function ei(e, t, r, n, a) {
  t = t || [], r = r || [], n && (e = n(a, e));
  var o;
  for (o = 0; o < t.length; o += 1) if (t[o] === e) return r[o];
  var s;
  if (Bv.call(e) === "[object Array]") {
    for (t.push(e), s = new Array(e.length), r.push(s), o = 0; o < e.length; o += 1) s[o] = ei(e[o], t, r, n, a);
    return t.pop(), r.pop(), s;
  }
  if (e && e.toJSON && (e = e.toJSON()), sa(e) === "object" && e !== null) {
    t.push(e), s = {}, r.push(s);
    var u = [], c;
    for (c in e) e.hasOwnProperty(c) && u.push(c);
    for (u.sort(), o = 0; o < u.length; o += 1) c = u[o], s[c] = ei(e[c], t, r, n, c);
    t.pop(), r.pop();
  } else s = e;
  return s;
}
function P4(e, t, r) {
  return Kn.diff(e, t, r);
}
function $4(e) {
  let t = e.indexOf("\r");
  return t >= 0 ? e.charAt(t + 1) === `
` ? "crlf" : "cr" : "lf";
}
function $i(e) {
  switch (e) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Pc(e, t) {
  let r;
  switch (t) {
    case `
`:
      r = /\n/gu;
      break;
    case "\r":
      r = /\r/gu;
      break;
    case `\r
`:
      r = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t)}.`);
  }
  let n = e.match(r);
  return n ? n.length : 0;
}
function j4(e) {
  return Ma(!1, e, /\r\n?/gu, `
`);
}
function Ih(e) {
  if (typeof e == "string") return Zt;
  if (Array.isArray(e)) return pt;
  if (!e) return;
  let { type: t } = e;
  if (Jc.has(t)) return t;
}
function Rh(e) {
  let t = e === null ? "null" : typeof e;
  if (t !== "string" && t !== "object") return `Unexpected doc '${t}', 
Expected it to be 'string' or 'object'.`;
  if (Yt(e)) throw new Error("doc is valid.");
  let r = Object.prototype.toString.call(e);
  if (r !== "[object Object]") return `Unexpected doc '${r}'.`;
  let n = zv([...Jc].map((a) => `'${a}'`));
  return `Unexpected doc.type '${e.type}'.
Expected it to be ${n}.`;
}
function Lh(e, t, r, n) {
  let a = [e];
  for (; a.length > 0; ) {
    let o = a.pop();
    if (o === s0) {
      r(a.pop());
      continue;
    }
    r && a.push(o, s0);
    let s = Yt(o);
    if (!s) throw new br(o);
    if (t?.(o) !== !1) switch (s) {
      case pt:
      case Ue: {
        let u = s === pt ? o : o.parts;
        for (let c = u.length, d = c - 1; d >= 0; --d) a.push(u[d]);
        break;
      }
      case Ce:
        a.push(o.flatContents, o.breakContents);
        break;
      case ye:
        if (n && o.expandedStates) for (let u = o.expandedStates.length, c = u - 1; c >= 0; --c) a.push(o.expandedStates[c]);
        else a.push(o.contents);
        break;
      case ft:
      case ht:
      case mt:
      case Ge:
      case gt:
        a.push(o.contents);
        break;
      case Zt:
      case Ot:
      case ut:
      case ct:
      case le:
      case Be:
        break;
      default:
        throw new br(o);
    }
  }
}
function wa(e) {
  return Ze(e), { type: ht, contents: e };
}
function wr(e, t) {
  return Ze(t), { type: ft, contents: t, n: e };
}
function $u(e, t = {}) {
  return Ze(e), qi(t.expandedStates, !0), { type: ye, id: t.id, contents: e, break: !!t.shouldBreak, expandedStates: t.expandedStates };
}
function Th(e) {
  return wr(Number.NEGATIVE_INFINITY, e);
}
function Mh(e) {
  return wr({ type: "root" }, e);
}
function Hh(e) {
  return wr(-1, e);
}
function Oh(e, t) {
  return $u(e[0], { ...t, expandedStates: e });
}
function ju(e) {
  return qi(e), { type: Ue, parts: e };
}
function Nh(e, t = "", r = {}) {
  return Ze(e), t !== "" && Ze(t), { type: Ce, breakContents: e, flatContents: t, groupId: r.groupId };
}
function Ph(e, t) {
  return Ze(e), { type: mt, contents: e, groupId: t.groupId, negate: t.negate };
}
function ti(e) {
  return Ze(e), { type: gt, contents: e };
}
function Vu(e, t) {
  Ze(e), qi(t);
  let r = [];
  for (let n = 0; n < t.length; n++) n !== 0 && r.push(e), r.push(t[n]);
  return r;
}
function qu(e, t, r) {
  Ze(e);
  let n = e;
  if (t > 0) {
    for (let a = 0; a < Math.floor(t / r); ++a) n = wa(n);
    n = wr(t % r, n), n = wr(Number.NEGATIVE_INFINITY, n);
  }
  return n;
}
function $h(e, t) {
  return Ze(t), e ? { type: Ge, label: e, contents: t } : t;
}
function it(e) {
  var t;
  if (!e) return "";
  if (Array.isArray(e)) {
    let r = [];
    for (let n of e) if (Array.isArray(n)) r.push(...it(n));
    else {
      let a = it(n);
      a !== "" && r.push(a);
    }
    return r;
  }
  return e.type === Ce ? { ...e, breakContents: it(e.breakContents), flatContents: it(e.flatContents) } : e.type === ye ? { ...e, contents: it(
    e.contents
  ), expandedStates: (t = e.expandedStates) == null ? void 0 : t.map(it) } : e.type === Ue ? { type: "fill", parts: e.parts.map(it) } : e.contents ? { ...e, contents: it(e.contents) } : e;
}
function V4(e) {
  let t = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ new Set();
  return n(it(e));
  function n(o, s, u) {
    var c, d;
    if (typeof o == "string") return JSON.stringify(o);
    if (Array.isArray(o)) {
      let p = o.map(n).filter(Boolean);
      return p.length === 1 ? p[0] : `[${p.join(", ")}]`;
    }
    if (o.type === le) {
      let p = ((c = u?.[s + 1]) == null ? void 0 : c.type) === Be;
      return o.literal ? p ? "literalline" : "literallineWithoutBreakParent" : o.hard ? p ? "hardline" : "hardlineWithoutBreakParent" : o.soft ? "softline" : "line";
    }
    if (o.type === Be) return ((d = u?.[s - 1]) == null ? void 0 : d.type) === le && u[s - 1].hard ? void 0 : "breakParent";
    if (o.type === ut) return "trim";
    if (o.type === ht) return "indent(" + n(o.contents) + ")";
    if (o.type === ft) return o.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n(o.contents) + ")" : o.n < 0 ? "dedent(" + n(o.contents) + ")" : o.n.type === "root" ? "markAsRoot(" + n(o.contents) + ")" : "align(" + JSON.stringify(o.n) + ", " + n(o.contents) + ")";
    if (o.type === Ce) return "ifBreak(" + n(o.breakContents) + (o.flatContents ? ", " + n(o.flatContents) : "") + (o.groupId ? (o.flatContents ? "" : ', ""') + `, { groupId: ${a(o.groupId)} }` : "") + ")";
    if (o.type === mt) {
      let p = [];
      o.negate && p.push("negate: true"), o.groupId && p.push(`groupId: ${a(o.groupId)}`);
      let f = p.length > 0 ? `, { ${p.join(", ")} }` : "";
      return `indentIfBreak(${n(o.contents)}${f})`;
    }
    if (o.type === ye) {
      let p = [];
      o.break && o.break !== "propagated" && p.push("shouldBreak: true"), o.id && p.push(`id: ${a(o.id)}`);
      let f = p.length > 0 ? `, { ${p.join(", ")} }` : "";
      return o.expandedStates ? `conditionalGroup([${o.expandedStates.map((h) => n(h)).join(",")}]${f})` : `group(${n(o.contents)}${f})`;
    }
    if (o.type === Ue) return `fill([${o.parts.map((p) => n(p)).join(", ")}])`;
    if (o.type === gt) return "lineSuffix(" + n(o.contents) + ")";
    if (o.type === ct) return "lineSuffixBoundary";
    if (o.type === Ge) return `label(${JSON.stringify(o.label)}, ${n(o.contents)})`;
    throw new Error("Unknown doc type " + o.type);
  }
  function a(o) {
    if (typeof o != "symbol") return JSON.stringify(String(o));
    if (o in t) return t[o];
    let s = o.description || "symbol";
    for (let u = 0; ; u++) {
      let c = s + (u > 0 ? ` #${u}` : "");
      if (!r.has(c)) return r.add(c), t[o] = `Symbol.for(${JSON.stringify(c)})`;
    }
  }
}
function jh(e) {
  return e === 12288 || e >= 65281 && e <= 65376 || e >= 65504 && e <= 65510;
}
function Vh(e) {
  return e >= 4352 && e <= 4447 || e === 8986 || e === 8987 || e === 9001 || e === 9002 || e >= 9193 && e <= 9196 || e === 9200 || e === 9203 || e === 9725 || e === 9726 || e === 9748 || e === 9749 || e >= 9800 && e <= 9811 || e === 9855 || e === 9875 || e === 9889 || e === 9898 || e === 9899 || e === 9917 || e === 9918 || e === 9924 || e === 9925 || e === 9934 || e === 9940 || e === 9962 || e === 9970 || e === 9971 || e === 9973 || e === 9978 || e === 9981 || e === 9989 || e === 9994 || e === 9995 || e === 10024 || e === 10060 || e === 10062 || e >= 10067 && e <= 10069 || e === 10071 || e >= 10133 && e <= 10135 || e === 10160 || e === 10175 || e === 11035 || e === 11036 || e === 11088 || e === 11093 || e >= 11904 && e <= 11929 || e >= 11931 && e <= 12019 || e >= 12032 && e <= 12245 || e >= 12272 && e <= 12287 || e >= 12289 && e <= 12350 || e >= 12353 && e <= 12438 || e >= 12441 && e <= 12543 || e >= 12549 && e <= 12591 || e >= 12593 && e <= 12686 || e >= 12688 && e <= 12771 || e >= 12783 && e <= 12830 || e >= 12832 && e <= 12871 || e >= 12880 && e <= 19903 || e >= 19968 && e <= 42124 || e >= 42128 && e <= 42182 || e >= 43360 && e <= 43388 || e >= 44032 && e <= 55203 || e >= 63744 && e <= 64255 || e >= 65040 && e <= 65049 || e >= 65072 && e <= 65106 || e >= 65108 && e <= 65126 || e >= 65128 && e <= 65131 || e >= 94176 && e <= 94180 || e === 94192 || e === 94193 || e >= 94208 && e <= 100343 || e >= 100352 && e <= 101589 || e >= 101632 && e <= 101640 || e >= 110576 && e <= 110579 || e >= 110581 && e <= 110587 || e === 110589 || e === 110590 || e >= 110592 && e <= 110882 || e === 110898 || e >= 110928 && e <= 110930 || e === 110933 || e >= 110948 && e <= 110951 || e >= 110960 && e <= 111355 || e === 126980 || e === 127183 || e === 127374 || e >= 127377 && e <= 127386 || e >= 127488 && e <= 127490 || e >= 127504 && e <= 127547 || e >= 127552 && e <= 127560 || e === 127568 || e === 127569 || e >= 127584 && e <= 127589 || e >= 127744 && e <= 127776 || e >= 127789 && e <= 127797 || e >= 127799 && e <= 127868 || e >= 127870 && e <= 127891 || e >= 127904 && e <= 127946 || e >= 127951 && e <= 127955 || e >= 127968 && e <= 127984 || e === 127988 || e >= 127992 && e <= 128062 || e === 128064 || e >= 128066 && e <= 128252 || e >= 128255 && e <= 128317 || e >= 128331 && e <= 128334 || e >= 128336 && e <= 128359 || e === 128378 || e === 128405 || e === 128406 || e === 128420 || e >= 128507 && e <= 128591 || e >= 128640 && e <= 128709 || e === 128716 || e >= 128720 && e <= 128722 || e >= 128725 && e <= 128727 || e >= 128732 && e <= 128735 || e === 128747 || e === 128748 || e >= 128756 && e <= 128764 || e >= 128992 && e <= 129003 || e === 129008 || e >= 129292 && e <= 129338 || e >= 129340 && e <= 129349 || e >= 129351 && e <= 129535 || e >= 129648 && e <= 129660 || e >= 129664 && e <= 129672 || e >= 129680 && e <= 129725 || e >= 129727 && e <= 129733 || e >= 129742 && e <= 129755 || e >= 129760 && e <= 129768 || e >= 129776 && e <= 129784 || e >= 131072 && e <= 196605 || e >= 196608 && e <= 262141;
}
function qh(e) {
  if (!e) return 0;
  if (!Rv.test(e)) return e.length;
  e = e.replace(_v(), "  ");
  let t = 0;
  for (let r of e) {
    let n = r.codePointAt(0);
    n <= 31 || n >= 127 && n <= 159 || n >= 768 && n <= 879 || (t += Iv(n) ? 1 : 2);
  }
  return t;
}
function ba(e, t) {
  if (typeof e == "string") return t(e);
  let r = /* @__PURE__ */ new Map();
  return n(e);
  function n(o) {
    if (r.has(o)) return r.get(o);
    let s = a(o);
    return r.set(o, s), s;
  }
  function a(o) {
    switch (Yt(o)) {
      case pt:
        return t(o.map(n));
      case Ue:
        return t({ ...o, parts: o.parts.map(n) });
      case Ce:
        return t({ ...o, breakContents: n(o.breakContents), flatContents: n(o.flatContents) });
      case ye: {
        let { expandedStates: s, contents: u } = o;
        return s ? (s = s.map(n), u = s[0]) : u = n(u), t({ ...o, contents: u, expandedStates: s });
      }
      case ft:
      case ht:
      case mt:
      case Ge:
      case gt:
        return t({ ...o, contents: n(o.contents) });
      case Zt:
      case Ot:
      case ut:
      case ct:
      case le:
      case Be:
        return t(o);
      default:
        throw new br(o);
    }
  }
}
function ri(e, t, r) {
  let n = r, a = !1;
  function o(s) {
    if (a) return !1;
    let u = t(s);
    u !== void 0 && (a = !0, n = u);
  }
  return l(o, "u"), ii(e, o), n;
}
function q4(e) {
  if (e.type === ye && e.break || e.type === le && e.hard || e.type === Be) return !0;
}
function Wh(e) {
  return ri(e, q4, !1);
}
function Wu(e) {
  if (e.length > 0) {
    let t = ne(!1, e, -1);
    !t.expandedStates && !t.break && (t.break = "propagated");
  }
  return null;
}
function W4(e) {
  let t = /* @__PURE__ */ new Set(), r = [];
  function n(o) {
    if (o.type === Be && Wu(r), o.type === ye) {
      if (r.push(o), t.has(o)) return !1;
      t.add(o);
    }
  }
  l(n, "n");
  function a(o) {
    o.type === ye && r.pop().break && Wu(r);
  }
  l(a, "o"), ii(e, n, a, !0);
}
function U4(e) {
  return e.type === le && !e.hard ? e.soft ? "" : " " : e.type === Ce ? e.flatContents : e;
}
function Uh(e) {
  return ba(e, U4);
}
function Uu(e) {
  for (e = [...e]; e.length >= 2 && ne(!1, e, -2).type === le && ne(!1, e, -1).type === Be; ) e.length -= 2;
  if (e.length > 0) {
    let t = en(ne(!1, e, -1));
    e[e.length - 1] = t;
  }
  return e;
}
function en(e) {
  switch (Yt(e)) {
    case ht:
    case mt:
    case ye:
    case gt:
    case Ge: {
      let t = en(e.contents);
      return { ...e, contents: t };
    }
    case Ce:
      return { ...e, breakContents: en(e.breakContents), flatContents: en(e.flatContents) };
    case Ue:
      return { ...e, parts: Uu(e.parts) };
    case pt:
      return Uu(e);
    case Zt:
      return e.replace(/[\n\r]*$/u, "");
    case ft:
    case Ot:
    case ut:
    case ct:
    case le:
    case Be:
      break;
    default:
      throw new br(e);
  }
  return e;
}
function Gu(e) {
  return en(Z4(e));
}
function G4(e) {
  switch (Yt(e)) {
    case Ue:
      if (e.parts.every((t) => t === "")) return "";
      break;
    case ye:
      if (!e.contents && !e.id && !e.break && !e.expandedStates) return "";
      if (e.contents.type === ye && e.contents.id === e.id && e.contents.break === e.break && e.contents.expandedStates === e.expandedStates)
        return e.contents;
      break;
    case ft:
    case ht:
    case mt:
    case gt:
      if (!e.contents) return "";
      break;
    case Ce:
      if (!e.flatContents && !e.breakContents) return "";
      break;
    case pt: {
      let t = [];
      for (let r of e) {
        if (!r) continue;
        let [n, ...a] = Array.isArray(r) ? r : [r];
        typeof n == "string" && typeof ne(!1, t, -1) == "string" ? t[t.length - 1] += n : t.push(n), t.push(...a);
      }
      return t.length === 0 ? "" : t.length === 1 ? t[0] : t;
    }
    case Zt:
    case Ot:
    case ut:
    case ct:
    case le:
    case Ge:
    case Be:
      break;
    default:
      throw new br(e);
  }
  return e;
}
function Z4(e) {
  return ba(e, (t) => G4(t));
}
function Gh(e, t = c0) {
  return ba(e, (r) => typeof r == "string" ? Vu(t, r.split(`
`)) : r);
}
function Y4(e) {
  if (e.type === le) return !0;
}
function Zh(e) {
  return ri(e, Y4, !1);
}
function $c(e, t) {
  return e.type === Ge ? { ...e, contents: t(e.contents) } : t(e);
}
function jc() {
  return { value: "", length: 0, queue: [] };
}
function X4(e, t) {
  return ni(e, { type: "indent" }, t);
}
function K4(e, t, r) {
  return t === Number.NEGATIVE_INFINITY ? e.root || jc() : t < 0 ? ni(e, { type: "dedent" }, r) : t ? t.type === "root" ? { ...e, root: e } : ni(e, { type: typeof t == "string" ? "stringAlign" : "numberAlign", n: t }, r) : e;
}
function ni(e, t, r) {
  let n = t.type === "dedent" ? e.queue.slice(0, -1) : [...e.queue, t], a = "", o = 0, s = 0, u = 0;
  for (let v of n) switch (v.type) {
    case "indent":
      p(), r.useTabs ? c(1) : d(r.tabWidth);
      break;
    case "stringAlign":
      p(), a += v.n, o += v.n.length;
      break;
    case "numberAlign":
      s += 1, u += v.n;
      break;
    default:
      throw new Error(`Unexpected type '${v.type}'`);
  }
  return h(), { ...e, value: a, length: o, queue: n };
  function c(v) {
    a += "	".repeat(v), o += r.tabWidth * v;
  }
  function d(v) {
    a += " ".repeat(v), o += v;
  }
  function p() {
    r.useTabs ? f() : h();
  }
  function f() {
    s > 0 && c(s), m();
  }
  function h() {
    u > 0 && d(u), m();
  }
  function m() {
    s = 0, u = 0;
  }
}
function ai(e) {
  let t = 0, r = 0, n = e.length;
  e: for (; n--; ) {
    let a = e[n];
    if (a === tn) {
      r++;
      continue;
    }
    for (let o = a.length - 1; o >= 0; o--) {
      let s = a[o];
      if (s === " " || s === "	") t++;
      else {
        e[n] = a.slice(0, o + 1);
        break e;
      }
    }
  }
  if (t > 0 || r > 0) for (e.length = n + 1; r-- > 0; ) e.push(tn);
  return t;
}
function Xn(e, t, r, n, a, o) {
  if (r === Number.POSITIVE_INFINITY) return !0;
  let s = t.length, u = [e], c = [];
  for (; r >= 0; ) {
    if (u.length === 0) {
      if (s === 0) return !0;
      u.push(t[--s]);
      continue;
    }
    let { mode: d, doc: p } = u.pop(), f = Yt(p);
    switch (f) {
      case Zt:
        c.push(p), r -= si(p);
        break;
      case pt:
      case Ue: {
        let h = f === pt ? p : p.parts;
        for (let m = h.length - 1; m >= 0; m--) u.push({ mode: d, doc: h[m] });
        break;
      }
      case ht:
      case ft:
      case mt:
      case Ge:
        u.push({ mode: d, doc: p.contents });
        break;
      case ut:
        r += ai(c);
        break;
      case ye: {
        if (o && p.break) return !1;
        let h = p.break ? we : d, m = p.expandedStates && h === we ? ne(!1, p.expandedStates, -1) : p.contents;
        u.push({ mode: h, doc: m });
        break;
      }
      case Ce: {
        let h = (p.groupId ? a[p.groupId] || $e : d) === we ? p.breakContents : p.flatContents;
        h && u.push({ mode: d, doc: h });
        break;
      }
      case le:
        if (d === we || p.hard) return !0;
        p.soft || (c.push(" "), r--);
        break;
      case gt:
        n = !0;
        break;
      case ct:
        if (n) return !1;
        break;
    }
  }
  return !1;
}
function Da(e, t) {
  let r = {}, n = t.printWidth, a = $i(t.endOfLine), o = 0, s = [{ ind: jc(), mode: we, doc: e }], u = [], c = !1, d = [], p = 0;
  for (W4(e); s.length > 0; ) {
    let { ind: h, mode: m, doc: v } = s.pop();
    switch (Yt(v)) {
      case Zt: {
        let g = a !== `
` ? Ma(!1, v, `
`, a) : v;
        u.push(g), s.length > 0 && (o += si(g));
        break;
      }
      case pt:
        for (let g = v.length - 1; g >= 0; g--) s.push({ ind: h, mode: m, doc: v[g] });
        break;
      case Ot:
        if (p >= 2) throw new Error("There are too many 'cursor' in doc.");
        u.push(tn), p++;
        break;
      case ht:
        s.push({ ind: X4(h, t), mode: m, doc: v.contents });
        break;
      case ft:
        s.push({ ind: K4(h, v.n, t), mode: m, doc: v.contents });
        break;
      case ut:
        o -= ai(u);
        break;
      case ye:
        switch (m) {
          case $e:
            if (!c) {
              s.push({ ind: h, mode: v.break ? we : $e, doc: v.contents });
              break;
            }
          case we: {
            c = !1;
            let g = { ind: h, mode: $e, doc: v.contents }, D = n - o, y = d.length > 0;
            if (!v.break && Xn(g, s, D, y, r)) s.push(g);
            else if (v.expandedStates) {
              let E = ne(!1, v.expandedStates, -1);
              if (v.break) {
                s.push({ ind: h, mode: we, doc: E });
                break;
              } else for (let w = 1; w < v.expandedStates.length + 1; w++) if (w >= v.expandedStates.length) {
                s.push({ ind: h, mode: we, doc: E });
                break;
              } else {
                let b = v.expandedStates[w], C = { ind: h, mode: $e, doc: b };
                if (Xn(C, s, D, y, r)) {
                  s.push(C);
                  break;
                }
              }
            } else s.push({ ind: h, mode: we, doc: v.contents });
            break;
          }
        }
        v.id && (r[v.id] = ne(!1, s, -1).mode);
        break;
      case Ue: {
        let g = n - o, { parts: D } = v;
        if (D.length === 0) break;
        let [y, E] = D, w = { ind: h, mode: $e, doc: y }, b = { ind: h, mode: we, doc: y }, C = Xn(w, [], g, d.length > 0, r, !0);
        if (D.length === 1) {
          C ? s.push(w) : s.push(b);
          break;
        }
        let S = { ind: h, mode: $e, doc: E }, A = { ind: h, mode: we, doc: E };
        if (D.length === 2) {
          C ? s.push(S, w) : s.push(A, b);
          break;
        }
        D.splice(0, 2);
        let x = { ind: h, mode: m, doc: ju(D) }, F = D[0];
        Xn({ ind: h, mode: $e, doc: [y, E, F] }, [], g, d.length > 0, r, !0) ? s.push(x, S, w) : C ? s.push(x, A, w) : s.push(x, A, b);
        break;
      }
      case Ce:
      case mt: {
        let g = v.groupId ? r[v.groupId] : m;
        if (g === we) {
          let D = v.type === Ce ? v.breakContents : v.negate ? v.contents : wa(v.contents);
          D && s.push({ ind: h, mode: m, doc: D });
        }
        if (g === $e) {
          let D = v.type === Ce ? v.flatContents : v.negate ? wa(v.contents) : v.contents;
          D && s.push({ ind: h, mode: m, doc: D });
        }
        break;
      }
      case gt:
        d.push({ ind: h, mode: m, doc: v.contents });
        break;
      case ct:
        d.length > 0 && s.push({ ind: h, mode: m, doc: Bo });
        break;
      case le:
        switch (m) {
          case $e:
            if (v.hard) c = !0;
            else {
              v.soft || (u.push(" "), o += 1);
              break;
            }
          case we:
            if (d.length > 0) {
              s.push({ ind: h, mode: m, doc: v }, ...d.reverse()), d.length = 0;
              break;
            }
            v.literal ? h.root ? (u.push(a, h.root.value), o = h.root.length) : (u.push(a), o = 0) : (o -= ai(u), u.push(a + h.value), o = h.length);
            break;
        }
        break;
      case Ge:
        s.push({ ind: h, mode: m, doc: v.contents });
        break;
      case Be:
        break;
      default:
        throw new br(v);
    }
    s.length === 0 && d.length > 0 && (s.push(...d.reverse()), d.length = 0);
  }
  let f = u.indexOf(tn);
  if (f !== -1) {
    let h = u.indexOf(tn, f + 1), m = u.slice(0, f).join(""), v = u.slice(f + 1, h).join(""), g = u.slice(h + 1).join("");
    return { formatted: m + v + g, cursorNodeStart: m.length, cursorNodeText: v };
  }
  return { formatted: u.join("") };
}
function Yh(e, t, r = 0) {
  let n = 0;
  for (let a = r; a < e.length; ++a) e[a] === "	" ? n = n + t - n % t : n++;
  return n;
}
function Xh(e) {
  return e !== null && typeof e == "object";
}
function* Vc(e, t) {
  let { getVisitorKeys: r, filter: n = /* @__PURE__ */ l(() => !0, "n") } = t, a = /* @__PURE__ */ l((o) => Tv(o) && n(o), "o");
  for (let o of r(e)) {
    let s = e[o];
    if (Array.isArray(s)) for (let u of s) a(u) && (yield u);
    else a(s) && (yield s);
  }
}
function* J4(e, t) {
  let r = [e];
  for (let n = 0; n < r.length; n++) {
    let a = r[n];
    for (let o of Vc(a, t)) yield o, r.push(o);
  }
}
function Mr(e) {
  return (t, r, n) => {
    let a = !!(n != null && n.backwards);
    if (r === !1) return !1;
    let { length: o } = t, s = r;
    for (; s >= 0 && s < o; ) {
      let u = t.charAt(s);
      if (e instanceof RegExp) {
        if (!e.test(u)) return s;
      } else if (!e.includes(u)) return s;
      a ? s-- : s++;
    }
    return s === -1 || s === o ? s : !1;
  };
}
function Kh(e, t, r) {
  let n = !!(r != null && r.backwards);
  if (t === !1) return !1;
  let a = e.charAt(t);
  if (n) {
    if (e.charAt(t - 1) === "\r" && a === `
`) return t - 2;
    if (a === `
` || a === "\r" || a === "\u2028" || a === "\u2029") return t - 1;
  } else {
    if (a === "\r" && e.charAt(t + 1) === `
`) return t + 2;
    if (a === `
` || a === "\r" || a === "\u2028" || a === "\u2029") return t + 1;
  }
  return t;
}
function Jh(e, t, r = {}) {
  let n = Ft(e, r.backwards ? t - 1 : t, r), a = Wt(e, n, r);
  return n !== a;
}
function Qh(e) {
  return Array.isArray(e) && e.length > 0;
}
function ef(e) {
  return e ? (t) => e(t, h0) : Hv;
}
function Q4(e) {
  let t = e.type || e.kind || "(unknown type)", r = String(e.name || e.id && (typeof e.id == "object" ? e.id.name : e.id) || e.key && (typeof e.key == "object" ? e.key.name : e.key) || e.value && (typeof e.value == "object" ? "" : String(e.value)) || e.operator || "");
  return r.length > 20 && (r = r.slice(0, 19) + "…"), t + (r ? " " + r : "");
}
function ji(e, t) {
  (e.comments ?? (e.comments = [])).push(t), t.printed = !1, t.nodeDescription = Q4(e);
}
function pr(e, t) {
  t.leading = !0, t.trailing = !1, ji(e, t);
}
function ua(e, t, r) {
  t.leading = !1, t.trailing = !1, r && (t.marker = r), ji(e, t);
}
function hr(e, t) {
  t.leading = !1, t.trailing = !0, ji(e, t);
}
function Vi(e, t) {
  if (zo.has(e)) return zo.get(e);
  let { printer: { getCommentChildNodes: r, canAttachComment: n, getVisitorKeys: a }, locStart: o, locEnd: s } = t;
  if (!n) return [];
  let u = (r?.(e, t) ?? [...Vc(e, { getVisitorKeys: Ha(a) })]).flatMap((c) => n(c) ? [c] : Vi(c, t));
  return u.sort((c, d) => o(c) - o(d) || s(c) - s(d)), zo.set(e, u), u;
}
function qc(e, t, r, n) {
  let { locStart: a, locEnd: o } = r, s = a(t), u = o(t), c = Vi(e, r), d, p, f = 0, h = c.length;
  for (; f < h; ) {
    let m = f + h >> 1, v = c[m], g = a(v), D = o(v);
    if (g <= s && u <= D) return qc(v, t, r, v);
    if (D <= s) {
      d = v, f = m + 1;
      continue;
    }
    if (u <= g) {
      p = v, h = m;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if (n?.type === "TemplateLiteral") {
    let { quasis: m } = n, v = Ao(m, t, r);
    d && Ao(m, d, r) !== v && (d = null), p && Ao(m, p, r) !== v && (p = null);
  }
  return { enclosingNode: n, precedingNode: d, followingNode: p };
}
function ev(e, t) {
  let { comments: r } = e;
  if (delete e.comments, !Mv(r) || !t.printer.canAttachComment) return;
  let n = [], { locStart: a, locEnd: o, printer: { experimentalFeatures: { avoidAstMutation: s = !1 } = {}, handleComments: u = {} }, originalText: c } = t, { ownLine: d = _o, endOfLine: p = _o, remaining: f = _o } = u, h = r.map((m, v) => ({
    ...qc(e, m, t),
    comment: m,
    text: c,
    options: t,
    ast: e,
    isLastComment: r.length - 1 === v
  }));
  for (let [m, v] of h.entries()) {
    let { comment: g, precedingNode: D, enclosingNode: y, followingNode: E, text: w, options: b, ast: C, isLastComment: S } = v;
    if (b.parser === "json" || b.parser === "json5" || b.parser === "jsonc" || b.parser === "__js_expression" || b.parser === "__ts_expression" || b.parser === "__vue_expression" || b.parser === "__vue_ts_expression") {
      if (a(g) - a(C) <= 0) {
        pr(C, g);
        continue;
      }
      if (o(g) - o(C) >= 0) {
        hr(C, g);
        continue;
      }
    }
    let A;
    if (s ? A = [v] : (g.enclosingNode = y, g.precedingNode = D, g.followingNode = E, A = [g, w, b, C, S]), tv(w, b, h, m)) g.placement = "ownLine", d(...A) || (E ? pr(E, g) : D ? hr(D, g) : ua(y || C, g));
    else if (rv(w, b, h, m)) g.placement = "endOfLine", p(...A) || (D ? hr(D, g) : E ? pr(E, g) : ua(y || C, g));
    else if (g.placement = "remaining", !f(...A)) if (D && E) {
      let x = n.length;
      x > 0 && n[x - 1].followingNode !== E && Zu(n, b), n.push(v);
    } else D ? hr(D, g) : E ? pr(E, g) : ua(y || C, g);
  }
  if (Zu(n, t), !s) for (let m of r) delete m.precedingNode, delete m.enclosingNode, delete m.followingNode;
}
function tv(e, t, r, n) {
  let { comment: a, precedingNode: o } = r[n], { locStart: s, locEnd: u } = t, c = s(a);
  if (o) for (let d = n - 1; d >= 0; d--) {
    let { comment: p, precedingNode: f } = r[d];
    if (f !== o || !Qc(e.slice(u(p), c))) break;
    c = s(p);
  }
  return At(e, c, { backwards: !0 });
}
function rv(e, t, r, n) {
  let { comment: a, followingNode: o } = r[n], { locStart: s, locEnd: u } = t, c = u(a);
  if (o) for (let d = n + 1; d < r.length; d++) {
    let { comment: p, followingNode: f } = r[d];
    if (f !== o || !Qc(e.slice(c, s(p)))) break;
    c = u(p);
  }
  return At(e, c);
}
function Zu(e, t) {
  var r, n;
  let a = e.length;
  if (a === 0) return;
  let { precedingNode: o, followingNode: s } = e[0], u = t.locStart(s), c;
  for (c = a; c > 0; --c) {
    let { comment: d, precedingNode: p, followingNode: f } = e[c - 1];
    ci.strictEqual(p, o), ci.strictEqual(f, s);
    let h = t.originalText.slice(t.locEnd(d), u);
    if (((n = (r = t.printer).isGap) == null ? void 0 : n.call(r, h, t)) ?? /^[\s(]*$/u.test(h)) u = t.locStart(d);
    else break;
  }
  for (let [d, { comment: p }] of e.entries()) d < c ? hr(o, p) : pr(s, p);
  for (let d of [o, s]) d.comments && d.comments.length > 1 && d.comments.sort((p, f) => t.locStart(p) - t.locStart(f));
  e.length = 0;
}
function Ao(e, t, r) {
  let n = r.locStart(t) - 1;
  for (let a = 1; a < e.length; ++a) if (n < r.locStart(e[a])) return a - 1;
  return 0;
}
function tf(e, t) {
  let r = t - 1;
  r = Ft(e, r, { backwards: !0 }), r = Wt(e, r, { backwards: !0 }), r = Ft(e, r, { backwards: !0 });
  let n = Wt(e, r, { backwards: !0 });
  return r !== n;
}
function Wc(e, t) {
  let r = e.node;
  return r.printed = !0, t.printer.printComment(e, t);
}
function nv(e, t) {
  var r;
  let n = e.node, a = [Wc(e, t)], { printer: o, originalText: s, locStart: u, locEnd: c } = t;
  if ((r = o.isBlockComment) != null && r.call(o, n)) {
    let p = At(s, c(n)) ? At(s, u(n), { backwards: !0 }) ? Nt : u0 : " ";
    a.push(p);
  } else a.push(Nt);
  let d = Wt(s, Ft(s, c(n)));
  return d !== !1 && At(s, d) && a.push(Nt), a;
}
function av(e, t, r) {
  var n;
  let a = e.node, o = Wc(e, t), { printer: s, originalText: u, locStart: c } = t, d = (n = s.isBlockComment) == null ? void 0 : n.call(s, a);
  if (r != null && r.hasLineSuffix && !(r != null && r.isBlock) || At(u, c(a), { backwards: !0 })) {
    let p = Wi(u, c(a));
    return { doc: ti([Nt, p ? Nt : "", o]), isBlock: d, hasLineSuffix: !0 };
  }
  return !d || r != null && r.hasLineSuffix ? { doc: [ti([" ", o]), Jn], isBlock: d, hasLineSuffix: !0 } : { doc: [" ", o], isBlock: d, hasLineSuffix: !1 };
}
function ov(e, t) {
  let r = e.node;
  if (!r) return {};
  let n = t[Symbol.for("printedComments")];
  if ((r.comments || []).filter((u) => !n.has(u)).length === 0) return { leading: "", trailing: "" };
  let a = [], o = [], s;
  return e.each(() => {
    let u = e.node;
    if (n != null && n.has(u)) return;
    let { leading: c, trailing: d } = u;
    c ? a.push(nv(e, t)) : d && (s = av(e, t, s), o.push(s.doc));
  }, "comments"), { leading: a, trailing: o };
}
function iv(e, t, r) {
  let { leading: n, trailing: a } = ov(e, r);
  return !n && !a ? t : $c(t, (o) => [n, o, a]);
}
function lv(e) {
  let { [Symbol.for("comments")]: t, [Symbol.for("printedComments")]: r } = e;
  for (let n of t) {
    if (!n.printed && !r.has(n)) throw new Error('Comment "' + n.value.trim() + '" was not printed. Please report this error!');
    delete n.printed;
  }
}
function rf(e) {
  return () => {
  };
}
function Yu({ plugins: e = [], showDeprecated: t = !1 } = {}) {
  let r = e.flatMap((a) => a.languages ?? []), n = [];
  for (let a of uv(Object.assign({}, ...e.map(({ options: o }) => o), Nv))) !t && a.deprecated || (Array.isArray(a.choices) && (t || (a.choices = a.choices.filter((o) => !o.deprecated)), a.name === "parser" && (a.choices = [...a.choices, ...sv(a.choices, r, e)])), a.pluginDefaults = Object.fromEntries(e.filter((o) => {
    var s;
    return ((s = o.defaultOptions) == null ? void 0 : s[a.name]) !== void 0;
  }).map((o) => [o.name, o.defaultOptions[a.name]])), n.push(a));
  return { languages: r, options: n };
}
function* sv(e, t, r) {
  let n = new Set(e.map((a) => a.value));
  for (let a of t) if (a.parsers) {
    for (let o of a.parsers) if (!n.has(o)) {
      n.add(o);
      let s = r.find((c) => c.parsers && Object.prototype.hasOwnProperty.call(c.parsers, o)), u = a.name;
      s != null && s.name && (u += ` (plugin: ${s.name})`), yield { value: o, description: u };
    }
  }
}
function uv(e) {
  let t = [];
  for (let [r, n] of Object.entries(e)) {
    let a = { name: r, ...n };
    Array.isArray(a.default) && (a.default = ne(!1, a.default, -1).value), t.push(a);
  }
  return t;
}
function Xu(e, t) {
  if (!t) return;
  let r = Pv(t).toLowerCase();
  return e.find(({ filenames: n }) => n?.some((a) => a.toLowerCase() === r)) ?? e.find(({ extensions: n }) => n?.some((a) => r.endsWith(a)));
}
function cv(e, t) {
  if (t) return e.find(({ name: r }) => r.toLowerCase() === t) ?? e.find(({ aliases: r }) => r?.includes(t)) ?? e.find(({ extensions: r }) => r?.includes(`.${t}`));
}
function nf(e, t) {
  let r = e.plugins.flatMap((a) => a.languages ?? []);
  return (cv(r, t.language) ?? Xu(r, t.physicalFile) ?? Xu(r, t.file) ?? (t.physicalFile, void 0))?.parsers[0];
}
function Rs(e, t, r, n) {
  return [`Invalid ${fr.default.red(n.key(e))} value.`, `Expected ${fr.default.blue(r)},`, `but received ${t === m0 ? fr.default.gray("nothing") : fr.default.red(n.value(t))}.`].join(" ");
}
function Ku({ text: e, list: t }, r) {
  let n = [];
  return e && n.push(`- ${fr.default.blue(e)}`), t && n.push([`- ${fr.default.blue(t.title)}:`].concat(t.values.map((a) => Ku(a, r - g0.length).replace(/^|\n/g, `$&${g0}`))).join(`
`)), Ju(n, r);
}
function Ju(e, t) {
  if (e.length === 1) return e[0];
  let [r, n] = e, [a, o] = e.map((s) => s.split(`
`, 1)[0].length);
  return a > t && a > o ? n : r;
}
function af(e, t) {
  if (e === t) return 0;
  let r = e;
  e.length > t.length && (e = t, t = r);
  let n = e.length, a = t.length;
  for (; n > 0 && e.charCodeAt(~-n) === t.charCodeAt(~-a); ) n--, a--;
  let o = 0;
  for (; o < n && e.charCodeAt(o) === t.charCodeAt(o); ) o++;
  if (n -= o, a -= o, n === 0) return a;
  let s, u, c, d, p = 0, f = 0;
  for (; p < n; ) v0[p] = e.charCodeAt(o + p), Io[p] = ++p;
  for (; f < a; ) for (s = t.charCodeAt(o + f), c = f++, u = f, p = 0; p < n; p++) d = s === v0[p] ? c : c + 1, c = Io[p], u = Io[p] = c > u ? d > u ? u + 1 : d : d > c ? c + 1 : d;
  return u;
}
function of(e, t) {
  let r = new e(t), n = Object.create(r);
  for (let a of jv) a in t && (n[a] = dv(t[a], r, xt.prototype[a].length));
  return n;
}
function dv(e, t, r) {
  return typeof e == "function" ? (...n) => e(...n.slice(0, r - 1), t, ...n.slice(r - 1)) : () => e;
}
function Ls({ from: e, to: t }) {
  return { from: [e], to: t };
}
function lf(e, t) {
  let r = /* @__PURE__ */ Object.create(null);
  for (let n of e) {
    let a = n[t];
    if (r[a]) throw new Error(`Duplicate ${t} ${JSON.stringify(a)}`);
    r[a] = n;
  }
  return r;
}
function sf(e, t) {
  let r = /* @__PURE__ */ new Map();
  for (let n of e) {
    let a = n[t];
    if (r.has(a)) throw new Error(`Duplicate ${t} ${JSON.stringify(a)}`);
    r.set(a, n);
  }
  return r;
}
function uf() {
  let e = /* @__PURE__ */ Object.create(null);
  return (t) => {
    let r = JSON.stringify(t);
    return e[r] ? !0 : (e[r] = !0, !1);
  };
}
function cf(e, t) {
  let r = [], n = [];
  for (let a of e) t(a) ? r.push(a) : n.push(a);
  return [r, n];
}
function df(e) {
  return e === Math.floor(e);
}
function pf(e, t) {
  if (e === t) return 0;
  let r = typeof e, n = typeof t, a = ["undefined", "object", "boolean", "number", "string"];
  return r !== n ? a.indexOf(r) - a.indexOf(n) : r !== "string" ? Number(e) - Number(t) : e.localeCompare(t);
}
function hf(e) {
  return (...t) => {
    let r = e(...t);
    return typeof r == "string" ? new Error(r) : r;
  };
}
function Ts(e) {
  return e === void 0 ? {} : e;
}
function Qu(e) {
  if (typeof e == "string") return { text: e };
  let { text: t, list: r } = e;
  return pv((t || r) !== void 0, "Unexpected `expected` result, there should be at least one field."), r ? { text: t, list: {
    title: r.title,
    values: r.values.map(Qu)
  } } : { text: t };
}
function Ms(e, t) {
  return e === !0 ? !0 : e === !1 ? { value: t } : e;
}
function Hs(e, t, r = !1) {
  return e === !1 ? !1 : e === !0 ? r ? !0 : [{ value: t }] : "value" in e ? [e] : e.length === 0 ? !1 : e;
}
function e0(e, t) {
  return typeof e == "string" || "key" in e ? { from: t, to: e } : "from" in e ? { from: e.from, to: e.to } : { from: t, to: e.to };
}
function ko(e, t) {
  return e === void 0 ? [] : Array.isArray(e) ? e.map((r) => e0(r, t)) : [e0(e, t)];
}
function Os(e, t) {
  let r = ko(typeof e == "object" && "redirect" in e ? e.redirect : e, t);
  return r.length === 0 ? { remain: t, redirect: r } : typeof e == "object" && "remain" in e ? { remain: e.remain, redirect: r } : { redirect: r };
}
function pv(e, t) {
  if (!e) throw new Error(t);
}
function ff(e, t, { logger: r = !1, isCLI: n = !1, passThrough: a = !1, FlagSchema: o, descriptor: s } = {}) {
  if (n) {
    if (!o) throw new Error("'FlagSchema' option is required.");
    if (!s) throw new Error("'descriptor' option is required.");
  } else s = ur;
  let u = a ? Array.isArray(a) ? (h, m) => a.includes(h) ? { [h]: m } : void 0 : (h, m) => ({ [h]: m }) : (h, m, v) => {
    let { _: g, ...D } = v.schemas;
    return w0(h, m, { ...v, schemas: D });
  }, c = hv(t, { isCLI: n, FlagSchema: o }), d = new Yv(c, { logger: r, unknown: u, descriptor: s }), p = r !== !1;
  p && hu && (d._hasDeprecationWarned = hu);
  let f = d.normalize(e);
  return p && (hu = d._hasDeprecationWarned), f;
}
function hv(e, { isCLI: t, FlagSchema: r }) {
  let n = [];
  t && n.push(qv.create({ name: "_" }));
  for (let a of e) n.push(fv(a, { isCLI: t, optionInfos: e, FlagSchema: r })), a.alias && t && n.push(Vv.create({ name: a.alias, sourceName: a.name }));
  return n;
}
function fv(e, { isCLI: t, optionInfos: r, FlagSchema: n }) {
  let { name: a } = e, o = { name: a }, s, u = {};
  switch (e.type) {
    case "int":
      s = Zv, t && (o.preprocess = Number);
      break;
    case "string":
      s = b0;
      break;
    case "choice":
      s = Gv, o.choices = e.choices.map((c) => c != null && c.redirect ? { ...c, redirect: { to: { key: e.name, value: c.redirect } } } : c);
      break;
    case "boolean":
      s = Uv;
      break;
    case "flag":
      s = n, o.flags = r.flatMap((c) => [c.alias, c.description && c.name, c.oppositeDescription && `no-${c.name}`].filter(Boolean));
      break;
    case "path":
      s = b0;
      break;
    default:
      throw new Error(`Unexpected type ${e.type}`);
  }
  if (e.exception ? o.validate = (c, d, p) => e.exception(c) || d.validate(c, p) : o.validate = (c, d, p) => c === void 0 || d.validate(c, p), e.redirect && (u.redirect = (c) => c ? { to: typeof e.redirect == "string" ? e.redirect : { key: e.redirect.option, value: e.redirect.value } } : void 0), e.deprecated && (u.deprecated = !0), t && !e.array) {
    let c = o.preprocess || ((d) => d);
    o.preprocess = (d, p, f) => p.preprocess(c(Array.isArray(d) ? ne(!1, d, -1) : d), f);
  }
  return e.array ? Wv.create({ ...t ? { preprocess: /* @__PURE__ */ l((c) => Array.isArray(c) ? c : [c], "preprocess") } : {}, ...u, valueSchema: s.create(o) }) : s.create({ ...o, ...u });
}
function Uc(e, t) {
  if (!t) throw new Error("parserName is required.");
  let r = t1(!1, e, (a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, t));
  if (r) return r;
  let n = `Couldn't resolve parser "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new e1(n);
}
function mv(e, t) {
  if (!t) throw new Error("astFormat is required.");
  let r = t1(!1, e, (a) => a.printers && Object.prototype.hasOwnProperty.call(a.printers, t));
  if (r) return r;
  let n = `Couldn't find plugin for AST format "${t}".`;
  throw n += " Plugins must be explicitly added to the standalone bundle.", new e1(n);
}
function Gc({ plugins: e, parser: t }) {
  let r = Uc(e, t);
  return Zc(r, t);
}
function Zc(e, t) {
  let r = e.parsers[t];
  return typeof r == "function" ? r() : r;
}
function gv(e, t) {
  let r = e.printers[t];
  return typeof r == "function" ? r() : r;
}
async function mf(e, t = {}) {
  var r;
  let n = { ...e };
  if (!n.parser) if (n.filepath) {
    if (n.parser = $v(n, { physicalFile: n.filepath }), !n.parser) throw new f0(`No parser could be inferred for file "${n.filepath}".`);
  } else throw new f0("No parser and no file path given, couldn't infer a parser.");
  let a = Yu({ plugins: e.plugins, showDeprecated: !0 }).options, o = { ...D0, ...Object.fromEntries(a.filter((h) => h.default !== void 0).map(
    (h) => [h.name, h.default]
  )) }, s = Uc(n.plugins, n.parser), u = await Zc(s, n.parser);
  n.astFormat = u.astFormat, n.locEnd = u.locEnd, n.locStart = u.locStart;
  let c = (r = s.printers) != null && r[u.astFormat] ? s : mv(n.plugins, u.astFormat), d = await gv(c, u.astFormat);
  n.printer = d;
  let p = c.defaultOptions ? Object.fromEntries(Object.entries(c.defaultOptions).filter(([, h]) => h !== void 0)) : {}, f = { ...o, ...p };
  for (let [h, m] of Object.entries(f)) (n[h] === null || n[h] === void 0) && (n[h] = m);
  return n.parser === "json" && (n.trailingComma = "none"), Xv(n, a, { passThrough: Object.keys(D0), ...t });
}
async function gf(e, t) {
  let r = await Gc(t), n = r.preprocess ? r.preprocess(e, t) : e;
  t.originalText = n;
  let a;
  try {
    a = await r.parse(n, t, t);
  } catch (o) {
    vv(o, e);
  }
  return { text: n, ast: a };
}
function vv(e, t) {
  let { loc: r } = e;
  if (r) {
    let n = (0, Kv.codeFrameColumns)(t, r, { highlightCode: !0 });
    throw e.message += `
` + n, e.codeFrame = n, e;
  }
  throw e;
}
async function wv(e, t, r, n, a) {
  let { embeddedLanguageFormatting: o, printer: { embed: s, hasPrettierIgnore: u = /* @__PURE__ */ l(() => !1, "s"), getVisitorKeys: c } } = r;
  if (!s || o !== "auto") return;
  if (s.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/en/plugins.html#optional-embed");
  let d = Ha(s.getVisitorKeys ?? c), p = [];
  m();
  let f = e.stack;
  for (let { print: v, node: g, pathStack: D } of p) try {
    e.stack = D;
    let y = await v(h, t, e, r);
    y && a.set(g, y);
  } catch (y) {
    if (globalThis.PRETTIER_DEBUG) throw y;
  }
  e.stack = f;
  function h(v, g) {
    return bv(v, g, r, n);
  }
  l(h, "f");
  function m() {
    let { node: v } = e;
    if (v === null || typeof v != "object" || u(e)) return;
    for (let D of d(v)) Array.isArray(v[D]) ? e.each(m, D) : e.call(m, D);
    let g = s(e, r);
    if (g) {
      if (typeof g == "function") {
        p.push({ print: g, node: v, pathStack: [...e.stack] });
        return;
      }
      a.set(v, g);
    }
  }
  l(m, "p");
}
async function bv(e, t, r, n) {
  let a = await Ar({ ...r, ...t, parentParser: r.parser, originalText: e }, { passThrough: !0 }), { ast: o } = await yn(e, a), s = await n(
    o,
    a
  );
  return Gu(s);
}
function vf(e, t) {
  let { originalText: r, [Symbol.for("comments")]: n, locStart: a, locEnd: o, [Symbol.for("printedComments")]: s } = t, { node: u } = e, c = a(
    u
  ), d = o(u);
  for (let p of n) a(p) >= c && o(p) <= d && s.add(p);
  return r.slice(c, d);
}
async function Ta(e, t) {
  ({ ast: e } = await Yc(e, t));
  let r = /* @__PURE__ */ new Map(), n = new Lv(e), a = Ov(t), o = /* @__PURE__ */ new Map();
  await wv(n, u, t, Ta, o);
  let s = await t0(n, t, u, void 0, o);
  return lv(t), s;
  function u(d, p) {
    return d === void 0 || d === n ? c(p) : Array.isArray(d) ? n.call(() => c(p), ...d) : n.call(() => c(p), d);
  }
  function c(d) {
    a(n);
    let p = n.node;
    if (p == null) return "";
    let f = p && typeof p == "object" && d === void 0;
    if (f && r.has(p)) return r.get(p);
    let h = t0(n, t, u, d, o);
    return f && r.set(p, h), h;
  }
}
function t0(e, t, r, n, a) {
  var o;
  let { node: s } = e, { printer: u } = t, c;
  return (o = u.hasPrettierIgnore) != null && o.call(u, e) ? c = Jv(e, t) : a.has(s) ? c = a.get(s) : c = u.print(e, t, r, n), s === t.cursorNode && (c = $c(c, (d) => [li, d, li])), u.printComment && (!u.willPrintOwnComments || !u.willPrintOwnComments(e, t)) && (c = iv(e, c, t)), c;
}
async function Yc(e, t) {
  let r = e.comments ?? [];
  t[Symbol.for("comments")] = r, t[Symbol.for("tokens")] = e.tokens ?? [], t[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), ev(
    e,
    t
  );
  let { printer: { preprocess: n } } = t;
  return e = n ? await n(e, t) : e, { ast: e, comments: r };
}
function wf(e, t) {
  let { cursorOffset: r, locStart: n, locEnd: a } = t, o = Ha(t.printer.getVisitorKeys), s = /* @__PURE__ */ l(
    (c) => n(c) <= r && a(c) >= r,
    "i"
  ), u = e;
  for (let c of J4(e, { getVisitorKeys: o, filter: s })) u = c;
  return u;
}
function bf(e, t) {
  let { printer: { massageAstNode: r, getVisitorKeys: n } } = t;
  if (!r) return e;
  let a = Ha(n), o = r.ignoredProperties ?? /* @__PURE__ */ new Set();
  return s(e);
  function s(u, c) {
    if (!(u !== null && typeof u == "object")) return u;
    if (Array.isArray(u)) return u.map((h) => s(h, c)).filter(Boolean);
    let d = {}, p = new Set(a(u));
    for (let h in u) !Object.prototype.hasOwnProperty.call(u, h) || o.has(h) || (p.has(h) ? d[h] = s(u[h], u) : d[h] = u[h]);
    let f = r(u, d, c);
    if (f !== null) return f ?? d;
  }
}
function Dv(e, t) {
  let r = [e.node, ...e.parentNodes], n = /* @__PURE__ */ new Set([t.node, ...t.parentNodes]);
  return r.find((a) => r1.has(a.type) && n.has(a));
}
function r0(e) {
  let t = t3(!1, e, (r) => r.type !== "Program" && r.type !== "File");
  return t === -1 ? e : e.slice(0, t + 1);
}
function yv(e, t, { locStart: r, locEnd: n }) {
  let a = e.node, o = t.node;
  if (a === o) return { startNode: a, endNode: o };
  let s = r(e.node);
  for (let c of r0(t.parentNodes)) if (r(c) >= s) o = c;
  else break;
  let u = n(t.node);
  for (let c of r0(e.parentNodes)) {
    if (n(c) <= u) a = c;
    else break;
    if (a === o) break;
  }
  return { startNode: a, endNode: o };
}
function oi(e, t, r, n, a = [], o) {
  let { locStart: s, locEnd: u } = r, c = s(e), d = u(e);
  if (!(t > d || t < c || o === "rangeEnd" && t === c || o === "rangeStart" && t === d)) {
    for (let p of Vi(e, r)) {
      let f = oi(p, t, r, n, [e, ...a], o);
      if (f) return f;
    }
    if (!n || n(e, a[0])) return { node: e, parentNodes: a };
  }
}
function Ev(e, t) {
  return t !== "DeclareExportDeclaration" && e !== "TypeParameterDeclaration" && (e === "Directive" || e === "TypeAlias" || e === "TSExportAssignment" || e.startsWith("Declare") || e.startsWith("TSDeclare") || e.endsWith("Statement") || e.endsWith("Declaration"));
}
function n0(e, t, r) {
  if (!t) return !1;
  switch (e.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return Ev(t.type, r?.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return r1.has(t.type);
    case "graphql":
      return n3.has(t.kind);
    case "vue":
      return t.tag !== "root";
  }
  return !1;
}
function Cv(e, t, r) {
  let { rangeStart: n, rangeEnd: a, locStart: o, locEnd: s } = t;
  ci.ok(a > n);
  let u = e.slice(n, a).search(/\S/u), c = u === -1;
  if (!c) for (n += u; a > n && !/\S/u.test(e[a - 1]); --a) ;
  let d = oi(r, n, t, (m, v) => n0(t, m, v), [], "rangeStart"), p = c ? d : oi(r, a, t, (m) => n0(t, m), [], "rangeEnd");
  if (!d || !p) return { rangeStart: 0, rangeEnd: 0 };
  let f, h;
  if (r3(t)) {
    let m = Dv(d, p);
    f = m, h = m;
  } else ({ startNode: f, endNode: h } = yv(d, p, t));
  return { rangeStart: Math.min(o(f), o(h)), rangeEnd: Math.max(s(f), s(h)) };
}
async function Xc(e, t, r = 0) {
  if (!e || e.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n, text: a } = await yn(e, t);
  t.cursorOffset >= 0 && (t.cursorNode = Qv(n, t));
  let o = await Ta(n, t);
  r > 0 && (o = qu([Nt, o], r, t.tabWidth));
  let s = Da(o, t);
  if (r > 0) {
    let c = s.formatted.trim();
    s.cursorNodeStart !== void 0 && (s.cursorNodeStart -= s.formatted.indexOf(c)), s.formatted = c + $i(t.endOfLine);
  }
  let u = t[Symbol.for("comments")];
  if (t.cursorOffset >= 0) {
    let c, d, p, f, h;
    if (t.cursorNode && s.cursorNodeText ? (c = t.locStart(t.cursorNode), d = a.slice(c, t.locEnd(t.cursorNode)), p = t.cursorOffset - c, f = s.cursorNodeStart, h = s.cursorNodeText) : (c = 0, d = a, p = t.cursorOffset, f = 0, h = s.formatted), d === h) return {
      formatted: s.formatted,
      cursorOffset: f + p,
      comments: u
    };
    let m = d.split("");
    m.splice(p, 0, y0);
    let v = h.split(""), g = P4(m, v), D = f;
    for (let y of g) if (y.removed) {
      if (y.value.includes(y0)) break;
    } else D += y.count;
    return { formatted: s.formatted, cursorOffset: D, comments: u };
  }
  return { formatted: s.formatted, cursorOffset: -1, comments: u };
}
async function xv(e, t) {
  let { ast: r, text: n } = await yn(e, t), { rangeStart: a, rangeEnd: o } = Cv(n, t, r), s = n.slice(a, o), u = Math.min(a, n.lastIndexOf(`
`, a) + 1), c = n.slice(u, a).match(/^\s*/u)[0], d = ui(c, t.tabWidth), p = await Xc(s, {
    ...t,
    rangeStart: 0,
    rangeEnd: Number.POSITIVE_INFINITY,
    cursorOffset: t.cursorOffset > a && t.cursorOffset <= o ? t.cursorOffset - a : -1,
    endOfLine: "lf"
  }, d), f = p.formatted.trimEnd(), { cursorOffset: h } = t;
  h > o ? h += f.length - s.length : p.cursorOffset >= 0 && (h = p.cursorOffset + a);
  let m = n.slice(0, a) + f + n.slice(o);
  if (t.endOfLine !== "lf") {
    let v = $i(t.endOfLine);
    h >= 0 && v === `\r
` && (h += Pc(m.slice(0, h), `
`)), m = Ma(!1, m, `
`, v);
  }
  return { formatted: m, cursorOffset: h, comments: p.comments };
}
function Fo(e, t, r) {
  return typeof t != "number" || Number.isNaN(t) || t < 0 || t > e.length ? r : t;
}
function a0(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: a } = t;
  return r = Fo(e, r, -1), n = Fo(e, n, 0), a = Fo(e, a, e.length), { ...t, cursorOffset: r, rangeStart: n, rangeEnd: a };
}
function Kc(e, t) {
  let { cursorOffset: r, rangeStart: n, rangeEnd: a, endOfLine: o } = a0(e, t), s = e.charAt(0) === n1;
  if (s && (e = e.slice(1), r--, n--, a--), o === "auto" && (o = $4(e)), e.includes("\r")) {
    let u = /* @__PURE__ */ l((c) => Pc(e.slice(0, Math.max(c, 0)), `\r
`), "s");
    r -= u(r), n -= u(n), a -= u(a), e = j4(e);
  }
  return { hasBOM: s, text: e, options: a0(e, { ...t, cursorOffset: r, rangeStart: n, rangeEnd: a, endOfLine: o }) };
}
async function o0(e, t) {
  let r = await Gc(t);
  return !r.hasPragma || r.hasPragma(e);
}
async function i0(e, t) {
  let { hasBOM: r, text: n, options: a } = Kc(e, await Ar(t));
  if (a.rangeStart >= a.rangeEnd && n !== "" || a.requirePragma && !await o0(n, a)) return { formatted: e, cursorOffset: t.cursorOffset, comments: [] };
  let o;
  return a.rangeStart > 0 || a.rangeEnd < n.length ? o = await xv(n, a) : (!a.requirePragma && a.insertPragma && a.printer.insertPragma && !await o0(
    n,
    a
  ) && (n = a.printer.insertPragma(n)), o = await Xc(n, a)), r && (o.formatted = n1 + o.formatted, o.cursorOffset >= 0 && o.cursorOffset++), o;
}
async function Df(e, t, r) {
  let { text: n, options: a } = Kc(e, await Ar(t)), o = await yn(n, a);
  return r && (r.preprocessForPrint && (o.ast = await Yc(o.ast, a)), r.massage && (o.ast = e3(o.ast, a))), o;
}
async function yf(e, t) {
  t = await Ar(t);
  let r = await Ta(e, t);
  return Da(r, t);
}
async function Ef(e, t) {
  let r = V4(e), { formatted: n } = await i0(r, { ...t, parser: "__js_expression" });
  return n;
}
async function Cf(e, t) {
  t = await Ar(t);
  let { ast: r } = await yn(e, t);
  return Ta(r, t);
}
async function xf(e, t) {
  return Da(e, await Ar(t));
}
function Sf(e, t) {
  if (t === !1) return !1;
  if (e.charAt(t) === "/" && e.charAt(t + 1) === "*") {
    for (let r = t + 2; r < e.length; ++r) if (e.charAt(r) === "*" && e.charAt(r + 1) === "/") return r + 2;
  }
  return t;
}
function Af(e, t) {
  return t === !1 ? !1 : e.charAt(t) === "/" && e.charAt(t + 1) === "/" ? p0(e, t) : t;
}
function kf(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = Ft(e, n), n = di(e, n), n = pi(e, n), n = Wt(e, n);
  return n;
}
function Ff(e, t) {
  let r = null, n = t;
  for (; n !== r; ) r = n, n = d0(e, n), n = di(e, n), n = Ft(e, n);
  return n = pi(e, n), n = Wt(e, n), n !== !1 && At(e, n);
}
function Bf(e, t) {
  let r = e.lastIndexOf(`
`);
  return r === -1 ? 0 : ui(e.slice(r + 1).match(/^[\t ]*/u)[0], t);
}
function Sv(e) {
  if (typeof e != "string") throw new TypeError("Expected a string");
  return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function zf(e, t) {
  let r = e.match(new RegExp(`(${Sv(t)})+`, "gu"));
  return r === null ? 0 : r.reduce((n, a) => Math.max(n, a.length / t.length), 0);
}
function _f(e, t) {
  let r = Ui(e, t);
  return r === !1 ? "" : e.charAt(r);
}
function If(e, t, r) {
  for (let n = t; n < r; ++n) if (e.charAt(n) === `
`) return !0;
  return !1;
}
function Rf(e, t, r = {}) {
  return Ft(e, r.backwards ? t - 1 : t, r) !== t;
}
function Lf(e, t, r) {
  let n = t === '"' ? "'" : '"', a = Ma(!1, e, /\\(.)|(["'])/gsu, (o, s, u) => s === n ? s : u === t ? "\\" + u : u || (r && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s) ? s : "\\" + s));
  return t + a + t;
}
function Av(e, t, r) {
  return Ui(e, r(t));
}
function Tf(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Ui(e, t) : Av(...arguments);
}
function kv(e, t, r) {
  return Wi(e, r(t));
}
function Mf(e, t) {
  return arguments.length === 2 || typeof t == "number" ? Wi(e, t) : kv(...arguments);
}
function Fv(e, t, r) {
  return hi(e, r(t));
}
function Hf(e, t) {
  return arguments.length === 2 || typeof t == "number" ? hi(e, t) : Fv(...arguments);
}
function It(e, t = 1) {
  return async (...r) => {
    let n = r[t] ?? {}, a = n.plugins ?? [];
    return r[t] = { ...n, plugins: Array.isArray(a) ? a : Object.values(a) }, e(...r);
  };
}
async function l0(e, t) {
  let { formatted: r } = await E0(e, { ...t, cursorOffset: -1 });
  return r;
}
async function Of(e, t) {
  return await l0(e, t) === e;
}
var Nf, On, Pf, $f, jf, Vf, Ns, qf, fo, Nn, Ps, Pn, Wf, Uf, Gf, Hr, mo, $s, Zf, Yf, Xf, Kf, Jf, js, Qf, Ma, Vs, qs, Ws, Us, e5, t5, Bv, Or, Kn, Zt, pt, Ot, ht, ft, ut, ye, Ue, Ce, mt, gt, ct, le, Ge, Be, Jc, Yt, zv, Gs, r5, br, s0, ii, Zs, Ze, qi, n5, Jn, a5, Bo, Ys, u0, o5, Nt, c0, li, i5, ne, _v, Iv, Rv, si, we, $e, tn, ui, sr, Xs, go, Ks, l5, Lv, Js, ci, Tv, s5, Ft, d0, p0, Wt, At, Mv, h0, Hv, Ha, zo, _o, Qc, Wi, Ov, Qs, e1, eu, f0, Nv, Pv, $v, ur, tu, u5, fr, m0, $n, g0, c5, ru, Io, v0, w0, jv, nu, xt, au, Vv, ou, qv, iu, Wv, lu, Uv, su, Gv, uu, d5, cu, Zv, du, b0, p5, h5, f5, m5, pu, Yv, hu, Xv, g5, t1, D0, Ar, Kv, yn, Jv, Qv, e3, v5, t3, r3, r1, n3, n1, y0, fu, w5, b5, D5, y5, mu, di, pi, Ui, hi, E5, C5, x5, S5, A5, k5, E0, F5, B5, a3, I8 = z(() => {
  Nf = Object.create, On = Object.defineProperty, Pf = Object.getOwnPropertyDescriptor, $f = Object.getOwnPropertyNames, jf = Object.getPrototypeOf, Vf = Object.prototype.hasOwnProperty, Ns = /* @__PURE__ */ l((e) => {
    throw TypeError(e);
  }, "sr"), qf = /* @__PURE__ */ l((e, t) => () => (e && (t = e(e = 0)), t), "_u"), fo = /* @__PURE__ */ l((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "At"), Nn = /* @__PURE__ */ l((e, t) => {
    for (var r in t) On(e, r, { get: t[r], enumerable: !0 });
  }, "We"), Ps = /* @__PURE__ */ l((e, t, r, n) => {
    if (t && typeof t == "object" || typeof t == "function") for (let a of $f(t)) !Vf.call(e, a) && a !== r && On(e, a, { get: /* @__PURE__ */ l(
      () => t[a],
      "get"
    ), enumerable: !(n = Pf(t, a)) || n.enumerable });
    return e;
  }, "ar"), Pn = /* @__PURE__ */ l((e, t, r) => (r = e != null ? Nf(jf(e)) : {}, Ps(t || !e || !e.__esModule ? On(r, "default", { value: e, enumerable: !0 }) : r, e)), "Me"), Wf = /* @__PURE__ */ l((e) => Ps(On({}, "__esModule", { value: !0 }), e), "vu"), Uf = /* @__PURE__ */ l((e, t, r) => t.has(
    e
  ) || Ns("Cannot " + r), "bu"), Gf = /* @__PURE__ */ l((e, t, r) => t.has(e) ? Ns("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), "Dr"), Hr = /* @__PURE__ */ l((e, t, r) => (Uf(e, t, "access private method"), r), "pe"), mo = fo((e, t) => {
    var r = new Proxy(String, { get: /* @__PURE__ */ l(() => r, "get") });
    t.exports = r;
  }), $s = {}, Nn($s, { default: /* @__PURE__ */ l(() => Yf, "default"), shouldHighlight: /* @__PURE__ */ l(() => Zf, "shouldHighlight") }), Xf = qf(() => {
    Zf = /* @__PURE__ */ l(() => !1, "xo"), Yf = String;
  }), Kf = fo((e, t) => {
    var r = String, n = /* @__PURE__ */ l(function() {
      return {
        isColorSupported: !1,
        reset: r,
        bold: r,
        dim: r,
        italic: r,
        underline: r,
        inverse: r,
        hidden: r,
        strikethrough: r,
        black: r,
        red: r,
        green: r,
        yellow: r,
        blue: r,
        magenta: r,
        cyan: r,
        white: r,
        gray: r,
        bgBlack: r,
        bgRed: r,
        bgGreen: r,
        bgYellow: r,
        bgBlue: r,
        bgMagenta: r,
        bgCyan: r,
        bgWhite: r
      };
    }, "Ln");
    t.exports = n(), t.exports.createColors = n;
  }), Jf = fo((e) => {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.codeFrameColumns = m, e.default = v;
    var t = (Xf(), Wf($s)), r = a(Kf(), !0);
    function n(g) {
      if (typeof WeakMap != "function") return null;
      var D = /* @__PURE__ */ new WeakMap(), y = /* @__PURE__ */ new WeakMap();
      return (n = /* @__PURE__ */ l(function(E) {
        return E ? y : D;
      }, "Wn"))(g);
    }
    l(n, "Wn");
    function a(g, D) {
      if (!D && g && g.__esModule) return g;
      if (g === null || typeof g != "object" && typeof g != "function") return { default: g };
      var y = n(D);
      if (y && y.has(g)) return y.get(g);
      var E = { __proto__: null }, w = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var b in g) if (b !== "default" && {}.hasOwnProperty.call(g, b)) {
        var C = w ? Object.getOwnPropertyDescriptor(g, b) : null;
        C && (C.get || C.set) ? Object.defineProperty(E, b, C) : E[b] = g[b];
      }
      return E.default = g, y && y.set(g, E), E;
    }
    l(a, "vo");
    var o = r.default, s = /* @__PURE__ */ l((g, D) => (y) => g(D(y)), "Rn"), u;
    function c(g) {
      return g ? (u != null || (u = (0, r.createColors)(!0)), u) : o;
    }
    l(c, "Oo");
    var d = !1;
    function p(g) {
      return { gutter: g.gray, marker: s(g.red, g.bold), message: s(g.red, g.bold) };
    }
    l(p, "So");
    var f = /\r\n|[\n\r\u2028\u2029]/;
    function h(g, D, y) {
      let E = Object.assign({ column: 0, line: -1 }, g.start), w = Object.assign({}, E, g.end), { linesAbove: b = 2, linesBelow: C = 3 } = y || {}, S = E.line, A = E.column, x = w.line, F = w.column, B = Math.max(S - (b + 1), 0), _ = Math.min(D.length, x + C);
      S === -1 && (B = 0), x === -1 && (_ = D.length);
      let L = x - S, R = {};
      if (L) for (let V = 0; V <= L; V++) {
        let T = V + S;
        if (!A) R[T] = !0;
        else if (V === 0) {
          let O = D[T - 1].length;
          R[T] = [A, O - A + 1];
        } else if (V === L) R[T] = [0, F];
        else {
          let O = D[T - V].length;
          R[T] = [0, O];
        }
      }
      else A === F ? A ? R[S] = [A, 0] : R[S] = !0 : R[S] = [A, F - A];
      return { start: B, end: _, markerLines: R };
    }
    l(h, "No");
    function m(g, D, y = {}) {
      let E = (y.highlightCode || y.forceColor) && (0, t.shouldHighlight)(y), w = c(y.forceColor), b = p(w), C = /* @__PURE__ */ l((R, V) => E ? R(V) : V, "i"), S = g.split(f), { start: A, end: x, markerLines: F } = h(D, S, y), B = D.start && typeof D.start.column == "number", _ = String(
        x
      ).length, L = (E ? (0, t.default)(g, y) : g).split(f, x).slice(A, x).map((R, V) => {
        let T = A + 1 + V, O = ` ${` ${T}`.slice(-_)} |`, j = F[T], Y = !F[T + 1];
        if (j) {
          let P = "";
          if (Array.isArray(j)) {
            let q = R.slice(0, Math.max(j[0] - 1, 0)).replace(/[^\t]/g, " "), K = j[1] || 1;
            P = [`
 `, C(b.gutter, O.replace(/\d/g, " ")), " ", q, C(b.marker, "^").repeat(K)].join(""), Y && y.message && (P += " " + C(b.message, y.message));
          }
          return [C(b.marker, ">"), C(b.gutter, O), R.length > 0 ? ` ${R}` : "", P].join("");
        } else return ` ${C(b.gutter, O)}${R.length > 0 ? ` ${R}` : ""}`;
      }).join(`
`);
      return y.message && !B && (L = `${" ".repeat(_ + 1)}${y.message}
${L}`), E ? w.reset(L) : L;
    }
    l(m, "Mn");
    function v(g, D, y, E = {}) {
      if (!d) {
        d = !0;
        let w = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
        {
          let b = new Error(w);
          b.name = "DeprecationWarning", console.warn(new Error(w));
        }
      }
      return y = Math.max(y, 0), m(g, { start: { column: y, line: D } }, E);
    }
    l(v, "To");
  }), js = {}, Nn(js, { __debug: /* @__PURE__ */ l(() => B5, "__debug"), check: /* @__PURE__ */ l(() => Of, "check"), doc: /* @__PURE__ */ l(() => fu, "doc"), format: /* @__PURE__ */ l(() => l0, "format"), formatWithCursor: /* @__PURE__ */ l(() => E0, "formatWithCursor"), getSupportInfo: /* @__PURE__ */ l(
    () => F5,
    "getSupportInfo"
  ), util: /* @__PURE__ */ l(() => mu, "util"), version: /* @__PURE__ */ l(() => y5, "version") }), Qf = /* @__PURE__ */ l((e, t, r, n) => {
    if (!(e && t == null)) return t.replaceAll ? t.replaceAll(r, n) : r.global ? t.replace(r, n) : t.split(r).join(n);
  }, "Ou"), Ma = Qf, l(Et, "Z"), Et.prototype = { diff: /* @__PURE__ */ l(function(e, t) {
    var r, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = n.callback;
    typeof n == "function" && (a = n, n = {}), this.options = n;
    var o = this;
    function s(w) {
      return a ? (setTimeout(function() {
        a(void 0, w);
      }, 0), !0) : w;
    }
    l(s, "s"), e = this.castInput(e), t = this.castInput(t), e = this.removeEmpty(this.tokenize(e)), t = this.removeEmpty(this.tokenize(t));
    var u = t.length, c = e.length, d = 1, p = u + c;
    n.maxEditLength && (p = Math.min(p, n.maxEditLength));
    var f = (r = n.timeout) !== null && r !== void 0 ? r : 1 / 0, h = Date.now() + f, m = [{ oldPos: -1, lastComponent: void 0 }], v = this.extractCommon(m[0], t, e, 0);
    if (m[0].oldPos + 1 >= c && v + 1 >= u) return s([{ value: this.join(t), count: t.length }]);
    var g = -1 / 0, D = 1 / 0;
    function y() {
      for (var w = Math.max(g, -d); w <= Math.min(D, d); w += 2) {
        var b = void 0, C = m[w - 1], S = m[w + 1];
        C && (m[w - 1] = void 0);
        var A = !1;
        if (S) {
          var x = S.oldPos - w;
          A = S && 0 <= x && x < u;
        }
        var F = C && C.oldPos + 1 < c;
        if (!A && !F) {
          m[w] = void 0;
          continue;
        }
        if (!F || A && C.oldPos + 1 < S.oldPos ? b = o.addToPath(S, !0, void 0, 0) : b = o.addToPath(C, void 0, !0, 1), v = o.extractCommon(
          b,
          t,
          e,
          w
        ), b.oldPos + 1 >= c && v + 1 >= u) return s(_h(o, b.lastComponent, t, e, o.useLongestToken));
        m[w] = b, b.oldPos + 1 >= c && (D = Math.min(D, w - 1)), v + 1 >= u && (g = Math.max(g, w + 1));
      }
      d++;
    }
    if (l(y, "A"), a) (/* @__PURE__ */ l(function w() {
      setTimeout(function() {
        if (d > p || Date.now() > h) return a();
        y() || w();
      }, 0);
    }, "h"))();
    else for (; d <= p && Date.now() <= h; ) {
      var E = y();
      if (E) return E;
    }
  }, "diff"), addToPath: /* @__PURE__ */ l(function(e, t, r, n) {
    var a = e.lastComponent;
    return a && a.added === t && a.removed === r ? { oldPos: e.oldPos + n, lastComponent: { count: a.count + 1, added: t, removed: r, previousComponent: a.previousComponent } } : { oldPos: e.oldPos + n, lastComponent: { count: 1, added: t, removed: r, previousComponent: a } };
  }, "addToPath"), extractCommon: /* @__PURE__ */ l(function(e, t, r, n) {
    for (var a = t.length, o = r.length, s = e.oldPos, u = s - n, c = 0; u + 1 < a && s + 1 < o && this.equals(t[u + 1], r[s + 1]); ) u++, s++, c++;
    return c && (e.lastComponent = { count: c, previousComponent: e.lastComponent }), e.oldPos = s, u;
  }, "extractCommon"), equals: /* @__PURE__ */ l(function(e, t) {
    return this.options.comparator ? this.options.comparator(e, t) : e === t || this.options.ignoreCase && e.toLowerCase() === t.toLowerCase();
  }, "equals"), removeEmpty: /* @__PURE__ */ l(function(e) {
    for (var t = [], r = 0; r < e.length; r++) e[r] && t.push(e[r]);
    return t;
  }, "removeEmpty"), castInput: /* @__PURE__ */ l(function(e) {
    return e;
  }, "castInput"), tokenize: /* @__PURE__ */ l(function(e) {
    return e.split("");
  }, "tokenize"), join: /* @__PURE__ */ l(function(e) {
    return e.join("");
  }, "join") }, l(_h, "Su"), Vs = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, qs = /\S/, Ws = new Et(), Ws.equals = function(e, t) {
    return this.options.ignoreCase && (e = e.toLowerCase(), t = t.toLowerCase()), e === t || this.options.ignoreWhitespace && !qs.test(e) && !qs.test(t);
  }, Ws.tokenize = function(e) {
    for (var t = e.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), r = 0; r < t.length - 1; r++) !t[r + 1] && t[r + 2] && Vs.test(t[r]) && Vs.test(
      t[r + 2]
    ) && (t[r] += t[r + 2], t.splice(r + 1, 2), r--);
    return t;
  }, Us = new Et(), Us.tokenize = function(e) {
    this.options.stripTrailingCr && (e = e.replace(/\r\n/g, `
`));
    var t = [], r = e.split(/(\n|\r\n)/);
    r[r.length - 1] || r.pop();
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      n % 2 && !this.options.newlineIsToken ? t[t.length - 1] += a : (this.options.ignoreWhitespace && (a = a.trim()), t.push(a));
    }
    return t;
  }, e5 = new Et(), e5.tokenize = function(e) {
    return e.split(/(\S.+?[.!?])(?=\s+|$)/);
  }, t5 = new Et(), t5.tokenize = function(e) {
    return e.split(/([{}:;,]|\s+)/);
  }, l(sa, "$e"), Bv = Object.prototype.toString, Or = new Et(), Or.useLongestToken = !0, Or.tokenize = Us.tokenize, Or.castInput = function(e) {
    var t = this.options, r = t.undefinedReplacement, n = t.stringifyReplacer, a = n === void 0 ? function(o, s) {
      return typeof s > "u" ? r : s;
    } : n;
    return typeof e == "string" ? e : JSON.stringify(ei(e, null, null, a), a, "  ");
  }, Or.equals = function(e, t) {
    return Et.prototype.equals.call(Or, e.replace(/,([\r\n])/g, "$1"), t.replace(/,([\r\n])/g, "$1"));
  }, l(ei, "Bt"), Kn = new Et(), Kn.tokenize = function(e) {
    return e.slice();
  }, Kn.join = Kn.removeEmpty = function(e) {
    return e;
  }, l(P4, "dr"), l($4, "Fr"), l($i, "Be"), l(Pc, "wt"), l(j4, "mr"), Zt = "string", pt = "array", Ot = "cursor", ht = "indent", ft = "align", ut = "trim", ye = "group", Ue = "fill", Ce = "if-break", mt = "indent-if-break", gt = "line-suffix", ct = "line-suffix-boundary", le = "line", Ge = "label", Be = "break-parent", Jc = /* @__PURE__ */ new Set(
    [Ot, ht, ft, ut, ye, Ue, Ce, mt, gt, ct, le, Ge, Be]
  ), l(Ih, "Lu"), Yt = Ih, zv = /* @__PURE__ */ l((e) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e), "Pu"), l(Rh, "Iu"), r5 = (Gs = class extends Error {
    name = "InvalidDocError";
    constructor(e) {
      super(Rh(e)), this.doc = e;
    }
  }, l(Gs, "xt"), Gs), br = r5, s0 = {}, l(Lh, "Ru"), ii = Lh, Zs = /* @__PURE__ */ l(() => {
  }, "hr"), Ze = Zs, qi = Zs, l(wa, "De"), l(wr, "ae"), l($u, "_t"), l(Th, "Cr"), l(Mh, "gr"), l(Hh, "yr"), l(Oh, "Ar"), l(ju, "Ge"), l(Nh, "Br"), l(Ph, "wr"), l(ti, "xe"), n5 = { type: ct }, Jn = { type: Be }, a5 = { type: ut }, Bo = { type: le, hard: !0 }, Ys = { type: le, hard: !0, literal: !0 }, u0 = { type: le }, o5 = { type: le, soft: !0 }, Nt = [Bo, Jn], c0 = [Ys, Jn], li = { type: Ot }, l(Vu, "be"), l(qu, "Je"), l($h, "br"), l(it, "ee"), l(V4, "Or"), i5 = /* @__PURE__ */ l((e, t, r) => {
    if (!(e && t == null)) return Array.isArray(t) || typeof t == "string" ? t[r < 0 ? t.length + r : r] : t.at(r);
  }, "Yu"), ne = i5, _v = /* @__PURE__ */ l(
    () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g,
    "Sr"
  ), l(jh, "Nr"), l(Vh, "Tr"), Iv = /* @__PURE__ */ l((e) => !(jh(e) || Vh(e)), "kr"), Rv = /[^\x20-\x7F]/u, l(qh, "Hu"), si = qh, l(ba, "Ne"), l(ri, "Xe"), l(q4, "Wu"), l(Wh, "Ir"), l(Wu, "Lr"), l(W4, "Rr"), l(U4, "Mu"), l(Uh, "Yr"), l(Uu, "Pr"), l(en, "Se"), l(Gu, "Ze"), l(G4, "$u"), l(Z4, "Vu"), l(Gh, "jr"), l(Y4, "Uu"), l(Zh, "Hr"), l($c, "Qe"), we = Symbol("MODE_BREAK"), $e = Symbol("MODE_FLAT"), tn = Symbol("cursor"), l(jc, "Wr"), l(X4, "zu"), l(K4, "Gu"), l(ni, "bt"), l(ai, "Ot"), l(Xn, "et"), l(Da, "Fe"), l(Yh, "Ku"), ui = Yh, l5 = (Ks = class {
    constructor(e) {
      Gf(this, sr), this.stack = [e];
    }
    get key() {
      let { stack: e, siblings: t } = this;
      return ne(!1, e, t === null ? -2 : -4) ?? null;
    }
    get index() {
      return this.siblings === null ? null : ne(!1, this.stack, -2);
    }
    get node() {
      return ne(!1, this.stack, -1);
    }
    get parent() {
      return this.getNode(1);
    }
    get grandparent() {
      return this.getNode(2);
    }
    get isInArray() {
      return this.siblings !== null;
    }
    get siblings() {
      let { stack: e } = this, t = ne(!1, e, -3);
      return Array.isArray(t) ? t : null;
    }
    get next() {
      let { siblings: e } = this;
      return e === null ? null : e[this.index + 1];
    }
    get previous() {
      let { siblings: e } = this;
      return e === null ? null : e[this.index - 1];
    }
    get isFirst() {
      return this.index === 0;
    }
    get isLast() {
      let { siblings: e, index: t } = this;
      return e !== null && t === e.length - 1;
    }
    get isRoot() {
      return this.stack.length === 1;
    }
    get root() {
      return this.stack[0];
    }
    get ancestors() {
      return [...Hr(this, sr, go).call(this)];
    }
    getName() {
      let { stack: e } = this, { length: t } = e;
      return t > 1 ? ne(!1, e, -2) : null;
    }
    getValue() {
      return ne(!1, this.stack, -1);
    }
    getNode(e = 0) {
      let t = Hr(this, sr, Xs).call(this, e);
      return t === -1 ? null : this.stack[t];
    }
    getParentNode(e = 0) {
      return this.getNode(e + 1);
    }
    call(e, ...t) {
      let { stack: r } = this, { length: n } = r, a = ne(!1, r, -1);
      for (let o of t) a = a[o], r.push(o, a);
      try {
        return e(this);
      } finally {
        r.length = n;
      }
    }
    callParent(e, t = 0) {
      let r = Hr(this, sr, Xs).call(this, t + 1), n = this.stack.splice(r + 1);
      try {
        return e(this);
      } finally {
        this.stack.push(...n);
      }
    }
    each(e, ...t) {
      let { stack: r } = this, { length: n } = r, a = ne(!1, r, -1);
      for (let o of t) a = a[o], r.push(o, a);
      try {
        for (let o = 0; o < a.length; ++o) r.push(o, a[o]), e(this, o, a), r.length -= 2;
      } finally {
        r.length = n;
      }
    }
    map(e, ...t) {
      let r = [];
      return this.each((n, a, o) => {
        r[a] = e(n, a, o);
      }, ...t), r;
    }
    match(...e) {
      let t = this.stack.length - 1, r = null, n = this.stack[t--];
      for (let a of e) {
        if (n === void 0) return !1;
        let o = null;
        if (typeof r == "number" && (o = r, r = this.stack[t--], n = this.stack[t--]), a && !a(n, r, o)) return !1;
        r = this.stack[t--], n = this.stack[t--];
      }
      return !0;
    }
    findAncestor(e) {
      for (let t of Hr(this, sr, go).call(this)) if (e(t)) return t;
    }
    hasAncestor(e) {
      for (let t of Hr(this, sr, go).call(this)) if (e(t)) return !0;
      return !1;
    }
  }, l(Ks, "St"), Ks), sr = /* @__PURE__ */ new WeakSet(), Xs = /* @__PURE__ */ l(function(e) {
    let { stack: t } = this;
    for (let r = t.length - 1; r >= 0; r -= 2) if (!Array.isArray(t[r]) && --e < 0) return r;
    return -1;
  }, "Nt"), go = /* @__PURE__ */ l(function* () {
    let { stack: e } = this;
    for (let t = e.length - 3; t >= 0; t -= 2) {
      let r = e[t];
      Array.isArray(r) || (yield r);
    }
  }, "tt"), Lv = l5, Js = new Proxy(() => {
  }, { get: /* @__PURE__ */ l(() => Js, "get") }), ci = Js, l(Xh, "qu"), Tv = Xh, l(Vc, "Tt"), l(J4, "Ur"), l(Mr, "Ee"), s5 = Mr(/\s/u), Ft = Mr(" 	"), d0 = Mr(",; 	"), p0 = Mr(/[^\n\r]/u), l(Kh, "Ju"), Wt = Kh, l(Jh, "Xu"), At = Jh, l(Qh, "Zu"), Mv = Qh, h0 = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]), Hv = /* @__PURE__ */ l(
    (e) => Object.keys(e).filter((t) => !h0.has(t)),
    "Qu"
  ), l(ef, "eo"), Ha = ef, l(Q4, "to"), l(ji, "Lt"), l(pr, "ue"), l(ua, "re"), l(hr, "oe"), zo = /* @__PURE__ */ new WeakMap(), l(Vi, "ut"), l(qc, "qr"), _o = /* @__PURE__ */ l(() => !1, "It"), l(ev, "Jr"), Qc = /* @__PURE__ */ l((e) => !/[\S\n\u2028\u2029]/u.test(e), "Xr"), l(tv, "ro"), l(rv, "no"), l(Zu, "Kr"), l(Ao, "Rt"), l(tf, "uo"), Wi = tf, l(Wc, "Zr"), l(nv, "oo"), l(av, "io"), l(ov, "so"), l(iv, "Qr"), l(lv, "en"), l(rf, "ao"), Ov = rf, e1 = (Qs = class extends Error {
    name = "ConfigError";
  }, l(Qs, "Pe"), Qs), f0 = (eu = class extends Error {
    name = "UndefinedParserError";
  }, l(eu, "Ie"), eu), Nv = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: {
    category: "Special",
    type: "path",
    description: "Specify the input filepath. This will be used to do parser inference.",
    cliName: "stdin-filepath",
    cliCategory: "Other",
    cliDescription: "Path to the file to pretend that stdin comes from."
  }, insertPragma: {
    category: "Special",
    type: "boolean",
    default: !1,
    description: "Insert @format pragma into file's first docblock comment.",
    cliCategory: "Other"
  }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: /* @__PURE__ */ l((e) => typeof e == "string" || typeof e == "function", "exception"), choices: [
    { value: "flow", description: "Flow" },
    { value: "babel", description: "JavaScript" },
    { value: "babel-flow", description: "Flow" },
    { value: "babel-ts", description: "TypeScript" },
    { value: "typescript", description: "TypeScript" },
    { value: "acorn", description: "JavaScript" },
    { value: "espree", description: "JavaScript" },
    { value: "meriyah", description: "JavaScript" },
    { value: "css", description: "CSS" },
    { value: "less", description: "Less" },
    { value: "scss", description: "SCSS" },
    { value: "json", description: "JSON" },
    { value: "json5", description: "JSON5" },
    { value: "jsonc", description: "JSON with Comments" },
    { value: "json-stringify", description: "JSON.stringify" },
    { value: "graphql", description: "GraphQL" },
    { value: "markdown", description: "Markdown" },
    { value: "mdx", description: "MDX" },
    { value: "vue", description: "Vue" },
    { value: "yaml", description: "YAML" },
    { value: "glimmer", description: "Ember / Handlebars" },
    {
      value: "html",
      description: "HTML"
    },
    { value: "angular", description: "Angular" },
    { value: "lwc", description: "Lightning Web Components" }
  ] }, plugins: {
    type: "path",
    array: !0,
    default: [{ value: [] }],
    category: "Global",
    description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.",
    exception: /* @__PURE__ */ l((e) => typeof e == "string" || typeof e == "object", "exception"),
    cliName: "plugin",
    cliCategory: "Config"
  }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: {
    start: 0,
    end: 1 / 0,
    step: 1
  } }, rangeEnd: {
    category: "Special",
    type: "int",
    default: 1 / 0,
    range: { start: 0, end: 1 / 0, step: 1 },
    description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`,
    cliCategory: "Editor"
  }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: {
    category: "Special",
    type: "boolean",
    default: !1,
    description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`,
    cliCategory: "Other"
  }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } }, l(Yu, "ot"), l(sv, "Do"), l(uv, "lo"), Pv = /* @__PURE__ */ l((e) => String(e).split(/[/\\]/u).pop(), "co"), l(Xu, "nn"), l(cv, "fo"), l(nf, "po"), $v = nf, ur = { key: /* @__PURE__ */ l((e) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e) ? e : JSON.stringify(e), "key"), value(e) {
    if (e === null || typeof e != "object") return JSON.stringify(e);
    if (Array.isArray(e)) return `[${e.map((r) => ur.value(r)).join(", ")}]`;
    let t = Object.keys(e);
    return t.length === 0 ? "{}" : `{ ${t.map((r) => `${ur.key(r)}: ${ur.value(e[r])}`).join(", ")} }`;
  }, pair: /* @__PURE__ */ l(({ key: e, value: t }) => ur.value({ [e]: t }), "pair") }, tu = Pn(mo(), 1), u5 = /* @__PURE__ */ l((e, t, { descriptor: r }) => {
    let n = [`${tu.default.yellow(typeof e == "string" ? r.key(e) : r.pair(e))} is deprecated`];
    return t && n.push(`we now treat it as ${tu.default.blue(typeof t == "string" ? r.key(t) : r.pair(t))}`), n.join("; ") + ".";
  }, "an"), fr = Pn(mo(), 1), m0 = Symbol.for("vnopts.VALUE_NOT_EXIST"), $n = Symbol.for("vnopts.VALUE_UNCHANGED"), g0 = " ".repeat(2), c5 = /* @__PURE__ */ l((e, t, r) => {
    let { text: n, list: a } = r.normalizeExpectedResult(r.schemas[e].expected(r)), o = [];
    return n && o.push(Rs(e, t, n, r.descriptor)), a && o.push([Rs(e, t, a.title, r.descriptor)].concat(a.values.map((s) => Ku(s, r.loggerPrintWidth))).join(`
`)), Ju(o, r.loggerPrintWidth);
  }, "cn"), l(Rs, "ln"), l(Ku, "fn"), l(Ju, "pn"), ru = Pn(mo(), 1), Io = [], v0 = [], l(af, "Ht"), w0 = /* @__PURE__ */ l((e, t, { descriptor: r, logger: n, schemas: a }) => {
    let o = [`Ignored unknown option ${ru.default.yellow(r.pair({ key: e, value: t }))}.`], s = Object.keys(a).sort().find((u) => af(e, u) < 3);
    s && o.push(`Did you mean ${ru.default.blue(r.key(s))}?`), n.warn(o.join(" "));
  }, "at"), jv = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"], l(of, "mo"), xt = (nu = class {
    static create(e) {
      return of(this, e);
    }
    constructor(e) {
      this.name = e.name;
    }
    default(e) {
    }
    expected(e) {
      return "nothing";
    }
    validate(e, t) {
      return !1;
    }
    deprecated(e, t) {
      return !1;
    }
    forward(e, t) {
    }
    redirect(e, t) {
    }
    overlap(e, t, r) {
      return e;
    }
    preprocess(e, t) {
      return e;
    }
    postprocess(e, t) {
      return $n;
    }
  }, l(nu, "O"), nu), l(dv, "Eo"), Vv = (au = class extends xt {
    constructor(e) {
      super(e), this._sourceName = e.sourceName;
    }
    expected(e) {
      return e.schemas[this._sourceName].expected(e);
    }
    validate(e, t) {
      return t.schemas[this._sourceName].validate(e, t);
    }
    redirect(e, t) {
      return this._sourceName;
    }
  }, l(au, "Dt"), au), qv = (ou = class extends xt {
    expected() {
      return "anything";
    }
    validate() {
      return !0;
    }
  }, l(ou, "lt"), ou), Wv = (iu = class extends xt {
    constructor({ valueSchema: e, name: t = e.name, ...r }) {
      super({ ...r, name: t }), this._valueSchema = e;
    }
    expected(e) {
      let { text: t, list: r } = e.normalizeExpectedResult(this._valueSchema.expected(e));
      return { text: t && `an array of ${t}`, list: r && { title: "an array of the following values", values: [{ list: r }] } };
    }
    validate(e, t) {
      if (!Array.isArray(e)) return !1;
      let r = [];
      for (let n of e) {
        let a = t.normalizeValidateResult(this._valueSchema.validate(n, t), n);
        a !== !0 && r.push(a.value);
      }
      return r.length === 0 ? !0 : { value: r };
    }
    deprecated(e, t) {
      let r = [];
      for (let n of e) {
        let a = t.normalizeDeprecatedResult(this._valueSchema.deprecated(n, t), n);
        a !== !1 && r.push(...a.map(({ value: o }) => ({ value: [o] })));
      }
      return r;
    }
    forward(e, t) {
      let r = [];
      for (let n of e) {
        let a = t.normalizeForwardResult(this._valueSchema.forward(n, t), n);
        r.push(...a.map(Ls));
      }
      return r;
    }
    redirect(e, t) {
      let r = [], n = [];
      for (let a of e) {
        let o = t.normalizeRedirectResult(this._valueSchema.redirect(a, t), a);
        "remain" in o && r.push(o.remain), n.push(...o.redirect.map(Ls));
      }
      return r.length === 0 ? { redirect: n } : { redirect: n, remain: r };
    }
    overlap(e, t) {
      return e.concat(t);
    }
  }, l(iu, "ct"), iu), l(Ls, "Fn"), Uv = (lu = class extends xt {
    expected() {
      return "true or false";
    }
    validate(e) {
      return typeof e == "boolean";
    }
  }, l(lu, "ft"), lu), l(lf, "En"), l(sf, "hn"), l(uf, "Cn"), l(cf, "gn"), l(df, "yn"), l(pf, "An"), l(hf, "Bn"), l(Ts, "Mt"), l(Qu, "$t"), l(Ms, "Vt"), l(Hs, "Ut"), l(e0, "mn"), l(ko, "pt"), l(Os, "zt"), l(pv, "ho"), Gv = (su = class extends xt {
    constructor(e) {
      super(e), this._choices = sf(e.choices.map((t) => t && typeof t == "object" ? t : { value: t }), "value");
    }
    expected({ descriptor: e }) {
      let t = Array.from(this._choices.keys()).map((a) => this._choices.get(a)).filter(({ hidden: a }) => !a).map((a) => a.value).sort(pf).map(
        e.value
      ), r = t.slice(0, -2), n = t.slice(-2);
      return { text: r.concat(n.join(" or ")).join(", "), list: { title: "one of the following values", values: t } };
    }
    validate(e) {
      return this._choices.has(e);
    }
    deprecated(e) {
      let t = this._choices.get(e);
      return t && t.deprecated ? { value: e } : !1;
    }
    forward(e) {
      let t = this._choices.get(e);
      return t ? t.forward : void 0;
    }
    redirect(e) {
      let t = this._choices.get(e);
      return t ? t.redirect : void 0;
    }
  }, l(su, "dt"), su), d5 = (uu = class extends xt {
    expected() {
      return "a number";
    }
    validate(e, t) {
      return typeof e == "number";
    }
  }, l(uu, "Ft"), uu), Zv = (cu = class extends d5 {
    expected() {
      return "an integer";
    }
    validate(e, t) {
      return t.normalizeValidateResult(super.validate(e, t), e) === !0 && df(e);
    }
  }, l(cu, "mt"), cu), b0 = (du = class extends xt {
    expected() {
      return "a string";
    }
    validate(e) {
      return typeof e == "string";
    }
  }, l(du, "Re"), du), p5 = ur, h5 = w0, f5 = c5, m5 = u5, Yv = (pu = class {
    constructor(e, t) {
      let { logger: r = console, loggerPrintWidth: n = 80, descriptor: a = p5, unknown: o = h5, invalid: s = f5, deprecated: u = m5, missing: c = /* @__PURE__ */ l(
        () => !1,
        "D"
      ), required: d = /* @__PURE__ */ l(() => !1, "l"), preprocess: p = /* @__PURE__ */ l((h) => h, "d"), postprocess: f = /* @__PURE__ */ l(
        () => $n,
        "f"
      ) } = t || {};
      this._utils = {
        descriptor: a,
        logger: r || { warn: /* @__PURE__ */ l(() => {
        }, "warn") },
        loggerPrintWidth: n,
        schemas: lf(e, "name"),
        normalizeDefaultResult: Ts,
        normalizeExpectedResult: Qu,
        normalizeDeprecatedResult: Hs,
        normalizeForwardResult: ko,
        normalizeRedirectResult: Os,
        normalizeValidateResult: Ms
      }, this._unknownHandler = o, this._invalidHandler = hf(s), this._deprecatedHandler = u, this._identifyMissing = (h, m) => !(h in m) || c(h, m), this._identifyRequired = d, this._preprocess = p, this._postprocess = f, this.cleanHistory();
    }
    cleanHistory() {
      this._hasDeprecationWarned = uf();
    }
    normalize(e) {
      let t = {}, r = [this._preprocess(e, this._utils)], n = /* @__PURE__ */ l(() => {
        for (; r.length !== 0; ) {
          let a = r.shift(), o = this._applyNormalization(a, t);
          r.push(...o);
        }
      }, "u");
      n();
      for (let a of Object.keys(this._utils.schemas)) {
        let o = this._utils.schemas[a];
        if (!(a in t)) {
          let s = Ts(o.default(this._utils));
          "value" in s && r.push({ [a]: s.value });
        }
      }
      n();
      for (let a of Object.keys(this._utils.schemas)) {
        if (!(a in t)) continue;
        let o = this._utils.schemas[a], s = t[a], u = o.postprocess(s, this._utils);
        u !== $n && (this._applyValidation(u, a, o), t[a] = u);
      }
      return this._applyPostprocess(t), this._applyRequiredCheck(t), t;
    }
    _applyNormalization(e, t) {
      let r = [], { knownKeys: n, unknownKeys: a } = this._partitionOptionKeys(e);
      for (let o of n) {
        let s = this._utils.schemas[o], u = s.preprocess(e[o], this._utils);
        this._applyValidation(u, o, s);
        let c = /* @__PURE__ */ l(({ from: f, to: h }) => {
          r.push(typeof h == "string" ? { [h]: f } : { [h.key]: h.value });
        }, "D"), d = /* @__PURE__ */ l(({ value: f, redirectTo: h }) => {
          let m = Hs(s.deprecated(f, this._utils), u, !0);
          if (m !== !1) if (m === !0) this._hasDeprecationWarned(o) || this._utils.logger.warn(this._deprecatedHandler(o, h, this._utils));
          else for (let { value: v } of m) {
            let g = { key: o, value: v };
            if (!this._hasDeprecationWarned(g)) {
              let D = typeof h == "string" ? { key: h, value: v } : h;
              this._utils.logger.warn(this._deprecatedHandler(g, D, this._utils));
            }
          }
        }, "l");
        ko(s.forward(u, this._utils), u).forEach(c);
        let p = Os(s.redirect(u, this._utils), u);
        if (p.redirect.forEach(c), "remain" in p) {
          let f = p.remain;
          t[o] = o in t ? s.overlap(t[o], f, this._utils) : f, d({ value: f });
        }
        for (let { from: f, to: h } of p.redirect) d({ value: f, redirectTo: h });
      }
      for (let o of a) {
        let s = e[o];
        this._applyUnknownHandler(o, s, t, (u, c) => {
          r.push({ [u]: c });
        });
      }
      return r;
    }
    _applyRequiredCheck(e) {
      for (let t of Object.keys(this._utils.schemas)) if (this._identifyMissing(t, e) && this._identifyRequired(t)) throw this._invalidHandler(
        t,
        m0,
        this._utils
      );
    }
    _partitionOptionKeys(e) {
      let [t, r] = cf(Object.keys(e).filter((n) => !this._identifyMissing(n, e)), (n) => n in this._utils.schemas);
      return { knownKeys: t, unknownKeys: r };
    }
    _applyValidation(e, t, r) {
      let n = Ms(r.validate(e, this._utils), e);
      if (n !== !0) throw this._invalidHandler(t, n.value, this._utils);
    }
    _applyUnknownHandler(e, t, r, n) {
      let a = this._unknownHandler(e, t, this._utils);
      if (a) for (let o of Object.keys(a)) {
        if (this._identifyMissing(o, a)) continue;
        let s = a[o];
        o in this._utils.schemas ? n(o, s) : r[o] = s;
      }
    }
    _applyPostprocess(e) {
      let t = this._postprocess(e, this._utils);
      if (t !== $n) {
        if (t.delete) for (let r of t.delete) delete e[r];
        if (t.override) {
          let { knownKeys: r, unknownKeys: n } = this._partitionOptionKeys(t.override);
          for (let a of r) {
            let o = t.override[a];
            this._applyValidation(o, a, this._utils.schemas[a]), e[a] = o;
          }
          for (let a of n) {
            let o = t.override[a];
            this._applyUnknownHandler(a, o, e, (s, u) => {
              let c = this._utils.schemas[s];
              this._applyValidation(u, s, c), e[s] = u;
            });
          }
        }
      }
    }
  }, l(pu, "Et"), pu), l(ff, "go"), l(hv, "yo"), l(fv, "Ao"), Xv = ff, g5 = /* @__PURE__ */ l((e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLast) return t.findLast(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let a = t[n];
        if (r(a, n, t)) return a;
      }
    }
  }, "Bo"), t1 = g5, l(Uc, "qt"), l(mv, "On"), l(Gc, "ht"), l(Zc, "Jt"), l(gv, "Sn"), D0 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null }, l(mf, "wo"), Ar = mf, Kv = Pn(Jf(), 1), l(gf, "ko"), l(vv, "Lo"), yn = gf, l(wv, "Un"), l(bv, "Po"), l(vf, "Io"), Jv = vf, l(Ta, "Ye"), l(t0, "Gn"), l(Yc, "Qt"), l(wf, "Ro"), Qv = wf, l(bf, "Yo"), e3 = bf, v5 = /* @__PURE__ */ l((e, t, r) => {
    if (!(e && t == null)) {
      if (t.findLastIndex) return t.findLastIndex(r);
      for (let n = t.length - 1; n >= 0; n--) {
        let a = t[n];
        if (r(a, n, t)) return n;
      }
      return -1;
    }
  }, "jo"), t3 = v5, r3 = /* @__PURE__ */ l(({ parser: e }) => e === "json" || e === "json5" || e === "jsonc" || e === "json-stringify", "Ho"), l(Dv, "Wo"), l(r0, "Xn"), l(yv, "Mo"), l(oi, "er"), l(Ev, "$o"), r1 = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), n3 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]), l(n0, "Zn"), l(Cv, "eu"), n1 = "\uFEFF", y0 = Symbol("cursor"), l(Xc, "ou"), l(xv, "Uo"), l(Fo, "tr"), l(a0, "ru"), l(Kc, "iu"), l(o0, "nu"), l(i0, "rr"), l(Df, "su"), l(yf, "au"), l(Ef, "Du"), l(Cf, "lu"), l(xf, "cu"), fu = {}, Nn(fu, { builders: /* @__PURE__ */ l(() => w5, "builders"), printer: /* @__PURE__ */ l(() => b5, "printer"), utils: /* @__PURE__ */ l(
    () => D5,
    "utils"
  ) }), w5 = {
    join: Vu,
    line: u0,
    softline: o5,
    hardline: Nt,
    literalline: c0,
    group: $u,
    conditionalGroup: Oh,
    fill: ju,
    lineSuffix: ti,
    lineSuffixBoundary: n5,
    cursor: li,
    breakParent: Jn,
    ifBreak: Nh,
    trim: a5,
    indent: wa,
    indentIfBreak: Ph,
    align: wr,
    addAlignmentToDoc: qu,
    markAsRoot: Mh,
    dedentToRoot: Th,
    dedent: Hh,
    hardlineWithoutBreakParent: Bo,
    literallineWithoutBreakParent: Ys,
    label: $h,
    concat: /* @__PURE__ */ l((e) => e, "concat")
  }, b5 = { printDocToString: Da }, D5 = {
    willBreak: Wh,
    traverseDoc: ii,
    findInDoc: ri,
    mapDoc: ba,
    removeLines: Uh,
    stripTrailingHardline: Gu,
    replaceEndOfLine: Gh,
    canBreak: Zh
  }, y5 = "3.3.3", mu = {}, Nn(mu, { addDanglingComment: /* @__PURE__ */ l(() => ua, "addDanglingComment"), addLeadingComment: /* @__PURE__ */ l(() => pr, "addLeadingComment"), addTrailingComment: /* @__PURE__ */ l(() => hr, "addTrailingComment"), getAlignmentSize: /* @__PURE__ */ l(() => ui, "getAlignmentSize"), getIndentSize: /* @__PURE__ */ l(() => E5, "getIndentSize"), getMaxContinuousCount: /* @__PURE__ */ l(() => C5, "getMaxContinuousCount"), getNextNonSpaceNonCommentCharacter: /* @__PURE__ */ l(() => x5, "getNextNonSpaceNonCommentCharacter"), getNextNonSpaceNonCommentCharacterIndex: /* @__PURE__ */ l(
    () => Tf,
    "getNextNonSpaceNonCommentCharacterIndex"
  ), getStringWidth: /* @__PURE__ */ l(() => si, "getStringWidth"), hasNewline: /* @__PURE__ */ l(
    () => At,
    "hasNewline"
  ), hasNewlineInRange: /* @__PURE__ */ l(() => S5, "hasNewlineInRange"), hasSpaces: /* @__PURE__ */ l(() => A5, "hasSpaces"), isNextLineEmpty: /* @__PURE__ */ l(() => Hf, "isNextLineEmpty"), isNextLineEmptyAfterIndex: /* @__PURE__ */ l(() => hi, "isNextLineEmptyAfterIndex"), isPreviousLineEmpty: /* @__PURE__ */ l(() => Mf, "isPreviousLineEmpty"), makeString: /* @__PURE__ */ l(() => k5, "makeString"), skip: /* @__PURE__ */ l(() => Mr, "skip"), skipEverythingButNewLine: /* @__PURE__ */ l(() => p0, "skipEverythingButNewLine"), skipInlineComment: /* @__PURE__ */ l(
    () => di,
    "skipInlineComment"
  ), skipNewline: /* @__PURE__ */ l(() => Wt, "skipNewline"), skipSpaces: /* @__PURE__ */ l(() => Ft, "skipSpaces"), skipToLineEnd: /* @__PURE__ */ l(() => d0, "skipToLineEnd"), skipTrailingComment: /* @__PURE__ */ l(() => pi, "skipTrailingComment"), skipWhitespace: /* @__PURE__ */ l(
    () => s5,
    "skipWhitespace"
  ) }), l(Sf, "Jo"), di = Sf, l(Af, "Xo"), pi = Af, l(kf, "Zo"), Ui = kf, l(Ff, "Qo"), hi = Ff, l(Bf, "ei"), E5 = Bf, l(Sv, "ur"), l(zf, "ti"), C5 = zf, l(_f, "ri"), x5 = _f, l(If, "ni"), S5 = If, l(Rf, "ui"), A5 = Rf, l(Lf, "oi"), k5 = Lf, l(Av, "ii"), l(Tf, "si"), l(kv, "ai"), l(Mf, "Di"), l(Fv, "li"), l(Hf, "ci"), l(It, "fe"), E0 = It(i0), l(l0, "gu"), l(Of, "fi"), F5 = It(Yu, 0), B5 = { parse: It(Df), formatAST: It(yf), formatDoc: It(Ef), printToDoc: It(Cf), printDocToString: It(xf) }, a3 = js;
});
function o3(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  var n = Array.from(typeof e == "string" ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var a = n.reduce(function(u, c) {
    var d = c.match(/\n([\t ]+|(?!\s).)/g);
    return d ? u.concat(d.map(function(p) {
      var f, h;
      return (h = (f = p.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && h !== void 0 ? h : 0;
    })) : u;
  }, []);
  if (a.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, a) + "}", "g");
    n = n.map(function(u) {
      return u.replace(o, `
`);
    });
  }
  n[0] = n[0].replace(/^\r?\n/, "");
  var s = n[0];
  return t.forEach(function(u, c) {
    var d = s.match(/(?:^|\n)( *)$/), p = d ? d[1] : "", f = u;
    typeof u == "string" && u.includes(`
`) && (f = String(u).split(`
`).map(function(h, m) {
      return m === 0 ? h : "" + p + h;
    }).join(`
`)), s += f + n[c + 1];
  }), s;
}
var R8 = z(() => {
  l(o3, "dedent");
}), i3 = {};
vn(i3, {
  formatter: () => l3
});
var z5, l3, L8 = z(() => {
  z5 = ce(xi(), 1), _8(), I8(), R8(), l3 = (0, z5.default)(2)(async (e, t) => e === !1 ? t : e === "dedent" || e === !0 ? o3(t) : (await a3.format(t, {
    parser: e,
    plugins: [N4],
    htmlWhitespaceSensitivity: "ignore"
  })).trim());
}), C0, x0, T8 = z(() => {
  C0 = /* @__PURE__ */ l(function(e) {
    return e.reduce(function(t, r) {
      var n = r[0], a = r[1];
      return t[n] = a, t;
    }, {});
  }, "fromEntries"), x0 = typeof window < "u" && window.document && window.document.createElement ? i.useLayoutEffect : i.useEffect;
}), be, _e, Ie, De, fi, rn, mr, nn, s3, a1, Gr, u3, S0, o1, _5, I5, R5, L5, T5, M5, H5, O5, N5, c3, Me = z(() => {
  be = "top", _e = "bottom", Ie = "right", De = "left", fi = "auto", rn = [be, _e, Ie, De], mr = "start", nn = "end", s3 = "clippingParents", a1 = "viewport", Gr = "popper", u3 = "reference", S0 = /* @__PURE__ */ rn.reduce(function(e, t) {
    return e.concat([t + "-" + mr, t + "-" + nn]);
  }, []), o1 = /* @__PURE__ */ [].concat(rn, [fi]).reduce(function(e, t) {
    return e.concat([t, t + "-" + mr, t + "-" + nn]);
  }, []), _5 = "beforeRead", I5 = "read", R5 = "afterRead", L5 = "beforeMain", T5 = "main", M5 = "afterMain", H5 = "beforeWrite", O5 = "write", N5 = "afterWrite", c3 = [_5, I5, R5, L5, T5, M5, H5, O5, N5];
});
function Ye(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
var kr = z(() => {
  l(Ye, "getNodeName");
});
function xe(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
var wt = z(() => {
  l(xe, "getWindow");
});
function Ut(e) {
  var t = xe(e).Element;
  return e instanceof t || e instanceof Element;
}
function ze(e) {
  var t = xe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Gi(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = xe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var He = z(() => {
  wt(), l(Ut, "isElement"), l(ze, "isHTMLElement"), l(Gi, "isShadowRoot");
});
function P5(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, a = t.attributes[r] || {}, o = t.elements[r];
    !ze(o) || !Ye(o) || (Object.assign(o.style, n), Object.keys(a).forEach(function(s) {
      var u = a[s];
      u === !1 ? o.removeAttribute(s) : o.setAttribute(s, u === !0 ? "" : u);
    }));
  });
}
function $5(e) {
  var t = e.state, r = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var a = t.elements[n], o = t.attributes[n] || {}, s = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), u = s.reduce(function(c, d) {
        return c[d] = "", c;
      }, {});
      !ze(a) || !Ye(a) || (Object.assign(a.style, u), Object.keys(o).forEach(function(c) {
        a.removeAttribute(c);
      }));
    });
  };
}
var d3, M8 = z(() => {
  kr(), He(), l(P5, "applyStyles"), l($5, "effect"), d3 = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: P5,
    effect: $5,
    requires: ["computeStyles"]
  };
});
function We(e) {
  return e.split("-")[0];
}
var Fr = z(() => {
  l(We, "getBasePlacement");
}), Pt, ya, Dr, Br = z(() => {
  Pt = Math.max, ya = Math.min, Dr = Math.round;
});
function mi() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
var p3 = z(() => {
  l(mi, "getUAString");
});
function i1() {
  return !/^((?!chrome|android).)*safari/i.test(mi());
}
var h3 = z(() => {
  p3(), l(i1, "isLayoutViewport");
});
function yr(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), a = 1, o = 1;
  t && ze(e) && (a = e.offsetWidth > 0 && Dr(n.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && Dr(n.height) / e.offsetHeight || 1);
  var s = Ut(e) ? xe(e) : window, u = s.visualViewport, c = !i1() && r, d = (n.left + (c && u ? u.offsetLeft : 0)) / a, p = (n.top + (c && u ? u.offsetTop : 0)) / o, f = n.width / a, h = n.height / o;
  return {
    width: f,
    height: h,
    top: p,
    right: d + f,
    bottom: p + h,
    left: d,
    x: d,
    y: p
  };
}
var Oa = z(() => {
  He(), Br(), wt(), h3(), l(yr, "getBoundingClientRect");
});
function Zi(e) {
  var t = yr(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
var l1 = z(() => {
  Oa(), l(Zi, "getLayoutRect");
});
function s1(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Gi(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
var f3 = z(() => {
  He(), l(s1, "contains");
});
function vt(e) {
  return xe(e).getComputedStyle(e);
}
var Na = z(() => {
  wt(), l(vt, "getComputedStyle");
});
function m3(e) {
  return ["table", "td", "th"].indexOf(Ye(e)) >= 0;
}
var H8 = z(() => {
  kr(), l(m3, "isTableElement");
});
function zt(e) {
  return ((Ut(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
var Xt = z(() => {
  He(), l(zt, "getDocumentElement");
});
function Pa(e) {
  return Ye(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Gi(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    zt(e)
  );
}
var Yi = z(() => {
  kr(), Xt(), He(), l(Pa, "getParentNode");
});
function A0(e) {
  return !ze(e) || // https://github.com/popperjs/popper-core/issues/837
  vt(e).position === "fixed" ? null : e.offsetParent;
}
function g3(e) {
  var t = /firefox/i.test(mi()), r = /Trident/i.test(mi());
  if (r && ze(e)) {
    var n = vt(e);
    if (n.position === "fixed")
      return null;
  }
  var a = Pa(e);
  for (Gi(a) && (a = a.host); ze(a) && ["html", "body"].indexOf(Ye(a)) < 0; ) {
    var o = vt(a);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || t && o.willChange === "filter" || t && o.filter && o.filter !== "none")
      return a;
    a = a.parentNode;
  }
  return null;
}
function En(e) {
  for (var t = xe(e), r = A0(e); r && m3(r) && vt(r).position === "static"; )
    r = A0(r);
  return r && (Ye(r) === "html" || Ye(r) === "body" && vt(r).position === "static") ? t : r || g3(e) || t;
}
var $a = z(() => {
  wt(), kr(), Na(), He(), H8(), Yi(), p3(), l(A0, "getTrueOffsetParent"), l(g3, "getContainingBlock"), l(En, "getOffsetParent");
});
function Xi(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
var u1 = z(() => {
  l(Xi, "getMainAxisFromPlacement");
});
function an(e, t, r) {
  return Pt(e, ya(t, r));
}
function v3(e, t, r) {
  var n = an(e, t, r);
  return n > r ? r : n;
}
var w3 = z(() => {
  Br(), l(an, "within"), l(v3, "withinMaxClamp");
});
function c1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
var b3 = z(() => {
  l(c1, "getFreshSideObject");
});
function d1(e) {
  return Object.assign({}, c1(), e);
}
var D3 = z(() => {
  b3(), l(d1, "mergePaddingObject");
});
function p1(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var y3 = z(() => {
  l(p1, "expandToHashMap");
});
function j5(e) {
  var t, r = e.state, n = e.name, a = e.options, o = r.elements.arrow, s = r.modifiersData.popperOffsets, u = We(r.placement), c = Xi(u), d = [
    De,
    Ie
  ].indexOf(u) >= 0, p = d ? "height" : "width";
  if (!(!o || !s)) {
    var f = E3(a.padding, r), h = Zi(o), m = c === "y" ? be : De, v = c === "y" ? _e : Ie, g = r.rects.reference[p] + r.rects.reference[c] - s[c] - r.rects.popper[p], D = s[c] - r.rects.reference[c], y = En(o), E = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, w = g / 2 - D / 2, b = f[m], C = E - h[p] - f[v], S = E / 2 - h[p] / 2 + w, A = an(b, S, C), x = c;
    r.modifiersData[n] = (t = {}, t[x] = A, t.centerOffset = A - S, t);
  }
}
function V5(e) {
  var t = e.state, r = e.options, n = r.element, a = n === void 0 ? "[data-popper-arrow]" : n;
  a != null && (typeof a == "string" && (a = t.elements.popper.querySelector(a), !a) || s1(t.elements.popper, a) && (t.elements.arrow = a));
}
var E3, C3, O8 = z(() => {
  Fr(), l1(), f3(), $a(), u1(), w3(), D3(), y3(), Me(), E3 = /* @__PURE__ */ l(function(e, t) {
    return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
      placement: t.placement
    })) : e, d1(typeof e != "number" ? e : p1(e, rn));
  }, "toPaddingObject"), l(j5, "arrow"), l(V5, "effect"), C3 = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: j5,
    effect: V5,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
});
function Er(e) {
  return e.split("-")[1];
}
var ja = z(() => {
  l(Er, "getVariation");
});
function x3(e, t) {
  var r = e.x, n = e.y, a = t.devicePixelRatio || 1;
  return {
    x: Dr(r * a) / a || 0,
    y: Dr(n * a) / a || 0
  };
}
function k0(e) {
  var t, r = e.popper, n = e.popperRect, a = e.placement, o = e.variation, s = e.offsets, u = e.position, c = e.gpuAcceleration, d = e.adaptive, p = e.roundOffsets, f = e.isFixed, h = s.x, m = h === void 0 ? 0 : h, v = s.y, g = v === void 0 ? 0 : v, D = typeof p == "function" ? p({
    x: m,
    y: g
  }) : {
    x: m,
    y: g
  };
  m = D.x, g = D.y;
  var y = s.hasOwnProperty("x"), E = s.hasOwnProperty("y"), w = De, b = be, C = window;
  if (d) {
    var S = En(r), A = "clientHeight", x = "clientWidth";
    if (S === xe(r) && (S = zt(r), vt(S).position !== "static" && u === "absolute" && (A = "scrollHeight", x = "scrollWidth")), S = S, a === be || (a === De || a === Ie) && o === nn) {
      b = _e;
      var F = f && S === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        S[A]
      );
      g -= F - n.height, g *= c ? 1 : -1;
    }
    if (a === De || (a === be || a === _e) && o === nn) {
      w = Ie;
      var B = f && S === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        S[x]
      );
      m -= B - n.width, m *= c ? 1 : -1;
    }
  }
  var _ = Object.assign({
    position: u
  }, d && S3), L = p === !0 ? x3({
    x: m,
    y: g
  }, xe(r)) : {
    x: m,
    y: g
  };
  if (m = L.x, g = L.y, c) {
    var R;
    return Object.assign({}, _, (R = {}, R[b] = E ? "0" : "", R[w] = y ? "0" : "", R.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", R));
  }
  return Object.assign({}, _, (t = {}, t[b] = E ? g + "px" : "", t[w] = y ? m + "px" : "", t.transform = "", t));
}
function q5(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, a = n === void 0 ? !0 : n, o = r.adaptive, s = o === void 0 ? !0 : o, u = r.roundOffsets, c = u === void 0 ? !0 : u, d = {
    placement: We(t.placement),
    variation: Er(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: a,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, k0(Object.assign({}, d, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: c
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, k0(Object.assign({}, d, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: c
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var S3, A3, N8 = z(() => {
  Me(), $a(), wt(), Xt(), Na(), Fr(), ja(), Br(), S3 = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  }, l(x3, "roundOffsetsByDPR"), l(k0, "mapToStyles"), l(q5, "computeStyles"), A3 = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: q5,
    data: {}
  };
});
function W5(e) {
  var t = e.state, r = e.instance, n = e.options, a = n.scroll, o = a === void 0 ? !0 : a, s = n.resize, u = s === void 0 ? !0 : s, c = xe(t.elements.popper), d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return o && d.forEach(function(p) {
    p.addEventListener("scroll", r.update, Qn);
  }), u && c.addEventListener("resize", r.update, Qn), function() {
    o && d.forEach(function(p) {
      p.removeEventListener("scroll", r.update, Qn);
    }), u && c.removeEventListener("resize", r.update, Qn);
  };
}
var Qn, k3, P8 = z(() => {
  wt(), Qn = {
    passive: !0
  }, l(W5, "effect"), k3 = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: /* @__PURE__ */ l(function() {
    }, "fn"),
    effect: W5,
    data: {}
  };
});
function ca(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return F3[t];
  });
}
var F3, $8 = z(() => {
  F3 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  }, l(ca, "getOppositePlacement");
});
function F0(e) {
  return e.replace(/start|end/g, function(t) {
    return B3[t];
  });
}
var B3, j8 = z(() => {
  B3 = {
    start: "end",
    end: "start"
  }, l(F0, "getOppositeVariationPlacement");
});
function Ki(e) {
  var t = xe(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
var h1 = z(() => {
  wt(), l(Ki, "getWindowScroll");
});
function Ji(e) {
  return yr(zt(e)).left + Ki(e).scrollLeft;
}
var f1 = z(() => {
  Oa(), Xt(), h1(), l(Ji, "getWindowScrollBarX");
});
function z3(e, t) {
  var r = xe(e), n = zt(e), a = r.visualViewport, o = n.clientWidth, s = n.clientHeight, u = 0, c = 0;
  if (a) {
    o = a.width, s = a.height;
    var d = i1();
    (d || !d && t === "fixed") && (u = a.offsetLeft, c = a.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: u + Ji(e),
    y: c
  };
}
var V8 = z(() => {
  wt(), Xt(), f1(), h3(), l(z3, "getViewportRect");
});
function _3(e) {
  var t, r = zt(e), n = Ki(e), a = (t = e.ownerDocument) == null ? void 0 : t.body, o = Pt(r.scrollWidth, r.clientWidth, a ? a.scrollWidth : 0, a ? a.clientWidth : 0), s = Pt(r.scrollHeight, r.clientHeight, a ? a.scrollHeight : 0, a ? a.clientHeight : 0), u = -n.scrollLeft + Ji(
    e
  ), c = -n.scrollTop;
  return vt(a || r).direction === "rtl" && (u += Pt(r.clientWidth, a ? a.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: u,
    y: c
  };
}
var q8 = z(() => {
  Xt(), Na(), f1(), h1(), Br(), l(_3, "getDocumentRect");
});
function Qi(e) {
  var t = vt(e), r = t.overflow, n = t.overflowX, a = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + a + n);
}
var m1 = z(() => {
  Na(), l(Qi, "isScrollParent");
});
function g1(e) {
  return ["html", "body", "#document"].indexOf(Ye(e)) >= 0 ? e.ownerDocument.body : ze(e) && Qi(e) ? e : g1(Pa(e));
}
var W8 = z(() => {
  Yi(), m1(), kr(), He(), l(g1, "getScrollParent");
});
function on(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = g1(e), a = n === ((r = e.ownerDocument) == null ? void 0 : r.body), o = xe(n), s = a ? [o].concat(o.visualViewport || [], Qi(n) ? n : []) : n, u = t.concat(s);
  return a ? u : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    u.concat(on(Pa(s)))
  );
}
var I3 = z(() => {
  W8(), Yi(), wt(), m1(), l(on, "listScrollParents");
});
function gi(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
var R3 = z(() => {
  l(gi, "rectToClientRect");
});
function L3(e, t) {
  var r = yr(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function B0(e, t, r) {
  return t === a1 ? gi(z3(e, r)) : Ut(t) ? L3(t, r) : gi(_3(zt(e)));
}
function T3(e) {
  var t = on(Pa(e)), r = ["absolute", "fixed"].indexOf(vt(e).position) >= 0, n = r && ze(e) ? En(e) : e;
  return Ut(n) ? t.filter(function(a) {
    return Ut(a) && s1(a, n) && Ye(a) !== "body";
  }) : [];
}
function M3(e, t, r, n) {
  var a = t === "clippingParents" ? T3(e) : [].concat(t), o = [].concat(a, [r]), s = o[0], u = o.reduce(function(c, d) {
    var p = B0(e, d, n);
    return c.top = Pt(p.top, c.top), c.right = ya(p.right, c.right), c.bottom = ya(p.bottom, c.bottom), c.left = Pt(p.left, c.left), c;
  }, B0(e, s, n));
  return u.width = u.right - u.left, u.height = u.bottom - u.top, u.x = u.left, u.y = u.top, u;
}
var U8 = z(() => {
  Me(), V8(), q8(), I3(), $a(), Xt(), Na(), He(), Oa(), Yi(), f3(), kr(), R3(), Br(), l(L3, "getInnerBoundingClientRect"), l(B0, "getClientRectFromMixedType"), l(T3, "getClippingParents"), l(M3, "getClippingRect");
});
function v1(e) {
  var t = e.reference, r = e.element, n = e.placement, a = n ? We(n) : null, o = n ? Er(n) : null, s = t.x + t.width / 2 - r.width / 2, u = t.y + t.height / 2 - r.height / 2, c;
  switch (a) {
    case be:
      c = {
        x: s,
        y: t.y - r.height
      };
      break;
    case _e:
      c = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Ie:
      c = {
        x: t.x + t.width,
        y: u
      };
      break;
    case De:
      c = {
        x: t.x - r.width,
        y: u
      };
      break;
    default:
      c = {
        x: t.x,
        y: t.y
      };
  }
  var d = a ? Xi(a) : null;
  if (d != null) {
    var p = d === "y" ? "height" : "width";
    switch (o) {
      case mr:
        c[d] = c[d] - (t[p] / 2 - r[p] / 2);
        break;
      case nn:
        c[d] = c[d] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return c;
}
var H3 = z(() => {
  Fr(), ja(), u1(), Me(), l(v1, "computeOffsets");
});
function hn(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = n === void 0 ? e.placement : n, o = r.strategy, s = o === void 0 ? e.strategy : o, u = r.boundary, c = u === void 0 ? s3 : u, d = r.rootBoundary, p = d === void 0 ? a1 : d, f = r.elementContext, h = f === void 0 ? Gr : f, m = r.altBoundary, v = m === void 0 ? !1 : m, g = r.padding, D = g === void 0 ? 0 : g, y = d1(typeof D != "number" ? D : p1(D, rn)), E = h === Gr ? u3 : Gr, w = e.rects.popper, b = e.elements[v ? E : h], C = M3(Ut(b) ? b : b.contextElement || zt(e.elements.popper), c, p, s), S = yr(e.elements.reference), A = v1(
    {
      reference: S,
      element: w,
      strategy: "absolute",
      placement: a
    }
  ), x = gi(Object.assign({}, w, A)), F = h === Gr ? x : S, B = {
    top: C.top - F.top + y.top,
    bottom: F.bottom - C.bottom + y.bottom,
    left: C.left - F.left + y.left,
    right: F.right - C.right + y.right
  }, _ = e.modifiersData.offset;
  if (h === Gr && _) {
    var L = _[a];
    Object.keys(B).forEach(function(R) {
      var V = [Ie, _e].indexOf(R) >= 0 ? 1 : -1, T = [be, _e].indexOf(R) >= 0 ? "y" : "x";
      B[R] += L[T] * V;
    });
  }
  return B;
}
var el = z(() => {
  U8(), Xt(), Oa(), H3(), R3(), Me(), He(), D3(), y3(), l(hn, "detectOverflow");
});
function O3(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, a = r.boundary, o = r.rootBoundary, s = r.padding, u = r.flipVariations, c = r.allowedAutoPlacements, d = c === void 0 ? o1 : c, p = Er(n), f = p ? u ? S0 : S0.filter(function(v) {
    return Er(v) === p;
  }) : rn, h = f.filter(function(v) {
    return d.indexOf(v) >= 0;
  });
  h.length === 0 && (h = f);
  var m = h.reduce(function(v, g) {
    return v[g] = hn(e, {
      placement: g,
      boundary: a,
      rootBoundary: o,
      padding: s
    })[We(g)], v;
  }, {});
  return Object.keys(m).sort(function(v, g) {
    return m[v] - m[g];
  });
}
var G8 = z(() => {
  ja(), Me(), el(), Fr(), l(O3, "computeAutoPlacement");
});
function N3(e) {
  if (We(e) === fi)
    return [];
  var t = ca(e);
  return [F0(e), t, F0(t)];
}
function U5(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, u = s === void 0 ? !0 : s, c = r.fallbackPlacements, d = r.padding, p = r.boundary, f = r.rootBoundary, h = r.altBoundary, m = r.flipVariations, v = m === void 0 ? !0 : m, g = r.allowedAutoPlacements, D = t.options.placement, y = We(D), E = y === D, w = c || (E || !v ? [ca(D)] : N3(D)), b = [D].concat(w).reduce(function(me, M) {
      return me.concat(We(M) === fi ? O3(t, {
        placement: M,
        boundary: p,
        rootBoundary: f,
        padding: d,
        flipVariations: v,
        allowedAutoPlacements: g
      }) : M);
    }, []), C = t.rects.reference, S = t.rects.popper, A = /* @__PURE__ */ new Map(), x = !0, F = b[0], B = 0; B < b.length; B++) {
      var _ = b[B], L = We(_), R = Er(_) === mr, V = [be, _e].indexOf(L) >= 0, T = V ? "width" : "height", O = hn(t, {
        placement: _,
        boundary: p,
        rootBoundary: f,
        altBoundary: h,
        padding: d
      }), j = V ? R ? Ie : De : R ? _e : be;
      C[T] > S[T] && (j = ca(j));
      var Y = ca(j), P = [];
      if (o && P.push(O[L] <= 0), u && P.push(O[j] <= 0, O[Y] <= 0), P.every(function(me) {
        return me;
      })) {
        F = _, x = !1;
        break;
      }
      A.set(_, P);
    }
    if (x)
      for (var q = v ? 3 : 1, K = /* @__PURE__ */ l(function(me) {
        var M = b.find(function(G) {
          var Z = A.get(G);
          if (Z)
            return Z.slice(0, me).every(function(pe) {
              return pe;
            });
        });
        if (M)
          return F = M, "break";
      }, "_loop"), de = q; de > 0; de--) {
        var J = K(de);
        if (J === "break") break;
      }
    t.placement !== F && (t.modifiersData[n]._skip = !0, t.placement = F, t.reset = !0);
  }
}
var P3, Z8 = z(() => {
  $8(), Fr(), j8(), el(), G8(), Me(), ja(), l(N3, "getExpandedFallbackPlacements"), l(U5, "flip"), P3 = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: U5,
    requiresIfExists: ["offset"],
    data: {
      _skip: !1
    }
  };
});
function z0(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function _0(e) {
  return [be, Ie, _e, De].some(function(t) {
    return e[t] >= 0;
  });
}
function G5(e) {
  var t = e.state, r = e.name, n = t.rects.reference, a = t.rects.popper, o = t.modifiersData.preventOverflow, s = hn(t, {
    elementContext: "reference"
  }), u = hn(t, {
    altBoundary: !0
  }), c = z0(s, n), d = z0(u, a, o), p = _0(c), f = _0(d);
  t.modifiersData[r] = {
    referenceClippingOffsets: c,
    popperEscapeOffsets: d,
    isReferenceHidden: p,
    hasPopperEscaped: f
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": p,
    "data-popper-escaped": f
  });
}
var $3, Y8 = z(() => {
  Me(), el(), l(z0, "getSideOffsets"), l(_0, "isAnySideFullyClipped"), l(G5, "hide"), $3 = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: G5
  };
});
function j3(e, t, r) {
  var n = We(e), a = [De, be].indexOf(n) >= 0 ? -1 : 1, o = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = o[0], u = o[1];
  return s = s || 0, u = (u || 0) * a, [De, Ie].indexOf(n) >= 0 ? {
    x: u,
    y: s
  } : {
    x: s,
    y: u
  };
}
function Z5(e) {
  var t = e.state, r = e.options, n = e.name, a = r.offset, o = a === void 0 ? [0, 0] : a, s = o1.reduce(function(p, f) {
    return p[f] = j3(f, t.rects, o), p;
  }, {}), u = s[t.placement], c = u.x, d = u.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = s;
}
var V3, X8 = z(() => {
  Fr(), Me(), l(j3, "distanceAndSkiddingToXY"), l(Z5, "offset"), V3 = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Z5
  };
});
function Y5(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = v1({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var q3, K8 = z(() => {
  H3(), l(Y5, "popperOffsets"), q3 = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Y5,
    data: {}
  };
});
function W3(e) {
  return e === "x" ? "y" : "x";
}
var J8 = z(() => {
  l(W3, "getAltAxis");
});
function X5(e) {
  var t = e.state, r = e.options, n = e.name, a = r.mainAxis, o = a === void 0 ? !0 : a, s = r.altAxis, u = s === void 0 ? !1 : s, c = r.boundary, d = r.rootBoundary, p = r.altBoundary, f = r.padding, h = r.tether, m = h === void 0 ? !0 : h, v = r.tetherOffset, g = v === void 0 ? 0 : v, D = hn(t, {
    boundary: c,
    rootBoundary: d,
    padding: f,
    altBoundary: p
  }), y = We(t.placement), E = Er(t.placement), w = !E, b = Xi(y), C = W3(b), S = t.modifiersData.popperOffsets, A = t.rects.reference, x = t.rects.popper, F = typeof g == "function" ? g(Object.assign({}, t.rects, {
    placement: t.placement
  })) : g, B = typeof F == "number" ? {
    mainAxis: F,
    altAxis: F
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, F), _ = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (S) {
    if (o) {
      var R, V = b === "y" ? be : De, T = b === "y" ? _e : Ie, O = b === "y" ? "height" : "width", j = S[b], Y = j + D[V], P = j - D[T], q = m ? -x[O] / 2 : 0, K = E === mr ? A[O] : x[O], de = E === mr ? -x[O] : -A[O], J = t.elements.arrow, me = m && J ? Zi(J) : {
        width: 0,
        height: 0
      }, M = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : c1(), G = M[V], Z = M[T], pe = an(
        0,
        A[O],
        me[O]
      ), Se = w ? A[O] / 2 - q - pe - G - B.mainAxis : K - pe - G - B.mainAxis, Jt = w ? -A[O] / 2 + q + pe + Z + B.mainAxis : de + pe + Z + B.mainAxis, Qe = t.elements.arrow && En(t.elements.arrow), _t = Qe ? b === "y" ? Qe.clientTop || 0 : Qe.clientLeft || 0 : 0, Ir = (R = _?.[b]) != null ? R : 0, Qt = j + Se - Ir - _t, xn = j + Jt - Ir, Va = an(m ? ya(Y, Qt) : Y, j, m ? Pt(P, xn) : P);
      S[b] = Va, L[b] = Va - j;
    }
    if (u) {
      var Rr, et = b === "x" ? be : De, qa = b === "x" ? _e : Ie, ge = S[C], er = C === "y" ? "height" : "width", tt = ge + D[et], Lr = ge - D[qa], rt = [be, De].indexOf(y) !== -1, Tr = (Rr = _?.[C]) != null ? Rr : 0, nt = rt ? tt : ge - A[er] - x[er] - Tr + B.altAxis, he = rt ? ge + A[er] + x[er] - Tr - B.altAxis : Lr, Oe = m && rt ? v3(nt, ge, he) : an(m ? nt : tt, ge, m ? he : Lr);
      S[C] = Oe, L[C] = Oe - ge;
    }
    t.modifiersData[n] = L;
  }
}
var U3, Q8 = z(() => {
  Me(), Fr(), u1(), J8(), w3(), l1(), $a(), el(), ja(), b3(), Br(), l(X5, "preventOverflow"), U3 = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: X5,
    requiresIfExists: ["offset"]
  };
}), G3 = z(() => {
});
function Z3(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
var eb = z(() => {
  l(Z3, "getHTMLElementScroll");
});
function Y3(e) {
  return e === xe(e) || !ze(e) ? Ki(e) : Z3(e);
}
var tb = z(() => {
  h1(), wt(), He(), eb(), l(Y3, "getNodeScroll");
});
function X3(e) {
  var t = e.getBoundingClientRect(), r = Dr(t.width) / e.offsetWidth || 1, n = Dr(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function K3(e, t, r) {
  r === void 0 && (r = !1);
  var n = ze(t), a = ze(t) && X3(t), o = zt(t), s = yr(e, a, r), u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((Ye(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Qi(o)) && (u = Y3(t)), ze(t) ? (c = yr(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : o && (c.x = Ji(o))), {
    x: s.left + u.scrollLeft - c.x,
    y: s.top + u.scrollTop - c.y,
    width: s.width,
    height: s.height
  };
}
var rb = z(() => {
  Oa(), tb(), kr(), He(), f1(), Xt(), m1(), Br(), l(X3, "isElementScaled"), l(K3, "getCompositeRect");
});
function J3(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(o) {
    t.set(o.name, o);
  });
  function a(o) {
    r.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(u) {
      if (!r.has(u)) {
        var c = t.get(u);
        c && a(c);
      }
    }), n.push(o);
  }
  return l(a, "sort"), e.forEach(function(o) {
    r.has(o.name) || a(o);
  }), n;
}
function Q3(e) {
  var t = J3(e);
  return c3.reduce(function(r, n) {
    return r.concat(t.filter(function(a) {
      return a.phase === n;
    }));
  }, []);
}
var nb = z(() => {
  Me(), l(J3, "order"), l(Q3, "orderModifiers");
});
function e7(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
var ab = z(() => {
  l(e7, "debounce");
});
function t7(e) {
  var t = e.reduce(function(r, n) {
    var a = r[n.name];
    return r[n.name] = a ? Object.assign({}, a, n, {
      options: Object.assign({}, a.options, n.options),
      data: Object.assign({}, a.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var ob = z(() => {
  l(t7, "mergeByName");
});
function I0() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function r7(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, a = t.defaultOptions, o = a === void 0 ? R0 : a;
  return /* @__PURE__ */ l(function(s, u, c) {
    c === void 0 && (c = o);
    var d = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, R0, o),
      modifiersData: {},
      elements: {
        reference: s,
        popper: u
      },
      attributes: {},
      styles: {}
    }, p = [], f = !1, h = {
      state: d,
      setOptions: /* @__PURE__ */ l(function(g) {
        var D = typeof g == "function" ? g(d.options) : g;
        v(), d.options = Object.assign({}, o, d.options, D), d.scrollParents = {
          reference: Ut(s) ? on(s) : s.contextElement ? on(s.contextElement) : [],
          popper: on(u)
        };
        var y = Q3(t7([].concat(n, d.options.modifiers)));
        return d.orderedModifiers = y.filter(function(E) {
          return E.enabled;
        }), m(), h.update();
      }, "setOptions"),
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: /* @__PURE__ */ l(function() {
        if (!f) {
          var g = d.elements, D = g.reference, y = g.popper;
          if (I0(D, y)) {
            d.rects = {
              reference: K3(D, En(y), d.options.strategy === "fixed"),
              popper: Zi(y)
            }, d.reset = !1, d.placement = d.options.placement, d.orderedModifiers.forEach(function(x) {
              return d.modifiersData[x.name] = Object.assign({}, x.data);
            });
            for (var E = 0; E < d.orderedModifiers.length; E++) {
              if (d.reset === !0) {
                d.reset = !1, E = -1;
                continue;
              }
              var w = d.orderedModifiers[E], b = w.fn, C = w.options, S = C === void 0 ? {} : C, A = w.name;
              typeof b == "function" && (d = b({
                state: d,
                options: S,
                name: A,
                instance: h
              }) || d);
            }
          }
        }
      }, "forceUpdate"),
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: e7(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(d);
        });
      }),
      destroy: /* @__PURE__ */ l(function() {
        v(), f = !0;
      }, "destroy")
    };
    if (!I0(s, u))
      return h;
    h.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function m() {
      d.orderedModifiers.forEach(function(g) {
        var D = g.name, y = g.options, E = y === void 0 ? {} : y, w = g.effect;
        if (typeof w == "function") {
          var b = w({
            state: d,
            name: D,
            instance: h,
            options: E
          }), C = /* @__PURE__ */ l(function() {
          }, "noopFn");
          p.push(b || C);
        }
      });
    }
    l(m, "runModifierEffects");
    function v() {
      p.forEach(function(g) {
        return g();
      }), p = [];
    }
    return l(v, "cleanupModifierEffects"), h;
  }, "createPopper");
}
var R0, ib = z(() => {
  rb(), l1(), I3(), $a(), nb(), ab(), ob(), He(), R0 = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  }, l(I0, "areValidElements"), l(r7, "popperGenerator");
}), K5, n7, lb = z(() => {
  ib(), P8(), K8(), N8(), M8(), X8(), Z8(), Q8(), O8(), Y8(), G3(), K5 = [k3, q3, A3, d3, V3, P3, U3, C3, $3], n7 = /* @__PURE__ */ r7({
    defaultModifiers: K5
  });
}), sb = z(() => {
  Me(), G3(), lb();
}), ub = H((e, t) => {
  var r = typeof Element < "u", n = typeof Map == "function", a = typeof Set == "function", o = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
  function s(u, c) {
    if (u === c) return !0;
    if (u && c && typeof u == "object" && typeof c == "object") {
      if (u.constructor !== c.constructor) return !1;
      var d, p, f;
      if (Array.isArray(u)) {
        if (d = u.length, d != c.length) return !1;
        for (p = d; p-- !== 0; )
          if (!s(u[p], c[p])) return !1;
        return !0;
      }
      var h;
      if (n && u instanceof Map && c instanceof Map) {
        if (u.size !== c.size) return !1;
        for (h = u.entries(); !(p = h.next()).done; )
          if (!c.has(p.value[0])) return !1;
        for (h = u.entries(); !(p = h.next()).done; )
          if (!s(p.value[1], c.get(p.value[0]))) return !1;
        return !0;
      }
      if (a && u instanceof Set && c instanceof Set) {
        if (u.size !== c.size) return !1;
        for (h = u.entries(); !(p = h.next()).done; )
          if (!c.has(p.value[0])) return !1;
        return !0;
      }
      if (o && ArrayBuffer.isView(u) && ArrayBuffer.isView(c)) {
        if (d = u.length, d != c.length) return !1;
        for (p = d; p-- !== 0; )
          if (u[p] !== c[p]) return !1;
        return !0;
      }
      if (u.constructor === RegExp) return u.source === c.source && u.flags === c.flags;
      if (u.valueOf !== Object.prototype.valueOf && typeof u.valueOf == "function" && typeof c.valueOf == "function") return u.valueOf() === c.valueOf();
      if (u.toString !== Object.prototype.toString && typeof u.toString == "function" && typeof c.toString == "function") return u.toString() === c.toString();
      if (f = Object.keys(u), d = f.length, d !== Object.keys(c).length) return !1;
      for (p = d; p-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(c, f[p])) return !1;
      if (r && u instanceof Element) return !1;
      for (p = d; p-- !== 0; )
        if (!((f[p] === "_owner" || f[p] === "__v" || f[p] === "__o") && u.$$typeof) && !s(u[f[p]], c[f[p]]))
          return !1;
      return !0;
    }
    return u !== u && c !== c;
  }
  l(s, "equal"), t.exports = /* @__PURE__ */ l(function(u, c) {
    try {
      return s(u, c);
    } catch (d) {
      if ((d.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw d;
    }
  }, "isEqual");
}), J5, Q5, a7, cb = z(() => {
  sb(), J5 = ce(ub()), T8(), Q5 = [], a7 = /* @__PURE__ */ l(function(e, t, r) {
    r === void 0 && (r = {});
    var n = i.useRef(null), a = {
      onFirstUpdate: r.onFirstUpdate,
      placement: r.placement || "bottom",
      strategy: r.strategy || "absolute",
      modifiers: r.modifiers || Q5
    }, o = i.useState({
      styles: {
        popper: {
          position: a.strategy,
          left: "0",
          top: "0"
        },
        arrow: {
          position: "absolute"
        }
      },
      attributes: {}
    }), s = o[0], u = o[1], c = i.useMemo(function() {
      return {
        name: "updateState",
        enabled: !0,
        phase: "write",
        fn: /* @__PURE__ */ l(function(f) {
          var h = f.state, m = Object.keys(h.elements);
          yi.flushSync(function() {
            u({
              styles: C0(m.map(function(v) {
                return [v, h.styles[v] || {}];
              })),
              attributes: C0(m.map(function(v) {
                return [v, h.attributes[v]];
              }))
            });
          });
        }, "fn"),
        requires: ["computeStyles"]
      };
    }, []), d = i.useMemo(function() {
      var f = {
        onFirstUpdate: a.onFirstUpdate,
        placement: a.placement,
        strategy: a.strategy,
        modifiers: [].concat(a.modifiers, [c, {
          name: "applyStyles",
          enabled: !1
        }])
      };
      return (0, J5.default)(n.current, f) ? n.current || f : (n.current = f, f);
    }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]), p = i.useRef();
    return x0(function() {
      p.current && p.current.setOptions(d);
    }, [d]), x0(function() {
      if (!(e == null || t == null)) {
        var f = r.createPopper || n7, h = f(e, t, d);
        return p.current = h, function() {
          h.destroy(), p.current = null;
        };
      }
    }, [e, t, r.createPopper]), {
      state: p.current ? p.current.state : null,
      styles: s.styles,
      attributes: s.attributes,
      update: p.current ? p.current.update : null,
      forceUpdate: p.current ? p.current.forceUpdate : null
    };
  }, "usePopper");
}), db = z(() => {
  cb();
});
function w1(e) {
  var t = i.useRef(e);
  return t.current = e, i.useCallback(function() {
    return t.current;
  }, []);
}
function o7(e) {
  var t = e.initial, r = e.value, n = e.onChange, a = n === void 0 ? l7 : n;
  if (t === void 0 && r === void 0)
    throw new TypeError('Either "value" or "initial" variable must be set. Now both are undefined');
  var o = i.useState(t), s = o[0], u = o[1], c = w1(s), d = i.useCallback(function(f) {
    var h = c(), m = typeof f == "function" ? f(h) : f;
    typeof m.persist == "function" && m.persist(), u(m), typeof a == "function" && a(m);
  }, [c, a]), p = r !== void 0;
  return [p ? r : s, p ? a : d];
}
function L0(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), function() {
    return {
      width: 0,
      height: 0,
      top: t,
      right: e,
      bottom: t,
      left: e,
      x: 0,
      y: 0,
      toJSON: /* @__PURE__ */ l(function() {
        return null;
      }, "toJSON")
    };
  };
}
function i7(e, t) {
  var r, n, a;
  e === void 0 && (e = {}), t === void 0 && (t = {});
  var o = Object.keys(M0).reduce(function(T, O) {
    var j;
    return U({}, T, (j = {}, j[O] = T[O] !== void 0 ? T[O] : M0[O], j));
  }, e), s = i.useMemo(
    function() {
      return [{
        name: "offset",
        options: {
          offset: o.offset
        }
      }];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(o.offset) ? o.offset : []
  ), u = U({}, t, {
    placement: t.placement || o.placement,
    modifiers: t.modifiers || s
  }), c = i.useState(null), d = c[0], p = c[1], f = i.useState(null), h = f[0], m = f[1], v = o7({
    initial: o.defaultVisible,
    value: o.visible,
    onChange: o.onVisibleChange
  }), g = v[0], D = v[1], y = i.useRef();
  i.useEffect(function() {
    return function() {
      return clearTimeout(y.current);
    };
  }, []);
  var E = a7(o.followCursor ? T0 : d, h, u), w = E.styles, b = E.attributes, C = Si(E, s7), S = C.update, A = w1({
    visible: g,
    triggerRef: d,
    tooltipRef: h,
    finalConfig: o
  }), x = i.useCallback(
    function(T) {
      return Array.isArray(o.trigger) ? o.trigger.includes(T) : o.trigger === T;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    Array.isArray(o.trigger) ? o.trigger : [o.trigger]
  ), F = i.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return D(!1);
    }, o.delayHide);
  }, [o.delayHide, D]), B = i.useCallback(function() {
    clearTimeout(y.current), y.current = window.setTimeout(function() {
      return D(!0);
    }, o.delayShow);
  }, [o.delayShow, D]), _ = i.useCallback(function() {
    A().visible ? F() : B();
  }, [A, F, B]);
  i.useEffect(function() {
    if (A().finalConfig.closeOnOutsideClick) {
      var T = /* @__PURE__ */ l(function(O) {
        var j, Y = A(), P = Y.tooltipRef, q = Y.triggerRef, K = (O.composedPath == null || (j = O.composedPath()) == null ? void 0 : j[0]) || O.target;
        K instanceof Node && P != null && q != null && !P.contains(K) && !q.contains(K) && F();
      }, "handleClickOutside");
      return document.addEventListener("mousedown", T), function() {
        return document.removeEventListener("mousedown", T);
      };
    }
  }, [A, F]), i.useEffect(function() {
    if (!(d == null || !x("click")))
      return d.addEventListener("click", _), function() {
        return d.removeEventListener("click", _);
      };
  }, [d, x, _]), i.useEffect(function() {
    if (!(d == null || !x("double-click")))
      return d.addEventListener("dblclick", _), function() {
        return d.removeEventListener("dblclick", _);
      };
  }, [d, x, _]), i.useEffect(function() {
    if (!(d == null || !x("right-click"))) {
      var T = /* @__PURE__ */ l(function(O) {
        O.preventDefault(), _();
      }, "preventDefaultAndToggle");
      return d.addEventListener("contextmenu", T), function() {
        return d.removeEventListener("contextmenu", T);
      };
    }
  }, [d, x, _]), i.useEffect(function() {
    if (!(d == null || !x("focus")))
      return d.addEventListener("focus", B), d.addEventListener("blur", F), function() {
        d.removeEventListener("focus", B), d.removeEventListener("blur", F);
      };
  }, [d, x, B, F]), i.useEffect(function() {
    if (!(d == null || !x("hover")))
      return d.addEventListener("mouseenter", B), d.addEventListener("mouseleave", F), function() {
        d.removeEventListener("mouseenter", B), d.removeEventListener("mouseleave", F);
      };
  }, [d, x, B, F]), i.useEffect(function() {
    if (!(h == null || !x("hover") || !A().finalConfig.interactive))
      return h.addEventListener("mouseenter", B), h.addEventListener("mouseleave", F), function() {
        h.removeEventListener("mouseenter", B), h.removeEventListener("mouseleave", F);
      };
  }, [h, x, B, F, A]);
  var L = C == null || (r = C.state) == null || (n = r.modifiersData) == null || (a = n.hide) == null ? void 0 : a.isReferenceHidden;
  i.useEffect(function() {
    o.closeOnTriggerHidden && L && F();
  }, [o.closeOnTriggerHidden, F, L]), i.useEffect(function() {
    if (!o.followCursor || d == null) return;
    function T(O) {
      var j = O.clientX, Y = O.clientY;
      T0.getBoundingClientRect = L0(j, Y), S?.();
    }
    return l(T, "setMousePosition"), d.addEventListener("mousemove", T), function() {
      return d.removeEventListener("mousemove", T);
    };
  }, [o.followCursor, d, S]), i.useEffect(function() {
    if (!(h == null || S == null || o.mutationObserverOptions == null)) {
      var T = new MutationObserver(S);
      return T.observe(h, o.mutationObserverOptions), function() {
        return T.disconnect();
      };
    }
  }, [o.mutationObserverOptions, h, S]);
  var R = /* @__PURE__ */ l(function(T) {
    return T === void 0 && (T = {}), U({}, T, {
      style: U({}, T.style, w.popper)
    }, b.popper, {
      "data-popper-interactive": o.interactive
    });
  }, "getTooltipProps"), V = /* @__PURE__ */ l(function(T) {
    return T === void 0 && (T = {}), U({}, T, b.arrow, {
      style: U({}, T.style, w.arrow),
      "data-popper-arrow": !0
    });
  }, "getArrowProps");
  return U({
    getArrowProps: V,
    getTooltipProps: R,
    setTooltipRef: m,
    setTriggerRef: p,
    tooltipRef: h,
    triggerRef: d,
    visible: g
  }, C);
}
var l7, s7, T0, M0, pb = z(() => {
  tc(), Xe(), db(), l(w1, "useGetLatest"), l7 = /* @__PURE__ */ l(function() {
  }, "noop"), l(o7, "useControlledState"), l(L0, "generateBoundingClientRect"), s7 = ["styles", "attributes"], T0 = {
    getBoundingClientRect: L0()
  }, M0 = {
    closeOnOutsideClick: !0,
    closeOnTriggerHidden: !1,
    defaultVisible: !1,
    delayHide: 0,
    delayShow: 0,
    followCursor: !1,
    interactive: !1,
    mutationObserverOptions: {
      attributes: !0,
      childList: !0,
      subtree: !0
    },
    offset: [0, 6],
    trigger: "hover"
  }, l(i7, "usePopperTooltip");
}), e2, ke, Ct, t2, r2, H0, hb = z(() => {
  e2 = ce(xi(), 1), ke = (0, e2.default)(1e3)(
    (e, t, r, n = 0) => t.split("-")[0] === e ? r : n
  ), Ct = 8, t2 = I.div(
    {
      position: "absolute",
      borderStyle: "solid"
    },
    ({ placement: e }) => {
      let t = 0, r = 0;
      switch (!0) {
        case (e.startsWith("left") || e.startsWith("right")): {
          r = 8;
          break;
        }
        case (e.startsWith("top") || e.startsWith("bottom")): {
          t = 8;
          break;
        }
      }
      return { transform: `translate3d(${t}px, ${r}px, 0px)` };
    },
    ({ theme: e, color: t, placement: r }) => ({
      bottom: `${ke("top", r, `${Ct * -1}px`, "auto")}`,
      top: `${ke("bottom", r, `${Ct * -1}px`, "auto")}`,
      right: `${ke("left", r, `${Ct * -1}px`, "auto")}`,
      left: `${ke("right", r, `${Ct * -1}px`, "auto")}`,
      borderBottomWidth: `${ke("top", r, "0", Ct)}px`,
      borderTopWidth: `${ke("bottom", r, "0", Ct)}px`,
      borderRightWidth: `${ke("left", r, "0", Ct)}px`,
      borderLeftWidth: `${ke("right", r, "0", Ct)}px`,
      borderTopColor: ke(
        "top",
        r,
        e.color[t] || t || e.base === "light" ? Fn(e.background.app) : e.background.app,
        "transparent"
      ),
      borderBottomColor: ke(
        "bottom",
        r,
        e.color[t] || t || e.base === "light" ? Fn(e.background.app) : e.background.app,
        "transparent"
      ),
      borderLeftColor: ke(
        "left",
        r,
        e.color[t] || t || e.base === "light" ? Fn(e.background.app) : e.background.app,
        "transparent"
      ),
      borderRightColor: ke(
        "right",
        r,
        e.color[t] || t || e.base === "light" ? Fn(e.background.app) : e.background.app,
        "transparent"
      )
    })
  ), r2 = I.div(
    ({ hidden: e }) => ({
      display: e ? "none" : "inline-block",
      zIndex: 2147483647
    }),
    ({ theme: e, color: t, hasChrome: r }) => r ? {
      background: t && e.color[t] || t || e.base === "light" ? Fn(e.background.app) : e.background.app,
      filter: `
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,
      borderRadius: e.appBorderRadius,
      fontSize: e.typography.size.s1
    } : {}
  ), H0 = k.forwardRef(
    ({
      placement: e = "top",
      hasChrome: t = !0,
      children: r,
      arrowProps: n = {},
      tooltipRef: a,
      color: o,
      withArrows: s,
      ...u
    }, c) => /* @__PURE__ */ k.createElement(r2, { "data-testid": "tooltip", hasChrome: t, ref: c, ...u, color: o }, t && s && /* @__PURE__ */ k.createElement(t2, { placement: e, ...n, color: o }), r)
  ), H0.displayName = "Tooltip";
}), b1 = {};
vn(b1, {
  WithToolTipState: () => vi,
  WithTooltip: () => vi,
  WithTooltipPure: () => O0
});
var jn, n2, a2, O0, vi, D1 = z(() => {
  ec(), pb(), hb(), { document: jn } = Ci, n2 = I.div`
  display: inline-block;
  cursor: ${(e) => (
    // @ts-expect-error (non strict)
    e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"
  )};
`, a2 = I.g`
  cursor: ${(e) => (
    // @ts-expect-error (non strict)
    e.trigger === "hover" || e.trigger.includes("hover") ? "default" : "pointer"
  )};
`, O0 = /* @__PURE__ */ l(({
    svg: e = !1,
    trigger: t = "click",
    closeOnOutsideClick: r = !1,
    placement: n = "top",
    modifiers: a = [
      {
        name: "preventOverflow",
        options: {
          padding: 8
        }
      },
      {
        name: "offset",
        options: {
          offset: [8, 8]
        }
      },
      {
        name: "arrow",
        options: {
          padding: 8
        }
      }
    ],
    hasChrome: o = !0,
    defaultVisible: s = !1,
    withArrows: u,
    offset: c,
    tooltip: d,
    children: p,
    closeOnTriggerHidden: f,
    mutationObserverOptions: h,
    delayHide: m,
    visible: v,
    interactive: g,
    delayShow: D,
    strategy: y,
    followCursor: E,
    onVisibleChange: w,
    ...b
  }) => {
    let C = e ? a2 : n2, {
      getArrowProps: S,
      getTooltipProps: A,
      setTooltipRef: x,
      setTriggerRef: F,
      visible: B,
      state: _
    } = i7(
      {
        trigger: t,
        placement: n,
        defaultVisible: s,
        delayHide: m,
        interactive: g,
        closeOnOutsideClick: r,
        closeOnTriggerHidden: f,
        onVisibleChange: w,
        delayShow: D,
        followCursor: E,
        mutationObserverOptions: h,
        visible: v,
        offset: c
      },
      {
        modifiers: a,
        strategy: y
      }
    ), L = /* @__PURE__ */ k.createElement(
      H0,
      {
        placement: _?.placement,
        ref: x,
        hasChrome: o,
        arrowProps: S(),
        withArrows: u,
        ...A()
      },
      typeof d == "function" ? d({ onHide: /* @__PURE__ */ l(() => w(!1), "onHide") }) : d
    );
    return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(C, { trigger: t, ref: F, ...b }, p), B && x2.createPortal(L, jn.body));
  }, "WithTooltipPure"), vi = /* @__PURE__ */ l(({
    startOpen: e = !1,
    onVisibleChange: t,
    ...r
  }) => {
    let [n, a] = i.useState(e), o = i.useCallback(
      (s) => {
        t && t(s) === !1 || a(s);
      },
      [t]
    );
    return i.useEffect(() => {
      let s = /* @__PURE__ */ l(() => o(!1), "hide");
      jn.addEventListener("keydown", s, !1);
      let u = Array.from(jn.getElementsByTagName("iframe")), c = [];
      return u.forEach((d) => {
        let p = /* @__PURE__ */ l(() => {
          try {
            d.contentWindow.document && (d.contentWindow.document.addEventListener("click", s), c.push(() => {
              try {
                d.contentWindow.document.removeEventListener("click", s);
              } catch {
              }
            }));
          } catch {
          }
        }, "bind");
        p(), d.addEventListener("load", p), c.push(() => {
          d.removeEventListener("load", p);
        });
      }), () => {
        jn.removeEventListener("keydown", s), c.forEach((d) => {
          d();
        });
      };
    }), /* @__PURE__ */ k.createElement(O0, { ...r, visible: n, onVisibleChange: o });
  }, "WithToolTipState");
}), Q = /* @__PURE__ */ l(({ ...e }, t) => {
  let r = [e.class, e.className];
  return delete e.class, e.className = ["sbdocs", `sbdocs-${t}`, ...r].filter(Boolean).join(" "), e;
}, "nameSpaceClassNames");
Xe();
m6();
Q0();
function u7(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ln(e, t);
}
l(u7, "_inheritsLoose");
g6();
Q0();
function c7(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
l(c7, "_isNativeFunction");
function y1() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (y1 = /* @__PURE__ */ l(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
l(y1, "_isNativeReflectConstruct");
Q0();
function d7(e, t, r) {
  if (y1()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var a = new (e.bind.apply(e, n))();
  return r && ln(a, r.prototype), a;
}
l(d7, "_construct");
function wi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return wi = /* @__PURE__ */ l(function(r) {
    if (r === null || !c7(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, n);
    }
    function n() {
      return d7(r, arguments, No(this).constructor);
    }
    return l(n, "Wrapper"), n.prototype = Object.create(r.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ln(n, r);
  }, "_wrapNativeSuper"), wi(e);
}
l(wi, "_wrapNativeSuper");
var fb = {
  1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,
  2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,
  3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`,
  4: `Couldn't generate valid rgb string from %s, it returned %s.

`,
  5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,
  6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,
  7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,
  8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,
  9: `Please provide a number of steps to the modularScale helper.

`,
  10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,
  12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,
  13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,
  14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,
  16: `You must provide a template to this method.

`,
  17: `You passed an unsupported selector state to this method.

`,
  18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  19: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  23: `fontFace expects a name of a font-family.

`,
  24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  25: `fontFace expects localFonts to be an array.

`,
  26: `fontFace expects fileFormats to be an array.

`,
  27: `radialGradient requries at least 2 color-stops to properly render.

`,
  28: `Please supply a filename to retinaImage() as the first argument.

`,
  29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,
  32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,
  33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,
  34: `borderRadius expects a radius value as a string or number as the second argument.

`,
  35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  36: `Property must be a string value.

`,
  37: `Syntax Error at %s.

`,
  38: `Formula contains a function that needs parentheses at %s.

`,
  39: `Formula is missing closing parenthesis at %s.

`,
  40: `Formula has too many closing parentheses at %s.

`,
  41: `All values in a formula must have the same unit or be unitless.

`,
  42: `Please provide a number of steps to the modularScale helper.

`,
  43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,
  44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,
  45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,
  46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,
  47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`,
  48: `fromSize and toSize must be provided as stringified numbers with the same units.

`,
  49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,
  50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,
  51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`,
  52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`,
  53: `fontFace expects localFonts to be an array.

`,
  54: `fontFace expects fileFormats to be an array.

`,
  55: `fontFace expects a name of a font-family.

`,
  56: `linearGradient requries at least 2 color-stops to properly render.

`,
  57: `radialGradient requries at least 2 color-stops to properly render.

`,
  58: `Please supply a filename to retinaImage() as the first argument.

`,
  59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,
  60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  61: `Property must be a string value.

`,
  62: `borderRadius expects a radius value as a string or number as the second argument.

`,
  63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,
  64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,
  65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,
  66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,
  67: `You must provide a template to this method.

`,
  68: `You passed an unsupported selector state to this method.

`,
  69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,
  70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,
  71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,
  72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,
  73: `Please provide a valid CSS variable.

`,
  74: `CSS variable not found and no default was provided.

`,
  75: `important requires a valid style object, got a %s instead.

`,
  76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,
  77: `remToPx expects a value in "rem" but you provided it in "%s".

`,
  78: `base must be set in "px" or "%" but you set it in "%s".
`
};
function p7() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], a = [], o;
  for (o = 1; o < t.length; o += 1)
    a.push(t[o]);
  return a.forEach(function(s) {
    n = n.replace(/%[a-z]/, s);
  }), n;
}
l(p7, "format");
var st = /* @__PURE__ */ function(e) {
  u7(t, e);
  function t(r) {
    for (var n, a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), s = 1; s < a; s++)
      o[s - 1] = arguments[s];
    return n = e.call(this, p7.apply(void 0, [fb[r]].concat(o))) || this, A2(n);
  }
  return l(t, "PolishedError"), t;
}(/* @__PURE__ */ wi(Error));
function Ro(e) {
  return Math.round(e * 255);
}
l(Ro, "colorToInt");
function h7(e, t, r) {
  return Ro(e) + "," + Ro(t) + "," + Ro(r);
}
l(h7, "convertToInt");
function fn(e, t, r, n) {
  if (n === void 0 && (n = h7), t === 0)
    return n(r, r, r);
  var a = (e % 360 + 360) % 360 / 60, o = (1 - Math.abs(2 * r - 1)) * t, s = o * (1 - Math.abs(a % 2 - 1)), u = 0, c = 0, d = 0;
  a >= 0 && a < 1 ? (u = o, c = s) : a >= 1 && a < 2 ? (u = s, c = o) : a >= 2 && a < 3 ? (c = o, d = s) : a >= 3 && a < 4 ? (c = s, d = o) : a >= 4 && a < 5 ? (u = s, d = o) : a >= 5 && a < 6 && (u = o, d = s);
  var p = r - o / 2, f = u + p, h = c + p, m = d + p;
  return n(f, h, m);
}
l(fn, "hslToRgb");
var o2 = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function f7(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return o2[t] ? "#" + o2[t] : e;
}
l(f7, "nameToHex");
var mb = /^#[a-fA-F0-9]{6}$/, gb = /^#[a-fA-F0-9]{8}$/, vb = /^#[a-fA-F0-9]{3}$/, wb = /^#[a-fA-F0-9]{4}$/, gu = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, bb = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Db = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, yb = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function tl(e) {
  if (typeof e != "string")
    throw new st(3);
  var t = f7(e);
  if (t.match(mb))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(gb)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: r
    };
  }
  if (t.match(vb))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(wb)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: n
    };
  }
  var a = gu.exec(t);
  if (a)
    return {
      red: parseInt("" + a[1], 10),
      green: parseInt("" + a[2], 10),
      blue: parseInt("" + a[3], 10)
    };
  var o = bb.exec(t.substring(0, 50));
  if (o)
    return {
      red: parseInt("" + o[1], 10),
      green: parseInt("" + o[2], 10),
      blue: parseInt("" + o[3], 10),
      alpha: parseFloat("" + o[4]) > 1 ? parseFloat("" + o[4]) / 100 : parseFloat("" + o[4])
    };
  var s = Db.exec(t);
  if (s) {
    var u = parseInt("" + s[1], 10), c = parseInt("" + s[2], 10) / 100, d = parseInt("" + s[3], 10) / 100, p = "rgb(" + fn(u, c, d) + ")", f = gu.exec(p);
    if (!f)
      throw new st(4, t, p);
    return {
      red: parseInt("" + f[1], 10),
      green: parseInt("" + f[2], 10),
      blue: parseInt("" + f[3], 10)
    };
  }
  var h = yb.exec(t.substring(0, 50));
  if (h) {
    var m = parseInt("" + h[1], 10), v = parseInt("" + h[2], 10) / 100, g = parseInt("" + h[3], 10) / 100, D = "rgb(" + fn(m, v, g) + ")", y = gu.exec(D);
    if (!y)
      throw new st(4, t, D);
    return {
      red: parseInt("" + y[1], 10),
      green: parseInt("" + y[2], 10),
      blue: parseInt("" + y[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new st(5);
}
l(tl, "parseToRgb");
function m7(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, a = Math.max(t, r, n), o = Math.min(t, r, n), s = (a + o) / 2;
  if (a === o)
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: s,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: s
    };
  var u, c = a - o, d = s > 0.5 ? c / (2 - a - o) : c / (a + o);
  switch (a) {
    case t:
      u = (r - n) / c + (r < n ? 6 : 0);
      break;
    case r:
      u = (n - t) / c + 2;
      break;
    default:
      u = (t - r) / c + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
    saturation: d,
    lightness: s,
    alpha: e.alpha
  } : {
    hue: u,
    saturation: d,
    lightness: s
  };
}
l(m7, "rgbToHsl");
function E1(e) {
  return m7(tl(e));
}
l(E1, "parseToHsl");
var Eb = /* @__PURE__ */ l(function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, "reduceHexValue"), N0 = Eb;
function Mt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
l(Mt, "numberToHex");
function Lo(e) {
  return Mt(Math.round(e * 255));
}
l(Lo, "colorToHex");
function g7(e, t, r) {
  return N0("#" + Lo(e) + Lo(t) + Lo(r));
}
l(g7, "convertToHex");
function Ea(e, t, r) {
  return fn(e, t, r, g7);
}
l(Ea, "hslToHex");
function v7(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return Ea(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0)
    return Ea(e.hue, e.saturation, e.lightness);
  throw new st(1);
}
l(v7, "hsl");
function w7(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
    return n >= 1 ? Ea(e, t, r) : "rgba(" + fn(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
    return e.alpha >= 1 ? Ea(e.hue, e.saturation, e.lightness) : "rgba(" + fn(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new st(2);
}
l(w7, "hsla");
function bi(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number")
    return N0("#" + Mt(e) + Mt(t) + Mt(r));
  if (typeof e == "object" && t === void 0 && r === void 0)
    return N0("#" + Mt(e.red) + Mt(e.green) + Mt(e.blue));
  throw new st(6);
}
l(bi, "rgb");
function Ca(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var a = tl(e);
    return "rgba(" + a.red + "," + a.green + "," + a.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number")
      return n >= 1 ? bi(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0)
      return e.alpha >= 1 ? bi(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new st(7);
}
l(Ca, "rgba");
var Cb = /* @__PURE__ */ l(function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, "isRgb"), xb = /* @__PURE__ */ l(function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, "isRgba"), Sb = /* @__PURE__ */ l(function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, "isHsl"), Ab = /* @__PURE__ */ l(function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
}, "isHsla");
function C1(e) {
  if (typeof e != "object") throw new st(8);
  if (xb(e)) return Ca(e);
  if (Cb(e)) return bi(e);
  if (Ab(e)) return w7(e);
  if (Sb(e)) return v7(e);
  throw new st(8);
}
l(C1, "toColorString");
function x1(e, t, r) {
  return /* @__PURE__ */ l(function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : x1(e, t, n);
  }, "fn");
}
l(x1, "curried");
function rl(e) {
  return x1(e, e.length, []);
}
l(rl, "curry");
function nl(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
l(nl, "guard");
function b7(e, t) {
  if (t === "transparent") return t;
  var r = E1(t);
  return C1(U({}, r, {
    lightness: nl(0, 1, r.lightness - parseFloat(e))
  }));
}
l(b7, "darken");
var kb = /* @__PURE__ */ rl(b7), Yr = kb;
function D7(e, t) {
  if (t === "transparent") return t;
  var r = E1(t);
  return C1(U({}, r, {
    lightness: nl(0, 1, r.lightness + parseFloat(e))
  }));
}
l(D7, "lighten");
var Fb = /* @__PURE__ */ rl(D7), i2 = Fb;
function y7(e, t) {
  if (t === "transparent") return t;
  var r = tl(t), n = typeof r.alpha == "number" ? r.alpha : 1, a = U({}, r, {
    alpha: nl(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return Ca(a);
}
l(y7, "transparentize");
var Bb = /* @__PURE__ */ rl(y7), Le = Bb, Cn = /* @__PURE__ */ l(({ theme: e }) => ({
  margin: "20px 0 8px",
  padding: 0,
  cursor: "text",
  position: "relative",
  color: e.color.defaultText,
  "&:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "&:hover a.anchor": {
    textDecoration: "none"
  },
  "& tt, & code": {
    fontSize: "inherit"
  }
}), "headerCommon"), al = /* @__PURE__ */ l(({ theme: e }) => ({
  lineHeight: 1,
  margin: "0 2px",
  padding: "3px 5px",
  whiteSpace: "nowrap",
  borderRadius: 3,
  fontSize: e.typography.size.s2 - 1,
  border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`,
  color: e.base === "light" ? Le(0.1, e.color.defaultText) : Le(0.3, e.color.defaultText),
  backgroundColor: e.base === "light" ? e.color.lighter : e.color.border
}), "codeCommon"), se = /* @__PURE__ */ l(({ theme: e }) => ({
  fontFamily: e.typography.fonts.base,
  fontSize: e.typography.size.s3,
  margin: 0,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  WebkitOverflowScrolling: "touch"
}), "withReset"), zr = {
  margin: "16px 0"
}, zb = I.div(se), _b = /* @__PURE__ */ l(({
  href: e = "",
  ...t
}) => {
  let r = /^\//.test(e) ? `./?path=${e}` : e, n = /^#.*/.test(e) ? "_self" : "_top";
  return /* @__PURE__ */ k.createElement("a", { href: r, target: n, ...t });
}, "Link"), Ib = I(_b)(se, ({ theme: e }) => ({
  fontSize: "inherit",
  lineHeight: "24px",
  color: e.color.secondary,
  textDecoration: "none",
  "&.absent": {
    color: "#cc0000"
  },
  "&.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  }
})), Rb = I.blockquote(se, zr, ({ theme: e }) => ({
  borderLeft: `4px solid ${e.color.medium}`,
  padding: "0 15px",
  color: e.color.dark,
  "& > :first-of-type": {
    marginTop: 0
  },
  "& > :last-child": {
    marginBottom: 0
  }
}));
ki();
var Lb = /* @__PURE__ */ l((e) => typeof e == "string", "isReactChildString"), Tb = /[\n\r]/g, Mb = I.code(
  ({ theme: e }) => ({
    // from reset
    fontFamily: e.typography.fonts.mono,
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
    display: "inline-block",
    paddingLeft: 2,
    paddingRight: 2,
    verticalAlign: "baseline",
    color: "inherit"
  }),
  al
), Hb = I(na)(({ theme: e }) => ({
  // DocBlocks-specific styling and overrides
  fontFamily: e.typography.fonts.mono,
  fontSize: `${e.typography.size.s2 - 1}px`,
  lineHeight: "19px",
  margin: "25px 0 40px",
  borderRadius: e.appBorderRadius,
  boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0",
  "pre.prismjs": {
    padding: 20,
    background: "inherit"
  }
})), Ob = /* @__PURE__ */ l(({
  className: e,
  children: t,
  ...r
}) => {
  let n = (e || "").match(/lang-(\S+)/), a = i.Children.toArray(t);
  return a.filter(Lb).some((o) => o.match(Tb)) ? /* @__PURE__ */ k.createElement(
    Hb,
    {
      bordered: !0,
      copyable: !0,
      language: n?.[1] ?? "text",
      format: !1,
      ...r
    },
    t
  ) : /* @__PURE__ */ k.createElement(Mb, { ...r, className: e }, a);
}, "Code"), Nb = I.dl(se, zr, {
  padding: 0,
  "& dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    padding: 0,
    margin: "16px 0 4px"
  },
  "& dt:first-of-type": {
    padding: 0
  },
  "& dt > :first-of-type": {
    marginTop: 0
  },
  "& dt > :last-child": {
    marginBottom: 0
  },
  "& dd": {
    margin: "0 0 16px",
    padding: "0 15px"
  },
  "& dd > :first-of-type": {
    marginTop: 0
  },
  "& dd > :last-child": {
    marginBottom: 0
  }
}), Pb = I.div(se), $b = I.h1(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.l1}px`,
  fontWeight: e.typography.weight.bold
})), jb = I.h2(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.m2}px`,
  paddingBottom: 4,
  borderBottom: `1px solid ${e.appBorderColor}`
})), Vb = I.h3(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.m1}px`
})), qb = I.h4(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.s3}px`
})), Wb = I.h5(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.s2}px`
})), Ub = I.h6(se, Cn, ({ theme: e }) => ({
  fontSize: `${e.typography.size.s2}px`,
  color: e.color.dark
})), Gb = I.hr(({ theme: e }) => ({
  border: "0 none",
  borderTop: `1px solid ${e.appBorderColor}`,
  height: 4,
  padding: 0
})), Zb = I.img({
  maxWidth: "100%"
}), Yb = I.li(se, ({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  color: e.color.defaultText,
  lineHeight: "24px",
  "& + li": {
    marginTop: ".25em"
  },
  "& ul, & ol": {
    marginTop: ".25em",
    marginBottom: 0
  },
  "& code": al({ theme: e })
})), Xb = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, Kb = I.ol(se, zr, Xb, {
  listStyle: "decimal"
}), Jb = I.p(se, zr, ({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "24px",
  color: e.color.defaultText,
  "& code": al({ theme: e })
})), Qb = I.pre(se, zr, ({ theme: e }) => ({
  // reset
  fontFamily: e.typography.fonts.mono,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "18px",
  padding: "11px 1rem",
  whiteSpace: "pre-wrap",
  color: "inherit",
  borderRadius: 3,
  margin: "1rem 0",
  "&:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "& pre, &.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px",
    code: {
      color: "inherit",
      fontSize: "inherit"
    }
  },
  "& code": {
    whiteSpace: "pre"
  },
  "& code, & tt": {
    border: "none"
  }
})), eD = I.span(se, ({ theme: e }) => ({
  "&.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "&.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "&.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "&.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "&.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  }
})), tD = I.title(al), rD = I.table(se, zr, ({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "24px",
  padding: 0,
  borderCollapse: "collapse",
  "& tr": {
    borderTop: `1px solid ${e.appBorderColor}`,
    backgroundColor: e.appContentBg,
    margin: 0,
    padding: 0
  },
  "& tr:nth-of-type(2n)": {
    backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter
  },
  "& tr th": {
    fontWeight: "bold",
    color: e.color.defaultText,
    border: `1px solid ${e.appBorderColor}`,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr td": {
    border: `1px solid ${e.appBorderColor}`,
    color: e.color.defaultText,
    margin: 0,
    padding: "6px 13px"
  },
  "& tr th :first-of-type, & tr td :first-of-type": {
    marginTop: 0
  },
  "& tr th :last-child, & tr td :last-child": {
    marginBottom: 0
  }
})), nD = {
  paddingLeft: 30,
  "& :first-of-type": {
    marginTop: 0
  },
  "& :last-child": {
    marginBottom: 0
  }
}, aD = I.ul(se, zr, nD, { listStyle: "disc" }), E7 = {
  h1: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement($b, { ...Q(e, "h1") }), "h1"),
  h2: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(jb, { ...Q(e, "h2") }), "h2"),
  h3: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Vb, { ...Q(e, "h3") }), "h3"),
  h4: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(qb, { ...Q(e, "h4") }), "h4"),
  h5: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Wb, { ...Q(e, "h5") }), "h5"),
  h6: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Ub, { ...Q(e, "h6") }), "h6"),
  pre: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Qb, { ...Q(e, "pre") }), "pre"),
  a: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Ib, { ...Q(e, "a") }), "a"),
  hr: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Gb, { ...Q(e, "hr") }), "hr"),
  dl: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Nb, { ...Q(e, "dl") }), "dl"),
  blockquote: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Rb, { ...Q(e, "blockquote") }), "blockquote"),
  table: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(rD, { ...Q(e, "table") }), "table"),
  img: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Zb, { ...Q(e, "img") }), "img"),
  div: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Pb, { ...Q(e, "div") }), "div"),
  span: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(eD, { ...Q(e, "span") }), "span"),
  li: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Yb, { ...Q(e, "li") }), "li"),
  ul: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(aD, { ...Q(e, "ul") }), "ul"),
  ol: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Kb, { ...Q(e, "ol") }), "ol"),
  p: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Jb, { ...Q(e, "p") }), "p"),
  code: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Ob, { ...Q(e, "code") }), "code"),
  tt: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(tD, { ...Q(e, "tt") }), "tt"),
  resetwrapper: /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(zb, { ...Q(e, "resetwrapper") }), "resetwrapper")
};
I.div(
  ({ theme: e }) => ({
    display: "inline-block",
    fontSize: 11,
    lineHeight: "12px",
    alignSelf: "center",
    padding: "4px 12px",
    borderRadius: "3em",
    fontWeight: e.typography.weight.bold
  }),
  {
    svg: {
      height: 12,
      width: 12,
      marginRight: 4,
      marginTop: -2,
      path: {
        fill: "currentColor"
      }
    }
  },
  ({ theme: e, status: t }) => {
    switch (t) {
      case "critical":
        return {
          color: e.color.critical,
          background: e.background.critical
        };
      case "negative":
        return {
          color: e.color.negativeText,
          background: e.background.negative,
          boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Le(0.9, e.color.negativeText)}` : "none"
        };
      case "warning":
        return {
          color: e.color.warningText,
          background: e.background.warning,
          boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Le(0.9, e.color.warningText)}` : "none"
        };
      case "neutral":
        return {
          color: e.color.dark,
          background: e.color.mediumlight,
          boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Le(0.9, e.color.dark)}` : "none"
        };
      case "positive":
        return {
          color: e.color.positiveText,
          background: e.background.positive,
          boxShadow: e.base === "light" ? `inset 0 0 0 1px ${Le(0.9, e.color.positiveText)}` : "none"
        };
      default:
        return {};
    }
  }
);
var oD = {};
vn(oD, {
  AccessibilityAltIcon: () => AC,
  AccessibilityIcon: () => SC,
  AddIcon: () => yy,
  AdminIcon: () => mC,
  AlertAltIcon: () => Yy,
  AlertIcon: () => Zy,
  AlignLeftIcon: () => JD,
  AlignRightIcon: () => QD,
  AppleIcon: () => w9,
  ArrowBottomLeftIcon: () => $E,
  ArrowBottomRightIcon: () => jE,
  ArrowDownIcon: () => ME,
  ArrowLeftIcon: () => HE,
  ArrowRightIcon: () => OE,
  ArrowSolidDownIcon: () => qE,
  ArrowSolidLeftIcon: () => WE,
  ArrowSolidRightIcon: () => UE,
  ArrowSolidUpIcon: () => VE,
  ArrowTopLeftIcon: () => NE,
  ArrowTopRightIcon: () => PE,
  ArrowUpIcon: () => TE,
  AzureDevOpsIcon: () => x9,
  BackIcon: () => aC,
  BasketIcon: () => wE,
  BatchAcceptIcon: () => fy,
  BatchDenyIcon: () => hy,
  BeakerIcon: () => bE,
  BellIcon: () => eE,
  BitbucketIcon: () => S9,
  BoldIcon: () => i9,
  BookIcon: () => VD,
  BookmarkHollowIcon: () => lE,
  BookmarkIcon: () => sE,
  BottomBarIcon: () => K9,
  BottomBarToggleIcon: () => J9,
  BoxIcon: () => ny,
  BranchIcon: () => m9,
  BrowserIcon: () => V9,
  ButtonIcon: () => Ny,
  CPUIcon: () => Q9,
  CalendarIcon: () => XD,
  CameraIcon: () => kD,
  CategoryIcon: () => UD,
  CertificateIcon: () => fE,
  ChangedIcon: () => Ay,
  ChatIcon: () => Ry,
  CheckIcon: () => dy,
  ChevronDownIcon: () => BE,
  ChevronLeftIcon: () => zE,
  ChevronRightIcon: () => S7,
  ChevronSmallDownIcon: () => IE,
  ChevronSmallLeftIcon: () => RE,
  ChevronSmallRightIcon: () => LE,
  ChevronSmallUpIcon: () => _E,
  ChevronUpIcon: () => FE,
  ChromaticIcon: () => A9,
  ChromeIcon: () => E9,
  CircleHollowIcon: () => oE,
  CircleIcon: () => iE,
  ClearIcon: () => Fy,
  CloseAltIcon: () => vy,
  CloseIcon: () => Cy,
  CloudHollowIcon: () => EE,
  CloudIcon: () => CE,
  CogIcon: () => iy,
  CollapseIcon: () => ZE,
  CommandIcon: () => Vy,
  CommentAddIcon: () => zy,
  CommentIcon: () => By,
  CommentsIcon: () => Iy,
  CommitIcon: () => f9,
  CompassIcon: () => sC,
  ComponentDrivenIcon: () => k9,
  ComponentIcon: () => sD,
  ContrastIcon: () => DD,
  ControlsIcon: () => my,
  CopyIcon: () => WD,
  CreditIcon: () => Oy,
  CrossIcon: () => x7,
  DashboardIcon: () => pC,
  DatabaseIcon: () => ey,
  DeleteIcon: () => xy,
  DiamondIcon: () => uE,
  DirectionIcon: () => gC,
  DiscordIcon: () => F9,
  DocChartIcon: () => t9,
  DocListIcon: () => r9,
  DocumentIcon: () => qD,
  DownloadIcon: () => nC,
  DragIcon: () => n9,
  EditIcon: () => oy,
  EllipsisIcon: () => uy,
  EmailIcon: () => Xy,
  ExpandAltIcon: () => GE,
  ExpandIcon: () => YE,
  EyeCloseIcon: () => wD,
  EyeIcon: () => vD,
  FaceHappyIcon: () => EC,
  FaceNeutralIcon: () => CC,
  FaceSadIcon: () => xC,
  FacebookIcon: () => B9,
  FailedIcon: () => ky,
  FastForwardIcon: () => LD,
  FigmaIcon: () => z9,
  FilterIcon: () => e9,
  FlagIcon: () => yE,
  FolderIcon: () => GD,
  FormIcon: () => py,
  GDriveIcon: () => _9,
  GithubIcon: () => I9,
  GitlabIcon: () => R9,
  GlobeIcon: () => lC,
  GoogleIcon: () => L9,
  GraphBarIcon: () => KD,
  GraphLineIcon: () => YD,
  GraphqlIcon: () => T9,
  GridAltIcon: () => pD,
  GridIcon: () => uD,
  GrowIcon: () => CD,
  HeartHollowIcon: () => cE,
  HeartIcon: () => dE,
  HomeIcon: () => fC,
  HourglassIcon: () => DE,
  InfoIcon: () => Wy,
  ItalicIcon: () => l9,
  JumpToIcon: () => aE,
  KeyIcon: () => My,
  LightningIcon: () => bD,
  LightningOffIcon: () => C7,
  LinkBrokenIcon: () => Qy,
  LinkIcon: () => Jy,
  LinkedinIcon: () => $9,
  LinuxIcon: () => b9,
  ListOrderedIcon: () => u9,
  ListUnorderedIcon: () => c9,
  LocationIcon: () => uC,
  LockIcon: () => Ly,
  MarkdownIcon: () => p9,
  MarkupIcon: () => o9,
  MediumIcon: () => M9,
  MemoryIcon: () => ty,
  MenuIcon: () => a9,
  MergeIcon: () => v9,
  MirrorIcon: () => ED,
  MobileIcon: () => W9,
  MoonIcon: () => jD,
  NutIcon: () => ly,
  OutboxIcon: () => Hy,
  OutlineIcon: () => cD,
  PaintBrushIcon: () => xD,
  PaperClipIcon: () => s9,
  ParagraphIcon: () => d9,
  PassedIcon: () => Sy,
  PhoneIcon: () => Ky,
  PhotoDragIcon: () => dD,
  PhotoIcon: () => lD,
  PinAltIcon: () => by,
  PinIcon: () => cC,
  PlayAllHollowIcon: () => OD,
  PlayBackIcon: () => _D,
  PlayHollowIcon: () => HD,
  PlayIcon: () => zD,
  PlayNextIcon: () => ID,
  PlusIcon: () => gy,
  PointerDefaultIcon: () => $y,
  PointerHandIcon: () => jy,
  PowerIcon: () => ay,
  PrintIcon: () => ZD,
  ProceedIcon: () => oC,
  ProfileIcon: () => yC,
  PullRequestIcon: () => g9,
  QuestionIcon: () => Uy,
  RSSIcon: () => tE,
  RedirectIcon: () => JE,
  ReduxIcon: () => H9,
  RefreshIcon: () => iC,
  ReplyIcon: () => eC,
  RepoIcon: () => h9,
  RequestChangeIcon: () => _y,
  RewindIcon: () => RD,
  RulerIcon: () => SD,
  SaveIcon: () => qy,
  SearchIcon: () => hD,
  ShareAltIcon: () => rE,
  ShareIcon: () => nE,
  ShieldIcon: () => vE,
  SideBySideIcon: () => ND,
  SidebarAltIcon: () => Z9,
  SidebarAltToggleIcon: () => Y9,
  SidebarIcon: () => G9,
  SidebarToggleIcon: () => X9,
  SpeakerIcon: () => BD,
  StackedIcon: () => PD,
  StarHollowIcon: () => pE,
  StarIcon: () => hE,
  StatusFailIcon: () => SE,
  StatusPassIcon: () => kE,
  StatusWarnIcon: () => AE,
  StickerIcon: () => xE,
  StopAltHollowIcon: () => MD,
  StopAltIcon: () => TD,
  StopIcon: () => AD,
  StorybookIcon: () => C9,
  StructureIcon: () => ry,
  SubtractIcon: () => Ey,
  SunIcon: () => $D,
  SupportIcon: () => Gy,
  SwitchAltIcon: () => yD,
  SyncIcon: () => tC,
  TabletIcon: () => q9,
  ThumbsUpIcon: () => gE,
  TimeIcon: () => dC,
  TimerIcon: () => hC,
  TransferIcon: () => KE,
  TrashIcon: () => wy,
  TwitterIcon: () => O9,
  TypeIcon: () => Py,
  UbuntuIcon: () => D9,
  UndoIcon: () => QE,
  UnfoldIcon: () => XE,
  UnlockIcon: () => Ty,
  UnpinIcon: () => Dy,
  UploadIcon: () => rC,
  UserAddIcon: () => bC,
  UserAltIcon: () => wC,
  UserIcon: () => vC,
  UsersIcon: () => DC,
  VSCodeIcon: () => P9,
  VerifiedIcon: () => mE,
  VideoIcon: () => FD,
  WandIcon: () => cy,
  WatchIcon: () => U9,
  WindowsIcon: () => y9,
  WrenchIcon: () => sy,
  XIcon: () => j9,
  YoutubeIcon: () => N9,
  ZoomIcon: () => fD,
  ZoomOutIcon: () => mD,
  ZoomResetIcon: () => gD,
  iconList: () => iD
});
var iD = [
  {
    name: "Images",
    icons: [
      "PhotoIcon",
      "ComponentIcon",
      "GridIcon",
      "OutlineIcon",
      "PhotoDragIcon",
      "GridAltIcon",
      "SearchIcon",
      "ZoomIcon",
      "ZoomOutIcon",
      "ZoomResetIcon",
      "EyeIcon",
      "EyeCloseIcon",
      "LightningIcon",
      "LightningOffIcon",
      "ContrastIcon",
      "SwitchAltIcon",
      "MirrorIcon",
      "GrowIcon",
      "PaintBrushIcon",
      "RulerIcon",
      "StopIcon",
      "CameraIcon",
      "VideoIcon",
      "SpeakerIcon",
      "PlayIcon",
      "PlayBackIcon",
      "PlayNextIcon",
      "RewindIcon",
      "FastForwardIcon",
      "StopAltIcon",
      "StopAltHollowIcon",
      "PlayHollowIcon",
      "PlayAllHollowIcon",
      "SideBySideIcon",
      "StackedIcon",
      "SunIcon",
      "MoonIcon"
    ]
  },
  {
    name: "Documents",
    icons: [
      "BookIcon",
      "DocumentIcon",
      "CopyIcon",
      "CategoryIcon",
      "FolderIcon",
      "PrintIcon",
      "GraphLineIcon",
      "CalendarIcon",
      "GraphBarIcon",
      "AlignLeftIcon",
      "AlignRightIcon",
      "FilterIcon",
      "DocChartIcon",
      "DocListIcon",
      "DragIcon",
      "MenuIcon"
    ]
  },
  {
    name: "Editing",
    icons: [
      "MarkupIcon",
      "BoldIcon",
      "ItalicIcon",
      "PaperClipIcon",
      "ListOrderedIcon",
      "ListUnorderedIcon",
      "ParagraphIcon",
      "MarkdownIcon"
    ]
  },
  {
    name: "Git",
    icons: [
      "RepoIcon",
      "CommitIcon",
      "BranchIcon",
      "PullRequestIcon",
      "MergeIcon"
    ]
  },
  {
    name: "OS",
    icons: [
      "AppleIcon",
      "LinuxIcon",
      "UbuntuIcon",
      "WindowsIcon",
      "ChromeIcon"
    ]
  },
  {
    name: "Logos",
    icons: [
      "StorybookIcon",
      "AzureDevOpsIcon",
      "BitbucketIcon",
      "ChromaticIcon",
      "ComponentDrivenIcon",
      "DiscordIcon",
      "FacebookIcon",
      "FigmaIcon",
      "GDriveIcon",
      "GithubIcon",
      "GitlabIcon",
      "GoogleIcon",
      "GraphqlIcon",
      "MediumIcon",
      "ReduxIcon",
      "TwitterIcon",
      "YoutubeIcon",
      "VSCodeIcon",
      "LinkedinIcon",
      "XIcon"
    ]
  },
  {
    name: "Devices",
    icons: [
      "BrowserIcon",
      "TabletIcon",
      "MobileIcon",
      "WatchIcon",
      "SidebarIcon",
      "SidebarAltIcon",
      "SidebarAltToggleIcon",
      "SidebarToggleIcon",
      "BottomBarIcon",
      "BottomBarToggleIcon",
      "CPUIcon",
      "DatabaseIcon",
      "MemoryIcon",
      "StructureIcon",
      "BoxIcon",
      "PowerIcon"
    ]
  },
  {
    name: "CRUD",
    icons: [
      "EditIcon",
      "CogIcon",
      "NutIcon",
      "WrenchIcon",
      "EllipsisIcon",
      "WandIcon",
      "CheckIcon",
      "FormIcon",
      "BatchDenyIcon",
      "BatchAcceptIcon",
      "ControlsIcon",
      "PlusIcon",
      "CloseAltIcon",
      "CrossIcon",
      "TrashIcon",
      "PinAltIcon",
      "UnpinIcon",
      "AddIcon",
      "SubtractIcon",
      "CloseIcon",
      "DeleteIcon",
      "PassedIcon",
      "ChangedIcon",
      "FailedIcon",
      "ClearIcon",
      "CommentIcon",
      "CommentAddIcon",
      "RequestChangeIcon",
      "CommentsIcon",
      "ChatIcon",
      "LockIcon",
      "UnlockIcon",
      "KeyIcon",
      "OutboxIcon",
      "CreditIcon",
      "ButtonIcon",
      "TypeIcon",
      "PointerDefaultIcon",
      "PointerHandIcon",
      "CommandIcon",
      "SaveIcon"
    ]
  },
  {
    name: "Communicate",
    icons: [
      "InfoIcon",
      "QuestionIcon",
      "SupportIcon",
      "AlertIcon",
      "AlertAltIcon",
      "EmailIcon",
      "PhoneIcon",
      "LinkIcon",
      "LinkBrokenIcon",
      "BellIcon",
      "RSSIcon",
      "ShareAltIcon",
      "ShareIcon",
      "JumpToIcon",
      "CircleHollowIcon",
      "CircleIcon",
      "BookmarkHollowIcon",
      "BookmarkIcon",
      "DiamondIcon",
      "HeartHollowIcon",
      "HeartIcon",
      "StarHollowIcon",
      "StarIcon",
      "CertificateIcon",
      "VerifiedIcon",
      "ThumbsUpIcon",
      "ShieldIcon",
      "BasketIcon",
      "BeakerIcon",
      "HourglassIcon",
      "FlagIcon",
      "CloudHollowIcon",
      "CloudIcon",
      "StickerIcon",
      "StatusFailIcon",
      "StatusWarnIcon",
      "StatusPassIcon"
    ]
  },
  {
    name: "Wayfinding",
    icons: [
      "ChevronUpIcon",
      "ChevronDownIcon",
      "ChevronLeftIcon",
      "ChevronRightIcon",
      "ChevronSmallUpIcon",
      "ChevronSmallDownIcon",
      "ChevronSmallLeftIcon",
      "ChevronSmallRightIcon",
      "ArrowUpIcon",
      "ArrowDownIcon",
      "ArrowLeftIcon",
      "ArrowRightIcon",
      "ArrowTopLeftIcon",
      "ArrowTopRightIcon",
      "ArrowBottomLeftIcon",
      "ArrowBottomRightIcon",
      "ArrowSolidUpIcon",
      "ArrowSolidDownIcon",
      "ArrowSolidLeftIcon",
      "ArrowSolidRightIcon",
      "ExpandAltIcon",
      "CollapseIcon",
      "ExpandIcon",
      "UnfoldIcon",
      "TransferIcon",
      "RedirectIcon",
      "UndoIcon",
      "ReplyIcon",
      "SyncIcon",
      "UploadIcon",
      "DownloadIcon",
      "BackIcon",
      "ProceedIcon",
      "RefreshIcon",
      "GlobeIcon",
      "CompassIcon",
      "LocationIcon",
      "PinIcon",
      "TimeIcon",
      "DashboardIcon",
      "TimerIcon",
      "HomeIcon",
      "AdminIcon",
      "DirectionIcon"
    ]
  },
  {
    name: "People",
    icons: [
      "UserIcon",
      "UserAltIcon",
      "UserAddIcon",
      "UsersIcon",
      "ProfileIcon",
      "FaceHappyIcon",
      "FaceNeutralIcon",
      "FaceSadIcon",
      "AccessibilityIcon",
      "AccessibilityAltIcon"
    ]
  }
], lD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.25 4.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 1.504v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5zM2 9.297V2.004h10v5.293L9.854 5.15a.5.5 0 00-.708 0L6.5 7.797 5.354 6.65a.5.5 0 00-.708 0L2 9.297zM9.5 6.21l2.5 2.5v3.293H2V10.71l3-3 3.146 3.146a.5.5 0 00.708-.707L7.207 8.504 9.5 6.21z",
      fill: e
    }
  )
)), sD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
      fill: e
    }
  )
)), uD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5H6a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H1.5a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5h3.5v3.5H2zM7.5 1.504a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5zM1.5 7.504a.5.5 0 00-.5.5v4.5a.5.5 0 00.5.5H6a.5.5 0 00.5-.5v-4.5a.5.5 0 00-.5-.5H1.5zm.5 1v3.5h3.5v-3.5H2zM7.5 8.004a.5.5 0 01.5-.5h4.5a.5.5 0 01.5.5v4.5a.5.5 0 01-.5.5H8a.5.5 0 01-.5-.5v-4.5zm1 4v-3.5H12v3.5H8.5z",
      fill: e
    }
  )
)), cD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 2.004v2H1v-2.5a.5.5 0 01.5-.5H4v1H2zM1 9.004v-4h1v4H1zM1 10.004v2.5a.5.5 0 00.5.5H4v-1H2v-2H1zM10 13.004h2.5a.5.5 0 00.5-.5v-2.5h-1v2h-2v1zM12 4.004h1v-2.5a.5.5 0 00-.5-.5H10v1h2v2zM9 12.004v1H5v-1h4zM9 1.004v1H5v-1h4zM13 9.004h-1v-4h1v4zM7 8.004a1 1 0 100-2 1 1 0 000 2z",
      fill: e
    }
  )
)), dD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.25 3.254a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm-.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7.003v-6.5a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v2.5h1v-2h2v6.5a.5.5 0 00.5.5H10v2H8v1h2.5a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-3.5zm-10-6v5.794L5.646 5.15a.5.5 0 01.708 0L7.5 6.297l2.646-2.647a.5.5 0 01.708 0L13 5.797V1.004H4zm9 6.208l-2.5-2.5-2.293 2.293L9.354 8.15a.5.5 0 11-.708.707L6 6.211l-2 2v1.793h9V7.21z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M0 10.004v-3h1v3H0zM0 13.504v-2.5h1v2h2v1H.5a.5.5 0 01-.5-.5zM7 14.004H4v-1h3v1z",
      fill: e
    }
  )
)), pD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4 3V1h1v2H4zM4 6v2h1V6H4zM4 11v2h1v-2H4zM9 11v2h1v-2H9zM9 8V6h1v2H9zM9 1v2h1V1H9zM13 5h-2V4h2v1zM11 10h2V9h-2v1zM3 10H1V9h2v1zM1 5h2V4H1v1zM8 5H6V4h2v1zM6 10h2V9H6v1zM4 4h1v1H4V4zM10 4H9v1h1V4zM9 9h1v1H9V9zM5 9H4v1h1V9z",
      fill: e
    }
  )
)), hD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
      fill: e
    }
  )
)), fD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6 3.5a.5.5 0 01.5.5v1.5H8a.5.5 0 010 1H6.5V8a.5.5 0 01-1 0V6.5H4a.5.5 0 010-1h1.5V4a.5.5 0 01.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.544 10.206a5.5 5.5 0 11.662-.662.5.5 0 01.148.102l3 3a.5.5 0 01-.708.708l-3-3a.5.5 0 01-.102-.148zM10.5 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z",
      fill: e
    }
  )
)), mD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M4 5.5a.5.5 0 000 1h4a.5.5 0 000-1H4z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 11.5c1.35 0 2.587-.487 3.544-1.294a.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 106 11.5zm0-1a4.5 4.5 0 100-9 4.5 4.5 0 000 9z",
      fill: e
    }
  )
)), gD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 2.837V1.5a.5.5 0 00-1 0V4a.5.5 0 00.5.5h2.5a.5.5 0 000-1H2.258a4.5 4.5 0 11-.496 4.016.5.5 0 10-.942.337 5.502 5.502 0 008.724 2.353.5.5 0 00.102.148l3 3a.5.5 0 00.708-.708l-3-3a.5.5 0 00-.148-.102A5.5 5.5 0 101.5 2.837z",
      fill: e
    }
  )
)), vD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M7 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7l-.21.293C13.669 7.465 10.739 11.5 7 11.5S.332 7.465.21 7.293L0 7l.21-.293C.331 6.536 3.261 2.5 7 2.5s6.668 4.036 6.79 4.207L14 7zM2.896 5.302A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5c1.518 0 2.958-.83 4.104-1.802A12.72 12.72 0 0012.755 7c-.297-.37-.875-1.04-1.65-1.698C9.957 4.33 8.517 3.5 7 3.5c-1.519 0-2.958.83-4.104 1.802z",
      fill: e
    }
  )
)), wD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11zM11.104 8.698c-.177.15-.362.298-.553.439l.714.714a13.25 13.25 0 002.526-2.558L14 7l-.21-.293C13.669 6.536 10.739 2.5 7 2.5c-.89 0-1.735.229-2.506.58l.764.763A4.859 4.859 0 017 3.5c1.518 0 2.958.83 4.104 1.802A12.724 12.724 0 0112.755 7a12.72 12.72 0 01-1.65 1.698zM.21 6.707c.069-.096 1.03-1.42 2.525-2.558l.714.714c-.191.141-.376.288-.553.439A12.725 12.725 0 001.245 7c.296.37.874 1.04 1.65 1.698C4.043 9.67 5.482 10.5 7 10.5a4.86 4.86 0 001.742-.344l.764.764c-.772.351-1.616.58-2.506.58C3.262 11.5.332 7.465.21 7.293L0 7l.21-.293z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.5 7c0-.322.061-.63.172-.914l3.242 3.242A2.5 2.5 0 014.5 7zM9.328 7.914L6.086 4.672a2.5 2.5 0 013.241 3.241z",
      fill: e
    }
  )
)), bD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.522 6.6a.566.566 0 00-.176.544.534.534 0 00.382.41l2.781.721-1.493 5.013a.563.563 0 00.216.627.496.496 0 00.63-.06l6.637-6.453a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L2.522 6.6zm7.72.63l-3.067-.804L9.02 2.29 3.814 6.803l2.95.764-1.277 4.285 4.754-4.622zM4.51 13.435l.037.011-.037-.011z",
      fill: e
    }
  )
)), C7 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.139 8.725l1.36-1.323a.568.568 0 00.151-.54.534.534 0 00-.377-.396l-2.705-.708 2.22-4.976a.568.568 0 00-.15-.666.497.497 0 00-.648.008L5.464 4.05l.708.71 2.848-2.47-1.64 3.677.697.697 2.164.567-.81.787.708.708zM2.523 6.6a.566.566 0 00-.177.544.534.534 0 00.382.41l2.782.721-1.494 5.013a.563.563 0 00.217.627.496.496 0 00.629-.06l3.843-3.736-.708-.707-2.51 2.44 1.137-3.814-.685-.685-2.125-.55.844-.731-.71-.71L2.524 6.6zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z",
      fill: e
    }
  )
)), DD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 3.004H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h10a.5.5 0 00.5-.5v-2.5h2.5a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-10a.5.5 0 00-.5.5v2.5zm1 1v2.293l2.293-2.293H4zm-1 0v6.5a.499.499 0 00.497.5H10v2H1v-9h2zm1-1h6.5a.499.499 0 01.5.5v6.5h2v-9H4v2zm6 7V7.71l-2.293 2.293H10zm0-3.707V4.71l-5.293 5.293h1.586L10 6.297zm-.707-2.293H7.707L4 7.71v1.586l5.293-5.293z",
      fill: e
    }
  )
)), yD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 3.004v-2.5a.5.5 0 01.5-.5h10a.5.5 0 01.5.5v10a.5.5 0 01-.5.5H11v2.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H3zm1 0v-2h9v9h-2v-6.5a.5.5 0 00-.5-.5H4zm6 8v2H1v-9h2v6.5a.5.5 0 00.5.5H10zm0-1H4v-6h6v6z",
      fill: e
    }
  )
)), ED = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5h10v-10l-10 10z",
      fill: e
    }
  )
)), CD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 1.004a.5.5 0 100 1H12v10.5a.5.5 0 001 0v-10.5a1 1 0 00-1-1H1.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1 3.504a.5.5 0 01.5-.5H10a1 1 0 011 1v8.5a.5.5 0 01-1 0v-8.5H1.5a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 5.004a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7zm.5 1v6h6v-6H2z",
      fill: e
    }
  )
)), xD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.854.146a.5.5 0 00-.708 0L2.983 8.31a2.24 2.24 0 00-1.074.6C.677 10.14.24 11.902.085 12.997 0 13.6 0 14 0 14s.4 0 1.002-.085c1.095-.155 2.857-.592 4.089-1.824a2.24 2.24 0 00.6-1.074l8.163-8.163a.5.5 0 000-.708l-2-2zM5.6 9.692l.942-.942L5.25 7.457l-.942.943A2.242 2.242 0 015.6 9.692zm1.649-1.65L12.793 2.5 11.5 1.207 5.957 6.75 7.25 8.043zM4.384 9.617a1.25 1.25 0 010 1.768c-.767.766-1.832 1.185-2.78 1.403-.17.04-.335.072-.49.098.027-.154.06-.318.099-.49.219-.947.637-2.012 1.403-2.779a1.25 1.25 0 011.768 0z",
      fill: e
    }
  )
)), SD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 1.004a.5.5 0 01.5.5v.5h10v-.5a.5.5 0 011 0v2a.5.5 0 01-1 0v-.5H2v.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 6a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-11zM2 7v5h10V7h-1v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H7.5v2.5a.5.5 0 01-1 0V7h-.75v1a.5.5 0 01-1 0V7H4v2.5a.5.5 0 01-1 0V7H2z",
      fill: e
    }
  )
)), AD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.5 4a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), kD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7a3 3 0 11-6 0 3 3 0 016 0zM9 7a2 2 0 11-4 0 2 2 0 014 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 1a.5.5 0 00-.5.5v.504H.5a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H6V1.5a.5.5 0 00-.5-.5h-3zM1 3.004v8h12v-8H1z",
      fill: e
    }
  )
)), FD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M2.5 10a.5.5 0 100-1 .5.5 0 000 1z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 4a2 2 0 012-2h6a2 2 0 012 2v.5l3.189-2.391A.5.5 0 0114 2.5v9a.5.5 0 01-.804.397L10 9.5v.5a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm9 0v1.5a.5.5 0 00.8.4L13 3.5v7L9.8 8.1a.5.5 0 00-.8.4V10a1 1 0 01-1 1H2a1 1 0 01-1-1V4a1 1 0 011-1h6a1 1 0 011 1z",
      fill: e
    }
  )
)), BD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 4.5v5a.5.5 0 00.5.5H4l3.17 2.775a.5.5 0 00.83-.377V1.602a.5.5 0 00-.83-.376L4 4H1.5a.5.5 0 00-.5.5zM4 9V5H2v4h2zm.998.545A.504.504 0 005 9.5v-5c0-.015 0-.03-.002-.044L7 2.704v8.592L4.998 9.545z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.15 1.752a.5.5 0 00-.3.954 4.502 4.502 0 010 8.588.5.5 0 00.3.954 5.502 5.502 0 000-10.496z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.25 3.969a.5.5 0 00-.5.865 2.499 2.499 0 010 4.332.5.5 0 10.5.866 3.499 3.499 0 000-6.063z",
      fill: e
    }
  )
)), zD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M12.813 7.425l-9.05 5.603A.5.5 0 013 12.603V1.398a.5.5 0 01.763-.425l9.05 5.602a.5.5 0 010 .85z",
      fill: e
    }
  )
)), _D = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.24 12.035L3.697 7.427A.494.494 0 013.5 7.2v4.05a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0V6.8a.494.494 0 01.198-.227l7.541-4.608A.5.5 0 0112 2.39v9.217a.5.5 0 01-.76.427z",
      fill: e
    }
  )
)), ID = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.76 12.035l7.542-4.608A.495.495 0 0010.5 7.2v4.05a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0V6.8a.495.495 0 00-.198-.227L2.76 1.965A.5.5 0 002 2.39v9.217a.5.5 0 00.76.427z",
      fill: e
    }
  )
)), RD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9 2.42v2.315l4.228-2.736a.5.5 0 01.772.42v9.162a.5.5 0 01-.772.42L9 9.263v2.317a.5.5 0 01-.772.42L1.5 7.647v3.603a.75.75 0 01-1.5 0v-8.5a.75.75 0 011.5 0v3.603L8.228 2A.5.5 0 019 2.42z",
      fill: e
    }
  )
)), LD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5 2.42v2.315L.772 1.999a.5.5 0 00-.772.42v9.162a.5.5 0 00.772.42L5 9.263v2.317a.5.5 0 00.772.42L12.5 7.647v3.603a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v3.603L5.772 2A.5.5 0 005 2.42z",
      fill: e
    }
  )
)), TD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11z",
      fill: e
    }
  )
)), MD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.2 2.204v9.6h9.6v-9.6H2.2zm-.7-1.2a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11z",
      fill: e
    }
  )
)), HD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.2 10.88L10.668 7 4.2 3.12v7.76zM3 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L4.212 1.727A.8.8 0 003 2.413z",
      fill: e
    }
  )
)), OD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.2 10.88L11.668 7 5.2 3.12v7.76zM4 2.414v9.174a.8.8 0 001.212.686l7.645-4.587a.8.8 0 000-1.372L5.212 1.727A.8.8 0 004 2.413zM1.5 1.6a.6.6 0 01.6.6v9.6a.6.6 0 11-1.2 0V2.2a.6.6 0 01.6-.6z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.963 1.932a.6.6 0 01.805-.268l1 .5a.6.6 0 01-.536 1.073l-1-.5a.6.6 0 01-.269-.805zM3.037 11.132a.6.6 0 01-.269.805l-1 .5a.6.6 0 01-.536-1.073l1-.5a.6.6 0 01.805.268z",
      fill: e
    }
  )
)), ND = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 10.5v-10h5v10H2z",
      fill: e
    }
  )
)), PD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 1.004a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11zm-10.5 1h10v5H2v-5z",
      fill: e
    }
  )
)), $D = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3492)", fill: e }, /* @__PURE__ */ i.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0V2a.5.5 0 001 0V.5z" }), /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 10a3 3 0 100-6 3 3 0 000 6zm0-1a2 2 0 100-4 2 2 0 000 4z"
    }
  ), /* @__PURE__ */ i.createElement("path", { d: "M7 11.5a.5.5 0 01.5.5v1.5a.5.5 0 01-1 0V12a.5.5 0 01.5-.5zM11.5 7a.5.5 0 01.5-.5h1.5a.5.5 0 010 1H12a.5.5 0 01-.5-.5zM.5 6.5a.5.5 0 000 1H2a.5.5 0 000-1H.5zM3.818 10.182a.5.5 0 010 .707l-1.06 1.06a.5.5 0 11-.708-.706l1.06-1.06a.5.5 0 01.708 0zM11.95 2.757a.5.5 0 10-.707-.707l-1.061 1.061a.5.5 0 10.707.707l1.06-1.06zM10.182 10.182a.5.5 0 01.707 0l1.06 1.06a.5.5 0 11-.706.708l-1.061-1.06a.5.5 0 010-.708zM2.757 2.05a.5.5 0 10-.707.707l1.06 1.061a.5.5 0 00.708-.707l-1.06-1.06z" })),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3492" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), jD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3493)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.335.047l-.15-.015a7.499 7.499 0 106.14 10.577c.103-.229-.156-.447-.386-.346a5.393 5.393 0 01-.771.27A5.356 5.356 0 019.153.691C9.37.568 9.352.23 9.106.175a7.545 7.545 0 00-.77-.128zM6.977 1.092a6.427 6.427 0 005.336 10.671A6.427 6.427 0 116.977 1.092z",
      fill: e
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3493" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      fill: "#fff",
      transform: "scale(1.07124)",
      d: "M0 0h14.001v14.002H0z"
    }
  )))
)), VD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13 2a2 2 0 00-2-2H1.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5H11a2 2 0 002-2V2zM3 13h8a1 1 0 001-1V2a1 1 0 00-1-1H7v6.004a.5.5 0 01-.856.352l-.002-.002L5.5 6.71l-.645.647A.5.5 0 014 7.009V1H3v12zM5 1v4.793l.146-.146a.5.5 0 01.743.039l.111.11V1H5z",
      fill: e
    }
  )
)), qD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0 00.5.5h2V13H2V1z",
      fill: e
    }
  )
)), WD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.746.07A.5.5 0 0011.5.003h-6a.5.5 0 00-.5.5v2.5H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-2.5h4.5a.5.5 0 00.5-.5v-8a.498.498 0 00-.15-.357L11.857.154a.506.506 0 00-.11-.085zM9 10.003h4v-7h-1.5a.5.5 0 01-.5-.5v-1.5H6v2h.5a.5.5 0 01.357.15L8.85 5.147c.093.09.15.217.15.357v4.5zm-8-6v9h7v-7H6.5a.5.5 0 01-.5-.5v-1.5H1z",
      fill: e
    }
  )
)), UD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3 1.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM2 3.504a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 5.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v7a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-7zM2 12V6h10v6H2z",
      fill: e
    }
  )
)), GD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-8.5a.5.5 0 00-.5-.5H7z",
      fill: e
    }
  )
)), ZD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.5 8.004a.5.5 0 100 1h5a.5.5 0 000-1h-5zM4.5 10.004a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2 1.504a.5.5 0 01.5-.5h8a.498.498 0 01.357.15l.993.993c.093.09.15.217.15.357v1.5h1.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H12v2.5a.5.5 0 01-.5.5h-9a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5H2v-2.5zm11 7.5h-1v-2.5a.5.5 0 00-.5-.5h-9a.5.5 0 00-.5.5v2.5H1v-4h12v4zm-2-6v1H3v-2h7v.5a.5.5 0 00.5.5h.5zm-8 9h8v-5H3v5z",
      fill: e
    }
  )
)), YD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.146 6.15a.5.5 0 01.708 0L7 7.297 9.146 5.15a.5.5 0 01.708 0l1 1a.5.5 0 01-.708.707L9.5 6.211 7.354 8.357a.5.5 0 01-.708 0L5.5 7.211 3.854 8.857a.5.5 0 11-.708-.707l2-2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 1.004a.5.5 0 00-.5.5v11a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-11a.5.5 0 00-.5-.5h-11zm.5 1v10h10v-10H2z",
      fill: e
    }
  )
)), XD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0a.5.5 0 01.5.5V1h6V.5a.5.5 0 011 0V1h1.5a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H3V.5a.5.5 0 01.5-.5zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 4v2.3h3V4H9zM5.5 6.3h3V4h-3v2.3z",
      fill: e
    }
  )
)), KD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M12 2.5a.5.5 0 00-1 0v10a.5.5 0 001 0v-10zM9 4.5a.5.5 0 00-1 0v8a.5.5 0 001 0v-8zM5.5 7a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM3 10.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2z",
      fill: e
    }
  )
)), JD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M13 2a.5.5 0 010 1H1a.5.5 0 010-1h12zM10 5a.5.5 0 010 1H1a.5.5 0 010-1h9zM11.5 8.5A.5.5 0 0011 8H1a.5.5 0 000 1h10a.5.5 0 00.5-.5zM7.5 11a.5.5 0 010 1H1a.5.5 0 010-1h6.5z",
      fill: e
    }
  )
)), QD = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM4 5a.5.5 0 000 1h9a.5.5 0 000-1H4zM2.5 8.5A.5.5 0 013 8h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1H13a.5.5 0 000-1H6.5z",
      fill: e
    }
  )
)), e9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1 2a.5.5 0 000 1h12a.5.5 0 000-1H1zM3 5a.5.5 0 000 1h8a.5.5 0 000-1H3zM4.5 8.5A.5.5 0 015 8h4a.5.5 0 010 1H5a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
      fill: e
    }
  )
)), t9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v2.3h3V4H2zm0 5.2V6.8h3v2.4H2zm0 .5V12h3V9.7H2zm3.5 0V12h3V9.7h-3zm3.5 0V12h3V9.7H9zm3-.5H9V6.8h3v2.4zm-3.5 0h-3V6.8h3v2.4zM9 6.3h3V4H9v2.3zm-3.5 0h3V4h-3v2.3z",
      fill: e
    }
  )
)), r9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.5 6.5A.5.5 0 014 6h6a.5.5 0 010 1H4a.5.5 0 01-.5-.5zM4 9a.5.5 0 000 1h6a.5.5 0 000-1H4z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zM2 4v8h10V4H2z",
      fill: e
    }
  )
)), n9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M13 4a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 9.5A.5.5 0 0013 9H1a.5.5 0 000 1h12a.5.5 0 00.5-.5z",
      fill: e
    }
  )
)), a9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M13 3.5a.5.5 0 010 1H1a.5.5 0 010-1h12zM13.5 10a.5.5 0 00-.5-.5H1a.5.5 0 000 1h12a.5.5 0 00.5-.5zM13 6.5a.5.5 0 010 1H1a.5.5 0 010-1h12z",
      fill: e
    }
  )
)), o9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8.982 1.632a.5.5 0 00-.964-.263l-3 11a.5.5 0 10.964.263l3-11zM3.32 3.616a.5.5 0 01.064.704L1.151 7l2.233 2.68a.5.5 0 11-.768.64l-2.5-3a.5.5 0 010-.64l2.5-3a.5.5 0 01.704-.064zM10.68 3.616a.5.5 0 00-.064.704L12.849 7l-2.233 2.68a.5.5 0 00.768.64l2.5-3a.5.5 0 000-.64l-2.5-3a.5.5 0 00-.704-.064z",
      fill: e
    }
  )
)), i9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 2v1.5h1v7H3V12h5a3 3 0 001.791-5.407A2.75 2.75 0 008 2.011V2H3zm5 5.5H5.5v3H8a1.5 1.5 0 100-3zm-.25-4H5.5V6h2.25a1.25 1.25 0 100-2.5z",
      fill: e
    }
  )
)), l9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M5 2h6v1H8.5l-2 8H9v1H3v-1h2.5l2-8H5V2z", fill: e })
)), s9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.553 2.268a1.5 1.5 0 00-2.12 0L2.774 7.925a2.5 2.5 0 003.536 3.535l3.535-3.535a.5.5 0 11.707.707l-3.535 3.536-.002.002a3.5 3.5 0 01-4.959-4.941l.011-.011L7.725 1.56l.007-.008a2.5 2.5 0 013.53 3.541l-.002.002-5.656 5.657-.003.003a1.5 1.5 0 01-2.119-2.124l3.536-3.536a.5.5 0 11.707.707L4.189 9.34a.5.5 0 00.707.707l5.657-5.657a1.5 1.5 0 000-2.121z",
      fill: e
    }
  )
)), u9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5 2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2.5 2H1v1h1v3h1V2.5a.5.5 0 00-.5-.5zM3 8.5v1a.5.5 0 01-1 0V9h-.5a.5.5 0 010-1h1a.5.5 0 01.5.5zM2 10.5a.5.5 0 00-1 0V12h2v-1H2v-.5z",
      fill: e
    }
  )
)), c9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.75 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5.5 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5.5 11a.5.5 0 000 1h7a.5.5 0 000-1h-7zM2 12.25a.75.75 0 100-1.5.75.75 0 000 1.5zM5 7a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 7zM2 7.75a.75.75 0 100-1.5.75.75 0 000 1.5z",
      fill: e
    }
  )
)), d9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6 7a3 3 0 110-6h5.5a.5.5 0 010 1H10v10.5a.5.5 0 01-1 0V2H7v10.5a.5.5 0 01-1 0V7z",
      fill: e
    }
  )
)), p9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 4.5h1.5L5 6.375 6.5 4.5H8v5H6.5V7L5 8.875 3.5 7v2.5H2v-5zM9.75 4.5h1.5V7h1.25l-2 2.5-2-2.5h1.25V4.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 2a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5zM1 3v8h12V3H1z",
      fill: e
    }
  )
)), h9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5 2.5a.5.5 0 11-1 0 .5.5 0 011 0zM4.5 5a.5.5 0 100-1 .5.5 0 000 1zM5 6.5a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 0a2 2 0 012 2v10a2 2 0 01-2 2H1.5a.5.5 0 01-.5-.5V.5a.5.5 0 01.5-.5H11zm0 1H3v12h8a1 1 0 001-1V2a1 1 0 00-1-1z",
      fill: e
    }
  )
)), f9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.031 7.5a4 4 0 007.938 0H13.5a.5.5 0 000-1h-2.53a4 4 0 00-7.94 0H.501a.5.5 0 000 1h2.531zM7 10a3 3 0 100-6 3 3 0 000 6z",
      fill: e
    }
  )
)), m9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6 2.5a1.5 1.5 0 01-1 1.415v4.053C5.554 7.4 6.367 7 7.5 7c.89 0 1.453-.252 1.812-.557.218-.184.374-.4.482-.62a1.5 1.5 0 111.026.143c-.155.423-.425.87-.86 1.24C9.394 7.685 8.59 8 7.5 8c-1.037 0-1.637.42-1.994.917a2.81 2.81 0 00-.472 1.18A1.5 1.5 0 114 10.086v-6.17A1.5 1.5 0 116 2.5zm-2 9a.5.5 0 111 0 .5.5 0 01-1 0zm1-9a.5.5 0 11-1 0 .5.5 0 011 0zm6 2a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e
    }
  )
)), g9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.354 1.354L7.707 2H8.5A2.5 2.5 0 0111 4.5v5.585a1.5 1.5 0 11-1 0V4.5A1.5 1.5 0 008.5 3h-.793l.647.646a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708zM11 11.5a.5.5 0 11-1 0 .5.5 0 011 0zM4 3.915a1.5 1.5 0 10-1 0v6.17a1.5 1.5 0 101 0v-6.17zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zm0-8a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e
    }
  )
)), v9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.108 3.872A1.5 1.5 0 103 3.915v6.17a1.5 1.5 0 101 0V6.41c.263.41.573.77.926 1.083 1.108.98 2.579 1.433 4.156 1.5A1.5 1.5 0 109.09 7.99c-1.405-.065-2.62-.468-3.5-1.248-.723-.64-1.262-1.569-1.481-2.871zM3.5 11a.5.5 0 100 1 .5.5 0 000-1zM4 2.5a.5.5 0 11-1 0 .5.5 0 011 0zm7 6a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e
    }
  )
)), w9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.03 8.103a3.044 3.044 0 01-.202-1.744 2.697 2.697 0 011.4-1.935c-.749-1.18-1.967-1.363-2.35-1.403-.835-.086-2.01.56-2.648.57h-.016c-.639-.01-1.814-.656-2.649-.57-.415.044-1.741.319-2.541 1.593-.281.447-.498 1.018-.586 1.744a6.361 6.361 0 00-.044.85c.005.305.028.604.07.895.09.62.259 1.207.477 1.744.242.595.543 1.13.865 1.585.712 1.008 1.517 1.59 1.971 1.6.934.021 1.746-.61 2.416-.594.006.002.014.003.02.002h.017c.007 0 .014 0 .021-.002.67-.017 1.481.615 2.416.595.453-.011 1.26-.593 1.971-1.6a7.95 7.95 0 00.97-1.856c-.697-.217-1.27-.762-1.578-1.474zm-2.168-5.97c.717-.848.69-2.07.624-2.125-.065-.055-1.25.163-1.985.984-.735.82-.69 2.071-.624 2.125.064.055 1.268-.135 1.985-.984z",
      fill: e
    }
  )
)), b9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0a3 3 0 013 3v1.24c.129.132.25.27.362.415.113.111.283.247.515.433l.194.155c.325.261.711.582 1.095.966.765.765 1.545 1.806 1.823 3.186a.501.501 0 01-.338.581 3.395 3.395 0 01-1.338.134 2.886 2.886 0 01-1.049-.304 5.535 5.535 0 01-.17.519 2 2 0 11-2.892 2.55A5.507 5.507 0 017 13c-.439 0-.838-.044-1.201-.125a2 2 0 11-2.892-2.55 5.553 5.553 0 01-.171-.519c-.349.182-.714.27-1.05.304A3.395 3.395 0 01.35 9.977a.497.497 0 01-.338-.582c.278-1.38 1.058-2.42 1.823-3.186.384-.384.77-.705 1.095-.966l.194-.155c.232-.186.402-.322.515-.433.112-.145.233-.283.362-.414V3a3 3 0 013-3zm1.003 11.895a2 2 0 012.141-1.89c.246-.618.356-1.322.356-2.005 0-.514-.101-1.07-.301-1.599l-.027-.017a6.387 6.387 0 00-.857-.42 6.715 6.715 0 00-1.013-.315l-.852.638a.75.75 0 01-.9 0l-.852-.638a6.716 6.716 0 00-1.693.634 4.342 4.342 0 00-.177.101l-.027.017A4.6 4.6 0 003.501 8c0 .683.109 1.387.355 2.005a2 2 0 012.142 1.89c.295.067.627.105 1.002.105s.707-.038 1.003-.105zM5 12a1 1 0 11-2 0 1 1 0 012 0zm6 0a1 1 0 11-2 0 1 1 0 012 0zM6.1 4.3a1.5 1.5 0 011.8 0l.267.2L7 5.375 5.833 4.5l.267-.2zM8.5 2a.5.5 0 01.5.5V3a.5.5 0 01-1 0v-.5a.5.5 0 01.5-.5zM6 2.5a.5.5 0 00-1 0V3a.5.5 0 001 0v-.5z",
      fill: e
    }
  )
)), D9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3497)", fill: e }, /* @__PURE__ */ i.createElement("path", { d: "M12.261 2.067c0 1.142-.89 2.068-1.988 2.068-1.099 0-1.99-.926-1.99-2.068C8.283.926 9.174 0 10.273 0c1.098 0 1.989.926 1.989 2.067zM3.978 6.6c0 1.142-.89 2.068-1.989 2.068C.891 8.668 0 7.742 0 6.601c0-1.142.89-2.068 1.989-2.068 1.099 0 1.989.926 1.989 2.068zM6.475 11.921A4.761 4.761 0 014.539 11a4.993 4.993 0 01-1.367-1.696 2.765 2.765 0 01-1.701.217 6.725 6.725 0 001.844 2.635 6.379 6.379 0 004.23 1.577 3.033 3.033 0 01-.582-1.728 4.767 4.767 0 01-.488-.083zM11.813 11.933c0 1.141-.89 2.067-1.989 2.067-1.098 0-1.989-.926-1.989-2.067 0-1.142.891-2.068 1.99-2.068 1.098 0 1.989.926 1.989 2.068zM12.592 11.173a6.926 6.926 0 001.402-3.913 6.964 6.964 0 00-1.076-4.023A2.952 2.952 0 0111.8 4.6c.398.78.592 1.656.564 2.539a5.213 5.213 0 01-.724 2.495c.466.396.8.935.952 1.54zM1.987 3.631c-.05 0-.101.002-.151.004C3.073 1.365 5.504.024 8.005.23a3.07 3.07 0 00-.603 1.676 4.707 4.707 0 00-2.206.596 4.919 4.919 0 00-1.7 1.576 2.79 2.79 0 00-1.509-.447z" })),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3497" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), y9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.5 1H1v5.5h5.5V1zM13 1H7.5v5.5H13V1zM7.5 7.5H13V13H7.5V7.5zM6.5 7.5H1V13h5.5V7.5z",
      fill: e
    }
  )
)), E9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3496)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.023 3.431a.115.115 0 01-.099.174H7.296A3.408 3.408 0 003.7 6.148a.115.115 0 01-.21.028l-1.97-3.413a.115.115 0 01.01-.129A6.97 6.97 0 017 0a6.995 6.995 0 016.023 3.431zM7 9.615A2.619 2.619 0 014.384 7 2.62 2.62 0 017 4.383 2.619 2.619 0 019.616 7 2.619 2.619 0 017 9.615zm1.034.71a.115.115 0 00-.121-.041 3.4 3.4 0 01-.913.124 3.426 3.426 0 01-3.091-1.973L1.098 3.567a.115.115 0 00-.2.001 7.004 7.004 0 005.058 10.354l.017.001c.04 0 .078-.021.099-.057l1.971-3.414a.115.115 0 00-.009-.128zm1.43-5.954h3.947c.047 0 .09.028.107.072.32.815.481 1.675.481 2.557a6.957 6.957 0 01-2.024 4.923A6.957 6.957 0 017.08 14h-.001a.115.115 0 01-.1-.172L9.794 8.95A3.384 3.384 0 0010.408 7c0-.921-.364-1.785-1.024-2.433a.115.115 0 01.08-.196z",
      fill: e
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3496" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), C9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.042.616a.704.704 0 00-.66.729L1.816 12.9c.014.367.306.66.672.677l9.395.422h.032a.704.704 0 00.704-.703V.704c0-.015 0-.03-.002-.044a.704.704 0 00-.746-.659l-.773.049.057 1.615a.105.105 0 01-.17.086l-.52-.41-.617.468a.105.105 0 01-.168-.088L9.746.134 2.042.616zm8.003 4.747c-.247.192-2.092.324-2.092.05.04-1.045-.429-1.091-.689-1.091-.247 0-.662.075-.662.634 0 .57.607.893 1.32 1.27 1.014.538 2.24 1.188 2.24 2.823 0 1.568-1.273 2.433-2.898 2.433-1.676 0-3.141-.678-2.976-3.03.065-.275 2.197-.21 2.197 0-.026.971.195 1.256.753 1.256.43 0 .624-.236.624-.634 0-.602-.633-.958-1.361-1.367-.987-.554-2.148-1.205-2.148-2.7 0-1.494 1.027-2.489 2.86-2.489 1.832 0 2.832.98 2.832 2.845z",
      fill: e
    }
  )
)), x9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3503)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M0 5.176l1.31-1.73 4.902-1.994V.014l4.299 3.144-8.78 1.706v4.8L0 9.162V5.176zm14-2.595v8.548l-3.355 2.857-5.425-1.783v1.783L1.73 9.661l8.784 1.047v-7.55L14 2.581z",
      fill: e
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3503" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), S9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.522a.411.411 0 00-.412.476l1.746 10.597a.56.56 0 00.547.466h8.373a.411.411 0 00.412-.345l1.017-6.248h-3.87L8.35 9.18H5.677l-.724-3.781h7.904L13.412 2A.411.411 0 0013 1.524L1 1.522z",
      fill: e
    }
  )
)), A9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1014 0A7 7 0 000 7zm5.215-3.869a1.967 1.967 0 013.747.834v1.283l-3.346-1.93a2.486 2.486 0 00-.401-.187zm3.484 2.58l-3.346-1.93a1.968 1.968 0 00-2.685.72 1.954 1.954 0 00.09 2.106 2.45 2.45 0 01.362-.254l1.514-.873a.27.27 0 01.268 0l2.1 1.21 1.697-.978zm-.323 4.972L6.86 9.81a.268.268 0 01-.134-.231V7.155l-1.698-.98v3.86a1.968 1.968 0 003.747.835 2.488 2.488 0 01-.4-.187zm.268-.464a1.967 1.967 0 002.685-.719 1.952 1.952 0 00-.09-2.106c-.112.094-.233.18-.361.253L7.53 9.577l1.113.642zm-4.106.257a1.974 1.974 0 01-1.87-.975A1.95 1.95 0 012.47 8.01c.136-.507.461-.93.916-1.193L4.5 6.175v3.86c0 .148.013.295.039.44zM11.329 4.5a1.973 1.973 0 00-1.87-.976c.025.145.039.292.039.44v1.747a.268.268 0 01-.135.232l-2.1 1.211v1.96l3.346-1.931a1.966 1.966 0 00.72-2.683z",
      fill: e
    }
  )
)), k9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.847 2.181L8.867.201a.685.685 0 00-.97 0l-4.81 4.81a.685.685 0 000 .969l2.466 2.465-2.405 2.404a.685.685 0 000 .97l1.98 1.98a.685.685 0 00.97 0l4.81-4.81a.685.685 0 000-.969L8.441 5.555l2.405-2.404a.685.685 0 000-.97z",
      fill: e
    }
  )
)), F9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.852 2.885c-.893-.41-1.85-.712-2.85-.884a.043.043 0 00-.046.021c-.123.22-.26.505-.355.73a10.658 10.658 0 00-3.2 0 7.377 7.377 0 00-.36-.73.045.045 0 00-.046-.021c-1 .172-1.957.474-2.85.884a.04.04 0 00-.019.016C.311 5.612-.186 8.257.058 10.869a.048.048 0 00.018.033 11.608 11.608 0 003.496 1.767.045.045 0 00.049-.016c.27-.368.51-.755.715-1.163a.044.044 0 00-.024-.062 7.661 7.661 0 01-1.092-.52.045.045 0 01-.005-.075c.074-.055.147-.112.217-.17a.043.043 0 01.046-.006c2.29 1.046 4.771 1.046 7.035 0a.043.043 0 01.046.006c.07.057.144.115.218.17a.045.045 0 01-.004.075 7.186 7.186 0 01-1.093.52.045.045 0 00-.024.062c.21.407.45.795.715 1.162.011.016.03.023.05.017a11.57 11.57 0 003.5-1.767.045.045 0 00.019-.032c.292-3.02-.49-5.643-2.07-7.969a.036.036 0 00-.018-.016zM4.678 9.279c-.69 0-1.258-.634-1.258-1.411 0-.778.558-1.411 1.258-1.411.707 0 1.27.639 1.259 1.41 0 .778-.558 1.412-1.259 1.412zm4.652 0c-.69 0-1.258-.634-1.258-1.411 0-.778.557-1.411 1.258-1.411.707 0 1.27.639 1.258 1.41 0 .778-.551 1.412-1.258 1.412z",
      fill: e
    }
  )
)), B9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.399 14H5.06V7H3.5V4.588l1.56-.001-.002-1.421C5.058 1.197 5.533 0 7.6 0h1.721v2.413H8.246c-.805 0-.844.337-.844.966l-.003 1.208h1.934l-.228 2.412L7.401 7l-.002 7z",
      fill: e
    }
  )
)), z9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.2 0H4.803A2.603 2.603 0 003.41 4.802a2.603 2.603 0 000 4.396 2.602 2.602 0 103.998 2.199v-2.51a2.603 2.603 0 103.187-4.085A2.604 2.604 0 009.2 0zM7.407 7a1.793 1.793 0 103.586 0 1.793 1.793 0 00-3.586 0zm-.81 2.603H4.803a1.793 1.793 0 101.794 1.794V9.603zM4.803 4.397h1.794V.81H4.803a1.793 1.793 0 000 3.587zm0 .81a1.793 1.793 0 000 3.586h1.794V5.207H4.803zm4.397-.81H7.407V.81H9.2a1.794 1.794 0 010 3.587z",
      fill: e
    }
  )
)), _9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.37 8.768l-2.042 3.537h6.755l2.042-3.537H6.37zm6.177-1.003l-3.505-6.07H4.96l3.504 6.07h4.084zM4.378 2.7L.875 8.77l2.042 3.536L6.42 6.236 4.378 2.7z",
      fill: e
    }
  )
)), I9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0C3.132 0 0 3.132 0 7a6.996 6.996 0 004.786 6.641c.35.062.482-.149.482-.332 0-.166-.01-.718-.01-1.304-1.758.324-2.213-.429-2.353-.823-.079-.2-.42-.822-.717-.988-.246-.132-.596-.455-.01-.464.552-.009.946.508 1.077.717.63 1.06 1.636.762 2.039.578.061-.455.245-.761.446-.936-1.558-.175-3.185-.779-3.185-3.457 0-.76.271-1.39.717-1.88-.07-.176-.314-.893.07-1.856 0 0 .587-.183 1.925.718a6.495 6.495 0 011.75-.236c.595 0 1.19.078 1.75.236 1.34-.91 1.926-.718 1.926-.718.385.963.14 1.68.07 1.855.446.49.717 1.111.717 1.881 0 2.687-1.636 3.282-3.194 3.457.254.218.473.638.473 1.295 0 .936-.009 1.688-.009 1.925 0 .184.131.402.481.332A7.012 7.012 0 0014 7c0-3.868-3.133-7-7-7z",
      fill: e
    }
  )
)), R9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.068 5.583l1.487-4.557a.256.256 0 01.487 0L4.53 5.583H1.068L7 13.15 4.53 5.583h4.941l-2.47 7.565 5.931-7.565H9.471l1.488-4.557a.256.256 0 01.486 0l1.488 4.557.75 2.3a.508.508 0 01-.185.568L7 13.148v.001H7L.503 8.452a.508.508 0 01-.186-.57l.75-2.299z",
      fill: e
    }
  )
)), L9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.925 1.094H7.262c-1.643 0-3.189 1.244-3.189 2.685 0 1.473 1.12 2.661 2.791 2.661.116 0 .23-.002.34-.01a1.49 1.49 0 00-.186.684c0 .41.22.741.498 1.012-.21 0-.413.006-.635.006-2.034 0-3.6 1.296-3.6 2.64 0 1.323 1.717 2.15 3.75 2.15 2.32 0 3.6-1.315 3.6-2.639 0-1.06-.313-1.696-1.28-2.38-.331-.235-.965-.805-.965-1.14 0-.392.112-.586.703-1.047.606-.474 1.035-1.14 1.035-1.914 0-.92-.41-1.819-1.18-2.115h1.161l.82-.593zm-1.335 8.96c.03.124.045.25.045.378 0 1.07-.688 1.905-2.665 1.905-1.406 0-2.421-.89-2.421-1.96 0-1.047 1.259-1.92 2.665-1.904.328.004.634.057.911.146.764.531 1.311.832 1.465 1.436zM7.34 6.068c-.944-.028-1.841-1.055-2.005-2.295-.162-1.24.47-2.188 1.415-2.16.943.029 1.84 1.023 2.003 2.262.163 1.24-.47 2.222-1.414 2.193z",
      fill: e
    }
  )
)), T9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.873 11.608a1.167 1.167 0 00-1.707-.027L3.46 10.018l.01-.04h7.072l.022.076-2.69 1.554zM6.166 2.42l.031.03-3.535 6.124a1.265 1.265 0 00-.043-.012V5.438a1.166 1.166 0 00.84-1.456L6.167 2.42zm4.387 1.562a1.165 1.165 0 00.84 1.456v3.124l-.043.012-3.536-6.123a1.2 1.2 0 00.033-.032l2.706 1.563zM3.473 9.42a1.168 1.168 0 00-.327-.568L6.68 2.73a1.17 1.17 0 00.652 0l3.536 6.123a1.169 1.169 0 00-.327.567H3.473zm8.79-.736a1.169 1.169 0 00-.311-.124V5.44a1.17 1.17 0 10-1.122-1.942L8.13 1.938a1.168 1.168 0 00-1.122-1.5 1.17 1.17 0 00-1.121 1.5l-2.702 1.56a1.168 1.168 0 00-1.86.22 1.17 1.17 0 00.739 1.722v3.12a1.168 1.168 0 00-.74 1.721 1.17 1.17 0 001.861.221l2.701 1.56a1.169 1.169 0 102.233-.035l2.687-1.552a1.168 1.168 0 101.457-1.791z",
      fill: e
    }
  )
)), M9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M0 0v14h14V0H0zm11.63 3.317l-.75.72a.22.22 0 00-.083.212v-.001 5.289a.22.22 0 00.083.21l.733.72v.159H7.925v-.158l.76-.738c.074-.074.074-.096.074-.21V5.244l-2.112 5.364h-.285l-2.46-5.364V8.84a.494.494 0 00.136.413h.001l.988 1.198v.158H2.226v-.158l.988-1.198a.477.477 0 00.126-.416v.003-4.157a.363.363 0 00-.118-.307l-.878-1.058v-.158h2.727l2.107 4.622L9.031 3.16h2.6v.158z",
      fill: e
    }
  )
)), H9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.06 9.689c.016.49.423.88.912.88h.032a.911.911 0 00.88-.945.916.916 0 00-.912-.88h-.033c-.033 0-.08 0-.113.016-.669-1.108-.946-2.314-.848-3.618.065-.978.391-1.825.961-2.526.473-.603 1.386-.896 2.005-.913 1.728-.032 2.461 2.119 2.51 2.983.212.049.57.163.815.244C10.073 2.29 8.444.92 6.88.92c-1.467 0-2.82 1.06-3.357 2.625-.75 2.086-.261 4.09.651 5.671a.74.74 0 00-.114.473zm8.279-2.298c-1.239-1.45-3.064-2.249-5.15-2.249h-.261a.896.896 0 00-.798-.489h-.033A.912.912 0 006.13 6.48h.031a.919.919 0 00.8-.554h.293c1.239 0 2.412.358 3.472 1.059.814.538 1.401 1.238 1.727 2.086.277.684.261 1.353-.033 1.923-.456.864-1.222 1.337-2.232 1.337a4.16 4.16 0 01-1.597-.343 9.58 9.58 0 01-.734.587c.7.326 1.418.505 2.102.505 1.565 0 2.722-.863 3.162-1.727.473-.946.44-2.575-.782-3.961zm-7.433 5.51a4.005 4.005 0 01-.977.113c-1.206 0-2.298-.505-2.836-1.32C.376 10.603.13 8.289 2.494 6.577c.05.261.147.62.212.832-.31.228-.798.685-1.108 1.303-.44.864-.391 1.729.13 2.527.359.537.93.864 1.663.962.896.114 1.793-.05 2.657-.505 1.271-.669 2.119-1.467 2.672-2.56a.944.944 0 01-.26-.603.913.913 0 01.88-.945h.033a.915.915 0 01.098 1.825c-.897 1.842-2.478 3.08-4.565 3.488z",
      fill: e
    }
  )
)), O9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 2.547a5.632 5.632 0 01-1.65.464 2.946 2.946 0 001.263-1.63 5.67 5.67 0 01-1.823.715 2.837 2.837 0 00-2.097-.93c-1.586 0-2.872 1.319-2.872 2.946 0 .23.025.456.074.67C4.508 4.66 2.392 3.488.975 1.706c-.247.435-.389.941-.389 1.481 0 1.022.507 1.923 1.278 2.452a2.806 2.806 0 01-1.3-.368l-.001.037c0 1.427.99 2.617 2.303 2.888a2.82 2.82 0 01-1.297.05c.366 1.17 1.427 2.022 2.683 2.045A5.671 5.671 0 010 11.51a7.985 7.985 0 004.403 1.323c5.283 0 8.172-4.488 8.172-8.38 0-.128-.003-.255-.009-.38A5.926 5.926 0 0014 2.546z",
      fill: e
    }
  )
)), N9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.99 8.172c.005-.281.007-.672.007-1.172 0-.5-.002-.89-.007-1.172a14.952 14.952 0 00-.066-1.066 9.638 9.638 0 00-.169-1.153c-.083-.38-.264-.7-.542-.96a1.667 1.667 0 00-.972-.454C11.084 2.065 9.337 2 6.999 2s-4.085.065-5.241.195a1.65 1.65 0 00-.969.453c-.276.26-.455.58-.539.961a8.648 8.648 0 00-.176 1.153c-.039.43-.061.785-.066 1.066C.002 6.11 0 6.5 0 7c0 .5.002.89.008 1.172.005.281.027.637.066 1.067.04.43.095.813.168 1.152.084.38.265.7.543.96.279.261.603.412.973.453 1.156.13 2.902.196 5.24.196 2.34 0 4.087-.065 5.243-.196a1.65 1.65 0 00.967-.453c.276-.26.456-.58.54-.96.077-.339.136-.722.175-1.152.04-.43.062-.786.067-1.067zM9.762 6.578A.45.45 0 019.997 7a.45.45 0 01-.235.422l-3.998 2.5a.442.442 0 01-.266.078.538.538 0 01-.242-.063.465.465 0 01-.258-.437v-5c0-.197.086-.343.258-.437a.471.471 0 01.508.016l3.998 2.5z",
      fill: e
    }
  )
)), P9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.243.04a.87.87 0 01.38.087l2.881 1.386a.874.874 0 01.496.79V11.713a.875.875 0 01-.496.775l-2.882 1.386a.872.872 0 01-.994-.17L4.11 8.674l-2.404 1.823a.583.583 0 01-.744-.034l-.771-.7a.583.583 0 010-.862L2.274 7 .19 5.1a.583.583 0 010-.862l.772-.701a.583.583 0 01.744-.033L4.11 5.327 9.628.296a.871.871 0 01.615-.255zm.259 3.784L6.315 7l4.187 3.176V3.824z",
      fill: e
    }
  )
)), $9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.667 13H2.333A1.333 1.333 0 011 11.667V2.333C1 1.597 1.597 1 2.333 1h9.334C12.403 1 13 1.597 13 2.333v9.334c0 .736-.597 1.333-1.333 1.333zm-2.114-1.667h1.78V7.675c0-1.548-.877-2.296-2.102-2.296-1.226 0-1.742.955-1.742.955v-.778H5.773v5.777h1.716V8.3c0-.812.374-1.296 1.09-1.296.658 0 .974.465.974 1.296v3.033zm-6.886-7.6c0 .589.474 1.066 1.058 1.066.585 0 1.058-.477 1.058-1.066 0-.589-.473-1.066-1.058-1.066-.584 0-1.058.477-1.058 1.066zm1.962 7.6h-1.79V5.556h1.79v5.777z",
      fill: e
    }
  )
)), j9 = /* @__PURE__ */ i.forwardRef(
  ({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
    "svg",
    {
      width: t,
      height: t,
      viewBox: "0 0 14 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref: n,
      ...r
    },
    /* @__PURE__ */ i.createElement(
      "path",
      {
        d: "M11.02.446h2.137L8.49 5.816l5.51 7.28H9.67L6.298 8.683l-3.88 4.413H.282l5.004-5.735L0 .446h4.442l3.064 4.048L11.02.446zm-.759 11.357h1.18L3.796 1.655H2.502l7.759 10.148z",
        fill: e
      }
    )
  )
), V9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-8h12v8H1zm1-9.5a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0zm2 0a.5.5 0 11-1 0 .5.5 0 011 0z",
      fill: e
    }
  )
)), q9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5.004a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h7a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5h-7zm0 1h7a.5.5 0 01.5.5v9.5H3v-9.5a.5.5 0 01.5-.5zm2.5 11a.5.5 0 000 1h2a.5.5 0 000-1H6z",
      fill: e
    }
  )
)), W9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 1.504a1.5 1.5 0 011.5-1.5h5a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-5a1.5 1.5 0 01-1.5-1.5v-11zm1 10.5v-10h6v10H4z",
      fill: e
    }
  )
)), U9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4 .504a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm5.5 2.5h-5a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h5a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5zm-5-1a1.5 1.5 0 00-1.5 1.5v7a1.5 1.5 0 001.5 1.5h5a1.5 1.5 0 001.5-1.5v-7a1.5 1.5 0 00-1.5-1.5h-5zm2.5 2a.5.5 0 01.5.5v2h1a.5.5 0 110 1H7a.5.5 0 01-.5-.5v-2.5a.5.5 0 01.5-.5zm-2.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5z",
      fill: e
    }
  )
)), G9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5zM3 6.004a.5.5 0 100 1h1a.5.5 0 000-1H3zM2.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H3a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h3v10H2zm4-10h6v10H6v-10z",
      fill: e
    }
  )
)), Z9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM10 6.004a.5.5 0 100 1h1a.5.5 0 000-1h-1zM9.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm.5-1v-10h6v10H2zm7-10h3v10H9v-10z",
      fill: e
    }
  )
)), Y9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.5 4.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5zM11 6.004a.5.5 0 010 1h-1a.5.5 0 010-1h1zM11.5 8.504a.5.5 0 00-.5-.5h-1a.5.5 0 100 1h1a.5.5 0 00.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11zm7.5-1h3v-10H9v10zm-1 0H2v-10h6v4.5H5.207l.65-.65a.5.5 0 10-.707-.708L3.646 6.65a.5.5 0 000 .707l1.497 1.497a.5.5 0 10.707-.708l-.643-.642H8v4.5z",
      fill: e
    }
  )
)), X9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 4.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5zM2 6.004a.5.5 0 100 1h1a.5.5 0 000-1H2zM1.5 8.504a.5.5 0 01.5-.5h1a.5.5 0 110 1H2a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.5 13.004a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5H.5zm.5-1v-10h3v10H1zm4 0v-4.5h2.793l-.643.642a.5.5 0 10.707.708l1.497-1.497a.5.5 0 000-.707L7.85 5.146a.5.5 0 10-.707.708l.65.65H5v-4.5h6v10H5z",
      fill: e
    }
  )
)), K9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM9 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 1.504a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11zm1 6.5v-6h10v6H2zm10 1v3H2v-3h10z",
      fill: e
    }
  )
)), J9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1zM6 10.504a.5.5 0 01.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM9.5 10.004a.5.5 0 000 1h1a.5.5 0 000-1h-1z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 12.504v-11a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v11a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5zm1-.5v-3h10v3H2zm4.5-4H2v-6h10v6H7.5V5.21l.646.646a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0l-1.5 1.5a.5.5 0 10.708.707l.646-.646v2.793z",
      fill: e
    }
  )
)), Q9 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 5.504a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm1 2.5v-2h2v2H6z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5.004a.5.5 0 01.5.5v1.5h2v-1.5a.5.5 0 011 0v1.5h2.5a.5.5 0 01.5.5v2.5h1.5a.5.5 0 010 1H12v2h1.5a.5.5 0 010 1H12v2.5a.5.5 0 01-.5.5H9v1.5a.5.5 0 01-1 0v-1.5H6v1.5a.5.5 0 01-1 0v-1.5H2.5a.5.5 0 01-.5-.5v-2.5H.5a.5.5 0 010-1H2v-2H.5a.5.5 0 010-1H2v-2.5a.5.5 0 01.5-.5H5v-1.5a.5.5 0 01.5-.5zm5.5 3H3v8h8v-8z",
      fill: e
    }
  )
)), ey = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3c0-1.105-2.239-2-5-2s-5 .895-5 2v8c0 .426.26.752.544.977.29.228.68.413 1.116.558.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.436-.145.825-.33 1.116-.558.285-.225.544-.551.544-.977V3zm-1.03 0a.787.787 0 00-.05-.052c-.13-.123-.373-.28-.756-.434C9.404 2.21 8.286 2 7 2c-1.286 0-2.404.21-3.164.514-.383.153-.625.31-.756.434A.756.756 0 003.03 3a.756.756 0 00.05.052c.13.123.373.28.756.434C4.596 3.79 5.714 4 7 4c1.286 0 2.404-.21 3.164-.514.383-.153.625-.31.756-.434A.787.787 0 0010.97 3zM11 5.75V4.2c-.912.486-2.364.8-4 .8-1.636 0-3.088-.314-4-.8v1.55l.002.008a.147.147 0 00.016.033.618.618 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.62.62 0 00.146-.15.149.149 0 00.015-.033A.03.03 0 0011 5.75zM3 7.013c.2.103.423.193.66.272.878.293 2.059.465 3.34.465 1.281 0 2.462-.172 3.34-.465.237-.079.46-.17.66-.272V8.5l-.002.008a.149.149 0 01-.015.033.62.62 0 01-.146.15c-.165.13-.435.27-.813.395-.751.25-1.82.414-3.024.414s-2.273-.163-3.024-.414c-.378-.126-.648-.265-.813-.395a.618.618 0 01-.145-.15.147.147 0 01-.016-.033A.027.027 0 013 8.5V7.013zm0 2.75V11l.002.008a.147.147 0 00.016.033.617.617 0 00.145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 00.146-.15.148.148 0 00.015-.033L11 11V9.763c-.2.103-.423.193-.66.272-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465A4.767 4.767 0 013 9.763z",
      fill: e
    }
  )
)), ty = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5 3a.5.5 0 00-1 0v3a.5.5 0 001 0V3zM7 2.5a.5.5 0 01.5.5v3a.5.5 0 01-1 0V3a.5.5 0 01.5-.5zM10 4.504a.5.5 0 10-1 0V6a.5.5 0 001 0V4.504z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.54l-.001-.002a.499.499 0 00-.145-.388l-3-3a.499.499 0 00-.388-.145L8.464.004H2.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5V3.54zM3 1.004h5.293L11 3.71v5.293H3v-8zm0 9v3h8v-3H3z",
      fill: e
    }
  )
)), ry = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.164 3.446a1.5 1.5 0 10-2.328 0L1.81 10.032A1.503 1.503 0 000 11.5a1.5 1.5 0 002.915.5h8.17a1.5 1.5 0 101.104-1.968L8.164 3.446zm-1.475.522a1.506 1.506 0 00.622 0l4.025 6.586a1.495 1.495 0 00-.25.446H2.914a1.497 1.497 0 00-.25-.446l4.024-6.586z",
      fill: e
    }
  )
)), ny = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.21.046l6.485 2.994A.5.5 0 0114 3.51v6.977a.495.495 0 01-.23.432.481.481 0 01-.071.038L7.23 13.944a.499.499 0 01-.46 0L.3 10.958a.498.498 0 01-.3-.47V3.511a.497.497 0 01.308-.473L6.78.051a.499.499 0 01.43-.005zM1 4.282v5.898l5.5 2.538V6.82L1 4.282zm6.5 8.436L13 10.18V4.282L7.5 6.82v5.898zM12.307 3.5L7 5.95 1.693 3.5 7 1.05l5.307 2.45z",
      fill: e
    }
  )
)), ay = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M7.5.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.273 2.808a.5.5 0 00-.546-.837 6 6 0 106.546 0 .5.5 0 00-.546.837 5 5 0 11-5.454 0z",
      fill: e
    }
  )
)), oy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.854 2.146l-2-2a.5.5 0 00-.708 0l-1.5 1.5-8.995 8.995a.499.499 0 00-.143.268L.012 13.39a.495.495 0 00.135.463.5.5 0 00.462.134l2.482-.496a.495.495 0 00.267-.143l8.995-8.995 1.5-1.5a.5.5 0 000-.708zM12 3.293l.793-.793L11.5 1.207 10.707 2 12 3.293zm-2-.586L1.707 11 3 12.293 11.293 4 10 2.707zM1.137 12.863l.17-.849.679.679-.849.17z",
      fill: e
    }
  )
)), iy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.586 5.586A2 2 0 018.862 7.73a.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 10-.365-.93 2 2 0 01-2.145-3.277z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M.939 6.527c.127.128.19.297.185.464a.635.635 0 01-.185.465L0 8.395a7.099 7.099 0 001.067 2.572h1.32c.182 0 .345.076.46.197a.635.635 0 01.198.46v1.317A7.097 7.097 0 005.602 14l.94-.94a.634.634 0 01.45-.186H7.021c.163 0 .326.061.45.186l.939.938a7.098 7.098 0 002.547-1.057V11.61c0-.181.075-.344.197-.46a.634.634 0 01.46-.197h1.33c.507-.76.871-1.622 1.056-2.55l-.946-.946a.635.635 0 01-.186-.465.635.635 0 01.186-.464l.943-.944a7.099 7.099 0 00-1.044-2.522h-1.34a.635.635 0 01-.46-.197.635.635 0 01-.196-.46V1.057A7.096 7.096 0 008.413.002l-.942.942a.634.634 0 01-.45.186H6.992a.634.634 0 01-.45-.186L5.598 0a7.097 7.097 0 00-2.553 1.058v1.33c0 .182-.076.345-.197.46a.635.635 0 01-.46.198h-1.33A7.098 7.098 0 00.003 5.591l.936.936zm.707 1.636c.324-.324.482-.752.479-1.172a1.634 1.634 0 00-.48-1.171l-.538-.539c.126-.433.299-.847.513-1.235h.768c.459 0 .873-.19 1.167-.49.3-.295.49-.708.49-1.167v-.77c.39-.215.807-.388 1.243-.515l.547.547c.32.32.742.48 1.157.48l.015-.001h.014c.415 0 .836-.158 1.157-.479l.545-.544c.433.126.846.299 1.234.512v.784c0 .46.19.874.49 1.168.294.3.708.49 1.167.49h.776c.209.382.378.788.502 1.213l-.545.546a1.635 1.635 0 00-.48 1.17c-.003.421.155.849.48 1.173l.549.55c-.126.434-.3.85-.513 1.239h-.77c-.458 0-.872.19-1.166.49-.3.294-.49.708-.49 1.167v.77a6.09 6.09 0 01-1.238.514l-.54-.54a1.636 1.636 0 00-1.158-.48H6.992c-.415 0-.837.159-1.157.48l-.543.543a6.091 6.091 0 01-1.247-.516v-.756c0-.459-.19-.873-.49-1.167-.294-.3-.708-.49-1.167-.49h-.761a6.094 6.094 0 01-.523-1.262l.542-.542z",
      fill: e
    }
  )
)), ly = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.585 8.414a2 2 0 113.277-.683.5.5 0 10.931.365 3 3 0 10-1.697 1.697.5.5 0 00-.365-.93 2 2 0 01-2.146-.449z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.5.289a1 1 0 011 0l5.062 2.922a1 1 0 01.5.866v5.846a1 1 0 01-.5.866L7.5 13.71a1 1 0 01-1 0L1.437 10.79a1 1 0 01-.5-.866V4.077a1 1 0 01.5-.866L6.5.29zm.5.866l5.062 2.922v5.846L7 12.845 1.937 9.923V4.077L7 1.155z",
      fill: e
    }
  )
)), sy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 1c.441 0 .564.521.252.833l-.806.807a.51.51 0 000 .72l.694.694a.51.51 0 00.72 0l.807-.806c.312-.312.833-.19.833.252a2.5 2.5 0 01-3.414 2.328l-6.879 6.88a1 1 0 01-1.414-1.415l6.88-6.88A2.5 2.5 0 0110.5 1zM2 12.5a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e
    }
  )
)), uy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13 7a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM7 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
      fill: e
    }
  )
)), cy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.903.112a.107.107 0 01.194 0l.233.505.552.066c.091.01.128.123.06.185l-.408.377.109.546a.107.107 0 01-.158.114L6 1.634l-.485.271a.107.107 0 01-.158-.114l.108-.546-.408-.377a.107.107 0 01.06-.185L5.67.617l.233-.505zM2.194.224a.214.214 0 00-.389 0l-.466 1.01-1.104.131a.214.214 0 00-.12.37l.816.755-.217 1.091a.214.214 0 00.315.23L2 3.266l.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37L2.66 1.234 2.194.224zM12.194 8.224a.214.214 0 00-.389 0l-.466 1.01-1.104.13a.214.214 0 00-.12.371l.816.755-.217 1.091a.214.214 0 00.315.23l.97-.544.971.543c.16.09.35-.05.315-.229l-.216-1.09.816-.756a.214.214 0 00-.12-.37l-1.105-.131-.466-1.01z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.5 12.797l-1.293-1.293 6.758-6.758L9.258 6.04 2.5 12.797zm7.465-7.465l2.828-2.828L11.5 1.211 8.672 4.04l1.293 1.293zM.147 11.857a.5.5 0 010-.707l11-11a.5.5 0 01.706 0l2 2a.5.5 0 010 .708l-11 11a.5.5 0 01-.706 0l-2-2z",
      fill: e
    }
  )
)), dy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M13.854 3.354a.5.5 0 00-.708-.708L5 10.793.854 6.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.708 0l8.5-8.5z",
      fill: e
    }
  )
)), py = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6.393a.5.5 0 00-1 0v5.61H2v-10h7.5a.5.5 0 000-1H2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.354 9.857l7.5-7.5a.5.5 0 00-.708-.707L6 8.797 3.854 6.65a.5.5 0 10-.708.707l2.5 2.5a.5.5 0 00.708 0z",
      fill: e
    }
  )
)), hy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8.854 2.646a.5.5 0 010 .708L5.207 7l3.647 3.646a.5.5 0 01-.708.708L4.5 7.707.854 11.354a.5.5 0 01-.708-.708L3.793 7 .146 3.354a.5.5 0 11.708-.708L4.5 6.293l3.646-3.647a.5.5 0 01.708 0zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
      fill: e
    }
  )
)), fy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.5 2a.5.5 0 000 1h2a.5.5 0 000-1h-2zM9.3 2.6a.5.5 0 01.1.7l-5.995 7.993a.505.505 0 01-.37.206.5.5 0 01-.395-.152L.146 8.854a.5.5 0 11.708-.708l2.092 2.093L8.6 2.7a.5.5 0 01.7-.1zM11 7a.5.5 0 01.5-.5h2a.5.5 0 010 1h-2A.5.5 0 0111 7zM11.5 11a.5.5 0 000 1h2a.5.5 0 000-1h-2z",
      fill: e
    }
  )
)), my = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.5 1a.5.5 0 01.5.5V2h1.5a.5.5 0 010 1H11v.5a.5.5 0 01-1 0V3H1.5a.5.5 0 010-1H10v-.5a.5.5 0 01.5-.5zM1.5 11a.5.5 0 000 1H10v.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H11v-.5a.5.5 0 00-1 0v.5H1.5zM1 7a.5.5 0 01.5-.5H3V6a.5.5 0 011 0v.5h8.5a.5.5 0 010 1H4V8a.5.5 0 01-1 0v-.5H1.5A.5.5 0 011 7z",
      fill: e
    }
  )
)), gy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.5.5a.5.5 0 00-1 0v6h-6a.5.5 0 000 1h6v6a.5.5 0 001 0v-6h6a.5.5 0 000-1h-6v-6z",
      fill: e
    }
  )
)), vy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.03.97A.75.75 0 00.97 2.03L5.94 7 .97 11.97a.75.75 0 101.06 1.06L7 8.06l4.97 4.97a.75.75 0 101.06-1.06L8.06 7l4.97-4.97A.75.75 0 0011.97.97L7 5.94 2.03.97z",
      fill: e
    }
  )
)), x7 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.854 1.146a.5.5 0 10-.708.708L6.293 7l-5.147 5.146a.5.5 0 00.708.708L7 7.707l5.146 5.147a.5.5 0 00.708-.708L7.707 7l5.147-5.146a.5.5 0 00-.708-.708L7 6.293 1.854 1.146z",
      fill: e
    }
  )
)), wy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.5 4.5A.5.5 0 016 5v5a.5.5 0 01-1 0V5a.5.5 0 01.5-.5zM9 5a.5.5 0 00-1 0v5a.5.5 0 001 0V5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5.5A.5.5 0 015 0h4a.5.5 0 01.5.5V2h3a.5.5 0 010 1H12v8a2 2 0 01-2 2H4a2 2 0 01-2-2V3h-.5a.5.5 0 010-1h3V.5zM3 3v8a1 1 0 001 1h6a1 1 0 001-1V3H3zm2.5-2h3v1h-3V1z",
      fill: e
    }
  )
)), by = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3502)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5 5H3.657A4 4 0 00.828 6.17l-.474.475a.5.5 0 000 .707l2.793 2.793-3 3a.5.5 0 00.707.708l3-3 2.792 2.792a.5.5 0 00.708 0l.474-.475A4 4 0 009 10.343V9l2-2a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM11 5.585l-3 3v1.757a3 3 0 01-.879 2.121L7 12.586 1.414 7l.122-.122A3 3 0 013.656 6h1.758l3-3-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586z",
      fill: e
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3502" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), Dy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3501)", fill: e }, /* @__PURE__ */ i.createElement("path", { d: "M13.44 4.44L9.56.56a1.5 1.5 0 00-2.12 0L7 1a1.415 1.415 0 000 2L5.707 4.293 6.414 5l2-2-.707-.707a.414.414 0 010-.586l.44-.44a.5.5 0 01.707 0l3.878 3.88a.5.5 0 010 .706l-.44.44a.414.414 0 01-.585 0L11 5.586l-2 2 .707.707L11 7a1.414 1.414 0 002 0l.44-.44a1.5 1.5 0 000-2.12zM.828 6.171a4 4 0 012.758-1.17l1 .999h-.93a3 3 0 00-2.12.878L1.414 7 7 12.586l.121-.122A3 3 0 008 10.343v-.929l1 1a4 4 0 01-1.172 2.757l-.474.475a.5.5 0 01-.708 0l-2.792-2.792-3 3a.5.5 0 01-.708-.708l3-3L.355 7.353a.5.5 0 010-.707l.474-.475zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.708-.708l-11-11z" })),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3501" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), yy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 3a.5.5 0 01.5.5v3h3a.5.5 0 010 1h-3v3a.5.5 0 01-1 0v-3h-3a.5.5 0 010-1h3v-3A.5.5 0 017 3z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e
    }
  )
)), Ey = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), Cy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.854 4.146a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e
    }
  )
)), xy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0a6 6 0 01-9.874 4.582l8.456-8.456A5.976 5.976 0 0113 7zM2.418 10.874l8.456-8.456a6 6 0 00-8.456 8.456z",
      fill: e
    }
  )
)), Sy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), Ay = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zM3.5 6.5a.5.5 0 000 1h7a.5.5 0 000-1h-7z",
      fill: e
    }
  )
)), ky = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm2.854-9.854a.5.5 0 010 .708L7.707 7l2.147 2.146a.5.5 0 01-.708.708L7 7.707 4.854 9.854a.5.5 0 01-.708-.708L6.293 7 4.146 4.854a.5.5 0 11.708-.708L7 6.293l2.146-2.147a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), Fy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 2h7a2 2 0 012 2v6a2 2 0 01-2 2H5a1.994 1.994 0 01-1.414-.586l-3-3a2 2 0 010-2.828l3-3A1.994 1.994 0 015 2zm1.146 3.146a.5.5 0 01.708 0L8 6.293l1.146-1.147a.5.5 0 11.708.708L8.707 7l1.147 1.146a.5.5 0 01-.708.708L8 7.707 6.854 8.854a.5.5 0 11-.708-.708L7.293 7 6.146 5.854a.5.5 0 010-.708z",
      fill: e
    }
  )
)), By = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.5 5.004a.5.5 0 100 1h7a.5.5 0 000-1h-7zM3 8.504a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.5 12.004H5.707l-1.853 1.854a.5.5 0 01-.351.146h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zm-10.5-1v-8h10v8H2z",
      fill: e
    }
  )
)), zy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.5 5.004a.5.5 0 10-1 0v1.5H5a.5.5 0 100 1h1.5v1.5a.5.5 0 001 0v-1.5H9a.5.5 0 000-1H7.5v-1.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
      fill: e
    }
  )
)), _y = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.854 6.65a.5.5 0 010 .707l-2 2a.5.5 0 11-.708-.707l1.15-1.15-3.796.004a.5.5 0 010-1L8.29 6.5 7.145 5.357a.5.5 0 11.708-.707l2 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.691 13.966a.498.498 0 01-.188.038h-.006a.499.499 0 01-.497-.5v-1.5H1.5a.5.5 0 01-.5-.5v-9a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H5.707l-1.853 1.854a.5.5 0 01-.163.108zM2 3.004v8h10v-8H2z",
      fill: e
    }
  )
)), Iy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8.5 7.004a.5.5 0 000-1h-5a.5.5 0 100 1h5zM9 8.504a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5a.5.5 0 01.5.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 11.504v-1.5h1.5a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v1.5H.5a.5.5 0 00-.5.5v8a.5.5 0 00.5.5H2v1.5a.499.499 0 00.497.5h.006a.498.498 0 00.35-.146l1.854-1.854H11.5a.5.5 0 00.5-.5zm-9-8.5v-1h10v7h-1v-5.5a.5.5 0 00-.5-.5H3zm-2 8v-7h10v7H1z",
      fill: e
    }
  )
)), Ry = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 2a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H6.986a.444.444 0 01-.124.103l-3.219 1.84A.43.43 0 013 13.569V12a2 2 0 01-2-2V2zm3.42 4.78a.921.921 0 110-1.843.921.921 0 010 1.842zm1.658-.922a.921.921 0 101.843 0 .921.921 0 00-1.843 0zm2.58 0a.921.921 0 101.842 0 .921.921 0 00-1.843 0z",
      fill: e
    }
  )
)), Ly = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8 8.004a1 1 0 01-.5.866v1.634a.5.5 0 01-1 0V8.87A1 1 0 118 8.004z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3 4.004a4 4 0 118 0v1h1.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3v-1zm7 1v-1a3 3 0 10-6 0v1h6zm2 1H2v7h10v-7z",
      fill: e
    }
  )
)), Ty = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3614)", fill: e }, /* @__PURE__ */ i.createElement("path", { d: "M6.5 8.87a1 1 0 111 0v1.634a.5.5 0 01-1 0V8.87z" }), /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 1a3 3 0 00-3 3v1.004h8.5a.5.5 0 01.5.5v8a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5H3V4a4 4 0 017.755-1.381.5.5 0 01-.939.345A3.001 3.001 0 007 1zM2 6.004h10v7H2v-7z"
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3614" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), My = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M11 4a1 1 0 11-2 0 1 1 0 012 0z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.5 8.532V9.5a.5.5 0 01-.5.5H5.5v1.5a.5.5 0 01-.5.5H3.5v1.5a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-2a.5.5 0 01.155-.362l5.11-5.11A4.5 4.5 0 117.5 8.532zM6 4.5a3.5 3.5 0 111.5 2.873c-.29-.203-1-.373-1 .481V9H5a.5.5 0 00-.5.5V11H3a.5.5 0 00-.5.5V13H1v-1.293l5.193-5.193a.552.552 0 00.099-.613A3.473 3.473 0 016 4.5z",
      fill: e
    }
  )
)), Hy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.354.15a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.707L6.5 1.711v6.793a.5.5 0 001 0V1.71l1.146 1.146a.5.5 0 10.708-.707l-2-2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 7.504a.5.5 0 10-1 0v5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5v-5a.5.5 0 00-1 0v4.5H2v-4.5z",
      fill: e
    }
  )
)), Oy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M2.5 8.004a.5.5 0 100 1h3a.5.5 0 000-1h-3z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 11.504a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5H.5a.5.5 0 00-.5.5v9zm1-8.5v1h12v-1H1zm0 8h12v-5H1v5z",
      fill: e
    }
  )
)), Ny = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1 3.004a1 1 0 00-1 1v5a1 1 0 001 1h3.5a.5.5 0 100-1H1v-5h12v5h-1a.5.5 0 000 1h1a1 1 0 001-1v-5a1 1 0 00-1-1H1z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.45 7.006a.498.498 0 01.31.07L10.225 9.1a.5.5 0 01-.002.873l-1.074.621.75 1.3a.75.75 0 01-1.3.75l-.75-1.3-1.074.62a.497.497 0 01-.663-.135.498.498 0 01-.095-.3L6 7.515a.497.497 0 01.45-.509z",
      fill: e
    }
  )
)), Py = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4 1.504a.5.5 0 01.5-.5h5a.5.5 0 110 1h-2v10h2a.5.5 0 010 1h-5a.5.5 0 010-1h2v-10h-2a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M0 4.504a.5.5 0 01.5-.5h4a.5.5 0 110 1H1v4h3.5a.5.5 0 110 1h-4a.5.5 0 01-.5-.5v-5zM9.5 4.004a.5.5 0 100 1H13v4H9.5a.5.5 0 100 1h4a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-4z",
      fill: e
    }
  )
)), $y = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.943 12.457a.27.27 0 00.248-.149L7.77 9.151l2.54 2.54a.257.257 0 00.188.073c.082 0 .158-.03.21-.077l.788-.79a.27.27 0 000-.392L8.891 7.9l3.416-1.708a.29.29 0 00.117-.106.222.222 0 00.033-.134.332.332 0 00-.053-.161.174.174 0 00-.092-.072l-.02-.007-10.377-4.15a.274.274 0 00-.355.354l4.15 10.372a.275.275 0 00.233.169zm-.036 1l-.02-.002c-.462-.03-.912-.31-1.106-.796L.632 2.287A1.274 1.274 0 012.286.633l10.358 4.143c.516.182.782.657.81 1.114a1.25 1.25 0 01-.7 1.197L10.58 8.174l1.624 1.624a1.27 1.27 0 010 1.807l-.8.801-.008.007c-.491.46-1.298.48-1.792-.014l-1.56-1.56-.957 1.916a1.27 1.27 0 01-1.142.702h-.037z",
      fill: e
    }
  )
)), jy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.87 6.008a.505.505 0 00-.003-.028v-.002c-.026-.27-.225-.48-.467-.498a.5.5 0 00-.53.5v1.41c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47V5.17a.6.6 0 00-.002-.05c-.023-.268-.223-.49-.468-.5a.5.5 0 00-.52.5v1.65a.486.486 0 01-.47.47.48.48 0 01-.47-.47V4.62a.602.602 0 00-.002-.05v-.002c-.023-.266-.224-.48-.468-.498a.5.5 0 00-.53.5v2.2c0 .25-.22.47-.47.47a.49.49 0 01-.47-.47V1.8c0-.017 0-.034-.002-.05-.022-.268-.214-.49-.468-.5a.5.5 0 00-.52.5v6.78c0 .25-.22.47-.47.47a.48.48 0 01-.47-.47l.001-.1c.001-.053.002-.104 0-.155a.775.775 0 00-.06-.315.65.65 0 00-.16-.22 29.67 29.67 0 01-.21-.189c-.2-.182-.4-.365-.617-.532l-.003-.003A6.366 6.366 0 003.06 7l-.01-.007c-.433-.331-.621-.243-.69-.193-.26.14-.29.5-.13.74l1.73 2.6v.01h-.016l-.035.023.05-.023s1.21 2.6 3.57 2.6c3.54 0 4.2-1.9 4.31-4.42.039-.591.036-1.189.032-1.783l-.002-.507v-.032zm.969 2.376c-.057 1.285-.254 2.667-1.082 3.72-.88 1.118-2.283 1.646-4.227 1.646-1.574 0-2.714-.87-3.406-1.623a6.958 6.958 0 01-1.046-1.504l-.006-.012-1.674-2.516a1.593 1.593 0 01-.25-1.107 1.44 1.44 0 01.69-1.041c.195-.124.485-.232.856-.186.357.044.681.219.976.446.137.106.272.22.4.331V1.75A1.5 1.5 0 015.63.25c.93.036 1.431.856 1.431 1.55v1.335a1.5 1.5 0 01.53-.063h.017c.512.04.915.326 1.153.71a1.5 1.5 0 01.74-.161c.659.025 1.115.458 1.316.964a1.493 1.493 0 01.644-.103h.017c.856.067 1.393.814 1.393 1.558l.002.48c.004.596.007 1.237-.033 1.864z",
      fill: e
    }
  )
)), Vy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 6A2.5 2.5 0 116 3.5V5h2V3.5A2.5 2.5 0 1110.5 6H9v2h1.5A2.5 2.5 0 118 10.5V9H6v1.5A2.5 2.5 0 113.5 8H5V6H3.5zM2 3.5a1.5 1.5 0 113 0V5H3.5A1.5 1.5 0 012 3.5zM6 6v2h2V6H6zm3-1h1.5A1.5 1.5 0 109 3.5V5zM3.5 9H5v1.5A1.5 1.5 0 113.5 9zM9 9v1.5A1.5 1.5 0 1010.5 9H9z",
      fill: e
    }
  )
)), qy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.083 12.25H2.917a1.167 1.167 0 01-1.167-1.167V2.917A1.167 1.167 0 012.917 1.75h6.416l2.917 2.917v6.416a1.167 1.167 0 01-1.167 1.167z",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.917 12.25V7.583H4.083v4.667M4.083 1.75v2.917H8.75",
      stroke: e,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  )
)), Wy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 5.5a.5.5 0 01.5.5v4a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM7 4.5A.75.75 0 107 3a.75.75 0 000 1.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e
    }
  )
)), Uy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.25 5.25A1.75 1.75 0 117 7a.5.5 0 00-.5.5V9a.5.5 0 001 0V7.955A2.75 2.75 0 104.25 5.25a.5.5 0 001 0zM7 11.5A.75.75 0 107 10a.75.75 0 000 1.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), Gy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-3.524 4.89A5.972 5.972 0 017 13a5.972 5.972 0 01-3.477-1.11l1.445-1.444C5.564 10.798 6.258 11 7 11s1.436-.202 2.032-.554l1.444 1.445zm-.03-2.858l1.445 1.444A5.972 5.972 0 0013 7c0-1.296-.41-2.496-1.11-3.477l-1.444 1.445C10.798 5.564 11 6.258 11 7s-.202 1.436-.554 2.032zM9.032 3.554l1.444-1.445A5.972 5.972 0 007 1c-1.296 0-2.496.41-3.477 1.11l1.445 1.444A3.981 3.981 0 017 3c.742 0 1.436.202 2.032.554zM3.554 4.968L2.109 3.523A5.973 5.973 0 001 7c0 1.296.41 2.496 1.11 3.476l1.444-1.444A3.981 3.981 0 013 7c0-.742.202-1.436.554-2.032zM10 7a3 3 0 11-6 0 3 3 0 016 0z",
      fill: e
    }
  )
)), Zy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 4.5a.5.5 0 01.5.5v3.5a.5.5 0 11-1 0V5a.5.5 0 01.5-.5zM7.75 10.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.206 1.045a.498.498 0 01.23.209l6.494 10.992a.5.5 0 01-.438.754H.508a.497.497 0 01-.506-.452.498.498 0 01.072-.31l6.49-10.984a.497.497 0 01.642-.21zM7 2.483L1.376 12h11.248L7 2.483z",
      fill: e
    }
  )
)), Yy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM6.5 8a.5.5 0 001 0V4a.5.5 0 00-1 0v4zm-.25 2.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z",
      fill: e
    }
  )
)), Xy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 2.504a.5.5 0 01.5-.5h13a.5.5 0 01.5.5v9a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-9zm1 1.012v7.488h12V3.519L7.313 7.894a.496.496 0 01-.526.062.497.497 0 01-.1-.062L1 3.516zm11.03-.512H1.974L7 6.874l5.03-3.87z",
      fill: e
    }
  )
)), Ky = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.76 8.134l-.05.05a.2.2 0 01-.28.03 6.76 6.76 0 01-1.63-1.65.21.21 0 01.04-.27l.05-.05c.23-.2.54-.47.71-.96.17-.47-.02-1.04-.66-1.94-.26-.38-.72-.96-1.22-1.46-.68-.69-1.2-1-1.65-1a.98.98 0 00-.51.13A3.23 3.23 0 00.9 3.424c-.13 1.1.26 2.37 1.17 3.78a16.679 16.679 0 004.55 4.6 6.57 6.57 0 003.53 1.32 3.2 3.2 0 002.85-1.66c.14-.24.24-.64-.07-1.18a7.803 7.803 0 00-1.73-1.81c-.64-.5-1.52-1.11-2.13-1.11a.97.97 0 00-.34.06c-.472.164-.74.458-.947.685l-.023.025zm4.32 2.678a6.801 6.801 0 00-1.482-1.54l-.007-.005-.006-.005a8.418 8.418 0 00-.957-.662 2.7 2.7 0 00-.4-.193.683.683 0 00-.157-.043l-.004.002-.009.003c-.224.078-.343.202-.56.44l-.014.016-.046.045a1.2 1.2 0 01-1.602.149A7.76 7.76 0 014.98 7.134l-.013-.019-.013-.02a1.21 1.21 0 01.195-1.522l.06-.06.026-.024c.219-.19.345-.312.422-.533l.003-.01v-.008a.518.518 0 00-.032-.142c-.06-.178-.203-.453-.502-.872l-.005-.008-.005-.007A10.18 10.18 0 004.013 2.59l-.005-.005c-.31-.314-.543-.5-.716-.605-.147-.088-.214-.096-.222-.097h-.016l-.006.003-.01.006a2.23 2.23 0 00-1.145 1.656c-.09.776.175 1.806 1.014 3.108a15.68 15.68 0 004.274 4.32l.022.014.022.016a5.57 5.57 0 002.964 1.117 2.2 2.2 0 001.935-1.141l.006-.012.004-.007a.182.182 0 00-.007-.038.574.574 0 00-.047-.114z",
      fill: e
    }
  )
)), Jy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.841 2.159a2.25 2.25 0 00-3.182 0l-2.5 2.5a2.25 2.25 0 000 3.182.5.5 0 01-.707.707 3.25 3.25 0 010-4.596l2.5-2.5a3.25 3.25 0 014.596 4.596l-2.063 2.063a4.27 4.27 0 00-.094-1.32l1.45-1.45a2.25 2.25 0 000-3.182z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.61 7.21c-.1-.434-.132-.88-.095-1.321L1.452 7.952a3.25 3.25 0 104.596 4.596l2.5-2.5a3.25 3.25 0 000-4.596.5.5 0 00-.707.707 2.25 2.25 0 010 3.182l-2.5 2.5A2.25 2.25 0 112.159 8.66l1.45-1.45z",
      fill: e
    }
  )
)), Qy = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.452 7.952l1.305-1.305.708.707-1.306 1.305a2.25 2.25 0 103.182 3.182l1.306-1.305.707.707-1.306 1.305a3.25 3.25 0 01-4.596-4.596zM12.548 6.048l-1.305 1.306-.707-.708 1.305-1.305a2.25 2.25 0 10-3.182-3.182L7.354 3.464l-.708-.707 1.306-1.305a3.25 3.25 0 014.596 4.596zM1.854 1.146a.5.5 0 10-.708.708l11 11a.5.5 0 00.707-.707l-11-11z",
      fill: e
    }
  )
)), eE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.994 1.11a1 1 0 10-1.988 0A4.502 4.502 0 002.5 5.5v3.882l-.943 1.885a.497.497 0 00-.053.295.5.5 0 00.506.438h3.575a1.5 1.5 0 102.83 0h3.575a.5.5 0 00.453-.733L11.5 9.382V5.5a4.502 4.502 0 00-3.506-4.39zM2.81 11h8.382l-.5-1H3.31l-.5 1zM10.5 9V5.5a3.5 3.5 0 10-7 0V9h7zm-4 3.5a.5.5 0 111 0 .5.5 0 01-1 0z",
      fill: e
    }
  )
)), tE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5.5A.5.5 0 012 0c6.627 0 12 5.373 12 12a.5.5 0 01-1 0C13 5.925 8.075 1 2 1a.5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 4.5A.5.5 0 012 4a8 8 0 018 8 .5.5 0 01-1 0 7 7 0 00-7-7 .5.5 0 01-.5-.5z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5 11a2 2 0 11-4 0 2 2 0 014 0zm-1 0a1 1 0 11-2 0 1 1 0 012 0z",
      fill: e
    }
  )
)), rE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 1.004a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1v-4.5a.5.5 0 00-1 0v4.5H2v-10h4.5a.5.5 0 000-1H2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.354 7.357L12 2.711v1.793a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 100 1h1.793L6.646 6.65a.5.5 0 10.708.707z",
      fill: e
    }
  )
)), nE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.646.15a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.707L7.5 1.711v6.793a.5.5 0 01-1 0V1.71L5.354 2.857a.5.5 0 11-.708-.707l2-2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2 4.004a1 1 0 00-1 1v7a1 1 0 001 1h10a1 1 0 001-1v-7a1 1 0 00-1-1H9.5a.5.5 0 100 1H12v7H2v-7h2.5a.5.5 0 000-1H2z",
      fill: e
    }
  )
)), aE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M13.854 6.646a.5.5 0 010 .708l-2 2a.5.5 0 01-.708-.708L12.293 7.5H5.5a.5.5 0 010-1h6.793l-1.147-1.146a.5.5 0 01.708-.708l2 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10 2a1 1 0 00-1-1H2a1 1 0 00-1 1v10a1 1 0 001 1h7a1 1 0 001-1V9.5a.5.5 0 00-1 0V12H2V2h7v2.5a.5.5 0 001 0V2z",
      fill: e
    }
  )
)), oE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 13A6 6 0 107 1a6 6 0 000 12zm0 1A7 7 0 107 0a7 7 0 000 14z",
      fill: e
    }
  )
)), iE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M14 7A7 7 0 110 7a7 7 0 0114 0z", fill: e })
)), lE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
      fill: e
    }
  )
)), sE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.5 0 01.5-.5z",
      fill: e
    }
  )
)), uE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1449_588)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M8.414 1.586a2 2 0 00-2.828 0l-4 4a2 2 0 000 2.828l4 4a2 2 0 002.828 0l4-4a2 2 0 000-2.828l-4-4zm.707-.707a3 3 0 00-4.242 0l-4 4a3 3 0 000 4.242l4 4a3 3 0 004.242 0l4-4a3 3 0 000-4.242l-4-4z",
      fill: e
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1449_588" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), cE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584zM1.2 3.526c.128-.333.304-.598.52-.806.218-.212.497-.389.849-.522m-1.37 1.328A3.324 3.324 0 001 4.708c0 .225.032.452.101.686.082.265.183.513.307.737.135.246.294.484.479.716.188.237.386.454.59.652l.001.002 4.514 4.355 4.519-4.344c.2-.193.398-.41.585-.648l.003-.003c.184-.23.345-.472.486-.726l.004-.007c.131-.23.232-.474.31-.732v-.002c.068-.224.101-.45.101-.686 0-.457-.07-.849-.195-1.185a2.177 2.177 0 00-.515-.802l.007-.012-.008.009a2.383 2.383 0 00-.85-.518l-.003-.001C11.1 2.072 10.692 2 10.203 2c-.21 0-.406.03-.597.09h-.001c-.22.07-.443.167-.663.289l-.007.003c-.22.12-.434.262-.647.426-.226.174-.42.341-.588.505l-.684.672-.7-.656a9.967 9.967 0 00-.615-.527 4.82 4.82 0 00-.635-.422l-.01-.005a3.289 3.289 0 00-.656-.281l-.008-.003A2.014 2.014 0 003.785 2c-.481 0-.881.071-1.217.198",
      fill: e
    }
  )
)), dE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M12.814 1.846c.06.05.116.101.171.154l.001.002a3.254 3.254 0 01.755 1.168c.171.461.259.974.259 1.538 0 .332-.046.656-.143.976a4.546 4.546 0 01-.397.937c-.169.302-.36.589-.58.864a7.627 7.627 0 01-.674.746l-4.78 4.596a.585.585 0 01-.427.173.669.669 0 01-.44-.173L1.78 8.217a7.838 7.838 0 01-.677-.748 6.124 6.124 0 01-.572-.855 4.975 4.975 0 01-.388-.931A3.432 3.432 0 010 4.708C0 4.144.09 3.63.265 3.17c.176-.459.429-.85.757-1.168a3.432 3.432 0 011.193-.74c.467-.176.99-.262 1.57-.262.304 0 .608.044.907.137.301.092.586.215.855.367.27.148.526.321.771.512.244.193.471.386.682.584.202-.198.427-.391.678-.584.248-.19.507-.364.78-.512a4.65 4.65 0 01.845-.367c.294-.093.594-.137.9-.137.585 0 1.115.086 1.585.262.392.146.734.34 1.026.584z",
      fill: e
    }
  )
)), pE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.319.783a.75.75 0 011.362 0l1.63 3.535 3.867.458a.75.75 0 01.42 1.296L10.74 8.715l.76 3.819a.75.75 0 01-1.103.8L7 11.434l-3.398 1.902a.75.75 0 01-1.101-.801l.758-3.819L.401 6.072a.75.75 0 01.42-1.296l3.867-.458L6.318.783zm.68.91l-1.461 3.17a.75.75 0 01-.593.431l-3.467.412 2.563 2.37a.75.75 0 01.226.697l-.68 3.424 3.046-1.705a.75.75 0 01.733 0l3.047 1.705-.68-3.424a.75.75 0 01.226-.697l2.563-2.37-3.467-.412a.75.75 0 01-.593-.43L7 1.694z",
      fill: e
    }
  )
)), hE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.68.783a.75.75 0 00-1.361 0l-1.63 3.535-3.867.458A.75.75 0 00.4 6.072l2.858 2.643-.758 3.819a.75.75 0 001.101.8L7 11.434l3.397 1.902a.75.75 0 001.102-.801l-.759-3.819L13.6 6.072a.75.75 0 00-.421-1.296l-3.866-.458L7.68.783z",
      fill: e
    }
  )
)), fE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7.854a4.5 4.5 0 10-6 0V13a.5.5 0 00.497.5h.006c.127 0 .254-.05.35-.146L7 11.207l2.146 2.147A.5.5 0 0010 13V7.854zM7 8a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm-.354 2.146a.5.5 0 01.708 0L9 11.793v-3.26C8.398 8.831 7.718 9 7 9a4.481 4.481 0 01-2-.468v3.26l1.646-1.646z",
      fill: e
    }
  )
)), mE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.565 13.123a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97c.25.473.83.661 1.31.426l.987-.482zm4.289-8.477a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), gE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 12.02c-.4.37-.91.56-1.56.56h-.88a5.493 5.493 0 01-1.3-.16c-.42-.1-.91-.25-1.47-.45a5.056 5.056 0 00-.95-.27H2.88a.84.84 0 01-.62-.26.84.84 0 01-.26-.61V6.45c0-.24.09-.45.26-.62a.84.84 0 01.62-.25h1.87c.16-.11.47-.47.93-1.06.27-.35.51-.64.74-.88.1-.11.19-.3.24-.58.05-.28.12-.57.2-.87.1-.3.24-.55.43-.74a.87.87 0 01.62-.25c.38 0 .72.07 1.03.22.3.15.54.38.7.7.15.31.23.73.23 1.27a3 3 0 01-.32 1.31h1.2c.47 0 .88.17 1.23.52s.52.8.52 1.22c0 .29-.04.66-.34 1.12.05.15.07.3.07.47 0 .35-.09.68-.26.98a2.05 2.05 0 01-.4 1.51 1.9 1.9 0 01-.57 1.5zm.473-5.33a.965.965 0 00.027-.25.742.742 0 00-.227-.513.683.683 0 00-.523-.227H7.927l.73-1.45a2 2 0 00.213-.867c0-.444-.068-.695-.127-.822a.53.53 0 00-.245-.244 1.296 1.296 0 00-.539-.116.989.989 0 00-.141.28 9.544 9.544 0 00-.174.755c-.069.387-.213.779-.484 1.077l-.009.01-.009.01c-.195.202-.41.46-.67.798l-.003.004c-.235.3-.44.555-.613.753-.151.173-.343.381-.54.516l-.255.176H5v4.133l.018.003c.384.07.76.176 1.122.318.532.189.98.325 1.352.413l.007.002a4.5 4.5 0 001.063.131h.878c.429 0 .683-.115.871-.285a.9.9 0 00.262-.702l-.028-.377.229-.3a1.05 1.05 0 00.205-.774l-.044-.333.165-.292a.969.969 0 00.13-.487.457.457 0 00-.019-.154l-.152-.458.263-.404a1.08 1.08 0 00.152-.325zM3.5 10.8a.5.5 0 100-1 .5.5 0 000 1z",
      fill: e
    }
  )
)), vE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.765 2.076A.5.5 0 0112 2.5v6.009a.497.497 0 01-.17.366L7.337 12.87a.497.497 0 01-.674 0L2.17 8.875l-.009-.007a.498.498 0 01-.16-.358L2 8.5v-6a.5.5 0 01.235-.424l.018-.011c.016-.01.037-.024.065-.04.056-.032.136-.077.24-.128a6.97 6.97 0 01.909-.371C4.265 1.26 5.443 1 7 1s2.735.26 3.533.526c.399.133.702.267.91.37a4.263 4.263 0 01.304.169l.018.01zM3 2.793v5.482l1.068.95 6.588-6.588a6.752 6.752 0 00-.44-.163C9.517 2.24 8.444 2 7 2c-1.443 0-2.515.24-3.217.474-.351.117-.61.233-.778.317L3 2.793zm4 9.038l-2.183-1.94L11 3.706v4.568l-4 3.556z",
      fill: e
    }
  )
)), wE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.354 2.854a.5.5 0 10-.708-.708l-3 3a.5.5 0 10.708.708l3-3z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.09 6H4.5a.5.5 0 000-1H1.795a.75.75 0 00-.74.873l.813 4.874A1.5 1.5 0 003.348 12h7.305a1.5 1.5 0 001.48-1.253l.812-4.874a.75.75 0 00-.74-.873H10a.5.5 0 000 1h1.91l-.764 4.582a.5.5 0 01-.493.418H3.347a.5.5 0 01-.493-.418L2.09 6z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.5 7a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 7.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM6.5 9.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0z",
      fill: e
    }
  )
)), bE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.5 2h.75v3.866l-3.034 5.26A1.25 1.25 0 003.299 13H10.7a1.25 1.25 0 001.083-1.875L8.75 5.866V2h.75a.5.5 0 100-1h-5a.5.5 0 000 1zm1.75 4V2h1.5v4.134l.067.116L8.827 8H5.173l1.01-1.75.067-.116V6zM4.597 9l-1.515 2.625A.25.25 0 003.3 12H10.7a.25.25 0 00.217-.375L9.404 9H4.597z",
      fill: e
    }
  )
)), DE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M7.5 10.5a.5.5 0 11-1 0 .5.5 0 011 0z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.5 1a.5.5 0 00-.5.5c0 1.063.137 1.892.678 2.974.346.692.858 1.489 1.598 2.526-.89 1.247-1.455 2.152-1.798 2.956-.377.886-.477 1.631-.478 2.537v.007a.5.5 0 00.5.5h7c.017 0 .034 0 .051-.003A.5.5 0 0011 12.5v-.007c0-.906-.1-1.65-.478-2.537-.343-.804-.909-1.709-1.798-2.956.74-1.037 1.252-1.834 1.598-2.526C10.863 3.392 11 2.563 11 1.5a.5.5 0 00-.5-.5h-7zm6.487 11a4.675 4.675 0 00-.385-1.652c-.277-.648-.735-1.407-1.499-2.494-.216.294-.448.606-.696.937a.497.497 0 01-.195.162.5.5 0 01-.619-.162c-.248-.331-.48-.643-.696-.937-.764 1.087-1.222 1.846-1.499 2.494A4.675 4.675 0 004.013 12h5.974zM6.304 6.716c.212.293.443.609.696.948a90.058 90.058 0 00.709-.965c.48-.664.86-1.218 1.163-1.699H5.128a32.672 32.672 0 001.176 1.716zM4.559 4h4.882c.364-.735.505-1.312.546-2H4.013c.04.688.182 1.265.546 2z",
      fill: e
    }
  )
)), yE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11.5 1h-9a.5.5 0 00-.5.5v11a.5.5 0 001 0V8h8.5a.5.5 0 00.354-.854L9.207 4.5l2.647-2.646A.499.499 0 0011.5 1zM8.146 4.146L10.293 2H3v5h7.293L8.146 4.854a.5.5 0 010-.708z",
      fill: e
    }
  )
)), EE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 7V6a3 3 0 00-5.91-.736l-.17.676-.692.075A2.5 2.5 0 003.5 11h3c.063 0 .125-.002.187-.007l.076-.005.076.006c.053.004.106.006.161.006h4a2 2 0 100-4h-1zM3.12 5.02A3.5 3.5 0 003.5 12h3c.087 0 .174-.003.26-.01.079.007.16.01.24.01h4a3 3 0 100-6 4 4 0 00-7.88-.98z",
      fill: e
    }
  )
)), CE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 2a4 4 0 014 4 3 3 0 110 6H7c-.08 0-.161-.003-.24-.01-.086.007-.173.01-.26.01h-3a3.5 3.5 0 01-.38-6.98A4.002 4.002 0 017 2z",
      fill: e
    }
  )
)), xE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M11 7a4 4 0 11-8 0 4 4 0 018 0zm-1 0a3 3 0 11-6 0 3 3 0 016 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.268 13.18c.25.472.83.66 1.31.425l.987-.482a.991.991 0 01.87 0l.987.482a.991.991 0 001.31-.426l.515-.97a.991.991 0 01.704-.511l1.082-.19a.99.99 0 00.81-1.115l-.154-1.087a.991.991 0 01.269-.828l.763-.789a.991.991 0 000-1.378l-.763-.79a.991.991 0 01-.27-.827l.155-1.087a.99.99 0 00-.81-1.115l-1.082-.19a.991.991 0 01-.704-.511L9.732.82a.99.99 0 00-1.31-.426l-.987.482a.991.991 0 01-.87 0L5.578.395a.99.99 0 00-1.31.426l-.515.97a.99.99 0 01-.704.511l-1.082.19a.99.99 0 00-.81 1.115l.154 1.087a.99.99 0 01-.269.828L.28 6.31a.99.99 0 000 1.378l.763.79a.99.99 0 01.27.827l-.155 1.087a.99.99 0 00.81 1.115l1.082.19a.99.99 0 01.704.511l.515.97zm5.096-1.44l-.511.963-.979-.478a1.99 1.99 0 00-1.748 0l-.979.478-.51-.962a1.991 1.991 0 00-1.415-1.028l-1.073-.188.152-1.079a1.991 1.991 0 00-.54-1.663L1.004 7l.757-.783a1.991 1.991 0 00.54-1.663L2.15 3.475l1.073-.188A1.991 1.991 0 004.636 2.26l.511-.962.979.478a1.99 1.99 0 001.748 0l.979-.478.51.962c.288.543.81.922 1.415 1.028l1.073.188-.152 1.079a1.99 1.99 0 00.54 1.663l.757.783-.757.783a1.99 1.99 0 00-.54 1.663l.152 1.079-1.073.188a1.991 1.991 0 00-1.414 1.028z",
      fill: e
    }
  )
)), SE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
      fill: e
    }
  )
)), AE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.497.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
      fill: e
    }
  )
)), kE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), FE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.354 3.896l5.5 5.5a.5.5 0 01-.708.708L7 4.957l-5.146 5.147a.5.5 0 01-.708-.708l5.5-5.5a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), BE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.146 4.604l5.5 5.5a.5.5 0 00.708 0l5.5-5.5a.5.5 0 00-.708-.708L7 9.043 1.854 3.896a.5.5 0 10-.708.708z",
      fill: e
    }
  )
)), zE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M2.76 7.096a.498.498 0 00.136.258l5.5 5.5a.5.5 0 00.707-.708L3.958 7l5.147-5.146a.5.5 0 10-.708-.708l-5.5 5.5a.5.5 0 00-.137.45z",
      fill: e
    }
  )
)), S7 = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.104 7.354l-5.5 5.5a.5.5 0 01-.708-.708L10.043 7 4.896 1.854a.5.5 0 11.708-.708l5.5 5.5a.5.5 0 010 .708z",
      fill: e
    }
  )
)), _E = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.854 9.104a.5.5 0 11-.708-.708l3.5-3.5a.5.5 0 01.708 0l3.5 3.5a.5.5 0 01-.708.708L7 5.957 3.854 9.104z",
      fill: e
    }
  )
)), IE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.854 4.896a.5.5 0 10-.708.708l3.5 3.5a.5.5 0 00.708 0l3.5-3.5a.5.5 0 00-.708-.708L7 8.043 3.854 4.896z",
      fill: e
    }
  )
)), RE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9.104 10.146a.5.5 0 01-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 11.708.708L5.957 7l3.147 3.146z",
      fill: e
    }
  )
)), LE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M4.896 10.146a.5.5 0 00.708.708l3.5-3.5a.5.5 0 000-.708l-3.5-3.5a.5.5 0 10-.708.708L8.043 7l-3.147 3.146z",
      fill: e
    }
  )
)), TE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.854 4.646l-4.5-4.5a.5.5 0 00-.708 0l-4.5 4.5a.5.5 0 10.708.708L6.5 1.707V13.5a.5.5 0 001 0V1.707l3.646 3.647a.5.5 0 00.708-.708z",
      fill: e
    }
  )
)), ME = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.5.5a.5.5 0 00-1 0v11.793L2.854 8.646a.5.5 0 10-.708.708l4.5 4.5a.5.5 0 00.351.146h.006c.127 0 .254-.05.35-.146l4.5-4.5a.5.5 0 00-.707-.708L7.5 12.293V.5z",
      fill: e
    }
  )
)), HE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.354 2.146a.5.5 0 010 .708L1.707 6.5H13.5a.5.5 0 010 1H1.707l3.647 3.646a.5.5 0 01-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), OE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8.646 2.146a.5.5 0 01.708 0l4.5 4.5a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708-.708L12.293 7.5H.5a.5.5 0 010-1h11.793L8.646 2.854a.5.5 0 010-.708z",
      fill: e
    }
  )
)), NE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.904 8.768V2.404a.5.5 0 01.5-.5h6.364a.5.5 0 110 1H3.61l8.339 8.339a.5.5 0 01-.707.707l-8.34-8.34v5.158a.5.5 0 01-1 0z",
      fill: e
    }
  )
)), PE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M12.096 8.768V2.404a.5.5 0 00-.5-.5H5.232a.5.5 0 100 1h5.157L2.05 11.243a.5.5 0 10.707.707l8.34-8.34v5.158a.5.5 0 101 0z",
      fill: e
    }
  )
)), $E = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.904 5.232v6.364a.5.5 0 00.5.5h6.364a.5.5 0 000-1H3.61l8.339-8.339a.5.5 0 00-.707-.707l-8.34 8.34V5.231a.5.5 0 00-1 0z",
      fill: e
    }
  )
)), jE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M12.096 5.232v6.364a.5.5 0 01-.5.5H5.232a.5.5 0 010-1h5.157L2.05 2.757a.5.5 0 01.707-.707l8.34 8.34V5.231a.5.5 0 111 0z",
      fill: e
    }
  )
)), VE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M6.772 3.59c.126-.12.33-.12.456 0l5.677 5.387c.203.193.06.523-.228.523H1.323c-.287 0-.431-.33-.228-.523L6.772 3.59z",
      fill: e
    }
  )
)), qE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.228 10.41a.335.335 0 01-.456 0L1.095 5.023c-.203-.193-.06-.523.228-.523h11.354c.287 0 .431.33.228.523L7.228 10.41z",
      fill: e
    }
  )
)), WE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M3.712 7.212a.3.3 0 010-.424l5.276-5.276a.3.3 0 01.512.212v10.552a.3.3 0 01-.512.212L3.712 7.212z",
      fill: e
    }
  )
)), UE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.288 7.212a.3.3 0 000-.424L5.012 1.512a.3.3 0 00-.512.212v10.552a.3.3 0 00.512.212l5.276-5.276z",
      fill: e
    }
  )
)), GE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.354.146l4 4a.5.5 0 01-.708.708L7 1.207 3.354 4.854a.5.5 0 11-.708-.708l4-4a.5.5 0 01.708 0zM11.354 9.146a.5.5 0 010 .708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 12.793l3.646-3.647a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), ZE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.354.146a.5.5 0 10-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 00-.708-.708L7 3.793 3.354.146zM6.646 9.146a.5.5 0 01.708 0l4 4a.5.5 0 01-.708.708L7 10.207l-3.646 3.647a.5.5 0 01-.708-.708l4-4z",
      fill: e
    }
  )
)), YE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 1h2a.5.5 0 010 1h-.793l3.147 3.146a.5.5 0 11-.708.708L2 2.707V3.5a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zM10 1.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-.793L8.854 5.854a.5.5 0 11-.708-.708L11.293 2H10.5a.5.5 0 01-.5-.5zM12.5 10a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.793L8.146 8.854a.5.5 0 11.708-.708L12 11.293V10.5a.5.5 0 01.5-.5zM2 11.293V10.5a.5.5 0 00-1 0v2a.5.5 0 00.5.5h2a.5.5 0 000-1h-.793l3.147-3.146a.5.5 0 10-.708-.708L2 11.293z",
      fill: e
    }
  )
)), XE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M6.646.147l-1.5 1.5a.5.5 0 10.708.707l.646-.647V5a.5.5 0 001 0V1.707l.646.647a.5.5 0 10.708-.707l-1.5-1.5a.5.5 0 00-.708 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.309 4.038a.498.498 0 00-.16.106l-.005.005a.498.498 0 00.002.705L3.293 7 1.146 9.146A.498.498 0 001.5 10h3a.5.5 0 000-1H2.707l1.5-1.5h5.586l2.353 2.354a.5.5 0 00.708-.708L10.707 7l2.146-2.146.11-.545-.107.542A.499.499 0 0013 4.503v-.006a.5.5 0 00-.144-.348l-.005-.005A.498.498 0 0012.5 4h-3a.5.5 0 000 1h1.793l-1.5 1.5H4.207L2.707 5H4.5a.5.5 0 000-1h-3a.498.498 0 00-.191.038z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 8.5a.5.5 0 01.5.5v3.293l.646-.647a.5.5 0 01.708.708l-1.5 1.5a.5.5 0 01-.708 0l-1.5-1.5a.5.5 0 01.708-.708l.646.647V9a.5.5 0 01.5-.5zM9 9.5a.5.5 0 01.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5z",
      fill: e
    }
  )
)), KE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M10.646 2.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 010 .708l-1.5 1.5a.5.5 0 01-.708-.708L11.293 5H1.5a.5.5 0 010-1h9.793l-.647-.646a.5.5 0 010-.708zM3.354 8.354L2.707 9H12.5a.5.5 0 010 1H2.707l.647.646a.5.5 0 01-.708.708l-1.5-1.5a.5.5 0 010-.708l1.5-1.5a.5.5 0 11.708.708z",
      fill: e
    }
  )
)), JE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.5 1a.5.5 0 01.5.5V10a2 2 0 004 0V4a3 3 0 016 0v7.793l1.146-1.147a.5.5 0 01.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 01.708-.708L11 11.793V4a2 2 0 10-4 0v6.002a3 3 0 01-6 0V1.5a.5.5 0 01.5-.5z",
      fill: e
    }
  )
)), QE = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.146 3.854a.5.5 0 010-.708l2-2a.5.5 0 11.708.708L2.707 3h6.295A4 4 0 019 11H3a.5.5 0 010-1h6a3 3 0 100-6H2.707l1.147 1.146a.5.5 0 11-.708.708l-2-2z",
      fill: e
    }
  )
)), eC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.354 2.146a.5.5 0 010 .708L1.707 5.5H9.5A4.5 4.5 0 0114 10v1.5a.5.5 0 01-1 0V10a3.5 3.5 0 00-3.5-3.5H1.707l2.647 2.646a.5.5 0 11-.708.708l-3.5-3.5a.5.5 0 010-.708l3.5-3.5a.5.5 0 01.708 0z",
      fill: e
    }
  )
)), tC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.5 1A.5.5 0 005 .5H2a.5.5 0 000 1h1.535a6.502 6.502 0 002.383 11.91.5.5 0 10.165-.986A5.502 5.502 0 014.5 2.1V4a.5.5 0 001 0V1.353a.5.5 0 000-.023V1zM7.507 1a.5.5 0 01.576-.41 6.502 6.502 0 012.383 11.91H12a.5.5 0 010 1H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v1.9A5.5 5.5 0 007.917 1.576.5.5 0 017.507 1z",
      fill: e
    }
  )
)), rC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8.646 5.854L7.5 4.707V10.5a.5.5 0 01-1 0V4.707L5.354 5.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2a.5.5 0 11-.708.708z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), nC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.354 8.146L6.5 9.293V3.5a.5.5 0 011 0v5.793l1.146-1.147a.5.5 0 11.708.708l-2 2a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm1 0a6 6 0 1112 0A6 6 0 011 7z",
      fill: e
    }
  )
)), aC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M5.854 5.354L4.707 6.5H10.5a.5.5 0 010 1H4.707l1.147 1.146a.5.5 0 11-.708.708l-2-2a.5.5 0 010-.708l2-2a.5.5 0 11.708.708z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0a7 7 0 110 14A7 7 0 017 0zm0 1a6 6 0 110 12A6 6 0 017 1z",
      fill: e
    }
  )
)), oC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.5 6.5h5.793L8.146 5.354a.5.5 0 11.708-.708l2 2a.5.5 0 010 .708l-2 2a.5.5 0 11-.708-.708L9.293 7.5H3.5a.5.5 0 010-1z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 117 0a7 7 0 010 14zm0-1A6 6 0 117 1a6 6 0 010 12z",
      fill: e
    }
  )
)), iC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.092.5H7a6.5 6.5 0 106.41 7.583.5.5 0 10-.986-.166A5.495 5.495 0 017 12.5a5.5 5.5 0 010-11h.006a5.5 5.5 0 014.894 3H10a.5.5 0 000 1h3a.5.5 0 00.5-.5V2a.5.5 0 00-1 0v1.535A6.495 6.495 0 007.092.5z",
      fill: e
    }
  )
)), lC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 100 7a7 7 0 0014 0zm-6.535 5.738c-.233.23-.389.262-.465.262-.076 0-.232-.032-.465-.262-.238-.234-.497-.623-.737-1.182-.434-1.012-.738-2.433-.79-4.056h3.984c-.052 1.623-.356 3.043-.79 4.056-.24.56-.5.948-.737 1.182zM8.992 6.5H5.008c.052-1.623.356-3.044.79-4.056.24-.56.5-.948.737-1.182C6.768 1.032 6.924 1 7 1c.076 0 .232.032.465.262.238.234.497.623.737 1.182.434 1.012.738 2.433.79 4.056zm1 1c-.065 2.176-.558 4.078-1.282 5.253A6.005 6.005 0 0012.98 7.5H9.992zm2.987-1H9.992c-.065-2.176-.558-4.078-1.282-5.253A6.005 6.005 0 0112.98 6.5zm-8.971 0c.065-2.176.558-4.078 1.282-5.253A6.005 6.005 0 001.02 6.5h2.988zm-2.987 1a6.005 6.005 0 004.27 5.253C4.565 11.578 4.072 9.676 4.007 7.5H1.02z",
      fill: e
    }
  )
)), sC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.087 3.397L5.95 5.793a.374.374 0 00-.109.095.377.377 0 00-.036.052l-2.407 4.147a.374.374 0 00-.004.384c.104.179.334.24.513.136l4.142-2.404a.373.373 0 00.148-.143l2.406-4.146a.373.373 0 00-.037-.443.373.373 0 00-.478-.074zM4.75 9.25l2.847-1.652-1.195-1.195L4.75 9.25z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), uC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 7a7 7 0 1114 0A7 7 0 010 7zm6.5 3.5v2.48A6.001 6.001 0 011.02 7.5H3.5a.5.5 0 000-1H1.02A6.001 6.001 0 016.5 1.02V3.5a.5.5 0 001 0V1.02a6.001 6.001 0 015.48 5.48H10.5a.5.5 0 000 1h2.48a6.002 6.002 0 01-5.48 5.48V10.5a.5.5 0 00-1 0z",
      fill: e
    }
  )
)), cC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M9 5a2 2 0 11-4 0 2 2 0 014 0zM8 5a1 1 0 11-2 0 1 1 0 012 0z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5A5 5 0 002 5c0 2.633 2.273 6.154 4.65 8.643.192.2.508.2.7 0C9.726 11.153 12 7.633 12 5zM7 1a4 4 0 014 4c0 1.062-.471 2.42-1.303 3.88-.729 1.282-1.69 2.562-2.697 3.67-1.008-1.108-1.968-2.388-2.697-3.67C3.47 7.42 3 6.063 3 5a4 4 0 014-4z",
      fill: e
    }
  )
)), dC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7 2a.5.5 0 01.5.5v4H10a.5.5 0 010 1H7a.5.5 0 01-.5-.5V2.5A.5.5 0 017 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e
    }
  )
)), pC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.79 4.093a.5.5 0 01.117.698L7.91 7.586a1 1 0 11-.814-.581l1.997-2.796a.5.5 0 01.698-.116z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.069 12.968a7 7 0 119.863 0A12.962 12.962 0 007 12c-1.746 0-3.41.344-4.931.968zm9.582-1.177a6 6 0 10-9.301 0A13.98 13.98 0 017 11c1.629 0 3.194.279 4.65.791z",
      fill: e
    }
  )
)), hC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("path", { d: "M7.5 4.5a.5.5 0 00-1 0v2.634a1 1 0 101 0V4.5z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.5.5A.5.5 0 016 0h2a.5.5 0 010 1h-.5v1.02a5.973 5.973 0 013.374 1.398l.772-.772a.5.5 0 01.708.708l-.772.772A6 6 0 116.5 2.02V1H6a.5.5 0 01-.5-.5zM7 3a5 5 0 100 10A5 5 0 007 3z",
      fill: e
    }
  )
)), fC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.354 1.146l5.5 5.5a.5.5 0 01-.708.708L12 7.207V12.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V9H6v3.5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5V7.207l-.146.147a.5.5 0 11-.708-.708l1-1 4.5-4.5a.5.5 0 01.708 0zM3 6.207V12h2V8.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V12h2V6.207l-4-4-4 4z",
      fill: e
    }
  )
)), mC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.213 4.094a.5.5 0 01.056-.034l5.484-2.995a.498.498 0 01.494 0L12.73 4.06a.507.507 0 01.266.389.498.498 0 01-.507.555H1.51a.5.5 0 01-.297-.91zm2.246-.09h7.082L7 2.07 3.459 4.004z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM11 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM5.75 5.5a.5.5 0 01.5.5v5a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zM8.75 6a.5.5 0 00-1 0v5a.5.5 0 001 0V6zM1.5 12.504a.5.5 0 01.5-.5h10a.5.5 0 010 1H2a.5.5 0 01-.5-.5z",
      fill: e
    }
  )
)), gC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement("g", { clipPath: "url(#prefix__clip0_1107_3594)" }, /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M11.451.537l.01 12.922h0L7.61 8.946a1.077 1.077 0 00-.73-.374L.964 8.087 11.45.537h0z",
      stroke: e,
      strokeWidth: 1.077
    }
  )),
  /* @__PURE__ */ i.createElement("defs", null, /* @__PURE__ */ i.createElement("clipPath", { id: "prefix__clip0_1107_3594" }, /* @__PURE__ */ i.createElement(
    "path",
    { fill: "#fff", d: "M0 0h14v14H0z" }
  )))
)), vC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zM2.671 11.155c.696-1.006 2.602-1.816 3.194-1.91.226-.036.232-.658.232-.658s-.665-.658-.81-1.544c-.39 0-.63-.94-.241-1.272a2.578 2.578 0 00-.012-.13c-.066-.607-.28-2.606 1.965-2.606 2.246 0 2.031 2 1.966 2.606l-.012.13c.39.331.149 1.272-.24 1.272-.146.886-.81 1.544-.81 1.544s.004.622.23.658c.593.094 2.5.904 3.195 1.91a6 6 0 10-8.657 0z",
      fill: e
    }
  )
)), wC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M7.275 13.16a11.388 11.388 0 005.175-1.232v-.25c0-1.566-3.237-2.994-4.104-3.132-.27-.043-.276-.783-.276-.783s.791-.783.964-1.836c.463 0 .75-1.119.286-1.513C9.34 4 9.916 1.16 6.997 1.16c-2.92 0-2.343 2.84-2.324 3.254-.463.394-.177 1.513.287 1.513.172 1.053.963 1.836.963 1.836s-.006.74-.275.783c-.858.136-4.036 1.536-4.103 3.082a11.388 11.388 0 005.73 1.532z",
      fill: e
    }
  )
)), bC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M1.183 11.906a10.645 10.645 0 01-1.181-.589c.062-1.439 3.02-2.74 3.818-2.868.25-.04.256-.728.256-.728s-.736-.729-.896-1.709c-.432 0-.698-1.041-.267-1.408A2.853 2.853 0 002.9 4.46c-.072-.672-.31-2.884 2.175-2.884 2.486 0 2.248 2.212 2.176 2.884-.007.062-.012.112-.014.144.432.367.165 1.408-.266 1.408-.16.98-.896 1.709-.896 1.709s.005.688.256.728c.807.129 3.82 1.457 3.82 2.915v.233a10.598 10.598 0 01-4.816 1.146c-1.441 0-2.838-.282-4.152-.837zM11.5 2.16a.5.5 0 01.5.5v1.5h1.5a.5.5 0 010 1H12v1.5a.5.5 0 01-1 0v-1.5H9.5a.5.5 0 110-1H11v-1.5a.5.5 0 01.5-.5z",
      fill: e
    }
  )
)), DC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.21 11.623a10.586 10.586 0 01-4.031.787A10.585 10.585 0 010 11.07c.06-1.354 2.933-2.578 3.708-2.697.243-.038.249-.685.249-.685s-.715-.685-.87-1.607c-.42 0-.679-.979-.26-1.323a2.589 2.589 0 00-.013-.136c-.07-.632-.3-2.712 2.113-2.712 2.414 0 2.183 2.08 2.113 2.712-.007.059-.012.105-.013.136.419.344.16 1.323-.259 1.323-.156.922-.87 1.607-.87 1.607s.005.647.248.685c.784.12 3.71 1.37 3.71 2.74v.22c-.212.103-.427.2-.646.29z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M8.81 8.417a9.643 9.643 0 00-.736-.398c.61-.42 1.396-.71 1.7-.757.167-.026.171-.471.171-.471s-.491-.471-.598-1.104c-.288 0-.466-.674-.178-.91-.001-.022-.005-.053-.01-.094-.048-.434-.206-1.864 1.453-1.864 1.66 0 1.5 1.43 1.453 1.864l-.01.094c.289.236.11.91-.178.91-.107.633-.598 1.104-.598 1.104s.004.445.171.47c.539.084 2.55.942 2.55 1.884v.628a10.604 10.604 0 01-3.302.553 2.974 2.974 0 00-.576-.879c-.375-.408-.853-.754-1.312-1.03z",
      fill: e
    }
  )
)), yC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M9.106 7.354c-.627.265-1.295.4-1.983.4a5.062 5.062 0 01-2.547-.681c.03-.688 1.443-1.31 1.824-1.37.12-.02.122-.348.122-.348s-.351-.348-.428-.816c-.206 0-.333-.498-.127-.673 0-.016-.003-.04-.007-.07C5.926 3.477 5.812 2.42 7 2.42c1.187 0 1.073 1.057 1.039 1.378l-.007.069c.207.175.08.673-.127.673-.076.468-.428.816-.428.816s.003.329.122.348c.386.06 1.825.696 1.825 1.392v.111c-.104.053-.21.102-.318.148zM3.75 11.25A.25.25 0 014 11h6a.25.25 0 110 .5H4a.25.25 0 01-.25-.25zM4 9a.25.25 0 000 .5h6a.25.25 0 100-.5H4z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1 .5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v13a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5V.5zM2 13V1h10v12H2z",
      fill: e
    }
  )
)), EC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.968 8.75a.5.5 0 00-.866.5A4.498 4.498 0 007 11.5c1.666 0 3.12-.906 3.898-2.25a.5.5 0 10-.866-.5A3.498 3.498 0 017 10.5a3.498 3.498 0 01-3.032-1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), CC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M4.5 9a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), xC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.968 10.25a.5.5 0 01-.866-.5A4.498 4.498 0 017 7.5c1.666 0 3.12.906 3.898 2.25a.5.5 0 11-.866.5A3.498 3.498 0 007 8.5a3.498 3.498 0 00-3.032 1.75zM5.5 5a1 1 0 11-2 0 1 1 0 012 0zM9.5 6a1 1 0 100-2 1 1 0 000 2z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 7A7 7 0 110 7a7 7 0 0114 0zm-1 0A6 6 0 111 7a6 6 0 0112 0z",
      fill: e
    }
  )
)), SC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      d: "M3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
      fill: e
    }
  ),
  /* @__PURE__ */ i.createElement("path", { d: "M7 4.5a1 1 0 100-2 1 1 0 000 2z", fill: e }),
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zm0-1A6 6 0 107 1a6 6 0 000 12z",
      fill: e
    }
  )
)), AC = /* @__PURE__ */ i.forwardRef(({ color: e = "currentColor", size: t = 14, ...r }, n) => /* @__PURE__ */ i.createElement(
  "svg",
  {
    width: t,
    height: t,
    viewBox: "0 0 15 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: n,
    ...r
  },
  /* @__PURE__ */ i.createElement(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 14A7 7 0 107 0a7 7 0 000 14zM8 3.5a1 1 0 11-2 0 1 1 0 012 0zM3.526 4.842a.5.5 0 01.632-.316l2.051.684a2.5 2.5 0 001.582 0l2.05-.684a.5.5 0 01.317.948l-2.453.818a.3.3 0 00-.205.285v.243a4.5 4.5 0 00.475 2.012l.972 1.944a.5.5 0 11-.894.448L7 9.118l-1.053 2.106a.5.5 0 11-.894-.447l.972-1.945A4.5 4.5 0 006.5 6.82v-.243a.3.3 0 00-.205-.285l-2.453-.818a.5.5 0 01-.316-.632z",
      fill: e
    }
  )
)), kC = 0, FC = /* @__PURE__ */ l((e) => e.button === kC && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey, "isPlainLeftClick"), BC = /* @__PURE__ */ l(
  (e, t) => {
    FC(e) && (e.preventDefault(), t(e));
  },
  "cancelled"
), zC = I.span(
  ({ withArrow: e }) => e ? {
    "> svg:last-of-type": {
      height: "0.7em",
      width: "0.7em",
      marginRight: 0,
      marginLeft: "0.25em",
      bottom: "auto",
      verticalAlign: "inherit"
    }
  } : {},
  ({ containsIcon: e }) => e ? {
    svg: {
      height: "1em",
      width: "1em",
      verticalAlign: "middle",
      position: "relative",
      bottom: 0,
      marginRight: 0
    }
  } : {}
), _C = I.a(
  ({ theme: e }) => ({
    display: "inline-block",
    transition: "all 150ms ease-out",
    textDecoration: "none",
    color: e.color.secondary,
    "&:hover, &:focus": {
      cursor: "pointer",
      color: Yr(0.07, e.color.secondary),
      "svg path:not([fill])": {
        fill: Yr(0.07, e.color.secondary)
      }
    },
    "&:active": {
      color: Yr(0.1, e.color.secondary),
      "svg path:not([fill])": {
        fill: Yr(0.1, e.color.secondary)
      }
    },
    svg: {
      display: "inline-block",
      height: "1em",
      width: "1em",
      verticalAlign: "text-top",
      position: "relative",
      bottom: "-0.125em",
      marginRight: "0.4em",
      "& path": {
        fill: e.color.secondary
      }
    }
  }),
  ({ theme: e, secondary: t, tertiary: r }) => {
    let n;
    return t && (n = [e.textMutedColor, e.color.dark, e.color.darker]), r && (n = [e.color.dark, e.color.darkest, e.textMutedColor]), n ? {
      color: n[0],
      "svg path:not([fill])": {
        fill: n[0]
      },
      "&:hover": {
        color: n[1],
        "svg path:not([fill])": {
          fill: n[1]
        }
      },
      "&:active": {
        color: n[2],
        "svg path:not([fill])": {
          fill: n[2]
        }
      }
    } : {};
  },
  ({ nochrome: e }) => e ? {
    color: "inherit",
    "&:hover, &:active": {
      color: "inherit",
      textDecoration: "underline"
    }
  } : {},
  ({ theme: e, inverse: t }) => t ? {
    color: e.color.lightest,
    ":not([fill])": {
      fill: e.color.lightest
    },
    "&:hover": {
      color: e.color.lighter,
      "svg path:not([fill])": {
        fill: e.color.lighter
      }
    },
    "&:active": {
      color: e.color.light,
      "svg path:not([fill])": {
        fill: e.color.light
      }
    }
  } : {},
  ({ isButton: e }) => e ? {
    border: 0,
    borderRadius: 0,
    background: "none",
    padding: 0,
    fontSize: "inherit"
  } : {}
), dA = /* @__PURE__ */ l(({
  cancel: e = !0,
  children: t,
  onClick: r = void 0,
  withArrow: n = !1,
  containsIcon: a = !1,
  className: o = void 0,
  style: s = void 0,
  ...u
}) => /* @__PURE__ */ k.createElement(
  _C,
  {
    ...u,
    onClick: r && e ? (c) => BC(c, r) : r,
    className: o
  },
  /* @__PURE__ */ k.createElement(zC, { withArrow: n, containsIcon: a }, t, n && /* @__PURE__ */ k.createElement(S7, null))
), "Link");
I.div(({ theme: e }) => ({
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "1.6",
  h1: {
    fontSize: `${e.typography.size.l1}px`,
    fontWeight: e.typography.weight.bold
  },
  h2: {
    fontSize: `${e.typography.size.m2}px`,
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  h3: {
    fontSize: `${e.typography.size.m1}px`
  },
  h4: {
    fontSize: `${e.typography.size.s3}px`
  },
  h5: {
    fontSize: `${e.typography.size.s2}px`
  },
  h6: {
    fontSize: `${e.typography.size.s2}px`,
    color: e.color.dark
  },
  "pre:not(.prismjs)": {
    background: "transparent",
    border: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0
  },
  "pre pre, pre.prismjs": {
    padding: 15,
    margin: 0,
    whiteSpace: "pre-wrap",
    color: "inherit",
    fontSize: "13px",
    lineHeight: "19px"
  },
  "pre pre code, pre.prismjs code": {
    color: "inherit",
    fontSize: "inherit"
  },
  "pre code": {
    margin: 0,
    padding: 0,
    whiteSpace: "pre",
    border: "none",
    background: "transparent"
  },
  "pre code, pre tt": {
    backgroundColor: "transparent",
    border: "none"
  },
  /* GitHub inspired Markdown styles loosely from https://gist.github.com/tuzz/3331384 */
  "body > *:first-of-type": {
    marginTop: "0 !important"
  },
  "body > *:last-child": {
    marginBottom: "0 !important"
  },
  a: {
    color: e.color.secondary,
    textDecoration: "none"
  },
  "a.absent": {
    color: "#cc0000"
  },
  "a.anchor": {
    display: "block",
    paddingLeft: 30,
    marginLeft: -30,
    cursor: "pointer",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0
  },
  "h1, h2, h3, h4, h5, h6": {
    margin: "20px 0 10px",
    padding: 0,
    cursor: "text",
    position: "relative",
    "&:first-of-type": {
      marginTop: 0,
      paddingTop: 0
    },
    "&:hover a.anchor": {
      textDecoration: "none"
    },
    "& tt, & code": {
      fontSize: "inherit"
    }
  },
  "h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "p, blockquote, ul, ol, dl, li, table, pre": {
    margin: "15px 0"
  },
  hr: {
    border: "0 none",
    borderTop: `1px solid ${e.appBorderColor}`,
    height: 4,
    padding: 0
  },
  "body > h1:first-of-type, body > h2:first-of-type, body > h3:first-of-type, body > h4:first-of-type, body > h5:first-of-type, body > h6:first-of-type": {
    marginTop: 0,
    paddingTop: 0
  },
  "body > h1:first-of-type + h2": {
    marginTop: 0,
    paddingTop: 0
  },
  "a:first-of-type h1, a:first-of-type h2, a:first-of-type h3, a:first-of-type h4, a:first-of-type h5, a:first-of-type h6": {
    marginTop: 0,
    paddingTop: 0
  },
  "h1 p, h2 p, h3 p, h4 p, h5 p, h6 p": {
    marginTop: 0
  },
  "li p.first": {
    display: "inline-block"
  },
  "ul, ol": {
    paddingLeft: 30,
    "& :first-of-type": {
      marginTop: 0
    },
    "& :last-child": {
      marginBottom: 0
    }
  },
  dl: {
    padding: 0
  },
  "dl dt": {
    fontSize: "14px",
    fontWeight: "bold",
    fontStyle: "italic",
    margin: "0 0 15px",
    padding: "0 15px",
    "&:first-of-type": {
      padding: 0
    },
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  blockquote: {
    borderLeft: `4px solid ${e.color.medium}`,
    padding: "0 15px",
    color: e.color.dark,
    "& > :first-of-type": {
      marginTop: 0
    },
    "& > :last-child": {
      marginBottom: 0
    }
  },
  table: {
    padding: 0,
    borderCollapse: "collapse",
    "& tr": {
      borderTop: `1px solid ${e.appBorderColor}`,
      backgroundColor: "white",
      margin: 0,
      padding: 0,
      "& th": {
        fontWeight: "bold",
        border: `1px solid ${e.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "& td": {
        border: `1px solid ${e.appBorderColor}`,
        textAlign: "left",
        margin: 0,
        padding: "6px 13px"
      },
      "&:nth-of-type(2n)": {
        backgroundColor: e.color.lighter
      },
      "& th :first-of-type, & td :first-of-type": {
        marginTop: 0
      },
      "& th :last-child, & td :last-child": {
        marginBottom: 0
      }
    }
  },
  img: {
    maxWidth: "100%"
  },
  "span.frame": {
    display: "block",
    overflow: "hidden",
    "& > span": {
      border: `1px solid ${e.color.medium}`,
      display: "block",
      float: "left",
      overflow: "hidden",
      margin: "13px 0 0",
      padding: 7,
      width: "auto"
    },
    "& span img": {
      display: "block",
      float: "left"
    },
    "& span span": {
      clear: "both",
      color: e.color.darkest,
      display: "block",
      padding: "5px 0 0"
    }
  },
  "span.align-center": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "center"
    },
    "& span img": {
      margin: "0 auto",
      textAlign: "center"
    }
  },
  "span.align-right": {
    display: "block",
    overflow: "hidden",
    clear: "both",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px 0 0",
      textAlign: "right"
    },
    "& span img": {
      margin: 0,
      textAlign: "right"
    }
  },
  "span.float-left": {
    display: "block",
    marginRight: 13,
    overflow: "hidden",
    float: "left",
    "& span": {
      margin: "13px 0 0"
    }
  },
  "span.float-right": {
    display: "block",
    marginLeft: 13,
    overflow: "hidden",
    float: "right",
    "& > span": {
      display: "block",
      overflow: "hidden",
      margin: "13px auto 0",
      textAlign: "right"
    }
  },
  "code, tt": {
    margin: "0 2px",
    padding: "0 5px",
    whiteSpace: "nowrap",
    border: `1px solid ${e.color.mediumlight}`,
    backgroundColor: e.color.lighter,
    borderRadius: 3,
    color: e.base === "dark" ? e.color.darkest : e.color.dark
  }
}));
var gr = [], mn = null, IC = i.lazy(async () => {
  let { SyntaxHighlighter: e } = await Promise.resolve().then(() => (ki(), dc));
  return gr.length > 0 && (gr.forEach((t) => {
    e.registerLanguage(...t);
  }), gr = []), mn === null && (mn = e), {
    default: /* @__PURE__ */ l((t) => /* @__PURE__ */ k.createElement(e, { ...t }), "default")
  };
}), RC = i.lazy(async () => {
  let [{ SyntaxHighlighter: e }, { formatter: t }] = await Promise.all([
    Promise.resolve().then(() => (ki(), dc)),
    Promise.resolve().then(() => (L8(), i3))
  ]);
  return gr.length > 0 && (gr.forEach((r) => {
    e.registerLanguage(...r);
  }), gr = []), mn === null && (mn = e), {
    default: /* @__PURE__ */ l((r) => /* @__PURE__ */ k.createElement(e, { ...r, formatter: t }), "default")
  };
}), LC = /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(i.Suspense, { fallback: /* @__PURE__ */ k.createElement("div", null) }, e.format !== !1 ? /* @__PURE__ */ k.createElement(RC, { ...e }) : /* @__PURE__ */ k.createElement(IC, { ...e })), "SyntaxHighlighter");
LC.registerLanguage = (...e) => {
  if (mn !== null) {
    mn.registerLanguage(...e);
    return;
  }
  gr.push(e);
};
ki();
ym();
var A7 = {};
vn(A7, {
  Close: () => Hw,
  Content: () => Lw,
  Description: () => Mw,
  Dialog: () => bw,
  DialogClose: () => zw,
  DialogContent: () => Sw,
  DialogDescription: () => Bw,
  DialogOverlay: () => xw,
  DialogPortal: () => Cw,
  DialogTitle: () => Fw,
  DialogTrigger: () => Dw,
  Overlay: () => Rw,
  Portal: () => Iw,
  Root: () => _w,
  Title: () => Tw,
  Trigger: () => zx,
  WarningProvider: () => Bx,
  createDialogScope: () => bx
});
Xe();
function kt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return /* @__PURE__ */ l(function(n) {
    if (e?.(n), r === !1 || !n.defaultPrevented) return t?.(n);
  }, "handleEvent");
}
l(kt, "$e42e1063c40fb3ef$export$b9ecd428b558ff10");
function k7(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
l(k7, "$6ed0406888f73fc4$var$setRef");
function ol(...e) {
  return (t) => e.forEach(
    (r) => k7(r, t)
  );
}
l(ol, "$6ed0406888f73fc4$export$43e446d32b3d21af");
function _r(...e) {
  return i.useCallback(ol(...e), e);
}
l(_r, "$6ed0406888f73fc4$export$c7b2cbe3552a0d05");
function F7(e, t) {
  let r = /* @__PURE__ */ i.createContext(t);
  function n(o) {
    let { children: s, ...u } = o, c = i.useMemo(
      () => u,
      Object.values(u)
    );
    return /* @__PURE__ */ i.createElement(r.Provider, {
      value: c
    }, s);
  }
  l(n, "Provider");
  function a(o) {
    let s = i.useContext(r);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return l(a, "useContext"), n.displayName = e + "Provider", [
    n,
    a
  ];
}
l(F7, "$c512c27ab02ef895$export$fd42f52fd3ae1109");
function B7(e, t = []) {
  let r = [];
  function n(o, s) {
    let u = /* @__PURE__ */ i.createContext(s), c = r.length;
    r = [
      ...r,
      s
    ];
    function d(f) {
      let { scope: h, children: m, ...v } = f, g = h?.[e][c] || u, D = i.useMemo(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ i.createElement(g.Provider, {
        value: D
      }, m);
    }
    l(d, "Provider");
    function p(f, h) {
      let m = h?.[e][c] || u, v = i.useContext(m);
      if (v) return v;
      if (s !== void 0) return s;
      throw new Error(`\`${f}\` must be used within \`${o}\``);
    }
    return l(p, "useContext"), d.displayName = o + "Provider", [
      d,
      p
    ];
  }
  l(n, "$c512c27ab02ef895$export$fd42f52fd3ae1109");
  let a = /* @__PURE__ */ l(() => {
    let o = r.map((s) => /* @__PURE__ */ i.createContext(s));
    return /* @__PURE__ */ l(function(s) {
      let u = s?.[e] || o;
      return i.useMemo(
        () => ({
          [`__scope${e}`]: {
            ...s,
            [e]: u
          }
        }),
        [
          s,
          u
        ]
      );
    }, "useScope");
  }, "createScope");
  return a.scopeName = e, [
    n,
    z7(a, ...t)
  ];
}
l(B7, "$c512c27ab02ef895$export$50c7b4e9d9f19c1");
function z7(...e) {
  let t = e[0];
  if (e.length === 1) return t;
  let r = /* @__PURE__ */ l(() => {
    let n = e.map(
      (a) => ({
        useScope: a(),
        scopeName: a.scopeName
      })
    );
    return /* @__PURE__ */ l(function(a) {
      let o = n.reduce((s, { useScope: u, scopeName: c }) => {
        let d = u(a)[`__scope${c}`];
        return {
          ...s,
          ...d
        };
      }, {});
      return i.useMemo(
        () => ({
          [`__scope${t.scopeName}`]: o
        }),
        [
          o
        ]
      );
    }, "useComposedScopes");
  }, "createScope1");
  return r.scopeName = t.scopeName, r;
}
l(z7, "$c512c27ab02ef895$var$composeContextScopes");
var P0 = globalThis?.document ? i.useLayoutEffect : () => {
}, TC = i.useId || (() => {
}), MC = 0;
function To(e) {
  let [t, r] = i.useState(TC());
  return P0(() => {
    e || r(
      (n) => n ?? String(MC++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
l(To, "$1746a345f3d73bb7$export$f680877a34711e37");
function Gt(e) {
  let t = i.useRef(e);
  return i.useEffect(() => {
    t.current = e;
  }), i.useMemo(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
l(Gt, "$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");
function _7({ prop: e, defaultProp: t, onChange: r = /* @__PURE__ */ l(() => {
}, "onChange") }) {
  let [n, a] = I7({
    defaultProp: t,
    onChange: r
  }), o = e !== void 0, s = o ? e : n, u = Gt(r), c = i.useCallback((d) => {
    if (o) {
      let p = typeof d == "function" ? d(e) : d;
      p !== e && u(p);
    } else a(d);
  }, [
    o,
    e,
    a,
    u
  ]);
  return [
    s,
    c
  ];
}
l(_7, "$71cd76cc60e0454e$export$6f32135080cb4c3");
function I7({ defaultProp: e, onChange: t }) {
  let r = i.useState(e), [n] = r, a = i.useRef(n), o = Gt(t);
  return i.useEffect(() => {
    a.current !== n && (o(n), a.current = n);
  }, [
    n,
    a,
    o
  ]), r;
}
l(I7, "$71cd76cc60e0454e$var$useUncontrolledState");
Xe();
Xe();
Xe();
var R7 = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { children: r, ...n } = e, a = i.Children.toArray(r), o = a.find(L7);
  if (o) {
    let s = o.props.children, u = a.map((c) => c === o ? i.Children.count(s) > 1 ? i.Children.only(null) : /* @__PURE__ */ i.isValidElement(s) ? s.props.children : null : c);
    return /* @__PURE__ */ i.createElement($0, U({}, n, {
      ref: t
    }), /* @__PURE__ */ i.isValidElement(s) ? /* @__PURE__ */ i.cloneElement(s, void 0, u) : null);
  }
  return /* @__PURE__ */ i.createElement($0, U({}, n, {
    ref: t
  }), r);
});
R7.displayName = "Slot";
var $0 = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, {
    ...T7(n, r.props),
    ref: t ? ol(t, r.ref) : r.ref
  }) : i.Children.count(r) > 1 ? i.Children.only(null) : null;
});
$0.displayName = "SlotClone";
var HC = /* @__PURE__ */ l(({ children: e }) => /* @__PURE__ */ i.createElement(i.Fragment, null, e), "$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");
function L7(e) {
  return /* @__PURE__ */ i.isValidElement(e) && e.type === HC;
}
l(L7, "$5e63c961fc1ce211$var$isSlottable");
function T7(e, t) {
  let r = {
    ...t
  };
  for (let n in t) {
    let a = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...s) => {
      o(...s), a(...s);
    } : a && (r[n] = a) : n === "style" ? r[n] = {
      ...a,
      ...o
    } : n === "className" && (r[n] = [
      a,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
l(T7, "$5e63c961fc1ce211$var$mergeProps");
var OC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Kt = OC.reduce((e, t) => {
  let r = /* @__PURE__ */ i.forwardRef((n, a) => {
    let { asChild: o, ...s } = n, u = o ? R7 : t;
    return i.useEffect(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ i.createElement(u, U({}, s, {
      ref: a
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function M7(e, t) {
  e && yi.flushSync(
    () => e.dispatchEvent(t)
  );
}
l(M7, "$8927f6f2acc4f386$export$6d1a0317bde7de7f");
function H7(e, t = globalThis?.document) {
  let r = Gt(e);
  i.useEffect(() => {
    let n = /* @__PURE__ */ l((a) => {
      a.key === "Escape" && r(a);
    }, "handleKeyDown");
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
l(H7, "$addc16e1bbe58fd0$export$3a72a57244d6e765");
var j0 = "dismissableLayer.update", NC = "dismissableLayer.pointerDownOutside", PC = "dismissableLayer.focusOutside", l2, $C = /* @__PURE__ */ i.createContext(
  {
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
  }
), jC = /* @__PURE__ */ i.forwardRef((e, t) => {
  var r;
  let {
    disableOutsidePointerEvents: n = !1,
    onEscapeKeyDown: a,
    onPointerDownOutside: o,
    onFocusOutside: s,
    onInteractOutside: u,
    onDismiss: c,
    ...d
  } = e, p = i.useContext($C), [f, h] = i.useState(null), m = (r = f?.ownerDocument) !== null && r !== void 0 ? r : globalThis?.document, [, v] = i.useState({}), g = _r(
    t,
    (x) => h(x)
  ), D = Array.from(p.layers), [y] = [
    ...p.layersWithOutsidePointerEventsDisabled
  ].slice(-1), E = D.indexOf(y), w = f ? D.indexOf(f) : -1, b = p.layersWithOutsidePointerEventsDisabled.size > 0, C = w >= E, S = O7((x) => {
    let F = x.target, B = [
      ...p.branches
    ].some(
      (_) => _.contains(F)
    );
    !C || B || (o?.(x), u?.(x), x.defaultPrevented || c?.());
  }, m), A = N7((x) => {
    let F = x.target;
    [
      ...p.branches
    ].some(
      (B) => B.contains(F)
    ) || (s?.(x), u?.(x), x.defaultPrevented || c?.());
  }, m);
  return H7((x) => {
    w === p.layers.size - 1 && (a?.(x), !x.defaultPrevented && c && (x.preventDefault(), c()));
  }, m), i.useEffect(() => {
    if (f)
      return n && (p.layersWithOutsidePointerEventsDisabled.size === 0 && (l2 = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), p.layersWithOutsidePointerEventsDisabled.add(f)), p.layers.add(f), V0(), () => {
        n && p.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = l2);
      };
  }, [
    f,
    m,
    n,
    p
  ]), i.useEffect(() => () => {
    f && (p.layers.delete(f), p.layersWithOutsidePointerEventsDisabled.delete(f), V0());
  }, [
    f,
    p
  ]), i.useEffect(() => {
    let x = /* @__PURE__ */ l(() => v({}), "handleUpdate");
    return document.addEventListener(j0, x), () => document.removeEventListener(j0, x);
  }, []), /* @__PURE__ */ i.createElement(Kt.div, U({}, d, {
    ref: g,
    style: {
      pointerEvents: b ? C ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: kt(e.onFocusCapture, A.onFocusCapture),
    onBlurCapture: kt(e.onBlurCapture, A.onBlurCapture),
    onPointerDownCapture: kt(e.onPointerDownCapture, S.onPointerDownCapture)
  }));
});
function O7(e, t = globalThis?.document) {
  let r = Gt(e), n = i.useRef(!1), a = i.useRef(() => {
  });
  return i.useEffect(() => {
    let o = /* @__PURE__ */ l((u) => {
      if (u.target && !n.current) {
        let c = function() {
          S1(NC, r, d, {
            discrete: !0
          });
        };
        l(c, "handleAndDispatchPointerDownOutsideEvent");
        let d = {
          originalEvent: u
        };
        u.pointerType === "touch" ? (t.removeEventListener("click", a.current), a.current = c, t.addEventListener("click", a.current, {
          once: !0
        })) : c();
      } else
        t.removeEventListener("click", a.current);
      n.current = !1;
    }, "handlePointerDown"), s = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(s), t.removeEventListener("pointerdown", o), t.removeEventListener("click", a.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: /* @__PURE__ */ l(() => n.current = !0, "onPointerDownCapture")
  };
}
l(O7, "$5cb92bef7577960e$var$usePointerDownOutside");
function N7(e, t = globalThis?.document) {
  let r = Gt(e), n = i.useRef(!1);
  return i.useEffect(() => {
    let a = /* @__PURE__ */ l((o) => {
      o.target && !n.current && S1(PC, r, {
        originalEvent: o
      }, {
        discrete: !1
      });
    }, "handleFocus");
    return t.addEventListener("focusin", a), () => t.removeEventListener("focusin", a);
  }, [
    t,
    r
  ]), {
    onFocusCapture: /* @__PURE__ */ l(() => n.current = !0, "onFocusCapture"),
    onBlurCapture: /* @__PURE__ */ l(() => n.current = !1, "onBlurCapture")
  };
}
l(N7, "$5cb92bef7577960e$var$useFocusOutside");
function V0() {
  let e = new CustomEvent(j0);
  document.dispatchEvent(e);
}
l(V0, "$5cb92bef7577960e$var$dispatchUpdate");
function S1(e, t, r, { discrete: n }) {
  let a = r.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && a.addEventListener(e, t, {
    once: !0
  }), n ? M7(a, o) : a.dispatchEvent(o);
}
l(S1, "$5cb92bef7577960e$var$handleAndDispatchCustomEvent");
Xe();
var vu = "focusScope.autoFocusOnMount", wu = "focusScope.autoFocusOnUnmount", s2 = {
  bubbles: !1,
  cancelable: !0
}, VC = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { loop: r = !1, trapped: n = !1, onMountAutoFocus: a, onUnmountAutoFocus: o, ...s } = e, [u, c] = i.useState(null), d = Gt(a), p = Gt(o), f = i.useRef(
    null
  ), h = _r(
    t,
    (g) => c(g)
  ), m = i.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  i.useEffect(() => {
    if (n) {
      let g = function(w) {
        if (m.paused || !u) return;
        let b = w.target;
        u.contains(b) ? f.current = b : St(f.current, {
          select: !0
        });
      }, D = function(w) {
        if (m.paused || !u) return;
        let b = w.relatedTarget;
        b !== null && (u.contains(b) || St(f.current, {
          select: !0
        }));
      }, y = function(w) {
        if (document.activeElement === document.body)
          for (let b of w) b.removedNodes.length > 0 && St(u);
      };
      l(g, "handleFocusIn"), l(D, "handleFocusOut"), l(y, "handleMutations"), document.addEventListener("focusin", g), document.addEventListener(
        "focusout",
        D
      );
      let E = new MutationObserver(y);
      return u && E.observe(u, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", D), E.disconnect();
      };
    }
  }, [
    n,
    u,
    m.paused
  ]), i.useEffect(() => {
    if (u) {
      u2.add(m);
      let g = document.activeElement;
      if (!u.contains(g)) {
        let D = new CustomEvent(vu, s2);
        u.addEventListener(vu, d), u.dispatchEvent(D), D.defaultPrevented || (P7(W7(A1(u)), {
          select: !0
        }), document.activeElement === g && St(u));
      }
      return () => {
        u.removeEventListener(vu, d), setTimeout(() => {
          let D = new CustomEvent(wu, s2);
          u.addEventListener(wu, p), u.dispatchEvent(D), D.defaultPrevented || St(g ?? document.body, {
            select: !0
          }), u.removeEventListener(wu, p), u2.remove(m);
        }, 0);
      };
    }
  }, [
    u,
    d,
    p,
    m
  ]);
  let v = i.useCallback((g) => {
    if (!r && !n || m.paused) return;
    let D = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, y = document.activeElement;
    if (D && y) {
      let E = g.currentTarget, [w, b] = $7(E);
      w && b ? !g.shiftKey && y === b ? (g.preventDefault(), r && St(w, {
        select: !0
      })) : g.shiftKey && y === w && (g.preventDefault(), r && St(b, {
        select: !0
      })) : y === E && g.preventDefault();
    }
  }, [
    r,
    n,
    m.paused
  ]);
  return /* @__PURE__ */ i.createElement(Kt.div, U({
    tabIndex: -1
  }, s, {
    ref: h,
    onKeyDown: v
  }));
});
function P7(e, { select: t = !1 } = {}) {
  let r = document.activeElement;
  for (let n of e)
    if (St(n, {
      select: t
    }), document.activeElement !== r) return;
}
l(P7, "$d3863c46a17e8a28$var$focusFirst");
function $7(e) {
  let t = A1(e), r = q0(t, e), n = q0(t.reverse(), e);
  return [
    r,
    n
  ];
}
l($7, "$d3863c46a17e8a28$var$getTabbableEdges");
function A1(e) {
  let t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: /* @__PURE__ */ l((n) => {
      let a = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || a ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }, "acceptNode")
  });
  for (; r.nextNode(); ) t.push(r.currentNode);
  return t;
}
l(A1, "$d3863c46a17e8a28$var$getTabbableCandidates");
function q0(e, t) {
  for (let r of e)
    if (!j7(r, {
      upTo: t
    })) return r;
}
l(q0, "$d3863c46a17e8a28$var$findVisible");
function j7(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
l(j7, "$d3863c46a17e8a28$var$isHidden");
function V7(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
l(V7, "$d3863c46a17e8a28$var$isSelectableInput");
function St(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    let r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && V7(e) && t && e.select();
  }
}
l(St, "$d3863c46a17e8a28$var$focus");
var u2 = q7();
function q7() {
  let e = [];
  return {
    add(t) {
      let r = e[0];
      t !== r && r?.pause(), e = W0(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = W0(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
l(q7, "$d3863c46a17e8a28$var$createFocusScopesStack");
function W0(e, t) {
  let r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
l(W0, "$d3863c46a17e8a28$var$arrayRemove");
function W7(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
l(W7, "$d3863c46a17e8a28$var$removeLinks");
Xe();
var qC = /* @__PURE__ */ i.forwardRef((e, t) => {
  var r;
  let { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...a } = e;
  return n ? /* @__PURE__ */ x2.createPortal(/* @__PURE__ */ i.createElement(Kt.div, U({}, a, {
    ref: t
  })), n) : null;
});
function U7(e, t) {
  return i.useReducer((r, n) => t[r][n] ?? r, e);
}
l(U7, "$fe963b355347cc68$export$3e6543de14f8614f");
var il = /* @__PURE__ */ l((e) => {
  let { present: t, children: r } = e, n = G7(t), a = typeof r == "function" ? r({
    present: n.isPresent
  }) : i.Children.only(r), o = _r(n.ref, a.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ i.cloneElement(a, {
    ref: o
  }) : null;
}, "$921a889cee6df7e8$export$99c2b779aa4e8b8b");
il.displayName = "Presence";
function G7(e) {
  let [t, r] = i.useState(), n = i.useRef({}), a = i.useRef(e), o = i.useRef("none"), s = e ? "mounted" : "unmounted", [u, c] = U7(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return i.useEffect(() => {
    let d = ea(n.current);
    o.current = u === "mounted" ? d : "none";
  }, [
    u
  ]), P0(() => {
    let d = n.current, p = a.current;
    if (p !== e) {
      let f = o.current, h = ea(d);
      e ? c("MOUNT") : h === "none" || d?.display === "none" ? c("UNMOUNT") : c(p && f !== h ? "ANIMATION_OUT" : "UNMOUNT"), a.current = e;
    }
  }, [
    e,
    c
  ]), P0(() => {
    if (t) {
      let d = /* @__PURE__ */ l((f) => {
        let h = ea(n.current).includes(f.animationName);
        f.target === t && h && yi.flushSync(
          () => c("ANIMATION_END")
        );
      }, "handleAnimationEnd"), p = /* @__PURE__ */ l((f) => {
        f.target === t && (o.current = ea(n.current));
      }, "handleAnimationStart");
      return t.addEventListener("animationstart", p), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", p), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(u),
    ref: i.useCallback((d) => {
      d && (n.current = getComputedStyle(d)), r(d);
    }, [])
  };
}
l(G7, "$921a889cee6df7e8$var$usePresence");
function ea(e) {
  return e?.animationName || "none";
}
l(ea, "$921a889cee6df7e8$var$getAnimationName");
var bu = 0;
function Z7() {
  i.useEffect(() => {
    var e, t;
    let r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : U0()), document.body.insertAdjacentElement(
      "beforeend",
      (t = r[1]) !== null && t !== void 0 ? t : U0()
    ), bu++, () => {
      bu === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), bu--;
    };
  }, []);
}
l(Z7, "$3db38b7d1fb3fe6a$export$b7ece24a22aeda8c");
function U0() {
  let e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
l(U0, "$3db38b7d1fb3fe6a$var$createFocusGuard");
var lt = /* @__PURE__ */ l(function() {
  return lt = Object.assign || /* @__PURE__ */ l(function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, "__assign"), lt.apply(this, arguments);
}, "__assign");
function k1(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++)
      t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
  return r;
}
l(k1, "__rest");
function Y7(e, t, r) {
  if (r || arguments.length === 2) for (var n = 0, a = t.length, o; n < a; n++)
    (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
l(Y7, "__spreadArray");
var Mo = "right-scroll-bar-position", Ho = "width-before-scroll-bar", WC = "with-scroll-bars-hidden", UC = "--removed-body-scroll-bar-size";
function Oo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
l(Oo, "assignRef");
function X7(e, t) {
  var r = i.useState(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var a = r.value;
          a !== n && (r.value = n, r.callback(n, a));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
l(X7, "useCallbackRef");
var c2 = /* @__PURE__ */ new WeakMap();
function K7(e, t) {
  var r = X7(t || null, function(n) {
    return e.forEach(function(a) {
      return Oo(a, n);
    });
  });
  return i.useLayoutEffect(function() {
    var n = c2.get(r);
    if (n) {
      var a = new Set(n), o = new Set(e), s = r.current;
      a.forEach(function(u) {
        o.has(u) || Oo(u, null);
      }), o.forEach(function(u) {
        a.has(u) || Oo(u, s);
      });
    }
    c2.set(r, e);
  }, [e]), r;
}
l(K7, "useMergeRefs");
function J7(e) {
  return e;
}
l(J7, "ItoI");
function Q7(e, t) {
  t === void 0 && (t = J7);
  var r = [], n = !1, a = {
    read: /* @__PURE__ */ l(function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    }, "read"),
    useMedium: /* @__PURE__ */ l(function(o) {
      var s = t(o, n);
      return r.push(s), function() {
        r = r.filter(function(u) {
          return u !== s;
        });
      };
    }, "useMedium"),
    assignSyncMedium: /* @__PURE__ */ l(function(o) {
      for (n = !0; r.length; ) {
        var s = r;
        r = [], s.forEach(o);
      }
      r = {
        push: /* @__PURE__ */ l(function(u) {
          return o(u);
        }, "push"),
        filter: /* @__PURE__ */ l(function() {
          return r;
        }, "filter")
      };
    }, "assignSyncMedium"),
    assignMedium: /* @__PURE__ */ l(function(o) {
      n = !0;
      var s = [];
      if (r.length) {
        var u = r;
        r = [], u.forEach(o), s = r;
      }
      var c = /* @__PURE__ */ l(function() {
        var p = s;
        s = [], p.forEach(o);
      }, "executeQueue"), d = /* @__PURE__ */ l(function() {
        return Promise.resolve().then(c);
      }, "cycle");
      d(), r = {
        push: /* @__PURE__ */ l(function(p) {
          s.push(p), d();
        }, "push"),
        filter: /* @__PURE__ */ l(function(p) {
          return s = s.filter(p), r;
        }, "filter")
      };
    }, "assignMedium")
  };
  return a;
}
l(Q7, "innerCreateMedium");
function ew(e) {
  e === void 0 && (e = {});
  var t = Q7(null);
  return t.options = lt({ async: !0, ssr: !1 }, e), t;
}
l(ew, "createSidecarMedium");
var tw = /* @__PURE__ */ l(function(e) {
  var t = e.sideCar, r = k1(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return i.createElement(n, lt({}, r));
}, "SideCar");
tw.isSideCarExport = !0;
function rw(e, t) {
  return e.useMedium(t), tw;
}
l(rw, "exportSidecar");
var nw = ew(), Du = /* @__PURE__ */ l(function() {
}, "nothing"), ll = i.forwardRef(function(e, t) {
  var r = i.useRef(null), n = i.useState({
    onScrollCapture: Du,
    onWheelCapture: Du,
    onTouchMoveCapture: Du
  }), a = n[0], o = n[1], s = e.forwardProps, u = e.children, c = e.className, d = e.removeScrollBar, p = e.enabled, f = e.shards, h = e.sideCar, m = e.noIsolation, v = e.inert, g = e.allowPinchZoom, D = e.as, y = D === void 0 ? "div" : D, E = k1(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = h, b = K7([r, t]), C = lt(lt(
    {},
    E
  ), a);
  return i.createElement(
    i.Fragment,
    null,
    p && i.createElement(w, { sideCar: nw, removeScrollBar: d, shards: f, noIsolation: m, inert: v, setCallbacks: o, allowPinchZoom: !!g, lockRef: r }),
    s ? i.cloneElement(i.Children.only(u), lt(lt({}, C), { ref: b })) : i.createElement(y, lt({}, C, { className: c, ref: b }), u)
  );
});
ll.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ll.classNames = {
  fullWidth: Ho,
  zeroRight: Mo
};
var GC = /* @__PURE__ */ l(function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
}, "getNonce");
function aw() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = GC();
  return t && e.setAttribute("nonce", t), e;
}
l(aw, "makeStyleTag");
function ow(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
l(ow, "injectStyles");
function iw(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
l(iw, "insertStyleTag");
var ZC = /* @__PURE__ */ l(function() {
  var e = 0, t = null;
  return {
    add: /* @__PURE__ */ l(function(r) {
      e == 0 && (t = aw()) && (ow(t, r), iw(t)), e++;
    }, "add"),
    remove: /* @__PURE__ */ l(function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }, "remove")
  };
}, "stylesheetSingleton"), YC = /* @__PURE__ */ l(function() {
  var e = ZC();
  return function(t, r) {
    i.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, "styleHookSingleton"), lw = /* @__PURE__ */ l(function() {
  var e = YC(), t = /* @__PURE__ */ l(function(r) {
    var n = r.styles, a = r.dynamic;
    return e(n, a), null;
  }, "Sheet");
  return t;
}, "styleSingleton"), XC = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, yu = /* @__PURE__ */ l(function(e) {
  return parseInt(e || "", 10) || 0;
}, "parse"), KC = /* @__PURE__ */ l(function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], a = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [yu(r), yu(n), yu(a)];
}, "getOffset"), JC = /* @__PURE__ */ l(function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return XC;
  var t = KC(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, "getGapWidth"), QC = lw(), Di = "data-scroll-locked", ex = /* @__PURE__ */ l(function(e, t, r, n) {
  var a = e.left, o = e.top, s = e.right, u = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(WC, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(u, "px ").concat(n, `;
  }
  body[`).concat(Di, `] {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(a, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(u, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(u, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(Mo, ` {
    right: `).concat(u, "px ").concat(n, `;
  }
  
  .`).concat(Ho, ` {
    margin-right: `).concat(u, "px ").concat(n, `;
  }
  
  .`).concat(Mo, " .").concat(Mo, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ho, " .").concat(Ho, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body[`).concat(Di, `] {
    `).concat(UC, ": ").concat(u, `px;
  }
`);
}, "getStyles"), tx = /* @__PURE__ */ l(function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, a = n === void 0 ? "margin" : n, o = i.useMemo(function() {
    return JC(a);
  }, [a]);
  return i.useEffect(function() {
    return document.body.setAttribute(Di, ""), function() {
      document.body.removeAttribute(Di);
    };
  }, []), i.createElement(QC, { styles: ex(o, !t, a, r ? "" : "!important") });
}, "RemoveScrollBar"), G0 = !1;
if (typeof window < "u")
  try {
    Vn = Object.defineProperty({}, "passive", {
      get: /* @__PURE__ */ l(function() {
        return G0 = !0, !0;
      }, "get")
    }), window.addEventListener("test", Vn, Vn), window.removeEventListener("test", Vn, Vn);
  } catch {
    G0 = !1;
  }
var Vn, Nr = G0 ? { passive: !1 } : !1, rx = /* @__PURE__ */ l(function(e) {
  return e.tagName === "TEXTAREA";
}, "alwaysContainsScroll"), sw = /* @__PURE__ */ l(function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !rx(e) && r[t] === "visible")
  );
}, "elementCanBeScrolled"), nx = /* @__PURE__ */ l(function(e) {
  return sw(e, "overflowY");
}, "elementCouldBeVScrolled"), ax = /* @__PURE__ */ l(function(e) {
  return sw(e, "overflowX");
}, "elementCouldBeHScrolled"), d2 = /* @__PURE__ */ l(function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = uw(e, r);
    if (n) {
      var a = cw(e, r), o = a[1], s = a[2];
      if (o > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, "locationCouldBeScrolled"), ox = /* @__PURE__ */ l(function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, "getVScrollVariables"), ix = /* @__PURE__ */ l(function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, "getHScrollVariables"), uw = /* @__PURE__ */ l(function(e, t) {
  return e === "v" ? nx(t) : ax(t);
}, "elementCouldBeScrolled"), cw = /* @__PURE__ */ l(function(e, t) {
  return e === "v" ? ox(t) : ix(t);
}, "getScrollVariables"), lx = /* @__PURE__ */ l(function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, "getDirectionFactor"), sx = /* @__PURE__ */ l(function(e, t, r, n, a) {
  var o = lx(e, window.getComputedStyle(t).direction), s = o * n, u = r.target, c = t.contains(u), d = !1, p = s > 0, f = 0, h = 0;
  do {
    var m = cw(e, u), v = m[0], g = m[1], D = m[2], y = g - D - o * v;
    (v || y) && uw(e, u) && (f += y, h += v), u = u.parentNode;
  } while (
    // portaled content
    !c && u !== document.body || // self content
    c && (t.contains(u) || t === u)
  );
  return (p && (a && f === 0 || !a && s > f) || !p && (a && h === 0 || !a && -s > h)) && (d = !0), d;
}, "handleScroll"), vo = /* @__PURE__ */ l(function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, "getTouchXY"), p2 = /* @__PURE__ */ l(function(e) {
  return [e.deltaX, e.deltaY];
}, "getDeltaXY"), h2 = /* @__PURE__ */ l(function(e) {
  return e && "current" in e ? e.current : e;
}, "extractRef"), ux = /* @__PURE__ */ l(function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, "deltaCompare"), cx = /* @__PURE__ */ l(function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, "generateStyle"), dx = 0, Pr = [];
function dw(e) {
  var t = i.useRef([]), r = i.useRef([0, 0]), n = i.useRef(), a = i.useState(dx++)[0], o = i.useState(function() {
    return lw();
  })[0], s = i.useRef(e);
  i.useEffect(function() {
    s.current = e;
  }, [e]), i.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(a));
      var g = Y7([e.lockRef.current], (e.shards || []).map(h2), !0).filter(Boolean);
      return g.forEach(function(D) {
        return D.classList.add("allow-interactivity-".concat(a));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(a)), g.forEach(function(D) {
          return D.classList.remove("allow-interactivity-".concat(a));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var u = i.useCallback(function(g, D) {
    if ("touches" in g && g.touches.length === 2)
      return !s.current.allowPinchZoom;
    var y = vo(g), E = r.current, w = "deltaX" in g ? g.deltaX : E[0] - y[0], b = "deltaY" in g ? g.deltaY : E[1] - y[1], C, S = g.target, A = Math.abs(w) > Math.abs(b) ? "h" : "v";
    if ("touches" in g && A === "h" && S.type === "range")
      return !1;
    var x = d2(A, S);
    if (!x)
      return !0;
    if (x ? C = A : (C = A === "v" ? "h" : "v", x = d2(A, S)), !x)
      return !1;
    if (!n.current && "changedTouches" in g && (w || b) && (n.current = C), !C)
      return !0;
    var F = n.current || C;
    return sx(F, D, g, F === "h" ? w : b, !0);
  }, []), c = i.useCallback(function(g) {
    var D = g;
    if (!(!Pr.length || Pr[Pr.length - 1] !== o)) {
      var y = "deltaY" in D ? p2(D) : vo(D), E = t.current.filter(function(C) {
        return C.name === D.type && C.target === D.target && ux(C.delta, y);
      })[0];
      if (E && E.should) {
        D.cancelable && D.preventDefault();
        return;
      }
      if (!E) {
        var w = (s.current.shards || []).map(h2).filter(Boolean).filter(function(C) {
          return C.contains(D.target);
        }), b = w.length > 0 ? u(D, w[0]) : !s.current.noIsolation;
        b && D.cancelable && D.preventDefault();
      }
    }
  }, []), d = i.useCallback(function(g, D, y, E) {
    var w = { name: g, delta: D, target: y, should: E };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(b) {
        return b !== w;
      });
    }, 1);
  }, []), p = i.useCallback(function(g) {
    r.current = vo(g), n.current = void 0;
  }, []), f = i.useCallback(function(g) {
    d(g.type, p2(g), g.target, u(g, e.lockRef.current));
  }, []), h = i.useCallback(function(g) {
    d(g.type, vo(g), g.target, u(g, e.lockRef.current));
  }, []);
  i.useEffect(function() {
    return Pr.push(o), e.setCallbacks({
      onScrollCapture: f,
      onWheelCapture: f,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Nr), document.addEventListener("touchmove", c, Nr), document.addEventListener(
      "touchstart",
      p,
      Nr
    ), function() {
      Pr = Pr.filter(function(g) {
        return g !== o;
      }), document.removeEventListener("wheel", c, Nr), document.removeEventListener("touchmove", c, Nr), document.removeEventListener("touchstart", p, Nr);
    };
  }, []);
  var m = e.removeScrollBar, v = e.inert;
  return i.createElement(
    i.Fragment,
    null,
    v ? i.createElement(o, { styles: cx(a) }) : null,
    m ? i.createElement(tx, { gapMode: "margin" }) : null
  );
}
l(dw, "RemoveScrollSideCar");
var px = rw(nw, dw), pw = i.forwardRef(function(e, t) {
  return i.createElement(ll, lt({}, e, { ref: t, sideCar: px }));
});
pw.classNames = ll.classNames;
var hx = pw, fx = /* @__PURE__ */ l(function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, "getDefaultParent"), $r = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), bo = {}, Eu = 0, hw = /* @__PURE__ */ l(function(e) {
  return e && (e.host || hw(e.parentNode));
}, "unwrapHost"), mx = /* @__PURE__ */ l(function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = hw(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, "correctTargets"), gx = /* @__PURE__ */ l(function(e, t, r, n) {
  var a = mx(t, Array.isArray(e) ? e : [e]);
  bo[r] || (bo[r] = /* @__PURE__ */ new WeakMap());
  var o = bo[r], s = [], u = /* @__PURE__ */ new Set(), c = new Set(a), d = /* @__PURE__ */ l(function(f) {
    !f || u.has(f) || (u.add(f), d(f.parentNode));
  }, "keep");
  a.forEach(d);
  var p = /* @__PURE__ */ l(function(f) {
    !f || c.has(f) || Array.prototype.forEach.call(f.children, function(h) {
      if (u.has(h))
        p(h);
      else {
        var m = h.getAttribute(n), v = m !== null && m !== "false", g = ($r.get(h) || 0) + 1, D = (o.get(h) || 0) + 1;
        $r.set(h, g), o.set(h, D), s.push(h), g === 1 && v && wo.set(h, !0), D === 1 && h.setAttribute(r, "true"), v || h.setAttribute(n, "true");
      }
    });
  }, "deep");
  return p(t), u.clear(), Eu++, function() {
    s.forEach(function(f) {
      var h = $r.get(f) - 1, m = o.get(f) - 1;
      $r.set(f, h), o.set(f, m), h || (wo.has(f) || f.removeAttribute(n), wo.delete(f)), m || f.removeAttribute(r);
    }), Eu--, Eu || ($r = /* @__PURE__ */ new WeakMap(), $r = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), bo = {});
  };
}, "applyAttributeToOthers"), vx = /* @__PURE__ */ l(function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), a = t || fx(e);
  return a ? (n.push.apply(n, Array.from(a.querySelectorAll("[aria-live]"))), gx(n, a, r, "aria-hidden")) : function() {
    return null;
  };
}, "hideOthers");
Xe();
var fw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { children: r, ...n } = e, a = i.Children.toArray(r), o = a.find(mw);
  if (o) {
    let s = o.props.children, u = a.map((c) => c === o ? i.Children.count(s) > 1 ? i.Children.only(null) : /* @__PURE__ */ i.isValidElement(s) ? s.props.children : null : c);
    return /* @__PURE__ */ i.createElement(Z0, U({}, n, {
      ref: t
    }), /* @__PURE__ */ i.isValidElement(s) ? /* @__PURE__ */ i.cloneElement(s, void 0, u) : null);
  }
  return /* @__PURE__ */ i.createElement(Z0, U({}, n, {
    ref: t
  }), r);
});
fw.displayName = "Slot";
var Z0 = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { children: r, ...n } = e;
  return /* @__PURE__ */ i.isValidElement(r) ? /* @__PURE__ */ i.cloneElement(r, {
    ...gw(n, r.props),
    ref: t ? ol(t, r.ref) : r.ref
  }) : i.Children.count(r) > 1 ? i.Children.only(null) : null;
});
Z0.displayName = "SlotClone";
var wx = /* @__PURE__ */ l(({ children: e }) => /* @__PURE__ */ i.createElement(i.Fragment, null, e), "$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");
function mw(e) {
  return /* @__PURE__ */ i.isValidElement(e) && e.type === wx;
}
l(mw, "$5e63c961fc1ce211$var$isSlottable");
function gw(e, t) {
  let r = {
    ...t
  };
  for (let n in t) {
    let a = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? a && o ? r[n] = (...s) => {
      o(...s), a(...s);
    } : a && (r[n] = a) : n === "style" ? r[n] = {
      ...a,
      ...o
    } : n === "className" && (r[n] = [
      a,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
l(gw, "$5e63c961fc1ce211$var$mergeProps");
var vw = "Dialog", [ww, bx] = B7(vw), [Dx, Je] = ww(vw), bw = /* @__PURE__ */ l((e) => {
  let { __scopeDialog: t, children: r, open: n, defaultOpen: a, onOpenChange: o, modal: s = !0 } = e, u = i.useRef(null), c = i.useRef(null), [d = !1, p] = _7(
    {
      prop: n,
      defaultProp: a,
      onChange: o
    }
  );
  return /* @__PURE__ */ i.createElement(Dx, {
    scope: t,
    triggerRef: u,
    contentRef: c,
    contentId: To(),
    titleId: To(),
    descriptionId: To(),
    open: d,
    onOpenChange: p,
    onOpenToggle: i.useCallback(
      () => p(
        (f) => !f
      ),
      [
        p
      ]
    ),
    modal: s
  }, r);
}, "$5d3850c4d0b4e6c7$export$3ddf2d174ce01153"), yx = "DialogTrigger", Dw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, ...n } = e, a = Je(yx, r), o = _r(t, a.triggerRef);
  return /* @__PURE__ */ i.createElement(Kt.button, U({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": a.open,
    "aria-controls": a.contentId,
    "data-state": sl(a.open)
  }, n, {
    ref: o,
    onClick: kt(e.onClick, a.onOpenToggle)
  }));
}), yw = "DialogPortal", [Ex, Ew] = ww(yw, {
  forceMount: void 0
}), Cw = /* @__PURE__ */ l((e) => {
  let { __scopeDialog: t, forceMount: r, children: n, container: a } = e, o = Je(yw, t);
  return /* @__PURE__ */ i.createElement(Ex, {
    scope: t,
    forceMount: r
  }, i.Children.map(
    n,
    (s) => /* @__PURE__ */ i.createElement(il, {
      present: r || o.open
    }, /* @__PURE__ */ i.createElement(qC, {
      asChild: !0,
      container: a
    }, s))
  ));
}, "$5d3850c4d0b4e6c7$export$dad7c95542bacce0"), Y0 = "DialogOverlay", xw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let r = Ew(Y0, e.__scopeDialog), { forceMount: n = r.forceMount, ...a } = e, o = Je(Y0, e.__scopeDialog);
  return o.modal ? /* @__PURE__ */ i.createElement(il, {
    present: n || o.open
  }, /* @__PURE__ */ i.createElement(Cx, U({}, a, {
    ref: t
  }))) : null;
}), Cx = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, ...n } = e, a = Je(Y0, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ i.createElement(hx, {
      as: fw,
      allowPinchZoom: !0,
      shards: [
        a.contentRef
      ]
    }, /* @__PURE__ */ i.createElement(Kt.div, U({
      "data-state": sl(a.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), gn = "DialogContent", Sw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let r = Ew(gn, e.__scopeDialog), { forceMount: n = r.forceMount, ...a } = e, o = Je(gn, e.__scopeDialog);
  return /* @__PURE__ */ i.createElement(il, {
    present: n || o.open
  }, o.modal ? /* @__PURE__ */ i.createElement(xx, U({}, a, {
    ref: t
  })) : /* @__PURE__ */ i.createElement(Sx, U({}, a, {
    ref: t
  })));
}), xx = /* @__PURE__ */ i.forwardRef((e, t) => {
  let r = Je(gn, e.__scopeDialog), n = i.useRef(null), a = _r(t, r.contentRef, n);
  return i.useEffect(() => {
    let o = n.current;
    if (o) return vx(o);
  }, []), /* @__PURE__ */ i.createElement(Aw, U({}, e, {
    ref: a,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: kt(e.onCloseAutoFocus, (o) => {
      var s;
      o.preventDefault(), (s = r.triggerRef.current) === null || s === void 0 || s.focus();
    }),
    onPointerDownOutside: kt(e.onPointerDownOutside, (o) => {
      let s = o.detail.originalEvent, u = s.button === 0 && s.ctrlKey === !0;
      (s.button === 2 || u) && o.preventDefault();
    }),
    onFocusOutside: kt(
      e.onFocusOutside,
      (o) => o.preventDefault()
    )
  }));
}), Sx = /* @__PURE__ */ i.forwardRef((e, t) => {
  let r = Je(gn, e.__scopeDialog), n = i.useRef(!1), a = i.useRef(!1);
  return /* @__PURE__ */ i.createElement(Aw, U({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: /* @__PURE__ */ l((o) => {
      var s;
      if ((s = e.onCloseAutoFocus) === null || s === void 0 || s.call(e, o), !o.defaultPrevented) {
        var u;
        n.current || (u = r.triggerRef.current) === null || u === void 0 || u.focus(), o.preventDefault();
      }
      n.current = !1, a.current = !1;
    }, "onCloseAutoFocus"),
    onInteractOutside: /* @__PURE__ */ l((o) => {
      var s, u;
      (s = e.onInteractOutside) === null || s === void 0 || s.call(e, o), o.defaultPrevented || (n.current = !0, o.detail.originalEvent.type === "pointerdown" && (a.current = !0));
      let c = o.target;
      !((u = r.triggerRef.current) === null || u === void 0) && u.contains(c) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && a.current && o.preventDefault();
    }, "onInteractOutside")
  }));
}), Aw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: a, onCloseAutoFocus: o, ...s } = e, u = Je(gn, r), c = i.useRef(null), d = _r(t, c);
  return Z7(), /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(VC, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: a,
    onUnmountAutoFocus: o
  }, /* @__PURE__ */ i.createElement(jC, U({
    role: "dialog",
    id: u.contentId,
    "aria-describedby": u.descriptionId,
    "aria-labelledby": u.titleId,
    "data-state": sl(u.open)
  }, s, {
    ref: d,
    onDismiss: /* @__PURE__ */ l(() => u.onOpenChange(!1), "onDismiss")
  }))), !1);
}), kw = "DialogTitle", Fw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, ...n } = e, a = Je(kw, r);
  return /* @__PURE__ */ i.createElement(Kt.h2, U({
    id: a.titleId
  }, n, {
    ref: t
  }));
}), Ax = "DialogDescription", Bw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, ...n } = e, a = Je(Ax, r);
  return /* @__PURE__ */ i.createElement(Kt.p, U({
    id: a.descriptionId
  }, n, {
    ref: t
  }));
}), kx = "DialogClose", zw = /* @__PURE__ */ i.forwardRef((e, t) => {
  let { __scopeDialog: r, ...n } = e, a = Je(kx, r);
  return /* @__PURE__ */ i.createElement(Kt.button, U({
    type: "button"
  }, n, {
    ref: t,
    onClick: kt(
      e.onClick,
      () => a.onOpenChange(!1)
    )
  }));
});
function sl(e) {
  return e ? "open" : "closed";
}
l(sl, "$5d3850c4d0b4e6c7$var$getState");
var Fx = "DialogTitleWarning", [Bx, pA] = F7(Fx, {
  contentName: gn,
  titleName: kw,
  docsSlug: "dialog"
}), _w = bw, zx = Dw, Iw = Cw, Rw = xw, Lw = Sw, Tw = Fw, Mw = Bw, Hw = zw, Ow = {};
vn(Ow, {
  Actions: () => Nx,
  CloseButton: () => Vw,
  Col: () => Ww,
  Container: () => jw,
  Content: () => Tx,
  Description: () => Ox,
  Error: () => Px,
  ErrorWrapper: () => Uw,
  Header: () => Mx,
  Overlay: () => $w,
  Row: () => qw,
  Title: () => Hx
});
Sm();
const { deprecate: _x } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var F1 = i.forwardRef(
  ({
    asChild: e = !1,
    animation: t = "none",
    size: r = "small",
    variant: n = "outline",
    padding: a = "medium",
    disabled: o = !1,
    active: s = !1,
    onClick: u,
    ...c
  }, d) => {
    let p = "button";
    c.isLink && (p = "a"), e && (p = $o);
    let f = n, h = r, [m, v] = i.useState(!1), g = /* @__PURE__ */ l((D) => {
      u && u(D), t !== "none" && v(!0);
    }, "handleClick");
    if (i.useEffect(() => {
      let D = setTimeout(() => {
        m && v(!1);
      }, 1e3);
      return () => clearTimeout(D);
    }, [m]), c.primary && (f = "solid", h = "medium"), (c.secondary || c.tertiary || c.gray || c.outline || c.inForm) && (f = "outline", h = "medium"), c.small || c.isLink || c.primary || c.secondary || c.tertiary || c.gray || c.outline || c.inForm || c.containsIcon) {
      let D = k.Children.toArray(c.children).filter(
        (y) => typeof y == "string" && y !== ""
      );
      _x(
        `Use of deprecated props in the button ${D.length > 0 ? `"${D.join(" ")}"` : "component"} detected, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-ui-and-props-for-button-and-iconbutton-components`
      );
    }
    return /* @__PURE__ */ k.createElement(
      Ix,
      {
        as: p,
        ref: d,
        variant: f,
        size: h,
        padding: a,
        disabled: o,
        active: s,
        animating: m,
        animation: t,
        onClick: g,
        ...c
      }
    );
  }
);
F1.displayName = "Button";
var Ix = I("button", {
  shouldForwardProp: /* @__PURE__ */ l((e) => C2(e), "shouldForwardProp")
})(({ theme: e, variant: t, size: r, disabled: n, active: a, animating: o, animation: s = "none", padding: u }) => ({
  border: 0,
  cursor: n ? "not-allowed" : "pointer",
  display: "inline-flex",
  gap: "6px",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  padding: u === "small" && r === "small" ? "0 7px" : u === "small" && r === "medium" ? "0 9px" : r === "small" ? "0 10px" : r === "medium" ? "0 12px" : 0,
  height: r === "small" ? "28px" : "32px",
  position: "relative",
  textAlign: "center",
  textDecoration: "none",
  transitionProperty: "background, box-shadow",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease-out",
  verticalAlign: "top",
  whiteSpace: "nowrap",
  userSelect: "none",
  opacity: n ? 0.5 : 1,
  margin: 0,
  fontSize: `${e.typography.size.s1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "1",
  background: t === "solid" ? e.color.secondary : t === "outline" ? e.button.background : t === "ghost" && a ? e.background.hoverable : "transparent",
  ...t === "ghost" ? {
    // This is a hack to apply bar styles to the button as soon as it is part of a bar
    // It is a temporary solution until we have implemented Theming 2.0.
    ".sb-bar &": {
      background: a ? Le(0.9, e.barTextColor) : "transparent",
      color: a ? e.barSelectedColor : e.barTextColor,
      "&:hover": {
        color: e.barHoverColor,
        background: Le(0.86, e.barHoverColor)
      },
      "&:active": {
        color: e.barSelectedColor,
        background: Le(0.9, e.barSelectedColor)
      },
      "&:focus": {
        boxShadow: `${Ca(e.barHoverColor, 1)} 0 0 0 1px inset`,
        outline: "none"
      }
    }
  } : {},
  color: t === "solid" ? e.color.lightest : t === "outline" ? e.input.color : t === "ghost" && a ? e.color.secondary : t === "ghost" ? e.color.mediumdark : e.input.color,
  boxShadow: t === "outline" ? `${e.button.border} 0 0 0 1px inset` : "none",
  borderRadius: e.input.borderRadius,
  // Making sure that the button never shrinks below its minimum size
  flexShrink: 0,
  "&:hover": {
    color: t === "ghost" ? e.color.secondary : void 0,
    background: (() => {
      let c = e.color.secondary;
      return t === "solid" && (c = e.color.secondary), t === "outline" && (c = e.button.background), t === "ghost" ? Le(0.86, e.color.secondary) : e.base === "light" ? Yr(0.02, c) : i2(0.03, c);
    })()
  },
  "&:active": {
    color: t === "ghost" ? e.color.secondary : void 0,
    background: (() => {
      let c = e.color.secondary;
      return t === "solid" && (c = e.color.secondary), t === "outline" && (c = e.button.background), t === "ghost" ? e.background.hoverable : e.base === "light" ? Yr(0.02, c) : i2(0.03, c);
    })()
  },
  "&:focus": {
    boxShadow: `${Ca(e.color.secondary, 1)} 0 0 0 1px inset`,
    outline: "none"
  },
  "> svg": {
    animation: o && s !== "none" ? `${e.animation[s]} 1000ms ease-out` : ""
  }
})), Nw = i.forwardRef(
  ({ padding: e = "small", variant: t = "ghost", ...r }, n) => /* @__PURE__ */ k.createElement(F1, { padding: e, variant: t, ref: n, ...r })
);
Nw.displayName = "IconButton";
var Pw = xa({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), Rx = xa({
  from: { maxHeight: 0 },
  to: {}
}), Lx = xa({
  from: {
    opacity: 0,
    transform: "translate(-50%, -50%) scale(0.9)"
  },
  to: {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
}), $w = I.div({
  backdropFilter: "blur(24px)",
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  zIndex: 10,
  animation: `${Pw} 200ms`
}), jw = I.div(
  ({ theme: e, width: t, height: r }) => ({
    backgroundColor: e.background.bar,
    borderRadius: 6,
    boxShadow: "0px 4px 67px 0px #00000040",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: t ?? 740,
    height: r ?? "auto",
    maxWidth: "calc(100% - 40px)",
    maxHeight: "85vh",
    overflow: "hidden",
    zIndex: 11,
    animation: `${Lx} 200ms`,
    "&:focus-visible": {
      outline: "none"
    }
  })
), Vw = /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(Hw, { asChild: !0 }, /* @__PURE__ */ k.createElement(Nw, { ...e }, /* @__PURE__ */ k.createElement(x7, null))), "CloseButton"), Tx = I.div({
  display: "flex",
  flexDirection: "column",
  margin: 16,
  gap: 16
}), qw = I.div({
  display: "flex",
  justifyContent: "space-between",
  gap: 16
}), Ww = I.div({
  display: "flex",
  flexDirection: "column",
  gap: 4
}), Mx = /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(qw, null, /* @__PURE__ */ k.createElement(Ww, { ...e }), /* @__PURE__ */ k.createElement(Vw, null)), "Header"), Hx = I(Tw)(({ theme: e }) => ({
  margin: 0,
  fontSize: e.typography.size.s3,
  fontWeight: e.typography.weight.bold
})), Ox = I(Mw)(({ theme: e }) => ({
  position: "relative",
  zIndex: 1,
  margin: 0,
  fontSize: e.typography.size.s2
})), Nx = I.div({
  display: "flex",
  flexDirection: "row-reverse",
  gap: 8
}), Uw = I.div(({ theme: e }) => ({
  maxHeight: 100,
  overflow: "auto",
  animation: `${Rx} 300ms, ${Pw} 300ms`,
  backgroundColor: e.background.critical,
  color: e.color.lightest,
  fontSize: e.typography.size.s2,
  "& > div": {
    position: "relative",
    padding: "8px 16px"
  }
})), Px = /* @__PURE__ */ l(({
  children: e,
  ...t
}) => /* @__PURE__ */ k.createElement(Uw, { ...t }, /* @__PURE__ */ k.createElement("div", null, e)), "Error");
function Gw({
  children: e,
  width: t,
  height: r,
  onEscapeKeyDown: n,
  onInteractOutside: a = /* @__PURE__ */ l((c) => c.preventDefault(), "onInteractOutside"),
  className: o,
  container: s,
  ...u
}) {
  return /* @__PURE__ */ k.createElement(_w, { ...u }, /* @__PURE__ */ k.createElement(Iw, { container: s }, /* @__PURE__ */ k.createElement(
    Rw,
    { asChild: !0 },
    /* @__PURE__ */ k.createElement($w, null)
  ), /* @__PURE__ */ k.createElement(
    Lw,
    {
      asChild: !0,
      onInteractOutside: a,
      onEscapeKeyDown: n
    },
    /* @__PURE__ */ k.createElement(jw, { className: o, width: t, height: r }, e)
  )));
}
l(Gw, "BaseModal");
Object.assign(Gw, Ow, { Dialog: A7 });
I.div(
  ({ theme: e, col: t, row: r = 1 }) => t ? {
    display: "inline-block",
    verticalAlign: "inherit",
    "& > *": {
      marginLeft: t * e.layoutMargin,
      verticalAlign: "inherit"
    },
    [`& > *:first-child${O1}`]: {
      marginLeft: 0
    }
  } : {
    "& > *": {
      marginTop: r * e.layoutMargin
    },
    [`& > *:first-child${O1}`]: {
      marginTop: 0
    }
  },
  ({ theme: e, outer: t, col: r, row: n }) => {
    switch (!0) {
      case !!(t && r):
        return {
          marginLeft: t * e.layoutMargin,
          marginRight: t * e.layoutMargin
        };
      case !!(t && n):
        return {
          marginTop: t * e.layoutMargin,
          marginBottom: t * e.layoutMargin
        };
      default:
        return {};
    }
  }
);
I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
}));
I.div();
I.div(({ theme: e }) => ({
  padding: 30,
  textAlign: "center",
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1
}));
cc();
function Zw(e, t) {
  var r = i.useRef(null), n = i.useRef(null);
  n.current = t;
  var a = i.useRef(null);
  i.useEffect(function() {
    o();
  });
  var o = i.useCallback(function() {
    var s = a.current, u = n.current, c = s || (u ? u instanceof Element ? u : u.current : null);
    r.current && r.current.element === c && r.current.subscriber === e || (r.current && r.current.cleanup && r.current.cleanup(), r.current = {
      element: c,
      subscriber: e,
      // Only calling the subscriber, if there's an actual element to report.
      // Setting cleanup to undefined unless a subscriber returns one, as an existing cleanup function would've been just called.
      cleanup: c ? e(c) : void 0
    });
  }, [e]);
  return i.useEffect(function() {
    return function() {
      r.current && r.current.cleanup && (r.current.cleanup(), r.current = null);
    };
  }, []), i.useCallback(function(s) {
    a.current = s, o();
  }, [o]);
}
l(Zw, "useResolvedElement");
function X0(e, t, r) {
  return e[t] ? e[t][0] ? e[t][0][r] : (
    // TS complains about this, because the RO entry type follows the spec and does not reflect Firefox's current
    // behaviour of returning objects instead of arrays for `borderBoxSize` and `contentBoxSize`.
    // @ts-ignore
    e[t][r]
  ) : t === "contentBoxSize" ? e.contentRect[r === "inlineSize" ? "width" : "height"] : void 0;
}
l(X0, "extractSize");
function B1(e) {
  e === void 0 && (e = {});
  var t = e.onResize, r = i.useRef(void 0);
  r.current = t;
  var n = e.round || Math.round, a = i.useRef(), o = i.useState({
    width: void 0,
    height: void 0
  }), s = o[0], u = o[1], c = i.useRef(!1);
  i.useEffect(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
  var d = i.useRef({
    width: void 0,
    height: void 0
  }), p = Zw(i.useCallback(function(f) {
    return (!a.current || a.current.box !== e.box || a.current.round !== n) && (a.current = {
      box: e.box,
      round: n,
      instance: new ResizeObserver(function(h) {
        var m = h[0], v = e.box === "border-box" ? "borderBoxSize" : e.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize", g = X0(m, v, "inlineSize"), D = X0(m, v, "blockSize"), y = g ? n(g) : void 0, E = D ? n(D) : void 0;
        if (d.current.width !== y || d.current.height !== E) {
          var w = {
            width: y,
            height: E
          };
          d.current.width = y, d.current.height = E, r.current ? r.current(w) : c.current || u(w);
        }
      })
    }), a.current.instance.observe(f, {
      box: e.box
    }), function() {
      a.current && a.current.instance.unobserve(f);
    };
  }, [e.box, n]), e.ref);
  return i.useMemo(function() {
    return {
      ref: p,
      width: s.width,
      height: s.height
    };
  }, [p, s.width, s.height]);
}
l(B1, "useResizeObserver");
var $x = I.div(
  ({ scale: e = 1, elementHeight: t }) => ({
    height: t || "auto",
    transformOrigin: "top left",
    transform: `scale(${1 / e})`
  })
);
function Yw({ scale: e, children: t }) {
  let r = i.useRef(null), [n, a] = i.useState(0), o = i.useCallback(
    ({ height: s }) => {
      s && a(s / e);
    },
    [e]
  );
  return i.useEffect(() => {
    r.current && a(r.current.getBoundingClientRect().height);
  }, [e]), B1({
    ref: r,
    onResize: o
  }), /* @__PURE__ */ k.createElement($x, { scale: e, elementHeight: n }, /* @__PURE__ */ k.createElement("div", { ref: r, className: "innerZoomElementWrapper" }, t));
}
l(Yw, "ZoomElement");
var Xw = class extends i.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { iFrameRef: t } = this.props;
    this.iframe = t.current;
  }
  shouldComponentUpdate(t) {
    let { scale: r, active: n } = this.props;
    return r !== t.scale && this.setIframeInnerZoom(t.scale), n !== t.active && this.iframe.setAttribute("data-is-storybook", t.active ? "true" : "false"), t.children.props.src !== this.props.children.props.src;
  }
  setIframeInnerZoom(t) {
    try {
      Object.assign(this.iframe.contentDocument.body.style, {
        width: `${t * 100}%`,
        height: `${t * 100}%`,
        transform: `scale(${1 / t})`,
        transformOrigin: "top left"
      });
    } catch {
      this.setIframeZoom(t);
    }
  }
  setIframeZoom(t) {
    Object.assign(this.iframe.style, {
      width: `${t * 100}%`,
      height: `${t * 100}%`,
      transform: `scale(${1 / t})`,
      transformOrigin: "top left"
    });
  }
  render() {
    let { children: t } = this.props;
    return /* @__PURE__ */ k.createElement(k.Fragment, null, t);
  }
};
l(Xw, "ZoomIFrame");
var jx = Xw, fA = {
  Element: Yw,
  IFrame: jx
};
ec();
var { document: Vx } = Ci, qx = I.strong(({ theme: e }) => ({
  color: e.color.orange
})), Wx = I.strong(({ theme: e }) => ({
  color: e.color.ancillary,
  textDecoration: "underline"
})), f2 = I.em(({ theme: e }) => ({
  color: e.textMutedColor
})), Ux = /(Error): (.*)\n/, Gx = /at (?:(.*) )?\(?(.+)\)?/, Zx = /([^@]+)?(?:\/<)?@(.+)?/, Yx = /([^@]+)?@(.+)?/, mA = /* @__PURE__ */ l(({
  error: e
}) => {
  if (!e)
    return /* @__PURE__ */ k.createElement(i.Fragment, null, "This error has no stack or message");
  if (!e.stack)
    return /* @__PURE__ */ k.createElement(i.Fragment, null, e.message || "This error has no stack or message");
  let t = e.stack.toString();
  t && e.message && !t.includes(e.message) && (t = `Error: ${e.message}

${t}`);
  let r = t.match(Ux);
  if (!r)
    return /* @__PURE__ */ k.createElement(i.Fragment, null, t);
  let [, n, a] = r, o = t.split(/\n/).slice(1), [, ...s] = o.map((u) => {
    let c = u.match(Gx) || u.match(Zx) || u.match(Yx);
    return c ? {
      name: (c[1] || "").replace("/<", ""),
      location: c[2].replace(Vx.location.origin, "")
    } : null;
  }).filter(Boolean);
  return /* @__PURE__ */ k.createElement(i.Fragment, null, /* @__PURE__ */ k.createElement("span", null, n), ": ", /* @__PURE__ */ k.createElement(
    qx,
    null,
    a
  ), /* @__PURE__ */ k.createElement("br", null), s.map(
    (u, c) => u?.name ? /* @__PURE__ */ k.createElement(i.Fragment, { key: c }, "  ", "at ", /* @__PURE__ */ k.createElement(Wx, null, u.name), " (", /* @__PURE__ */ k.createElement(f2, null, u.location), ")", /* @__PURE__ */ k.createElement("br", null)) : /* @__PURE__ */ k.createElement(
      i.Fragment,
      { key: c },
      "  ",
      "at ",
      /* @__PURE__ */ k.createElement(f2, null, u?.location),
      /* @__PURE__ */ k.createElement("br", null)
    )
  ));
}, "ErrorFormatter"), Xx = I.label(({ theme: e }) => ({
  display: "flex",
  borderBottom: `1px solid ${e.appBorderColor}`,
  margin: "0 15px",
  padding: "8px 0",
  "&:last-child": {
    marginBottom: "3rem"
  }
})), Kx = I.span(({ theme: e }) => ({
  minWidth: 100,
  fontWeight: e.typography.weight.bold,
  marginRight: 15,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  lineHeight: "16px"
})), Jx = /* @__PURE__ */ l(({ label: e, children: t, ...r }) => /* @__PURE__ */ k.createElement(Xx, { ...r }, e ? /* @__PURE__ */ k.createElement(
  Kx,
  null,
  /* @__PURE__ */ k.createElement("span", null, e)
) : null, t), "Field");
Xe();
tc();
var Qx = i.useLayoutEffect, eS = Qx, tS = /* @__PURE__ */ l(function(e) {
  var t = i.useRef(e);
  return eS(function() {
    t.current = e;
  }), t;
}, "useLatest"), m2 = /* @__PURE__ */ l(function(e, t) {
  if (typeof e == "function") {
    e(t);
    return;
  }
  e.current = t;
}, "updateRef"), rS = /* @__PURE__ */ l(function(e, t) {
  var r = i.useRef();
  return i.useCallback(function(n) {
    e.current = n, r.current && m2(r.current, null), r.current = t, t && m2(t, n);
  }, [t]);
}, "useComposedRef"), nS = rS, g2 = {
  "min-height": "0",
  "max-height": "none",
  height: "0",
  visibility: "hidden",
  overflow: "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
}, aS = /* @__PURE__ */ l(function(e) {
  Object.keys(g2).forEach(function(t) {
    e.style.setProperty(t, g2[t], "important");
  });
}, "forceHiddenStyles"), v2 = aS, ve = null, w2 = /* @__PURE__ */ l(function(e, t) {
  var r = e.scrollHeight;
  return t.sizingStyle.boxSizing === "border-box" ? r + t.borderSize : r - t.paddingSize;
}, "getHeight");
function Kw(e, t, r, n) {
  r === void 0 && (r = 1), n === void 0 && (n = 1 / 0), ve || (ve = document.createElement("textarea"), ve.setAttribute("tabindex", "-1"), ve.setAttribute("aria-hidden", "true"), v2(ve)), ve.parentNode === null && document.body.appendChild(ve);
  var a = e.paddingSize, o = e.borderSize, s = e.sizingStyle, u = s.boxSizing;
  Object.keys(s).forEach(function(h) {
    var m = h;
    ve.style[m] = s[m];
  }), v2(ve), ve.value = t;
  var c = w2(ve, e);
  ve.value = t, c = w2(ve, e), ve.value = "x";
  var d = ve.scrollHeight - a, p = d * r;
  u === "border-box" && (p = p + a + o), c = Math.max(p, c);
  var f = d * n;
  return u === "border-box" && (f = f + a + o), c = Math.min(f, c), [c, d];
}
l(Kw, "calculateNodeHeight");
var b2 = /* @__PURE__ */ l(function() {
}, "noop"), oS = /* @__PURE__ */ l(function(e, t) {
  return e.reduce(function(r, n) {
    return r[n] = t[n], r;
  }, {});
}, "pick"), iS = [
  "borderBottomWidth",
  "borderLeftWidth",
  "borderRightWidth",
  "borderTopWidth",
  "boxSizing",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
  "paddingBottom",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  // non-standard
  "tabSize",
  "textIndent",
  // non-standard
  "textRendering",
  "textTransform",
  "width",
  "wordBreak"
], lS = !!document.documentElement.currentStyle, sS = /* @__PURE__ */ l(function(e) {
  var t = window.getComputedStyle(e);
  if (t === null)
    return null;
  var r = oS(iS, t), n = r.boxSizing;
  if (n === "")
    return null;
  lS && n === "border-box" && (r.width = parseFloat(r.width) + parseFloat(r.borderRightWidth) + parseFloat(r.borderLeftWidth) + parseFloat(r.paddingRight) + parseFloat(r.paddingLeft) + "px");
  var a = parseFloat(r.paddingBottom) + parseFloat(r.paddingTop), o = parseFloat(r.borderBottomWidth) + parseFloat(r.borderTopWidth);
  return {
    sizingStyle: r,
    paddingSize: a,
    borderSize: o
  };
}, "getSizingData"), uS = sS;
function z1(e, t, r) {
  var n = tS(r);
  i.useLayoutEffect(function() {
    var a = /* @__PURE__ */ l(function(o) {
      return n.current(o);
    }, "handler");
    if (e)
      return e.addEventListener(t, a), function() {
        return e.removeEventListener(t, a);
      };
  }, []);
}
l(z1, "useListener");
var cS = /* @__PURE__ */ l(function(e) {
  z1(window, "resize", e);
}, "useWindowResizeListener"), dS = /* @__PURE__ */ l(function(e) {
  z1(document.fonts, "loadingdone", e);
}, "useFontsLoadedListener"), pS = ["cacheMeasurements", "maxRows", "minRows", "onChange", "onHeightChange"], hS = /* @__PURE__ */ l(function(e, t) {
  var r = e.cacheMeasurements, n = e.maxRows, a = e.minRows, o = e.onChange, s = o === void 0 ? b2 : o, u = e.onHeightChange, c = u === void 0 ? b2 : u, d = Si(e, pS), p = d.value !== void 0, f = i.useRef(null), h = nS(f, t), m = i.useRef(0), v = i.useRef(), g = /* @__PURE__ */ l(
    function() {
      var y = f.current, E = r && v.current ? v.current : uS(y);
      if (E) {
        v.current = E;
        var w = Kw(E, y.value || y.placeholder || "x", a, n), b = w[0], C = w[1];
        m.current !== b && (m.current = b, y.style.setProperty("height", b + "px", "important"), c(b, {
          rowHeight: C
        }));
      }
    },
    "resizeTextarea"
  ), D = /* @__PURE__ */ l(function(y) {
    p || g(), s(y);
  }, "handleChange");
  return i.useLayoutEffect(g), cS(g), dS(g), /* @__PURE__ */ i.createElement("textarea", U({}, d, {
    onChange: D,
    ref: h
  }));
}, "TextareaAutosize"), fS = /* @__PURE__ */ i.forwardRef(hS), mS = {
  // resets
  appearance: "none",
  border: "0 none",
  boxSizing: "inherit",
  display: " block",
  margin: " 0",
  background: "transparent",
  padding: 0,
  fontSize: "inherit",
  position: "relative"
}, _1 = /* @__PURE__ */ l(({ theme: e }) => ({
  ...mS,
  transition: "box-shadow 200ms ease-out, opacity 200ms ease-out",
  color: e.input.color || "inherit",
  background: e.input.background,
  boxShadow: `${e.input.border} 0 0 0 1px inset`,
  borderRadius: e.input.borderRadius,
  fontSize: e.typography.size.s2 - 1,
  lineHeight: "20px",
  padding: "6px 10px",
  // 32
  boxSizing: "border-box",
  height: 32,
  '&[type="file"]': {
    height: "auto"
  },
  "&:focus": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    outline: "none"
  },
  "&[disabled]": {
    cursor: "not-allowed",
    opacity: 0.5
  },
  "&:-webkit-autofill": { WebkitBoxShadow: `0 0 0 3em ${e.color.lightest} inset` },
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  }
}), "styles"), I1 = /* @__PURE__ */ l(({ size: e }) => {
  switch (e) {
    case "100%":
      return { width: "100%" };
    case "flex":
      return { flex: 1 };
    case "auto":
    default:
      return { display: "inline" };
  }
}, "sizes"), Jw = /* @__PURE__ */ l(({
  align: e
}) => {
  switch (e) {
    case "end":
      return { textAlign: "right" };
    case "center":
      return { textAlign: "center" };
    case "start":
    default:
      return { textAlign: "left" };
  }
}, "alignment"), R1 = /* @__PURE__ */ l(({ valid: e, theme: t }) => {
  switch (e) {
    case "valid":
      return { boxShadow: `${t.color.positive} 0 0 0 1px inset !important` };
    case "error":
      return { boxShadow: `${t.color.negative} 0 0 0 1px inset !important` };
    case "warn":
      return {
        boxShadow: `${t.color.warning} 0 0 0 1px inset`
      };
    case void 0:
    case null:
    default:
      return {};
  }
}, "validation"), gS = Object.assign(
  I(
    i.forwardRef(/* @__PURE__ */ l(function({ size: e, valid: t, align: r, ...n }, a) {
      return /* @__PURE__ */ k.createElement("input", { ...n, ref: a });
    }, "Input"))
  )(_1, I1, Jw, R1, {
    minHeight: 32
  }),
  {
    displayName: "Input"
  }
), vS = Object.assign(
  I(
    i.forwardRef(/* @__PURE__ */ l(function({ size: e, valid: t, align: r, ...n }, a) {
      return /* @__PURE__ */ k.createElement("select", { ...n, ref: a });
    }, "Select"))
  )(_1, I1, R1, {
    height: 32,
    userSelect: "none",
    paddingRight: 20,
    appearance: "menulist"
  }),
  {
    displayName: "Select"
  }
), wS = Object.assign(
  I(
    i.forwardRef(/* @__PURE__ */ l(function({ size: e, valid: t, align: r, ...n }, a) {
      return /* @__PURE__ */ k.createElement(fS, { ...n, ref: a });
    }, "Textarea"))
  )(_1, I1, Jw, R1, ({ height: e = 400 }) => ({
    overflow: "visible",
    maxHeight: e
  })),
  {
    displayName: "Textarea"
  }
), gA = Object.assign(
  I.form({
    boxSizing: "border-box",
    width: "100%"
  }),
  {
    Field: Jx,
    Input: gS,
    Select: vS,
    Textarea: wS,
    Button: F1
  }
), bS = i.lazy(
  () => Promise.resolve().then(() => (D1(), b1)).then((e) => ({ default: e.WithTooltip }))
), vA = /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(i.Suspense, { fallback: /* @__PURE__ */ k.createElement("div", null) }, /* @__PURE__ */ k.createElement(bS, { ...e })), "WithTooltip"), DS = i.lazy(
  () => Promise.resolve().then(() => (D1(), b1)).then((e) => ({ default: e.WithTooltipPure }))
), wA = /* @__PURE__ */ l((e) => /* @__PURE__ */ k.createElement(i.Suspense, { fallback: /* @__PURE__ */ k.createElement("div", null) }, /* @__PURE__ */ k.createElement(DS, { ...e })), "WithTooltipPure");
I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
}));
I.span();
I.div(({ theme: e }) => ({
  marginTop: 8,
  textAlign: "center",
  "> *": {
    margin: "0 8px",
    fontWeight: e.typography.weight.bold
  }
}));
I.div(({ theme: e }) => ({
  color: e.color.defaultText,
  lineHeight: "18px"
}));
I.div({
  padding: 15,
  width: 280,
  boxSizing: "border-box"
});
var yS = I.div(({ theme: e }) => ({
  padding: "2px 6px",
  lineHeight: "16px",
  fontSize: 10,
  fontWeight: e.typography.weight.bold,
  color: e.color.lightest,
  boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
  borderRadius: 4,
  whiteSpace: "nowrap",
  pointerEvents: "none",
  zIndex: -1,
  background: e.base === "light" ? "rgba(60, 60, 60, 0.9)" : "rgba(0, 0, 0, 0.95)",
  margin: 6
})), bA = /* @__PURE__ */ l(({ note: e, ...t }) => /* @__PURE__ */ k.createElement(yS, { ...t }, e), "TooltipNote"), ES = ce(xi(), 1), CS = I(({ active: e, loading: t, disabled: r, ...n }) => /* @__PURE__ */ k.createElement("span", { ...n }))(
  ({ theme: e }) => ({
    color: e.color.defaultText,
    // Previously was theme.typography.weight.normal but this weight does not exists in Theme
    fontWeight: e.typography.weight.regular
  }),
  ({ active: e, theme: t }) => e ? {
    color: t.color.secondary,
    fontWeight: t.typography.weight.bold
  } : {},
  ({ loading: e, theme: t }) => e ? {
    display: "inline-block",
    flex: "none",
    ...t.animation.inlineGlow
  } : {},
  ({ disabled: e, theme: t }) => e ? {
    color: Le(0.7, t.color.defaultText)
  } : {}
), xS = I.span({
  display: "flex",
  "& svg": {
    height: 12,
    width: 12,
    margin: "3px 0",
    verticalAlign: "top"
  },
  "& path": {
    fill: "inherit"
  }
}), SS = I.span(
  {
    flex: 1,
    textAlign: "left",
    display: "flex",
    flexDirection: "column"
  },
  ({ isIndented: e }) => e ? { marginLeft: 24 } : {}
), AS = I.span(
  ({ theme: e }) => ({
    fontSize: "11px",
    lineHeight: "14px"
  }),
  ({ active: e, theme: t }) => e ? {
    color: t.color.secondary
  } : {},
  ({ theme: e, disabled: t }) => t ? {
    color: e.textMutedColor
  } : {}
), kS = I.span(
  ({ active: e, theme: t }) => e ? {
    color: t.color.secondary
  } : {},
  () => ({
    display: "flex",
    maxWidth: 14
  })
), FS = I.div(
  ({ theme: e }) => ({
    width: "100%",
    border: "none",
    background: "none",
    fontSize: e.typography.size.s1,
    transition: "all 150ms ease-out",
    color: e.color.dark,
    textDecoration: "none",
    justifyContent: "space-between",
    lineHeight: "18px",
    padding: "7px 10px",
    display: "flex",
    alignItems: "center",
    "& > * + *": {
      paddingLeft: 10
    }
  }),
  ({ theme: e, href: t, onClick: r }) => (t || r) && {
    cursor: "pointer",
    "&:hover": {
      background: e.background.hoverable
    },
    "&:hover svg": {
      opacity: 1
    }
  },
  ({ disabled: e }) => e && { cursor: "not-allowed" }
), BS = (0, ES.default)(100)((e, t, r) => ({
  ...e && {
    as: "button",
    onClick: e
  },
  ...t && {
    as: "a",
    href: t,
    ...r && {
      as: r,
      to: t
    }
  }
})), zS = /* @__PURE__ */ l(({
  loading: e = !1,
  title: t = /* @__PURE__ */ k.createElement("span", null, "Loading state"),
  center: r = null,
  right: n = null,
  active: a = !1,
  disabled: o = !1,
  isIndented: s,
  href: u = void 0,
  onClick: c = void 0,
  icon: d,
  LinkWrapper: p = void 0,
  ...f
}) => {
  let h = { active: a, disabled: o }, m = BS(c, u, p);
  return /* @__PURE__ */ k.createElement(FS, { ...f, ...h, ...m }, /* @__PURE__ */ k.createElement(k.Fragment, null, d && /* @__PURE__ */ k.createElement(kS, { ...h }, d), t || r ? /* @__PURE__ */ k.createElement(SS, { isIndented: !!(!d && s) }, t && /* @__PURE__ */ k.createElement(
    CS,
    { ...h, loading: e },
    t
  ), r && /* @__PURE__ */ k.createElement(AS, { ...h }, r)) : null, n && /* @__PURE__ */ k.createElement(
    xS,
    { ...h },
    n
  )));
}, "ListItem"), _S = zS, IS = I.div(
  {
    minWidth: 180,
    overflow: "hidden",
    overflowY: "auto",
    maxHeight: 15.5 * 32
    // 11.5 items
  },
  ({ theme: e }) => ({
    borderRadius: e.appBorderRadius
  })
), RS = /* @__PURE__ */ l(({ id: e, onClick: t, ...r }) => {
  let { active: n, disabled: a, title: o, href: s } = r, u = i.useCallback(
    (c) => t?.(c, { id: e, active: n, disabled: a, title: o, href: s }),
    [t, e, n, a, o, s]
  );
  return /* @__PURE__ */ k.createElement(_S, { id: `list-item-${e}`, ...r, ...t && { onClick: u } });
}, "Item"), LS = /* @__PURE__ */ l(({ links: e, LinkWrapper: t, ...r }) => {
  let n = e.some((a) => a.icon);
  return /* @__PURE__ */ k.createElement(IS, { ...r }, e.map((a) => /* @__PURE__ */ k.createElement(RS, {
    key: a.id,
    isIndented: n,
    LinkWrapper: t,
    ...a
  })));
}, "TooltipLinkList");
cc();
var K0 = I.div(
  {
    display: "flex",
    whiteSpace: "nowrap",
    flexBasis: "auto",
    marginLeft: 3,
    marginRight: 3
  },
  ({ scrollable: e }) => e ? { flexShrink: 0 } : {},
  ({ left: e }) => e ? {
    "& > *": {
      marginLeft: 4
    }
  } : {},
  ({ right: e }) => e ? {
    marginLeft: 30,
    "& > *": {
      marginRight: 4
    }
  } : {}
);
K0.displayName = "Side";
var TS = /* @__PURE__ */ l(({ children: e, className: t, scrollable: r }) => r ? /* @__PURE__ */ k.createElement(
  Vo,
  { vertical: !1, className: t },
  e
) : /* @__PURE__ */ k.createElement("div", { className: t }, e), "UnstyledBar"), Qw = I(TS)(
  ({ theme: e, scrollable: t = !0 }) => ({
    color: e.barTextColor,
    width: "100%",
    height: 40,
    flexShrink: 0,
    overflow: t ? "auto" : "hidden",
    overflowY: "hidden"
  }),
  ({ theme: e, border: t = !1 }) => t ? {
    boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
    background: e.barBg
  } : {}
);
Qw.displayName = "Bar";
var MS = I.div(({ bgColor: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  backgroundColor: e || ""
})), e6 = /* @__PURE__ */ l(({ children: e, backgroundColor: t, className: r, ...n }) => {
  let [a, o] = i.Children.toArray(e);
  return /* @__PURE__ */ k.createElement(Qw, { className: `sb-bar ${r}`, ...n }, /* @__PURE__ */ k.createElement(MS, { bgColor: t }, /* @__PURE__ */ k.createElement(K0, { scrollable: n.scrollable, left: !0 }, a), o ? /* @__PURE__ */ k.createElement(K0, { right: !0 }, o) : null));
}, "FlexBar");
e6.displayName = "FlexBar";
var HS = /* @__PURE__ */ l((e) => typeof e.props.href == "string", "isLink"), OS = /* @__PURE__ */ l(
  (e) => typeof e.props.href != "string",
  "isButton"
);
function t6({ children: e, ...t }, r) {
  let n = { props: t, ref: r };
  if (HS(n))
    return /* @__PURE__ */ k.createElement("a", { ref: n.ref, ...n.props }, e);
  if (OS(n))
    return /* @__PURE__ */ k.createElement("button", { ref: n.ref, type: "button", ...n.props }, e);
  throw new Error("invalid props");
}
l(t6, "ForwardRefFunction");
var r6 = i.forwardRef(t6);
r6.displayName = "ButtonOrLink";
var ul = I(r6, { shouldForwardProp: C2 })(
  {
    whiteSpace: "normal",
    display: "inline-flex",
    overflow: "hidden",
    verticalAlign: "top",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    textDecoration: "none",
    "&:empty": {
      display: "none"
    },
    "&[hidden]": {
      display: "none"
    }
  },
  ({ theme: e }) => ({
    padding: "0 15px",
    transition: "color 0.2s linear, border-bottom-color 0.2s linear",
    height: 40,
    lineHeight: "12px",
    cursor: "pointer",
    background: "transparent",
    border: "0 solid transparent",
    borderTop: "3px solid transparent",
    borderBottom: "3px solid transparent",
    fontWeight: "bold",
    fontSize: 13,
    "&:focus": {
      outline: "0 none",
      borderBottomColor: e.barSelectedColor
    }
  }),
  ({ active: e, textColor: t, theme: r }) => e ? {
    color: t || r.barSelectedColor,
    borderBottomColor: r.barSelectedColor
  } : {
    color: t || r.barTextColor,
    borderBottomColor: "transparent",
    "&:hover": {
      color: r.barHoverColor
    }
  }
);
ul.displayName = "TabButton";
I.div(({ theme: e }) => ({
  width: 14,
  height: 14,
  backgroundColor: e.appBorderColor,
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
}));
I.div(() => ({
  marginTop: 6,
  padding: 7,
  height: 28
}));
var NS = I.div(({ theme: e }) => ({
  height: "100%",
  display: "flex",
  padding: 30,
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 15,
  background: e.background.content
})), PS = I.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  maxWidth: 415
}), $S = I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2 - 1,
  textAlign: "center",
  color: e.textColor
})), jS = I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2 - 1,
  textAlign: "center",
  color: e.textMutedColor
})), VS = /* @__PURE__ */ l(({ title: e, description: t, footer: r }) => /* @__PURE__ */ k.createElement(NS, null, /* @__PURE__ */ k.createElement(
  PS,
  null,
  /* @__PURE__ */ k.createElement($S, null, e),
  t && /* @__PURE__ */ k.createElement(jS, null, t)
), r), "EmptyTabContent"), qS = I.div(
  ({ active: e }) => e ? { display: "block" } : { display: "none" }
), WS = /* @__PURE__ */ l((e) => i.Children.toArray(e).map(
  // @ts-expect-error (non strict)
  ({
    props: { title: t, id: r, color: n, children: a }
  }) => {
    let o = Array.isArray(
      a
    ) ? a[0] : a;
    return {
      title: t,
      id: r,
      ...n ? { color: n } : {},
      render: typeof o == "function" ? o : ({ active: s }) => /* @__PURE__ */ k.createElement(qS, { active: s, role: "tabpanel" }, o)
    };
  }
), "childrenToList");
D1();
var US = I.span(({ theme: e, isActive: t }) => ({
  display: "inline-block",
  width: 0,
  height: 0,
  marginLeft: 8,
  color: t ? e.color.secondary : e.color.mediumdark,
  borderRight: "3px solid transparent",
  borderLeft: "3px solid transparent",
  borderTop: "3px solid",
  transition: "transform .1s ease-out"
})), GS = I(ul)(({ active: e, theme: t, preActive: r }) => `
    color: ${r || e ? t.barSelectedColor : t.barTextColor};
    .addon-collapsible-icon {
      color: ${r || e ? t.barSelectedColor : t.barTextColor};
    }
    &:hover {
      color: ${t.barHoverColor};
      .addon-collapsible-icon {
        color: ${t.barHoverColor};
      }
    }
  `);
function n6(e) {
  let t = i.useRef(), r = i.useRef(), n = i.useRef(/* @__PURE__ */ new Map()), { width: a = 1 } = B1({
    // @ts-expect-error (non strict)
    ref: t
  }), [o, s] = i.useState(e), [u, c] = i.useState([]), d = i.useRef(e), p = i.useCallback(
    ({
      menuName: h,
      actions: m
    }) => {
      let v = u.some(({ active: y }) => y), [g, D] = i.useState(!1);
      return /* @__PURE__ */ k.createElement(k.Fragment, null, /* @__PURE__ */ k.createElement(
        vi,
        {
          interactive: !0,
          visible: g,
          onVisibleChange: D,
          placement: "bottom",
          delayHide: 100,
          tooltip: /* @__PURE__ */ k.createElement(
            LS,
            {
              links: u.map(({ title: y, id: E, color: w, active: b }) => ({
                id: E,
                title: y,
                color: w,
                active: b,
                onClick: /* @__PURE__ */ l((C) => {
                  C.preventDefault(), m.onSelect(E);
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ k.createElement(
          GS,
          {
            ref: r,
            active: v,
            preActive: g,
            style: { visibility: u.length ? "visible" : "hidden" },
            "aria-hidden": !u.length,
            className: "tabbutton",
            type: "button",
            role: "tab"
          },
          h,
          /* @__PURE__ */ k.createElement(
            US,
            {
              className: "addon-collapsible-icon",
              isActive: v || g
            }
          )
        )
      ), u.map(({ title: y, id: E, color: w }, b) => {
        let C = `index-${b}`;
        return /* @__PURE__ */ k.createElement(
          ul,
          {
            id: `tabbutton-${S2(E) ?? C}`,
            style: { visibility: "hidden" },
            "aria-hidden": !0,
            tabIndex: -1,
            ref: (S) => {
              n.current.set(E, S);
            },
            className: "tabbutton",
            type: "button",
            key: E,
            textColor: w,
            role: "tab"
          },
          y
        );
      }));
    },
    [u]
  ), f = i.useCallback(() => {
    if (!t.current || !r.current)
      return;
    let { x: h, width: m } = t.current.getBoundingClientRect(), { width: v } = r.current.getBoundingClientRect(), g = u.length ? h + m - v : h + m, D = [], y = 0, E = e.filter((w) => {
      let { id: b } = w, C = n.current.get(b), { width: S = 0 } = C?.getBoundingClientRect() || {}, A = h + y + S > g;
      return (!A || !C) && D.push(w), y += S, A;
    });
    (D.length !== o.length || d.current !== e) && (s(D), c(E), d.current = e);
  }, [u.length, e, o]);
  return i.useLayoutEffect(f, [f, a]), {
    tabRefs: n,
    addonsRef: r,
    tabBarRef: t,
    visibleList: o,
    invisibleList: u,
    AddonTab: p
  };
}
l(n6, "useList");
var ZS = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */", YS = I.div(
  ({ theme: e, bordered: t }) => t ? {
    backgroundClip: "padding-box",
    border: `1px solid ${e.appBorderColor}`,
    borderRadius: e.appBorderRadius,
    overflow: "hidden",
    boxSizing: "border-box"
  } : {},
  ({ absolute: e }) => e ? {
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column"
  } : {
    display: "block"
  }
), a6 = I.div({
  overflow: "hidden",
  "&:first-of-type": {
    marginLeft: -3
  },
  whiteSpace: "nowrap",
  flexGrow: 1
});
a6.displayName = "TabBar";
var XS = I.div(
  {
    display: "block",
    position: "relative"
  },
  ({ theme: e }) => ({
    fontSize: e.typography.size.s2 - 1,
    background: e.background.content
  }),
  ({ bordered: e, theme: t }) => e ? {
    borderRadius: `0 0 ${t.appBorderRadius - 1}px ${t.appBorderRadius - 1}px`
  } : {},
  ({ absolute: e, bordered: t }) => e ? {
    height: `calc(100% - ${t ? 42 : 40}px)`,
    position: "absolute",
    left: 0 + (t ? 1 : 0),
    right: 0 + (t ? 1 : 0),
    bottom: 0 + (t ? 1 : 0),
    top: 40 + (t ? 1 : 0),
    overflow: "auto",
    [`& > *:first-child${ZS}`]: {
      position: "absolute",
      left: 0 + (t ? 1 : 0),
      right: 0 + (t ? 1 : 0),
      bottom: 0 + (t ? 1 : 0),
      top: 0 + (t ? 1 : 0),
      height: `calc(100% - ${t ? 2 : 0}px)`,
      overflow: "auto"
    }
  } : {}
), o6 = i.memo(
  ({
    children: e,
    selected: t = null,
    actions: r,
    absolute: n = !1,
    bordered: a = !1,
    tools: o = null,
    backgroundColor: s,
    id: u = null,
    menuName: c = "Tabs",
    emptyState: d,
    showToolsWhenEmpty: p
  }) => {
    let f = i.useMemo(
      () => WS(e).map((y, E) => ({
        ...y,
        active: t ? y.id === t : E === 0
      })),
      [e, t]
    ), { visibleList: h, tabBarRef: m, tabRefs: v, AddonTab: g } = n6(f), D = d ?? /* @__PURE__ */ k.createElement(VS, { title: "Nothing found" });
    return !p && f.length === 0 ? D : (
      // @ts-expect-error (non strict)
      /* @__PURE__ */ k.createElement(YS, { absolute: n, bordered: a, id: u }, /* @__PURE__ */ k.createElement(e6, {
        scrollable: !1,
        border: !0,
        backgroundColor: s
      }, /* @__PURE__ */ k.createElement(a6, { style: { whiteSpace: "normal" }, ref: m, role: "tablist" }, h.map(({
        title: y,
        id: E,
        active: w,
        color: b
      }, C) => {
        let S = `index-${C}`;
        return /* @__PURE__ */ k.createElement(
          ul,
          {
            id: `tabbutton-${S2(E) ?? S}`,
            ref: (A) => {
              v.current.set(E, A);
            },
            className: `tabbutton ${w ? "tabbutton-active" : ""}`,
            type: "button",
            key: E,
            active: w,
            textColor: b,
            onClick: (A) => {
              A.preventDefault(), r.onSelect(E);
            },
            role: "tab"
          },
          typeof y == "function" ? /* @__PURE__ */ k.createElement("title", null) : y
        );
      }), /* @__PURE__ */ k.createElement(g, { menuName: c, actions: r })), o), /* @__PURE__ */ k.createElement(XS, { id: "panel-tab-content", bordered: a, absolute: n }, f.length ? f.map(({ id: y, active: E, render: w }) => k.createElement(w, { key: y, active: E }, null)) : D))
    );
  }
);
o6.displayName = "Tabs";
var J0 = class extends i.Component {
  constructor(t) {
    super(t), this.handlers = {
      onSelect: /* @__PURE__ */ l((r) => this.setState({ selected: r }), "onSelect")
    }, this.state = {
      selected: t.initial
    };
  }
  render() {
    let { bordered: t = !1, absolute: r = !1, children: n, backgroundColor: a, menuName: o } = this.props, { selected: s } = this.state;
    return /* @__PURE__ */ k.createElement(
      o6,
      {
        bordered: t,
        absolute: r,
        selected: s,
        backgroundColor: a,
        menuName: o,
        actions: this.handlers
      },
      n
    );
  }
};
l(J0, "TabsState"), J0.defaultProps = {
  children: [],
  // @ts-expect-error (non strict)
  initial: null,
  absolute: !1,
  bordered: !1,
  backgroundColor: "",
  // @ts-expect-error (non strict)
  menuName: void 0
};
var yA = J0, KS = I.span(
  ({ theme: e }) => ({
    width: 1,
    height: 20,
    background: e.appBorderColor,
    marginLeft: 2,
    marginRight: 2
  }),
  ({ force: e }) => e ? {} : {
    "& + &": {
      display: "none"
    }
  }
);
KS.displayName = "Separator";
__STORYBOOK_MODULE_CLIENT_LOGGER__;
var JS = I.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`;
i.memo(/* @__PURE__ */ l(function({ icons: e = Object.keys(D2) }) {
  return /* @__PURE__ */ k.createElement(
    JS,
    {
      viewBox: "0 0 14 14",
      style: { position: "absolute", width: 0, height: 0 },
      "data-chromatic": "ignore"
    },
    e.map((t) => /* @__PURE__ */ k.createElement("symbol", { id: `icon--${t}`, key: t }, D2[t]))
  );
}, "Symbols"));
var D2 = {
  user: "UserIcon",
  useralt: "UserAltIcon",
  useradd: "UserAddIcon",
  users: "UsersIcon",
  profile: "ProfileIcon",
  facehappy: "FaceHappyIcon",
  faceneutral: "FaceNeutralIcon",
  facesad: "FaceSadIcon",
  accessibility: "AccessibilityIcon",
  accessibilityalt: "AccessibilityAltIcon",
  arrowup: "ChevronUpIcon",
  arrowdown: "ChevronDownIcon",
  arrowleft: "ChevronLeftIcon",
  arrowright: "ChevronRightIcon",
  arrowupalt: "ArrowUpIcon",
  arrowdownalt: "ArrowDownIcon",
  arrowleftalt: "ArrowLeftIcon",
  arrowrightalt: "ArrowRightIcon",
  expandalt: "ExpandAltIcon",
  collapse: "CollapseIcon",
  expand: "ExpandIcon",
  unfold: "UnfoldIcon",
  transfer: "TransferIcon",
  redirect: "RedirectIcon",
  undo: "UndoIcon",
  reply: "ReplyIcon",
  sync: "SyncIcon",
  upload: "UploadIcon",
  download: "DownloadIcon",
  back: "BackIcon",
  proceed: "ProceedIcon",
  refresh: "RefreshIcon",
  globe: "GlobeIcon",
  compass: "CompassIcon",
  location: "LocationIcon",
  pin: "PinIcon",
  time: "TimeIcon",
  dashboard: "DashboardIcon",
  timer: "TimerIcon",
  home: "HomeIcon",
  admin: "AdminIcon",
  info: "InfoIcon",
  question: "QuestionIcon",
  support: "SupportIcon",
  alert: "AlertIcon",
  email: "EmailIcon",
  phone: "PhoneIcon",
  link: "LinkIcon",
  unlink: "LinkBrokenIcon",
  bell: "BellIcon",
  rss: "RSSIcon",
  sharealt: "ShareAltIcon",
  share: "ShareIcon",
  circle: "CircleIcon",
  circlehollow: "CircleHollowIcon",
  bookmarkhollow: "BookmarkHollowIcon",
  bookmark: "BookmarkIcon",
  hearthollow: "HeartHollowIcon",
  heart: "HeartIcon",
  starhollow: "StarHollowIcon",
  star: "StarIcon",
  certificate: "CertificateIcon",
  verified: "VerifiedIcon",
  thumbsup: "ThumbsUpIcon",
  shield: "ShieldIcon",
  basket: "BasketIcon",
  beaker: "BeakerIcon",
  hourglass: "HourglassIcon",
  flag: "FlagIcon",
  cloudhollow: "CloudHollowIcon",
  edit: "EditIcon",
  cog: "CogIcon",
  nut: "NutIcon",
  wrench: "WrenchIcon",
  ellipsis: "EllipsisIcon",
  check: "CheckIcon",
  form: "FormIcon",
  batchdeny: "BatchDenyIcon",
  batchaccept: "BatchAcceptIcon",
  controls: "ControlsIcon",
  plus: "PlusIcon",
  closeAlt: "CloseAltIcon",
  cross: "CrossIcon",
  trash: "TrashIcon",
  pinalt: "PinAltIcon",
  unpin: "UnpinIcon",
  add: "AddIcon",
  subtract: "SubtractIcon",
  close: "CloseIcon",
  delete: "DeleteIcon",
  passed: "PassedIcon",
  changed: "ChangedIcon",
  failed: "FailedIcon",
  clear: "ClearIcon",
  comment: "CommentIcon",
  commentadd: "CommentAddIcon",
  requestchange: "RequestChangeIcon",
  comments: "CommentsIcon",
  lock: "LockIcon",
  unlock: "UnlockIcon",
  key: "KeyIcon",
  outbox: "OutboxIcon",
  credit: "CreditIcon",
  button: "ButtonIcon",
  type: "TypeIcon",
  pointerdefault: "PointerDefaultIcon",
  pointerhand: "PointerHandIcon",
  browser: "BrowserIcon",
  tablet: "TabletIcon",
  mobile: "MobileIcon",
  watch: "WatchIcon",
  sidebar: "SidebarIcon",
  sidebaralt: "SidebarAltIcon",
  sidebaralttoggle: "SidebarAltToggleIcon",
  sidebartoggle: "SidebarToggleIcon",
  bottombar: "BottomBarIcon",
  bottombartoggle: "BottomBarToggleIcon",
  cpu: "CPUIcon",
  database: "DatabaseIcon",
  memory: "MemoryIcon",
  structure: "StructureIcon",
  box: "BoxIcon",
  power: "PowerIcon",
  photo: "PhotoIcon",
  component: "ComponentIcon",
  grid: "GridIcon",
  outline: "OutlineIcon",
  photodrag: "PhotoDragIcon",
  search: "SearchIcon",
  zoom: "ZoomIcon",
  zoomout: "ZoomOutIcon",
  zoomreset: "ZoomResetIcon",
  eye: "EyeIcon",
  eyeclose: "EyeCloseIcon",
  lightning: "LightningIcon",
  lightningoff: "LightningOffIcon",
  contrast: "ContrastIcon",
  switchalt: "SwitchAltIcon",
  mirror: "MirrorIcon",
  grow: "GrowIcon",
  paintbrush: "PaintBrushIcon",
  ruler: "RulerIcon",
  stop: "StopIcon",
  camera: "CameraIcon",
  video: "VideoIcon",
  speaker: "SpeakerIcon",
  play: "PlayIcon",
  playback: "PlayBackIcon",
  playnext: "PlayNextIcon",
  rewind: "RewindIcon",
  fastforward: "FastForwardIcon",
  stopalt: "StopAltIcon",
  sidebyside: "SideBySideIcon",
  stacked: "StackedIcon",
  sun: "SunIcon",
  moon: "MoonIcon",
  book: "BookIcon",
  document: "DocumentIcon",
  copy: "CopyIcon",
  category: "CategoryIcon",
  folder: "FolderIcon",
  print: "PrintIcon",
  graphline: "GraphLineIcon",
  calendar: "CalendarIcon",
  graphbar: "GraphBarIcon",
  menu: "MenuIcon",
  menualt: "MenuIcon",
  filter: "FilterIcon",
  docchart: "DocChartIcon",
  doclist: "DocListIcon",
  markup: "MarkupIcon",
  bold: "BoldIcon",
  paperclip: "PaperClipIcon",
  listordered: "ListOrderedIcon",
  listunordered: "ListUnorderedIcon",
  paragraph: "ParagraphIcon",
  markdown: "MarkdownIcon",
  repository: "RepoIcon",
  commit: "CommitIcon",
  branch: "BranchIcon",
  pullrequest: "PullRequestIcon",
  merge: "MergeIcon",
  apple: "AppleIcon",
  linux: "LinuxIcon",
  ubuntu: "UbuntuIcon",
  windows: "WindowsIcon",
  storybook: "StorybookIcon",
  azuredevops: "AzureDevOpsIcon",
  bitbucket: "BitbucketIcon",
  chrome: "ChromeIcon",
  chromatic: "ChromaticIcon",
  componentdriven: "ComponentDrivenIcon",
  discord: "DiscordIcon",
  facebook: "FacebookIcon",
  figma: "FigmaIcon",
  gdrive: "GDriveIcon",
  github: "GithubIcon",
  gitlab: "GitlabIcon",
  google: "GoogleIcon",
  graphql: "GraphqlIcon",
  medium: "MediumIcon",
  redux: "ReduxIcon",
  twitter: "TwitterIcon",
  youtube: "YoutubeIcon",
  vscode: "VSCodeIcon"
}, QS = xa`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`, eA = I.div(({ size: e = 32 }) => ({
  borderRadius: "50%",
  cursor: "progress",
  display: "inline-block",
  overflow: "hidden",
  position: "absolute",
  transition: "all 200ms ease-out",
  verticalAlign: "top",
  top: "50%",
  left: "50%",
  marginTop: -(e / 2),
  marginLeft: -(e / 2),
  height: e,
  width: e,
  zIndex: 4,
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "rgba(97, 97, 97, 0.29)",
  borderTopColor: "rgb(100,100,100)",
  animation: `${QS} 0.7s linear infinite`,
  mixBlendMode: "difference"
})), y2 = I.div({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%"
}), tA = I.div(({ theme: e }) => ({
  position: "relative",
  width: "80%",
  marginBottom: "0.75rem",
  maxWidth: 300,
  height: 5,
  borderRadius: 5,
  background: Le(0.8, e.color.secondary),
  overflow: "hidden",
  cursor: "progress"
})), rA = I.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  background: e.color.secondary
})), E2 = I.div(({ theme: e }) => ({
  minHeight: "2em",
  fontSize: `${e.typography.size.s1}px`,
  color: e.barTextColor
})), nA = I(C7)(({ theme: e }) => ({
  width: 20,
  height: 20,
  marginBottom: "0.5rem",
  color: e.textMutedColor
})), aA = xa`
  from { content: "..." }
  33% { content: "." }
  66% { content: ".." }
  to { content: "..." }
`, oA = I.span({
  "&::after": {
    content: "'...'",
    animation: `${aA} 1s linear infinite`,
    animationDelay: "1s",
    display: "inline-block",
    width: "1em",
    height: "auto"
  }
}), EA = /* @__PURE__ */ l(({ progress: e, error: t, size: r, ...n }) => {
  if (t)
    return /* @__PURE__ */ k.createElement(y2, { "aria-label": t.toString(), "aria-live": "polite", role: "status", ...n }, /* @__PURE__ */ k.createElement(nA, null), /* @__PURE__ */ k.createElement(E2, null, t.message));
  if (e) {
    let { value: a, modules: o } = e, { message: s } = e;
    return o && (s += ` ${o.complete} / ${o.total} modules`), /* @__PURE__ */ k.createElement(
      y2,
      {
        "aria-label": "Content is loading...",
        "aria-live": "polite",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": a * 100,
        "aria-valuetext": s,
        role: "progressbar",
        ...n
      },
      /* @__PURE__ */ k.createElement(tA, null, /* @__PURE__ */ k.createElement(rA, { style: { width: `${a * 100}%` } })),
      /* @__PURE__ */ k.createElement(E2, null, s, a < 1 && /* @__PURE__ */ k.createElement(oA, { key: s }))
    );
  }
  return /* @__PURE__ */ k.createElement(
    eA,
    {
      "aria-label": "Content is loading...",
      "aria-live": "polite",
      role: "status",
      size: r,
      ...n
    }
  );
}, "Loader");
function i6(e) {
  let t = {}, r = e.split("&");
  for (let n = 0; n < r.length; n++) {
    let a = r[n].split("=");
    t[decodeURIComponent(a[0])] = decodeURIComponent(a[1] || "");
  }
  return t;
}
l(i6, "parseQuery");
var CA = /* @__PURE__ */ l((e, t, r = {}) => {
  let [n, a] = e.split("?"), o = a ? {
    ...i6(a),
    ...r,
    id: t
  } : {
    ...r,
    id: t
  };
  return `${n}?${Object.entries(o).map((s) => `${s[0]}=${s[1]}`).join("&")}`;
}, "getStoryHref");
I.pre`
  line-height: 18px;
  padding: 11px 1rem;
  white-space: pre-wrap;
  background: rgba(0, 0, 0, 0.05);
  color: ${s6.darkest};
  border-radius: 3px;
  margin: 1rem 0;
  width: 100%;
  display: block;
  overflow: hidden;
  font-family: ${N1.fonts.mono};
  font-size: ${N1.size.s2 - 1}px;
`;
var xA = E7;
Object.keys(E7).forEach((e) => {
  i.forwardRef((t, r) => i.createElement(e, { ...t, ref: r }));
});
export {
  Ib as A,
  Dm as ActionBar,
  Qw as Bar,
  Rb as Blockquote,
  F1 as Button,
  Ob as Code,
  Nb as DL,
  Pb as Div,
  VS as EmptyTabContent,
  mA as ErrorFormatter,
  e6 as FlexBar,
  gA as Form,
  $b as H1,
  jb as H2,
  Vb as H3,
  qb as H4,
  Wb as H5,
  Ub as H6,
  Gb as HR,
  Nw as IconButton,
  Zb as Img,
  Yb as LI,
  dA as Link,
  _S as ListItem,
  EA as Loader,
  Kb as OL,
  Jb as P,
  Qb as Pre,
  zb as ResetWrapper,
  Vo as ScrollArea,
  KS as Separator,
  eD as Span,
  LC as SyntaxHighlighter,
  tD as TT,
  a6 as TabBar,
  ul as TabButton,
  rD as Table,
  o6 as Tabs,
  yA as TabsState,
  LS as TooltipLinkList,
  bA as TooltipNote,
  aD as UL,
  vA as WithTooltip,
  wA as WithTooltipPure,
  fA as Zoom,
  al as codeCommon,
  xA as components,
  ku as createCopyToClipboardFunction,
  CA as getStoryHref,
  D2 as icons,
  Q as nameSpaceClassNames,
  se as withReset
};
