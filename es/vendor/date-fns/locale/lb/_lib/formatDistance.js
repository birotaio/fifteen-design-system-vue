const s = {
  lessThanXSeconds: {
    standalone: {
      one: "manner wéi eng Sekonn",
      other: "manner wéi {{count}} Sekonnen"
    },
    withPreposition: {
      one: "manner wéi enger Sekonn",
      other: "manner wéi {{count}} Sekonnen"
    }
  },
  xSeconds: {
    standalone: {
      one: "eng Sekonn",
      other: "{{count}} Sekonnen"
    },
    withPreposition: {
      one: "enger Sekonn",
      other: "{{count}} Sekonnen"
    }
  },
  halfAMinute: {
    standalone: "eng hallef Minutt",
    withPreposition: "enger hallwer Minutt"
  },
  lessThanXMinutes: {
    standalone: {
      one: "manner wéi eng Minutt",
      other: "manner wéi {{count}} Minutten"
    },
    withPreposition: {
      one: "manner wéi enger Minutt",
      other: "manner wéi {{count}} Minutten"
    }
  },
  xMinutes: {
    standalone: {
      one: "eng Minutt",
      other: "{{count}} Minutten"
    },
    withPreposition: {
      one: "enger Minutt",
      other: "{{count}} Minutten"
    }
  },
  aboutXHours: {
    standalone: {
      one: "ongeféier eng Stonn",
      other: "ongeféier {{count}} Stonnen"
    },
    withPreposition: {
      one: "ongeféier enger Stonn",
      other: "ongeféier {{count}} Stonnen"
    }
  },
  xHours: {
    standalone: {
      one: "eng Stonn",
      other: "{{count}} Stonnen"
    },
    withPreposition: {
      one: "enger Stonn",
      other: "{{count}} Stonnen"
    }
  },
  xDays: {
    standalone: {
      one: "een Dag",
      other: "{{count}} Deeg"
    },
    withPreposition: {
      one: "engem Dag",
      other: "{{count}} Deeg"
    }
  },
  aboutXWeeks: {
    standalone: {
      one: "ongeféier eng Woch",
      other: "ongeféier {{count}} Wochen"
    },
    withPreposition: {
      one: "ongeféier enger Woche",
      other: "ongeféier {{count}} Wochen"
    }
  },
  xWeeks: {
    standalone: {
      one: "eng Woch",
      other: "{{count}} Wochen"
    },
    withPreposition: {
      one: "enger Woch",
      other: "{{count}} Wochen"
    }
  },
  aboutXMonths: {
    standalone: {
      one: "ongeféier ee Mount",
      other: "ongeféier {{count}} Méint"
    },
    withPreposition: {
      one: "ongeféier engem Mount",
      other: "ongeféier {{count}} Méint"
    }
  },
  xMonths: {
    standalone: {
      one: "ee Mount",
      other: "{{count}} Méint"
    },
    withPreposition: {
      one: "engem Mount",
      other: "{{count}} Méint"
    }
  },
  aboutXYears: {
    standalone: {
      one: "ongeféier ee Joer",
      other: "ongeféier {{count}} Joer"
    },
    withPreposition: {
      one: "ongeféier engem Joer",
      other: "ongeféier {{count}} Joer"
    }
  },
  xYears: {
    standalone: {
      one: "ee Joer",
      other: "{{count}} Joer"
    },
    withPreposition: {
      one: "engem Joer",
      other: "{{count}} Joer"
    }
  },
  overXYears: {
    standalone: {
      one: "méi wéi ee Joer",
      other: "méi wéi {{count}} Joer"
    },
    withPreposition: {
      one: "méi wéi engem Joer",
      other: "méi wéi {{count}} Joer"
    }
  },
  almostXYears: {
    standalone: {
      one: "bal ee Joer",
      other: "bal {{count}} Joer"
    },
    withPreposition: {
      one: "bal engem Joer",
      other: "bal {{count}} Joer"
    }
  }
}, u = ["d", "h", "n", "t", "z"], h = ["a,", "e", "i", "o", "u"], c = [0, 1, 2, 3, 8, 9], g = [40, 50, 60, 70];
function a(t) {
  const o = t.charAt(0).toLowerCase();
  if (h.indexOf(o) != -1 || u.indexOf(o) != -1)
    return !0;
  const n = t.split(" ")[0], e = parseInt(n);
  return !isNaN(e) && c.indexOf(e % 10) != -1 && g.indexOf(
    parseInt(n.substring(0, 2))
  ) == -1;
}
const l = (t, o, n) => {
  let e;
  const i = s[t], r = n?.addSuffix ? i.withPreposition : i.standalone;
  return typeof r == "string" ? e = r : o === 1 ? e = r.one : e = r.other.replace("{{count}}", String(o)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "a" + (a(e) ? "n" : "") + " " + e : "viru" + (a(e) ? "n" : "") + " " + e : e;
};
export {
  l as formatDistance
};
