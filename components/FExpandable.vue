<template lang="pug">
.FExpandable(
  :class="classes"
  :style="style"
)
  .FExpandable__title(
    tabindex="0"
    @click="handleToggle"
    @keyup.enter="handleToggle"
  )
    slot(name="title")
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

  &:before,
  &:after
    content ''
    position absolute
    background var(--color--secondary)
    border-radius rem(2)
    width rem(20)
    height rem(4)
    right 0
    top 50%
    transition transform 0.5s var(--transition--ease-out)

  &:before
    transform scale(var(--fexpandable--icon-scale)) translateY(-50%)

  &:after
    opacity 1
    transform scale(var(--fexpandable--icon-scale)) translateY(-50%) rotate(90deg)

  &:focus-visible
    border-radius rem(4)
    outline-offset rem(4)
    outline solid rem(3) currentColor
    transition $outline-transition

.FExpandable--toggled
  .FExpandable__title
    &:before
      transform scale(var(--fexpandable--icon-scale)) translateY(-50%) rotate(180deg)

    &:after
      transform scale(var(--fexpandable--icon-scale)) translateY(-50%) rotate(180deg)

.FExpandable__container
  height 0
  overflow hidden
  position relative
  will-change height
  transition height 0.75s var(--transition--ease-out)

.FExpandable--toggled .FExpandable__container
  height calc(var(--fexpandable--container-height) + var(--fexpandable--container-gap))

.FExpandable__content
  position absolute
  bottom 0
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { genSize } from '@/utils/genSize';
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
}

const props = withDefaults(defineProps<FExpandableProps>(), {
  gap: 24,
  modelValue: false,
  iconScale: 1,
});

const isToggled = useVModelProxy<boolean>(props);

const contentRef = ref();
const { height: contentHeight } = useElementSize(contentRef);
const classes = computed(() => ({ 'FExpandable--toggled': isToggled.value }));

const style = computed(
  (): Style => ({
    '--fexpandable--container-height': genSize(contentHeight.value),
    '--fexpandable--container-gap': genSize(props.gap),
    '--fexpandable--icon-scale': String(props.iconScale),
  })
);

function handleToggle() {
  isToggled.value = !isToggled.value;
}
</script>
