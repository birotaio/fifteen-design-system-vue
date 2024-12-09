"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../_lib/buildMatchFn.js"),i=require("../../_lib/buildMatchPatternFn.js"),e=/^(\d+)(\.)/i,n=/\d+/i,r={narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},l={any:[/^e/i,/^j/i]},s={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},u={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},o={narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},d={narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},k={narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},m={narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},c={any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},p={ordinalNumber:i.buildMatchPatternFn({matchPattern:e,parsePattern:n,valueCallback:t=>parseInt(t,10)}),era:a.buildMatchFn({matchPatterns:r,defaultMatchWidth:"wide",parsePatterns:l,defaultParseWidth:"any"}),quarter:a.buildMatchFn({matchPatterns:s,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any",valueCallback:t=>t+1}),month:a.buildMatchFn({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),day:a.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:k,defaultParseWidth:"any"}),dayPeriod:a.buildMatchFn({matchPatterns:m,defaultMatchWidth:"any",parsePatterns:c,defaultParseWidth:"any"})};exports.match=p;