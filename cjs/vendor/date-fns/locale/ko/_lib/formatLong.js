"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("../../_lib/buildFormatLongFn.js"),m={full:"y년 M월 d일 EEEE",long:"y년 M월 d일",medium:"y.MM.dd",short:"y.MM.dd"},o={full:"a H시 mm분 ss초 zzzz",long:"a H:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},e={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},d={date:t.buildFormatLongFn({formats:m,defaultWidth:"full"}),time:t.buildFormatLongFn({formats:o,defaultWidth:"full"}),dateTime:t.buildFormatLongFn({formats:e,defaultWidth:"full"})};exports.formatLong=d;