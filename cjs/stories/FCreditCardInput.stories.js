"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const u=require("../components/form/FCreditCardInput.js");;/* empty css                                    */const m=require("../components/FButton.js");;/* empty css                      */const C=require("vue"),g={title:"Components/Form/FCreditCardInput",component:u},r=i=>({components:{FCreditCardInput:u},setup:()=>({args:i}),template:'<FCreditCardInput v-bind="args" />'}),e=r.bind({});e.args={errorMessage:"The credit card format is not a valid format"};const t=r.bind({});t.args={label:"Fill your credit card numbers",errorMessage:"The credit card format is not a valid format"};const a=r.bind({});a.args={hint:"All credit cards operations are crypted",hintIcon:"lock",errorMessage:"The credit card format is not a valid format"};const s=r.bind({});s.args={label:"Enter your credit card",hint:"All credit cards operations are crypted",hintIcon:"lock",errorMessage:"The credit card format is not a valid format"};const o=r.bind({});o.args={label:"Enter your credit card",validateOnMount:!0,errorMessage:"Enter any valid number to dismiss the error",rules:i=>i!==""};const n=r.bind({});n.args={label:"Enter your credit card",hint:"All credit cards operations are crypted",hintIcon:"lock",disabled:!0};const F=i=>({components:{FCreditCardInput:u,FButton:m},setup(){const p=C.ref();function l(){p.value?.focus()}return{args:i,focus:l,creditCardInputRef:p}},template:`
<div>
  <FCreditCardInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),c=F.bind({}),d=r.bind({});d.args={label:"Enter your credit card",hint:"All credit cards operations are crypted",loading:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput,
    FButton
  },
  setup() {
    const creditCardInputRef = ref();
    function focus() {
      creditCardInputRef.value?.focus();
    }
    return {
      args,
      focus,
      creditCardInputRef
    };
  },
  template: \`
<div>
  <FCreditCardInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,...d.parameters?.docs?.source}}};const I=["Default","WithLabel","WithHint","Full","Error","Disabled","FocusProgrammatically","Loading"];exports.Default=e;exports.Disabled=n;exports.Error=o;exports.FocusProgrammatically=c;exports.Full=s;exports.Loading=d;exports.WithHint=a;exports.WithLabel=t;exports.__namedExportsOrder=I;exports.default=g;
