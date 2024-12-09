"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("vue"),c=require("../components/FMenu.js");;/* empty css                    */const F=require("../components/FButton.js");;/* empty css                      */const M=require("../components/FLink.js");;/* empty css                    */const O={title:"Components/FMenu",component:c},n=[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}],m=e=>({components:{FMenu:c,FButton:F},setup:()=>({args:e}),template:`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>`}),a=m.bind({});a.args={options:n};const o=m.bind({});o.args={options:[{label:"Acquisition",description:"A description about acquisition",value:"acquisition"},{label:"Benefits",description:"A description about benefits",value:"benefits"},{label:"Data",value:"data"}]};const s=m.bind({});s.args={options:n,disabled:!0};const i=m.bind({});i.args={options:n,offsetSkid:24,offsetDistance:48};const r=m.bind({});r.args={options:n,optionHeight:32};const b=()=>({components:{FMenu:c,FButton:F},setup:()=>{let e;const t=d.ref([]),v=d.ref(!1);return d.watch(v,g=>{e&&clearTimeout(e),g?e=setTimeout(()=>t.value=n,1e3):e=setTimeout(()=>t.value=[],250)}),{updatingOptions:t,isOpen:v}},template:`
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" v-model="isOpen">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>
`}),l=b.bind({}),f=e=>({components:{FMenu:c,FButton:F},setup:()=>{const t=d.ref(!1);return setInterval(()=>t.value=!t.value,2e3),{isOpen:t,args:e}},template:`
<FMenu v-model="isOpen" v-bind="args">
  <template #activator>
    <div>Menu is {{ isOpen ? 'open' : 'closed' }}</div>
  </template>
</FMenu>`}),p=f.bind({});p.args={options:n};const B=e=>({components:{FMenu:c,FLink:M,FButton:F},setup:()=>({args:e}),template:`
<FMenu v-bind="args">
  <template #activator>
    <FLink tabindex="0">Open Menu</FLink>
  </template>
  <template #option="scope">
    <div v-if="scope.option.value === 'benefits'">
      <span>Conditionnally</span>
      <a href="/">Click me I'm a link</a>
    </div>
    <template v-else>
      <h6>I can render any option with scope:</h6>
      <pre><caption>{{ scope }}</caption></pre>
    </template>
  </template>
</FMenu>`}),u=B.bind({});u.args={options:n,optionHeight:180,preventSelection:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const updatingOptions = ref<FMenuOption[]>([]);
    const isOpen = ref(false);
    watch(isOpen, (value: boolean) => {
      if (timeout) clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => updatingOptions.value = options, 1000);
      } else {
        timeout = setTimeout(() => updatingOptions.value = [], 250);
      }
    });
    return {
      updatingOptions,
      isOpen
    };
  },
  template: \`
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" v-model="isOpen">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>
\`
})`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => {
    const isOpen = ref(false);
    setInterval(() => isOpen.value = !isOpen.value, 2000);
    return {
      isOpen,
      args
    };
  },
  template: \`
<FMenu v-model="isOpen" v-bind="args">
  <template #activator>
    <div>Menu is {{ isOpen ? 'open' : 'closed' }}</div>
  </template>
</FMenu>\`
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FMenuProps) => ({
  components: {
    FMenu,
    FLink,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FLink tabindex="0">Open Menu</FLink>
  </template>
  <template #option="scope">
    <div v-if="scope.option.value === 'benefits'">
      <span>Conditionnally</span>
      <a href="/">Click me I'm a link</a>
    </div>
    <template v-else>
      <h6>I can render any option with scope:</h6>
      <pre><caption>{{ scope }}</caption></pre>
    </template>
  </template>
</FMenu>\`
})`,...u.parameters?.docs?.source}}};const _=["Default","WithDescriptions","Disabled","Offsets","OptionHeight","AutoPlacement","ToggleExternally","OptionSlot"];exports.AutoPlacement=l;exports.Default=a;exports.Disabled=s;exports.Offsets=i;exports.OptionHeight=r;exports.OptionSlot=u;exports.ToggleExternally=p;exports.WithDescriptions=o;exports.__namedExportsOrder=_;exports.default=O;
