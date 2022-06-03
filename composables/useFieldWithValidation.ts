import type { Ref, ComputedRef } from 'vue';
import { computed, watch, toRef, getCurrentInstance } from 'vue';
import { useField } from 'vee-validate';

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
  handleValidation: (e: unknown, shouldValidate?: boolean | undefined) => void;
  /**
   * Input field ref value
   */
  value: Ref;
  /**
   * Input hint, coming from props.hint, or props.errorMessage if the validation fails
   */
  hint: ComputedRef<string>;
  /**
   * Field validation status
   */
  isValid: ComputedRef<boolean>;
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
  const { errors, value, handleChange } = useField<Value>(
    toRef<Props, 'name'>(props, 'name'),
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
