"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const n=require("../../../react/index.js"),o={},u=n.default.createContext(o);function c(e){const t=n.default.useContext(u);return n.default.useMemo(function(){return typeof e=="function"?e(t):{...t,...e}},[t,e])}function l(e){let t;return e.disableParentContext?t=typeof e.components=="function"?e.components(o):e.components||o:t=c(e.components),n.default.createElement(u.Provider,{value:t},e.children)}exports.MDXProvider=l;exports.useMDXComponents=c;