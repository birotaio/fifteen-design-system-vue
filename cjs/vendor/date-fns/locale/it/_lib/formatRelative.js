"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../../../isSameWeek.js"),n=["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];function i(e){switch(e){case 0:return"'domenica scorsa alle' p";default:return"'"+n[e]+" scorso alle' p"}}function l(e){return"'"+n[e]+" alle' p"}function c(e){switch(e){case 0:return"'domenica prossima alle' p";default:return"'"+n[e]+" prossimo alle' p"}}const u={lastWeek:(e,r,o)=>{const t=e.getDay();return s.isSameWeek(e,r,o)?l(t):i(t)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:(e,r,o)=>{const t=e.getDay();return s.isSameWeek(e,r,o)?l(t):c(t)},other:"P"},m=(e,r,o,t)=>{const a=u[e];return typeof a=="function"?a(r,o,t):a};exports.formatRelative=m;