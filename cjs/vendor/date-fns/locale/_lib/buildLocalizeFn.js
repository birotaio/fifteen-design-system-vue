"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function c(t){return(d,e)=>{const u=e?.context?String(e.context):"standalone";let l;if(u==="formatting"&&t.formattingValues){const i=t.defaultFormattingWidth||t.defaultWidth,n=e?.width?String(e.width):i;l=t.formattingValues[n]||t.formattingValues[i]}else{const i=t.defaultWidth,n=e?.width?String(e.width):t.defaultWidth;l=t.values[n]||t.values[i]}const a=t.argumentCallback?t.argumentCallback(d):d;return l[a]}}exports.buildLocalizeFn=c;
