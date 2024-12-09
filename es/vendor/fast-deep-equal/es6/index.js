import { getDefaultExportFromCjs as s } from "../../../_virtual/_commonjsHelpers.js";
var i = function o(r, e) {
  if (r === e) return !0;
  if (r && e && typeof r == "object" && typeof e == "object") {
    if (r.constructor !== e.constructor) return !1;
    var f, t, u;
    if (Array.isArray(r)) {
      if (f = r.length, f != e.length) return !1;
      for (t = f; t-- !== 0; )
        if (!o(r[t], e[t])) return !1;
      return !0;
    }
    if (r instanceof Map && e instanceof Map) {
      if (r.size !== e.size) return !1;
      for (t of r.entries())
        if (!e.has(t[0])) return !1;
      for (t of r.entries())
        if (!o(t[1], e.get(t[0]))) return !1;
      return !0;
    }
    if (r instanceof Set && e instanceof Set) {
      if (r.size !== e.size) return !1;
      for (t of r.entries())
        if (!e.has(t[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(r) && ArrayBuffer.isView(e)) {
      if (f = r.length, f != e.length) return !1;
      for (t = f; t-- !== 0; )
        if (r[t] !== e[t]) return !1;
      return !0;
    }
    if (r.constructor === RegExp) return r.source === e.source && r.flags === e.flags;
    if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === e.valueOf();
    if (r.toString !== Object.prototype.toString) return r.toString() === e.toString();
    if (u = Object.keys(r), f = u.length, f !== Object.keys(e).length) return !1;
    for (t = f; t-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(e, u[t])) return !1;
    for (t = f; t-- !== 0; ) {
      var n = u[t];
      if (!o(r[n], e[n])) return !1;
    }
    return !0;
  }
  return r !== r && e !== e;
};
const l = /* @__PURE__ */ s(i);
export {
  l as default
};
