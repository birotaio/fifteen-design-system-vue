import { commonjsGlobal as rt } from "../../../_virtual/_commonjsHelpers.js";
import { __module as z } from "../../../_virtual/index.js";
(function(at, de) {
  (function(h, R) {
    R(de);
  })(rt, function(h) {
    function R(e) {
      return e.text !== void 0 && e.text !== "" ? `'${e.type}' with value '${e.text}'` : `'${e.type}'`;
    }
    class I extends Error {
      constructor(t) {
        super(`No parslet found for token: ${R(t)}`), this.token = t, Object.setPrototypeOf(this, I.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class j extends Error {
      constructor(t) {
        super(`The parsing ended early. The next token was: ${R(t)}`), this.token = t, Object.setPrototypeOf(this, j.prototype);
      }
      getToken() {
        return this.token;
      }
    }
    class T extends Error {
      constructor(t, n) {
        let o = `Unexpected type: '${t.type}'.`;
        n !== void 0 && (o += ` Message: ${n}`), super(o), Object.setPrototypeOf(this, T.prototype);
      }
    }
    function l(e) {
      return (t) => t.startsWith(e) ? { type: e, text: e } : null;
    }
    function ue(e) {
      let t = 0, n;
      const o = e[0];
      let r = !1;
      if (o !== "'" && o !== '"')
        return null;
      for (; t < e.length; ) {
        if (t++, n = e[t], !r && n === o) {
          t++;
          break;
        }
        r = !r && n === "\\";
      }
      if (n !== o)
        throw new Error("Unterminated String");
      return e.slice(0, t);
    }
    const me = /[$_\p{ID_Start}]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u, Z = /[$\-\p{ID_Continue}\u200C\u200D]|\\u\p{Hex_Digit}{4}|\\u\{0*(?:\p{Hex_Digit}{1,5}|10\p{Hex_Digit}{4})\}/u;
    function Te(e) {
      let t = e[0];
      if (!me.test(t))
        return null;
      let n = 1;
      do {
        if (t = e[n], !Z.test(t))
          break;
        n++;
      } while (n < e.length);
      return e.slice(0, n);
    }
    const fe = /^(NaN|-?((\d*\.\d+|\d+)([Ee][+-]?\d+)?|Infinity))/;
    function Je(e) {
      var t, n;
      return (n = (t = fe.exec(e)) === null || t === void 0 ? void 0 : t[0]) !== null && n !== void 0 ? n : null;
    }
    const he = (e) => {
      const t = Te(e);
      return t == null ? null : {
        type: "Identifier",
        text: t
      };
    };
    function f(e) {
      return (t) => {
        if (!t.startsWith(e))
          return null;
        const n = t[e.length];
        return n !== void 0 && Z.test(n) ? null : {
          type: e,
          text: e
        };
      };
    }
    const we = (e) => {
      const t = ue(e);
      return t == null ? null : {
        type: "StringValue",
        text: t
      };
    }, Ne = (e) => e.length > 0 ? null : {
      type: "EOF",
      text: ""
    }, Ee = (e) => {
      const t = Je(e);
      return t === null ? null : {
        type: "Number",
        text: t
      };
    }, Pe = [
      Ne,
      l("=>"),
      l("("),
      l(")"),
      l("{"),
      l("}"),
      l("["),
      l("]"),
      l("|"),
      l("&"),
      l("<"),
      l(">"),
      l(","),
      l(";"),
      l("*"),
      l("?"),
      l("!"),
      l("="),
      l(":"),
      l("..."),
      l("."),
      l("#"),
      l("~"),
      l("/"),
      l("@"),
      f("undefined"),
      f("null"),
      f("function"),
      f("this"),
      f("new"),
      f("module"),
      f("event"),
      f("external"),
      f("typeof"),
      f("keyof"),
      f("readonly"),
      f("import"),
      f("is"),
      f("in"),
      f("asserts"),
      Ee,
      he,
      we
    ], ge = /^\s*\n\s*/;
    class S {
      static create(t) {
        const n = this.read(t);
        t = n.text;
        const o = this.read(t);
        return t = o.text, new S(t, void 0, n.token, o.token);
      }
      constructor(t, n, o, r) {
        this.text = "", this.text = t, this.previous = n, this.current = o, this.next = r;
      }
      static read(t, n = !1) {
        n = n || ge.test(t), t = t.trim();
        for (const o of Pe) {
          const r = o(t);
          if (r !== null) {
            const a = Object.assign(Object.assign({}, r), { startOfLine: n });
            return t = t.slice(a.text.length), { text: t, token: a };
          }
        }
        throw new Error("Unexpected Token " + t);
      }
      advance() {
        const t = S.read(this.text);
        return new S(t.text, this.current, this.next, t.token);
      }
    }
    function y(e) {
      if (e === void 0)
        throw new Error("Unexpected undefined");
      if (e.type === "JsdocTypeKeyValue" || e.type === "JsdocTypeParameterList" || e.type === "JsdocTypeProperty" || e.type === "JsdocTypeReadonlyProperty" || e.type === "JsdocTypeObjectField" || e.type === "JsdocTypeJsdocObjectField" || e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType")
        throw new T(e);
      return e;
    }
    function $(e) {
      return e.type === "JsdocTypeKeyValue" ? v(e) : y(e);
    }
    function be(e) {
      return e.type === "JsdocTypeName" ? e : v(e);
    }
    function v(e) {
      if (e.type !== "JsdocTypeKeyValue")
        throw new T(e);
      return e;
    }
    function xe(e) {
      var t;
      if (e.type === "JsdocTypeVariadic") {
        if (((t = e.element) === null || t === void 0 ? void 0 : t.type) === "JsdocTypeName")
          return e;
        throw new T(e);
      }
      if (e.type !== "JsdocTypeNumber" && e.type !== "JsdocTypeName")
        throw new T(e);
      return e;
    }
    function q(e) {
      return e.type === "JsdocTypeIndexSignature" || e.type === "JsdocTypeMappedType";
    }
    var s;
    (function(e) {
      e[e.ALL = 0] = "ALL", e[e.PARAMETER_LIST = 1] = "PARAMETER_LIST", e[e.OBJECT = 2] = "OBJECT", e[e.KEY_VALUE = 3] = "KEY_VALUE", e[e.INDEX_BRACKETS = 4] = "INDEX_BRACKETS", e[e.UNION = 5] = "UNION", e[e.INTERSECTION = 6] = "INTERSECTION", e[e.PREFIX = 7] = "PREFIX", e[e.INFIX = 8] = "INFIX", e[e.TUPLE = 9] = "TUPLE", e[e.SYMBOL = 10] = "SYMBOL", e[e.OPTIONAL = 11] = "OPTIONAL", e[e.NULLABLE = 12] = "NULLABLE", e[e.KEY_OF_TYPE_OF = 13] = "KEY_OF_TYPE_OF", e[e.FUNCTION = 14] = "FUNCTION", e[e.ARROW = 15] = "ARROW", e[e.ARRAY_BRACKETS = 16] = "ARRAY_BRACKETS", e[e.GENERIC = 17] = "GENERIC", e[e.NAME_PATH = 18] = "NAME_PATH", e[e.PARENTHESIS = 19] = "PARENTHESIS", e[e.SPECIAL_TYPES = 20] = "SPECIAL_TYPES";
    })(s || (s = {}));
    class b {
      constructor(t, n, o) {
        this.grammar = t, typeof n == "string" ? this._lexer = S.create(n) : this._lexer = n, this.baseParser = o;
      }
      get lexer() {
        return this._lexer;
      }
      /**
       * Parses a given string and throws an error if the parse ended before the end of the string.
       */
      parse() {
        const t = this.parseType(s.ALL);
        if (this.lexer.current.type !== "EOF")
          throw new j(this.lexer.current);
        return t;
      }
      /**
       * Parses with the current lexer and asserts that the result is a {@link RootResult}.
       */
      parseType(t) {
        return y(this.parseIntermediateType(t));
      }
      /**
       * The main parsing function. First it tries to parse the current state in the prefix step, and then it continues
       * to parse the state in the infix step.
       */
      parseIntermediateType(t) {
        const n = this.tryParslets(null, t);
        if (n === null)
          throw new I(this.lexer.current);
        return this.parseInfixIntermediateType(n, t);
      }
      /**
       * In the infix parsing step the parser continues to parse the current state with all parslets until none returns
       * a result.
       */
      parseInfixIntermediateType(t, n) {
        let o = this.tryParslets(t, n);
        for (; o !== null; )
          t = o, o = this.tryParslets(t, n);
        return t;
      }
      /**
       * Tries to parse the current state with all parslets in the grammar and returns the first non null result.
       */
      tryParslets(t, n) {
        for (const o of this.grammar) {
          const r = o(this, n, t);
          if (r !== null)
            return r;
        }
        return null;
      }
      /**
       * If the given type equals the current type of the {@link Lexer} advance the lexer. Return true if the lexer was
       * advanced.
       */
      consume(t) {
        return Array.isArray(t) || (t = [t]), t.includes(this.lexer.current.type) ? (this._lexer = this.lexer.advance(), !0) : !1;
      }
      acceptLexerState(t) {
        this._lexer = t.lexer;
      }
    }
    function ee(e) {
      return e === "EOF" || e === "|" || e === "," || e === ")" || e === ">";
    }
    const M = (e, t, n) => {
      const o = e.lexer.current.type, r = e.lexer.next.type;
      return n == null && o === "?" && !ee(r) || n != null && o === "?" ? (e.consume("?"), n == null ? {
        type: "JsdocTypeNullable",
        element: e.parseType(s.NULLABLE),
        meta: {
          position: "prefix"
        }
      } : {
        type: "JsdocTypeNullable",
        element: y(n),
        meta: {
          position: "suffix"
        }
      }) : null;
    };
    function p(e) {
      const t = (n, o, r) => {
        const a = n.lexer.current.type, i = n.lexer.next.type;
        if (r === null) {
          if ("parsePrefix" in e && e.accept(a, i))
            return e.parsePrefix(n);
        } else if ("parseInfix" in e && e.precedence > o && e.accept(a, i))
          return e.parseInfix(n, r);
        return null;
      };
      return Object.defineProperty(t, "name", {
        value: e.name
      }), t;
    }
    const F = p({
      name: "optionalParslet",
      accept: (e) => e === "=",
      precedence: s.OPTIONAL,
      parsePrefix: (e) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: e.parseType(s.OPTIONAL),
        meta: {
          position: "prefix"
        }
      }),
      parseInfix: (e, t) => (e.consume("="), {
        type: "JsdocTypeOptional",
        element: y(t),
        meta: {
          position: "suffix"
        }
      })
    }), L = p({
      name: "numberParslet",
      accept: (e) => e === "Number",
      parsePrefix: (e) => {
        const t = parseFloat(e.lexer.current.text);
        return e.consume("Number"), {
          type: "JsdocTypeNumber",
          value: t
        };
      }
    }), Ie = p({
      name: "parenthesisParslet",
      accept: (e) => e === "(",
      parsePrefix: (e) => {
        if (e.consume("("), e.consume(")"))
          return {
            type: "JsdocTypeParameterList",
            elements: []
          };
        const t = e.parseIntermediateType(s.ALL);
        if (!e.consume(")"))
          throw new Error("Unterminated parenthesis");
        return t.type === "JsdocTypeParameterList" ? t : t.type === "JsdocTypeKeyValue" ? {
          type: "JsdocTypeParameterList",
          elements: [t]
        } : {
          type: "JsdocTypeParenthesis",
          element: y(t)
        };
      }
    }), Se = p({
      name: "specialTypesParslet",
      accept: (e, t) => e === "?" && ee(t) || e === "null" || e === "undefined" || e === "*",
      parsePrefix: (e) => {
        if (e.consume("null"))
          return {
            type: "JsdocTypeNull"
          };
        if (e.consume("undefined"))
          return {
            type: "JsdocTypeUndefined"
          };
        if (e.consume("*"))
          return {
            type: "JsdocTypeAny"
          };
        if (e.consume("?"))
          return {
            type: "JsdocTypeUnknown"
          };
        throw new Error("Unacceptable token: " + e.lexer.current.text);
      }
    }), Ae = p({
      name: "notNullableParslet",
      accept: (e) => e === "!",
      precedence: s.NULLABLE,
      parsePrefix: (e) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: e.parseType(s.NULLABLE),
        meta: {
          position: "prefix"
        }
      }),
      parseInfix: (e, t) => (e.consume("!"), {
        type: "JsdocTypeNotNullable",
        element: y(t),
        meta: {
          position: "suffix"
        }
      })
    });
    function Oe({ allowTrailingComma: e }) {
      return p({
        name: "parameterListParslet",
        accept: (t) => t === ",",
        precedence: s.PARAMETER_LIST,
        parseInfix: (t, n) => {
          const o = [
            $(n)
          ];
          t.consume(",");
          do
            try {
              const r = t.parseIntermediateType(s.PARAMETER_LIST);
              o.push($(r));
            } catch (r) {
              if (e && r instanceof I)
                break;
              throw r;
            }
          while (t.consume(","));
          if (o.length > 0 && o.slice(0, -1).some((r) => r.type === "JsdocTypeVariadic"))
            throw new Error("Only the last parameter may be a rest parameter");
          return {
            type: "JsdocTypeParameterList",
            elements: o
          };
        }
      });
    }
    const ke = p({
      name: "genericParslet",
      accept: (e, t) => e === "<" || e === "." && t === "<",
      precedence: s.GENERIC,
      parseInfix: (e, t) => {
        const n = e.consume(".");
        e.consume("<");
        const o = [];
        do
          o.push(e.parseType(s.PARAMETER_LIST));
        while (e.consume(","));
        if (!e.consume(">"))
          throw new Error("Unterminated generic parameter list");
        return {
          type: "JsdocTypeGeneric",
          left: y(t),
          elements: o,
          meta: {
            brackets: "angle",
            dot: n
          }
        };
      }
    }), Re = p({
      name: "unionParslet",
      accept: (e) => e === "|",
      precedence: s.UNION,
      parseInfix: (e, t) => {
        e.consume("|");
        const n = [];
        do
          n.push(e.parseType(s.UNION));
        while (e.consume("|"));
        return {
          type: "JsdocTypeUnion",
          elements: [y(t), ...n]
        };
      }
    }), B = [
      M,
      F,
      L,
      Ie,
      Se,
      Ae,
      Oe({
        allowTrailingComma: !0
      }),
      ke,
      Re,
      F
    ];
    function _({ allowSquareBracketsOnAnyType: e, allowJsdocNamePaths: t, pathGrammar: n }) {
      return function(r, a, i) {
        if (i == null || a >= s.NAME_PATH)
          return null;
        const c = r.lexer.current.type, m = r.lexer.next.type;
        if (!(c === "." && m !== "<" || c === "[" && (e || i.type === "JsdocTypeName") || t && (c === "~" || c === "#")))
          return null;
        let J, K = !1;
        r.consume(".") ? J = "property" : r.consume("[") ? (J = "property-brackets", K = !0) : r.consume("~") ? J = "inner" : (r.consume("#"), J = "instance");
        const le = n !== null ? new b(n, r.lexer, r) : r, w = le.parseIntermediateType(s.NAME_PATH);
        r.acceptLexerState(le);
        let k;
        switch (w.type) {
          case "JsdocTypeName":
            k = {
              type: "JsdocTypeProperty",
              value: w.value,
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeNumber":
            k = {
              type: "JsdocTypeProperty",
              value: w.value.toString(10),
              meta: {
                quote: void 0
              }
            };
            break;
          case "JsdocTypeStringValue":
            k = {
              type: "JsdocTypeProperty",
              value: w.value,
              meta: {
                quote: w.meta.quote
              }
            };
            break;
          case "JsdocTypeSpecialNamePath":
            if (w.specialType === "event")
              k = w;
            else
              throw new T(w, "Type 'JsdocTypeSpecialNamePath' is only allowed with specialType 'event'");
            break;
          default:
            throw new T(w, "Expecting 'JsdocTypeName', 'JsdocTypeNumber', 'JsdocStringValue' or 'JsdocTypeSpecialNamePath'");
        }
        if (K && !r.consume("]")) {
          const ye = r.lexer.current;
          throw new Error(`Unterminated square brackets. Next token is '${ye.type}' with text '${ye.text}'`);
        }
        return {
          type: "JsdocTypeNamePath",
          left: y(i),
          right: k,
          pathType: J
        };
      };
    }
    function N({ allowedAdditionalTokens: e }) {
      return p({
        name: "nameParslet",
        accept: (t) => t === "Identifier" || t === "this" || t === "new" || e.includes(t),
        parsePrefix: (t) => {
          const { type: n, text: o } = t.lexer.current;
          return t.consume(n), {
            type: "JsdocTypeName",
            value: o
          };
        }
      });
    }
    const A = p({
      name: "stringValueParslet",
      accept: (e) => e === "StringValue",
      parsePrefix: (e) => {
        const t = e.lexer.current.text;
        return e.consume("StringValue"), {
          type: "JsdocTypeStringValue",
          value: t.slice(1, -1),
          meta: {
            quote: t[0] === "'" ? "single" : "double"
          }
        };
      }
    });
    function U({ pathGrammar: e, allowedTypes: t }) {
      return p({
        name: "specialNamePathParslet",
        accept: (n) => t.includes(n),
        parsePrefix: (n) => {
          const o = n.lexer.current.type;
          if (n.consume(o), !n.consume(":"))
            return {
              type: "JsdocTypeName",
              value: o
            };
          let r, a = n.lexer.current;
          if (n.consume("StringValue"))
            r = {
              type: "JsdocTypeSpecialNamePath",
              value: a.text.slice(1, -1),
              specialType: o,
              meta: {
                quote: a.text[0] === "'" ? "single" : "double"
              }
            };
          else {
            let m = "";
            const d = ["Identifier", "@", "/"];
            for (; d.some((J) => n.consume(J)); )
              m += a.text, a = n.lexer.current;
            r = {
              type: "JsdocTypeSpecialNamePath",
              value: m,
              specialType: o,
              meta: {
                quote: void 0
              }
            };
          }
          const i = new b(e, n.lexer, n), c = i.parseInfixIntermediateType(r, s.ALL);
          return n.acceptLexerState(i), y(c);
        }
      });
    }
    const te = [
      N({
        allowedAdditionalTokens: ["external", "module"]
      }),
      A,
      L,
      _({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: null
      })
    ], x = [
      ...te,
      U({
        allowedTypes: ["event"],
        pathGrammar: te
      })
    ];
    function C(e) {
      let t;
      if (e.type === "JsdocTypeParameterList")
        t = e.elements;
      else if (e.type === "JsdocTypeParenthesis")
        t = [e.element];
      else
        throw new T(e);
      return t.map((n) => $(n));
    }
    function ve(e) {
      const t = C(e);
      if (t.some((n) => n.type === "JsdocTypeKeyValue"))
        throw new Error("No parameter should be named");
      return t;
    }
    function Y({ allowNamedParameters: e, allowNoReturnType: t, allowWithoutParenthesis: n, allowNewAsFunctionKeyword: o }) {
      return p({
        name: "functionParslet",
        accept: (r, a) => r === "function" || o && r === "new" && a === "(",
        parsePrefix: (r) => {
          const a = r.consume("new");
          r.consume("function");
          const i = r.lexer.current.type === "(";
          if (!i) {
            if (!n)
              throw new Error("function is missing parameter list");
            return {
              type: "JsdocTypeName",
              value: "function"
            };
          }
          let c = {
            type: "JsdocTypeFunction",
            parameters: [],
            arrow: !1,
            constructor: a,
            parenthesis: i
          };
          const m = r.parseIntermediateType(s.FUNCTION);
          if (e === void 0)
            c.parameters = ve(m);
          else {
            if (a && m.type === "JsdocTypeFunction" && m.arrow)
              return c = m, c.constructor = !0, c;
            c.parameters = C(m);
            for (const d of c.parameters)
              if (d.type === "JsdocTypeKeyValue" && !e.includes(d.key))
                throw new Error(`only allowed named parameters are ${e.join(", ")} but got ${d.type}`);
          }
          if (r.consume(":"))
            c.returnType = r.parseType(s.PREFIX);
          else if (!t)
            throw new Error("function is missing return type");
          return c;
        }
      });
    }
    function G({ allowPostfix: e, allowEnclosingBrackets: t }) {
      return p({
        name: "variadicParslet",
        accept: (n) => n === "...",
        precedence: s.PREFIX,
        parsePrefix: (n) => {
          n.consume("...");
          const o = t && n.consume("[");
          try {
            const r = n.parseType(s.PREFIX);
            if (o && !n.consume("]"))
              throw new Error("Unterminated variadic type. Missing ']'");
            return {
              type: "JsdocTypeVariadic",
              element: y(r),
              meta: {
                position: "prefix",
                squareBrackets: o
              }
            };
          } catch (r) {
            if (r instanceof I) {
              if (o)
                throw new Error("Empty square brackets for variadic are not allowed.");
              return {
                type: "JsdocTypeVariadic",
                meta: {
                  position: void 0,
                  squareBrackets: !1
                }
              };
            } else
              throw r;
          }
        },
        parseInfix: e ? (n, o) => (n.consume("..."), {
          type: "JsdocTypeVariadic",
          element: y(o),
          meta: {
            position: "suffix",
            squareBrackets: !1
          }
        }) : void 0
      });
    }
    const ne = p({
      name: "symbolParslet",
      accept: (e) => e === "(",
      precedence: s.SYMBOL,
      parseInfix: (e, t) => {
        if (t.type !== "JsdocTypeName")
          throw new Error("Symbol expects a name on the left side. (Reacting on '(')");
        e.consume("(");
        const n = {
          type: "JsdocTypeSymbol",
          value: t.value
        };
        if (!e.consume(")")) {
          const o = e.parseIntermediateType(s.SYMBOL);
          if (n.element = xe(o), !e.consume(")"))
            throw new Error("Symbol does not end after value");
        }
        return n;
      }
    }), oe = p({
      name: "arrayBracketsParslet",
      precedence: s.ARRAY_BRACKETS,
      accept: (e, t) => e === "[" && t === "]",
      parseInfix: (e, t) => (e.consume("["), e.consume("]"), {
        type: "JsdocTypeGeneric",
        left: {
          type: "JsdocTypeName",
          value: "Array"
        },
        elements: [
          y(t)
        ],
        meta: {
          brackets: "square",
          dot: !1
        }
      })
    });
    function D({ objectFieldGrammar: e, allowKeyTypes: t }) {
      return p({
        name: "objectParslet",
        accept: (n) => n === "{",
        parsePrefix: (n) => {
          n.consume("{");
          const o = {
            type: "JsdocTypeObject",
            meta: {
              separator: "comma"
            },
            elements: []
          };
          if (!n.consume("}")) {
            let r;
            const a = new b(e, n.lexer, n);
            for (; ; ) {
              a.acceptLexerState(n);
              let i = a.parseIntermediateType(s.OBJECT);
              n.acceptLexerState(a), i === void 0 && t && (i = n.parseIntermediateType(s.OBJECT));
              let c = !1;
              if (i.type === "JsdocTypeNullable" && (c = !0, i = i.element), i.type === "JsdocTypeNumber" || i.type === "JsdocTypeName" || i.type === "JsdocTypeStringValue") {
                let d;
                i.type === "JsdocTypeStringValue" && (d = i.meta.quote), o.elements.push({
                  type: "JsdocTypeObjectField",
                  key: i.value.toString(),
                  right: void 0,
                  optional: c,
                  readonly: !1,
                  meta: {
                    quote: d
                  }
                });
              } else if (i.type === "JsdocTypeObjectField" || i.type === "JsdocTypeJsdocObjectField")
                o.elements.push(i);
              else
                throw new T(i);
              if (n.lexer.current.startOfLine)
                r = "linebreak";
              else if (n.consume(","))
                r = "comma";
              else if (n.consume(";"))
                r = "semicolon";
              else
                break;
              if (n.lexer.current.type === "}")
                break;
            }
            if (o.meta.separator = r ?? "comma", !n.consume("}"))
              throw new Error("Unterminated record type. Missing '}'");
          }
          return o;
        }
      });
    }
    function X({ allowSquaredProperties: e, allowKeyTypes: t, allowReadonly: n, allowOptional: o }) {
      return p({
        name: "objectFieldParslet",
        precedence: s.KEY_VALUE,
        accept: (r) => r === ":",
        parseInfix: (r, a) => {
          var i;
          let c = !1, m = !1;
          o && a.type === "JsdocTypeNullable" && (c = !0, a = a.element), n && a.type === "JsdocTypeReadonlyProperty" && (m = !0, a = a.element);
          const d = (i = r.baseParser) !== null && i !== void 0 ? i : r;
          if (d.acceptLexerState(r), a.type === "JsdocTypeNumber" || a.type === "JsdocTypeName" || a.type === "JsdocTypeStringValue" || q(a)) {
            if (q(a) && !e)
              throw new T(a);
            d.consume(":");
            let J;
            a.type === "JsdocTypeStringValue" && (J = a.meta.quote);
            const K = d.parseType(s.KEY_VALUE);
            return r.acceptLexerState(d), {
              type: "JsdocTypeObjectField",
              key: q(a) ? a : a.value.toString(),
              right: K,
              optional: c,
              readonly: m,
              meta: {
                quote: J
              }
            };
          } else {
            if (!t)
              throw new T(a);
            d.consume(":");
            const J = d.parseType(s.KEY_VALUE);
            return r.acceptLexerState(d), {
              type: "JsdocTypeJsdocObjectField",
              left: y(a),
              right: J
            };
          }
        }
      });
    }
    function H({ allowOptional: e, allowVariadic: t }) {
      return p({
        name: "keyValueParslet",
        precedence: s.KEY_VALUE,
        accept: (n) => n === ":",
        parseInfix: (n, o) => {
          let r = !1, a = !1;
          if (e && o.type === "JsdocTypeNullable" && (r = !0, o = o.element), t && o.type === "JsdocTypeVariadic" && o.element !== void 0 && (a = !0, o = o.element), o.type !== "JsdocTypeName")
            throw new T(o);
          n.consume(":");
          const i = n.parseType(s.KEY_VALUE);
          return {
            type: "JsdocTypeKeyValue",
            key: o.value,
            right: i,
            optional: r,
            variadic: a
          };
        }
      });
    }
    const re = [
      ...B,
      Y({
        allowWithoutParenthesis: !0,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      A,
      U({
        allowedTypes: ["module", "external", "event"],
        pathGrammar: x
      }),
      G({
        allowEnclosingBrackets: !0,
        allowPostfix: !0
      }),
      N({
        allowedAdditionalTokens: ["keyof"]
      }),
      ne,
      oe,
      _({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: x
      })
    ], Fe = [
      ...re,
      D({
        // jsdoc syntax allows full types as keys, so we need to pull in the full grammar here
        // we leave out the object type deliberately
        objectFieldGrammar: [
          N({
            allowedAdditionalTokens: ["module", "in"]
          }),
          X({
            allowSquaredProperties: !1,
            allowKeyTypes: !0,
            allowOptional: !1,
            allowReadonly: !1
          }),
          ...re
        ],
        allowKeyTypes: !0
      }),
      H({
        allowOptional: !0,
        allowVariadic: !0
      })
    ], ae = p({
      name: "typeOfParslet",
      accept: (e) => e === "typeof",
      parsePrefix: (e) => (e.consume("typeof"), {
        type: "JsdocTypeTypeof",
        element: y(e.parseType(s.KEY_OF_TYPE_OF))
      })
    }), Le = [
      N({
        allowedAdditionalTokens: ["module", "keyof", "event", "external", "in"]
      }),
      M,
      F,
      A,
      L,
      X({
        allowSquaredProperties: !1,
        allowKeyTypes: !1,
        allowOptional: !1,
        allowReadonly: !1
      })
    ], _e = [
      ...B,
      D({
        allowKeyTypes: !1,
        objectFieldGrammar: Le
      }),
      N({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      ae,
      Y({
        allowWithoutParenthesis: !1,
        allowNamedParameters: ["this", "new"],
        allowNoReturnType: !0,
        allowNewAsFunctionKeyword: !1
      }),
      G({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      // additional name parslet is needed for some special cases
      N({
        allowedAdditionalTokens: ["keyof"]
      }),
      U({
        allowedTypes: ["module"],
        pathGrammar: x
      }),
      _({
        allowSquareBracketsOnAnyType: !1,
        allowJsdocNamePaths: !0,
        pathGrammar: x
      }),
      H({
        allowOptional: !1,
        allowVariadic: !1
      }),
      ne
    ], Ue = p({
      name: "assertsParslet",
      accept: (e) => e === "asserts",
      parsePrefix: (e) => {
        e.consume("asserts");
        const t = e.parseIntermediateType(s.SYMBOL);
        if (t.type !== "JsdocTypeName")
          throw new T(t, "A typescript asserts always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypeAsserts",
          left: t,
          right: y(e.parseIntermediateType(s.INFIX))
        };
      }
    });
    function Ve({ allowQuestionMark: e }) {
      return p({
        name: "tupleParslet",
        accept: (t) => t === "[",
        parsePrefix: (t) => {
          t.consume("[");
          const n = {
            type: "JsdocTypeTuple",
            elements: []
          };
          if (t.consume("]"))
            return n;
          const o = t.parseIntermediateType(s.ALL);
          if (o.type === "JsdocTypeParameterList" ? o.elements[0].type === "JsdocTypeKeyValue" ? n.elements = o.elements.map(v) : n.elements = o.elements.map(y) : o.type === "JsdocTypeKeyValue" ? n.elements = [v(o)] : n.elements = [y(o)], !t.consume("]"))
            throw new Error("Unterminated '['");
          if (!e && n.elements.some((r) => r.type === "JsdocTypeUnknown"))
            throw new Error("Question mark in tuple not allowed");
          return n;
        }
      });
    }
    const Ke = p({
      name: "keyOfParslet",
      accept: (e) => e === "keyof",
      parsePrefix: (e) => (e.consume("keyof"), {
        type: "JsdocTypeKeyof",
        element: y(e.parseType(s.KEY_OF_TYPE_OF))
      })
    }), je = p({
      name: "importParslet",
      accept: (e) => e === "import",
      parsePrefix: (e) => {
        if (e.consume("import"), !e.consume("("))
          throw new Error("Missing parenthesis after import keyword");
        const t = e.parseType(s.PREFIX);
        if (t.type !== "JsdocTypeStringValue")
          throw new Error("Only string values are allowed as paths for imports");
        if (!e.consume(")"))
          throw new Error("Missing closing parenthesis after import keyword");
        return {
          type: "JsdocTypeImport",
          element: t
        };
      }
    }), $e = p({
      name: "readonlyPropertyParslet",
      accept: (e) => e === "readonly",
      parsePrefix: (e) => (e.consume("readonly"), {
        type: "JsdocTypeReadonlyProperty",
        element: e.parseType(s.KEY_VALUE)
      })
    }), qe = p({
      name: "arrowFunctionParslet",
      precedence: s.ARROW,
      accept: (e) => e === "=>",
      parseInfix: (e, t) => (e.consume("=>"), {
        type: "JsdocTypeFunction",
        parameters: C(t).map(be),
        arrow: !0,
        constructor: !1,
        parenthesis: !0,
        returnType: e.parseType(s.OBJECT)
      })
    }), Me = p({
      name: "intersectionParslet",
      accept: (e) => e === "&",
      precedence: s.INTERSECTION,
      parseInfix: (e, t) => {
        e.consume("&");
        const n = [];
        do
          n.push(e.parseType(s.INTERSECTION));
        while (e.consume("&"));
        return {
          type: "JsdocTypeIntersection",
          elements: [y(t), ...n]
        };
      }
    }), Be = p({
      name: "predicateParslet",
      precedence: s.INFIX,
      accept: (e) => e === "is",
      parseInfix: (e, t) => {
        if (t.type !== "JsdocTypeName")
          throw new T(t, "A typescript predicate always has to have a name on the left side.");
        return e.consume("is"), {
          type: "JsdocTypePredicate",
          left: t,
          right: y(e.parseIntermediateType(s.INFIX))
        };
      }
    }), Ce = p({
      name: "objectSquareBracketPropertyParslet",
      accept: (e) => e === "[",
      parsePrefix: (e) => {
        if (e.baseParser === void 0)
          throw new Error("Only allowed inside object grammar");
        e.consume("[");
        const t = e.lexer.current.text;
        e.consume("Identifier");
        let n;
        if (e.consume(":")) {
          const o = e.baseParser;
          o.acceptLexerState(e), n = {
            type: "JsdocTypeIndexSignature",
            key: t,
            right: o.parseType(s.INDEX_BRACKETS)
          }, e.acceptLexerState(o);
        } else if (e.consume("in")) {
          const o = e.baseParser;
          o.acceptLexerState(e), n = {
            type: "JsdocTypeMappedType",
            key: t,
            right: o.parseType(s.ARRAY_BRACKETS)
          }, e.acceptLexerState(o);
        } else
          throw new Error("Missing ':' or 'in' inside square bracketed property.");
        if (!e.consume("]"))
          throw new Error("Unterminated square brackets");
        return n;
      }
    }), Ye = [
      $e,
      N({
        allowedAdditionalTokens: ["module", "event", "keyof", "event", "external", "in"]
      }),
      M,
      F,
      A,
      L,
      X({
        allowSquaredProperties: !0,
        allowKeyTypes: !1,
        allowOptional: !0,
        allowReadonly: !0
      }),
      Ce
    ], Ge = [
      ...B,
      D({
        allowKeyTypes: !1,
        objectFieldGrammar: Ye
      }),
      ae,
      Ke,
      je,
      A,
      Y({
        allowWithoutParenthesis: !0,
        allowNoReturnType: !1,
        allowNamedParameters: ["this", "new", "args"],
        allowNewAsFunctionKeyword: !0
      }),
      Ve({
        allowQuestionMark: !1
      }),
      G({
        allowEnclosingBrackets: !1,
        allowPostfix: !1
      }),
      Ue,
      N({
        allowedAdditionalTokens: ["event", "external", "in"]
      }),
      U({
        allowedTypes: ["module"],
        pathGrammar: x
      }),
      oe,
      qe,
      _({
        allowSquareBracketsOnAnyType: !0,
        allowJsdocNamePaths: !1,
        pathGrammar: x
      }),
      Me,
      Be,
      H({
        allowVariadic: !0,
        allowOptional: !0
      })
    ];
    function se(e, t) {
      switch (t) {
        case "closure":
          return new b(_e, e).parse();
        case "jsdoc":
          return new b(Fe, e).parse();
        case "typescript":
          return new b(Ge, e).parse();
      }
    }
    function De(e, t = ["typescript", "closure", "jsdoc"]) {
      let n;
      for (const o of t)
        try {
          return se(e, o);
        } catch (r) {
          n = r;
        }
      throw n;
    }
    function O(e, t) {
      const n = e[t.type];
      if (n === void 0)
        throw new Error(`In this set of transform rules exists no rule for type ${t.type}.`);
      return n(t, (o) => O(e, o));
    }
    function u(e) {
      throw new Error("This transform is not available. Are you trying the correct parsing mode?");
    }
    function ie(e) {
      const t = {
        params: []
      };
      for (const n of e.parameters)
        n.type === "JsdocTypeKeyValue" ? n.key === "this" ? t.this = n.right : n.key === "new" ? t.new = n.right : t.params.push(n) : t.params.push(n);
      return t;
    }
    function V(e, t, n) {
      return e === "prefix" ? n + t : t + n;
    }
    function E(e, t) {
      switch (t) {
        case "double":
          return `"${e}"`;
        case "single":
          return `'${e}'`;
        case void 0:
          return e;
      }
    }
    function pe() {
      return {
        JsdocTypeParenthesis: (e, t) => `(${e.element !== void 0 ? t(e.element) : ""})`,
        JsdocTypeKeyof: (e, t) => `keyof ${t(e.element)}`,
        JsdocTypeFunction: (e, t) => {
          if (e.arrow) {
            if (e.returnType === void 0)
              throw new Error("Arrow function needs a return type.");
            let n = `(${e.parameters.map(t).join(", ")}) => ${t(e.returnType)}`;
            return e.constructor && (n = "new " + n), n;
          } else {
            let n = e.constructor ? "new" : "function";
            return e.parenthesis && (n += `(${e.parameters.map(t).join(", ")})`, e.returnType !== void 0 && (n += `: ${t(e.returnType)}`)), n;
          }
        },
        JsdocTypeName: (e) => e.value,
        JsdocTypeTuple: (e, t) => `[${e.elements.map(t).join(", ")}]`,
        JsdocTypeVariadic: (e, t) => e.meta.position === void 0 ? "..." : V(e.meta.position, t(e.element), "..."),
        JsdocTypeNamePath: (e, t) => {
          const n = t(e.left), o = t(e.right);
          switch (e.pathType) {
            case "inner":
              return `${n}~${o}`;
            case "instance":
              return `${n}#${o}`;
            case "property":
              return `${n}.${o}`;
            case "property-brackets":
              return `${n}[${o}]`;
          }
        },
        JsdocTypeStringValue: (e) => E(e.value, e.meta.quote),
        JsdocTypeAny: () => "*",
        JsdocTypeGeneric: (e, t) => {
          if (e.meta.brackets === "square") {
            const n = e.elements[0], o = t(n);
            return n.type === "JsdocTypeUnion" || n.type === "JsdocTypeIntersection" ? `(${o})[]` : `${o}[]`;
          } else
            return `${t(e.left)}${e.meta.dot ? "." : ""}<${e.elements.map(t).join(", ")}>`;
        },
        JsdocTypeImport: (e, t) => `import(${t(e.element)})`,
        JsdocTypeObjectField: (e, t) => {
          let n = "";
          return e.readonly && (n += "readonly "), typeof e.key == "string" ? n += E(e.key, e.meta.quote) : n += t(e.key), e.optional && (n += "?"), e.right === void 0 ? n : n + `: ${t(e.right)}`;
        },
        JsdocTypeJsdocObjectField: (e, t) => `${t(e.left)}: ${t(e.right)}`,
        JsdocTypeKeyValue: (e, t) => {
          let n = e.key;
          return e.optional && (n += "?"), e.variadic && (n = "..." + n), e.right === void 0 ? n : n + `: ${t(e.right)}`;
        },
        JsdocTypeSpecialNamePath: (e) => `${e.specialType}:${E(e.value, e.meta.quote)}`,
        JsdocTypeNotNullable: (e, t) => V(e.meta.position, t(e.element), "!"),
        JsdocTypeNull: () => "null",
        JsdocTypeNullable: (e, t) => V(e.meta.position, t(e.element), "?"),
        JsdocTypeNumber: (e) => e.value.toString(),
        JsdocTypeObject: (e, t) => `{${e.elements.map(t).join((e.meta.separator === "comma" ? "," : ";") + " ")}}`,
        JsdocTypeOptional: (e, t) => V(e.meta.position, t(e.element), "="),
        JsdocTypeSymbol: (e, t) => `${e.value}(${e.element !== void 0 ? t(e.element) : ""})`,
        JsdocTypeTypeof: (e, t) => `typeof ${t(e.element)}`,
        JsdocTypeUndefined: () => "undefined",
        JsdocTypeUnion: (e, t) => e.elements.map(t).join(" | "),
        JsdocTypeUnknown: () => "?",
        JsdocTypeIntersection: (e, t) => e.elements.map(t).join(" & "),
        JsdocTypeProperty: (e) => E(e.value, e.meta.quote),
        JsdocTypePredicate: (e, t) => `${t(e.left)} is ${t(e.right)}`,
        JsdocTypeIndexSignature: (e, t) => `[${e.key}: ${t(e.right)}]`,
        JsdocTypeMappedType: (e, t) => `[${e.key} in ${t(e.right)}]`,
        JsdocTypeAsserts: (e, t) => `asserts ${t(e.left)} is ${t(e.right)}`
      };
    }
    const Xe = pe();
    function He(e) {
      return O(Xe, e);
    }
    const We = [
      "null",
      "true",
      "false",
      "break",
      "case",
      "catch",
      "class",
      "const",
      "continue",
      "debugger",
      "default",
      "delete",
      "do",
      "else",
      "export",
      "extends",
      "finally",
      "for",
      "function",
      "if",
      "import",
      "in",
      "instanceof",
      "new",
      "return",
      "super",
      "switch",
      "this",
      "throw",
      "try",
      "typeof",
      "var",
      "void",
      "while",
      "with",
      "yield"
    ];
    function P(e) {
      const t = {
        type: "NameExpression",
        name: e
      };
      return We.includes(e) && (t.reservedWord = !0), t;
    }
    const Qe = {
      JsdocTypeOptional: (e, t) => {
        const n = t(e.element);
        return n.optional = !0, n;
      },
      JsdocTypeNullable: (e, t) => {
        const n = t(e.element);
        return n.nullable = !0, n;
      },
      JsdocTypeNotNullable: (e, t) => {
        const n = t(e.element);
        return n.nullable = !1, n;
      },
      JsdocTypeVariadic: (e, t) => {
        if (e.element === void 0)
          throw new Error("dots without value are not allowed in catharsis mode");
        const n = t(e.element);
        return n.repeatable = !0, n;
      },
      JsdocTypeAny: () => ({
        type: "AllLiteral"
      }),
      JsdocTypeNull: () => ({
        type: "NullLiteral"
      }),
      JsdocTypeStringValue: (e) => P(E(e.value, e.meta.quote)),
      JsdocTypeUndefined: () => ({
        type: "UndefinedLiteral"
      }),
      JsdocTypeUnknown: () => ({
        type: "UnknownLiteral"
      }),
      JsdocTypeFunction: (e, t) => {
        const n = ie(e), o = {
          type: "FunctionType",
          params: n.params.map(t)
        };
        return n.this !== void 0 && (o.this = t(n.this)), n.new !== void 0 && (o.new = t(n.new)), e.returnType !== void 0 && (o.result = t(e.returnType)), o;
      },
      JsdocTypeGeneric: (e, t) => ({
        type: "TypeApplication",
        applications: e.elements.map((n) => t(n)),
        expression: t(e.left)
      }),
      JsdocTypeSpecialNamePath: (e) => P(e.specialType + ":" + E(e.value, e.meta.quote)),
      JsdocTypeName: (e) => e.value !== "function" ? P(e.value) : {
        type: "FunctionType",
        params: []
      },
      JsdocTypeNumber: (e) => P(e.value.toString()),
      JsdocTypeObject: (e, t) => {
        const n = {
          type: "RecordType",
          fields: []
        };
        for (const o of e.elements)
          o.type !== "JsdocTypeObjectField" && o.type !== "JsdocTypeJsdocObjectField" ? n.fields.push({
            type: "FieldType",
            key: t(o),
            value: void 0
          }) : n.fields.push(t(o));
        return n;
      },
      JsdocTypeObjectField: (e, t) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        return {
          type: "FieldType",
          key: P(E(e.key, e.meta.quote)),
          value: e.right === void 0 ? void 0 : t(e.right)
        };
      },
      JsdocTypeJsdocObjectField: (e, t) => ({
        type: "FieldType",
        key: t(e.left),
        value: t(e.right)
      }),
      JsdocTypeUnion: (e, t) => ({
        type: "TypeUnion",
        elements: e.elements.map((n) => t(n))
      }),
      JsdocTypeKeyValue: (e, t) => ({
        type: "FieldType",
        key: P(e.key),
        value: e.right === void 0 ? void 0 : t(e.right)
      }),
      JsdocTypeNamePath: (e, t) => {
        const n = t(e.left);
        let o;
        e.right.type === "JsdocTypeSpecialNamePath" ? o = t(e.right).name : o = E(e.right.value, e.right.meta.quote);
        const r = e.pathType === "inner" ? "~" : e.pathType === "instance" ? "#" : ".";
        return P(`${n.name}${r}${o}`);
      },
      JsdocTypeSymbol: (e) => {
        let t = "", n = e.element, o = !1;
        return n?.type === "JsdocTypeVariadic" && (n.meta.position === "prefix" ? t = "..." : o = !0, n = n.element), n?.type === "JsdocTypeName" ? t += n.value : n?.type === "JsdocTypeNumber" && (t += n.value.toString()), o && (t += "..."), P(`${e.value}(${t})`);
      },
      JsdocTypeParenthesis: (e, t) => t(y(e.element)),
      JsdocTypeMappedType: u,
      JsdocTypeIndexSignature: u,
      JsdocTypeImport: u,
      JsdocTypeKeyof: u,
      JsdocTypeTuple: u,
      JsdocTypeTypeof: u,
      JsdocTypeIntersection: u,
      JsdocTypeProperty: u,
      JsdocTypePredicate: u,
      JsdocTypeAsserts: u
    };
    function ze(e) {
      return O(Qe, e);
    }
    function g(e) {
      switch (e) {
        case void 0:
          return "none";
        case "single":
          return "single";
        case "double":
          return "double";
      }
    }
    function Ze(e) {
      switch (e) {
        case "inner":
          return "INNER_MEMBER";
        case "instance":
          return "INSTANCE_MEMBER";
        case "property":
          return "MEMBER";
        case "property-brackets":
          return "MEMBER";
      }
    }
    function W(e, t) {
      return t.length === 2 ? {
        type: e,
        left: t[0],
        right: t[1]
      } : {
        type: e,
        left: t[0],
        right: W(e, t.slice(1))
      };
    }
    const et = {
      JsdocTypeOptional: (e, t) => ({
        type: "OPTIONAL",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_EQUAL_SIGN" : "SUFFIX_EQUALS_SIGN"
        }
      }),
      JsdocTypeNullable: (e, t) => ({
        type: "NULLABLE",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_QUESTION_MARK" : "SUFFIX_QUESTION_MARK"
        }
      }),
      JsdocTypeNotNullable: (e, t) => ({
        type: "NOT_NULLABLE",
        value: t(e.element),
        meta: {
          syntax: e.meta.position === "prefix" ? "PREFIX_BANG" : "SUFFIX_BANG"
        }
      }),
      JsdocTypeVariadic: (e, t) => {
        const n = {
          type: "VARIADIC",
          meta: {
            syntax: e.meta.position === "prefix" ? "PREFIX_DOTS" : e.meta.position === "suffix" ? "SUFFIX_DOTS" : "ONLY_DOTS"
          }
        };
        return e.element !== void 0 && (n.value = t(e.element)), n;
      },
      JsdocTypeName: (e) => ({
        type: "NAME",
        name: e.value
      }),
      JsdocTypeTypeof: (e, t) => ({
        type: "TYPE_QUERY",
        name: t(e.element)
      }),
      JsdocTypeTuple: (e, t) => ({
        type: "TUPLE",
        entries: e.elements.map(t)
      }),
      JsdocTypeKeyof: (e, t) => ({
        type: "KEY_QUERY",
        value: t(e.element)
      }),
      JsdocTypeImport: (e) => ({
        type: "IMPORT",
        path: {
          type: "STRING_VALUE",
          quoteStyle: g(e.element.meta.quote),
          string: e.element.value
        }
      }),
      JsdocTypeUndefined: () => ({
        type: "NAME",
        name: "undefined"
      }),
      JsdocTypeAny: () => ({
        type: "ANY"
      }),
      JsdocTypeFunction: (e, t) => {
        const n = ie(e), o = {
          type: e.arrow ? "ARROW" : "FUNCTION",
          params: n.params.map((r) => {
            if (r.type === "JsdocTypeKeyValue") {
              if (r.right === void 0)
                throw new Error("Function parameter without ':' is not expected to be 'KEY_VALUE'");
              return {
                type: "NAMED_PARAMETER",
                name: r.key,
                typeName: t(r.right)
              };
            } else
              return t(r);
          }),
          new: null,
          returns: null
        };
        return n.this !== void 0 ? o.this = t(n.this) : e.arrow || (o.this = null), n.new !== void 0 && (o.new = t(n.new)), e.returnType !== void 0 && (o.returns = t(e.returnType)), o;
      },
      JsdocTypeGeneric: (e, t) => {
        const n = {
          type: "GENERIC",
          subject: t(e.left),
          objects: e.elements.map(t),
          meta: {
            syntax: e.meta.brackets === "square" ? "SQUARE_BRACKET" : e.meta.dot ? "ANGLE_BRACKET_WITH_DOT" : "ANGLE_BRACKET"
          }
        };
        return e.meta.brackets === "square" && e.elements[0].type === "JsdocTypeFunction" && !e.elements[0].parenthesis && (n.objects[0] = {
          type: "NAME",
          name: "function"
        }), n;
      },
      JsdocTypeObjectField: (e, t) => {
        if (typeof e.key != "string")
          throw new Error("Index signatures and mapped types are not supported");
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: g(e.meta.quote),
            value: null,
            readonly: !1
          };
        let n = t(e.right);
        return e.optional && (n = {
          type: "OPTIONAL",
          value: n,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key.toString(),
          quoteStyle: g(e.meta.quote),
          value: n,
          readonly: !1
        };
      },
      JsdocTypeJsdocObjectField: () => {
        throw new Error("Keys may not be typed in jsdoctypeparser.");
      },
      JsdocTypeKeyValue: (e, t) => {
        if (e.right === void 0)
          return {
            type: "RECORD_ENTRY",
            key: e.key,
            quoteStyle: "none",
            value: null,
            readonly: !1
          };
        let n = t(e.right);
        return e.optional && (n = {
          type: "OPTIONAL",
          value: n,
          meta: {
            syntax: "SUFFIX_KEY_QUESTION_MARK"
          }
        }), {
          type: "RECORD_ENTRY",
          key: e.key,
          quoteStyle: "none",
          value: n,
          readonly: !1
        };
      },
      JsdocTypeObject: (e, t) => {
        const n = [];
        for (const o of e.elements)
          (o.type === "JsdocTypeObjectField" || o.type === "JsdocTypeJsdocObjectField") && n.push(t(o));
        return {
          type: "RECORD",
          entries: n
        };
      },
      JsdocTypeSpecialNamePath: (e) => {
        if (e.specialType !== "module")
          throw new Error(`jsdoctypeparser does not support type ${e.specialType} at this point.`);
        return {
          type: "MODULE",
          value: {
            type: "FILE_PATH",
            quoteStyle: g(e.meta.quote),
            path: e.value
          }
        };
      },
      JsdocTypeNamePath: (e, t) => {
        let n = !1, o, r;
        e.right.type === "JsdocTypeSpecialNamePath" && e.right.specialType === "event" ? (n = !0, o = e.right.value, r = g(e.right.meta.quote)) : (o = e.right.value, r = g(e.right.meta.quote));
        const a = {
          type: Ze(e.pathType),
          owner: t(e.left),
          name: o,
          quoteStyle: r,
          hasEventPrefix: n
        };
        if (a.owner.type === "MODULE") {
          const i = a.owner;
          return a.owner = a.owner.value, i.value = a, i;
        } else
          return a;
      },
      JsdocTypeUnion: (e, t) => W("UNION", e.elements.map(t)),
      JsdocTypeParenthesis: (e, t) => ({
        type: "PARENTHESIS",
        value: t(y(e.element))
      }),
      JsdocTypeNull: () => ({
        type: "NAME",
        name: "null"
      }),
      JsdocTypeUnknown: () => ({
        type: "UNKNOWN"
      }),
      JsdocTypeStringValue: (e) => ({
        type: "STRING_VALUE",
        quoteStyle: g(e.meta.quote),
        string: e.value
      }),
      JsdocTypeIntersection: (e, t) => W("INTERSECTION", e.elements.map(t)),
      JsdocTypeNumber: (e) => ({
        type: "NUMBER_VALUE",
        number: e.value.toString()
      }),
      JsdocTypeSymbol: u,
      JsdocTypeProperty: u,
      JsdocTypePredicate: u,
      JsdocTypeMappedType: u,
      JsdocTypeIndexSignature: u,
      JsdocTypeAsserts: u
    };
    function tt(e) {
      return O(et, e);
    }
    function nt() {
      return {
        JsdocTypeIntersection: (e, t) => ({
          type: "JsdocTypeIntersection",
          elements: e.elements.map(t)
        }),
        JsdocTypeGeneric: (e, t) => ({
          type: "JsdocTypeGeneric",
          left: t(e.left),
          elements: e.elements.map(t),
          meta: {
            dot: e.meta.dot,
            brackets: e.meta.brackets
          }
        }),
        JsdocTypeNullable: (e) => e,
        JsdocTypeUnion: (e, t) => ({
          type: "JsdocTypeUnion",
          elements: e.elements.map(t)
        }),
        JsdocTypeUnknown: (e) => e,
        JsdocTypeUndefined: (e) => e,
        JsdocTypeTypeof: (e, t) => ({
          type: "JsdocTypeTypeof",
          element: t(e.element)
        }),
        JsdocTypeSymbol: (e, t) => {
          const n = {
            type: "JsdocTypeSymbol",
            value: e.value
          };
          return e.element !== void 0 && (n.element = t(e.element)), n;
        },
        JsdocTypeOptional: (e, t) => ({
          type: "JsdocTypeOptional",
          element: t(e.element),
          meta: {
            position: e.meta.position
          }
        }),
        JsdocTypeObject: (e, t) => ({
          type: "JsdocTypeObject",
          meta: {
            separator: "comma"
          },
          elements: e.elements.map(t)
        }),
        JsdocTypeNumber: (e) => e,
        JsdocTypeNull: (e) => e,
        JsdocTypeNotNullable: (e, t) => ({
          type: "JsdocTypeNotNullable",
          element: t(e.element),
          meta: {
            position: e.meta.position
          }
        }),
        JsdocTypeSpecialNamePath: (e) => e,
        JsdocTypeObjectField: (e, t) => ({
          type: "JsdocTypeObjectField",
          key: e.key,
          right: e.right === void 0 ? void 0 : t(e.right),
          optional: e.optional,
          readonly: e.readonly,
          meta: e.meta
        }),
        JsdocTypeJsdocObjectField: (e, t) => ({
          type: "JsdocTypeJsdocObjectField",
          left: t(e.left),
          right: t(e.right)
        }),
        JsdocTypeKeyValue: (e, t) => ({
          type: "JsdocTypeKeyValue",
          key: e.key,
          right: e.right === void 0 ? void 0 : t(e.right),
          optional: e.optional,
          variadic: e.variadic
        }),
        JsdocTypeImport: (e, t) => ({
          type: "JsdocTypeImport",
          element: t(e.element)
        }),
        JsdocTypeAny: (e) => e,
        JsdocTypeStringValue: (e) => e,
        JsdocTypeNamePath: (e) => e,
        JsdocTypeVariadic: (e, t) => {
          const n = {
            type: "JsdocTypeVariadic",
            meta: {
              position: e.meta.position,
              squareBrackets: e.meta.squareBrackets
            }
          };
          return e.element !== void 0 && (n.element = t(e.element)), n;
        },
        JsdocTypeTuple: (e, t) => ({
          type: "JsdocTypeTuple",
          elements: e.elements.map(t)
        }),
        JsdocTypeName: (e) => e,
        JsdocTypeFunction: (e, t) => {
          const n = {
            type: "JsdocTypeFunction",
            arrow: e.arrow,
            parameters: e.parameters.map(t),
            constructor: e.constructor,
            parenthesis: e.parenthesis
          };
          return e.returnType !== void 0 && (n.returnType = t(e.returnType)), n;
        },
        JsdocTypeKeyof: (e, t) => ({
          type: "JsdocTypeKeyof",
          element: t(e.element)
        }),
        JsdocTypeParenthesis: (e, t) => ({
          type: "JsdocTypeParenthesis",
          element: t(e.element)
        }),
        JsdocTypeProperty: (e) => e,
        JsdocTypePredicate: (e, t) => ({
          type: "JsdocTypePredicate",
          left: t(e.left),
          right: t(e.right)
        }),
        JsdocTypeIndexSignature: (e, t) => ({
          type: "JsdocTypeIndexSignature",
          key: e.key,
          right: t(e.right)
        }),
        JsdocTypeMappedType: (e, t) => ({
          type: "JsdocTypeMappedType",
          key: e.key,
          right: t(e.right)
        }),
        JsdocTypeAsserts: (e, t) => ({
          type: "JsdocTypeAsserts",
          left: t(e.left),
          right: t(e.right)
        })
      };
    }
    const ce = {
      JsdocTypeAny: [],
      JsdocTypeFunction: ["parameters", "returnType"],
      JsdocTypeGeneric: ["left", "elements"],
      JsdocTypeImport: [],
      JsdocTypeIndexSignature: ["right"],
      JsdocTypeIntersection: ["elements"],
      JsdocTypeKeyof: ["element"],
      JsdocTypeKeyValue: ["right"],
      JsdocTypeMappedType: ["right"],
      JsdocTypeName: [],
      JsdocTypeNamePath: ["left", "right"],
      JsdocTypeNotNullable: ["element"],
      JsdocTypeNull: [],
      JsdocTypeNullable: ["element"],
      JsdocTypeNumber: [],
      JsdocTypeObject: ["elements"],
      JsdocTypeObjectField: ["right"],
      JsdocTypeJsdocObjectField: ["left", "right"],
      JsdocTypeOptional: ["element"],
      JsdocTypeParenthesis: ["element"],
      JsdocTypeSpecialNamePath: [],
      JsdocTypeStringValue: [],
      JsdocTypeSymbol: ["element"],
      JsdocTypeTuple: ["elements"],
      JsdocTypeTypeof: ["element"],
      JsdocTypeUndefined: [],
      JsdocTypeUnion: ["elements"],
      JsdocTypeUnknown: [],
      JsdocTypeVariadic: ["element"],
      JsdocTypeProperty: [],
      JsdocTypePredicate: ["left", "right"],
      JsdocTypeAsserts: ["left", "right"]
    };
    function Q(e, t, n, o, r) {
      o?.(e, t, n);
      const a = ce[e.type];
      for (const i of a) {
        const c = e[i];
        if (c !== void 0)
          if (Array.isArray(c))
            for (const m of c)
              Q(m, e, i, o, r);
          else
            Q(c, e, i, o, r);
      }
      r?.(e, t, n);
    }
    function ot(e, t, n) {
      Q(e, void 0, void 0, t, n);
    }
    h.catharsisTransform = ze, h.identityTransformRules = nt, h.jtpTransform = tt, h.parse = se, h.stringify = He, h.stringifyRules = pe, h.transform = O, h.traverse = ot, h.tryParse = De, h.visitorKeys = ce;
  });
})(z, z.exports);
var pt = z.exports;
export {
  pt as d
};
