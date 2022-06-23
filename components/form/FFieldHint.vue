<template lang="pug">
.FFieldHint(
  :class="classes"
  :style="style"
)
  FIcon(
    v-if="icon"
    :name="icon"
    :size="16"
  )
  .FFieldHint__hint {{ text }}
</template>

<style lang="stylus">
.FFieldHint
  display flex
  align-items center

  > * + *
    margin-left rem(4)

.FFieldHint
  position absolute
  top 100%
  margin-top rem(8)
  min-height rem(16)
  color var(--ffieldhint--text-color)
  transition opacity 200ms, transform 200ms
  opacity 0
  transform translateY(-100%)

  &--visible
    opacity 1
    transform translateY(0)

  &--hidden
    display none

.FFieldHint__hint
  use-font('caption')
</style>

<script setup lang="ts">
import { computed } from 'vue';
import { getCssColor } from '@/utils/getCssColor';
import FIcon from '@/components/FIcon.vue';

export interface FFieldHintProps {
  /**
   * Text to display as a form field hint
   */
  text?: string;
  /**
   * Hide the hint
   */
  hidden?: boolean;
  /**
   * Color of the text
   */
  textColor?: Color;
  /**
   * Icon, displayed before the hint
   */
  icon?: Icon | null;
}

const props = withDefaults(defineProps<FFieldHintProps>(), {
  text: '',
  textColor: 'neutral--dark-4',
  icon: null,
});

const classes = computed(() => ({
  'FFieldHint--visible': props.text !== '',
  'FFieldHint--hidden': props.hidden,
}));

const style = computed(
  (): Style => ({
    '--ffieldhint--text-color': getCssColor(props.textColor),
  })
);
</script>
