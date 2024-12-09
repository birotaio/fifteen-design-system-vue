"use strict";const e=require("vue"),s={class:"FsElevationsMixins"},r={class:"FsElevationsMixins__container"},a={class:"FsElevationsMixins__row"},c={class:"FsElevationsMixins__row"},d=e.defineComponent({__name:"FsElevationsMixins",setup(m){const l=["inset",0,1,2,3,4,5,6],i=["hover","focus"];return(E,t)=>(e.openBlock(),e.createElementBlock("div",s,[t[5]||(t[5]=e.createElementVNode("caption",null,[e.createTextVNode("Use the following elevation mixins, with "),e.createElementVNode("code",null,"z"),e.createTextVNode(" from "),e.createElementVNode("code",null,"0"),e.createTextVNode(" to "),e.createElementVNode("code",null,"6"),e.createTextVNode(", or "),e.createElementVNode("code",null,'"inset"'),e.createTextVNode(".")],-1)),t[6]||(t[6]=e.createElementVNode("hr",null,null,-1)),e.createElementVNode("div",r,[e.createElementVNode("div",a,[t[0]||(t[0]=e.createElementVNode("span",null,"normal shadow",-1)),(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(l,n=>e.createElementVNode("div",{key:n,class:"FsElevationsMixins__item"},[e.createElementVNode("caption",null,[e.createElementVNode("code",null,e.toDisplayString(`elevation(${JSON.stringify(n)})`),1)]),e.createElementVNode("div",{class:e.normalizeClass(`FsElevationsMixins__elevation--${n}`)},null,2)])),64))]),e.createElementVNode("div",c,[t[1]||(t[1]=e.createElementVNode("span",null,"lighter shadow",-1)),(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(l,n=>e.createElementVNode("div",{key:n,class:"FsElevationsMixins__item"},[e.createElementVNode("caption",null,[e.createElementVNode("code",null,e.toDisplayString(`elevation-light(${JSON.stringify(n)})`),1)]),e.createElementVNode("div",{class:e.normalizeClass(`FsElevationsMixins__elevation-light--${n}`)},null,2)])),64))]),(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(i,n=>e.createElementVNode("div",{key:n,class:"FsElevationsMixins__row"},[e.createElementVNode("span",null,"with transition, on "+e.toDisplayString(n),1),(e.openBlock(),e.createElementBlock(e.Fragment,null,e.renderList(l,o=>e.createElementVNode("div",{key:o,class:"FsElevationsMixins__item"},[t[3]||(t[3]=e.createElementVNode("caption",null,[e.createElementVNode("code",null,e.toDisplayString("elevation-transition()"))],-1)),e.createElementVNode("caption",null,[e.createElementVNode("code",null,[e.createTextVNode(":"+e.toDisplayString(n)+" ",1),t[2]||(t[2]=e.createElementVNode("br",null,null,-1)),e.createTextVNode(" "+e.toDisplayString(` elevation(${JSON.stringify(o)})`),1)])]),e.createElementVNode("div",e.mergeProps({class:`FsElevationsMixins__elevation--${o}--${n}`,ref_for:!0},n==="focus"?{tabindex:0}:{}),null,16)])),64))])),64)),t[4]||(t[4]=e.createElementVNode("div",{class:"FsElevationsMixins__row"},[e.createElementVNode("span",null,"etc...")],-1))])]))}});module.exports=d;
