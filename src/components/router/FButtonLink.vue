<template lang="pug">
template(v-if="location && !isHref")
  RouterLink(
    v-slot="{ navigate, href }"
    :to="location"
    :replace="replace"
    custom
  )
    FButton(
      v-bind="{ ...$attrs, ...getProps(href) }"
      :class="getClasses(href)"
      @click="handleClick($event, navigate)"
      @focus="emit('focus')"
    )
      slot
template(v-else)
  FButton(
    v-bind="props"
    :href="hrefLocation"
    :target="target ?? isExternal ? '_blank' : '_self'"
    @click="emit('click', $event)"
    @focus="emit('focus')"
  )
    slot
</template>

<script setup lang="ts">
import type {
  RouterLink,
  RouteLocationRaw,
  NavigationFailure,
} from 'vue-router';
import type { FButtonAnchorPoint, FButtonSize } from '@/components/FButton.vue';

export interface FButtonLinkProps {
  /**
   * Target location or url
   */
  location?: RouteLocationRaw | null;
  /**
   * Submit all form values to a form-handler
   */
  submit?: boolean;
  /**
   * Loading state of the button
   */
  loading?: boolean;
  /**
   * Use event preventDefault on anchor if component is rendered as a FLink
   */
  preventDefault?: boolean;
  /**
   * Display or not the background of the button
   */
  ghost?: boolean;
  /**
   * Display or not the outlines of the button
   */
  outlined?: boolean;
  /**
   * Disable or not the button
   */
  disabled?: boolean;
  /**
   * Use the button for an icon
   */
  icon?: boolean;
  /**
   * Size of the button
   */
  size?: FButtonSize;
  /**
   * Emit or not click event
   */
  preventClick?: boolean;
  /**
   * Use blur method of the button
   */
  preventBlurOnClick?: boolean;
  /**
   * Text/icon color or background color if background prop exist
   */
  color?: Color;
  /**
   * Background color of the button
   */
  background?: Color;
  /**
   * Color of the sliding overlay on hover
   */
  hoverColor?: Color;
  /**
   * Focus color
   */
  focusColor?: Color;
  /**
   * Anchor point of the button
   */
  anchorPoint?: FButtonAnchorPoint;
  /**
   * Use a circle for the shape of the button
   */
  circle?: boolean;
  /**
   * Disable text color, background color and button size changes on hover
   */
  static?: boolean;
  /**
   * Link target, overrides the one computed automatically on location
   */
  target?: HTMLAnchorElement['target'];
  /**
   * Link hreflang, overrides the one computed automatically on location
   */
  hreflang?: HTMLAnchorElement['hreflang'];
  /**
   * RouterLink-like active class
   */
  activeClass?: string | null;
  /**
   * RouterLink-link exact active class
   */
  exactActiveClass?: string | null;
  /**
   * RouterLink replace prop
   */
  replace?: boolean;
}

const props = withDefaults(defineProps<FButtonLinkProps>(), {
  location: null,
  disabled: false,
  submit: false,
  loading: false,
  ghost: false,
  outlined: false,
  icon: false,
  size: 'medium',
  preventDefault: false,
  preventClick: false,
  preventBlurOnClick: false,
  color: 'primary',
  background: '',
  hoverColor: '',
  focusColor: '',
  anchorPoint: 'center',
  circle: false,
  static: false,
  hreflang: undefined,
  target: undefined,
  activeClass: null,
  exactActiveClass: null,
  replace: false,
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent): void;
  (name: 'focus'): void;
}>();

function handleClick(
  e: MouseEvent,
  navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>
): void {
  navigate(e);
  emit('click', e);
}

const { isHref, isExternal, getProps, getClasses } = useSmartLink(props);
const hrefLocation = computed(() => props.location as string);
</script>
