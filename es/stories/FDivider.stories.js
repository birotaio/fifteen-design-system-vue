import i from "../components/FDivider.js";
/* empty css                      */
import { colorDesignTokens as c } from "../constants/colors.js";
const g = {
  title: "Components/FDivider",
  component: i,
  argTypes: {
    color: {
      type: "select",
      options: c
    }
  }
}, o = (p) => ({
  components: {
    FDivider: i
  },
  setup: () => ({
    args: p
  }),
  template: '<FDivider v-bind="args" />'
}), t = o.bind({}), e = o.bind({});
e.args = {
  vertical: !0,
  height: "400px",
  color: "danger--dark-1"
};
const r = o.bind({});
r.parameters = {
  backgrounds: {
    default: "secondary"
  }
};
r.args = {
  theme: "light"
};
const s = o.bind({});
s.args = {
  theme: "dark"
};
const a = o.bind({});
a.args = {
  color: "primary"
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
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
      originalSource: `(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
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
      originalSource: `(args: FDividerProps) => ({
  components: {
    FDivider
  },
  setup: () => ({
    args
  }),
  template: '<FDivider v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
const u = ["Default", "Vertical", "Light", "Dark", "Primary"];
export {
  s as Dark,
  t as Default,
  r as Light,
  a as Primary,
  e as Vertical,
  u as __namedExportsOrder,
  g as default
};
