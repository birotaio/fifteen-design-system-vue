<template lang="pug">
.FMenu(
  :style="style"
  ref="menuRef"
  :class="menuClasses"
  @keydown="handlePreselectSearch"
)
  Popper(
    :show="isOpen"
    placement="bottom-start"
  )
    .FMenu__activator(
      @keydown.down="keyboardPreselectNextOption"
      @keydown.enter="selectOption()"
      @keydown.up="keyboardPreselectPrevOption"
    )
      slot(
        name="activator"
        v-bind="{ toggleMenu, openMenu, closeMenu }"
      )
    template(#content)
      .FMenu__optionsMenu(
        v-if="options.length"
        ref="menuOptionsRef"
      )
        .FMenu__option(
          role="option"
          v-for="(option, index) in options"
          :key="option.value"
          :class="selectOptionClasses(index)"
          ref="optionRefs"
          @click="selectOption(option)"
          @mouseenter="mousePreselectOption(index)"
          @mousemove="isKeyboardInteracting = false"
        )
          slot(
            name="option-prefix"
            v-bind="{ option, index, isSelected: isSelected(index) }"
          )
          slot(
            name="option"
            v-bind="{ option, index, isSelected: isSelected(index) }"
          )
            span {{ option.label }}
      .FMenu__noOption(v-if="options.length === 0")
        span {{ emptyText }}
</template>

<style lang="stylus">
.FMenu
  --popper-theme-border-radius rem(16)

  .popper
    left 0
    min-width var(--fmenu--width)

  .inline-block
    display block !important
    position relative
    border none !important
    margin 0 !important
    width 100%

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
  align-items center
  border-radius rem(16)
  min-height rem(24)
  padding rem(12) rem(8)
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

.FMenu__noOption
  display flex
  justify-content center
  background var(--fmenu--color)
  border-radius rem(16)
  elevation(2)
  color var(--fmenu--text-color)
  padding rem(8)

.FMenu--disabled
  pointer-events none
  opacity 0.7
</style>

<script setup lang="ts">
import Popper from 'vue3-popper/dist/popper.esm';
import { computed, ref, watch } from 'vue';
import { onClickOutside, useElementBounding } from '@vueuse/core';
import { getCssColor } from '@/utils/getCssColor';
import { useVModelProxy } from '@/composables/useVModelProxy';
import { genSize } from '@/utils/genSize';
import { removeDiacritics } from '@/utils/text';

export interface FMenuOption {
  label: string;
  value: string | number;
}

export interface FMenuProps {
  /**
   * Selected value of the menu
   */
  modelValue?: string | number | null;
  /**
   * Array of options
   */
  options: FMenuOption[];
  /**
   * Prevent item selection
   */
  preventSelection?: boolean;
  /**
   * Text to display when no option is provided
   */
  emptyText?: string;
  /**
   * Width of the menu
   */
  width?: string | number;
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
}

const props = withDefaults(defineProps<FMenuProps>(), {
  modelValue: null,
  preventSelection: false,
  emptyText: '',
  options: () => [],
  width: 300,
  color: 'primary',
  textColor: 'neutral--light-5',
  selectedOptionColor: 'primary--light-2',
  selectedOptionTextColor: 'primary--dark-2',
});

const style = computed(
  (): Style => ({
    '--fmenu--width': genSize(props.width),
    '--fmenu--color': getCssColor(props.color),
    '--fmenu--text-color': getCssColor(props.textColor),
    '--fmenu--selected-option-color': getCssColor(props.selectedOptionColor),
    '--fmenu--selected-option-text-color': getCssColor(
      props.selectedOptionTextColor
    ),
  })
);

const selectedOption = useVModelProxy<string | number | boolean>(props);

const optionRefs = ref<Element[]>([]);

const emit = defineEmits<{
  (name: 'update:modelValue', value: string | number | null): void;
  (name: 'select-option', value: string | number | null): void;
  (name: 'toggle', value: boolean): void;
}>();

const menuClasses = computed(() => ({
  'FMenu--disabled': props.disabled,
}));

const isOpen = ref(false);
const isKeyboardInteracting = ref(false);
const preselectedOptionIndex = ref(-1);

/**
 * Toggle the menu
 */
function toggleMenu() {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
}

/**
 * Open the menu
 */
function openMenu() {
  if (props.disabled) return;
  isOpen.value = true;
}

/**
 * Close the menu
 */
function closeMenu() {
  if (props.disabled) return;
  isOpen.value = false;
}

watch(isOpen, newValue => {
  emit('toggle', newValue);

  if (!newValue) {
    preselectOption(-1);
  }
});

/**
 * Preselect an option
 * @param index - Index of option to preselect
 */
function preselectOption(index: number) {
  preselectedOptionIndex.value = index;
}

const menuOptionsRef = ref();
const { top: menuOptionsTop, bottom: menuOptionsBottom } =
  useElementBounding(menuOptionsRef);

/**
 * Returns the selection status of an option based on index
 * @param index - Index of the option
 */
function isSelected(index: number): boolean {
  return (
    props.options.findIndex(option => option.value === selectedOption.value) ===
    index
  );
}

/**
 * Classes to apply to select option
 * @param index - Index of the option
 */
function selectOptionClasses(index: number) {
  return {
    'FMenu__option--preselected': preselectedOptionIndex.value === index,
    'FMenu__option--selected': isSelected(index),
  };
}

/**
 * Preselect an option from a mouse interaction
 * @param index - Index of the option
 */
function mousePreselectOption(index: number) {
  if (isKeyboardInteracting.value) return;
  preselectOption(index);
}

/**
 * Preselect the previous option or the last if the first is selected
 */
function keyboardPreselectPrevOption(): void {
  if (!isOpen.value) return;

  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value - 1 < 0
      ? props.options.length - 1
      : preselectedOptionIndex.value - 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

/**
 * Preselect the next option or the first if the last is already selected
 */
function keyboardPreselectNextOption(): void {
  if (!isOpen.value) return;

  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value + 1 > props.options.length - 1
      ? 0
      : preselectedOptionIndex.value + 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

/**
 * Scroll to the selected option
 * @param index - Index of the option to scroll into view
 */
function scrollOptionIntoView(index: number) {
  const el = optionRefs?.value[index];
  const { top, bottom, height } = el.getBoundingClientRect();
  const isVisible =
    top >= menuOptionsTop.value && bottom <= menuOptionsBottom.value;
  if (!isVisible) {
    menuOptionsRef.value.scrollTo(
      0,
      menuOptionsRef.value.scrollTop -
        (preselectedOptionIndex.value - index) * (height + 4)
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
      const selectedOptionIndex = props.options.findIndex(
        option => option.value === selectedOption.value
      );
      preselectOption(selectedOptionIndex);
      scrollOptionIntoView(selectedOptionIndex);
    }
    return;
  }

  const preselectedOption =
    option ?? props.options[preselectedOptionIndex.value];

  emit('select-option', preselectedOption.value);
  if (props.preventSelection) return;

  selectedOption.value = preselectedOption.value;
  closeMenu();
}

let preselectSearchTerm = '';
let timeout: NodeJS.Timeout;
const DELAY_BETWEEN_KEYSTROKES_IN_MS = 600;

/**
 * Preselect an option based on input keys (search)
 * @param event - Keyboard event
 */
function handlePreselectSearch(event: KeyboardEvent) {
  event.stopPropagation();
  if (!isOpen.value) return;

  isKeyboardInteracting.value = true;

  preselectSearchTerm = removeDiacritics(
    preselectSearchTerm + event.key
  ).toLocaleLowerCase();

  function matchResult(option: FMenuOption) {
    const optionLabel = removeDiacritics(option.label.toLowerCase());
    const optionValue = removeDiacritics(('' + option.value).toLowerCase());

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

const menuRef = ref();
onClickOutside(menuRef, () => {
  isOpen.value = false;
});
</script>
