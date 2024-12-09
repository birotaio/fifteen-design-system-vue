"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("../components/form/FToggle.js");;/* empty css                           */const d=require("../components/FButton.js");;/* empty css                      */const F=require("vue"),v={title:"Components/Form/FToggle",component:i},p=e=>({components:{FToggle:i},setup:()=>({args:e}),template:'<FToggle v-bind="args" />'}),r=p.bind({});r.args={label:"Check me"};const t=p.bind({});t.args={label:"The toggle is disabled",disabled:!0};const o=p.bind({});o.args={label:"Receive our monthly newsletter",hint:"Toggle on if you want to receive our amazing newsletter"};const T=e=>({components:{FToggle:i},setup:()=>({args:e}),template:`<FToggle v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FToggle>`}),a=T.bind({});a.args={};const s=p.bind({});s.args={label:"I agree with the privacy policy",errorMessage:"Check the checkbox to dismiss the error",rules:[e=>e===!0],validateOnMount:!0};const b=e=>({components:{FToggle:i,FButton:d},setup(){const u=F.ref();function m(){u.value?.focus()}return{args:e,focus:m,toggleRef:u}},template:`
<div>
  <FToggle ref="toggleRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),n=b.bind({});n.args={label:"Focus me by clicking on the button"};const l=p.bind({});l.args={label:"I agree with the privacy policy",noCheckmarkIcon:!0};const f=e=>({components:{FToggle:i},setup:()=>({args:e}),template:`
<div style="width: 325px;">
  <FToggle v-bind="args" />
</div>`}),g=f.bind({});g.args={label:"I agree with the privacy policy",reverse:!0};const c=p.bind({});c.args={label:"I agree with the privacy policy",smallText:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: \`<FToggle v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FToggle>\`
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle,
    FButton
  },
  setup() {
    const toggleRef = ref();
    function focus() {
      toggleRef.value?.focus();
    }
    return {
      args,
      focus,
      toggleRef
    };
  },
  template: \`
<div>
  <FToggle ref="toggleRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: \`
<div style="width: 325px;">
  <FToggle v-bind="args" />
</div>\`
})`,...g.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,...c.parameters?.docs?.source}}};const h=["Default","Disabled","WithHint","WithLinks","Error","FocusProgrammatically","NoCheckmarkIcon","Reverse","SmallText"];exports.Default=r;exports.Disabled=t;exports.Error=s;exports.FocusProgrammatically=n;exports.NoCheckmarkIcon=l;exports.Reverse=g;exports.SmallText=c;exports.WithHint=o;exports.WithLinks=a;exports.__namedExportsOrder=h;exports.default=v;
