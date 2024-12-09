import e from "./components/FsCreditCardIconsGrid.js";
/* empty css                                  */
const d = {
  title: "Components/FCreditCardIcon",
  component: e
}, t = (s) => ({
  components: {
    FsCreditCardIconsGrid: e
  },
  setup: () => ({
    args: s
  }),
  template: '<FsCreditCardIconsGrid v-bind="args" />'
}), r = t.bind({});
r.args = {
  size: 32
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FsCreditCardIconGridProps) => ({
  components: {
    FsCreditCardIconsGrid
  },
  setup: () => ({
    args
  }),
  template: '<FsCreditCardIconsGrid v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
const n = ["Default"];
export {
  r as Default,
  n as __namedExportsOrder,
  d as default
};
