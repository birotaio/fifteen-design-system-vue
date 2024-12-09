"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildMatchFn.js"),i=require("../../_lib/buildMatchPatternFn.js"),e=/^(\d+)(-?[врмт][аи]|-?т?(ен|на)|-?(ев|ева))?/i,r=/\d+/i,n={narrow:/^((пр)?н\.?\s?е\.?)/i,abbreviated:/^((пр)?н\.?\s?е\.?)/i,wide:/^(преди новата ера|новата ера|нова ера)/i},s={any:[/^п/i,/^н/i]},d={narrow:/^[1234]/i,abbreviated:/^[1234](-?[врт]?o?)? тримес.?/i,wide:/^[1234](-?[врт]?о?)? тримесечие/i},c={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)/i,abbreviated:/^(нед|пон|вто|сря|чет|пет|съб)/i,wide:/^(неделя|понеделник|вторник|сряда|четвъртък|петък|събота)/i},o={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н[ед]/i,/^п[он]/i,/^вт/i,/^ср/i,/^ч[ет]/i,/^п[ет]/i,/^с[ъб]/i]},P={abbreviated:/^(яну|фев|мар|апр|май|юни|юли|авг|сеп|окт|ное|дек)/i,wide:/^(януари|февруари|март|април|май|юни|юли|август|септември|октомври|ноември|декември)/i},u={any:[/^я/i,/^ф/i,/^мар/i,/^ап/i,/^май/i,/^юн/i,/^юл/i,/^ав/i,/^се/i,/^окт/i,/^но/i,/^де/i]},l={any:/^(преди о|след о|в по|на о|през|веч|сут|следо)/i},b={any:{am:/^преди о/i,pm:/^след о/i,midnight:/^в пол/i,noon:/^на об/i,morning:/^сут/i,afternoon:/^следо/i,evening:/^веч/i,night:/^през н/i}},m={ordinalNumber:i.buildMatchPatternFn({matchPattern:e,parsePattern:r,valueCallback:a=>parseInt(a,10)}),era:t.buildMatchFn({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:t.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:a=>a+1}),month:t.buildMatchFn({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),day:t.buildMatchFn({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),dayPeriod:t.buildMatchFn({matchPatterns:l,defaultMatchWidth:"any",parsePatterns:b,defaultParseWidth:"any"})};exports.match=m;