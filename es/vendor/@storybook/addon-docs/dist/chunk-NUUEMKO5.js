import t, { r as p } from "../../../react/index.js";
import { CodeOrSourceMdx as h, AnchorMdx as i, HeadersMdx as l, Docs as d } from "../../blocks/dist/index.js";
import { renderElement as u, unmountElement as E } from "../../react-dom-shim/dist/react-18.js";
var x = { code: h, a: i, ...l }, D = class extends p.Component {
  constructor() {
    super(...arguments), this.state = { hasError: !1 };
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e) {
    let { showException: r } = this.props;
    r(e);
  }
  render() {
    let { hasError: e } = this.state, { children: r } = this.props;
    return e ? null : t.createElement(t.Fragment, null, r);
  }
}, g = class {
  constructor() {
    this.render = async (e, r, o) => {
      let n = { ...x, ...r?.components }, s = d;
      return new Promise((c, a) => {
        import("../../../@mdx-js/react/index.js").then(({ MDXProvider: m }) => u(t.createElement(D, { showException: a, key: Math.random() }, t.createElement(m, { components: n }, t.createElement(s, { context: e, docsParameter: r }))), o)).then(() => c());
      });
    }, this.unmount = (e) => {
      E(e);
    };
  }
};
export {
  g as DocsRenderer,
  x as defaultComponents
};
