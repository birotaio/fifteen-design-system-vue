import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, do MMMM, y",
  long: "do, MMMM, y",
  medium: "d, MMM, y",
  short: "dd/MM/yyyy"
}, o = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, a = {
  full: "{{date}} {{time}}'-ზე'",
  long: "{{date}} {{time}}'-ზე'",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, e = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: a,
    defaultWidth: "full"
  })
};
export {
  e as formatLong
};