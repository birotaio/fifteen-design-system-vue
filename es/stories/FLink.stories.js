import u from "../components/FLink.js";
/* empty css                   */
import { toRefs as L } from "vue";
import { toReactive as x } from "@vueuse/core";
const R = {
  title: "Components/FLink",
  component: u,
  argTypes: {
    onClick: {
      action: "click"
    }
  }
}, e = (d) => ({
  components: {
    FLink: u
  },
  setup() {
    const {
      text: k,
      ...g
    } = L(d), l = x(g);
    return {
      text: k,
      props: l
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
}), r = e.bind({});
r.args = {
  text: "Default",
  href: "/"
};
const s = e.bind({});
s.args = {
  text: "Uppercase",
  href: "/",
  uppercase: !0
};
const o = e.bind({});
o.args = {
  text: "Info",
  color: "info",
  href: "/"
};
const n = e.bind({});
n.args = {
  text: "External",
  color: "warning",
  href: "https://fifteen.eu",
  target: "_blank"
};
const a = e.bind({});
a.args = {
  text: "AnchorLink",
  color: "success",
  href: "#anchor"
};
const p = e.bind({});
p.args = {
  text: "EmailLink",
  color: "info",
  href: "mailto:?subject=test"
};
const c = e.bind({});
c.args = {
  text: "Disabled",
  disabled: !0,
  href: "/"
};
const i = e.bind({});
i.args = {
  text: "Without Arrow",
  hideArrow: !0,
  href: "/"
};
const t = e.bind({});
t.parameters = {
  backgrounds: {
    default: "info"
  }
};
t.args = {
  text: "Click me",
  href: "/test",
  color: "secondary",
  hoverColor: "neutral--light-5",
  arrowHoverColor: "secondary"
};
const m = e.bind({});
m.args = {
  text: "No link but a tabindex",
  tabindex: 0
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
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
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
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
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...a.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
c.parameters = {
  ...c.parameters,
  docs: {
    ...c.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...c.parameters?.docs?.source
    }
  }
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...t.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `(args: FLinkArgs) => ({
  components: {
    FLink
  },
  setup() {
    const {
      text,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      props
    };
  },
  template: '<FLink v-bind="props">{{ text }}</FLink>'
})`,
      ...m.parameters?.docs?.source
    }
  }
};
const h = ["Default", "Uppercase", "Info", "External", "AnchorLink", "EmailLink", "Disabled", "WithoutArrow", "ArrowHover", "NoLinkTabindex"];
export {
  a as AnchorLink,
  t as ArrowHover,
  r as Default,
  c as Disabled,
  p as EmailLink,
  n as External,
  o as Info,
  m as NoLinkTabindex,
  s as Uppercase,
  i as WithoutArrow,
  h as __namedExportsOrder,
  R as default
};
