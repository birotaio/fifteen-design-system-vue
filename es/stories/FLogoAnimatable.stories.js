import r from "../components/FLogoAnimatable.js";
/* empty css                             */
import { colorDesignTokens as n } from "../constants/colors.js";
const p = {
  title: "Components/FLogoAnimatable",
  component: r,
  argTypes: {
    color: {
      type: "select",
      options: n
    }
  }
}, s = (t) => ({
  components: {
    FLogoAnimatable: r
  },
  setup: () => ({
    args: t
  }),
  template: '<FLogoAnimatable v-bind="args" />'
}), o = s.bind({});
o.args = {
  width: 140
};
const e = s.bind({});
e.args = {
  width: 140,
  color: "success"
};
const a = s.bind({});
a.args = {
  width: 140,
  color: "success",
  delta: {
    4: 200,
    6: 500,
    12: 320
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FLogoAnimatableProps) => ({
  components: {
    FLogoAnimatable
  },
  setup: () => ({
    args
  }),
  template: '<FLogoAnimatable v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
const l = ["Normal", "Color", "GrowLines"];
export {
  e as Color,
  a as GrowLines,
  o as Normal,
  l as __namedExportsOrder,
  p as default
};
