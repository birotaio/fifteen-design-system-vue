import { isSameWeek as a } from "../../../isSameWeek.js";
const s = [
  "nedeľu",
  "pondelok",
  "utorok",
  "stredu",
  "štvrtok",
  "piatok",
  "sobotu"
];
function c(e) {
  const t = s[e];
  switch (e) {
    case 0:
    case 3:
    case 6:
      return "'minulú " + t + " o' p";
    default:
      return "'minulý' eeee 'o' p";
  }
}
function u(e) {
  const t = s[e];
  return e === 4 ? "'vo' eeee 'o' p" : "'v " + t + " o' p";
}
function i(e) {
  const t = s[e];
  switch (e) {
    case 0:
    case 4:
    case 6:
      return "'budúcu " + t + " o' p";
    default:
      return "'budúci' eeee 'o' p";
  }
}
const f = {
  lastWeek: (e, t, r) => {
    const o = e.getDay();
    return a(e, t, r) ? u(o) : c(o);
  },
  yesterday: "'včera o' p",
  today: "'dnes o' p",
  tomorrow: "'zajtra o' p",
  nextWeek: (e, t, r) => {
    const o = e.getDay();
    return a(e, t, r) ? u(o) : i(o);
  },
  other: "P"
}, p = (e, t, r, o) => {
  const n = f[e];
  return typeof n == "function" ? n(t, r, o) : n;
};
export {
  p as formatRelative
};
