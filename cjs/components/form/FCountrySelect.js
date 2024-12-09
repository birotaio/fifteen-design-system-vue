"use strict";const b=require("./FSelect.js");;/* empty css          */const F=require("../FFlagIcon.js");;/* empty css             */const o=require("vue"),T=require("../../.generated/utils.js"),B=require("../../composables/useFieldWithValidation.js"),S=require("../../composables/useInputEventBindings.js"),V={class:"FCountrySelect__selectedValue"},M=o.defineComponent({__name:"FCountrySelect",props:{countryCodes:{default:()=>[]},optionLabelFormat:{type:Function,default:void 0},optionsMenuColor:{default:"neutral--light-5"},optionTextColor:{default:"secondary"},selectedOptionColor:{default:"neutral--light-2"},selectedOptionTextColor:{default:"primary--dark-2"},outlineColor:{default:"neutral--light-3"},placeholder:{default:""},placeholderTextColor:{default:"neutral--dark-2"},focusBorderColor:{default:"secondary"},menuWidth:{default:300},clearable:{type:Boolean},emptyText:{default:""},size:{default:"medium"},validationTrigger:{default:"change"},preventSelection:{type:Boolean},fieldset:{type:Boolean},name:{default:""},label:{default:""},labelTextColor:{default:"neutral--dark-4"},hint:{default:""},hintTextColor:{default:"neutral--dark-4"},hideHint:{type:Boolean},hintIcon:{default:null},modelValue:{default:void 0},disabled:{type:Boolean},loading:{type:Boolean},color:{default:"neutral--light-3"},textColor:{default:"neutral--dark-4"},errorColor:{default:"danger"},rules:{type:[Function,Array],default:()=>[]},errorMessage:{default:""},validateOnMount:{type:Boolean},focusColor:{default:"neutral--light-5"},borderColor:{default:"secondary"}},emits:["update:modelValue","input","change","focus","blur"],setup(i,{expose:d,emit:s}){const e=i,c=s,p={label:e.label,name:e.name,color:e.color,textColor:e.textColor,focusColor:e.focusColor,borderColor:e.borderColor,focusBorderColor:e.focusBorderColor,outlineColor:e.outlineColor,optionsMenuColor:e.optionsMenuColor,optionTextColor:e.optionTextColor,selectedOptionTextColor:e.selectedOptionTextColor,labelTextColor:e.labelTextColor,hint:e.hint,hideHint:e.hideHint,hintTextColor:e.hintTextColor,hintIcon:e.hintIcon,placeholder:e.placeholder,clearable:e.clearable,errorMessage:e.errorMessage,errorColor:e.errorColor,disabled:e.disabled,loading:e.loading,rules:e.rules,size:e.size,validationTrigger:e.validationTrigger,validateOnMount:e.validateOnMount,menuWidth:e.menuWidth},{hint:f,value:n,validate:C}=B.useFieldWithValidation(e,{validateOnMount:e?.validateOnMount}),{handleFocus:g,handleBlur:h}=S.useInputEventBindings(C,e.validationTrigger,c);d({focus:m});const r=o.ref(),a=o.computed(()=>e.size==="medium"?24:20);function m(){r.value?.focus()}const _=o.computed(()=>(e.countryCodes.length?e.countryCodes:T.getFlagIconList()).map(l=>({label:e.optionLabelFormat?.(l)??l,value:l})));return(y,l)=>{const u=F,v=b;return o.openBlock(),o.createBlock(v,o.mergeProps({class:"FCountrySelect",ref_key:"countryCodeSelectRef",ref:r,modelValue:o.unref(n),"onUpdate:modelValue":l[0]||(l[0]=t=>o.isRef(n)?n.value=t:null)},p,{options:o.unref(_),hint:o.unref(f),onFocus:o.unref(g),onBlur:o.unref(h)}),{"selected-value":o.withCtx(({value:t,label:x})=>[o.createElementVNode("div",V,[o.createVNode(u,{class:"FCountrySelect__flag","flag-code":t,size:o.unref(a)},null,8,["flag-code","size"]),o.createElementVNode("span",null,o.toDisplayString(x),1)])]),"option-prefix":o.withCtx(({option:t})=>[o.createVNode(u,{class:"FCountrySelect__flag","flag-code":t.value,size:o.unref(a)},null,8,["flag-code","size"])]),option:o.withCtx(({option:t})=>[o.createElementVNode("span",null,o.toDisplayString(t.label),1)]),_:1},16,["modelValue","options","hint","onFocus","onBlur"])}}});module.exports=M;
