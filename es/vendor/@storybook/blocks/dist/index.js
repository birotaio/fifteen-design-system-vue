import { __toESM as Et, __commonJS as ae, __require as Te, pickBy as xn, getControlSetterButtonId as Fe, getControlId as V, cloneDeep as vn, uniq as Sn } from "./chunk-2PTXLE6R.js";
import l, { r as v } from "../../../react/index.js";
import { withReset as $e, SyntaxHighlighter as cr, FlexBar as Cn, Form as ve, IconButton as he, codeCommon as Ne, Zoom as kn, ActionBar as wn, Code as _n, nameSpaceClassNames as Tn, H2 as An, components as On, Link as ye, ResetWrapper as In, TabsState as Rn, EmptyTabContent as jn, H3 as Pn, Loader as Fn, WithTooltipPure as $n, ErrorFormatter as Nn, getStoryHref as Bn, Button as Be } from "../../core/dist/components/index.js";
import { styled as S, ignoreSsrWarning as Dn, useTheme as ur, ThemeProvider as pr, convert as Ln, themes as jt, ensure as Mn } from "../../core/dist/theming/index.js";
import { AddIcon as zn, SubtractIcon as Un, ChevronSmallUpIcon as Hn, ChevronSmallDownIcon as mr, ChevronDownIcon as Vn, ChevronRightIcon as Wn, ZoomIcon as qn, ZoomOutIcon as Gn, ZoomResetIcon as Kn, LinkIcon as Yn, DocumentIcon as ot, UndoIcon as Jn, VideoIcon as Zn, EyeCloseIcon as Xn, EyeIcon as Qn } from "../../icons/dist/index.js";
import { includeConditionalArg as ea } from "../../csf/dist/index.js";
import { SNIPPET_RENDERED as Pt, SourceType as Ge } from "../../core/dist/docs-tools/index.js";
import { dedent as ta } from "../../../ts-dedent/esm/index.js";
const { deprecate: ra, once: na, logger: xt } = __STORYBOOK_MODULE_CLIENT_LOGGER__, { filterArgTypes: Ft, composeConfigs: zu, Preview: Uu, DocsContext: Hu } = __STORYBOOK_MODULE_PREVIEW_API__, { STORY_ARGS_UPDATED: $t, UPDATE_STORY_ARGS: aa, RESET_STORY_ARGS: oa, GLOBALS_UPDATED: Nt, NAVIGATE_URL: la } = __STORYBOOK_MODULE_CORE_EVENTS__;
__STORYBOOK_MODULE_CHANNELS__;
var fr = ae({ "../../node_modules/memoizerific/memoizerific.js"(e, t) {
  (function(r) {
    if (typeof e == "object" && typeof t < "u") t.exports = r();
    else if (typeof define == "function" && define.amd) define([], r);
    else {
      var n;
      typeof window < "u" ? n = window : typeof global < "u" ? n = global : typeof self < "u" ? n = self : n = this, n.memoizerific = r();
    }
  })(function() {
    return function r(n, o, i) {
      function a(u, g) {
        if (!o[u]) {
          if (!n[u]) {
            var f = typeof Te == "function" && Te;
            if (!g && f) return f(u, !0);
            if (d) return d(u, !0);
            var h = new Error("Cannot find module '" + u + "'");
            throw h.code = "MODULE_NOT_FOUND", h;
          }
          var s = o[u] = { exports: {} };
          n[u][0].call(s.exports, function(m) {
            var p = n[u][1][m];
            return a(p || m);
          }, s, s.exports, r, n, o, i);
        }
        return o[u].exports;
      }
      for (var d = typeof Te == "function" && Te, c = 0; c < i.length; c++) a(i[c]);
      return a;
    }({ 1: [function(r, n, o) {
      n.exports = function(i) {
        if (typeof Map != "function" || i) {
          var a = r("./similar");
          return new a();
        } else return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(r, n, o) {
      function i() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      i.prototype.get = function(a) {
        var d;
        if (this.lastItem && this.isEqual(this.lastItem.key, a)) return this.lastItem.val;
        if (d = this.indexOf(a), d >= 0) return this.lastItem = this.list[d], this.list[d].val;
      }, i.prototype.set = function(a, d) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, a) ? (this.lastItem.val = d, this) : (c = this.indexOf(a), c >= 0 ? (this.lastItem = this.list[c], this.list[c].val = d, this) : (this.lastItem = { key: a, val: d }, this.list.push(this.lastItem), this.size++, this));
      }, i.prototype.delete = function(a) {
        var d;
        if (this.lastItem && this.isEqual(this.lastItem.key, a) && (this.lastItem = void 0), d = this.indexOf(a), d >= 0) return this.size--, this.list.splice(d, 1)[0];
      }, i.prototype.has = function(a) {
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, a) ? !0 : (d = this.indexOf(a), d >= 0 ? (this.lastItem = this.list[d], !0) : !1);
      }, i.prototype.forEach = function(a, d) {
        var c;
        for (c = 0; c < this.size; c++) a.call(d || this, this.list[c].val, this.list[c].key, this);
      }, i.prototype.indexOf = function(a) {
        var d;
        for (d = 0; d < this.size; d++) if (this.isEqual(this.list[d].key, a)) return d;
        return -1;
      }, i.prototype.isEqual = function(a, d) {
        return a === d || a !== a && d !== d;
      }, n.exports = i;
    }, {}], 3: [function(r, n, o) {
      var i = r("map-or-similar");
      n.exports = function(u) {
        var g = new i(!1), f = [];
        return function(h) {
          var s = function() {
            var m = g, p, b, E = arguments.length - 1, x = Array(E + 1), C = !0, y;
            if ((s.numArgs || s.numArgs === 0) && s.numArgs !== E + 1) throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (y = 0; y < E; y++) {
              if (x[y] = { cacheItem: m, arg: arguments[y] }, m.has(arguments[y])) {
                m = m.get(arguments[y]);
                continue;
              }
              C = !1, p = new i(!1), m.set(arguments[y], p), m = p;
            }
            return C && (m.has(arguments[E]) ? b = m.get(arguments[E]) : C = !1), C || (b = h.apply(null, arguments), m.set(arguments[E], b)), u > 0 && (x[E] = { cacheItem: m, arg: arguments[E] }, C ? a(f, x) : f.push(x), f.length > u && d(f.shift())), s.wasMemoized = C, s.numArgs = E + 1, b;
          };
          return s.limit = u, s.wasMemoized = !1, s.cache = g, s.lru = f, s;
        };
      };
      function a(u, g) {
        var f = u.length, h = g.length, s, m, p;
        for (m = 0; m < f; m++) {
          for (s = !0, p = 0; p < h; p++) if (!c(u[m][p].arg, g[p].arg)) {
            s = !1;
            break;
          }
          if (s) break;
        }
        u.push(u.splice(m, 1)[0]);
      }
      function d(u) {
        var g = u.length, f = u[g - 1], h, s;
        for (f.cacheItem.delete(f.arg), s = g - 2; s >= 0 && (f = u[s], h = f.cacheItem.get(f.arg), !h || !h.size); s--) f.cacheItem.delete(f.arg);
      }
      function c(u, g) {
        return u === g || u !== u && g !== g;
      }
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
} }), ia = ae({ "../../node_modules/tocbot/src/js/default-options.js"(e, t) {
  t.exports = { tocSelector: ".js-toc", contentSelector: ".js-toc-content", headingSelector: "h1, h2, h3", ignoreSelector: ".js-toc-ignore", hasInnerContainers: !1, linkClass: "toc-link", extraLinkClasses: "", activeLinkClass: "is-active-link", listClass: "toc-list", extraListClasses: "", isCollapsedClass: "is-collapsed", collapsibleClass: "is-collapsible", listItemClass: "toc-list-item", activeListItemClass: "is-active-li", collapseDepth: 0, scrollSmooth: !0, scrollSmoothDuration: 420, scrollSmoothOffset: 0, scrollEndCallback: function(r) {
  }, headingsOffset: 1, throttleTimeout: 50, positionFixedSelector: null, positionFixedClass: "is-position-fixed", fixedSidebarOffset: "auto", includeHtml: !1, includeTitleTags: !1, onClick: function(r) {
  }, orderedList: !0, scrollContainer: null, skipRendering: !1, headingLabelCallback: !1, ignoreHiddenElements: !1, headingObjectCallback: null, basePath: "", disableTocScrollSync: !1, tocScrollOffset: 0 };
} }), sa = ae({ "../../node_modules/tocbot/src/js/build-html.js"(e, t) {
  t.exports = function(r) {
    var n = [].forEach, o = [].some, i = document.body, a, d = !0, c = " ";
    function u(y, k) {
      var w = k.appendChild(f(y));
      if (y.children.length) {
        var _ = h(y.isCollapsed);
        y.children.forEach(function(T) {
          u(T, _);
        }), w.appendChild(_);
      }
    }
    function g(y, k) {
      var w = !1, _ = h(w);
      if (k.forEach(function(T) {
        u(T, _);
      }), a = y || a, a !== null) return a.firstChild && a.removeChild(a.firstChild), k.length === 0 ? a : a.appendChild(_);
    }
    function f(y) {
      var k = document.createElement("li"), w = document.createElement("a");
      return r.listItemClass && k.setAttribute("class", r.listItemClass), r.onClick && (w.onclick = r.onClick), r.includeTitleTags && w.setAttribute("title", y.textContent), r.includeHtml && y.childNodes.length ? n.call(y.childNodes, function(_) {
        w.appendChild(_.cloneNode(!0));
      }) : w.textContent = y.textContent, w.setAttribute("href", r.basePath + "#" + y.id), w.setAttribute("class", r.linkClass + c + "node-name--" + y.nodeName + c + r.extraLinkClasses), k.appendChild(w), k;
    }
    function h(y) {
      var k = r.orderedList ? "ol" : "ul", w = document.createElement(k), _ = r.listClass + c + r.extraListClasses;
      return y && (_ = _ + c + r.collapsibleClass, _ = _ + c + r.isCollapsedClass), w.setAttribute("class", _), w;
    }
    function s() {
      if (r.scrollContainer && document.querySelector(r.scrollContainer)) {
        var y;
        y = document.querySelector(r.scrollContainer).scrollTop;
      } else y = document.documentElement.scrollTop || i.scrollTop;
      var k = document.querySelector(r.positionFixedSelector);
      r.fixedSidebarOffset === "auto" && (r.fixedSidebarOffset = a.offsetTop), y > r.fixedSidebarOffset ? k.className.indexOf(r.positionFixedClass) === -1 && (k.className += c + r.positionFixedClass) : k.className = k.className.replace(c + r.positionFixedClass, "");
    }
    function m(y) {
      var k = 0;
      return y !== null && (k = y.offsetTop, r.hasInnerContainers && (k += m(y.offsetParent))), k;
    }
    function p(y, k) {
      return y && y.className !== k && (y.className = k), y;
    }
    function b(y) {
      if (r.scrollContainer && document.querySelector(r.scrollContainer)) {
        var k;
        k = document.querySelector(r.scrollContainer).scrollTop;
      } else k = document.documentElement.scrollTop || i.scrollTop;
      r.positionFixedSelector && s();
      var w = y, _;
      if (d && a !== null && w.length > 0) {
        o.call(w, function(A, j) {
          if (m(A) > k + r.headingsOffset + 10) {
            var $ = j === 0 ? j : j - 1;
            return _ = w[$], !0;
          } else if (j === w.length - 1) return _ = w[w.length - 1], !0;
        });
        var T = a.querySelector("." + r.activeLinkClass), O = a.querySelector("." + r.linkClass + ".node-name--" + _.nodeName + '[href="' + r.basePath + "#" + _.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/\\@])/g, "\\$1") + '"]');
        if (T === O) return;
        var F = a.querySelectorAll("." + r.linkClass);
        n.call(F, function(A) {
          p(A, A.className.replace(c + r.activeLinkClass, ""));
        });
        var z = a.querySelectorAll("." + r.listItemClass);
        n.call(z, function(A) {
          p(A, A.className.replace(c + r.activeListItemClass, ""));
        }), O && O.className.indexOf(r.activeLinkClass) === -1 && (O.className += c + r.activeLinkClass);
        var I = O && O.parentNode;
        I && I.className.indexOf(r.activeListItemClass) === -1 && (I.className += c + r.activeListItemClass);
        var P = a.querySelectorAll("." + r.listClass + "." + r.collapsibleClass);
        n.call(P, function(A) {
          A.className.indexOf(r.isCollapsedClass) === -1 && (A.className += c + r.isCollapsedClass);
        }), O && O.nextSibling && O.nextSibling.className.indexOf(r.isCollapsedClass) !== -1 && p(O.nextSibling, O.nextSibling.className.replace(c + r.isCollapsedClass, "")), E(O && O.parentNode.parentNode);
      }
    }
    function E(y) {
      return y && y.className.indexOf(r.collapsibleClass) !== -1 && y.className.indexOf(r.isCollapsedClass) !== -1 ? (p(y, y.className.replace(c + r.isCollapsedClass, "")), E(y.parentNode.parentNode)) : y;
    }
    function x(y) {
      var k = y.target || y.srcElement;
      typeof k.className != "string" || k.className.indexOf(r.linkClass) === -1 || (d = !1);
    }
    function C() {
      d = !0;
    }
    return { enableTocAnimation: C, disableTocAnimation: x, render: g, updateToc: b };
  };
} }), da = ae({ "../../node_modules/tocbot/src/js/parse-content.js"(e, t) {
  t.exports = function(r) {
    var n = [].reduce;
    function o(f) {
      return f[f.length - 1];
    }
    function i(f) {
      return +f.nodeName.toUpperCase().replace("H", "");
    }
    function a(f) {
      try {
        return f instanceof window.HTMLElement || f instanceof window.parent.HTMLElement;
      } catch {
        return f instanceof window.HTMLElement;
      }
    }
    function d(f) {
      if (!a(f)) return f;
      if (r.ignoreHiddenElements && (!f.offsetHeight || !f.offsetParent)) return null;
      let h = f.getAttribute("data-heading-label") || (r.headingLabelCallback ? String(r.headingLabelCallback(f.innerText)) : (f.innerText || f.textContent).trim());
      var s = { id: f.id, children: [], nodeName: f.nodeName, headingLevel: i(f), textContent: h };
      return r.includeHtml && (s.childNodes = f.childNodes), r.headingObjectCallback ? r.headingObjectCallback(s, f) : s;
    }
    function c(f, h) {
      for (var s = d(f), m = s.headingLevel, p = h, b = o(p), E = b ? b.headingLevel : 0, x = m - E; x > 0 && (b = o(p), !(b && m === b.headingLevel)); ) b && b.children !== void 0 && (p = b.children), x--;
      return m >= r.collapseDepth && (s.isCollapsed = !0), p.push(s), p;
    }
    function u(f, h) {
      var s = h;
      r.ignoreSelector && (s = h.split(",").map(function(m) {
        return m.trim() + ":not(" + r.ignoreSelector + ")";
      }));
      try {
        return f.querySelectorAll(s);
      } catch {
        return console.warn("Headers not found with selector: " + s), null;
      }
    }
    function g(f) {
      return n.call(f, function(h, s) {
        var m = d(s);
        return m && c(m, h.nest), h;
      }, { nest: [] });
    }
    return { nestHeadingsArray: g, selectHeadings: u };
  };
} }), ca = ae({ "../../node_modules/tocbot/src/js/update-toc-scroll.js"(e, t) {
  t.exports = function(r) {
    var n = r.tocElement || document.querySelector(r.tocSelector);
    if (n && n.scrollHeight > n.clientHeight) {
      var o = n.querySelector("." + r.activeListItemClass);
      o && (n.scrollTop = o.offsetTop - r.tocScrollOffset);
    }
  };
} }), ua = ae({ "../../node_modules/tocbot/src/js/scroll-smooth/index.js"(e) {
  e.initSmoothScrolling = t;
  function t(n) {
    var o = n.duration, i = n.offset, a = location.hash ? u(location.href) : location.href;
    d();
    function d() {
      document.body.addEventListener("click", f, !1);
      function f(h) {
        !c(h.target) || h.target.className.indexOf("no-smooth-scroll") > -1 || h.target.href.charAt(h.target.href.length - 2) === "#" && h.target.href.charAt(h.target.href.length - 1) === "!" || h.target.className.indexOf(n.linkClass) === -1 || r(h.target.hash, { duration: o, offset: i, callback: function() {
          g(h.target.hash);
        } });
      }
    }
    function c(f) {
      return f.tagName.toLowerCase() === "a" && (f.hash.length > 0 || f.href.charAt(f.href.length - 1) === "#") && (u(f.href) === a || u(f.href) + "#" === a);
    }
    function u(f) {
      return f.slice(0, f.lastIndexOf("#"));
    }
    function g(f) {
      var h = document.getElementById(f.substring(1));
      h && (/^(?:a|select|input|button|textarea)$/i.test(h.tagName) || (h.tabIndex = -1), h.focus());
    }
  }
  function r(n, o) {
    var i = window.pageYOffset, a = { duration: o.duration, offset: o.offset || 0, callback: o.callback, easing: o.easing || m }, d = document.querySelector('[id="' + decodeURI(n).split("#").join("") + '"]') || document.querySelector('[id="' + n.split("#").join("") + '"]'), c = typeof n == "string" ? a.offset + (n ? d && d.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : n, u = typeof a.duration == "function" ? a.duration(c) : a.duration, g, f;
    requestAnimationFrame(function(p) {
      g = p, h(p);
    });
    function h(p) {
      f = p - g, window.scrollTo(0, a.easing(f, i, c, u)), f < u ? requestAnimationFrame(h) : s();
    }
    function s() {
      window.scrollTo(0, i + c), typeof a.callback == "function" && a.callback();
    }
    function m(p, b, E, x) {
      return p /= x / 2, p < 1 ? E / 2 * p * p + b : (p--, -E / 2 * (p * (p - 2) - 1) + b);
    }
  }
} }), pa = ae({ "../../node_modules/tocbot/src/js/index.js"(e, t) {
  (function(r, n) {
    typeof define == "function" && define.amd ? define([], n(r)) : typeof e == "object" ? t.exports = n(r) : r.tocbot = n(r);
  })(typeof global < "u" ? global : window || global, function(r) {
    var n = ia(), o = {}, i = {}, a = sa(), d = da(), c = ca(), u, g, f = !!r && !!r.document && !!r.document.querySelector && !!r.addEventListener;
    if (typeof window > "u" && !f) return;
    var h, s = Object.prototype.hasOwnProperty;
    function m() {
      for (var x = {}, C = 0; C < arguments.length; C++) {
        var y = arguments[C];
        for (var k in y) s.call(y, k) && (x[k] = y[k]);
      }
      return x;
    }
    function p(x, C, y) {
      C || (C = 250);
      var k, w;
      return function() {
        var _ = this, T = +/* @__PURE__ */ new Date(), O = arguments;
        k && T < k + C ? (clearTimeout(w), w = setTimeout(function() {
          k = T, x.apply(_, O);
        }, C)) : (k = T, x.apply(_, O));
      };
    }
    function b(x) {
      try {
        return x.contentElement || document.querySelector(x.contentSelector);
      } catch {
        return console.warn("Contents element not found: " + x.contentSelector), null;
      }
    }
    function E(x) {
      try {
        return x.tocElement || document.querySelector(x.tocSelector);
      } catch {
        return console.warn("TOC element not found: " + x.tocSelector), null;
      }
    }
    return i.destroy = function() {
      var x = E(o);
      x !== null && (o.skipRendering || x && (x.innerHTML = ""), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).removeEventListener("resize", this._scrollListener, !1), u && document.querySelector(o.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), u && document.removeEventListener("click", this._clickListener, !1)));
    }, i.init = function(x) {
      if (f) {
        o = m(n, x || {}), this.options = o, this.state = {}, o.scrollSmooth && (o.duration = o.scrollSmoothDuration, o.offset = o.scrollSmoothOffset, i.scrollSmooth = ua().initSmoothScrolling(o)), u = a(o), g = d(o), this._buildHtml = u, this._parseContent = g, this._headingsArray = h, i.destroy();
        var C = b(o);
        if (C !== null) {
          var y = E(o);
          if (y !== null && (h = g.selectHeadings(C, o.headingSelector), h !== null)) {
            var k = g.nestHeadingsArray(h), w = k.nest;
            if (!o.skipRendering) u.render(y, w);
            else return this;
            this._scrollListener = p(function(T) {
              u.updateToc(h), !o.disableTocScrollSync && c(o);
              var O = T && T.target && T.target.scrollingElement && T.target.scrollingElement.scrollTop === 0;
              (T && (T.eventPhase === 0 || T.currentTarget === null) || O) && (u.updateToc(h), o.scrollEndCallback && o.scrollEndCallback(T));
            }, o.throttleTimeout), this._scrollListener(), o.scrollContainer && document.querySelector(o.scrollContainer) ? (document.querySelector(o.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(o.scrollContainer).addEventListener("resize", this._scrollListener, !1)) : (document.addEventListener("scroll", this._scrollListener, !1), document.addEventListener("resize", this._scrollListener, !1));
            var _ = null;
            return this._clickListener = p(function(T) {
              o.scrollSmooth && u.disableTocAnimation(T), u.updateToc(h), _ && clearTimeout(_), _ = setTimeout(function() {
                u.enableTocAnimation();
              }, o.scrollSmoothDuration);
            }, o.throttleTimeout), o.scrollContainer && document.querySelector(o.scrollContainer) ? document.querySelector(o.scrollContainer).addEventListener("click", this._clickListener, !1) : document.addEventListener("click", this._clickListener, !1), this;
          }
        }
      }
    }, i.refresh = function(x) {
      i.destroy(), i.init(x || this.options);
    }, r.tocbot = i, i;
  });
} });
function se() {
  return se = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, se.apply(null, arguments);
}
function ma(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function be(e, t) {
  return be = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, be(e, t);
}
function fa(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, be(e, t);
}
function lt(e) {
  return lt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, lt(e);
}
function ga(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function gr() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (gr = function() {
    return !!e;
  })();
}
function ha(e, t, r) {
  if (gr()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && be(o, r.prototype), o;
}
function it(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return it = function(r) {
    if (r === null || !ga(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, n);
    }
    function n() {
      return ha(r, arguments, lt(this).constructor);
    }
    return n.prototype = Object.create(r.prototype, { constructor: { value: n, enumerable: !1, writable: !0, configurable: !0 } }), be(n, r);
  }, it(e);
}
var ya = { 1: `Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`, 2: `Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`, 3: `Passed an incorrect argument to a color function, please pass a string representation of a color.

`, 4: `Couldn't generate valid rgb string from %s, it returned %s.

`, 5: `Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`, 6: `Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`, 7: `Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`, 8: `Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`, 9: `Please provide a number of steps to the modularScale helper.

`, 10: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 11: `Invalid value passed as base to modularScale, expected number or em string but got "%s"

`, 12: `Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`, 13: `Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`, 14: `Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`, 15: `Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`, 16: `You must provide a template to this method.

`, 17: `You passed an unsupported selector state to this method.

`, 18: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 19: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 20: `expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 21: "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 22: "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n", 23: `fontFace expects a name of a font-family.

`, 24: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 25: `fontFace expects localFonts to be an array.

`, 26: `fontFace expects fileFormats to be an array.

`, 27: `radialGradient requries at least 2 color-stops to properly render.

`, 28: `Please supply a filename to retinaImage() as the first argument.

`, 29: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 30: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 31: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`, 32: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`, 33: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`, 34: `borderRadius expects a radius value as a string or number as the second argument.

`, 35: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 36: `Property must be a string value.

`, 37: `Syntax Error at %s.

`, 38: `Formula contains a function that needs parentheses at %s.

`, 39: `Formula is missing closing parenthesis at %s.

`, 40: `Formula has too many closing parentheses at %s.

`, 41: `All values in a formula must have the same unit or be unitless.

`, 42: `Please provide a number of steps to the modularScale helper.

`, 43: `Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`, 44: `Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`, 45: `Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`, 46: `Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`, 47: `minScreen and maxScreen must be provided as stringified numbers with the same units.

`, 48: `fromSize and toSize must be provided as stringified numbers with the same units.

`, 49: `Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`, 50: `Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`, 51: `Expects the first argument object to have the properties prop, fromSize, and toSize.

`, 52: `fontFace expects either the path to the font file(s) or a name of a local copy.

`, 53: `fontFace expects localFonts to be an array.

`, 54: `fontFace expects fileFormats to be an array.

`, 55: `fontFace expects a name of a font-family.

`, 56: `linearGradient requries at least 2 color-stops to properly render.

`, 57: `radialGradient requries at least 2 color-stops to properly render.

`, 58: `Please supply a filename to retinaImage() as the first argument.

`, 59: `Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`, 60: "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n", 61: `Property must be a string value.

`, 62: `borderRadius expects a radius value as a string or number as the second argument.

`, 63: `borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`, 64: `The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`, 65: `To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`, 66: `The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`, 67: `You must provide a template to this method.

`, 68: `You passed an unsupported selector state to this method.

`, 69: `Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`, 70: `Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`, 71: `Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`, 72: `Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`, 73: `Please provide a valid CSS variable.

`, 74: `CSS variable not found and no default was provided.

`, 75: `important requires a valid style object, got a %s instead.

`, 76: `fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`, 77: `remToPx expects a value in "rem" but you provided it in "%s".

`, 78: `base must be set in "px" or "%" but you set it in "%s".
` };
function ba() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
  var n = t[0], o = [], i;
  for (i = 1; i < t.length; i += 1) o.push(t[i]);
  return o.forEach(function(a) {
    n = n.replace(/%[a-z]/, a);
  }), n;
}
var q = function(e) {
  fa(t, e);
  function t(r) {
    for (var n, o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) i[a - 1] = arguments[a];
    return n = e.call(this, ba.apply(void 0, [ya[r]].concat(i))) || this, ma(n);
  }
  return t;
}(it(Error));
function Ke(e) {
  return Math.round(e * 255);
}
function Ea(e, t, r) {
  return Ke(e) + "," + Ke(t) + "," + Ke(r);
}
function Ee(e, t, r, n) {
  if (n === void 0 && (n = Ea), t === 0) return n(r, r, r);
  var o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * r - 1)) * t, a = i * (1 - Math.abs(o % 2 - 1)), d = 0, c = 0, u = 0;
  o >= 0 && o < 1 ? (d = i, c = a) : o >= 1 && o < 2 ? (d = a, c = i) : o >= 2 && o < 3 ? (c = i, u = a) : o >= 3 && o < 4 ? (c = a, u = i) : o >= 4 && o < 5 ? (d = a, u = i) : o >= 5 && o < 6 && (d = i, u = a);
  var g = r - i / 2, f = d + g, h = c + g, s = u + g;
  return n(f, h, s);
}
var Bt = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "00ffff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "0000ff", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "00ffff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgreen: "006400", darkgrey: "a9a9a9", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "ff00ff", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", green: "008000", greenyellow: "adff2f", grey: "808080", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgreen: "90ee90", lightgrey: "d3d3d3", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
function xa(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Bt[t] ? "#" + Bt[t] : e;
}
var va = /^#[a-fA-F0-9]{6}$/, Sa = /^#[a-fA-F0-9]{8}$/, Ca = /^#[a-fA-F0-9]{3}$/, ka = /^#[a-fA-F0-9]{4}$/, Ye = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i, wa = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, _a = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i, Ta = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function De(e) {
  if (typeof e != "string") throw new q(3);
  var t = xa(e);
  if (t.match(va)) return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16) };
  if (t.match(Sa)) {
    var r = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[2], 16), green: parseInt("" + t[3] + t[4], 16), blue: parseInt("" + t[5] + t[6], 16), alpha: r };
  }
  if (t.match(Ca)) return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16) };
  if (t.match(ka)) {
    var n = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return { red: parseInt("" + t[1] + t[1], 16), green: parseInt("" + t[2] + t[2], 16), blue: parseInt("" + t[3] + t[3], 16), alpha: n };
  }
  var o = Ye.exec(t);
  if (o) return { red: parseInt("" + o[1], 10), green: parseInt("" + o[2], 10), blue: parseInt("" + o[3], 10) };
  var i = wa.exec(t.substring(0, 50));
  if (i) return { red: parseInt("" + i[1], 10), green: parseInt("" + i[2], 10), blue: parseInt("" + i[3], 10), alpha: parseFloat("" + i[4]) > 1 ? parseFloat("" + i[4]) / 100 : parseFloat("" + i[4]) };
  var a = _a.exec(t);
  if (a) {
    var d = parseInt("" + a[1], 10), c = parseInt("" + a[2], 10) / 100, u = parseInt("" + a[3], 10) / 100, g = "rgb(" + Ee(d, c, u) + ")", f = Ye.exec(g);
    if (!f) throw new q(4, t, g);
    return { red: parseInt("" + f[1], 10), green: parseInt("" + f[2], 10), blue: parseInt("" + f[3], 10) };
  }
  var h = Ta.exec(t.substring(0, 50));
  if (h) {
    var s = parseInt("" + h[1], 10), m = parseInt("" + h[2], 10) / 100, p = parseInt("" + h[3], 10) / 100, b = "rgb(" + Ee(s, m, p) + ")", E = Ye.exec(b);
    if (!E) throw new q(4, t, b);
    return { red: parseInt("" + E[1], 10), green: parseInt("" + E[2], 10), blue: parseInt("" + E[3], 10), alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4]) };
  }
  throw new q(5);
}
function Aa(e) {
  var t = e.red / 255, r = e.green / 255, n = e.blue / 255, o = Math.max(t, r, n), i = Math.min(t, r, n), a = (o + i) / 2;
  if (o === i) return e.alpha !== void 0 ? { hue: 0, saturation: 0, lightness: a, alpha: e.alpha } : { hue: 0, saturation: 0, lightness: a };
  var d, c = o - i, u = a > 0.5 ? c / (2 - o - i) : c / (o + i);
  switch (o) {
    case t:
      d = (r - n) / c + (r < n ? 6 : 0);
      break;
    case r:
      d = (n - t) / c + 2;
      break;
    default:
      d = (t - r) / c + 4;
      break;
  }
  return d *= 60, e.alpha !== void 0 ? { hue: d, saturation: u, lightness: a, alpha: e.alpha } : { hue: d, saturation: u, lightness: a };
}
function hr(e) {
  return Aa(De(e));
}
var Oa = function(e) {
  return e.length === 7 && e[1] === e[2] && e[3] === e[4] && e[5] === e[6] ? "#" + e[1] + e[3] + e[5] : e;
}, st = Oa;
function ee(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
function Je(e) {
  return ee(Math.round(e * 255));
}
function Ia(e, t, r) {
  return st("#" + Je(e) + Je(t) + Je(r));
}
function Pe(e, t, r) {
  return Ee(e, t, r, Ia);
}
function Ra(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return Pe(e, t, r);
  if (typeof e == "object" && t === void 0 && r === void 0) return Pe(e.hue, e.saturation, e.lightness);
  throw new q(1);
}
function ja(e, t, r, n) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number") return n >= 1 ? Pe(e, t, r) : "rgba(" + Ee(e, t, r) + "," + n + ")";
  if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0) return e.alpha >= 1 ? Pe(e.hue, e.saturation, e.lightness) : "rgba(" + Ee(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new q(2);
}
function dt(e, t, r) {
  if (typeof e == "number" && typeof t == "number" && typeof r == "number") return st("#" + ee(e) + ee(t) + ee(r));
  if (typeof e == "object" && t === void 0 && r === void 0) return st("#" + ee(e.red) + ee(e.green) + ee(e.blue));
  throw new q(6);
}
function J(e, t, r, n) {
  if (typeof e == "string" && typeof t == "number") {
    var o = De(e);
    return "rgba(" + o.red + "," + o.green + "," + o.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof r == "number" && typeof n == "number") return n >= 1 ? dt(e, t, r) : "rgba(" + e + "," + t + "," + r + "," + n + ")";
    if (typeof e == "object" && t === void 0 && r === void 0 && n === void 0) return e.alpha >= 1 ? dt(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new q(7);
}
var Pa = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Fa = function(e) {
  return typeof e.red == "number" && typeof e.green == "number" && typeof e.blue == "number" && typeof e.alpha == "number";
}, $a = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && (typeof e.alpha != "number" || typeof e.alpha > "u");
}, Na = function(e) {
  return typeof e.hue == "number" && typeof e.saturation == "number" && typeof e.lightness == "number" && typeof e.alpha == "number";
};
function yr(e) {
  if (typeof e != "object") throw new q(8);
  if (Fa(e)) return J(e);
  if (Pa(e)) return dt(e);
  if (Na(e)) return ja(e);
  if ($a(e)) return Ra(e);
  throw new q(8);
}
function br(e, t, r) {
  return function() {
    var n = r.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : br(e, t, n);
  };
}
function Le(e) {
  return br(e, e.length, []);
}
function Me(e, t, r) {
  return Math.max(e, Math.min(t, r));
}
function Ba(e, t) {
  if (t === "transparent") return t;
  var r = hr(t);
  return yr(se({}, r, { lightness: Me(0, 1, r.lightness - parseFloat(e)) }));
}
var Da = Le(Ba), W = Da;
function La(e, t) {
  if (t === "transparent") return t;
  var r = hr(t);
  return yr(se({}, r, { lightness: Me(0, 1, r.lightness + parseFloat(e)) }));
}
var Ma = Le(La), te = Ma;
function za(e, t) {
  if (t === "transparent") return t;
  var r = De(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = se({}, r, { alpha: Me(0, 1, (n * 100 + parseFloat(e) * 100) / 100) });
  return J(o);
}
var Ua = Le(za), Ae = Ua;
function Ha(e, t) {
  if (t === "transparent") return t;
  var r = De(t), n = typeof r.alpha == "number" ? r.alpha : 1, o = se({}, r, { alpha: Me(0, 1, +(n * 100 - parseFloat(e) * 100).toFixed(2) / 100) });
  return J(o);
}
var Va = Le(Ha), R = Va, Wa = S.div($e, ({ theme: e }) => ({ backgroundColor: e.base === "light" ? "rgba(0,0,0,.01)" : "rgba(255,255,255,.01)", borderRadius: e.appBorderRadius, border: `1px dashed ${e.appBorderColor}`, display: "flex", alignItems: "center", justifyContent: "center", padding: 20, margin: "25px 0 40px", color: R(0.3, e.color.defaultText), fontSize: e.typography.size.s2 })), Er = (e) => l.createElement(Wa, { ...e, className: "docblock-emptyblock sb-unstyled" }), qa = S(cr)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, lineHeight: "19px", margin: "25px 0 40px", borderRadius: e.appBorderRadius, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", "pre.prismjs": { padding: 20, background: "inherit" } })), Ga = S.div(({ theme: e }) => ({ background: e.background.content, borderRadius: e.appBorderRadius, border: `1px solid ${e.appBorderColor}`, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", margin: "25px 0 40px", padding: "20px 20px 20px 22px" })), Oe = S.div(({ theme: e }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, height: 17, marginTop: 1, width: "60%", [`&:first-child${Dn}`]: { margin: 0 } })), Ka = () => l.createElement(Ga, null, l.createElement(Oe, null), l.createElement(Oe, { style: { width: "80%" } }), l.createElement(Oe, { style: { width: "30%" } }), l.createElement(Oe, { style: { width: "80%" } })), xr = ({ isLoading: e, error: t, language: r, code: n, dark: o, format: i = !1, ...a }) => {
  let { typography: d } = ur();
  if (e) return l.createElement(Ka, null);
  if (t) return l.createElement(Er, null, t);
  let c = l.createElement(qa, { bordered: !0, copyable: !0, format: i, language: r, className: "docblock-source sb-unstyled", ...a }, n);
  if (typeof o > "u") return c;
  let u = o ? jt.dark : jt.light;
  return l.createElement(pr, { theme: Ln({ ...u, fontCode: d.fonts.mono, fontBase: d.fonts.base }) }, c);
}, B = (e) => `& :where(${e}:not(.sb-anchor, .sb-unstyled, .sb-unstyled ${e}))`, vt = 600, Ya = S.h1($e, ({ theme: e }) => ({ color: e.color.defaultText, fontSize: e.typography.size.m3, fontWeight: e.typography.weight.bold, lineHeight: "32px", [`@media (min-width: ${vt}px)`]: { fontSize: e.typography.size.l1, lineHeight: "36px", marginBottom: "16px" } })), Ja = S.h2($e, ({ theme: e }) => ({ fontWeight: e.typography.weight.regular, fontSize: e.typography.size.s3, lineHeight: "20px", borderBottom: "none", marginBottom: 15, [`@media (min-width: ${vt}px)`]: { fontSize: e.typography.size.m1, lineHeight: "28px", marginBottom: 24 }, color: R(0.25, e.color.defaultText) })), Za = S.div(({ theme: e }) => {
  let t = { fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s3, margin: 0, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch" }, r = { margin: "20px 0 8px", padding: 0, cursor: "text", position: "relative", color: e.color.defaultText, "&:first-of-type": { marginTop: 0, paddingTop: 0 }, "&:hover a.anchor": { textDecoration: "none" }, "& code": { fontSize: "inherit" } }, n = { lineHeight: 1, margin: "0 2px", padding: "3px 5px", whiteSpace: "nowrap", borderRadius: 3, fontSize: e.typography.size.s2 - 1, border: e.base === "light" ? `1px solid ${e.color.mediumlight}` : `1px solid ${e.color.darker}`, color: e.base === "light" ? R(0.1, e.color.defaultText) : R(0.3, e.color.defaultText), backgroundColor: e.base === "light" ? e.color.lighter : e.color.border };
  return { maxWidth: 1e3, width: "100%", [B("a")]: { ...t, fontSize: "inherit", lineHeight: "24px", color: e.color.secondary, textDecoration: "none", "&.absent": { color: "#cc0000" }, "&.anchor": { display: "block", paddingLeft: 30, marginLeft: -30, cursor: "pointer", position: "absolute", top: 0, left: 0, bottom: 0 } }, [B("blockquote")]: { ...t, margin: "16px 0", borderLeft: `4px solid ${e.color.medium}`, padding: "0 15px", color: e.color.dark, "& > :first-of-type": { marginTop: 0 }, "& > :last-child": { marginBottom: 0 } }, [B("div")]: t, [B("dl")]: { ...t, margin: "16px 0", padding: 0, "& dt": { fontSize: "14px", fontWeight: "bold", fontStyle: "italic", padding: 0, margin: "16px 0 4px" }, "& dt:first-of-type": { padding: 0 }, "& dt > :first-of-type": { marginTop: 0 }, "& dt > :last-child": { marginBottom: 0 }, "& dd": { margin: "0 0 16px", padding: "0 15px" }, "& dd > :first-of-type": { marginTop: 0 }, "& dd > :last-child": { marginBottom: 0 } }, [B("h1")]: { ...t, ...r, fontSize: `${e.typography.size.l1}px`, fontWeight: e.typography.weight.bold }, [B("h2")]: { ...t, ...r, fontSize: `${e.typography.size.m2}px`, paddingBottom: 4, borderBottom: `1px solid ${e.appBorderColor}` }, [B("h3")]: { ...t, ...r, fontSize: `${e.typography.size.m1}px`, fontWeight: e.typography.weight.bold }, [B("h4")]: { ...t, ...r, fontSize: `${e.typography.size.s3}px` }, [B("h5")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px` }, [B("h6")]: { ...t, ...r, fontSize: `${e.typography.size.s2}px`, color: e.color.dark }, [B("hr")]: { border: "0 none", borderTop: `1px solid ${e.appBorderColor}`, height: 4, padding: 0 }, [B("img")]: { maxWidth: "100%" }, [B("li")]: { ...t, fontSize: e.typography.size.s2, color: e.color.defaultText, lineHeight: "24px", "& + li": { marginTop: ".25em" }, "& ul, & ol": { marginTop: ".25em", marginBottom: 0 }, "& code": n }, [B("ol")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 } }, [B("p")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", color: e.color.defaultText, "& code": n }, [B("pre")]: { ...t, fontFamily: e.typography.fonts.mono, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", lineHeight: "18px", padding: "11px 1rem", whiteSpace: "pre-wrap", color: "inherit", borderRadius: 3, margin: "1rem 0", "&:not(.prismjs)": { background: "transparent", border: "none", borderRadius: 0, padding: 0, margin: 0 }, "& pre, &.prismjs": { padding: 15, margin: 0, whiteSpace: "pre-wrap", color: "inherit", fontSize: "13px", lineHeight: "19px", code: { color: "inherit", fontSize: "inherit" } }, "& code": { whiteSpace: "pre" }, "& code, & tt": { border: "none" } }, [B("span")]: { ...t, "&.frame": { display: "block", overflow: "hidden", "& > span": { border: `1px solid ${e.color.medium}`, display: "block", float: "left", overflow: "hidden", margin: "13px 0 0", padding: 7, width: "auto" }, "& span img": { display: "block", float: "left" }, "& span span": { clear: "both", color: e.color.darkest, display: "block", padding: "5px 0 0" } }, "&.align-center": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "center" }, "& span img": { margin: "0 auto", textAlign: "center" } }, "&.align-right": { display: "block", overflow: "hidden", clear: "both", "& > span": { display: "block", overflow: "hidden", margin: "13px 0 0", textAlign: "right" }, "& span img": { margin: 0, textAlign: "right" } }, "&.float-left": { display: "block", marginRight: 13, overflow: "hidden", float: "left", "& span": { margin: "13px 0 0" } }, "&.float-right": { display: "block", marginLeft: 13, overflow: "hidden", float: "right", "& > span": { display: "block", overflow: "hidden", margin: "13px auto 0", textAlign: "right" } } }, [B("table")]: { ...t, margin: "16px 0", fontSize: e.typography.size.s2, lineHeight: "24px", padding: 0, borderCollapse: "collapse", "& tr": { borderTop: `1px solid ${e.appBorderColor}`, backgroundColor: e.appContentBg, margin: 0, padding: 0 }, "& tr:nth-of-type(2n)": { backgroundColor: e.base === "dark" ? e.color.darker : e.color.lighter }, "& tr th": { fontWeight: "bold", color: e.color.defaultText, border: `1px solid ${e.appBorderColor}`, margin: 0, padding: "6px 13px" }, "& tr td": { border: `1px solid ${e.appBorderColor}`, color: e.color.defaultText, margin: 0, padding: "6px 13px" }, "& tr th :first-of-type, & tr td :first-of-type": { marginTop: 0 }, "& tr th :last-child, & tr td :last-child": { marginBottom: 0 } }, [B("ul")]: { ...t, margin: "16px 0", paddingLeft: 30, "& :first-of-type": { marginTop: 0 }, "& :last-child": { marginBottom: 0 }, listStyle: "disc" } };
}), Xa = S.div(({ theme: e }) => ({ background: e.background.content, display: "flex", justifyContent: "center", padding: "4rem 20px", minHeight: "100vh", boxSizing: "border-box", gap: "3rem", [`@media (min-width: ${vt}px)`]: {} })), Qa = ({ children: e, toc: t }) => l.createElement(Xa, { className: "sbdocs sbdocs-wrapper" }, l.createElement(Za, { className: "sbdocs sbdocs-content" }, e), t), ze = (e) => ({ borderRadius: e.appBorderRadius, background: e.background.content, boxShadow: e.base === "light" ? "rgba(0, 0, 0, 0.10) 0 1px 3px 0" : "rgba(0, 0, 0, 0.20) 0 2px 5px 0", border: `1px solid ${e.appBorderColor}` }), { window: eo } = globalThis, to = class extends v.Component {
  constructor() {
    super(...arguments), this.iframe = null;
  }
  componentDidMount() {
    let { id: e } = this.props;
    this.iframe = eo.document.getElementById(e);
  }
  shouldComponentUpdate(e) {
    let { scale: t } = e;
    return t !== this.props.scale && this.setIframeBodyStyle({ width: `${t * 100}%`, height: `${t * 100}%`, transform: `scale(${1 / t})`, transformOrigin: "top left" }), !1;
  }
  setIframeBodyStyle(e) {
    return Object.assign(this.iframe.contentDocument.body.style, e);
  }
  render() {
    let { id: e, title: t, src: r, allowFullScreen: n, scale: o, ...i } = this.props;
    return l.createElement("iframe", { id: e, title: t, src: r, ...n ? { allow: "fullscreen" } : {}, loading: "lazy", ...i });
  }
}, vr = v.createContext({ scale: 1 }), { PREVIEW_URL: ro } = globalThis, no = ro || "iframe.html", ct = ({ story: e, primary: t }) => `story--${e.id}${t ? "--primary" : ""}`, ao = (e) => {
  let t = v.useRef(), [r, n] = v.useState(!0), [o, i] = v.useState(), { story: a, height: d, autoplay: c, forceInitialArgs: u, renderStoryToElement: g } = e;
  return v.useEffect(() => {
    if (!(a && t.current)) return () => {
    };
    let f = t.current, h = g(a, f, { showMain: () => {
    }, showError: ({ title: s, description: m }) => i(new Error(`${s} - ${m}`)), showException: (s) => i(s) }, { autoplay: c, forceInitialArgs: u });
    return n(!1), () => {
      Promise.resolve().then(() => h());
    };
  }, [c, g, a]), o ? l.createElement("pre", null, l.createElement(Nn, { error: o })) : l.createElement(l.Fragment, null, d ? l.createElement("style", null, `#${ct(e)} { min-height: ${d}; transform: translateZ(0); overflow: auto }`) : null, r && l.createElement(Sr, null), l.createElement("div", { ref: t, id: `${ct(e)}-inner`, "data-name": a.name }));
}, oo = ({ story: e, height: t = "500px" }) => l.createElement("div", { style: { width: "100%", height: t } }, l.createElement(vr.Consumer, null, ({ scale: r }) => l.createElement(to, { key: "iframe", id: `iframe--${e.id}`, title: e.name, src: Bn(no, e.id, { viewMode: "story" }), allowFullScreen: !0, scale: r, style: { width: "100%", height: "100%", border: "0 none" } }))), lo = S.strong(({ theme: e }) => ({ color: e.color.orange })), io = (e) => {
  let { inline: t, story: r } = e;
  return t && !e.autoplay && r.usesMount ? l.createElement(lo, null, "This story mounts inside of play. Set", " ", l.createElement("a", { href: "https://storybook.js.org/docs/api/doc-blocks/doc-block-story#autoplay" }, "autoplay"), " ", "to true to view this story.") : l.createElement("div", { id: ct(e), className: "sb-story sb-unstyled", "data-story-block": "true" }, t ? l.createElement(ao, { ...e }) : l.createElement(oo, { ...e }));
}, Sr = () => l.createElement(Fn, null), so = S(Cn)({ position: "absolute", left: 0, right: 0, top: 0, transition: "transform .2s linear" }), co = S.div({ display: "flex", alignItems: "center", gap: 4 }), uo = S.div(({ theme: e }) => ({ width: 14, height: 14, borderRadius: 2, margin: "0 7px", backgroundColor: e.appBorderColor, animation: `${e.animation.glow} 1.5s ease-in-out infinite` })), po = ({ isLoading: e, storyId: t, baseUrl: r, zoom: n, resetZoom: o, ...i }) => l.createElement(so, { ...i }, l.createElement(co, { key: "left" }, e ? [1, 2, 3].map((a) => l.createElement(uo, { key: a })) : l.createElement(l.Fragment, null, l.createElement(he, { key: "zoomin", onClick: (a) => {
  a.preventDefault(), n(0.8);
}, title: "Zoom in" }, l.createElement(qn, null)), l.createElement(he, { key: "zoomout", onClick: (a) => {
  a.preventDefault(), n(1.25);
}, title: "Zoom out" }, l.createElement(Gn, null)), l.createElement(he, { key: "zoomreset", onClick: (a) => {
  a.preventDefault(), o();
}, title: "Reset zoom" }, l.createElement(Kn, null))))), mo = S.div(({ isColumn: e, columns: t, layout: r }) => ({ display: e || !t ? "block" : "flex", position: "relative", flexWrap: "wrap", overflow: "auto", flexDirection: e ? "column" : "row", "& .innerZoomElementWrapper > *": e ? { width: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "block" } : { maxWidth: r !== "fullscreen" ? "calc(100% - 20px)" : "100%", display: "inline-block" } }), ({ layout: e = "padded" }) => e === "centered" || e === "padded" ? { padding: "30px 20px", "& .innerZoomElementWrapper > *": { width: "auto", border: "10px solid transparent!important" } } : {}, ({ layout: e = "padded" }) => e === "centered" ? { display: "flex", justifyContent: "center", justifyItems: "center", alignContent: "center", alignItems: "center" } : {}, ({ columns: e }) => e && e > 1 ? { ".innerZoomElementWrapper > *": { minWidth: `calc(100% / ${e} - 20px)` } } : {}), Dt = S(xr)(({ theme: e }) => ({ margin: 0, borderTopLeftRadius: 0, borderTopRightRadius: 0, borderBottomLeftRadius: e.appBorderRadius, borderBottomRightRadius: e.appBorderRadius, border: "none", background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : W(0.05, e.background.content), color: e.color.lightest, button: { background: e.base === "light" ? "rgba(0, 0, 0, 0.85)" : W(0.05, e.background.content) } })), fo = S.div(({ theme: e, withSource: t, isExpanded: r }) => ({ position: "relative", overflow: "hidden", margin: "25px 0 40px", ...ze(e), borderBottomLeftRadius: t && r && 0, borderBottomRightRadius: t && r && 0, borderBottomWidth: r && 0, "h3 + &": { marginTop: "16px" } }), ({ withToolbar: e }) => e && { paddingTop: 40 }), go = (e, t, r) => {
  switch (!0) {
    case !!(e && e.error):
      return { source: null, actionItem: { title: "No code available", className: "docblock-code-toggle docblock-code-toggle--disabled", disabled: !0, onClick: () => r(!1) } };
    case t:
      return { source: l.createElement(Dt, { ...e, dark: !0 }), actionItem: { title: "Hide code", className: "docblock-code-toggle docblock-code-toggle--expanded", onClick: () => r(!1) } };
    default:
      return { source: l.createElement(Dt, { ...e, dark: !0 }), actionItem: { title: "Show code", className: "docblock-code-toggle", onClick: () => r(!0) } };
  }
};
function ho(e) {
  if (v.Children.count(e) === 1) {
    let t = e;
    if (t.props) return t.props.id;
  }
  return null;
}
var yo = S(po)({ position: "absolute", top: 0, left: 0, right: 0, height: 40 }), bo = S.div({ overflow: "hidden", position: "relative" }), Cr = ({ isLoading: e, isColumn: t, columns: r, children: n, withSource: o, withToolbar: i = !1, isExpanded: a = !1, additionalActions: d, className: c, layout: u = "padded", ...g }) => {
  let [f, h] = v.useState(a), { source: s, actionItem: m } = go(o, f, h), [p, b] = v.useState(1), E = [c].concat(["sbdocs", "sbdocs-preview", "sb-unstyled"]), x = o ? [m] : [], [C, y] = v.useState(d ? [...d] : []), k = [...x, ...C], { window: w } = globalThis, _ = v.useCallback(async (O) => {
    let { createCopyToClipboardFunction: F } = await import("../../../storybook/core/components/index.js");
    F();
  }, []), T = (O) => {
    let F = w.getSelection();
    F && F.type === "Range" || (O.preventDefault(), C.filter((z) => z.title === "Copied").length === 0 && _(s.props.code).then(() => {
      y([...C, { title: "Copied", onClick: () => {
      } }]), w.setTimeout(() => y(C.filter((z) => z.title !== "Copied")), 1500);
    }));
  };
  return l.createElement(fo, { withSource: o, withToolbar: i, ...g, className: E.join(" ") }, i && l.createElement(yo, { isLoading: e, border: !0, zoom: (O) => b(p * O), resetZoom: () => b(1), storyId: ho(n), baseUrl: "./iframe.html" }), l.createElement(vr.Provider, { value: { scale: p } }, l.createElement(bo, { className: "docs-story", onCopyCapture: o && T }, l.createElement(mo, { isColumn: t || !Array.isArray(n), columns: r, layout: u }, l.createElement(kn.Element, { scale: p }, Array.isArray(n) ? n.map((O, F) => l.createElement("div", { key: F }, O)) : l.createElement("div", null, n))), l.createElement(wn, { actionItems: k }))), o && f && s);
};
S(Cr)(() => ({ ".docs-story": { paddingTop: 32, paddingBottom: 40 } }));
function re() {
  return re = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, re.apply(this, arguments);
}
var Eo = ["children", "options"], Lt, Mt;
(function(e) {
  e.blockQuote = "0", e.breakLine = "1", e.breakThematic = "2", e.codeBlock = "3", e.codeFenced = "4", e.codeInline = "5", e.footnote = "6", e.footnoteReference = "7", e.gfmTask = "8", e.heading = "9", e.headingSetext = "10", e.htmlBlock = "11", e.htmlComment = "12", e.htmlSelfClosing = "13", e.image = "14", e.link = "15", e.linkAngleBraceStyleDetector = "16", e.linkBareUrlDetector = "17", e.linkMailtoDetector = "18", e.newlineCoalescer = "19", e.orderedList = "20", e.paragraph = "21", e.ref = "22", e.refImage = "23", e.refLink = "24", e.table = "25", e.tableSeparator = "26", e.text = "27", e.textBolded = "28", e.textEmphasized = "29", e.textEscaped = "30", e.textMarked = "31", e.textStrikethroughed = "32", e.unorderedList = "33";
})(Lt || (Lt = {})), function(e) {
  e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN";
}(Mt || (Mt = {}));
var zt = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), { for: "htmlFor" }), Ut = { amp: "&", apos: "'", gt: ">", lt: "<", nbsp: " ", quot: "“" }, xo = ["style", "script"], vo = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi, So = /mailto:/i, Co = /\n{2,}$/, kr = /^(\s*>[\s\S]*?)(?=\n{2,})/, ko = /^ *> ?/gm, wo = /^ {2,}\n/, _o = /^(?:( *[-*_])){3,} *(?:\n *)+\n/, wr = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/, _r = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/, To = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/, Ao = /^(?:\n *)*\n/, Oo = /\r\n?/g, Io = /^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/, Ro = /^\[\^([^\]]+)]/, jo = /\f/g, Po = /^---[ \t]*\n(.|\n)*\n---[ \t]*\n/, Fo = /^\s*?\[(x|\s)\]/, Tr = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Ar = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/, Or = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/, ut = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i, $o = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi, Ir = /^<!--[\s\S]*?(?:-->)/, No = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/, pt = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i, Bo = /^\{.*\}$/, Do = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/, Lo = /^<([^ >]+@[^ >]+)>/, Mo = /^<([^ >]+:\/[^ >]+)>/, zo = /-([a-z])?/gi, Rr = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/, Uo = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/, Ho = /^!\[([^\]]*)\] ?\[([^\]]*)\]/, Vo = /^\[([^\]]*)\] ?\[([^\]]*)\]/, Wo = /(\[|\])/g, qo = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/, Go = /\t/g, Ko = /^ *\| */, Yo = /(^ *\||\| *$)/g, Jo = / *$/, Zo = /^ *:-+: *$/, Xo = /^ *:-+ *$/, Qo = /^ *-+: *$/, Ue = "((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)", el = new RegExp(`^([*_])\\1${Ue}\\1\\1(?!\\1)`), tl = new RegExp(`^([*_])${Ue}\\1(?!\\1|\\w)`), rl = new RegExp(`^==${Ue}==`), nl = new RegExp(`^~~${Ue}~~`), al = /^\\([^0-9A-Za-z\s])/, ol = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i, ll = /^\n+/, il = /^([ \t]*)/, sl = /\\([^\\])/g, Ht = / *\n+$/, dl = /(?:^|\n)( *)$/, St = "(?:\\d+\\.)", Ct = "(?:[*+-])";
function jr(e) {
  return "( *)(" + (e === 1 ? St : Ct) + ") +";
}
var Pr = jr(1), Fr = jr(2);
function $r(e) {
  return new RegExp("^" + (e === 1 ? Pr : Fr));
}
var cl = $r(1), ul = $r(2);
function Nr(e) {
  return new RegExp("^" + (e === 1 ? Pr : Fr) + "[^\\n]*(?:\\n(?!\\1" + (e === 1 ? St : Ct) + " )[^\\n]*)*(\\n|$)", "gm");
}
var Br = Nr(1), Dr = Nr(2);
function Lr(e) {
  let t = e === 1 ? St : Ct;
  return new RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)");
}
var Mr = Lr(1), zr = Lr(2);
function Vt(e, t) {
  let r = t === 1, n = r ? Mr : zr, o = r ? Br : Dr, i = r ? cl : ul;
  return { match(a, d, c) {
    let u = dl.exec(c);
    return u && (d.list || !d.inline && !d.simple) ? n.exec(a = u[1] + a) : null;
  }, order: 1, parse(a, d, c) {
    let u = r ? +a[2] : void 0, g = a[0].replace(Co, `
`).match(o), f = !1;
    return { items: g.map(function(h, s) {
      let m = i.exec(h)[0].length, p = new RegExp("^ {1," + m + "}", "gm"), b = h.replace(p, "").replace(i, ""), E = s === g.length - 1, x = b.indexOf(`

`) !== -1 || E && f;
      f = x;
      let C = c.inline, y = c.list, k;
      c.list = !0, x ? (c.inline = !1, k = b.replace(Ht, `

`)) : (c.inline = !0, k = b.replace(Ht, ""));
      let w = d(k, c);
      return c.inline = C, c.list = y, w;
    }), ordered: r, start: u };
  }, render: (a, d, c) => e(a.ordered ? "ol" : "ul", { key: c.key, start: a.type === "20" ? a.start : void 0 }, a.items.map(function(u, g) {
    return e("li", { key: g }, d(u, c));
  })) };
}
var pl = new RegExp(`^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['"]([\\s\\S]*?)['"])?\\s*\\)`), ml = /^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/, Ur = [kr, wr, _r, Tr, Or, Ar, Ir, Rr, Br, Mr, Dr, zr], fl = [...Ur, /^[^\n]+(?:  \n|\n{2,})/, ut, pt];
function gl(e) {
  return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase();
}
function hl(e) {
  return Qo.test(e) ? "right" : Zo.test(e) ? "center" : Xo.test(e) ? "left" : null;
}
function Wt(e, t, r) {
  let n = r.inTable;
  r.inTable = !0;
  let o = t(e.trim(), r);
  r.inTable = n;
  let i = [[]];
  return o.forEach(function(a, d) {
    a.type === "26" ? d !== 0 && d !== o.length - 1 && i.push([]) : (a.type !== "27" || o[d + 1] != null && o[d + 1].type !== "26" || (a.text = a.text.replace(Jo, "")), i[i.length - 1].push(a));
  }), i;
}
function yl(e, t, r) {
  r.inline = !0;
  let n = Wt(e[1], t, r), o = e[2].replace(Yo, "").split("|").map(hl), i = function(a, d, c) {
    return a.trim().split(`
`).map(function(u) {
      return Wt(u, d, c);
    });
  }(e[3], t, r);
  return r.inline = !1, { align: o, cells: i, header: n, type: "25" };
}
function qt(e, t) {
  return e.align[t] == null ? {} : { textAlign: e.align[t] };
}
function Z(e) {
  return function(t, r) {
    return r.inline ? e.exec(t) : null;
  };
}
function X(e) {
  return function(t, r) {
    return r.inline || r.simple ? e.exec(t) : null;
  };
}
function Y(e) {
  return function(t, r) {
    return r.inline || r.simple ? null : e.exec(t);
  };
}
function fe(e) {
  return function(t) {
    return e.exec(t);
  };
}
function bl(e, t, r) {
  if (t.inline || t.simple || r && !r.endsWith(`
`)) return null;
  let n = "";
  e.split(`
`).every((i) => !Ur.some((a) => a.test(i)) && (n += i + `
`, i.trim()));
  let o = n.trimEnd();
  return o == "" ? null : [n, o];
}
function le(e) {
  try {
    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return;
  } catch {
    return null;
  }
  return e;
}
function Gt(e) {
  return e.replace(sl, "$1");
}
function je(e, t, r) {
  let n = r.inline || !1, o = r.simple || !1;
  r.inline = !0, r.simple = !0;
  let i = e(t, r);
  return r.inline = n, r.simple = o, i;
}
function El(e, t, r) {
  let n = r.inline || !1, o = r.simple || !1;
  r.inline = !1, r.simple = !0;
  let i = e(t, r);
  return r.inline = n, r.simple = o, i;
}
function xl(e, t, r) {
  return r.inline = !1, e(t, r);
}
var Ze = (e, t, r) => ({ children: je(t, e[1], r) });
function Xe() {
  return {};
}
function Qe() {
  return null;
}
function vl(...e) {
  return e.filter(Boolean).join(" ");
}
function et(e, t, r) {
  let n = e, o = t.split(".");
  for (; o.length && (n = n[o[0]], n !== void 0); ) o.shift();
  return n || r;
}
function Sl(e = "", t = {}) {
  t.overrides = t.overrides || {}, t.slugify = t.slugify || gl, t.namedCodesToUnicode = t.namedCodesToUnicode ? re({}, Ut, t.namedCodesToUnicode) : Ut;
  let r = t.createElement || v.createElement;
  function n(s, m, ...p) {
    let b = et(t.overrides, `${s}.props`, {});
    return r(function(E, x) {
      let C = et(x, E);
      return C ? typeof C == "function" || typeof C == "object" && "render" in C ? C : et(x, `${E}.component`, E) : E;
    }(s, t.overrides), re({}, m, b, { className: vl(m?.className, b.className) || void 0 }), ...p);
  }
  function o(s) {
    s = s.replace(Po, "");
    let m = !1;
    t.forceInline ? m = !0 : t.forceBlock || (m = qo.test(s) === !1);
    let p = g(u(m ? s : `${s.trimEnd().replace(ll, "")}

`, { inline: m }));
    for (; typeof p[p.length - 1] == "string" && !p[p.length - 1].trim(); ) p.pop();
    if (t.wrapper === null) return p;
    let b = t.wrapper || (m ? "span" : "div"), E;
    if (p.length > 1 || t.forceWrapper) E = p;
    else {
      if (p.length === 1) return E = p[0], typeof E == "string" ? n("span", { key: "outer" }, E) : E;
      E = null;
    }
    return v.createElement(b, { key: "outer" }, E);
  }
  function i(s) {
    let m = s.match(vo);
    return m ? m.reduce(function(p, b, E) {
      let x = b.indexOf("=");
      if (x !== -1) {
        let C = function(_) {
          return _.indexOf("-") !== -1 && _.match(No) === null && (_ = _.replace(zo, function(T, O) {
            return O.toUpperCase();
          })), _;
        }(b.slice(0, x)).trim(), y = function(_) {
          let T = _[0];
          return (T === '"' || T === "'") && _.length >= 2 && _[_.length - 1] === T ? _.slice(1, -1) : _;
        }(b.slice(x + 1).trim()), k = zt[C] || C, w = p[k] = function(_, T) {
          return _ === "style" ? T.split(/;\s?/).reduce(function(O, F) {
            let z = F.slice(0, F.indexOf(":"));
            return O[z.trim().replace(/(-[a-z])/g, (I) => I[1].toUpperCase())] = F.slice(z.length + 1).trim(), O;
          }, {}) : _ === "href" || _ === "src" ? le(T) : (T.match(Bo) && (T = T.slice(1, T.length - 1)), T === "true" || T !== "false" && T);
        }(C, y);
        typeof w == "string" && (ut.test(w) || pt.test(w)) && (p[k] = v.cloneElement(o(w.trim()), { key: E }));
      } else b !== "style" && (p[zt[b] || b] = !0);
      return p;
    }, {}) : null;
  }
  let a = [], d = {}, c = { 0: { match: Y(kr), order: 1, parse: (s, m, p) => ({ children: m(s[0].replace(ko, ""), p) }), render: (s, m, p) => n("blockquote", { key: p.key }, m(s.children, p)) }, 1: { match: fe(wo), order: 1, parse: Xe, render: (s, m, p) => n("br", { key: p.key }) }, 2: { match: Y(_o), order: 1, parse: Xe, render: (s, m, p) => n("hr", { key: p.key }) }, 3: { match: Y(_r), order: 0, parse: (s) => ({ lang: void 0, text: s[0].replace(/^ {4}/gm, "").replace(/\n+$/, "") }), render: (s, m, p) => n("pre", { key: p.key }, n("code", re({}, s.attrs, { className: s.lang ? `lang-${s.lang}` : "" }), s.text)) }, 4: { match: Y(wr), order: 0, parse: (s) => ({ attrs: i(s[3] || ""), lang: s[2] || void 0, text: s[4], type: "3" }) }, 5: { match: X(To), order: 3, parse: (s) => ({ text: s[2] }), render: (s, m, p) => n("code", { key: p.key }, s.text) }, 6: { match: Y(Io), order: 0, parse: (s) => (a.push({ footnote: s[2], identifier: s[1] }), {}), render: Qe }, 7: { match: Z(Ro), order: 1, parse: (s) => ({ target: `#${t.slugify(s[1])}`, text: s[1] }), render: (s, m, p) => n("a", { key: p.key, href: le(s.target) }, n("sup", { key: p.key }, s.text)) }, 8: { match: Z(Fo), order: 1, parse: (s) => ({ completed: s[1].toLowerCase() === "x" }), render: (s, m, p) => n("input", { checked: s.completed, key: p.key, readOnly: !0, type: "checkbox" }) }, 9: { match: Y(t.enforceAtxHeadings ? Ar : Tr), order: 1, parse: (s, m, p) => ({ children: je(m, s[2], p), id: t.slugify(s[2]), level: s[1].length }), render: (s, m, p) => n(`h${s.level}`, { id: s.id, key: p.key }, m(s.children, p)) }, 10: { match: Y(Or), order: 0, parse: (s, m, p) => ({ children: je(m, s[1], p), level: s[2] === "=" ? 1 : 2, type: "9" }) }, 11: { match: fe(ut), order: 1, parse(s, m, p) {
    let [, b] = s[3].match(il), E = new RegExp(`^${b}`, "gm"), x = s[3].replace(E, ""), C = (y = x, fl.some((T) => T.test(y)) ? xl : je);
    var y;
    let k = s[1].toLowerCase(), w = xo.indexOf(k) !== -1, _ = { attrs: i(s[2]), noInnerParse: w, tag: (w ? k : s[1]).trim() };
    return p.inAnchor = p.inAnchor || k === "a", w ? _.text = s[3] : _.children = C(m, x, p), p.inAnchor = !1, _;
  }, render: (s, m, p) => n(s.tag, re({ key: p.key }, s.attrs), s.text || m(s.children, p)) }, 13: { match: fe(pt), order: 1, parse: (s) => ({ attrs: i(s[2] || ""), tag: s[1].trim() }), render: (s, m, p) => n(s.tag, re({}, s.attrs, { key: p.key })) }, 12: { match: fe(Ir), order: 1, parse: () => ({}), render: Qe }, 14: { match: X(ml), order: 1, parse: (s) => ({ alt: s[1], target: Gt(s[2]), title: s[3] }), render: (s, m, p) => n("img", { key: p.key, alt: s.alt || void 0, title: s.title || void 0, src: le(s.target) }) }, 15: { match: Z(pl), order: 3, parse: (s, m, p) => ({ children: El(m, s[1], p), target: Gt(s[2]), title: s[3] }), render: (s, m, p) => n("a", { key: p.key, href: le(s.target), title: s.title }, m(s.children, p)) }, 16: { match: Z(Mo), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], type: "15" }) }, 17: { match: (s, m) => m.inAnchor ? null : Z(Do)(s, m), order: 0, parse: (s) => ({ children: [{ text: s[1], type: "27" }], target: s[1], title: void 0, type: "15" }) }, 18: { match: Z(Lo), order: 0, parse(s) {
    let m = s[1], p = s[1];
    return So.test(p) || (p = "mailto:" + p), { children: [{ text: m.replace("mailto:", ""), type: "27" }], target: p, type: "15" };
  } }, 20: Vt(n, 1), 33: Vt(n, 2), 19: { match: Y(Ao), order: 3, parse: Xe, render: () => `
` }, 21: { match: bl, order: 3, parse: Ze, render: (s, m, p) => n("p", { key: p.key }, m(s.children, p)) }, 22: { match: Z(Uo), order: 0, parse: (s) => (d[s[1]] = { target: s[2], title: s[4] }, {}), render: Qe }, 23: { match: X(Ho), order: 0, parse: (s) => ({ alt: s[1] || void 0, ref: s[2] }), render: (s, m, p) => d[s.ref] ? n("img", { key: p.key, alt: s.alt, src: le(d[s.ref].target), title: d[s.ref].title }) : null }, 24: { match: Z(Vo), order: 0, parse: (s, m, p) => ({ children: m(s[1], p), fallbackChildren: m(s[0].replace(Wo, "\\$1"), p), ref: s[2] }), render: (s, m, p) => d[s.ref] ? n("a", { key: p.key, href: le(d[s.ref].target), title: d[s.ref].title }, m(s.children, p)) : n("span", { key: p.key }, m(s.fallbackChildren, p)) }, 25: { match: Y(Rr), order: 1, parse: yl, render: (s, m, p) => n("table", { key: p.key }, n("thead", null, n("tr", null, s.header.map(function(b, E) {
    return n("th", { key: E, style: qt(s, E) }, m(b, p));
  }))), n("tbody", null, s.cells.map(function(b, E) {
    return n("tr", { key: E }, b.map(function(x, C) {
      return n("td", { key: C, style: qt(s, C) }, m(x, p));
    }));
  }))) }, 26: { match: function(s, m) {
    return m.inTable ? (m.inline = !0, Ko.exec(s)) : null;
  }, order: 1, parse: function() {
    return { type: "26" };
  }, render: () => " | " }, 27: { match: fe(ol), order: 4, parse: (s) => ({ text: s[0].replace($o, (m, p) => t.namedCodesToUnicode[p] ? t.namedCodesToUnicode[p] : m) }), render: (s) => s.text }, 28: { match: X(el), order: 2, parse: (s, m, p) => ({ children: m(s[2], p) }), render: (s, m, p) => n("strong", { key: p.key }, m(s.children, p)) }, 29: { match: X(tl), order: 3, parse: (s, m, p) => ({ children: m(s[2], p) }), render: (s, m, p) => n("em", { key: p.key }, m(s.children, p)) }, 30: { match: X(al), order: 1, parse: (s) => ({ text: s[1], type: "27" }) }, 31: { match: X(rl), order: 3, parse: Ze, render: (s, m, p) => n("mark", { key: p.key }, m(s.children, p)) }, 32: { match: X(nl), order: 3, parse: Ze, render: (s, m, p) => n("del", { key: p.key }, m(s.children, p)) } };
  t.disableParsingRawHTML === !0 && (delete c[11], delete c[13]);
  let u = function(s) {
    let m = Object.keys(s);
    function p(b, E) {
      let x = [], C = "";
      for (; b; ) {
        let y = 0;
        for (; y < m.length; ) {
          let k = m[y], w = s[k], _ = w.match(b, E, C);
          if (_) {
            let T = _[0];
            b = b.substring(T.length);
            let O = w.parse(_, p, E);
            O.type == null && (O.type = k), x.push(O), C = T;
            break;
          }
          y++;
        }
      }
      return x;
    }
    return m.sort(function(b, E) {
      let x = s[b].order, C = s[E].order;
      return x !== C ? x - C : b < E ? -1 : 1;
    }), function(b, E) {
      return p(function(x) {
        return x.replace(Oo, `
`).replace(jo, "").replace(Go, "    ");
      }(b), E);
    };
  }(c), g = (f = /* @__PURE__ */ function(s, m) {
    return function(p, b, E) {
      let x = s[p.type].render;
      return m ? m(() => x(p, b, E), p, b, E) : x(p, b, E);
    };
  }(c, t.renderRule), function s(m, p = {}) {
    if (Array.isArray(m)) {
      let b = p.key, E = [], x = !1;
      for (let C = 0; C < m.length; C++) {
        p.key = C;
        let y = s(m[C], p), k = typeof y == "string";
        k && x ? E[E.length - 1] += y : y !== null && E.push(y), x = k;
      }
      return p.key = b, E;
    }
    return f(m, s, p);
  });
  var f;
  let h = o(e);
  return a.length ? n("div", null, h, n("footer", { key: "footer" }, a.map(function(s) {
    return n("div", { id: t.slugify(s.identifier), key: s.identifier }, s.identifier, g(u(s.footnote, { inline: !0 })));
  }))) : h;
}
var Hr = (e) => {
  let { children: t = "", options: r } = e, n = function(o, i) {
    if (o == null) return {};
    var a, d, c = {}, u = Object.keys(o);
    for (d = 0; d < u.length; d++) i.indexOf(a = u[d]) >= 0 || (c[a] = o[a]);
    return c;
  }(e, Eo);
  return v.cloneElement(Sl(t, r), n);
}, Cl = S.label(({ theme: e }) => ({ lineHeight: "18px", alignItems: "center", marginBottom: 8, display: "inline-block", position: "relative", whiteSpace: "nowrap", background: e.boolean.background, borderRadius: "3em", padding: 1, '&[aria-disabled="true"]': { opacity: 0.5, input: { cursor: "not-allowed" } }, input: { appearance: "none", width: "100%", height: "100%", position: "absolute", left: 0, top: 0, margin: 0, padding: 0, border: "none", background: "transparent", cursor: "pointer", borderRadius: "3em", "&:focus": { outline: "none", boxShadow: `${e.color.secondary} 0 0 0 1px inset !important` } }, span: { textAlign: "center", fontSize: e.typography.size.s1, fontWeight: e.typography.weight.bold, lineHeight: "1", cursor: "pointer", display: "inline-block", padding: "7px 15px", transition: "all 100ms ease-out", userSelect: "none", borderRadius: "3em", color: R(0.5, e.color.defaultText), background: "transparent", "&:hover": { boxShadow: `${Ae(0.3, e.appBorderColor)} 0 0 0 1px inset` }, "&:active": { boxShadow: `${Ae(0.05, e.appBorderColor)} 0 0 0 2px inset`, color: Ae(1, e.appBorderColor) }, "&:first-of-type": { paddingRight: 8 }, "&:last-of-type": { paddingLeft: 8 } }, "input:checked ~ span:last-of-type, input:not(:checked) ~ span:first-of-type": { background: e.boolean.selectedBackground, boxShadow: e.base === "light" ? `${Ae(0.1, e.appBorderColor)} 0 0 2px` : `${e.appBorderColor} 0 0 0 1px`, color: e.color.defaultText, padding: "7px 15px" } })), kl = (e) => e === "true", wl = ({ name: e, value: t, onChange: r, onBlur: n, onFocus: o, argType: i }) => {
  let a = v.useCallback(() => r(!1), [r]), d = !!i?.table?.readonly;
  if (t === void 0) return l.createElement(Be, { variant: "outline", size: "medium", id: Fe(e), onClick: a, disabled: d }, "Set boolean");
  let c = V(e), u = typeof t == "string" ? kl(t) : t;
  return l.createElement(Cl, { "aria-disabled": d, htmlFor: c, "aria-label": e }, l.createElement("input", { id: c, type: "checkbox", onChange: (g) => r(g.target.checked), checked: u, role: "switch", disabled: d, name: e, onBlur: n, onFocus: o }), l.createElement("span", { "aria-hidden": "true" }, "False"), l.createElement("span", { "aria-hidden": "true" }, "True"));
}, _l = (e) => {
  let [t, r, n] = e.split("-"), o = /* @__PURE__ */ new Date();
  return o.setFullYear(parseInt(t, 10), parseInt(r, 10) - 1, parseInt(n, 10)), o;
}, Tl = (e) => {
  let [t, r] = e.split(":"), n = /* @__PURE__ */ new Date();
  return n.setHours(parseInt(t, 10)), n.setMinutes(parseInt(r, 10)), n;
}, Al = (e) => {
  let t = new Date(e), r = `000${t.getFullYear()}`.slice(-4), n = `0${t.getMonth() + 1}`.slice(-2), o = `0${t.getDate()}`.slice(-2);
  return `${r}-${n}-${o}`;
}, Ol = (e) => {
  let t = new Date(e), r = `0${t.getHours()}`.slice(-2), n = `0${t.getMinutes()}`.slice(-2);
  return `${r}:${n}`;
}, Kt = S(ve.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })), Il = S.div(({ theme: e }) => ({ flex: 1, display: "flex", input: { marginLeft: 10, flex: 1, height: 32, "&::-webkit-calendar-picker-indicator": { opacity: 0.5, height: 12, filter: e.base === "light" ? void 0 : "invert(1)" } }, "input:first-of-type": { marginLeft: 0, flexGrow: 4 }, "input:last-of-type": { flexGrow: 3 } })), Rl = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, argType: i }) => {
  let [a, d] = v.useState(!0), c = v.useRef(), u = v.useRef(), g = !!i?.table?.readonly;
  v.useEffect(() => {
    a !== !1 && (c && c.current && (c.current.value = t ? Al(t) : ""), u && u.current && (u.current.value = t ? Ol(t) : ""));
  }, [t]);
  let f = (m) => {
    if (!m.target.value) return r();
    let p = _l(m.target.value), b = new Date(t);
    b.setFullYear(p.getFullYear(), p.getMonth(), p.getDate());
    let E = b.getTime();
    E && r(E), d(!!E);
  }, h = (m) => {
    if (!m.target.value) return r();
    let p = Tl(m.target.value), b = new Date(t);
    b.setHours(p.getHours()), b.setMinutes(p.getMinutes());
    let E = b.getTime();
    E && r(E), d(!!E);
  }, s = V(e);
  return l.createElement(Il, null, l.createElement(Kt, { type: "date", max: "9999-12-31", ref: c, id: `${s}-date`, name: `${s}-date`, readOnly: g, onChange: f, onFocus: n, onBlur: o }), l.createElement(Kt, { type: "time", id: `${s}-time`, name: `${s}-time`, ref: u, onChange: h, readOnly: g, onFocus: n, onBlur: o }), a ? null : l.createElement("div", null, "invalid"));
}, jl = S.label({ display: "flex" }), Pl = (e) => {
  let t = parseFloat(e);
  return Number.isNaN(t) ? void 0 : t;
}, Fl = S(ve.Input)(({ readOnly: e }) => ({ opacity: e ? 0.5 : 1 })), $l = ({ name: e, value: t, onChange: r, min: n, max: o, step: i, onBlur: a, onFocus: d, argType: c }) => {
  let [u, g] = v.useState(typeof t == "number" ? t : ""), [f, h] = v.useState(!1), [s, m] = v.useState(null), p = !!c?.table?.readonly, b = v.useCallback((C) => {
    g(C.target.value);
    let y = parseFloat(C.target.value);
    Number.isNaN(y) ? m(new Error(`'${C.target.value}' is not a number`)) : (r(y), m(null));
  }, [r, m]), E = v.useCallback(() => {
    g("0"), r(0), h(!0);
  }, [h]), x = v.useRef(null);
  return v.useEffect(() => {
    f && x.current && x.current.select();
  }, [f]), v.useEffect(() => {
    u !== (typeof t == "number" ? t : "") && g(t);
  }, [t]), t === void 0 ? l.createElement(Be, { variant: "outline", size: "medium", id: Fe(e), onClick: E, disabled: p }, "Set number") : l.createElement(jl, null, l.createElement(Fl, { ref: x, id: V(e), type: "number", onChange: b, size: "flex", placeholder: "Edit number...", value: u, valid: s ? "error" : null, autoFocus: f, readOnly: p, name: e, min: n, max: o, step: i, onFocus: d, onBlur: a }));
}, Vr = (e, t) => {
  let r = t && Object.entries(t).find(([n, o]) => o === e);
  return r ? r[0] : void 0;
}, mt = (e, t) => e && t ? Object.entries(t).filter((r) => e.includes(r[1])).map((r) => r[0]) : [], Wr = (e, t) => e && t && e.map((r) => t[r]), Nl = S.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (e) => {
  if (e["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Bl = S.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), Dl = S.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Yt = ({ name: e, options: t, value: r, onChange: n, isInline: o, argType: i }) => {
  if (!t) return xt.warn(`Checkbox with no options: ${e}`), l.createElement(l.Fragment, null, "-");
  let a = mt(r, t), [d, c] = v.useState(a), u = !!i?.table?.readonly, g = (h) => {
    let s = h.target.value, m = [...d];
    m.includes(s) ? m.splice(m.indexOf(s), 1) : m.push(s), n(Wr(m, t)), c(m);
  };
  v.useEffect(() => {
    c(mt(r, t));
  }, [r]);
  let f = V(e);
  return l.createElement(Nl, { "aria-readonly": u, isInline: o }, Object.keys(t).map((h, s) => {
    let m = `${f}-${s}`;
    return l.createElement(Dl, { key: m, htmlFor: m }, l.createElement("input", { type: "checkbox", disabled: u, id: m, name: m, value: h, onChange: g, checked: d?.includes(h) }), l.createElement(Bl, null, h));
  }));
}, Ll = S.div(({ isInline: e }) => e ? { display: "flex", flexWrap: "wrap", alignItems: "flex-start", label: { display: "inline-flex", marginRight: 15 } } : { label: { display: "flex" } }, (e) => {
  if (e["aria-readonly"] === "true") return { input: { cursor: "not-allowed" } };
}), Ml = S.span({ "[aria-readonly=true] &": { opacity: 0.5 } }), zl = S.label({ lineHeight: "20px", alignItems: "center", marginBottom: 8, "&:last-child": { marginBottom: 0 }, input: { margin: 0, marginRight: 6 } }), Jt = ({ name: e, options: t, value: r, onChange: n, isInline: o, argType: i }) => {
  if (!t) return xt.warn(`Radio with no options: ${e}`), l.createElement(l.Fragment, null, "-");
  let a = Vr(r, t), d = V(e), c = !!i?.table?.readonly;
  return l.createElement(Ll, { "aria-readonly": c, isInline: o }, Object.keys(t).map((u, g) => {
    let f = `${d}-${g}`;
    return l.createElement(zl, { key: f, htmlFor: f }, l.createElement("input", { type: "radio", id: f, name: d, disabled: c, value: u, onChange: (h) => n(t[h.currentTarget.value]), checked: u === a }), l.createElement(Ml, null, u));
  }));
}, Ul = { appearance: "none", border: "0 none", boxSizing: "inherit", display: " block", margin: " 0", background: "transparent", padding: 0, fontSize: "inherit", position: "relative" }, qr = S.select(Ul, ({ theme: e }) => ({ boxSizing: "border-box", position: "relative", padding: "6px 10px", width: "100%", color: e.input.color || "inherit", background: e.input.background, borderRadius: e.input.borderRadius, boxShadow: `${e.input.border} 0 0 0 1px inset`, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", "&:focus": { boxShadow: `${e.color.secondary} 0 0 0 1px inset`, outline: "none" }, "&[disabled]": { cursor: "not-allowed", opacity: 0.5 }, "::placeholder": { color: e.textMutedColor }, "&[multiple]": { overflow: "auto", padding: 0, option: { display: "block", padding: "6px 10px", marginLeft: 1, marginRight: 1 } } })), Gr = S.span(({ theme: e }) => ({ display: "inline-block", lineHeight: "normal", overflow: "hidden", position: "relative", verticalAlign: "top", width: "100%", svg: { position: "absolute", zIndex: 1, pointerEvents: "none", height: "12px", marginTop: "-6px", right: "12px", top: "50%", fill: e.textMutedColor, path: { fill: e.textMutedColor } } })), Zt = "Choose option...", Hl = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
  let i = (u) => {
    n(r[u.currentTarget.value]);
  }, a = Vr(t, r) || Zt, d = V(e), c = !!o?.table?.readonly;
  return l.createElement(Gr, null, l.createElement(mr, null), l.createElement(qr, { disabled: c, id: d, value: a, onChange: i }, l.createElement("option", { key: "no-selection", disabled: !0 }, Zt), Object.keys(r).map((u) => l.createElement("option", { key: u, value: u }, u))));
}, Vl = ({ name: e, value: t, options: r, onChange: n, argType: o }) => {
  let i = (u) => {
    let g = Array.from(u.currentTarget.options).filter((f) => f.selected).map((f) => f.value);
    n(Wr(g, r));
  }, a = mt(t, r), d = V(e), c = !!o?.table?.readonly;
  return l.createElement(Gr, null, l.createElement(qr, { disabled: c, id: d, multiple: !0, value: a, onChange: i }, Object.keys(r).map((u) => l.createElement("option", { key: u, value: u }, u))));
}, Xt = (e) => {
  let { name: t, options: r } = e;
  return r ? e.isMulti ? l.createElement(Vl, { ...e }) : l.createElement(Hl, { ...e }) : (xt.warn(`Select with no options: ${t}`), l.createElement(l.Fragment, null, "-"));
}, Wl = (e, t) => Array.isArray(e) ? e.reduce((r, n) => (r[t?.[n] || String(n)] = n, r), {}) : e, ql = { check: Yt, "inline-check": Yt, radio: Jt, "inline-radio": Jt, select: Xt, "multi-select": Xt }, ie = (e) => {
  let { type: t = "select", labels: r, argType: n } = e, o = { ...e, argType: n, options: n ? Wl(n.options, r) : {}, isInline: t.includes("inline"), isMulti: t.includes("multi") }, i = ql[t];
  if (i) return l.createElement(i, { ...o });
  throw new Error(`Unknown options type: ${t}`);
}, Gl = "Error", Kl = "Object", Yl = "Array", Jl = "String", Zl = "Number", Xl = "Boolean", Ql = "Date", ei = "Null", ti = "Undefined", ri = "Function", ni = "Symbol", Kr = "ADD_DELTA_TYPE", Yr = "REMOVE_DELTA_TYPE", Jr = "UPDATE_DELTA_TYPE", kt = "value", ai = "key";
function ne(e) {
  return e !== null && typeof e == "object" && !Array.isArray(e) && typeof e[Symbol.iterator] == "function" ? "Iterable" : Object.prototype.toString.call(e).slice(8, -1);
}
function Zr(e, t) {
  let r = ne(e), n = ne(t);
  return (r === "Function" || n === "Function") && n !== r;
}
var wt = class extends v.Component {
  constructor(e) {
    super(e), this.state = { inputRefKey: null, inputRefValue: null }, this.refInputValue = this.refInputValue.bind(this), this.refInputKey = this.refInputKey.bind(this), this.onKeydown = this.onKeydown.bind(this), this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    let { inputRefKey: e, inputRefValue: t } = this.state, { onlyValue: r } = this.props;
    e && typeof e.focus == "function" && e.focus(), r && t && typeof t.focus == "function" && t.focus(), document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.onSubmit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.props.handleCancel()));
  }
  onSubmit() {
    let { handleAdd: e, onlyValue: t, onSubmitValueParser: r, keyPath: n, deep: o } = this.props, { inputRefKey: i, inputRefValue: a } = this.state, d = {};
    if (!t) {
      if (!i.value) return;
      d.key = i.value;
    }
    d.newValue = r(!1, n, o, d.key, a.value), e(d);
  }
  refInputKey(e) {
    this.state.inputRefKey = e;
  }
  refInputValue(e) {
    this.state.inputRefValue = e;
  }
  render() {
    let { handleCancel: e, onlyValue: t, addButtonElement: r, cancelButtonElement: n, inputElementGenerator: o, keyPath: i, deep: a } = this.props, d = v.cloneElement(r, { onClick: this.onSubmit }), c = v.cloneElement(n, { onClick: e }), u = o(kt, i, a), g = v.cloneElement(u, { placeholder: "Value", ref: this.refInputValue }), f = null;
    if (!t) {
      let h = o(ai, i, a);
      f = v.cloneElement(h, { placeholder: "Key", ref: this.refInputKey });
    }
    return l.createElement("span", { className: "rejt-add-value-node" }, f, g, c, d);
  }
};
wt.defaultProps = { onlyValue: !1, addButtonElement: l.createElement("button", null, "+"), cancelButtonElement: l.createElement("button", null, "c") };
var Xr = class extends v.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { data: e.data, name: e.name, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveItem = this.handleRemoveItem.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: o } = this.props, i = n.length;
    o(n[i - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleRemoveItem(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: i } = this.state, a = n[e];
      t(e, o, i, a).then(() => {
        let d = { keyPath: o, deep: i, key: e, oldValue: a, type: Yr };
        n.splice(e, 1), this.setState({ data: n });
        let { onUpdate: c, onDeltaUpdate: u } = this.props;
        c(o[o.length - 1], n), u(d);
      }).catch(r.error);
    };
  }
  handleAddValueAdd({ newValue: e }) {
    let { data: t, keyPath: r, nextDeep: n } = this.state, { beforeAddAction: o, logger: i } = this.props;
    o(t.length, r, n, e).then(() => {
      let a = [...t, e];
      this.setState({ data: a }), this.handleAddValueCancel();
      let { onUpdate: d, onDeltaUpdate: c } = this.props;
      d(r[r.length - 1], a), c({ type: Kr, keyPath: r, deep: n, key: a.length - 1, newValue: e });
    }).catch(i.error);
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: i, keyPath: a, nextDeep: d } = this.state, c = i[e];
      o(e, a, d, c, t).then(() => {
        i[e] = t, this.setState({ data: i });
        let { onUpdate: u, onDeltaUpdate: g } = this.props;
        u(a[a.length - 1], i), g({ type: Jr, keyPath: a, deep: d, key: e, newValue: t, oldValue: c }), r(void 0);
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n } = this.state, { handleRemove: o, readOnly: i, getStyle: a, dataType: d, minusMenuElement: c } = this.props, { minus: u, collapsed: g } = a(e, t, r, n, d), f = i(e, t, r, n, d), h = v.cloneElement(c, { onClick: o, className: "rejt-minus-menu", style: u });
    return l.createElement("span", { className: "rejt-collapsed" }, l.createElement("span", { className: "rejt-collapsed-text", style: g, onClick: this.handleCollapseMode }, "[...] ", t.length, " ", t.length === 1 ? "item" : "items"), !f && h);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, addFormVisible: o, nextDeep: i } = this.state, { isCollapsed: a, handleRemove: d, onDeltaUpdate: c, readOnly: u, getStyle: g, dataType: f, addButtonElement: h, cancelButtonElement: s, editButtonElement: m, inputElementGenerator: p, textareaElementGenerator: b, minusMenuElement: E, plusMenuElement: x, beforeRemoveAction: C, beforeAddAction: y, beforeUpdateAction: k, logger: w, onSubmitValueParser: _ } = this.props, { minus: T, plus: O, delimiter: F, ul: z, addForm: I } = g(e, t, r, n, f), P = u(e, t, r, n, f), A = v.cloneElement(x, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: O }), j = v.cloneElement(E, { onClick: d, className: "rejt-minus-menu", style: T });
    return l.createElement("span", { className: "rejt-not-collapsed" }, l.createElement("span", { className: "rejt-not-collapsed-delimiter", style: F }, "["), !o && A, l.createElement("ul", { className: "rejt-not-collapsed-list", style: z }, t.map(($, U) => l.createElement(He, { key: U, name: U.toString(), data: $, keyPath: r, deep: i, isCollapsed: a, handleRemove: this.handleRemoveItem(U), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: c, readOnly: u, getStyle: g, addButtonElement: h, cancelButtonElement: s, editButtonElement: m, inputElementGenerator: p, textareaElementGenerator: b, minusMenuElement: E, plusMenuElement: x, beforeRemoveAction: C, beforeAddAction: y, beforeUpdateAction: k, logger: w, onSubmitValueParser: _ }))), !P && o && l.createElement("div", { className: "rejt-add-form", style: I }, l.createElement(wt, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, onlyValue: !0, addButtonElement: h, cancelButtonElement: s, inputElementGenerator: p, keyPath: r, deep: n, onSubmitValueParser: _ })), l.createElement("span", { className: "rejt-not-collapsed-delimiter", style: F }, "]"), !P && j);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { dataType: i, getStyle: a } = this.props, d = t ? this.renderCollapsed() : this.renderNotCollapsed(), c = a(e, r, n, o, i);
    return l.createElement("div", { className: "rejt-array-node" }, l.createElement("span", { onClick: this.handleCollapseMode }, l.createElement("span", { className: "rejt-name", style: c.name }, e, " :", " ")), d);
  }
};
Xr.defaultProps = { keyPath: [], deep: 0, minusMenuElement: l.createElement("span", null, " - "), plusMenuElement: l.createElement("span", null, " + ") };
var Qr = class extends v.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: i } = this.state, { readOnly: a, dataType: d } = this.props, c = a(r, n, o, i, d);
    e && !c && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: i, name: a, deep: d } = this.state;
    if (!i) return;
    let c = n(!0, o, d, a, i.value);
    e({ value: c, key: a }).then(() => {
      Zr(t, c) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: i, originalValue: a, readOnly: d, dataType: c, getStyle: u, editButtonElement: g, cancelButtonElement: f, textareaElementGenerator: h, minusMenuElement: s, keyPath: m } = this.props, p = u(e, a, n, o, c), b = null, E = null, x = d(e, a, n, o, c);
    if (r && !x) {
      let C = h(kt, m, o, e, a, c), y = v.cloneElement(g, { onClick: this.handleEdit }), k = v.cloneElement(f, { onClick: this.handleCancelEdit }), w = v.cloneElement(C, { ref: this.refInput, defaultValue: a });
      b = l.createElement("span", { className: "rejt-edit-form", style: p.editForm }, w, " ", k, y), E = null;
    } else {
      b = l.createElement("span", { className: "rejt-value", style: p.value, onClick: x ? null : this.handleEditMode }, t);
      let C = v.cloneElement(s, { onClick: i, className: "rejt-minus-menu", style: p.minus });
      E = x ? null : C;
    }
    return l.createElement("li", { className: "rejt-function-value-node", style: p.li }, l.createElement("span", { className: "rejt-name", style: p.name }, e, " :", " "), b, E);
  }
};
Qr.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => {
}, editButtonElement: l.createElement("button", null, "e"), cancelButtonElement: l.createElement("button", null, "c"), minusMenuElement: l.createElement("span", null, " - ") };
var He = class extends v.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, name: e.name, keyPath: e.keyPath, deep: e.deep };
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  render() {
    let { data: e, name: t, keyPath: r, deep: n } = this.state, { isCollapsed: o, handleRemove: i, handleUpdateValue: a, onUpdate: d, onDeltaUpdate: c, readOnly: u, getStyle: g, addButtonElement: f, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, textareaElementGenerator: p, minusMenuElement: b, plusMenuElement: E, beforeRemoveAction: x, beforeAddAction: C, beforeUpdateAction: y, logger: k, onSubmitValueParser: w } = this.props, _ = () => !0, T = ne(e);
    switch (T) {
      case Gl:
        return l.createElement(ft, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: i, onUpdate: d, onDeltaUpdate: c, readOnly: _, dataType: T, getStyle: g, addButtonElement: f, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, textareaElementGenerator: p, minusMenuElement: b, plusMenuElement: E, beforeRemoveAction: x, beforeAddAction: C, beforeUpdateAction: y, logger: k, onSubmitValueParser: w });
      case Kl:
        return l.createElement(ft, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: i, onUpdate: d, onDeltaUpdate: c, readOnly: u, dataType: T, getStyle: g, addButtonElement: f, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, textareaElementGenerator: p, minusMenuElement: b, plusMenuElement: E, beforeRemoveAction: x, beforeAddAction: C, beforeUpdateAction: y, logger: k, onSubmitValueParser: w });
      case Yl:
        return l.createElement(Xr, { data: e, name: t, isCollapsed: o, keyPath: r, deep: n, handleRemove: i, onUpdate: d, onDeltaUpdate: c, readOnly: u, dataType: T, getStyle: g, addButtonElement: f, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, textareaElementGenerator: p, minusMenuElement: b, plusMenuElement: E, beforeRemoveAction: x, beforeAddAction: C, beforeUpdateAction: y, logger: k, onSubmitValueParser: w });
      case Jl:
        return l.createElement(Q, { name: t, value: `"${e}"`, originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case Zl:
        return l.createElement(Q, { name: t, value: e, originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case Xl:
        return l.createElement(Q, { name: t, value: e ? "true" : "false", originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case Ql:
        return l.createElement(Q, { name: t, value: e.toISOString(), originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: _, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case ei:
        return l.createElement(Q, { name: t, value: "null", originalValue: "null", keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case ti:
        return l.createElement(Q, { name: t, value: "undefined", originalValue: "undefined", keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case ri:
        return l.createElement(Qr, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: u, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, textareaElementGenerator: p, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      case ni:
        return l.createElement(Q, { name: t, value: e.toString(), originalValue: e, keyPath: r, deep: n, handleRemove: i, handleUpdateValue: a, readOnly: _, dataType: T, getStyle: g, cancelButtonElement: h, editButtonElement: s, inputElementGenerator: m, minusMenuElement: b, logger: k, onSubmitValueParser: w });
      default:
        return null;
    }
  }
};
He.defaultProps = { keyPath: [], deep: 0 };
var ft = class extends v.Component {
  constructor(e) {
    super(e);
    let t = e.deep === -1 ? [] : [...e.keyPath, e.name];
    this.state = { name: e.name, data: e.data, keyPath: t, deep: e.deep, nextDeep: e.deep + 1, collapsed: e.isCollapsed(t, e.deep, e.data), addFormVisible: !1 }, this.handleCollapseMode = this.handleCollapseMode.bind(this), this.handleRemoveValue = this.handleRemoveValue.bind(this), this.handleAddMode = this.handleAddMode.bind(this), this.handleAddValueAdd = this.handleAddValueAdd.bind(this), this.handleAddValueCancel = this.handleAddValueCancel.bind(this), this.handleEditValue = this.handleEditValue.bind(this), this.onChildUpdate = this.onChildUpdate.bind(this), this.renderCollapsed = this.renderCollapsed.bind(this), this.renderNotCollapsed = this.renderNotCollapsed.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data ? { data: e.data } : null;
  }
  onChildUpdate(e, t) {
    let { data: r, keyPath: n } = this.state;
    r[e] = t, this.setState({ data: r });
    let { onUpdate: o } = this.props, i = n.length;
    o(n[i - 1], r);
  }
  handleAddMode() {
    this.setState({ addFormVisible: !0 });
  }
  handleAddValueCancel() {
    this.setState({ addFormVisible: !1 });
  }
  handleAddValueAdd({ key: e, newValue: t }) {
    let { data: r, keyPath: n, nextDeep: o } = this.state, { beforeAddAction: i, logger: a } = this.props;
    i(e, n, o, t).then(() => {
      r[e] = t, this.setState({ data: r }), this.handleAddValueCancel();
      let { onUpdate: d, onDeltaUpdate: c } = this.props;
      d(n[n.length - 1], r), c({ type: Kr, keyPath: n, deep: o, key: e, newValue: t });
    }).catch(a.error);
  }
  handleRemoveValue(e) {
    return () => {
      let { beforeRemoveAction: t, logger: r } = this.props, { data: n, keyPath: o, nextDeep: i } = this.state, a = n[e];
      t(e, o, i, a).then(() => {
        let d = { keyPath: o, deep: i, key: e, oldValue: a, type: Yr };
        delete n[e], this.setState({ data: n });
        let { onUpdate: c, onDeltaUpdate: u } = this.props;
        c(o[o.length - 1], n), u(d);
      }).catch(r.error);
    };
  }
  handleCollapseMode() {
    this.setState((e) => ({ collapsed: !e.collapsed }));
  }
  handleEditValue({ key: e, value: t }) {
    return new Promise((r, n) => {
      let { beforeUpdateAction: o } = this.props, { data: i, keyPath: a, nextDeep: d } = this.state, c = i[e];
      o(e, a, d, c, t).then(() => {
        i[e] = t, this.setState({ data: i });
        let { onUpdate: u, onDeltaUpdate: g } = this.props;
        u(a[a.length - 1], i), g({ type: Jr, keyPath: a, deep: d, key: e, newValue: t, oldValue: c }), r();
      }).catch(n);
    });
  }
  renderCollapsed() {
    let { name: e, keyPath: t, deep: r, data: n } = this.state, { handleRemove: o, readOnly: i, dataType: a, getStyle: d, minusMenuElement: c } = this.props, { minus: u, collapsed: g } = d(e, n, t, r, a), f = Object.getOwnPropertyNames(n), h = i(e, n, t, r, a), s = v.cloneElement(c, { onClick: o, className: "rejt-minus-menu", style: u });
    return l.createElement("span", { className: "rejt-collapsed" }, l.createElement("span", { className: "rejt-collapsed-text", style: g, onClick: this.handleCollapseMode }, "{...}", " ", f.length, " ", f.length === 1 ? "key" : "keys"), !h && s);
  }
  renderNotCollapsed() {
    let { name: e, data: t, keyPath: r, deep: n, nextDeep: o, addFormVisible: i } = this.state, { isCollapsed: a, handleRemove: d, onDeltaUpdate: c, readOnly: u, getStyle: g, dataType: f, addButtonElement: h, cancelButtonElement: s, editButtonElement: m, inputElementGenerator: p, textareaElementGenerator: b, minusMenuElement: E, plusMenuElement: x, beforeRemoveAction: C, beforeAddAction: y, beforeUpdateAction: k, logger: w, onSubmitValueParser: _ } = this.props, { minus: T, plus: O, addForm: F, ul: z, delimiter: I } = g(e, t, r, n, f), P = Object.getOwnPropertyNames(t), A = u(e, t, r, n, f), j = v.cloneElement(x, { onClick: this.handleAddMode, className: "rejt-plus-menu", style: O }), $ = v.cloneElement(E, { onClick: d, className: "rejt-minus-menu", style: T }), U = P.map((N) => l.createElement(He, { key: N, name: N, data: t[N], keyPath: r, deep: o, isCollapsed: a, handleRemove: this.handleRemoveValue(N), handleUpdateValue: this.handleEditValue, onUpdate: this.onChildUpdate, onDeltaUpdate: c, readOnly: u, getStyle: g, addButtonElement: h, cancelButtonElement: s, editButtonElement: m, inputElementGenerator: p, textareaElementGenerator: b, minusMenuElement: E, plusMenuElement: x, beforeRemoveAction: C, beforeAddAction: y, beforeUpdateAction: k, logger: w, onSubmitValueParser: _ }));
    return l.createElement("span", { className: "rejt-not-collapsed" }, l.createElement("span", { className: "rejt-not-collapsed-delimiter", style: I }, "{"), !A && j, l.createElement("ul", { className: "rejt-not-collapsed-list", style: z }, U), !A && i && l.createElement("div", { className: "rejt-add-form", style: F }, l.createElement(wt, { handleAdd: this.handleAddValueAdd, handleCancel: this.handleAddValueCancel, addButtonElement: h, cancelButtonElement: s, inputElementGenerator: p, keyPath: r, deep: n, onSubmitValueParser: _ })), l.createElement("span", { className: "rejt-not-collapsed-delimiter", style: I }, "}"), !A && $);
  }
  render() {
    let { name: e, collapsed: t, data: r, keyPath: n, deep: o } = this.state, { getStyle: i, dataType: a } = this.props, d = t ? this.renderCollapsed() : this.renderNotCollapsed(), c = i(e, r, n, o, a);
    return l.createElement("div", { className: "rejt-object-node" }, l.createElement("span", { onClick: this.handleCollapseMode }, l.createElement("span", { className: "rejt-name", style: c.name }, e, " :", " ")), d);
  }
};
ft.defaultProps = { keyPath: [], deep: 0, minusMenuElement: l.createElement("span", null, " - "), plusMenuElement: l.createElement("span", null, " + ") };
var Q = class extends v.Component {
  constructor(e) {
    super(e);
    let t = [...e.keyPath, e.name];
    this.state = { value: e.value, name: e.name, keyPath: t, deep: e.deep, editEnabled: !1, inputRef: null }, this.handleEditMode = this.handleEditMode.bind(this), this.refInput = this.refInput.bind(this), this.handleCancelEdit = this.handleCancelEdit.bind(this), this.handleEdit = this.handleEdit.bind(this), this.onKeydown = this.onKeydown.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.value !== t.value ? { value: e.value } : null;
  }
  componentDidUpdate() {
    let { editEnabled: e, inputRef: t, name: r, value: n, keyPath: o, deep: i } = this.state, { readOnly: a, dataType: d } = this.props, c = a(r, n, o, i, d);
    e && !c && typeof t.focus == "function" && t.focus();
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onKeydown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onKeydown);
  }
  onKeydown(e) {
    e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || e.repeat || ((e.code === "Enter" || e.key === "Enter") && (e.preventDefault(), this.handleEdit()), (e.code === "Escape" || e.key === "Escape") && (e.preventDefault(), this.handleCancelEdit()));
  }
  handleEdit() {
    let { handleUpdateValue: e, originalValue: t, logger: r, onSubmitValueParser: n, keyPath: o } = this.props, { inputRef: i, name: a, deep: d } = this.state;
    if (!i) return;
    let c = n(!0, o, d, a, i.value);
    e({ value: c, key: a }).then(() => {
      Zr(t, c) || this.handleCancelEdit();
    }).catch(r.error);
  }
  handleEditMode() {
    this.setState({ editEnabled: !0 });
  }
  refInput(e) {
    this.state.inputRef = e;
  }
  handleCancelEdit() {
    this.setState({ editEnabled: !1 });
  }
  render() {
    let { name: e, value: t, editEnabled: r, keyPath: n, deep: o } = this.state, { handleRemove: i, originalValue: a, readOnly: d, dataType: c, getStyle: u, editButtonElement: g, cancelButtonElement: f, inputElementGenerator: h, minusMenuElement: s, keyPath: m } = this.props, p = u(e, a, n, o, c), b = d(e, a, n, o, c), E = r && !b, x = h(kt, m, o, e, a, c), C = v.cloneElement(g, { onClick: this.handleEdit }), y = v.cloneElement(f, { onClick: this.handleCancelEdit }), k = v.cloneElement(x, { ref: this.refInput, defaultValue: JSON.stringify(a) }), w = v.cloneElement(s, { onClick: i, className: "rejt-minus-menu", style: p.minus });
    return l.createElement("li", { className: "rejt-value-node", style: p.li }, l.createElement("span", { className: "rejt-name", style: p.name }, e, " : "), E ? l.createElement("span", { className: "rejt-edit-form", style: p.editForm }, k, " ", y, C) : l.createElement("span", { className: "rejt-value", style: p.value, onClick: b ? null : this.handleEditMode }, String(t)), !b && !E && w);
  }
};
Q.defaultProps = { keyPath: [], deep: 0, handleUpdateValue: () => Promise.resolve(), editButtonElement: l.createElement("button", null, "e"), cancelButtonElement: l.createElement("button", null, "c"), minusMenuElement: l.createElement("span", null, " - ") };
function oi(e) {
  let t = e;
  if (t.indexOf("function") === 0) return (0, eval)(`(${t})`);
  try {
    t = JSON.parse(e);
  } catch {
  }
  return t;
}
var li = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, ii = { minus: { color: "red" }, plus: { color: "green" }, collapsed: { color: "grey" }, delimiter: {}, ul: { padding: "0px", margin: "0 0 0 25px", listStyle: "none" }, name: { color: "#2287CD" }, addForm: {} }, si = { minus: { color: "red" }, editForm: {}, value: { color: "#7bba3d" }, li: { minHeight: "22px", lineHeight: "22px", outline: "0px" }, name: { color: "#2287CD" } }, en = class extends v.Component {
  constructor(e) {
    super(e), this.state = { data: e.data, rootName: e.rootName }, this.onUpdate = this.onUpdate.bind(this), this.removeRoot = this.removeRoot.bind(this);
  }
  static getDerivedStateFromProps(e, t) {
    return e.data !== t.data || e.rootName !== t.rootName ? { data: e.data, rootName: e.rootName } : null;
  }
  onUpdate(e, t) {
    this.setState({ data: t }), this.props.onFullyUpdate(t);
  }
  removeRoot() {
    this.onUpdate(null, null);
  }
  render() {
    let { data: e, rootName: t } = this.state, { isCollapsed: r, onDeltaUpdate: n, readOnly: o, getStyle: i, addButtonElement: a, cancelButtonElement: d, editButtonElement: c, inputElement: u, textareaElement: g, minusMenuElement: f, plusMenuElement: h, beforeRemoveAction: s, beforeAddAction: m, beforeUpdateAction: p, logger: b, onSubmitValueParser: E, fallback: x = null } = this.props, C = ne(e), y = o;
    ne(o) === "Boolean" && (y = () => o);
    let k = u;
    u && ne(u) !== "Function" && (k = () => u);
    let w = g;
    return g && ne(g) !== "Function" && (w = () => g), C === "Object" || C === "Array" ? l.createElement("div", { className: "rejt-tree" }, l.createElement(He, { data: e, name: t, deep: -1, isCollapsed: r, onUpdate: this.onUpdate, onDeltaUpdate: n, readOnly: y, getStyle: i, addButtonElement: a, cancelButtonElement: d, editButtonElement: c, inputElementGenerator: k, textareaElementGenerator: w, minusMenuElement: f, plusMenuElement: h, handleRemove: this.removeRoot, beforeRemoveAction: s, beforeAddAction: m, beforeUpdateAction: p, logger: b, onSubmitValueParser: E })) : x;
  }
};
en.defaultProps = { rootName: "root", isCollapsed: (e, t) => t !== -1, getStyle: (e, t, r, n, o) => {
  switch (o) {
    case "Object":
    case "Error":
      return li;
    case "Array":
      return ii;
    default:
      return si;
  }
}, readOnly: () => !1, onFullyUpdate: () => {
}, onDeltaUpdate: () => {
}, beforeRemoveAction: () => Promise.resolve(), beforeAddAction: () => Promise.resolve(), beforeUpdateAction: () => Promise.resolve(), logger: { error: () => {
} }, onSubmitValueParser: (e, t, r, n, o) => oi(o), inputElement: () => l.createElement("input", null), textareaElement: () => l.createElement("textarea", null), fallback: null };
var { window: di } = globalThis, ci = S.div(({ theme: e }) => ({ position: "relative", display: "flex", '&[aria-readonly="true"]': { opacity: 0.5 }, ".rejt-tree": { marginLeft: "1rem", fontSize: "13px" }, ".rejt-value-node, .rejt-object-node > .rejt-collapsed, .rejt-array-node > .rejt-collapsed, .rejt-object-node > .rejt-not-collapsed, .rejt-array-node > .rejt-not-collapsed": { "& > svg": { opacity: 0, transition: "opacity 0.2s" } }, ".rejt-value-node:hover, .rejt-object-node:hover > .rejt-collapsed, .rejt-array-node:hover > .rejt-collapsed, .rejt-object-node:hover > .rejt-not-collapsed, .rejt-array-node:hover > .rejt-not-collapsed": { "& > svg": { opacity: 1 } }, ".rejt-edit-form button": { display: "none" }, ".rejt-add-form": { marginLeft: 10 }, ".rejt-add-value-node": { display: "inline-flex", alignItems: "center" }, ".rejt-name": { lineHeight: "22px" }, ".rejt-not-collapsed-delimiter": { lineHeight: "22px" }, ".rejt-plus-menu": { marginLeft: 5 }, ".rejt-object-node > span > *, .rejt-array-node > span > *": { position: "relative", zIndex: 2 }, ".rejt-object-node, .rejt-array-node": { position: "relative" }, ".rejt-object-node > span:first-of-type::after, .rejt-array-node > span:first-of-type::after, .rejt-collapsed::before, .rejt-not-collapsed::before": { content: '""', position: "absolute", top: 0, display: "block", width: "100%", marginLeft: "-1rem", padding: "0 4px 0 1rem", height: 22 }, ".rejt-collapsed::before, .rejt-not-collapsed::before": { zIndex: 1, background: "transparent", borderRadius: 4, transition: "background 0.2s", pointerEvents: "none", opacity: 0.1 }, ".rejt-object-node:hover, .rejt-array-node:hover": { "& > .rejt-collapsed::before, & > .rejt-not-collapsed::before": { background: e.color.secondary } }, ".rejt-collapsed::after, .rejt-not-collapsed::after": { content: '""', position: "absolute", display: "inline-block", pointerEvents: "none", width: 0, height: 0 }, ".rejt-collapsed::after": { left: -8, top: 8, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: "3px solid rgba(153,153,153,0.6)" }, ".rejt-not-collapsed::after": { left: -10, top: 10, borderTop: "3px solid rgba(153,153,153,0.6)", borderLeft: "3px solid transparent", borderRight: "3px solid transparent" }, ".rejt-value": { display: "inline-block", border: "1px solid transparent", borderRadius: 4, margin: "1px 0", padding: "0 4px", cursor: "text", color: e.color.defaultText }, ".rejt-value-node:hover > .rejt-value": { background: e.color.lighter, borderColor: e.appBorderColor } })), tt = S.button(({ theme: e, primary: t }) => ({ border: 0, height: 20, margin: 1, borderRadius: 4, background: t ? e.color.secondary : "transparent", color: t ? e.color.lightest : e.color.dark, fontWeight: t ? "bold" : "normal", cursor: "pointer", order: t ? "initial" : 9 })), ui = S(zn)(({ theme: e, disabled: t }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: t ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": t ? {} : { color: e.color.ancillary }, "svg + &": { marginLeft: 0 } })), pi = S(Un)(({ theme: e, disabled: t }) => ({ display: "inline-block", verticalAlign: "middle", width: 15, height: 15, padding: 3, marginLeft: 5, cursor: t ? "not-allowed" : "pointer", color: e.textMutedColor, "&:hover": t ? {} : { color: e.color.negative }, "svg + &": { marginLeft: 0 } })), Qt = S.input(({ theme: e, placeholder: t }) => ({ outline: 0, margin: t ? 1 : "1px 0", padding: "3px 4px", color: e.color.defaultText, background: e.background.app, border: `1px solid ${e.appBorderColor}`, borderRadius: 4, lineHeight: "14px", width: t === "Key" ? 80 : 120, "&:focus": { border: `1px solid ${e.color.secondary}` } })), mi = S(he)(({ theme: e }) => ({ position: "absolute", zIndex: 2, top: 2, right: 2, height: 21, padding: "0 3px", background: e.background.bar, border: `1px solid ${e.appBorderColor}`, borderRadius: 3, color: e.textMutedColor, fontSize: "9px", fontWeight: "bold", textDecoration: "none", span: { marginLeft: 3, marginTop: 1 } })), fi = S(ve.Textarea)(({ theme: e }) => ({ flex: 1, padding: "7px 6px", fontFamily: e.typography.fonts.mono, fontSize: "12px", lineHeight: "18px", "&::placeholder": { fontFamily: e.typography.fonts.base, fontSize: "13px" }, "&:placeholder-shown": { padding: "7px 10px" } })), gi = { bubbles: !0, cancelable: !0, key: "Enter", code: "Enter", keyCode: 13 }, hi = (e) => {
  e.currentTarget.dispatchEvent(new di.KeyboardEvent("keydown", gi));
}, yi = (e) => {
  e.currentTarget.select();
}, bi = (e) => () => ({ name: { color: e.color.secondary }, collapsed: { color: e.color.dark }, ul: { listStyle: "none", margin: "0 0 0 1rem", padding: 0 }, li: { outline: 0 } }), er = ({ name: e, value: t, onChange: r, argType: n }) => {
  let o = ur(), i = v.useMemo(() => t && vn(t), [t]), a = i != null, [d, c] = v.useState(!a), [u, g] = v.useState(null), f = !!n?.table?.readonly, h = v.useCallback((C) => {
    try {
      C && r(JSON.parse(C)), g(void 0);
    } catch (y) {
      g(y);
    }
  }, [r]), [s, m] = v.useState(!1), p = v.useCallback(() => {
    r({}), m(!0);
  }, [m]), b = v.useRef(null);
  if (v.useEffect(() => {
    s && b.current && b.current.select();
  }, [s]), !a) return l.createElement(Be, { disabled: f, id: Fe(e), onClick: p }, "Set object");
  let E = l.createElement(fi, { ref: b, id: V(e), name: e, defaultValue: t === null ? "" : JSON.stringify(t, null, 2), onBlur: (C) => h(C.target.value), placeholder: "Edit JSON string...", autoFocus: s, valid: u ? "error" : null, readOnly: f }), x = Array.isArray(t) || typeof t == "object" && t?.constructor === Object;
  return l.createElement(ci, { "aria-readonly": f }, x && l.createElement(mi, { onClick: (C) => {
    C.preventDefault(), c((y) => !y);
  } }, d ? l.createElement(Xn, null) : l.createElement(Qn, null), l.createElement("span", null, "RAW")), d ? E : l.createElement(en, { readOnly: f || !x, isCollapsed: x ? void 0 : () => !0, data: i, rootName: e, onFullyUpdate: r, getStyle: bi(o), cancelButtonElement: l.createElement(tt, { type: "button" }, "Cancel"), editButtonElement: l.createElement(tt, { type: "submit" }, "Save"), addButtonElement: l.createElement(tt, { type: "submit", primary: !0 }, "Save"), plusMenuElement: l.createElement(ui, null), minusMenuElement: l.createElement(pi, null), inputElement: (C, y, k, w) => w ? l.createElement(Qt, { onFocus: yi, onBlur: hi }) : l.createElement(Qt, null), fallback: E }));
}, Ei = S.input(({ theme: e, min: t, max: r, value: n, disabled: o }) => ({ "&": { width: "100%", backgroundColor: "transparent", appearance: "none" }, "&::-webkit-slider-runnable-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: o ? "not-allowed" : "pointer" }, "&::-webkit-slider-thumb": { marginTop: "-6px", width: 16, height: 16, border: `1px solid ${J(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${J(e.appBorderColor, 0.2)}`, cursor: o ? "not-allowed" : "grab", appearance: "none", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${W(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: o ? "not-allowed" : "grab" } }, "&:focus": { outline: "none", "&::-webkit-slider-runnable-track": { borderColor: J(e.color.secondary, 0.4) }, "&::-webkit-slider-thumb": { borderColor: e.color.secondary, boxShadow: `0 0px 5px 0px ${e.color.secondary}` } }, "&::-moz-range-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, borderRadius: 6, width: "100%", height: 6, cursor: o ? "not-allowed" : "pointer", outline: "none" }, "&::-moz-range-thumb": { width: 16, height: 16, border: `1px solid ${J(e.appBorderColor, 0.2)}`, borderRadius: "50px", boxShadow: `0 1px 3px 0px ${J(e.appBorderColor, 0.2)}`, cursor: o ? "not-allowed" : "grap", background: `${e.input.background}`, transition: "all 150ms ease-out", "&:hover": { background: `${W(0.05, e.input.background)}`, transform: "scale3d(1.1, 1.1, 1.1) translateY(-1px)", transition: "all 50ms ease-out" }, "&:active": { background: `${e.input.background}`, transform: "scale3d(1, 1, 1) translateY(0px)", cursor: "grabbing" } }, "&::-ms-track": { background: e.base === "light" ? `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${W(0.02, e.input.background)} 100%)` : `linear-gradient(to right, 
            ${e.color.green} 0%, ${e.color.green} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} ${(n - t) / (r - t) * 100}%, 
            ${te(0.02, e.input.background)} 100%)`, boxShadow: `${e.appBorderColor} 0 0 0 1px inset`, color: "transparent", width: "100%", height: "6px", cursor: "pointer" }, "&::-ms-fill-lower": { borderRadius: 6 }, "&::-ms-fill-upper": { borderRadius: 6 }, "&::-ms-thumb": { width: 16, height: 16, background: `${e.input.background}`, border: `1px solid ${J(e.appBorderColor, 0.2)}`, borderRadius: 50, cursor: "grab", marginTop: 0 }, "@supports (-ms-ime-align:auto)": { "input[type=range]": { margin: "0" } } })), tn = S.span({ paddingLeft: 5, paddingRight: 5, fontSize: 12, whiteSpace: "nowrap", fontFeatureSettings: "tnum", fontVariantNumeric: "tabular-nums", "[aria-readonly=true] &": { opacity: 0.5 } }), xi = S(tn)(({ numberOFDecimalsPlaces: e, max: t }) => ({ width: `${e + t.toString().length * 2 + 3}ch`, textAlign: "right", flexShrink: 0 })), vi = S.div({ display: "flex", alignItems: "center", width: "100%" });
function Si(e) {
  let t = e.toString().match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
  return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0;
}
var Ci = ({ name: e, value: t, onChange: r, min: n = 0, max: o = 100, step: i = 1, onBlur: a, onFocus: d, argType: c }) => {
  let u = (s) => {
    r(Pl(s.target.value));
  }, g = t !== void 0, f = v.useMemo(() => Si(i), [i]), h = !!c?.table?.readonly;
  return l.createElement(vi, { "aria-readonly": h }, l.createElement(tn, null, n), l.createElement(Ei, { id: V(e), type: "range", disabled: h, onChange: u, name: e, value: t, min: n, max: o, step: i, onFocus: d, onBlur: a }), l.createElement(xi, { numberOFDecimalsPlaces: f, max: o }, g ? t.toFixed(f) : "--", " / ", o));
}, ki = S.label({ display: "flex" }), wi = S.div(({ isMaxed: e }) => ({ marginLeft: "0.75rem", paddingTop: "0.35rem", color: e ? "red" : void 0 })), _i = ({ name: e, value: t, onChange: r, onFocus: n, onBlur: o, maxLength: i, argType: a }) => {
  let d = (s) => {
    r(s.target.value);
  }, c = !!a?.table?.readonly, [u, g] = v.useState(!1), f = v.useCallback(() => {
    r(""), g(!0);
  }, [g]);
  if (t === void 0) return l.createElement(Be, { variant: "outline", size: "medium", disabled: c, id: Fe(e), onClick: f }, "Set string");
  let h = typeof t == "string";
  return l.createElement(ki, null, l.createElement(ve.Textarea, { id: V(e), maxLength: i, onChange: d, disabled: c, size: "flex", placeholder: "Edit string...", autoFocus: u, valid: h ? null : "error", name: e, value: h ? t : "", onFocus: n, onBlur: o }), i && l.createElement(wi, { isMaxed: t?.length === i }, t?.length ?? 0, " / ", i));
}, Ti = S(ve.Input)({ padding: 10 });
function Ai(e) {
  e.forEach((t) => {
    t.startsWith("blob:") && URL.revokeObjectURL(t);
  });
}
var Oi = ({ onChange: e, name: t, accept: r = "image/*", value: n, argType: o }) => {
  let i = v.useRef(null), a = o?.control?.readOnly;
  function d(c) {
    if (!c.target.files) return;
    let u = Array.from(c.target.files).map((g) => URL.createObjectURL(g));
    e(u), Ai(n);
  }
  return v.useEffect(() => {
    n == null && i.current && (i.current.value = null);
  }, [n, t]), l.createElement(Ti, { ref: i, id: V(t), type: "file", name: t, multiple: !0, disabled: a, onChange: d, accept: r, size: "flex" });
}, Ii = v.lazy(() => import("./Color-F6OSRLHC.js")), Ri = (e) => l.createElement(v.Suspense, { fallback: l.createElement("div", null) }, l.createElement(Ii, { ...e })), ji = { array: er, object: er, boolean: wl, color: Ri, date: Rl, number: $l, check: ie, "inline-check": ie, radio: ie, "inline-radio": ie, select: ie, "multi-select": ie, range: Ci, text: _i, file: Oi }, tr = () => l.createElement(l.Fragment, null, "-"), Pi = ({ row: e, arg: t, updateArgs: r, isHovered: n }) => {
  let { key: o, control: i } = e, [a, d] = v.useState(!1), [c, u] = v.useState({ value: t });
  v.useEffect(() => {
    a || u({ value: t });
  }, [a, t]);
  let g = v.useCallback((p) => (u({ value: p }), r({ [o]: p }), p), [r, o]), f = v.useCallback(() => d(!1), []), h = v.useCallback(() => d(!0), []);
  if (!i || i.disable) {
    let p = i?.disable !== !0 && e?.type?.name !== "function";
    return n && p ? l.createElement(ye, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: !0 }, "Setup controls") : l.createElement(tr, null);
  }
  let s = { name: o, argType: e, value: c.value, onChange: g, onBlur: f, onFocus: h }, m = ji[i.type] || tr;
  return l.createElement(m, { ...s, ...i, controlType: i.type });
}, Fi = S.table(({ theme: e }) => ({ "&&": { borderCollapse: "collapse", borderSpacing: 0, border: "none", tr: { border: "none !important", background: "none" }, "td, th": { padding: 0, border: "none", width: "auto!important" }, marginTop: 0, marginBottom: 0, "th:first-of-type, td:first-of-type": { paddingLeft: 0 }, "th:last-of-type, td:last-of-type": { paddingRight: 0 }, td: { paddingTop: 0, paddingBottom: 4, "&:not(:first-of-type)": { paddingLeft: 10, paddingRight: 0 } }, tbody: { boxShadow: "none", border: "none" }, code: Ne({ theme: e }), div: { span: { fontWeight: "bold" } }, "& code": { margin: 0, display: "inline-block", fontSize: e.typography.size.s1 } } })), $i = ({ tags: e }) => {
  let t = (e.params || []).filter((i) => i.description), r = t.length !== 0, n = e.deprecated != null, o = e.returns != null && e.returns.description != null;
  return !r && !o && !n ? null : l.createElement(l.Fragment, null, l.createElement(Fi, null, l.createElement("tbody", null, n && l.createElement("tr", { key: "deprecated" }, l.createElement("td", { colSpan: 2 }, l.createElement("strong", null, "Deprecated"), ": ", e.deprecated.toString())), r && t.map((i) => l.createElement("tr", { key: i.name }, l.createElement("td", null, l.createElement("code", null, i.name)), l.createElement("td", null, i.description))), o && l.createElement("tr", { key: "returns" }, l.createElement("td", null, l.createElement("code", null, "Returns")), l.createElement("td", null, e.returns.description)))));
}, Ni = Et(fr()), gt = 8, rr = S.div(({ isExpanded: e }) => ({ display: "flex", flexDirection: e ? "column" : "row", flexWrap: "wrap", alignItems: "flex-start", marginBottom: "-4px", minWidth: 100 })), Bi = S.span(Ne, ({ theme: e, simple: t = !1 }) => ({ flex: "0 0 auto", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, wordBreak: "break-word", whiteSpace: "normal", maxWidth: "100%", margin: 0, marginRight: "4px", marginBottom: "4px", paddingTop: "2px", paddingBottom: "2px", lineHeight: "13px", ...t && { background: "transparent", border: "0 none", paddingLeft: 0 } })), Di = S.button(({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, marginBottom: "4px", background: "none", border: "none" })), Li = S.div(Ne, ({ theme: e }) => ({ fontFamily: e.typography.fonts.mono, color: e.color.secondary, fontSize: e.typography.size.s1, margin: 0, whiteSpace: "nowrap", display: "flex", alignItems: "center" })), Mi = S.div(({ theme: e, width: t }) => ({ width: t, minWidth: 200, maxWidth: 800, padding: 15, fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, boxSizing: "content-box", "& code": { padding: "0 !important" } })), zi = S(Hn)({ marginLeft: 4 }), Ui = S(mr)({ marginLeft: 4 }), Hi = () => l.createElement("span", null, "-"), rn = ({ text: e, simple: t }) => l.createElement(Bi, { simple: t }, e), Vi = (0, Ni.default)(1e3)((e) => {
  let t = e.split(/\r?\n/);
  return `${Math.max(...t.map((r) => r.length))}ch`;
}), Wi = (e) => {
  if (!e) return [e];
  let t = e.split("|").map((r) => r.trim());
  return Sn(t);
}, nr = (e, t = !0) => {
  let r = e;
  return t || (r = e.slice(0, gt)), r.map((n) => l.createElement(rn, { key: n, text: n === "" ? '""' : n }));
}, qi = ({ value: e, initialExpandedArgs: t }) => {
  let { summary: r, detail: n } = e, [o, i] = v.useState(!1), [a, d] = v.useState(t || !1);
  if (r == null) return null;
  let c = typeof r.toString == "function" ? r.toString() : r;
  if (n == null) {
    if (/[(){}[\]<>]/.test(c)) return l.createElement(rn, { text: c });
    let u = Wi(c), g = u.length;
    return g > gt ? l.createElement(rr, { isExpanded: a }, nr(u, a), l.createElement(Di, { onClick: () => d(!a) }, a ? "Show less..." : `Show ${g - gt} more...`)) : l.createElement(rr, null, nr(u));
  }
  return l.createElement($n, { closeOnOutsideClick: !0, placement: "bottom", visible: o, onVisibleChange: (u) => {
    i(u);
  }, tooltip: l.createElement(Mi, { width: Vi(n) }, l.createElement(cr, { language: "jsx", format: !1 }, n)) }, l.createElement(Li, { className: "sbdocs-expandable" }, l.createElement("span", null, c), o ? l.createElement(zi, null) : l.createElement(Ui, null)));
}, rt = ({ value: e, initialExpandedArgs: t }) => e == null ? l.createElement(Hi, null) : l.createElement(qi, { value: e, initialExpandedArgs: t }), Gi = S.span({ fontWeight: "bold" }), Ki = S.span(({ theme: e }) => ({ color: e.color.negative, fontFamily: e.typography.fonts.mono, cursor: "help" })), Yi = S.div(({ theme: e }) => ({ "&&": { p: { margin: "0 0 10px 0" }, a: { color: e.color.secondary } }, code: { ...Ne({ theme: e }), fontSize: 12, fontFamily: e.typography.fonts.mono }, "& code": { margin: 0, display: "inline-block" }, "& pre > code": { whiteSpace: "pre-wrap" } })), Ji = S.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? R(0.1, e.color.defaultText) : R(0.2, e.color.defaultText), marginTop: t ? 4 : 0 })), Zi = S.div(({ theme: e, hasDescription: t }) => ({ color: e.base === "light" ? R(0.1, e.color.defaultText) : R(0.2, e.color.defaultText), marginTop: t ? 12 : 0, marginBottom: 12 })), Xi = S.td(({ theme: e, expandable: t }) => ({ paddingLeft: t ? "40px !important" : "20px !important" })), Qi = (e) => e && { summary: typeof e == "string" ? e : e.name }, Ie = (e) => {
  let [t, r] = v.useState(!1), { row: n, updateArgs: o, compact: i, expandable: a, initialExpandedArgs: d } = e, { name: c, description: u } = n, g = n.table || {}, f = g.type || Qi(n.type), h = g.defaultValue || n.defaultValue, s = n.type?.required, m = u != null && u !== "";
  return l.createElement("tr", { onMouseEnter: () => r(!0), onMouseLeave: () => r(!1) }, l.createElement(Xi, { expandable: a }, l.createElement(Gi, null, c), s ? l.createElement(Ki, { title: "Required" }, "*") : null), i ? null : l.createElement("td", null, m && l.createElement(Yi, null, l.createElement(Hr, null, u)), g.jsDocTags != null ? l.createElement(l.Fragment, null, l.createElement(Zi, { hasDescription: m }, l.createElement(rt, { value: f, initialExpandedArgs: d })), l.createElement($i, { tags: g.jsDocTags })) : l.createElement(Ji, { hasDescription: m }, l.createElement(rt, { value: f, initialExpandedArgs: d }))), i ? null : l.createElement("td", null, l.createElement(rt, { value: h, initialExpandedArgs: d })), o ? l.createElement("td", null, l.createElement(Pi, { ...e, isHovered: t })) : null);
}, es = S.div(({ inAddonPanel: e, theme: t }) => ({ height: e ? "100%" : "auto", display: "flex", border: e ? "none" : `1px solid ${t.appBorderColor}`, borderRadius: e ? 0 : t.appBorderRadius, padding: e ? 0 : 40, alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 15, background: t.background.content, boxShadow: "rgba(0, 0, 0, 0.10) 0 1px 3px 0" })), ts = S.div(({ theme: e }) => ({ display: "flex", fontSize: e.typography.size.s2 - 1, gap: 25 })), rs = S.div(({ theme: e }) => ({ width: 1, height: 16, backgroundColor: e.appBorderColor })), ns = ({ inAddonPanel: e }) => {
  let [t, r] = v.useState(!0);
  return v.useEffect(() => {
    let n = setTimeout(() => {
      r(!1);
    }, 100);
    return () => clearTimeout(n);
  }, []), t ? null : l.createElement(es, { inAddonPanel: e }, l.createElement(jn, { title: e ? "Interactive story playground" : "Args table with interactive controls couldn't be auto-generated", description: l.createElement(l.Fragment, null, "Controls give you an easy to use interface to test your components. Set your story args and you'll see controls appearing here automatically."), footer: l.createElement(ts, null, e && l.createElement(l.Fragment, null, l.createElement(ye, { href: "https://youtu.be/0gOfS6K0x0E", target: "_blank", withArrow: !0 }, l.createElement(Zn, null), " Watch 5m video"), l.createElement(rs, null), l.createElement(ye, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: !0 }, l.createElement(ot, null), " Read docs")), !e && l.createElement(ye, { href: "https://storybook.js.org/docs/essentials/controls", target: "_blank", withArrow: !0 }, l.createElement(ot, null), " Learn how to set that up")) }));
}, as = S(Vn)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? R(0.25, e.color.defaultText) : R(0.3, e.color.defaultText), border: "none", display: "inline-block" })), os = S(Wn)(({ theme: e }) => ({ marginRight: 8, marginLeft: -10, marginTop: -2, height: 12, width: 12, color: e.base === "light" ? R(0.25, e.color.defaultText) : R(0.3, e.color.defaultText), border: "none", display: "inline-block" })), ls = S.span(({ theme: e }) => ({ display: "flex", lineHeight: "20px", alignItems: "center" })), is = S.td(({ theme: e }) => ({ position: "relative", letterSpacing: "0.35em", textTransform: "uppercase", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s1 - 1, color: e.base === "light" ? R(0.4, e.color.defaultText) : R(0.6, e.color.defaultText), background: `${e.background.app} !important`, "& ~ td": { background: `${e.background.app} !important` } })), ss = S.td(({ theme: e }) => ({ position: "relative", fontWeight: e.typography.weight.bold, fontSize: e.typography.size.s2 - 1, background: e.background.app })), ds = S.td(() => ({ position: "relative" })), cs = S.tr(({ theme: e }) => ({ "&:hover > td": { backgroundColor: `${te(5e-3, e.background.app)} !important`, boxShadow: `${e.color.mediumlight} 0 - 1px 0 0 inset`, cursor: "row-resize" } })), ar = S.button(() => ({ background: "none", border: "none", padding: "0", font: "inherit", position: "absolute", top: 0, bottom: 0, left: 0, right: 0, height: "100%", width: "100%", color: "transparent", cursor: "row-resize !important" })), nt = ({ level: e = "section", label: t, children: r, initialExpanded: n = !0, colSpan: o = 3 }) => {
  let [i, a] = v.useState(n), d = e === "subsection" ? ss : is, c = r?.length || 0, u = e === "subsection" ? `${c} item${c !== 1 ? "s" : ""}` : "", g = `${i ? "Hide" : "Show"} ${e === "subsection" ? c : t} item${c !== 1 ? "s" : ""}`;
  return l.createElement(l.Fragment, null, l.createElement(cs, { title: g }, l.createElement(d, { colSpan: 1 }, l.createElement(ar, { onClick: (f) => a(!i), tabIndex: 0 }, g), l.createElement(ls, null, i ? l.createElement(as, null) : l.createElement(os, null), t)), l.createElement(ds, { colSpan: o - 1 }, l.createElement(ar, { onClick: (f) => a(!i), tabIndex: -1, style: { outline: "none" } }, g), i ? null : u)), i ? r : null);
}, Re = S.div(({ theme: e }) => ({ display: "flex", gap: 16, borderBottom: `1px solid ${e.appBorderColor}`, "&:last-child": { borderBottom: 0 } })), L = S.div(({ numColumn: e }) => ({ display: "flex", flexDirection: "column", flex: e || 1, gap: 5, padding: "12px 20px" })), D = S.div(({ theme: e, width: t, height: r }) => ({ animation: `${e.animation.glow} 1.5s ease-in-out infinite`, background: e.appBorderColor, width: t || "100%", height: r || 16, borderRadius: 3 })), M = [2, 4, 2, 2], us = () => l.createElement(l.Fragment, null, l.createElement(Re, null, l.createElement(L, { numColumn: M[0] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[1] }, l.createElement(D, { width: "30%" })), l.createElement(L, { numColumn: M[2] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[3] }, l.createElement(D, { width: "60%" }))), l.createElement(Re, null, l.createElement(L, { numColumn: M[0] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[1] }, l.createElement(D, { width: "80%" }), l.createElement(D, { width: "30%" })), l.createElement(L, { numColumn: M[2] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[3] }, l.createElement(D, { width: "60%" }))), l.createElement(Re, null, l.createElement(L, { numColumn: M[0] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[1] }, l.createElement(D, { width: "80%" }), l.createElement(D, { width: "30%" })), l.createElement(L, { numColumn: M[2] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[3] }, l.createElement(D, { width: "60%" }))), l.createElement(Re, null, l.createElement(L, { numColumn: M[0] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[1] }, l.createElement(D, { width: "80%" }), l.createElement(D, { width: "30%" })), l.createElement(L, { numColumn: M[2] }, l.createElement(D, { width: "60%" })), l.createElement(L, { numColumn: M[3] }, l.createElement(D, { width: "60%" })))), ps = S.table(({ theme: e, compact: t, inAddonPanel: r }) => ({ "&&": { borderSpacing: 0, color: e.color.defaultText, "td, th": { padding: 0, border: "none", verticalAlign: "top", textOverflow: "ellipsis" }, fontSize: e.typography.size.s2 - 1, lineHeight: "20px", textAlign: "left", width: "100%", marginTop: r ? 0 : 25, marginBottom: r ? 0 : 40, "thead th:first-of-type, td:first-of-type": { width: "25%" }, "th:first-of-type, td:first-of-type": { paddingLeft: 20 }, "th:nth-of-type(2), td:nth-of-type(2)": { ...t ? null : { width: "35%" } }, "td:nth-of-type(3)": { ...t ? null : { width: "15%" } }, "th:last-of-type, td:last-of-type": { paddingRight: 20, ...t ? null : { width: "25%" } }, th: { color: e.base === "light" ? R(0.25, e.color.defaultText) : R(0.45, e.color.defaultText), paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15 }, td: { paddingTop: "10px", paddingBottom: "10px", "&:not(:first-of-type)": { paddingLeft: 15, paddingRight: 15 }, "&:last-of-type": { paddingRight: 20 } }, marginLeft: r ? 0 : 1, marginRight: r ? 0 : 1, tbody: { ...r ? null : { filter: e.base === "light" ? "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.10))" : "drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.20))" }, "> tr > *": { background: e.background.content, borderTop: `1px solid ${e.appBorderColor}` }, ...r ? null : { "> tr:first-of-type > *": { borderBlockStart: `1px solid ${e.appBorderColor}` }, "> tr:last-of-type > *": { borderBlockEnd: `1px solid ${e.appBorderColor}` }, "> tr > *:first-of-type": { borderInlineStart: `1px solid ${e.appBorderColor}` }, "> tr > *:last-of-type": { borderInlineEnd: `1px solid ${e.appBorderColor}` }, "> tr:first-of-type > td:first-of-type": { borderTopLeftRadius: e.appBorderRadius }, "> tr:first-of-type > td:last-of-type": { borderTopRightRadius: e.appBorderRadius }, "> tr:last-of-type > td:first-of-type": { borderBottomLeftRadius: e.appBorderRadius }, "> tr:last-of-type > td:last-of-type": { borderBottomRightRadius: e.appBorderRadius } } } } })), ms = S(he)(({ theme: e }) => ({ margin: "-4px -12px -4px 0" })), fs = S.span({ display: "flex", justifyContent: "space-between" }), gs = { alpha: (e, t) => e.name.localeCompare(t.name), requiredFirst: (e, t) => +!!t.type?.required - +!!e.type?.required || e.name.localeCompare(t.name), none: void 0 }, hs = (e, t) => {
  let r = { ungrouped: [], ungroupedSubsections: {}, sections: {} };
  if (!e) return r;
  Object.entries(e).forEach(([i, a]) => {
    let { category: d, subcategory: c } = a?.table || {};
    if (d) {
      let u = r.sections[d] || { ungrouped: [], subsections: {} };
      if (!c) u.ungrouped.push({ key: i, ...a });
      else {
        let g = u.subsections[c] || [];
        g.push({ key: i, ...a }), u.subsections[c] = g;
      }
      r.sections[d] = u;
    } else if (c) {
      let u = r.ungroupedSubsections[c] || [];
      u.push({ key: i, ...a }), r.ungroupedSubsections[c] = u;
    } else r.ungrouped.push({ key: i, ...a });
  });
  let n = gs[t], o = (i) => n ? Object.keys(i).reduce((a, d) => ({ ...a, [d]: i[d].sort(n) }), {}) : i;
  return { ungrouped: r.ungrouped.sort(n), ungroupedSubsections: o(r.ungroupedSubsections), sections: Object.keys(r.sections).reduce((i, a) => ({ ...i, [a]: { ungrouped: r.sections[a].ungrouped.sort(n), subsections: o(r.sections[a].subsections) } }), {}) };
}, ys = (e, t, r) => {
  try {
    return ea(e, t, r);
  } catch (n) {
    return na.warn(n.message), !1;
  }
}, ht = (e) => {
  let { updateArgs: t, resetArgs: r, compact: n, inAddonPanel: o, initialExpandedArgs: i, sort: a = "none", isLoading: d } = e;
  if ("error" in e) {
    let { error: x } = e;
    return l.createElement(Er, null, x, " ", l.createElement(ye, { href: "http://storybook.js.org/docs/", target: "_blank", withArrow: !0 }, l.createElement(ot, null), " Read the docs"));
  }
  if (d) return l.createElement(us, null);
  let { rows: c, args: u, globals: g } = "rows" in e && e, f = hs(xn(c || {}, (x) => !x?.table?.disable && ys(x, u || {}, g || {})), a), h = f.ungrouped.length === 0, s = Object.entries(f.sections).length === 0, m = Object.entries(f.ungroupedSubsections).length === 0;
  if (h && s && m) return l.createElement(ns, { inAddonPanel: o });
  let p = 1;
  t && (p += 1), n || (p += 2);
  let b = Object.keys(f.sections).length > 0, E = { updateArgs: t, compact: n, inAddonPanel: o, initialExpandedArgs: i };
  return l.createElement(In, null, l.createElement(ps, { compact: n, inAddonPanel: o, className: "docblock-argstable sb-unstyled" }, l.createElement("thead", { className: "docblock-argstable-head" }, l.createElement("tr", null, l.createElement("th", null, l.createElement("span", null, "Name")), n ? null : l.createElement("th", null, l.createElement("span", null, "Description")), n ? null : l.createElement("th", null, l.createElement("span", null, "Default")), t ? l.createElement("th", null, l.createElement(fs, null, "Control", " ", !d && r && l.createElement(ms, { onClick: () => r(), title: "Reset controls" }, l.createElement(Jn, { "aria-hidden": !0 })))) : null)), l.createElement("tbody", { className: "docblock-argstable-body" }, f.ungrouped.map((x) => l.createElement(Ie, { key: x.key, row: x, arg: u && u[x.key], ...E })), Object.entries(f.ungroupedSubsections).map(([x, C]) => l.createElement(nt, { key: x, label: x, level: "subsection", colSpan: p }, C.map((y) => l.createElement(Ie, { key: y.key, row: y, arg: u && u[y.key], expandable: b, ...E })))), Object.entries(f.sections).map(([x, C]) => l.createElement(nt, { key: x, label: x, level: "section", colSpan: p }, C.ungrouped.map((y) => l.createElement(Ie, { key: y.key, row: y, arg: u && u[y.key], ...E })), Object.entries(C.subsections).map(([y, k]) => l.createElement(nt, { key: y, label: y, level: "subsection", colSpan: p }, k.map((w) => l.createElement(Ie, { key: w.key, row: w, arg: u && u[w.key], expandable: b, ...E })))))))));
}, bs = ({ tabs: e, ...t }) => {
  let r = Object.entries(e);
  return r.length === 1 ? l.createElement(ht, { ...r[0][1], ...t }) : l.createElement(Rn, null, r.map((n, o) => {
    let [i, a] = n, d = `prop_table_div_${i}`, c = "div", u = o === 0 ? t : { sort: t.sort };
    return l.createElement(c, { key: d, id: d, title: i }, ({ active: g }) => g ? l.createElement(ht, { key: `prop_table_${i}`, ...a, ...u }) : null);
  }));
};
S.div(({ theme: e }) => ({ marginRight: 30, fontSize: `${e.typography.size.s1}px`, color: e.base === "light" ? R(0.4, e.color.defaultText) : R(0.6, e.color.defaultText) }));
S.div({ overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" });
S.div({ display: "flex", flexDirection: "row", alignItems: "baseline", "&:not(:last-child)": { marginBottom: "1rem" } });
S.div($e, ({ theme: e }) => ({ ...ze(e), margin: "25px 0 40px", padding: "30px 20px" }));
S.div(({ theme: e }) => ({ fontWeight: e.typography.weight.bold, color: e.color.defaultText }));
S.div(({ theme: e }) => ({ color: e.base === "light" ? R(0.2, e.color.defaultText) : R(0.6, e.color.defaultText) }));
S.div({ flex: "0 0 30%", lineHeight: "20px", marginTop: 5 });
S.div(({ theme: e }) => ({ flex: 1, textAlign: "center", fontFamily: e.typography.fonts.mono, fontSize: e.typography.size.s1, lineHeight: 1, overflow: "hidden", color: e.base === "light" ? R(0.4, e.color.defaultText) : R(0.6, e.color.defaultText), "> div": { display: "inline-block", overflow: "hidden", maxWidth: "100%", textOverflow: "ellipsis" }, span: { display: "block", marginTop: 2 } }));
S.div({ display: "flex", flexDirection: "row" });
S.div(({ background: e }) => ({ position: "relative", flex: 1, "&::before": { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: e, content: '""' } }));
S.div(({ theme: e }) => ({ ...ze(e), display: "flex", flexDirection: "row", height: 50, marginBottom: 5, overflow: "hidden", backgroundColor: "white", backgroundImage: "repeating-linear-gradient(-45deg, #ccc, #ccc 1px, #fff 1px, #fff 16px)", backgroundClip: "padding-box" }));
S.div({ display: "flex", flexDirection: "column", flex: 1, position: "relative", marginBottom: 30 });
S.div({ flex: 1, display: "flex", flexDirection: "row" });
S.div({ display: "flex", alignItems: "flex-start" });
S.div({ flex: "0 0 30%" });
S.div({ flex: 1 });
S.div(({ theme: e }) => ({ display: "flex", flexDirection: "row", alignItems: "center", paddingBottom: 20, fontWeight: e.typography.weight.bold, color: e.base === "light" ? R(0.4, e.color.defaultText) : R(0.6, e.color.defaultText) }));
S.div(({ theme: e }) => ({ fontSize: e.typography.size.s2, lineHeight: "20px", display: "flex", flexDirection: "column" }));
S.div(({ theme: e }) => ({ fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, color: e.color.defaultText, marginLeft: 10, lineHeight: 1.2 }));
S.div(({ theme: e }) => ({ ...ze(e), overflow: "hidden", height: 40, width: 40, display: "flex", alignItems: "center", justifyContent: "center", flex: "none", "> img, > svg": { width: 20, height: 20 } }));
S.div({ display: "inline-flex", flexDirection: "row", alignItems: "center", flex: "0 1 calc(20% - 10px)", minWidth: 120, margin: "0px 10px 30px 0" });
S.div({ display: "flex", flexFlow: "row wrap" });
var Es = (e) => `anchor--${e}`, xs = ({ storyId: e, children: t }) => l.createElement("div", { id: Es(e), className: "sb-anchor" }, t);
globalThis && globalThis.__DOCS_CONTEXT__ === void 0 && (globalThis.__DOCS_CONTEXT__ = v.createContext(null), globalThis.__DOCS_CONTEXT__.displayName = "DocsContext");
var G = globalThis ? globalThis.__DOCS_CONTEXT__ : v.createContext(null), oe = (e, t) => v.useContext(G).resolveOf(e, t), vs = (e) => e.split("-").map((t) => t.charAt(0).toUpperCase() + t.slice(1)).join(""), Ss = (e) => {
  if (e) return typeof e == "string" ? e.includes("-") ? vs(e) : e : e.__docgenInfo && e.__docgenInfo.displayName ? e.__docgenInfo.displayName : e.name;
};
function Cs(e, t = "start") {
  e.scrollIntoView({ behavior: "smooth", block: t, inline: "nearest" });
}
var ks = Object.create, nn = Object.defineProperty, ws = Object.getOwnPropertyDescriptor, an = Object.getOwnPropertyNames, _s = Object.getPrototypeOf, Ts = Object.prototype.hasOwnProperty, H = (e, t) => function() {
  return t || (0, e[an(e)[0]])((t = { exports: {} }).exports, t), t.exports;
}, As = (e, t, r, n) => {
  if (t && typeof t == "object" || typeof t == "function") for (let o of an(t)) !Ts.call(e, o) && o !== r && nn(e, o, { get: () => t[o], enumerable: !(n = ws(t, o)) || n.enumerable });
  return e;
}, _t = (e, t, r) => (r = e != null ? ks(_s(e)) : {}, As(!e || !e.__esModule ? nn(r, "default", { value: e, enumerable: !0 }) : r, e)), Os = ["bubbles", "cancelBubble", "cancelable", "composed", "currentTarget", "defaultPrevented", "eventPhase", "isTrusted", "returnValue", "srcElement", "target", "timeStamp", "type"], Is = ["detail"];
function Rs(e) {
  let t = Os.filter((r) => e[r] !== void 0).reduce((r, n) => ({ ...r, [n]: e[n] }), {});
  return e instanceof CustomEvent && Is.filter((r) => e[r] !== void 0).forEach((r) => {
    t[r] = e[r];
  }), t;
}
var js = Et(fr(), 1), on = H({ "node_modules/has-symbols/shams.js"(e, t) {
  t.exports = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
    if (typeof Symbol.iterator == "symbol") return !0;
    var r = {}, n = Symbol("test"), o = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(o) !== "[object Symbol]") return !1;
    var i = 42;
    r[n] = i;
    for (n in r) return !1;
    if (typeof Object.keys == "function" && Object.keys(r).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(r).length !== 0) return !1;
    var a = Object.getOwnPropertySymbols(r);
    if (a.length !== 1 || a[0] !== n || !Object.prototype.propertyIsEnumerable.call(r, n)) return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var d = Object.getOwnPropertyDescriptor(r, n);
      if (d.value !== i || d.enumerable !== !0) return !1;
    }
    return !0;
  };
} }), ln = H({ "node_modules/has-symbols/index.js"(e, t) {
  var r = typeof Symbol < "u" && Symbol, n = on();
  t.exports = function() {
    return typeof r != "function" || typeof Symbol != "function" || typeof r("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : n();
  };
} }), Ps = H({ "node_modules/function-bind/implementation.js"(e, t) {
  var r = "Function.prototype.bind called on incompatible ", n = Array.prototype.slice, o = Object.prototype.toString, i = "[object Function]";
  t.exports = function(a) {
    var d = this;
    if (typeof d != "function" || o.call(d) !== i) throw new TypeError(r + d);
    for (var c = n.call(arguments, 1), u, g = function() {
      if (this instanceof u) {
        var p = d.apply(this, c.concat(n.call(arguments)));
        return Object(p) === p ? p : this;
      } else return d.apply(a, c.concat(n.call(arguments)));
    }, f = Math.max(0, d.length - c.length), h = [], s = 0; s < f; s++) h.push("$" + s);
    if (u = Function("binder", "return function (" + h.join(",") + "){ return binder.apply(this,arguments); }")(g), d.prototype) {
      var m = function() {
      };
      m.prototype = d.prototype, u.prototype = new m(), m.prototype = null;
    }
    return u;
  };
} }), Tt = H({ "node_modules/function-bind/index.js"(e, t) {
  var r = Ps();
  t.exports = Function.prototype.bind || r;
} }), Fs = H({ "node_modules/has/src/index.js"(e, t) {
  var r = Tt();
  t.exports = r.call(Function.call, Object.prototype.hasOwnProperty);
} }), sn = H({ "node_modules/get-intrinsic/index.js"(e, t) {
  var r, n = SyntaxError, o = Function, i = TypeError, a = function(I) {
    try {
      return o('"use strict"; return (' + I + ").constructor;")();
    } catch {
    }
  }, d = Object.getOwnPropertyDescriptor;
  if (d) try {
    d({}, "");
  } catch {
    d = null;
  }
  var c = function() {
    throw new i();
  }, u = d ? function() {
    try {
      return arguments.callee, c;
    } catch {
      try {
        return d(arguments, "callee").get;
      } catch {
        return c;
      }
    }
  }() : c, g = ln()(), f = Object.getPrototypeOf || function(I) {
    return I.__proto__;
  }, h = {}, s = typeof Uint8Array > "u" ? r : f(Uint8Array), m = { "%AggregateError%": typeof AggregateError > "u" ? r : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? r : ArrayBuffer, "%ArrayIteratorPrototype%": g ? f([][Symbol.iterator]()) : r, "%AsyncFromSyncIteratorPrototype%": r, "%AsyncFunction%": h, "%AsyncGenerator%": h, "%AsyncGeneratorFunction%": h, "%AsyncIteratorPrototype%": h, "%Atomics%": typeof Atomics > "u" ? r : Atomics, "%BigInt%": typeof BigInt > "u" ? r : BigInt, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? r : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? r : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? r : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? r : FinalizationRegistry, "%Function%": o, "%GeneratorFunction%": h, "%Int8Array%": typeof Int8Array > "u" ? r : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? r : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? r : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": g ? f(f([][Symbol.iterator]())) : r, "%JSON%": typeof JSON == "object" ? JSON : r, "%Map%": typeof Map > "u" ? r : Map, "%MapIteratorPrototype%": typeof Map > "u" || !g ? r : f((/* @__PURE__ */ new Map())[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? r : Promise, "%Proxy%": typeof Proxy > "u" ? r : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? r : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? r : Set, "%SetIteratorPrototype%": typeof Set > "u" || !g ? r : f((/* @__PURE__ */ new Set())[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? r : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": g ? f(""[Symbol.iterator]()) : r, "%Symbol%": g ? Symbol : r, "%SyntaxError%": n, "%ThrowTypeError%": u, "%TypedArray%": s, "%TypeError%": i, "%Uint8Array%": typeof Uint8Array > "u" ? r : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? r : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? r : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? r : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? r : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? r : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? r : WeakSet }, p = function I(P) {
    var A;
    if (P === "%AsyncFunction%") A = a("async function () {}");
    else if (P === "%GeneratorFunction%") A = a("function* () {}");
    else if (P === "%AsyncGeneratorFunction%") A = a("async function* () {}");
    else if (P === "%AsyncGenerator%") {
      var j = I("%AsyncGeneratorFunction%");
      j && (A = j.prototype);
    } else if (P === "%AsyncIteratorPrototype%") {
      var $ = I("%AsyncGenerator%");
      $ && (A = f($.prototype));
    }
    return m[P] = A, A;
  }, b = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, E = Tt(), x = Fs(), C = E.call(Function.call, Array.prototype.concat), y = E.call(Function.apply, Array.prototype.splice), k = E.call(Function.call, String.prototype.replace), w = E.call(Function.call, String.prototype.slice), _ = E.call(Function.call, RegExp.prototype.exec), T = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, O = /\\(\\)?/g, F = function(I) {
    var P = w(I, 0, 1), A = w(I, -1);
    if (P === "%" && A !== "%") throw new n("invalid intrinsic syntax, expected closing `%`");
    if (A === "%" && P !== "%") throw new n("invalid intrinsic syntax, expected opening `%`");
    var j = [];
    return k(I, T, function($, U, N, Se) {
      j[j.length] = N ? k(Se, O, "$1") : U || $;
    }), j;
  }, z = function(I, P) {
    var A = I, j;
    if (x(b, A) && (j = b[A], A = "%" + j[0] + "%"), x(m, A)) {
      var $ = m[A];
      if ($ === h && ($ = p(A)), typeof $ > "u" && !P) throw new i("intrinsic " + I + " exists, but is not available. Please file an issue!");
      return { alias: j, name: A, value: $ };
    }
    throw new n("intrinsic " + I + " does not exist!");
  };
  t.exports = function(I, P) {
    if (typeof I != "string" || I.length === 0) throw new i("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && typeof P != "boolean") throw new i('"allowMissing" argument must be a boolean');
    if (_(/^%?[^%]*%?$/, I) === null) throw new n("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    var A = F(I), j = A.length > 0 ? A[0] : "", $ = z("%" + j + "%", P), U = $.name, N = $.value, Se = !1, qe = $.alias;
    qe && (j = qe[0], y(A, C([0, 1], qe)));
    for (var Ce = 1, me = !0; Ce < A.length; Ce += 1) {
      var K = A[Ce], ke = w(K, 0, 1), we = w(K, -1);
      if ((ke === '"' || ke === "'" || ke === "`" || we === '"' || we === "'" || we === "`") && ke !== we) throw new n("property names with quotes must have matching quotes");
      if ((K === "constructor" || !me) && (Se = !0), j += "." + K, U = "%" + j + "%", x(m, U)) N = m[U];
      else if (N != null) {
        if (!(K in N)) {
          if (!P) throw new i("base intrinsic for " + I + " exists, but the property is not available.");
          return;
        }
        if (d && Ce + 1 >= A.length) {
          var _e = d(N, K);
          me = !!_e, me && "get" in _e && !("originalValue" in _e.get) ? N = _e.get : N = N[K];
        } else me = x(N, K), N = N[K];
        me && !Se && (m[U] = N);
      }
    }
    return N;
  };
} }), $s = H({ "node_modules/call-bind/index.js"(e, t) {
  var r = Tt(), n = sn(), o = n("%Function.prototype.apply%"), i = n("%Function.prototype.call%"), a = n("%Reflect.apply%", !0) || r.call(i, o), d = n("%Object.getOwnPropertyDescriptor%", !0), c = n("%Object.defineProperty%", !0), u = n("%Math.max%");
  if (c) try {
    c({}, "a", { value: 1 });
  } catch {
    c = null;
  }
  t.exports = function(f) {
    var h = a(r, i, arguments);
    if (d && c) {
      var s = d(h, "length");
      s.configurable && c(h, "length", { value: 1 + u(0, f.length - (arguments.length - 1)) });
    }
    return h;
  };
  var g = function() {
    return a(r, o, arguments);
  };
  c ? c(t.exports, "apply", { value: g }) : t.exports.apply = g;
} }), Ns = H({ "node_modules/call-bind/callBound.js"(e, t) {
  var r = sn(), n = $s(), o = n(r("String.prototype.indexOf"));
  t.exports = function(i, a) {
    var d = r(i, !!a);
    return typeof d == "function" && o(i, ".prototype.") > -1 ? n(d) : d;
  };
} }), Bs = H({ "node_modules/has-tostringtag/shams.js"(e, t) {
  var r = on();
  t.exports = function() {
    return r() && !!Symbol.toStringTag;
  };
} }), Ds = H({ "node_modules/is-regex/index.js"(e, t) {
  var r = Ns(), n = Bs()(), o, i, a, d;
  n && (o = r("Object.prototype.hasOwnProperty"), i = r("RegExp.prototype.exec"), a = {}, c = function() {
    throw a;
  }, d = { toString: c, valueOf: c }, typeof Symbol.toPrimitive == "symbol" && (d[Symbol.toPrimitive] = c));
  var c, u = r("Object.prototype.toString"), g = Object.getOwnPropertyDescriptor, f = "[object RegExp]";
  t.exports = n ? function(h) {
    if (!h || typeof h != "object") return !1;
    var s = g(h, "lastIndex"), m = s && o(s, "value");
    if (!m) return !1;
    try {
      i(h, d);
    } catch (p) {
      return p === a;
    }
  } : function(h) {
    return !h || typeof h != "object" && typeof h != "function" ? !1 : u(h) === f;
  };
} }), Ls = H({ "node_modules/is-function/index.js"(e, t) {
  t.exports = n;
  var r = Object.prototype.toString;
  function n(o) {
    if (!o) return !1;
    var i = r.call(o);
    return i === "[object Function]" || typeof o == "function" && i !== "[object RegExp]" || typeof window < "u" && (o === window.setTimeout || o === window.alert || o === window.confirm || o === window.prompt);
  }
} }), Ms = H({ "node_modules/is-symbol/index.js"(e, t) {
  var r = Object.prototype.toString, n = ln()();
  n ? (o = Symbol.prototype.toString, i = /^Symbol\(.*\)$/, a = function(d) {
    return typeof d.valueOf() != "symbol" ? !1 : i.test(o.call(d));
  }, t.exports = function(d) {
    if (typeof d == "symbol") return !0;
    if (r.call(d) !== "[object Symbol]") return !1;
    try {
      return a(d);
    } catch {
      return !1;
    }
  }) : t.exports = function(d) {
    return !1;
  };
  var o, i, a;
} }), zs = _t(Ds()), Us = _t(Ls()), Hs = _t(Ms());
function Vs(e) {
  return e != null && typeof e == "object" && Array.isArray(e) === !1;
}
var Ws = typeof global == "object" && global && global.Object === Object && global, qs = Ws, Gs = typeof self == "object" && self && self.Object === Object && self, Ks = qs || Gs || Function("return this")(), At = Ks, Ys = At.Symbol, de = Ys, dn = Object.prototype, Js = dn.hasOwnProperty, Zs = dn.toString, ge = de ? de.toStringTag : void 0;
function Xs(e) {
  var t = Js.call(e, ge), r = e[ge];
  try {
    e[ge] = void 0;
    var n = !0;
  } catch {
  }
  var o = Zs.call(e);
  return n && (t ? e[ge] = r : delete e[ge]), o;
}
var Qs = Xs, ed = Object.prototype, td = ed.toString;
function rd(e) {
  return td.call(e);
}
var nd = rd, ad = "[object Null]", od = "[object Undefined]", or = de ? de.toStringTag : void 0;
function ld(e) {
  return e == null ? e === void 0 ? od : ad : or && or in Object(e) ? Qs(e) : nd(e);
}
var id = ld, lr = de ? de.prototype : void 0;
lr && lr.toString;
function sd(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var cn = sd, dd = "[object AsyncFunction]", cd = "[object Function]", ud = "[object GeneratorFunction]", pd = "[object Proxy]";
function md(e) {
  if (!cn(e)) return !1;
  var t = id(e);
  return t == cd || t == ud || t == dd || t == pd;
}
var fd = md, gd = At["__core-js_shared__"], at = gd, ir = function() {
  var e = /[^.]+$/.exec(at && at.keys && at.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function hd(e) {
  return !!ir && ir in e;
}
var yd = hd, bd = Function.prototype, Ed = bd.toString;
function xd(e) {
  if (e != null) {
    try {
      return Ed.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var vd = xd, Sd = /[\\^$.*+?()[\]{}|]/g, Cd = /^\[object .+?Constructor\]$/, kd = Function.prototype, wd = Object.prototype, _d = kd.toString, Td = wd.hasOwnProperty, Ad = RegExp("^" + _d.call(Td).replace(Sd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
function Od(e) {
  if (!cn(e) || yd(e)) return !1;
  var t = fd(e) ? Ad : Cd;
  return t.test(vd(e));
}
var Id = Od;
function Rd(e, t) {
  return e?.[t];
}
var jd = Rd;
function Pd(e, t) {
  var r = jd(e, t);
  return Id(r) ? r : void 0;
}
var un = Pd;
function Fd(e, t) {
  return e === t || e !== e && t !== t;
}
var $d = Fd, Nd = un(Object, "create"), xe = Nd;
function Bd() {
  this.__data__ = xe ? xe(null) : {}, this.size = 0;
}
var Dd = Bd;
function Ld(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Md = Ld, zd = "__lodash_hash_undefined__", Ud = Object.prototype, Hd = Ud.hasOwnProperty;
function Vd(e) {
  var t = this.__data__;
  if (xe) {
    var r = t[e];
    return r === zd ? void 0 : r;
  }
  return Hd.call(t, e) ? t[e] : void 0;
}
var Wd = Vd, qd = Object.prototype, Gd = qd.hasOwnProperty;
function Kd(e) {
  var t = this.__data__;
  return xe ? t[e] !== void 0 : Gd.call(t, e);
}
var Yd = Kd, Jd = "__lodash_hash_undefined__";
function Zd(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = xe && t === void 0 ? Jd : t, this;
}
var Xd = Zd;
function ce(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ce.prototype.clear = Dd;
ce.prototype.delete = Md;
ce.prototype.get = Wd;
ce.prototype.has = Yd;
ce.prototype.set = Xd;
var sr = ce;
function Qd() {
  this.__data__ = [], this.size = 0;
}
var ec = Qd;
function tc(e, t) {
  for (var r = e.length; r--; ) if ($d(e[r][0], t)) return r;
  return -1;
}
var Ve = tc, rc = Array.prototype, nc = rc.splice;
function ac(e) {
  var t = this.__data__, r = Ve(t, e);
  if (r < 0) return !1;
  var n = t.length - 1;
  return r == n ? t.pop() : nc.call(t, r, 1), --this.size, !0;
}
var oc = ac;
function lc(e) {
  var t = this.__data__, r = Ve(t, e);
  return r < 0 ? void 0 : t[r][1];
}
var ic = lc;
function sc(e) {
  return Ve(this.__data__, e) > -1;
}
var dc = sc;
function cc(e, t) {
  var r = this.__data__, n = Ve(r, e);
  return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
}
var uc = cc;
function ue(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
ue.prototype.clear = ec;
ue.prototype.delete = oc;
ue.prototype.get = ic;
ue.prototype.has = dc;
ue.prototype.set = uc;
var pc = ue, mc = un(At, "Map"), fc = mc;
function gc() {
  this.size = 0, this.__data__ = { hash: new sr(), map: new (fc || pc)(), string: new sr() };
}
var hc = gc;
function yc(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
var bc = yc;
function Ec(e, t) {
  var r = e.__data__;
  return bc(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
var We = Ec;
function xc(e) {
  var t = We(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
var vc = xc;
function Sc(e) {
  return We(this, e).get(e);
}
var Cc = Sc;
function kc(e) {
  return We(this, e).has(e);
}
var wc = kc;
function _c(e, t) {
  var r = We(this, e), n = r.size;
  return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
}
var Tc = _c;
function pe(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var n = e[t];
    this.set(n[0], n[1]);
  }
}
pe.prototype.clear = hc;
pe.prototype.delete = vc;
pe.prototype.get = Cc;
pe.prototype.has = wc;
pe.prototype.set = Tc;
var pn = pe, Ac = "Expected a function";
function Ot(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Ac);
  var r = function() {
    var n = arguments, o = t ? t.apply(this, n) : n[0], i = r.cache;
    if (i.has(o)) return i.get(o);
    var a = e.apply(this, n);
    return r.cache = i.set(o, a) || i, a;
  };
  return r.cache = new (Ot.Cache || pn)(), r;
}
Ot.Cache = pn;
var Oc = Ot, Ic = 500;
function Rc(e) {
  var t = Oc(e, function(n) {
    return r.size === Ic && r.clear(), n;
  }), r = t.cache;
  return t;
}
var jc = Rc, Pc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Fc = /\\(\\)?/g;
jc(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Pc, function(r, n, o, i) {
    t.push(o ? i.replace(Fc, "$1") : n || r);
  }), t;
});
var $c = Vs, Nc = (e) => {
  let t = null, r = !1, n = !1, o = !1, i = "";
  if (e.indexOf("//") >= 0 || e.indexOf("/*") >= 0) for (let a = 0; a < e.length; a += 1) !t && !r && !n && !o ? e[a] === '"' || e[a] === "'" || e[a] === "`" ? t = e[a] : e[a] === "/" && e[a + 1] === "*" ? r = !0 : e[a] === "/" && e[a + 1] === "/" ? n = !0 : e[a] === "/" && e[a + 1] !== "/" && (o = !0) : (t && (e[a] === t && e[a - 1] !== "\\" || e[a] === `
` && t !== "`") && (t = null), o && (e[a] === "/" && e[a - 1] !== "\\" || e[a] === `
`) && (o = !1), r && e[a - 1] === "/" && e[a - 2] === "*" && (r = !1), n && e[a] === `
` && (n = !1)), !r && !n && (i += e[a]);
  else i = e;
  return i;
}, Bc = (0, js.default)(1e4)((e) => Nc(e).replace(/\n\s*/g, "").trim()), Dc = function(e, t) {
  let r = t.slice(0, t.indexOf("{")), n = t.slice(t.indexOf("{"));
  if (r.includes("=>") || r.includes("function")) return t;
  let o = r;
  return o = o.replace(e, "function"), o + n;
}, Lc = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/;
function mn(e) {
  if (!$c(e)) return e;
  let t = e, r = !1;
  return typeof Event < "u" && e instanceof Event && (t = Rs(t), r = !0), t = Object.keys(t).reduce((n, o) => {
    try {
      t[o] && t[o].toJSON, n[o] = t[o];
    } catch {
      r = !0;
    }
    return n;
  }, {}), r ? t : e;
}
var Mc = function(e) {
  let t, r, n, o;
  return function(i, a) {
    try {
      if (i === "") return o = [], t = /* @__PURE__ */ new Map([[a, "[]"]]), r = /* @__PURE__ */ new Map(), n = [], a;
      let d = r.get(this) || this;
      for (; n.length && d !== n[0]; ) n.shift(), o.pop();
      if (typeof a == "boolean") return a;
      if (a === void 0) return e.allowUndefined ? "_undefined_" : void 0;
      if (a === null) return null;
      if (typeof a == "number") return a === -1 / 0 ? "_-Infinity_" : a === 1 / 0 ? "_Infinity_" : Number.isNaN(a) ? "_NaN_" : a;
      if (typeof a == "bigint") return `_bigint_${a.toString()}`;
      if (typeof a == "string") return Lc.test(a) ? e.allowDate ? `_date_${a}` : void 0 : a;
      if ((0, zs.default)(a)) return e.allowRegExp ? `_regexp_${a.flags}|${a.source}` : void 0;
      if ((0, Us.default)(a)) {
        if (!e.allowFunction) return;
        let { name: u } = a, g = a.toString();
        return g.match(/(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/) ? `_function_${u}|${(() => {
        }).toString()}` : `_function_${u}|${Bc(Dc(i, g))}`;
      }
      if ((0, Hs.default)(a)) {
        if (!e.allowSymbol) return;
        let u = Symbol.keyFor(a);
        return u !== void 0 ? `_gsymbol_${u}` : `_symbol_${a.toString().slice(7, -1)}`;
      }
      if (n.length >= e.maxDepth) return Array.isArray(a) ? `[Array(${a.length})]` : "[Object]";
      if (a === this) return `_duplicate_${JSON.stringify(o)}`;
      if (a instanceof Error && e.allowError) return { __isConvertedError__: !0, errorProperties: { ...a.cause ? { cause: a.cause } : {}, ...a, name: a.name, message: a.message, stack: a.stack, "_constructor-name_": a.constructor.name } };
      if (a.constructor && a.constructor.name && a.constructor.name !== "Object" && !Array.isArray(a) && !e.allowClass) return;
      let c = t.get(a);
      if (!c) {
        let u = Array.isArray(a) ? a : mn(a);
        if (a.constructor && a.constructor.name && a.constructor.name !== "Object" && !Array.isArray(a) && e.allowClass) try {
          Object.assign(u, { "_constructor-name_": a.constructor.name });
        } catch {
        }
        return o.push(i), n.unshift(u), t.set(a, JSON.stringify(o)), a !== u && r.set(a, u), u;
      }
      return `_duplicate_${c}`;
    } catch {
      return;
    }
  };
}, zc = { maxDepth: 10, space: void 0, allowFunction: !0, allowRegExp: !0, allowDate: !0, allowClass: !0, allowError: !0, allowUndefined: !0, allowSymbol: !0, lazyEval: !0 }, Uc = (e, t = {}) => {
  let r = { ...zc, ...t };
  return JSON.stringify(mn(e), Mc(r), t.space);
};
function fn(e) {
  return Uc(e, { allowFunction: !1 });
}
var gn = v.createContext({ sources: {} }), hn = "--unknown--", Hc = ({ children: e, channel: t }) => {
  let [r, n] = v.useState({});
  return v.useEffect(() => {
    let o = (i, a = null, d = !1) => {
      let { id: c, args: u = void 0, source: g, format: f } = typeof i == "string" ? { id: i, source: a, format: d } : i, h = u ? fn(u) : hn;
      n((s) => ({ ...s, [c]: { ...s[c], [h]: { code: g, format: f } } }));
    };
    return t.on(Pt, o), () => t.off(Pt, o);
  }, []), l.createElement(gn.Provider, { value: { sources: r } }, e);
}, Vc = (e, t, r) => {
  let { sources: n } = r, o = n?.[e];
  return o?.[fn(t)] || o?.[hn] || { code: "" };
}, Wc = ({ snippet: e, storyContext: t, typeFromProps: r, transformFromProps: n }) => {
  let { __isArgsStory: o } = t.parameters, i = t.parameters.docs?.source || {}, a = r || i.type || Ge.AUTO;
  if (i.code !== void 0) return i.code;
  let d = a === Ge.DYNAMIC || a === Ge.AUTO && e && o ? e : i.originalSource || "";
  return (n ?? i.transform)?.(d, t) || d;
}, qc = (e, t, r) => {
  let n, { of: o } = e;
  if ("of" in e && o === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  if (o) n = t.resolveOf(o, ["story"]).story;
  else try {
    n = t.storyById();
  } catch {
  }
  let i = n?.parameters?.docs?.source || {}, { code: a } = e, d = e.format ?? i.format, c = e.language ?? i.language ?? "jsx", u = e.dark ?? i.dark ?? !1;
  if (!a && !n) return { error: "Oh no! The source is not available." };
  if (a) return { code: a, format: d, language: c, dark: u };
  let g = t.getStoryContext(n), f = e.__forceInitialArgs ? g.initialArgs : g.unmappedArgs, h = Vc(n.id, f, r);
  return d = h.format ?? n.parameters.docs?.source?.format ?? !1, { code: Wc({ snippet: h.code, storyContext: { ...g, args: f }, typeFromProps: e.type, transformFromProps: e.transform }), format: d, language: c, dark: u };
};
function Gc(e, t) {
  let r = Kc([e], t);
  return r && r[0];
}
function Kc(e, t) {
  let [r, n] = v.useState({});
  return v.useEffect(() => {
    Promise.all(e.map(async (o) => {
      let i = await t.loadStory(o);
      n((a) => a[o] === i ? a : { ...a, [o]: i });
    }));
  }), e.map((o) => {
    if (r[o]) return r[o];
    try {
      return t.storyById(o);
    } catch {
      return null;
    }
  });
}
var Yc = (e, t) => {
  let { of: r, meta: n } = e;
  if ("of" in e && r === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  return n && t.referenceMeta(n, !1), t.resolveOf(r || "story", ["story"]).story.id;
}, Jc = (e, t, r) => {
  let { parameters: n = {} } = t || {}, { docs: o = {} } = n, i = o.story || {};
  if (o.disable) return null;
  if (e.inline ?? i.inline ?? !1) {
    let d = e.height ?? i.height, c = e.autoplay ?? i.autoplay ?? !1;
    return { story: t, inline: !0, height: d, autoplay: c, forceInitialArgs: !!e.__forceInitialArgs, primary: !!e.__primary, renderStoryToElement: r.renderStoryToElement };
  }
  let a = e.height ?? i.height ?? i.iframeHeight ?? "100px";
  return { story: t, inline: !1, height: a, primary: !!e.__primary };
}, Zc = (e = { __forceInitialArgs: !1, __primary: !1 }) => {
  let t = v.useContext(G), r = Yc(e, t), n = Gc(r, t);
  if (!n) return l.createElement(Sr, null);
  let o = Jc(e, n, t);
  return o ? l.createElement(io, { ...o }) : null;
}, Xc = (e) => {
  let t = v.useContext(G), r = v.useContext(gn), { of: n, source: o } = e;
  if ("of" in e && n === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { story: i } = oe(n || "story", ["story"]), a = qc({ ...o, ...n && { of: n } }, t, r), d = e.layout ?? i.parameters.layout ?? i.parameters.docs?.canvas?.layout ?? "padded", c = e.withToolbar ?? i.parameters.docs?.canvas?.withToolbar ?? !1, u = e.additionalActions ?? i.parameters.docs?.canvas?.additionalActions, g = e.sourceState ?? i.parameters.docs?.canvas?.sourceState ?? "hidden", f = e.className ?? i.parameters.docs?.canvas?.className;
  return l.createElement(Cr, { withSource: g === "none" ? void 0 : a, isExpanded: g === "shown", withToolbar: c, additionalActions: u, className: f, layout: d }, l.createElement(Zc, { of: n || i.moduleExport, meta: e.meta, ...e.story }));
}, Qc = (e, t) => {
  let r = eu(e, t);
  if (!r) throw new Error("No result when story was defined");
  return r;
}, eu = (e, t) => {
  let r = e ? t.getStoryContext(e) : { args: {} }, { id: n } = e || { id: "none" }, [o, i] = v.useState(r.args);
  v.useEffect(() => {
    let c = (u) => {
      u.storyId === n && i(u.args);
    };
    return t.channel.on($t, c), () => t.channel.off($t, c);
  }, [n, t.channel]);
  let a = v.useCallback((c) => t.channel.emit(aa, { storyId: n, updatedArgs: c }), [n, t.channel]), d = v.useCallback((c) => t.channel.emit(oa, { storyId: n, argNames: c }), [n, t.channel]);
  return e && [o, a, d];
}, tu = (e, t) => {
  let r = t.getStoryContext(e), [n, o] = v.useState(r.globals);
  return v.useEffect(() => {
    let i = (a) => {
      o(a.globals);
    };
    return t.channel.on(Nt, i), () => t.channel.off(Nt, i);
  }, [t.channel]), [n];
};
function ru(e, t) {
  let { extractArgTypes: r } = t.docs || {};
  if (!r) throw new Error("Args unsupported. See Args documentation for your framework.");
  return r(e);
}
var nu = (e) => {
  let { of: t } = e;
  if ("of" in e && t === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = v.useContext(G), { story: n } = r.resolveOf(t || "story", ["story"]), { parameters: o, argTypes: i, component: a, subcomponents: d } = n, c = o.docs?.controls || {}, u = e.include ?? c.include, g = e.exclude ?? c.exclude, f = e.sort ?? c.sort, [h, s, m] = Qc(n, r), [p] = tu(n, r), b = Ft(i, u, g);
  if (!(d && Object.keys(d).length > 0)) return Object.keys(b).length > 0 || Object.keys(h).length > 0 ? l.createElement(ht, { rows: b, sort: f, args: h, globals: p, updateArgs: s, resetArgs: m }) : null;
  let E = Ss(a), x = Object.fromEntries(Object.entries(d).map(([y, k]) => [y, { rows: Ft(ru(k, o), u, g), sort: f }])), C = { [E]: { rows: b, sort: f }, ...x };
  return l.createElement(bs, { tabs: C, sort: f, args: h, globals: p, updateArgs: s, resetArgs: m });
}, { document: yn } = globalThis, au = ({ className: e, children: t, ...r }) => {
  if (typeof e != "string" && (typeof t != "string" || !t.match(/[\n\r]/g))) return l.createElement(_n, null, t);
  let n = e && e.split("-");
  return l.createElement(xr, { language: n && n[1] || "text", format: !1, code: t, ...r });
};
function It(e, t) {
  e.channel.emit(la, t);
}
var yt = On.a, ou = ({ hash: e, children: t }) => {
  let r = v.useContext(G);
  return l.createElement(yt, { href: e, target: "_self", onClick: (n) => {
    let o = e.substring(1);
    yn.getElementById(o) && It(r, e);
  } }, t);
}, lu = (e) => {
  let { href: t, target: r, children: n, ...o } = e, i = v.useContext(G);
  return !t || r === "_blank" || /^https?:\/\//.test(t) ? l.createElement(yt, { ...e }) : t.startsWith("#") ? l.createElement(ou, { hash: t }, n) : l.createElement(yt, { href: t, onClick: (a) => {
    a.button === 0 && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && (a.preventDefault(), It(i, a.currentTarget.getAttribute("href")));
  }, target: r, ...o }, n);
}, bn = ["h1", "h2", "h3", "h4", "h5", "h6"], iu = bn.reduce((e, t) => ({ ...e, [t]: S(t)({ "& svg": { position: "relative", top: "-0.1em", visibility: "hidden" }, "&:hover svg": { visibility: "visible" } }) }), {}), su = S.a(() => ({ float: "left", lineHeight: "inherit", paddingRight: "10px", marginLeft: "-24px", color: "inherit" })), du = ({ as: e, id: t, children: r, ...n }) => {
  let o = v.useContext(G), i = iu[e], a = `#${t}`;
  return l.createElement(i, { id: t, ...n }, l.createElement(su, { "aria-hidden": "true", href: a, tabIndex: -1, target: "_self", onClick: (d) => {
    yn.getElementById(t) && It(o, a);
  } }, l.createElement(Yn, null)), r);
}, Rt = (e) => {
  let { as: t, id: r, children: n, ...o } = e;
  if (r) return l.createElement(du, { as: t, id: r, ...o }, n);
  let i = t, { as: a, ...d } = e;
  return l.createElement(i, { ...Tn(d, t) });
}, cu = bn.reduce((e, t) => ({ ...e, [t]: (r) => l.createElement(Rt, { as: t, ...r }) }), {}), uu = (e) => {
  if (!e.children) return null;
  if (typeof e.children != "string") throw new Error(ta`The Markdown block only accepts children as a single string, but children were of type: '${typeof e.children}'
        This is often caused by not wrapping the child in a template string.
        
        This is invalid:
        <Markdown>
          # Some heading
          A paragraph
        </Markdown>

        Instead do:
        <Markdown>
        {\`
          # Some heading
          A paragraph
        \`}
        </Markdown>
      `);
  return l.createElement(Hr, { ...e, options: { forceBlock: !0, overrides: { code: au, a: lu, ...cu, ...e?.options?.overrides }, ...e?.options } });
}, pu = ((e) => (e.INFO = "info", e.NOTES = "notes", e.DOCGEN = "docgen", e.AUTO = "auto", e))(pu || {}), mu = (e) => {
  switch (e.type) {
    case "story":
      return e.story.parameters.docs?.description?.story || null;
    case "meta": {
      let { parameters: t, component: r } = e.preparedMeta;
      return t.docs?.description?.component || t.docs?.extractComponentDescription?.(r, { component: r, parameters: t }) || null;
    }
    case "component": {
      let { component: t, projectAnnotations: { parameters: r } } = e;
      return r.docs?.extractComponentDescription?.(t, { component: t, parameters: r }) || null;
    }
    default:
      throw new Error(`Unrecognized module type resolved from 'useOf', got: ${e.type}`);
  }
}, bt = (e) => {
  let { of: t } = e;
  if ("of" in e && t === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let r = oe(t || "meta"), n = mu(r);
  return n ? l.createElement(uu, null, n) : null;
}, dr = Et(pa()), fu = S.div(({ theme: e }) => ({ width: "10rem", "@media (max-width: 768px)": { display: "none" } })), gu = S.div(({ theme: e }) => ({ position: "fixed", bottom: 0, top: 0, width: "10rem", paddingTop: "4rem", paddingBottom: "2rem", overflowY: "auto", fontFamily: e.typography.fonts.base, fontSize: e.typography.size.s2, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", WebkitTapHighlightColor: "rgba(0, 0, 0, 0)", WebkitOverflowScrolling: "touch", "& *": { boxSizing: "border-box" }, "& > .toc-wrapper > .toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}`, ".toc-list": { paddingLeft: 0, borderLeft: `solid 2px ${e.color.mediumlight}` } } }, "& .toc-list-item": { position: "relative", listStyleType: "none", marginLeft: 20, paddingTop: 3, paddingBottom: 3 }, "& .toc-list-item::before": { content: '""', position: "absolute", height: "100%", top: 0, left: 0, transform: "translateX(calc(-2px - 20px))", borderLeft: `solid 2px ${e.color.mediumdark}`, opacity: 0, transition: "opacity 0.2s" }, "& .toc-list-item.is-active-li::before": { opacity: 1 }, "& .toc-list-item > a": { color: e.color.defaultText, textDecoration: "none" }, "& .toc-list-item.is-active-li > a": { fontWeight: 600, color: e.color.secondary, textDecoration: "none" } })), hu = S.p(({ theme: e }) => ({ fontWeight: 600, fontSize: "0.875em", color: e.textColor, textTransform: "uppercase", marginBottom: 10 })), yu = ({ title: e }) => e === null ? null : typeof e == "string" ? l.createElement(hu, null, e) : e, bu = ({ title: e, disable: t, headingSelector: r, contentsSelector: n, ignoreSelector: o, unsafeTocbotOptions: i }) => (v.useEffect(() => {
  let a = { tocSelector: ".toc-wrapper", contentSelector: n ?? ".sbdocs-content", headingSelector: r ?? "h3", ignoreSelector: o ?? ".docs-story *, .skip-toc", headingsOffset: 40, scrollSmoothOffset: -40, orderedList: !1, onClick: () => !1, ...i }, d = setTimeout(() => dr.init(a), 100);
  return () => {
    clearTimeout(d), dr.destroy();
  };
}, [t]), l.createElement(l.Fragment, null, l.createElement(fu, null, t ? null : l.createElement(gu, null, l.createElement(yu, { title: e || null }), l.createElement("div", { className: "toc-wrapper" }))))), { document: Eu, window: xu } = globalThis, vu = ({ context: e, theme: t, children: r }) => {
  let n;
  try {
    n = e.resolveOf("meta", ["meta"]).preparedMeta.parameters?.docs?.toc;
  } catch {
    n = e?.projectAnnotations?.parameters?.docs?.toc;
  }
  return v.useEffect(() => {
    let o;
    try {
      if (o = new URL(xu.parent.location.toString()), o.hash) {
        let i = Eu.getElementById(decodeURIComponent(o.hash.substring(1)));
        i && setTimeout(() => {
          Cs(i);
        }, 200);
      }
    } catch {
    }
  }), l.createElement(G.Provider, { value: e }, l.createElement(Hc, { channel: e.channel }, l.createElement(pr, { theme: Mn(t) }, l.createElement(Qa, { toc: n ? l.createElement(bu, { className: "sbdocs sbdocs-toc--custom", ...n }) : null }, r))));
}, Su = ({ children: e, disableAnchor: t }) => {
  if (t || typeof e != "string") return l.createElement(Pn, null, e);
  let r = globalThis.encodeURIComponent(e.toLowerCase());
  return l.createElement(Rt, { as: "h3", id: r }, e);
}, En = ({ of: e, expanded: t = !0, withToolbar: r = !1, __forceInitialArgs: n = !1, __primary: o = !1 }) => {
  let { story: i } = oe(e || "story", ["story"]), a = i.parameters.docs?.canvas?.withToolbar ?? r;
  return l.createElement(xs, { storyId: i.id }, t && l.createElement(l.Fragment, null, l.createElement(Su, null, i.name), l.createElement(bt, { of: e })), l.createElement(Xc, { of: e, withToolbar: a, story: { __forceInitialArgs: n, __primary: o }, source: { __forceInitialArgs: n } }));
}, Cu = (e) => {
  let { of: t } = e;
  if ("of" in e && t === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let { csfFile: r } = oe(t || "meta", ["meta"]), n = v.useContext(G).componentStoriesFromCSFFile(r)[0];
  return n ? l.createElement(En, { of: n.moduleExport, expanded: !1, __primary: !0, withToolbar: !0 }) : null;
}, ku = ({ children: e, disableAnchor: t, ...r }) => {
  if (t || typeof e != "string") return l.createElement(An, null, e);
  let n = e.toLowerCase().replace(/[^a-z0-9]/gi, "-");
  return l.createElement(Rt, { as: "h2", id: n, ...r }, e);
}, wu = S(ku)(({ theme: e }) => ({ fontSize: `${e.typography.size.s2 - 1}px`, fontWeight: e.typography.weight.bold, lineHeight: "16px", letterSpacing: "0.35em", textTransform: "uppercase", color: e.textMutedColor, border: 0, marginBottom: "12px", "&:first-of-type": { marginTop: "56px" } })), _u = ({ title: e = "Stories", includePrimary: t = !0 }) => {
  let { componentStories: r, projectAnnotations: n, getStoryContext: o } = v.useContext(G), i = r(), { stories: { filter: a } = { filter: void 0 } } = n.parameters?.docs || {};
  return a && (i = i.filter((d) => a(d, o(d)))), i.some((d) => d.tags?.includes("autodocs")) && (i = i.filter((d) => d.tags?.includes("autodocs") && !d.usesMount)), t || (i = i.slice(1)), !i || i.length === 0 ? null : l.createElement(l.Fragment, null, l.createElement(wu, null, e), i.map((d) => d && l.createElement(En, { key: d.id, of: d.moduleExport, expanded: !0, __forceInitialArgs: !0 })));
}, Tu = "https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#subtitle-block-and-parameterscomponentsubtitle", Au = (e) => {
  let { of: t, children: r } = e;
  if ("of" in e && t === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let n;
  try {
    n = oe(t || "meta", ["meta"]).preparedMeta;
  } catch (d) {
    if (r && !d.message.includes("did you forget to use <Meta of={} />?")) throw d;
  }
  let { componentSubtitle: o, docs: i } = n?.parameters || {};
  o && ra(`Using 'parameters.componentSubtitle' property to subtitle stories is deprecated. See ${Tu}`);
  let a = r || i?.subtitle || o;
  return a ? l.createElement(Ja, { className: "sbdocs-subtitle sb-unstyled" }, a) : null;
}, Ou = /\s*\/\s*/, Iu = (e) => {
  let t = e.trim().split(Ou);
  return t?.[t?.length - 1] || e;
}, Ru = (e) => {
  let { children: t, of: r } = e;
  if ("of" in e && r === void 0) throw new Error("Unexpected `of={undefined}`, did you mistype a CSF file reference?");
  let n;
  try {
    n = oe(r || "meta", ["meta"]).preparedMeta;
  } catch (i) {
    if (t && !i.message.includes("did you forget to use <Meta of={} />?")) throw i;
  }
  let o = t || Iu(n?.title);
  return o ? l.createElement(Ya, { className: "sbdocs-title sb-unstyled" }, o) : null;
}, ju = () => {
  let e = oe("meta", ["meta"]), { stories: t } = e.csfFile, r = Object.keys(t).length === 1;
  return l.createElement(l.Fragment, null, l.createElement(Ru, null), l.createElement(Au, null), l.createElement(bt, { of: "meta" }), r ? l.createElement(bt, { of: "story" }) : null, l.createElement(Cu, null), l.createElement(nu, null), r ? null : l.createElement(_u, null));
};
function Vu({ context: e, docsParameter: t }) {
  let r = t.container || vu, n = t.page || ju;
  return l.createElement(r, { context: e, theme: t.theme }, l.createElement(n, null));
}
export {
  xs as Anchor,
  lu as AnchorMdx,
  wl as BooleanControl,
  Xc as Canvas,
  au as CodeOrSourceMdx,
  Ri as ColorControl,
  nu as Controls,
  Rl as DateControl,
  bt as Description,
  pu as DescriptionType,
  Vu as Docs,
  vu as DocsContainer,
  G as DocsContext,
  ju as DocsPage,
  En as DocsStory,
  Oi as FilesControl,
  Rt as HeaderMdx,
  cu as HeadersMdx,
  ku as Heading,
  uu as Markdown,
  $l as NumberControl,
  er as ObjectControl,
  ie as OptionsControl,
  Cu as Primary,
  ht as PureArgsTable,
  Ci as RangeControl,
  Hc as SourceContainer,
  gn as SourceContext,
  _u as Stories,
  Zc as Story,
  Su as Subheading,
  Au as Subtitle,
  _i as TextControl,
  Ru as Title,
  hn as UNKNOWN_ARGS_HASH,
  Es as anchorBlockIdFromId,
  fn as argsHash,
  Iu as extractTitle,
  Al as formatDate,
  Ol as formatTime,
  Yc as getStoryId,
  Jc as getStoryProps,
  Pl as parse,
  _l as parseDate,
  Tl as parseTime,
  oe as useOf,
  qc as useSourceProps
};
