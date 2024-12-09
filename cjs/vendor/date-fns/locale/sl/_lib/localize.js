"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const e=require("../../_lib/buildLocalizeFn.js"),o={narrow:["pr. n. št.","po n. št."],abbreviated:["pr. n. št.","po n. št."],wide:["pred našim štetjem","po našem štetju"]},t={narrow:["1","2","3","4"],abbreviated:["1. čet.","2. čet.","3. čet.","4. čet."],wide:["1. četrtletje","2. četrtletje","3. četrtletje","4. četrtletje"]},a={narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","avg.","sep.","okt.","nov.","dec."],wide:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},i={narrow:["n","p","t","s","č","p","s"],short:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],abbreviated:["ned.","pon.","tor.","sre.","čet.","pet.","sob."],wide:["nedelja","ponedeljek","torek","sreda","četrtek","petek","sobota"]},r={narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"j",afternoon:"p",evening:"v",night:"n"},abbreviated:{am:"dop.",pm:"pop.",midnight:"poln.",noon:"pold.",morning:"jut.",afternoon:"pop.",evening:"več.",night:"noč"},wide:{am:"dop.",pm:"pop.",midnight:"polnoč",noon:"poldne",morning:"jutro",afternoon:"popoldne",evening:"večer",night:"noč"}},d={narrow:{am:"d",pm:"p",midnight:"24.00",noon:"12.00",morning:"zj",afternoon:"p",evening:"zv",night:"po"},abbreviated:{am:"dop.",pm:"pop.",midnight:"opoln.",noon:"opold.",morning:"zjut.",afternoon:"pop.",evening:"zveč.",night:"ponoči"},wide:{am:"dop.",pm:"pop.",midnight:"opolnoči",noon:"opoldne",morning:"zjutraj",afternoon:"popoldan",evening:"zvečer",night:"ponoči"}},p=(n,u)=>Number(n)+".",l={ordinalNumber:p,era:e.buildLocalizeFn({values:o,defaultWidth:"wide"}),quarter:e.buildLocalizeFn({values:t,defaultWidth:"wide",argumentCallback:n=>n-1}),month:e.buildLocalizeFn({values:a,defaultWidth:"wide"}),day:e.buildLocalizeFn({values:i,defaultWidth:"wide"}),dayPeriod:e.buildLocalizeFn({values:r,defaultWidth:"wide",formattingValues:d,defaultFormattingWidth:"wide"})};exports.localize=l;
