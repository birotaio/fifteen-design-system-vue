import a from "./components/FsIconGrid.js";
/* empty css                       */
import { colorDesignTokens as n } from "../constants/colors.js";
const d = {
  title: "Components/FIcon",
  component: a,
  argTypes: {
    color: {
      type: "select",
      options: n
    },
    size: {
      type: "number"
    }
  },
  args: {
    size: 44,
    strokeWidth: 0
  }
}, e = (t) => ({
  components: {
    FsIconGrid: a
  },
  setup: () => ({
    args: t
  }),
  template: '<FsIconGrid v-bind="args" />'
}), r = e.bind({});
r.args = {
  color: "primary"
};
const s = e.bind({});
s.args = {
  color: "secondary"
};
const o = e.bind({});
o.args = {
  color: "danger"
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
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
      originalSource: `(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
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
      originalSource: `(args: FsIconGridProps) => ({
  components: {
    FsIconGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsIconGrid v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
const m = ["Default", "Secondary", "Danger"];
export {
  o as Danger,
  r as Default,
  s as Secondary,
  m as __namedExportsOrder,
  d as default
};
