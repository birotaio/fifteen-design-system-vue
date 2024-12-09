import { createRouter as t, createWebHistory as r } from "vue-router";
/* empty css                      */
/* empty css                   */
import "../vendor/@storybook/vue3/dist/index.js";
import { createFds as o } from "../createFds.js";
import { setup as a } from "../vendor/@storybook/vue3/dist/chunk-IBPFZ7LW.js";
const d = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/
    }
  },
  backgrounds: {
    default: "neutral",
    values: [
      {
        name: "neutral",
        value: "#FFFFFF"
      },
      {
        name: "primary",
        value: "#FF0062"
      },
      {
        name: "secondary",
        value: "#012433"
      },
      {
        name: "success",
        value: "#83DEC9"
      },
      {
        name: "info",
        value: "#A900E7"
      }
    ]
  }
}, F = [
  (e) => ({
    components: { story: e },
    template: '<div class="Fifteen"><story /></div>'
  })
], s = t({
  history: r(),
  routes: [
    {
      path: "/test",
      name: "test",
      redirect: "/"
    },
    {
      path: "/",
      component: {}
    }
  ]
}), n = o();
a((e) => {
  e.use(s), e.use(n);
});
export {
  F as decorators,
  d as parameters
};
