import d from "../components/form/FCountrySelect.js";
/* empty css                                 */
import y from "../components/form/FSelect.js";
/* empty css                          */
import b from "../components/FButton.js";
/* empty css                     */
import { registerIcons as S } from "../composables/useIcon.js";
import * as f from "../.generated/flags.js";
import { ref as I } from "vue";
const V = {
  title: "Components/Form/FCountrySelect",
  component: d
}, e = (r) => ({
  components: {
    FCountrySelect: d,
    FSelect: y
  },
  setup: () => (S("flags", f), {
    args: r
  }),
  template: '<FCountrySelect v-bind="args" />'
}), n = e.bind({});
n.args = {
  modelValue: "FR"
};
const t = e.bind({});
t.args = {
  size: "small",
  modelValue: "FR"
};
const s = e.bind({});
s.args = {
  modelValue: "FR",
  countryCodes: ["FR", "AST", "ES"]
};
const o = e.bind({});
o.args = {
  modelValue: "ES",
  optionLabelFormat: (r) => `app__country_code__${r.toLowerCase()}`,
  countryCodes: ["FR", "AST", "ES"]
};
const a = e.bind({});
a.args = {
  label: "Pick a country",
  placeholder: "FR"
};
const c = e.bind({});
c.args = {
  placeholder: "FR",
  hint: "Pick a country"
};
const l = e.bind({});
l.args = {
  label: "Pick a country",
  placeholder: "FR",
  hint: "Pick a country"
};
const u = e.bind({});
u.args = {
  placeholder: "FR",
  errorColor: "danger",
  hint: "Clear the input clicking on the cross icon",
  clearable: !0
};
const p = e.bind({});
p.args = {
  modelValue: "ES",
  rules: [(r) => r === "FR"],
  errorMessage: 'Select "FR" to dismiss the error',
  countryCodes: ["FR", "GB", "ES"],
  validationTrigger: "change",
  validateOnMount: !0
};
const i = e.bind({});
i.args = {
  placeholder: "FR",
  disabled: !0
};
const m = e.bind({});
m.args = {
  placeholder: "FR",
  loading: !0
};
const v = (r) => ({
  components: {
    FCountrySelect: d,
    FButton: b
  },
  setup() {
    S("flags", f);
    const F = I();
    function C() {
      F.value?.focus();
    }
    return {
      args: r,
      focus: C,
      selectRef: F
    };
  },
  template: `
<div>
  <FCountrySelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), g = v.bind({});
g.args = {
  modelValue: "ES"
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...n.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...t.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
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
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
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
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...a.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...c.parameters?.docs?.source
    }
  }
};
l.parameters = {
  ...l.parameters,
  docs: {
    ...l.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...l.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
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
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
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
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
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
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FSelect
  },
  setup: () => {
    registerIcons('flags', flagIcons);
    return {
      args
    };
  },
  template: \`<FCountrySelect v-bind="args" />\`
})`,
      ...m.parameters?.docs?.source
    }
  }
};
g.parameters = {
  ...g.parameters,
  docs: {
    ...g.parameters?.docs,
    source: {
      originalSource: `(args: FCountrySelectProps) => ({
  components: {
    FCountrySelect,
    FButton
  },
  setup() {
    registerIcons('flags', flagIcons);
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
  <FCountrySelect ref="selectRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...g.parameters?.docs?.source
    }
  }
};
const T = ["Default", "Small", "LimitedCountries", "FormattedLabel", "WithLabel", "WithHint", "Full", "Clearable", "Error", "Disabled", "Loading", "FocusProgrammatically"];
export {
  u as Clearable,
  n as Default,
  i as Disabled,
  p as Error,
  g as FocusProgrammatically,
  o as FormattedLabel,
  l as Full,
  s as LimitedCountries,
  m as Loading,
  t as Small,
  c as WithHint,
  a as WithLabel,
  T as __namedExportsOrder,
  V as default
};
