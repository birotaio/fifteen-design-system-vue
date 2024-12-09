import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, do MMMM y 'ж.'",
  long: "do MMMM y 'ж.'",
  medium: "d MMM y 'ж.'",
  short: "dd.MM.yyyy"
}, o = {
  full: "H:mm:ss zzzz",
  long: "H:mm:ss z",
  medium: "H:mm:ss",
  short: "H:mm"
}, d = {
  any: "{{date}}, {{time}}"
}, s = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: d,
    defaultWidth: "any"
  })
};
export {
  s as formatLong
};
