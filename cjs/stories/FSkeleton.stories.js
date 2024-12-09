"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("../components/FSkeleton.js");;/* empty css                        */const d={title:"Components/FSkeleton",component:a},s=n=>({components:{FSkeleton:a},setup:()=>({args:n}),template:'<FSkeleton v-bind="args" />'}),e=s.bind({});e.args={};const r=s.bind({});r.args={rounded:!0};const o=s.bind({});o.args={roundedFull:!0,height:64,width:150};const t=s.bind({});t.args={rounded:!0,backgroundColor:"primary",backgroundColorTo:"primary--light-1",width:"50%"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,...t.parameters?.docs?.source}}};const l=["Default","Rounded","RoundedFull","Colored"];exports.Colored=t;exports.Default=e;exports.Rounded=r;exports.RoundedFull=o;exports.__namedExportsOrder=l;exports.default=d;
