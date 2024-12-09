"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const a=require("../../_lib/buildLocalizeFn.js"),d={narrow:["пр.н.е.","н.е."],abbreviated:["преди н. е.","н. е."],wide:["преди новата ера","новата ера"]},l={narrow:["1","2","3","4"],abbreviated:["1-во тримес.","2-ро тримес.","3-то тримес.","4-то тримес."],wide:["1-во тримесечие","2-ро тримесечие","3-то тримесечие","4-то тримесечие"]},s={abbreviated:["яну","фев","мар","апр","май","юни","юли","авг","сеп","окт","ное","дек"],wide:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},c={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вто","сря","чет","пет","съб"],wide:["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"]},b={wide:{am:"преди обяд",pm:"след обяд",midnight:"в полунощ",noon:"на обяд",morning:"сутринта",afternoon:"следобед",evening:"вечерта",night:"през нощта"}};function f(e){return e==="year"||e==="week"||e==="minute"||e==="second"}function m(e){return e==="quarter"}function n(e,u,i,r,t){const o=m(u)?t:f(u)?r:i;return e+"-"+o}const w=(e,u)=>{const i=Number(e),r=u?.unit;if(i===0)return n(0,r,"ев","ева","ево");if(i%1e3===0)return n(i,r,"ен","на","но");if(i%100===0)return n(i,r,"тен","тна","тно");const t=i%100;if(t>20||t<10)switch(t%10){case 1:return n(i,r,"ви","ва","во");case 2:return n(i,r,"ри","ра","ро");case 7:case 8:return n(i,r,"ми","ма","мо")}return n(i,r,"ти","та","то")},h={ordinalNumber:w,era:a.buildLocalizeFn({values:d,defaultWidth:"wide"}),quarter:a.buildLocalizeFn({values:l,defaultWidth:"wide",argumentCallback:e=>e-1}),month:a.buildLocalizeFn({values:s,defaultWidth:"wide"}),day:a.buildLocalizeFn({values:c,defaultWidth:"wide"}),dayPeriod:a.buildLocalizeFn({values:b,defaultWidth:"wide"})};exports.localize=h;
