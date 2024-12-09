const a = {
  lessThanXSeconds: {
    one: "minder as 'n sekonde",
    other: "minder as {{count}} sekondes"
  },
  xSeconds: {
    one: "1 sekonde",
    other: "{{count}} sekondes"
  },
  halfAMinute: "'n halwe minuut",
  lessThanXMinutes: {
    one: "minder as 'n minuut",
    other: "minder as {{count}} minute"
  },
  xMinutes: {
    one: "'n minuut",
    other: "{{count}} minute"
  },
  aboutXHours: {
    one: "ongeveer 1 uur",
    other: "ongeveer {{count}} ure"
  },
  xHours: {
    one: "1 uur",
    other: "{{count}} ure"
  },
  xDays: {
    one: "1 dag",
    other: "{{count}} dae"
  },
  aboutXWeeks: {
    one: "ongeveer 1 week",
    other: "ongeveer {{count}} weke"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weke"
  },
  aboutXMonths: {
    one: "ongeveer 1 maand",
    other: "ongeveer {{count}} maande"
  },
  xMonths: {
    one: "1 maand",
    other: "{{count}} maande"
  },
  aboutXYears: {
    one: "ongeveer 1 jaar",
    other: "ongeveer {{count}} jaar"
  },
  xYears: {
    one: "1 jaar",
    other: "{{count}} jaar"
  },
  overXYears: {
    one: "meer as 1 jaar",
    other: "meer as {{count}} jaar"
  },
  almostXYears: {
    one: "byna 1 jaar",
    other: "byna {{count}} jaar"
  }
}, u = (t, r, o) => {
  let e;
  const n = a[t];
  return typeof n == "string" ? e = n : r === 1 ? e = n.one : e = n.other.replace("{{count}}", String(r)), o?.addSuffix ? o.comparison && o.comparison > 0 ? "oor " + e : e + " gelede" : e;
};
export {
  u as formatDistance
};
