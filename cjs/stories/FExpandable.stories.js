"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const i=require("../components/FExpandable.js");;/* empty css                          */const d=require("../components/FButton.js");;/* empty css                      */const c={title:"Components/FExpandable",component:i},r="Emissions de CO2",o="En moyenne, un kilomètre parcouru sur un vélo électrique Fifteen économise Xg de CO2. Dans une ville comme Epinal avec 150 vélos électriques en libre-service, nous parlons de Xt de CO2 économisées par an.",l=p=>({components:{FExpandable:i},setup:()=>({args:p}),template:`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>`}),e=l.bind({});e.args={title:r,text:o};const t=l.bind({});t.args={title:r,text:o,gap:8};const n=l.bind({});n.args={title:r,text:o,iconScale:.75};const m=p=>({components:{FExpandable:i,FButton:d},setup:()=>({args:p}),template:`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h6>{{ args.title }}</h6>
        <p>I am the title slot</p>
      </template>
      <div>{{ args.text }}</div>
      <FButton style="margin-top: 16px">Hello</FButton>
    </FExpandable>`}),a=m.bind({});a.args={title:r,text:o};const s=l.bind({});s.args={title:r,text:o,withHoverAnimation:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FExpandableProps) => ({
  components: {
    FExpandable,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h6>{{ args.title }}</h6>
        <p>I am the title slot</p>
      </template>
      <div>{{ args.text }}</div>
      <FButton style="margin-top: 16px">Hello</FButton>
    </FExpandable>\`
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,...s.parameters?.docs?.source}}};const u=["Default","ContentGap","IconScale","Slots","WithHoverAnimation"];exports.ContentGap=t;exports.Default=e;exports.IconScale=n;exports.Slots=a;exports.WithHoverAnimation=s;exports.__namedExportsOrder=u;exports.default=c;
