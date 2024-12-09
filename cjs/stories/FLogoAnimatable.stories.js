"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const s=require("../components/FLogoAnimatable.js");;/* empty css                              */const n=require("../constants/colors.js"),i={title:"Components/FLogoAnimatable",component:s,argTypes:{color:{type:"select",options:n.colorDesignTokens}}},a=t=>({components:{FLogoAnimatable:s},setup:()=>({args:t}),template:'<FLogoAnimatable v-bind="args" />'}),e=a.bind({});e.args={width:140};const o=a.bind({});o.args={width:140,color:"success"};const r=a.bind({});r.args={width:140,color:"success",delta:{4:200,6:500,12:320}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,...r.parameters?.docs?.source}}};const c=["Normal","Color","GrowLines"];exports.Color=o;exports.GrowLines=r;exports.Normal=e;exports.__namedExportsOrder=c;exports.default=i;
