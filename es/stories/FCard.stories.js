import t from "../components/FCard.js";
/* empty css                   */
import { colorDesignTokens as r } from "../constants/colors.js";
const p = {
  title: "Components/FCard",
  component: t,
  argTypes: {
    color: {
      type: "select",
      options: r
    },
    hoverColor: {
      type: "select",
      options: r
    },
    textColor: {
      type: "select",
      options: r
    },
    hoverTextColor: {
      type: "select",
      options: r
    }
  }
}, s = (a) => ({
  components: {
    FCard: t
  },
  setup: () => ({
    args: a
  }),
  template: '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'
}), e = s.bind({});
e.args = {
  width: "800px",
  color: "info",
  text: "“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”"
};
const o = s.bind({});
o.args = {
  width: "800px",
  color: "info",
  hoverColor: "secondary",
  text: "“Choisir Fifteen, c’est choisir la fiabilité, la sécurité et la technologie. Pour nous c’était un choix facile.”",
  textColor: "neutral--light-5",
  hoverTextColor: "primary"
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FCardProps) => ({
  components: {
    FCard
  },
  setup: () => ({
    args
  }),
  template: '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'
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
      originalSource: `(args: FCardProps) => ({
  components: {
    FCard
  },
  setup: () => ({
    args
  }),
  template: '<FCard v-bind="args" style="padding: 24px">{{ args.text }}</FCard>'
})`,
      ...o.parameters?.docs?.source
    }
  }
};
const l = ["Default", "Hover"];
export {
  e as Default,
  o as Hover,
  l as __namedExportsOrder,
  p as default
};
