import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(வது)?/i, e = /\d+/i, n = {
  narrow: /^(கி.மு.|கி.பி.)/i,
  abbreviated: /^(கி\.?\s?மு\.?|கி\.?\s?பி\.?)/,
  wide: /^(கிறிஸ்துவுக்கு\sமுன்|அன்னோ\sடோமினி)/i
}, s = {
  any: [/கி\.?\s?மு\.?/, /கி\.?\s?பி\.?/]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^காலா.[1234]/i,
  wide: /^(ஒன்றாம்|இரண்டாம்|மூன்றாம்|நான்காம்) காலாண்டு/i
}, o = {
  narrow: [/1/i, /2/i, /3/i, /4/i],
  any: [
    /(1|காலா.1|ஒன்றாம்)/i,
    /(2|காலா.2|இரண்டாம்)/i,
    /(3|காலா.3|மூன்றாம்)/i,
    /(4|காலா.4|நான்காம்)/i
  ]
}, h = {
  narrow: /^(ஜ|பி|மா|ஏ|மே|ஜூ|ஆ|செ|அ|ந|டி)$/i,
  abbreviated: /^(ஜன.|பிப்.|மார்.|ஏப்.|மே|ஜூன்|ஜூலை|ஆக.|செப்.|அக்.|நவ.|டிச.)/i,
  wide: /^(ஜனவரி|பிப்ரவரி|மார்ச்|ஏப்ரல்|மே|ஜூன்|ஜூலை|ஆகஸ்ட்|செப்டம்பர்|அக்டோபர்|நவம்பர்|டிசம்பர்)/i
}, c = {
  narrow: [
    /^ஜ$/i,
    /^பி/i,
    /^மா/i,
    /^ஏ/i,
    /^மே/i,
    /^ஜூ/i,
    /^ஜூ/i,
    /^ஆ/i,
    /^செ/i,
    /^அ/i,
    /^ந/i,
    /^டி/i
  ],
  any: [
    /^ஜன/i,
    /^பி/i,
    /^மா/i,
    /^ஏ/i,
    /^மே/i,
    /^ஜூன்/i,
    /^ஜூலை/i,
    /^ஆ/i,
    /^செ/i,
    /^அ/i,
    /^ந/i,
    /^டி/i
  ]
}, P = {
  narrow: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  short: /^(ஞா|தி|செ|பு|வி|வெ|ச)/i,
  abbreviated: /^(ஞாயி.|திங்.|செவ்.|புத.|வியா.|வெள்.|சனி)/i,
  wide: /^(ஞாயிறு|திங்கள்|செவ்வாய்|புதன்|வியாழன்|வெள்ளி|சனி)/i
}, m = {
  narrow: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i],
  any: [/^ஞா/i, /^தி/i, /^செ/i, /^பு/i, /^வி/i, /^வெ/i, /^ச/i]
}, l = {
  narrow: /^(மு.ப|பி.ப|நள்|நண்|காலை|மதியம்|மாலை|இரவு)/i,
  any: /^(மு.ப|பி.ப|முற்பகல்|பிற்பகல்|நள்ளிரவு|நண்பகல்|காலை|மதியம்|மாலை|இரவு)/i
}, u = {
  any: {
    am: /^மு/i,
    pm: /^பி/i,
    midnight: /^நள்/i,
    noon: /^நண்/i,
    morning: /காலை/i,
    afternoon: /மதியம்/i,
    evening: /மாலை/i,
    night: /இரவு/i
  }
}, w = {
  ordinalNumber: i({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};