"use strict";const e=require("vue"),n=require("../../components/FCreditCardIcon.js");;/* empty css                                 */const c=require("../../.generated/utils.js"),i=require("../../.generated/credit-cards.js"),o=require("../../composables/useIcon.js"),d={class:"FsCreditCardIconGrid"},u=e.defineComponent({__name:"FsCreditCardIconsGrid",props:{size:{default:"24px"}},setup(a){o.registerIcons("creditCards",i);const t=c.getCreditCardIcons();return(s,l)=>(e.openBlock(),e.createElementBlock("div",d,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(t),r=>(e.openBlock(),e.createElementBlock("div",{class:"FsCreditCardIconGrid__item",key:r},[e.createVNode(n,{size:s.size,"card-type":r},null,8,["size","card-type"]),e.createElementVNode("span",null,e.toDisplayString(r),1)]))),128))]))}});module.exports=u;