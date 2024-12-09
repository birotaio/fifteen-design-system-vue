import i from "../components/FGrid.js";
/* empty css                   */
const d = {
  title: "Components/FGrid",
  component: i,
  argTypes: {
    columns: {
      type: "number"
    },
    gap: {
      type: "number"
    }
  }
}, s = (a) => ({
  components: {
    FGrid: i
  },
  setup: () => ({
    args: a
  }),
  template: `
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>`
}), r = s.bind({});
r.args = {};
const e = s.bind({});
e.args = {
  columns: 7
};
const n = s.bind({});
n.args = {
  gap: 32
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
})`,
      ...r.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
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
      originalSource: `(args: FGridProps) => ({
  components: {
    FGrid
  },
  setup: () => ({
    args
  }),
  template: \`
    <FGrid v-bind="args">
      <div v-for="i in 24" :key="i" style="background: aliceblue">{{ i }}</div>
    </FGrid>\`
})`,
      ...n.parameters?.docs?.source
    }
  }
};
const c = ["Default", "Columns", "Gutter"];
export {
  e as Columns,
  r as Default,
  n as Gutter,
  c as __namedExportsOrder,
  d as default
};
