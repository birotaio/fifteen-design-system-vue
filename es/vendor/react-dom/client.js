import { r as _ } from "./index.js";
var r, t = _;
if (process.env.NODE_ENV === "production")
  r = t.createRoot, t.hydrateRoot;
else {
  var o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  r = function(e, n) {
    o.usingClientEntryPoint = !0;
    try {
      return t.createRoot(e, n);
    } finally {
      o.usingClientEntryPoint = !1;
    }
  };
}
export {
  r as createRoot
};
