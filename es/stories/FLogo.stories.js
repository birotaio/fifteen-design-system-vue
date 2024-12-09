import c from "../components/FLogo.js";
/* empty css                   */
import { colorDesignTokens as p } from "../constants/colors.js";
const g = ["vertical", "horizontal", "text-only", "image-only", "product"], l = {
  title: "Components/FLogo",
  component: c,
  argTypes: {
    color: {
      type: "select",
      options: p
    },
    variant: {
      type: "select",
      options: g
    }
  }
}, t = (n) => ({
  components: {
    FLogo: c
  },
  setup: () => ({
    args: n
  }),
  template: '<FLogo v-bind="args" />'
}), o = t.bind({});
o.args = {
  width: "200px"
};
const r = t.bind({});
r.args = {
  width: "140px",
  variant: "vertical",
  color: "success"
};
const s = t.bind({});
s.args = {
  width: "140px",
  variant: "image-only",
  color: "secondary"
};
const e = t.bind({});
e.args = {
  width: "200px",
  variant: "text-only",
  color: "info"
};
const a = t.bind({});
a.args = {
  width: "200px",
  variant: "product",
  color: "success",
  productName: "analytics",
  productNameColor: "success--dark-1"
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
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
      originalSource: `(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
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
      originalSource: `(args: FLogoProps) => ({
  components: {
    FLogo
  },
  setup: () => ({
    args
  }),
  template: '<FLogo v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
const u = ["Horizontal", "Vertical", "ImageOnly", "TextOnly", "Product"];
export {
  o as Horizontal,
  s as ImageOnly,
  a as Product,
  e as TextOnly,
  r as Vertical,
  u as __namedExportsOrder,
  l as default
};
