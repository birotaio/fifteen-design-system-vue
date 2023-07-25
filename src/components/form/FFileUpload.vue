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
      :aria-label="buttonText"
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
        v-for="file in uploadedFiles"
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
import { mimes as mimesRule, size as sizeRule } from '@vee-validate/rules';

import type { FFieldProps } from '@/components/form/FField.vue';
import type { Icon } from '@/types/icons';
import type { FButtonSize } from '@/components/FButton.vue';
import type { CommonFormFieldProps } from '@/types/forms';

export interface FFileUploadProps
  extends FFieldProps,
    CommonFormFieldProps<File[] | null> {
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
  errorColor: 'danger',
  disabled: false,
  name: 'defaultName',
  validateOnMount: false,
  validationTrigger: 'change',
  errorMessage: '',
});

const underlyingFileInputRef = ref<HTMLInputElement>();

const { isValid, hint, value, validate } = useFieldWithValidation<
  File[] | File | undefined
>(props, {
  validateOnMount: props?.validateOnMount,
  rules: [isValidFile],
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: File[] | null | undefined): void;
  (name: 'change', value: Event): void;
  (name: 'files', value: File[]): void;
}>();

function isValidFile(value: unknown): boolean {
  // Vee-validate mimes rule seems broken when `mimes` is empty
  const isValidFormat =
    props.allowedMimeTypes.length > 0
      ? mimesRule(value, props.allowedMimeTypes)
      : true;

  const isValidSize = sizeRule(value, { size: props.maximumSize });

  const isValidFormatAndSize = isValidFormat && isValidSize;

  return isValidFormatAndSize;
}

const uploadedFiles = ref<File[]>([]);

watch(value, newValue => {
  uploadedFiles.value = !newValue
    ? []
    : Array.isArray(newValue)
    ? newValue
    : [newValue];

  if (uploadedFiles.value.length > 0 && isValidFile(newValue)) {
    emit('files', uploadedFiles.value);
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
