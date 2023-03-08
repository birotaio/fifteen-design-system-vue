import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';

import type { Ref } from 'vue';

// Arbitrary value to anticipate as much as possible image load before it is actually visible
const ROOT_MARGIN = '400px';

/**
 * Composable that tracks image presence on viewport and, when visible, its loading status
 * @param templateRef - Element template ref
 * @param imageSrc - Source of the image
 */
export function useLazyImage(
  templateRef: Ref<HTMLElement>,
  imageSrc: string
): { isInit: Ref<boolean>; isLoaded: Ref<boolean> } {
  const isInit = ref(false);
  const isLoaded = ref(false);

  // Run only on browser, as Image object does not exist in Node
  if (typeof window === 'undefined') return { isInit, isLoaded };

  const image = new Image();
  image.addEventListener('load', () => {
    isLoaded.value = true;
  });

  useIntersectionObserver(
    templateRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isInit.value = true;
        isLoaded.value = true;
        image.src = imageSrc;
      }
    },
    {
      rootMargin: ROOT_MARGIN,
    }
  );

  return { isInit, isLoaded };
}
