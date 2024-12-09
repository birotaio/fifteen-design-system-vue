"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const B=require("../components/FButton.js");;/* empty css                      */const x=require("../components/FIcon.js");;/* empty css                    */const g=require("../constants/colors.js"),b=require("../.generated/utils.js"),v=require("../composables/useIcon.js"),I=require("../.generated/icons.js"),N=require("vue"),f=require("@vueuse/core"),y={title:"Components/FButton",component:B,argTypes:{location:{type:"string"},rel:{type:"string"},color:{type:"select",options:g.colorDesignTokens},focusColor:{type:"select",options:g.colorDesignTokens},hoverColor:{type:"select",options:g.colorDesignTokens},size:{type:"select",options:["tiny","small","medium","large","giant"]},iconName:{type:"select",options:b.getIconList()},onClick:{action:"click"},onFocus:{action:"focus"},onBlur:{action:"blur"}}},t=u=>({components:{FButton:B,FIcon:x},setup(){v.registerIcons("icons",I);const{text:m,iconName:l,...F}=N.toRefs(u),d=f.toReactive(F);return{text:m,iconName:l,props:d}},template:'<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'}),e=t.bind({});e.args={text:"Click me",color:"info",ghost:!1};const o=t.bind({});o.args={text:"Click me",color:"info",disabled:!0};const n=t.bind({});n.args={text:"Click me",color:"#33C5FF",focusColor:"#AAE6FF",hoverColor:"#AAE6FF"};const s=t.bind({});s.args={text:"Ghost",color:"info",ghost:!0};const r=t.bind({});r.args={text:"Outlined",color:"info",outlined:!0};const a=t.bind({});a.args={text:"I am a link",color:"info",href:"https://fifteen.eu",target:"_blank"};const c=t.bind({});c.args={text:"With Icon, go square",color:"info",iconName:"crossSquare"};const i=t.bind({});i.args={color:"info",icon:!0,iconName:"zoovBikeAlt"};const R=u=>({components:{FButton:B,FIcon:x},setup(){v.registerIcons("icons",I);const{text:m,iconName:l,...F}=N.toRefs(u),d=f.toReactive(F);return{text:m,iconName:l,props:d}},template:`
<div style="display:flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
  <FButton v-bind="props" size="tiny"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="small"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="medium"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="large"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="giant"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
</div>
`}),p=R.bind({});p.args={text:"Loading",color:"secondary",iconName:"zoovBikeAlt",loading:!0};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: \`
<div style="display:flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
  <FButton v-bind="props" size="tiny"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="small"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="medium"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="large"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="giant"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
</div>
\`
})`,...p.parameters?.docs?.source}}};const _=["Default","Disabled","AnyColor","Ghost","Outlined","Link","WithIcon","IconOnly","Loading"];exports.AnyColor=n;exports.Default=e;exports.Disabled=o;exports.Ghost=s;exports.IconOnly=i;exports.Link=a;exports.Loading=p;exports.Outlined=r;exports.WithIcon=c;exports.__namedExportsOrder=_;exports.default=y;
