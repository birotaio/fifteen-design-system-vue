import { __exports as l } from "../../../_virtual/should-polyfill.js";
Object.defineProperty(l, "__esModule", { value: !0 });
l.shouldPolyfill = void 0;
function o() {
  return typeof Intl > "u" || !("DurationFormat" in Intl);
}
l.shouldPolyfill = o;
export {
  l as default
};
