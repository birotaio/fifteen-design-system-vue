import B from "../components/FButton.js";
/* empty css                     */
import x from "../components/FIcon.js";
/* empty css                   */
import { colorDesignTokens as g } from "../constants/colors.js";
import { getIconList as b } from "../.generated/utils.js";
import { registerIcons as f } from "../composables/useIcon.js";
import * as N from "../.generated/icons.js";
import { toRefs as I } from "vue";
import { toReactive as v } from "@vueuse/core";
const O = {
  title: "Components/FButton",
  component: B,
  argTypes: {
    location: {
      type: "string"
    },
    rel: {
      type: "string"
    },
    color: {
      type: "select",
      options: g
    },
    focusColor: {
      type: "select",
      options: g
    },
    hoverColor: {
      type: "select",
      options: g
    },
    size: {
      type: "select",
      options: ["tiny", "small", "medium", "large", "giant"]
    },
    iconName: {
      type: "select",
      options: b()
    },
    onClick: {
      action: "click"
    },
    onFocus: {
      action: "focus"
    },
    onBlur: {
      action: "blur"
    }
  }
}, t = (m) => ({
  components: {
    FButton: B,
    FIcon: x
  },
  setup() {
    f("icons", N);
    const {
      text: u,
      iconName: l,
      ...F
    } = I(m), d = v(F);
    return {
      text: u,
      iconName: l,
      props: d
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
}), o = t.bind({});
o.args = {
  text: "Click me",
  color: "info",
  ghost: !1
};
const e = t.bind({});
e.args = {
  text: "Click me",
  color: "info",
  disabled: !0
};
const n = t.bind({});
n.args = {
  text: "Click me",
  color: "#33C5FF",
  focusColor: "#AAE6FF",
  hoverColor: "#AAE6FF"
};
const s = t.bind({});
s.args = {
  text: "Ghost",
  color: "info",
  ghost: !0
};
const r = t.bind({});
r.args = {
  text: "Outlined",
  color: "info",
  outlined: !0
};
const a = t.bind({});
a.args = {
  text: "I am a link",
  color: "info",
  href: "https://fifteen.eu",
  target: "_blank"
};
const c = t.bind({});
c.args = {
  text: "With Icon, go square",
  color: "info",
  iconName: "crossSquare"
};
const i = t.bind({});
i.args = {
  color: "info",
  icon: !0,
  iconName: "zoovBikeAlt"
};
const y = (m) => ({
  components: {
    FButton: B,
    FIcon: x
  },
  setup() {
    f("icons", N);
    const {
      text: u,
      iconName: l,
      ...F
    } = I(m), d = v(F);
    return {
      text: u,
      iconName: l,
      props: d
    };
  },
  template: `
<div style="display:flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
  <FButton v-bind="props" size="tiny"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="small"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="medium"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="large"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="giant"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
</div>
`
}), p = y.bind({});
p.args = {
  text: "Loading",
  color: "secondary",
  iconName: "zoovBikeAlt",
  loading: !0
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
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
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
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
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
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
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
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
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: '<FButton v-bind="props"><FIcon v-if="iconName" :name="iconName"/><span>{{ text }}</span></FButton>'
})`,
      ...i.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FButtonArgs) => ({
  components: {
    FButton,
    FIcon
  },
  setup() {
    registerIcons('icons', icons);
    const {
      text,
      iconName,
      ...rest
    } = toRefs(args);
    const props = toReactive(rest);
    return {
      text,
      iconName,
      props
    };
  },
  template: \`
<div style="display:flex; flex-direction: column; gap: 1rem; align-items: flex-start;">
  <FButton v-bind="props" size="tiny"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="small"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="medium"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="large"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
  <FButton v-bind="props" size="giant"><FIcon :name="iconName"/><span>{{ text }}</span></FButton>
</div>
\`
})`,
      ...p.parameters?.docs?.source
    }
  }
};
const D = ["Default", "Disabled", "AnyColor", "Ghost", "Outlined", "Link", "WithIcon", "IconOnly", "Loading"];
export {
  n as AnyColor,
  o as Default,
  e as Disabled,
  s as Ghost,
  i as IconOnly,
  a as Link,
  p as Loading,
  r as Outlined,
  c as WithIcon,
  D as __namedExportsOrder,
  O as default
};
