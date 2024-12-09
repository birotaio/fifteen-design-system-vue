import { colorDesignTokens as t } from "../constants/colors.js";
import a from "../components/FBreadcrumbs.js";
/* empty css                          */
const i = {
  title: "Components/FBreadcrumbs",
  component: a,
  argTypes: {
    activeItemColor: {
      type: "select",
      options: t
    },
    itemsColor: {
      type: "select",
      options: t
    },
    color: {
      type: "select",
      options: t
    }
  }
}, o = (m) => ({
  components: {
    FBreadcrumbs: a
  },
  setup: () => ({
    args: m
  }),
  template: '<FBreadcrumbs v-bind="args" />'
}), e = o.bind({});
e.args = {
  items: [{
    text: "Guide"
  }]
};
const r = o.bind({});
r.args = {
  items: [{
    text: "Guide"
  }, {
    text: "Operators"
  }, {
    text: "9 ways to boost user retention"
  }],
  activeItemColor: "info"
};
const s = o.bind({});
s.args = {
  items: [{
    text: "Guide",
    href: "/resources/guides"
  }, {
    text: "Operators"
  }, {
    text: "9 ways to boost user retention"
  }, {
    text: "Another level"
  }, {
    text: "Last level"
  }]
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
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
      originalSource: `(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
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
      originalSource: `(args: FBreadcrumbsProps) => ({
  components: {
    FBreadcrumbs
  },
  setup: () => ({
    args
  }),
  template: '<FBreadcrumbs v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const d = ["OneItem", "ThreeItems", "FiveItems"];
export {
  s as FiveItems,
  e as OneItem,
  r as ThreeItems,
  d as __namedExportsOrder,
  i as default
};
