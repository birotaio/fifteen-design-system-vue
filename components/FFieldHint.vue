<template lang="pug">
.FFieldHint(
  :class="classes"
  :style="style"
) {{ text }}
</template>

<style lang="stylus">
.FFieldHint
  margin-top rem(8)
  use-font('caption')
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
</style>

<script setup lang="ts">
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
}

const props = withDefaults(defineProps<FFieldHintProps>(), {
  text: '',
  textColor: 'neutral--dark-4',
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
