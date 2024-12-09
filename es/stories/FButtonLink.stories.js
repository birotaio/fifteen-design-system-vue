import i from "../components/router/FButtonLink.js";
import { toRefs as L } from "vue";
import { toReactive as k } from "@vueuse/core";
const F = {
  title: "Components/Router/FButtonLink",
  component: i,
  argTypes: {
    onClick: {
      action: "click"
    }
  }
}, t = (u) => ({
  components: {
    FButtonLink: i
  },
  setup() {
    const {
      text: m,
      ...l
    } = L(u), d = k(l);
    return {
      text: m,
      props: d
    };
  },
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
}), o = t.bind({});
o.args = {
  text: "Default",
  location: "/"
};
const e = t.bind({});
e.args = {
  text: "Info",
  color: "info",
  location: "/"
};
const s = t.bind({});
s.args = {
  text: "Object Location",
  location: {
    name: "test"
  }
};
const r = t.bind({});
r.args = {
  text: "External",
  color: "warning",
  location: "https://fifteen.eu"
};
const n = t.bind({});
n.args = {
  text: "AnchorLink",
  color: "success",
  location: "#anchor"
};
const a = t.bind({});
a.args = {
  text: "EmailLink",
  color: "info",
  location: "mailto:?subject=test"
};
const c = t.bind({});
c.args = {
  text: "Disabled",
  disabled: !0,
  location: "/"
};
const p = t.bind({});
p.args = {
  text: "Null Location",
  location: null
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
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
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
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
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
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
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
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
      originalSource: `(args: FButtonLinkArgs) => ({
  components: {
    FButtonLink
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
  template: '<FButtonLink v-bind="props">{{ text }}</FButtonLink>'
})`,
      ...p.parameters?.docs?.source
    }
  }
};
const b = ["Default", "Info", "ObjectLocation", "External", "AnchorLink", "EmailLink", "Disabled", "NullLocation"];
export {
  n as AnchorLink,
  o as Default,
  c as Disabled,
  a as EmailLink,
  r as External,
  e as Info,
  p as NullLocation,
  s as ObjectLocation,
  b as __namedExportsOrder,
  F as default
};
