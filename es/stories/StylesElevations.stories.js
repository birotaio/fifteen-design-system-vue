import e from "./components/FsElevationsMixins.js";
/* empty css                               */
const o = {
  title: "Styles/Elevations"
}, t = () => ({
  components: {
    FsElevationsMixins: e
  },
  template: "<FsElevationsMixins />"
}), s = t.bind({});
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FsElevationsMixins
  },
  template: \`<FsElevationsMixins />\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
const a = ["Mixins"];
export {
  s as Mixins,
  a as __namedExportsOrder,
  o as default
};
