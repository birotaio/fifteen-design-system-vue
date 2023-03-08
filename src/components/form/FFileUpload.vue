<template lang="pug">
FField.FFileUpload(
  :class="classes"
  v-bind="{ name, label, labelTextColor, hint, hideHint, hintTextColor, hintIcon }"
)
  .FFileUpload__content
    input(
      :id="name"
      ref="underlyingFileInputRef"
      :name="name"
      :multiple="multiple"
      :disabled="disabled"
      :accept="allowedMimeTypes?.join(',')"
      type="file"
      @change="handleChange"
    )

    FButton(
      :size="size"
      :disabled="disabled"
      :background="color"
      :color="textColor"
      :loading="loading"
      static
      @click="underlyingFileInputRef?.click()"
    )
      FIcon(
        v-if="!!iconName"
        :name="iconName"
        :color="iconColor"
      )
      span {{ buttonText }}
    ul.FFileUpload__fileNames
      li(
        v-for="file in value"
        :key="file.name"
      ) {{ file?.name ?? '' }}
</template>

<style lang="stylus">
.FFileUpload
  input[type='file']
    display none

.FFileUpload--disabled
  label
    color var(--color--neutral--dark-1)

.FFileUpload__content
  display flex
  align-items center

.FFileUpload__fileNames
  display flex
  row-gap rem(8)
  word-break break-all
  flex-wrap wrap
  list-style none
  padding 0

  li
    use-font('body-2')
    margin-left rem(16)
</style>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { mimes as mimesRule, size as sizeRule } from '@vee-validate/rules';

import FButton from '@/components/FButton.vue';
import FIcon from '@/components/FIcon.vue';
import FField from '@/components/form/FField.vue';
import { useInputEventBindings } from '@/composables/useInputEventBindings';
import { useFieldWithValidation } from '@/composables/useFieldWithValidation';

import type { Icon } from '@/types/icons';
import type { FButtonSize } from '@/components/FButton.vue';

export interface FFileUploadProps {
  /**
   * Input value
   * @model
   */
  modelValue?: File[] | null;
  /**
   * Allow importing multiple files
   */
  multiple?: boolean;
  /**
   * Allowed file formats
   */
  allowedMimeTypes?: string[];
  /**
   * Maximum allowed file size, in kilobytes (Kb)
   */
  maximumSize?: number;
  /**
   * Rules form validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Icon displayed inside the button
   */
  iconName?: Icon;
  /**
   * Button size
   */
  size?: FButtonSize;
  /**
   * Button text
   */
  buttonText?: string;
  /**
   * Button background color
   */
  color?: string;
  /**
   * Button text color
   */
  textColor?: string;
  /**
   * Label, placed on top of input
   */
  label?: string;
  /**
   * Disable the field
   */
  disabled?: boolean;
  /**
   * Text color of the label
   */
  labelTextColor?: Color;
  /**
   * Text and caret error color
   */
  errorColor?: Color;
  /**
   * Text color of the hint
   */
  hintTextColor?: Color;
  /**
   * Hide or not the hint / error message
   */
  hideHint?: boolean;
  /**
   * A hint to display under the input
   */
  hint?: string;
  /**
   * Icon, displayed before the hint
   */
  hintIcon?: Icon | null;
  /**
   * Field name. Used in a form context
   */
  name?: string;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Loading state of the input
   */
  loading?: boolean;
}

const props = withDefaults(defineProps<FFileUploadProps>(), {
  modelValue: null,
  multiple: false,
  iconName: 'upload',
  size: 'medium',
  buttonText: '',
  allowedMimeTypes: () => [],
  maximumSize: 50000,
  rules: () => [],
  color: 'neutral--light-3',
  textColor: 'neutral--dark-4',
  label: '',
  labelTextColor: 'neutral--dark-4',
  errorColor: 'danger',
  hint: '',
  hideHint: false,
  hintIcon: null,
  hintTextColor: 'neutral--dark-4',
  disabled: false,
  name: 'defaultName',
  validateOnMount: false,
  validationTrigger: 'change',
  errorMessage: '',
});

const underlyingFileInputRef = ref<HTMLInputElement>();

const { isValid, hint, value, validate } = useFieldWithValidation(props, {
  validateOnMount: props?.validateOnMount,
  rules: [isValidFile],
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: File[] | null | undefined): void;
  (name: 'change', value: Event): void;
  (name: 'files', value: File[]): void;
}>();

function isValidFile(value: unknown): boolean {
  const isValidFormat = mimesRule(value, props.allowedMimeTypes);
  const isValidSize = sizeRule(value, { size: props.maximumSize });

  const isValidFormatAndSize = isValidFormat && isValidSize;

  return isValidFormatAndSize;
}

watch(value, newValue => {
  if (!!newValue?.length && isValidFile(newValue)) {
    emit('files', newValue as File[]);
  }
});

const { handleChange } = useInputEventBindings(
  validate,
  props.validationTrigger,
  emit
);

const hintTextColor = computed(() =>
  props.disabled
    ? 'neutral--dark-1'
    : isValid.value
    ? props.hintTextColor
    : props.errorColor
);

const iconColor = computed(() =>
  props.disabled ? 'neutral--dark-1' : props.textColor
);

const classes = computed(() => ({
  'FFileUpload--disabled': props.disabled,
}));
</script>
