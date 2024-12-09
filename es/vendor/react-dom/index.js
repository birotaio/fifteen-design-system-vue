import { getDefaultExportFromCjs as _ } from "../../_virtual/_commonjsHelpers.js";
import { __module as r } from "../../_virtual/index3.js";
import { __require as t } from "./cjs/react-dom.production.min.js";
import { __require as c } from "./cjs/react-dom.development.js";
function e() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
    } catch (o) {
      console.error(o);
    }
  }
}
process.env.NODE_ENV === "production" ? (e(), r.exports = t()) : r.exports = c();
var i = r.exports;
const m = /* @__PURE__ */ _(i);
export {
  m as default,
  i as r
};
