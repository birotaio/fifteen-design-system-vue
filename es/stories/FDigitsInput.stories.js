import c from "../components/form/FDigitsInput.js";
/* empty css                               */
import m from "../components/FButton.js";
/* empty css                     */
import { ref as l } from "vue";
const h = {
  title: "Components/Form/FDigitsInput",
  component: c
}, t = (s) => ({
  components: {
    FDigitsInput: c
  },
  setup: () => ({
    args: s
  }),
  template: '<FDigitsInput v-bind="args" />'
}), e = t.bind({});
e.args = {
  label: "Enter validation code"
};
const r = t.bind({});
r.args = {
  label: "Enter validation code"
};
const n = t.bind({});
n.args = {
  hint: "Check the SMS on your phone"
};
const o = t.bind({});
o.args = {
  label: "Enter validation code",
  hint: "Check your SMS"
};
const a = t.bind({});
a.args = {
  digits: 5,
  rules: [(s) => s === "12345"],
  errorMessage: 'Type "12345" to dismiss the error',
  validateOnMount: !0
};
const i = t.bind({});
i.args = {
  label: "Enter validation code",
  hint: "Check your SMS",
  disabled: !0
};
const p = t.bind({});
p.args = {
  label: "Enter validation code",
  hint: "Check your SMS",
  loading: !0
};
const F = (s) => ({
  components: {
    FDigitsInput: c,
    FButton: m
  },
  setup() {
    const g = l();
    function d() {
      g.value?.focus();
    }
    return {
      args: s,
      focus: d,
      digitsInputRef: g
    };
  },
  template: `
<div>
  <FDigitsInput ref="digitsInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), u = F.bind({});
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput
  },
  setup: () => ({
    args
  }),
  template: '<FDigitsInput v-bind="args" />'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FDigitsInputProps) => ({
  components: {
    FDigitsInput,
    FButton
  },
  setup() {
    const digitsInputRef = ref();
    function focus() {
      digitsInputRef.value?.focus();
    }
    return {
      args,
      focus,
      digitsInputRef
    };
  },
  template: \`
<div>
  <FDigitsInput ref="digitsInputRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...u.parameters?.docs?.source
    }
  }
};
const S = ["Default", "WithLabel", "WithHint", "Full", "Error", "Disabled", "Loading", "FocusProgrammatically"];
export {
  e as Default,
  i as Disabled,
  a as Error,
  u as FocusProgrammatically,
  o as Full,
  p as Loading,
  n as WithHint,
  r as WithLabel,
  S as __namedExportsOrder,
  h as default
};
