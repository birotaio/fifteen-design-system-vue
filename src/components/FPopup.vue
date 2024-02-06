<template lang="pug">
.FPopup(
  ref="popupRef"
  :style="style"
  :class="menuClasses"
  role="button"
  tabindex="-1"
)
  Popper(
    :show="isOpen"
    v-bind="resolvedPopperProps"
  )
    .FPopup__activator(
      ref="activatorRef"
      role="button"
      tabindex="-1"
      @keydown.enter="handleKeydownEnter"
      @keydown.esc.prevent="close()"
      @click="!preventActivation && toggle()"
    )
      slot(
        name="activator"
        v-bind="{ toggle, open, close }"
      )
    template(#content)
      .FPopup__content(
        ref="contentRef"
        role="listbox"
        tabindex="-1"
        @click="focusActivator"
        @keydown.enter="focusActivator"
      )
        slot(v-bind="{ toggle, open, close }")
</template>

<style lang="stylus">
.FPopup
  --popper-theme-border-radius rem(16)
  display inline-block

  .popper
    left 0
    min-width var(--FPopup--width)

  // Unfortunately, this is the only way to dynamically remove
  // the Popper transition with the lib vue3-popper
  &--inanimated .popper
    transition none

  .inline-block
    display block !important
    position relative
    border none !important
    margin 0 !important
    width 100%

.FPopup__activator:focus
  outline none

.FPopup--disabled
  pointer-events none
  opacity 0.7

.FPopup__loader
  margin-right rem(8)
</style>

<script setup lang="ts">
import Popper from 'vue3-popper/dist/popper.esm';
import { onClickOutside, useMutationObserver } from '@vueuse/core';
import { useVModelProxy } from '@fifteen/shared-lib';

import { genSize } from '@/utils/genSize';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FPopupOptionValue = any;

export interface FPopupOption {
  label: string;
  value: FPopupOptionValue;
  description?: string;
}

export interface FPopupProps {
  /**
   * Control menu visibility state from parent
   * @model
   */
  modelValue?: boolean;
  /**
   * If true, clicking outside the menu won't close it
   */
  persistent?: boolean;
  /**
   * Width of the menu
   */
  width?: number | string;
  /**
   * Disable the menu
   */
  disabled?: boolean;
  /**
   * Disable fade transitions
   */
  inanimated?: boolean;
  /**
   * Loading state of the menu
   */
  loading?: boolean;
  /**
   * Force the menu to be positioned as `absolute` instead of `fixed` by default
   */
  absolute?: boolean;
  /**
   * Set the z-index of the menu
   */
  zIndex?: number | string;
  /**
   * Offset in pixels along the activator element
   */
  offsetSkid?: number | string;
  /**
   * Offset in pixels away from the trigger element
   */
  offsetDistance?: number | string;
  /**
   * Prevent the activator to automatically toggle the menu on click, enter or space
   */
  preventActivation?: boolean;
}

const props = withDefaults(defineProps<FPopupProps>(), {
  modelValue: false,
  persistent: false,
  width: 300,
  disabled: false,
  inanimated: false,
  loading: false,
  absolute: false,
  zIndex: 9999,
  offsetSkid: 0,
  offsetDistance: 16,
  preventActivation: false,
});

defineEmits<{
  (name: 'update:modelValue', value: boolean): void;
}>();

const style = computed(
  (): Style => ({
    '--FPopup--width': genSize(props.width),
  })
);

const resolvedPopperProps = computed<InstanceType<typeof Popper>['$props']>(
  () => ({
    placement: 'bottom-start',
    strategy: props.absolute ? 'absolute' : 'fixed',
    zIndex: props.zIndex,
    offsetSkid: String(props.offsetSkid),
    offsetDistance: String(props.offsetDistance),
  })
);

const isOpen = useVModelProxy({ props });

const activatorRef = ref<HTMLDivElement>();

const menuClasses = computed(() => ({
  'FPopup--disabled': props.disabled,
  'FPopup--inanimated': props.inanimated,
}));

const anyFocusableElementSelector = [
  'button:not(.FButton)',
  '[href]',
  'input',
  'select',
  'textarea',
  '[tabindex]:not([tabindex="-1"])',
].join(', ');

/**
 * Focus the activator
 */
function focusActivator(): void {
  if (!isOpen.value || props.disabled) return;
  const hasFocusableChild = Array.from(
    activatorRef.value?.querySelectorAll(anyFocusableElementSelector) ?? []
  ).some(el => !el.hasAttribute('disabled'));
  // If the activator does not have any focusable child, we must focus it manually to activate the keyboard event listeners
  if (!hasFocusableChild) activatorRef.value?.focus();
}

/**
 * Toggle the menu
 */
async function toggle(): Promise<void> {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
}

/**
 * Open the menu
 */
function open(): void {
  if (props.disabled) return;
  isOpen.value = true;
}

/**
 * Close the menu
 */
function close(): void {
  if (props.disabled) return;
  isOpen.value = false;
}

watch(isOpen, newValue => {
  if (newValue) {
    focusActivator();
  }
});

function handleKeydownEnter(event: KeyboardEvent): void {
  if (!props.preventActivation) {
    open();
    event.preventDefault();
  }
}

const popupRef = ref();
onClickOutside(popupRef, () => {
  if (!props.persistent) isOpen.value = false;
});

// Use mutation observer on contentRef in order to watch changes and retrigger menu position,
// as it appears that poppers does not do it natively.
// The cleanest way is to dispatch a fake resize event on window
const contentRef = ref<HTMLDivElement>();
// Wrap vueuse’s useMutationObserver in onMounted to make sure we are in a browser context (prevent SSR errors)
onMounted(() => {
  useMutationObserver(
    contentRef,
    () => nextTick(() => window.dispatchEvent(new Event('resize'))),
    { childList: true }
  );
});
</script>
