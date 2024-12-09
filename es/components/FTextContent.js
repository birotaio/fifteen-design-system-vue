import { defineComponent as u, computed as r, openBlock as m, createElementBlock as h, normalizeClass as g, unref as s } from "vue";
import f from "xss";
import "../vendor/countup.js/dist/countUp.min.js";
import "@vueuse/core";
import "../vendor/@fifteen/shared-lib/dist/es/composables/useLocaleFormat.js";
import "../vendor/@fifteen/shared-lib/dist/es/helpers/consoleWatch.js";
import { avoidOrphanPunct as b } from "../vendor/@fifteen/shared-lib/dist/es/utils/text.js";
const x = ["innerHTML"], B = /* @__PURE__ */ u({
  __name: "FTextContent",
  props: {
    source: {},
    allowedTags: { default: () => [
      "a",
      "abbr",
      "address",
      "article",
      "aside",
      "audio",
      "b",
      "bdi",
      "bdo",
      "blockquote",
      "br",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dialog",
      "dfn",
      "div",
      "dl",
      "dt",
      "em",
      "figcaption",
      "figure",
      "fieldset",
      "footer",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "i",
      "img",
      "ins",
      "kbd",
      "li",
      "legend",
      "main",
      "mark",
      "menu",
      "meter",
      "nav",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "search",
      "section",
      "small",
      "source",
      "span",
      "strong",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "u",
      "ul",
      "var",
      "wbr"
    ] },
    dense: { type: Boolean, default: !1 }
  },
  setup(n) {
    const o = n, a = {
      whiteList: {
        ...(o.allowedTags ?? []).reduce((e, t) => (e[t] = [], e), {}),
        a: ["href", "target", "rel"],
        abbr: ["title"],
        bdo: ["dir"],
        data: ["value"],
        h2: ["id"],
        meter: ["value", "min", "max"],
        ol: ["style"],
        time: ["datetime"],
        ul: ["style"]
      },
      onIgnoreTag: (e, t, c) => {
        if (e === "h1")
          return c.isClosing ? t.replace("h1", "h2") : t.replace("h1", 'h2 class="FTextContent__h1"');
      }
    }, i = [
      "\\s",
      "​",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      " ",
      "　",
      "&nbsp;",
      "&ensp;",
      "&emsp;",
      "&emsp13;",
      "&numsp;",
      "&puncsp;",
      "&thinsp;",
      "&hairsp;"
    ], p = new RegExp(
      `<p>(${i.join("|")})*</p>`,
      "gi"
    ), d = r(
      () => b(f(o.source, a)).replace(p, "")
    ), l = r(() => ({
      "FTextContent--dense": o.dense
    }));
    return (e, t) => (m(), h("div", {
      class: g(["FTextContent", s(l)]),
      innerHTML: s(d)
    }, null, 10, x));
  }
});
export {
  B as default
};
