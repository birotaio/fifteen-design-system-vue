import { useField, validate } from 'vee-validate';
import { useVModelProxy } from '@fifteen/shared-lib';

import type { Ref, ComputedRef, WritableComputedRef } from 'vue';
import type { ValidationRule } from '@/types/forms';

type BaseProps<Value> = {
  modelValue?: Value | null;
  name: string;
  rules?: ValidationRule | ValidationRule[];
  hint?: string;
  errorMessage?: string;
  [key: string]: unknown;
};

interface UseFieldWithValidationOptions {
  /**
   * Valide the input on component mount
   */
  validateOnMount?: boolean;
  /**
   * Validate the input when model value is updated
   */
  validateOnModelValueUpdate?: boolean;
  /**
   * Internal component rules
   */
  rules?: ValidationRule | ValidationRule[];
}

interface UseFieldWithValidationReturn<T> {
  /**
   * Function which handles field update, with validation or not
   */
  validate: (
    e: Event | string | number | boolean | null,
    shouldValidate?: boolean
  ) => void;
  /**
   * Function which resets field validation
   */
  resetValidation: () => void;
  /**
   * Input field ref value
   */
  value: Ref<T>;
  /**
   * Input hint, coming from props.hint, or props.errorMessage if the validation fails
   */
  hint: Ref<string> | ComputedRef<string>;
  /**
   * Field validation status
   */
  isValid: Ref<boolean> | ComputedRef<boolean>;
}

/**
 * Get a computed hint value, determined by props and validation status (error)
 * @param props - Props of the component
 * @param errors - Validation errors
 */
function getHint<Value>(
  props: BaseProps<Value>,
  errors: Ref<string[]>
): ComputedRef<string> {
  return computed(() =>
    errors.value?.length > 0
      ? props?.errorMessage || errors.value?.[0]
      : props.hint ?? ''
  );
}

/**
 * Form related operations management: validation, hint value
 * @param props - Form field component props
 * @param options - Options to override prop names that are looked up by default
 * @returns Field value, hint and validation status
 */
export function useFieldWithValidation<
  Value,
  Props extends BaseProps<Value> = BaseProps<Value>,
  Name extends string = 'update:modelValue'
>(
  props: Props,
  options?: UseFieldWithValidationOptions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit?: (name: Name, ...args: any[]) => void
): UseFieldWithValidationReturn<Value> {
  const fieldName = toRef<Props, 'name'>(props, 'name');

  const rules = [
    ...(props?.rules ? [props.rules] : []),
    ...(options?.rules ? [options.rules] : []),
  ].flat(1);

  // Bypass form binding if the input has no props.name
  if (!fieldName.value) {
    const fieldValue = useVModelProxy<Value>({ props });

    const isValid = ref(true);
    const errors = ref<string[]>([]);
    let onMountValided = false;
    watch(
      fieldValue,
      async () => {
        if (
          (options?.validateOnMount && !onMountValided) ||
          options?.validateOnModelValueUpdate
        ) {
          const result = await validate(fieldValue.value, rules);
          errors.value = result.errors;
          isValid.value = result.valid;
          onMountValided = true;
        }
      },
      { immediate: options?.validateOnMount }
    );

    return {
      validate: async (eventOrValue, validateField = true) => {
        // Value is only used when validation in manual (eg. for custom inputs like FPhoneInput or FDigitsInput)
        const value =
          eventOrValue instanceof Event ? fieldValue.value : eventOrValue;

        if (validateField) {
          const result = await validate(value ?? fieldValue.value, rules);
          errors.value = result.errors;
          isValid.value = result.valid;
        }
      },
      resetValidation: () => {
        errors.value = [];
        isValid.value = true;
      },
      value: fieldValue,
      hint: getHint(props, errors),
      isValid,
    };
  }

  const { value, handleChange, errors } = useField<Value>(fieldName, rules, {
    initialValue: props?.modelValue ?? undefined,
    validateOnValueUpdate: false,
    validateOnMount: options?.validateOnMount,
  });

  const vm = getCurrentInstance();
  const _emit = emit || vm?.emit;

  watch(value, () => {
    _emit?.('update:modelValue' as Name, value.value);
  });

  watch(
    () => props?.modelValue,
    value => {
      handleChange(value, options?.validateOnModelValueUpdate ?? false);
    }
  );

  const isValid = computed(() => errors.value.length === 0);

  return {
    validate: handleChange,
    resetValidation: () => {
      errors.value = [];
    },
    value,
    hint: getHint(props, errors),
    isValid,
  };
}
