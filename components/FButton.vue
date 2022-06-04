<template lang="pug">
component.FButton(
  :is="isLink ? FLink : 'button'"
  ref="buttonRef"
  :style="style"
  :class="classes"
  v-bind="specificProps"
  @focus.stop="emit('focus')"
  @blur.stop="emit('blur')"
  @keydown.enter.space.stop="onClick($event, false)"
  @click.stop="onClick($event, true)"
)
  .FButton__container
    slot
    FLogo.FButton__loadingIcon(
      v-if="loading"
      variant="image-only"
      :color="baseColor"
    )
</template>

<style lang="stylus">
rounded-lr($size)
  height rem($size)
  padding 0 rem(($size / 2))
  border-radius rem(($size / 2))

square($size)
  width rem($size)
  height rem($size)
  min-width rem($size)
  min-height rem($size)

.FButton
  border none
  cursor pointer
  user-select none
  position relative
  overflow hidden
  rounded-lr(40)
  box-sizing border-box
  background-image none
  background-color var(--fbutton--background-color)

  @media (prefers-reduced-motion )
    transition none

  &,
  a[href]&
    text-decoration none
    color var(--fbutton--text-color)
    transition transform 0.5s var(--transition--ease-out)
    transform-origin var(--fbutton--anchor-point)

    &:focus-visible
      outline-offset rem(4)
      outline solid rem(4) var(--fbutton--focus-color)
      transition transform 0.5s var(--transition--ease-out), $outline-transition

      &:hover:not(.FButton--static)
        transition transform 0.5s var(--transition--ease-out), background-color 0.2s 0.3s, $outline-transition

      @media (prefers-reduced-motion )
        transition none

  .FButton__container
    use-font('button')
    white-space nowrap

  .FLink__content
    color var(--fbutton--text-color)

  path
    fill var(--fbutton--text-color)

  &.FButton--ghost,
  &.FButton--outlined
    background-color transparent

  &:hover:not(.FButton--static)
    transform scale((60 / 56))
    background-color transparent
    transition transform 0.5s var(--transition--ease-out), background-color 0.2s 0.3s
    color var(--fbutton--text-color--hover)

    @media (prefers-reduced-motion )
      transition none

    .FLink__content
      color var(--fbutton--text-color--hover)

    path
      fill var(--fbutton--text-color--hover)

  &.FButton--outlined
    box-shadow 0 0 0 rem(2) var(--fbutton--outline-color) inset

    &:hover:not(.FButton--static)
      box-shadow 0 0 0 rem(2) transparent inset
      transition transform 0.5s var(--transition--ease-out), box-shadow 0.2s 0.3s

      @media (prefers-reduced-motion )
        transition none

  .FIcon__content
    square(24)

  &.FButton--icon
    width rem(40)
    height rem(40)
    border-radius rem(16)
    padding 0

    &::after
      border-radius rem(16)

    &.FButton--circle
      border-radius rem(72)

      &::after
        border-radius rem(72)

  &:not(.FButton--icon)
    .FIcon
      &:first-child
        margin-left -1 * rem(4)
        margin-right rem(8)

      &:last-child
        margin-right -1 * rem(4)
        margin-left rem(8)

    &::after
      border-radius rem(72)

  .FButton__loadingIcon
    square(20)
    margin-left rem(12)

  &.FButton--giant
    rounded-lr(56)

    .FButton__container
      font-size rem(20)
      line-height rem(24)

    .FIcon__content
      square(28)

    &.FButton--icon
      width rem(56)
      height rem(56)
      border-radius rem(24)

      &::after
        border-radius rem(24)

    &:not(.FButton--icon)
      .FButton__container
        margin-top rem(2)

      .FIcon
        margin-top rem(-4)

        &:first-child
          margin-left -1 * rem(8)
          margin-right rem(10)

        &:last-child
          margin-right -1 * rem(8)
          margin-left rem(10)

    .FButton__loadingIcon
      square(28)
      margin-left rem(16)

  &.FButton--large
    rounded-lr(48)

    &.FButton--icon
      width rem(48)
      height rem(48)
      border-radius rem(20)

      &::after
        border-radius rem(20)

    .FButton__container
      font-size rem(18)
      line-height rem(24)

    .FIcon__content
      square(26)

    &:not(.FButton--icon)
      .FButton__container
        margin-top rem(2)

      .FIcon
        margin-top rem(-4)

    .FButton__loadingIcon
      square(24)
      margin-left rem(16)

  &.FButton--small
    rounded-lr(32)

    .FButton__container
      font-size rem(12)
      line-height rem(24)

    &.FButton--icon
      width rem(32)
      height rem(32)
      border-radius rem(12)

      &::after
        border-radius rem(12)

    .FIcon__content
      square(20)

    &:not(.FButton--icon)
      .FIcon
        &:first-child
          margin-left -1 * rem(2)
          margin-right rem(6)

        &:last-child
          margin-right -1 * rem(2)
          margin-left rem(6)

    .FButton__loadingIcon
      square(16)
      margin-left rem(8)

  &.FButton--tiny
    rounded-lr(24)

    .FButton__container
      font-size rem(12)
      line-height rem(24)

    &.FButton--icon
      width rem(24)
      height rem(24)
      border-radius rem(8)

      &::after
        border-radius rem(8)

    .FIcon__content
      square(16)

    &:not(.FButton--icon)
      .FIcon
        &:first-child
          margin-left -1 * rem(2)
          margin-right rem(4)

        &:last-child
          margin-right -1 * rem(2)
          margin-left rem(4)

    .FButton__loadingIcon
      square(12)
      margin-left rem(6)

  &--disabled
    pointer-events none
    cursor none

  .FButton__container
    z-index 1
    position relative
    display flex
    justify-content center
    align-items center
    margin-top rem(1)

  .FIcon
    margin-top rem(-2)

  &:not(.FButton--ghost):not(.FButton--disabled)
    .FButton__container
      position relative
      transition color 0.5s var(--transition--ease-out)

      @media (prefers-reduced-motion )
        transition none

    &::after
      content ''
      position absolute
      width 100%
      height 100%
      left 0
      top 0
      background-color var(--fbutton--background-color--hover)
      transform translateX(-101%)
      transition transform 0.5s var(--transition--ease-out)

      @media (prefers-reduced-motion )
        transition none

  &:not(.FButton--ghost):not(.FButton--disabled):not(.FButton--static)
    &:hover
      &::after
        transform translateX(0)

  &:active
    background-image linear-gradient(hsla(0, 0, 50.2%, 0.14), hsla(0, 0, 50.2%, 0.14))

    &::after
      background-image linear-gradient(hsla(0, 0, 50.2%, 0.14), hsla(0, 0, 50.2%, 0.14))

