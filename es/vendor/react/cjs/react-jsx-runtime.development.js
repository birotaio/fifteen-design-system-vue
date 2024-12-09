import { __exports as T } from "../../../_virtual/react-jsx-runtime.development.js";
import { r as or } from "../index.js";
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function lr() {
  return Ee ? T : (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var Re = or, x = Symbol.for("react.element"), me = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), G = Symbol.for("react.provider"), J = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), q = Symbol.iterator, Te = "@@iterator";
    function Ce(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[Te];
      return typeof r == "function" ? r : null;
    }
    var h = Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var n = h.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var we = !1, Oe = !1, Pe = !1, je = !1, ke = !1, z;
    z = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === N || ke || e === K || e === A || e === D || je || e === _e || we || Oe || Pe || typeof e == "object" && e !== null && (e.$$typeof === F || e.$$typeof === w || e.$$typeof === G || e.$$typeof === J || e.$$typeof === S || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === z || e.getModuleId !== void 0));
    }
    function Ae(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function X(e) {
      return e.displayName || "Context";
    }
    function p(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case me:
          return "Portal";
        case N:
          return "Profiler";
        case K:
          return "StrictMode";
        case A:
          return "Suspense";
        case D:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            var r = e;
            return X(r) + ".Consumer";
          case G:
            var t = e;
            return X(t._context) + ".Provider";
          case S:
            return Ae(e, e.render, "ForwardRef");
          case w:
            var n = e.displayName || null;
            return n !== null ? n : p(e.type) || "Memo";
          case F: {
            var o = e, u = o._payload, i = o._init;
            try {
              return p(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, R = 0, H, Z, Q, ee, re, te, ne;
    function ae() {
    }
    ae.__reactDisabledLog = !0;
    function De() {
      {
        if (R === 0) {
          H = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, te = console.groupCollapsed, ne = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        R++;
      }
    }
    function Fe() {
      {
        if (R--, R === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, e, {
              value: H
            }),
            info: g({}, e, {
              value: Z
            }),
            warn: g({}, e, {
              value: Q
            }),
            error: g({}, e, {
              value: ee
            }),
            group: g({}, e, {
              value: re
            }),
            groupCollapsed: g({}, e, {
              value: te
            }),
            groupEnd: g({}, e, {
              value: ne
            })
          });
        }
        R < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var I = h.ReactCurrentDispatcher, W;
    function O(e, r, t) {
      {
        if (W === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            W = n && n[1] || "";
          }
        return `
` + W + e;
      }
    }
    var Y = !1, P;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      P = new Ie();
    }
    function ie(e, r) {
      if (!e || Y)
        return "";
      {
        var t = P.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Y = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = I.current, I.current = null, De();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), c = n.stack.split(`
`), s = a.length - 1, l = c.length - 1; s >= 1 && l >= 0 && a[s] !== c[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== c[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== c[l]) {
                    var d = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), typeof e == "function" && P.set(e, d), d;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        Y = !1, I.current = u, Fe(), Error.prepareStackTrace = o;
      }
      var E = e ? e.displayName || e.name : "", b = E ? O(E) : "";
      return typeof e == "function" && P.set(e, b), b;
    }
    function We(e, r, t) {
      return ie(e, !1);
    }
    function Ye(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function j(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ie(e, Ye(e));
      if (typeof e == "string")
        return O(e);
      switch (e) {
        case A:
          return O("Suspense");
        case D:
          return O("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            return We(e.render);
          case w:
            return j(e.type, r, t);
          case F: {
            var n = e, o = n._payload, u = n._init;
            try {
              return j(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var m = Object.prototype.hasOwnProperty, oe = {}, ue = h.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = j(e.type, e._source, r ? r.type : null);
        ue.setExtraStackFrame(t);
      } else
        ue.setExtraStackFrame(null);
    }
    function $e(e, r, t, n, o) {
      {
        var u = Function.call.bind(m);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var c = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw c.name = "Invariant Violation", c;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (k(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), k(null)), a instanceof Error && !(a.message in oe) && (oe[a.message] = !0, k(o), f("Failed %s type: %s", t, a.message), k(null));
          }
      }
    }
    var Me = Array.isArray;
    function $(e) {
      return Me(e);
    }
    function Ve(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Le(e) {
      try {
        return se(e), !1;
      } catch {
        return !0;
      }
    }
    function se(e) {
      return "" + e;
    }
    function le(e) {
      if (Le(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ve(e)), se(e);
    }
    var _ = h.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fe, ce, M;
    M = {};
    function Be(e) {
      if (m.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (m.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ne(e, r) {
      if (typeof e.ref == "string" && _.current && r && _.current.stateNode !== r) {
        var t = p(_.current.type);
        M[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', p(_.current.type), e.ref), M[t] = !0);
      }
    }
    function Ge(e, r) {
      {
        var t = function() {
          fe || (fe = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Je(e, r) {
      {
        var t = function() {
          ce || (ce = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var qe = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: x,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ze(e, r, t, n, o) {
      {
        var u, i = {}, a = null, c = null;
        t !== void 0 && (le(t), a = "" + t), Ke(r) && (le(r.key), a = "" + r.key), Be(r) && (c = r.ref, Ne(r, o));
        for (u in r)
          m.call(r, u) && !Ue.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || c) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ge(i, l), c && Je(i, l);
        }
        return qe(e, a, c, o, n, _.current, i);
      }
    }
    var V = h.ReactCurrentOwner, ve = h.ReactDebugCurrentFrame;
    function y(e) {
      if (e) {
        var r = e._owner, t = j(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    var L;
    L = !1;
    function U(e) {
      return typeof e == "object" && e !== null && e.$$typeof === x;
    }
    function de() {
      {
        if (V.current) {
          var e = p(V.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Xe(e) {
      return "";
    }
    var pe = {};
    function He(e) {
      {
        var r = de();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = He(r);
        if (pe[t])
          return;
        pe[t] = !0;
        var n = "";
        e && e._owner && e._owner !== V.current && (n = " It was passed a child from " + p(e._owner.type) + "."), y(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), y(null);
      }
    }
    function be(e, r) {
      {
        if (typeof e != "object")
          return;
        if ($(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            U(n) && ge(n, r);
          }
        else if (U(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Ce(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              U(i.value) && ge(i.value, r);
        }
      }
    }
    function Ze(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === S || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === w))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = p(r);
          $e(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !L) {
          L = !0;
          var o = p(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            y(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), y(null);
            break;
          }
        }
        e.ref !== null && (y(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), y(null));
      }
    }
    var he = {};
    function ye(e, r, t, n, o, u) {
      {
        var i = xe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = Xe();
          c ? a += c : a += de();
          var s;
          e === null ? s = "null" : $(e) ? s = "array" : e !== void 0 && e.$$typeof === x ? (s = "<" + (p(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = ze(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var d = r.children;
          if (d !== void 0)
            if (n)
              if ($(d)) {
                for (var E = 0; E < d.length; E++)
                  be(d[E], e);
                Object.freeze && Object.freeze(d);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              be(d, e);
        }
        if (m.call(r, "key")) {
          var b = p(e), v = Object.keys(r).filter(function(ir) {
            return ir !== "key";
          }), B = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!he[b + B]) {
            var ar = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, B, b, ar, b), he[b + B] = !0;
          }
        }
        return e === C ? Qe(l) : Ze(l), l;
      }
    }
    function er(e, r, t) {
      return ye(e, r, t, !0);
    }
    function rr(e, r, t) {
      return ye(e, r, t, !1);
    }
    var tr = rr, nr = er;
    T.Fragment = C, T.jsx = tr, T.jsxs = nr;
  }(), T);
}
export {
  lr as __require
};
