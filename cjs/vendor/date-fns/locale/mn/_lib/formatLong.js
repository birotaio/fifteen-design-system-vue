"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),m={full:"y 'оны' MMMM'ын' d, EEEE 'гараг'",long:"y 'оны' MMMM'ын' d",medium:"y 'оны' MMM'ын' d",short:"y.MM.dd"},o={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},e={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:o,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:e,defaultWidth:"full"})};exports.formatLong=d;
