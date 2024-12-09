"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("../components/form/FTextarea.js");;/* empty css                             */const g=require("../components/FButton.js");;/* empty css                      */const F=require("vue"),x={title:"Components/Form/FTextarea",component:d,argTypes:{onClick:{action:"click"},onFocus:{action:"focus"},onBlur:{action:"blur"},onChange:{action:"change"},onInput:{action:"input"}}},e=i=>({components:{FTextarea:d},setup:()=>({args:i}),template:'<FTextarea v-bind="args" />'}),a=e.bind({});a.parameters={backgrounds:{default:"primary"}};a.args={placeholder:"Email address"};const r=e.bind({});r.parameters={backgrounds:{default:"success"}};r.args={label:"Contact motivation",placeholder:"I contact you today because..."};const t=e.bind({});t.parameters={backgrounds:{default:"success"}};t.args={placeholder:"I contact you today because...",hint:"Feel free to write anything"};const s=e.bind({});s.parameters={backgrounds:{default:"success"}};s.args={label:"Contact motivation",placeholder:"I contact you today because...",hint:"Feel free to write anything"};const o=e.bind({});o.parameters={backgrounds:{default:"secondary"}};o.args={placeholder:"Email address",rules:[()=>!1],validateOnMount:!0,hideHint:!0};const n=e.bind({});n.parameters={backgrounds:{default:"secondary"}};n.args={placeholder:"Augmented Bike Networks",rules:[i=>i==="Augmented Bike Networks"],validateOnMount:!0,errorMessage:'Type "Augmented Bike Networks" to dismiss the error'};const c=e.bind({});c.args={placeholder:"Email address",errorColor:"danger",hint:"You can use your personal or professional email",disabled:!0};const u=e.bind({});u.args={placeholder:"Email address",errorColor:"danger",hint:"You can use your personal or professional email",loading:!0};const b=i=>({components:{FTextarea:d,FButton:g},setup(){const l=F.ref();function m(){l.value?.focus()}return{args:i,focus:m,textareaRef:l}},template:`
<div>
  <FTextarea ref="textareaRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),p=b.bind({});a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea
  },
  setup: () => ({
    args
  }),
  template: '<FTextarea v-bind="args" />'
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FTextareaProps) => ({
  components: {
    FTextarea,
    FButton
  },
  setup() {
    const textareaRef = ref();
    function focus() {
      textareaRef.value?.focus();
    }
    return {
      args,
      focus,
      textareaRef
    };
  },
  template: \`
<div>
  <FTextarea ref="textareaRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...p.parameters?.docs?.source}}};const T=["Default","WithLabel","WithHint","Full","Error","ErrorWithHint","Disabled","Loading","FocusProgrammatically"];exports.Default=a;exports.Disabled=c;exports.Error=o;exports.ErrorWithHint=n;exports.FocusProgrammatically=p;exports.Full=s;exports.Loading=u;exports.WithHint=t;exports.WithLabel=r;exports.__namedExportsOrder=T;exports.default=x;
