import o from "./components/FsForm.js";
/* empty css                   */
const p = {
  title: "Components/Form/FForm",
  component: o,
  argTypes: {
    onValid: {
      action: "valid"
    }
  }
}, a = (n) => ({
  components: {
    FsForm: o
  },
  setup: () => ({
    args: n
  }),
  template: '<FsForm v-bind="args" />'
}), e = a.bind({});
e.args = {
  initialValues: {
    FInput: "Default value",
    FCheckbox: !0,
    FDigitsInput: "1234",
    FPhoneInput: "+12345678910",
    FCreditCardInput: "4242424242424242",
    FRadioGroup: "b",
    FSelect: "c",
    FCountrySelect: "FR",
    FLocaleSelect: "fr",
    FTextarea: "Default value",
    FAutocomplete: "a",
    FToggle: !0
  }
};
const t = a.bind({});
t.args = {
  loading: !0,
  initialValues: {
    FInput: "Default value",
    FCheckbox: !0,
    FDigitsInput: "1234",
    FPhoneInput: "",
    FCreditCardInput: "",
    FRadioGroup: "b",
    FSelect: "c",
    FCountrySelect: "FR",
    FLocaleSelect: "fr",
    FTextarea: "Default value",
    FAutocomplete: "a"
  }
};
const r = a.bind({});
r.args = {
  withValidation: !0,
  initialValues: {
    FInput: "",
    FCheckbox: !1,
    FDigitsInput: "",
    FPhoneInput: "",
    FCreditCardInput: "",
    FRadioGroup: "",
    FSelect: "",
    FCountrySelect: "",
    FLocaleSelect: "",
    FTextarea: "",
    FAutocomplete: ""
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FsFormProps) => ({
  components: {
    FsForm
  },
  setup: () => ({
    args
  }),
  template: \`<FsForm v-bind="args" />\`
})`,
      ...e.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FsFormProps) => ({
  components: {
    FsForm
  },
  setup: () => ({
    args
  }),
  template: \`<FsForm v-bind="args" />\`
})`,
      ...t.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FsFormProps) => ({
  components: {
    FsForm
  },
  setup: () => ({
    args
  }),
  template: \`<FsForm v-bind="args" />\`
})`,
      ...r.parameters?.docs?.source
    }
  }
};
const u = ["Default", "Loading", "Validation"];
export {
  e as Default,
  t as Loading,
  r as Validation,
  u as __namedExportsOrder,
  p as default
};
