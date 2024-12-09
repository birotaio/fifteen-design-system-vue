"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../_lib/buildMatchFn.js"),e=require("../../_lib/buildMatchPatternFn.js"),i=/^(\d+)(º)?/i,r=/\d+/i,n={narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes da era com[uú]n|despois de cristo|era com[uú]n)/i},s={any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes da era com[uú]n)/i,/^(despois de cristo|era com[uú]n)/i]},d={narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](º)? trimestre/i},o={any:[/1/i,/2/i,/3/i,/4/i]},c={narrow:/^[xfmasond]/i,abbreviated:/^(xan|feb|mar|abr|mai|xun|xul|ago|set|out|nov|dec)/i,wide:/^(xaneiro|febreiro|marzo|abril|maio|xuño|xullo|agosto|setembro|outubro|novembro|decembro)/i},m={narrow:[/^x/i,/^f/i,/^m/i,/^a/i,/^m/i,/^x/i,/^x/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^xan/i,/^feb/i,/^mar/i,/^abr/i,/^mai/i,/^xun/i,/^xul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dec/i]},u={narrow:/^[dlmxvs]/i,short:/^(do|lu|ma|me|xo|ve|sa)/i,abbreviated:/^(dom|lun|mar|mer|xov|ven|sab)/i,wide:/^(domingo|luns|martes|m[eé]rcores|xoves|venres|s[áa]bado)/i},h={narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^x/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^me/i,/^xo/i,/^ve/i,/^sa/i]},l={narrow:/^(a|p|mn|md|(da|[aá]s) (mañ[aá]|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|medianoite|mediod[ií]a|(da|[aá]s) (mañ[aá]|tarde|noite))/i},b={any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/mañ[aá]/i,afternoon:/tarde/i,evening:/tardiña/i,night:/noite/i}},P={ordinalNumber:e.buildMatchPatternFn({matchPattern:i,parsePattern:r,valueCallback:t=>parseInt(t,10)}),era:a.buildMatchFn({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:a.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any",valueCallback:t=>t+1}),month:a.buildMatchFn({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:a.buildMatchFn({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:a.buildMatchFn({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})};exports.match=P;