.FButton__loadingIcon
  margin-top rem(-2)
  animation 8000ms rotate infinite forwards linear

@keyframes rotate
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>

<script setup lang="ts">
import FLogo from '@/components/FLogo.vue';
import FLink from '@/components/FLink.vue';

import { ref, computed } from 'vue';
import { colorDesignTokens } from '@/config/colors';
import { getCssColor } from '@/utils/getCssColor';
import { useFBreakpoints } from '@/composables/useFBreakpoints';

export type FButtonAnchorPoint = 'left' | 'right' | 'center';
export type FButtonSize = 'tiny' | 'small' | 'medium' | 'large' | 'giant';

export interface FButtonProps {
  /**
   * Submits all form values to a form-handler
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
   * Disable or not the the button
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
   * Spread or not click event
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
   * Link href
   */
  href?: HTMLAnchorElement['href'];
  /**
   * Language of the linked URL
   */
  hreflang?: HTMLAnchorElement['hreflang'];
  /**
   * Link target
   */
  target?: HTMLAnchorElement['target'];
}

const props = withDefaults(defineProps<FButtonProps>(), {
  submit: false,
  loading: false,
  ghost: false,
  outlined: false,
  disabled: false,
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
  // See FLink
  href: undefined,
  hreflang: undefined,
  target: undefined,
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent | KeyboardEvent): void;
  (name: 'focus'): void;
  (name: 'blur'): void;
}>();

const { isXsAndDown } = useFBreakpoints();

const multipleColors = computed<boolean>(
  () => !!(props.color && props.background)
);
const baseColor = computed<string>(() =>
  props.disabled
    ? 'neutral--light-2'
    : multipleColors.value
    ? props.color
    : props.ghost || props.outlined
    ? 'neutral--dark-5'
    : 'neutral--light-5'
);
const textHoverColor = computed<string>(() =>
  multipleColors.value && props.color.includes('-')
    ? props.background
    : props.color + '--dark-2'
);
const backgroundColor = computed<string>(() =>
  props.ghost || props.outlined
    ? ''
    : props.disabled
    ? 'neutral--light-4'
    : multipleColors.value
    ? props.background
    : props.color
);
const backgroundHoverColor = computed<string>(() => {
  // If props.hoverColor is given, use it
  if (props.hoverColor) return props.hoverColor;
  // If color is a design token
  if (colorDesignTokens.includes(props.color as ColorDesignToken)) {
    // If color is a shade variant
    const shadeRE = /--(light|dark)-[0-5]/;
    if (shadeRE.test(props.color)) {
      // Return the base color
      return props.color.replace(shadeRE, '');
    } else {
      // Return the lightest shade variant
      return props.color + '--light-2';
    }
  }
  // Otherwise return the computed baseColor
  return baseColor.value;
});

const computedFocusColor = computed<string>(
  () =>
    props.focusColor ||
    (multipleColors.value
      ? 'neutral--light-2'
      : props.disabled
      ? ''
      : props.color.includes('-')
      ? props.color
      : props.color + '--light-2')
);

const classes = computed(() => ({
  ['FButton--' + props.size]: true,
  'FButton--icon': props.icon,
  'FButton--disabled': props.disabled,
  'FButton--ghost': props.ghost,
  'FButton--outlined': props.outlined,
  'FButton--circle': props.circle,
  'FButton--static': isXsAndDown.value || props.static,
}));

const isLink = computed(() => props.href && !props.submit);

const specificProps = computed(() =>
  isLink.value
    ? {
        hideArrow: true,
        role: 'button',
        prevent: props.preventDefault,
        href: props.href,
        hreflang: props.hreflang,
        target: props.target,
      }
    : {
        type:
          props.submit && !props.loading && !props.disabled
            ? 'submit'
            : 'button',
      }
);

const style = computed(
  (): Style => ({
    '--fbutton--text-color': getCssColor(baseColor),
    '--fbutton--text-color--hover': getCssColor(textHoverColor),
    '--fbutton--background-color': getCssColor(backgroundColor),
    '--fbutton--background-color--hover': getCssColor(backgroundHoverColor),
    '--fbutton--outline-color': getCssColor(baseColor),
    '--fbutton--focus-color': getCssColor(computedFocusColor),
    '--fbutton--anchor-point': props.anchorPoint,
  })
);

const buttonRef = ref<HTMLElement>();

function onClick(e: MouseEvent | KeyboardEvent, blur: boolean): void {
  if (blur && !props.preventBlurOnClick && !isLink.value) {
    buttonRef.value?.blur();
  }
  if (!props.href && !props.submit) e.preventDefault();
  if (!props.loading && !props.disabled && !props.preventClick) {
    emit('click', e);
  }
}
</script>
