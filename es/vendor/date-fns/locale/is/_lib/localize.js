import { buildLocalizeFn as n } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["f.Kr.", "e.Kr."],
  abbreviated: ["f.Kr.", "e.Kr."],
  wide: ["fyrir Krist", "eftir Krist"]
}, r = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["1F", "2F", "3F", "4F"],
  wide: ["1. fjórðungur", "2. fjórðungur", "3. fjórðungur", "4. fjórðungur"]
}, t = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "Á", "S", "Ó", "N", "D"],
  abbreviated: [
    "jan.",
    "feb.",
    "mars",
    "apríl",
    "maí",
    "júní",
    "júlí",
    "ágúst",
    "sept.",
    "okt.",
    "nóv.",
    "des."
  ],
  wide: [
    "janúar",
    "febrúar",
    "mars",
    "apríl",
    "maí",
    "júní",
    "júlí",
    "ágúst",
    "september",
    "október",
    "nóvember",
    "desember"
  ]
}, a = {
  narrow: ["S", "M", "Þ", "M", "F", "F", "L"],
  short: ["Su", "Má", "Þr", "Mi", "Fi", "Fö", "La"],
  abbreviated: ["sun.", "mán.", "þri.", "mið.", "fim.", "fös.", "lau."],
  wide: [
    "sunnudagur",
    "mánudagur",
    "þriðjudagur",
    "miðvikudagur",
    "fimmtudagur",
    "föstudagur",
    "laugardagur"
  ]
}, d = {
  narrow: {
    am: "f",
    pm: "e",
    midnight: "miðnætti",
    noon: "hádegi",
    morning: "morgunn",
    afternoon: "síðdegi",
    evening: "kvöld",
    night: "nótt"
  },
  abbreviated: {
    am: "f.h.",
    pm: "e.h.",
    midnight: "miðnætti",
    noon: "hádegi",
    morning: "morgunn",
    afternoon: "síðdegi",
    evening: "kvöld",
    night: "nótt"
  },
  wide: {
    am: "fyrir hádegi",
    pm: "eftir hádegi",
    midnight: "miðnætti",
    noon: "hádegi",
    morning: "morgunn",
    afternoon: "síðdegi",
    evening: "kvöld",
    night: "nótt"
  }
}, o = {
  narrow: {
    am: "f",
    pm: "e",
    midnight: "á miðnætti",
    noon: "á hádegi",
    morning: "að morgni",
    afternoon: "síðdegis",
    evening: "um kvöld",
    night: "um nótt"
  },
  abbreviated: {
    am: "f.h.",
    pm: "e.h.",
    midnight: "á miðnætti",
    noon: "á hádegi",
    morning: "að morgni",
    afternoon: "síðdegis",
    evening: "um kvöld",
    night: "um nótt"
  },
  wide: {
    am: "fyrir hádegi",
    pm: "eftir hádegi",
    midnight: "á miðnætti",
    noon: "á hádegi",
    morning: "að morgni",
    afternoon: "síðdegis",
    evening: "um kvöld",
    night: "um nótt"
  }
}, m = (e, g) => Number(e) + ".", f = {
  ordinalNumber: m,
  era: n({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: n({
    values: r,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: n({
    values: t,
    defaultWidth: "wide"
  }),
  day: n({
    values: a,
    defaultWidth: "wide"
  }),
  dayPeriod: n({
    values: d,
    defaultWidth: "wide",
    formattingValues: o,
    defaultFormattingWidth: "wide"
  })
};
export {
  f as localize
};