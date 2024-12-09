"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const r=require("./components/FsFlagGrid.js");;/* empty css                        */const t={title:"Components/FFlagIcon",component:r},a=s=>({components:{FsFlagGrid:r},setup:()=>({args:s}),template:'<FsFlagGrid v-bind="args" />'}),e=a.bind({});e.args={size:32};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FsFlagGridProps) => ({
  components: {
    FsFlagGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsFlagGrid v-bind="args" />'
})`,...e.parameters?.docs?.source}}};const o=["Default"];exports.Default=e;exports.__namedExportsOrder=o;exports.default=t;
