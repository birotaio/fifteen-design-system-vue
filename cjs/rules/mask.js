"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const s=require("../vendor/maska/dist/maska.js");function o(e,n){if(typeof e!="string")return!1;const r=n.split("").map(t=>s.tokens[t]?.pattern.toString().replace(/\//g,"")??t).join("");return new RegExp(r).test(e)}exports.mask=o;
