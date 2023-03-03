<template lang="pug">
.FExpandable(
  :class="classes"
  :style="style"
)
  .FExpandable__title(
    tabindex="0"
    @click="handleToggle"
    @keyup.enter="handleToggle"
    :class="titleClasses"
  )
    slot(name="title")
    .FExpandable__title__highlighter
  .FExpandable__container
    .FExpandable__content(ref="contentRef")
      // @slot FExpandable content
      slot
</template>

<style lang="stylus">
.FExpandable__title
  position relative
  cursor pointer
  padding-right rem(48)
  overflow hidden

  &::before,
  &::after
    content ''
    position absolute
    background currentColor
    border-radius rem(2)
    width rem(20)
    height rem(4)
    right 0
    top 50%
    transition transform 0.5s var(--transition--ease-out)

  &::before
    transform scale(var(--FExpandable--icon-scale)) translateY(-50%)

  &::after
    opacity 1
    transform scale(var(--FExpandable--icon-scale)) translateY(-50%) rotate(90deg)

  &:focus-visible
    border-radius rem(4)
    outline-offset rem(4)
    outline solid rem(3) currentColor
    transition $outline-transition

.FExpandable--toggled
  .FExpandable__title
    &::before
      transform scale(var(--FExpandable--icon-scale)) translateY(-50%) rotate(180deg)

    &::after
      transform scale(var(--FExpandable--icon-scale)) translateY(-50%) rotate(180deg)

.FExpandable__title__highlighter
  position absolute
  width 100%
  height 100%
  left 0
  background-color var(--FExpandable--hover-color)
  transition transform 0.5s var(--transition--ease-out)
  z-index -1

.FExpandable__title--withHover
  $animation-padding ?= 16px
  transition all 0.3s var(--transition--ease-out)

  > *
    transition all 0.3s var(--transition--ease-out)

  &:hover
    color var(--FExpandable--text-hover-color)

    .FExpandable__title__highlighter
      transform translateY(-100%)

    > *
      transform translateX($animation-padding)

    &:after
      transform scale(var(--FExpandable--icon-scale)) translateY(-50%) translateX(-1 * $animation-padding) rotate(90deg)

    &:before
      transform scale(var(--FExpandable--icon-scale)) translateY(-50%) translateX(-1 * $animation-padding)

    .FExpandable--toggled &,
    .FExpandable__title
      &:hover
        &:before
          transform scale(var(--FExpandable--icon-scale)) translateX(-1 * $animation-padding) translateY(-50%) rotate(180deg)

        &:after
          transform scale(var(--FExpandable--icon-scale)) translateX(-1 * $animation-padding) translateY(-50%) rotate(180deg)

.FExpandable__container
  height 0
  overflow hidden
  position relative
  will-change height
  transition height 0.75s var(--transition--ease-out)

.FExpandable--toggled .FExpandable__container
  height calc(var(--FExpandable--container-height) + var(--FExpandable--container-gap))

.FExpandable__content
  position absolute
  bottom 0
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { genSize } from '@/utils/genSize';
import { getCssColor } from '@/utils/getCSSColor';
import { useVModelProxy } from '@/composables/useVModelProxy';
import { useElementSize } from '@vueuse/core';

export interface FExpandableProps {
  /**
   * Value of the component
   * @model
   */
  modelValue?: boolean;
  /**
   * Gap between title and content
   */
  gap?: string | number;
  /**
   * Scale the + / - icons, which base size is 20px
   */
  iconScale?: string | number;
  /**
   * With animation on hover
   */
  withHoverAnimation?: boolean;
  /**
   * backgroundColor of the title component when hover
   */
  hoverColor?: Color;
  /**
   * Color of the text when hover
   */
  textHoverColor?: Color;
}

const props = withDefaults(defineProps<FExpandableProps>(), {
  gap: 24,
  modelValue: false,
  iconScale: 1,
  withHoverAnimation: false,
  hoverColor: 'primary',
  textHoverColor: 'neutral--light-5',
});

const isToggled = useVModelProxy<boolean>(props);

const contentRef = ref();
const { height: contentHeight } = useElementSize(contentRef);
const classes = computed(() => ({
  'FExpandable--toggled': isToggled.value,
}));

const titleClasses = computed(() => ({
  'FExpandable__title--withHover': props.withHoverAnimation,
}));

const style = computed(
  (): Style => ({
    '--FExpandable--container-height': genSize(contentHeight.value),
    '--FExpandable--container-gap': genSize(props.gap),
    '--FExpandable--icon-scale': String(props.iconScale),
    '--FExpandable--hover-color': getCssColor(props.hoverColor),
    '--FExpandable--text-hover-color': getCssColor(props.textHoverColor),
  })
);

function handleToggle() {
  isToggled.value = !isToggled.value;
}
</script>
