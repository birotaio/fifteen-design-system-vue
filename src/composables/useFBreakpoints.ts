import { useBreakpoints, useMounted } from '@vueuse/core';

import { breakpointsValues } from '@/constants/breakpoints';

import type { ComputedRef } from 'vue';

interface UseFBreakpointsReturn {
  isXxsAndDown: ComputedRef<boolean>;
  isXsAndDown: ComputedRef<boolean>;
  isSmAndDown: ComputedRef<boolean>;
  isMdAndDown: ComputedRef<boolean>;
  isLgAndDown: ComputedRef<boolean>;
  xxsAndDown<T extends string | number>(value: T, fallback: T): T;
  xsAndDown<T extends string | number>(value: T, fallback: T): T;
  smAndDown<T extends string | number>(value: T, fallback: T): T;
  mdAndDown<T extends string | number>(value: T, fallback: T): T;
  lgAndDown<T extends string | number>(value: T, fallback: T): T;
}
/**
 * Returns breakpoints boolean values and utils breakpoints functions
 */
export function useFBreakpoints(): UseFBreakpointsReturn {
  const breakpoints = useBreakpoints(breakpointsValues);
  const isMounted = useMounted();
  const isXxsAndDown = computed(
    () => isMounted.value && breakpoints.smaller('xxs').value
  );
  const isXsAndDown = computed(
    () => isMounted.value && breakpoints.smaller('xs').value
  );
  const isSmAndDown = computed(
    () => isMounted.value && breakpoints.smaller('sm').value
  );
  const isMdAndDown = computed(
    () => isMounted.value && breakpoints.smaller('md').value
  );
  const isLgAndDown = computed(
    () => isMounted.value && breakpoints.smaller('lg').value
  );

  /**
   *
   * @param value - Value to return if the screen is xxs and down
   * @param fallback - Value to return otherwise
   */
  function xxsAndDown<T extends string | number>(value: T, fallback: T): T {
    return isXxsAndDown.value ? value : fallback;
  }

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

  /**
   *
   * @param value - Value to return if the screen is lg and down
   * @param fallback - Value to return otherwise
   */
  function lgAndDown<T extends string | number>(value: T, fallback: T): T {
    return isLgAndDown.value ? value : fallback;
  }

  return {
    isXxsAndDown,
    isXsAndDown,
    isSmAndDown,
    isMdAndDown,
    isLgAndDown,
    xxsAndDown,
    xsAndDown,
    smAndDown,
    mdAndDown,
    lgAndDown,
  };
}
