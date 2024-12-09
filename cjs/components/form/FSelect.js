"use strict";const N=require("./FField.js");;/* empty css         */const P=require("../FMenu.js");;/* empty css         */const E=require("../FLoader.js");;/* empty css           */const D=require("../FIcon.js");;/* empty css         */const e=require("vue"),R=require("../../vendor/fast-deep-equal/es6/index.js"),s=require("../../utils/getCssColor.js"),u=require("../../.generated/icons.js"),H=require("../../composables/useIcon.js"),W=require("../../composables/useFieldWithValidation.js"),$=require("../../composables/useInputEventBindings.js"),L={class:"FSelect__select__selectionStart"},U={class:"FSelect__selectValue"},A={class:"FSelect__text"},j={key:1,class:"FSelect__placeholder"},G=e.defineComponent({__name:"FSelect",props:{options:{default:()=>[]},placeholder:{default:""},optionsMenuColor:{default:"neutral--light-3"},optionTextColor:{default:"neutral--dark-4"},selectedOptionColor:{default:"primary--light-2"},selectedOptionTextColor:{default:"primary--dark-2"},outlineColor:{default:"neutral--light-3"},placeholderTextColor:{default:"neutral--dark-2"},focusColor:{default:"neutral--light-5"},focusBorderColor:{default:"secondary"},menuWidth:{default:300},clearable:{type:Boolean},emptyText:{default:""},size:{default:"medium"},validationTrigger:{default:"change"},preventSelection:{type:Boolean,default:!1},fieldset:{type:Boolean},name:{default:""},label:{},labelTextColor:{},hint:{},hintTextColor:{},hideHint:{type:Boolean},hintIcon:{},modelValue:{default:void 0},disabled:{type:Boolean,default:!1},loading:{type:Boolean},color:{default:"neutral--light-3"},textColor:{default:"neutral--dark-4"},errorColor:{default:"danger"},rules:{type:[Function,Array],default:()=>[]},errorMessage:{default:""},validateOnMount:{type:Boolean,default:!1},borderColor:{default:"neutral--dark-1"}},emits:["update:modelValue","change","focus","blur","clear","select-option","before-select-option"],setup(v,{expose:g,emit:_}){const t=v,a=_;g({focus:I}),H.registerIcons("icons",{chevronDown:u.chevronDown,close:u.close,exclamationCircle:u.exclamationCircle});const{isValid:c,hint:y,value:l,validate:d}=W.useFieldWithValidation(t,{validateOnMount:t?.validateOnMount}),{handleFocus:p}=$.useInputEventBindings(d,t.validationTrigger,a);e.watch(l,o=>{o===""||o===null||o===void 0||d(o)});const b=e.ref(0),i=e.ref(!1),F=e.computed(()=>({"--fselect--border-color":s.getCssColor(t.borderColor),"--fselect--color":s.getCssColor(t.color),"--fselect--error-color":s.getCssColor(t.errorColor),"--fselect--focus-border-color":s.getCssColor(t.focusBorderColor),"--fselect--focus-color":s.getCssColor(t.focusColor),"--fselect--outline-color":s.getCssColor(`${t.outlineColor}--rgb`),"--fselect--placeholder-text-color":s.getCssColor(t.placeholderTextColor),"--fselect--text-color":s.getCssColor(t.textColor)})),k=e.computed(()=>({["FSelect--"+t.size]:!0,"FSelect--error":!c.value,"FSelect--disabled":t.disabled,"FSelect--loading":t.loading})),B=e.computed(()=>t.disabled?"neutral--dark-1":c.value?t.hintTextColor:t.errorColor),S=e.computed(()=>({"FSelect__icon--flipped":i.value&&f.value==="chevronDown"})),f=e.computed(()=>t.clearable&&i.value&&l.value?"close":"chevronDown"),x=e.computed(()=>t.size==="medium"?52:44);function C(o){return t.options.find(r=>r.value===o)?.label}function V(o){t.clearable&&i.value&&l.value&&(o.stopPropagation(),T())}function T(){l.value=null,a("clear")}function q(o){b.value=t.options.findIndex(r=>R(r.value,l.value)),a("blur",o)}const m=e.ref();function I(){m.value?.focus()}function w(o){a("select-option",o),a("before-select-option",o)}return(o,r)=>{const h=D,O=E,z=P,M=N;return e.openBlock(),e.createBlock(M,e.mergeProps({class:["FSelect",e.unref(k)],style:e.unref(F)},{name:o.name,label:o.label,labelTextColor:o.labelTextColor,hint:e.unref(y),hideHint:o.hideHint,hintTextColor:e.unref(B),hintIcon:o.hintIcon}),{default:e.withCtx(()=>[e.createVNode(z,{modelValue:e.unref(i),"onUpdate:modelValue":r[1]||(r[1]=n=>e.isRef(i)?i.value=n:null),"selected-option":e.unref(l),"onUpdate:selectedOption":r[2]||(r[2]=n=>e.isRef(l)?l.value=n:null),options:o.options,width:o.menuWidth,"empty-text":o.emptyText,color:o.optionsMenuColor||o.color,"text-color":o.optionTextColor,"selected-option-color":o.selectedOptionColor,"selected-option-text-color":o.selectedOptionTextColor,"prevent-selection":o.preventSelection,disabled:o.disabled||o.loading,"option-height":e.unref(x),onBeforeSelectOption:w},{"option-prefix":e.withCtx(n=>[e.renderSlot(o.$slots,"option-prefix",e.normalizeProps(e.guardReactiveProps(n)))]),option:e.withCtx(n=>[e.renderSlot(o.$slots,"option",e.normalizeProps(e.guardReactiveProps(n)))]),activator:e.withCtx(()=>[e.createElementVNode("div",{class:"FSelect__select",ref_key:"selectRef",ref:m,tabindex:"0",role:"listbox",onBlur:q,onFocus:r[0]||(r[0]=(...n)=>e.unref(p)&&e.unref(p)(...n))},[e.createElementVNode("div",L,[e.unref(c)?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(h,{key:0,class:"FSelect__select__errorIcon",name:"exclamationCircle",color:o.errorColor,size:"16"},null,8,["color"])),e.createElementVNode("div",U,[e.unref(l)?e.renderSlot(o.$slots,"selected-value",e.normalizeProps(e.mergeProps({key:0},{value:e.unref(l),label:C(e.unref(l))})),()=>[e.createElementVNode("div",A,e.toDisplayString(C(e.unref(l))),1)]):(e.openBlock(),e.createElementBlock("div",j,e.toDisplayString(o.placeholder),1))])]),o.loading?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(h,{key:0,class:e.normalizeClass(["FSelect__icon",e.unref(S)]),name:e.unref(f),size:16,color:"transparent","stroke-color":o.textColor,"stroke-width":2,onClick:V},null,8,["name","stroke-color","class"])),o.loading?(e.openBlock(),e.createBlock(O,{key:1,class:"FSelect__loader",height:"24",color:o.placeholderTextColor},null,8,["color"])):e.createCommentVNode("",!0)],544)]),_:3},8,["modelValue","selected-option","options","width","empty-text","color","text-color","selected-option-color","selected-option-text-color","prevent-selection","disabled","option-height"])]),_:3},16,["style","class"])}}});module.exports=G;