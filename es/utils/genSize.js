import { unref as i } from "vue";
const c = [
  "em",
  "ex",
  "%",
  "px",
  "cm",
  "mm",
  "in",
  "pt",
  "pc",
  "ch",
  "rem",
  "vh",
  "vw",
  "vmin",
  "vmax",
  "rpx"
], l = new RegExp("^(-?[0-9.]+)([a-z%]+)?$", "i");
function m(o, s) {
  const e = i(o), n = i(s) ?? 1;
  if (!e && e !== 0)
    return "";
  if (typeof e == "number")
    return e * n / 16 + "rem";
  const a = l.exec(e), [p, t, r] = a || Array(3);
  return t && !isNaN(+t) ? !c.includes(r) || r === "px" ? parseFloat(t) * n / 16 + "rem" : parseFloat(t) * n + r : e;
}
m.__docgenInfo = { exportName: "genSize", displayName: "genSize", type: 2, props: [{ name: "toString", global: !1, description: `Returns a string representation of a string.
Returns a string representation of an object.`, tags: [{ name: "param", text: "radix Specifies a radix for converting numeric values to strings. This value is only used for numbers." }], required: !0, type: "(() => string) | (() => string) | ((radix?: number) => string)", declarations: [], schema: { kind: "enum", type: "(() => string) | (() => string) | ((radix?: number) => string)", schema: [{ kind: "event", type: "(): string" }, { kind: "event", type: "(): string" }, { kind: "event", type: "(radix?: number): string" }] } }, { name: "valueOf", global: !1, description: "Returns the primitive value of the specified object.", tags: [], required: !0, type: "(() => string) | (() => number) | (() => Object)", declarations: [], schema: { kind: "enum", type: "(() => string) | (() => number) | (() => Object)", schema: [{ kind: "event", type: "(): string" }, { kind: "event", type: "(): number" }, { kind: "event", type: "(): Object" }] } }, { name: "toLocaleString", global: !1, description: `Returns a date converted to a string using the current locale.
Converts a number to a string by using the current or specified locale.`, tags: [{ name: "param", text: "locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options." }, { name: "param", text: "locales A locale string, array of locale strings, Intl.Locale object, or array of Intl.Locale objects that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used." }, { name: "param", text: "options An object that contains one or more properties that specify comparison options." }], required: !0, type: "(() => string) | { (locales?: string | string[], options?: NumberFormatOptions): string; (locales?: LocalesArgument, options?: NumberFormatOptions): string; }", declarations: [], schema: { kind: "enum", type: "(() => string) | { (locales?: string | string[], options?: NumberFormatOptions): string; (locales?: LocalesArgument, options?: NumberFormatOptions): string; }", schema: [{ kind: "event", type: "(): string" }, "{ (locales?: string | string[], options?: NumberFormatOptions): string; (locales?: LocalesArgument, options?: NumberFormatOptions): string; }"] } }], events: [], slots: [], exposed: [], sourceFiles: "/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/utils/genSize.ts" };
export {
  c as cssUnits,
  m as genSize
};
