import { __exports as pt } from "../../../_virtual/react-dom.development.js";
import { r as RO } from "../../react/index.js";
import { __require as TO } from "../../scheduler/index.js";
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bb;
function AO() {
  return bb ? pt : (bb = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var gv = RO, $e = TO(), Ae = gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $o = !1;
    function Sb(e) {
      $o = e;
    }
    function oa(e) {
      if (!$o) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        bv("warn", e, n);
      }
    }
    function f(e) {
      if (!$o) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        bv("error", e, n);
      }
    }
    function bv(e, t, n) {
      {
        var a = Ae.ReactDebugCurrentFrame, r = a.getStackAddendum();
        r !== "" && (t += "%s", n = n.concat([r]));
        var i = n.map(function(u) {
          return String(u);
        });
        i.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, i);
      }
    }
    var ne = 0, B = 1, fn = 2, Y = 3, se = 4, _ = 5, ce = 6, Ga = 7, Nu = 8, _u = 9, Nn = 10, ae = 11, zt = 12, ue = 13, Nt = 14, le = 15, Jr = 16, Qa = 17, Kr = 18, ht = 19, Xa = 21, lt = 22, Za = 23, qo = 24, Go = 25, Cb = !0, _n = !1, Sv = !1, Cv = !1, Eb = !1, Rb = !0, Qo = !1, Tb = !0, Ev = !0, Xo = !0, xb = !0, Rv = /* @__PURE__ */ new Set(), sa = {}, Zo = {};
    function ca(e, t) {
      Ja(e, t), Ja(e + "Capture", t);
    }
    function Ja(e, t) {
      sa[e] && f("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), sa[e] = t;
      {
        var n = e.toLowerCase();
        Zo[n] = e, e === "onDoubleClick" && (Zo.ondblclick = e);
      }
      for (var a = 0; a < t.length; a++)
        Rv.add(t[a]);
    }
    var _t = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", fa = Object.prototype.hasOwnProperty;
    function Ka(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Wa(e) {
      try {
        return da(e), !1;
      } catch {
        return !0;
      }
    }
    function da(e) {
      return "" + e;
    }
    function Wr(e, t) {
      if (Wa(e))
        return f("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ka(e)), da(e);
    }
    function Db(e) {
      if (Wa(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ka(e)), da(e);
    }
    function Mb(e, t) {
      if (Wa(e))
        return f("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ka(e)), da(e);
    }
    function Ob(e, t) {
      if (Wa(e))
        return f("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Ka(e)), da(e);
    }
    function Ub(e) {
      if (Wa(e))
        return f("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Ka(e)), da(e);
    }
    function Hu(e) {
      if (Wa(e))
        return f("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Ka(e)), da(e);
    }
    var ku = 0, va = 1, Jo = 2, Hn = 3, Ir = 4, Tv = 5, xv = 6, Dv = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Pr = Dv + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Lb = new RegExp("^[" + Dv + "][" + Pr + "]*$"), Mv = {}, Ov = {};
    function Uv(e) {
      return fa.call(Ov, e) ? !0 : fa.call(Mv, e) ? !1 : Lb.test(e) ? (Ov[e] = !0, !0) : (Mv[e] = !0, f("Invalid attribute name: `%s`", e), !1);
    }
    function Lv(e, t, n) {
      return t !== null ? t.type === ku : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Ko(e, t, n, a) {
      if (n !== null && n.type === ku)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (a)
            return !1;
          if (n !== null)
            return !n.acceptsBooleans;
          var r = e.toLowerCase().slice(0, 5);
          return r !== "data-" && r !== "aria-";
        }
        default:
          return !1;
      }
    }
    function ei(e, t, n, a) {
      if (t === null || typeof t > "u" || Ko(e, t, n, a))
        return !0;
      if (a)
        return !1;
      if (n !== null)
        switch (n.type) {
          case Hn:
            return !t;
          case Ir:
            return t === !1;
          case Tv:
            return isNaN(t);
          case xv:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Wo(e) {
      return ze.hasOwnProperty(e) ? ze[e] : null;
    }
    function Ke(e, t, n, a, r, i, u) {
      this.acceptsBooleans = t === Jo || t === Hn || t === Ir, this.attributeName = a, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = u;
    }
    var ze = {}, wb = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    wb.forEach(function(e) {
      ze[e] = new Ke(
        e,
        ku,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      ze[t] = new Ke(
        t,
        va,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Jo,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Jo,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Hn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Hn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Ir,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ze[e] = new Ke(
        e,
        xv,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ze[e] = new Ke(
        e,
        Tv,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Io = /[\-\:]([a-z])/g, Po = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Io, Po);
      ze[t] = new Ke(
        t,
        va,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Io, Po);
      ze[t] = new Ke(
        t,
        va,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Io, Po);
      ze[t] = new Ke(
        t,
        va,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ze[e] = new Ke(
        e,
        va,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Ab = "xlinkHref";
    ze[Ab] = new Ke(
      "xlinkHref",
      va,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ze[e] = new Ke(
        e,
        va,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var zb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, wv = !1;
    function Av(e) {
      !wv && zb.test(e) && (wv = !0, f("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Nb(e, t, n, a) {
      if (a.mustUseProperty) {
        var r = a.propertyName;
        return e[r];
      } else {
        Wr(n, t), a.sanitizeURL && Av("" + n);
        var i = a.attributeName, u = null;
        if (a.type === Ir) {
          if (e.hasAttribute(i)) {
            var l = e.getAttribute(i);
            return l === "" ? !0 : ei(t, n, a, !1) ? l : l === "" + n ? n : l;
          }
        } else if (e.hasAttribute(i)) {
          if (ei(t, n, a, !1))
            return e.getAttribute(i);
          if (a.type === Hn)
            return n;
          u = e.getAttribute(i);
        }
        return ei(t, n, a, !1) ? u === null ? n : u : u === "" + n ? n : u;
      }
    }
    function zv(e, t, n, a) {
      {
        if (!Uv(t))
          return;
        if (!e.hasAttribute(t))
          return n === void 0 ? void 0 : null;
        var r = e.getAttribute(t);
        return Wr(n, t), r === "" + n ? n : r;
      }
    }
    function es(e, t, n, a) {
      var r = Wo(t);
      if (!Lv(t, r, a)) {
        if (ei(t, n, r, a) && (n = null), a || r === null) {
          if (Uv(t)) {
            var i = t;
            n === null ? e.removeAttribute(i) : (Wr(n, t), e.setAttribute(i, "" + n));
          }
          return;
        }
        var u = r.mustUseProperty;
        if (u) {
          var l = r.propertyName;
          if (n === null) {
            var o = r.type;
            e[l] = o === Hn ? !1 : "";
          } else
            e[l] = n;
          return;
        }
        var s = r.attributeName, c = r.attributeNamespace;
        if (n === null)
          e.removeAttribute(s);
        else {
          var v = r.type, d;
          v === Hn || v === Ir && n === !0 ? d = "" : (Wr(n, s), d = "" + n, r.sanitizeURL && Av(d.toString())), c ? e.setAttributeNS(c, s, d) : e.setAttribute(s, d);
        }
      }
    }
    var Ia = Symbol.for("react.element"), pa = Symbol.for("react.portal"), Pa = Symbol.for("react.fragment"), ts = Symbol.for("react.strict_mode"), ns = Symbol.for("react.profiler"), as = Symbol.for("react.provider"), rs = Symbol.for("react.context"), er = Symbol.for("react.forward_ref"), Fu = Symbol.for("react.suspense"), Vu = Symbol.for("react.suspense_list"), ti = Symbol.for("react.memo"), We = Symbol.for("react.lazy"), _b = Symbol.for("react.scope"), Hb = Symbol.for("react.debug_trace_mode"), Nv = Symbol.for("react.offscreen"), kb = Symbol.for("react.legacy_hidden"), Fb = Symbol.for("react.cache"), Vb = Symbol.for("react.tracing_marker"), _v = Symbol.iterator, jb = "@@iterator";
    function ha(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = _v && e[_v] || e[jb];
      return typeof t == "function" ? t : null;
    }
    var X = Object.assign, ni = 0, Hv, kv, Fv, Vv, jv, Bv, Yv;
    function $v() {
    }
    $v.__reactDisabledLog = !0;
    function Bb() {
      {
        if (ni === 0) {
          Hv = console.log, kv = console.info, Fv = console.warn, Vv = console.error, jv = console.group, Bv = console.groupCollapsed, Yv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: $v,
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
        ni++;
      }
    }
    function Yb() {
      {
        if (ni--, ni === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Hv
            }),
            info: X({}, e, {
              value: kv
            }),
            warn: X({}, e, {
              value: Fv
            }),
            error: X({}, e, {
              value: Vv
            }),
            group: X({}, e, {
              value: jv
            }),
            groupCollapsed: X({}, e, {
              value: Bv
            }),
            groupEnd: X({}, e, {
              value: Yv
            })
          });
        }
        ni < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var is = Ae.ReactCurrentDispatcher, us;
    function kn(e, t, n) {
      {
        if (us === void 0)
          try {
            throw Error();
          } catch (r) {
            var a = r.stack.trim().match(/\n( *(at )?)/);
            us = a && a[1] || "";
          }
        return `
` + us + e;
      }
    }
    var ls = !1, ju;
    {
      var $b = typeof WeakMap == "function" ? WeakMap : Map;
      ju = new $b();
    }
    function os(e, t) {
      if (!e || ls)
        return "";
      {
        var n = ju.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      ls = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var i;
      i = is.current, is.current = null, Bb();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (y) {
              a = y;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (y) {
              a = y;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            a = y;
          }
          e();
        }
      } catch (y) {
        if (y && a && typeof y.stack == "string") {
          for (var l = y.stack.split(`
`), o = a.stack.split(`
`), s = l.length - 1, c = o.length - 1; s >= 1 && c >= 0 && l[s] !== o[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (l[s] !== o[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || l[s] !== o[c]) {
                    var v = `
` + l[s].replace(" at new ", " at ");
                    return e.displayName && v.includes("<anonymous>") && (v = v.replace("<anonymous>", e.displayName)), typeof e == "function" && ju.set(e, v), v;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        ls = !1, is.current = i, Yb(), Error.prepareStackTrace = r;
      }
      var d = e ? e.displayName || e.name : "", m = d ? kn(d) : "";
      return typeof e == "function" && ju.set(e, m), m;
    }
    function qb(e, t, n) {
      return os(e, !0);
    }
    function ss(e, t, n) {
      return os(e, !1);
    }
    function Gb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cs(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return os(e, Gb(e));
      if (typeof e == "string")
        return kn(e);
      switch (e) {
        case Fu:
          return kn("Suspense");
        case Vu:
          return kn("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case er:
            return ss(e.render);
          case ti:
            return cs(e.type, t, n);
          case We: {
            var a = e, r = a._payload, i = a._init;
            try {
              return cs(i(r), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    function Qb(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case _:
          return kn(e.type);
        case Jr:
          return kn("Lazy");
        case ue:
          return kn("Suspense");
        case ht:
          return kn("SuspenseList");
        case ne:
        case fn:
        case le:
          return ss(e.type);
        case ae:
          return ss(e.type.render);
        case B:
          return qb(e.type);
        default:
          return "";
      }
    }
    function qv(e) {
      try {
        var t = "", n = e;
        do
          t += Qb(n), n = n.return;
        while (n);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    function Xb(e, t, n) {
      var a = e.displayName;
      if (a)
        return a;
      var r = t.displayName || t.name || "";
      return r !== "" ? n + "(" + r + ")" : n;
    }
    function Gv(e) {
      return e.displayName || "Context";
    }
    function re(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Pa:
          return "Fragment";
        case pa:
          return "Portal";
        case ns:
          return "Profiler";
        case ts:
          return "StrictMode";
        case Fu:
          return "Suspense";
        case Vu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case rs:
            var t = e;
            return Gv(t) + ".Consumer";
          case as:
            var n = e;
            return Gv(n._context) + ".Provider";
          case er:
            return Xb(e, e.render, "ForwardRef");
          case ti:
            var a = e.displayName || null;
            return a !== null ? a : re(e.type) || "Memo";
          case We: {
            var r = e, i = r._payload, u = r._init;
            try {
              return re(u(i));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Zb(e, t, n) {
      var a = t.displayName || t.name || "";
      return e.displayName || (a !== "" ? n + "(" + a + ")" : n);
    }
    function Qv(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      var t = e.tag, n = e.type;
      switch (t) {
        case qo:
          return "Cache";
        case _u:
          var a = n;
          return Qv(a) + ".Consumer";
        case Nn:
          var r = n;
          return Qv(r._context) + ".Provider";
        case Kr:
          return "DehydratedFragment";
        case ae:
          return Zb(n, n.render, "ForwardRef");
        case Ga:
          return "Fragment";
        case _:
          return n;
        case se:
          return "Portal";
        case Y:
          return "Root";
        case ce:
          return "Text";
        case Jr:
          return re(n);
        case Nu:
          return n === ts ? "StrictMode" : "Mode";
        case lt:
          return "Offscreen";
        case zt:
          return "Profiler";
        case Xa:
          return "Scope";
        case ue:
          return "Suspense";
        case ht:
          return "SuspenseList";
        case Go:
          return "TracingMarker";
        case B:
        case ne:
        case Qa:
        case fn:
        case Nt:
        case le:
          if (typeof n == "function")
            return n.displayName || n.name || null;
          if (typeof n == "string")
            return n;
          break;
      }
      return null;
    }
    var Xv = Ae.ReactDebugCurrentFrame, mt = null, ai = !1;
    function ri() {
      {
        if (mt === null)
          return null;
        var e = mt._debugOwner;
        if (e !== null && typeof e < "u")
          return V(e);
      }
      return null;
    }
    function Jb() {
      return mt === null ? "" : qv(mt);
    }
    function Ie() {
      Xv.getCurrentStack = null, mt = null, ai = !1;
    }
    function he(e) {
      Xv.getCurrentStack = e === null ? null : Jb, mt = e, ai = !1;
    }
    function Kb() {
      return mt;
    }
    function Kt(e) {
      ai = e;
    }
    function xt(e) {
      return "" + e;
    }
    function Fn(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Hu(e), e;
        default:
          return "";
      }
    }
    var Wb = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function fs(e, t) {
      Wb[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || f("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || f("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Zv(e) {
      var t = e.type, n = e.nodeName;
      return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Jv(e) {
      return e._valueTracker;
    }
    function Ib(e) {
      e._valueTracker = null;
    }
    function Pb(e) {
      var t = "";
      return e && (Zv(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function eS(e) {
      var t = Zv(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Hu(e[t]);
      var a = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
        var r = n.get, i = n.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return r.call(this);
          },
          set: function(l) {
            Hu(l), a = "" + l, i.call(this, l);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        });
        var u = {
          getValue: function() {
            return a;
          },
          setValue: function(l) {
            Hu(l), a = "" + l;
          },
          stopTracking: function() {
            Ib(e), delete e[t];
          }
        };
        return u;
      }
    }
    function Bu(e) {
      Jv(e) || (e._valueTracker = eS(e));
    }
    function Kv(e) {
      if (!e)
        return !1;
      var t = Jv(e);
      if (!t)
        return !0;
      var n = t.getValue(), a = Pb(e);
      return a !== n ? (t.setValue(a), !0) : !1;
    }
    function Yu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Wv = !1, Iv = !1, Pv = !1, ep = !1;
    function tp(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ds(e, t) {
      var n = e, a = t.checked, r = X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: a ?? n._wrapperState.initialChecked
      });
      return r;
    }
    function np(e, t) {
      fs("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Iv && (f("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ri() || "A component", t.type), Iv = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Wv && (f("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ri() || "A component", t.type), Wv = !0);
      var n = e, a = t.defaultValue == null ? "" : t.defaultValue;
      n._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Fn(t.value != null ? t.value : a),
        controlled: tp(t)
      };
    }
    function ap(e, t) {
      var n = e, a = t.checked;
      a != null && es(n, "checked", a, !1);
    }
    function vs(e, t) {
      var n = e;
      {
        var a = tp(t);
        !n._wrapperState.controlled && a && !ep && (f("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ep = !0), n._wrapperState.controlled && !a && !Pv && (f("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pv = !0);
      }
      ap(e, t);
      var r = Fn(t.value), i = t.type;
      if (r != null)
        i === "number" ? (r === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        n.value != r) && (n.value = xt(r)) : n.value !== xt(r) && (n.value = xt(r));
      else if (i === "submit" || i === "reset") {
        n.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ps(n, t.type, r) : t.hasOwnProperty("defaultValue") && ps(n, t.type, Fn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
    }
    function rp(e, t, n) {
      var a = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type, i = r === "submit" || r === "reset";
        if (i && (t.value === void 0 || t.value === null))
          return;
        var u = xt(a._wrapperState.initialValue);
        n || u !== a.value && (a.value = u), a.defaultValue = u;
      }
      var l = a.name;
      l !== "" && (a.name = ""), a.defaultChecked = !a.defaultChecked, a.defaultChecked = !!a._wrapperState.initialChecked, l !== "" && (a.name = l);
    }
    function tS(e, t) {
      var n = e;
      vs(n, t), nS(n, t);
    }
    function nS(e, t) {
      var n = t.name;
      if (t.type === "radio" && n != null) {
        for (var a = e; a.parentNode; )
          a = a.parentNode;
        Wr(n, "name");
        for (var r = a.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), i = 0; i < r.length; i++) {
          var u = r[i];
          if (!(u === e || u.form !== e.form)) {
            var l = Ol(u);
            if (!l)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Kv(u), vs(u, l);
          }
        }
      }
    }
    function ps(e, t, n) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Yu(e.ownerDocument) !== e) && (n == null ? e.defaultValue = xt(e._wrapperState.initialValue) : e.defaultValue !== xt(n) && (e.defaultValue = xt(n)));
    }
    var ip = !1, up = !1, lp = !1;
    function op(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? gv.Children.forEach(t.children, function(n) {
        n != null && (typeof n == "string" || typeof n == "number" || up || (up = !0, f("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (lp || (lp = !0, f("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !ip && (f("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), ip = !0);
    }
    function aS(e, t) {
      t.value != null && e.setAttribute("value", xt(Fn(t.value)));
    }
    var rS = Array.isArray;
    function Pe(e) {
      return rS(e);
    }
    var hs;
    hs = !1;
    function sp() {
      var e = ri();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var cp = ["value", "defaultValue"];
    function iS(e) {
      {
        fs("select", e);
        for (var t = 0; t < cp.length; t++) {
          var n = cp[t];
          if (e[n] != null) {
            var a = Pe(e[n]);
            e.multiple && !a ? f("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, sp()) : !e.multiple && a && f("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, sp());
          }
        }
      }
    }
    function tr(e, t, n, a) {
      var r = e.options;
      if (t) {
        for (var i = n, u = {}, l = 0; l < i.length; l++)
          u["$" + i[l]] = !0;
        for (var o = 0; o < r.length; o++) {
          var s = u.hasOwnProperty("$" + r[o].value);
          r[o].selected !== s && (r[o].selected = s), s && a && (r[o].defaultSelected = !0);
        }
      } else {
        for (var c = xt(Fn(n)), v = null, d = 0; d < r.length; d++) {
          if (r[d].value === c) {
            r[d].selected = !0, a && (r[d].defaultSelected = !0);
            return;
          }
          v === null && !r[d].disabled && (v = r[d]);
        }
        v !== null && (v.selected = !0);
      }
    }
    function ms(e, t) {
      return X({}, t, {
        value: void 0
      });
    }
    function fp(e, t) {
      var n = e;
      iS(t), n._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !hs && (f("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), hs = !0);
    }
    function uS(e, t) {
      var n = e;
      n.multiple = !!t.multiple;
      var a = t.value;
      a != null ? tr(n, !!t.multiple, a, !1) : t.defaultValue != null && tr(n, !!t.multiple, t.defaultValue, !0);
    }
    function lS(e, t) {
      var n = e, a = n._wrapperState.wasMultiple;
      n._wrapperState.wasMultiple = !!t.multiple;
      var r = t.value;
      r != null ? tr(n, !!t.multiple, r, !1) : a !== !!t.multiple && (t.defaultValue != null ? tr(n, !!t.multiple, t.defaultValue, !0) : tr(n, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function oS(e, t) {
      var n = e, a = t.value;
      a != null && tr(n, !!t.multiple, a, !1);
    }
    var dp = !1;
    function ys(e, t) {
      var n = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var a = X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: xt(n._wrapperState.initialValue)
      });
      return a;
    }
    function vp(e, t) {
      var n = e;
      fs("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !dp && (f("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ri() || "A component"), dp = !0);
      var a = t.value;
      if (a == null) {
        var r = t.children, i = t.defaultValue;
        if (r != null) {
          f("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (i != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Pe(r)) {
              if (r.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              r = r[0];
            }
            i = r;
          }
        }
        i == null && (i = ""), a = i;
      }
      n._wrapperState = {
        initialValue: Fn(a)
      };
    }
    function pp(e, t) {
      var n = e, a = Fn(t.value), r = Fn(t.defaultValue);
      if (a != null) {
        var i = xt(a);
        i !== n.value && (n.value = i), t.defaultValue == null && n.defaultValue !== i && (n.defaultValue = i);
      }
      r != null && (n.defaultValue = xt(r));
    }
    function hp(e, t) {
      var n = e, a = n.textContent;
      a === n._wrapperState.initialValue && a !== "" && a !== null && (n.value = a);
    }
    function sS(e, t) {
      pp(e, t);
    }
    var dn = "http://www.w3.org/1999/xhtml", cS = "http://www.w3.org/1998/Math/MathML", gs = "http://www.w3.org/2000/svg";
    function bs(e) {
      switch (e) {
        case "svg":
          return gs;
        case "math":
          return cS;
        default:
          return dn;
      }
    }
    function Ss(e, t) {
      return e == null || e === dn ? bs(t) : e === gs && t === "foreignObject" ? dn : e;
    }
    var fS = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, a, r) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, a, r);
        });
      } : e;
    }, $u, mp = fS(function(e, t) {
      if (e.namespaceURI === gs && !("innerHTML" in e)) {
        $u = $u || document.createElement("div"), $u.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var n = $u.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; n.firstChild; )
          e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ot = 1, vn = 3, ye = 8, pn = 9, Cs = 11, qu = function(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === vn) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, dS = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ii = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function vS(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var pS = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ii).forEach(function(e) {
      pS.forEach(function(t) {
        ii[vS(t, e)] = ii[e];
      });
    });
    function Es(e, t, n) {
      var a = t == null || typeof t == "boolean" || t === "";
      return a ? "" : !n && typeof t == "number" && t !== 0 && !(ii.hasOwnProperty(e) && ii[e]) ? t + "px" : (Ob(t, e), ("" + t).trim());
    }
    var hS = /([A-Z])/g, mS = /^ms-/;
    function yS(e) {
      return e.replace(hS, "-$1").toLowerCase().replace(mS, "-ms-");
    }
    var yp = function() {
    };
    {
      var gS = /^(?:webkit|moz|o)[A-Z]/, bS = /^-ms-/, SS = /-(.)/g, gp = /;\s*$/, nr = {}, Rs = {}, bp = !1, Sp = !1, CS = function(e) {
        return e.replace(SS, function(t, n) {
          return n.toUpperCase();
        });
      }, ES = function(e) {
        nr.hasOwnProperty(e) && nr[e] || (nr[e] = !0, f(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          CS(e.replace(bS, "ms-"))
        ));
      }, RS = function(e) {
        nr.hasOwnProperty(e) && nr[e] || (nr[e] = !0, f("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, TS = function(e, t) {
        Rs.hasOwnProperty(t) && Rs[t] || (Rs[t] = !0, f(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(gp, "")));
      }, xS = function(e, t) {
        bp || (bp = !0, f("`NaN` is an invalid value for the `%s` css style property.", e));
      }, DS = function(e, t) {
        Sp || (Sp = !0, f("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      yp = function(e, t) {
        e.indexOf("-") > -1 ? ES(e) : gS.test(e) ? RS(e) : gp.test(t) && TS(e, t), typeof t == "number" && (isNaN(t) ? xS(e, t) : isFinite(t) || DS(e, t));
      };
    }
    var MS = yp;
    function OS(e) {
      {
        var t = "", n = "";
        for (var a in e)
          if (e.hasOwnProperty(a)) {
            var r = e[a];
            if (r != null) {
              var i = a.indexOf("--") === 0;
              t += n + (i ? a : yS(a)) + ":", t += Es(a, r, i), n = ";";
            }
          }
        return t || null;
      }
    }
    function Cp(e, t) {
      var n = e.style;
      for (var a in t)
        if (t.hasOwnProperty(a)) {
          var r = a.indexOf("--") === 0;
          r || MS(a, t[a]);
          var i = Es(a, t[a], r);
          a === "float" && (a = "cssFloat"), r ? n.setProperty(a, i) : n[a] = i;
        }
    }
    function US(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Ep(e) {
      var t = {};
      for (var n in e)
        for (var a = dS[n] || [n], r = 0; r < a.length; r++)
          t[a[r]] = n;
      return t;
    }
    function LS(e, t) {
      {
        if (!t)
          return;
        var n = Ep(e), a = Ep(t), r = {};
        for (var i in n) {
          var u = n[i], l = a[i];
          if (l && u !== l) {
            var o = u + "," + l;
            if (r[o])
              continue;
            r[o] = !0, f("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", US(e[u]) ? "Removing" : "Updating", u, l);
          }
        }
      }
    }
    var wS = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, AS = X({
      menuitem: !0
    }, wS), zS = "__html";
    function Ts(e, t) {
      if (t) {
        if (AS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(zS in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && f("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ma(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Gu = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Rp = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ar = {}, NS = new RegExp("^(aria)-[" + Pr + "]*$"), _S = new RegExp("^(aria)[A-Z][" + Pr + "]*$");
    function HS(e, t) {
      {
        if (fa.call(ar, t) && ar[t])
          return !0;
        if (_S.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), a = Rp.hasOwnProperty(n) ? n : null;
          if (a == null)
            return f("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ar[t] = !0, !0;
          if (t !== a)
            return f("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, a), ar[t] = !0, !0;
        }
        if (NS.test(t)) {
          var r = t.toLowerCase(), i = Rp.hasOwnProperty(r) ? r : null;
          if (i == null)
            return ar[t] = !0, !1;
          if (t !== i)
            return f("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, i), ar[t] = !0, !0;
        }
      }
      return !0;
    }
    function kS(e, t) {
      {
        var n = [];
        for (var a in t) {
          var r = HS(e, a);
          r || n.push(a);
        }
        var i = n.map(function(u) {
          return "`" + u + "`";
        }).join(", ");
        n.length === 1 ? f("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e) : n.length > 1 && f("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", i, e);
      }
    }
    function FS(e, t) {
      ma(e, t) || kS(e, t);
    }
    var Tp = !1;
    function VS(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Tp && (Tp = !0, e === "select" && t.multiple ? f("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : f("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var xp = function() {
    };
    {
      var et = {}, Dp = /^on./, jS = /^on[^A-Z]/, BS = new RegExp("^(aria)-[" + Pr + "]*$"), YS = new RegExp("^(aria)[A-Z][" + Pr + "]*$");
      xp = function(e, t, n, a) {
        if (fa.call(et, t) && et[t])
          return !0;
        var r = t.toLowerCase();
        if (r === "onfocusin" || r === "onfocusout")
          return f("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), et[t] = !0, !0;
        if (a != null) {
          var i = a.registrationNameDependencies, u = a.possibleRegistrationNames;
          if (i.hasOwnProperty(t))
            return !0;
          var l = u.hasOwnProperty(r) ? u[r] : null;
          if (l != null)
            return f("Invalid event handler property `%s`. Did you mean `%s`?", t, l), et[t] = !0, !0;
          if (Dp.test(t))
            return f("Unknown event handler property `%s`. It will be ignored.", t), et[t] = !0, !0;
        } else if (Dp.test(t))
          return jS.test(t) && f("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), et[t] = !0, !0;
        if (BS.test(t) || YS.test(t))
          return !0;
        if (r === "innerhtml")
          return f("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), et[t] = !0, !0;
        if (r === "aria")
          return f("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), et[t] = !0, !0;
        if (r === "is" && n !== null && n !== void 0 && typeof n != "string")
          return f("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), et[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return f("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), et[t] = !0, !0;
        var o = Wo(t), s = o !== null && o.type === ku;
        if (Gu.hasOwnProperty(r)) {
          var c = Gu[r];
          if (c !== t)
            return f("Invalid DOM property `%s`. Did you mean `%s`?", t, c), et[t] = !0, !0;
        } else if (!s && t !== r)
          return f("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, r), et[t] = !0, !0;
        return typeof n == "boolean" && Ko(t, n, o, !1) ? (n ? f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : f('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), et[t] = !0, !0) : s ? !0 : Ko(t, n, o, !1) ? (et[t] = !0, !1) : ((n === "false" || n === "true") && o !== null && o.type === Hn && (f("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), et[t] = !0), !0);
      };
    }
    var $S = function(e, t, n) {
      {
        var a = [];
        for (var r in t) {
          var i = xp(e, r, t[r], n);
          i || a.push(r);
        }
        var u = a.map(function(l) {
          return "`" + l + "`";
        }).join(", ");
        a.length === 1 ? f("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e) : a.length > 1 && f("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", u, e);
      }
    };
    function qS(e, t, n) {
      ma(e, t) || $S(e, t, n);
    }
    var Mp = 1, xs = 2, ui = 4, GS = Mp | xs | ui, li = null;
    function QS(e) {
      li !== null && f("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), li = e;
    }
    function XS() {
      li === null && f("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), li = null;
    }
    function ZS(e) {
      return e === li;
    }
    function Ds(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === vn ? t.parentNode : t;
    }
    var Ms = null, rr = null, ir = null;
    function Op(e) {
      var t = Qn(e);
      if (t) {
        if (typeof Ms != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var n = t.stateNode;
        if (n) {
          var a = Ol(n);
          Ms(t.stateNode, t.type, a);
        }
      }
    }
    function JS(e) {
      Ms = e;
    }
    function Up(e) {
      rr ? ir ? ir.push(e) : ir = [e] : rr = e;
    }
    function KS() {
      return rr !== null || ir !== null;
    }
    function Lp() {
      if (rr) {
        var e = rr, t = ir;
        if (rr = null, ir = null, Op(e), t)
          for (var n = 0; n < t.length; n++)
            Op(t[n]);
      }
    }
    var wp = function(e, t) {
      return e(t);
    }, Ap = function() {
    }, Os = !1;
    function WS() {
      var e = KS();
      e && (Ap(), Lp());
    }
    function zp(e, t, n) {
      if (Os)
        return e(t, n);
      Os = !0;
      try {
        return wp(e, t, n);
      } finally {
        Os = !1, WS();
      }
    }
    function IS(e, t, n) {
      wp = e, Ap = n;
    }
    function PS(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function eC(e, t, n) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(n.disabled && PS(t));
        default:
          return !1;
      }
    }
    function oi(e, t) {
      var n = e.stateNode;
      if (n === null)
        return null;
      var a = Ol(n);
      if (a === null)
        return null;
      var r = a[t];
      if (eC(t, e.type, a))
        return null;
      if (r && typeof r != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof r + "` type.");
      return r;
    }
    var Us = !1;
    if (_t)
      try {
        var si = {};
        Object.defineProperty(si, "passive", {
          get: function() {
            Us = !0;
          }
        }), window.addEventListener("test", si, si), window.removeEventListener("test", si, si);
      } catch {
        Us = !1;
      }
    function Np(e, t, n, a, r, i, u, l, o) {
      var s = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, s);
      } catch (c) {
        this.onError(c);
      }
    }
    var _p = Np;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Ls = document.createElement("react");
      _p = function(t, n, a, r, i, u, l, o, s) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var c = document.createEvent("Event"), v = !1, d = !0, m = window.event, y = Object.getOwnPropertyDescriptor(window, "event");
        function g() {
          Ls.removeEventListener(b, w, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = m);
        }
        var T = Array.prototype.slice.call(arguments, 3);
        function w() {
          v = !0, g(), n.apply(a, T), d = !1;
        }
        var L, Q = !1, $ = !1;
        function p(h) {
          if (L = h.error, Q = !0, L === null && h.colno === 0 && h.lineno === 0 && ($ = !0), h.defaultPrevented && L != null && typeof L == "object")
            try {
              L._suppressLogging = !0;
            } catch {
            }
        }
        var b = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", p), Ls.addEventListener(b, w, !1), c.initEvent(b, !1, !1), Ls.dispatchEvent(c), y && Object.defineProperty(window, "event", y), v && d && (Q ? $ && (L = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : L = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(L)), window.removeEventListener("error", p), !v)
          return g(), Np.apply(this, arguments);
      };
    }
    var tC = _p, ur = !1, Qu = null, Xu = !1, ws = null, nC = {
      onError: function(e) {
        ur = !0, Qu = e;
      }
    };
    function As(e, t, n, a, r, i, u, l, o) {
      ur = !1, Qu = null, tC.apply(nC, arguments);
    }
    function aC(e, t, n, a, r, i, u, l, o) {
      if (As.apply(this, arguments), ur) {
        var s = zs();
        Xu || (Xu = !0, ws = s);
      }
    }
    function rC() {
      if (Xu) {
        var e = ws;
        throw Xu = !1, ws = null, e;
      }
    }
    function iC() {
      return ur;
    }
    function zs() {
      if (ur) {
        var e = Qu;
        return ur = !1, Qu = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function lr(e) {
      return e._reactInternals;
    }
    function uC(e) {
      return e._reactInternals !== void 0;
    }
    function lC(e, t) {
      e._reactInternals = t;
    }
    var z = (
      /*                      */
      0
    ), or = (
      /*                */
      1
    ), ge = (
      /*                    */
      2
    ), Z = (
      /*                       */
      4
    ), ya = (
      /*                */
      16
    ), ci = (
      /*                 */
      32
    ), Ns = (
      /*                     */
      64
    ), W = (
      /*                   */
      128
    ), hn = (
      /*            */
      256
    ), Vn = (
      /*                          */
      512
    ), ga = (
      /*                     */
      1024
    ), Ht = (
      /*                      */
      2048
    ), mn = (
      /*                    */
      4096
    ), ba = (
      /*                   */
      8192
    ), Zu = (
      /*             */
      16384
    ), oC = Ht | Z | Ns | Vn | ga | Zu, sC = (
      /*               */
      32767
    ), fi = (
      /*                   */
      32768
    ), tt = (
      /*                */
      65536
    ), _s = (
      /* */
      131072
    ), Hp = (
      /*                       */
      1048576
    ), Hs = (
      /*                    */
      2097152
    ), Sa = (
      /*                 */
      4194304
    ), ks = (
      /*                */
      8388608
    ), yn = (
      /*               */
      16777216
    ), Ju = (
      /*              */
      33554432
    ), Fs = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Z | ga | 0
    ), Vs = ge | Z | ya | ci | Vn | mn | ba, di = Z | Ns | Vn | ba, sr = Ht | ya, gn = Sa | ks | Hs, cC = Ae.ReactCurrentOwner;
    function Ca(e) {
      var t = e, n = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var a = t;
        do
          t = a, (t.flags & (ge | mn)) !== z && (n = t.return), a = t.return;
        while (a);
      }
      return t.tag === Y ? n : null;
    }
    function kp(e) {
      if (e.tag === ue) {
        var t = e.memoizedState;
        if (t === null) {
          var n = e.alternate;
          n !== null && (t = n.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Fp(e) {
      return e.tag === Y ? e.stateNode.containerInfo : null;
    }
    function fC(e) {
      return Ca(e) === e;
    }
    function dC(e) {
      {
        var t = cC.current;
        if (t !== null && t.tag === B) {
          var n = t, a = n.stateNode;
          a._warnedAboutRefsInRender || f("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", V(n) || "A component"), a._warnedAboutRefsInRender = !0;
        }
      }
      var r = lr(e);
      return r ? Ca(r) === r : !1;
    }
    function Vp(e) {
      if (Ca(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function jp(e) {
      var t = e.alternate;
      if (!t) {
        var n = Ca(e);
        if (n === null)
          throw new Error("Unable to find node on an unmounted component.");
        return n !== e ? null : e;
      }
      for (var a = e, r = t; ; ) {
        var i = a.return;
        if (i === null)
          break;
        var u = i.alternate;
        if (u === null) {
          var l = i.return;
          if (l !== null) {
            a = r = l;
            continue;
          }
          break;
        }
        if (i.child === u.child) {
          for (var o = i.child; o; ) {
            if (o === a)
              return Vp(i), e;
            if (o === r)
              return Vp(i), t;
            o = o.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== r.return)
          a = i, r = u;
        else {
          for (var s = !1, c = i.child; c; ) {
            if (c === a) {
              s = !0, a = i, r = u;
              break;
            }
            if (c === r) {
              s = !0, r = i, a = u;
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            for (c = u.child; c; ) {
              if (c === a) {
                s = !0, a = u, r = i;
                break;
              }
              if (c === r) {
                s = !0, r = u, a = i;
                break;
              }
              c = c.sibling;
            }
            if (!s)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (a.alternate !== r)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (a.tag !== Y)
        throw new Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Bp(e) {
      var t = jp(e);
      return t !== null ? Yp(t) : null;
    }
    function Yp(e) {
      if (e.tag === _ || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        var n = Yp(t);
        if (n !== null)
          return n;
        t = t.sibling;
      }
      return null;
    }
    function vC(e) {
      var t = jp(e);
      return t !== null ? $p(t) : null;
    }
    function $p(e) {
      if (e.tag === _ || e.tag === ce)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== se) {
          var n = $p(t);
          if (n !== null)
            return n;
        }
        t = t.sibling;
      }
      return null;
    }
    var qp = $e.unstable_scheduleCallback, pC = $e.unstable_cancelCallback, hC = $e.unstable_shouldYield, mC = $e.unstable_requestPaint, Oe = $e.unstable_now, yC = $e.unstable_getCurrentPriorityLevel, Ku = $e.unstable_ImmediatePriority, js = $e.unstable_UserBlockingPriority, Ea = $e.unstable_NormalPriority, gC = $e.unstable_LowPriority, Bs = $e.unstable_IdlePriority, bC = $e.unstable_yieldValue, SC = $e.unstable_setDisableYieldValue, cr = null, qe = null, D = null, Wt = !1, kt = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function CC(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return f("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ev && (e = X({}, e, {
          getLaneLabelMap: MC,
          injectProfilingHooks: DC
        })), cr = t.inject(e), qe = t;
      } catch (n) {
        f("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function EC(e, t) {
      if (qe && typeof qe.onScheduleFiberRoot == "function")
        try {
          qe.onScheduleFiberRoot(cr, e, t);
        } catch (n) {
          Wt || (Wt = !0, f("React instrumentation encountered an error: %s", n));
        }
    }
    function RC(e, t) {
      if (qe && typeof qe.onCommitFiberRoot == "function")
        try {
          var n = (e.current.flags & W) === W;
          if (Xo) {
            var a;
            switch (t) {
              case bt:
                a = Ku;
                break;
              case Sn:
                a = js;
                break;
              case Cn:
                a = Ea;
                break;
              case al:
                a = Bs;
                break;
              default:
                a = Ea;
                break;
            }
            qe.onCommitFiberRoot(cr, e, a, n);
          }
        } catch (r) {
          Wt || (Wt = !0, f("React instrumentation encountered an error: %s", r));
        }
    }
    function TC(e) {
      if (qe && typeof qe.onPostCommitFiberRoot == "function")
        try {
          qe.onPostCommitFiberRoot(cr, e);
        } catch (t) {
          Wt || (Wt = !0, f("React instrumentation encountered an error: %s", t));
        }
    }
    function xC(e) {
      if (qe && typeof qe.onCommitFiberUnmount == "function")
        try {
          qe.onCommitFiberUnmount(cr, e);
        } catch (t) {
          Wt || (Wt = !0, f("React instrumentation encountered an error: %s", t));
        }
    }
    function Ue(e) {
      if (typeof bC == "function" && (SC(e), Sb(e)), qe && typeof qe.setStrictMode == "function")
        try {
          qe.setStrictMode(cr, e);
        } catch (t) {
          Wt || (Wt = !0, f("React instrumentation encountered an error: %s", t));
        }
    }
    function DC(e) {
      D = e;
    }
    function MC() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < $s; n++) {
          var a = XC(t);
          e.set(t, a), t *= 2;
        }
        return e;
      }
    }
    function OC(e) {
      D !== null && typeof D.markCommitStarted == "function" && D.markCommitStarted(e);
    }
    function Gp() {
      D !== null && typeof D.markCommitStopped == "function" && D.markCommitStopped();
    }
    function vi(e) {
      D !== null && typeof D.markComponentRenderStarted == "function" && D.markComponentRenderStarted(e);
    }
    function fr() {
      D !== null && typeof D.markComponentRenderStopped == "function" && D.markComponentRenderStopped();
    }
    function UC(e) {
      D !== null && typeof D.markComponentPassiveEffectMountStarted == "function" && D.markComponentPassiveEffectMountStarted(e);
    }
    function LC() {
      D !== null && typeof D.markComponentPassiveEffectMountStopped == "function" && D.markComponentPassiveEffectMountStopped();
    }
    function wC(e) {
      D !== null && typeof D.markComponentPassiveEffectUnmountStarted == "function" && D.markComponentPassiveEffectUnmountStarted(e);
    }
    function AC() {
      D !== null && typeof D.markComponentPassiveEffectUnmountStopped == "function" && D.markComponentPassiveEffectUnmountStopped();
    }
    function zC(e) {
      D !== null && typeof D.markComponentLayoutEffectMountStarted == "function" && D.markComponentLayoutEffectMountStarted(e);
    }
    function NC() {
      D !== null && typeof D.markComponentLayoutEffectMountStopped == "function" && D.markComponentLayoutEffectMountStopped();
    }
    function Qp(e) {
      D !== null && typeof D.markComponentLayoutEffectUnmountStarted == "function" && D.markComponentLayoutEffectUnmountStarted(e);
    }
    function Xp() {
      D !== null && typeof D.markComponentLayoutEffectUnmountStopped == "function" && D.markComponentLayoutEffectUnmountStopped();
    }
    function _C(e, t, n) {
      D !== null && typeof D.markComponentErrored == "function" && D.markComponentErrored(e, t, n);
    }
    function HC(e, t, n) {
      D !== null && typeof D.markComponentSuspended == "function" && D.markComponentSuspended(e, t, n);
    }
    function kC(e) {
      D !== null && typeof D.markLayoutEffectsStarted == "function" && D.markLayoutEffectsStarted(e);
    }
    function FC() {
      D !== null && typeof D.markLayoutEffectsStopped == "function" && D.markLayoutEffectsStopped();
    }
    function VC(e) {
      D !== null && typeof D.markPassiveEffectsStarted == "function" && D.markPassiveEffectsStarted(e);
    }
    function jC() {
      D !== null && typeof D.markPassiveEffectsStopped == "function" && D.markPassiveEffectsStopped();
    }
    function Zp(e) {
      D !== null && typeof D.markRenderStarted == "function" && D.markRenderStarted(e);
    }
    function BC() {
      D !== null && typeof D.markRenderYielded == "function" && D.markRenderYielded();
    }
    function Jp() {
      D !== null && typeof D.markRenderStopped == "function" && D.markRenderStopped();
    }
    function YC(e) {
      D !== null && typeof D.markRenderScheduled == "function" && D.markRenderScheduled(e);
    }
    function $C(e, t) {
      D !== null && typeof D.markForceUpdateScheduled == "function" && D.markForceUpdateScheduled(e, t);
    }
    function Ys(e, t) {
      D !== null && typeof D.markStateUpdateScheduled == "function" && D.markStateUpdateScheduled(e, t);
    }
    var A = (
      /*                         */
      0
    ), q = (
      /*                 */
      1
    ), P = (
      /*                    */
      2
    ), ve = (
      /*               */
      8
    ), It = (
      /*              */
      16
    ), Kp = Math.clz32 ? Math.clz32 : QC, qC = Math.log, GC = Math.LN2;
    function QC(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (qC(t) / GC | 0) | 0;
    }
    var $s = 31, C = (
      /*                        */
      0
    ), Le = (
      /*                          */
      0
    ), H = (
      /*                        */
      1
    ), dr = (
      /*    */
      2
    ), bn = (
      /*             */
      4
    ), Ra = (
      /*            */
      8
    ), Pt = (
      /*                     */
      16
    ), pi = (
      /*                */
      32
    ), vr = (
      /*                       */
      4194240
    ), hi = (
      /*                        */
      64
    ), qs = (
      /*                        */
      128
    ), Gs = (
      /*                        */
      256
    ), Qs = (
      /*                        */
      512
    ), Xs = (
      /*                        */
      1024
    ), Zs = (
      /*                        */
      2048
    ), Js = (
      /*                        */
      4096
    ), Ks = (
      /*                        */
      8192
    ), Ws = (
      /*                        */
      16384
    ), Is = (
      /*                       */
      32768
    ), Ps = (
      /*                       */
      65536
    ), ec = (
      /*                       */
      131072
    ), tc = (
      /*                       */
      262144
    ), nc = (
      /*                       */
      524288
    ), ac = (
      /*                       */
      1048576
    ), rc = (
      /*                       */
      2097152
    ), Wu = (
      /*                            */
      130023424
    ), pr = (
      /*                             */
      4194304
    ), ic = (
      /*                             */
      8388608
    ), uc = (
      /*                             */
      16777216
    ), lc = (
      /*                             */
      33554432
    ), oc = (
      /*                             */
      67108864
    ), Wp = pr, mi = (
      /*          */
      134217728
    ), Ip = (
      /*                          */
      268435455
    ), yi = (
      /*               */
      268435456
    ), Ta = (
      /*                        */
      536870912
    ), yt = (
      /*                   */
      1073741824
    );
    function XC(e) {
      {
        if (e & H)
          return "Sync";
        if (e & dr)
          return "InputContinuousHydration";
        if (e & bn)
          return "InputContinuous";
        if (e & Ra)
          return "DefaultHydration";
        if (e & Pt)
          return "Default";
        if (e & pi)
          return "TransitionHydration";
        if (e & vr)
          return "Transition";
        if (e & Wu)
          return "Retry";
        if (e & mi)
          return "SelectiveHydration";
        if (e & yi)
          return "IdleHydration";
        if (e & Ta)
          return "Idle";
        if (e & yt)
          return "Offscreen";
      }
    }
    var oe = -1, Iu = hi, Pu = pr;
    function gi(e) {
      switch (xa(e)) {
        case H:
          return H;
        case dr:
          return dr;
        case bn:
          return bn;
        case Ra:
          return Ra;
        case Pt:
          return Pt;
        case pi:
          return pi;
        case hi:
        case qs:
        case Gs:
        case Qs:
        case Xs:
        case Zs:
        case Js:
        case Ks:
        case Ws:
        case Is:
        case Ps:
        case ec:
        case tc:
        case nc:
        case ac:
        case rc:
          return e & vr;
        case pr:
        case ic:
        case uc:
        case lc:
        case oc:
          return e & Wu;
        case mi:
          return mi;
        case yi:
          return yi;
        case Ta:
          return Ta;
        case yt:
          return yt;
        default:
          return f("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function el(e, t) {
      var n = e.pendingLanes;
      if (n === C)
        return C;
      var a = C, r = e.suspendedLanes, i = e.pingedLanes, u = n & Ip;
      if (u !== C) {
        var l = u & ~r;
        if (l !== C)
          a = gi(l);
        else {
          var o = u & i;
          o !== C && (a = gi(o));
        }
      } else {
        var s = n & ~r;
        s !== C ? a = gi(s) : i !== C && (a = gi(i));
      }
      if (a === C)
        return C;
      if (t !== C && t !== a && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & r) === C) {
        var c = xa(a), v = xa(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          c >= v || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          c === Pt && (v & vr) !== C
        )
          return t;
      }
      (a & bn) !== C && (a |= n & Pt);
      var d = e.entangledLanes;
      if (d !== C)
        for (var m = e.entanglements, y = a & d; y > 0; ) {
          var g = Da(y), T = 1 << g;
          a |= m[g], y &= ~T;
        }
      return a;
    }
    function ZC(e, t) {
      for (var n = e.eventTimes, a = oe; t > 0; ) {
        var r = Da(t), i = 1 << r, u = n[r];
        u > a && (a = u), t &= ~i;
      }
      return a;
    }
    function JC(e, t) {
      switch (e) {
        case H:
        case dr:
        case bn:
          return t + 250;
        case Ra:
        case Pt:
        case pi:
        case hi:
        case qs:
        case Gs:
        case Qs:
        case Xs:
        case Zs:
        case Js:
        case Ks:
        case Ws:
        case Is:
        case Ps:
        case ec:
        case tc:
        case nc:
        case ac:
        case rc:
          return t + 5e3;
        case pr:
        case ic:
        case uc:
        case lc:
        case oc:
          return oe;
        case mi:
        case yi:
        case Ta:
        case yt:
          return oe;
        default:
          return f("Should have found matching lanes. This is a bug in React."), oe;
      }
    }
    function KC(e, t) {
      for (var n = e.pendingLanes, a = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, u = n; u > 0; ) {
        var l = Da(u), o = 1 << l, s = i[l];
        s === oe ? ((o & a) === C || (o & r) !== C) && (i[l] = JC(o, t)) : s <= t && (e.expiredLanes |= o), u &= ~o;
      }
    }
    function WC(e) {
      return gi(e.pendingLanes);
    }
    function sc(e) {
      var t = e.pendingLanes & ~yt;
      return t !== C ? t : t & yt ? yt : C;
    }
    function IC(e) {
      return (e & H) !== C;
    }
    function cc(e) {
      return (e & Ip) !== C;
    }
    function Pp(e) {
      return (e & Wu) === e;
    }
    function PC(e) {
      var t = H | bn | Pt;
      return (e & t) === C;
    }
    function eE(e) {
      return (e & vr) === e;
    }
    function tl(e, t) {
      var n = dr | bn | Ra | Pt;
      return (t & n) !== C;
    }
    function tE(e, t) {
      return (t & e.expiredLanes) !== C;
    }
    function eh(e) {
      return (e & vr) !== C;
    }
    function th() {
      var e = Iu;
      return Iu <<= 1, (Iu & vr) === C && (Iu = hi), e;
    }
    function nE() {
      var e = Pu;
      return Pu <<= 1, (Pu & Wu) === C && (Pu = pr), e;
    }
    function xa(e) {
      return e & -e;
    }
    function bi(e) {
      return xa(e);
    }
    function Da(e) {
      return 31 - Kp(e);
    }
    function fc(e) {
      return Da(e);
    }
    function gt(e, t) {
      return (e & t) !== C;
    }
    function hr(e, t) {
      return (e & t) === t;
    }
    function j(e, t) {
      return e | t;
    }
    function nl(e, t) {
      return e & ~t;
    }
    function nh(e, t) {
      return e & t;
    }
    function xO(e) {
      return e;
    }
    function aE(e, t) {
      return e !== Le && e < t ? e : t;
    }
    function dc(e) {
      for (var t = [], n = 0; n < $s; n++)
        t.push(e);
      return t;
    }
    function Si(e, t, n) {
      e.pendingLanes |= t, t !== Ta && (e.suspendedLanes = C, e.pingedLanes = C);
      var a = e.eventTimes, r = fc(t);
      a[r] = n;
    }
    function rE(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var n = e.expirationTimes, a = t; a > 0; ) {
        var r = Da(a), i = 1 << r;
        n[r] = oe, a &= ~i;
      }
    }
    function ah(e, t, n) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function iE(e, t) {
      var n = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = C, e.pingedLanes = C, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var a = e.entanglements, r = e.eventTimes, i = e.expirationTimes, u = n; u > 0; ) {
        var l = Da(u), o = 1 << l;
        a[l] = C, r[l] = oe, i[l] = oe, u &= ~o;
      }
    }
    function vc(e, t) {
      for (var n = e.entangledLanes |= t, a = e.entanglements, r = n; r; ) {
        var i = Da(r), u = 1 << i;
        // Is this one of the newly entangled lanes?
        u & t | // Is this lane transitively entangled with the newly entangled lanes?
        a[i] & t && (a[i] |= t), r &= ~u;
      }
    }
    function uE(e, t) {
      var n = xa(t), a;
      switch (n) {
        case bn:
          a = dr;
          break;
        case Pt:
          a = Ra;
          break;
        case hi:
        case qs:
        case Gs:
        case Qs:
        case Xs:
        case Zs:
        case Js:
        case Ks:
        case Ws:
        case Is:
        case Ps:
        case ec:
        case tc:
        case nc:
        case ac:
        case rc:
        case pr:
        case ic:
        case uc:
        case lc:
        case oc:
          a = pi;
          break;
        case Ta:
          a = yi;
          break;
        default:
          a = Le;
          break;
      }
      return (a & (e.suspendedLanes | t)) !== Le ? Le : a;
    }
    function rh(e, t, n) {
      if (kt)
        for (var a = e.pendingUpdatersLaneMap; n > 0; ) {
          var r = fc(n), i = 1 << r, u = a[r];
          u.add(t), n &= ~i;
        }
    }
    function ih(e, t) {
      if (kt)
        for (var n = e.pendingUpdatersLaneMap, a = e.memoizedUpdaters; t > 0; ) {
          var r = fc(t), i = 1 << r, u = n[r];
          u.size > 0 && (u.forEach(function(l) {
            var o = l.alternate;
            (o === null || !a.has(o)) && a.add(l);
          }), u.clear()), t &= ~i;
        }
    }
    function uh(e, t) {
      return null;
    }
    var bt = H, Sn = bn, Cn = Pt, al = Ta, Ci = Le;
    function Ft() {
      return Ci;
    }
    function we(e) {
      Ci = e;
    }
    function lE(e, t) {
      var n = Ci;
      try {
        return Ci = e, t();
      } finally {
        Ci = n;
      }
    }
    function oE(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function sE(e, t) {
      return e > t ? e : t;
    }
    function pc(e, t) {
      return e !== 0 && e < t;
    }
    function lh(e) {
      var t = xa(e);
      return pc(bt, t) ? pc(Sn, t) ? cc(t) ? Cn : al : Sn : bt;
    }
    function rl(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var oh;
    function cE(e) {
      oh = e;
    }
    function fE(e) {
      oh(e);
    }
    var hc;
    function dE(e) {
      hc = e;
    }
    var sh;
    function vE(e) {
      sh = e;
    }
    var ch;
    function pE(e) {
      ch = e;
    }
    var fh;
    function hE(e) {
      fh = e;
    }
    var mc = !1, il = [], jn = null, Bn = null, Yn = null, Ei = /* @__PURE__ */ new Map(), Ri = /* @__PURE__ */ new Map(), $n = [], mE = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function yE(e) {
      return mE.indexOf(e) > -1;
    }
    function gE(e, t, n, a, r) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: r,
        targetContainers: [a]
      };
    }
    function dh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          jn = null;
          break;
        case "dragenter":
        case "dragleave":
          Bn = null;
          break;
        case "mouseover":
        case "mouseout":
          Yn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var n = t.pointerId;
          Ei.delete(n);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var a = t.pointerId;
          Ri.delete(a);
          break;
        }
      }
    }
    function Ti(e, t, n, a, r, i) {
      if (e === null || e.nativeEvent !== i) {
        var u = gE(t, n, a, r, i);
        if (t !== null) {
          var l = Qn(t);
          l !== null && hc(l);
        }
        return u;
      }
      e.eventSystemFlags |= a;
      var o = e.targetContainers;
      return r !== null && o.indexOf(r) === -1 && o.push(r), e;
    }
    function bE(e, t, n, a, r) {
      switch (t) {
        case "focusin": {
          var i = r;
          return jn = Ti(jn, e, t, n, a, i), !0;
        }
        case "dragenter": {
          var u = r;
          return Bn = Ti(Bn, e, t, n, a, u), !0;
        }
        case "mouseover": {
          var l = r;
          return Yn = Ti(Yn, e, t, n, a, l), !0;
        }
        case "pointerover": {
          var o = r, s = o.pointerId;
          return Ei.set(s, Ti(Ei.get(s) || null, e, t, n, a, o)), !0;
        }
        case "gotpointercapture": {
          var c = r, v = c.pointerId;
          return Ri.set(v, Ti(Ri.get(v) || null, e, t, n, a, c)), !0;
        }
      }
      return !1;
    }
    function vh(e) {
      var t = Ua(e.target);
      if (t !== null) {
        var n = Ca(t);
        if (n !== null) {
          var a = n.tag;
          if (a === ue) {
            var r = kp(n);
            if (r !== null) {
              e.blockedOn = r, fh(e.priority, function() {
                sh(n);
              });
              return;
            }
          } else if (a === Y) {
            var i = n.stateNode;
            if (rl(i)) {
              e.blockedOn = Fp(n);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function SE(e) {
      for (var t = ch(), n = {
        blockedOn: null,
        target: e,
        priority: t
      }, a = 0; a < $n.length && pc(t, $n[a].priority); a++)
        ;
      $n.splice(a, 0, n), a === 0 && vh(n);
    }
    function ul(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var n = t[0], a = bc(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
        if (a === null) {
          var r = e.nativeEvent, i = new r.constructor(r.type, r);
          QS(i), r.target.dispatchEvent(i), XS();
        } else {
          var u = Qn(a);
          return u !== null && hc(u), e.blockedOn = a, !1;
        }
        t.shift();
      }
      return !0;
    }
    function ph(e, t, n) {
      ul(e) && n.delete(t);
    }
    function CE() {
      mc = !1, jn !== null && ul(jn) && (jn = null), Bn !== null && ul(Bn) && (Bn = null), Yn !== null && ul(Yn) && (Yn = null), Ei.forEach(ph), Ri.forEach(ph);
    }
    function xi(e, t) {
      e.blockedOn === t && (e.blockedOn = null, mc || (mc = !0, $e.unstable_scheduleCallback($e.unstable_NormalPriority, CE)));
    }
    function Di(e) {
      if (il.length > 0) {
        xi(il[0], e);
        for (var t = 1; t < il.length; t++) {
          var n = il[t];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      jn !== null && xi(jn, e), Bn !== null && xi(Bn, e), Yn !== null && xi(Yn, e);
      var a = function(l) {
        return xi(l, e);
      };
      Ei.forEach(a), Ri.forEach(a);
      for (var r = 0; r < $n.length; r++) {
        var i = $n[r];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; $n.length > 0; ) {
        var u = $n[0];
        if (u.blockedOn !== null)
          break;
        vh(u), u.blockedOn === null && $n.shift();
      }
    }
    var mr = Ae.ReactCurrentBatchConfig, yc = !0;
    function hh(e) {
      yc = !!e;
    }
    function EE() {
      return yc;
    }
    function RE(e, t, n) {
      var a = mh(t), r;
      switch (a) {
        case bt:
          r = TE;
          break;
        case Sn:
          r = xE;
          break;
        case Cn:
        default:
          r = gc;
          break;
      }
      return r.bind(null, t, n, e);
    }
    function TE(e, t, n, a) {
      var r = Ft(), i = mr.transition;
      mr.transition = null;
      try {
        we(bt), gc(e, t, n, a);
      } finally {
        we(r), mr.transition = i;
      }
    }
    function xE(e, t, n, a) {
      var r = Ft(), i = mr.transition;
      mr.transition = null;
      try {
        we(Sn), gc(e, t, n, a);
      } finally {
        we(r), mr.transition = i;
      }
    }
    function gc(e, t, n, a) {
      yc && DE(e, t, n, a);
    }
    function DE(e, t, n, a) {
      var r = bc(e, t, n, a);
      if (r === null) {
        zc(e, t, a, ll, n), dh(e, a);
        return;
      }
      if (bE(r, e, t, n, a)) {
        a.stopPropagation();
        return;
      }
      if (dh(e, a), t & ui && yE(e)) {
        for (; r !== null; ) {
          var i = Qn(r);
          i !== null && fE(i);
          var u = bc(e, t, n, a);
          if (u === null && zc(e, t, a, ll, n), u === r)
            break;
          r = u;
        }
        r !== null && a.stopPropagation();
        return;
      }
      zc(e, t, a, null, n);
    }
    var ll = null;
    function bc(e, t, n, a) {
      ll = null;
      var r = Ds(a), i = Ua(r);
      if (i !== null) {
        var u = Ca(i);
        if (u === null)
          i = null;
        else {
          var l = u.tag;
          if (l === ue) {
            var o = kp(u);
            if (o !== null)
              return o;
            i = null;
          } else if (l === Y) {
            var s = u.stateNode;
            if (rl(s))
              return Fp(u);
            i = null;
          } else u !== i && (i = null);
        }
      }
      return ll = i, null;
    }
    function mh(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return bt;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Sn;
        case "message": {
          var t = yC();
          switch (t) {
            case Ku:
              return bt;
            case js:
              return Sn;
            case Ea:
            case gC:
              return Cn;
            case Bs:
              return al;
            default:
              return Cn;
          }
        }
        default:
          return Cn;
      }
    }
    function ME(e, t, n) {
      return e.addEventListener(t, n, !1), n;
    }
    function OE(e, t, n) {
      return e.addEventListener(t, n, !0), n;
    }
    function UE(e, t, n, a) {
      return e.addEventListener(t, n, {
        capture: !0,
        passive: a
      }), n;
    }
    function LE(e, t, n, a) {
      return e.addEventListener(t, n, {
        passive: a
      }), n;
    }
    var Mi = null, Sc = null, Oi = null;
    function wE(e) {
      return Mi = e, Sc = gh(), !0;
    }
    function AE() {
      Mi = null, Sc = null, Oi = null;
    }
    function yh() {
      if (Oi)
        return Oi;
      var e, t = Sc, n = t.length, a, r = gh(), i = r.length;
      for (e = 0; e < n && t[e] === r[e]; e++)
        ;
      var u = n - e;
      for (a = 1; a <= u && t[n - a] === r[i - a]; a++)
        ;
      var l = a > 1 ? 1 - a : void 0;
      return Oi = r.slice(e, l), Oi;
    }
    function gh() {
      return "value" in Mi ? Mi.value : Mi.textContent;
    }
    function ol(e) {
      var t, n = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function sl() {
      return !0;
    }
    function bh() {
      return !1;
    }
    function St(e) {
      function t(n, a, r, i, u) {
        this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = i, this.target = u, this.currentTarget = null;
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var o = e[l];
            o ? this[l] = o(i) : this[l] = i[l];
          }
        var s = i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1;
        return s ? this.isDefaultPrevented = sl : this.isDefaultPrevented = bh, this.isPropagationStopped = bh, this;
      }
      return X(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sl);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sl);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: sl
      }), t;
    }
    var yr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Cc = St(yr), Ui = X({}, yr, {
      view: 0,
      detail: 0
    }), zE = St(Ui), Ec, Rc, Li;
    function NE(e) {
      e !== Li && (Li && e.type === "mousemove" ? (Ec = e.screenX - Li.screenX, Rc = e.screenY - Li.screenY) : (Ec = 0, Rc = 0), Li = e);
    }
    var cl = X({}, Ui, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: xc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (NE(e), Ec);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Rc;
      }
    }), Sh = St(cl), _E = X({}, cl, {
      dataTransfer: 0
    }), HE = St(_E), kE = X({}, Ui, {
      relatedTarget: 0
    }), Tc = St(kE), FE = X({}, yr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), VE = St(FE), jE = X({}, yr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), BE = St(jE), YE = X({}, yr, {
      data: 0
    }), Ch = St(YE), $E = Ch, qE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, GE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function QE(e) {
      if (e.key) {
        var t = qE[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var n = ol(e);
        return n === 13 ? "Enter" : String.fromCharCode(n);
      }
      return e.type === "keydown" || e.type === "keyup" ? GE[e.keyCode] || "Unidentified" : "";
    }
    var XE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ZE(e) {
      var t = this, n = t.nativeEvent;
      if (n.getModifierState)
        return n.getModifierState(e);
      var a = XE[e];
      return a ? !!n[a] : !1;
    }
    function xc(e) {
      return ZE;
    }
    var JE = X({}, Ui, {
      key: QE,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: xc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? ol(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? ol(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), KE = St(JE), WE = X({}, cl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Eh = St(WE), IE = X({}, Ui, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: xc
    }), PE = St(IE), eR = X({}, yr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), tR = St(eR), nR = X({}, cl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), aR = St(nR), rR = [9, 13, 27, 32], Rh = 229, Dc = _t && "CompositionEvent" in window, wi = null;
    _t && "documentMode" in document && (wi = document.documentMode);
    var iR = _t && "TextEvent" in window && !wi, Th = _t && (!Dc || wi && wi > 8 && wi <= 11), xh = 32, Dh = String.fromCharCode(xh);
    function uR() {
      ca("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ca("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ca("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ca("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Mh = !1;
    function lR(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function oR(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function sR(e, t) {
      return e === "keydown" && t.keyCode === Rh;
    }
    function Oh(e, t) {
      switch (e) {
        case "keyup":
          return rR.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Rh;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Uh(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Lh(e) {
      return e.locale === "ko";
    }
    var gr = !1;
    function cR(e, t, n, a, r) {
      var i, u;
      if (Dc ? i = oR(t) : gr ? Oh(t, a) && (i = "onCompositionEnd") : sR(t, a) && (i = "onCompositionStart"), !i)
        return null;
      Th && !Lh(a) && (!gr && i === "onCompositionStart" ? gr = wE(r) : i === "onCompositionEnd" && gr && (u = yh()));
      var l = hl(n, i);
      if (l.length > 0) {
        var o = new Ch(i, t, null, a, r);
        if (e.push({
          event: o,
          listeners: l
        }), u)
          o.data = u;
        else {
          var s = Uh(a);
          s !== null && (o.data = s);
        }
      }
    }
    function fR(e, t) {
      switch (e) {
        case "compositionend":
          return Uh(t);
        case "keypress":
          var n = t.which;
          return n !== xh ? null : (Mh = !0, Dh);
        case "textInput":
          var a = t.data;
          return a === Dh && Mh ? null : a;
        default:
          return null;
      }
    }
    function dR(e, t) {
      if (gr) {
        if (e === "compositionend" || !Dc && Oh(e, t)) {
          var n = yh();
          return AE(), gr = !1, n;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!lR(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Th && !Lh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vR(e, t, n, a, r) {
      var i;
      if (iR ? i = fR(t, a) : i = dR(t, a), !i)
        return null;
      var u = hl(n, "onBeforeInput");
      if (u.length > 0) {
        var l = new $E("onBeforeInput", "beforeinput", null, a, r);
        e.push({
          event: l,
          listeners: u
        }), l.data = i;
      }
    }
    function pR(e, t, n, a, r, i, u) {
      cR(e, t, n, a, r), vR(e, t, n, a, r);
    }
    var hR = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function wh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hR[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function mR(e) {
      if (!_t)
        return !1;
      var t = "on" + e, n = t in document;
      if (!n) {
        var a = document.createElement("div");
        a.setAttribute(t, "return;"), n = typeof a[t] == "function";
      }
      return n;
    }
    function yR() {
      ca("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Ah(e, t, n, a) {
      Up(a);
      var r = hl(t, "onChange");
      if (r.length > 0) {
        var i = new Cc("onChange", "change", null, n, a);
        e.push({
          event: i,
          listeners: r
        });
      }
    }
    var Ai = null, zi = null;
    function gR(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function bR(e) {
      var t = [];
      Ah(t, zi, e, Ds(e)), zp(SR, t);
    }
    function SR(e) {
      Kh(e, 0);
    }
    function fl(e) {
      var t = Tr(e);
      if (Kv(t))
        return e;
    }
    function CR(e, t) {
      if (e === "change")
        return t;
    }
    var zh = !1;
    _t && (zh = mR("input") && (!document.documentMode || document.documentMode > 9));
    function ER(e, t) {
      Ai = e, zi = t, Ai.attachEvent("onpropertychange", _h);
    }
    function Nh() {
      Ai && (Ai.detachEvent("onpropertychange", _h), Ai = null, zi = null);
    }
    function _h(e) {
      e.propertyName === "value" && fl(zi) && bR(e);
    }
    function RR(e, t, n) {
      e === "focusin" ? (Nh(), ER(t, n)) : e === "focusout" && Nh();
    }
    function TR(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fl(zi);
    }
    function xR(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function DR(e, t) {
      if (e === "click")
        return fl(t);
    }
    function MR(e, t) {
      if (e === "input" || e === "change")
        return fl(t);
    }
    function OR(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ps(e, "number", e.value);
    }
    function UR(e, t, n, a, r, i, u) {
      var l = n ? Tr(n) : window, o, s;
      if (gR(l) ? o = CR : wh(l) ? zh ? o = MR : (o = TR, s = RR) : xR(l) && (o = DR), o) {
        var c = o(t, n);
        if (c) {
          Ah(e, c, a, r);
          return;
        }
      }
      s && s(t, l, n), t === "focusout" && OR(l);
    }
    function LR() {
      Ja("onMouseEnter", ["mouseout", "mouseover"]), Ja("onMouseLeave", ["mouseout", "mouseover"]), Ja("onPointerEnter", ["pointerout", "pointerover"]), Ja("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function wR(e, t, n, a, r, i, u) {
      var l = t === "mouseover" || t === "pointerover", o = t === "mouseout" || t === "pointerout";
      if (l && !ZS(a)) {
        var s = a.relatedTarget || a.fromElement;
        if (s && (Ua(s) || Zi(s)))
          return;
      }
      if (!(!o && !l)) {
        var c;
        if (r.window === r)
          c = r;
        else {
          var v = r.ownerDocument;
          v ? c = v.defaultView || v.parentWindow : c = window;
        }
        var d, m;
        if (o) {
          var y = a.relatedTarget || a.toElement;
          if (d = n, m = y ? Ua(y) : null, m !== null) {
            var g = Ca(m);
            (m !== g || m.tag !== _ && m.tag !== ce) && (m = null);
          }
        } else
          d = null, m = n;
        if (d !== m) {
          var T = Sh, w = "onMouseLeave", L = "onMouseEnter", Q = "mouse";
          (t === "pointerout" || t === "pointerover") && (T = Eh, w = "onPointerLeave", L = "onPointerEnter", Q = "pointer");
          var $ = d == null ? c : Tr(d), p = m == null ? c : Tr(m), b = new T(w, Q + "leave", d, a, r);
          b.target = $, b.relatedTarget = p;
          var h = null, E = Ua(r);
          if (E === n) {
            var O = new T(L, Q + "enter", m, a, r);
            O.target = p, O.relatedTarget = $, h = O;
          }
          tT(e, b, h, d, m);
        }
      }
    }
    function AR(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ct = typeof Object.is == "function" ? Object.is : AR;
    function Ni(e, t) {
      if (Ct(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), a = Object.keys(t);
      if (n.length !== a.length)
        return !1;
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        if (!fa.call(t, i) || !Ct(e[i], t[i]))
          return !1;
      }
      return !0;
    }
    function Hh(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function zR(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function kh(e, t) {
      for (var n = Hh(e), a = 0, r = 0; n; ) {
        if (n.nodeType === vn) {
          if (r = a + n.textContent.length, a <= t && r >= t)
            return {
              node: n,
              offset: t - a
            };
          a = r;
        }
        n = Hh(zR(n));
      }
    }
    function NR(e) {
      var t = e.ownerDocument, n = t && t.defaultView || window, a = n.getSelection && n.getSelection();
      if (!a || a.rangeCount === 0)
        return null;
      var r = a.anchorNode, i = a.anchorOffset, u = a.focusNode, l = a.focusOffset;
      try {
        r.nodeType, u.nodeType;
      } catch {
        return null;
      }
      return _R(e, r, i, u, l);
    }
    function _R(e, t, n, a, r) {
      var i = 0, u = -1, l = -1, o = 0, s = 0, c = e, v = null;
      e: for (; ; ) {
        for (var d = null; c === t && (n === 0 || c.nodeType === vn) && (u = i + n), c === a && (r === 0 || c.nodeType === vn) && (l = i + r), c.nodeType === vn && (i += c.nodeValue.length), (d = c.firstChild) !== null; )
          v = c, c = d;
        for (; ; ) {
          if (c === e)
            break e;
          if (v === t && ++o === n && (u = i), v === a && ++s === r && (l = i), (d = c.nextSibling) !== null)
            break;
          c = v, v = c.parentNode;
        }
        c = d;
      }
      return u === -1 || l === -1 ? null : {
        start: u,
        end: l
      };
    }
    function HR(e, t) {
      var n = e.ownerDocument || document, a = n && n.defaultView || window;
      if (a.getSelection) {
        var r = a.getSelection(), i = e.textContent.length, u = Math.min(t.start, i), l = t.end === void 0 ? u : Math.min(t.end, i);
        if (!r.extend && u > l) {
          var o = l;
          l = u, u = o;
        }
        var s = kh(e, u), c = kh(e, l);
        if (s && c) {
          if (r.rangeCount === 1 && r.anchorNode === s.node && r.anchorOffset === s.offset && r.focusNode === c.node && r.focusOffset === c.offset)
            return;
          var v = n.createRange();
          v.setStart(s.node, s.offset), r.removeAllRanges(), u > l ? (r.addRange(v), r.extend(c.node, c.offset)) : (v.setEnd(c.node, c.offset), r.addRange(v));
        }
      }
    }
    function Fh(e) {
      return e && e.nodeType === vn;
    }
    function Vh(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Fh(e) ? !1 : Fh(t) ? Vh(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function kR(e) {
      return e && e.ownerDocument && Vh(e.ownerDocument.documentElement, e);
    }
    function FR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function jh() {
      for (var e = window, t = Yu(); t instanceof e.HTMLIFrameElement; ) {
        if (FR(t))
          e = t.contentWindow;
        else
          return t;
        t = Yu(e.document);
      }
      return t;
    }
    function Mc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function VR() {
      var e = jh();
      return {
        focusedElem: e,
        selectionRange: Mc(e) ? BR(e) : null
      };
    }
    function jR(e) {
      var t = jh(), n = e.focusedElem, a = e.selectionRange;
      if (t !== n && kR(n)) {
        a !== null && Mc(n) && YR(n, a);
        for (var r = [], i = n; i = i.parentNode; )
          i.nodeType === ot && r.push({
            element: i,
            left: i.scrollLeft,
            top: i.scrollTop
          });
        typeof n.focus == "function" && n.focus();
        for (var u = 0; u < r.length; u++) {
          var l = r[u];
          l.element.scrollLeft = l.left, l.element.scrollTop = l.top;
        }
      }
    }
    function BR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = NR(e), t || {
        start: 0,
        end: 0
      };
    }
    function YR(e, t) {
      var n = t.start, a = t.end;
      a === void 0 && (a = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(a, e.value.length)) : HR(e, t);
    }
    var $R = _t && "documentMode" in document && document.documentMode <= 11;
    function qR() {
      ca("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var br = null, Oc = null, _i = null, Uc = !1;
    function GR(e) {
      if ("selectionStart" in e && Mc(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
      return {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      };
    }
    function QR(e) {
      return e.window === e ? e.document : e.nodeType === pn ? e : e.ownerDocument;
    }
    function Bh(e, t, n) {
      var a = QR(n);
      if (!(Uc || br == null || br !== Yu(a))) {
        var r = GR(br);
        if (!_i || !Ni(_i, r)) {
          _i = r;
          var i = hl(Oc, "onSelect");
          if (i.length > 0) {
            var u = new Cc("onSelect", "select", null, t, n);
            e.push({
              event: u,
              listeners: i
            }), u.target = br;
          }
        }
      }
    }
    function XR(e, t, n, a, r, i, u) {
      var l = n ? Tr(n) : window;
      switch (t) {
        case "focusin":
          (wh(l) || l.contentEditable === "true") && (br = l, Oc = n, _i = null);
          break;
        case "focusout":
          br = null, Oc = null, _i = null;
          break;
        case "mousedown":
          Uc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Uc = !1, Bh(e, a, r);
          break;
        case "selectionchange":
          if ($R)
            break;
        case "keydown":
        case "keyup":
          Bh(e, a, r);
      }
    }
    function dl(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var Sr = {
      animationend: dl("Animation", "AnimationEnd"),
      animationiteration: dl("Animation", "AnimationIteration"),
      animationstart: dl("Animation", "AnimationStart"),
      transitionend: dl("Transition", "TransitionEnd")
    }, Lc = {}, Yh = {};
    _t && (Yh = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
    function vl(e) {
      if (Lc[e])
        return Lc[e];
      if (!Sr[e])
        return e;
      var t = Sr[e];
      for (var n in t)
        if (t.hasOwnProperty(n) && n in Yh)
          return Lc[e] = t[n];
      return e;
    }
    var $h = vl("animationend"), qh = vl("animationiteration"), Gh = vl("animationstart"), Qh = vl("transitionend"), Xh = /* @__PURE__ */ new Map(), Zh = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function qn(e, t) {
      Xh.set(e, t), ca(t, [e]);
    }
    function ZR() {
      for (var e = 0; e < Zh.length; e++) {
        var t = Zh[e], n = t.toLowerCase(), a = t[0].toUpperCase() + t.slice(1);
        qn(n, "on" + a);
      }
      qn($h, "onAnimationEnd"), qn(qh, "onAnimationIteration"), qn(Gh, "onAnimationStart"), qn("dblclick", "onDoubleClick"), qn("focusin", "onFocus"), qn("focusout", "onBlur"), qn(Qh, "onTransitionEnd");
    }
    function JR(e, t, n, a, r, i, u) {
      var l = Xh.get(t);
      if (l !== void 0) {
        var o = Cc, s = t;
        switch (t) {
          case "keypress":
            if (ol(a) === 0)
              return;
          case "keydown":
          case "keyup":
            o = KE;
            break;
          case "focusin":
            s = "focus", o = Tc;
            break;
          case "focusout":
            s = "blur", o = Tc;
            break;
          case "beforeblur":
          case "afterblur":
            o = Tc;
            break;
          case "click":
            if (a.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            o = Sh;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            o = HE;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            o = PE;
            break;
          case $h:
          case qh:
          case Gh:
            o = VE;
            break;
          case Qh:
            o = tR;
            break;
          case "scroll":
            o = zE;
            break;
          case "wheel":
            o = aR;
            break;
          case "copy":
          case "cut":
          case "paste":
            o = BE;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            o = Eh;
            break;
        }
        var c = (i & ui) !== 0;
        {
          var v = !c && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", d = PR(n, l, a.type, c, v);
          if (d.length > 0) {
            var m = new o(l, s, null, a, r);
            e.push({
              event: m,
              listeners: d
            });
          }
        }
      }
    }
    ZR(), LR(), yR(), qR(), uR();
    function KR(e, t, n, a, r, i, u) {
      JR(e, t, n, a, r, i);
      var l = (i & GS) === 0;
      l && (wR(e, t, n, a, r), UR(e, t, n, a, r), XR(e, t, n, a, r), pR(e, t, n, a, r));
    }
    var Hi = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], wc = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hi));
    function Jh(e, t, n) {
      var a = e.type || "unknown-event";
      e.currentTarget = n, aC(a, t, void 0, e), e.currentTarget = null;
    }
    function WR(e, t, n) {
      var a;
      if (n)
        for (var r = t.length - 1; r >= 0; r--) {
          var i = t[r], u = i.instance, l = i.currentTarget, o = i.listener;
          if (u !== a && e.isPropagationStopped())
            return;
          Jh(e, o, l), a = u;
        }
      else
        for (var s = 0; s < t.length; s++) {
          var c = t[s], v = c.instance, d = c.currentTarget, m = c.listener;
          if (v !== a && e.isPropagationStopped())
            return;
          Jh(e, m, d), a = v;
        }
    }
    function Kh(e, t) {
      for (var n = (t & ui) !== 0, a = 0; a < e.length; a++) {
        var r = e[a], i = r.event, u = r.listeners;
        WR(i, u, n);
      }
      rC();
    }
    function IR(e, t, n, a, r) {
      var i = Ds(n), u = [];
      KR(u, e, a, n, i, t), Kh(u, t);
    }
    function fe(e, t) {
      wc.has(e) || f('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var n = !1, a = Ox(t), r = nT(e);
      a.has(r) || (Wh(t, e, xs, n), a.add(r));
    }
    function Ac(e, t, n) {
      wc.has(e) && !t && f('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var a = 0;
      t && (a |= ui), Wh(n, e, a, t);
    }
    var pl = "_reactListening" + Math.random().toString(36).slice(2);
    function ki(e) {
      if (!e[pl]) {
        e[pl] = !0, Rv.forEach(function(n) {
          n !== "selectionchange" && (wc.has(n) || Ac(n, !1, e), Ac(n, !0, e));
        });
        var t = e.nodeType === pn ? e : e.ownerDocument;
        t !== null && (t[pl] || (t[pl] = !0, Ac("selectionchange", !1, t)));
      }
    }
    function Wh(e, t, n, a, r) {
      var i = RE(e, t, n), u = void 0;
      Us && (t === "touchstart" || t === "touchmove" || t === "wheel") && (u = !0), e = e, a ? u !== void 0 ? UE(e, t, i, u) : OE(e, t, i) : u !== void 0 ? LE(e, t, i, u) : ME(e, t, i);
    }
    function Ih(e, t) {
      return e === t || e.nodeType === ye && e.parentNode === t;
    }
    function zc(e, t, n, a, r) {
      var i = a;
      if (!(t & Mp) && !(t & xs)) {
        var u = r;
        if (a !== null) {
          var l = a;
          e: for (; ; ) {
            if (l === null)
              return;
            var o = l.tag;
            if (o === Y || o === se) {
              var s = l.stateNode.containerInfo;
              if (Ih(s, u))
                break;
              if (o === se)
                for (var c = l.return; c !== null; ) {
                  var v = c.tag;
                  if (v === Y || v === se) {
                    var d = c.stateNode.containerInfo;
                    if (Ih(d, u))
                      return;
                  }
                  c = c.return;
                }
              for (; s !== null; ) {
                var m = Ua(s);
                if (m === null)
                  return;
                var y = m.tag;
                if (y === _ || y === ce) {
                  l = i = m;
                  continue e;
                }
                s = s.parentNode;
              }
            }
            l = l.return;
          }
        }
      }
      zp(function() {
        return IR(e, t, n, i);
      });
    }
    function Fi(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function PR(e, t, n, a, r, i) {
      for (var u = t !== null ? t + "Capture" : null, l = a ? u : t, o = [], s = e, c = null; s !== null; ) {
        var v = s, d = v.stateNode, m = v.tag;
        if (m === _ && d !== null && (c = d, l !== null)) {
          var y = oi(s, l);
          y != null && o.push(Fi(s, y, c));
        }
        if (r)
          break;
        s = s.return;
      }
      return o;
    }
    function hl(e, t) {
      for (var n = t + "Capture", a = [], r = e; r !== null; ) {
        var i = r, u = i.stateNode, l = i.tag;
        if (l === _ && u !== null) {
          var o = u, s = oi(r, n);
          s != null && a.unshift(Fi(r, s, o));
          var c = oi(r, t);
          c != null && a.push(Fi(r, c, o));
        }
        r = r.return;
      }
      return a;
    }
    function Cr(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== _);
      return e || null;
    }
    function eT(e, t) {
      for (var n = e, a = t, r = 0, i = n; i; i = Cr(i))
        r++;
      for (var u = 0, l = a; l; l = Cr(l))
        u++;
      for (; r - u > 0; )
        n = Cr(n), r--;
      for (; u - r > 0; )
        a = Cr(a), u--;
      for (var o = r; o--; ) {
        if (n === a || a !== null && n === a.alternate)
          return n;
        n = Cr(n), a = Cr(a);
      }
      return null;
    }
    function Ph(e, t, n, a, r) {
      for (var i = t._reactName, u = [], l = n; l !== null && l !== a; ) {
        var o = l, s = o.alternate, c = o.stateNode, v = o.tag;
        if (s !== null && s === a)
          break;
        if (v === _ && c !== null) {
          var d = c;
          if (r) {
            var m = oi(l, i);
            m != null && u.unshift(Fi(l, m, d));
          } else if (!r) {
            var y = oi(l, i);
            y != null && u.push(Fi(l, y, d));
          }
        }
        l = l.return;
      }
      u.length !== 0 && e.push({
        event: t,
        listeners: u
      });
    }
    function tT(e, t, n, a, r) {
      var i = a && r ? eT(a, r) : null;
      a !== null && Ph(e, t, a, i, !1), r !== null && n !== null && Ph(e, n, r, i, !0);
    }
    function nT(e, t) {
      return e + "__bubble";
    }
    var st = !1, Vi = "dangerouslySetInnerHTML", ml = "suppressContentEditableWarning", Gn = "suppressHydrationWarning", em = "autoFocus", Ma = "children", Oa = "style", yl = "__html", Nc, gl, ji, tm, bl, nm, am;
    Nc = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, gl = function(e, t) {
      FS(e, t), VS(e, t), qS(e, t, {
        registrationNameDependencies: sa,
        possibleRegistrationNames: Zo
      });
    }, nm = _t && !document.documentMode, ji = function(e, t, n) {
      if (!st) {
        var a = Sl(n), r = Sl(t);
        r !== a && (st = !0, f("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(r), JSON.stringify(a)));
      }
    }, tm = function(e) {
      if (!st) {
        st = !0;
        var t = [];
        e.forEach(function(n) {
          t.push(n);
        }), f("Extra attributes from the server: %s", t);
      }
    }, bl = function(e, t) {
      t === !1 ? f("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : f("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, am = function(e, t) {
      var n = e.namespaceURI === dn ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return n.innerHTML = t, n.innerHTML;
    };
    var aT = /\r\n?/g, rT = /\u0000|\uFFFD/g;
    function Sl(e) {
      Ub(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(aT, `
`).replace(rT, "");
    }
    function Cl(e, t, n, a) {
      var r = Sl(t), i = Sl(e);
      if (i !== r && (a && (st || (st = !0, f('Text content did not match. Server: "%s" Client: "%s"', i, r))), n && Cb))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function rm(e) {
      return e.nodeType === pn ? e : e.ownerDocument;
    }
    function iT() {
    }
    function El(e) {
      e.onclick = iT;
    }
    function uT(e, t, n, a, r) {
      for (var i in a)
        if (a.hasOwnProperty(i)) {
          var u = a[i];
          if (i === Oa)
            u && Object.freeze(u), Cp(t, u);
          else if (i === Vi) {
            var l = u ? u[yl] : void 0;
            l != null && mp(t, l);
          } else if (i === Ma)
            if (typeof u == "string") {
              var o = e !== "textarea" || u !== "";
              o && qu(t, u);
            } else typeof u == "number" && qu(t, "" + u);
          else i === ml || i === Gn || i === em || (sa.hasOwnProperty(i) ? u != null && (typeof u != "function" && bl(i, u), i === "onScroll" && fe("scroll", t)) : u != null && es(t, i, u, r));
        }
    }
    function lT(e, t, n, a) {
      for (var r = 0; r < t.length; r += 2) {
        var i = t[r], u = t[r + 1];
        i === Oa ? Cp(e, u) : i === Vi ? mp(e, u) : i === Ma ? qu(e, u) : es(e, i, u, a);
      }
    }
    function oT(e, t, n, a) {
      var r, i = rm(n), u, l = a;
      if (l === dn && (l = bs(e)), l === dn) {
        if (r = ma(e, t), !r && e !== e.toLowerCase() && f("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var o = i.createElement("div");
          o.innerHTML = "<script><\/script>";
          var s = o.firstChild;
          u = o.removeChild(s);
        } else if (typeof t.is == "string")
          u = i.createElement(e, {
            is: t.is
          });
        else if (u = i.createElement(e), e === "select") {
          var c = u;
          t.multiple ? c.multiple = !0 : t.size && (c.size = t.size);
        }
      } else
        u = i.createElementNS(l, e);
      return l === dn && !r && Object.prototype.toString.call(u) === "[object HTMLUnknownElement]" && !fa.call(Nc, e) && (Nc[e] = !0, f("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), u;
    }
    function sT(e, t) {
      return rm(t).createTextNode(e);
    }
    function cT(e, t, n, a) {
      var r = ma(t, n);
      gl(t, n);
      var i;
      switch (t) {
        case "dialog":
          fe("cancel", e), fe("close", e), i = n;
          break;
        case "iframe":
        case "object":
        case "embed":
          fe("load", e), i = n;
          break;
        case "video":
        case "audio":
          for (var u = 0; u < Hi.length; u++)
            fe(Hi[u], e);
          i = n;
          break;
        case "source":
          fe("error", e), i = n;
          break;
        case "img":
        case "image":
        case "link":
          fe("error", e), fe("load", e), i = n;
          break;
        case "details":
          fe("toggle", e), i = n;
          break;
        case "input":
          np(e, n), i = ds(e, n), fe("invalid", e);
          break;
        case "option":
          op(e, n), i = n;
          break;
        case "select":
          fp(e, n), i = ms(e, n), fe("invalid", e);
          break;
        case "textarea":
          vp(e, n), i = ys(e, n), fe("invalid", e);
          break;
        default:
          i = n;
      }
      switch (Ts(t, i), uT(t, e, a, i, r), t) {
        case "input":
          Bu(e), rp(e, n, !1);
          break;
        case "textarea":
          Bu(e), hp(e);
          break;
        case "option":
          aS(e, n);
          break;
        case "select":
          uS(e, n);
          break;
        default:
          typeof i.onClick == "function" && El(e);
          break;
      }
    }
    function fT(e, t, n, a, r) {
      gl(t, a);
      var i = null, u, l;
      switch (t) {
        case "input":
          u = ds(e, n), l = ds(e, a), i = [];
          break;
        case "select":
          u = ms(e, n), l = ms(e, a), i = [];
          break;
        case "textarea":
          u = ys(e, n), l = ys(e, a), i = [];
          break;
        default:
          u = n, l = a, typeof u.onClick != "function" && typeof l.onClick == "function" && El(e);
          break;
      }
      Ts(t, l);
      var o, s, c = null;
      for (o in u)
        if (!(l.hasOwnProperty(o) || !u.hasOwnProperty(o) || u[o] == null))
          if (o === Oa) {
            var v = u[o];
            for (s in v)
              v.hasOwnProperty(s) && (c || (c = {}), c[s] = "");
          } else o === Vi || o === Ma || o === ml || o === Gn || o === em || (sa.hasOwnProperty(o) ? i || (i = []) : (i = i || []).push(o, null));
      for (o in l) {
        var d = l[o], m = u?.[o];
        if (!(!l.hasOwnProperty(o) || d === m || d == null && m == null))
          if (o === Oa)
            if (d && Object.freeze(d), m) {
              for (s in m)
                m.hasOwnProperty(s) && (!d || !d.hasOwnProperty(s)) && (c || (c = {}), c[s] = "");
              for (s in d)
                d.hasOwnProperty(s) && m[s] !== d[s] && (c || (c = {}), c[s] = d[s]);
            } else
              c || (i || (i = []), i.push(o, c)), c = d;
          else if (o === Vi) {
            var y = d ? d[yl] : void 0, g = m ? m[yl] : void 0;
            y != null && g !== y && (i = i || []).push(o, y);
          } else o === Ma ? (typeof d == "string" || typeof d == "number") && (i = i || []).push(o, "" + d) : o === ml || o === Gn || (sa.hasOwnProperty(o) ? (d != null && (typeof d != "function" && bl(o, d), o === "onScroll" && fe("scroll", e)), !i && m !== d && (i = [])) : (i = i || []).push(o, d));
      }
      return c && (LS(c, l[Oa]), (i = i || []).push(Oa, c)), i;
    }
    function dT(e, t, n, a, r) {
      n === "input" && r.type === "radio" && r.name != null && ap(e, r);
      var i = ma(n, a), u = ma(n, r);
      switch (lT(e, t, i, u), n) {
        case "input":
          vs(e, r);
          break;
        case "textarea":
          pp(e, r);
          break;
        case "select":
          lS(e, r);
          break;
      }
    }
    function vT(e) {
      {
        var t = e.toLowerCase();
        return Gu.hasOwnProperty(t) && Gu[t] || null;
      }
    }
    function pT(e, t, n, a, r, i, u) {
      var l, o;
      switch (l = ma(t, n), gl(t, n), t) {
        case "dialog":
          fe("cancel", e), fe("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          fe("load", e);
          break;
        case "video":
        case "audio":
          for (var s = 0; s < Hi.length; s++)
            fe(Hi[s], e);
          break;
        case "source":
          fe("error", e);
          break;
        case "img":
        case "image":
        case "link":
          fe("error", e), fe("load", e);
          break;
        case "details":
          fe("toggle", e);
          break;
        case "input":
          np(e, n), fe("invalid", e);
          break;
        case "option":
          op(e, n);
          break;
        case "select":
          fp(e, n), fe("invalid", e);
          break;
        case "textarea":
          vp(e, n), fe("invalid", e);
          break;
      }
      Ts(t, n);
      {
        o = /* @__PURE__ */ new Set();
        for (var c = e.attributes, v = 0; v < c.length; v++) {
          var d = c[v].name.toLowerCase();
          switch (d) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              o.add(c[v].name);
          }
        }
      }
      var m = null;
      for (var y in n)
        if (n.hasOwnProperty(y)) {
          var g = n[y];
          if (y === Ma)
            typeof g == "string" ? e.textContent !== g && (n[Gn] !== !0 && Cl(e.textContent, g, i, u), m = [Ma, g]) : typeof g == "number" && e.textContent !== "" + g && (n[Gn] !== !0 && Cl(e.textContent, g, i, u), m = [Ma, "" + g]);
          else if (sa.hasOwnProperty(y))
            g != null && (typeof g != "function" && bl(y, g), y === "onScroll" && fe("scroll", e));
          else if (u && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof l == "boolean") {
            var T = void 0, w = l && Qo ? null : Wo(y);
            if (n[Gn] !== !0) {
              if (!(y === ml || y === Gn || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              y === "value" || y === "checked" || y === "selected")) {
                if (y === Vi) {
                  var L = e.innerHTML, Q = g ? g[yl] : void 0;
                  if (Q != null) {
                    var $ = am(e, Q);
                    $ !== L && ji(y, L, $);
                  }
                } else if (y === Oa) {
                  if (o.delete(y), nm) {
                    var p = OS(g);
                    T = e.getAttribute("style"), p !== T && ji(y, T, p);
                  }
                } else if (l && !Qo)
                  o.delete(y.toLowerCase()), T = zv(e, y, g), g !== T && ji(y, T, g);
                else if (!Lv(y, w, l) && !ei(y, g, w, l)) {
                  var b = !1;
                  if (w !== null)
                    o.delete(w.attributeName), T = Nb(e, y, g, w);
                  else {
                    var h = a;
                    if (h === dn && (h = bs(t)), h === dn)
                      o.delete(y.toLowerCase());
                    else {
                      var E = vT(y);
                      E !== null && E !== y && (b = !0, o.delete(E)), o.delete(y);
                    }
                    T = zv(e, y, g);
                  }
                  var O = Qo;
                  !O && g !== T && !b && ji(y, T, g);
                }
              }
            }
          }
        }
      switch (u && // $FlowFixMe - Should be inferred as not undefined.
      o.size > 0 && n[Gn] !== !0 && tm(o), t) {
        case "input":
          Bu(e), rp(e, n, !0);
          break;
        case "textarea":
          Bu(e), hp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof n.onClick == "function" && El(e);
          break;
      }
      return m;
    }
    function hT(e, t, n) {
      var a = e.nodeValue !== t;
      return a;
    }
    function _c(e, t) {
      {
        if (st)
          return;
        st = !0, f("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Hc(e, t) {
      {
        if (st)
          return;
        st = !0, f('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function kc(e, t, n) {
      {
        if (st)
          return;
        st = !0, f("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Fc(e, t) {
      {
        if (t === "" || st)
          return;
        st = !0, f('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function mT(e, t, n) {
      switch (t) {
        case "input":
          tS(e, n);
          return;
        case "textarea":
          sS(e, n);
          return;
        case "select":
          oS(e, n);
          return;
      }
    }
    var Bi = function() {
    }, Yi = function() {
    };
    {
      var yT = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], im = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], gT = im.concat(["button"]), bT = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], um = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Yi = function(e, t) {
        var n = X({}, e || um), a = {
          tag: t
        };
        return im.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), gT.indexOf(t) !== -1 && (n.pTagInButtonScope = null), yT.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = a, t === "form" && (n.formTag = a), t === "a" && (n.aTagInScope = a), t === "button" && (n.buttonTagInScope = a), t === "nobr" && (n.nobrTagInScope = a), t === "p" && (n.pTagInButtonScope = a), t === "li" && (n.listItemTagAutoclosing = a), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = a), n;
      };
      var ST = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return bT.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, CT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, lm = {};
      Bi = function(e, t, n) {
        n = n || um;
        var a = n.current, r = a && a.tag;
        t != null && (e != null && f("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var i = ST(e, r) ? null : a, u = i ? null : CT(e, n), l = i || u;
        if (l) {
          var o = l.tag, s = !!i + "|" + e + "|" + o;
          if (!lm[s]) {
            lm[s] = !0;
            var c = e, v = "";
            if (e === "#text" ? /\S/.test(t) ? c = "Text nodes" : (c = "Whitespace text nodes", v = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : c = "<" + e + ">", i) {
              var d = "";
              o === "table" && e === "tr" && (d += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), f("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", c, o, v, d);
            } else
              f("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", c, o);
          }
        }
      };
    }
    var Rl = "suppressHydrationWarning", Tl = "$", xl = "/$", $i = "$?", qi = "$!", ET = "style", Vc = null, jc = null;
    function RT(e) {
      var t, n, a = e.nodeType;
      switch (a) {
        case pn:
        case Cs: {
          t = a === pn ? "#document" : "#fragment";
          var r = e.documentElement;
          n = r ? r.namespaceURI : Ss(null, "");
          break;
        }
        default: {
          var i = a === ye ? e.parentNode : e, u = i.namespaceURI || null;
          t = i.tagName, n = Ss(u, t);
          break;
        }
      }
      {
        var l = t.toLowerCase(), o = Yi(null, l);
        return {
          namespace: n,
          ancestorInfo: o
        };
      }
    }
    function TT(e, t, n) {
      {
        var a = e, r = Ss(a.namespace, t), i = Yi(a.ancestorInfo, t);
        return {
          namespace: r,
          ancestorInfo: i
        };
      }
    }
    function DO(e) {
      return e;
    }
    function xT(e) {
      Vc = EE(), jc = VR();
      var t = null;
      return hh(!1), t;
    }
    function DT(e) {
      jR(jc), hh(Vc), Vc = null, jc = null;
    }
    function MT(e, t, n, a, r) {
      var i;
      {
        var u = a;
        if (Bi(e, null, u.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var l = "" + t.children, o = Yi(u.ancestorInfo, e);
          Bi(null, l, o);
        }
        i = u.namespace;
      }
      var s = oT(e, t, n, i);
      return Xi(r, s), Zc(s, t), s;
    }
    function OT(e, t) {
      e.appendChild(t);
    }
    function UT(e, t, n, a, r) {
      switch (cT(e, t, n, a), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!n.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function LT(e, t, n, a, r, i) {
      {
        var u = i;
        if (typeof a.children != typeof n.children && (typeof a.children == "string" || typeof a.children == "number")) {
          var l = "" + a.children, o = Yi(u.ancestorInfo, t);
          Bi(null, l, o);
        }
      }
      return fT(e, t, n, a);
    }
    function Bc(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function wT(e, t, n, a) {
      {
        var r = n;
        Bi(null, e, r.ancestorInfo);
      }
      var i = sT(e, t);
      return Xi(a, i), i;
    }
    function AT() {
      var e = window.event;
      return e === void 0 ? Cn : mh(e.type);
    }
    var Yc = typeof setTimeout == "function" ? setTimeout : void 0, zT = typeof clearTimeout == "function" ? clearTimeout : void 0, $c = -1, om = typeof Promise == "function" ? Promise : void 0, NT = typeof queueMicrotask == "function" ? queueMicrotask : typeof om < "u" ? function(e) {
      return om.resolve(null).then(e).catch(_T);
    } : Yc;
    function _T(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function HT(e, t, n, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          return;
        case "img": {
          n.src && (e.src = n.src);
          return;
        }
      }
    }
    function kT(e, t, n, a, r, i) {
      dT(e, t, n, a, r), Zc(e, r);
    }
    function sm(e) {
      qu(e, "");
    }
    function FT(e, t, n) {
      e.nodeValue = n;
    }
    function VT(e, t) {
      e.appendChild(t);
    }
    function jT(e, t) {
      var n;
      e.nodeType === ye ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
      var a = e._reactRootContainer;
      a == null && n.onclick === null && El(n);
    }
    function BT(e, t, n) {
      e.insertBefore(t, n);
    }
    function YT(e, t, n) {
      e.nodeType === ye ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
    }
    function $T(e, t) {
      e.removeChild(t);
    }
    function qT(e, t) {
      e.nodeType === ye ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function qc(e, t) {
      var n = t, a = 0;
      do {
        var r = n.nextSibling;
        if (e.removeChild(n), r && r.nodeType === ye) {
          var i = r.data;
          if (i === xl)
            if (a === 0) {
              e.removeChild(r), Di(t);
              return;
            } else
              a--;
          else (i === Tl || i === $i || i === qi) && a++;
        }
        n = r;
      } while (n);
      Di(t);
    }
    function GT(e, t) {
      e.nodeType === ye ? qc(e.parentNode, t) : e.nodeType === ot && qc(e, t), Di(e);
    }
    function QT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function XT(e) {
      e.nodeValue = "";
    }
    function ZT(e, t) {
      e = e;
      var n = t[ET], a = n != null && n.hasOwnProperty("display") ? n.display : null;
      e.style.display = Es("display", a);
    }
    function JT(e, t) {
      e.nodeValue = t;
    }
    function KT(e) {
      e.nodeType === ot ? e.textContent = "" : e.nodeType === pn && e.documentElement && e.removeChild(e.documentElement);
    }
    function WT(e, t, n) {
      return e.nodeType !== ot || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function IT(e, t) {
      return t === "" || e.nodeType !== vn ? null : e;
    }
    function PT(e) {
      return e.nodeType !== ye ? null : e;
    }
    function cm(e) {
      return e.data === $i;
    }
    function Gc(e) {
      return e.data === qi;
    }
    function ex(e) {
      var t = e.nextSibling && e.nextSibling.dataset, n, a, r;
      return t && (n = t.dgst, a = t.msg, r = t.stck), {
        message: a,
        digest: n,
        stack: r
      };
    }
    function tx(e, t) {
      e._reactRetry = t;
    }
    function Dl(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ot || t === vn)
          break;
        if (t === ye) {
          var n = e.data;
          if (n === Tl || n === qi || n === $i)
            break;
          if (n === xl)
            return null;
        }
      }
      return e;
    }
    function Gi(e) {
      return Dl(e.nextSibling);
    }
    function nx(e) {
      return Dl(e.firstChild);
    }
    function ax(e) {
      return Dl(e.firstChild);
    }
    function rx(e) {
      return Dl(e.nextSibling);
    }
    function ix(e, t, n, a, r, i, u) {
      Xi(i, e), Zc(e, n);
      var l;
      {
        var o = r;
        l = o.namespace;
      }
      var s = (i.mode & q) !== A;
      return pT(e, t, n, l, a, s, u);
    }
    function ux(e, t, n, a) {
      return Xi(n, e), n.mode & q, hT(e, t);
    }
    function lx(e, t) {
      Xi(t, e);
    }
    function ox(e) {
      for (var t = e.nextSibling, n = 0; t; ) {
        if (t.nodeType === ye) {
          var a = t.data;
          if (a === xl) {
            if (n === 0)
              return Gi(t);
            n--;
          } else (a === Tl || a === qi || a === $i) && n++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function fm(e) {
      for (var t = e.previousSibling, n = 0; t; ) {
        if (t.nodeType === ye) {
          var a = t.data;
          if (a === Tl || a === qi || a === $i) {
            if (n === 0)
              return t;
            n--;
          } else a === xl && n++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function sx(e) {
      Di(e);
    }
    function cx(e) {
      Di(e);
    }
    function fx(e) {
      return e !== "head" && e !== "body";
    }
    function dx(e, t, n, a) {
      var r = !0;
      Cl(t.nodeValue, n, a, r);
    }
    function vx(e, t, n, a, r, i) {
      if (t[Rl] !== !0) {
        var u = !0;
        Cl(a.nodeValue, r, i, u);
      }
    }
    function px(e, t) {
      t.nodeType === ot ? _c(e, t) : t.nodeType === ye || Hc(e, t);
    }
    function hx(e, t) {
      {
        var n = e.parentNode;
        n !== null && (t.nodeType === ot ? _c(n, t) : t.nodeType === ye || Hc(n, t));
      }
    }
    function mx(e, t, n, a, r) {
      (r || t[Rl] !== !0) && (a.nodeType === ot ? _c(n, a) : a.nodeType === ye || Hc(n, a));
    }
    function yx(e, t, n) {
      kc(e, t);
    }
    function gx(e, t) {
      Fc(e, t);
    }
    function bx(e, t, n) {
      {
        var a = e.parentNode;
        a !== null && kc(a, t);
      }
    }
    function Sx(e, t) {
      {
        var n = e.parentNode;
        n !== null && Fc(n, t);
      }
    }
    function Cx(e, t, n, a, r, i) {
      (i || t[Rl] !== !0) && kc(n, a);
    }
    function Ex(e, t, n, a, r) {
      (r || t[Rl] !== !0) && Fc(n, a);
    }
    function Rx(e) {
      f("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Tx(e) {
      ki(e);
    }
    var Er = Math.random().toString(36).slice(2), Rr = "__reactFiber$" + Er, Qc = "__reactProps$" + Er, Qi = "__reactContainer$" + Er, Xc = "__reactEvents$" + Er, xx = "__reactListeners$" + Er, Dx = "__reactHandles$" + Er;
    function Mx(e) {
      delete e[Rr], delete e[Qc], delete e[Xc], delete e[xx], delete e[Dx];
    }
    function Xi(e, t) {
      t[Rr] = e;
    }
    function Ml(e, t) {
      t[Qi] = e;
    }
    function dm(e) {
      e[Qi] = null;
    }
    function Zi(e) {
      return !!e[Qi];
    }
    function Ua(e) {
      var t = e[Rr];
      if (t)
        return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[Qi] || n[Rr], t) {
          var a = t.alternate;
          if (t.child !== null || a !== null && a.child !== null)
            for (var r = fm(e); r !== null; ) {
              var i = r[Rr];
              if (i)
                return i;
              r = fm(r);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Qn(e) {
      var t = e[Rr] || e[Qi];
      return t && (t.tag === _ || t.tag === ce || t.tag === ue || t.tag === Y) ? t : null;
    }
    function Tr(e) {
      if (e.tag === _ || e.tag === ce)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ol(e) {
      return e[Qc] || null;
    }
    function Zc(e, t) {
      e[Qc] = t;
    }
    function Ox(e) {
      var t = e[Xc];
      return t === void 0 && (t = e[Xc] = /* @__PURE__ */ new Set()), t;
    }
    var vm = {}, pm = Ae.ReactDebugCurrentFrame;
    function Ul(e) {
      if (e) {
        var t = e._owner, n = cs(e.type, e._source, t ? t.type : null);
        pm.setExtraStackFrame(n);
      } else
        pm.setExtraStackFrame(null);
    }
    function Vt(e, t, n, a, r) {
      {
        var i = Function.call.bind(fa);
        for (var u in e)
          if (i(e, u)) {
            var l = void 0;
            try {
              if (typeof e[u] != "function") {
                var o = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw o.name = "Invariant Violation", o;
              }
              l = e[u](t, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              l = s;
            }
            l && !(l instanceof Error) && (Ul(r), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof l), Ul(null)), l instanceof Error && !(l.message in vm) && (vm[l.message] = !0, Ul(r), f("Failed %s type: %s", n, l.message), Ul(null));
          }
      }
    }
    var Jc = [], Ll;
    Ll = [];
    var En = -1;
    function Xn(e) {
      return {
        current: e
      };
    }
    function Ge(e, t) {
      if (En < 0) {
        f("Unexpected pop.");
        return;
      }
      t !== Ll[En] && f("Unexpected Fiber popped."), e.current = Jc[En], Jc[En] = null, Ll[En] = null, En--;
    }
    function Qe(e, t, n) {
      En++, Jc[En] = e.current, Ll[En] = n, e.current = t;
    }
    var Kc;
    Kc = {};
    var Et = {};
    Object.freeze(Et);
    var Rn = Xn(Et), en = Xn(!1), Wc = Et;
    function xr(e, t, n) {
      return n && tn(t) ? Wc : Rn.current;
    }
    function hm(e, t, n) {
      {
        var a = e.stateNode;
        a.__reactInternalMemoizedUnmaskedChildContext = t, a.__reactInternalMemoizedMaskedChildContext = n;
      }
    }
    function Dr(e, t) {
      {
        var n = e.type, a = n.contextTypes;
        if (!a)
          return Et;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var i = {};
        for (var u in a)
          i[u] = t[u];
        {
          var l = V(e) || "Unknown";
          Vt(a, i, "context", l);
        }
        return r && hm(e, t, i), i;
      }
    }
    function wl() {
      return en.current;
    }
    function tn(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Al(e) {
      Ge(en, e), Ge(Rn, e);
    }
    function Ic(e) {
      Ge(en, e), Ge(Rn, e);
    }
    function mm(e, t, n) {
      {
        if (Rn.current !== Et)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Qe(Rn, t, e), Qe(en, n, e);
      }
    }
    function ym(e, t, n) {
      {
        var a = e.stateNode, r = t.childContextTypes;
        if (typeof a.getChildContext != "function") {
          {
            var i = V(e) || "Unknown";
            Kc[i] || (Kc[i] = !0, f("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", i, i));
          }
          return n;
        }
        var u = a.getChildContext();
        for (var l in u)
          if (!(l in r))
            throw new Error((V(e) || "Unknown") + '.getChildContext(): key "' + l + '" is not defined in childContextTypes.');
        {
          var o = V(e) || "Unknown";
          Vt(r, u, "child context", o);
        }
        return X({}, n, u);
      }
    }
    function zl(e) {
      {
        var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Et;
        return Wc = Rn.current, Qe(Rn, n, e), Qe(en, en.current, e), !0;
      }
    }
    function gm(e, t, n) {
      {
        var a = e.stateNode;
        if (!a)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (n) {
          var r = ym(e, t, Wc);
          a.__reactInternalMemoizedMergedChildContext = r, Ge(en, e), Ge(Rn, e), Qe(Rn, r, e), Qe(en, n, e);
        } else
          Ge(en, e), Qe(en, n, e);
      }
    }
    function Ux(e) {
      {
        if (!fC(e) || e.tag !== B)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case Y:
              return t.stateNode.context;
            case B: {
              var n = t.type;
              if (tn(n))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Zn = 0, Nl = 1, Tn = null, Pc = !1, ef = !1;
    function bm(e) {
      Tn === null ? Tn = [e] : Tn.push(e);
    }
    function Lx(e) {
      Pc = !0, bm(e);
    }
    function Sm() {
      Pc && Jn();
    }
    function Jn() {
      if (!ef && Tn !== null) {
        ef = !0;
        var e = 0, t = Ft();
        try {
          var n = !0, a = Tn;
          for (we(bt); e < a.length; e++) {
            var r = a[e];
            do
              r = r(n);
            while (r !== null);
          }
          Tn = null, Pc = !1;
        } catch (i) {
          throw Tn !== null && (Tn = Tn.slice(e + 1)), qp(Ku, Jn), i;
        } finally {
          we(t), ef = !1;
        }
      }
      return null;
    }
    var Mr = [], Or = 0, _l = null, Hl = 0, Dt = [], Mt = 0, La = null, xn = 1, Dn = "";
    function wx(e) {
      return Aa(), (e.flags & Hp) !== z;
    }
    function Ax(e) {
      return Aa(), Hl;
    }
    function zx() {
      var e = Dn, t = xn, n = t & ~Nx(t);
      return n.toString(32) + e;
    }
    function wa(e, t) {
      Aa(), Mr[Or++] = Hl, Mr[Or++] = _l, _l = e, Hl = t;
    }
    function Cm(e, t, n) {
      Aa(), Dt[Mt++] = xn, Dt[Mt++] = Dn, Dt[Mt++] = La, La = e;
      var a = xn, r = Dn, i = kl(a) - 1, u = a & ~(1 << i), l = n + 1, o = kl(t) + i;
      if (o > 30) {
        var s = i - i % 5, c = (1 << s) - 1, v = (u & c).toString(32), d = u >> s, m = i - s, y = kl(t) + m, g = l << m, T = g | d, w = v + r;
        xn = 1 << y | T, Dn = w;
      } else {
        var L = l << i, Q = L | u, $ = r;
        xn = 1 << o | Q, Dn = $;
      }
    }
    function tf(e) {
      Aa();
      var t = e.return;
      if (t !== null) {
        var n = 1, a = 0;
        wa(e, n), Cm(e, n, a);
      }
    }
    function kl(e) {
      return 32 - Kp(e);
    }
    function Nx(e) {
      return 1 << kl(e) - 1;
    }
    function nf(e) {
      for (; e === _l; )
        _l = Mr[--Or], Mr[Or] = null, Hl = Mr[--Or], Mr[Or] = null;
      for (; e === La; )
        La = Dt[--Mt], Dt[Mt] = null, Dn = Dt[--Mt], Dt[Mt] = null, xn = Dt[--Mt], Dt[Mt] = null;
    }
    function _x() {
      return Aa(), La !== null ? {
        id: xn,
        overflow: Dn
      } : null;
    }
    function Hx(e, t) {
      Aa(), Dt[Mt++] = xn, Dt[Mt++] = Dn, Dt[Mt++] = La, xn = t.id, Dn = t.overflow, La = e;
    }
    function Aa() {
      _e() || f("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Ne = null, Ot = null, jt = !1, za = !1, Kn = null;
    function kx() {
      jt && f("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Em() {
      za = !0;
    }
    function Fx() {
      return za;
    }
    function Vx(e) {
      var t = e.stateNode.containerInfo;
      return Ot = ax(t), Ne = e, jt = !0, Kn = null, za = !1, !0;
    }
    function jx(e, t, n) {
      return Ot = rx(t), Ne = e, jt = !0, Kn = null, za = !1, n !== null && Hx(e, n), !0;
    }
    function Rm(e, t) {
      switch (e.tag) {
        case Y: {
          px(e.stateNode.containerInfo, t);
          break;
        }
        case _: {
          var n = (e.mode & q) !== A;
          mx(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            n
          );
          break;
        }
        case ue: {
          var a = e.memoizedState;
          a.dehydrated !== null && hx(a.dehydrated, t);
          break;
        }
      }
    }
    function Tm(e, t) {
      Rm(e, t);
      var n = q0();
      n.stateNode = t, n.return = e;
      var a = e.deletions;
      a === null ? (e.deletions = [n], e.flags |= ya) : a.push(n);
    }
    function af(e, t) {
      {
        if (za)
          return;
        switch (e.tag) {
          case Y: {
            var n = e.stateNode.containerInfo;
            switch (t.tag) {
              case _:
                var a = t.type;
                t.pendingProps, yx(n, a);
                break;
              case ce:
                var r = t.pendingProps;
                gx(n, r);
                break;
            }
            break;
          }
          case _: {
            var i = e.type, u = e.memoizedProps, l = e.stateNode;
            switch (t.tag) {
              case _: {
                var o = t.type, s = t.pendingProps, c = (e.mode & q) !== A;
                Cx(
                  i,
                  u,
                  l,
                  o,
                  s,
                  // TODO: Delete this argument when we remove the legacy root API.
                  c
                );
                break;
              }
              case ce: {
                var v = t.pendingProps, d = (e.mode & q) !== A;
                Ex(
                  i,
                  u,
                  l,
                  v,
                  // TODO: Delete this argument when we remove the legacy root API.
                  d
                );
                break;
              }
            }
            break;
          }
          case ue: {
            var m = e.memoizedState, y = m.dehydrated;
            if (y !== null) switch (t.tag) {
              case _:
                var g = t.type;
                t.pendingProps, bx(y, g);
                break;
              case ce:
                var T = t.pendingProps;
                Sx(y, T);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function xm(e, t) {
      t.flags = t.flags & ~mn | ge, af(e, t);
    }
    function Dm(e, t) {
      switch (e.tag) {
        case _: {
          var n = e.type;
          e.pendingProps;
          var a = WT(t, n);
          return a !== null ? (e.stateNode = a, Ne = e, Ot = nx(a), !0) : !1;
        }
        case ce: {
          var r = e.pendingProps, i = IT(t, r);
          return i !== null ? (e.stateNode = i, Ne = e, Ot = null, !0) : !1;
        }
        case ue: {
          var u = PT(t);
          if (u !== null) {
            var l = {
              dehydrated: u,
              treeContext: _x(),
              retryLane: yt
            };
            e.memoizedState = l;
            var o = G0(u);
            return o.return = e, e.child = o, Ne = e, Ot = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function rf(e) {
      return (e.mode & q) !== A && (e.flags & W) === z;
    }
    function uf(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function lf(e) {
      if (jt) {
        var t = Ot;
        if (!t) {
          rf(e) && (af(Ne, e), uf()), xm(Ne, e), jt = !1, Ne = e;
          return;
        }
        var n = t;
        if (!Dm(e, t)) {
          rf(e) && (af(Ne, e), uf()), t = Gi(n);
          var a = Ne;
          if (!t || !Dm(e, t)) {
            xm(Ne, e), jt = !1, Ne = e;
            return;
          }
          Tm(a, n);
        }
      }
    }
    function Bx(e, t, n) {
      var a = e.stateNode, r = !za, i = ix(a, e.type, e.memoizedProps, t, n, e, r);
      return e.updateQueue = i, i !== null;
    }
    function Yx(e) {
      var t = e.stateNode, n = e.memoizedProps, a = ux(t, n, e);
      if (a) {
        var r = Ne;
        if (r !== null)
          switch (r.tag) {
            case Y: {
              var i = r.stateNode.containerInfo, u = (r.mode & q) !== A;
              dx(
                i,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                u
              );
              break;
            }
            case _: {
              var l = r.type, o = r.memoizedProps, s = r.stateNode, c = (r.mode & q) !== A;
              vx(
                l,
                o,
                s,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                c
              );
              break;
            }
          }
      }
      return a;
    }
    function $x(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      lx(n, e);
    }
    function qx(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return ox(n);
    }
    function Mm(e) {
      for (var t = e.return; t !== null && t.tag !== _ && t.tag !== Y && t.tag !== ue; )
        t = t.return;
      Ne = t;
    }
    function Fl(e) {
      if (e !== Ne)
        return !1;
      if (!jt)
        return Mm(e), jt = !0, !1;
      if (e.tag !== Y && (e.tag !== _ || fx(e.type) && !Bc(e.type, e.memoizedProps))) {
        var t = Ot;
        if (t)
          if (rf(e))
            Om(e), uf();
          else
            for (; t; )
              Tm(e, t), t = Gi(t);
      }
      return Mm(e), e.tag === ue ? Ot = qx(e) : Ot = Ne ? Gi(e.stateNode) : null, !0;
    }
    function Gx() {
      return jt && Ot !== null;
    }
    function Om(e) {
      for (var t = Ot; t; )
        Rm(e, t), t = Gi(t);
    }
    function Ur() {
      Ne = null, Ot = null, jt = !1, za = !1;
    }
    function Um() {
      Kn !== null && (Eg(Kn), Kn = null);
    }
    function _e() {
      return jt;
    }
    function of(e) {
      Kn === null ? Kn = [e] : Kn.push(e);
    }
    var Qx = Ae.ReactCurrentBatchConfig, Xx = null;
    function Zx() {
      return Qx.transition;
    }
    var Bt = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Jx = function(e) {
        for (var t = null, n = e; n !== null; )
          n.mode & ve && (t = n), n = n.return;
        return t;
      }, Na = function(e) {
        var t = [];
        return e.forEach(function(n) {
          t.push(n);
        }), t.sort().join(", ");
      }, Ji = [], Ki = [], Wi = [], Ii = [], Pi = [], eu = [], _a = /* @__PURE__ */ new Set();
      Bt.recordUnsafeLifecycleWarnings = function(e, t) {
        _a.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Ji.push(e), e.mode & ve && typeof t.UNSAFE_componentWillMount == "function" && Ki.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Wi.push(e), e.mode & ve && typeof t.UNSAFE_componentWillReceiveProps == "function" && Ii.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pi.push(e), e.mode & ve && typeof t.UNSAFE_componentWillUpdate == "function" && eu.push(e));
      }, Bt.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Ji.length > 0 && (Ji.forEach(function(d) {
          e.add(V(d) || "Component"), _a.add(d.type);
        }), Ji = []);
        var t = /* @__PURE__ */ new Set();
        Ki.length > 0 && (Ki.forEach(function(d) {
          t.add(V(d) || "Component"), _a.add(d.type);
        }), Ki = []);
        var n = /* @__PURE__ */ new Set();
        Wi.length > 0 && (Wi.forEach(function(d) {
          n.add(V(d) || "Component"), _a.add(d.type);
        }), Wi = []);
        var a = /* @__PURE__ */ new Set();
        Ii.length > 0 && (Ii.forEach(function(d) {
          a.add(V(d) || "Component"), _a.add(d.type);
        }), Ii = []);
        var r = /* @__PURE__ */ new Set();
        Pi.length > 0 && (Pi.forEach(function(d) {
          r.add(V(d) || "Component"), _a.add(d.type);
        }), Pi = []);
        var i = /* @__PURE__ */ new Set();
        if (eu.length > 0 && (eu.forEach(function(d) {
          i.add(V(d) || "Component"), _a.add(d.type);
        }), eu = []), t.size > 0) {
          var u = Na(t);
          f(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, u);
        }
        if (a.size > 0) {
          var l = Na(a);
          f(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, l);
        }
        if (i.size > 0) {
          var o = Na(i);
          f(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, o);
        }
        if (e.size > 0) {
          var s = Na(e);
          oa(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, s);
        }
        if (n.size > 0) {
          var c = Na(n);
          oa(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, c);
        }
        if (r.size > 0) {
          var v = Na(r);
          oa(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, v);
        }
      };
      var Vl = /* @__PURE__ */ new Map(), Lm = /* @__PURE__ */ new Set();
      Bt.recordLegacyContextWarning = function(e, t) {
        var n = Jx(e);
        if (n === null) {
          f("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!Lm.has(e.type)) {
          var a = Vl.get(n);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (a === void 0 && (a = [], Vl.set(n, a)), a.push(e));
        }
      }, Bt.flushLegacyContextWarning = function() {
        Vl.forEach(function(e, t) {
          if (e.length !== 0) {
            var n = e[0], a = /* @__PURE__ */ new Set();
            e.forEach(function(i) {
              a.add(V(i) || "Component"), Lm.add(i.type);
            });
            var r = Na(a);
            try {
              he(n), f(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r);
            } finally {
              Ie();
            }
          }
        });
      }, Bt.discardPendingWarnings = function() {
        Ji = [], Ki = [], Wi = [], Ii = [], Pi = [], eu = [], Vl = /* @__PURE__ */ new Map();
      };
    }
    var sf, cf, ff, df, vf, wm = function(e, t) {
    };
    sf = !1, cf = !1, ff = {}, df = {}, vf = {}, wm = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var n = V(t) || "Component";
        df[n] || (df[n] = !0, f('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Kx(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function tu(e, t, n) {
      var a = n.ref;
      if (a !== null && typeof a != "function" && typeof a != "object") {
        if ((e.mode & ve || Tb) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
        !(n._owner && n._owner.tag !== B) && // Will already warn with "Function components cannot be given refs"
        !(typeof n.type == "function" && !Kx(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        n._owner) {
          var r = V(e) || "Component";
          ff[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, a), ff[r] = !0);
        }
        if (n._owner) {
          var i = n._owner, u;
          if (i) {
            var l = i;
            if (l.tag !== B)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            u = l.stateNode;
          }
          if (!u)
            throw new Error("Missing owner for string ref " + a + ". This error is likely caused by a bug in React. Please file an issue.");
          var o = u;
          Mb(a, "ref");
          var s = "" + a;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s)
            return t.ref;
          var c = function(v) {
            var d = o.refs;
            v === null ? delete d[s] : d[s] = v;
          };
          return c._stringRef = s, c;
        } else {
          if (typeof a != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!n._owner)
            throw new Error("Element ref was specified as a string (" + a + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return a;
    }
    function jl(e, t) {
      var n = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bl(e) {
      {
        var t = V(e) || "Component";
        if (vf[t])
          return;
        vf[t] = !0, f("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Am(e) {
      var t = e._payload, n = e._init;
      return n(t);
    }
    function zm(e) {
      function t(p, b) {
        if (e) {
          var h = p.deletions;
          h === null ? (p.deletions = [b], p.flags |= ya) : h.push(b);
        }
      }
      function n(p, b) {
        if (!e)
          return null;
        for (var h = b; h !== null; )
          t(p, h), h = h.sibling;
        return null;
      }
      function a(p, b) {
        for (var h = /* @__PURE__ */ new Map(), E = b; E !== null; )
          E.key !== null ? h.set(E.key, E) : h.set(E.index, E), E = E.sibling;
        return h;
      }
      function r(p, b) {
        var h = qa(p, b);
        return h.index = 0, h.sibling = null, h;
      }
      function i(p, b, h) {
        if (p.index = h, !e)
          return p.flags |= Hp, b;
        var E = p.alternate;
        if (E !== null) {
          var O = E.index;
          return O < b ? (p.flags |= ge, b) : O;
        } else
          return p.flags |= ge, b;
      }
      function u(p) {
        return e && p.alternate === null && (p.flags |= ge), p;
      }
      function l(p, b, h, E) {
        if (b === null || b.tag !== ce) {
          var O = ov(h, p.mode, E);
          return O.return = p, O;
        } else {
          var x = r(b, h);
          return x.return = p, x;
        }
      }
      function o(p, b, h, E) {
        var O = h.type;
        if (O === Pa)
          return c(p, b, h.props.children, E, h.key);
        if (b !== null && (b.elementType === O || // Keep this check inline so it only runs on the false path:
        Fg(b, h) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof O == "object" && O !== null && O.$$typeof === We && Am(O) === b.type)) {
          var x = r(b, h.props);
          return x.ref = tu(p, b, h), x.return = p, x._debugSource = h._source, x._debugOwner = h._owner, x;
        }
        var N = lv(h, p.mode, E);
        return N.ref = tu(p, b, h), N.return = p, N;
      }
      function s(p, b, h, E) {
        if (b === null || b.tag !== se || b.stateNode.containerInfo !== h.containerInfo || b.stateNode.implementation !== h.implementation) {
          var O = sv(h, p.mode, E);
          return O.return = p, O;
        } else {
          var x = r(b, h.children || []);
          return x.return = p, x;
        }
      }
      function c(p, b, h, E, O) {
        if (b === null || b.tag !== Ga) {
          var x = la(h, p.mode, E, O);
          return x.return = p, x;
        } else {
          var N = r(b, h);
          return N.return = p, N;
        }
      }
      function v(p, b, h) {
        if (typeof b == "string" && b !== "" || typeof b == "number") {
          var E = ov("" + b, p.mode, h);
          return E.return = p, E;
        }
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case Ia: {
              var O = lv(b, p.mode, h);
              return O.ref = tu(p, null, b), O.return = p, O;
            }
            case pa: {
              var x = sv(b, p.mode, h);
              return x.return = p, x;
            }
            case We: {
              var N = b._payload, F = b._init;
              return v(p, F(N), h);
            }
          }
          if (Pe(b) || ha(b)) {
            var te = la(b, p.mode, h, null);
            return te.return = p, te;
          }
          jl(p, b);
        }
        return typeof b == "function" && Bl(p), null;
      }
      function d(p, b, h, E) {
        var O = b !== null ? b.key : null;
        if (typeof h == "string" && h !== "" || typeof h == "number")
          return O !== null ? null : l(p, b, "" + h, E);
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case Ia:
              return h.key === O ? o(p, b, h, E) : null;
            case pa:
              return h.key === O ? s(p, b, h, E) : null;
            case We: {
              var x = h._payload, N = h._init;
              return d(p, b, N(x), E);
            }
          }
          if (Pe(h) || ha(h))
            return O !== null ? null : c(p, b, h, E, null);
          jl(p, h);
        }
        return typeof h == "function" && Bl(p), null;
      }
      function m(p, b, h, E, O) {
        if (typeof E == "string" && E !== "" || typeof E == "number") {
          var x = p.get(h) || null;
          return l(b, x, "" + E, O);
        }
        if (typeof E == "object" && E !== null) {
          switch (E.$$typeof) {
            case Ia: {
              var N = p.get(E.key === null ? h : E.key) || null;
              return o(b, N, E, O);
            }
            case pa: {
              var F = p.get(E.key === null ? h : E.key) || null;
              return s(b, F, E, O);
            }
            case We:
              var te = E._payload, J = E._init;
              return m(p, b, h, J(te), O);
          }
          if (Pe(E) || ha(E)) {
            var me = p.get(h) || null;
            return c(b, me, E, O, null);
          }
          jl(b, E);
        }
        return typeof E == "function" && Bl(b), null;
      }
      function y(p, b, h) {
        {
          if (typeof p != "object" || p === null)
            return b;
          switch (p.$$typeof) {
            case Ia:
            case pa:
              wm(p, h);
              var E = p.key;
              if (typeof E != "string")
                break;
              if (b === null) {
                b = /* @__PURE__ */ new Set(), b.add(E);
                break;
              }
              if (!b.has(E)) {
                b.add(E);
                break;
              }
              f("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", E);
              break;
            case We:
              var O = p._payload, x = p._init;
              y(x(O), b, h);
              break;
          }
        }
        return b;
      }
      function g(p, b, h, E) {
        for (var O = null, x = 0; x < h.length; x++) {
          var N = h[x];
          O = y(N, O, p);
        }
        for (var F = null, te = null, J = b, me = 0, K = 0, pe = null; J !== null && K < h.length; K++) {
          J.index > K ? (pe = J, J = null) : pe = J.sibling;
          var Ze = d(p, J, h[K], E);
          if (Ze === null) {
            J === null && (J = pe);
            break;
          }
          e && J && Ze.alternate === null && t(p, J), me = i(Ze, me, K), te === null ? F = Ze : te.sibling = Ze, te = Ze, J = pe;
        }
        if (K === h.length) {
          if (n(p, J), _e()) {
            var Ye = K;
            wa(p, Ye);
          }
          return F;
        }
        if (J === null) {
          for (; K < h.length; K++) {
            var Tt = v(p, h[K], E);
            Tt !== null && (me = i(Tt, me, K), te === null ? F = Tt : te.sibling = Tt, te = Tt);
          }
          if (_e()) {
            var it = K;
            wa(p, it);
          }
          return F;
        }
        for (var ut = a(p, J); K < h.length; K++) {
          var Je = m(ut, p, K, h[K], E);
          Je !== null && (e && Je.alternate !== null && ut.delete(Je.key === null ? K : Je.key), me = i(Je, me, K), te === null ? F = Je : te.sibling = Je, te = Je);
        }
        if (e && ut.forEach(function(Zr) {
          return t(p, Zr);
        }), _e()) {
          var zn = K;
          wa(p, zn);
        }
        return F;
      }
      function T(p, b, h, E) {
        var O = ha(h);
        if (typeof O != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          h[Symbol.toStringTag] === "Generator" && (cf || f("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), cf = !0), h.entries === O && (sf || f("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), sf = !0);
          var x = O.call(h);
          if (x)
            for (var N = null, F = x.next(); !F.done; F = x.next()) {
              var te = F.value;
              N = y(te, N, p);
            }
        }
        var J = O.call(h);
        if (J == null)
          throw new Error("An iterable object provided no iterator.");
        for (var me = null, K = null, pe = b, Ze = 0, Ye = 0, Tt = null, it = J.next(); pe !== null && !it.done; Ye++, it = J.next()) {
          pe.index > Ye ? (Tt = pe, pe = null) : Tt = pe.sibling;
          var ut = d(p, pe, it.value, E);
          if (ut === null) {
            pe === null && (pe = Tt);
            break;
          }
          e && pe && ut.alternate === null && t(p, pe), Ze = i(ut, Ze, Ye), K === null ? me = ut : K.sibling = ut, K = ut, pe = Tt;
        }
        if (it.done) {
          if (n(p, pe), _e()) {
            var Je = Ye;
            wa(p, Je);
          }
          return me;
        }
        if (pe === null) {
          for (; !it.done; Ye++, it = J.next()) {
            var zn = v(p, it.value, E);
            zn !== null && (Ze = i(zn, Ze, Ye), K === null ? me = zn : K.sibling = zn, K = zn);
          }
          if (_e()) {
            var Zr = Ye;
            wa(p, Zr);
          }
          return me;
        }
        for (var zu = a(p, pe); !it.done; Ye++, it = J.next()) {
          var cn = m(zu, p, Ye, it.value, E);
          cn !== null && (e && cn.alternate !== null && zu.delete(cn.key === null ? Ye : cn.key), Ze = i(cn, Ze, Ye), K === null ? me = cn : K.sibling = cn, K = cn);
        }
        if (e && zu.forEach(function(EO) {
          return t(p, EO);
        }), _e()) {
          var CO = Ye;
          wa(p, CO);
        }
        return me;
      }
      function w(p, b, h, E) {
        if (b !== null && b.tag === ce) {
          n(p, b.sibling);
          var O = r(b, h);
          return O.return = p, O;
        }
        n(p, b);
        var x = ov(h, p.mode, E);
        return x.return = p, x;
      }
      function L(p, b, h, E) {
        for (var O = h.key, x = b; x !== null; ) {
          if (x.key === O) {
            var N = h.type;
            if (N === Pa) {
              if (x.tag === Ga) {
                n(p, x.sibling);
                var F = r(x, h.props.children);
                return F.return = p, F._debugSource = h._source, F._debugOwner = h._owner, F;
              }
            } else if (x.elementType === N || // Keep this check inline so it only runs on the false path:
            Fg(x, h) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof N == "object" && N !== null && N.$$typeof === We && Am(N) === x.type) {
              n(p, x.sibling);
              var te = r(x, h.props);
              return te.ref = tu(p, x, h), te.return = p, te._debugSource = h._source, te._debugOwner = h._owner, te;
            }
            n(p, x);
            break;
          } else
            t(p, x);
          x = x.sibling;
        }
        if (h.type === Pa) {
          var J = la(h.props.children, p.mode, E, h.key);
          return J.return = p, J;
        } else {
          var me = lv(h, p.mode, E);
          return me.ref = tu(p, b, h), me.return = p, me;
        }
      }
      function Q(p, b, h, E) {
        for (var O = h.key, x = b; x !== null; ) {
          if (x.key === O)
            if (x.tag === se && x.stateNode.containerInfo === h.containerInfo && x.stateNode.implementation === h.implementation) {
              n(p, x.sibling);
              var N = r(x, h.children || []);
              return N.return = p, N;
            } else {
              n(p, x);
              break;
            }
          else
            t(p, x);
          x = x.sibling;
        }
        var F = sv(h, p.mode, E);
        return F.return = p, F;
      }
      function $(p, b, h, E) {
        var O = typeof h == "object" && h !== null && h.type === Pa && h.key === null;
        if (O && (h = h.props.children), typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case Ia:
              return u(L(p, b, h, E));
            case pa:
              return u(Q(p, b, h, E));
            case We:
              var x = h._payload, N = h._init;
              return $(p, b, N(x), E);
          }
          if (Pe(h))
            return g(p, b, h, E);
          if (ha(h))
            return T(p, b, h, E);
          jl(p, h);
        }
        return typeof h == "string" && h !== "" || typeof h == "number" ? u(w(p, b, "" + h, E)) : (typeof h == "function" && Bl(p), n(p, b));
      }
      return $;
    }
    var Lr = zm(!0), Nm = zm(!1);
    function Wx(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var n = t.child, a = qa(n, n.pendingProps);
        for (t.child = a, a.return = t; n.sibling !== null; )
          n = n.sibling, a = a.sibling = qa(n, n.pendingProps), a.return = t;
        a.sibling = null;
      }
    }
    function Ix(e, t) {
      for (var n = e.child; n !== null; )
        V0(n, t), n = n.sibling;
    }
    var pf = Xn(null), hf;
    hf = {};
    var Yl = null, wr = null, mf = null, $l = !1;
    function ql() {
      Yl = null, wr = null, mf = null, $l = !1;
    }
    function _m() {
      $l = !0;
    }
    function Hm() {
      $l = !1;
    }
    function km(e, t, n) {
      Qe(pf, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== hf && f("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = hf;
    }
    function yf(e, t) {
      var n = pf.current;
      Ge(pf, t), e._currentValue = n;
    }
    function gf(e, t, n) {
      for (var a = e; a !== null; ) {
        var r = a.alternate;
        if (hr(a.childLanes, t) ? r !== null && !hr(r.childLanes, t) && (r.childLanes = j(r.childLanes, t)) : (a.childLanes = j(a.childLanes, t), r !== null && (r.childLanes = j(r.childLanes, t))), a === n)
          break;
        a = a.return;
      }
      a !== n && f("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Px(e, t, n) {
      eD(e, t, n);
    }
    function eD(e, t, n) {
      var a = e.child;
      for (a !== null && (a.return = e); a !== null; ) {
        var r = void 0, i = a.dependencies;
        if (i !== null) {
          r = a.child;
          for (var u = i.firstContext; u !== null; ) {
            if (u.context === t) {
              if (a.tag === B) {
                var l = bi(n), o = Mn(oe, l);
                o.tag = Ql;
                var s = a.updateQueue;
                if (s !== null) {
                  var c = s.shared, v = c.pending;
                  v === null ? o.next = o : (o.next = v.next, v.next = o), c.pending = o;
                }
              }
              a.lanes = j(a.lanes, n);
              var d = a.alternate;
              d !== null && (d.lanes = j(d.lanes, n)), gf(a.return, n, e), i.lanes = j(i.lanes, n);
              break;
            }
            u = u.next;
          }
        } else if (a.tag === Nn)
          r = a.type === e.type ? null : a.child;
        else if (a.tag === Kr) {
          var m = a.return;
          if (m === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          m.lanes = j(m.lanes, n);
          var y = m.alternate;
          y !== null && (y.lanes = j(y.lanes, n)), gf(m, n, e), r = a.sibling;
        } else
          r = a.child;
        if (r !== null)
          r.return = a;
        else
          for (r = a; r !== null; ) {
            if (r === e) {
              r = null;
              break;
            }
            var g = r.sibling;
            if (g !== null) {
              g.return = r.return, r = g;
              break;
            }
            r = r.return;
          }
        a = r;
      }
    }
    function Ar(e, t) {
      Yl = e, wr = null, mf = null;
      var n = e.dependencies;
      if (n !== null) {
        var a = n.firstContext;
        a !== null && (gt(n.lanes, t) && mu(), n.firstContext = null);
      }
    }
    function be(e) {
      $l && f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (mf !== e) {
        var n = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (wr === null) {
          if (Yl === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          wr = n, Yl.dependencies = {
            lanes: C,
            firstContext: n
          };
        } else
          wr = wr.next = n;
      }
      return t;
    }
    var Ha = null;
    function bf(e) {
      Ha === null ? Ha = [e] : Ha.push(e);
    }
    function tD() {
      if (Ha !== null) {
        for (var e = 0; e < Ha.length; e++) {
          var t = Ha[e], n = t.interleaved;
          if (n !== null) {
            t.interleaved = null;
            var a = n.next, r = t.pending;
            if (r !== null) {
              var i = r.next;
              r.next = a, n.next = i;
            }
            t.pending = n;
          }
        }
        Ha = null;
      }
    }
    function Fm(e, t, n, a) {
      var r = t.interleaved;
      return r === null ? (n.next = n, bf(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Gl(e, a);
    }
    function nD(e, t, n, a) {
      var r = t.interleaved;
      r === null ? (n.next = n, bf(t)) : (n.next = r.next, r.next = n), t.interleaved = n;
    }
    function aD(e, t, n, a) {
      var r = t.interleaved;
      return r === null ? (n.next = n, bf(t)) : (n.next = r.next, r.next = n), t.interleaved = n, Gl(e, a);
    }
    function ct(e, t) {
      return Gl(e, t);
    }
    var rD = Gl;
    function Gl(e, t) {
      e.lanes = j(e.lanes, t);
      var n = e.alternate;
      n !== null && (n.lanes = j(n.lanes, t)), n === null && (e.flags & (ge | mn)) !== z && Ng(e);
      for (var a = e, r = e.return; r !== null; )
        r.childLanes = j(r.childLanes, t), n = r.alternate, n !== null ? n.childLanes = j(n.childLanes, t) : (r.flags & (ge | mn)) !== z && Ng(e), a = r, r = r.return;
      if (a.tag === Y) {
        var i = a.stateNode;
        return i;
      } else
        return null;
    }
    var Vm = 0, jm = 1, Ql = 2, Sf = 3, Xl = !1, Cf, Zl;
    Cf = !1, Zl = null;
    function Ef(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: C
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Bm(e, t) {
      var n = t.updateQueue, a = e.updateQueue;
      if (n === a) {
        var r = {
          baseState: a.baseState,
          firstBaseUpdate: a.firstBaseUpdate,
          lastBaseUpdate: a.lastBaseUpdate,
          shared: a.shared,
          effects: a.effects
        };
        t.updateQueue = r;
      }
    }
    function Mn(e, t) {
      var n = {
        eventTime: e,
        lane: t,
        tag: Vm,
        payload: null,
        callback: null,
        next: null
      };
      return n;
    }
    function Wn(e, t, n) {
      var a = e.updateQueue;
      if (a === null)
        return null;
      var r = a.shared;
      if (Zl === r && !Cf && (f("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Cf = !0), n0()) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next, i.next = t), r.pending = t, rD(e, n);
      } else
        return aD(e, r, t, n);
    }
    function Jl(e, t, n) {
      var a = t.updateQueue;
      if (a !== null) {
        var r = a.shared;
        if (eh(n)) {
          var i = r.lanes;
          i = nh(i, e.pendingLanes);
          var u = j(i, n);
          r.lanes = u, vc(e, u);
        }
      }
    }
    function Rf(e, t) {
      var n = e.updateQueue, a = e.alternate;
      if (a !== null) {
        var r = a.updateQueue;
        if (n === r) {
          var i = null, u = null, l = n.firstBaseUpdate;
          if (l !== null) {
            var o = l;
            do {
              var s = {
                eventTime: o.eventTime,
                lane: o.lane,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null
              };
              u === null ? i = u = s : (u.next = s, u = s), o = o.next;
            } while (o !== null);
            u === null ? i = u = t : (u.next = t, u = t);
          } else
            i = u = t;
          n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: u,
            shared: r.shared,
            effects: r.effects
          }, e.updateQueue = n;
          return;
        }
      }
      var c = n.lastBaseUpdate;
      c === null ? n.firstBaseUpdate = t : c.next = t, n.lastBaseUpdate = t;
    }
    function iD(e, t, n, a, r, i) {
      switch (n.tag) {
        case jm: {
          var u = n.payload;
          if (typeof u == "function") {
            _m();
            var l = u.call(i, a, r);
            {
              if (e.mode & ve) {
                Ue(!0);
                try {
                  u.call(i, a, r);
                } finally {
                  Ue(!1);
                }
              }
              Hm();
            }
            return l;
          }
          return u;
        }
        case Sf:
          e.flags = e.flags & ~tt | W;
        case Vm: {
          var o = n.payload, s;
          if (typeof o == "function") {
            _m(), s = o.call(i, a, r);
            {
              if (e.mode & ve) {
                Ue(!0);
                try {
                  o.call(i, a, r);
                } finally {
                  Ue(!1);
                }
              }
              Hm();
            }
          } else
            s = o;
          return s == null ? a : X({}, a, s);
        }
        case Ql:
          return Xl = !0, a;
      }
      return a;
    }
    function Kl(e, t, n, a) {
      var r = e.updateQueue;
      Xl = !1, Zl = r.shared;
      var i = r.firstBaseUpdate, u = r.lastBaseUpdate, l = r.shared.pending;
      if (l !== null) {
        r.shared.pending = null;
        var o = l, s = o.next;
        o.next = null, u === null ? i = s : u.next = s, u = o;
        var c = e.alternate;
        if (c !== null) {
          var v = c.updateQueue, d = v.lastBaseUpdate;
          d !== u && (d === null ? v.firstBaseUpdate = s : d.next = s, v.lastBaseUpdate = o);
        }
      }
      if (i !== null) {
        var m = r.baseState, y = C, g = null, T = null, w = null, L = i;
        do {
          var Q = L.lane, $ = L.eventTime;
          if (hr(a, Q)) {
            if (w !== null) {
              var b = {
                eventTime: $,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Le,
                tag: L.tag,
                payload: L.payload,
                callback: L.callback,
                next: null
              };
              w = w.next = b;
            }
            m = iD(e, r, L, m, t, n);
            var h = L.callback;
            if (h !== null && // If the update was already committed, we should not queue its
            // callback again.
            L.lane !== Le) {
              e.flags |= Ns;
              var E = r.effects;
              E === null ? r.effects = [L] : E.push(L);
            }
          } else {
            var p = {
              eventTime: $,
              lane: Q,
              tag: L.tag,
              payload: L.payload,
              callback: L.callback,
              next: null
            };
            w === null ? (T = w = p, g = m) : w = w.next = p, y = j(y, Q);
          }
          if (L = L.next, L === null) {
            if (l = r.shared.pending, l === null)
              break;
            var O = l, x = O.next;
            O.next = null, L = x, r.lastBaseUpdate = O, r.shared.pending = null;
          }
        } while (!0);
        w === null && (g = m), r.baseState = g, r.firstBaseUpdate = T, r.lastBaseUpdate = w;
        var N = r.shared.interleaved;
        if (N !== null) {
          var F = N;
          do
            y = j(y, F.lane), F = F.next;
          while (F !== N);
        } else i === null && (r.shared.lanes = C);
        Ou(y), e.lanes = y, e.memoizedState = m;
      }
      Zl = null;
    }
    function uD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Ym() {
      Xl = !1;
    }
    function Wl() {
      return Xl;
    }
    function $m(e, t, n) {
      var a = t.effects;
      if (t.effects = null, a !== null)
        for (var r = 0; r < a.length; r++) {
          var i = a[r], u = i.callback;
          u !== null && (i.callback = null, uD(u, n));
        }
    }
    var nu = {}, In = Xn(nu), au = Xn(nu), Il = Xn(nu);
    function Pl(e) {
      if (e === nu)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function qm() {
      var e = Pl(Il.current);
      return e;
    }
    function Tf(e, t) {
      Qe(Il, t, e), Qe(au, e, e), Qe(In, nu, e);
      var n = RT(t);
      Ge(In, e), Qe(In, n, e);
    }
    function zr(e) {
      Ge(In, e), Ge(au, e), Ge(Il, e);
    }
    function xf() {
      var e = Pl(In.current);
      return e;
    }
    function Gm(e) {
      Pl(Il.current);
      var t = Pl(In.current), n = TT(t, e.type);
      t !== n && (Qe(au, e, e), Qe(In, n, e));
    }
    function Df(e) {
      au.current === e && (Ge(In, e), Ge(au, e));
    }
    var lD = 0, Qm = 1, Xm = 1, ru = 2, Yt = Xn(lD);
    function Mf(e, t) {
      return (e & t) !== 0;
    }
    function Nr(e) {
      return e & Qm;
    }
    function Of(e, t) {
      return e & Qm | t;
    }
    function oD(e, t) {
      return e | t;
    }
    function Pn(e, t) {
      Qe(Yt, t, e);
    }
    function _r(e) {
      Ge(Yt, e);
    }
    function sD(e, t) {
      var n = e.memoizedState;
      return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
    }
    function eo(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ue) {
          var n = t.memoizedState;
          if (n !== null) {
            var a = n.dehydrated;
            if (a === null || cm(a) || Gc(a))
              return t;
          }
        } else if (t.tag === ht && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var r = (t.flags & W) !== z;
          if (r)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ft = (
      /*   */
      0
    ), Se = (
      /* */
      1
    ), nn = (
      /*  */
      2
    ), Ce = (
      /*    */
      4
    ), He = (
      /*   */
      8
    ), Uf = [];
    function Lf() {
      for (var e = 0; e < Uf.length; e++) {
        var t = Uf[e];
        t._workInProgressVersionPrimary = null;
      }
      Uf.length = 0;
    }
    function cD(e, t) {
      var n = t._getVersion, a = n(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, a] : e.mutableSourceEagerHydrationData.push(t, a);
    }
    var M = Ae.ReactCurrentDispatcher, iu = Ae.ReactCurrentBatchConfig, wf, Hr;
    wf = /* @__PURE__ */ new Set();
    var ka = C, ee = null, Ee = null, Re = null, to = !1, uu = !1, lu = 0, fD = 0, dD = 25, S = null, Ut = null, ea = -1, Af = !1;
    function I() {
      {
        var e = S;
        Ut === null ? Ut = [e] : Ut.push(e);
      }
    }
    function R() {
      {
        var e = S;
        Ut !== null && (ea++, Ut[ea] !== e && vD(e));
      }
    }
    function kr(e) {
      e != null && !Pe(e) && f("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", S, typeof e);
    }
    function vD(e) {
      {
        var t = V(ee);
        if (!wf.has(t) && (wf.add(t), Ut !== null)) {
          for (var n = "", a = 30, r = 0; r <= ea; r++) {
            for (var i = Ut[r], u = r === ea ? e : i, l = r + 1 + ". " + i; l.length < a; )
              l += " ";
            l += u + `
`, n += l;
          }
          f(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
        }
      }
    }
    function Xe() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zf(e, t) {
      if (Af)
        return !1;
      if (t === null)
        return f("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", S), !1;
      e.length !== t.length && f(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, S, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ct(e[n], t[n]))
          return !1;
      return !0;
    }
    function Fr(e, t, n, a, r, i) {
      ka = i, ee = t, Ut = e !== null ? e._debugHookTypes : null, ea = -1, Af = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = C, e !== null && e.memoizedState !== null ? M.current = hy : Ut !== null ? M.current = py : M.current = vy;
      var u = n(a, r);
      if (uu) {
        var l = 0;
        do {
          if (uu = !1, lu = 0, l >= dD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          l += 1, Af = !1, Ee = null, Re = null, t.updateQueue = null, ea = -1, M.current = my, u = n(a, r);
        } while (uu);
      }
      M.current = ho, t._debugHookTypes = Ut;
      var o = Ee !== null && Ee.next !== null;
      if (ka = C, ee = null, Ee = null, Re = null, S = null, Ut = null, ea = -1, e !== null && (e.flags & gn) !== (t.flags & gn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & q) !== A && f("Internal React error: Expected static flag was missing. Please notify the React team."), to = !1, o)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return u;
    }
    function Vr() {
      var e = lu !== 0;
      return lu = 0, e;
    }
    function Zm(e, t, n) {
      t.updateQueue = e.updateQueue, (t.mode & It) !== A ? t.flags &= ~(Ju | yn | Ht | Z) : t.flags &= ~(Ht | Z), e.lanes = nl(e.lanes, n);
    }
    function Jm() {
      if (M.current = ho, to) {
        for (var e = ee.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        to = !1;
      }
      ka = C, ee = null, Ee = null, Re = null, Ut = null, ea = -1, S = null, oy = !1, uu = !1, lu = 0;
    }
    function an() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Re === null ? ee.memoizedState = Re = e : Re = Re.next = e, Re;
    }
    function Lt() {
      var e;
      if (Ee === null) {
        var t = ee.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Ee.next;
      var n;
      if (Re === null ? n = ee.memoizedState : n = Re.next, n !== null)
        Re = n, n = Re.next, Ee = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Ee = e;
        var a = {
          memoizedState: Ee.memoizedState,
          baseState: Ee.baseState,
          baseQueue: Ee.baseQueue,
          queue: Ee.queue,
          next: null
        };
        Re === null ? ee.memoizedState = Re = a : Re = Re.next = a;
      }
      return Re;
    }
    function Km() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Nf(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function _f(e, t, n) {
      var a = an(), r;
      n !== void 0 ? r = n(t) : r = t, a.memoizedState = a.baseState = r;
      var i = {
        pending: null,
        interleaved: null,
        lanes: C,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: r
      };
      a.queue = i;
      var u = i.dispatch = yD.bind(null, ee, i);
      return [a.memoizedState, u];
    }
    function Hf(e, t, n) {
      var a = Lt(), r = a.queue;
      if (r === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      r.lastRenderedReducer = e;
      var i = Ee, u = i.baseQueue, l = r.pending;
      if (l !== null) {
        if (u !== null) {
          var o = u.next, s = l.next;
          u.next = s, l.next = o;
        }
        i.baseQueue !== u && f("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), i.baseQueue = u = l, r.pending = null;
      }
      if (u !== null) {
        var c = u.next, v = i.baseState, d = null, m = null, y = null, g = c;
        do {
          var T = g.lane;
          if (hr(ka, T)) {
            if (y !== null) {
              var L = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Le,
                action: g.action,
                hasEagerState: g.hasEagerState,
                eagerState: g.eagerState,
                next: null
              };
              y = y.next = L;
            }
            if (g.hasEagerState)
              v = g.eagerState;
            else {
              var Q = g.action;
              v = e(v, Q);
            }
          } else {
            var w = {
              lane: T,
              action: g.action,
              hasEagerState: g.hasEagerState,
              eagerState: g.eagerState,
              next: null
            };
            y === null ? (m = y = w, d = v) : y = y.next = w, ee.lanes = j(ee.lanes, T), Ou(T);
          }
          g = g.next;
        } while (g !== null && g !== c);
        y === null ? d = v : y.next = m, Ct(v, a.memoizedState) || mu(), a.memoizedState = v, a.baseState = d, a.baseQueue = y, r.lastRenderedState = v;
      }
      var $ = r.interleaved;
      if ($ !== null) {
        var p = $;
        do {
          var b = p.lane;
          ee.lanes = j(ee.lanes, b), Ou(b), p = p.next;
        } while (p !== $);
      } else u === null && (r.lanes = C);
      var h = r.dispatch;
      return [a.memoizedState, h];
    }
    function kf(e, t, n) {
      var a = Lt(), r = a.queue;
      if (r === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      r.lastRenderedReducer = e;
      var i = r.dispatch, u = r.pending, l = a.memoizedState;
      if (u !== null) {
        r.pending = null;
        var o = u.next, s = o;
        do {
          var c = s.action;
          l = e(l, c), s = s.next;
        } while (s !== o);
        Ct(l, a.memoizedState) || mu(), a.memoizedState = l, a.baseQueue === null && (a.baseState = l), r.lastRenderedState = l;
      }
      return [l, i];
    }
    function MO(e, t, n) {
    }
    function OO(e, t, n) {
    }
    function Ff(e, t, n) {
      var a = ee, r = an(), i, u = _e();
      if (u) {
        if (n === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        i = n(), Hr || i !== n() && (f("The result of getServerSnapshot should be cached to avoid an infinite loop"), Hr = !0);
      } else {
        if (i = t(), !Hr) {
          var l = t();
          Ct(i, l) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), Hr = !0);
        }
        var o = No();
        if (o === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tl(o, ka) || Wm(a, t, i);
      }
      r.memoizedState = i;
      var s = {
        value: i,
        getSnapshot: t
      };
      return r.queue = s, uo(Pm.bind(null, a, s, e), [e]), a.flags |= Ht, ou(Se | He, Im.bind(null, a, s, i, t), void 0, null), i;
    }
    function no(e, t, n) {
      var a = ee, r = Lt(), i = t();
      if (!Hr) {
        var u = t();
        Ct(i, u) || (f("The result of getSnapshot should be cached to avoid an infinite loop"), Hr = !0);
      }
      var l = r.memoizedState, o = !Ct(l, i);
      o && (r.memoizedState = i, mu());
      var s = r.queue;
      if (cu(Pm.bind(null, a, s, e), [e]), s.getSnapshot !== t || o || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Re !== null && Re.memoizedState.tag & Se) {
        a.flags |= Ht, ou(Se | He, Im.bind(null, a, s, i, t), void 0, null);
        var c = No();
        if (c === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        tl(c, ka) || Wm(a, t, i);
      }
      return i;
    }
    function Wm(e, t, n) {
      e.flags |= Zu;
      var a = {
        getSnapshot: t,
        value: n
      }, r = ee.updateQueue;
      if (r === null)
        r = Km(), ee.updateQueue = r, r.stores = [a];
      else {
        var i = r.stores;
        i === null ? r.stores = [a] : i.push(a);
      }
    }
    function Im(e, t, n, a) {
      t.value = n, t.getSnapshot = a, ey(t) && ty(e);
    }
    function Pm(e, t, n) {
      var a = function() {
        ey(t) && ty(e);
      };
      return n(a);
    }
    function ey(e) {
      var t = e.getSnapshot, n = e.value;
      try {
        var a = t();
        return !Ct(n, a);
      } catch {
        return !0;
      }
    }
    function ty(e) {
      var t = ct(e, H);
      t !== null && Me(t, e, H, oe);
    }
    function ao(e) {
      var t = an();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        interleaved: null,
        lanes: C,
        dispatch: null,
        lastRenderedReducer: Nf,
        lastRenderedState: e
      };
      t.queue = n;
      var a = n.dispatch = gD.bind(null, ee, n);
      return [t.memoizedState, a];
    }
    function Vf(e) {
      return Hf(Nf);
    }
    function jf(e) {
      return kf(Nf);
    }
    function ou(e, t, n, a) {
      var r = {
        tag: e,
        create: t,
        destroy: n,
        deps: a,
        // Circular
        next: null
      }, i = ee.updateQueue;
      if (i === null)
        i = Km(), ee.updateQueue = i, i.lastEffect = r.next = r;
      else {
        var u = i.lastEffect;
        if (u === null)
          i.lastEffect = r.next = r;
        else {
          var l = u.next;
          u.next = r, r.next = l, i.lastEffect = r;
        }
      }
      return r;
    }
    function Bf(e) {
      var t = an();
      {
        var n = {
          current: e
        };
        return t.memoizedState = n, n;
      }
    }
    function ro(e) {
      var t = Lt();
      return t.memoizedState;
    }
    function su(e, t, n, a) {
      var r = an(), i = a === void 0 ? null : a;
      ee.flags |= e, r.memoizedState = ou(Se | t, n, void 0, i);
    }
    function io(e, t, n, a) {
      var r = Lt(), i = a === void 0 ? null : a, u = void 0;
      if (Ee !== null) {
        var l = Ee.memoizedState;
        if (u = l.destroy, i !== null) {
          var o = l.deps;
          if (zf(i, o)) {
            r.memoizedState = ou(t, n, u, i);
            return;
          }
        }
      }
      ee.flags |= e, r.memoizedState = ou(Se | t, n, u, i);
    }
    function uo(e, t) {
      return (ee.mode & It) !== A ? su(Ju | Ht | ks, He, e, t) : su(Ht | ks, He, e, t);
    }
    function cu(e, t) {
      return io(Ht, He, e, t);
    }
    function Yf(e, t) {
      return su(Z, nn, e, t);
    }
    function lo(e, t) {
      return io(Z, nn, e, t);
    }
    function $f(e, t) {
      var n = Z;
      return n |= Sa, (ee.mode & It) !== A && (n |= yn), su(n, Ce, e, t);
    }
    function oo(e, t) {
      return io(Z, Ce, e, t);
    }
    function ny(e, t) {
      if (typeof t == "function") {
        var n = t, a = e();
        return n(a), function() {
          n(null);
        };
      } else if (t != null) {
        var r = t;
        r.hasOwnProperty("current") || f("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(r).join(", ") + "}");
        var i = e();
        return r.current = i, function() {
          r.current = null;
        };
      }
    }
    function qf(e, t, n) {
      typeof t != "function" && f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = n != null ? n.concat([e]) : null, r = Z;
      return r |= Sa, (ee.mode & It) !== A && (r |= yn), su(r, Ce, ny.bind(null, t, e), a);
    }
    function so(e, t, n) {
      typeof t != "function" && f("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var a = n != null ? n.concat([e]) : null;
      return io(Z, Ce, ny.bind(null, t, e), a);
    }
    function pD(e, t) {
    }
    var co = pD;
    function Gf(e, t) {
      var n = an(), a = t === void 0 ? null : t;
      return n.memoizedState = [e, a], e;
    }
    function fo(e, t) {
      var n = Lt(), a = t === void 0 ? null : t, r = n.memoizedState;
      if (r !== null && a !== null) {
        var i = r[1];
        if (zf(a, i))
          return r[0];
      }
      return n.memoizedState = [e, a], e;
    }
    function Qf(e, t) {
      var n = an(), a = t === void 0 ? null : t, r = e();
      return n.memoizedState = [r, a], r;
    }
    function vo(e, t) {
      var n = Lt(), a = t === void 0 ? null : t, r = n.memoizedState;
      if (r !== null && a !== null) {
        var i = r[1];
        if (zf(a, i))
          return r[0];
      }
      var u = e();
      return n.memoizedState = [u, a], u;
    }
    function Xf(e) {
      var t = an();
      return t.memoizedState = e, e;
    }
    function ay(e) {
      var t = Lt(), n = Ee, a = n.memoizedState;
      return iy(t, a, e);
    }
    function ry(e) {
      var t = Lt();
      if (Ee === null)
        return t.memoizedState = e, e;
      var n = Ee.memoizedState;
      return iy(t, n, e);
    }
    function iy(e, t, n) {
      var a = !PC(ka);
      if (a) {
        if (!Ct(n, t)) {
          var r = th();
          ee.lanes = j(ee.lanes, r), Ou(r), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, mu()), e.memoizedState = n, n;
    }
    function hD(e, t, n) {
      var a = Ft();
      we(oE(a, Sn)), e(!0);
      var r = iu.transition;
      iu.transition = {};
      var i = iu.transition;
      iu.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (we(a), iu.transition = r, r === null && i._updatedFibers) {
          var u = i._updatedFibers.size;
          u > 10 && oa("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), i._updatedFibers.clear();
        }
      }
    }
    function Zf() {
      var e = ao(!1), t = e[0], n = e[1], a = hD.bind(null, n), r = an();
      return r.memoizedState = a, [t, a];
    }
    function uy() {
      var e = Vf(), t = e[0], n = Lt(), a = n.memoizedState;
      return [t, a];
    }
    function ly() {
      var e = jf(), t = e[0], n = Lt(), a = n.memoizedState;
      return [t, a];
    }
    var oy = !1;
    function mD() {
      return oy;
    }
    function Jf() {
      var e = an(), t = No(), n = t.identifierPrefix, a;
      if (_e()) {
        var r = zx();
        a = ":" + n + "R" + r;
        var i = lu++;
        i > 0 && (a += "H" + i.toString(32)), a += ":";
      } else {
        var u = fD++;
        a = ":" + n + "r" + u.toString(32) + ":";
      }
      return e.memoizedState = a, a;
    }
    function po() {
      var e = Lt(), t = e.memoizedState;
      return t;
    }
    function yD(e, t, n) {
      typeof arguments[3] == "function" && f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ia(e), r = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sy(e))
        cy(t, r);
      else {
        var i = Fm(e, t, r, a);
        if (i !== null) {
          var u = rt();
          Me(i, e, a, u), fy(i, t, a);
        }
      }
      dy(e, a);
    }
    function gD(e, t, n) {
      typeof arguments[3] == "function" && f("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var a = ia(e), r = {
        lane: a,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (sy(e))
        cy(t, r);
      else {
        var i = e.alternate;
        if (e.lanes === C && (i === null || i.lanes === C)) {
          var u = t.lastRenderedReducer;
          if (u !== null) {
            var l;
            l = M.current, M.current = $t;
            try {
              var o = t.lastRenderedState, s = u(o, n);
              if (r.hasEagerState = !0, r.eagerState = s, Ct(s, o)) {
                nD(e, t, r, a);
                return;
              }
            } catch {
            } finally {
              M.current = l;
            }
          }
        }
        var c = Fm(e, t, r, a);
        if (c !== null) {
          var v = rt();
          Me(c, e, a, v), fy(c, t, a);
        }
      }
      dy(e, a);
    }
    function sy(e) {
      var t = e.alternate;
      return e === ee || t !== null && t === ee;
    }
    function cy(e, t) {
      uu = to = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function fy(e, t, n) {
      if (eh(n)) {
        var a = t.lanes;
        a = nh(a, e.pendingLanes);
        var r = j(a, n);
        t.lanes = r, vc(e, r);
      }
    }
    function dy(e, t, n) {
      Ys(e, t);
    }
    var ho = {
      readContext: be,
      useCallback: Xe,
      useContext: Xe,
      useEffect: Xe,
      useImperativeHandle: Xe,
      useInsertionEffect: Xe,
      useLayoutEffect: Xe,
      useMemo: Xe,
      useReducer: Xe,
      useRef: Xe,
      useState: Xe,
      useDebugValue: Xe,
      useDeferredValue: Xe,
      useTransition: Xe,
      useMutableSource: Xe,
      useSyncExternalStore: Xe,
      useId: Xe,
      unstable_isNewReconciler: _n
    }, vy = null, py = null, hy = null, my = null, rn = null, $t = null, mo = null;
    {
      var Kf = function() {
        f("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, k = function() {
        f("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      vy = {
        readContext: function(e) {
          return be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", I(), kr(t), Gf(e, t);
        },
        useContext: function(e) {
          return S = "useContext", I(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", I(), kr(t), uo(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", I(), kr(n), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", I(), kr(t), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", I(), kr(t), $f(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", I(), kr(t);
          var n = M.current;
          M.current = rn;
          try {
            return Qf(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", I();
          var a = M.current;
          M.current = rn;
          try {
            return _f(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", I(), Bf(e);
        },
        useState: function(e) {
          S = "useState", I();
          var t = M.current;
          M.current = rn;
          try {
            return ao(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", I(), void 0;
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", I(), Xf(e);
        },
        useTransition: function() {
          return S = "useTransition", I(), Zf();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", I(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", I(), Ff(e, t, n);
        },
        useId: function() {
          return S = "useId", I(), Jf();
        },
        unstable_isNewReconciler: _n
      }, py = {
        readContext: function(e) {
          return be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", R(), Gf(e, t);
        },
        useContext: function(e) {
          return S = "useContext", R(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", R(), uo(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", R(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", R(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", R(), $f(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", R();
          var n = M.current;
          M.current = rn;
          try {
            return Qf(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", R();
          var a = M.current;
          M.current = rn;
          try {
            return _f(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", R(), Bf(e);
        },
        useState: function(e) {
          S = "useState", R();
          var t = M.current;
          M.current = rn;
          try {
            return ao(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", R(), void 0;
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", R(), Xf(e);
        },
        useTransition: function() {
          return S = "useTransition", R(), Zf();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", R(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", R(), Ff(e, t, n);
        },
        useId: function() {
          return S = "useId", R(), Jf();
        },
        unstable_isNewReconciler: _n
      }, hy = {
        readContext: function(e) {
          return be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", R(), fo(e, t);
        },
        useContext: function(e) {
          return S = "useContext", R(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", R(), cu(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", R(), so(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", R(), lo(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", R(), oo(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", R();
          var n = M.current;
          M.current = $t;
          try {
            return vo(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", R();
          var a = M.current;
          M.current = $t;
          try {
            return Hf(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", R(), ro();
        },
        useState: function(e) {
          S = "useState", R();
          var t = M.current;
          M.current = $t;
          try {
            return Vf(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", R(), co();
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", R(), ay(e);
        },
        useTransition: function() {
          return S = "useTransition", R(), uy();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", R(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", R(), no(e, t);
        },
        useId: function() {
          return S = "useId", R(), po();
        },
        unstable_isNewReconciler: _n
      }, my = {
        readContext: function(e) {
          return be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", R(), fo(e, t);
        },
        useContext: function(e) {
          return S = "useContext", R(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", R(), cu(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", R(), so(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", R(), lo(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", R(), oo(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", R();
          var n = M.current;
          M.current = mo;
          try {
            return vo(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", R();
          var a = M.current;
          M.current = mo;
          try {
            return kf(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", R(), ro();
        },
        useState: function(e) {
          S = "useState", R();
          var t = M.current;
          M.current = mo;
          try {
            return jf(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", R(), co();
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", R(), ry(e);
        },
        useTransition: function() {
          return S = "useTransition", R(), ly();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", R(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", R(), no(e, t);
        },
        useId: function() {
          return S = "useId", R(), po();
        },
        unstable_isNewReconciler: _n
      }, rn = {
        readContext: function(e) {
          return Kf(), be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", k(), I(), Gf(e, t);
        },
        useContext: function(e) {
          return S = "useContext", k(), I(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", k(), I(), uo(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", k(), I(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", k(), I(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", k(), I(), $f(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", k(), I();
          var n = M.current;
          M.current = rn;
          try {
            return Qf(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", k(), I();
          var a = M.current;
          M.current = rn;
          try {
            return _f(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", k(), I(), Bf(e);
        },
        useState: function(e) {
          S = "useState", k(), I();
          var t = M.current;
          M.current = rn;
          try {
            return ao(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", k(), I(), void 0;
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", k(), I(), Xf(e);
        },
        useTransition: function() {
          return S = "useTransition", k(), I(), Zf();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", k(), I(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", k(), I(), Ff(e, t, n);
        },
        useId: function() {
          return S = "useId", k(), I(), Jf();
        },
        unstable_isNewReconciler: _n
      }, $t = {
        readContext: function(e) {
          return Kf(), be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", k(), R(), fo(e, t);
        },
        useContext: function(e) {
          return S = "useContext", k(), R(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", k(), R(), cu(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", k(), R(), so(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", k(), R(), lo(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", k(), R(), oo(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", k(), R();
          var n = M.current;
          M.current = $t;
          try {
            return vo(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", k(), R();
          var a = M.current;
          M.current = $t;
          try {
            return Hf(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", k(), R(), ro();
        },
        useState: function(e) {
          S = "useState", k(), R();
          var t = M.current;
          M.current = $t;
          try {
            return Vf(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", k(), R(), co();
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", k(), R(), ay(e);
        },
        useTransition: function() {
          return S = "useTransition", k(), R(), uy();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", k(), R(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", k(), R(), no(e, t);
        },
        useId: function() {
          return S = "useId", k(), R(), po();
        },
        unstable_isNewReconciler: _n
      }, mo = {
        readContext: function(e) {
          return Kf(), be(e);
        },
        useCallback: function(e, t) {
          return S = "useCallback", k(), R(), fo(e, t);
        },
        useContext: function(e) {
          return S = "useContext", k(), R(), be(e);
        },
        useEffect: function(e, t) {
          return S = "useEffect", k(), R(), cu(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return S = "useImperativeHandle", k(), R(), so(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return S = "useInsertionEffect", k(), R(), lo(e, t);
        },
        useLayoutEffect: function(e, t) {
          return S = "useLayoutEffect", k(), R(), oo(e, t);
        },
        useMemo: function(e, t) {
          S = "useMemo", k(), R();
          var n = M.current;
          M.current = $t;
          try {
            return vo(e, t);
          } finally {
            M.current = n;
          }
        },
        useReducer: function(e, t, n) {
          S = "useReducer", k(), R();
          var a = M.current;
          M.current = $t;
          try {
            return kf(e, t, n);
          } finally {
            M.current = a;
          }
        },
        useRef: function(e) {
          return S = "useRef", k(), R(), ro();
        },
        useState: function(e) {
          S = "useState", k(), R();
          var t = M.current;
          M.current = $t;
          try {
            return jf(e);
          } finally {
            M.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return S = "useDebugValue", k(), R(), co();
        },
        useDeferredValue: function(e) {
          return S = "useDeferredValue", k(), R(), ry(e);
        },
        useTransition: function() {
          return S = "useTransition", k(), R(), ly();
        },
        useMutableSource: function(e, t, n) {
          return S = "useMutableSource", k(), R(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return S = "useSyncExternalStore", k(), R(), no(e, t);
        },
        useId: function() {
          return S = "useId", k(), R(), po();
        },
        unstable_isNewReconciler: _n
      };
    }
    var ta = $e.unstable_now, yy = 0, yo = -1, fu = -1, go = -1, Wf = !1, bo = !1;
    function gy() {
      return Wf;
    }
    function bD() {
      bo = !0;
    }
    function SD() {
      Wf = !1, bo = !1;
    }
    function CD() {
      Wf = bo, bo = !1;
    }
    function by() {
      return yy;
    }
    function Sy() {
      yy = ta();
    }
    function If(e) {
      fu = ta(), e.actualStartTime < 0 && (e.actualStartTime = ta());
    }
    function Cy(e) {
      fu = -1;
    }
    function So(e, t) {
      if (fu >= 0) {
        var n = ta() - fu;
        e.actualDuration += n, t && (e.selfBaseDuration = n), fu = -1;
      }
    }
    function un(e) {
      if (yo >= 0) {
        var t = ta() - yo;
        yo = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case Y:
              var a = n.stateNode;
              a.effectDuration += t;
              return;
            case zt:
              var r = n.stateNode;
              r.effectDuration += t;
              return;
          }
          n = n.return;
        }
      }
    }
    function Pf(e) {
      if (go >= 0) {
        var t = ta() - go;
        go = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case Y:
              var a = n.stateNode;
              a !== null && (a.passiveEffectDuration += t);
              return;
            case zt:
              var r = n.stateNode;
              r !== null && (r.passiveEffectDuration += t);
              return;
          }
          n = n.return;
        }
      }
    }
    function ln() {
      yo = ta();
    }
    function ed() {
      go = ta();
    }
    function td(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function qt(e, t) {
      if (e && e.defaultProps) {
        var n = X({}, t), a = e.defaultProps;
        for (var r in a)
          n[r] === void 0 && (n[r] = a[r]);
        return n;
      }
      return t;
    }
    var nd = {}, ad, rd, id, ud, ld, Ey, Co, od, sd, cd, du;
    {
      ad = /* @__PURE__ */ new Set(), rd = /* @__PURE__ */ new Set(), id = /* @__PURE__ */ new Set(), ud = /* @__PURE__ */ new Set(), od = /* @__PURE__ */ new Set(), ld = /* @__PURE__ */ new Set(), sd = /* @__PURE__ */ new Set(), cd = /* @__PURE__ */ new Set(), du = /* @__PURE__ */ new Set();
      var Ry = /* @__PURE__ */ new Set();
      Co = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          Ry.has(n) || (Ry.add(n), f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Ey = function(e, t) {
        if (t === void 0) {
          var n = re(e) || "Component";
          ld.has(n) || (ld.add(n), f("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      }, Object.defineProperty(nd, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(nd);
    }
    function fd(e, t, n, a) {
      var r = e.memoizedState, i = n(a, r);
      {
        if (e.mode & ve) {
          Ue(!0);
          try {
            i = n(a, r);
          } finally {
            Ue(!1);
          }
        }
        Ey(t, i);
      }
      var u = i == null ? r : X({}, r, i);
      if (e.memoizedState = u, e.lanes === C) {
        var l = e.updateQueue;
        l.baseState = u;
      }
    }
    var dd = {
      isMounted: dC,
      enqueueSetState: function(e, t, n) {
        var a = lr(e), r = rt(), i = ia(a), u = Mn(r, i);
        u.payload = t, n != null && (Co(n, "setState"), u.callback = n);
        var l = Wn(a, u, i);
        l !== null && (Me(l, a, i, r), Jl(l, a, i)), Ys(a, i);
      },
      enqueueReplaceState: function(e, t, n) {
        var a = lr(e), r = rt(), i = ia(a), u = Mn(r, i);
        u.tag = jm, u.payload = t, n != null && (Co(n, "replaceState"), u.callback = n);
        var l = Wn(a, u, i);
        l !== null && (Me(l, a, i, r), Jl(l, a, i)), Ys(a, i);
      },
      enqueueForceUpdate: function(e, t) {
        var n = lr(e), a = rt(), r = ia(n), i = Mn(a, r);
        i.tag = Ql, t != null && (Co(t, "forceUpdate"), i.callback = t);
        var u = Wn(n, i, r);
        u !== null && (Me(u, n, r, a), Jl(u, n, r)), $C(n, r);
      }
    };
    function Ty(e, t, n, a, r, i, u) {
      var l = e.stateNode;
      if (typeof l.shouldComponentUpdate == "function") {
        var o = l.shouldComponentUpdate(a, i, u);
        {
          if (e.mode & ve) {
            Ue(!0);
            try {
              o = l.shouldComponentUpdate(a, i, u);
            } finally {
              Ue(!1);
            }
          }
          o === void 0 && f("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", re(t) || "Component");
        }
        return o;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ni(n, a) || !Ni(r, i) : !0;
    }
    function ED(e, t, n) {
      var a = e.stateNode;
      {
        var r = re(t) || "Component", i = a.render;
        i || (t.prototype && typeof t.prototype.render == "function" ? f("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", r) : f("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", r)), a.getInitialState && !a.getInitialState.isReactClassApproved && !a.state && f("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", r), a.getDefaultProps && !a.getDefaultProps.isReactClassApproved && f("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", r), a.propTypes && f("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", r), a.contextType && f("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", r), t.childContextTypes && !du.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ve) === A && (du.add(t), f(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), t.contextTypes && !du.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & ve) === A && (du.add(t), f(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, r)), a.contextTypes && f("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", r), t.contextType && t.contextTypes && !sd.has(t) && (sd.add(t), f("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", r)), typeof a.componentShouldUpdate == "function" && f("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", r), t.prototype && t.prototype.isPureReactComponent && typeof a.shouldComponentUpdate < "u" && f("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", re(t) || "A pure component"), typeof a.componentDidUnmount == "function" && f("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", r), typeof a.componentDidReceiveProps == "function" && f("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", r), typeof a.componentWillRecieveProps == "function" && f("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", r), typeof a.UNSAFE_componentWillRecieveProps == "function" && f("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", r);
        var u = a.props !== n;
        a.props !== void 0 && u && f("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", r, r), a.defaultProps && f("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", r, r), typeof a.getSnapshotBeforeUpdate == "function" && typeof a.componentDidUpdate != "function" && !id.has(t) && (id.add(t), f("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", re(t))), typeof a.getDerivedStateFromProps == "function" && f("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof a.getDerivedStateFromError == "function" && f("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", r), typeof t.getSnapshotBeforeUpdate == "function" && f("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", r);
        var l = a.state;
        l && (typeof l != "object" || Pe(l)) && f("%s.state: must be set to an object or null", r), typeof a.getChildContext == "function" && typeof t.childContextTypes != "object" && f("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", r);
      }
    }
    function xy(e, t) {
      t.updater = dd, e.stateNode = t, lC(t, e), t._reactInternalInstance = nd;
    }
    function Dy(e, t, n) {
      var a = !1, r = Et, i = Et, u = t.contextType;
      if ("contextType" in t) {
        var l = (
          // Allow null for conditional declaration
          u === null || u !== void 0 && u.$$typeof === rs && u._context === void 0
        );
        if (!l && !cd.has(t)) {
          cd.add(t);
          var o = "";
          u === void 0 ? o = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof u != "object" ? o = " However, it is set to a " + typeof u + "." : u.$$typeof === as ? o = " Did you accidentally pass the Context.Provider instead?" : u._context !== void 0 ? o = " Did you accidentally pass the Context.Consumer instead?" : o = " However, it is set to an object with keys {" + Object.keys(u).join(", ") + "}.", f("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", re(t) || "Component", o);
        }
      }
      if (typeof u == "object" && u !== null)
        i = be(u);
      else {
        r = xr(e, t, !0);
        var s = t.contextTypes;
        a = s != null, i = a ? Dr(e, r) : Et;
      }
      var c = new t(n, i);
      if (e.mode & ve) {
        Ue(!0);
        try {
          c = new t(n, i);
        } finally {
          Ue(!1);
        }
      }
      var v = e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null;
      xy(e, c);
      {
        if (typeof t.getDerivedStateFromProps == "function" && v === null) {
          var d = re(t) || "Component";
          rd.has(d) || (rd.add(d), f("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", d, c.state === null ? "null" : "undefined", d));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function") {
          var m = null, y = null, g = null;
          if (typeof c.componentWillMount == "function" && c.componentWillMount.__suppressDeprecationWarning !== !0 ? m = "componentWillMount" : typeof c.UNSAFE_componentWillMount == "function" && (m = "UNSAFE_componentWillMount"), typeof c.componentWillReceiveProps == "function" && c.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? y = "componentWillReceiveProps" : typeof c.UNSAFE_componentWillReceiveProps == "function" && (y = "UNSAFE_componentWillReceiveProps"), typeof c.componentWillUpdate == "function" && c.componentWillUpdate.__suppressDeprecationWarning !== !0 ? g = "componentWillUpdate" : typeof c.UNSAFE_componentWillUpdate == "function" && (g = "UNSAFE_componentWillUpdate"), m !== null || y !== null || g !== null) {
            var T = re(t) || "Component", w = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ud.has(T) || (ud.add(T), f(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, T, w, m !== null ? `
  ` + m : "", y !== null ? `
  ` + y : "", g !== null ? `
  ` + g : ""));
          }
        }
      }
      return a && hm(e, r, i), c;
    }
    function RD(e, t) {
      var n = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (f("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", V(e) || "Component"), dd.enqueueReplaceState(t, t.state, null));
    }
    function My(e, t, n, a) {
      var r = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== r) {
        {
          var i = V(e) || "Component";
          ad.has(i) || (ad.add(i), f("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", i));
        }
        dd.enqueueReplaceState(t, t.state, null);
      }
    }
    function vd(e, t, n, a) {
      ED(e, t, n);
      var r = e.stateNode;
      r.props = n, r.state = e.memoizedState, r.refs = {}, Ef(e);
      var i = t.contextType;
      if (typeof i == "object" && i !== null)
        r.context = be(i);
      else {
        var u = xr(e, t, !0);
        r.context = Dr(e, u);
      }
      {
        if (r.state === n) {
          var l = re(t) || "Component";
          od.has(l) || (od.add(l), f("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", l));
        }
        e.mode & ve && Bt.recordLegacyContextWarning(e, r), Bt.recordUnsafeLifecycleWarnings(e, r);
      }
      r.state = e.memoizedState;
      var o = t.getDerivedStateFromProps;
      if (typeof o == "function" && (fd(e, t, o, n), r.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof r.getSnapshotBeforeUpdate != "function" && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (RD(e, r), Kl(e, n, r, a), r.state = e.memoizedState), typeof r.componentDidMount == "function") {
        var s = Z;
        s |= Sa, (e.mode & It) !== A && (s |= yn), e.flags |= s;
      }
    }
    function TD(e, t, n, a) {
      var r = e.stateNode, i = e.memoizedProps;
      r.props = i;
      var u = r.context, l = t.contextType, o = Et;
      if (typeof l == "object" && l !== null)
        o = be(l);
      else {
        var s = xr(e, t, !0);
        o = Dr(e, s);
      }
      var c = t.getDerivedStateFromProps, v = typeof c == "function" || typeof r.getSnapshotBeforeUpdate == "function";
      !v && (typeof r.UNSAFE_componentWillReceiveProps == "function" || typeof r.componentWillReceiveProps == "function") && (i !== n || u !== o) && My(e, r, n, o), Ym();
      var d = e.memoizedState, m = r.state = d;
      if (Kl(e, n, r, a), m = e.memoizedState, i === n && d === m && !wl() && !Wl()) {
        if (typeof r.componentDidMount == "function") {
          var y = Z;
          y |= Sa, (e.mode & It) !== A && (y |= yn), e.flags |= y;
        }
        return !1;
      }
      typeof c == "function" && (fd(e, t, c, n), m = e.memoizedState);
      var g = Wl() || Ty(e, t, i, n, d, m, o);
      if (g) {
        if (!v && (typeof r.UNSAFE_componentWillMount == "function" || typeof r.componentWillMount == "function") && (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function") {
          var T = Z;
          T |= Sa, (e.mode & It) !== A && (T |= yn), e.flags |= T;
        }
      } else {
        if (typeof r.componentDidMount == "function") {
          var w = Z;
          w |= Sa, (e.mode & It) !== A && (w |= yn), e.flags |= w;
        }
        e.memoizedProps = n, e.memoizedState = m;
      }
      return r.props = n, r.state = m, r.context = o, g;
    }
    function xD(e, t, n, a, r) {
      var i = t.stateNode;
      Bm(e, t);
      var u = t.memoizedProps, l = t.type === t.elementType ? u : qt(t.type, u);
      i.props = l;
      var o = t.pendingProps, s = i.context, c = n.contextType, v = Et;
      if (typeof c == "object" && c !== null)
        v = be(c);
      else {
        var d = xr(t, n, !0);
        v = Dr(t, d);
      }
      var m = n.getDerivedStateFromProps, y = typeof m == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      !y && (typeof i.UNSAFE_componentWillReceiveProps == "function" || typeof i.componentWillReceiveProps == "function") && (u !== o || s !== v) && My(t, i, a, v), Ym();
      var g = t.memoizedState, T = i.state = g;
      if (Kl(t, a, i, r), T = t.memoizedState, u === o && g === T && !wl() && !Wl() && !Sv)
        return typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || g !== e.memoizedState) && (t.flags |= Z), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || g !== e.memoizedState) && (t.flags |= ga), !1;
      typeof m == "function" && (fd(t, n, m, a), T = t.memoizedState);
      var w = Wl() || Ty(t, n, l, a, g, T, v) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      Sv;
      return w ? (!y && (typeof i.UNSAFE_componentWillUpdate == "function" || typeof i.componentWillUpdate == "function") && (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, T, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(a, T, v)), typeof i.componentDidUpdate == "function" && (t.flags |= Z), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= ga)) : (typeof i.componentDidUpdate == "function" && (u !== e.memoizedProps || g !== e.memoizedState) && (t.flags |= Z), typeof i.getSnapshotBeforeUpdate == "function" && (u !== e.memoizedProps || g !== e.memoizedState) && (t.flags |= ga), t.memoizedProps = a, t.memoizedState = T), i.props = a, i.state = T, i.context = v, w;
    }
    function Fa(e, t) {
      return {
        value: e,
        source: t,
        stack: qv(t),
        digest: null
      };
    }
    function pd(e, t, n) {
      return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
      };
    }
    function DD(e, t) {
      return !0;
    }
    function hd(e, t) {
      try {
        var n = DD(e, t);
        if (n === !1)
          return;
        var a = t.value, r = t.source, i = t.stack, u = i !== null ? i : "";
        if (a != null && a._suppressLogging) {
          if (e.tag === B)
            return;
          console.error(a);
        }
        var l = r ? V(r) : null, o = l ? "The above error occurred in the <" + l + "> component:" : "The above error occurred in one of your React components:", s;
        if (e.tag === Y)
          s = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var c = V(e) || "Anonymous";
          s = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + c + ".");
        }
        var v = o + `
` + u + `

` + ("" + s);
        console.error(v);
      } catch (d) {
        setTimeout(function() {
          throw d;
        });
      }
    }
    var MD = typeof WeakMap == "function" ? WeakMap : Map;
    function Oy(e, t, n) {
      var a = Mn(oe, n);
      a.tag = Sf, a.payload = {
        element: null
      };
      var r = t.value;
      return a.callback = function() {
        b0(r), hd(e, t);
      }, a;
    }
    function md(e, t, n) {
      var a = Mn(oe, n);
      a.tag = Sf;
      var r = e.type.getDerivedStateFromError;
      if (typeof r == "function") {
        var i = t.value;
        a.payload = function() {
          return r(i);
        }, a.callback = function() {
          Vg(e), hd(e, t);
        };
      }
      var u = e.stateNode;
      return u !== null && typeof u.componentDidCatch == "function" && (a.callback = function() {
        Vg(e), hd(e, t), typeof r != "function" && y0(this);
        var o = t.value, s = t.stack;
        this.componentDidCatch(o, {
          componentStack: s !== null ? s : ""
        }), typeof r != "function" && (gt(e.lanes, H) || f("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", V(e) || "Unknown"));
      }), a;
    }
    function Uy(e, t, n) {
      var a = e.pingCache, r;
      if (a === null ? (a = e.pingCache = new MD(), r = /* @__PURE__ */ new Set(), a.set(t, r)) : (r = a.get(t), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(t, r))), !r.has(n)) {
        r.add(n);
        var i = S0.bind(null, e, t, n);
        kt && Uu(e, n), t.then(i, i);
      }
    }
    function OD(e, t, n, a) {
      var r = e.updateQueue;
      if (r === null) {
        var i = /* @__PURE__ */ new Set();
        i.add(n), e.updateQueue = i;
      } else
        r.add(n);
    }
    function UD(e, t) {
      var n = e.tag;
      if ((e.mode & q) === A && (n === ne || n === ae || n === le)) {
        var a = e.alternate;
        a ? (e.updateQueue = a.updateQueue, e.memoizedState = a.memoizedState, e.lanes = a.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Ly(e) {
      var t = e;
      do {
        if (t.tag === ue && sD(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function wy(e, t, n, a, r) {
      if ((e.mode & q) === A) {
        if (e === t)
          e.flags |= tt;
        else {
          if (e.flags |= W, n.flags |= _s, n.flags &= ~(oC | fi), n.tag === B) {
            var i = n.alternate;
            if (i === null)
              n.tag = Qa;
            else {
              var u = Mn(oe, H);
              u.tag = Ql, Wn(n, u, H);
            }
          }
          n.lanes = j(n.lanes, H);
        }
        return e;
      }
      return e.flags |= tt, e.lanes = r, e;
    }
    function LD(e, t, n, a, r) {
      if (n.flags |= fi, kt && Uu(e, r), a !== null && typeof a == "object" && typeof a.then == "function") {
        var i = a;
        UD(n), _e() && n.mode & q && Em();
        var u = Ly(t);
        if (u !== null) {
          u.flags &= ~hn, wy(u, t, n, e, r), u.mode & q && Uy(e, i, r), OD(u, e, i);
          return;
        } else {
          if (!IC(r)) {
            Uy(e, i, r), Jd();
            return;
          }
          var l = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          a = l;
        }
      } else if (_e() && n.mode & q) {
        Em();
        var o = Ly(t);
        if (o !== null) {
          (o.flags & tt) === z && (o.flags |= hn), wy(o, t, n, e, r), of(Fa(a, n));
          return;
        }
      }
      a = Fa(a, n), s0(a);
      var s = t;
      do {
        switch (s.tag) {
          case Y: {
            var c = a;
            s.flags |= tt;
            var v = bi(r);
            s.lanes = j(s.lanes, v);
            var d = Oy(s, c, v);
            Rf(s, d);
            return;
          }
          case B:
            var m = a, y = s.type, g = s.stateNode;
            if ((s.flags & W) === z && (typeof y.getDerivedStateFromError == "function" || g !== null && typeof g.componentDidCatch == "function" && !Lg(g))) {
              s.flags |= tt;
              var T = bi(r);
              s.lanes = j(s.lanes, T);
              var w = md(s, m, T);
              Rf(s, w);
              return;
            }
            break;
        }
        s = s.return;
      } while (s !== null);
    }
    function wD() {
      return null;
    }
    var vu = Ae.ReactCurrentOwner, Gt = !1, yd, pu, gd, bd, Sd, Va, Cd, Eo, hu;
    yd = {}, pu = {}, gd = {}, bd = {}, Sd = {}, Va = !1, Cd = {}, Eo = {}, hu = {};
    function nt(e, t, n, a) {
      e === null ? t.child = Nm(t, null, n, a) : t.child = Lr(t, e.child, n, a);
    }
    function AD(e, t, n, a) {
      t.child = Lr(t, e.child, null, a), t.child = Lr(t, null, n, a);
    }
    function Ay(e, t, n, a, r) {
      if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && Vt(
          i,
          a,
          // Resolved props
          "prop",
          re(n)
        );
      }
      var u = n.render, l = t.ref, o, s;
      Ar(t, r), vi(t);
      {
        if (vu.current = t, Kt(!0), o = Fr(e, t, u, a, l, r), s = Vr(), t.mode & ve) {
          Ue(!0);
          try {
            o = Fr(e, t, u, a, l, r), s = Vr();
          } finally {
            Ue(!1);
          }
        }
        Kt(!1);
      }
      return fr(), e !== null && !Gt ? (Zm(e, t, r), On(e, t, r)) : (_e() && s && tf(t), t.flags |= or, nt(e, t, o, r), t.child);
    }
    function zy(e, t, n, a, r) {
      if (e === null) {
        var i = n.type;
        if (k0(i) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        n.defaultProps === void 0) {
          var u = i;
          return u = Xr(i), t.tag = le, t.type = u, Td(t, i), Ny(e, t, u, a, r);
        }
        {
          var l = i.propTypes;
          if (l && Vt(
            l,
            a,
            // Resolved props
            "prop",
            re(i)
          ), n.defaultProps !== void 0) {
            var o = re(i) || "Unknown";
            hu[o] || (f("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", o), hu[o] = !0);
          }
        }
        var s = uv(n.type, null, a, t, t.mode, r);
        return s.ref = t.ref, s.return = t, t.child = s, s;
      }
      {
        var c = n.type, v = c.propTypes;
        v && Vt(
          v,
          a,
          // Resolved props
          "prop",
          re(c)
        );
      }
      var d = e.child, m = Ld(e, r);
      if (!m) {
        var y = d.memoizedProps, g = n.compare;
        if (g = g !== null ? g : Ni, g(y, a) && e.ref === t.ref)
          return On(e, t, r);
      }
      t.flags |= or;
      var T = qa(d, a);
      return T.ref = t.ref, T.return = t, t.child = T, T;
    }
    function Ny(e, t, n, a, r) {
      if (t.type !== t.elementType) {
        var i = t.elementType;
        if (i.$$typeof === We) {
          var u = i, l = u._payload, o = u._init;
          try {
            i = o(l);
          } catch {
            i = null;
          }
          var s = i && i.propTypes;
          s && Vt(
            s,
            a,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            re(i)
          );
        }
      }
      if (e !== null) {
        var c = e.memoizedProps;
        if (Ni(c, a) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Gt = !1, t.pendingProps = a = c, Ld(e, r))
            (e.flags & _s) !== z && (Gt = !0);
          else return t.lanes = e.lanes, On(e, t, r);
      }
      return Ed(e, t, n, a, r);
    }
    function _y(e, t, n) {
      var a = t.pendingProps, r = a.children, i = e !== null ? e.memoizedState : null;
      if (a.mode === "hidden" || Cv)
        if ((t.mode & q) === A) {
          var u = {
            baseLanes: C,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = u, _o(t, n);
        } else if (gt(n, yt)) {
          var v = {
            baseLanes: C,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = v;
          var d = i !== null ? i.baseLanes : n;
          _o(t, d);
        } else {
          var l = null, o;
          if (i !== null) {
            var s = i.baseLanes;
            o = j(s, n);
          } else
            o = n;
          t.lanes = t.childLanes = yt;
          var c = {
            baseLanes: o,
            cachePool: l,
            transitions: null
          };
          return t.memoizedState = c, t.updateQueue = null, _o(t, o), null;
        }
      else {
        var m;
        i !== null ? (m = j(i.baseLanes, n), t.memoizedState = null) : m = n, _o(t, m);
      }
      return nt(e, t, r, n), t.child;
    }
    function zD(e, t, n) {
      var a = t.pendingProps;
      return nt(e, t, a, n), t.child;
    }
    function ND(e, t, n) {
      var a = t.pendingProps.children;
      return nt(e, t, a, n), t.child;
    }
    function _D(e, t, n) {
      {
        t.flags |= Z;
        {
          var a = t.stateNode;
          a.effectDuration = 0, a.passiveEffectDuration = 0;
        }
      }
      var r = t.pendingProps, i = r.children;
      return nt(e, t, i, n), t.child;
    }
    function Hy(e, t) {
      var n = t.ref;
      (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= Vn, t.flags |= Hs);
    }
    function Ed(e, t, n, a, r) {
      if (t.type !== t.elementType) {
        var i = n.propTypes;
        i && Vt(
          i,
          a,
          // Resolved props
          "prop",
          re(n)
        );
      }
      var u;
      {
        var l = xr(t, n, !0);
        u = Dr(t, l);
      }
      var o, s;
      Ar(t, r), vi(t);
      {
        if (vu.current = t, Kt(!0), o = Fr(e, t, n, a, u, r), s = Vr(), t.mode & ve) {
          Ue(!0);
          try {
            o = Fr(e, t, n, a, u, r), s = Vr();
          } finally {
            Ue(!1);
          }
        }
        Kt(!1);
      }
      return fr(), e !== null && !Gt ? (Zm(e, t, r), On(e, t, r)) : (_e() && s && tf(t), t.flags |= or, nt(e, t, o, r), t.child);
    }
    function ky(e, t, n, a, r) {
      {
        switch (I0(t)) {
          case !1: {
            var i = t.stateNode, u = t.type, l = new u(t.memoizedProps, i.context), o = l.state;
            i.updater.enqueueSetState(i, o, null);
            break;
          }
          case !0: {
            t.flags |= W, t.flags |= tt;
            var s = new Error("Simulated error coming from DevTools"), c = bi(r);
            t.lanes = j(t.lanes, c);
            var v = md(t, Fa(s, t), c);
            Rf(t, v);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var d = n.propTypes;
          d && Vt(
            d,
            a,
            // Resolved props
            "prop",
            re(n)
          );
        }
      }
      var m;
      tn(n) ? (m = !0, zl(t)) : m = !1, Ar(t, r);
      var y = t.stateNode, g;
      y === null ? (To(e, t), Dy(t, n, a), vd(t, n, a, r), g = !0) : e === null ? g = TD(t, n, a, r) : g = xD(e, t, n, a, r);
      var T = Rd(e, t, n, g, m, r);
      {
        var w = t.stateNode;
        g && w.props !== a && (Va || f("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", V(t) || "a component"), Va = !0);
      }
      return T;
    }
    function Rd(e, t, n, a, r, i) {
      Hy(e, t);
      var u = (t.flags & W) !== z;
      if (!a && !u)
        return r && gm(t, n, !1), On(e, t, i);
      var l = t.stateNode;
      vu.current = t;
      var o;
      if (u && typeof n.getDerivedStateFromError != "function")
        o = null, Cy();
      else {
        vi(t);
        {
          if (Kt(!0), o = l.render(), t.mode & ve) {
            Ue(!0);
            try {
              l.render();
            } finally {
              Ue(!1);
            }
          }
          Kt(!1);
        }
        fr();
      }
      return t.flags |= or, e !== null && u ? AD(e, t, o, i) : nt(e, t, o, i), t.memoizedState = l.state, r && gm(t, n, !0), t.child;
    }
    function Fy(e) {
      var t = e.stateNode;
      t.pendingContext ? mm(e, t.pendingContext, t.pendingContext !== t.context) : t.context && mm(e, t.context, !1), Tf(e, t.containerInfo);
    }
    function HD(e, t, n) {
      if (Fy(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var a = t.pendingProps, r = t.memoizedState, i = r.element;
      Bm(e, t), Kl(t, a, null, n);
      var u = t.memoizedState;
      t.stateNode;
      var l = u.element;
      if (r.isDehydrated) {
        var o = {
          element: l,
          isDehydrated: !1,
          cache: u.cache,
          pendingSuspenseBoundaries: u.pendingSuspenseBoundaries,
          transitions: u.transitions
        }, s = t.updateQueue;
        if (s.baseState = o, t.memoizedState = o, t.flags & hn) {
          var c = Fa(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Vy(e, t, l, n, c);
        } else if (l !== i) {
          var v = Fa(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Vy(e, t, l, n, v);
        } else {
          Vx(t);
          var d = Nm(t, null, l, n);
          t.child = d;
          for (var m = d; m; )
            m.flags = m.flags & ~ge | mn, m = m.sibling;
        }
      } else {
        if (Ur(), l === i)
          return On(e, t, n);
        nt(e, t, l, n);
      }
      return t.child;
    }
    function Vy(e, t, n, a, r) {
      return Ur(), of(r), t.flags |= hn, nt(e, t, n, a), t.child;
    }
    function kD(e, t, n) {
      Gm(t), e === null && lf(t);
      var a = t.type, r = t.pendingProps, i = e !== null ? e.memoizedProps : null, u = r.children, l = Bc(a, r);
      return l ? u = null : i !== null && Bc(a, i) && (t.flags |= ci), Hy(e, t), nt(e, t, u, n), t.child;
    }
    function FD(e, t) {
      return e === null && lf(t), null;
    }
    function VD(e, t, n, a) {
      To(e, t);
      var r = t.pendingProps, i = n, u = i._payload, l = i._init, o = l(u);
      t.type = o;
      var s = t.tag = F0(o), c = qt(o, r), v;
      switch (s) {
        case ne:
          return Td(t, o), t.type = o = Xr(o), v = Ed(null, t, o, c, a), v;
        case B:
          return t.type = o = ev(o), v = ky(null, t, o, c, a), v;
        case ae:
          return t.type = o = tv(o), v = Ay(null, t, o, c, a), v;
        case Nt: {
          if (t.type !== t.elementType) {
            var d = o.propTypes;
            d && Vt(
              d,
              c,
              // Resolved for outer only
              "prop",
              re(o)
            );
          }
          return v = zy(
            null,
            t,
            o,
            qt(o.type, c),
            // The inner type can have defaults too
            a
          ), v;
        }
      }
      var m = "";
      throw o !== null && typeof o == "object" && o.$$typeof === We && (m = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + o + ". " + ("Lazy element type must resolve to a class or function." + m));
    }
    function jD(e, t, n, a, r) {
      To(e, t), t.tag = B;
      var i;
      return tn(n) ? (i = !0, zl(t)) : i = !1, Ar(t, r), Dy(t, n, a), vd(t, n, a, r), Rd(null, t, n, !0, i, r);
    }
    function BD(e, t, n, a) {
      To(e, t);
      var r = t.pendingProps, i;
      {
        var u = xr(t, n, !1);
        i = Dr(t, u);
      }
      Ar(t, a);
      var l, o;
      vi(t);
      {
        if (n.prototype && typeof n.prototype.render == "function") {
          var s = re(n) || "Unknown";
          yd[s] || (f("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", s, s), yd[s] = !0);
        }
        t.mode & ve && Bt.recordLegacyContextWarning(t, null), Kt(!0), vu.current = t, l = Fr(null, t, n, r, i, a), o = Vr(), Kt(!1);
      }
      if (fr(), t.flags |= or, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0) {
        var c = re(n) || "Unknown";
        pu[c] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", c, c, c), pu[c] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0
      ) {
        {
          var v = re(n) || "Unknown";
          pu[v] || (f("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", v, v, v), pu[v] = !0);
        }
        t.tag = B, t.memoizedState = null, t.updateQueue = null;
        var d = !1;
        return tn(n) ? (d = !0, zl(t)) : d = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ef(t), xy(t, l), vd(t, n, r, a), Rd(null, t, n, !0, d, a);
      } else {
        if (t.tag = ne, t.mode & ve) {
          Ue(!0);
          try {
            l = Fr(null, t, n, r, i, a), o = Vr();
          } finally {
            Ue(!1);
          }
        }
        return _e() && o && tf(t), nt(null, t, l, a), Td(t, n), t.child;
      }
    }
    function Td(e, t) {
      {
        if (t && t.childContextTypes && f("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var n = "", a = ri();
          a && (n += `

Check the render method of \`` + a + "`.");
          var r = a || "", i = e._debugSource;
          i && (r = i.fileName + ":" + i.lineNumber), Sd[r] || (Sd[r] = !0, f("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
        }
        if (t.defaultProps !== void 0) {
          var u = re(t) || "Unknown";
          hu[u] || (f("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", u), hu[u] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var l = re(t) || "Unknown";
          bd[l] || (f("%s: Function components do not support getDerivedStateFromProps.", l), bd[l] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var o = re(t) || "Unknown";
          gd[o] || (f("%s: Function components do not support contextType.", o), gd[o] = !0);
        }
      }
    }
    var xd = {
      dehydrated: null,
      treeContext: null,
      retryLane: Le
    };
    function Dd(e) {
      return {
        baseLanes: e,
        cachePool: wD(),
        transitions: null
      };
    }
    function YD(e, t) {
      var n = null;
      return {
        baseLanes: j(e.baseLanes, t),
        cachePool: n,
        transitions: e.transitions
      };
    }
    function $D(e, t, n, a) {
      if (t !== null) {
        var r = t.memoizedState;
        if (r === null)
          return !1;
      }
      return Mf(e, ru);
    }
    function qD(e, t) {
      return nl(e.childLanes, t);
    }
    function jy(e, t, n) {
      var a = t.pendingProps;
      P0(t) && (t.flags |= W);
      var r = Yt.current, i = !1, u = (t.flags & W) !== z;
      if (u || $D(r, e) ? (i = !0, t.flags &= ~W) : (e === null || e.memoizedState !== null) && (r = oD(r, Xm)), r = Nr(r), Pn(t, r), e === null) {
        lf(t);
        var l = t.memoizedState;
        if (l !== null) {
          var o = l.dehydrated;
          if (o !== null)
            return JD(t, o);
        }
        var s = a.children, c = a.fallback;
        if (i) {
          var v = GD(t, s, c, n), d = t.child;
          return d.memoizedState = Dd(n), t.memoizedState = xd, v;
        } else
          return Md(t, s);
      } else {
        var m = e.memoizedState;
        if (m !== null) {
          var y = m.dehydrated;
          if (y !== null)
            return KD(e, t, u, a, y, m, n);
        }
        if (i) {
          var g = a.fallback, T = a.children, w = XD(e, t, T, g, n), L = t.child, Q = e.child.memoizedState;
          return L.memoizedState = Q === null ? Dd(n) : YD(Q, n), L.childLanes = qD(e, n), t.memoizedState = xd, w;
        } else {
          var $ = a.children, p = QD(e, t, $, n);
          return t.memoizedState = null, p;
        }
      }
    }
    function Md(e, t, n) {
      var a = e.mode, r = {
        mode: "visible",
        children: t
      }, i = Od(r, a);
      return i.return = e, e.child = i, i;
    }
    function GD(e, t, n, a) {
      var r = e.mode, i = e.child, u = {
        mode: "hidden",
        children: t
      }, l, o;
      return (r & q) === A && i !== null ? (l = i, l.childLanes = C, l.pendingProps = u, e.mode & P && (l.actualDuration = 0, l.actualStartTime = -1, l.selfBaseDuration = 0, l.treeBaseDuration = 0), o = la(n, r, a, null)) : (l = Od(u, r), o = la(n, r, a, null)), l.return = e, o.return = e, l.sibling = o, e.child = l, o;
    }
    function Od(e, t, n) {
      return Bg(e, t, C, null);
    }
    function By(e, t) {
      return qa(e, t);
    }
    function QD(e, t, n, a) {
      var r = e.child, i = r.sibling, u = By(r, {
        mode: "visible",
        children: n
      });
      if ((t.mode & q) === A && (u.lanes = a), u.return = t, u.sibling = null, i !== null) {
        var l = t.deletions;
        l === null ? (t.deletions = [i], t.flags |= ya) : l.push(i);
      }
      return t.child = u, u;
    }
    function XD(e, t, n, a, r) {
      var i = t.mode, u = e.child, l = u.sibling, o = {
        mode: "hidden",
        children: n
      }, s;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (i & q) === A && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== u
      ) {
        var c = t.child;
        s = c, s.childLanes = C, s.pendingProps = o, t.mode & P && (s.actualDuration = 0, s.actualStartTime = -1, s.selfBaseDuration = u.selfBaseDuration, s.treeBaseDuration = u.treeBaseDuration), t.deletions = null;
      } else
        s = By(u, o), s.subtreeFlags = u.subtreeFlags & gn;
      var v;
      return l !== null ? v = qa(l, a) : (v = la(a, i, r, null), v.flags |= ge), v.return = t, s.return = t, s.sibling = v, t.child = s, v;
    }
    function Ro(e, t, n, a) {
      a !== null && of(a), Lr(t, e.child, null, n);
      var r = t.pendingProps, i = r.children, u = Md(t, i);
      return u.flags |= ge, t.memoizedState = null, u;
    }
    function ZD(e, t, n, a, r) {
      var i = t.mode, u = {
        mode: "visible",
        children: n
      }, l = Od(u, i), o = la(a, i, r, null);
      return o.flags |= ge, l.return = t, o.return = t, l.sibling = o, t.child = l, (t.mode & q) !== A && Lr(t, e.child, null, r), o;
    }
    function JD(e, t, n) {
      return (e.mode & q) === A ? (f("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = H) : Gc(t) ? e.lanes = Ra : e.lanes = yt, null;
    }
    function KD(e, t, n, a, r, i, u) {
      if (n)
        if (t.flags & hn) {
          t.flags &= ~hn;
          var p = pd(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Ro(e, t, u, p);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= W, null;
          var b = a.children, h = a.fallback, E = ZD(e, t, b, h, u), O = t.child;
          return O.memoizedState = Dd(u), t.memoizedState = xd, E;
        }
      else {
        if (kx(), (t.mode & q) === A)
          return Ro(
            e,
            t,
            u,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Gc(r)) {
          var l, o, s;
          {
            var c = ex(r);
            l = c.digest, o = c.message, s = c.stack;
          }
          var v;
          o ? v = new Error(o) : v = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var d = pd(v, l, s);
          return Ro(e, t, u, d);
        }
        var m = gt(u, e.childLanes);
        if (Gt || m) {
          var y = No();
          if (y !== null) {
            var g = uE(y, u);
            if (g !== Le && g !== i.retryLane) {
              i.retryLane = g;
              var T = oe;
              ct(e, g), Me(y, e, g, T);
            }
          }
          Jd();
          var w = pd(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Ro(e, t, u, w);
        } else if (cm(r)) {
          t.flags |= W, t.child = e.child;
          var L = C0.bind(null, e);
          return tx(r, L), null;
        } else {
          jx(t, r, i.treeContext);
          var Q = a.children, $ = Md(t, Q);
          return $.flags |= mn, $;
        }
      }
    }
    function Yy(e, t, n) {
      e.lanes = j(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = j(a.lanes, t)), gf(e.return, t, n);
    }
    function WD(e, t, n) {
      for (var a = t; a !== null; ) {
        if (a.tag === ue) {
          var r = a.memoizedState;
          r !== null && Yy(a, n, e);
        } else if (a.tag === ht)
          Yy(a, n, e);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function ID(e) {
      for (var t = e, n = null; t !== null; ) {
        var a = t.alternate;
        a !== null && eo(a) === null && (n = t), t = t.sibling;
      }
      return n;
    }
    function PD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Cd[e])
        if (Cd[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              f('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              f('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              f('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          f('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function eM(e, t) {
      e !== void 0 && !Eo[e] && (e !== "collapsed" && e !== "hidden" ? (Eo[e] = !0, f('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Eo[e] = !0, f('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function $y(e, t) {
      {
        var n = Pe(e), a = !n && typeof ha(e) == "function";
        if (n || a) {
          var r = n ? "array" : "iterable";
          return f("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", r, t, r), !1;
        }
      }
      return !0;
    }
    function tM(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Pe(e)) {
          for (var n = 0; n < e.length; n++)
            if (!$y(e[n], n))
              return;
        } else {
          var a = ha(e);
          if (typeof a == "function") {
            var r = a.call(e);
            if (r)
              for (var i = r.next(), u = 0; !i.done; i = r.next()) {
                if (!$y(i.value, u))
                  return;
                u++;
              }
          } else
            f('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Ud(e, t, n, a, r) {
      var i = e.memoizedState;
      i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: n,
        tailMode: r
      } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = n, i.tailMode = r);
    }
    function qy(e, t, n) {
      var a = t.pendingProps, r = a.revealOrder, i = a.tail, u = a.children;
      PD(r), eM(i, r), tM(u, r), nt(e, t, u, n);
      var l = Yt.current, o = Mf(l, ru);
      if (o)
        l = Of(l, ru), t.flags |= W;
      else {
        var s = e !== null && (e.flags & W) !== z;
        s && WD(t, t.child, n), l = Nr(l);
      }
      if (Pn(t, l), (t.mode & q) === A)
        t.memoizedState = null;
      else
        switch (r) {
          case "forwards": {
            var c = ID(t.child), v;
            c === null ? (v = t.child, t.child = null) : (v = c.sibling, c.sibling = null), Ud(
              t,
              !1,
              // isBackwards
              v,
              c,
              i
            );
            break;
          }
          case "backwards": {
            var d = null, m = t.child;
            for (t.child = null; m !== null; ) {
              var y = m.alternate;
              if (y !== null && eo(y) === null) {
                t.child = m;
                break;
              }
              var g = m.sibling;
              m.sibling = d, d = m, m = g;
            }
            Ud(
              t,
              !0,
              // isBackwards
              d,
              null,
              // last
              i
            );
            break;
          }
          case "together": {
            Ud(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function nM(e, t, n) {
      Tf(t, t.stateNode.containerInfo);
      var a = t.pendingProps;
      return e === null ? t.child = Lr(t, null, a, n) : nt(e, t, a, n), t.child;
    }
    var Gy = !1;
    function aM(e, t, n) {
      var a = t.type, r = a._context, i = t.pendingProps, u = t.memoizedProps, l = i.value;
      {
        "value" in i || Gy || (Gy = !0, f("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var o = t.type.propTypes;
        o && Vt(o, i, "prop", "Context.Provider");
      }
      if (km(t, r, l), u !== null) {
        var s = u.value;
        if (Ct(s, l)) {
          if (u.children === i.children && !wl())
            return On(e, t, n);
        } else
          Px(t, r, n);
      }
      var c = i.children;
      return nt(e, t, c, n), t.child;
    }
    var Qy = !1;
    function rM(e, t, n) {
      var a = t.type;
      a._context === void 0 ? a !== a.Consumer && (Qy || (Qy = !0, f("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : a = a._context;
      var r = t.pendingProps, i = r.children;
      typeof i != "function" && f("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Ar(t, n);
      var u = be(a);
      vi(t);
      var l;
      return vu.current = t, Kt(!0), l = i(u), Kt(!1), fr(), t.flags |= or, nt(e, t, l, n), t.child;
    }
    function mu() {
      Gt = !0;
    }
    function To(e, t) {
      (t.mode & q) === A && e !== null && (e.alternate = null, t.alternate = null, t.flags |= ge);
    }
    function On(e, t, n) {
      return e !== null && (t.dependencies = e.dependencies), Cy(), Ou(t.lanes), gt(n, t.childLanes) ? (Wx(e, t), t.child) : null;
    }
    function iM(e, t, n) {
      {
        var a = t.return;
        if (a === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === a.child)
          a.child = n;
        else {
          var r = a.child;
          if (r === null)
            throw new Error("Expected parent to have a child.");
          for (; r.sibling !== t; )
            if (r = r.sibling, r === null)
              throw new Error("Expected to find the previous sibling.");
          r.sibling = n;
        }
        var i = a.deletions;
        return i === null ? (a.deletions = [e], a.flags |= ya) : i.push(e), n.flags |= ge, n;
      }
    }
    function Ld(e, t) {
      var n = e.lanes;
      return !!gt(n, t);
    }
    function uM(e, t, n) {
      switch (t.tag) {
        case Y:
          Fy(t), t.stateNode, Ur();
          break;
        case _:
          Gm(t);
          break;
        case B: {
          var a = t.type;
          tn(a) && zl(t);
          break;
        }
        case se:
          Tf(t, t.stateNode.containerInfo);
          break;
        case Nn: {
          var r = t.memoizedProps.value, i = t.type._context;
          km(t, i, r);
          break;
        }
        case zt:
          {
            var u = gt(n, t.childLanes);
            u && (t.flags |= Z);
            {
              var l = t.stateNode;
              l.effectDuration = 0, l.passiveEffectDuration = 0;
            }
          }
          break;
        case ue: {
          var o = t.memoizedState;
          if (o !== null) {
            if (o.dehydrated !== null)
              return Pn(t, Nr(Yt.current)), t.flags |= W, null;
            var s = t.child, c = s.childLanes;
            if (gt(n, c))
              return jy(e, t, n);
            Pn(t, Nr(Yt.current));
            var v = On(e, t, n);
            return v !== null ? v.sibling : null;
          } else
            Pn(t, Nr(Yt.current));
          break;
        }
        case ht: {
          var d = (e.flags & W) !== z, m = gt(n, t.childLanes);
          if (d) {
            if (m)
              return qy(e, t, n);
            t.flags |= W;
          }
          var y = t.memoizedState;
          if (y !== null && (y.rendering = null, y.tail = null, y.lastEffect = null), Pn(t, Yt.current), m)
            break;
          return null;
        }
        case lt:
        case Za:
          return t.lanes = C, _y(e, t, n);
      }
      return On(e, t, n);
    }
    function Xy(e, t, n) {
      if (t._debugNeedsRemount && e !== null)
        return iM(e, t, uv(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var a = e.memoizedProps, r = t.pendingProps;
        if (a !== r || wl() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Gt = !0;
        else {
          var i = Ld(e, n);
          if (!i && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & W) === z)
            return Gt = !1, uM(e, t, n);
          (e.flags & _s) !== z ? Gt = !0 : Gt = !1;
        }
      } else if (Gt = !1, _e() && wx(t)) {
        var u = t.index, l = Ax();
        Cm(t, l, u);
      }
      switch (t.lanes = C, t.tag) {
        case fn:
          return BD(e, t, t.type, n);
        case Jr: {
          var o = t.elementType;
          return VD(e, t, o, n);
        }
        case ne: {
          var s = t.type, c = t.pendingProps, v = t.elementType === s ? c : qt(s, c);
          return Ed(e, t, s, v, n);
        }
        case B: {
          var d = t.type, m = t.pendingProps, y = t.elementType === d ? m : qt(d, m);
          return ky(e, t, d, y, n);
        }
        case Y:
          return HD(e, t, n);
        case _:
          return kD(e, t, n);
        case ce:
          return FD(e, t);
        case ue:
          return jy(e, t, n);
        case se:
          return nM(e, t, n);
        case ae: {
          var g = t.type, T = t.pendingProps, w = t.elementType === g ? T : qt(g, T);
          return Ay(e, t, g, w, n);
        }
        case Ga:
          return zD(e, t, n);
        case Nu:
          return ND(e, t, n);
        case zt:
          return _D(e, t, n);
        case Nn:
          return aM(e, t, n);
        case _u:
          return rM(e, t, n);
        case Nt: {
          var L = t.type, Q = t.pendingProps, $ = qt(L, Q);
          if (t.type !== t.elementType) {
            var p = L.propTypes;
            p && Vt(
              p,
              $,
              // Resolved for outer only
              "prop",
              re(L)
            );
          }
          return $ = qt(L.type, $), zy(e, t, L, $, n);
        }
        case le:
          return Ny(e, t, t.type, t.pendingProps, n);
        case Qa: {
          var b = t.type, h = t.pendingProps, E = t.elementType === b ? h : qt(b, h);
          return jD(e, t, b, E, n);
        }
        case ht:
          return qy(e, t, n);
        case Xa:
          break;
        case lt:
          return _y(e, t, n);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function jr(e) {
      e.flags |= Z;
    }
    function Zy(e) {
      e.flags |= Vn, e.flags |= Hs;
    }
    var Jy, wd, Ky, Wy;
    Jy = function(e, t, n, a) {
      for (var r = t.child; r !== null; ) {
        if (r.tag === _ || r.tag === ce)
          OT(e, r.stateNode);
        else if (r.tag !== se) {
          if (r.child !== null) {
            r.child.return = r, r = r.child;
            continue;
          }
        }
        if (r === t)
          return;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t)
            return;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }, wd = function(e, t) {
    }, Ky = function(e, t, n, a, r) {
      var i = e.memoizedProps;
      if (i !== a) {
        var u = t.stateNode, l = xf(), o = LT(u, n, i, a, r, l);
        t.updateQueue = o, o && jr(t);
      }
    }, Wy = function(e, t, n, a) {
      n !== a && jr(t);
    };
    function yu(e, t) {
      if (!_e())
        switch (e.tailMode) {
          case "hidden": {
            for (var n = e.tail, a = null; n !== null; )
              n.alternate !== null && (a = n), n = n.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          }
          case "collapsed": {
            for (var r = e.tail, i = null; r !== null; )
              r.alternate !== null && (i = r), r = r.sibling;
            i === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : i.sibling = null;
            break;
          }
        }
    }
    function ke(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = C, a = z;
      if (t) {
        if ((e.mode & P) !== A) {
          for (var o = e.selfBaseDuration, s = e.child; s !== null; )
            n = j(n, j(s.lanes, s.childLanes)), a |= s.subtreeFlags & gn, a |= s.flags & gn, o += s.treeBaseDuration, s = s.sibling;
          e.treeBaseDuration = o;
        } else
          for (var c = e.child; c !== null; )
            n = j(n, j(c.lanes, c.childLanes)), a |= c.subtreeFlags & gn, a |= c.flags & gn, c.return = e, c = c.sibling;
        e.subtreeFlags |= a;
      } else {
        if ((e.mode & P) !== A) {
          for (var r = e.actualDuration, i = e.selfBaseDuration, u = e.child; u !== null; )
            n = j(n, j(u.lanes, u.childLanes)), a |= u.subtreeFlags, a |= u.flags, r += u.actualDuration, i += u.treeBaseDuration, u = u.sibling;
          e.actualDuration = r, e.treeBaseDuration = i;
        } else
          for (var l = e.child; l !== null; )
            n = j(n, j(l.lanes, l.childLanes)), a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
        e.subtreeFlags |= a;
      }
      return e.childLanes = n, t;
    }
    function lM(e, t, n) {
      if (Gx() && (t.mode & q) !== A && (t.flags & W) === z)
        return Om(t), Ur(), t.flags |= hn | fi | tt, !1;
      var a = Fl(t);
      if (n !== null && n.dehydrated !== null)
        if (e === null) {
          if (!a)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if ($x(t), ke(t), (t.mode & P) !== A) {
            var r = n !== null;
            if (r) {
              var i = t.child;
              i !== null && (t.treeBaseDuration -= i.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Ur(), (t.flags & W) === z && (t.memoizedState = null), t.flags |= Z, ke(t), (t.mode & P) !== A) {
            var u = n !== null;
            if (u) {
              var l = t.child;
              l !== null && (t.treeBaseDuration -= l.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return Um(), !0;
    }
    function Iy(e, t, n) {
      var a = t.pendingProps;
      switch (nf(t), t.tag) {
        case fn:
        case Jr:
        case le:
        case ne:
        case ae:
        case Ga:
        case Nu:
        case zt:
        case _u:
        case Nt:
          return ke(t), null;
        case B: {
          var r = t.type;
          return tn(r) && Al(t), ke(t), null;
        }
        case Y: {
          var i = t.stateNode;
          if (zr(t), Ic(t), Lf(), i.pendingContext && (i.context = i.pendingContext, i.pendingContext = null), e === null || e.child === null) {
            var u = Fl(t);
            if (u)
              jr(t);
            else if (e !== null) {
              var l = e.memoizedState;
              // Check if this is a client root
              (!l.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & hn) !== z) && (t.flags |= ga, Um());
            }
          }
          return wd(e, t), ke(t), null;
        }
        case _: {
          Df(t);
          var o = qm(), s = t.type;
          if (e !== null && t.stateNode != null)
            Ky(e, t, s, a, o), e.ref !== t.ref && Zy(t);
          else {
            if (!a) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return ke(t), null;
            }
            var c = xf(), v = Fl(t);
            if (v)
              Bx(t, o, c) && jr(t);
            else {
              var d = MT(s, a, o, c, t);
              Jy(d, t, !1, !1), t.stateNode = d, UT(d, s, a, o) && jr(t);
            }
            t.ref !== null && Zy(t);
          }
          return ke(t), null;
        }
        case ce: {
          var m = a;
          if (e && t.stateNode != null) {
            var y = e.memoizedProps;
            Wy(e, t, y, m);
          } else {
            if (typeof m != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var g = qm(), T = xf(), w = Fl(t);
            w ? Yx(t) && jr(t) : t.stateNode = wT(m, g, T, t);
          }
          return ke(t), null;
        }
        case ue: {
          _r(t);
          var L = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var Q = lM(e, t, L);
            if (!Q)
              return t.flags & tt ? t : null;
          }
          if ((t.flags & W) !== z)
            return t.lanes = n, (t.mode & P) !== A && td(t), t;
          var $ = L !== null, p = e !== null && e.memoizedState !== null;
          if ($ !== p && $) {
            var b = t.child;
            if (b.flags |= ba, (t.mode & q) !== A) {
              var h = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !Eb);
              h || Mf(Yt.current, Xm) ? o0() : Jd();
            }
          }
          var E = t.updateQueue;
          if (E !== null && (t.flags |= Z), ke(t), (t.mode & P) !== A && $) {
            var O = t.child;
            O !== null && (t.treeBaseDuration -= O.treeBaseDuration);
          }
          return null;
        }
        case se:
          return zr(t), wd(e, t), e === null && Tx(t.stateNode.containerInfo), ke(t), null;
        case Nn:
          var x = t.type._context;
          return yf(x, t), ke(t), null;
        case Qa: {
          var N = t.type;
          return tn(N) && Al(t), ke(t), null;
        }
        case ht: {
          _r(t);
          var F = t.memoizedState;
          if (F === null)
            return ke(t), null;
          var te = (t.flags & W) !== z, J = F.rendering;
          if (J === null)
            if (te)
              yu(F, !1);
            else {
              var me = c0() && (e === null || (e.flags & W) === z);
              if (!me)
                for (var K = t.child; K !== null; ) {
                  var pe = eo(K);
                  if (pe !== null) {
                    te = !0, t.flags |= W, yu(F, !1);
                    var Ze = pe.updateQueue;
                    return Ze !== null && (t.updateQueue = Ze, t.flags |= Z), t.subtreeFlags = z, Ix(t, n), Pn(t, Of(Yt.current, ru)), t.child;
                  }
                  K = K.sibling;
                }
              F.tail !== null && Oe() > bg() && (t.flags |= W, te = !0, yu(F, !1), t.lanes = Wp);
            }
          else {
            if (!te) {
              var Ye = eo(J);
              if (Ye !== null) {
                t.flags |= W, te = !0;
                var Tt = Ye.updateQueue;
                if (Tt !== null && (t.updateQueue = Tt, t.flags |= Z), yu(F, !0), F.tail === null && F.tailMode === "hidden" && !J.alternate && !_e())
                  return ke(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              Oe() * 2 - F.renderingStartTime > bg() && n !== yt && (t.flags |= W, te = !0, yu(F, !1), t.lanes = Wp);
            }
            if (F.isBackwards)
              J.sibling = t.child, t.child = J;
            else {
              var it = F.last;
              it !== null ? it.sibling = J : t.child = J, F.last = J;
            }
          }
          if (F.tail !== null) {
            var ut = F.tail;
            F.rendering = ut, F.tail = ut.sibling, F.renderingStartTime = Oe(), ut.sibling = null;
            var Je = Yt.current;
            return te ? Je = Of(Je, ru) : Je = Nr(Je), Pn(t, Je), ut;
          }
          return ke(t), null;
        }
        case Xa:
          break;
        case lt:
        case Za: {
          Zd(t);
          var zn = t.memoizedState, Zr = zn !== null;
          if (e !== null) {
            var zu = e.memoizedState, cn = zu !== null;
            cn !== Zr && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Cv && (t.flags |= ba);
          }
          return !Zr || (t.mode & q) === A ? ke(t) : gt(sn, yt) && (ke(t), t.subtreeFlags & (ge | Z) && (t.flags |= ba)), null;
        }
        case qo:
          return null;
        case Go:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function oM(e, t, n) {
      switch (nf(t), t.tag) {
        case B: {
          var a = t.type;
          tn(a) && Al(t);
          var r = t.flags;
          return r & tt ? (t.flags = r & ~tt | W, (t.mode & P) !== A && td(t), t) : null;
        }
        case Y: {
          t.stateNode, zr(t), Ic(t), Lf();
          var i = t.flags;
          return (i & tt) !== z && (i & W) === z ? (t.flags = i & ~tt | W, t) : null;
        }
        case _:
          return Df(t), null;
        case ue: {
          _r(t);
          var u = t.memoizedState;
          if (u !== null && u.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Ur();
          }
          var l = t.flags;
          return l & tt ? (t.flags = l & ~tt | W, (t.mode & P) !== A && td(t), t) : null;
        }
        case ht:
          return _r(t), null;
        case se:
          return zr(t), null;
        case Nn:
          var o = t.type._context;
          return yf(o, t), null;
        case lt:
        case Za:
          return Zd(t), null;
        case qo:
          return null;
        default:
          return null;
      }
    }
    function Py(e, t, n) {
      switch (nf(t), t.tag) {
        case B: {
          var a = t.type.childContextTypes;
          a != null && Al(t);
          break;
        }
        case Y: {
          t.stateNode, zr(t), Ic(t), Lf();
          break;
        }
        case _: {
          Df(t);
          break;
        }
        case se:
          zr(t);
          break;
        case ue:
          _r(t);
          break;
        case ht:
          _r(t);
          break;
        case Nn:
          var r = t.type._context;
          yf(r, t);
          break;
        case lt:
        case Za:
          Zd(t);
          break;
      }
    }
    var eg = null;
    eg = /* @__PURE__ */ new Set();
    var xo = !1, Fe = !1, sM = typeof WeakSet == "function" ? WeakSet : Set, U = null, Br = null, Yr = null;
    function cM(e) {
      As(null, function() {
        throw e;
      }), zs();
    }
    var fM = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & P)
        try {
          ln(), t.componentWillUnmount();
        } finally {
          un(e);
        }
      else
        t.componentWillUnmount();
    };
    function tg(e, t) {
      try {
        na(Ce, e);
      } catch (n) {
        ie(e, t, n);
      }
    }
    function Ad(e, t, n) {
      try {
        fM(e, n);
      } catch (a) {
        ie(e, t, a);
      }
    }
    function dM(e, t, n) {
      try {
        n.componentDidMount();
      } catch (a) {
        ie(e, t, a);
      }
    }
    function ng(e, t) {
      try {
        rg(e);
      } catch (n) {
        ie(e, t, n);
      }
    }
    function $r(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function") {
          var a;
          try {
            if (Xo && xb && e.mode & P)
              try {
                ln(), a = n(null);
              } finally {
                un(e);
              }
            else
              a = n(null);
          } catch (r) {
            ie(e, t, r);
          }
          typeof a == "function" && f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", V(e));
        } else
          n.current = null;
    }
    function Do(e, t, n) {
      try {
        n();
      } catch (a) {
        ie(e, t, a);
      }
    }
    var ag = !1;
    function vM(e, t) {
      xT(e.containerInfo), U = t, pM();
      var n = ag;
      return ag = !1, n;
    }
    function pM() {
      for (; U !== null; ) {
        var e = U, t = e.child;
        (e.subtreeFlags & Fs) !== z && t !== null ? (t.return = e, U = t) : hM();
      }
    }
    function hM() {
      for (; U !== null; ) {
        var e = U;
        he(e);
        try {
          mM(e);
        } catch (n) {
          ie(e, e.return, n);
        }
        Ie();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, U = t;
          return;
        }
        U = e.return;
      }
    }
    function mM(e) {
      var t = e.alternate, n = e.flags;
      if ((n & ga) !== z) {
        switch (he(e), e.tag) {
          case ne:
          case ae:
          case le:
            break;
          case B: {
            if (t !== null) {
              var a = t.memoizedProps, r = t.memoizedState, i = e.stateNode;
              e.type === e.elementType && !Va && (i.props !== e.memoizedProps && f("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", V(e) || "instance"), i.state !== e.memoizedState && f("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", V(e) || "instance"));
              var u = i.getSnapshotBeforeUpdate(e.elementType === e.type ? a : qt(e.type, a), r);
              {
                var l = eg;
                u === void 0 && !l.has(e.type) && (l.add(e.type), f("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", V(e)));
              }
              i.__reactInternalSnapshotBeforeUpdate = u;
            }
            break;
          }
          case Y: {
            {
              var o = e.stateNode;
              KT(o.containerInfo);
            }
            break;
          }
          case _:
          case ce:
          case se:
          case Qa:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Ie();
      }
    }
    function Qt(e, t, n) {
      var a = t.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var i = r.next, u = i;
        do {
          if ((u.tag & e) === e) {
            var l = u.destroy;
            u.destroy = void 0, l !== void 0 && ((e & He) !== ft ? wC(t) : (e & Ce) !== ft && Qp(t), (e & nn) !== ft && Lu(!0), Do(t, n, l), (e & nn) !== ft && Lu(!1), (e & He) !== ft ? AC() : (e & Ce) !== ft && Xp());
          }
          u = u.next;
        } while (u !== i);
      }
    }
    function na(e, t) {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var r = a.next, i = r;
        do {
          if ((i.tag & e) === e) {
            (e & He) !== ft ? UC(t) : (e & Ce) !== ft && zC(t);
            var u = i.create;
            (e & nn) !== ft && Lu(!0), i.destroy = u(), (e & nn) !== ft && Lu(!1), (e & He) !== ft ? LC() : (e & Ce) !== ft && NC();
            {
              var l = i.destroy;
              if (l !== void 0 && typeof l != "function") {
                var o = void 0;
                (i.tag & Ce) !== z ? o = "useLayoutEffect" : (i.tag & nn) !== z ? o = "useInsertionEffect" : o = "useEffect";
                var s = void 0;
                l === null ? s = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof l.then == "function" ? s = `

It looks like you wrote ` + o + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + o + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : s = " You returned: " + l, f("%s must not return anything besides a function, which is used for clean-up.%s", o, s);
              }
            }
          }
          i = i.next;
        } while (i !== r);
      }
    }
    function yM(e, t) {
      if ((t.flags & Z) !== z)
        switch (t.tag) {
          case zt: {
            var n = t.stateNode.passiveEffectDuration, a = t.memoizedProps, r = a.id, i = a.onPostCommit, u = by(), l = t.alternate === null ? "mount" : "update";
            gy() && (l = "nested-update"), typeof i == "function" && i(r, l, n, u);
            var o = t.return;
            e: for (; o !== null; ) {
              switch (o.tag) {
                case Y:
                  var s = o.stateNode;
                  s.passiveEffectDuration += n;
                  break e;
                case zt:
                  var c = o.stateNode;
                  c.passiveEffectDuration += n;
                  break e;
              }
              o = o.return;
            }
            break;
          }
        }
    }
    function gM(e, t, n, a) {
      if ((n.flags & di) !== z)
        switch (n.tag) {
          case ne:
          case ae:
          case le: {
            if (!Fe)
              if (n.mode & P)
                try {
                  ln(), na(Ce | Se, n);
                } finally {
                  un(n);
                }
              else
                na(Ce | Se, n);
            break;
          }
          case B: {
            var r = n.stateNode;
            if (n.flags & Z && !Fe)
              if (t === null)
                if (n.type === n.elementType && !Va && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", V(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", V(n) || "instance")), n.mode & P)
                  try {
                    ln(), r.componentDidMount();
                  } finally {
                    un(n);
                  }
                else
                  r.componentDidMount();
              else {
                var i = n.elementType === n.type ? t.memoizedProps : qt(n.type, t.memoizedProps), u = t.memoizedState;
                if (n.type === n.elementType && !Va && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", V(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", V(n) || "instance")), n.mode & P)
                  try {
                    ln(), r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    un(n);
                  }
                else
                  r.componentDidUpdate(i, u, r.__reactInternalSnapshotBeforeUpdate);
              }
            var l = n.updateQueue;
            l !== null && (n.type === n.elementType && !Va && (r.props !== n.memoizedProps && f("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", V(n) || "instance"), r.state !== n.memoizedState && f("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", V(n) || "instance")), $m(n, l, r));
            break;
          }
          case Y: {
            var o = n.updateQueue;
            if (o !== null) {
              var s = null;
              if (n.child !== null)
                switch (n.child.tag) {
                  case _:
                    s = n.child.stateNode;
                    break;
                  case B:
                    s = n.child.stateNode;
                    break;
                }
              $m(n, o, s);
            }
            break;
          }
          case _: {
            var c = n.stateNode;
            if (t === null && n.flags & Z) {
              var v = n.type, d = n.memoizedProps;
              HT(c, v, d);
            }
            break;
          }
          case ce:
            break;
          case se:
            break;
          case zt: {
            {
              var m = n.memoizedProps, y = m.onCommit, g = m.onRender, T = n.stateNode.effectDuration, w = by(), L = t === null ? "mount" : "update";
              gy() && (L = "nested-update"), typeof g == "function" && g(n.memoizedProps.id, L, n.actualDuration, n.treeBaseDuration, n.actualStartTime, w);
              {
                typeof y == "function" && y(n.memoizedProps.id, L, T, w), h0(n);
                var Q = n.return;
                e: for (; Q !== null; ) {
                  switch (Q.tag) {
                    case Y:
                      var $ = Q.stateNode;
                      $.effectDuration += T;
                      break e;
                    case zt:
                      var p = Q.stateNode;
                      p.effectDuration += T;
                      break e;
                  }
                  Q = Q.return;
                }
              }
            }
            break;
          }
          case ue: {
            DM(e, n);
            break;
          }
          case ht:
          case Qa:
          case Xa:
          case lt:
          case Za:
          case Go:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Fe || n.flags & Vn && rg(n);
    }
    function bM(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          if (e.mode & P)
            try {
              ln(), tg(e, e.return);
            } finally {
              un(e);
            }
          else
            tg(e, e.return);
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && dM(e, e.return, t), ng(e, e.return);
          break;
        }
        case _: {
          ng(e, e.return);
          break;
        }
      }
    }
    function SM(e, t) {
      for (var n = null, a = e; ; ) {
        if (a.tag === _) {
          if (n === null) {
            n = a;
            try {
              var r = a.stateNode;
              t ? QT(r) : ZT(a.stateNode, a.memoizedProps);
            } catch (u) {
              ie(e, e.return, u);
            }
          }
        } else if (a.tag === ce) {
          if (n === null)
            try {
              var i = a.stateNode;
              t ? XT(i) : JT(i, a.memoizedProps);
            } catch (u) {
              ie(e, e.return, u);
            }
        } else if (!((a.tag === lt || a.tag === Za) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          n === a && (n = null), a = a.return;
        }
        n === a && (n = null), a.sibling.return = a.return, a = a.sibling;
      }
    }
    function rg(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode, a;
        switch (e.tag) {
          case _:
            a = n;
            break;
          default:
            a = n;
        }
        if (typeof t == "function") {
          var r;
          if (e.mode & P)
            try {
              ln(), r = t(a);
            } finally {
              un(e);
            }
          else
            r = t(a);
          typeof r == "function" && f("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", V(e));
        } else
          t.hasOwnProperty("current") || f("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", V(e)), t.current = a;
      }
    }
    function CM(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function ig(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, ig(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === _) {
          var n = e.stateNode;
          n !== null && Mx(n);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function EM(e) {
      for (var t = e.return; t !== null; ) {
        if (ug(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ug(e) {
      return e.tag === _ || e.tag === Y || e.tag === se;
    }
    function lg(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || ug(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== _ && t.tag !== ce && t.tag !== Kr; ) {
          if (t.flags & ge || t.child === null || t.tag === se)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & ge))
          return t.stateNode;
      }
    }
    function RM(e) {
      var t = EM(e);
      switch (t.tag) {
        case _: {
          var n = t.stateNode;
          t.flags & ci && (sm(n), t.flags &= ~ci);
          var a = lg(e);
          Nd(e, a, n);
          break;
        }
        case Y:
        case se: {
          var r = t.stateNode.containerInfo, i = lg(e);
          zd(e, i, r);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function zd(e, t, n) {
      var a = e.tag, r = a === _ || a === ce;
      if (r) {
        var i = e.stateNode;
        t ? YT(n, i, t) : jT(n, i);
      } else if (a !== se) {
        var u = e.child;
        if (u !== null) {
          zd(u, t, n);
          for (var l = u.sibling; l !== null; )
            zd(l, t, n), l = l.sibling;
        }
      }
    }
    function Nd(e, t, n) {
      var a = e.tag, r = a === _ || a === ce;
      if (r) {
        var i = e.stateNode;
        t ? BT(n, i, t) : VT(n, i);
      } else if (a !== se) {
        var u = e.child;
        if (u !== null) {
          Nd(u, t, n);
          for (var l = u.sibling; l !== null; )
            Nd(l, t, n), l = l.sibling;
        }
      }
    }
    var Ve = null, Xt = !1;
    function TM(e, t, n) {
      {
        var a = t;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case _: {
              Ve = a.stateNode, Xt = !1;
              break e;
            }
            case Y: {
              Ve = a.stateNode.containerInfo, Xt = !0;
              break e;
            }
            case se: {
              Ve = a.stateNode.containerInfo, Xt = !0;
              break e;
            }
          }
          a = a.return;
        }
        if (Ve === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        og(e, t, n), Ve = null, Xt = !1;
      }
      CM(n);
    }
    function aa(e, t, n) {
      for (var a = n.child; a !== null; )
        og(e, t, a), a = a.sibling;
    }
    function og(e, t, n) {
      switch (xC(n), n.tag) {
        case _:
          Fe || $r(n, t);
        case ce: {
          {
            var a = Ve, r = Xt;
            Ve = null, aa(e, t, n), Ve = a, Xt = r, Ve !== null && (Xt ? qT(Ve, n.stateNode) : $T(Ve, n.stateNode));
          }
          return;
        }
        case Kr: {
          Ve !== null && (Xt ? GT(Ve, n.stateNode) : qc(Ve, n.stateNode));
          return;
        }
        case se: {
          {
            var i = Ve, u = Xt;
            Ve = n.stateNode.containerInfo, Xt = !0, aa(e, t, n), Ve = i, Xt = u;
          }
          return;
        }
        case ne:
        case ae:
        case Nt:
        case le: {
          if (!Fe) {
            var l = n.updateQueue;
            if (l !== null) {
              var o = l.lastEffect;
              if (o !== null) {
                var s = o.next, c = s;
                do {
                  var v = c, d = v.destroy, m = v.tag;
                  d !== void 0 && ((m & nn) !== ft ? Do(n, t, d) : (m & Ce) !== ft && (Qp(n), n.mode & P ? (ln(), Do(n, t, d), un(n)) : Do(n, t, d), Xp())), c = c.next;
                } while (c !== s);
              }
            }
          }
          aa(e, t, n);
          return;
        }
        case B: {
          if (!Fe) {
            $r(n, t);
            var y = n.stateNode;
            typeof y.componentWillUnmount == "function" && Ad(n, t, y);
          }
          aa(e, t, n);
          return;
        }
        case Xa: {
          aa(e, t, n);
          return;
        }
        case lt: {
          if (
            // TODO: Remove this dead flag
            n.mode & q
          ) {
            var g = Fe;
            Fe = g || n.memoizedState !== null, aa(e, t, n), Fe = g;
          } else
            aa(e, t, n);
          break;
        }
        default: {
          aa(e, t, n);
          return;
        }
      }
    }
    function xM(e) {
      e.memoizedState;
    }
    function DM(e, t) {
      var n = t.memoizedState;
      if (n === null) {
        var a = t.alternate;
        if (a !== null) {
          var r = a.memoizedState;
          if (r !== null) {
            var i = r.dehydrated;
            i !== null && cx(i);
          }
        }
      }
    }
    function sg(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new sM()), t.forEach(function(a) {
          var r = E0.bind(null, e, a);
          if (!n.has(a)) {
            if (n.add(a), kt)
              if (Br !== null && Yr !== null)
                Uu(Yr, Br);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            a.then(r, r);
          }
        });
      }
    }
    function MM(e, t, n) {
      Br = n, Yr = e, he(t), cg(t, e), he(t), Br = null, Yr = null;
    }
    function Zt(e, t, n) {
      var a = t.deletions;
      if (a !== null)
        for (var r = 0; r < a.length; r++) {
          var i = a[r];
          try {
            TM(e, t, i);
          } catch (o) {
            ie(i, t, o);
          }
        }
      var u = Kb();
      if (t.subtreeFlags & Vs)
        for (var l = t.child; l !== null; )
          he(l), cg(l, e), l = l.sibling;
      he(u);
    }
    function cg(e, t, n) {
      var a = e.alternate, r = e.flags;
      switch (e.tag) {
        case ne:
        case ae:
        case Nt:
        case le: {
          if (Zt(t, e), on(e), r & Z) {
            try {
              Qt(nn | Se, e, e.return), na(nn | Se, e);
            } catch (N) {
              ie(e, e.return, N);
            }
            if (e.mode & P) {
              try {
                ln(), Qt(Ce | Se, e, e.return);
              } catch (N) {
                ie(e, e.return, N);
              }
              un(e);
            } else
              try {
                Qt(Ce | Se, e, e.return);
              } catch (N) {
                ie(e, e.return, N);
              }
          }
          return;
        }
        case B: {
          Zt(t, e), on(e), r & Vn && a !== null && $r(a, a.return);
          return;
        }
        case _: {
          Zt(t, e), on(e), r & Vn && a !== null && $r(a, a.return);
          {
            if (e.flags & ci) {
              var i = e.stateNode;
              try {
                sm(i);
              } catch (N) {
                ie(e, e.return, N);
              }
            }
            if (r & Z) {
              var u = e.stateNode;
              if (u != null) {
                var l = e.memoizedProps, o = a !== null ? a.memoizedProps : l, s = e.type, c = e.updateQueue;
                if (e.updateQueue = null, c !== null)
                  try {
                    kT(u, c, s, o, l, e);
                  } catch (N) {
                    ie(e, e.return, N);
                  }
              }
            }
          }
          return;
        }
        case ce: {
          if (Zt(t, e), on(e), r & Z) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var v = e.stateNode, d = e.memoizedProps, m = a !== null ? a.memoizedProps : d;
            try {
              FT(v, m, d);
            } catch (N) {
              ie(e, e.return, N);
            }
          }
          return;
        }
        case Y: {
          if (Zt(t, e), on(e), r & Z && a !== null) {
            var y = a.memoizedState;
            if (y.isDehydrated)
              try {
                sx(t.containerInfo);
              } catch (N) {
                ie(e, e.return, N);
              }
          }
          return;
        }
        case se: {
          Zt(t, e), on(e);
          return;
        }
        case ue: {
          Zt(t, e), on(e);
          var g = e.child;
          if (g.flags & ba) {
            var T = g.stateNode, w = g.memoizedState, L = w !== null;
            if (T.isHidden = L, L) {
              var Q = g.alternate !== null && g.alternate.memoizedState !== null;
              Q || l0();
            }
          }
          if (r & Z) {
            try {
              xM(e);
            } catch (N) {
              ie(e, e.return, N);
            }
            sg(e);
          }
          return;
        }
        case lt: {
          var $ = a !== null && a.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & q
          ) {
            var p = Fe;
            Fe = p || $, Zt(t, e), Fe = p;
          } else
            Zt(t, e);
          if (on(e), r & ba) {
            var b = e.stateNode, h = e.memoizedState, E = h !== null, O = e;
            if (b.isHidden = E, E && !$ && (O.mode & q) !== A) {
              U = O;
              for (var x = O.child; x !== null; )
                U = x, UM(x), x = x.sibling;
            }
            SM(O, E);
          }
          return;
        }
        case ht: {
          Zt(t, e), on(e), r & Z && sg(e);
          return;
        }
        case Xa:
          return;
        default: {
          Zt(t, e), on(e);
          return;
        }
      }
    }
    function on(e) {
      var t = e.flags;
      if (t & ge) {
        try {
          RM(e);
        } catch (n) {
          ie(e, e.return, n);
        }
        e.flags &= ~ge;
      }
      t & mn && (e.flags &= ~mn);
    }
    function OM(e, t, n) {
      Br = n, Yr = t, U = e, fg(e, t, n), Br = null, Yr = null;
    }
    function fg(e, t, n) {
      for (var a = (e.mode & q) !== A; U !== null; ) {
        var r = U, i = r.child;
        if (r.tag === lt && a) {
          var u = r.memoizedState !== null, l = u || xo;
          if (l) {
            _d(e, t, n);
            continue;
          } else {
            var o = r.alternate, s = o !== null && o.memoizedState !== null, c = s || Fe, v = xo, d = Fe;
            xo = l, Fe = c, Fe && !d && (U = r, LM(r));
            for (var m = i; m !== null; )
              U = m, fg(
                m,
                // New root; bubble back up to here and stop.
                t,
                n
              ), m = m.sibling;
            U = r, xo = v, Fe = d, _d(e, t, n);
            continue;
          }
        }
        (r.subtreeFlags & di) !== z && i !== null ? (i.return = r, U = i) : _d(e, t, n);
      }
    }
    function _d(e, t, n) {
      for (; U !== null; ) {
        var a = U;
        if ((a.flags & di) !== z) {
          var r = a.alternate;
          he(a);
          try {
            gM(t, r, a, n);
          } catch (u) {
            ie(a, a.return, u);
          }
          Ie();
        }
        if (a === e) {
          U = null;
          return;
        }
        var i = a.sibling;
        if (i !== null) {
          i.return = a.return, U = i;
          return;
        }
        U = a.return;
      }
    }
    function UM(e) {
      for (; U !== null; ) {
        var t = U, n = t.child;
        switch (t.tag) {
          case ne:
          case ae:
          case Nt:
          case le: {
            if (t.mode & P)
              try {
                ln(), Qt(Ce, t, t.return);
              } finally {
                un(t);
              }
            else
              Qt(Ce, t, t.return);
            break;
          }
          case B: {
            $r(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && Ad(t, t.return, a);
            break;
          }
          case _: {
            $r(t, t.return);
            break;
          }
          case lt: {
            var r = t.memoizedState !== null;
            if (r) {
              dg(e);
              continue;
            }
            break;
          }
        }
        n !== null ? (n.return = t, U = n) : dg(e);
      }
    }
    function dg(e) {
      for (; U !== null; ) {
        var t = U;
        if (t === e) {
          U = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, U = n;
          return;
        }
        U = t.return;
      }
    }
    function LM(e) {
      for (; U !== null; ) {
        var t = U, n = t.child;
        if (t.tag === lt) {
          var a = t.memoizedState !== null;
          if (a) {
            vg(e);
            continue;
          }
        }
        n !== null ? (n.return = t, U = n) : vg(e);
      }
    }
    function vg(e) {
      for (; U !== null; ) {
        var t = U;
        he(t);
        try {
          bM(t);
        } catch (a) {
          ie(t, t.return, a);
        }
        if (Ie(), t === e) {
          U = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, U = n;
          return;
        }
        U = t.return;
      }
    }
    function wM(e, t, n, a) {
      U = t, AM(t, e, n, a);
    }
    function AM(e, t, n, a) {
      for (; U !== null; ) {
        var r = U, i = r.child;
        (r.subtreeFlags & sr) !== z && i !== null ? (i.return = r, U = i) : zM(e, t, n, a);
      }
    }
    function zM(e, t, n, a) {
      for (; U !== null; ) {
        var r = U;
        if ((r.flags & Ht) !== z) {
          he(r);
          try {
            NM(t, r, n, a);
          } catch (u) {
            ie(r, r.return, u);
          }
          Ie();
        }
        if (r === e) {
          U = null;
          return;
        }
        var i = r.sibling;
        if (i !== null) {
          i.return = r.return, U = i;
          return;
        }
        U = r.return;
      }
    }
    function NM(e, t, n, a) {
      switch (t.tag) {
        case ne:
        case ae:
        case le: {
          if (t.mode & P) {
            ed();
            try {
              na(He | Se, t);
            } finally {
              Pf(t);
            }
          } else
            na(He | Se, t);
          break;
        }
      }
    }
    function _M(e) {
      U = e, HM();
    }
    function HM() {
      for (; U !== null; ) {
        var e = U, t = e.child;
        if ((U.flags & ya) !== z) {
          var n = e.deletions;
          if (n !== null) {
            for (var a = 0; a < n.length; a++) {
              var r = n[a];
              U = r, VM(r, e);
            }
            {
              var i = e.alternate;
              if (i !== null) {
                var u = i.child;
                if (u !== null) {
                  i.child = null;
                  do {
                    var l = u.sibling;
                    u.sibling = null, u = l;
                  } while (u !== null);
                }
              }
            }
            U = e;
          }
        }
        (e.subtreeFlags & sr) !== z && t !== null ? (t.return = e, U = t) : kM();
      }
    }
    function kM() {
      for (; U !== null; ) {
        var e = U;
        (e.flags & Ht) !== z && (he(e), FM(e), Ie());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, U = t;
          return;
        }
        U = e.return;
      }
    }
    function FM(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          e.mode & P ? (ed(), Qt(He | Se, e, e.return), Pf(e)) : Qt(He | Se, e, e.return);
          break;
        }
      }
    }
    function VM(e, t) {
      for (; U !== null; ) {
        var n = U;
        he(n), BM(n, t), Ie();
        var a = n.child;
        a !== null ? (a.return = n, U = a) : jM(e);
      }
    }
    function jM(e) {
      for (; U !== null; ) {
        var t = U, n = t.sibling, a = t.return;
        if (ig(t), t === e) {
          U = null;
          return;
        }
        if (n !== null) {
          n.return = a, U = n;
          return;
        }
        U = a;
      }
    }
    function BM(e, t) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          e.mode & P ? (ed(), Qt(He, e, t), Pf(e)) : Qt(He, e, t);
          break;
        }
      }
    }
    function YM(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          try {
            na(Ce | Se, e);
          } catch (n) {
            ie(e, e.return, n);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (n) {
            ie(e, e.return, n);
          }
          break;
        }
      }
    }
    function $M(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          try {
            na(He | Se, e);
          } catch (t) {
            ie(e, e.return, t);
          }
          break;
        }
      }
    }
    function qM(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le: {
          try {
            Qt(Ce | Se, e, e.return);
          } catch (n) {
            ie(e, e.return, n);
          }
          break;
        }
        case B: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Ad(e, e.return, t);
          break;
        }
      }
    }
    function GM(e) {
      switch (e.tag) {
        case ne:
        case ae:
        case le:
          try {
            Qt(He | Se, e, e.return);
          } catch (t) {
            ie(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var gu = Symbol.for;
      gu("selector.component"), gu("selector.has_pseudo_class"), gu("selector.role"), gu("selector.test_id"), gu("selector.text");
    }
    var QM = [];
    function XM() {
      QM.forEach(function(e) {
        return e();
      });
    }
    var ZM = Ae.ReactCurrentActQueue;
    function JM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), n = typeof jest < "u";
        return n && t !== !1;
      }
    }
    function pg() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && ZM.current !== null && f("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var KM = Math.ceil, Hd = Ae.ReactCurrentDispatcher, kd = Ae.ReactCurrentOwner, je = Ae.ReactCurrentBatchConfig, Jt = Ae.ReactCurrentActQueue, Te = (
      /*             */
      0
    ), hg = (
      /*               */
      1
    ), Be = (
      /*                */
      2
    ), wt = (
      /*                */
      4
    ), Un = 0, bu = 1, ja = 2, Mo = 3, Su = 4, mg = 5, Fd = 6, G = Te, at = null, de = null, xe = C, sn = C, Vd = Xn(C), De = Un, Cu = null, Oo = C, Eu = C, Uo = C, Ru = null, dt = null, jd = 0, yg = 500, gg = 1 / 0, WM = 500, Ln = null;
    function Tu() {
      gg = Oe() + WM;
    }
    function bg() {
      return gg;
    }
    var Lo = !1, Bd = null, qr = null, Ba = !1, ra = null, xu = C, Yd = [], $d = null, IM = 50, Du = 0, qd = null, Gd = !1, wo = !1, PM = 50, Gr = 0, Ao = null, Mu = oe, zo = C, Sg = !1;
    function No() {
      return at;
    }
    function rt() {
      return (G & (Be | wt)) !== Te ? Oe() : (Mu !== oe || (Mu = Oe()), Mu);
    }
    function ia(e) {
      var t = e.mode;
      if ((t & q) === A)
        return H;
      if ((G & Be) !== Te && xe !== C)
        return bi(xe);
      var n = Zx() !== Xx;
      if (n) {
        if (je.transition !== null) {
          var a = je.transition;
          a._updatedFibers || (a._updatedFibers = /* @__PURE__ */ new Set()), a._updatedFibers.add(e);
        }
        return zo === Le && (zo = th()), zo;
      }
      var r = Ft();
      if (r !== Le)
        return r;
      var i = AT();
      return i;
    }
    function e0(e) {
      var t = e.mode;
      return (t & q) === A ? H : nE();
    }
    function Me(e, t, n, a) {
      T0(), Sg && f("useInsertionEffect must not schedule updates."), Gd && (wo = !0), Si(e, n, a), (G & Be) !== C && e === at ? M0(t) : (kt && rh(e, t, n), O0(t), e === at && ((G & Be) === Te && (Eu = j(Eu, n)), De === Su && ua(e, xe)), vt(e, a), n === H && G === Te && (t.mode & q) === A && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Jt.isBatchingLegacy && (Tu(), Sm()));
    }
    function t0(e, t, n) {
      var a = e.current;
      a.lanes = t, Si(e, t, n), vt(e, n);
    }
    function n0(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (G & Be) !== Te
      );
    }
    function vt(e, t) {
      var n = e.callbackNode;
      KC(e, t);
      var a = el(e, e === at ? xe : C);
      if (a === C) {
        n !== null && Hg(n), e.callbackNode = null, e.callbackPriority = Le;
        return;
      }
      var r = xa(a), i = e.callbackPriority;
      if (i === r && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Jt.current !== null && n !== Id)) {
        n == null && i !== H && f("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      n != null && Hg(n);
      var u;
      if (r === H)
        e.tag === Zn ? (Jt.isBatchingLegacy !== null && (Jt.didScheduleLegacyUpdate = !0), Lx(Rg.bind(null, e))) : bm(Rg.bind(null, e)), Jt.current !== null ? Jt.current.push(Jn) : NT(function() {
          (G & (Be | wt)) === Te && Jn();
        }), u = null;
      else {
        var l;
        switch (lh(a)) {
          case bt:
            l = Ku;
            break;
          case Sn:
            l = js;
            break;
          case Cn:
            l = Ea;
            break;
          case al:
            l = Bs;
            break;
          default:
            l = Ea;
            break;
        }
        u = Pd(l, Cg.bind(null, e));
      }
      e.callbackPriority = r, e.callbackNode = u;
    }
    function Cg(e, t) {
      if (SD(), Mu = oe, zo = C, (G & (Be | wt)) !== Te)
        throw new Error("Should not already be working.");
      var n = e.callbackNode, a = An();
      if (a && e.callbackNode !== n)
        return null;
      var r = el(e, e === at ? xe : C);
      if (r === C)
        return null;
      var i = !tl(e, r) && !tE(e, r) && !t, u = i ? d0(e, r) : Ho(e, r);
      if (u !== Un) {
        if (u === ja) {
          var l = sc(e);
          l !== C && (r = l, u = Qd(e, l));
        }
        if (u === bu) {
          var o = Cu;
          throw Ya(e, C), ua(e, r), vt(e, Oe()), o;
        }
        if (u === Fd)
          ua(e, r);
        else {
          var s = !tl(e, r), c = e.current.alternate;
          if (s && !r0(c)) {
            if (u = Ho(e, r), u === ja) {
              var v = sc(e);
              v !== C && (r = v, u = Qd(e, v));
            }
            if (u === bu) {
              var d = Cu;
              throw Ya(e, C), ua(e, r), vt(e, Oe()), d;
            }
          }
          e.finishedWork = c, e.finishedLanes = r, a0(e, u, r);
        }
      }
      return vt(e, Oe()), e.callbackNode === n ? Cg.bind(null, e) : null;
    }
    function Qd(e, t) {
      var n = Ru;
      if (rl(e)) {
        var a = Ya(e, t);
        a.flags |= hn, Rx(e.containerInfo);
      }
      var r = Ho(e, t);
      if (r !== ja) {
        var i = dt;
        dt = n, i !== null && Eg(i);
      }
      return r;
    }
    function Eg(e) {
      dt === null ? dt = e : dt.push.apply(dt, e);
    }
    function a0(e, t, n) {
      switch (t) {
        case Un:
        case bu:
          throw new Error("Root did not complete. This is a bug in React.");
        case ja: {
          $a(e, dt, Ln);
          break;
        }
        case Mo: {
          if (ua(e, n), Pp(n) && // do not delay if we're inside an act() scope
          !kg()) {
            var a = jd + yg - Oe();
            if (a > 10) {
              var r = el(e, C);
              if (r !== C)
                break;
              var i = e.suspendedLanes;
              if (!hr(i, n)) {
                rt(), ah(e, i);
                break;
              }
              e.timeoutHandle = Yc($a.bind(null, e, dt, Ln), a);
              break;
            }
          }
          $a(e, dt, Ln);
          break;
        }
        case Su: {
          if (ua(e, n), eE(n))
            break;
          if (!kg()) {
            var u = ZC(e, n), l = u, o = Oe() - l, s = R0(o) - o;
            if (s > 10) {
              e.timeoutHandle = Yc($a.bind(null, e, dt, Ln), s);
              break;
            }
          }
          $a(e, dt, Ln);
          break;
        }
        case mg: {
          $a(e, dt, Ln);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function r0(e) {
      for (var t = e; ; ) {
        if (t.flags & Zu) {
          var n = t.updateQueue;
          if (n !== null) {
            var a = n.stores;
            if (a !== null)
              for (var r = 0; r < a.length; r++) {
                var i = a[r], u = i.getSnapshot, l = i.value;
                try {
                  if (!Ct(u(), l))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var o = t.child;
        if (t.subtreeFlags & Zu && o !== null) {
          o.return = t, t = o;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function ua(e, t) {
      t = nl(t, Uo), t = nl(t, Eu), rE(e, t);
    }
    function Rg(e) {
      if (CD(), (G & (Be | wt)) !== Te)
        throw new Error("Should not already be working.");
      An();
      var t = el(e, C);
      if (!gt(t, H))
        return vt(e, Oe()), null;
      var n = Ho(e, t);
      if (e.tag !== Zn && n === ja) {
        var a = sc(e);
        a !== C && (t = a, n = Qd(e, a));
      }
      if (n === bu) {
        var r = Cu;
        throw Ya(e, C), ua(e, t), vt(e, Oe()), r;
      }
      if (n === Fd)
        throw new Error("Root did not complete. This is a bug in React.");
      var i = e.current.alternate;
      return e.finishedWork = i, e.finishedLanes = t, $a(e, dt, Ln), vt(e, Oe()), null;
    }
    function i0(e, t) {
      t !== C && (vc(e, j(t, H)), vt(e, Oe()), (G & (Be | wt)) === Te && (Tu(), Jn()));
    }
    function Xd(e, t) {
      var n = G;
      G |= hg;
      try {
        return e(t);
      } finally {
        G = n, G === Te && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Jt.isBatchingLegacy && (Tu(), Sm());
      }
    }
    function u0(e, t, n, a, r) {
      var i = Ft(), u = je.transition;
      try {
        return je.transition = null, we(bt), e(t, n, a, r);
      } finally {
        we(i), je.transition = u, G === Te && Tu();
      }
    }
    function wn(e) {
      ra !== null && ra.tag === Zn && (G & (Be | wt)) === Te && An();
      var t = G;
      G |= hg;
      var n = je.transition, a = Ft();
      try {
        return je.transition = null, we(bt), e ? e() : void 0;
      } finally {
        we(a), je.transition = n, G = t, (G & (Be | wt)) === Te && Jn();
      }
    }
    function Tg() {
      return (G & (Be | wt)) !== Te;
    }
    function _o(e, t) {
      Qe(Vd, sn, e), sn = j(sn, t);
    }
    function Zd(e) {
      sn = Vd.current, Ge(Vd, e);
    }
    function Ya(e, t) {
      e.finishedWork = null, e.finishedLanes = C;
      var n = e.timeoutHandle;
      if (n !== $c && (e.timeoutHandle = $c, zT(n)), de !== null)
        for (var a = de.return; a !== null; ) {
          var r = a.alternate;
          Py(r, a), a = a.return;
        }
      at = e;
      var i = qa(e.current, null);
      return de = i, xe = sn = t, De = Un, Cu = null, Oo = C, Eu = C, Uo = C, Ru = null, dt = null, tD(), Bt.discardPendingWarnings(), i;
    }
    function xg(e, t) {
      do {
        var n = de;
        try {
          if (ql(), Jm(), Ie(), kd.current = null, n === null || n.return === null) {
            De = bu, Cu = t, de = null;
            return;
          }
          if (Xo && n.mode & P && So(n, !0), Ev)
            if (fr(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var a = t;
              HC(n, a, xe);
            } else
              _C(n, t, xe);
          LD(e, n.return, n, t, xe), Ug(n);
        } catch (r) {
          t = r, de === n && n !== null ? (n = n.return, de = n) : n = de;
          continue;
        }
        return;
      } while (!0);
    }
    function Dg() {
      var e = Hd.current;
      return Hd.current = ho, e === null ? ho : e;
    }
    function Mg(e) {
      Hd.current = e;
    }
    function l0() {
      jd = Oe();
    }
    function Ou(e) {
      Oo = j(e, Oo);
    }
    function o0() {
      De === Un && (De = Mo);
    }
    function Jd() {
      (De === Un || De === Mo || De === ja) && (De = Su), at !== null && (cc(Oo) || cc(Eu)) && ua(at, xe);
    }
    function s0(e) {
      De !== Su && (De = ja), Ru === null ? Ru = [e] : Ru.push(e);
    }
    function c0() {
      return De === Un;
    }
    function Ho(e, t) {
      var n = G;
      G |= Be;
      var a = Dg();
      if (at !== e || xe !== t) {
        if (kt) {
          var r = e.memoizedUpdaters;
          r.size > 0 && (Uu(e, xe), r.clear()), ih(e, t);
        }
        Ln = uh(), Ya(e, t);
      }
      Zp(t);
      do
        try {
          f0();
          break;
        } catch (i) {
          xg(e, i);
        }
      while (!0);
      if (ql(), G = n, Mg(a), de !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Jp(), at = null, xe = C, De;
    }
    function f0() {
      for (; de !== null; )
        Og(de);
    }
    function d0(e, t) {
      var n = G;
      G |= Be;
      var a = Dg();
      if (at !== e || xe !== t) {
        if (kt) {
          var r = e.memoizedUpdaters;
          r.size > 0 && (Uu(e, xe), r.clear()), ih(e, t);
        }
        Ln = uh(), Tu(), Ya(e, t);
      }
      Zp(t);
      do
        try {
          v0();
          break;
        } catch (i) {
          xg(e, i);
        }
      while (!0);
      return ql(), Mg(a), G = n, de !== null ? (BC(), Un) : (Jp(), at = null, xe = C, De);
    }
    function v0() {
      for (; de !== null && !hC(); )
        Og(de);
    }
    function Og(e) {
      var t = e.alternate;
      he(e);
      var n;
      (e.mode & P) !== A ? (If(e), n = Kd(t, e, sn), So(e, !0)) : n = Kd(t, e, sn), Ie(), e.memoizedProps = e.pendingProps, n === null ? Ug(e) : de = n, kd.current = null;
    }
    function Ug(e) {
      var t = e;
      do {
        var n = t.alternate, a = t.return;
        if ((t.flags & fi) === z) {
          he(t);
          var r = void 0;
          if ((t.mode & P) === A ? r = Iy(n, t, sn) : (If(t), r = Iy(n, t, sn), So(t, !1)), Ie(), r !== null) {
            de = r;
            return;
          }
        } else {
          var i = oM(n, t);
          if (i !== null) {
            i.flags &= sC, de = i;
            return;
          }
          if ((t.mode & P) !== A) {
            So(t, !1);
            for (var u = t.actualDuration, l = t.child; l !== null; )
              u += l.actualDuration, l = l.sibling;
            t.actualDuration = u;
          }
          if (a !== null)
            a.flags |= fi, a.subtreeFlags = z, a.deletions = null;
          else {
            De = Fd, de = null;
            return;
          }
        }
        var o = t.sibling;
        if (o !== null) {
          de = o;
          return;
        }
        t = a, de = t;
      } while (t !== null);
      De === Un && (De = mg);
    }
    function $a(e, t, n) {
      var a = Ft(), r = je.transition;
      try {
        je.transition = null, we(bt), p0(e, t, n, a);
      } finally {
        je.transition = r, we(a);
      }
      return null;
    }
    function p0(e, t, n, a) {
      do
        An();
      while (ra !== null);
      if (x0(), (G & (Be | wt)) !== Te)
        throw new Error("Should not already be working.");
      var r = e.finishedWork, i = e.finishedLanes;
      if (OC(i), r === null)
        return Gp(), null;
      if (i === C && f("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = C, r === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Le;
      var u = j(r.lanes, r.childLanes);
      iE(e, u), e === at && (at = null, de = null, xe = C), ((r.subtreeFlags & sr) !== z || (r.flags & sr) !== z) && (Ba || (Ba = !0, $d = n, Pd(Ea, function() {
        return An(), null;
      })));
      var l = (r.subtreeFlags & (Fs | Vs | di | sr)) !== z, o = (r.flags & (Fs | Vs | di | sr)) !== z;
      if (l || o) {
        var s = je.transition;
        je.transition = null;
        var c = Ft();
        we(bt);
        var v = G;
        G |= wt, kd.current = null, vM(e, r), Sy(), MM(e, r, i), DT(e.containerInfo), e.current = r, kC(i), OM(r, e, i), FC(), mC(), G = v, we(c), je.transition = s;
      } else
        e.current = r, Sy();
      var d = Ba;
      if (Ba ? (Ba = !1, ra = e, xu = i) : (Gr = 0, Ao = null), u = e.pendingLanes, u === C && (qr = null), d || zg(e.current, !1), RC(r.stateNode, a), kt && e.memoizedUpdaters.clear(), XM(), vt(e, Oe()), t !== null)
        for (var m = e.onRecoverableError, y = 0; y < t.length; y++) {
          var g = t[y], T = g.stack, w = g.digest;
          m(g.value, {
            componentStack: T,
            digest: w
          });
        }
      if (Lo) {
        Lo = !1;
        var L = Bd;
        throw Bd = null, L;
      }
      return gt(xu, H) && e.tag !== Zn && An(), u = e.pendingLanes, gt(u, H) ? (bD(), e === qd ? Du++ : (Du = 0, qd = e)) : Du = 0, Jn(), Gp(), null;
    }
    function An() {
      if (ra !== null) {
        var e = lh(xu), t = sE(Cn, e), n = je.transition, a = Ft();
        try {
          return je.transition = null, we(t), m0();
        } finally {
          we(a), je.transition = n;
        }
      }
      return !1;
    }
    function h0(e) {
      Yd.push(e), Ba || (Ba = !0, Pd(Ea, function() {
        return An(), null;
      }));
    }
    function m0() {
      if (ra === null)
        return !1;
      var e = $d;
      $d = null;
      var t = ra, n = xu;
      if (ra = null, xu = C, (G & (Be | wt)) !== Te)
        throw new Error("Cannot flush passive effects while already rendering.");
      Gd = !0, wo = !1, VC(n);
      var a = G;
      G |= wt, _M(t.current), wM(t, t.current, n, e);
      {
        var r = Yd;
        Yd = [];
        for (var i = 0; i < r.length; i++) {
          var u = r[i];
          yM(t, u);
        }
      }
      jC(), zg(t.current, !0), G = a, Jn(), wo ? t === Ao ? Gr++ : (Gr = 0, Ao = t) : Gr = 0, Gd = !1, wo = !1, TC(t);
      {
        var l = t.current.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Lg(e) {
      return qr !== null && qr.has(e);
    }
    function y0(e) {
      qr === null ? qr = /* @__PURE__ */ new Set([e]) : qr.add(e);
    }
    function g0(e) {
      Lo || (Lo = !0, Bd = e);
    }
    var b0 = g0;
    function wg(e, t, n) {
      var a = Fa(n, t), r = Oy(e, a, H), i = Wn(e, r, H), u = rt();
      i !== null && (Si(i, H, u), vt(i, u));
    }
    function ie(e, t, n) {
      if (cM(n), Lu(!1), e.tag === Y) {
        wg(e, e, n);
        return;
      }
      var a = null;
      for (a = t; a !== null; ) {
        if (a.tag === Y) {
          wg(a, e, n);
          return;
        } else if (a.tag === B) {
          var r = a.type, i = a.stateNode;
          if (typeof r.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && !Lg(i)) {
            var u = Fa(n, e), l = md(a, u, H), o = Wn(a, l, H), s = rt();
            o !== null && (Si(o, H, s), vt(o, s));
            return;
          }
        }
        a = a.return;
      }
      f(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
    }
    function S0(e, t, n) {
      var a = e.pingCache;
      a !== null && a.delete(t);
      var r = rt();
      ah(e, n), U0(e), at === e && hr(xe, n) && (De === Su || De === Mo && Pp(xe) && Oe() - jd < yg ? Ya(e, C) : Uo = j(Uo, n)), vt(e, r);
    }
    function Ag(e, t) {
      t === Le && (t = e0(e));
      var n = rt(), a = ct(e, t);
      a !== null && (Si(a, t, n), vt(a, n));
    }
    function C0(e) {
      var t = e.memoizedState, n = Le;
      t !== null && (n = t.retryLane), Ag(e, n);
    }
    function E0(e, t) {
      var n = Le, a;
      switch (e.tag) {
        case ue:
          a = e.stateNode;
          var r = e.memoizedState;
          r !== null && (n = r.retryLane);
          break;
        case ht:
          a = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      a !== null && a.delete(t), Ag(e, n);
    }
    function R0(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : KM(e / 1960) * 1960;
    }
    function T0() {
      if (Du > IM)
        throw Du = 0, qd = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Gr > PM && (Gr = 0, Ao = null, f("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function x0() {
      Bt.flushLegacyContextWarning(), Bt.flushPendingUnsafeLifecycleWarnings();
    }
    function zg(e, t) {
      he(e), ko(e, yn, qM), t && ko(e, Ju, GM), ko(e, yn, YM), t && ko(e, Ju, $M), Ie();
    }
    function ko(e, t, n) {
      for (var a = e, r = null; a !== null; ) {
        var i = a.subtreeFlags & t;
        a !== r && a.child !== null && i !== z ? a = a.child : ((a.flags & t) !== z && n(a), a.sibling !== null ? a = a.sibling : a = r = a.return);
      }
    }
    var Fo = null;
    function Ng(e) {
      {
        if ((G & Be) !== Te || !(e.mode & q))
          return;
        var t = e.tag;
        if (t !== fn && t !== Y && t !== B && t !== ne && t !== ae && t !== Nt && t !== le)
          return;
        var n = V(e) || "ReactComponent";
        if (Fo !== null) {
          if (Fo.has(n))
            return;
          Fo.add(n);
        } else
          Fo = /* @__PURE__ */ new Set([n]);
        var a = mt;
        try {
          he(e), f("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          a ? he(e) : Ie();
        }
      }
    }
    var Kd;
    {
      var D0 = null;
      Kd = function(e, t, n) {
        var a = Yg(D0, t);
        try {
          return Xy(e, t, n);
        } catch (i) {
          if (Fx() || i !== null && typeof i == "object" && typeof i.then == "function")
            throw i;
          if (ql(), Jm(), Py(e, t), Yg(t, a), t.mode & P && If(t), As(null, Xy, null, e, t, n), iC()) {
            var r = zs();
            typeof r == "object" && r !== null && r._suppressLogging && typeof i == "object" && i !== null && !i._suppressLogging && (i._suppressLogging = !0);
          }
          throw i;
        }
      };
    }
    var _g = !1, Wd;
    Wd = /* @__PURE__ */ new Set();
    function M0(e) {
      if (ai && !mD())
        switch (e.tag) {
          case ne:
          case ae:
          case le: {
            var t = de && V(de) || "Unknown", n = t;
            if (!Wd.has(n)) {
              Wd.add(n);
              var a = V(e) || "Unknown";
              f("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", a, t, t);
            }
            break;
          }
          case B: {
            _g || (f("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), _g = !0);
            break;
          }
        }
    }
    function Uu(e, t) {
      if (kt) {
        var n = e.memoizedUpdaters;
        n.forEach(function(a) {
          rh(e, a, t);
        });
      }
    }
    var Id = {};
    function Pd(e, t) {
      {
        var n = Jt.current;
        return n !== null ? (n.push(t), Id) : qp(e, t);
      }
    }
    function Hg(e) {
      if (e !== Id)
        return pC(e);
    }
    function kg() {
      return Jt.current !== null;
    }
    function O0(e) {
      {
        if (e.mode & q) {
          if (!pg())
            return;
        } else if (!JM() || G !== Te || e.tag !== ne && e.tag !== ae && e.tag !== le)
          return;
        if (Jt.current === null) {
          var t = mt;
          try {
            he(e), f(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, V(e));
          } finally {
            t ? he(e) : Ie();
          }
        }
      }
    }
    function U0(e) {
      e.tag !== Zn && pg() && Jt.current === null && f(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Lu(e) {
      Sg = e;
    }
    var At = null, Qr = null, L0 = function(e) {
      At = e;
    };
    function Xr(e) {
      {
        if (At === null)
          return e;
        var t = At(e);
        return t === void 0 ? e : t.current;
      }
    }
    function ev(e) {
      return Xr(e);
    }
    function tv(e) {
      {
        if (At === null)
          return e;
        var t = At(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var n = Xr(e.render);
            if (e.render !== n) {
              var a = {
                $$typeof: er,
                render: n
              };
              return e.displayName !== void 0 && (a.displayName = e.displayName), a;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Fg(e, t) {
      {
        if (At === null)
          return !1;
        var n = e.elementType, a = t.type, r = !1, i = typeof a == "object" && a !== null ? a.$$typeof : null;
        switch (e.tag) {
          case B: {
            typeof a == "function" && (r = !0);
            break;
          }
          case ne: {
            (typeof a == "function" || i === We) && (r = !0);
            break;
          }
          case ae: {
            (i === er || i === We) && (r = !0);
            break;
          }
          case Nt:
          case le: {
            (i === ti || i === We) && (r = !0);
            break;
          }
          default:
            return !1;
        }
        if (r) {
          var u = At(n);
          if (u !== void 0 && u === At(a))
            return !0;
        }
        return !1;
      }
    }
    function Vg(e) {
      {
        if (At === null || typeof WeakSet != "function")
          return;
        Qr === null && (Qr = /* @__PURE__ */ new WeakSet()), Qr.add(e);
      }
    }
    var w0 = function(e, t) {
      {
        if (At === null)
          return;
        var n = t.staleFamilies, a = t.updatedFamilies;
        An(), wn(function() {
          nv(e.current, a, n);
        });
      }
    }, A0 = function(e, t) {
      {
        if (e.context !== Et)
          return;
        An(), wn(function() {
          wu(t, e, null, null);
        });
      }
    };
    function nv(e, t, n) {
      {
        var a = e.alternate, r = e.child, i = e.sibling, u = e.tag, l = e.type, o = null;
        switch (u) {
          case ne:
          case le:
          case B:
            o = l;
            break;
          case ae:
            o = l.render;
            break;
        }
        if (At === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var s = !1, c = !1;
        if (o !== null) {
          var v = At(o);
          v !== void 0 && (n.has(v) ? c = !0 : t.has(v) && (u === B ? c = !0 : s = !0));
        }
        if (Qr !== null && (Qr.has(e) || a !== null && Qr.has(a)) && (c = !0), c && (e._debugNeedsRemount = !0), c || s) {
          var d = ct(e, H);
          d !== null && Me(d, e, H, oe);
        }
        r !== null && !c && nv(r, t, n), i !== null && nv(i, t, n);
      }
    }
    var z0 = function(e, t) {
      {
        var n = /* @__PURE__ */ new Set(), a = new Set(t.map(function(r) {
          return r.current;
        }));
        return av(e.current, a, n), n;
      }
    };
    function av(e, t, n) {
      {
        var a = e.child, r = e.sibling, i = e.tag, u = e.type, l = null;
        switch (i) {
          case ne:
          case le:
          case B:
            l = u;
            break;
          case ae:
            l = u.render;
            break;
        }
        var o = !1;
        l !== null && t.has(l) && (o = !0), o ? N0(e, n) : a !== null && av(a, t, n), r !== null && av(r, t, n);
      }
    }
    function N0(e, t) {
      {
        var n = _0(e, t);
        if (n)
          return;
        for (var a = e; ; ) {
          switch (a.tag) {
            case _:
              t.add(a.stateNode);
              return;
            case se:
              t.add(a.stateNode.containerInfo);
              return;
            case Y:
              t.add(a.stateNode.containerInfo);
              return;
          }
          if (a.return === null)
            throw new Error("Expected to reach root first.");
          a = a.return;
        }
      }
    }
    function _0(e, t) {
      for (var n = e, a = !1; ; ) {
        if (n.tag === _)
          a = !0, t.add(n.stateNode);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e)
          return a;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return a;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !1;
    }
    var rv;
    {
      rv = !1;
      try {
        var jg = Object.preventExtensions({});
      } catch {
        rv = !0;
      }
    }
    function H0(e, t, n, a) {
      this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = a, this.flags = z, this.subtreeFlags = z, this.deletions = null, this.lanes = C, this.childLanes = C, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !rv && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Rt = function(e, t, n, a) {
      return new H0(e, t, n, a);
    };
    function iv(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function k0(e) {
      return typeof e == "function" && !iv(e) && e.defaultProps === void 0;
    }
    function F0(e) {
      if (typeof e == "function")
        return iv(e) ? B : ne;
      if (e != null) {
        var t = e.$$typeof;
        if (t === er)
          return ae;
        if (t === ti)
          return Nt;
      }
      return fn;
    }
    function qa(e, t) {
      var n = e.alternate;
      n === null ? (n = Rt(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = z, n.subtreeFlags = z, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & gn, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
      var a = e.dependencies;
      switch (n.dependencies = a === null ? null : {
        lanes: a.lanes,
        firstContext: a.firstContext
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case fn:
        case ne:
        case le:
          n.type = Xr(e.type);
          break;
        case B:
          n.type = ev(e.type);
          break;
        case ae:
          n.type = tv(e.type);
          break;
      }
      return n;
    }
    function V0(e, t) {
      e.flags &= gn | ge;
      var n = e.alternate;
      if (n === null)
        e.childLanes = C, e.lanes = t, e.child = null, e.subtreeFlags = z, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = z, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
        var a = n.dependencies;
        e.dependencies = a === null ? null : {
          lanes: a.lanes,
          firstContext: a.firstContext
        }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
      }
      return e;
    }
    function j0(e, t, n) {
      var a;
      return e === Nl ? (a = q, t === !0 && (a |= ve, a |= It)) : a = A, kt && (a |= P), Rt(Y, null, null, a);
    }
    function uv(e, t, n, a, r, i) {
      var u = fn, l = e;
      if (typeof e == "function")
        iv(e) ? (u = B, l = ev(l)) : l = Xr(l);
      else if (typeof e == "string")
        u = _;
      else
        e: switch (e) {
          case Pa:
            return la(n.children, r, i, t);
          case ts:
            u = Nu, r |= ve, (r & q) !== A && (r |= It);
            break;
          case ns:
            return B0(n, r, i, t);
          case Fu:
            return Y0(n, r, i, t);
          case Vu:
            return $0(n, r, i, t);
          case Nv:
            return Bg(n, r, i, t);
          case kb:
          case _b:
          case Fb:
          case Vb:
          case Hb:
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case as:
                  u = Nn;
                  break e;
                case rs:
                  u = _u;
                  break e;
                case er:
                  u = ae, l = tv(l);
                  break e;
                case ti:
                  u = Nt;
                  break e;
                case We:
                  u = Jr, l = null;
                  break e;
              }
            var o = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var s = a ? V(a) : null;
              s && (o += `

Check the render method of \`` + s + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + o));
          }
        }
      var c = Rt(u, n, t, r);
      return c.elementType = e, c.type = l, c.lanes = i, c._debugOwner = a, c;
    }
    function lv(e, t, n) {
      var a = null;
      a = e._owner;
      var r = e.type, i = e.key, u = e.props, l = uv(r, i, u, a, t, n);
      return l._debugSource = e._source, l._debugOwner = e._owner, l;
    }
    function la(e, t, n, a) {
      var r = Rt(Ga, e, a, t);
      return r.lanes = n, r;
    }
    function B0(e, t, n, a) {
      typeof e.id != "string" && f('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var r = Rt(zt, e, a, t | P);
      return r.elementType = ns, r.lanes = n, r.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, r;
    }
    function Y0(e, t, n, a) {
      var r = Rt(ue, e, a, t);
      return r.elementType = Fu, r.lanes = n, r;
    }
    function $0(e, t, n, a) {
      var r = Rt(ht, e, a, t);
      return r.elementType = Vu, r.lanes = n, r;
    }
    function Bg(e, t, n, a) {
      var r = Rt(lt, e, a, t);
      r.elementType = Nv, r.lanes = n;
      var i = {
        isHidden: !1
      };
      return r.stateNode = i, r;
    }
    function ov(e, t, n) {
      var a = Rt(ce, e, null, t);
      return a.lanes = n, a;
    }
    function q0() {
      var e = Rt(_, null, null, A);
      return e.elementType = "DELETED", e;
    }
    function G0(e) {
      var t = Rt(Kr, null, null, A);
      return t.stateNode = e, t;
    }
    function sv(e, t, n) {
      var a = e.children !== null ? e.children : [], r = Rt(se, a, e.key, t);
      return r.lanes = n, r.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, r;
    }
    function Yg(e, t) {
      return e === null && (e = Rt(fn, null, null, A)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Q0(e, t, n, a, r) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = $c, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Le, this.eventTimes = dc(C), this.expirationTimes = dc(oe), this.pendingLanes = C, this.suspendedLanes = C, this.pingedLanes = C, this.expiredLanes = C, this.mutableReadLanes = C, this.finishedLanes = C, this.entangledLanes = C, this.entanglements = dc(C), this.identifierPrefix = a, this.onRecoverableError = r, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var i = this.pendingUpdatersLaneMap = [], u = 0; u < $s; u++)
          i.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Nl:
          this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
          break;
        case Zn:
          this._debugRootType = n ? "hydrate()" : "render()";
          break;
      }
    }
    function $g(e, t, n, a, r, i, u, l, o, s) {
      var c = new Q0(e, t, n, l, o), v = j0(t, i);
      c.current = v, v.stateNode = c;
      {
        var d = {
          element: a,
          isDehydrated: n,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        v.memoizedState = d;
      }
      return Ef(v), c;
    }
    var cv = "18.3.1";
    function X0(e, t, n) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Db(a), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: pa,
        key: a == null ? null : "" + a,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    var fv, dv;
    fv = !1, dv = {};
    function qg(e) {
      if (!e)
        return Et;
      var t = lr(e), n = Ux(t);
      if (t.tag === B) {
        var a = t.type;
        if (tn(a))
          return ym(t, a, n);
      }
      return n;
    }
    function Z0(e, t) {
      {
        var n = lr(e);
        if (n === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var a = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + a);
        }
        var r = Bp(n);
        if (r === null)
          return null;
        if (r.mode & ve) {
          var i = V(n) || "Component";
          if (!dv[i]) {
            dv[i] = !0;
            var u = mt;
            try {
              he(r), n.mode & ve ? f("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i) : f("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, i);
            } finally {
              u ? he(u) : Ie();
            }
          }
        }
        return r.stateNode;
      }
    }
    function Gg(e, t, n, a, r, i, u, l) {
      var o = !1, s = null;
      return $g(e, t, o, s, n, a, r, i, u);
    }
    function Qg(e, t, n, a, r, i, u, l, o, s) {
      var c = !0, v = $g(n, a, c, e, r, i, u, l, o);
      v.context = qg(null);
      var d = v.current, m = rt(), y = ia(d), g = Mn(m, y);
      return g.callback = t ?? null, Wn(d, g, y), t0(v, y, m), v;
    }
    function wu(e, t, n, a) {
      EC(t, e);
      var r = t.current, i = rt(), u = ia(r);
      YC(u);
      var l = qg(n);
      t.context === null ? t.context = l : t.pendingContext = l, ai && mt !== null && !fv && (fv = !0, f(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, V(mt) || "Unknown"));
      var o = Mn(i, u);
      o.payload = {
        element: e
      }, a = a === void 0 ? null : a, a !== null && (typeof a != "function" && f("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", a), o.callback = a);
      var s = Wn(r, o, u);
      return s !== null && (Me(s, r, u, i), Jl(s, r, u)), u;
    }
    function Vo(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case _:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function J0(e) {
      switch (e.tag) {
        case Y: {
          var t = e.stateNode;
          if (rl(t)) {
            var n = WC(t);
            i0(t, n);
          }
          break;
        }
        case ue: {
          wn(function() {
            var r = ct(e, H);
            if (r !== null) {
              var i = rt();
              Me(r, e, H, i);
            }
          });
          var a = H;
          vv(e, a);
          break;
        }
      }
    }
    function Xg(e, t) {
      var n = e.memoizedState;
      n !== null && n.dehydrated !== null && (n.retryLane = aE(n.retryLane, t));
    }
    function vv(e, t) {
      Xg(e, t);
      var n = e.alternate;
      n && Xg(n, t);
    }
    function K0(e) {
      if (e.tag === ue) {
        var t = mi, n = ct(e, t);
        if (n !== null) {
          var a = rt();
          Me(n, e, t, a);
        }
        vv(e, t);
      }
    }
    function W0(e) {
      if (e.tag === ue) {
        var t = ia(e), n = ct(e, t);
        if (n !== null) {
          var a = rt();
          Me(n, e, t, a);
        }
        vv(e, t);
      }
    }
    function Zg(e) {
      var t = vC(e);
      return t === null ? null : t.stateNode;
    }
    var Jg = function(e) {
      return null;
    };
    function I0(e) {
      return Jg(e);
    }
    var Kg = function(e) {
      return !1;
    };
    function P0(e) {
      return Kg(e);
    }
    var Wg = null, Ig = null, Pg = null, eb = null, tb = null, nb = null, ab = null, rb = null, ib = null;
    {
      var ub = function(e, t, n) {
        var a = t[n], r = Pe(e) ? e.slice() : X({}, e);
        return n + 1 === t.length ? (Pe(r) ? r.splice(a, 1) : delete r[a], r) : (r[a] = ub(e[a], t, n + 1), r);
      }, lb = function(e, t) {
        return ub(e, t, 0);
      }, ob = function(e, t, n, a) {
        var r = t[a], i = Pe(e) ? e.slice() : X({}, e);
        if (a + 1 === t.length) {
          var u = n[a];
          i[u] = i[r], Pe(i) ? i.splice(r, 1) : delete i[r];
        } else
          i[r] = ob(
            // $FlowFixMe number or string is fine here
            e[r],
            t,
            n,
            a + 1
          );
        return i;
      }, sb = function(e, t, n) {
        if (t.length !== n.length) {
          oa("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var a = 0; a < n.length - 1; a++)
            if (t[a] !== n[a]) {
              oa("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ob(e, t, n, 0);
      }, cb = function(e, t, n, a) {
        if (n >= t.length)
          return a;
        var r = t[n], i = Pe(e) ? e.slice() : X({}, e);
        return i[r] = cb(e[r], t, n + 1, a), i;
      }, fb = function(e, t, n) {
        return cb(e, t, 0, n);
      }, pv = function(e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          n = n.next, t--;
        return n;
      };
      Wg = function(e, t, n, a) {
        var r = pv(e, t);
        if (r !== null) {
          var i = fb(r.memoizedState, n, a);
          r.memoizedState = i, r.baseState = i, e.memoizedProps = X({}, e.memoizedProps);
          var u = ct(e, H);
          u !== null && Me(u, e, H, oe);
        }
      }, Ig = function(e, t, n) {
        var a = pv(e, t);
        if (a !== null) {
          var r = lb(a.memoizedState, n);
          a.memoizedState = r, a.baseState = r, e.memoizedProps = X({}, e.memoizedProps);
          var i = ct(e, H);
          i !== null && Me(i, e, H, oe);
        }
      }, Pg = function(e, t, n, a) {
        var r = pv(e, t);
        if (r !== null) {
          var i = sb(r.memoizedState, n, a);
          r.memoizedState = i, r.baseState = i, e.memoizedProps = X({}, e.memoizedProps);
          var u = ct(e, H);
          u !== null && Me(u, e, H, oe);
        }
      }, eb = function(e, t, n) {
        e.pendingProps = fb(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ct(e, H);
        a !== null && Me(a, e, H, oe);
      }, tb = function(e, t) {
        e.pendingProps = lb(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var n = ct(e, H);
        n !== null && Me(n, e, H, oe);
      }, nb = function(e, t, n) {
        e.pendingProps = sb(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ct(e, H);
        a !== null && Me(a, e, H, oe);
      }, ab = function(e) {
        var t = ct(e, H);
        t !== null && Me(t, e, H, oe);
      }, rb = function(e) {
        Jg = e;
      }, ib = function(e) {
        Kg = e;
      };
    }
    function eO(e) {
      var t = Bp(e);
      return t === null ? null : t.stateNode;
    }
    function tO(e) {
      return null;
    }
    function nO() {
      return mt;
    }
    function aO(e) {
      var t = e.findFiberByHostInstance, n = Ae.ReactCurrentDispatcher;
      return CC({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Wg,
        overrideHookStateDeletePath: Ig,
        overrideHookStateRenamePath: Pg,
        overrideProps: eb,
        overridePropsDeletePath: tb,
        overridePropsRenamePath: nb,
        setErrorHandler: rb,
        setSuspenseHandler: ib,
        scheduleUpdate: ab,
        currentDispatcherRef: n,
        findHostInstanceByFiber: eO,
        findFiberByHostInstance: t || tO,
        // React Refresh
        findHostInstancesForRefresh: z0,
        scheduleRefresh: w0,
        scheduleRoot: A0,
        setRefreshHandler: L0,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: nO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: cv
      });
    }
    var db = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function hv(e) {
      this._internalRoot = e;
    }
    jo.prototype.render = hv.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? f("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Bo(arguments[1]) ? f("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && f("You passed a second argument to root.render(...) but it only accepts one argument.");
        var n = t.containerInfo;
        if (n.nodeType !== ye) {
          var a = Zg(t.current);
          a && a.parentNode !== n && f("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      wu(e, t, null, null);
    }, jo.prototype.unmount = hv.prototype.unmount = function() {
      typeof arguments[0] == "function" && f("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Tg() && f("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wn(function() {
          wu(null, e, null, null);
        }), dm(t);
      }
    };
    function rO(e, t) {
      if (!Bo(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      vb(e);
      var n = !1, a = !1, r = "", i = db;
      t != null && (t.hydrate ? oa("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Ia && f(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var u = Gg(e, Nl, null, n, a, r, i);
      Ml(u.current, e);
      var l = e.nodeType === ye ? e.parentNode : e;
      return ki(l), new hv(u);
    }
    function jo(e) {
      this._internalRoot = e;
    }
    function iO(e) {
      e && SE(e);
    }
    jo.prototype.unstable_scheduleHydration = iO;
    function uO(e, t, n) {
      if (!Bo(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      vb(e), t === void 0 && f("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var a = n ?? null, r = n != null && n.hydratedSources || null, i = !1, u = !1, l = "", o = db;
      n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError));
      var s = Qg(t, null, e, Nl, a, i, u, l, o);
      if (Ml(s.current, e), ki(e), r)
        for (var c = 0; c < r.length; c++) {
          var v = r[c];
          cD(s, v);
        }
      return new jo(s);
    }
    function Bo(e) {
      return !!(e && (e.nodeType === ot || e.nodeType === pn || e.nodeType === Cs || !Rb));
    }
    function Au(e) {
      return !!(e && (e.nodeType === ot || e.nodeType === pn || e.nodeType === Cs || e.nodeType === ye && e.nodeValue === " react-mount-point-unstable "));
    }
    function vb(e) {
      e.nodeType === ot && e.tagName && e.tagName.toUpperCase() === "BODY" && f("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Zi(e) && (e._reactRootContainer ? f("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : f("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var lO = Ae.ReactCurrentOwner, pb;
    pb = function(e) {
      if (e._reactRootContainer && e.nodeType !== ye) {
        var t = Zg(e._reactRootContainer.current);
        t && t.parentNode !== e && f("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var n = !!e._reactRootContainer, a = mv(e), r = !!(a && Qn(a));
      r && !n && f("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ot && e.tagName && e.tagName.toUpperCase() === "BODY" && f("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function mv(e) {
      return e ? e.nodeType === pn ? e.documentElement : e.firstChild : null;
    }
    function hb() {
    }
    function oO(e, t, n, a, r) {
      if (r) {
        if (typeof a == "function") {
          var i = a;
          a = function() {
            var d = Vo(u);
            i.call(d);
          };
        }
        var u = Qg(
          t,
          a,
          e,
          Zn,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          hb
        );
        e._reactRootContainer = u, Ml(u.current, e);
        var l = e.nodeType === ye ? e.parentNode : e;
        return ki(l), wn(), u;
      } else {
        for (var o; o = e.lastChild; )
          e.removeChild(o);
        if (typeof a == "function") {
          var s = a;
          a = function() {
            var d = Vo(c);
            s.call(d);
          };
        }
        var c = Gg(
          e,
          Zn,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          hb
        );
        e._reactRootContainer = c, Ml(c.current, e);
        var v = e.nodeType === ye ? e.parentNode : e;
        return ki(v), wn(function() {
          wu(t, c, n, a);
        }), c;
      }
    }
    function sO(e, t) {
      e !== null && typeof e != "function" && f("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Yo(e, t, n, a, r) {
      pb(n), sO(r === void 0 ? null : r, "render");
      var i = n._reactRootContainer, u;
      if (!i)
        u = oO(n, t, e, r, a);
      else {
        if (u = i, typeof r == "function") {
          var l = r;
          r = function() {
            var o = Vo(u);
            l.call(o);
          };
        }
        wu(t, u, e, r);
      }
      return Vo(u);
    }
    var mb = !1;
    function cO(e) {
      {
        mb || (mb = !0, f("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = lO.current;
        if (t !== null && t.stateNode !== null) {
          var n = t.stateNode._warnedAboutRefsInRender;
          n || f("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", re(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ot ? e : Z0(e, "findDOMNode");
    }
    function fO(e, t, n) {
      if (f("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Au(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Zi(t) && t._reactRootContainer === void 0;
        a && f("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Yo(null, e, t, !0, n);
    }
    function dO(e, t, n) {
      if (f("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Au(t))
        throw new Error("Target container is not a DOM element.");
      {
        var a = Zi(t) && t._reactRootContainer === void 0;
        a && f("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Yo(null, e, t, !1, n);
    }
    function vO(e, t, n, a) {
      if (f("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Au(n))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !uC(e))
        throw new Error("parentComponent must be a valid React Component");
      return Yo(e, t, n, !1, a);
    }
    var yb = !1;
    function pO(e) {
      if (yb || (yb = !0, f("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Au(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Zi(e) && e._reactRootContainer === void 0;
        t && f("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var n = mv(e), a = n && !Qn(n);
          a && f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wn(function() {
          Yo(null, null, e, !1, function() {
            e._reactRootContainer = null, dm(e);
          });
        }), !0;
      } else {
        {
          var r = mv(e), i = !!(r && Qn(r)), u = e.nodeType === ot && Au(e.parentNode) && !!e.parentNode._reactRootContainer;
          i && f("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", u ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    cE(J0), dE(K0), vE(W0), pE(Ft), hE(lE), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && f("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), JS(mT), IS(Xd, u0, wn);
    function hO(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Bo(t))
        throw new Error("Target container is not a DOM element.");
      return X0(e, t, null, n);
    }
    function mO(e, t, n, a) {
      return vO(e, t, n, a);
    }
    var yv = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Qn, Tr, Ol, Up, Lp, Xd]
    };
    function yO(e, t) {
      return yv.usingClientEntryPoint || f('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), rO(e, t);
    }
    function gO(e, t, n) {
      return yv.usingClientEntryPoint || f('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), uO(e, t, n);
    }
    function bO(e) {
      return Tg() && f("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wn(e);
    }
    var SO = aO({
      findFiberByHostInstance: Ua,
      bundleType: 1,
      version: cv,
      rendererPackageName: "react-dom"
    });
    if (!SO && _t && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var gb = window.location.protocol;
      /^(https?|file):$/.test(gb) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (gb === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yv, pt.createPortal = hO, pt.createRoot = yO, pt.findDOMNode = cO, pt.flushSync = bO, pt.hydrate = fO, pt.hydrateRoot = gO, pt.render = dO, pt.unmountComponentAtNode = pO, pt.unstable_batchedUpdates = Xd, pt.unstable_renderSubtreeIntoContainer = mO, pt.version = cv, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), pt);
}
export {
  AO as __require
};
