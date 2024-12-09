"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("../components/FCard.js");;/* empty css                    */const o=require("../constants/colors.js"),i={title:"Components/FCard",component:t,argTypes:{color:{type:"select",options:o.colorDesignTokens},hoverColor:{type:"select",options:o.colorDesignTokens},textColor:{type:"select",options:o.colorDesignTokens},hoverTextColor:{type:"select",options:o.colorDesignTokens}}},s=a=>({components:{FCard:t},setup:()=>({args:a}),template:'<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'}),e=s.bind({});e.args={width:"800px",color:"info",text:"“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”"};const r=s.bind({});r.args={width:"800px",color:"info",hoverColor:"secondary",text:"“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”",textColor:"neutral--light-5",hoverTextColor:"primary"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FCardProps) => ({
  components: {
    FCard
  },
  setup: () => ({
    args
  }),
  template: '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'
})`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FCardProps) => ({
  components: {
    FCard
  },
  setup: () => ({
    args
  }),
  template: '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'
})`,...r.parameters?.docs?.source}}};const n=["Default","Hover"];exports.Default=e;exports.Hover=r;exports.__namedExportsOrder=n;exports.default=i;
