const r = {
  lessThanXSeconds: {
    one: "minna en 1 sekúnda",
    other: "minna en {{count}} sekúndur"
  },
  xSeconds: {
    one: "1 sekúnda",
    other: "{{count}} sekúndur"
  },
  halfAMinute: "hálf mínúta",
  lessThanXMinutes: {
    one: "minna en 1 mínúta",
    other: "minna en {{count}} mínútur"
  },
  xMinutes: {
    one: "1 mínúta",
    other: "{{count}} mínútur"
  },
  aboutXHours: {
    one: "u.þ.b. 1 klukkustund",
    other: "u.þ.b. {{count}} klukkustundir"
  },
  xHours: {
    one: "1 klukkustund",
    other: "{{count}} klukkustundir"
  },
  xDays: {
    one: "1 dagur",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "um viku",
    other: "um {{count}} vikur"
  },
  xWeeks: {
    one: "1 viku",
    other: "{{count}} vikur"
  },
  aboutXMonths: {
    one: "u.þ.b. 1 mánuður",
    other: "u.þ.b. {{count}} mánuðir"
  },
  xMonths: {
    one: "1 mánuður",
    other: "{{count}} mánuðir"
  },
  aboutXYears: {
    one: "u.þ.b. 1 ár",
    other: "u.þ.b. {{count}} ár"
  },
  xYears: {
    one: "1 ár",
    other: "{{count}} ár"
  },
  overXYears: {
    one: "meira en 1 ár",
    other: "meira en {{count}} ár"
  },
  almostXYears: {
    one: "næstum 1 ár",
    other: "næstum {{count}} ár"
  }
}, s = (u, t, o) => {
  let n;
  const e = r[u];
  return typeof e == "string" ? n = e : t === 1 ? n = e.one : n = e.other.replace("{{count}}", t.toString()), o?.addSuffix ? o.comparison && o.comparison > 0 ? "í " + n : n + " síðan" : n;
};
export {
  s as formatDistance
};
