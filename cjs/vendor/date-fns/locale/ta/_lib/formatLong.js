"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),m={full:"EEEE, d MMMM, y",long:"d MMMM, y",medium:"d MMM, y",short:"d/M/yy"},o={full:"a h:mm:ss zzzz",long:"a h:mm:ss z",medium:"a h:mm:ss",short:"a h:mm"},e={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:o,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:e,defaultWidth:"full"})};exports.formatLong=a;