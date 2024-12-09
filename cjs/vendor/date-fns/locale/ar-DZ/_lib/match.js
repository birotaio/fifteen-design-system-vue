"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("../../_lib/buildMatchPatternFn.js"),t=require("../../_lib/buildMatchFn.js"),n=/^(\d+)(th|st|nd|rd)?/i,e=/\d+/i,r={narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},s={any:[/^قبل/i,/^بعد/i]},d={narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},o={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[جفمأسند]/i,abbreviated:/^(جان|فيف|مار|أفر|ماي|جوا|جوي|أوت|سبت|أكت|نوف|ديس)/i,wide:/^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/i},c={narrow:[/^ج/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ج/i,/^ج/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^جان/i,/^فيف/i,/^مار/i,/^أفر/i,/^ماي/i,/^جوا/i,/^جوي/i,/^أوت/i,/^سبت/i,/^أكت/i,/^نوف/i,/^ديس/i]},P={narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},u={narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},m={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},l={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},b={ordinalNumber:i.buildMatchPatternFn({matchPattern:n,parsePattern:e,valueCallback:a=>parseInt(a,10)}),era:t.buildMatchFn({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:t.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:a=>Number(a)+1}),month:t.buildMatchFn({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:t.buildMatchFn({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),dayPeriod:t.buildMatchFn({matchPatterns:m,defaultMatchWidth:"any",parsePatterns:l,defaultParseWidth:"any"})};exports.match=b;
