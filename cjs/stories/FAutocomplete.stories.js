"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const S=require("@vee-validate/rules"),f=require("../components/form/FAutocomplete.js");;/* empty css                                 */const P=require("../components/FButton.js");;/* empty css                      */const A=require("vue"),I={title:"Components/Form/FAutocomplete",component:f},t=o=>({components:{FAutocomplete:f},setup:()=>({args:o}),template:'<FAutocomplete v-bind="args" />'}),e=[{label:"Amsterdam",description:"Capital of Netherlands",value:"amsterdam"},{label:"Berlin",description:"Capital of Germany",value:"berlin"},{label:"Madrid",description:"Capital of Spain",value:"madrid"},{label:"Rome",value:"rome"},{label:"London",value:"london"},{label:"Paris",description:"Capital of France",value:"paris"},{label:"Prague",description:"Capital of Czech Republic",value:"prague"},{label:"Stockholm",description:"Capital of Sweden",value:"stockholm"},{label:"Vienna",value:"vienna"}],r=t.bind({});r.args={placeholder:"Search capitals...",options:e,errorMessage:"Select a value in the list to validate"};const s=t.bind({});s.args={placeholder:"Search capitals...",options:e,label:"Choose a capital",errorMessage:"Select a value in the list to validate"};const n=t.bind({});n.args={placeholder:"Search capitals...",options:e,hint:"You can navigate in the menu through keyboard",hintIcon:"infoCircle",errorMessage:"Select a value in the list to validate"};const l=t.bind({});l.args={placeholder:"Search capitals...",options:e,label:"Choose a capital",hint:"You can navigate in the menu through keyboard",hintIcon:"infoCircle",errorMessage:"Select a value in the list to validate"};const i=t.bind({});i.args={placeholder:"Search capitals...",options:e,label:"Choose a capital",validateOnMount:!0,rules:[S.required],errorMessage:"Choose an option to dismiss the error"};const c=t.bind({});c.args={placeholder:"Search capitals...",options:e,label:"Choose a capital",hint:"You can navigate in the menu through keyboard",hintIcon:"infoCircle",disabled:!0};const _=o=>({components:{FAutocomplete:f,FButton:P},setup(){const a=A.ref();function F(){a.value?.focus()}return{args:o,focus:F,creditCardInputRef:a}},template:`
<div>
  <FAutocomplete ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`}),p=_.bind({});p.args={options:e};const u=t.bind({});u.args={placeholder:"Search capitals...",loadingText:"Loading...",loading:!0};const d=t.bind({});d.args={placeholder:"Search capitals...",options:e,clearable:!0,errorMessage:"Select a value in the list to validate"};const m=t.bind({});m.args={placeholder:"Search capitals...",options:e,hint:"Autocomplete propositions are not filtered based on input value.",preventFiltering:!0,hintIcon:"infoCircle",errorMessage:"Select a value in the list to validate"};const g=t.bind({});g.args={placeholder:"Search capitals...",options:e,hint:"The description of the input will show after its label.",formatInputFn(o,a){return o+(a&&`, ${a}`)},hintIcon:"infoCircle",errorMessage:"Select a value in the list to validate"};const h=t.bind({});h.args={modelValue:"berlin",placeholder:"Search capitals...",options:e,hint:"The initial value is set to Berlin.",hintIcon:"infoCircle",errorMessage:"Select a value in the list to validate"};const y=o=>({components:{FAutocomplete:f},setup(){let a;const F=A.ref([]),b=A.ref(!1);function C(){return clearTimeout(a),F.value=[],b.value=!0,new Promise(()=>{a=setTimeout(()=>{F.value=e,b.value=!1},1500)})}return{args:o,fetchedCapitals:F,fetchCapitals:C,loading:b}},template:`
  <div>
    <FAutocomplete @input="fetchCapitals" v-bind="args" :options="fetchedCapitals" :loading="loading" />
  </div>`}),v=y.bind({});v.args={placeholder:"Search capitals...",errorMessage:"Select a value in the list to validate",loadingText:"Fetching capitals...",hint:"Capitals are fetched asynchronously on input"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete,
    FButton
  },
  setup() {
    const creditCardInputRef = ref();
    function focus() {
      creditCardInputRef.value?.focus();
    }
    return {
      args,
      focus,
      creditCardInputRef
    };
  },
  template: \`
<div>
  <FAutocomplete ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup: () => ({
    args
  }),
  template: '<FAutocomplete v-bind="args" />'
})`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`(args: FAutocompleteProps) => ({
  components: {
    FAutocomplete
  },
  setup() {
    let timeoutId: NodeJS.Timeout | undefined;
    const fetchedCapitals = ref<unknown[]>([]);
    const loading = ref(false);
    function fetchCapitals() {
      clearTimeout(timeoutId);
      fetchedCapitals.value = [];
      loading.value = true;
      return new Promise(() => {
        timeoutId = setTimeout(() => {
          fetchedCapitals.value = capitals;
          loading.value = false;
        }, 1500);
      });
    }
    return {
      args,
      fetchedCapitals,
      fetchCapitals,
      loading
    };
  },
  template: \`
  <div>
    <FAutocomplete @input="fetchCapitals" v-bind="args" :options="fetchedCapitals" :loading="loading" />
  </div>\`
})`,...v.parameters?.docs?.source}}};const W=["Default","WithLabel","WithHint","Full","Error","Disabled","FocusProgrammatically","Loading","Clearable","PreventFiltering","WithFormattedInputValue","WithInitialValue","WithAsyncOptions"];exports.Clearable=d;exports.Default=r;exports.Disabled=c;exports.Error=i;exports.FocusProgrammatically=p;exports.Full=l;exports.Loading=u;exports.PreventFiltering=m;exports.WithAsyncOptions=v;exports.WithFormattedInputValue=g;exports.WithHint=n;exports.WithInitialValue=h;exports.WithLabel=s;exports.__namedExportsOrder=W;exports.default=I;
