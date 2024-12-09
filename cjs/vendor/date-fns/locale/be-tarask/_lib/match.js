"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildMatchFn.js"),i=require("../../_lib/buildMatchPatternFn.js"),e=/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,r=/\d+/i,n={narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},s={any:[/^д/i,/^н/i]},d={narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},c={any:[/1/i,/2/i,/3/i,/4/i]},h={narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|тр(ав)?|чэрв|ліп|жн|вер|кастр|ліст|сьнеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|тра(вень|ўня)|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|сьнеж(ань|ня))/i},o={narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^тр/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},P={narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцьв|чаць|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацьв(ер|ярга)|пятніц[аы]|субот[аы])/i},u={narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},l={narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},b={any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},m={ordinalNumber:i.buildMatchPatternFn({matchPattern:e,parsePattern:r,valueCallback:a=>parseInt(a,10)}),era:t.buildMatchFn({matchPatterns:n,defaultMatchWidth:"wide",parsePatterns:s,defaultParseWidth:"any"}),quarter:t.buildMatchFn({matchPatterns:d,defaultMatchWidth:"wide",parsePatterns:c,defaultParseWidth:"any",valueCallback:a=>a+1}),month:t.buildMatchFn({matchPatterns:h,defaultMatchWidth:"wide",parsePatterns:o,defaultParseWidth:"any"}),day:t.buildMatchFn({matchPatterns:P,defaultMatchWidth:"wide",parsePatterns:u,defaultParseWidth:"any"}),dayPeriod:t.buildMatchFn({matchPatterns:l,defaultMatchWidth:"wide",parsePatterns:b,defaultParseWidth:"any"})};exports.match=m;