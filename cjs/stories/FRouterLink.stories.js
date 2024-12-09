"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const m=require("../components/router/FRouterLink.js"),k=require("vue"),x=require("@vueuse/core"),F={title:"Components/Router/FRouterLink",component:m,argTypes:{onClick:{action:"click"}}},e=d=>({components:{FRouterLink:m},setup(){const{text:R,...L}=k.toRefs(d),g=x.toReactive(L);return{text:R,props:g}},template:'<FRouterLink v-bind="props">{{ text }}</FRouterLink>'}),r=e.bind({});r.args={text:"Default",location:"/"};const o=e.bind({});o.args={text:"Uppercase",location:"/",uppercase:!0};const s=e.bind({});s.args={text:"Info",color:"info",location:"/"};const n=e.bind({});n.args={text:"Object Location",location:{name:"test"}};const a=e.bind({});a.args={text:"External",color:"warning",location:"https://fifteen.eu"};const c=e.bind({});c.args={text:"AnchorLink",color:"success",location:"#anchor"};const p=e.bind({});p.args={text:"Email Link",color:"info",location:"mailto:?subject=test"};const i=e.bind({});i.args={text:"Disabled",disabled:!0,location:"/"};const u=e.bind({});u.args={text:"Without Arrow",hideArrow:!0,location:"/"};const t=e.bind({});t.parameters={backgrounds:{default:"info"}};t.args={text:"Click me",location:"/test",color:"secondary",hoverColor:"neutral--light-5",arrowHoverColor:"secondary"};const l=e.bind({});l.args={text:"Null Location",location:null};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...u.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,...l.parameters?.docs?.source}}};const b=["Default","Uppercase","Info","ObjectLocation","External","AnchorLink","EmailLink","Disabled","WithoutArrow","ArrowHover","NullLocation"];exports.AnchorLink=c;exports.ArrowHover=t;exports.Default=r;exports.Disabled=i;exports.EmailLink=p;exports.External=a;exports.Info=s;exports.NullLocation=l;exports.ObjectLocation=n;exports.Uppercase=o;exports.WithoutArrow=u;exports.__namedExportsOrder=b;exports.default=F;
