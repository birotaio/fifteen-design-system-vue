import c from "../components/FAvatar.js";
/* empty css                     */
const i = {
  title: "Components/FAvatar",
  component: c,
  argTypes: {
    useWindowSize: {
      options: ["medium", "large"]
    }
  }
}, o = (p) => ({
  components: {
    FAvatar: c
  },
  setup: () => ({
    args: p
  }),
  template: '<FAvatar v-bind="args" />'
}), a = o.bind({});
a.args = {
  src: "https://i.pravatar.cc/48?img=12",
  alt: "Some random avatar",
  size: 24
};
const r = o.bind({});
r.args = {
  src: "https://i.pravatar.cc/160?img=35",
  alt: "Some random avatar"
};
const s = o.bind({});
s.args = {
  src: "https://i.pravatar.cc/364?img=7",
  alt: "Some random avatar",
  size: 192
};
const t = o.bind({});
t.args = {
  src: "https://i.pravatar.cc/364?img=9",
  placeholder: "https://i.pravatar.cc/10?img=9",
  alt: "Some random avatar",
  size: 192
};
const e = o.bind({});
e.args = {
  size: 48,
  letter: "J",
  color: "secondary",
  textColor: "neutral--light-5"
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
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
      originalSource: `(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
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
      originalSource: `(args: FAvatarProps) => ({
  components: {
    FAvatar
  },
  setup: () => ({
    args
  }),
  template: '<FAvatar v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
const d = ["Tiny", "Small", "Large", "Lazy", "Initials"];
export {
  e as Initials,
  s as Large,
  t as Lazy,
  r as Small,
  a as Tiny,
  d as __namedExportsOrder,
  i as default
};
