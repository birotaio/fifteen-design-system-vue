import { getCurrentInstance } from 'vue';

type TriggerEvent = 'focus' | 'blur' | 'change' | 'input' | null;

/**
 * Wrap emits and call callbacks functions based on a trigger
 * @param callbackFn - Function to call when the validationTrigger event is triggered
 * @param triggerEvent - Input event that triggers a callback when fired
 * @param emit - Emit function from component context
 * @returns The event handlers
 */
export function useInputEventBindings<Name extends string>(
  callbackFn: (event: Event) => void,
  triggerEvent: TriggerEvent,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit?: (name: Name, ...args: any[]) => void
) {
  const vm = getCurrentInstance();
  const _emit = emit || vm?.emit;

  function handleBlur(event: Event) {
    _emit?.('blur' as Name, event);
    triggerEvent === 'blur' && callbackFn(event);
  }
  function handleFocus(event: Event) {
    _emit?.('focus' as Name, event);
    triggerEvent === 'focus' && callbackFn(event);
  }
  function handleInput(event: Event) {
    _emit?.('input' as Name, event);
    triggerEvent === 'input' && callbackFn(event);
  }
  function handleChange(event: Event) {
    _emit?.('change' as Name, event);
    triggerEvent === 'change' && callbackFn(event);
  }

  return {
    handleBlur,
    handleFocus,
    handleInput,
    handleChange,
  };
}
