import p from "./FImage.js";
/* empty css        */
import { defineComponent as u, computed as a, openBlock as r, createElementBlock as s, normalizeStyle as m, unref as t, toDisplayString as f, createBlock as g } from "vue";
import { genSize as h } from "../utils/genSize.js";
import { getCssColor as n } from "../utils/getCssColor.js";
const v = {
  key: 0,
  class: "FAvatar__letter"
}, _ = /* @__PURE__ */ u({
  __name: "FAvatar",
  props: {
    src: { default: "" },
    alt: { default: "" },
    size: { default: "80" },
    placeholder: { default: "" },
    loading: { default: "lazy" },
    letter: { default: "" },
    color: { default: "transparent" },
    textColor: { default: "secondary" }
  },
  setup(c) {
    const o = c, l = a(() => (o.letter[0] ?? "").toUpperCase()), i = a(() => ({
      "--FAvatar--size": h(o.size),
      "--FAvatar--color": n(o.color),
      "--FAvatar--textColor": n(o.textColor)
    }));
    return (e, y) => {
      const d = p;
      return r(), s("div", {
        class: "FAvatar",
        style: m(t(i))
      }, [
        !e.src && t(l) ? (r(), s("div", v, f(t(l)), 1)) : (r(), g(d, {
          key: 1,
          src: e.src,
          placeholder: e.placeholder,
          alt: e.alt,
          width: e.size,
          height: e.size,
          loading: e.loading,
          "background-color": e.color,
          corners: "circular"
        }, null, 8, ["src", "placeholder", "alt", "width", "height", "loading", "background-color"]))
      ], 4);
    };
  }
});
export {
  _ as default
};
