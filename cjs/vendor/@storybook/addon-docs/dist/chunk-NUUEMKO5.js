"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("../../../react/index.js"),n=require("../../blocks/dist/index.js"),o=require("../../react-dom-shim/dist/react-18.js");var s={code:n.CodeOrSourceMdx,a:n.AnchorMdx,...n.HeadersMdx},m=class extends r.reactExports.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:r.default.createElement(r.default.Fragment,null,t)}},h=class{constructor(){this.render=async(e,t,a)=>{let c={...s,...t?.components},u=n.Docs;return new Promise((d,l)=>{Promise.resolve().then(()=>require("../../../@mdx-js/react/index.js")).then(({MDXProvider:i})=>o.renderElement(r.default.createElement(m,{showException:l,key:Math.random()},r.default.createElement(i,{components:c},r.default.createElement(u,{context:e,docsParameter:t}))),a)).then(()=>d())})},this.unmount=e=>{o.unmountElement(e)}}};exports.DocsRenderer=h;exports.defaultComponents=s;