"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildMatchFn.js"),e=require("../../_lib/buildMatchPatternFn.js"),i=/^(\d+)\./i,n=/\d+/i,r={abbreviated:/^(pr\. n\. št\.|po n\. št\.)/i,wide:/^(pred Kristusom|pred na[sš]im [sš]tetjem|po Kristusu|po na[sš]em [sš]tetju|na[sš]ega [sš]tetja)/i},o={any:[/^pr/i,/^(po|na[sš]em)/i]},s={narrow:/^[1234]/i,abbreviated:/^[1234]\.\s?[čc]et\.?/i,wide:/^[1234]\. [čc]etrtletje/i},d={any:[/1/i,/2/i,/3/i,/4/i]},p={narrow:/^[jfmasond]/i,abbreviated:/^(jan\.|feb\.|mar\.|apr\.|maj|jun\.|jul\.|avg\.|sep\.|okt\.|nov\.|dec\.)/i,wide:/^(januar|februar|marec|april|maj|junij|julij|avgust|september|oktober|november|december)/i},c={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],abbreviated:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i],wide:[/^ja/i,/^fe/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^av/i,/^s/i,/^o/i,/^n/i,/^d/i]},u={narrow:/^[nptsčc]/i,short:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,abbreviated:/^(ned\.|pon\.|tor\.|sre\.|[cč]et\.|pet\.|sob\.)/i,wide:/^(nedelja|ponedeljek|torek|sreda|[cč]etrtek|petek|sobota)/i},m={narrow:[/^n/i,/^p/i,/^t/i,/^s/i,/^[cč]/i,/^p/i,/^s/i],any:[/^n/i,/^po/i,/^t/i,/^sr/i,/^[cč]/i,/^pe/i,/^so/i]},h={narrow:/^(d|po?|z?v|n|z?j|24\.00|12\.00)/i,any:/^(dop\.|pop\.|o?poln(\.|o[cč]i?)|o?pold(\.|ne)|z?ve[cč](\.|er)|(po)?no[cč]i?|popold(ne|an)|jut(\.|ro)|zjut(\.|raj))/i},l={narrow:{am:/^d/i,pm:/^p/i,midnight:/^24/i,noon:/^12/i,morning:/^(z?j)/i,afternoon:/^p/i,evening:/^(z?v)/i,night:/^(n|po)/i},any:{am:/^dop\./i,pm:/^pop\./i,midnight:/^o?poln/i,noon:/^o?pold/i,morning:/j/i,afternoon:/^pop\./i,evening:/^z?ve/i,night:/(po)?no/i}},j={ordinalNumber:e.buildMatchPatternFn({matchPattern:i,parsePattern:n,valueCallback:a=>parseInt(a,10)}),era:t.buildMatchFn({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),quarter:t.buildMatchFn({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:d,defaultParseWidth:"any",valueCallback:a=>a+1}),month:t.buildMatchFn({matchPatterns:p,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"wide"}),day:t.buildMatchFn({matchPatterns:u,defaultMatchWidth:"wide",parsePatterns:m,defaultParseWidth:"any"}),dayPeriod:t.buildMatchFn({matchPatterns:h,defaultMatchWidth:"any",parsePatterns:l,defaultParseWidth:"any"})};exports.match=j;
