declare global {
  type Breakpoint = import('./breakpoints').Breakpoint;
  type Typography = import('./typography').Typography;
  type BaseColorDesignToken = import('./colors').BaseColorDesignToken;
  type ColorDesignToken = import('./colors').ColorDesignToken;
  type Color = import('./colors').Color;
  type FontFamily = import('./font').FontFamily;
  type ValidationRule = import('./forms').ValidationRule;
  type Span = import('./grid').Span;
  type Icon = import('./icons').Icon;
  type CSSVariable = import('./styles').CSSVariable;
  type Style = import('./styles').Style;
  type VueClasses = import('./styles').VueClasses;
  type CountryCode = import('./flags').CountryCode;
}

export {};
