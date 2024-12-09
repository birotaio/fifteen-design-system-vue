import i from "../components/form/FCheckbox.js";
/* empty css                            */
import u from "../components/FButton.js";
/* empty css                     */
import { ref as b } from "vue";
const C = {
  title: "Components/Form/FCheckbox",
  component: i
}, p = (e) => ({
  components: {
    FCheckbox: i
  },
  setup: () => ({
    args: e
  }),
  template: '<FCheckbox v-bind="args" />'
}), r = p.bind({});
r.args = {
  label: "Check me"
};
const o = p.bind({});
o.args = {
  modelValue: null,
  label: "Indeterminate state"
};
const t = p.bind({});
t.args = {
  label: "A disabled one",
  disabled: !0
};
const a = p.bind({});
a.args = {
  label: "Receive our monthly newsletter",
  hint: "Check this if you want to receive our amazing newsletter"
};
const h = (e) => ({
  components: {
    FCheckbox: i
  },
  setup: () => ({
    args: e
  }),
  template: `<FCheckbox v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FCheckbox>`
}), s = h.bind({});
s.args = {};
const c = p.bind({});
c.args = {
  label: "I agree with the privacy policy",
  errorMessage: "Check the checkbox to dismiss the error",
  rules: [(e) => e === !0],
  validateOnMount: !0
};
const d = (e) => ({
  components: {
    FCheckbox: i,
    FButton: u
  },
  setup() {
    const l = b();
    function m() {
      l.value?.focus();
    }
    return {
      args: e,
      focus: m,
      checkboxRef: l
    };
  },
  template: `
<div>
  <FCheckbox ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), n = d.bind({});
n.args = {
  label: "Focus me by clicking on the button"
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
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
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
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
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
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
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
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
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: \`<FCheckbox v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FCheckbox>\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox
  },
  setup: () => ({
    args
  }),
  template: '<FCheckbox v-bind="args" />'
})`,
      ...c.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FCheckboxProps) => ({
  components: {
    FCheckbox,
    FButton
  },
  setup() {
    const checkboxRef = ref();
    function focus() {
      checkboxRef.value?.focus();
    }
    return {
      args,
      focus,
      checkboxRef
    };
  },
  template: \`
<div>
  <FCheckbox ref="checkboxRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...n.parameters?.docs?.source
    }
  }
};
const v = ["Default", "Indeterminate", "Disabled", "WithHint", "WithLinks", "Error", "FocusProgrammatically"];
export {
  r as Default,
  t as Disabled,
  c as Error,
  n as FocusProgrammatically,
  o as Indeterminate,
  a as WithHint,
  s as WithLinks,
  v as __namedExportsOrder,
  C as default
};
