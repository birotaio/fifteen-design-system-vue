"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),m={full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd.MM.y"},o={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},e={full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},d={date:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:o,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:e,defaultWidth:"full"})};exports.formatLong=d;
