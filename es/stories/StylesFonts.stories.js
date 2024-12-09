import t from "./components/FsFontsElements.js";
import n from "./components/FsFontsMixins.js";
/* empty css                          */
const c = {
  title: "Styles/Fonts"
}, o = () => ({
  components: {
    FsFontsElements: t
  },
  template: "<FsFontsElements />"
}), s = o.bind({}), r = () => ({
  components: {
    FsFontsMixins: n
  },
  template: "<FsFontsMixins />"
}), e = r.bind({});
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FsFontsElements
  },
  template: \`<FsFontsElements />\`
})`,
      ...s.parameters?.docs?.source
    }
  }
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `() => ({
  components: {
    FsFontsMixins
  },
  template: \`<FsFontsMixins />\`
})`,
      ...e.parameters?.docs?.source
    }
  }
};
const p = ["Elements", "Mixins"];
export {
  s as Elements,
  e as Mixins,
  p as __namedExportsOrder,
  c as default
};
