"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const p=require("vue"),u=require("../components/FPopup.js");;/* empty css                     */const r=require("../components/FButton.js");;/* empty css                      */const m={title:"Components/FPopup",component:u},c=e=>({components:{FPopup:u,FButton:r},setup:()=>({args:e}),template:`
    <FPopup v-bind="args">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div>Laboris quis amet aliqua cupidatat.</div>
    </FPopup>`}),o=c.bind({}),n=c.bind({});n.args={disabled:!0};const i=c.bind({});i.args={offsetSkid:24,offsetDistance:48};const v=()=>({components:{FPopup:u,FButton:r},setup:()=>{let e;const t=p.ref(!0),l=p.ref(!1);return p.watch(l,d=>{e&&clearTimeout(e),d?e=setTimeout(()=>t.value=!1,1500):e=setTimeout(()=>t.value=!0,250)}),{loading:t,isOpen:l}},template:`
    <div style="height: 300px"></div>
    <FPopup v-model="isOpen">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div v-if="loading">Loading...</div>
      <div v-else style="max-width: 400px">Laboris quis amet aliqua cupidatat.
        Lorem nulla sunt deserunt fugiat occaecat adipisicing consequat elit.
        Laboris proident laboris sit consequat proident anim occaecat minim deserunt.
        Minim officia dolore duis Lorem quis consectetur nostrud exercitation consequat commodo veniam minim adipisicing.
        Exercitation veniam et duis duis adipisicing culpa. Lorem et tempor qui officia aliquip.
      </div>
    </FPopup>`}),a=v.bind({}),g=e=>({components:{FPopup:u,FButton:r},setup:()=>{const t=p.ref(!1);return setInterval(()=>t.value=!t.value,2e3),{isOpen:t,args:e}},template:`
    <FPopup v-model="isOpen" v-bind="args">
      <template #activator>
        <div>Popup is {{ isOpen ? 'open' : 'closed' }}</div>
      </template>
      <div>Exercitation veniam et duis duis adipisicing culpa.</div>
    </FPopup>`}),s=g.bind({});o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FPopupProps) => ({
  components: {
    FPopup,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
    <FPopup v-bind="args">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div>Laboris quis amet aliqua cupidatat.</div>
    </FPopup>\`
})`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FPopupProps) => ({
  components: {
    FPopup,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
    <FPopup v-bind="args">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div>Laboris quis amet aliqua cupidatat.</div>
    </FPopup>\`
})`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FPopupProps) => ({
  components: {
    FPopup,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
    <FPopup v-bind="args">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div>Laboris quis amet aliqua cupidatat.</div>
    </FPopup>\`
})`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => ({
  components: {
    FPopup,
    FButton
  },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const loading = ref(true);
    const isOpen = ref(false);
    watch(isOpen, (value: boolean) => {
      if (timeout) clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => loading.value = false, 1500);
      } else {
        timeout = setTimeout(() => loading.value = true, 250);
      }
    });
    return {
      loading,
      isOpen
    };
  },
  template: \`
    <div style="height: 300px"></div>
    <FPopup v-model="isOpen">
      <template #activator>
        <FButton>Open Popup</FButton>
      </template>
      <div v-if="loading">Loading...</div>
      <div v-else style="max-width: 400px">Laboris quis amet aliqua cupidatat.
        Lorem nulla sunt deserunt fugiat occaecat adipisicing consequat elit.
        Laboris proident laboris sit consequat proident anim occaecat minim deserunt.
        Minim officia dolore duis Lorem quis consectetur nostrud exercitation consequat commodo veniam minim adipisicing.
        Exercitation veniam et duis duis adipisicing culpa. Lorem et tempor qui officia aliquip.
      </div>
    </FPopup>\`
})`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FPopupProps) => ({
  components: {
    FPopup,
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
    <FPopup v-model="isOpen" v-bind="args">
      <template #activator>
        <div>Popup is {{ isOpen ? 'open' : 'closed' }}</div>
      </template>
      <div>Exercitation veniam et duis duis adipisicing culpa.</div>
    </FPopup>\`
})`,...s.parameters?.docs?.source}}};const F=["Default","Disabled","Offsets","AutoPlacement","ToggleExternally"];exports.AutoPlacement=a;exports.Default=o;exports.Disabled=n;exports.Offsets=i;exports.ToggleExternally=s;exports.__namedExportsOrder=F;exports.default=m;
