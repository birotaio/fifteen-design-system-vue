"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const o=require("vee-validate"),t=require("vue"),F=require("../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js");require("../vendor/countup.js/dist/countUp.min.js");require("@vueuse/core");require("../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js");require("../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js");require("../vendor/@fifteen/shared-lib/dist/es/utils/text.js");function g(e,a){return t.computed(()=>a.value?.length>0?e?.errorMessage||a.value?.[0]:e.hint??"")}function h(e,a,V){const c=t.toRef(e,"name"),r=[...e?.rules?[e.rules]:[],...a?.rules?[a.rules]:[]].flat(1);if(!c.value){const l=F.useVModelProxy({props:e}),n=t.ref(!0),s=t.ref([]);let m=!1;return t.watch(l,async()=>{if(a?.validateOnMount&&!m||a?.validateOnModelValueUpdate){const i=await o.validate(l.value,r);s.value=i.errors,n.value=i.valid,m=!0}},{immediate:a?.validateOnMount}),{validate:async(i,b=!0)=>{const w=i instanceof Event?l.value:i;if(b){const f=await o.validate(w??l.value,r);s.value=f.errors,n.value=f.valid}},resetValidation:()=>{s.value=[],n.value=!0},value:l,hint:g(e,s),isValid:n}}const{value:u,handleChange:v,errors:d}=o.useField(c,r,{initialValue:e?.modelValue??void 0,validateOnValueUpdate:!1,validateOnMount:a?.validateOnMount}),y=t.getCurrentInstance(),q=V||y?.emit;t.watch(u,()=>{q?.("update:modelValue",u.value)}),t.watch(()=>e?.modelValue,l=>{v(l,a?.validateOnModelValueUpdate??!1)});const M=t.computed(()=>d.value.length===0);return{validate:v,resetValidation:()=>{d.value=[]},value:u,hint:g(e,d),isValid:M}}h.__docgenInfo={exportName:"useFieldWithValidation",displayName:"useFieldWithValidation",type:2,props:[{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"name",global:!1,description:"",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"rules",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"hint",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[],sourceFiles:"/home/runner/work/fifteen-design-system-vue/fifteen-design-system-vue/src/composables/useFieldWithValidation.ts"};exports.useFieldWithValidation=h;