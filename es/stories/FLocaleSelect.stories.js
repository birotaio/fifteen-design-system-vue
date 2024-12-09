import g from "../components/form/FLocaleSelect.js";
/* empty css                                */
import L from "../components/FButton.js";
/* empty css                     */
import { ref as f } from "vue";
const k = {
  title: "Components/Form/FLocaleSelect",
  component: g,
  argTypes: {
    onClick: {
      action: "click"
    },
    onFocus: {
      action: "focus"
    },
    onBlur: {
      action: "blur"
    },
    onChange: {
      action: "change"
    },
    onInput: {
      action: "input"
    }
  }
}, e = (a) => ({
  components: {
    FLocaleSelect: g
  },
  setup: () => ({
    args: a
  }),
  template: '<FLocaleSelect v-bind="args" />'
}), r = e.bind({});
r.args = {
  modelValue: "fr"
};
const o = e.bind({});
o.args = {
  size: "small",
  modelValue: "fr"
};
const s = e.bind({});
s.args = {
  modelValue: "fr",
  localeCodes: ["fr", "es"]
};
const c = e.bind({});
c.args = {
  modelValue: "es",
  optionLabelFormat: (a) => `app__country_code__${a.toLowerCase()}`,
  localeCodes: ["fr", "es"]
};
const t = e.bind({});
t.args = {
  label: "Pick a locale",
  placeholder: "fr"
};
const l = e.bind({});
l.args = {
  placeholder: "fr",
  hint: "Pick a locale"
};
const n = e.bind({});
n.args = {
  label: "Pick a locale",
  placeholder: "fr",
  hint: "Pick a locale"
};
const p = e.bind({});
p.args = {
  placeholder: "fr",
  errorColor: "danger",
  hint: "Clear the input clicking on the cross icon",
  clearable: !0
};
const i = e.bind({});
i.args = {
  modelValue: "es",
  rules: [(a) => a === "fr"],
  errorMessage: 'Select "fr" to dismiss the error',
  localeCodes: ["fr", "pl", "es"],
  validationTrigger: "change",
  validateOnMount: !0
};
const m = e.bind({});
m.args = {
  placeholder: "fr",
  disabled: !0
};
const u = e.bind({});
u.args = {
  placeholder: "fr",
  loading: !0
};
const b = (a) => ({
  components: {
    FLocaleSelect: g,
    FButton: L
  },
  setup() {
    const F = f();
    function S() {
      F.value?.focus();
    }
    return {
      args: a,
      focus: S,
      selectRef: F
    };
  },
  template: `
<div>
  <FLocaleSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), d = b.bind({});
d.args = {
  modelValue: "es"
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
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
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
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
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...c.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...l.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...m.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect
  },
  setup: () => ({
    args
  }),
  template: '<FLocaleSelect v-bind="args" />'
})`,
      ...u.parameters?.docs?.source
    }
  }
};
d.parameters = {
  ...d.parameters,
  docs: {
    ...d.parameters?.docs,
    source: {
      originalSource: `(args: FLocaleSelectProps) => ({
  components: {
    FLocaleSelect,
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
  <FLocaleSelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...d.parameters?.docs?.source
    }
  }
};
const B = ["Default", "Small", "LimitedLocales", "FormattedLabel", "WithLabel", "WithHint", "Full", "Clearable", "Error", "Disabled", "Loading", "FocusProgrammatically"];
export {
  p as Clearable,
  r as Default,
  m as Disabled,
  i as Error,
  d as FocusProgrammatically,
  c as FormattedLabel,
  n as Full,
  s as LimitedLocales,
  u as Loading,
  o as Small,
  l as WithHint,
  t as WithLabel,
  B as __namedExportsOrder,
  k as default
};
