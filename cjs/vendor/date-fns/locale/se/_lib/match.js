"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../_lib/buildMatchFn.js"),i=require("../../_lib/buildMatchPatternFn.js"),e=/^(\d+)\.?/i,n=/\d+/i,r={narrow:/^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,abbreviated:/^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,wide:/^(ovdal Kristusa|ovdal min áiggi|maŋŋel Kristusa|min áigi)/i},s={any:[/^o/i,/^m/i]},o={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](\.)? kvartála/i},u={any:[/1/i,/2/i,/3/i,/4/i]},d={narrow:/^[ogncmsbčj]/i,abbreviated:/^(ođđa|guov|njuk|cuo|mies|geas|suoi|borg|čakč|golg|skáb|juov)\.?/i,wide:/^(ođđajagemánnu|guovvamánnu|njukčamánnu|cuoŋománnu|miessemánnu|geassemánnu|suoidnemánnu|borgemánnu|čakčamánnu|golggotmánnu|skábmamánnu|juovlamánnu)/i},m={narrow:[/^o/i,/^g/i,/^n/i,/^c/i,/^m/i,/^g/i,/^s/i,/^b/i,/^č/i,/^g/i,/^s/i,/^j/i],any:[/^o/i,/^gu/i,/^n/i,/^c/i,/^m/i,/^ge/i,/^su/i,/^b/i,/^č/i,/^go/i,/^sk/i,/^j/i]},c={narrow:/^[svmgdbl]/i,short:/^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,abbreviated:/^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,wide:/^(sotnabeaivi|vuossárga|maŋŋebárga|gaskavahkku|duorastat|bearjadat|lávvardat)/i},h={any:[/^s/i,/^v/i,/^m/i,/^g/i,/^d/i,/^b/i,/^l/i]},l={narrow:/^(gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku)|[ap])/i,any:/^([ap]\.?\s?m\.?|gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku))/i},g={any:{am:/^a(\.?\s?m\.?)?$/i,pm:/^p(\.?\s?m\.?)?$/i,midnight:/^gaskai/i,noon:/^gaskab/i,morning:/iđđes/i,afternoon:/maŋŋel gaskabeaivvi/i,evening:/eahkes/i,night:/ihkku/i}},b={ordinalNumber:i.buildMatchPatternFn({matchPattern:e,parsePattern:n,valueCallback:t=>parseInt(t,10)}),era:a.buildMatchFn({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:a.buildMatchFn({matchPatterns:o,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any",valueCallback:t=>t+1}),month:a.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),day:a.buildMatchFn({matchPatterns:c,defaultMatchWidth:"wide",parsePatterns:h,defaultParseWidth:"any"}),dayPeriod:a.buildMatchFn({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:g,defaultParseWidth:"any"})};exports.match=b;
