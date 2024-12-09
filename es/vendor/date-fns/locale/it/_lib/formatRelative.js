import { isSameWeek as l } from "../../../isSameWeek.js";
const n = [
  "domenica",
  "lunedì",
  "martedì",
  "mercoledì",
  "giovedì",
  "venerdì",
  "sabato"
];
function i(e) {
  switch (e) {
    case 0:
      return "'domenica scorsa alle' p";
    default:
      return "'" + n[e] + " scorso alle' p";
  }
}
function s(e) {
  return "'" + n[e] + " alle' p";
}
function c(e) {
  switch (e) {
    case 0:
      return "'domenica prossima alle' p";
    default:
      return "'" + n[e] + " prossimo alle' p";
  }
}
const u = {
  lastWeek: (e, r, o) => {
    const t = e.getDay();
    return l(e, r, o) ? s(t) : i(t);
  },
  yesterday: "'ieri alle' p",
  today: "'oggi alle' p",
  tomorrow: "'domani alle' p",
  nextWeek: (e, r, o) => {
    const t = e.getDay();
    return l(e, r, o) ? s(t) : c(t);
  },
  other: "P"
}, f = (e, r, o, t) => {
  const a = u[e];
  return typeof a == "function" ? a(r, o, t) : a;
};
export {
  f as formatRelative
};
