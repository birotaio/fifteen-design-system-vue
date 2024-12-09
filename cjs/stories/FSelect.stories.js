"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const F=require("../components/form/FSelect.js");;/* empty css                           */const C=require("../components/FIcon.js");;/* empty css                    */const y=require("../components/FButton.js");;/* empty css                      */const _=require("../composables/useIcon.js"),q=require("../.generated/icons.js"),P=require("vue"),A={title:"Components/Form/FSelect",component:F},e=a=>({components:{FSelect:F},setup:()=>({args:a}),template:'<FSelect v-bind="args" />'}),o=e.bind({});o.parameters={backgrounds:{default:"neutral"}};o.args={placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const r=e.bind({});r.parameters={backgrounds:{default:"neutral"}};r.args={size:"small",placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const s=e.bind({});s.parameters={backgrounds:{default:"neutral"}};s.args={label:"Pick a topic",placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const l=e.bind({});l.parameters={backgrounds:{default:"neutral"}};l.args={placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}],hint:"Pick a contact motivation"};const n=e.bind({});n.parameters={backgrounds:{default:"neutral"}};n.args={label:"Pick a topic",placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}],hint:"Pick a contact motivation"};const c=e.bind({});c.parameters={backgrounds:{default:"neutral"}};c.args={clearable:!0,placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const B=a=>({components:{FSelect:F,FIcon:C},setup:()=>(_.registerIcons("icons",{arrowRight:q.arrowRight}),{args:a}),template:`
    <FSelect v-bind="args">
      <template #option-prefix>
        <FIcon name="arrowRight" />
      </template>
    </FSelect>`}),i=B.bind({});i.parameters={backgrounds:{default:"neutral"}};i.args={placeholder:"All topics",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}],hint:"Choose a contact motivation"};const u=e.bind({});u.parameters={backgrounds:{default:"neutral"}};u.args={color:"secondary",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",focusColor:"secondary",optionsMenuColor:"secondary",rules:[a=>a==="data"],errorMessage:'Select "data" to dismiss the error',validationTrigger:"change",validateOnMount:!0,clearable:!0,placeholder:"All topics",errorColor:"danger",options:[{label:"Acquisition",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const p=e.bind({});p.parameters={backgrounds:{default:"neutral"}};p.args={emptyText:"No option here",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",color:"secondary",focusColor:"secondary",optionsMenuColor:"secondary",clearable:!0,placeholder:"All topics",options:[],hint:"Pick a contact motivation"};const d=e.bind({});d.parameters={backgrounds:{default:"neutral"}};d.args={color:"secondary",placeholder:"All topics",options:[],disabled:!0};const f=e.bind({});f.args={color:"secondary",placeholder:"All topics",options:[],loading:!0};const m=e.bind({});m.parameters={backgrounds:{default:"neutral"}};m.args={color:"secondary",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",focusColor:"secondary",optionsMenuColor:"secondary",placeholder:"All topics",options:[{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Benefits",value:"benefits"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"acquisition"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"acquisition"},{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit",value:"acquisition"},{label:"Benefits",value:"benefits"},{label:"Data",value:"data"}]};const g=e.bind({});g.parameters={backgrounds:{default:"neutral"}};g.args={color:"secondary",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",focusColor:"secondary",optionsMenuColor:"secondary",placeholder:"All topics",options:new Array(10).fill(null).map((a,t)=>({label:`Option ${t}`,value:`option-${t}`}))};const b=e.bind({});b.parameters={backgrounds:{default:"neutral"}};b.args={preventSelection:!0,color:"secondary",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",focusColor:"secondary",optionsMenuColor:"secondary",placeholder:"All topics",options:new Array(10).fill(null).map((a,t)=>({label:`Option ${t}`,value:`option-${t}`}))};const S=e.bind({});S.parameters={backgrounds:{default:"neutral"}};S.args={menuWidth:200,color:"secondary",placeholderTextColor:"neutral--light-3",optionTextColor:"neutral--light-3",textColor:"neutral--light-5",focusColor:"secondary",optionsMenuColor:"secondary",placeholder:"All topics",options:new Array(10).fill(null).map((a,t)=>({label:`Option with a long label ${t}`,value:`option-${t}`}))};const x=a=>({components:{FSelect:F,FButton:y},setup(){const t=P.ref();function h(){t.value?.focus()}return{args:a,focus:h,selectRef:t}},template:`
<div>
  <FSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),v=x.bind({});v.args={options:[{label:"Option A",value:"a"},{label:"Option B",value:"b"},{label:"Option C",value:"c"}]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect,
    FIcon
  },
  setup: () => {
    registerIcons('icons', {
      arrowRight
    });
    return {
      args
    };
  },
  template: \`
    <FSelect v-bind="args">
      <template #option-prefix>
        <FIcon name="arrowRight" />
      </template>
    </FSelect>\`
})`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect
  },
  setup: () => ({
    args
  }),
  template: '<FSelect v-bind="args" />'
})`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: FSelectProps) => ({
  components: {
    FSelect,
    FButton
  },
  setup() {
    const selectRef = ref();
    function focus() {
      selectRef.value?.focus();
    }
    return {
      args,
      focus,
      selectRef
    };
  },
  template: \`
<div>
  <FSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...v.parameters?.docs?.source}}};const O=["Default","Small","WithLabel","WithHint","Full","Clearable","CustomOptionPrefix","Error","NoOption","Disabled","Loading","LongOptionsLabel","ManyOptions","Unselectable","SmallWidthMenu","FocusProgrammatically"];exports.Clearable=c;exports.CustomOptionPrefix=i;exports.Default=o;exports.Disabled=d;exports.Error=u;exports.FocusProgrammatically=v;exports.Full=n;exports.Loading=f;exports.LongOptionsLabel=m;exports.ManyOptions=g;exports.NoOption=p;exports.Small=r;exports.SmallWidthMenu=S;exports.Unselectable=b;exports.WithHint=l;exports.WithLabel=s;exports.__namedExportsOrder=O;exports.default=A;
