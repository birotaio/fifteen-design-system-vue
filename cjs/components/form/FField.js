"use strict";const a=require("./FFieldHint.js");;/* empty css             */const d=require("./FFieldLabel.js");;/* empty css              */const e=require("vue"),u=require("../../utils/genSize.js"),s=e.defineComponent({__name:"FField",props:{fieldset:{type:Boolean,default:!1},name:{default:""},label:{default:""},labelTextColor:{default:"neutral--dark-4"},hint:{default:""},hintTextColor:{default:"neutral--dark-4"},hideHint:{type:Boolean,default:!1},hintIcon:{default:null}},setup(l){const n=l,o=e.computed(()=>({"--ffield--margin-bottom":u.genSize(n.hideHint?0:16)}));return(t,c)=>{const i=d,r=a;return e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.fieldset?"fieldset":"div"),{class:"FField",style:e.normalizeStyle(e.unref(o))},{default:e.withCtx(()=>[t.label?(e.openBlock(),e.createBlock(i,{key:0,name:t.name,label:t.label,"text-color":t.labelTextColor,type:t.fieldset?"legend":"label"},null,8,["name","label","text-color","type"])):e.createCommentVNode("",!0),e.renderSlot(t.$slots,"default"),e.createVNode(r,{class:"FField__hint",text:t.hint,hidden:t.hideHint,"text-color":t.hintTextColor,icon:t.hintIcon},null,8,["text","hidden","text-color","icon"])]),_:3},8,["style"])}}});module.exports=s;
