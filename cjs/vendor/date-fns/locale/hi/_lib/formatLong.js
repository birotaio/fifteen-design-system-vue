"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),m={full:"EEEE, do MMMM, y",long:"do MMMM, y",medium:"d MMM, y",short:"dd/MM/yyyy"},o={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},e={full:"{{date}} 'को' {{time}}",long:"{{date}} 'को' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},a={date:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:o,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:e,defaultWidth:"full"})};exports.formatLong=a;
