"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("../components/form/FLocaleSelect.js");;/* empty css                                 */const L=require("../components/FButton.js");;/* empty css                      */const b=require("vue"),f={title:"Components/Form/FLocaleSelect",component:g,argTypes:{onClick:{action:"click"},onFocus:{action:"focus"},onBlur:{action:"blur"},onChange:{action:"change"},onInput:{action:"input"}}},e=a=>({components:{FLocaleSelect:g},setup:()=>({args:a}),template:'<FLocaleSelect v-bind="args" />'}),r=e.bind({});r.args={modelValue:"fr"};const o=e.bind({});o.args={size:"small",modelValue:"fr"};const s=e.bind({});s.args={modelValue:"fr",localeCodes:["fr","es"]};const t=e.bind({});t.args={modelValue:"es",optionLabelFormat:a=>`app__country_code__${a.toLowerCase()}`,localeCodes:["fr","es"]};const c=e.bind({});c.args={label:"Pick a locale",placeholder:"fr"};const l=e.bind({});l.args={placeholder:"fr",hint:"Pick a locale"};const n=e.bind({});n.args={label:"Pick a locale",placeholder:"fr",hint:"Pick a locale"};const p=e.bind({});p.args={placeholder:"fr",errorColor:"danger",hint:"Clear the input clicking on the cross icon",clearable:!0};const i=e.bind({});i.args={modelValue:"es",rules:[a=>a==="fr"],errorMessage:'Select "fr" to dismiss the error',localeCodes:["fr","pl","es"],validationTrigger:"change",validateOnMount:!0};const u=e.bind({});u.args={placeholder:"fr",disabled:!0};const d=e.bind({});d.args={placeholder:"fr",loading:!0};const v=a=>({components:{FLocaleSelect:g,FButton:L},setup(){const F=b.ref();function S(){F.value?.focus()}return{args:a,focus:S,selectRef:F}},template:`
<div>
  <FLocaleSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),m=v.bind({});m.args={modelValue:"es"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect,
    FButton
  },
  setup() {
    const selectRef = ref();
    function focus() {
      selectRef.value?.focus();
    }
    return {
      args,
      focus,
      selectRef
    };
  },
  template: \`
<div>
  <FLocaleSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...m.parameters?.docs?.source}}};const _=["Default","Small","LimitedLocales","FormattedLabel","WithLabel","WithHint","Full","Clearable","Error","Disabled","Loading","FocusProgrammatically"];exports.Clearable=p;exports.Default=r;exports.Disabled=u;exports.Error=i;exports.FocusProgrammatically=m;exports.FormattedLabel=t;exports.Full=n;exports.LimitedLocales=s;exports.Loading=d;exports.Small=o;exports.WithHint=l;exports.WithLabel=c;exports.__namedExportsOrder=_;exports.default=f;
