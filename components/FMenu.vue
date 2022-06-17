<template lang="pug">
.FMenu(
  :style="style"
  @keydown="handlePreselectSearch"
)
  Popper(
    :show="isOpen"
    placement="bottom-start"
  )
    .FMenu__activator(
      @keydown.enter="handleEnter"
      @keydown.up.prevent="keyboardPreselectPrevOption"
      @keydown.down.prevent="keyboardPreselectNextOption"
    )
      slot(
        name="activator"
        v-bind="{ toggleMenu }"
      )
    template(#content)
      .FMenu__optionsMenu(
        v-if="options.length"
        ref="menuOptionsRef"
      )
        .FMenu__option(
          role="option"
          @click="selectOption(option)"
          @mouseenter="mousePreselectOption(index)"
          @mousemove="isKeyboardInteracting = false"
          v-for="(option, index) in options"
          :key="option.value"
          :class="selectOptionClasses(index)"
          ref="optionRefs"
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
</style>

<script setup lang="ts">
import Popper from 'vue3-popper/dist/popper.esm';
import { computed, ref } from 'vue';
import { useElementBounding } from '@vueuse/core';
import { getCssColor } from '@/utils/getCssColor';
import { useVModelProxy } from '@/composables/useVModelProxy';
import { genSize } from '@/utils/genSize';

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
   * If the menu is opened or not
   */
  isOpen?: boolean;
  /**
   * Array of options
   */
  options: FMenuOption[];
  /**
   * Disable item selection
   */
  disableSelection?: boolean;
  /**
   * Text to display when no option is provided
   */
  emptyText?: string;
  /**
   * Width of the select
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
}

const props = withDefaults(defineProps<FMenuProps>(), {
  modelValue: null,
  disableSelection: false,
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
  (name: 'update:isOpen', value: boolean): void;
  (name: 'select-option', value: string | number | null): void;
}>();

const isOpen = useVModelProxy(props, 'isOpen', emit);
const isKeyboardInteracting = ref(false);
const preselectedOptionIndex = ref(0);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

/**
 * Preselect an option
 * @param index - Index of option to preselect
 */
function preselectOption(index: number) {
  preselectedOptionIndex.value = index;
}

/**
 * Automatically scroll options menu when having used the keyboard to preselect a non visible option
 */
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
 * Select an option as select value
 * @param option - Option to select
 */
function selectOption(option: FMenuOption | null): void {
  emit('select-option', option?.value ?? null);

  if (!props.disableSelection) {
    selectedOption.value = option?.value ?? null;
  }
  isOpen.value = false;
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
 */
function mousePreselectOption(index: number) {
  if (isKeyboardInteracting.value) return;
  preselectOption(index);
}

/**
 * Preselect the previous option. If the first is already selected, select the last
 */
function keyboardPreselectPrevOption(): void {
  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value - 1 < 0
      ? props.options.length - 1
      : preselectedOptionIndex.value - 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

/**
 * Preselect the next option. If the last is already selected, select the first
 */
function keyboardPreselectNextOption(): void {
  isKeyboardInteracting.value = true;
  const preselectedIndex =
    preselectedOptionIndex.value + 1 > props.options.length - 1
      ? 0
      : preselectedOptionIndex.value + 1;
  scrollOptionIntoView(preselectedIndex);
  preselectOption(preselectedIndex);
}

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
 * Handle enter key down
 */
function handleEnter(event: KeyboardEvent): void {
  const preselectedOption = props.options[preselectedOptionIndex.value];
  emit('select-option', preselectedOption.value);

  if (isOpen.value && !props.disableSelection) {
    selectedOption.value = preselectedOption.value;
  }
  toggleMenu();
}

const preselectSearchTerm = ref('');
const timeout = ref<NodeJS.Timeout>();
const DELAY_BETWEEN_KEYSTROKES_IN_MS = 600;

/**
 * Preselect an option based on input keys (search)
 * @param event - Keyboard event
 */
function handlePreselectSearch(event: KeyboardEvent) {
  isKeyboardInteracting.value = true;

  event.stopPropagation();
  preselectSearchTerm.value = preselectSearchTerm.value + event.key;

  function matchResult(option: FMenuOption) {
    const optionLabel = option.label.toLowerCase();
    const optionValue = ('' + option.value).toLowerCase();

    return (
      optionLabel.startsWith(preselectSearchTerm.value) ||
      optionValue.startsWith(preselectSearchTerm.value)
    );
  }

  timeout.value = setTimeout(() => {
    clearTimeout(timeout.value);
    preselectSearchTerm.value = '';
  }, DELAY_BETWEEN_KEYSTROKES_IN_MS);

  const firstMatchingResult = props.options.findIndex(matchResult);
  const matchingResults = props.options.filter(matchResult).length;

  if (firstMatchingResult === -1) {
    preselectSearchTerm.value = '';
    return;
  }

  scrollOptionIntoView(firstMatchingResult);
  preselectOption(firstMatchingResult);
  if (matchingResults === 1) {
    preselectSearchTerm.value = '';
  }
}
</script>
