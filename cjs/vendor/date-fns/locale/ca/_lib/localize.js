"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const i=require("../../_lib/buildLocalizeFn.js"),n={narrow:["aC","dC"],abbreviated:["a. de C.","d. de C."],wide:["abans de Crist","després de Crist"]},d={narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1r trimestre","2n trimestre","3r trimestre","4t trimestre"]},r={narrow:["GN","FB","MÇ","AB","MG","JN","JL","AG","ST","OC","NV","DS"],abbreviated:["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."],wide:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},m={narrow:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],short:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dt.","dm.","dj.","dv.","ds."],wide:["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"]},o={narrow:{am:"am",pm:"pm",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mitjanit",noon:"migdia",morning:"matí",afternoon:"tarda",evening:"vespre",night:"nit"}},l={narrow:{am:"am",pm:"pm",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},abbreviated:{am:"AM",pm:"PM",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"de la mitjanit",noon:"del migdia",morning:"del matí",afternoon:"de la tarda",evening:"del vespre",night:"de la nit"}},s=(a,g)=>{const e=Number(a),t=e%100;if(t>20||t<10)switch(t%10){case 1:return e+"r";case 2:return e+"n";case 3:return e+"r";case 4:return e+"t"}return e+"è"},u={ordinalNumber:s,era:i.buildLocalizeFn({values:n,defaultWidth:"wide"}),quarter:i.buildLocalizeFn({values:d,defaultWidth:"wide",argumentCallback:a=>a-1}),month:i.buildLocalizeFn({values:r,defaultWidth:"wide"}),day:i.buildLocalizeFn({values:m,defaultWidth:"wide"}),dayPeriod:i.buildLocalizeFn({values:o,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})};exports.localize=u;