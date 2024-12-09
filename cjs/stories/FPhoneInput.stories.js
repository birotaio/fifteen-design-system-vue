"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const h=require("@vee-validate/rules"),i=require("../components/form/FPhoneInput.js");;/* empty css                               */const l=require("../components/FButton.js");;/* empty css                      */const g=require("vue"),F={title:"Components/Form/FPhoneInput",component:i},e=c=>({components:{FPhoneInput:i},setup:()=>({args:c}),template:'<FPhoneInput v-bind="args" />'}),r=e.bind({});r.args={errorMessage:"The phone number does not match the expected format",rules:[h.required]};const t=e.bind({});t.args={label:"Enter your phone number",errorMessage:"The phone number does not match the expected format"};const n=e.bind({});n.args={hint:"Don't forget to pick the right prefix",errorMessage:"The phone number does not match the expected format"};const o=e.bind({});o.args={label:"Enter your phone number",hint:"Don't forget to pick the right prefix",errorMessage:"The phone number does not match the expected format"};const s=e.bind({});s.args={label:"Enter your phone number",validateOnMount:!0,errorMessage:"A phone number is required. Enter any valid number to dismiss the error",rules:[h.required]};const a=e.bind({});a.args={label:"Enter your phone number",hint:"Don't forget to pick the right prefix",disabled:!0};const b=c=>({components:{FPhoneInput:i,FButton:l},setup(){const m=g.ref();function d(){m.value?.focus()}return{args:c,focus:d,phoneInputRef:m}},template:`
<div>
  <FPhoneInput ref="phoneInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),p=b.bind({}),u=e.bind({});u.args={label:"Enter you phone number",hint:"Don't forget to pick the right prefix",loading:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput,
    FButton
  },
  setup() {
    const phoneInputRef = ref();
    function focus() {
      phoneInputRef.value?.focus();
    }
    return {
      args,
      focus,
      phoneInputRef
    };
  },
  template: \`
<div>
  <FPhoneInput ref="phoneInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,...u.parameters?.docs?.source}}};const P=["Default","WithLabel","WithHint","Full","Error","Disabled","FocusProgrammatically","Loading"];exports.Default=r;exports.Disabled=a;exports.Error=s;exports.FocusProgrammatically=p;exports.Full=o;exports.Loading=u;exports.WithHint=n;exports.WithLabel=t;exports.__namedExportsOrder=P;exports.default=F;
