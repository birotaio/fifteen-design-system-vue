"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("../components/form/FCheckbox.js");;/* empty css                             */const m=require("../components/FButton.js");;/* empty css                      */const b=require("vue"),d={title:"Components/Form/FCheckbox",component:p},i=e=>({components:{FCheckbox:p},setup:()=>({args:e}),template:'<FCheckbox v-bind="args" />'}),r=i.bind({});r.args={label:"Check me"};const t=i.bind({});t.args={modelValue:null,label:"Indeterminate state"};const o=i.bind({});o.args={label:"A disabled one",disabled:!0};const a=i.bind({});a.args={label:"Receive our monthly newsletter",hint:"Check this if you want to receive our amazing newsletter"};const h=e=>({components:{FCheckbox:p},setup:()=>({args:e}),template:`<FCheckbox v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FCheckbox>`}),s=h.bind({});s.args={};const c=i.bind({});c.args={label:"I agree with the privacy policy",errorMessage:"Check the checkbox to dismiss the error",rules:[e=>e===!0],validateOnMount:!0};const g=e=>({components:{FCheckbox:p,FButton:m},setup(){const l=b.ref();function u(){l.value?.focus()}return{args:e,focus:u,checkboxRef:l}},template:`
<div>
  <FCheckbox ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),n=g.bind({});n.args={label:"Focus me by clicking on the button"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: \`<FCheckbox v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FCheckbox>\`
})`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FCheckboxProps) => ({
  components: {
    FCheckbox,
    FButton
  },
  setup() {
    const checkboxRef = ref();
    function focus() {
      checkboxRef.value?.focus();
    }
    return {
      args,
      focus,
      checkboxRef
    };
  },
  template: \`
<div>
  <FCheckbox ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...n.parameters?.docs?.source}}};const k=["Default","Indeterminate","Disabled","WithHint","WithLinks","Error","FocusProgrammatically"];exports.Default=r;exports.Disabled=o;exports.Error=c;exports.FocusProgrammatically=n;exports.Indeterminate=t;exports.WithHint=a;exports.WithLinks=s;exports.__namedExportsOrder=k;exports.default=d;
