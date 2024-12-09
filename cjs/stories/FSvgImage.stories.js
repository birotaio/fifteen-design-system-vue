"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const n=require("./assets/pony.js"),p=require("./assets/pony2.js"),t=require("../constants/colors.js"),a=require("../components/FSvgImage.js");;/* empty css                        */const c={title:"Components/FSvgImage",component:a,argTypes:{fillColor:{type:"select",options:["","none",...t.colorDesignTokens]},strokeColor:{type:"select",options:["","none",...t.colorDesignTokens]}}},s=g=>({components:{FSvgImage:a},setup:()=>({args:g}),template:'<FSvgImage v-bind="args" />'}),e=s.bind({});e.args={component:n.default,alt:"component svg",fillColor:"primary",width:"240",height:"80"};const r=s.bind({});r.args={markup:p,alt:"markup svg",fillColor:"primary",width:"240",height:"80"};const o=s.bind({});o.args={src:"https://placeholder.pics/svg/24",alt:"src svg",fillColor:"primary",width:"24",height:"24"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,...o.parameters?.docs?.source}}};const m=["SvgComponent","SvgMarkup","SvgSrc"];exports.SvgComponent=e;exports.SvgMarkup=r;exports.SvgSrc=o;exports.__namedExportsOrder=m;exports.default=c;
