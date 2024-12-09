import R from "../components/router/FRouterLink.js";
import { toRefs as k } from "vue";
import { toReactive as x } from "@vueuse/core";
const v = {
  title: "Components/Router/FRouterLink",
  component: R,
  argTypes: {
    onClick: {
      action: "click"
    }
  }
}, t = (l) => ({
  components: {
    FRouterLink: R
  },
  setup() {
    const {
      text: d,
      ...L
    } = k(l), g = x(L);
    return {
      text: d,
      props: g
    };
  },
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
}), r = t.bind({});
r.args = {
  text: "Default",
  location: "/"
};
const o = t.bind({});
o.args = {
  text: "Uppercase",
  location: "/",
  uppercase: !0
};
const s = t.bind({});
s.args = {
  text: "Info",
  color: "info",
  location: "/"
};
const n = t.bind({});
n.args = {
  text: "Object Location",
  location: {
    name: "test"
  }
};
const a = t.bind({});
a.args = {
  text: "External",
  color: "warning",
  location: "https://fifteen.eu"
};
const c = t.bind({});
c.args = {
  text: "AnchorLink",
  color: "success",
  location: "#anchor"
};
const p = t.bind({});
p.args = {
  text: "Email Link",
  color: "info",
  location: "mailto:?subject=test"
};
const i = t.bind({});
i.args = {
  text: "Disabled",
  disabled: !0,
  location: "/"
};
const u = t.bind({});
u.args = {
  text: "Without Arrow",
  hideArrow: !0,
  location: "/"
};
const e = t.bind({});
e.parameters = {
  backgrounds: {
    default: "info"
  }
};
e.args = {
  text: "Click me",
  location: "/test",
  color: "secondary",
  hoverColor: "neutral--light-5",
  arrowHoverColor: "secondary"
};
const m = t.bind({});
m.args = {
  text: "Null Location",
  location: null
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
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
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
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
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...c.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
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
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...u.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `(args: FRouterLinkArgs) => ({
  components: {
    FRouterLink
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
  template: '<FRouterLink v-bind="props">{{ text }}</FRouterLink>'
})`,
      ...m.parameters?.docs?.source
    }
  }
};
const A = ["Default", "Uppercase", "Info", "ObjectLocation", "External", "AnchorLink", "EmailLink", "Disabled", "WithoutArrow", "ArrowHover", "NullLocation"];
export {
  c as AnchorLink,
  e as ArrowHover,
  r as Default,
  i as Disabled,
  p as EmailLink,
  a as External,
  s as Info,
  m as NullLocation,
  n as ObjectLocation,
  o as Uppercase,
  u as WithoutArrow,
  A as __namedExportsOrder,
  v as default
};
