"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("../../_lib/buildLocalizeFn.js"),a={narrow:["ჩ.წ-მდე","ჩ.წ"],abbreviated:["ჩვ.წ-მდე","ჩვ.წ"],wide:["ჩვენს წელთაღრიცხვამდე","ჩვენი წელთაღრიცხვით"]},o={narrow:["1","2","3","4"],abbreviated:["1-ლი კვ","2-ე კვ","3-ე კვ","4-ე კვ"],wide:["1-ლი კვარტალი","2-ე კვარტალი","3-ე კვარტალი","4-ე კვარტალი"]},t={narrow:["ია","თე","მა","აპ","მს","ვნ","ვლ","აგ","სე","ოქ","ნო","დე"],abbreviated:["იან","თებ","მარ","აპრ","მაი","ივნ","ივლ","აგვ","სექ","ოქტ","ნოე","დეკ"],wide:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},r={narrow:["კვ","ორ","სა","ოთ","ხუ","პა","შა"],short:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],abbreviated:["კვი","ორშ","სამ","ოთხ","ხუთ","პარ","შაბ"],wide:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"]},d={narrow:{am:"a",pm:"p",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამე",noon:"შუადღე",morning:"დილა",afternoon:"საღამო",evening:"საღამო",night:"ღამე"}},l={narrow:{am:"a",pm:"p",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},abbreviated:{am:"AM",pm:"PM",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"},wide:{am:"a.m.",pm:"p.m.",midnight:"შუაღამით",noon:"შუადღისას",morning:"დილით",afternoon:"ნაშუადღევს",evening:"საღამოს",night:"ღამით"}},m=e=>{const i=Number(e);return i===1?i+"-ლი":i+"-ე"},u={ordinalNumber:m,era:n.buildLocalizeFn({values:a,defaultWidth:"wide"}),quarter:n.buildLocalizeFn({values:o,defaultWidth:"wide",argumentCallback:e=>e-1}),month:n.buildLocalizeFn({values:t,defaultWidth:"wide"}),day:n.buildLocalizeFn({values:r,defaultWidth:"wide"}),dayPeriod:n.buildLocalizeFn({values:d,defaultWidth:"wide",formattingValues:l,defaultFormattingWidth:"wide"})};exports.localize=u;