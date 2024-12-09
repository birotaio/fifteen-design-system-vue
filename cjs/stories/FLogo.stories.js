"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("../components/FLogo.js");;/* empty css                    */const p=require("../constants/colors.js"),i=["vertical","horizontal","text-only","image-only","product"],g={title:"Components/FLogo",component:c,argTypes:{color:{type:"select",options:p.colorDesignTokens},variant:{type:"select",options:i}}},a=n=>({components:{FLogo:c},setup:()=>({args:n}),template:'<FLogo v-bind="args" />'}),o=a.bind({});o.args={width:"200px"};const e=a.bind({});e.args={width:"140px",variant:"vertical",color:"success"};const r=a.bind({});r.args={width:"140px",variant:"image-only",color:"secondary"};const s=a.bind({});s.args={width:"200px",variant:"text-only",color:"info"};const t=a.bind({});t.args={width:"200px",variant:"product",color:"success",productName:"analytics",productNameColor:"success--dark-1"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,...t.parameters?.docs?.source}}};const l=["Horizontal","Vertical","ImageOnly","TextOnly","Product"];exports.Horizontal=o;exports.ImageOnly=r;exports.Product=t;exports.TextOnly=s;exports.Vertical=e;exports.__namedExportsOrder=l;exports.default=g;
