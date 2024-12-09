"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../components/FImage.js");;/* empty css                     */const u={title:"Components/FImage",component:m},e=g=>({components:{FImage:m},setup:()=>({args:g}),template:'<FImage v-bind="args" />'}),r=e.bind({});r.args={src:"https://picsum.photos/seed/picsum/400/400",placeholder:"https://picsum.photos/seed/picsum/20/20",height:"400px",width:"400px",alt:""};const s=e.bind({});s.args={width:"400px",height:"600px",src:"https://picsum.photos/seed/picsum/400/600",alt:"",corners:"sharp"};const a=e.bind({});a.args={width:"400px",height:"400px",src:"https://picsum.photos/seed/picsum/400/400",alt:"",corners:"circular"};const o=e.bind({});o.args={width:"100%",src:"https://picsum.photos/seed/picsum/1200/1200",alt:""};const t=e.bind({});t.args={width:"100%",height:"400px",src:"",alt:""};const p=e.bind({});p.args={width:"100%",height:"400px",src:"https://picsum.photos/seed/picsum/1200/1200",alt:"",backgroundColor:"secondary"};const c=e.bind({});c.args={width:"200px",height:"200px",src:"",alt:"",backgroundColor:"primary"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FImageProps) => ({
  components: {
    FImage
  },
  setup: () => ({
    args
  }),
  template: '<FImage v-bind="args" />'
})`,...c.parameters?.docs?.source}}};const n=["Default","SharpCorners","Circular","FullWidth","NoSource","Background","NoSourceBackground"];exports.Background=p;exports.Circular=a;exports.Default=r;exports.FullWidth=o;exports.NoSource=t;exports.NoSourceBackground=c;exports.SharpCorners=s;exports.__namedExportsOrder=n;exports.default=u;
