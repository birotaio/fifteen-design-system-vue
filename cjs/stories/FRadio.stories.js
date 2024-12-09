"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("../components/form/FRadio.js");;/* empty css                          */const u=require("../components/FButton.js");;/* empty css                      */const p=require("vue"),m={title:"Components/Form/FRadio",component:i},c=e=>({components:{FRadio:i},setup:()=>({args:e}),template:'<FRadio v-bind="args" />'}),a=c.bind({});a.args={label:"Check me",value:"check-me",name:"radio"};const t=c.bind({});t.args={label:"A disabled one",disabled:!0,name:"radio"};const r=c.bind({});r.args={label:"Receive our monthly newsletter",hint:"Check this if you want to receive our amazing newsletter",value:"newsletter",name:"radio"};const F=e=>({components:{FRadio:i},setup:()=>({args:e}),template:`
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/smart-station" target="_blank" style="color:var(--color--primary);">smart station</a>
    </template>
  </FRadio>
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/electric-bike" target="_blank" style="color:var(--color--primary);">electric bikes</a>
    </template>
  </FRadio>`}),o=F.bind({});o.args={name:"checkbox"};const s=c.bind({});s.args={label:"I agree with the privacy policy",value:"privacy-policy",errorMessage:"Select the radio button to dismiss the error",rules:[e=>e==="privacy-policy"],validateOnMount:!0,name:"radio"};const g=e=>({components:{FRadio:i,FButton:u},setup(){const l=p.ref();function d(){l.value?.focus()}return{args:e,focus:d,radioRef:l}},template:`
<div>
  <FRadio ref="radioRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),n=g.bind({});n.args={label:"Focus me by clicking on the button",name:"radio"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio
  },
  setup: () => ({
    args
  }),
  template: '<FRadio v-bind="args" />'
})`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio
  },
  setup: () => ({
    args
  }),
  template: '<FRadio v-bind="args" />'
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio
  },
  setup: () => ({
    args
  }),
  template: '<FRadio v-bind="args" />'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio
  },
  setup: () => ({
    args
  }),
  template: \`
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/smart-station" target="_blank" style="color:var(--color--primary);">smart station</a>
    </template>
  </FRadio>
  <FRadio v-bind="args">
    <template v-slot:label>
      Fifteen <a href="https://fifteen.eu/fr/electric-bike" target="_blank" style="color:var(--color--primary);">electric bikes</a>
    </template>
  </FRadio>\`
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio
  },
  setup: () => ({
    args
  }),
  template: '<FRadio v-bind="args" />'
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FRadioProps) => ({
  components: {
    FRadio,
    FButton
  },
  setup() {
    const radioRef = ref();
    function focus() {
      radioRef.value?.focus();
    }
    return {
      args,
      focus,
      radioRef
    };
  },
  template: \`
<div>
  <FRadio ref="radioRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...n.parameters?.docs?.source}}};const b=["Default","Disabled","WithHint","WithLinks","Error","FocusProgrammatically"];exports.Default=a;exports.Disabled=t;exports.Error=s;exports.FocusProgrammatically=n;exports.WithHint=r;exports.WithLinks=o;exports.__namedExportsOrder=b;exports.default=m;
