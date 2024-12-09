import { buildLocalizeFn as r } from "../../_lib/buildLocalizeFn.js";
const i = {
  locale: {
    1: "১",
    2: "২",
    3: "৩",
    4: "৪",
    5: "৫",
    6: "৬",
    7: "৭",
    8: "৮",
    9: "৯",
    0: "০"
  },
  number: {
    "১": "1",
    "২": "2",
    "৩": "3",
    "৪": "4",
    "৫": "5",
    "৬": "6",
    "৭": "7",
    "৮": "8",
    "৯": "9",
    "০": "0"
  }
}, o = {
  narrow: ["খ্রিঃপূঃ", "খ্রিঃ"],
  abbreviated: ["খ্রিঃপূর্ব", "খ্রিঃ"],
  wide: ["খ্রিস্টপূর্ব", "খ্রিস্টাব্দ"]
}, d = {
  narrow: ["১", "২", "৩", "৪"],
  abbreviated: ["১ত্রৈ", "২ত্রৈ", "৩ত্রৈ", "৪ত্রৈ"],
  wide: ["১ম ত্রৈমাসিক", "২য় ত্রৈমাসিক", "৩য় ত্রৈমাসিক", "৪র্থ ত্রৈমাসিক"]
}, u = {
  narrow: [
    "জানু",
    "ফেব্রু",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্ট",
    "অক্টো",
    "নভে",
    "ডিসে"
  ],
  abbreviated: [
    "জানু",
    "ফেব্রু",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্ট",
    "অক্টো",
    "নভে",
    "ডিসে"
  ],
  wide: [
    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর"
  ]
}, s = {
  narrow: ["র", "সো", "ম", "বু", "বৃ", "শু", "শ"],
  short: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
  abbreviated: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহ", "শুক্র", "শনি"],
  wide: [
    "রবিবার",
    "সোমবার",
    "মঙ্গলবার",
    "বুধবার",
    "বৃহস্পতিবার ",
    "শুক্রবার",
    "শনিবার"
  ]
}, m = {
  narrow: {
    am: "পূ",
    pm: "অপ",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  },
  abbreviated: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  },
  wide: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  }
}, c = {
  narrow: {
    am: "পূ",
    pm: "অপ",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  },
  abbreviated: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  },
  wide: {
    am: "পূর্বাহ্ন",
    pm: "অপরাহ্ন",
    midnight: "মধ্যরাত",
    noon: "মধ্যাহ্ন",
    morning: "সকাল",
    afternoon: "বিকাল",
    evening: "সন্ধ্যা",
    night: "রাত"
  }
};
function g(n, e) {
  if (n > 18 && n <= 31)
    return e + "শে";
  switch (n) {
    case 1:
      return e + "লা";
    case 2:
    case 3:
      return e + "রা";
    case 4:
      return e + "ঠা";
    default:
      return e + "ই";
  }
}
const l = (n, e) => {
  const a = Number(n), t = f(a);
  if (e?.unit === "date")
    return g(a, t);
  if (a > 10 || a === 0) return t + "তম";
  switch (a % 10) {
    case 2:
    case 3:
      return t + "য়";
    case 4:
      return t + "র্থ";
    case 6:
      return t + "ষ্ঠ";
    default:
      return t + "ম";
  }
};
function f(n) {
  return n.toString().replace(/\d/g, function(e) {
    return i.locale[e];
  });
}
const b = {
  ordinalNumber: l,
  era: r({
    values: o,
    defaultWidth: "wide"
  }),
  quarter: r({
    values: d,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: r({
    values: u,
    defaultWidth: "wide"
  }),
  day: r({
    values: s,
    defaultWidth: "wide"
  }),
  dayPeriod: r({
    values: m,
    defaultWidth: "wide",
    formattingValues: c,
    defaultFormattingWidth: "wide"
  })
};
export {
  b as localize,
  f as numberToLocale
};
