import t from "../components/form/FRadioGroup.js";
/* empty css                              */
import c from "../components/FButton.js";
/* empty css                     */
import { ref as m } from "vue";
const G = {
  title: "Components/Form/FRadioGroup",
  component: t,
  argTypes: {
    displayMode: {
      options: ["vertical", "horizontal"]
    }
  }
}, i = (a) => ({
  components: {
    FRadioGroup: t
  },
  setup: () => ({
    args: a
  }),
  template: '<FRadioGroup v-bind="args" />'
}), e = i.bind({});
e.args = {
  label: "Pick a fruit",
  options: [{
    label: "Apple",
    value: "apple",
    name: "apple"
  }, {
    label: "Banana",
    value: "banana",
    name: "banana"
  }, {
    label: "Pear",
    value: "pear",
    name: "pear"
  }, {
    label: "Kiwi",
    value: "kiwi",
    name: "kiwi"
  }]
};
const o = i.bind({});
o.args = {
  label: "Pick a fruit",
  displayMode: "horizontal",
  options: [{
    label: "Apple",
    value: "apple",
    name: "apple"
  }, {
    label: "Banana",
    value: "banana",
    name: "banana"
  }, {
    label: "Pear",
    value: "pear",
    name: "pear"
  }, {
    label: "Kiwi",
    value: "kiwi",
    name: "kiwi"
  }]
};
const r = i.bind({});
r.args = {
  hint: "Choose your favorite fruit 🍏 🍌 🍐 🥝 ",
  options: [{
    label: "Apple",
    value: "apple",
    name: "apple"
  }, {
    label: "Banana",
    value: "banana",
    name: "banana"
  }, {
    label: "Pear",
    value: "pear",
    name: "pear"
  }, {
    label: "Kiwi",
    value: "kiwi",
    name: "kiwi"
  }]
};
const n = i.bind({});
n.args = {
  disabled: !0,
  label: "Pick a fruit",
  displayMode: "horizontal",
  options: [{
    label: "Apple",
    value: "apple",
    name: "apple"
  }, {
    label: "Banana",
    value: "banana",
    name: "banana"
  }, {
    label: "Pear",
    value: "pear",
    name: "pear"
  }, {
    label: "Kiwi",
    value: "kiwi",
    name: "kiwi"
  }]
};
const s = i.bind({});
s.args = {
  rules: [(a) => a === "kiwi"],
  label: "Pick the greenest fruit",
  displayMode: "horizontal",
  options: [{
    label: "Apple",
    value: "apple",
    name: "apple"
  }, {
    label: "Banana",
    value: "banana",
    name: "banana"
  }, {
    label: "Pear",
    value: "pear",
    name: "pear"
  }, {
    label: "Kiwi",
    value: "kiwi",
    name: "kiwi"
  }],
  modelValue: "apple",
  errorMessage: 'Select "kiwi" to dismiss the error',
  validateOnMount: !0
};
const d = (a) => ({
  components: {
    FRadioGroup: t,
    FButton: c
  },
  setup() {
    const l = m();
    function u() {
      l.value?.focus();
    }
    return {
      args: a,
      focus: u,
      radioGroupRef: l
    };
  },
  template: `
<div>
  <FRadioGroup ref="radioGroupRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>`
}), p = d.bind({});
p.args = {
  options: [{
    label: "Option A",
    value: "a",
    name: "a"
  }, {
    label: "Option B",
    value: "b",
    name: "b"
  }, {
    label: "Option C",
    value: "c",
    name: "c"
  }]
};
e.parameters = {
  ...e.parameters,
  docs: {
    ...e.parameters?.docs,
    source: {
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
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
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
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
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,
      ...r.parameters?.docs?.source
    }
  }
};
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,
      ...n.parameters?.docs?.source
    }
  }
};
s.parameters = {
  ...s.parameters,
  docs: {
    ...s.parameters?.docs,
    source: {
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup
  },
  setup: () => ({
    args
  }),
  template: '<FRadioGroup v-bind="args" />'
})`,
      ...s.parameters?.docs?.source
    }
  }
};
p.parameters = {
  ...p.parameters,
  docs: {
    ...p.parameters?.docs,
    source: {
      originalSource: `(args: FRadioGroupProps) => ({
  components: {
    FRadioGroup,
    FButton
  },
  setup() {
    const radioGroupRef = ref();
    function focus() {
      radioGroupRef.value?.focus();
    }
    return {
      args,
      focus,
      radioGroupRef
    };
  },
  template: \`
<div>
  <FRadioGroup ref="radioGroupRef" v-bind="args" />
  <FButton @click="focus">Focus the input</FButton>
</div>\`
})`,
      ...p.parameters?.docs?.source
    }
  }
};
const R = ["Default", "Horizontal", "WithHint", "Disabled", "Error", "FocusProgrammatically"];
export {
  e as Default,
  n as Disabled,
  s as Error,
  p as FocusProgrammatically,
  o as Horizontal,
  r as WithHint,
  R as __namedExportsOrder,
  G as default
};
