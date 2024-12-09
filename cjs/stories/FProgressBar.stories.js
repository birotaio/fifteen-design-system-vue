"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("../constants/colors.js"),s=require("../components/FProgressBar.js");;/* empty css                           */const n={title:"Components/FProgressBar",component:s,argTypes:{color:{type:"select",options:t.colorDesignTokens}}},o=a=>({components:{FProgressBar:s},setup:()=>({args:a}),template:'<FProgressBar v-bind="args" />'}),r=o.bind({});r.args={value:20};const e=o.bind({});e.args={color:"info",height:"20px",value:60};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FProgressBarProps) => ({
  components: {
    FProgressBar
  },
  setup: () => ({
    args
  }),
  template: '<FProgressBar v-bind="args" />'
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FProgressBarProps) => ({
  components: {
    FProgressBar
  },
  setup: () => ({
    args
  }),
  template: '<FProgressBar v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const p=["Default","Larger"];exports.Default=r;exports.Larger=e;exports.__namedExportsOrder=p;exports.default=n;
