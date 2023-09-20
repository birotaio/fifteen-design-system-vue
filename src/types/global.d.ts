/**
 * Internal component types that are never exposed to Props interface
 * can be declared globally to simplify authoring components.
 */
declare global {
  type Style = import('./styles').Style;
  type VueClasses = import('./styles').VueClasses;
}

export {};
