"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});var a=Object.entries(globalThis.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,s]=r;return s.excludeFromDocsStories&&(e[t]=!0),e},{}),o={docs:{renderer:async()=>{let{DocsRenderer:e}=await Promise.resolve().then(()=>require("./DocsRenderer-CFRXHY34.js"));return new e},stories:{filter:e=>(e.tags||[]).filter(r=>a[r]).length===0&&!e.parameters.docs?.disable}}};exports.parameters=o;
