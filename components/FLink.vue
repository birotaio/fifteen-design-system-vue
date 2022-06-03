<template lang="pug">
a.FLink(
  :style="style"
  :class="classes"
  :href="href"
  :hreflang="hreflang"
  :target="target"
  :role="role"
  :tabindex="tabindex"
  @click="handleClick"
)
  .FLink__content
    // @slot Default content slot
    slot
  .FLink__arrow(v-if="!hideArrow")
    svg(
      width="6.3"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    )
      path(
        d="M1 9l4-4-4-4"
        stroke-width="2"
      )
</template>

<style lang="stylus">
.FLink
  display inline-flex
  cursor pointer
  position relative
  justify-content center
  align-items center
  use-font('body-2')
  font-weight bold
  text-decoration none

  &.FLink--underlined
    text-decoration underline var(--flink--color)

  &.FLink--uppercase
    text-transform uppercase

  &:not(.FLink--hided-arrow)
    padding-right rem(28)

  &.FLink--disabled
    user-select none
    pointer-events none

    .FLink__content
      color var(--color--neutral--light-3)

    .FLink__arrow
      background var(--color--neutral--light-3)

  &:hover
    text-decoration-color var(--flink--hover-color)

    .FLink__arrow
      transform translateY(-1px) scale((1 / 2))
      background var(--flink--hover-color)

      > svg
        transform scale(2)

        > path
          stroke var(--flink--arrow--hover-color)

  &:not(.FButton)
    color var(--flink--color)
    transition color 0.25s

    &:hover
      color var(--flink--hover-color)

.FLink__arrow
  width rem(48)
  height rem(48)
  position absolute
  right rem(-16)
  display flex
  justify-content center
  align-items center
  margin-left rem(8)
  border-radius rem(32)
  background var(--flink--color)
  transform translateY(-1px) scale((1 / 3))
  transition transform ease-in-out 0.12s

  > svg
    transform scale(3)
    transition transform ease-in-out 0.12s

    > path
      stroke var(--flink--arrow--color)
      transition stroke 0.12s
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { getCssColor } from '@/utils/getCssColor';

export interface FLinkProps {
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
   * Disable or not the the link
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
  /**
   * Role "button" (aria attribute) for a11y purposes
   */
  role?: 'button';
}

const props = withDefaults(defineProps<FLinkProps>(), {
  location: null,
  color: 'secondary',
  hoverColor: 'primary',
  arrowColor: 'neutral--light-5',
  arrowHoverColor: 'neutral--light-5',
  disabled: false,
  hideArrow: false,
  underlined: false,
  uppercase: false,
  // Explicitly use undefined defaults for anchor native attributes
  // so that empty attributes are not generated in the final <a> tag
  href: undefined,
  target: undefined,
  hreflang: undefined,
  role: undefined,
});

const emit = defineEmits<{
  (name: 'click', e: MouseEvent): void;
}>();

function handleClick(e: MouseEvent): void {
  if (props.prevent) e.preventDefault();
  emit('click', e);
}

const tabindex = computed(() => (props.disabled ? '-1' : undefined));

const classes = computed(() => ({
  'FLink--disabled': props.disabled,
  'FLink--hided-arrow': props.hideArrow,
  'FLink--underlined': props.underlined,
  'FLink--uppercase': props.uppercase,
}));
const style = computed(
  (): Style => ({
    '--flink--arrow--color': getCssColor(props.arrowColor),
    '--flink--arrow--hover-color': getCssColor(props.arrowHoverColor),
    '--flink--color': getCssColor(props.color),
    '--flink--hover-color': getCssColor(props.hoverColor),
  })
);
</script>
