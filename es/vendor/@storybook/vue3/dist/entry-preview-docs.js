import { extractComponentDescription as S, enhanceArgTypes as C, hasDocgen as _, extractComponentProps as j, convert as v, SNIPPET_RENDERED as N, SourceType as g } from "../../core/dist/docs-tools/index.js";
import { watch as E, isVNode as A } from "vue";
const { addons: T } = __STORYBOOK_MODULE_PREVIEW_API__;
var O = ["props", "events", "slots", "exposed", "expose"], V = (e) => {
  if (!_(e)) return null;
  let r = "exposed" in e.__docgenInfo ? "vue-component-meta" : "vue-docgen-api", i = {};
  return O.forEach((a) => {
    j(e, a).forEach((s) => {
      let n;
      if (r === "vue-docgen-api") {
        let t = s.docgenInfo;
        n = D(t, a, s);
      } else {
        let t = s.docgenInfo;
        n = M(t, a);
      }
      !n || i[n.name] || (["events", "expose", "exposed"].includes(a) && (n.control = { disable: !0 }), i[n.name] = n);
    });
  }), i;
}, D = (e, r, i) => {
  let a, s;
  if (r === "events" && (a = e.type?.names.join(), s = { name: "other", value: a ?? "", required: !1 }), r === "slots") {
    let t = e.bindings?.filter((l) => !!l.name).map((l) => `${l.name}: ${l.type?.name ?? "unknown"}`).join("; ");
    a = t ? `{ ${t} }` : void 0, s = { name: "other", value: a ?? "", required: !1 };
  }
  if (r === "props") {
    let t = e;
    if (a = t.type?.name, s = i ? v(i.docgenInfo) : { name: "other", value: a }, t.type && "elements" in t.type && Array.isArray(t.type.elements) && t.type.elements.length > 0) {
      let l = t.type.elements.map((o) => o.name);
      a === "Array" && (a = `${l.length === 1 ? l[0] : `(${l.join(" | ")})`}[]`), a === "union" ? a = l.join(" | ") : a === "intersection" && (a = l.join(" & "));
    }
  }
  let n = "required" in e ? e.required ?? !1 : !1;
  return { name: e.name, description: e.description, type: s ? { ...s, required: n } : { name: "other", value: a ?? "" }, table: { type: a ? { summary: a } : void 0, defaultValue: i?.propDef.defaultValue ?? void 0, jsDocTags: i?.propDef.jsDocTags, category: r } };
}, M = (e, r) => {
  if ("global" in e && e.global) return;
  let i = { summary: e.type.replace(" | undefined", "") };
  if (r === "props") {
    let a = e, s = a.default ? { summary: a.default } : void 0;
    return { name: a.name, description: q(a.description, a.tags), defaultValue: s, type: p(a), table: { type: i, defaultValue: s, category: r } };
  } else return { name: e.name, description: "description" in e ? e.description : "", type: { name: "other", value: e.type }, table: { type: i, category: r } };
}, p = (e) => {
  let r = e.schema, i = e.required, a = { name: "other", value: e.type, required: i }, s = ["string", "number", "function", "boolean", "symbol"];
  if (typeof r == "string") return s.includes(r) ? { name: r, required: i } : a;
  switch (r.kind) {
    case "enum": {
      let n = r.schema?.filter((t) => t !== "undefined") ?? [];
      return w(n) ? { name: "boolean", required: i } : F(n) || k(n) ? { name: "enum", value: n.map((t) => t.replace(/"/g, "")), required: i } : n.length === 1 ? p({ schema: n[0], type: e.type, required: i }) : (n.length > 2 && n.includes("true") && n.includes("false") && (n = n.filter((t) => t !== "true" && t !== "false"), n.push("boolean")), { name: "union", value: n.map((t) => p(typeof t == "object" ? { schema: t, type: t.type, required: !1 } : { schema: t, type: t, required: !1 })), required: i });
    }
    case "array": {
      let n = r.schema?.filter((t) => t !== "undefined") ?? [];
      return n.length === 0 ? a : n.length === 1 ? { name: "array", value: p({ schema: n[0], type: e.type, required: !1 }), required: i } : { name: "union", value: n.map((t) => p(typeof t == "object" ? { schema: t, type: t.type, required: !1 } : { schema: t, type: t, required: !1 })), required: i };
    }
    case "object":
      return { name: "object", value: {}, required: i };
    default:
      return a;
  }
}, q = (e, r) => !r?.length || !e ? e ?? "" : `${r.map((i) => `@${i.name}: ${i.text}`).join("<br>")}<br><br>${e}`, F = (e) => e.every((r) => typeof r == "string" && r.startsWith('"') && r.endsWith('"')), k = (e) => e.every((r) => typeof r == "string" && r.includes(".")), w = (e) => e.length === 2 && e.includes("true") && e.includes("false"), R = (e, r) => {
  let i = e();
  if (B(r)) return i;
  let a = T.getChannel();
  return E(() => r.args, () => {
    let s = W(r);
    a.emit(N, { id: r.id, args: r.args, source: s, format: "vue" });
  }, { immediate: !0, deep: !0 }), i;
}, W = (e) => {
  let r = { imports: {}, scriptVariables: {} }, { displayName: i, slotNames: a, eventNames: s } = P(e.component), n = $(e.args, a, s, r), t = h(e.args, a, r), l = i || e.title.split("/").at(-1), o = t ? `<${l} ${n}> ${t} </${l}>` : `<${l} ${n} />`, u = Object.entries(r.scriptVariables).map(([c, d]) => `const ${c} = ${d};`).join(`

`), m = Object.entries(r.imports).map(([c, d]) => `import { ${Array.from(d.values()).sort().join(", ")} } from "${c}";`).join(`
`), f = `<template>
  ${o}
</template>`;
  return !m && !u ? f : `<script lang="ts" setup>
${m ? `${m}

${u}` : u}
<\/script>

${f}`;
}, B = (e) => {
  let r = e?.parameters.docs?.source;
  if (r?.type === g.DYNAMIC) return !1;
  let i = e?.parameters.__isArgsStory;
  return e?.viewMode !== "docs" || !i || r?.code || r?.type === g.CODE;
}, P = (e) => {
  if (!e || !("__docgenInfo" in e) || !e.__docgenInfo || typeof e.__docgenInfo != "object") return { displayName: e?.__name, eventNames: [], slotNames: [] };
  let r = e.__docgenInfo, i = "displayName" in r && typeof r.displayName == "string" ? r.displayName : void 0, a = (s) => !(s in r) || !Array.isArray(r[s]) ? [] : r[s].map((n) => n && typeof n == "object" && "name" in n ? n.name : void 0).filter((n) => typeof n == "string");
  return { displayName: i || e.__name, slotNames: a("slots").sort((s, n) => s === "default" ? -1 : n === "default" ? 1 : s.localeCompare(n)), eventNames: a("events") };
}, $ = (e, r, i, a) => {
  let s = [];
  Object.entries(e).forEach(([t, l]) => {
    if (!r.includes(t) && l != null) switch (typeof l) {
      case "string":
        if (l === "") return;
        s.push({ name: t, value: l.includes('"') ? `'${l}'` : `"${l}"`, templateFn: (o, u) => `${o}=${u}` });
        break;
      case "number":
        s.push({ name: t, value: l.toString(), templateFn: (o, u) => `:${o}="${u}"` });
        break;
      case "bigint":
        s.push({ name: t, value: `BigInt(${l.toString()})`, templateFn: (o, u) => `:${o}="${u}"` });
        break;
      case "boolean":
        s.push({ name: t, value: l ? "true" : "false", templateFn: (o, u) => u === "true" ? o : `:${o}="false"` });
        break;
      case "symbol":
        s.push({ name: t, value: `Symbol(${l.description ? `'${l.description}'` : ""})`, templateFn: (o, u) => `:${o}="${u}"` });
        break;
      case "object": {
        s.push({ name: t, value: U(l), templateFn: void 0 });
        break;
      }
    }
  }), s.sort((t, l) => t.name.localeCompare(l.name));
  let n = [];
  return s.forEach((t) => {
    let l = i.includes(`update:${t.name}`);
    if (!l && t.templateFn) {
      n.push(t.templateFn(t.name, t.value));
      return;
    }
    let o = t.name;
    if (o in a.scriptVariables) {
      let u = 1;
      do
        o = `${t.name}${u}`, u++;
      while (o in a.scriptVariables);
    }
    if (!l) {
      a.scriptVariables[o] = t.value, n.push(`:${t.name}="${o}"`);
      return;
    }
    a.scriptVariables[o] = `ref(${t.value})`, a.imports.vue || (a.imports.vue = /* @__PURE__ */ new Set()), a.imports.vue.add("ref"), t.name === "modelValue" ? n.push(`v-model="${o}"`) : n.push(`v-model:${t.name}="${o}"`);
  }), n.join(" ");
}, h = (e, r, i) => {
  let a = [];
  return r.forEach((s) => {
    let n = e[s];
    if (!n) return;
    let t = y([n], i);
    if (!t) return;
    let l = typeof n == "function" ? b(n) : [];
    s === "default" && !l.length ? a.push(t) : a.push(`<template ${J(s, l)}>${t}</template>`);
  }), a.join(`

`);
}, y = (e, r) => {
  let i = [], a = (s) => {
    if (A(s)) return I(s, r);
    switch (typeof s) {
      case "string":
      case "number":
      case "boolean":
        return s.toString();
      case "object":
        return s === null ? "" : Array.isArray(s) ? s.map(a).filter((n) => n !== "").join(`
`) : JSON.stringify(s);
      case "function": {
        let n = b(s).filter((u) => !["{", "}"].includes(u)), t = n.reduce((u, m) => (u[m] = `{{ ${m} }}`, u), {}), l = s(t), o = y([l], r);
        return n.forEach((u) => {
          o = o.replaceAll(new RegExp(` (\\S+)="{{ ${u} }}"`, "g"), ` :$1="${u}"`);
        }), o;
      }
      case "bigint":
        return `{{ BigInt(${s.toString()}) }}`;
      default:
        return "";
    }
  };
  return e.forEach((s) => {
    let n = a(s);
    n !== "" && i.push(n);
  }), i.join(`
`);
}, I = (e, r) => {
  let i = G(e), a = "";
  typeof e.children == "string" ? a = e.children : Array.isArray(e.children) ? a = y(e.children, r) : e.children && (a = h(e.children, Object.keys(e.children).filter((n) => n !== "$stable"), r));
  let s = e.props ? $(e.props, [], [], r) : "";
  return a ? `<${i}${s ? ` ${s}` : ""}>${a}</${i}>` : `<${i}${s ? ` ${s}` : ""} />`;
}, G = (e) => {
  if (typeof e.type == "string") return e.type;
  if (typeof e.type == "object") {
    if ("name" in e.type && e.type.name) return e.type.name;
    if ("__name" in e.type && e.type.__name) return e.type.__name;
  }
  return "component";
}, b = (e) => {
  let r = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm, i = /([^\s,]+)/g, a = e.toString().replace(r, ""), s = a.slice(a.indexOf("(") + 1, a.indexOf(")")).match(i);
  return s ? s.flatMap((n) => {
    if (["{", "}"].includes(n)) return n;
    let t = n.split(":")[0].trim();
    return t.startsWith("{") ? ["{", t.substring(1)] : n.endsWith("}") && !t.endsWith("}") ? [t, "}"] : t;
  }) : [];
}, J = (e, r) => r.length ? r.length === 1 ? `#${e}="${r[0]}"` : `#${e}="{ ${r.filter((i) => !["{", "}"].includes(i)).join(", ")} }"` : `#${e}`, U = (e) => Object.values(e).every((r) => r == null || typeof r != "object") ? JSON.stringify(e) : JSON.stringify(e, null, 2), L = { docs: { story: { inline: !0 }, extractArgTypes: V, extractComponentDescription: S } }, z = [R], H = [C];
export {
  H as argTypesEnhancers,
  z as decorators,
  L as parameters
};
