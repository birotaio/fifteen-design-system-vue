import { useCssVars as At, useSlots as Dt, ref as pe, onMounted as Se, toRefs as pt, computed as ie, watch as ue, watchEffect as Qe, openBlock as $e, createElementBlock as ct, normalizeStyle as Ct, createElementVNode as Ze, withKeys as $t, renderSlot as _e, createVNode as Bt, Transition as jt, withCtx as St, withDirectives as Rt, unref as ce, createTextVNode as Tt, toDisplayString as Lt, createBlock as Mt, createCommentVNode as Nt, vShow as Wt, onBeforeUnmount as Re, reactive as Vt, nextTick as It, isRef as Ht } from "vue";
(function() {
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      e.appendChild(document.createTextNode(`#arrow[data-v-3d019fcc],
  #arrow[data-v-3d019fcc]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-3d019fcc] {
    visibility: hidden;
}
#arrow[data-v-3d019fcc]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-3d019fcc] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-3d019fcc]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-3d019fcc] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-3d019fcc]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-3d019fcc] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-3d019fcc]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-3d019fcc] {
    left: -5px;
}

.inline-block[data-v-3cdf184f] {
  display: inline-block;
}
.popper[data-v-3cdf184f] {
  transition: background 250ms ease-in-out;
  background: var(--popper-theme-background-color);
  padding: var(--popper-theme-padding);
  color: var(--popper-theme-text-color);
  border-radius: var(--popper-theme-border-radius);
  border-width: var(--popper-theme-border-width);
  border-style: var(--popper-theme-border-style);
  border-color: var(--popper-theme-border-color);
  box-shadow: var(--popper-theme-box-shadow);
  z-index: var(--c015fa4e);
}
.popper[data-v-3cdf184f]:hover,
.popper:hover > #arrow[data-v-3cdf184f]::before {
  background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-3cdf184f] {
  display: inline-block;
}
.fade-enter-active[data-v-3cdf184f],
.fade-leave-active[data-v-3cdf184f] {
  transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-3cdf184f],
.fade-leave-to[data-v-3cdf184f] {
  opacity: 0;
}`)), document.head.appendChild(e);
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
function zt(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ye = { exports: {} }, et;
function Ft() {
  if (et) return ye.exports;
  et = 1;
  function e(t, r = 100, o = {}) {
    if (typeof t != "function")
      throw new TypeError(`Expected the first parameter to be a function, got \`${typeof t}\`.`);
    if (r < 0)
      throw new RangeError("`wait` must not be negative.");
    const { immediate: n } = typeof o == "boolean" ? { immediate: o } : o;
    let a, c, i, s, f;
    function p() {
      const l = a, b = c;
      return a = void 0, c = void 0, f = t.apply(l, b), f;
    }
    function h() {
      const l = Date.now() - s;
      l < r && l >= 0 ? i = setTimeout(h, r - l) : (i = void 0, n || (f = p()));
    }
    const v = function(...l) {
      if (a && this !== a && Object.getPrototypeOf(this) === Object.getPrototypeOf(a))
        throw new Error("Debounced method called with different contexts of the same prototype.");
      a = this, c = l, s = Date.now();
      const b = n && !i;
      return i || (i = setTimeout(h, r)), b && (f = p()), f;
    };
    return Object.defineProperty(v, "isPending", {
      get() {
        return i !== void 0;
      }
    }), v.clear = () => {
      i && (clearTimeout(i), i = void 0);
    }, v.flush = () => {
      i && v.trigger();
    }, v.trigger = () => {
      f = p(), v.clear();
    }, v;
  }
  return ye.exports.debounce = e, ye.exports = e, ye.exports;
}
var qt = /* @__PURE__ */ Ft();
const De = /* @__PURE__ */ zt(qt);
function Yt(e, t, r) {
  Ht(e) ? ue(e, (o, n) => {
    n?.removeEventListener(t, r), o?.addEventListener(t, r);
  }) : Se(() => {
    e.addEventListener(t, r);
  }), Re(() => {
    ce(e)?.removeEventListener(t, r);
  });
}
function Xt(e, t) {
  const r = "pointerdown";
  return typeof window > "u" || !window ? void 0 : Yt(window, r, (n) => {
    const a = ce(e);
    a && (a === n.target || n.composedPath().includes(a) || t(n));
  });
}
function Ut(e, t, r) {
  let o = null;
  const n = pe(!1);
  Se(() => {
    (e.content !== void 0 || r.value) && (n.value = !0), o = new MutationObserver(a), o.observe(t.value, {
      childList: !0,
      subtree: !0
    });
  }), Re(() => o.disconnect()), ue(r, (c) => {
    c ? n.value = !0 : n.value = !1;
  });
  const a = () => {
    e.content ? n.value = !0 : n.value = !1;
  };
  return {
    hasContent: n
  };
}
function L(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function _(e) {
  var t = L(e).Element;
  return e instanceof t || e instanceof Element;
}
function N(e) {
  var t = L(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Te(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = L(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var Z = Math.max, Oe = Math.min, te = Math.round;
function Be() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function ft() {
  return !/^((?!chrome|android).)*safari/i.test(Be());
}
function re(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var o = e.getBoundingClientRect(), n = 1, a = 1;
  t && N(e) && (n = e.offsetWidth > 0 && te(o.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && te(o.height) / e.offsetHeight || 1);
  var c = _(e) ? L(e) : window, i = c.visualViewport, s = !ft() && r, f = (o.left + (s && i ? i.offsetLeft : 0)) / n, p = (o.top + (s && i ? i.offsetTop : 0)) / a, h = o.width / n, v = o.height / a;
  return {
    width: h,
    height: v,
    top: p,
    right: f + h,
    bottom: p + v,
    left: f,
    x: f,
    y: p
  };
}
function Le(e) {
  var t = L(e), r = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: o
  };
}
function Kt(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Gt(e) {
  return e === L(e) || !N(e) ? Le(e) : Kt(e);
}
function F(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
  return ((_(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Me(e) {
  return re(G(e)).left + Le(e).scrollLeft;
}
function X(e) {
  return L(e).getComputedStyle(e);
}
function Ne(e) {
  var t = X(e), r = t.overflow, o = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + n + o);
}
function Jt(e) {
  var t = e.getBoundingClientRect(), r = te(t.width) / e.offsetWidth || 1, o = te(t.height) / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function Qt(e, t, r) {
  r === void 0 && (r = !1);
  var o = N(t), n = N(t) && Jt(t), a = G(t), c = re(e, n, r), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, s = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((F(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Ne(a)) && (i = Gt(t)), N(t) ? (s = re(t, !0), s.x += t.clientLeft, s.y += t.clientTop) : a && (s.x = Me(a))), {
    x: c.left + i.scrollLeft - s.x,
    y: c.top + i.scrollTop - s.y,
    width: c.width,
    height: c.height
  };
}
function We(e) {
  var t = re(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function Pe(e) {
  return F(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Te(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    G(e)
  );
}
function lt(e) {
  return ["html", "body", "#document"].indexOf(F(e)) >= 0 ? e.ownerDocument.body : N(e) && Ne(e) ? e : lt(Pe(e));
}
function fe(e, t) {
  var r;
  t === void 0 && (t = []);
  var o = lt(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = L(o), c = n ? [a].concat(a.visualViewport || [], Ne(o) ? o : []) : o, i = t.concat(c);
  return n ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(fe(Pe(c)))
  );
}
function Zt(e) {
  return ["table", "td", "th"].indexOf(F(e)) >= 0;
}
function tt(e) {
  return !N(e) || // https://github.com/popperjs/popper-core/issues/837
  X(e).position === "fixed" ? null : e.offsetParent;
}
function _t(e) {
  var t = /firefox/i.test(Be()), r = /Trident/i.test(Be());
  if (r && N(e)) {
    var o = X(e);
    if (o.position === "fixed")
      return null;
  }
  var n = Pe(e);
  for (Te(n) && (n = n.host); N(n) && ["html", "body"].indexOf(F(n)) < 0; ) {
    var a = X(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function ve(e) {
  for (var t = L(e), r = tt(e); r && Zt(r) && X(r).position === "static"; )
    r = tt(r);
  return r && (F(r) === "html" || F(r) === "body" && X(r).position === "static") ? t : r || _t(e) || t;
}
var R = "top", V = "bottom", I = "right", T = "left", Ve = "auto", me = [R, V, I, T], ne = "start", de = "end", er = "clippingParents", ut = "viewport", se = "popper", tr = "reference", rt = /* @__PURE__ */ me.reduce(function(e, t) {
  return e.concat([t + "-" + ne, t + "-" + de]);
}, []), dt = /* @__PURE__ */ [].concat(me, [Ve]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ne, t + "-" + de]);
}, []), rr = "beforeRead", nr = "read", or = "afterRead", ar = "beforeMain", ir = "main", sr = "afterMain", pr = "beforeWrite", cr = "write", fr = "afterWrite", lr = [rr, nr, or, ar, ir, sr, pr, cr, fr];
function ur(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function n(a) {
    r.add(a.name);
    var c = [].concat(a.requires || [], a.requiresIfExists || []);
    c.forEach(function(i) {
      if (!r.has(i)) {
        var s = t.get(i);
        s && n(s);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || n(a);
  }), o;
}
function dr(e) {
  var t = ur(e);
  return lr.reduce(function(r, o) {
    return r.concat(t.filter(function(n) {
      return n.phase === o;
    }));
  }, []);
}
function vr(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function mr(e) {
  var t = e.reduce(function(r, o) {
    var n = r[o.name];
    return r[o.name] = n ? Object.assign({}, n, o, {
      options: Object.assign({}, n.options, o.options),
      data: Object.assign({}, n.data, o.data)
    }) : o, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
function hr(e, t) {
  var r = L(e), o = G(e), n = r.visualViewport, a = o.clientWidth, c = o.clientHeight, i = 0, s = 0;
  if (n) {
    a = n.width, c = n.height;
    var f = ft();
    (f || !f && t === "fixed") && (i = n.offsetLeft, s = n.offsetTop);
  }
  return {
    width: a,
    height: c,
    x: i + Me(e),
    y: s
  };
}
function br(e) {
  var t, r = G(e), o = Le(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, a = Z(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), c = Z(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), i = -o.scrollLeft + Me(e), s = -o.scrollTop;
  return X(n || r).direction === "rtl" && (i += Z(r.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: c,
    x: i,
    y: s
  };
}
function vt(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Te(r)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function je(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function gr(e, t) {
  var r = re(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function nt(e, t, r) {
  return t === ut ? je(hr(e, r)) : _(t) ? gr(t, r) : je(br(G(e)));
}
function yr(e) {
  var t = fe(Pe(e)), r = ["absolute", "fixed"].indexOf(X(e).position) >= 0, o = r && N(e) ? ve(e) : e;
  return _(o) ? t.filter(function(n) {
    return _(n) && vt(n, o) && F(n) !== "body";
  }) : [];
}
function wr(e, t, r, o) {
  var n = t === "clippingParents" ? yr(e) : [].concat(t), a = [].concat(n, [r]), c = a[0], i = a.reduce(function(s, f) {
    var p = nt(e, f, o);
    return s.top = Z(p.top, s.top), s.right = Oe(p.right, s.right), s.bottom = Oe(p.bottom, s.bottom), s.left = Z(p.left, s.left), s;
  }, nt(e, c, o));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function z(e) {
  return e.split("-")[0];
}
function oe(e) {
  return e.split("-")[1];
}
function Ie(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function mt(e) {
  var t = e.reference, r = e.element, o = e.placement, n = o ? z(o) : null, a = o ? oe(o) : null, c = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, s;
  switch (n) {
    case R:
      s = {
        x: c,
        y: t.y - r.height
      };
      break;
    case V:
      s = {
        x: c,
        y: t.y + t.height
      };
      break;
    case I:
      s = {
        x: t.x + t.width,
        y: i
      };
      break;
    case T:
      s = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      s = {
        x: t.x,
        y: t.y
      };
  }
  var f = n ? Ie(n) : null;
  if (f != null) {
    var p = f === "y" ? "height" : "width";
    switch (a) {
      case ne:
        s[f] = s[f] - (t[p] / 2 - r[p] / 2);
        break;
      case de:
        s[f] = s[f] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return s;
}
function ht() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function bt(e) {
  return Object.assign({}, ht(), e);
}
function gt(e, t) {
  return t.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
function He(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, n = o === void 0 ? e.placement : o, a = r.strategy, c = a === void 0 ? e.strategy : a, i = r.boundary, s = i === void 0 ? er : i, f = r.rootBoundary, p = f === void 0 ? ut : f, h = r.elementContext, v = h === void 0 ? se : h, l = r.altBoundary, b = l === void 0 ? !1 : l, m = r.padding, u = m === void 0 ? 0 : m, y = bt(typeof u != "number" ? u : gt(u, me)), P = v === se ? tr : se, E = e.rects.popper, d = e.elements[b ? P : v], w = wr(_(d) ? d : d.contextElement || G(e.elements.popper), s, p, c), g = re(e.elements.reference), x = mt({
    reference: g,
    element: E,
    placement: n
  }), k = je(Object.assign({}, E, x)), A = v === se ? k : g, O = {
    top: w.top - A.top + y.top,
    bottom: A.bottom - w.bottom + y.bottom,
    left: w.left - A.left + y.left,
    right: A.right - w.right + y.right
  }, D = e.modifiersData.offset;
  if (v === se && D) {
    var S = D[n];
    Object.keys(O).forEach(function(C) {
      var q = [I, V].indexOf(C) >= 0 ? 1 : -1, W = [R, V].indexOf(C) >= 0 ? "y" : "x";
      O[C] += S[W] * q;
    });
  }
  return O;
}
var ot = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function at() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function xr(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, o = r === void 0 ? [] : r, n = t.defaultOptions, a = n === void 0 ? ot : n;
  return function(i, s, f) {
    f === void 0 && (f = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ot, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: s
      },
      attributes: {},
      styles: {}
    }, h = [], v = !1, l = {
      state: p,
      setOptions: function(y) {
        var P = typeof y == "function" ? y(p.options) : y;
        m(), p.options = Object.assign({}, a, p.options, P), p.scrollParents = {
          reference: _(i) ? fe(i) : i.contextElement ? fe(i.contextElement) : [],
          popper: fe(s)
        };
        var E = dr(mr([].concat(o, p.options.modifiers)));
        return p.orderedModifiers = E.filter(function(d) {
          return d.enabled;
        }), b(), l.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!v) {
          var y = p.elements, P = y.reference, E = y.popper;
          if (at(P, E)) {
            p.rects = {
              reference: Qt(P, ve(E), p.options.strategy === "fixed"),
              popper: We(E)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(O) {
              return p.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var d = 0; d < p.orderedModifiers.length; d++) {
              if (p.reset === !0) {
                p.reset = !1, d = -1;
                continue;
              }
              var w = p.orderedModifiers[d], g = w.fn, x = w.options, k = x === void 0 ? {} : x, A = w.name;
              typeof g == "function" && (p = g({
                state: p,
                options: k,
                name: A,
                instance: l
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: vr(function() {
        return new Promise(function(u) {
          l.forceUpdate(), u(p);
        });
      }),
      destroy: function() {
        m(), v = !0;
      }
    };
    if (!at(i, s))
      return l;
    l.setOptions(f).then(function(u) {
      !v && f.onFirstUpdate && f.onFirstUpdate(u);
    });
    function b() {
      p.orderedModifiers.forEach(function(u) {
        var y = u.name, P = u.options, E = P === void 0 ? {} : P, d = u.effect;
        if (typeof d == "function") {
          var w = d({
            state: p,
            name: y,
            instance: l,
            options: E
          }), g = function() {
          };
          h.push(w || g);
        }
      });
    }
    function m() {
      h.forEach(function(u) {
        return u();
      }), h = [];
    }
    return l;
  };
}
var we = {
  passive: !0
};
function Or(e) {
  var t = e.state, r = e.instance, o = e.options, n = o.scroll, a = n === void 0 ? !0 : n, c = o.resize, i = c === void 0 ? !0 : c, s = L(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(p) {
    p.addEventListener("scroll", r.update, we);
  }), i && s.addEventListener("resize", r.update, we), function() {
    a && f.forEach(function(p) {
      p.removeEventListener("scroll", r.update, we);
    }), i && s.removeEventListener("resize", r.update, we);
  };
}
const Pr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Or,
  data: {}
};
function Er(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = mt({
    reference: t.rects.reference,
    element: t.rects.popper,
    placement: t.placement
  });
}
const kr = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Er,
  data: {}
};
var Ar = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Dr(e, t) {
  var r = e.x, o = e.y, n = t.devicePixelRatio || 1;
  return {
    x: te(r * n) / n || 0,
    y: te(o * n) / n || 0
  };
}
function it(e) {
  var t, r = e.popper, o = e.popperRect, n = e.placement, a = e.variation, c = e.offsets, i = e.position, s = e.gpuAcceleration, f = e.adaptive, p = e.roundOffsets, h = e.isFixed, v = c.x, l = v === void 0 ? 0 : v, b = c.y, m = b === void 0 ? 0 : b, u = typeof p == "function" ? p({
    x: l,
    y: m
  }) : {
    x: l,
    y: m
  };
  l = u.x, m = u.y;
  var y = c.hasOwnProperty("x"), P = c.hasOwnProperty("y"), E = T, d = R, w = window;
  if (f) {
    var g = ve(r), x = "clientHeight", k = "clientWidth";
    if (g === L(r) && (g = G(r), X(g).position !== "static" && i === "absolute" && (x = "scrollHeight", k = "scrollWidth")), g = g, n === R || (n === T || n === I) && a === de) {
      d = V;
      var A = h && g === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        g[x]
      );
      m -= A - o.height, m *= s ? 1 : -1;
    }
    if (n === T || (n === R || n === V) && a === de) {
      E = I;
      var O = h && g === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        g[k]
      );
      l -= O - o.width, l *= s ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: i
  }, f && Ar), S = p === !0 ? Dr({
    x: l,
    y: m
  }, L(r)) : {
    x: l,
    y: m
  };
  if (l = S.x, m = S.y, s) {
    var C;
    return Object.assign({}, D, (C = {}, C[d] = P ? "0" : "", C[E] = y ? "0" : "", C.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + l + "px, " + m + "px)" : "translate3d(" + l + "px, " + m + "px, 0)", C));
  }
  return Object.assign({}, D, (t = {}, t[d] = P ? m + "px" : "", t[E] = y ? l + "px" : "", t.transform = "", t));
}
function Cr(e) {
  var t = e.state, r = e.options, o = r.gpuAcceleration, n = o === void 0 ? !0 : o, a = r.adaptive, c = a === void 0 ? !0 : a, i = r.roundOffsets, s = i === void 0 ? !0 : i, f = {
    placement: z(t.placement),
    variation: oe(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, it(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: c,
    roundOffsets: s
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, it(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: s
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const $r = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Cr,
  data: {}
};
function Br(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var o = t.styles[r] || {}, n = t.attributes[r] || {}, a = t.elements[r];
    !N(a) || !F(a) || (Object.assign(a.style, o), Object.keys(n).forEach(function(c) {
      var i = n[c];
      i === !1 ? a.removeAttribute(c) : a.setAttribute(c, i === !0 ? "" : i);
    }));
  });
}
function jr(e) {
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
    Object.keys(t.elements).forEach(function(o) {
      var n = t.elements[o], a = t.attributes[o] || {}, c = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]), i = c.reduce(function(s, f) {
        return s[f] = "", s;
      }, {});
      !N(n) || !F(n) || (Object.assign(n.style, i), Object.keys(a).forEach(function(s) {
        n.removeAttribute(s);
      }));
    });
  };
}
const Sr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Br,
  effect: jr,
  requires: ["computeStyles"]
};
var Rr = [Pr, kr, $r, Sr], Tr = /* @__PURE__ */ xr({
  defaultModifiers: Rr
});
function Lr(e) {
  return e === "x" ? "y" : "x";
}
function le(e, t, r) {
  return Z(e, Oe(t, r));
}
function Mr(e, t, r) {
  var o = le(e, t, r);
  return o > r ? r : o;
}
function Nr(e) {
  var t = e.state, r = e.options, o = e.name, n = r.mainAxis, a = n === void 0 ? !0 : n, c = r.altAxis, i = c === void 0 ? !1 : c, s = r.boundary, f = r.rootBoundary, p = r.altBoundary, h = r.padding, v = r.tether, l = v === void 0 ? !0 : v, b = r.tetherOffset, m = b === void 0 ? 0 : b, u = He(t, {
    boundary: s,
    rootBoundary: f,
    padding: h,
    altBoundary: p
  }), y = z(t.placement), P = oe(t.placement), E = !P, d = Ie(y), w = Lr(d), g = t.modifiersData.popperOffsets, x = t.rects.reference, k = t.rects.popper, A = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, O = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, S = {
    x: 0,
    y: 0
  };
  if (g) {
    if (a) {
      var C, q = d === "y" ? R : T, W = d === "y" ? V : I, $ = d === "y" ? "height" : "width", j = g[d], H = j + u[q], Y = j - u[W], B = l ? -k[$] / 2 : 0, M = P === ne ? x[$] : k[$], U = P === ne ? -k[$] : -x[$], he = t.elements.arrow, ee = l && he ? We(he) : {
        width: 0,
        height: 0
      }, K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : ht(), ae = K[q], be = K[W], J = le(0, x[$], ee[$]), Ee = E ? x[$] / 2 - B - J - ae - O.mainAxis : M - J - ae - O.mainAxis, wt = E ? -x[$] / 2 + B + J + be + O.mainAxis : U + J + be + O.mainAxis, ke = t.elements.arrow && ve(t.elements.arrow), xt = ke ? d === "y" ? ke.clientTop || 0 : ke.clientLeft || 0 : 0, ze = (C = D?.[d]) != null ? C : 0, Ot = j + Ee - ze - xt, Pt = j + wt - ze, Fe = le(l ? Oe(H, Ot) : H, j, l ? Z(Y, Pt) : Y);
      g[d] = Fe, S[d] = Fe - j;
    }
    if (i) {
      var qe, Et = d === "x" ? R : T, kt = d === "x" ? V : I, Q = g[w], ge = w === "y" ? "height" : "width", Ye = Q + u[Et], Xe = Q - u[kt], Ae = [R, T].indexOf(y) !== -1, Ue = (qe = D?.[w]) != null ? qe : 0, Ke = Ae ? Ye : Q - x[ge] - k[ge] - Ue + O.altAxis, Ge = Ae ? Q + x[ge] + k[ge] - Ue - O.altAxis : Xe, Je = l && Ae ? Mr(Ke, Q, Ge) : le(l ? Ke : Ye, Q, l ? Ge : Xe);
      g[w] = Je, S[w] = Je - Q;
    }
    t.modifiersData[o] = S;
  }
}
const Wr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Nr,
  requiresIfExists: ["offset"]
};
var Vr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function xe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Vr[t];
  });
}
var Ir = {
  start: "end",
  end: "start"
};
function st(e) {
  return e.replace(/start|end/g, function(t) {
    return Ir[t];
  });
}
function Hr(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, n = r.boundary, a = r.rootBoundary, c = r.padding, i = r.flipVariations, s = r.allowedAutoPlacements, f = s === void 0 ? dt : s, p = oe(o), h = p ? i ? rt : rt.filter(function(b) {
    return oe(b) === p;
  }) : me, v = h.filter(function(b) {
    return f.indexOf(b) >= 0;
  });
  v.length === 0 && (v = h);
  var l = v.reduce(function(b, m) {
    return b[m] = He(e, {
      placement: m,
      boundary: n,
      rootBoundary: a,
      padding: c
    })[z(m)], b;
  }, {});
  return Object.keys(l).sort(function(b, m) {
    return l[b] - l[m];
  });
}
function zr(e) {
  if (z(e) === Ve)
    return [];
  var t = xe(e);
  return [st(e), t, st(t)];
}
function Fr(e) {
  var t = e.state, r = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var n = r.mainAxis, a = n === void 0 ? !0 : n, c = r.altAxis, i = c === void 0 ? !0 : c, s = r.fallbackPlacements, f = r.padding, p = r.boundary, h = r.rootBoundary, v = r.altBoundary, l = r.flipVariations, b = l === void 0 ? !0 : l, m = r.allowedAutoPlacements, u = t.options.placement, y = z(u), P = y === u, E = s || (P || !b ? [xe(u)] : zr(u)), d = [u].concat(E).reduce(function(ee, K) {
      return ee.concat(z(K) === Ve ? Hr(t, {
        placement: K,
        boundary: p,
        rootBoundary: h,
        padding: f,
        flipVariations: b,
        allowedAutoPlacements: m
      }) : K);
    }, []), w = t.rects.reference, g = t.rects.popper, x = /* @__PURE__ */ new Map(), k = !0, A = d[0], O = 0; O < d.length; O++) {
      var D = d[O], S = z(D), C = oe(D) === ne, q = [R, V].indexOf(S) >= 0, W = q ? "width" : "height", $ = He(t, {
        placement: D,
        boundary: p,
        rootBoundary: h,
        altBoundary: v,
        padding: f
      }), j = q ? C ? I : T : C ? V : R;
      w[W] > g[W] && (j = xe(j));
      var H = xe(j), Y = [];
      if (a && Y.push($[S] <= 0), i && Y.push($[j] <= 0, $[H] <= 0), Y.every(function(ee) {
        return ee;
      })) {
        A = D, k = !1;
        break;
      }
      x.set(D, Y);
    }
    if (k)
      for (var B = b ? 3 : 1, M = function(K) {
        var ae = d.find(function(be) {
          var J = x.get(be);
          if (J)
            return J.slice(0, K).every(function(Ee) {
              return Ee;
            });
        });
        if (ae)
          return A = ae, "break";
      }, U = B; U > 0; U--) {
        var he = M(U);
        if (he === "break") break;
      }
    t.placement !== A && (t.modifiersData[o]._skip = !0, t.placement = A, t.reset = !0);
  }
}
const qr = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Fr,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Yr(e, t, r) {
  var o = z(e), n = [T, R].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, c = a[0], i = a[1];
  return c = c || 0, i = (i || 0) * n, [T, I].indexOf(o) >= 0 ? {
    x: i,
    y: c
  } : {
    x: c,
    y: i
  };
}
function Xr(e) {
  var t = e.state, r = e.options, o = e.name, n = r.offset, a = n === void 0 ? [0, 0] : n, c = dt.reduce(function(p, h) {
    return p[h] = Yr(h, t.rects, a), p;
  }, {}), i = c[t.placement], s = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += s, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = c;
}
const Ur = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Xr
};
var Kr = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, bt(typeof t != "number" ? t : gt(t, me));
};
function Gr(e) {
  var t, r = e.state, o = e.name, n = e.options, a = r.elements.arrow, c = r.modifiersData.popperOffsets, i = z(r.placement), s = Ie(i), f = [T, I].indexOf(i) >= 0, p = f ? "height" : "width";
  if (!(!a || !c)) {
    var h = Kr(n.padding, r), v = We(a), l = s === "y" ? R : T, b = s === "y" ? V : I, m = r.rects.reference[p] + r.rects.reference[s] - c[s] - r.rects.popper[p], u = c[s] - r.rects.reference[s], y = ve(a), P = y ? s === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0, E = m / 2 - u / 2, d = h[l], w = P - v[p] - h[b], g = P / 2 - v[p] / 2 + E, x = le(d, g, w), k = s;
    r.modifiersData[o] = (t = {}, t[k] = x, t.centerOffset = x - g, t);
  }
}
function Jr(e) {
  var t = e.state, r = e.options, o = r.element, n = o === void 0 ? "[data-popper-arrow]" : o;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || vt(t.elements.popper, n) && (t.elements.arrow = n));
}
const Qr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Gr,
  effect: Jr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
}, Ce = (e) => parseInt(e, 10);
function Zr({
  arrowPadding: e,
  emit: t,
  locked: r,
  offsetDistance: o,
  offsetSkid: n,
  placement: a,
  popperNode: c,
  triggerNode: i,
  strategy: s
}) {
  const f = Vt({
    isOpen: !1,
    popperInstance: null
  }), p = (u) => {
    f.popperInstance?.setOptions((y) => ({
      ...y,
      modifiers: [...y.modifiers, { name: "eventListeners", enabled: u }]
    }));
  }, h = () => p(!0), v = () => p(!1), l = () => {
    f.isOpen && (f.isOpen = !1, t("close:popper"));
  }, b = () => {
    f.isOpen || (f.isOpen = !0, t("open:popper"));
  };
  ue([() => f.isOpen, a, s], async ([u]) => {
    u ? (await m(), h()) : v();
  });
  const m = async () => {
    await It(), f.popperInstance = Tr(i.value, c.value, {
      placement: a.value,
      modifiers: [
        Wr,
        qr,
        {
          name: "flip",
          enabled: !r.value
        },
        Qr,
        {
          name: "arrow",
          options: {
            padding: Ce(e.value)
          }
        },
        Ur,
        {
          name: "offset",
          options: {
            offset: [Ce(n.value), Ce(o.value)]
          }
        }
      ],
      strategy: s.value
    }), f.popperInstance.update();
  };
  return Re(() => {
    f.popperInstance?.destroy();
  }), {
    ...pt(f),
    open: b,
    close: l
  };
}
const yt = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, _r = {}, en = {
  id: "arrow",
  "data-popper-arrow": ""
};
function tn(e, t) {
  return $e(), ct("div", en);
}
const rn = /* @__PURE__ */ yt(_r, [["render", tn], ["__scopeId", "data-v-3d019fcc"]]), nn = {
  __name: "Popper",
  props: {
    /**
     * Preferred placement (the "auto" placements will choose the side with most space.)
     */
    placement: {
      type: String,
      default: "bottom",
      validator: function(e) {
        return [
          "auto",
          "auto-start",
          "auto-end",
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end",
          "right",
          "right-start",
          "right-end",
          "left",
          "left-start",
          "left-end"
        ].includes(e);
      }
    },
    /**
     * Disables automatically closing the popover when the user clicks away from it
     */
    disableClickAway: {
      type: Boolean,
      default: !1
    },
    /**
     * Offset in pixels along the trigger element
     */
    offsetSkid: {
      type: String,
      default: "0"
    },
    /**
     * Offset in pixels away from the trigger element
     */
    offsetDistance: {
      type: String,
      default: "12"
    },
    /**
     * Trigger the popper on hover
     */
    hover: {
      type: Boolean,
      default: !1
    },
    /**
     * Manually open/close the Popper, other events are ignored if this prop is set
     */
    show: {
      type: Boolean,
      default: null
    },
    /**
     * Disables the Popper. If it was already open, it will be closed.
     */
    disabled: {
      type: Boolean,
      default: !1
    },
    /**
     * Open the Popper after a delay (ms).
     */
    openDelay: {
      type: [Number, String],
      default: 0
    },
    /**
     * Close the Popper after a delay (ms).
     */
    closeDelay: {
      type: [Number, String],
      default: 0
    },
    /**
     * The z-index of the Popper.
     */
    zIndex: {
      type: [Number, String],
      default: 9999
    },
    /**
     * Display an arrow on the popper
     */
    arrow: {
      type: Boolean,
      default: !1
    },
    /**
     * Stop arrow from reaching the edge of the popper
     */
    arrowPadding: {
      type: String,
      default: "0"
    },
    /**
     * If the Popper should be interactive, it will close when clicked/hovered if false
     */
    interactive: {
      type: Boolean,
      default: !0
    },
    /**
     * Lock the Popper into place, it will not flip dynamically when it runs out of space if true
     */
    locked: {
      type: Boolean,
      default: !1
    },
    /**
     * If the content is just a simple string, it can be passed in as a prop
     */
    content: {
      type: String,
      default: null
    },
    /**
     * Positioning strategy, defaults to absolute
     * @see https://popper.js.org/docs/v2/constructors/#strategy
     */
    strategy: {
      type: String,
      default: "absolute",
      validator: function(e) {
        return ["absolute", "fixed"].includes(e);
      }
    }
  },
  emits: ["open:popper", "close:popper"],
  setup(e, { emit: t }) {
    At((B) => ({
      c015fa4e: e.zIndex
    }));
    const r = t, o = Dt(), n = e, a = pe(null), c = pe(null), i = pe(null), s = pe(!1);
    Se(() => {
      const B = o.default();
      if (B && B.length > 1)
        return console.error(
          `[Popper]: The <Popper> component expects only one child element at its root. You passed ${B.length} child nodes.`
        );
    });
    const {
      arrowPadding: f,
      closeDelay: p,
      content: h,
      disableClickAway: v,
      disabled: l,
      interactive: b,
      locked: m,
      offsetDistance: u,
      offsetSkid: y,
      openDelay: P,
      placement: E,
      show: d,
      strategy: w
    } = pt(n), { isOpen: g, open: x, close: k } = Zr({
      arrowPadding: f,
      emit: r,
      locked: m,
      offsetDistance: u,
      offsetSkid: y,
      placement: E,
      popperNode: c,
      triggerNode: i,
      strategy: w
    }), { hasContent: A } = Ut(o, c, h), O = ie(() => d.value !== null), D = ie(() => l.value || !A.value), S = ie(() => g.value && !D.value), C = ie(
      () => !v.value && !O.value
    ), q = ie(
      () => b.value ? `border: ${u.value}px solid transparent; margin: -${u.value}px;` : null
    ), W = De(x, P.value), $ = De(k, p.value), j = async () => {
      D.value || O.value || ($.clear(), W());
    }, H = async () => {
      O.value || (W.clear(), $());
    }, Y = () => {
      g.value ? H() : j();
    };
    return ue([A, l], ([B, M]) => {
      g.value && (!B || M) && k();
    }), ue(g, (B) => {
      B ? s.value = !0 : De(() => {
        s.value = !1;
      }, 200);
    }), Qe(() => {
      O.value && (d.value ? W() : $());
    }), Qe(() => {
      C.value && Xt(a, H);
    }), (B, M) => ($e(), ct("div", {
      class: "inline-block",
      style: Ct(q.value),
      onMouseleave: M[2] || (M[2] = (U) => e.hover && H()),
      ref_key: "popperContainerNode",
      ref: a
    }, [
      Ze("div", {
        ref_key: "triggerNode",
        ref: i,
        onMouseover: M[0] || (M[0] = (U) => e.hover && j()),
        onClick: Y,
        onFocus: j,
        onKeyup: $t(H, ["esc"])
      }, [
        _e(B.$slots, "default", {}, void 0, !0)
      ], 544),
      Bt(jt, { name: "fade" }, {
        default: St(() => [
          Rt(Ze("div", {
            onClick: M[1] || (M[1] = (U) => !ce(b) && H()),
            class: "popper",
            ref_key: "popperNode",
            ref: c
          }, [
            _e(B.$slots, "content", {
              close: ce(k),
              isOpen: s.value
            }, () => [
              Tt(Lt(ce(h)), 1)
            ], !0),
            e.arrow ? ($e(), Mt(rn, { key: 0 })) : Nt("", !0)
          ], 512), [
            [Wt, S.value]
          ])
        ]),
        _: 3
      })
    ], 36));
  }
}, on = /* @__PURE__ */ yt(nn, [["__scopeId", "data-v-3cdf184f"]]), sn = (() => {
  const e = on;
  return console.log("YOLO POPPERS"), e.install = (t) => {
    t.component("Popper", e);
  }, e;
})();
export {
  sn as default
};
