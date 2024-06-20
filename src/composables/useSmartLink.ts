import type { ComputedRef } from 'vue';
import type {
  RouteLocationNormalizedLoaded,
  RouteLocationRaw,
} from 'vue-router';

export interface UseSmartLinkBaseProps {
  /**
   * Target location or url
   */
  location?: RouteLocationRaw | null;
  /**
   * Link target, overrides the one computed automatically on location
   */
  target?: HTMLAnchorElement['target'];
  /**
   * Link hreflang, overrides the one computed automatically on location
   */
  hreflang?: HTMLAnchorElement['hreflang'];
  /**
   * RouterLink-like active class, defaults to 'link--active'
   */
  activeClass?: string | null;
  /**
   * RouterLink-like exact active class, defaults to 'link--exactActive'
   */
  exactActiveClass?: string | null;
  /**
   * RouterLink replace prop
   */
  replace?: boolean;
}

export type UseSmartLinkProps<Props> = Omit<Props, 'location' | 'replace'> & {
  /**
   * Computed final href
   */
  href?: HTMLAnchorElement['href'];
};

export interface UseSmartLinkReturn<Props> {
  /**
   * Whether the location prop is an external url
   * @example http(s)://, mailto:, tel:, ...
   */
  isExternal: ComputedRef<boolean>;
  /**
   * Whether the location prop should be treated as an href
   * @example all the above + links starting with an anchor ref (#)
   */
  isHref: ComputedRef<boolean>;
  /**
   * Get final link props based on component props and input href
   */
  getProps: (href: string) => UseSmartLinkProps<Props>;
  /**
   * Get final active and exact-active link classes based on component props,
   */
  getClasses: (href: string) => Record<string, boolean>;
}

/**
 * Expose methods and properties to compute link props and classes
 * @param props - The link component props, extending UseSmartLinkBaseProps
 */
export function useSmartLink<Props extends UseSmartLinkBaseProps>(
  props: Props
): UseSmartLinkReturn<Props> {
  // Handle the case where the Vue Router context is lost
  const route = useRoute() as RouteLocationNormalizedLoaded | null;

  const isExternal = computed(
    () =>
      !!props.location &&
      /^(https?:\/\/|mailto:|tel:)/.test(props.location as string)
  );
  const isHref = computed(
    () =>
      !!props.location &&
      (isExternal.value || /^#/.test(props.location as string))
  );
  return {
    isExternal,
    isHref,
    getProps: (href?: string) => {
      const { location, replace: _, ...linkProps } = props;

      if (!location) {
        return linkProps;
      }

      if (isHref.value) {
        return {
          ...linkProps,
          hreflang: props.hreflang,
          href: location as string,
          target: props.target ?? (isExternal.value ? '_blank' : null),
        };
      }

      return {
        ...linkProps,
        hreflang: props.hreflang,
        href,
      };
    },
    getClasses: (href: string) => {
      const activeClass = props.activeClass ?? 'link--active';
      const exactActiveClass = props.exactActiveClass ?? 'link--exactActive';
      const isActive = (href && route?.path.startsWith(href)) || false;
      // Remove the trailing slash
      const isExactActive = href === route?.path.replace(/\/$/, '');

      return {
        [activeClass]: isActive,
        [exactActiveClass]: isExactActive,
      };
    },
  };
}
