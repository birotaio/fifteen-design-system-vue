"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r={lastWeek:t=>{const e=t.getDay();return"'"+(e===0||e===6?"último":"última")+"' eeee 'às' p"},yesterday:"'ontem às' p",today:"'hoje às' p",tomorrow:"'amanhã às' p",nextWeek:"eeee 'às' p",other:"P"},s=(t,e,a,n)=>{const o=r[t];return typeof o=="function"?o(e):o};exports.formatRelative=s;
