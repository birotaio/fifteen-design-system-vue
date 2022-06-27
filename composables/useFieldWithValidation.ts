import { Ref, ComputedRef, ref } from 'vue';
import { computed, watch, toRef, getCurrentInstance } from 'vue';
import { useField } from 'vee-validate';
import { useVModelProxy } from './useVModelProxy';

type BaseProps<Value> = {
  modelValue: Value | null;
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
}

interface UseFieldWithValidationReturns {
  /**
   * Function which handles field update, with validation or not
   */
  handleValidation: (
    e: Event | string | number | boolean | null,
    shouldValidate?: boolean
  ) => void;
  /**
   * Input field ref value
   */
  value: Ref;
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
): UseFieldWithValidationReturns {
  const fieldName = toRef<Props, 'name'>(props, 'name');

  // Prevent validation if the input has no props.name
  if (!fieldName.value) {
    const fieldValue = useVModelProxy(props);
    return {
      handleValidation: eventOrValue => {
        const newValue =
          eventOrValue instanceof Event
            ? (eventOrValue.target as HTMLInputElement).value
            : eventOrValue;
        fieldValue.value = newValue;
      },
      value: ref(null),
      hint: ref(props?.hint ?? ''),
      isValid: ref(true),
    };
  }

  const { errors, value, handleChange } = useField<Value>(
    fieldName,
    props?.rules,
    {
      initialValue: props?.modelValue ?? undefined,
      validateOnValueUpdate: false,
      validateOnMount: options?.validateOnMount,
    }
  );

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

  const hint = computed<string>(() =>
    errors.value.length > 0
      ? props?.errorMessage || errors.value?.[0]
      : props?.hint || ''
  );
  const isValid = computed(() => errors.value.length === 0);

  return {
    handleValidation: handleChange,
    value,
    hint,
    isValid,
  };
}
