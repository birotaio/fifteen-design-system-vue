"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const a=require("./components/FsIconGrid.js");;/* empty css                        */const n=require("../constants/colors.js"),c={title:"Components/FIcon",component:a,argTypes:{color:{type:"select",options:n.colorDesignTokens},size:{type:"number"}},args:{size:44,strokeWidth:0}},o=t=>({components:{FsIconGrid:a},setup:()=>({args:t}),template:'<FsIconGrid v-bind="args" />'}),e=o.bind({});e.args={color:"primary"};const r=o.bind({});r.args={color:"secondary"};const s=o.bind({});s.args={color:"danger"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
})`,...s.parameters?.docs?.source}}};const d=["Default","Secondary","Danger"];exports.Danger=s;exports.Default=e;exports.Secondary=r;exports.__namedExportsOrder=d;exports.default=c;
