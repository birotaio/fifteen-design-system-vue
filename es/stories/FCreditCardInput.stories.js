import p from "../components/form/FCreditCardInput.js";
/* empty css                                   */
import l from "../components/FButton.js";
/* empty css                     */
import { ref as C } from "vue";
const h = {
  title: "Components/Form/FCreditCardInput",
  component: p
}, r = (e) => ({
  components: {
    FCreditCardInput: p
  },
  setup: () => ({
    args: e
  }),
  template: '<FCreditCardInput v-bind="args" />'
}), t = r.bind({});
t.args = {
  errorMessage: "The credit card format is not a valid format"
};
const a = r.bind({});
a.args = {
  label: "Fill your credit card numbers",
  errorMessage: "The credit card format is not a valid format"
};
const s = r.bind({});
s.args = {
  hint: "All credit cards operations are crypted",
  hintIcon: "lock",
  errorMessage: "The credit card format is not a valid format"
};
const o = r.bind({});
o.args = {
  label: "Enter your credit card",
  hint: "All credit cards operations are crypted",
  hintIcon: "lock",
  errorMessage: "The credit card format is not a valid format"
};
const n = r.bind({});
n.args = {
  label: "Enter your credit card",
  validateOnMount: !0,
  errorMessage: "Enter any valid number to dismiss the error",
  rules: (e) => e !== ""
};
const d = r.bind({});
d.args = {
  label: "Enter your credit card",
  hint: "All credit cards operations are crypted",
  hintIcon: "lock",
  disabled: !0
};
const g = (e) => ({
  components: {
    FCreditCardInput: p,
    FButton: l
  },
  setup() {
    const u = C();
    function m() {
      u.value?.focus();
    }
    return {
      args: e,
      focus: m,
      creditCardInputRef: u
    };
  },
  template: `
<div>
  <FCreditCardInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), c = g.bind({}), i = r.bind({});
i.args = {
  label: "Enter your credit card",
  hint: "All credit cards operations are crypted",
  loading: !0
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...d.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput,
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
  <FCreditCardInput ref="creditCardInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...c.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FCreditCardInputProps) => ({
  components: {
    FCreditCardInput
  },
  setup: () => ({
    args
  }),
  template: '<FCreditCardInput v-bind="args" />'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
const y = ["Default", "WithLabel", "WithHint", "Full", "Error", "Disabled", "FocusProgrammatically", "Loading"];
export {
  t as Default,
  d as Disabled,
  n as Error,
  c as FocusProgrammatically,
  o as Full,
  i as Loading,
  s as WithHint,
  a as WithLabel,
  y as __namedExportsOrder,
  h as default
};
