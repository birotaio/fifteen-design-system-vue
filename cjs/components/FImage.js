"use strict";const p=require("./FIcon.js");;/* empty css        */const e=require("vue"),c=require("../utils/genSize.js"),s=require("../utils/getCssColor.js"),_=require("../.generated/icons.js"),h=require("../composables/useIcon.js"),k=require("../composables/useLazyImage.js"),I=["srcset","alt"],C=["src","alt"],y=["src","alt"],b={key:3,class:"FImage__fallback"},z=e.defineComponent({__name:"FImage",props:{src:{},alt:{},height:{default:"auto"},width:{default:"auto"},fit:{default:"contain"},position:{default:"center"},loading:{default:"lazy"},placeholder:{default:""},corners:{default:"rounded"},backgroundColor:{default:""}},setup(l){const o=l;h.registerIcons("icons",{landscape:_.landscape});const n=e.ref(),{isInit:i,isLoaded:u}=k.useLazyImage(n,o.src),r=e.computed(()=>o.loading==="eager"||i.value?o.src:""),t=e.computed(()=>o.loading==="lazy"&&o.placeholder),d=e.computed(()=>{switch(o.corners){case"sharp":return"0";case"circular":return"50%";default:case"rounded":return c.genSize(16)}}),g=e.computed(()=>({"--fimage--height":c.genSize(o.height),"--fimage--width":c.genSize(o.width),"--fimage--object-fit":o.fit,"--fimage--object-position":String(o.position),"--fimage--border-radius":d.value,"--fimage--background-color":s.getCssColor(o.backgroundColor),"--fimage--fallback-background-color":s.getCssColor(o.backgroundColor||"neutral--light-3")})),m=e.computed(()=>({"FImage--loaded":u.value,"FImage--placeholder":t.value}));return(a,B)=>{const f=p;return e.openBlock(),e.createElementBlock("picture",{class:e.normalizeClass(["FImage",e.unref(m)]),ref_key:"imageRef",ref:n,style:e.normalizeStyle(e.unref(g))},[e.unref(t)?(e.openBlock(),e.createElementBlock("source",{key:0,class:"FImage__image",srcset:e.unref(r),alt:a.alt},null,8,I)):e.createCommentVNode("",!0),e.unref(t)?(e.openBlock(),e.createElementBlock("img",{key:1,class:"FImage__placeholder",src:e.unref(t),alt:a.alt},null,8,C)):e.unref(r)?(e.openBlock(),e.createElementBlock("img",{key:2,class:"FImage__image",src:e.unref(t)||e.unref(r),alt:a.alt},null,8,y)):e.createCommentVNode("",!0),a.src?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("div",b,[e.createVNode(f,{name:"landscape",color:"secondary",size:"100%"})]))],6)}}});module.exports=z;
