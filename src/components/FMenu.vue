<template lang="pug">
.FMenu(
  ref="menuRef"
  :style="style"
  :class="menuClasses"
  @keydown="handlePreselectSearch"
)
  Popper(
    :show="isOpen"
    v-bind="resolvedPopperProps"
  )
    .FMenu__activator(
      ref="activatorRef"
      tabindex="-1"
      @keydown.down.prevent="keyboardPreselectOption('next')"
      @keydown.up.prevent="keyboardPreselectOption('prev')"
      @keydown.home.prevent="keyboardPreselectOption('first')"
      @keydown.end.prevent="keyboardPreselectOption('last')"
      @keydown.tab.exact="keyboardPreselectOption('next'); isOpen && $event.preventDefault()"
      @keydown.shift.tab="keyboardPreselectOption('prev'); isOpen && $event.preventDefault()"
      @keydown.enter.space="handleKeydownEnter($event)"
      @keydown.esc.prevent="closeMenu()"
      @click="!preventActivation && toggleMenu()"
    )
      slot(
        name="activator"
        v-bind="{ toggleMenu, openMenu, closeMenu }"
      )
    template(#content)
      .FMenu__content(
        ref="contentRef"
        @click="focusActivator"
        @mousemove="isKeyboardInteracting = false"
      )
        .FMenu__optionsMenu(
          v-if="options.length"
          ref="menuOptionsRef"
        )
          .FMenu__option(
            v-for="(option, index) in options"
            ref="optionRefs"
            :key="stringify(option.value)"
            role="option"
            tabindex="-1"
            :class="selectOptionClasses(index)"
            :aria-selected="isSelected(index)"
            @click="selectOption(option)"
            @mouseenter="mousePreselectOption(index)"
            @mouseleave="mousePreselectOption(-1)"
          )
            slot(
              name="option-prefix"
              v-bind="{ option, index, isSelected: isSelected(index) }"
            )
            .FMenu__option__content
              slot(
                name="option"
                v-bind="{ option, index, isSelected: isSelected(index) }"
              )
                span {{ option.label }}
              span.FMenu__option__description(v-if="option.description") {{ option.description }}
        .FMenu__noOption(v-if="options.length === 0")
          FLoader.FMenu__loader(
            v-if="loading"
            height="20"
          )
          span {{ emptyText }}
</template>

<style lang="stylus">
.FMenu
  --popper-theme-border-radius rem(16)
  display inline-block

  .popper
    left 0
    min-width var(--fmenu--width)

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

.FMenu__activator:focus
  outline none

.FMenu__optionsMenu
  background var(--fmenu--color)
  border-radius rem(16)
  padding rem(8)
  elevation(2)
  max-height rem(300)
  overflow auto
  overscroll-behavior contain
  scroll-padding-top rem(0)
  scrollbar(var(--fmenu--border-color))

  > * + *
    margin-top rem(4)

.FMenu__option
  display flex
  flex-wrap wrap
  align-items center
  border-radius rem(16)
  height var(--fmenu-option-height)
  padding rem(8)
  color var(--fmenu--text-color)
  font-size rem(14)
  transition background 300ms, color 300ms
  cursor pointer

  &--preselected
    background 'rgba(%s, 0.5)' % var(--color--neutral--light-2--rgb)

  &--selected
    color var(--fmenu--selected-option-text-color)
    background var(--fmenu--selected-option-color)
    font-weight 700

.FMenu__option__content
  display flex
  flex-direction column
  justify-content center

.FMenu__noOption
  display flex
  justify-content center
  background var(--fmenu--color)
  border-radius rem(16)
  elevation(2)
  color var(--fmenu--text-color)
  padding rem(16)
  font-size rem(14)

.FMenu--disabled
  pointer-events none
  opacity 0.7

.FMenu__loader
  margin-right rem(8)

.FMenu__option__description
  use-font('caption')
  opacity 0.75
</style>

<script setup lang="ts">
import Popper from 'vue3-popper/dist/popper.esm';
import equal from 'fast-deep-equal/es6';
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import {
  onClickOutside,
  useElementBounding,
  useMutationObserver,
} from '@vueuse/core';
import {
  useVModelProxy,
  removeDiacritics,
  stringify,
} from '@fifteen/shared-lib';

import { getCssColor } from '@/utils/getCssColor';
import { genSize } from '@/utils/genSize';
import FLoader from '@/components/FLoader.vue';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FMenuOptionValue = any;

export interface FMenuOption {
  label: string;
  value: FMenuOptionValue;
  description?: string;
}

export interface FMenuProps {
  /**
   * Control menu visibility state from parent
   * @model
   */
  modelValue?: boolean;
  /**
   * Selected value of the menu
   * @model
   */
  selectedOption?: FMenuOptionValue;
  /**
   * Array of options
   */
  options: FMenuOption[];
  /**
   * Prevent item selection
   */
  preventSelection?: boolean;
  /**
   * Prevent keyboard search
   */
  preventSearch?: boolean;
  /**
   * If true, clicking outside the menu won't close it
   */
  persistent?: boolean;
  /**
   * Text to display when no option is provided
   */
  emptyText?: string;
  /**
   * Width of the menu
   */
  width?: number | string;
  /**
   * Background color of the options menu
   */
  color?: Color;
  /**
   * Text color of option item
   */
  textColor?: Color;
  /**
   * Background color of the selected option
   */
  selectedOptionColor?: Color;
  /**
   * Text color of the selected option
   */
  selectedOptionTextColor?: Color;
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
   * Height of the option div, defaults to 52px
   */
  optionHeight?: number | string;
  /**
   * Prevent the activator to automatically toggle the menu on click, enter or space
   */
  preventActivation?: boolean;
}

const props = withDefaults(defineProps<FMenuProps>(), {
  modelValue: false,
  selectedOption: undefined,
  preventSelection: false,
  preventSearch: false,
  persistent: false,
  emptyText: '',
  options: () => [],
  width: 300,
  color: 'primary',
  textColor: 'neutral--light-5',
  selectedOptionColor: 'primary--light-2',
  selectedOptionTextColor: 'primary--dark-2',
  disabled: false,
  inanimated: false,
  loading: false,
  absolute: false,
  zIndex: 9999,
  offsetSkid: 0,
  offsetDistance: 16,
  optionHeight: 52,
  preventActivation: false,
});

defineExpose<{
  selectOption: (option?: FMenuOption | null) => void;
}>({
  selectOption,
});

const emit = defineEmits<{
  (name: 'update:modelValue', value: boolean): void;
  (name: 'update:selectedOption', value: FMenuOptionValue): void;
  (name: 'before-select-option', value: FMenuOptionValue): void;
}>();

const style = computed(
  (): Style => ({
    '--fmenu--width': genSize(props.width),
    '--fmenu--color': getCssColor(props.color),
    '--fmenu--text-color': getCssColor(props.textColor),
    '--fmenu--selected-option-color': getCssColor(props.selectedOptionColor),
    '--fmenu--selected-option-text-color': getCssColor(
      props.selectedOptionTextColor
    ),
    '--fmenu-option-height': genSize(props.optionHeight),
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

const isOpen = useVModelProxy<boolean>({ props });
const selectedOption = useVModelProxy<FMenuOptionValue>({
  props,
  propName: 'selectedOption',
});

const optionRefs = ref<HTMLElement[]>([]);
const activatorRef = ref<HTMLDivElement>();

const menuClasses = computed(() => ({
  'FMenu--disabled': props.disabled,
  'FMenu--inanimated': props.inanimated,
}));

const preselectedOptionIndex = ref(-1);
const isKeyboardInteracting = ref(false);

/**
 * Toggle the menu
 */
async function toggleMenu(): Promise<void> {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
}

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
 * Open the menu
 */
function openMenu(): void {
  if (props.disabled) return;
  isOpen.value = true;
}

/**
 * Close the menu
 */
function closeMenu(): void {
  if (props.disabled) return;
  isOpen.value = false;
}

watch(isOpen, newValue => {
  if (newValue) {
    focusActivator();
  } else {
    preselectOption(-1);
  }
});

watch(
  () => props.options,
  () => {
    // Preselect the first option if options prop is dynamic
    preselectOption(0);
  }
);

/**
 * Preselect an option
 * @param index - Index of option to preselect
 */
function preselectOption(index: number): void {
  preselectedOptionIndex.value = index;
}

/**
 * Returns the selection status of an option based on index
 * @param index - Index of the option
 */
function isSelected(index: number): boolean {
  return (
    props.options.findIndex(option =>
      equal(option.value, selectedOption.value)
    ) === index
  );
}

/**
 * Classes to apply to select option
 * @param index - Index of the option
 */
function selectOptionClasses(index: number): VueClasses {
  return {
    'FMenu__option--preselected': preselectedOptionIndex.value === index,
    'FMenu__option--selected': isSelected(index),
  };
}

/**
 * Preselect an option from a mouse interaction
 * @param index - Index of the option
 */
function mousePreselectOption(index: number): void {
  if (isKeyboardInteracting.value) return;
  preselectOption(index);
}

type PreselectionMode = 'first' | 'last' | 'prev' | 'next';

/**
 * get the option index to be preselected, based on mode
 * @param mode - The preselection mode
 */
function getPreselectIndex(mode: PreselectionMode): number {
  switch (mode) {
    case 'first':
      return 0;
    case 'last':
      return props.options.length - 1;
    case 'prev':
      return preselectedOptionIndex.value - 1 < 0
        ? props.options.length - 1
        : preselectedOptionIndex.value - 1;
    case 'next':
      return preselectedOptionIndex.value + 1 > props.options.length - 1
        ? 0
        : preselectedOptionIndex.value + 1;
  }
}

/**
 * Preselect the previous option or the last if the first is selected
 * @param mode - The preselection mode
 */
function keyboardPreselectOption(mode: PreselectionMode): void {
  if (!isOpen.value || !props.options.length) return;
  isKeyboardInteracting.value = true;

  const preselectIndex = getPreselectIndex(mode);

  scrollOptionIntoView(preselectIndex);
  preselectOption(preselectIndex);
}

const menuOptionsRef = ref();
const {
  top: menuOptionsTop,
  bottom: menuOptionsBottom,
  height: menuOptionsHeight,
} = useElementBounding(menuOptionsRef);

/**
 * Scroll to the selected option
 * @param index - Index of the option to scroll into view
 */
function scrollOptionIntoView(index: number): void {
  const el = optionRefs.value[index];
  const {
    top: itemTop,
    bottom: itemBottom,
    height,
  } = el.getBoundingClientRect();

  // If item overflow to the bottom
  if (itemTop < menuOptionsTop.value) {
    return menuOptionsRef.value.scrollTo(0, index * (height + 4));
  }

  // If item overflow to the top
  if (itemBottom > menuOptionsBottom.value) {
    return menuOptionsRef.value.scrollTo(
      0,
      (index + 1) * (height + 4) - menuOptionsHeight.value + 12
    );
  }
}

/**
 * Handle value selection
 */
function selectOption(option?: FMenuOption | null): void {
  if (!props.options.length || props.disabled) return;

  if (!option && preselectedOptionIndex.value === -1) {
    // Use current selected option as preselected option
    if (selectedOption.value) {
      const selectedOptionIndex = props.options.findIndex(option =>
        equal(option.value, selectedOption.value)
      );
      preselectOption(selectedOptionIndex);
      scrollOptionIntoView(selectedOptionIndex);
    }
    return;
  }

  const preselectedOption =
    option ?? props.options[preselectedOptionIndex.value];

  emit('before-select-option', preselectedOption.value);
  if (props.preventSelection) return;

  selectedOption.value = preselectedOption.value;
  closeMenu();
}

let preselectSearchTerm = '';
let timeout: NodeJS.Timeout;
const DELAY_BETWEEN_KEYSTROKES_IN_MS = 800;

/**
 * Preselect an option based on input keys (search)
 * @param event - Keyboard event
 */
function handlePreselectSearch(event: KeyboardEvent): void {
  event.stopPropagation();
  if (!isOpen.value || props.preventSearch) return;

  preselectSearchTerm = removeDiacritics(
    preselectSearchTerm + event.key
  ).toLocaleLowerCase();

  function matchResult(option: FMenuOption): boolean {
    const optionLabel = removeDiacritics(option.label.toLowerCase());
    const optionValue = removeDiacritics(stringify(option.value).toLowerCase());

    return (
      optionLabel.startsWith(preselectSearchTerm) ||
      optionValue.startsWith(preselectSearchTerm)
    );
  }

  timeout = setTimeout(() => {
    clearTimeout(timeout);
    preselectSearchTerm = '';
  }, DELAY_BETWEEN_KEYSTROKES_IN_MS);

  const firstMatchingResult = props.options.findIndex(matchResult);
  const matchingResults = props.options.filter(matchResult).length;

  if (firstMatchingResult === -1) {
    preselectSearchTerm = '';
    return;
  }

  scrollOptionIntoView(firstMatchingResult);
  preselectOption(firstMatchingResult);
  if (matchingResults === 1) {
    preselectSearchTerm = '';
  }
}

function handleKeydownEnter(event: KeyboardEvent): void {
  if (!props.preventActivation) {
    openMenu();
    event.preventDefault();
  }
  selectOption();
}

const menuRef = ref();
onClickOutside(menuRef, () => {
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
