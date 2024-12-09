"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("../components/FGrid.js");;/* empty css                    */const a={title:"Components/FGrid",component:t,argTypes:{columns:{type:"number"},gap:{type:"number"}}},s=i=>({components:{FGrid:t},setup:()=>({args:i}),template:`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>`}),e=s.bind({});e.args={};const r=s.bind({});r.args={columns:7};const n=s.bind({});n.args={gap:32};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
})`,...n.parameters?.docs?.source}}};const o=["Default","Columns","Gutter"];exports.Columns=r;exports.Default=e;exports.Gutter=n;exports.__namedExportsOrder=o;exports.default=a;
