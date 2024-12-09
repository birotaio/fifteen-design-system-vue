"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("../../_lib/buildMatchPatternFn.js"),t=require("../../_lib/buildMatchFn.js"),e=/^(\d+)(th|st|nd|rd)?/i,r=/\d+/i,n={narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},s={any:[/قبل/,/بعد/]},d={narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},c={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[جفمأسند]/,abbreviated:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},o={narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جانفي/i,/^فيفري/i,/^مارس/i,/^أفريل/i,/^ماي/i,/^جوان/i,/^جويلية/i,/^أوت/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},P={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},u={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},l={narrow:/^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,any:/^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/},b={any:{am:/^ص/,pm:/^ع/,midnight:/نص الليل/,noon:/قايلة/,afternoon:/بعد القايلة/,morning:/صباح/,evening:/عشية/,night:/ليل/}},m={ordinalNumber:i.buildMatchPatternFn({matchPattern:e,parsePattern:r,valueCallback:a=>parseInt(a,10)}),era:t.buildMatchFn({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:t.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:a=>a+1}),month:t.buildMatchFn({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),day:t.buildMatchFn({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),dayPeriod:t.buildMatchFn({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})};exports.match=m;
