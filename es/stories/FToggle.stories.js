import i from "../components/form/FToggle.js";
/* empty css                          */
import d from "../components/FButton.js";
/* empty css                     */
import { ref as F } from "vue";
const S = {
  title: "Components/Form/FToggle",
  component: i
}, r = (e) => ({
  components: {
    FToggle: i
  },
  setup: () => ({
    args: e
  }),
  template: '<FToggle v-bind="args" />'
}), o = r.bind({});
o.args = {
  label: "Check me"
};
const t = r.bind({});
t.args = {
  label: "The toggle is disabled",
  disabled: !0
};
const a = r.bind({});
a.args = {
  label: "Receive our monthly newsletter",
  hint: "Toggle on if you want to receive our amazing newsletter"
};
const T = (e) => ({
  components: {
    FToggle: i
  },
  setup: () => ({
    args: e
  }),
  template: `<FToggle v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FToggle>`
}), s = T.bind({});
s.args = {};
const n = r.bind({});
n.args = {
  label: "I agree with the privacy policy",
  errorMessage: "Check the checkbox to dismiss the error",
  rules: [(e) => e === !0],
  validateOnMount: !0
};
const v = (e) => ({
  components: {
    FToggle: i,
    FButton: d
  },
  setup() {
    const m = F();
    function u() {
      m.value?.focus();
    }
    return {
      args: e,
      focus: u,
      toggleRef: m
    };
  },
  template: `
<div>
  <FToggle ref="toggleRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), g = v.bind({});
g.args = {
  label: "Focus me by clicking on the button"
};
const l = r.bind({});
l.args = {
  label: "I agree with the privacy policy",
  noCheckmarkIcon: !0
};
const f = (e) => ({
  components: {
    FToggle: i
  },
  setup: () => ({
    args: e
  }),
  template: `
<div style="width: 325px;">
  <FToggle v-bind="args" />
</div>`
}), c = f.bind({});
c.args = {
  label: "I agree with the privacy policy",
  reverse: !0
};
const p = r.bind({});
p.args = {
  label: "I agree with the privacy policy",
  smallText: !0
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
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
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
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
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
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
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: \`<FToggle v-bind="args">
      <template v-slot:label>
        I have read and accept <a href="https://fifteen.eu/fr/legal" target="_blank" style="color:var(--color--primary);">terms</a>
        and <a href="https://fifteen.eu/fr/privacy" target="_blank" style="color:var(--color--primary);">privacy policy</a>.
      </template>
  </FToggle>\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle,
    FButton
  },
  setup() {
    const toggleRef = ref();
    function focus() {
      toggleRef.value?.focus();
    }
    return {
      args,
      focus,
      toggleRef
    };
  },
  template: \`
<div>
  <FToggle ref="toggleRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...g.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,
      ...l.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: \`
<div style="width: 325px;">
  <FToggle v-bind="args" />
</div>\`
})`,
      ...c.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FToggleProps) => ({
  components: {
    FToggle
  },
  setup: () => ({
    args
  }),
  template: '<FToggle v-bind="args" />'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
const _ = ["Default", "Disabled", "WithHint", "WithLinks", "Error", "FocusProgrammatically", "NoCheckmarkIcon", "Reverse", "SmallText"];
export {
  o as Default,
  t as Disabled,
  n as Error,
  g as FocusProgrammatically,
  l as NoCheckmarkIcon,
  c as Reverse,
  p as SmallText,
  a as WithHint,
  s as WithLinks,
  _ as __namedExportsOrder,
  S as default
};
