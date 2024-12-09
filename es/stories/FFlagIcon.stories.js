import e from "./components/FsFlagGrid.js";
/* empty css                       */
const n = {
  title: "Components/FFlagIcon",
  component: e
}, a = (r) => ({
  components: {
    FsFlagGrid: e
  },
  setup: () => ({
    args: r
  }),
  template: '<FsFlagGrid v-bind="args" />'
}), s = a.bind({});
s.args = {
  size: 32
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FsFlagGridProps) => ({
  components: {
    FsFlagGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsFlagGrid v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const p = ["Default"];
export {
  s as Default,
  p as __namedExportsOrder,
  n as default
};
