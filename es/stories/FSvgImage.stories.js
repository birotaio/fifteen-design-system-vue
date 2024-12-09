import g from "./assets/pony.js";
import m from "./assets/pony2.js";
import { colorDesignTokens as a } from "../constants/colors.js";
import t from "../components/FSvgImage.js";
/* empty css                       */
const S = {
  title: "Components/FSvgImage",
  component: t,
  argTypes: {
    fillColor: {
      type: "select",
      options: ["", "none", ...a]
    },
    strokeColor: {
      type: "select",
      options: ["", "none", ...a]
    }
  }
}, s = (p) => ({
  components: {
    FSvgImage: t
  },
  setup: () => ({
    args: p
  }),
  template: '<FSvgImage v-bind="args" />'
}), e = s.bind({});
e.args = {
  component: g,
  alt: "component svg",
  fillColor: "primary",
  width: "240",
  height: "80"
};
const o = s.bind({});
o.args = {
  markup: m,
  alt: "markup svg",
  fillColor: "primary",
  width: "240",
  height: "80"
};
const r = s.bind({});
r.args = {
  src: "https://placeholder.pics/svg/24",
  alt: "src svg",
  fillColor: "primary",
  width: "24",
  height: "24"
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,
      ...e.parameters?.docs?.source
    }
  }
};
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
r.parameters = {
  ...r.parameters,
  docs: {
    ...r.parameters?.docs,
    source: {
      originalSource: `(args: FSvgImageProps) => ({
  components: {
    FSvgImage
  },
  setup: () => ({
    args
  }),
  template: '<FSvgImage v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
const d = ["SvgComponent", "SvgMarkup", "SvgSrc"];
export {
  e as SvgComponent,
  o as SvgMarkup,
  r as SvgSrc,
  d as __namedExportsOrder,
  S as default
};
