import { getCurrentInstance as d } from "vue";
function r(u, o, i) {
  const f = d(), t = i || f?.emit;
  function s(n) {
    t?.("blur", n), o === "blur" && u(n);
  }
  function c(n) {
    t?.("focus", n), o === "focus" && u(n);
  }
  function h(n) {
    t?.("input", n), o === "input" && u(n);
  }
  function p(n) {
    t?.("change", n), o === "change" && u(n);
  }
  return {
    handleBlur: s,
    handleFocus: c,
    handleInput: h,
    handleChange: p
  };
}
export {
  r as useInputEventBindings
};
