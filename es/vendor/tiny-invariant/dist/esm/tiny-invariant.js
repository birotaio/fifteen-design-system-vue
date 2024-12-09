var a = process.env.NODE_ENV === "production", n = "Invariant failed";
function c(t, r) {
  if (!t) {
    if (a)
      throw new Error(n);
    var o = typeof r == "function" ? r() : r, i = o ? "".concat(n, ": ").concat(o) : n;
    throw new Error(i);
  }
}
export {
  c as default
};
