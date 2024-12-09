"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("../components/FDivider.js");;/* empty css                       */const d=require("../constants/colors.js"),p={title:"Components/FDivider",component:i,argTypes:{color:{type:"select",options:d.colorDesignTokens}}},o=c=>({components:{FDivider:i},setup:()=>({args:c}),template:'<FDivider v-bind="args" />'}),t=o.bind({}),r=o.bind({});r.args={vertical:!0,height:"400px",color:"danger--dark-1"};const e=o.bind({});e.parameters={backgrounds:{default:"secondary"}};e.args={theme:"light"};const s=o.bind({});s.args={theme:"dark"};const a=o.bind({});a.args={color:"primary"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,...a.parameters?.docs?.source}}};const n=["Default","Vertical","Light","Dark","Primary"];exports.Dark=s;exports.Default=t;exports.Light=e;exports.Primary=a;exports.Vertical=r;exports.__namedExportsOrder=n;exports.default=p;
