<template lang="pug">
.FField(:style="style")
  FFieldLabel(
    v-if="label"
    :name="name"
    :label="label"
    :text-color="labelTextColor"
    :type="labelType"
  )
  slot 
  FFieldHint(
    :text="hint"
    :hidden="hideHint"
    :text-color="hintTextColor"
    :icon="hintIcon"
  )
</template>

<style lang="stylus">
.FField
  display flex
  flex-direction column
  position relative
  margin-bottom var(--ffield--margin-bottom)
</style>

<script setup lang="ts">
import FFieldLabel from '@/components/form/FFieldLabel.vue';
import type { FFieldLabelProps } from '@/components/form/FFieldLabel.vue';
import FFieldHint from '@/components/form/FFieldHint.vue';
import { computed } from 'vue';
import { genSize } from '@/utils/genSize';

export interface FFieldProps {
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Label, placed on top of input
   */
  label?: string;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Semantic type of the label
   */
  labelType?: FFieldLabelProps['type'];
  /**
   * A hint to display under the input
   */
  hint?: string;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
}

const props = withDefaults(defineProps<FFieldProps>(), {
  name: '',
  label: '',
  labelTextColor: 'neutral--dark-4',
  labelType: 'label',
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
});

const style = computed(
  (): Style => ({
    '--ffield--margin-bottom': genSize(props.hideHint ? 0 : 16),
  })
);
</script>
