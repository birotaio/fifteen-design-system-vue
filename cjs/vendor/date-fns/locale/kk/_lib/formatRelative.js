"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../../../isSameWeek.js"),a=["жексенбіде","дүйсенбіде","сейсенбіде","сәрсенбіде","бейсенбіде","жұмада","сенбіде"];function i(e){return"'өткен "+a[e]+" сағат' p'-де'"}function c(e){return"'"+a[e]+" сағат' p'-де'"}function u(e){return"'келесі "+a[e]+" сағат' p'-де'"}const y={lastWeek:(e,t,n)=>{const r=e.getDay();return s.isSameWeek(e,t,n)?c(r):i(r)},yesterday:"'кеше сағат' p'-де'",today:"'бүгін сағат' p'-де'",tomorrow:"'ертең сағат' p'-де'",nextWeek:(e,t,n)=>{const r=e.getDay();return s.isSameWeek(e,t,n)?c(r):u(r)},other:"P"},k=(e,t,n,r)=>{const o=y[e];return typeof o=="function"?o(t,n,r):o};exports.formatRelative=k;