"use strict";const w=require("../../components/form/FForm.js"),x=require("../../components/FGrid.js");;/* empty css                       */const S=require("../../components/FButton.js");;/* empty css                         */const k=require("../../components/form/FToggle.js");;/* empty css                              */const H=require("../../components/form/FAutocomplete.js");;/* empty css                                    */const O=require("../../components/form/FTextarea.js");;/* empty css                                */const T=require("../../components/form/FLocaleSelect.js");;/* empty css                                    */const B=require("../../components/form/FCountrySelect.js");;/* empty css                                     */const G=require("../../components/form/FSelect.js");;/* empty css                              */const A=require("../../components/form/FRadioGroup.js");;/* empty css                                  */const R=require("../../components/form/FCreditCardInput.js");;/* empty css                                       */const D=require("../../components/form/FPhoneInput.js");;/* empty css                                  */const L=require("../../components/form/FInput.js");;/* empty css                             */const P=require("../../components/form/FDigitsInput.js");;/* empty css                                   */const U=require("../../components/FGridItem.js");;/* empty css                           */const $=require("../../components/form/FCheckbox.js");;/* empty css                                */const e=require("vue"),j=require("@vee-validate/rules"),z=e.defineComponent({__name:"FsForm",props:{initialValues:{},loading:{type:Boolean},withValidation:{type:Boolean}},setup(l){const a=l,i=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],_=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],s=[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}],o=e.computed(()=>a.withValidation?[j.required]:[]);return(t,r)=>{const c=$,n=U,p=P,d=L,F=D,g=R,m=A,C=G,v=B,f=T,h=O,q=H,V=k,u=S,b=x,N=w;return e.openBlock(),e.createBlock(N,{class:"FsForm","initial-values":t.initialValues},{default:e.withCtx(({submit:y,reset:I})=>[e.createVNode(b,{gap:"24"},{default:e.withCtx(()=>[e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(c,{label:"FCheckbox",name:"FCheckbox",hint:"Hint for FCheckbox"})]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(p,{label:"FDigitsInput",name:"FDigitsInput",hint:"Hint for FDigitsInput",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(d,{label:"FInput",name:"FInput",hint:"Hint for FInput",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(F,{label:"FPhoneInput",name:"FPhoneInput",hint:"Hint for FPhoneInput",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(g,{label:"FCreditCardInput",name:"FCreditCardInput",hint:"Hint for FCreditCardInput",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(m,{label:"FRadioGroup",name:"FRadioGroup",hint:"Hint for FRadioGroup",options:i,rules:e.unref(o)},null,8,["rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(C,{label:"FSelect",name:"FSelect",hint:"Hint for FSelect",options:_,loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(v,{label:"FCountrySelect",name:"FCountrySelect",hint:"Hint for FCountrySelect","country-codes":["US","FR"],loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(f,{label:"FLocaleSelect",name:"FLocaleSelect",hint:"Hint for FLocaleSelect","locale-codes":["en","fr"],loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(h,{label:"FTextarea",name:"FTextarea",hint:"Hint for FTextarea",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(q,{label:"FAutocomplete",name:"FAutocomplete",hint:"Hint for FAutocomplete",options:s,loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{span:"12"},{default:e.withCtx(()=>[e.createVNode(V,{label:"FToggle",name:"FToggle",hint:"Hint for FToggle",loading:t.loading,rules:e.unref(o)},null,8,["loading","rules"])]),_:1}),e.createVNode(n,{class:"FsForm__actions",span:"12"},{default:e.withCtx(()=>[e.createVNode(u,{loading:t.loading,onClick:y},{default:e.withCtx(()=>r[0]||(r[0]=[e.createTextVNode("Submit")])),_:2},1032,["loading","onClick"]),t.loading?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(u,{key:0,onClick:()=>I()},{default:e.withCtx(()=>r[1]||(r[1]=[e.createTextVNode("Reset")])),_:2},1032,["onClick"]))]),_:2},1024)]),_:2},1024)]),_:1},8,["initial-values"])}}});module.exports=z;