import r from "./components/FsColorsCssVars.js";
/* empty css                            */
import e from "./components/FsColorsMixins.js";
/* empty css                           */
const p = {
  title: "Styles/Colors"
}, t = () => ({
  components: {
    FsColorsCssVars: r
  },
  template: "<FsColorsCssVars />"
}), s = t.bind({}), n = () => ({
  components: {
    FsColorsMixins: e
  },
  template: "<FsColorsMixins />"
}), o = n.bind({});
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FsColorsCssVars
  },
  template: \`<FsColorsCssVars />\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FsColorsMixins
  },
  template: \`<FsColorsMixins />\`
})`,
      ...o.parameters?.docs?.source
    }
  }
};
const l = ["CssVars", "Mixins"];
export {
  s as CssVars,
  o as Mixins,
  l as __namedExportsOrder,
  p as default
};
