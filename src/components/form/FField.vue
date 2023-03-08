<template lang="pug">
component.FField(
  :is="fieldset ? 'fieldset' : 'div'"
  :style="style"
)
  FFieldLabel(
    v-if="label"
    :name="name"
    :label="label"
    :text-color="labelTextColor"
    :type="fieldset ? 'legend' : 'label'"
  )
  slot 
  FFieldHint.FField__hint(
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

fieldset.FField
  border none
  padding 0

.FField__hint
  position absolute
  top 100%
  margin-top rem(8)
</style>

<script setup lang="ts">
import { computed } from 'vue';

import FFieldLabel from '@/components/form/FFieldLabel.vue';
import FFieldHint from '@/components/form/FFieldHint.vue';
import { genSize } from '@/utils/genSize';

export interface FFieldProps {
  /**
   * Render the field as fieldset. Default to false
   */
  fieldset?: boolean;
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
  hint: '',
  hideHint: false,
  hintTextColor: 'neutral--dark-4',
  hintIcon: null,
  fieldset: false,
});

const style = computed(
  (): Style => ({
    '--ffield--margin-bottom': genSize(props.hideHint ? 0 : 16),
  })
);
</script>
