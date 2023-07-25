export type ValidationRule = (value: unknown) => boolean;

export interface CommonFormFieldProps<T = void> {
  /**
   * Input value
   * @model
   */
  modelValue?: T;
  /**
   * Disable the field input
   */
  disabled?: boolean;
  /**
   * Loading state of the input
   */
  loading?: boolean;
  /**
   * Background color of the input
   */
  color?: Color;
  /**
   * Text color of the input
   */
  textColor?: Color;
  /**
   * Hint error color
   */
  errorColor?: Color;
  /**
   * Event that triggers validation
   */
  validationTrigger?: 'input' | 'change' | 'focus' | 'blur';
  /**
   * Rules form field validation
   */
  rules?: ValidationRule | ValidationRule[];
  /**
   * Message to use as hint when validation fails
   */
  errorMessage?: string;
  /**
   * Whether the input should be validated on mount
   */
  validateOnMount?: boolean;
  /**
   * Background focus color
   */
  focusColor?: Color;
  /**
   * Color of the border
   */
  borderColor?: Color;
}
