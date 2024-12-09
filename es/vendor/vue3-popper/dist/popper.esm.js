import { useCssVars as ht, useSlots as bt, ref as ae, onMounted as De, toRefs as tt, computed as ne, watch as se, watchEffect as Xe, openBlock as ke, createElementBlock as rt, normalizeStyle as gt, unref as Q, createElementVNode as Ye, withKeys as yt, renderSlot as Ue, createVNode as wt, Transition as xt, withCtx as Ot, withDirectives as Et, createTextVNode as Pt, toDisplayString as kt, createBlock as St, createCommentVNode as Ct, vShow as Dt, onBeforeUnmount as $e, reactive as $t, nextTick as Bt, isRef as At } from "vue";
function Se(e, t, r) {
  var o, n, a, s, i;
  t == null && (t = 100);
  function l() {
    var p = Date.now() - s;
    p < t && p >= 0 ? o = setTimeout(l, t - p) : (o = null, r || (i = e.apply(a, n), a = n = null));
  }
  var f = function() {
    a = this, n = arguments, s = Date.now();
    var p = r && !o;
    return o || (o = setTimeout(l, t)), p && (i = e.apply(a, n), a = n = null), i;
  };
  return f.clear = function() {
    o && (clearTimeout(o), o = null);
  }, f.flush = function() {
    o && (i = e.apply(a, n), a = n = null, clearTimeout(o), o = null);
  }, f;
}
Se.debounce = Se;
var Ee = Se;
function Tt(e, t, r) {
  At(e) ? se(e, (o, n) => {
    n?.removeEventListener(t, r), o?.addEventListener(t, r);
  }) : De(() => {
    e.addEventListener(t, r);
  }), $e(() => {
    var o;
    (o = Q(e)) === null || o === void 0 || o.removeEventListener(t, r);
  });
}
function jt(e, t) {
  const r = "pointerdown";
  return typeof window > "u" || !window ? void 0 : Tt(window, r, (n) => {
    const a = Q(e);
    a && (a === n.target || n.composedPath().includes(a) || t(n));
  });
}
function Lt(e, t, r) {
  let o = null;
  const n = ae(!1);
  De(() => {
    (e.content !== void 0 || r.value) && (n.value = !0), o = new MutationObserver(a), o.observe(t.value, {
      childList: !0,
      subtree: !0
    });
  }), $e(() => o.disconnect()), se(r, (s) => {
    s ? n.value = !0 : n.value = !1;
  });
  const a = () => {
    e.content ? n.value = !0 : n.value = !1;
  };
  return {
    hasContent: n
  };
}
function _(e, t) {
  var r = e.getBoundingClientRect(), o = 1, n = 1;
  return {
    width: r.width / o,
    height: r.height / n,
    top: r.top / n,
    right: r.right / o,
    bottom: r.bottom / n,
    left: r.left / o,
    x: r.left / o,
    y: r.top / n
  };
}
function I(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Be(e) {
  var t = I(e), r = t.pageXOffset, o = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: o
  };
}
function pe(e) {
  var t = I(e).Element;
  return e instanceof t || e instanceof Element;
}
function L(e) {
  var t = I(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function nt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = I(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Rt(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Mt(e) {
  return e === I(e) || !L(e) ? Be(e) : Rt(e);
}
function F(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
  return ((pe(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Ae(e) {
  return _(G(e)).left + Be(e).scrollLeft;
}
function U(e) {
  return I(e).getComputedStyle(e);
}
function Te(e) {
  var t = U(e), r = t.overflow, o = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + n + o);
}
function Nt(e) {
  var t = e.getBoundingClientRect(), r = t.width / e.offsetWidth || 1, o = t.height / e.offsetHeight || 1;
  return r !== 1 || o !== 1;
}
function Wt(e, t, r) {
  r === void 0 && (r = !1);
  var o = L(t);
  L(t) && Nt(t);
  var n = G(t), a = _(e), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = {
    x: 0,
    y: 0
  };
  return (o || !o && !r) && ((F(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Te(n)) && (s = Mt(t)), L(t) ? (i = _(t), i.x += t.clientLeft, i.y += t.clientTop) : n && (i.x = Ae(n))), {
    x: a.left + s.scrollLeft - i.x,
    y: a.top + s.scrollTop - i.y,
    width: a.width,
    height: a.height
  };
}
function je(e) {
  var t = _(e), r = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: o
  };
}
function we(e) {
  return F(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (nt(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    G(e)
  );
}
function ot(e) {
  return ["html", "body", "#document"].indexOf(F(e)) >= 0 ? e.ownerDocument.body : L(e) && Te(e) ? e : ot(we(e));
}
function ie(e, t) {
  var r;
  t === void 0 && (t = []);
  var o = ot(e), n = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = I(o), s = n ? [a].concat(a.visualViewport || [], Te(o) ? o : []) : o, i = t.concat(s);
  return n ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(ie(we(s)))
  );
}
function It(e) {
  return ["table", "td", "th"].indexOf(F(e)) >= 0;
}
function Ke(e) {
  return !L(e) || // https://github.com/popperjs/popper-core/issues/837
  U(e).position === "fixed" ? null : e.offsetParent;
}
function Ht(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, r = navigator.userAgent.indexOf("Trident") !== -1;
  if (r && L(e)) {
    var o = U(e);
    if (o.position === "fixed")
      return null;
  }
  for (var n = we(e); L(n) && ["html", "body"].indexOf(F(n)) < 0; ) {
    var a = U(n);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function ce(e) {
  for (var t = I(e), r = Ke(e); r && It(r) && U(r).position === "static"; )
    r = Ke(r);
  return r && (F(r) === "html" || F(r) === "body" && U(r).position === "static") ? t : r || Ht(e) || t;
}
var R = "top", N = "bottom", W = "right", M = "left", Le = "auto", ue = [R, N, W, M], ee = "start", le = "end", zt = "clippingParents", at = "viewport", oe = "popper", Vt = "reference", Ge = /* @__PURE__ */ ue.reduce(function(e, t) {
  return e.concat([t + "-" + ee, t + "-" + le]);
}, []), it = /* @__PURE__ */ [].concat(ue, [Le]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ee, t + "-" + le]);
}, []), Ft = "beforeRead", qt = "read", Xt = "afterRead", Yt = "beforeMain", Ut = "main", Kt = "afterMain", Gt = "beforeWrite", Jt = "write", Qt = "afterWrite", Zt = [Ft, qt, Xt, Yt, Ut, Kt, Gt, Jt, Qt];
function _t(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function n(a) {
    r.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!r.has(i)) {
        var l = t.get(i);
        l && n(l);
      }
    }), o.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || n(a);
  }), o;
}
function er(e) {
  var t = _t(e);
  return Zt.reduce(function(r, o) {
    return r.concat(t.filter(function(n) {
      return n.phase === o;
    }));
  }, []);
}
function tr(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function V(e) {
  return e.split("-")[0];
}
function rr(e) {
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
function nr(e) {
  var t = I(e), r = G(e), o = t.visualViewport, n = r.clientWidth, a = r.clientHeight, s = 0, i = 0;
  return o && (n = o.width, a = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = o.offsetLeft, i = o.offsetTop)), {
    width: n,
    height: a,
    x: s + Ae(e),
    y: i
  };
}
var K = Math.max, fe = Math.min, he = Math.round;
function or(e) {
  var t, r = G(e), o = Be(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, a = K(r.scrollWidth, r.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), s = K(r.scrollHeight, r.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), i = -o.scrollLeft + Ae(e), l = -o.scrollTop;
  return U(n || r).direction === "rtl" && (i += K(r.clientWidth, n ? n.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: l
  };
}
function st(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && nt(r)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function Ce(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function ar(e) {
  var t = _(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Je(e, t) {
  return t === at ? Ce(nr(e)) : L(t) ? ar(t) : Ce(or(G(e)));
}
function ir(e) {
  var t = ie(we(e)), r = ["absolute", "fixed"].indexOf(U(e).position) >= 0, o = r && L(e) ? ce(e) : e;
  return pe(o) ? t.filter(function(n) {
    return pe(n) && st(n, o) && F(n) !== "body";
  }) : [];
}
function sr(e, t, r) {
  var o = t === "clippingParents" ? ir(e) : [].concat(t), n = [].concat(o, [r]), a = n[0], s = n.reduce(function(i, l) {
    var f = Je(e, l);
    return i.top = K(f.top, i.top), i.right = fe(f.right, i.right), i.bottom = fe(f.bottom, i.bottom), i.left = K(f.left, i.left), i;
  }, Je(e, a));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function te(e) {
  return e.split("-")[1];
}
function Re(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function pt(e) {
  var t = e.reference, r = e.element, o = e.placement, n = o ? V(o) : null, a = o ? te(o) : null, s = t.x + t.width / 2 - r.width / 2, i = t.y + t.height / 2 - r.height / 2, l;
  switch (n) {
    case R:
      l = {
        x: s,
        y: t.y - r.height
      };
      break;
    case N:
      l = {
        x: s,
        y: t.y + t.height
      };
      break;
    case W:
      l = {
        x: t.x + t.width,
        y: i
      };
      break;
    case M:
      l = {
        x: t.x - r.width,
        y: i
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var f = n ? Re(n) : null;
  if (f != null) {
    var p = f === "y" ? "height" : "width";
    switch (a) {
      case ee:
        l[f] = l[f] - (t[p] / 2 - r[p] / 2);
        break;
      case le:
        l[f] = l[f] + (t[p] / 2 - r[p] / 2);
        break;
    }
  }
  return l;
}
function lt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function ft(e) {
  return Object.assign({}, lt(), e);
}
function ct(e, t) {
  return t.reduce(function(r, o) {
    return r[o] = e, r;
  }, {});
}
function Me(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, n = o === void 0 ? e.placement : o, a = r.boundary, s = a === void 0 ? zt : a, i = r.rootBoundary, l = i === void 0 ? at : i, f = r.elementContext, p = f === void 0 ? oe : f, y = r.altBoundary, E = y === void 0 ? !1 : y, d = r.padding, m = d === void 0 ? 0 : d, v = ft(typeof m != "number" ? m : ct(m, ue)), c = p === oe ? Vt : oe, b = e.rects.popper, h = e.elements[E ? c : p], x = sr(pe(h) ? h : h.contextElement || G(e.elements.popper), s, l), u = _(e.elements.reference), g = pt({
    reference: u,
    element: b,
    strategy: "absolute",
    placement: n
  }), O = Ce(Object.assign({}, b, g)), w = p === oe ? O : u, k = {
    top: x.top - w.top + v.top,
    bottom: w.bottom - x.bottom + v.bottom,
    left: x.left - w.left + v.left,
    right: w.right - x.right + v.right
  }, P = e.modifiersData.offset;
  if (p === oe && P) {
    var D = P[n];
    Object.keys(k).forEach(function(B) {
      var q = [W, N].indexOf(B) >= 0 ? 1 : -1, C = [R, N].indexOf(B) >= 0 ? "y" : "x";
      k[B] += D[C] * q;
    });
  }
  return k;
}
var Qe = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function Ze() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function pr(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, o = r === void 0 ? [] : r, n = t.defaultOptions, a = n === void 0 ? Qe : n;
  return function(i, l, f) {
    f === void 0 && (f = a);
    var p = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Qe, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: l
      },
      attributes: {},
      styles: {}
    }, y = [], E = !1, d = {
      state: p,
      setOptions: function(b) {
        var h = typeof b == "function" ? b(p.options) : b;
        v(), p.options = Object.assign({}, a, p.options, h), p.scrollParents = {
          reference: pe(i) ? ie(i) : i.contextElement ? ie(i.contextElement) : [],
          popper: ie(l)
        };
        var x = er(rr([].concat(o, p.options.modifiers)));
        return p.orderedModifiers = x.filter(function(u) {
          return u.enabled;
        }), m(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!E) {
          var b = p.elements, h = b.reference, x = b.popper;
          if (Ze(h, x)) {
            p.rects = {
              reference: Wt(h, ce(x), p.options.strategy === "fixed"),
              popper: je(x)
            }, p.reset = !1, p.placement = p.options.placement, p.orderedModifiers.forEach(function(D) {
              return p.modifiersData[D.name] = Object.assign({}, D.data);
            });
            for (var u = 0; u < p.orderedModifiers.length; u++) {
              if (p.reset === !0) {
                p.reset = !1, u = -1;
                continue;
              }
              var g = p.orderedModifiers[u], O = g.fn, w = g.options, k = w === void 0 ? {} : w, P = g.name;
              typeof O == "function" && (p = O({
                state: p,
                options: k,
                name: P,
                instance: d
              }) || p);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: tr(function() {
        return new Promise(function(c) {
          d.forceUpdate(), c(p);
        });
      }),
      destroy: function() {
        v(), E = !0;
      }
    };
    if (!Ze(i, l))
      return d;
    d.setOptions(f).then(function(c) {
      !E && f.onFirstUpdate && f.onFirstUpdate(c);
    });
    function m() {
      p.orderedModifiers.forEach(function(c) {
        var b = c.name, h = c.options, x = h === void 0 ? {} : h, u = c.effect;
        if (typeof u == "function") {
          var g = u({
            state: p,
            name: b,
            instance: d,
            options: x
          }), O = function() {
          };
          y.push(g || O);
        }
      });
    }
    function v() {
      y.forEach(function(c) {
        return c();
      }), y = [];
    }
    return d;
  };
}
var be = {
  passive: !0
};
function lr(e) {
  var t = e.state, r = e.instance, o = e.options, n = o.scroll, a = n === void 0 ? !0 : n, s = o.resize, i = s === void 0 ? !0 : s, l = I(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && f.forEach(function(p) {
    p.addEventListener("scroll", r.update, be);
  }), i && l.addEventListener("resize", r.update, be), function() {
    a && f.forEach(function(p) {
      p.removeEventListener("scroll", r.update, be);
    }), i && l.removeEventListener("resize", r.update, be);
  };
}
var fr = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: lr,
  data: {}
};
function cr(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = pt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
var ur = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: cr,
  data: {}
}, dr = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function vr(e) {
  var t = e.x, r = e.y, o = window, n = o.devicePixelRatio || 1;
  return {
    x: he(he(t * n) / n) || 0,
    y: he(he(r * n) / n) || 0
  };
}
function _e(e) {
  var t, r = e.popper, o = e.popperRect, n = e.placement, a = e.variation, s = e.offsets, i = e.position, l = e.gpuAcceleration, f = e.adaptive, p = e.roundOffsets, y = p === !0 ? vr(s) : typeof p == "function" ? p(s) : s, E = y.x, d = E === void 0 ? 0 : E, m = y.y, v = m === void 0 ? 0 : m, c = s.hasOwnProperty("x"), b = s.hasOwnProperty("y"), h = M, x = R, u = window;
  if (f) {
    var g = ce(r), O = "clientHeight", w = "clientWidth";
    g === I(r) && (g = G(r), U(g).position !== "static" && i === "absolute" && (O = "scrollHeight", w = "scrollWidth")), g = g, (n === R || (n === M || n === W) && a === le) && (x = N, v -= g[O] - o.height, v *= l ? 1 : -1), (n === M || (n === R || n === N) && a === le) && (h = W, d -= g[w] - o.width, d *= l ? 1 : -1);
  }
  var k = Object.assign({
    position: i
  }, f && dr);
  if (l) {
    var P;
    return Object.assign({}, k, (P = {}, P[x] = b ? "0" : "", P[h] = c ? "0" : "", P.transform = (u.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + v + "px)" : "translate3d(" + d + "px, " + v + "px, 0)", P));
  }
  return Object.assign({}, k, (t = {}, t[x] = b ? v + "px" : "", t[h] = c ? d + "px" : "", t.transform = "", t));
}
function mr(e) {
  var t = e.state, r = e.options, o = r.gpuAcceleration, n = o === void 0 ? !0 : o, a = r.adaptive, s = a === void 0 ? !0 : a, i = r.roundOffsets, l = i === void 0 ? !0 : i, f = {
    placement: V(t.placement),
    variation: te(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, _e(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, _e(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
var hr = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: mr,
  data: {}
};
function br(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var o = t.styles[r] || {}, n = t.attributes[r] || {}, a = t.elements[r];
    !L(a) || !F(a) || (Object.assign(a.style, o), Object.keys(n).forEach(function(s) {
      var i = n[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function gr(e) {
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
      var n = t.elements[o], a = t.attributes[o] || {}, s = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : r[o]), i = s.reduce(function(l, f) {
        return l[f] = "", l;
      }, {});
      !L(n) || !F(n) || (Object.assign(n.style, i), Object.keys(a).forEach(function(l) {
        n.removeAttribute(l);
      }));
    });
  };
}
var yr = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: br,
  effect: gr,
  requires: ["computeStyles"]
}, wr = [fr, ur, hr, yr], xr = /* @__PURE__ */ pr({
  defaultModifiers: wr
});
function Or(e) {
  return e === "x" ? "y" : "x";
}
function ge(e, t, r) {
  return K(e, fe(t, r));
}
function Er(e) {
  var t = e.state, r = e.options, o = e.name, n = r.mainAxis, a = n === void 0 ? !0 : n, s = r.altAxis, i = s === void 0 ? !1 : s, l = r.boundary, f = r.rootBoundary, p = r.altBoundary, y = r.padding, E = r.tether, d = E === void 0 ? !0 : E, m = r.tetherOffset, v = m === void 0 ? 0 : m, c = Me(t, {
    boundary: l,
    rootBoundary: f,
    padding: y,
    altBoundary: p
  }), b = V(t.placement), h = te(t.placement), x = !h, u = Re(b), g = Or(u), O = t.modifiersData.popperOffsets, w = t.rects.reference, k = t.rects.popper, P = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, D = {
    x: 0,
    y: 0
  };
  if (O) {
    if (a || i) {
      var B = u === "y" ? R : M, q = u === "y" ? N : W, C = u === "y" ? "height" : "width", X = O[u], Y = O[u] + c[B], H = O[u] - c[q], A = d ? -k[C] / 2 : 0, re = h === ee ? w[C] : k[C], S = h === ee ? -k[C] : -w[C], T = t.elements.arrow, $ = d && T ? je(T) : {
        width: 0,
        height: 0
      }, j = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : lt(), de = j[B], J = j[q], z = ge(0, w[C], $[C]), ve = x ? w[C] / 2 - A - z - de - P : re - z - de - P, xe = x ? -w[C] / 2 + A + z + J + P : S + z + J + P, Z = t.elements.arrow && ce(t.elements.arrow), Oe = Z ? u === "y" ? Z.clientTop || 0 : Z.clientLeft || 0 : 0, We = t.modifiersData.offset ? t.modifiersData.offset[t.placement][u] : 0, Ie = O[u] + ve - We - Oe, He = O[u] + xe - We;
      if (a) {
        var ze = ge(d ? fe(Y, Ie) : Y, X, d ? K(H, He) : H);
        O[u] = ze, D[u] = ze - X;
      }
      if (i) {
        var vt = u === "x" ? R : M, mt = u === "x" ? N : W, me = O[g], Ve = me + c[vt], Fe = me - c[mt], qe = ge(d ? fe(Ve, Ie) : Ve, me, d ? K(Fe, He) : Fe);
        O[g] = qe, D[g] = qe - me;
      }
    }
    t.modifiersData[o] = D;
  }
}
var Pr = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Er,
  requiresIfExists: ["offset"]
}, kr = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ye(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return kr[t];
  });
}
var Sr = {
  start: "end",
  end: "start"
};
function et(e) {
  return e.replace(/start|end/g, function(t) {
    return Sr[t];
  });
}
function Cr(e, t) {
  t === void 0 && (t = {});
  var r = t, o = r.placement, n = r.boundary, a = r.rootBoundary, s = r.padding, i = r.flipVariations, l = r.allowedAutoPlacements, f = l === void 0 ? it : l, p = te(o), y = p ? i ? Ge : Ge.filter(function(m) {
    return te(m) === p;
  }) : ue, E = y.filter(function(m) {
    return f.indexOf(m) >= 0;
  });
  E.length === 0 && (E = y);
  var d = E.reduce(function(m, v) {
    return m[v] = Me(e, {
      placement: v,
      boundary: n,
      rootBoundary: a,
      padding: s
    })[V(v)], m;
  }, {});
  return Object.keys(d).sort(function(m, v) {
    return d[m] - d[v];
  });
}
function Dr(e) {
  if (V(e) === Le)
    return [];
  var t = ye(e);
  return [et(e), t, et(t)];
}
function $r(e) {
  var t = e.state, r = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var n = r.mainAxis, a = n === void 0 ? !0 : n, s = r.altAxis, i = s === void 0 ? !0 : s, l = r.fallbackPlacements, f = r.padding, p = r.boundary, y = r.rootBoundary, E = r.altBoundary, d = r.flipVariations, m = d === void 0 ? !0 : d, v = r.allowedAutoPlacements, c = t.options.placement, b = V(c), h = b === c, x = l || (h || !m ? [ye(c)] : Dr(c)), u = [c].concat(x).reduce(function(J, z) {
      return J.concat(V(z) === Le ? Cr(t, {
        placement: z,
        boundary: p,
        rootBoundary: y,
        padding: f,
        flipVariations: m,
        allowedAutoPlacements: v
      }) : z);
    }, []), g = t.rects.reference, O = t.rects.popper, w = /* @__PURE__ */ new Map(), k = !0, P = u[0], D = 0; D < u.length; D++) {
      var B = u[D], q = V(B), C = te(B) === ee, X = [R, N].indexOf(q) >= 0, Y = X ? "width" : "height", H = Me(t, {
        placement: B,
        boundary: p,
        rootBoundary: y,
        altBoundary: E,
        padding: f
      }), A = X ? C ? W : M : C ? N : R;
      g[Y] > O[Y] && (A = ye(A));
      var re = ye(A), S = [];
      if (a && S.push(H[q] <= 0), i && S.push(H[A] <= 0, H[re] <= 0), S.every(function(J) {
        return J;
      })) {
        P = B, k = !1;
        break;
      }
      w.set(B, S);
    }
    if (k)
      for (var T = m ? 3 : 1, $ = function(z) {
        var ve = u.find(function(xe) {
          var Z = w.get(xe);
          if (Z)
            return Z.slice(0, z).every(function(Oe) {
              return Oe;
            });
        });
        if (ve)
          return P = ve, "break";
      }, j = T; j > 0; j--) {
        var de = $(j);
        if (de === "break") break;
      }
    t.placement !== P && (t.modifiersData[o]._skip = !0, t.placement = P, t.reset = !0);
  }
}
var Br = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: $r,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Ar(e, t, r) {
  var o = V(e), n = [M, R].indexOf(o) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * n, [M, W].indexOf(o) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function Tr(e) {
  var t = e.state, r = e.options, o = e.name, n = r.offset, a = n === void 0 ? [0, 0] : n, s = it.reduce(function(p, y) {
    return p[y] = Ar(y, t.rects, a), p;
  }, {}), i = s[t.placement], l = i.x, f = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += f), t.modifiersData[o] = s;
}
var jr = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Tr
}, Lr = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, ft(typeof t != "number" ? t : ct(t, ue));
};
function Rr(e) {
  var t, r = e.state, o = e.name, n = e.options, a = r.elements.arrow, s = r.modifiersData.popperOffsets, i = V(r.placement), l = Re(i), f = [M, W].indexOf(i) >= 0, p = f ? "height" : "width";
  if (!(!a || !s)) {
    var y = Lr(n.padding, r), E = je(a), d = l === "y" ? R : M, m = l === "y" ? N : W, v = r.rects.reference[p] + r.rects.reference[l] - s[l] - r.rects.popper[p], c = s[l] - r.rects.reference[l], b = ce(a), h = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, x = v / 2 - c / 2, u = y[d], g = h - E[p] - y[m], O = h / 2 - E[p] / 2 + x, w = ge(u, O, g), k = l;
    r.modifiersData[o] = (t = {}, t[k] = w, t.centerOffset = w - O, t);
  }
}
function Mr(e) {
  var t = e.state, r = e.options, o = r.element, n = o === void 0 ? "[data-popper-arrow]" : o;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || st(t.elements.popper, n) && (t.elements.arrow = n));
}
var Nr = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: Rr,
  effect: Mr,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
const Pe = (e) => parseInt(e, 10);
function Wr({
  arrowPadding: e,
  emit: t,
  locked: r,
  offsetDistance: o,
  offsetSkid: n,
  placement: a,
  popperNode: s,
  triggerNode: i,
  strategy: l
}) {
  const f = $t({
    isOpen: !1,
    popperInstance: null
  }), p = (c) => {
    var b;
    (b = f.popperInstance) === null || b === void 0 || b.setOptions((h) => ({
      ...h,
      modifiers: [...h.modifiers, {
        name: "eventListeners",
        enabled: c
      }]
    }));
  }, y = () => p(!0), E = () => p(!1), d = () => {
    f.isOpen && (f.isOpen = !1, t("close:popper"));
  }, m = () => {
    f.isOpen || (f.isOpen = !0, t("open:popper"));
  };
  se([() => f.isOpen, a, l], async ([c]) => {
    c ? (await v(), y()) : E();
  });
  const v = async () => {
    await Bt(), f.popperInstance = xr(i.value, s.value, {
      placement: a.value,
      modifiers: [Pr, Br, {
        name: "flip",
        enabled: !r.value
      }, Nr, {
        name: "arrow",
        options: {
          padding: Pe(e.value)
        }
      }, jr, {
        name: "offset",
        options: {
          offset: [Pe(n.value), Pe(o.value)]
        }
      }],
      strategy: l.value
    }), f.popperInstance.update();
  };
  return $e(() => {
    var c;
    (c = f.popperInstance) === null || c === void 0 || c.destroy();
  }), {
    ...tt(f),
    open: m,
    close: d
  };
}
const Ir = {
  id: "arrow",
  "data-popper-arrow": ""
};
function Hr(e, t) {
  return ke(), rt("div", Ir);
}
function ut(e, t) {
  t === void 0 && (t = {});
  var r = t.insertAt;
  if (!(!e || typeof document > "u")) {
    var o = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
    n.type = "text/css", r === "top" && o.firstChild ? o.insertBefore(n, o.firstChild) : o.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e));
  }
}
var zr = `
#arrow[data-v-20b7fd4a],
  #arrow[data-v-20b7fd4a]::before {
    transition: background 250ms ease-in-out;
    position: absolute;
    width: calc(10px - var(--popper-theme-border-width, 0px));
    height: calc(10px - var(--popper-theme-border-width, 0px));
    box-sizing: border-box;
    background: var(--popper-theme-background-color);
}
#arrow[data-v-20b7fd4a] {
    visibility: hidden;
}
#arrow[data-v-20b7fd4a]::before {
    visibility: visible;
    content: "";
    transform: rotate(45deg);
}

  /* Top arrow */
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a] {
    bottom: -5px;
}
.popper[data-popper-placement^="top"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-bottom: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Bottom arrow */
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a] {
    top: -5px;
}
.popper[data-popper-placement^="bottom"] > #arrow[data-v-20b7fd4a]::before {
    border-left: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Left arrow */
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a] {
    right: -5px;
}
.popper[data-popper-placement^="left"] > #arrow[data-v-20b7fd4a]::before {
    border-right: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
    border-top: var(--popper-theme-border-width)
      var(--popper-theme-border-style) var(--popper-theme-border-color);
}

  /* Right arrow */
.popper[data-popper-placement^="right"] > #arrow[data-v-20b7fd4a] {
    left: -5px;
}
`;
ut(zr);
const Ne = {};
Ne.render = Hr;
Ne.__scopeId = "data-v-20b7fd4a";
var Vr = Ne;
const Fr = ["onKeyup"];
var dt = {
  props: {
    /**
     * Preferred placement (the "auto" placements will choose the side with most space.)
     */
    placement: {
      type: String,
      default: "bottom",
      validator: function(e) {
        return ["auto", "auto-start", "auto-end", "top", "top-start", "top-end", "bottom", "bottom-start", "bottom-end", "right", "right-start", "right-end", "left", "left-start", "left-end"].includes(e);
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
  setup(e, {
    emit: t
  }) {
    const r = e;
    ht((S) => ({
      ed9a04bc: e.zIndex
    }));
    const o = bt(), n = ae(null), a = ae(null), s = ae(null), i = ae(!1);
    De(() => {
      const S = o.default();
      if (S && S.length > 1)
        return console.error(`[Popper]: The <Popper> component expects only one child element at its root. You passed ${S.length} child nodes.`);
    });
    const {
      arrowPadding: l,
      closeDelay: f,
      content: p,
      disableClickAway: y,
      disabled: E,
      interactive: d,
      locked: m,
      offsetDistance: v,
      offsetSkid: c,
      openDelay: b,
      placement: h,
      show: x,
      strategy: u
    } = tt(r), {
      isOpen: g,
      open: O,
      close: w
    } = Wr({
      arrowPadding: l,
      emit: t,
      locked: m,
      offsetDistance: v,
      offsetSkid: c,
      placement: h,
      popperNode: a,
      triggerNode: s,
      strategy: u
    }), {
      hasContent: k
    } = Lt(o, a, p), P = ne(() => x.value !== null), D = ne(() => E.value || !k.value), B = ne(() => g.value && !D.value), q = ne(() => !y.value && !P.value), C = ne(() => d.value ? `border: ${v.value}px solid transparent; margin: -${v.value}px;` : null), X = Ee.debounce(O, b.value), Y = Ee.debounce(w, f.value), H = async () => {
      D.value || P.value || (Y.clear(), X());
    }, A = async () => {
      P.value || (X.clear(), Y());
    }, re = () => {
      g.value ? A() : H();
    };
    return se([k, E], ([S, T]) => {
      g.value && (!S || T) && w();
    }), se(g, (S) => {
      S ? i.value = !0 : Ee.debounce(() => {
        i.value = !1;
      }, 200);
    }), Xe(() => {
      P.value && (x.value ? X() : Y());
    }), Xe(() => {
      q.value && jt(n, A);
    }), (S, T) => (ke(), rt("div", {
      class: "inline-block",
      style: gt(Q(C)),
      onMouseleave: T[2] || (T[2] = ($) => e.hover && A()),
      ref: ($, j) => {
        j.popperContainerNode = $, n.value = $;
      }
    }, [Ye("div", {
      ref: ($, j) => {
        j.triggerNode = $, s.value = $;
      },
      onMouseover: T[0] || (T[0] = ($) => e.hover && H()),
      onClick: re,
      onFocus: H,
      onKeyup: yt(A, ["esc"])
    }, [Ue(S.$slots, "default")], 40, Fr), wt(xt, {
      name: "fade"
    }, {
      default: Ot(() => [Et(Ye("div", {
        onClick: T[1] || (T[1] = ($) => !Q(d) && A()),
        class: "popper",
        ref: ($, j) => {
          j.popperNode = $, a.value = $;
        }
      }, [Ue(S.$slots, "content", {
        close: Q(w),
        isOpen: i.value
      }, () => [Pt(kt(Q(p)), 1)]), e.arrow ? (ke(), St(Vr, {
        key: 0
      })) : Ct("", !0)], 512), [[Dt, Q(B)]])]),
      _: 3
    })], 36));
  }
}, qr = `
.inline-block[data-v-334e58bb] {
    display: inline-block;
}
.popper[data-v-334e58bb] {
    transition: background 250ms ease-in-out;
    background: var(--popper-theme-background-color);
    padding: var(--popper-theme-padding);
    color: var(--popper-theme-text-color);
    border-radius: var(--popper-theme-border-radius);
    border-width: var(--popper-theme-border-width);
    border-style: var(--popper-theme-border-style);
    border-color: var(--popper-theme-border-color);
    box-shadow: var(--popper-theme-box-shadow);
    z-index: var(--ed9a04bc);
}
.popper[data-v-334e58bb]:hover,
  .popper:hover > #arrow[data-v-334e58bb]::before {
    background: var(--popper-theme-background-color-hover);
}
.inline-block[data-v-334e58bb] {
    display: inline-block;
}
.fade-enter-active[data-v-334e58bb],
  .fade-leave-active[data-v-334e58bb] {
    transition: opacity 0.2s ease;
}
.fade-enter-from[data-v-334e58bb],
  .fade-leave-to[data-v-334e58bb] {
    opacity: 0;
}
`;
ut(qr);
dt.__scopeId = "data-v-334e58bb";
var Yr = /* @__PURE__ */ (() => {
  const e = dt;
  return e.install = (t) => {
    t.component("Popper", e);
  }, e;
})();
export {
  Yr as default
};
