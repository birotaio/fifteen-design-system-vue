"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("../components/form/FDigitsInput.js");;/* empty css                                */const l=require("../components/FButton.js");;/* empty css                      */const m=require("vue"),F={title:"Components/Form/FDigitsInput",component:c},t=u=>({components:{FDigitsInput:c},setup:()=>({args:u}),template:'<FDigitsInput v-bind="args" />'}),e=t.bind({});e.args={label:"Enter validation code"};const s=t.bind({});s.args={label:"Enter validation code"};const r=t.bind({});r.args={hint:"Check the SMS on your phone"};const n=t.bind({});n.args={label:"Enter validation code",hint:"Check your SMS"};const i=t.bind({});i.args={digits:5,rules:[u=>u==="12345"],errorMessage:'Type "12345" to dismiss the error',validateOnMount:!0};const a=t.bind({});a.args={label:"Enter validation code",hint:"Check your SMS",disabled:!0};const o=t.bind({});o.args={label:"Enter validation code",hint:"Check your SMS",loading:!0};const D=u=>({components:{FDigitsInput:c,FButton:l},setup(){const g=m.ref();function d(){g.value?.focus()}return{args:u,focus:d,digitsInputRef:g}},template:`
<div>
  <FDigitsInput ref="digitsInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),p=D.bind({});e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput,
    FButton
  },
  setup() {
    const digitsInputRef = ref();
    function focus() {
      digitsInputRef.value?.focus();
    }
    return {
      args,
      focus,
      digitsInputRef
    };
  },
  template: \`
<div>
  <FDigitsInput ref="digitsInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...p.parameters?.docs?.source}}};const I=["Default","WithLabel","WithHint","Full","Error","Disabled","Loading","FocusProgrammatically"];exports.Default=e;exports.Disabled=a;exports.Error=i;exports.FocusProgrammatically=p;exports.Full=n;exports.Loading=o;exports.WithHint=r;exports.WithLabel=s;exports.__namedExportsOrder=I;exports.default=F;
