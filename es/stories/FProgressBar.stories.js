import { colorDesignTokens as t } from "../constants/colors.js";
import e from "../components/FProgressBar.js";
/* empty css                          */
const g = {
  title: "Components/FProgressBar",
  component: e,
  argTypes: {
    color: {
      type: "select",
      options: t
    }
  }
}, o = (a) => ({
  components: {
    FProgressBar: e
  },
  setup: () => ({
    args: a
  }),
  template: '<FProgressBar v-bind="args" />'
}), r = o.bind({});
r.args = {
  value: 20
};
const s = o.bind({});
s.args = {
  color: "info",
  height: "20px",
  value: 60
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FProgressBarProps) => ({
  components: {
    FProgressBar
  },
  setup: () => ({
    args
  }),
  template: '<FProgressBar v-bind="args" />'
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
      originalSource: `(args: FProgressBarProps) => ({
  components: {
    FProgressBar
  },
  setup: () => ({
    args
  }),
  template: '<FProgressBar v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const m = ["Default", "Larger"];
export {
  r as Default,
  s as Larger,
  m as __namedExportsOrder,
  g as default
};
