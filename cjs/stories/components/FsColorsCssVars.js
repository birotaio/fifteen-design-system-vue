"use strict";const e=require("vue"),l=require("../../constants/colors.js"),r={class:"FsColorsCssVars"},n={class:"FsColorsCssVars__container"},c={class:"FsColorsCssVars__caption"},a=e.defineComponent({__name:"FsColorsCssVars",setup(i){return(d,o)=>(e.openBlock(),e.createElementBlock("div",r,[o[0]||(o[0]=e.createElementVNode("div",{class:"FsColorsCssVars__caption"},[e.createTextVNode("Use the following CSS variables. You can also append "),e.createElementVNode("code",null,"--rgb"),e.createTextVNode(" to get the RGB values.")],-1)),o[1]||(o[1]=e.createElementVNode("hr",null,null,-1)),e.createElementVNode("div",n,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l.baseColorDesignTokens),t=>(e.openBlock(),e.createElementBlock("div",{class:"FsColorsCssVars__color",key:t},[e.createElementVNode("span",null,e.toDisplayString(t),1),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l.colorDesignTokens).filter(s=>s.includes(t)),s=>(e.openBlock(),e.createElementBlock("div",{key:s,class:"FsColorsCssVars__item"},[e.createElementVNode("div",c,[e.createElementVNode("code",null,e.toDisplayString(s),1)]),e.createElementVNode("div",{style:e.normalizeStyle({backgroundColor:`var(--color--${s})`})},null,4)]))),128))]))),128))])]))}});module.exports=a;
