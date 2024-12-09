"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const g=require("../../ui/FDebugMenu.js");;/* empty css                    */const t=require("vue"),D={title:"UI/FDebugMenu",component:g,argTypes:{useWindowSize:{options:["medium","large"]}}},r=p=>({components:{FDebugMenu:g},setup:()=>({args:p}),template:'<FDebugMenu v-bind="args" />'}),i=r.bind({});i.args={};const n=r.bind({});n.args={modelValue:!0};const o=r.bind({});o.args={name:"Custom name 🪲"};const s=r.bind({});s.args={snapMode:"free"};const a=r.bind({});a.args={snapMode:"edges"};const c=r.bind({});c.args={snapMode:"corners"};const l=r.bind({});l.args={config:[{title:"Favorite debug group",items:[{type:"content",title:"Huge overflowing content",content:"This is a very long content that will overflow the debug menu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec dui nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi. Sed nec nunc nec libero lacinia tincidunt. Nulla facilisi."}]}],maxWidth:"733px"};const b=p=>({components:{FDebugMenu:g},setup:()=>{const f=t.ref(!1),m=t.ref(!0),h=t.ref(),y=t.ref("World"),S=t.ref(),T=t.ref("Hallo"),M=t.ref({projects:[{name:"Project 1",description:"This is a project"},{name:"Project 2",description:"This is another project"}]}),F=[{title:"A debug group",expanded:!0,items:[{type:"trigger",title:"First test action",description:"This one will succeed",triggerText:"Call",action:async()=>(await new Promise(e=>setTimeout(e,2e3)),"Success message after waiting 2 seconds")},{type:"trigger",title:"Second test action",description:"But this one will fail",triggerText:"Try",action:()=>{throw new Error("When I throw, the error is handled and displayed")}},{type:"trigger",title:"Third test action, no description",triggerText:"Launch",action:()=>"Launched to Mars"},{type:"trigger",title:"Fourth test action",description:"This is disabled",triggerText:"Call",disabled:!0,action:()=>{}}]},{title:"Another debug group",expanded:!0,items:[{type:"toggle",title:"First test toggle",description:"I can have a wonderful description too",ref:f},{type:"toggle",title:"Second test toggle",description:"I can be disabled",disabled:!0,ref:m},{type:"input",title:"Free input",description:"With placeholder, stored locally",placeholder:"Type here",ref:h,localStorageKey:"greetings"},{type:"input",title:"Second input",description:"This one is disabled and prefilled",disabled:!0,ref:y},{type:"select",title:"Select clearable with placeholder",placeholder:"Choose...",clearable:!0,options:["Me","Moi","Ich"].map(e=>({value:e,label:e})),ref:S},{type:"select",title:"Second select",description:"This one is disabled and prefilled",disabled:!0,options:["Hello","Bonjour","Hallo"].map(e=>({value:e,label:e})),ref:T}]},{title:"A third group",items:[{type:"content",title:"I can display config",content:M}]}];return{args:p,config:F}},template:'<FDebugMenu :config="config" v-bind="args" />'}),d=b.bind({});d.args={};const u=b.bind({});u.args={color:"royalblue",textColor:"danger--light-1",controlColor:"secondary"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => ({
    args
  }),
  template: '<FDebugMenu v-bind="args" />'
})`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => {
    const testToggle1 = ref(false);
    const testToggle2 = ref(true);
    const refInput1 = ref<string>();
    const refInput2 = ref('World');
    const refSelect1 = ref<string>();
    const refSelect2 = ref('Hallo');
    const testContent = ref({
      projects: [{
        name: 'Project 1',
        description: 'This is a project'
      }, {
        name: 'Project 2',
        description: 'This is another project'
      }]
    });
    const config: DebugMenuConfig = [{
      title: 'A debug group',
      expanded: true,
      items: [{
        type: 'trigger',
        title: 'First test action',
        description: 'This one will succeed',
        triggerText: 'Call',
        action: async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          return 'Success message after waiting 2 seconds';
        }
      }, {
        type: 'trigger',
        title: 'Second test action',
        description: 'But this one will fail',
        triggerText: 'Try',
        action: () => {
          throw new Error('When I throw, the error is handled and displayed');
        }
      }, {
        type: 'trigger',
        title: 'Third test action, no description',
        triggerText: 'Launch',
        action: () => 'Launched to Mars'
      }, {
        type: 'trigger',
        title: 'Fourth test action',
        description: 'This is disabled',
        triggerText: 'Call',
        disabled: true,
        action: () => {}
      }]
    }, {
      title: 'Another debug group',
      expanded: true,
      items: [{
        type: 'toggle',
        title: 'First test toggle',
        description: 'I can have a wonderful description too',
        ref: testToggle1
      }, {
        type: 'toggle',
        title: 'Second test toggle',
        description: 'I can be disabled',
        disabled: true,
        ref: testToggle2
      }, {
        type: 'input',
        title: 'Free input',
        description: 'With placeholder, stored locally',
        placeholder: 'Type here',
        ref: refInput1,
        localStorageKey: 'greetings'
      }, {
        type: 'input',
        title: 'Second input',
        description: 'This one is disabled and prefilled',
        disabled: true,
        ref: refInput2
      }, {
        type: 'select',
        title: 'Select clearable with placeholder',
        placeholder: 'Choose...',
        clearable: true,
        options: ['Me', 'Moi', 'Ich'].map(text => ({
          value: text,
          label: text
        })),
        ref: refSelect1
      }, {
        type: 'select',
        title: 'Second select',
        description: 'This one is disabled and prefilled',
        disabled: true,
        options: ['Hello', 'Bonjour', 'Hallo'].map(text => ({
          value: text,
          label: text
        })),
        ref: refSelect2
      }]
    }, {
      title: 'A third group',
      items: [{
        type: 'content',
        title: 'I can display config',
        content: testContent
      }]
    }];
    return {
      args,
      config
    };
  },
  template: '<FDebugMenu :config="config" v-bind="args" />'
})`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FDebugMenuProps) => ({
  components: {
    FDebugMenu
  },
  setup: () => {
    const testToggle1 = ref(false);
    const testToggle2 = ref(true);
    const refInput1 = ref<string>();
    const refInput2 = ref('World');
    const refSelect1 = ref<string>();
    const refSelect2 = ref('Hallo');
    const testContent = ref({
      projects: [{
        name: 'Project 1',
        description: 'This is a project'
      }, {
        name: 'Project 2',
        description: 'This is another project'
      }]
    });
    const config: DebugMenuConfig = [{
      title: 'A debug group',
      expanded: true,
      items: [{
        type: 'trigger',
        title: 'First test action',
        description: 'This one will succeed',
        triggerText: 'Call',
        action: async () => {
          await new Promise(resolve => setTimeout(resolve, 2000));
          return 'Success message after waiting 2 seconds';
        }
      }, {
        type: 'trigger',
        title: 'Second test action',
        description: 'But this one will fail',
        triggerText: 'Try',
        action: () => {
          throw new Error('When I throw, the error is handled and displayed');
        }
      }, {
        type: 'trigger',
        title: 'Third test action, no description',
        triggerText: 'Launch',
        action: () => 'Launched to Mars'
      }, {
        type: 'trigger',
        title: 'Fourth test action',
        description: 'This is disabled',
        triggerText: 'Call',
        disabled: true,
        action: () => {}
      }]
    }, {
      title: 'Another debug group',
      expanded: true,
      items: [{
        type: 'toggle',
        title: 'First test toggle',
        description: 'I can have a wonderful description too',
        ref: testToggle1
      }, {
        type: 'toggle',
        title: 'Second test toggle',
        description: 'I can be disabled',
        disabled: true,
        ref: testToggle2
      }, {
        type: 'input',
        title: 'Free input',
        description: 'With placeholder, stored locally',
        placeholder: 'Type here',
        ref: refInput1,
        localStorageKey: 'greetings'
      }, {
        type: 'input',
        title: 'Second input',
        description: 'This one is disabled and prefilled',
        disabled: true,
        ref: refInput2
      }, {
        type: 'select',
        title: 'Select clearable with placeholder',
        placeholder: 'Choose...',
        clearable: true,
        options: ['Me', 'Moi', 'Ich'].map(text => ({
          value: text,
          label: text
        })),
        ref: refSelect1
      }, {
        type: 'select',
        title: 'Second select',
        description: 'This one is disabled and prefilled',
        disabled: true,
        options: ['Hello', 'Bonjour', 'Hallo'].map(text => ({
          value: text,
          label: text
        })),
        ref: refSelect2
      }]
    }, {
      title: 'A third group',
      items: [{
        type: 'content',
        title: 'I can display config',
        content: testContent
      }]
    }];
    return {
      args,
      config
    };
  },
  template: '<FDebugMenu :config="config" v-bind="args" />'
})`,...u.parameters?.docs?.source}}};const x=["Default","Open","Name","SnapFree","SnapEdges","SnapCorners","MaxWidth","Config","Colors"];exports.Colors=u;exports.Config=d;exports.Default=i;exports.MaxWidth=l;exports.Name=o;exports.Open=n;exports.SnapCorners=c;exports.SnapEdges=a;exports.SnapFree=s;exports.__namedExportsOrder=x;exports.default=D;