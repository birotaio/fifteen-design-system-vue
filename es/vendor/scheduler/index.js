import { __module as e } from "../../_virtual/index4.js";
import { __require as o } from "./cjs/scheduler.production.min.js";
import { __require as u } from "./cjs/scheduler.development.js";
var r;
function p() {
  return r ? e.exports : (r = 1, process.env.NODE_ENV === "production" ? e.exports = o() : e.exports = u(), e.exports);
}
export {
  p as __require
};
