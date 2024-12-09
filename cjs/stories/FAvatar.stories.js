"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const c=require("../components/FAvatar.js");;/* empty css                      */const n={title:"Components/FAvatar",component:c,argTypes:{useWindowSize:{options:["medium","large"]}}},o=p=>({components:{FAvatar:c},setup:()=>({args:p}),template:'<FAvatar v-bind="args" />'}),a=o.bind({});a.args={src:"https://i.pravatar.cc/48?img=12",alt:"Some random avatar",size:24};const r=o.bind({});r.args={src:"https://i.pravatar.cc/160?img=35",alt:"Some random avatar"};const e=o.bind({});e.args={src:"https://i.pravatar.cc/364?img=7",alt:"Some random avatar",size:192};const t=o.bind({});t.args={src:"https://i.pravatar.cc/364?img=9",placeholder:"https://i.pravatar.cc/10?img=9",alt:"Some random avatar",size:192};const s=o.bind({});s.args={size:48,letter:"J",color:"secondary",textColor:"neutral--light-5"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,...s.parameters?.docs?.source}}};const i=["Tiny","Small","Large","Lazy","Initials"];exports.Initials=s;exports.Large=e;exports.Lazy=t;exports.Small=r;exports.Tiny=a;exports.__namedExportsOrder=i;exports.default=n;
