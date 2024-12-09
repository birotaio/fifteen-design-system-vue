"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const d=require("../components/form/FFileUpload.js");;/* empty css                               */const c={title:"Components/Form/FFileUpload",component:d},e=n=>({components:{FFileUpload:d},setup:()=>({args:n}),template:'<FFileUpload v-bind="args" />'}),a=e.bind({});a.args={buttonText:"Import a file",errorMessage:"Invalid file"};const r=e.bind({});r.args={label:"Your student card",buttonText:"Import a file",errorMessage:"Invalid file"};const t=e.bind({});t.args={hint:"Click the button to import a file",buttonText:"Import a file",errorMessage:"Invalid file"};const o=e.bind({});o.args={label:"Your student card",buttonText:"Import a file",hint:"Click the button to import a file",errorMessage:"Invalid file"};const s=e.bind({});s.args={buttonText:"Import a file",hint:"Click the button to import one or many files",errorMessage:"Invalid file",multiple:!0};const l=e.bind({});l.args={buttonText:"Import a file",hint:"Maximum size: 5 MB, Accepted format : PDF, JPG, PNG",errorMessage:"Invalid file",allowedMimeTypes:["application/pdf","image/jpeg","image/png"],maximumSize:5e3};const i=e.bind({});i.args={label:"Your student card",buttonText:"Import a file",errorMessage:"Invalid file",disabled:!0};const p=e.bind({});p.args={label:"Your student card",buttonText:"Import a file",errorMessage:"Invalid file",loading:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args: FFileUploadProps) => ({
  components: {
    FFileUpload
  },
  setup: () => ({
    args
  }),
  template: '<FFileUpload v-bind="args" />'
})`,...p.parameters?.docs?.source}}};const u=["Default","WithLabel","WithHint","Full","AllowMultiple","WithRestrictions","Disabled","Loading"];exports.AllowMultiple=s;exports.Default=a;exports.Disabled=i;exports.Full=o;exports.Loading=p;exports.WithHint=t;exports.WithLabel=r;exports.WithRestrictions=l;exports.__namedExportsOrder=u;exports.default=c;
