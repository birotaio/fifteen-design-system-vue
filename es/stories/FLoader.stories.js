import o from "../components/FLoader.js";
/* empty css                     */
const p = {
  title: "Components/FLoader",
  component: o
}, t = (r) => ({
  components: {
    FLoader: o
  },
  setup: () => ({
    args: r
  }),
  template: '<FLoader v-bind="args" />'
}), e = t.bind({});
e.args = {
  width: "64px",
  height: "64px"
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FLoaderProps) => ({
  components: {
    FLoader
  },
  setup: () => ({
    args
  }),
  template: '<FLoader v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
const n = ["Default"];
export {
  e as Default,
  n as __namedExportsOrder,
  p as default
};
