"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../components/form/FInput.js");;/* empty css                          */const b=require("../components/FButton.js");;/* empty css                      */const f=require("@vee-validate/rules"),I=require("../rules/mask.js"),h=require("vue"),v={title:"Components/Form/FInput",component:m,argTypes:{onClick:{action:"click"},onFocus:{action:"focus"},onBlur:{action:"blur"},onChange:{action:"change"},onInput:{action:"input"}}},e=r=>({components:{FInput:m},setup:()=>({args:r}),template:'<FInput v-bind="args" />'}),s=e.bind({});s.parameters={backgrounds:{default:"primary"}};s.args={placeholder:"Email address"};const a=e.bind({});a.parameters={backgrounds:{default:"primary"}};a.args={label:"Email address",placeholder:"contact@fifteen.eu"};const t=e.bind({});t.parameters={backgrounds:{default:"success"}};t.args={placeholder:"Email address",hint:"You can use your personal or professional email"};const o=e.bind({});o.parameters={backgrounds:{default:"success"}};o.args={label:"Email address",placeholder:"contact@fifteen.eu",hint:"You can use your personal or professional email"};const n=e.bind({});n.parameters={backgrounds:{default:"secondary"}};n.args={placeholder:"Fifteen",labelTextColor:"neutral--light-5",rules:[r=>r==="Fifteen"],errorMessage:'Type "Fifteen" to dismiss the input',validateOnMount:!0};const u=e.bind({});u.args={placeholder:"Email address",errorColor:"danger",hint:"You can use your personal or professional email",disabled:!0};const p=e.bind({});p.args={placeholder:"Email address",errorColor:"danger",hint:"You can use your personal or professional email",loading:!0};const c=e.bind({});c.args={placeholder:"Email address",errorColor:"danger",hint:"Clear the input clicking on the cross icon",clearable:!0};const i=e.bind({});i.args={label:"Birth date",placeholder:"DD/MM/YYYY",mask:"##/##/####",errorColor:"danger",errorMessage:"Birth date is not valid",rules:[f.required,r=>I.mask(r,"##/##/####")]};const l=e.bind({});l.args={placeholder:"Number",type:"number"};const _=r=>({components:{FInput:m,FButton:b},setup:()=>{const g=h.ref();function F(){g.value?.focus()}return{args:r,focus:F,inputRef:g}},template:`
<div>
  <FInput ref="inputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),d=_.bind({});s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput
  },
  setup: () => ({
    args
  }),
  template: '<FInput v-bind="args" />'
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FInputProps) => ({
  components: {
    FInput,
    FButton
  },
  setup: () => {
    const inputRef = ref();
    function focus() {
      inputRef.value?.focus();
    }
    return {
      args,
      focus,
      inputRef
    };
  },
  template: \`
<div>
  <FInput ref="inputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...d.parameters?.docs?.source}}};const y=["Default","WithLabel","WithHint","Full","Error","Disabled","Loading","Clearable","Mask","TypeNumber","FocusProgrammatically"];exports.Clearable=c;exports.Default=s;exports.Disabled=u;exports.Error=n;exports.FocusProgrammatically=d;exports.Full=o;exports.Loading=p;exports.Mask=i;exports.TypeNumber=l;exports.WithHint=t;exports.WithLabel=a;exports.__namedExportsOrder=y;exports.default=v;
