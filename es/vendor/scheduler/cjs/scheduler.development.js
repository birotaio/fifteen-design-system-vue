import { __exports as N } from "../../../_virtual/scheduler.development.js";
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q;
function we() {
  return Q ? N : (Q = 1, function(t) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var z = !1, J = !1, q = 5;
      function C(e, n) {
        var r = e.length;
        e.push(n), X(e, n, r);
      }
      function f(e) {
        return e.length === 0 ? null : e[0];
      }
      function O(e) {
        if (e.length === 0)
          return null;
        var n = e[0], r = e.pop();
        return r !== n && (e[0] = r, Z(e, r, 0)), n;
      }
      function X(e, n, r) {
        for (var a = r; a > 0; ) {
          var i = a - 1 >>> 1, c = e[i];
          if (k(c, n) > 0)
            e[i] = n, e[a] = c, a = i;
          else
            return;
        }
      }
      function Z(e, n, r) {
        for (var a = r, i = e.length, c = i >>> 1; a < c; ) {
          var u = (a + 1) * 2 - 1, m = e[u], o = u + 1, w = e[o];
          if (k(m, n) < 0)
            o < i && k(w, m) < 0 ? (e[a] = w, e[o] = n, a = o) : (e[a] = m, e[u] = n, a = u);
          else if (o < i && k(w, n) < 0)
            e[a] = w, e[o] = n, a = o;
          else
            return;
        }
      }
      function k(e, n) {
        var r = e.sortIndex - n.sortIndex;
        return r !== 0 ? r : e.id - n.id;
      }
      var P = 1, g = 2, b = 3, R = 4, S = 5;
      function Ee(e, n) {
      }
      var $ = typeof performance == "object" && typeof performance.now == "function";
      if ($) {
        var x = performance;
        t.unstable_now = function() {
          return x.now();
        };
      } else {
        var Y = Date, ee = Y.now();
        t.unstable_now = function() {
          return Y.now() - ee;
        };
      }
      var ne = 1073741823, re = -1, te = 250, ae = 5e3, ie = 1e4, le = ne, v = [], _ = [], ue = 1, s = null, l = b, L = !1, d = !1, T = !1, G = typeof setTimeout == "function" ? setTimeout : null, oe = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function p(e) {
        for (var n = f(_); n !== null; ) {
          if (n.callback === null)
            O(_);
          else if (n.startTime <= e)
            O(_), n.sortIndex = n.expirationTime, C(v, n);
          else
            return;
          n = f(_);
        }
      }
      function h(e) {
        if (T = !1, p(e), !d)
          if (f(v) !== null)
            d = !0, U(M);
          else {
            var n = f(_);
            n !== null && B(h, n.startTime - e);
          }
      }
      function M(e, n) {
        d = !1, T && (T = !1, j()), L = !0;
        var r = l;
        try {
          var a;
          if (!J) return se(e, n);
        } finally {
          s = null, l = r, L = !1;
        }
      }
      function se(e, n) {
        var r = n;
        for (p(r), s = f(v); s !== null && !z && !(s.expirationTime > r && (!e || W())); ) {
          var a = s.callback;
          if (typeof a == "function") {
            s.callback = null, l = s.priorityLevel;
            var i = s.expirationTime <= r, c = a(i);
            r = t.unstable_now(), typeof c == "function" ? s.callback = c : s === f(v) && O(v), p(r);
          } else
            O(v);
          s = f(v);
        }
        if (s !== null)
          return !0;
        var u = f(_);
        return u !== null && B(h, u.startTime - r), !1;
      }
      function fe(e, n) {
        switch (e) {
          case P:
          case g:
          case b:
          case R:
          case S:
            break;
          default:
            e = b;
        }
        var r = l;
        l = e;
        try {
          return n();
        } finally {
          l = r;
        }
      }
      function ce(e) {
        var n;
        switch (l) {
          case P:
          case g:
          case b:
            n = b;
            break;
          default:
            n = l;
            break;
        }
        var r = l;
        l = n;
        try {
          return e();
        } finally {
          l = r;
        }
      }
      function ve(e) {
        var n = l;
        return function() {
          var r = l;
          l = n;
          try {
            return e.apply(this, arguments);
          } finally {
            l = r;
          }
        };
      }
      function _e(e, n, r) {
        var a = t.unstable_now(), i;
        if (typeof r == "object" && r !== null) {
          var c = r.delay;
          typeof c == "number" && c > 0 ? i = a + c : i = a;
        } else
          i = a;
        var u;
        switch (e) {
          case P:
            u = re;
            break;
          case g:
            u = te;
            break;
          case S:
            u = le;
            break;
          case R:
            u = ie;
            break;
          case b:
          default:
            u = ae;
            break;
        }
        var m = i + u, o = {
          id: ue++,
          callback: n,
          priorityLevel: e,
          startTime: i,
          expirationTime: m,
          sortIndex: -1
        };
        return i > a ? (o.sortIndex = i, C(_, o), f(v) === null && o === f(_) && (T ? j() : T = !0, B(h, i - a))) : (o.sortIndex = m, C(v, o), !d && !L && (d = !0, U(M))), o;
      }
      function be() {
      }
      function de() {
        !d && !L && (d = !0, U(M));
      }
      function me() {
        return f(v);
      }
      function Te(e) {
        e.callback = null;
      }
      function ye() {
        return l;
      }
      var E = !1, I = null, A = -1, D = q, V = -1;
      function W() {
        var e = t.unstable_now() - V;
        return !(e < D);
      }
      function Oe() {
      }
      function ke(e) {
        if (e < 0 || e > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        e > 0 ? D = Math.floor(1e3 / e) : D = q;
      }
      var H = function() {
        if (I !== null) {
          var e = t.unstable_now();
          V = e;
          var n = !0, r = !0;
          try {
            r = I(n, e);
          } finally {
            r ? y() : (E = !1, I = null);
          }
        } else
          E = !1;
      }, y;
      if (typeof K == "function")
        y = function() {
          K(H);
        };
      else if (typeof MessageChannel < "u") {
        var F = new MessageChannel(), Pe = F.port2;
        F.port1.onmessage = H, y = function() {
          Pe.postMessage(null);
        };
      } else
        y = function() {
          G(H, 0);
        };
      function U(e) {
        I = e, E || (E = !0, y());
      }
      function B(e, n) {
        A = G(function() {
          e(t.unstable_now());
        }, n);
      }
      function j() {
        oe(A), A = -1;
      }
      var ge = Oe, Le = null;
      t.unstable_IdlePriority = S, t.unstable_ImmediatePriority = P, t.unstable_LowPriority = R, t.unstable_NormalPriority = b, t.unstable_Profiling = Le, t.unstable_UserBlockingPriority = g, t.unstable_cancelCallback = Te, t.unstable_continueExecution = de, t.unstable_forceFrameRate = ke, t.unstable_getCurrentPriorityLevel = ye, t.unstable_getFirstCallbackNode = me, t.unstable_next = ce, t.unstable_pauseExecution = be, t.unstable_requestPaint = ge, t.unstable_runWithPriority = fe, t.unstable_scheduleCallback = _e, t.unstable_shouldYield = W, t.unstable_wrapCallback = ve, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(N), N);
}
export {
  we as __require
};
