"use strict";const e=require("vue"),u=require("xss");require("../vendor/countup.js/dist/countUp.min.js");require("@vueuse/core");require("../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js");require("../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js");const c=require("../vendor/@fifteen/shared-lib/dist/es/utils/text.js"),m=["innerHTML"],h=e.defineComponent({__name:"FTextContent",props:{source:{},allowedTags:{default:()=>["a","abbr","address","article","aside","audio","b","bdi","bdo","blockquote","br","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dialog","dfn","div","dl","dt","em","figcaption","figure","fieldset","footer","h2","h3","h4","h5","h6","header","hgroup","hr","i","img","ins","kbd","li","legend","main","mark","menu","meter","nav","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","search","section","small","source","span","strong","sub","summary","sup","table","tbody","td","tfoot","th","thead","time","tr","u","ul","var","wbr"]},dense:{type:Boolean,default:!1}},setup(n){const s=n,o={whiteList:{...(s.allowedTags??[]).reduce((t,r)=>(t[r]=[],t),{}),a:["href","target","rel"],abbr:["title"],bdo:["dir"],data:["value"],h2:["id"],meter:["value","min","max"],ol:["style"],time:["datetime"],ul:["style"]},onIgnoreTag:(t,r,p)=>{if(t==="h1")return p.isClosing?r.replace("h1","h2"):r.replace("h1",'h2 class="FTextContent__h1"')}},a=["\\s","​"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ","　","&nbsp;","&ensp;","&emsp;","&emsp13;","&numsp;","&puncsp;","&thinsp;","&hairsp;"],i=new RegExp(`<p>(${a.join("|")})*</p>`,"gi"),d=e.computed(()=>c.avoidOrphanPunct(u(s.source,o)).replace(i,"")),l=e.computed(()=>({"FTextContent--dense":s.dense}));return(t,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["FTextContent",e.unref(l)]),innerHTML:e.unref(d)},null,10,m))}});module.exports=h;
