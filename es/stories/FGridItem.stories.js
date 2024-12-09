import o from "../components/FGrid.js";
/* empty css                   */
import d from "../components/FCard.js";
/* empty css                   */
import t from "../components/FGridItem.js";
/* empty css                       */
const u = {
  title: "Components/FGridItem",
  component: t,
  argTypes: {
    columns: {
      type: "number"
    },
    gutter: {
      type: "number"
    }
  }
}, r = (n) => ({
  components: {
    FGrid: o,
    FGridItem: t,
    FCard: d
  },
  setup: () => ({
    args: n
  }),
  template: `
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    `
}), i = r.bind({});
i.args = {};
const e = r.bind({});
e.args = {
  span: 2,
  xxs: 12,
  xs: 9,
  sm: 6,
  md: 4,
  lg: 3
};
i.parameters = {
  ...i.parameters,
  docs: {
    ...i.parameters?.docs,
    source: {
      originalSource: `(args: FGridItemProps) => ({
  components: {
    FGrid,
    FGridItem,
    FCard
  },
  setup: () => ({
    args
  }),
  template: \`
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    \`
})`,
      ...i.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FGridItemProps) => ({
  components: {
    FGrid,
    FGridItem,
    FCard
  },
  setup: () => ({
    args
  }),
  template: \`
    <div style="position: relative">
      <FGrid>
      <FGrid style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue"></div>
      </FGrid>
        <FGridItem v-bind="args">
          <FCard color="primary" style="padding: 16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </FCard>
        </FGridItem>
      </FGrid>
      <FGrid style="position: absolute; left: 0; right: 0;">
        <div v-for="i in 12" :key="i" style="background: aliceblue; text-align: center">{{ i }}</div>
      </FGrid>
    </div>
    \`
})`,
      ...e.parameters?.docs?.source
    }
  }
};
const F = ["Default", "Responsive"];
export {
  i as Default,
  e as Responsive,
  F as __namedExportsOrder,
  u as default
};
