<template lang="pug">
template(v-if="location && !isHref")
  RouterLink(
    v-slot="{ navigate, href }"
    :to="location"
    :replace="replace"
    custom
  )
    FLink(
      v-bind="{ ...$attrs, ...getProps(href) }"
      :class="getClasses(href)"
      @click="emit('click', $event); navigate($event)"
      @focus="emit('focus', $event)"
    )
      slot
template(v-else)
  FLink(
    v-bind="props"
    :href="hrefLocation"
    :target="target ?? isExternal ? '_blank' : '_self'"
    @click="emit('click', $event)"
    @focus="emit('focus', $event)"
  )
    slot
</template>

<style lang="stylus"></style>

<script setup lang="ts">
import FLink from '@/components/FLink.vue';

import type { RouterLink, RouteLocationRaw } from 'vue-router';

export interface FRouterLinkProps {
  /**
   * Target location or url
   */
  location?: RouteLocationRaw | null;
  /**
   * Color of the link
   */
  color?: Color;
  /**
   * Color of the link on hover
   */
  hoverColor?: Color;
  /**
   * Color of the arrow
   */
  arrowColor?: Color;
  /**
   * Color of the arrow on hover
   */
  arrowHoverColor?: Color;
  /**
   * Use preventDefault on click event
   */
  prevent?: boolean;
  /**
   * Disable or not the link
   */
  disabled?: boolean;
  /**
   * Hide the arrow
   */
  hideArrow?: boolean;
  /**
   * Underline the link
   */
  underlined?: boolean;
  /**
   * Transform the link to uppercase
   */
  uppercase?: boolean;
  /**
   * Link target, overrides the one computed automatically on location
   */
  target?: HTMLAnchorElement['target'];
  /**
   * Link hreflang, overrides the one computed automatically on location
   */
  hreflang?: HTMLAnchorElement['hreflang'];
  /**
   * Role "button" (aria attribute) for a11y purposes
   */
  role?: 'button';
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

const props = withDefaults(defineProps<FRouterLinkProps>(), {
  location: null,
  color: 'secondary',
  hoverColor: 'primary',
  arrowColor: 'neutral--light-5',
  arrowHoverColor: 'neutral--light-5',
  target: undefined,
  hreflang: undefined,
  role: undefined,
  disabled: false,
  hideArrow: false,
  underlined: false,
  uppercase: false,
  activeClass: null,
  exactActiveClass: null,
  replace: false,
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent): void;
  (name: 'focus', e: Event): void;
}>();

const { isHref, isExternal, getProps, getClasses } = useSmartLink(props);
const hrefLocation = computed(() => props.location as string);
</script>
