import { required as h } from "@vee-validate/rules";
import m from "../components/form/FPhoneInput.js";
/* empty css                              */
import g from "../components/FButton.js";
/* empty css                     */
import { ref as l } from "vue";
const E = {
  title: "Components/Form/FPhoneInput",
  component: m
}, e = (c) => ({
  components: {
    FPhoneInput: m
  },
  setup: () => ({
    args: c
  }),
  template: '<FPhoneInput v-bind="args" />'
}), r = e.bind({});
r.args = {
  errorMessage: "The phone number does not match the expected format",
  rules: [h]
};
const o = e.bind({});
o.args = {
  label: "Enter your phone number",
  errorMessage: "The phone number does not match the expected format"
};
const t = e.bind({});
t.args = {
  hint: "Don't forget to pick the right prefix",
  errorMessage: "The phone number does not match the expected format"
};
const n = e.bind({});
n.args = {
  label: "Enter your phone number",
  hint: "Don't forget to pick the right prefix",
  errorMessage: "The phone number does not match the expected format"
};
const s = e.bind({});
s.args = {
  label: "Enter your phone number",
  validateOnMount: !0,
  errorMessage: "A phone number is required. Enter any valid number to dismiss the error",
  rules: [h]
};
const a = e.bind({});
a.args = {
  label: "Enter your phone number",
  hint: "Don't forget to pick the right prefix",
  disabled: !0
};
const F = (c) => ({
  components: {
    FPhoneInput: m,
    FButton: g
  },
  setup() {
    const i = l();
    function d() {
      i.value?.focus();
    }
    return {
      args: c,
      focus: d,
      phoneInputRef: i
    };
  },
  template: `
<div>
  <FPhoneInput ref="phoneInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), u = F.bind({}), p = e.bind({});
p.args = {
  label: "Enter you phone number",
  hint: "Don't forget to pick the right prefix",
  loading: !0
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput,
    FButton
  },
  setup() {
    const phoneInputRef = ref();
    function focus() {
      phoneInputRef.value?.focus();
    }
    return {
      args,
      focus,
      phoneInputRef
    };
  },
  template: \`
<div>
  <FPhoneInput ref="phoneInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...u.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FPhoneInputProps) => ({
  components: {
    FPhoneInput
  },
  setup: () => ({
    args
  }),
  template: '<FPhoneInput v-bind="args" />'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
const y = ["Default", "WithLabel", "WithHint", "Full", "Error", "Disabled", "FocusProgrammatically", "Loading"];
export {
  r as Default,
  a as Disabled,
  s as Error,
  u as FocusProgrammatically,
  n as Full,
  p as Loading,
  t as WithHint,
  o as WithLabel,
  y as __namedExportsOrder,
  E as default
};
