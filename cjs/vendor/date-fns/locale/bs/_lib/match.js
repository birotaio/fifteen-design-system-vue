"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../_lib/buildMatchFn.js"),e=require("../../_lib/buildMatchPatternFn.js"),r=/^(\d+)\./i,i=/\d+/i,n={narrow:/^(pr\.n\.e\.|AD)/i,abbreviated:/^(pr\.\s?Hr\.|po\.\s?Hr\.)/i,wide:/^(Prije Hrista|prije nove ere|Poslije Hrista|nova era)/i},s={any:[/^pr/i,/^(po|nova)/i]},o={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?kv\.?/i,wide:/^[1234]\. kvartal/i},d={any:[/1/i,/2/i,/3/i,/4/i]},u={narrow:/^(10|11|12|[123456789])\./i,abbreviated:/^(jan|feb|mar|apr|maj|jun|jul|avg|sep|okt|nov|dec)/i,wide:/^((januar|januara)|(februar|februara)|(mart|marta)|(april|aprila)|(maj|maja)|(juni|juna)|(juli|jula)|(avgust|avgusta)|(septembar|septembra)|(oktobar|oktobra)|(novembar|novembra)|(decembar|decembra))/i},c={narrow:[/^1/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^7/i,/^8/i,/^9/i,/^10/i,/^11/i,/^12/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^avg/i,/^s/i,/^o/i,/^n/i,/^d/i]},p={narrow:/^[npusčc]/i,short:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,abbreviated:/^(ned|pon|uto|sre|(čet|cet)|pet|sub)/i,wide:/^(nedjelja|ponedjeljak|utorak|srijeda|(četvrtak|cetvrtak)|petak|subota)/i},h={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},l={any:/^(am|pm|ponoc|ponoć|(po)?podne|uvece|uveče|noću|poslije podne|ujutru)/i},m={any:{am:/^a/i,pm:/^p/i,midnight:/^pono/i,noon:/^pod/i,morning:/jutro/i,afternoon:/(poslije\s|po)+podne/i,evening:/(uvece|uveče)/i,night:/(nocu|noću)/i}},b={ordinalNumber:e.buildMatchPatternFn({matchPattern:r,parsePattern:i,valueCallback:t=>parseInt(t,10)}),era:a.buildMatchFn({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:a.buildMatchFn({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:t=>t+1}),month:a.buildMatchFn({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any"}),day:a.buildMatchFn({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:a.buildMatchFn({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:m,defaultParseWidth:"any"})};exports.match=b;