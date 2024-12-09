"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("../components/router/FButtonLink.js"),L=require("vue"),k=require("@vueuse/core"),g={title:"Components/Router/FButtonLink",component:p,argTypes:{onClick:{action:"click"}}},t=u=>({components:{FButtonLink:p},setup(){const{text:l,...m}=L.toRefs(u),d=k.toReactive(m);return{text:l,props:d}},template:'<FButtonLink v-bind="props">{{ text }}</FButtonLink>'}),e=t.bind({});e.args={text:"Default",location:"/"};const o=t.bind({});o.args={text:"Info",color:"info",location:"/"};const s=t.bind({});s.args={text:"Object Location",location:{name:"test"}};const r=t.bind({});r.args={text:"External",color:"warning",location:"https://fifteen.eu"};const n=t.bind({});n.args={text:"AnchorLink",color:"success",location:"#anchor"};const a=t.bind({});a.args={text:"EmailLink",color:"info",location:"mailto:?subject=test"};const c=t.bind({});c.args={text:"Disabled",disabled:!0,location:"/"};const i=t.bind({});i.args={text:"Null Location",location:null};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,...i.parameters?.docs?.source}}};const x=["Default","Info","ObjectLocation","External","AnchorLink","EmailLink","Disabled","NullLocation"];exports.AnchorLink=n;exports.Default=e;exports.Disabled=c;exports.EmailLink=a;exports.External=r;exports.Info=o;exports.NullLocation=i;exports.ObjectLocation=s;exports.__namedExportsOrder=x;exports.default=g;
