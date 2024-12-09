import { ref as F, watch as M } from "vue";
import l from "../components/FMenu.js";
/* empty css                   */
import d from "../components/FButton.js";
/* empty css                     */
import f from "../components/FLink.js";
/* empty css                   */
const x = {
  title: "Components/FMenu",
  component: l
}, n = [{
  label: "Acquisition",
  value: "acquisition"
}, {
  label: "Benefits",
  value: "benefits"
}, {
  label: "Data",
  value: "data"
}], c = (e) => ({
  components: {
    FMenu: l,
    FButton: d
  },
  setup: () => ({
    args: e
  }),
  template: `
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>`
}), o = c.bind({});
o.args = {
  options: n
};
const a = c.bind({});
a.args = {
  options: [{
    label: "Acquisition",
    description: "A description about acquisition",
    value: "acquisition"
  }, {
    label: "Benefits",
    description: "A description about benefits",
    value: "benefits"
  }, {
    label: "Data",
    value: "data"
  }]
};
const s = c.bind({});
s.args = {
  options: n,
  disabled: !0
};
const p = c.bind({});
p.args = {
  options: n,
  offsetSkid: 24,
  offsetDistance: 48
};
const i = c.bind({});
i.args = {
  options: n,
  optionHeight: 32
};
const O = () => ({
  components: {
    FMenu: l,
    FButton: d
  },
  setup: () => {
    let e;
    const t = F([]), v = F(!1);
    return M(v, (g) => {
      e && clearTimeout(e), g ? e = setTimeout(() => t.value = n, 1e3) : e = setTimeout(() => t.value = [], 250);
    }), {
      updatingOptions: t,
      isOpen: v
    };
  },
  template: `
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" v-model="isOpen">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>
`
}), m = O.bind({}), b = (e) => ({
  components: {
    FMenu: l,
    FButton: d
  },
  setup: () => {
    const t = F(!1);
    return setInterval(() => t.value = !t.value, 2e3), {
      isOpen: t,
      args: e
    };
  },
  template: `
<FMenu v-model="isOpen" v-bind="args">
  <template #activator>
    <div>Menu is {{ isOpen ? 'open' : 'closed' }}</div>
  </template>
</FMenu>`
}), r = b.bind({});
r.args = {
  options: n
};
const B = (e) => ({
  components: {
    FMenu: l,
    FLink: f,
    FButton: d
  },
  setup: () => ({
    args: e
  }),
  template: `
<FMenu v-bind="args">
  <template #activator>
    <FLink tabindex="0">Open Menu</FLink>
  </template>
  <template #option="scope">
    <div v-if="scope.option.value === 'benefits'">
      <span>Conditionnally</span>
      <a href="/">Click me I'm a link</a>
    </div>
    <template v-else>
      <h6>I can render any option with scope:</h6>
      <pre><caption>{{ scope }}</caption></pre>
    </template>
  </template>
</FMenu>`
}), u = B.bind({});
u.args = {
  options: n,
  optionHeight: 180,
  preventSelection: !0
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,
      ...o.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,
      ...a.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
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
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>\`
})`,
      ...i.parameters?.docs?.source
    }
  }
};
m.parameters = {
  ...m.parameters,
  docs: {
    ...m.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => {
    let timeout: NodeJS.Timeout;
    const updatingOptions = ref<FMenuOption[]>([]);
    const isOpen = ref(false);
    watch(isOpen, (value: boolean) => {
      if (timeout) clearTimeout(timeout);
      if (value) {
        timeout = setTimeout(() => updatingOptions.value = options, 1000);
      } else {
        timeout = setTimeout(() => updatingOptions.value = [], 250);
      }
    });
    return {
      updatingOptions,
      isOpen
    };
  },
  template: \`
<div style="height: 300px"></div>
<FMenu :options="updatingOptions" v-model="isOpen">
  <template #activator>
    <FButton>Open Menu</FButton>
  </template>
</FMenu>
\`
})`,
      ...m.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FButton
  },
  setup: () => {
    const isOpen = ref(false);
    setInterval(() => isOpen.value = !isOpen.value, 2000);
    return {
      isOpen,
      args
    };
  },
  template: \`
<FMenu v-model="isOpen" v-bind="args">
  <template #activator>
    <div>Menu is {{ isOpen ? 'open' : 'closed' }}</div>
  </template>
</FMenu>\`
})`,
      ...r.parameters?.docs?.source
    }
  }
};
u.parameters = {
  ...u.parameters,
  docs: {
    ...u.parameters?.docs,
    source: {
      originalSource: `(args: FMenuProps) => ({
  components: {
    FMenu,
    FLink,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
<FMenu v-bind="args">
  <template #activator>
    <FLink tabindex="0">Open Menu</FLink>
  </template>
  <template #option="scope">
    <div v-if="scope.option.value === 'benefits'">
      <span>Conditionnally</span>
      <a href="/">Click me I'm a link</a>
    </div>
    <template v-else>
      <h6>I can render any option with scope:</h6>
      <pre><caption>{{ scope }}</caption></pre>
    </template>
  </template>
</FMenu>\`
})`,
      ...u.parameters?.docs?.source
    }
  }
};
const y = ["Default", "WithDescriptions", "Disabled", "Offsets", "OptionHeight", "AutoPlacement", "ToggleExternally", "OptionSlot"];
export {
  m as AutoPlacement,
  o as Default,
  s as Disabled,
  p as Offsets,
  i as OptionHeight,
  u as OptionSlot,
  r as ToggleExternally,
  a as WithDescriptions,
  y as __namedExportsOrder,
  x as default
};
