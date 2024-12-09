import i from "../components/FExpandable.js";
/* empty css                         */
import m from "../components/FButton.js";
/* empty css                     */
const x = {
  title: "Components/FExpandable",
  component: i
}, r = "Emissions de CO2", o = "En moyenne, un kilomètre parcouru sur un vélo électrique Fifteen économise Xg de CO2. Dans une ville comme Epinal avec 150 vélos électriques en libre-service, nous parlons de Xt de CO2 économisées par an.", p = (l) => ({
  components: {
    FExpandable: i
  },
  setup: () => ({
    args: l
  }),
  template: `
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>`
}), e = p.bind({});
e.args = {
  title: r,
  text: o
};
const t = p.bind({});
t.args = {
  title: r,
  text: o,
  gap: 8
};
const a = p.bind({});
a.args = {
  title: r,
  text: o,
  iconScale: 0.75
};
const d = (l) => ({
  components: {
    FExpandable: i,
    FButton: m
  },
  setup: () => ({
    args: l
  }),
  template: `
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h6>{{ args.title }}</h6>
        <p>I am the title slot</p>
      </template>
      <div>{{ args.text }}</div>
      <FButton style="margin-top: 16px">Hello</FButton>
    </FExpandable>`
}), n = d.bind({});
n.args = {
  title: r,
  text: o
};
const s = p.bind({});
s.args = {
  title: r,
  text: o,
  withHoverAnimation: !0
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,
      ...e.parameters?.docs?.source
    }
  }
};
t.parameters = {
  ...t.parameters,
  docs: {
    ...t.parameters?.docs,
    source: {
      originalSource: `(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,
      ...t.parameters?.docs?.source
    }
  }
};
a.parameters = {
  ...a.parameters,
  docs: {
    ...a.parameters?.docs,
    source: {
      originalSource: `(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,
      ...a.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FExpandableProps) => ({
  components: {
    FExpandable,
    FButton
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h6>{{ args.title }}</h6>
        <p>I am the title slot</p>
      </template>
      <div>{{ args.text }}</div>
      <FButton style="margin-top: 16px">Hello</FButton>
    </FExpandable>\`
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
      originalSource: `(args: FExpandableProps) => ({
  components: {
    FExpandable
  },
  setup: () => ({
    args
  }),
  template: \`
    <FExpandable v-bind="args">
      <template v-slot:title>
        <h4>{{ args.title }}</h4>
      </template>
      {{ args.text }}
    </FExpandable>\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const F = ["Default", "ContentGap", "IconScale", "Slots", "WithHoverAnimation"];
export {
  t as ContentGap,
  e as Default,
  a as IconScale,
  n as Slots,
  s as WithHoverAnimation,
  F as __namedExportsOrder,
  x as default
};
