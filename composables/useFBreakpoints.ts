import { breakpointsValues } from '../config/breakpoints';

/**
 * Returns breakpoints boolean values and utils breakpoints functions
 */
export function useFBreakpoints() {
  const breakpoints = useBreakpoints(breakpointsValues);
  const isXsAndDown = breakpoints.smaller('xs');
  const isSmAndDown = breakpoints.smaller('sm');
  const isMdAndDown = breakpoints.smaller('md');

  /**
   *
   * @param value - Value to return if the screen is xs and down
   * @param fallback - Value to return otherwise
   */
  function xsAndDown<T extends string | number>(value: T, fallback: T): T {
    return isXsAndDown.value ? value : fallback;
  }

  /**
   *
   * @param value - Value to return if the screen is sm and down
   * @param fallback - Value to return otherwise
   */
  function smAndDown<T extends string | number>(value: T, fallback: T): T {
    return isSmAndDown.value ? value : fallback;
  }

  /**
   *
   * @param value - Value to return if the screen is md and down
   * @param fallback - Value to return otherwise
   */
  function mdAndDown<T extends string | number>(value: T, fallback: T): T {
    return isMdAndDown.value ? value : fallback;
  }

  return {
    isXsAndDown,
    isSmAndDown,
    isMdAndDown,
    xsAndDown,
    smAndDown,
    mdAndDown,
  };
}
