import type { UnwrapRef, WritableComputedRef } from 'vue';
import { ref, computed, watch, getCurrentInstance } from 'vue';

/**
 * Shorthand for v-model binding. Use an internal value to ensure that a component can works regardless v-model is assigned or not.
 * @param props - Component props
 * @param propName - Component prop name to bind
 * @param emit - Emit function from composant declaration
 * @param defaultValue - Use a default value to the proxied prop. Will set the internal ref to that value instead of the prop's initial value.s
 * @param event - Event name to override the trigger update event, default to 'update:<propName>'.
 */
export function useVModelProxy<T, Name extends string = 'update:modelValue'>(
  props: { [key: string]: unknown },
  propName = 'modelValue',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  emit?: (name: Name, ...args: any[]) => void,
  defaultValue?: T,
  event?: string
): WritableComputedRef<T | undefined> {
  // Internal ref with initial value based on default or prop value
  const internal = ref<T>(defaultValue ?? (props[propName] as T));

  const vm = getCurrentInstance();
  const _emit = emit || vm?.emit;

  // Select the event type to emit
  const eventName = (event || `update:${propName}`) as Name;
  // Properly trigger the update event (if a default was overriding prop)
  if (defaultValue !== undefined && defaultValue !== null) {
    _emit?.(eventName, internal.value);
  }

  // Watch any change in prop, leading to an update of the internal value
  watch(
    () => props[propName] as T,
    (newVal: T) => (internal.value = newVal as UnwrapRef<T>)
  );

  return computed<T>({
    get(): T {
      return internal.value as T;
    },
    set: (value: T) => {
      internal.value = value as UnwrapRef<T>;
      _emit?.(eventName, value);
    },
  });
}
