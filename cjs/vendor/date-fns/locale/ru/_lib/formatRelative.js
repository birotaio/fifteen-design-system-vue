"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const c=require("../../../isSameWeek.js"),n=["воскресенье","понедельник","вторник","среду","четверг","пятницу","субботу"];function u(e){const t=n[e];switch(e){case 0:return"'в прошлое "+t+" в' p";case 1:case 2:case 4:return"'в прошлый "+t+" в' p";case 3:case 5:case 6:return"'в прошлую "+t+" в' p"}}function o(e){const t=n[e];return e===2?"'во "+t+" в' p":"'в "+t+" в' p"}function i(e){const t=n[e];switch(e){case 0:return"'в следующее "+t+" в' p";case 1:case 2:case 4:return"'в следующий "+t+" в' p";case 3:case 5:case 6:return"'в следующую "+t+" в' p"}}const f={lastWeek:(e,t,s)=>{const r=e.getDay();return c.isSameWeek(e,t,s)?o(r):u(r)},yesterday:"'вчера в' p",today:"'сегодня в' p",tomorrow:"'завтра в' p",nextWeek:(e,t,s)=>{const r=e.getDay();return c.isSameWeek(e,t,s)?o(r):i(r)},other:"P"},p=(e,t,s,r)=>{const a=f[e];return typeof a=="function"?a(t,s,r):a};exports.formatRelative=p;
