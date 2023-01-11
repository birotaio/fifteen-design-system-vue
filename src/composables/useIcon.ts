import * as icons from '@/constants/icons';
import type { Ref, ComputedRef, SVGAttributes } from 'vue';
import { computed, unref } from 'vue';

type PickedIcon = keyof typeof import('@/constants/icons');

interface UseIconReturn {
  /**
   * Render function that defines a proper svg for the icon
   */
  iconPaths: ComputedRef<SVGAttributes[]>;
}

/**
 * Composable that takes a image path and returns a SVG component render function
 * @param name - Name of the icon
 */
export function useIcon(name: Ref<Icon | null> | Icon | null): UseIconReturn {
  const iconPaths = computed(() => {
    const iconName = unref(name);
    if (!iconName) return [];
    return icons[iconName as PickedIcon];
  });
  return { iconPaths };
}
