"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),e={full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},m={full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},d={full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},o={date:t.buildFormatLongFn({formats:e,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:d,defaultWidth:"full"})};exports.formatLong=o;