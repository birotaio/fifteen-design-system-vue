"use strict";const e=require("vue"),s=require("../../components/FIcon.js");;/* empty css                       */const n=require("../../.generated/utils.js"),c=require("../../.generated/icons.js"),i=require("../../composables/useIcon.js"),l={class:"FsIconGrid"},u=e.defineComponent({__name:"FsIconGrid",props:{size:{default:"24px"},color:{default:"secondary"},strokeWidth:{default:0}},setup(a){i.registerIcons("icons",c);const t=n.getIconList();return(o,d)=>(e.openBlock(),e.createElementBlock("div",l,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),r=>(e.openBlock(),e.createElementBlock("div",{class:"FsIconGrid__item",key:r},[e.createVNode(s,{size:o.size,color:o.color,name:r,"stroke-width":o.strokeWidth,"stroke-color":o.color},null,8,["size","color","name","stroke-width","stroke-color"]),e.createElementVNode("span",null,e.toDisplayString(r),1)]))),128))]))}});module.exports=u;
