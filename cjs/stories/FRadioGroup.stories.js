"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("../components/form/FRadioGroup.js");;/* empty css                               */const c=require("../components/FButton.js");;/* empty css                      */const d=require("vue"),m={title:"Components/Form/FRadioGroup",component:p,argTypes:{displayMode:{options:["vertical","horizontal"]}}},i=t=>({components:{FRadioGroup:p},setup:()=>({args:t}),template:'<FRadioGroup v-bind="args" />'}),a=i.bind({});a.args={label:"Pick a fruit",options:[{label:"Apple",value:"apple",name:"apple"},{label:"Banana",value:"banana",name:"banana"},{label:"Pear",value:"pear",name:"pear"},{label:"Kiwi",value:"kiwi",name:"kiwi"}]};const e=i.bind({});e.args={label:"Pick a fruit",displayMode:"horizontal",options:[{label:"Apple",value:"apple",name:"apple"},{label:"Banana",value:"banana",name:"banana"},{label:"Pear",value:"pear",name:"pear"},{label:"Kiwi",value:"kiwi",name:"kiwi"}]};const r=i.bind({});r.args={hint:"Choose your favorite fruit 🍏 🍌 🍐 🥝 ",options:[{label:"Apple",value:"apple",name:"apple"},{label:"Banana",value:"banana",name:"banana"},{label:"Pear",value:"pear",name:"pear"},{label:"Kiwi",value:"kiwi",name:"kiwi"}]};const o=i.bind({});o.args={disabled:!0,label:"Pick a fruit",displayMode:"horizontal",options:[{label:"Apple",value:"apple",name:"apple"},{label:"Banana",value:"banana",name:"banana"},{label:"Pear",value:"pear",name:"pear"},{label:"Kiwi",value:"kiwi",name:"kiwi"}]};const n=i.bind({});n.args={rules:[t=>t==="kiwi"],label:"Pick the greenest fruit",displayMode:"horizontal",options:[{label:"Apple",value:"apple",name:"apple"},{label:"Banana",value:"banana",name:"banana"},{label:"Pear",value:"pear",name:"pear"},{label:"Kiwi",value:"kiwi",name:"kiwi"}],modelValue:"apple",errorMessage:'Select "kiwi" to dismiss the error',validateOnMount:!0};const b=t=>({components:{FRadioGroup:p,FButton:c},setup(){const l=d.ref();function u(){l.value?.focus()}return{args:t,focus:u,radioGroupRef:l}},template:`
<div>
  <FRadioGroup ref="radioGroupRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),s=b.bind({});s.args={options:[{label:"Option A",value:"a",name:"a"},{label:"Option B",value:"b",name:"b"},{label:"Option C",value:"c",name:"c"}]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup,
    FButton
  },
  setup() {
    const radioGroupRef = ref();
    function focus() {
      radioGroupRef.value?.focus();
    }
    return {
      args,
      focus,
      radioGroupRef
    };
  },
  template: \`
<div>
  <FRadioGroup ref="radioGroupRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...s.parameters?.docs?.source}}};const v=["Default","Horizontal","WithHint","Disabled","Error","FocusProgrammatically"];exports.Default=a;exports.Disabled=o;exports.Error=n;exports.FocusProgrammatically=s;exports.Horizontal=e;exports.WithHint=r;exports.__namedExportsOrder=v;exports.default=m;
