import { __module as L } from "../../../_virtual/react.development.js";
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
L.exports;
var vr;
function jt() {
  return vr ? L.exports : (vr = 1, function(Z, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var yr = "18.3.1", $ = Symbol.for("react.element"), Re = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), ee = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), N = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), hr = Symbol.for("react.offscreen"), Ce = Symbol.iterator, mr = "@@iterator";
      function we(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = Ce && e[Ce] || e[mr];
        return typeof r == "function" ? r : null;
      }
      var Te = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, w = {
        transition: null
      }, m = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, b = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, j = {}, U = null;
      function Oe(e) {
        U = e;
      }
      j.setExtraStackFrame = function(e) {
        U = e;
      }, j.getCurrentStack = null, j.getStackAddendum = function() {
        var e = "";
        U && (e += U);
        var r = j.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var gr = !1, br = !1, _r = !1, Er = !1, Rr = !1, T = {
        ReactCurrentDispatcher: Te,
        ReactCurrentBatchConfig: w,
        ReactCurrentOwner: b
      };
      T.ReactDebugCurrentFrame = j, T.ReactCurrentActQueue = m;
      function O(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          Se("warn", e, t);
        }
      }
      function f(e) {
        {
          for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
            t[n - 1] = arguments[n];
          Se("error", e, t);
        }
      }
      function Se(e, r, t) {
        {
          var n = T.ReactDebugCurrentFrame, a = n.getStackAddendum();
          a !== "" && (r += "%s", t = t.concat([a]));
          var u = t.map(function(o) {
            return String(o);
          });
          u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
        }
      }
      var Pe = {};
      function ae(e, r) {
        {
          var t = e.constructor, n = t && (t.displayName || t.name) || "ReactClass", a = n + "." + r;
          if (Pe[a])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, n), Pe[a] = !0;
        }
      }
      var ke = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, t) {
          ae(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, t, n) {
          ae(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, t, n) {
          ae(e, "setState");
        }
      }, _ = Object.assign, oe = {};
      Object.freeze(oe);
      function R(e, r, t) {
        this.props = e, this.context = r, this.refs = oe, this.updater = t || ke;
      }
      R.prototype.isReactComponent = {}, R.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, R.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var ue = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Cr = function(e, r) {
          Object.defineProperty(R.prototype, e, {
            get: function() {
              O("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var ie in ue)
          ue.hasOwnProperty(ie) && Cr(ie, ue[ie]);
      }
      function Ae() {
      }
      Ae.prototype = R.prototype;
      function se(e, r, t) {
        this.props = e, this.context = r, this.refs = oe, this.updater = t || ke;
      }
      var ce = se.prototype = new Ae();
      ce.constructor = se, _(ce, R.prototype), ce.isPureReactComponent = !0;
      function wr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Tr = Array.isArray;
      function V(e) {
        return Tr(e);
      }
      function Or(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return t;
        }
      }
      function Sr(e) {
        try {
          return je(e), !1;
        } catch {
          return !0;
        }
      }
      function je(e) {
        return "" + e;
      }
      function Y(e) {
        if (Sr(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), je(e);
      }
      function Pr(e, r, t) {
        var n = e.displayName;
        if (n)
          return n;
        var a = r.displayName || r.name || "";
        return a !== "" ? t + "(" + a + ")" : t;
      }
      function De(e) {
        return e.displayName || "Context";
      }
      function E(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case M:
            return "Fragment";
          case Re:
            return "Portal";
          case re:
            return "Profiler";
          case ee:
            return "StrictMode";
          case W:
            return "Suspense";
          case ne:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case N:
              var r = e;
              return De(r) + ".Consumer";
            case te:
              var t = e;
              return De(t._context) + ".Provider";
            case A:
              return Pr(e, e.render, "ForwardRef");
            case C:
              var n = e.displayName || null;
              return n !== null ? n : E(e.type) || "Memo";
            case x: {
              var a = e, u = a._payload, o = a._init;
              try {
                return E(o(u));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var D = Object.prototype.hasOwnProperty, Ie = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Fe, Le, fe;
      fe = {};
      function $e(e) {
        if (D.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Me(e) {
        if (D.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function kr(e, r) {
        var t = function() {
          Fe || (Fe = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
      function Ar(e, r) {
        var t = function() {
          Le || (Le = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
      function jr(e) {
        if (typeof e.ref == "string" && b.current && e.__self && b.current.stateNode !== e.__self) {
          var r = E(b.current.type);
          fe[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), fe[r] = !0);
        }
      }
      var le = function(e, r, t, n, a, u, o) {
        var i = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: $,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: t,
          props: o,
          // Record the component responsible for creating this element.
          _owner: u
        };
        return i._store = {}, Object.defineProperty(i._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(i, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: n
        }), Object.defineProperty(i, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
      };
      function Dr(e, r, t) {
        var n, a = {}, u = null, o = null, i = null, c = null;
        if (r != null) {
          $e(r) && (o = r.ref, jr(r)), Me(r) && (Y(r.key), u = "" + r.key), i = r.__self === void 0 ? null : r.__self, c = r.__source === void 0 ? null : r.__source;
          for (n in r)
            D.call(r, n) && !Ie.hasOwnProperty(n) && (a[n] = r[n]);
        }
        var l = arguments.length - 2;
        if (l === 1)
          a.children = t;
        else if (l > 1) {
          for (var d = Array(l), p = 0; p < l; p++)
            d[p] = arguments[p + 2];
          Object.freeze && Object.freeze(d), a.children = d;
        }
        if (e && e.defaultProps) {
          var v = e.defaultProps;
          for (n in v)
            a[n] === void 0 && (a[n] = v[n]);
        }
        if (u || o) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && kr(a, y), o && Ar(a, y);
        }
        return le(e, u, o, i, c, b.current, a);
      }
      function Ir(e, r) {
        var t = le(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return t;
      }
      function Fr(e, r, t) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var n, a = _({}, e.props), u = e.key, o = e.ref, i = e._self, c = e._source, l = e._owner;
        if (r != null) {
          $e(r) && (o = r.ref, l = b.current), Me(r) && (Y(r.key), u = "" + r.key);
          var d;
          e.type && e.type.defaultProps && (d = e.type.defaultProps);
          for (n in r)
            D.call(r, n) && !Ie.hasOwnProperty(n) && (r[n] === void 0 && d !== void 0 ? a[n] = d[n] : a[n] = r[n]);
        }
        var p = arguments.length - 2;
        if (p === 1)
          a.children = t;
        else if (p > 1) {
          for (var v = Array(p), y = 0; y < p; y++)
            v[y] = arguments[y + 2];
          a.children = v;
        }
        return le(e.type, u, o, i, c, l, a);
      }
      function S(e) {
        return typeof e == "object" && e !== null && e.$$typeof === $;
      }
      var Ne = ".", Lr = ":";
      function $r(e) {
        var r = /[=:]/g, t = {
          "=": "=0",
          ":": "=2"
        }, n = e.replace(r, function(a) {
          return t[a];
        });
        return "$" + n;
      }
      var We = !1, Mr = /\/+/g;
      function xe(e) {
        return e.replace(Mr, "$&/");
      }
      function de(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Y(e.key), $r("" + e.key)) : r.toString(36);
      }
      function z(e, r, t, n, a) {
        var u = typeof e;
        (u === "undefined" || u === "boolean") && (e = null);
        var o = !1;
        if (e === null)
          o = !0;
        else
          switch (u) {
            case "string":
            case "number":
              o = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case $:
                case Re:
                  o = !0;
              }
          }
        if (o) {
          var i = e, c = a(i), l = n === "" ? Ne + de(i, 0) : n;
          if (V(c)) {
            var d = "";
            l != null && (d = xe(l) + "/"), z(c, r, d, "", function(kt) {
              return kt;
            });
          } else c != null && (S(c) && (c.key && (!i || i.key !== c.key) && Y(c.key), c = Ir(
            c,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            t + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (c.key && (!i || i.key !== c.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              xe("" + c.key) + "/"
            ) : "") + l
          )), r.push(c));
          return 1;
        }
        var p, v, y = 0, h = n === "" ? Ne : n + Lr;
        if (V(e))
          for (var J = 0; J < e.length; J++)
            p = e[J], v = h + de(p, J), y += z(p, r, t, v, a);
        else {
          var Ee = we(e);
          if (typeof Ee == "function") {
            var lr = e;
            Ee === lr.entries && (We || O("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), We = !0);
            for (var St = Ee.call(lr), dr, Pt = 0; !(dr = St.next()).done; )
              p = dr.value, v = h + de(p, Pt++), y += z(p, r, t, v, a);
          } else if (u === "object") {
            var pr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (pr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : pr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return y;
      }
      function B(e, r, t) {
        if (e == null)
          return e;
        var n = [], a = 0;
        return z(e, n, "", "", function(u) {
          return r.call(t, u, a++);
        }), n;
      }
      function Nr(e) {
        var r = 0;
        return B(e, function() {
          r++;
        }), r;
      }
      function Wr(e, r, t) {
        B(e, function() {
          r.apply(this, arguments);
        }, t);
      }
      function xr(e) {
        return B(e, function(r) {
          return r;
        }) || [];
      }
      function Ur(e) {
        if (!S(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Vr(e) {
        var r = {
          $$typeof: N,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: te,
          _context: r
        };
        var t = !1, n = !1, a = !1;
        {
          var u = {
            $$typeof: N,
            _context: r
          };
          Object.defineProperties(u, {
            Provider: {
              get: function() {
                return n || (n = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(o) {
                r.Provider = o;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(o) {
                r._currentValue = o;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(o) {
                r._currentValue2 = o;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(o) {
                r._threadCount = o;
              }
            },
            Consumer: {
              get: function() {
                return t || (t = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(o) {
                a || (O("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", o), a = !0);
              }
            }
          }), r.Consumer = u;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var I = -1, pe = 0, Ue = 1, Yr = 2;
      function zr(e) {
        if (e._status === I) {
          var r = e._result, t = r();
          if (t.then(function(u) {
            if (e._status === pe || e._status === I) {
              var o = e;
              o._status = Ue, o._result = u;
            }
          }, function(u) {
            if (e._status === pe || e._status === I) {
              var o = e;
              o._status = Yr, o._result = u;
            }
          }), e._status === I) {
            var n = e;
            n._status = pe, n._result = t;
          }
        }
        if (e._status === Ue) {
          var a = e._result;
          return a === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, a), "default" in a || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, a), a.default;
        } else
          throw e._result;
      }
      function Br(e) {
        var r = {
          // We use these fields to store the result.
          _status: I,
          _result: e
        }, t = {
          $$typeof: x,
          _payload: r,
          _init: zr
        };
        {
          var n, a;
          Object.defineProperties(t, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return n;
              },
              set: function(u) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), n = u, Object.defineProperty(t, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(u) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = u, Object.defineProperty(t, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return t;
      }
      function Hr(e) {
        e != null && e.$$typeof === C ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: A,
          render: e
        };
        {
          var t;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return t;
            },
            set: function(n) {
              t = n, !e.name && !e.displayName && (e.displayName = n);
            }
          });
        }
        return r;
      }
      var Ve;
      Ve = Symbol.for("react.module.reference");
      function Ye(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === M || e === re || Rr || e === ee || e === W || e === ne || Er || e === hr || gr || br || _r || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === C || e.$$typeof === te || e.$$typeof === N || e.$$typeof === A || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === Ve || e.getModuleId !== void 0));
      }
      function Kr(e, r) {
        Ye(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var t = {
          $$typeof: C,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return t;
      }
      function g() {
        var e = Te.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function Gr(e) {
        var r = g();
        if (e._context !== void 0) {
          var t = e._context;
          t.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : t.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function qr(e) {
        var r = g();
        return r.useState(e);
      }
      function Qr(e, r, t) {
        var n = g();
        return n.useReducer(e, r, t);
      }
      function Xr(e) {
        var r = g();
        return r.useRef(e);
      }
      function Jr(e, r) {
        var t = g();
        return t.useEffect(e, r);
      }
      function Zr(e, r) {
        var t = g();
        return t.useInsertionEffect(e, r);
      }
      function et(e, r) {
        var t = g();
        return t.useLayoutEffect(e, r);
      }
      function rt(e, r) {
        var t = g();
        return t.useCallback(e, r);
      }
      function tt(e, r) {
        var t = g();
        return t.useMemo(e, r);
      }
      function nt(e, r, t) {
        var n = g();
        return n.useImperativeHandle(e, r, t);
      }
      function at(e, r) {
        {
          var t = g();
          return t.useDebugValue(e, r);
        }
      }
      function ot() {
        var e = g();
        return e.useTransition();
      }
      function ut(e) {
        var r = g();
        return r.useDeferredValue(e);
      }
      function it() {
        var e = g();
        return e.useId();
      }
      function st(e, r, t) {
        var n = g();
        return n.useSyncExternalStore(e, r, t);
      }
      var F = 0, ze, Be, He, Ke, Ge, qe, Qe;
      function Xe() {
      }
      Xe.__reactDisabledLog = !0;
      function ct() {
        {
          if (F === 0) {
            ze = console.log, Be = console.info, He = console.warn, Ke = console.error, Ge = console.group, qe = console.groupCollapsed, Qe = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Xe,
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
          F++;
        }
      }
      function ft() {
        {
          if (F--, F === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: _({}, e, {
                value: ze
              }),
              info: _({}, e, {
                value: Be
              }),
              warn: _({}, e, {
                value: He
              }),
              error: _({}, e, {
                value: Ke
              }),
              group: _({}, e, {
                value: Ge
              }),
              groupCollapsed: _({}, e, {
                value: qe
              }),
              groupEnd: _({}, e, {
                value: Qe
              })
            });
          }
          F < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ve = T.ReactCurrentDispatcher, ye;
      function H(e, r, t) {
        {
          if (ye === void 0)
            try {
              throw Error();
            } catch (a) {
              var n = a.stack.trim().match(/\n( *(at )?)/);
              ye = n && n[1] || "";
            }
          return `
` + ye + e;
        }
      }
      var he = !1, K;
      {
        var lt = typeof WeakMap == "function" ? WeakMap : Map;
        K = new lt();
      }
      function Je(e, r) {
        if (!e || he)
          return "";
        {
          var t = K.get(e);
          if (t !== void 0)
            return t;
        }
        var n;
        he = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var u;
        u = ve.current, ve.current = null, ct();
        try {
          if (r) {
            var o = function() {
              throw Error();
            };
            if (Object.defineProperty(o.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(o, []);
              } catch (h) {
                n = h;
              }
              Reflect.construct(e, [], o);
            } else {
              try {
                o.call();
              } catch (h) {
                n = h;
              }
              e.call(o.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (h) {
              n = h;
            }
            e();
          }
        } catch (h) {
          if (h && n && typeof h.stack == "string") {
            for (var i = h.stack.split(`
`), c = n.stack.split(`
`), l = i.length - 1, d = c.length - 1; l >= 1 && d >= 0 && i[l] !== c[d]; )
              d--;
            for (; l >= 1 && d >= 0; l--, d--)
              if (i[l] !== c[d]) {
                if (l !== 1 || d !== 1)
                  do
                    if (l--, d--, d < 0 || i[l] !== c[d]) {
                      var p = `
` + i[l].replace(" at new ", " at ");
                      return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, p), p;
                    }
                  while (l >= 1 && d >= 0);
                break;
              }
          }
        } finally {
          he = !1, ve.current = u, ft(), Error.prepareStackTrace = a;
        }
        var v = e ? e.displayName || e.name : "", y = v ? H(v) : "";
        return typeof e == "function" && K.set(e, y), y;
      }
      function dt(e, r, t) {
        return Je(e, !1);
      }
      function pt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function G(e, r, t) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Je(e, pt(e));
        if (typeof e == "string")
          return H(e);
        switch (e) {
          case W:
            return H("Suspense");
          case ne:
            return H("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case A:
              return dt(e.render);
            case C:
              return G(e.type, r, t);
            case x: {
              var n = e, a = n._payload, u = n._init;
              try {
                return G(u(a), r, t);
              } catch {
              }
            }
          }
        return "";
      }
      var Ze = {}, er = T.ReactDebugCurrentFrame;
      function q(e) {
        if (e) {
          var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
          er.setExtraStackFrame(t);
        } else
          er.setExtraStackFrame(null);
      }
      function vt(e, r, t, n, a) {
        {
          var u = Function.call.bind(D);
          for (var o in e)
            if (u(e, o)) {
              var i = void 0;
              try {
                if (typeof e[o] != "function") {
                  var c = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw c.name = "Invariant Violation", c;
                }
                i = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (l) {
                i = l;
              }
              i && !(i instanceof Error) && (q(a), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof i), q(null)), i instanceof Error && !(i.message in Ze) && (Ze[i.message] = !0, q(a), f("Failed %s type: %s", t, i.message), q(null));
            }
        }
      }
      function P(e) {
        if (e) {
          var r = e._owner, t = G(e.type, e._source, r ? r.type : null);
          Oe(t);
        } else
          Oe(null);
      }
      var me;
      me = !1;
      function rr() {
        if (b.current) {
          var e = E(b.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function yt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
      function ht(e) {
        return e != null ? yt(e.__source) : "";
      }
      var tr = {};
      function mt(e) {
        var r = rr();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
      function nr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var t = mt(r);
          if (!tr[t]) {
            tr[t] = !0;
            var n = "";
            e && e._owner && e._owner !== b.current && (n = " It was passed a child from " + E(e._owner.type) + "."), P(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), P(null);
          }
        }
      }
      function ar(e, r) {
        if (typeof e == "object") {
          if (V(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              S(n) && nr(n, r);
            }
          else if (S(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var a = we(e);
            if (typeof a == "function" && a !== e.entries)
              for (var u = a.call(e), o; !(o = u.next()).done; )
                S(o.value) && nr(o.value, r);
          }
        }
      }
      function or(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var t;
          if (typeof r == "function")
            t = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === A || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === C))
            t = r.propTypes;
          else
            return;
          if (t) {
            var n = E(r);
            vt(t, e.props, "prop", n, e);
          } else if (r.PropTypes !== void 0 && !me) {
            me = !0;
            var a = E(r);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function gt(e) {
        {
          for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
            var n = r[t];
            if (n !== "children" && n !== "key") {
              P(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), P(null);
              break;
            }
          }
          e.ref !== null && (P(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), P(null));
        }
      }
      function ur(e, r, t) {
        var n = Ye(e);
        if (!n) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var u = ht(r);
          u ? a += u : a += rr();
          var o;
          e === null ? o = "null" : V(e) ? o = "array" : e !== void 0 && e.$$typeof === $ ? (o = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : o = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", o, a);
        }
        var i = Dr.apply(this, arguments);
        if (i == null)
          return i;
        if (n)
          for (var c = 2; c < arguments.length; c++)
            ar(arguments[c], e);
        return e === M ? gt(i) : or(i), i;
      }
      var ir = !1;
      function bt(e) {
        var r = ur.bind(null, e);
        return r.type = e, ir || (ir = !0, O("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return O("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function _t(e, r, t) {
        for (var n = Fr.apply(this, arguments), a = 2; a < arguments.length; a++)
          ar(arguments[a], n.type);
        return or(n), n;
      }
      function Et(e, r) {
        var t = w.transition;
        w.transition = {};
        var n = w.transition;
        w.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (w.transition = t, t === null && n._updatedFibers) {
            var a = n._updatedFibers.size;
            a > 10 && O("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), n._updatedFibers.clear();
          }
        }
      }
      var sr = !1, Q = null;
      function Rt(e) {
        if (Q === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), t = Z && Z[r];
            Q = t.call(Z, "timers").setImmediate;
          } catch {
            Q = function(a) {
              sr === !1 && (sr = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var u = new MessageChannel();
              u.port1.onmessage = a, u.port2.postMessage(void 0);
            };
          }
        return Q(e);
      }
      var k = 0, cr = !1;
      function fr(e) {
        {
          var r = k;
          k++, m.current === null && (m.current = []);
          var t = m.isBatchingLegacy, n;
          try {
            if (m.isBatchingLegacy = !0, n = e(), !t && m.didScheduleLegacyUpdate) {
              var a = m.current;
              a !== null && (m.didScheduleLegacyUpdate = !1, _e(a));
            }
          } catch (v) {
            throw X(r), v;
          } finally {
            m.isBatchingLegacy = t;
          }
          if (n !== null && typeof n == "object" && typeof n.then == "function") {
            var u = n, o = !1, i = {
              then: function(v, y) {
                o = !0, u.then(function(h) {
                  X(r), k === 0 ? ge(h, v, y) : v(h);
                }, function(h) {
                  X(r), y(h);
                });
              }
            };
            return !cr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              o || (cr = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), i;
          } else {
            var c = n;
            if (X(r), k === 0) {
              var l = m.current;
              l !== null && (_e(l), m.current = null);
              var d = {
                then: function(v, y) {
                  m.current === null ? (m.current = [], ge(c, v, y)) : v(c);
                }
              };
              return d;
            } else {
              var p = {
                then: function(v, y) {
                  v(c);
                }
              };
              return p;
            }
          }
        }
      }
      function X(e) {
        e !== k - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), k = e;
      }
      function ge(e, r, t) {
        {
          var n = m.current;
          if (n !== null)
            try {
              _e(n), Rt(function() {
                n.length === 0 ? (m.current = null, r(e)) : ge(e, r, t);
              });
            } catch (a) {
              t(a);
            }
          else
            r(e);
        }
      }
      var be = !1;
      function _e(e) {
        if (!be) {
          be = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var t = e[r];
              do
                t = t(!0);
              while (t !== null);
            }
            e.length = 0;
          } catch (n) {
            throw e = e.slice(r + 1), n;
          } finally {
            be = !1;
          }
        }
      }
      var Ct = ur, wt = _t, Tt = bt, Ot = {
        map: B,
        forEach: Wr,
        count: Nr,
        toArray: xr,
        only: Ur
      };
      s.Children = Ot, s.Component = R, s.Fragment = M, s.Profiler = re, s.PureComponent = se, s.StrictMode = ee, s.Suspense = W, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T, s.act = fr, s.cloneElement = wt, s.createContext = Vr, s.createElement = Ct, s.createFactory = Tt, s.createRef = wr, s.forwardRef = Hr, s.isValidElement = S, s.lazy = Br, s.memo = Kr, s.startTransition = Et, s.unstable_act = fr, s.useCallback = rt, s.useContext = Gr, s.useDebugValue = at, s.useDeferredValue = ut, s.useEffect = Jr, s.useId = it, s.useImperativeHandle = nt, s.useInsertionEffect = Zr, s.useLayoutEffect = et, s.useMemo = tt, s.useReducer = Qr, s.useRef = Xr, s.useState = qr, s.useSyncExternalStore = st, s.useTransition = ot, s.version = yr, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(L, L.exports), L.exports);
}
export {
  jt as __require
};
