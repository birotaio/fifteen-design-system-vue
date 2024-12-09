"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("../constants/colors.js"),a=require("../components/FBreadcrumbs.js");;/* empty css                           */const m={title:"Components/FBreadcrumbs",component:a,argTypes:{activeItemColor:{type:"select",options:t.colorDesignTokens},itemsColor:{type:"select",options:t.colorDesignTokens},color:{type:"select",options:t.colorDesignTokens}}},o=c=>({components:{FBreadcrumbs:a},setup:()=>({args:c}),template:'<FBreadcrumbs v-bind="args" />'}),e=o.bind({});e.args={items:[{text:"Guide"}]};const r=o.bind({});r.args={items:[{text:"Guide"},{text:"Operators"},{text:"9 ways to boost user retention"}],activeItemColor:"info"};const s=o.bind({});s.args={items:[{text:"Guide",href:"/resources/guides"},{text:"Operators"},{text:"9 ways to boost user retention"},{text:"Another level"},{text:"Last level"}]};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
})`,...s.parameters?.docs?.source}}};const n=["OneItem","ThreeItems","FiveItems"];exports.FiveItems=s;exports.OneItem=e;exports.ThreeItems=r;exports.__namedExportsOrder=n;exports.default=m;
