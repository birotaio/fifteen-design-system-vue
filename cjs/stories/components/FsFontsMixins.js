"use strict";const e=require("vue"),s=require("../../constants/typography.js"),r={class:"FsFontsMixins"},l=e.defineComponent({__name:"FsFontsMixins",setup(i){return(c,t)=>(e.openBlock(),e.createElementBlock("div",r,[t[0]||(t[0]=e.createElementVNode("div",{class:"FsFontsMixins__caption"},[e.createTextVNode("Use the stylus mixin "),e.createElementVNode("code",null,"use-font($name)"),e.createTextVNode(", where "),e.createElementVNode("code",null,"$name"),e.createTextVNode(" is in the following names.")],-1)),t[1]||(t[1]=e.createElementVNode("hr",null,null,-1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s.typographies),(n,o)=>(e.openBlock(),e.createElementBlock("div",{key:o,class:e.normalizeClass(n)},e.toDisplayString(n),3))),128))]))}});module.exports=l;
