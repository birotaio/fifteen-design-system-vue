import a from "../components/FSkeleton.js";
/* empty css                       */
const l = {
  title: "Components/FSkeleton",
  component: a
}, t = (n) => ({
  components: {
    FSkeleton: a
  },
  setup: () => ({
    args: n
  }),
  template: '<FSkeleton v-bind="args" />'
}), e = t.bind({});
e.args = {};
const o = t.bind({});
o.args = {
  rounded: !0
};
const r = t.bind({});
r.args = {
  roundedFull: !0,
  height: 64,
  width: 150
};
const s = t.bind({});
s.args = {
  rounded: !0,
  backgroundColor: "primary",
  backgroundColorTo: "primary--light-1",
  width: "50%"
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
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
      originalSource: `(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
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
      originalSource: `(args: FSkeletonProps) => ({
  components: {
    FSkeleton
  },
  setup: () => ({
    args
  }),
  template: '<FSkeleton v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const c = ["Default", "Rounded", "RoundedFull", "Colored"];
export {
  s as Colored,
  e as Default,
  o as Rounded,
  r as RoundedFull,
  c as __namedExportsOrder,
  l as default
};
