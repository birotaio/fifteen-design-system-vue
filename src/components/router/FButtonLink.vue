<template lang="pug">
template(v-if="location && !isHref")
  RouterLink(
    :to="location"
    :replace="replace"
    custom
    v-slot="{ navigate, href }"
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
    @click="emit('click', $event)"
    @focus="emit('focus')"
  )
    slot
</template>

<style lang="stylus"></style>

<script setup lang="ts">
import type {
  RouteLocationRaw,
  NavigationFailure,
  RouterLink,
} from 'vue-router';
import { useRouter } from 'vue-router';
import type { FButtonAnchorPoint, FButtonSize } from '@/components/FButton.vue';
import FButton from '@/components/FButton.vue';
import { replace } from 'lodash';
import { computed } from 'vue';
import { useSmartLink } from '@/composables/useSmartLink';

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
  (name: 'click', e: MouseEvent | KeyboardEvent): void;
  (name: 'focus'): void;
}>();

function handleClick(
  e: MouseEvent | KeyboardEvent,
  navigate: (e?: MouseEvent) => Promise<void | NavigationFailure>
) {
  navigate(e as MouseEvent);
  emit('click', e);
}

const router = useRouter();
const hrefLocation = computed(() => router.resolve(props.location ?? '').href);

const { isHref, getProps, getClasses } = useSmartLink(props);
</script>
