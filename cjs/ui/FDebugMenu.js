"use strict";const Q=require("../components/FExpandable.js");;/* empty css                          */const Z=require("../components/form/FSelect.js");;/* empty css                           */const I=require("../components/form/FCheckbox.js");;/* empty css                             */const ee=require("../components/FButton.js");;/* empty css                      */const oe=require("../components/FIcon.js");;/* empty css                    */const e=require("vue"),re=require("../vendor/@fifteen/shared-lib/dist/es/composables/useVModelProxy.js");require("../vendor/countup.js/dist/countUp.min.js");const y=require("@vueuse/core");require("../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js");require("../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js");require("../vendor/@fifteen/shared-lib/dist/es/utils/text.js");;/* empty css                       */const le=require("../components/FCard.js");;/* empty css                    */const E=require("../utils/genSize.js");require("../utils/getCssColor.js");const N=require("../.generated/icons.js"),te=require("../composables/useIcon.js");require("../composables/useLazyImage.js");;/* empty css                     */;/* empty css                      */;/* empty css                              */;/* empty css                    */;/* empty css                           */;/* empty css                       */;/* empty css                             */;/* empty css                              */require("vee-validate");;/* empty css                    */;/* empty css                        */;/* empty css                        */;/* empty css                    */;/* empty css                      */;/* empty css                              */;/* empty css                           */;/* empty css                        */;/* empty css                        */;/* empty css                              */;/* empty css                    */require("xss");;/* empty css                           */const ne=require("../components/FPopup.js");;/* empty css                     */;/* empty css                          */const ue=require("../components/form/FInput.js");;/* empty css                          */require("../utils/credit-cards.js");require("../composables/useFieldWithValidation.js");;/* empty css                                    */;/* empty css                                */require("libphonenumber-js");;/* empty css                               */;/* empty css                          */;/* empty css                               */;/* empty css                                  */;/* empty css                                 */;/* empty css                             */require("@vee-validate/rules");;/* empty css                               */;/* empty css                                 */;/* empty css                           */require("../composables/useSmartLink.js");require("../createFds.js");const ae={class:"FDebugMenu__header"},ie={class:"FDebugMenu__header__controls"},ce=["onClick"],se={class:"FDebugMenu__item__text"},de={class:"FDebugMenu__item__title"},ve={class:"FDebugMenu__item__description"},ge={key:4},u=8,fe=e.defineComponent({__name:"FDebugMenu",props:{modelValue:{type:Boolean,default:!1},config:{default:()=>[]},color:{default:"secondary"},textColor:{default:"neutral--light-4"},controlColor:{default:"primary"},maxWidth:{default:460},snapMode:{default:"edges"},name:{default:"Debug menu"}},emits:["update:modelValue"],setup(R){const f=R;te.registerIcons("icons",{arrowExpand:N.arrowExpand,printedCircuitBoard:N.printedCircuitBoard,close:N.close});const S=e.ref(null),z=e.computed(()=>S.value?.$el),w=e.ref(!1),F=e.ref(!1),p=e.ref(!1),M=e.ref(null),d=re.useVModelProxy({props:f});e.watch(d,o=>o&&(p.value=!1));const x=e.ref(null),{height:K}=y.useElementSize(x);e.watch(K,()=>window.dispatchEvent(new Event("resize")));const C=y.useLocalStorage("debug-menu",{position:{x:u,y:u},values:{}});function L(){for(const[o,r]of Object.entries(C.value?.values??{}))f.config.forEach(i=>{i.items.forEach(n=>{o===n.localStorageKey&&(n.type==="toggle"&&T(r,n),(n.type==="input"||n.type==="select")&&V(r,n))})})}L();const{width:k,height:q}=y.useElementSize(z),{x:a,y:t}=y.useDraggable(z,{initialValue:{x:C.value.position.x,y:C.value.position.y},onStart:(o,r)=>{if(r.target?.closest(".FDebugMenu__content"))return!1},onMove:()=>{d.value=!1,w.value=!0},onEnd:()=>D(!0)});function m(o,r){return o<u?u:r-u<o?r-u:o}function H(o,r){return o<r/2?u:r-u}function D(o){switch(o&&(F.value=!0,setTimeout(()=>F.value=!1,200)),f.snapMode){case"edges":const r=Math.PI,i=a.value/window.innerWidth-.5,n=.5-t.value/window.innerHeight,g=Math.atan2(n,i);-r/4<g&&g<r/4?a.value=window.innerWidth-k.value-u:r/4<g&&g<3*r/4?t.value=u:-r/4>g&&g>-3*r/4?t.value=window.innerHeight-q.value-u:a.value=u,a.value=m(a.value,window.innerWidth-k.value),t.value=m(t.value,window.innerHeight-q.value);break;case"free":a.value=m(a.value,window.innerWidth-k.value),t.value=m(t.value,window.innerHeight-q.value);break;case"corners":a.value=H(a.value,window.innerWidth-k.value),t.value=H(t.value,window.innerHeight-q.value);break}}addEventListener("resize",y.useDebounceFn(()=>D(!0),300)),y.watchOnce([k,q],()=>D(!1)),e.watch([a,t],()=>{C.value.position={x:a.value,y:t.value}});const U=e.computed(()=>Math.max(t.value,window.innerHeight-q.value-t.value)-u*2);function P(){if(w.value){w.value=!1;return}d.value=!d.value}function O(o){return{"FDebugMenu__item--disabled":c(o.disabled),"FDebugMenu__item--clickable":o.type==="toggle","FDebugMenu__item--block":o.type==="content"}}function j(o){o.disabled||o.type==="toggle"&&(o.ref.value=!o.ref.value)}function T(o,r){r.ref.value=o??!1,r.localStorageKey&&(C.value.values[r.localStorageKey]=r.ref.value)}function V(o,r){o instanceof Event?r.ref.value=o.target.value:r.ref.value=o??"",r.localStorageKey&&(C.value.values[r.localStorageKey]=r.ref.value)}function c(o,r){return e.unref(o)??r}function W(o){return{"--FDebugMenu--inputWidth":E.genSize(o.width)}}const v=e.ref(null),$=e.ref(!1),B=e.ref(null);e.watch(v,()=>{B.value&&clearTimeout(B.value),v.value&&(B.value=setTimeout(()=>v.value=null,5e3))});async function A(o,r){if(!(o.disabled||o.type!=="trigger"))try{M.value=r;const i=await o.action();$.value=!1,v.value=i??null}catch(i){$.value=!0,v.value=i.message}finally{M.value=null}}const X=e.computed(()=>({"FDebugMenu--transition":F.value,"FDebugMenu--full":p.value})),Y=e.computed(()=>({left:`${a.value}px`,top:`${t.value}px`,"--FDebugMenu--groupColor":`var(--color--${f.controlColor}--light-2)`,"--FDebugMenu--controlColor":`var(--color--${f.controlColor})`,"--FDebugMenu--controlColor--rgb":`var(--color--${f.controlColor}--rgb)`,"--FDebugMenu--maxWidth":p.value?"none":E.genSize(f.maxWidth),"--FDebugMenu--maxHeight":p.value?"none":E.genSize(U.value)}));return(o,r)=>{const i=oe,n=ee,g=I,G=Z,J=Q;return e.openBlock(),e.createBlock(e.unref(ne),{class:e.normalizeClass(["FDebugMenu",e.unref(X)]),ref_key:"popupRef",ref:S,modelValue:e.unref(d),"onUpdate:modelValue":r[6]||(r[6]=s=>e.isRef(d)?d.value=s:null),style:e.normalizeStyle(e.unref(Y)),"offset-distance":8,"prevent-activation":""},{activator:e.withCtx(()=>[e.createVNode(n,{class:"FDebugMenu__activator",icon:"",static:"",color:o.color,"text-color":o.textColor,onClick:P},{default:e.withCtx(()=>[e.createVNode(i,{name:"printedCircuitBoard"})]),_:1},8,["color","text-color"])]),default:e.withCtx(()=>[e.createVNode(e.unref(le),{class:"FDebugMenu__content",ref_key:"contentRef",ref:x,color:o.color,"text-color":o.textColor},{default:e.withCtx(()=>[e.createElementVNode("div",ae,[e.createElementVNode("h5",null,e.toDisplayString(o.name),1),e.createElementVNode("div",ie,[e.createVNode(n,{icon:"",ghost:"",background:o.textColor,color:o.textColor,onClick:r[0]||(r[0]=s=>p.value=!e.unref(p))},{default:e.withCtx(()=>[e.createVNode(i,{class:e.normalizeClass(["FDebugMenu__header__icon",e.unref(p)?"FDebugMenu__header__icon--reduce":"FDebugMenu__header__icon--expand"]),name:"arrowExpand"},null,8,["class"])]),_:1},8,["background","color"]),e.createVNode(n,{icon:"",ghost:"",background:o.textColor,color:o.textColor,onClick:r[1]||(r[1]=s=>d.value=!1)},{default:e.withCtx(()=>[e.createVNode(i,{name:"close"})]),_:1},8,["background","color"])])]),e.createVNode(e.Transition,{name:"FDebugMenu__message--transition"},{default:e.withCtx(()=>[e.unref(v)?(e.openBlock(),e.createElementBlock("div",{key:0,class:e.normalizeClass(["FDebugMenu__message",{"FDebugMenu__message--error":e.unref($)}])},[e.createElementVNode("span",null,e.toDisplayString(e.unref(v)),1),e.createVNode(n,{icon:"",ghost:"",background:o.textColor,color:o.textColor,size:"tiny",onClick:r[2]||(r[2]=s=>v.value=null)},{default:e.withCtx(()=>[e.createVNode(i,{name:"close"})]),_:1},8,["background","color"])],2)):e.createCommentVNode("",!0)]),_:1}),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.config,(s,_)=>(e.openBlock(),e.createBlock(J,{key:s.title,"model-value":s.expanded,"icon-scale":.5,"title-vertical-padding":8,gap:8,"text-hover-color":o.controlColor,"no-isolation":""},{title:e.withCtx(()=>[e.createElementVNode("h6",null,e.toDisplayString(s.title),1)]),default:e.withCtx(()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.items,(l,h)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["FDebugMenu__item",O(l)]),key:`${_}-${h}`,onClick:b=>j(l)},[e.createElementVNode("div",se,[e.createElementVNode("div",de,e.toDisplayString(l.title),1),e.createElementVNode("div",ve,e.toDisplayString(l.description),1)]),l.type==="trigger"?(e.openBlock(),e.createBlock(n,{key:`${_}-${h}`,disabled:c(l.disabled),color:o.controlColor,"hover-color":`${o.controlColor}--light-1`,loading:e.unref(M)===`${_}-${h}`,onClick:b=>A(l,`${_}-${h}`)},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(l.triggerText),1)]),_:2},1032,["disabled","color","hover-color","loading","onClick"])):e.createCommentVNode("",!0),l.type==="toggle"?(e.openBlock(),e.createBlock(g,{key:`${_}-${h}`,"model-value":l.ref.value,disabled:c(l.disabled),"hover-border-color":`${o.controlColor}--light-1`,"checked-border-color":`${o.controlColor}--light-1`,"checked-color":o.controlColor,"onUpdate:modelValue":b=>T(b,l),onClick:r[3]||(r[3]=e.withModifiers(()=>{},["stop"]))},null,8,["model-value","disabled","hover-border-color","checked-border-color","checked-color","onUpdate:modelValue"])):e.createCommentVNode("",!0),l.type==="input"?(e.openBlock(),e.createBlock(e.unref(ue),{key:`${_}-${h}`,style:e.normalizeStyle(W(l)),"model-value":l.ref.value,disabled:c(l.disabled),"hover-border-color":`${o.controlColor}--light-1`,"checked-border-color":`${o.controlColor}--light-1`,placeholder:c(l.placeholder,""),"outline-color":o.controlColor,"focus-color":`${o.controlColor}--light-2`,color:`${o.controlColor}--light-2`,onChange:b=>V(b,l),onClick:r[4]||(r[4]=e.withModifiers(()=>{},["stop"]))},null,8,["style","model-value","disabled","hover-border-color","checked-border-color","placeholder","outline-color","focus-color","color","onChange"])):e.createCommentVNode("",!0),l.type==="select"?(e.openBlock(),e.createBlock(G,{key:`${_}-${h}`,style:e.normalizeStyle(W(l)),"model-value":l.ref.value,disabled:c(l.disabled),"hover-border-color":`${o.controlColor}--light-1`,"checked-border-color":`${o.controlColor}--light-1`,"options-menu-color":`${o.controlColor}--light-2`,placeholder:c(l.placeholder,""),"outline-color":o.controlColor,"focus-color":`${o.controlColor}--light-2`,color:`${o.controlColor}--light-2`,options:c(l.options),clearable:c(l.clearable),size:"small","onUpdate:modelValue":b=>V(b,l),onClick:r[5]||(r[5]=e.withModifiers(()=>{},["stop"]))},null,8,["style","model-value","disabled","hover-border-color","checked-border-color","options-menu-color","placeholder","outline-color","focus-color","color","options","clearable","onUpdate:modelValue"])):e.createCommentVNode("",!0),l.type==="content"?(e.openBlock(),e.createElementBlock("code",ge,e.toDisplayString(l.content),1)):e.createCommentVNode("",!0)],10,ce))),128))]),_:2},1032,["model-value","text-hover-color"]))),128))]),_:1},8,["color","text-color"])]),_:1},8,["modelValue","style","class"])}}});module.exports=fe;
