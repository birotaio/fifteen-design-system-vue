<template lang="pug">
FPopup.FDebugMenu(
  ref="popupRef"
  v-model="isOpen"
  :style="style"
  :class="classes"
  :offset-distance="8"
  prevent-activation
)
  template(#activator)
    FButton.FDebugMenu__activator(
      icon
      static
      :color="color"
      :text-color="textColor"
      @click="toggle"
    )
      FIcon(name="printedCircuitBoard")

  FCard.FDebugMenu__content(
    ref="contentRef"
    :color="color"
    :text-color="textColor"
  )
    .FDebugMenu__header
      h5 {{ name }}
      .FDebugMenu__header__controls
        FButton(
          icon
          ghost
          :background="textColor"
          :color="textColor"
          @click="isFullscreen = !isFullscreen"
        )
          FIcon.FDebugMenu__header__icon(
            :class="isFullscreen ? 'FDebugMenu__header__icon--reduce' : 'FDebugMenu__header__icon--expand'"
            name="arrowExpand"
          )
        FButton(
          icon
          ghost
          :background="textColor"
          :color="textColor"
          @click="isOpen = false"
        )
          FIcon(name="close")
    transition(name="FDebugMenu__message--transition")
      .FDebugMenu__message(
        v-if="message"
        :class="{ 'FDebugMenu__message--error': hasError }"
      )
        span {{ message }}
        FButton(
          icon
          ghost
          :background="textColor"
          :color="textColor"
          size="tiny"
          @click="message = null"
        )
          FIcon(name="close")
    FExpandable(
      v-for="(group, groupIndex) in config"
      :key="group.title"
      :model-value="group.expanded"
      :icon-scale="0.5"
      :title-vertical-padding="8"
      :gap="8"
      :text-hover-color="controlColor"
    )
      template(#title)
        h6 {{ group.title }}
      // We disable a11y keyboard interactivity on menu item since the underlying button and checkbox can be properly focused
      // eslint-disable-next-line vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/no-static-element-interactions
      .FDebugMenu__item(
        v-for="(item, itemIndex) in group.items"
        :key="`${groupIndex}-${itemIndex}`"
        :class="getItemClasses(item)"
        @click="clickItemHandler(item)"
      )
        .FDebugMenu__item__text
          .FDebugMenu__item__title {{ item.title }}
          .FDebugMenu__item__description {{ item.description }}
        template(v-if="item.type === 'trigger'")
          FButton(
            :key="`${groupIndex}-${itemIndex}`"
            :disabled="item.disabled"
            size="tiny"
            :color="controlColor"
            :hover-color="`${controlColor}--light-1`"
            :loading="itemLoadingKey === `${groupIndex}-${itemIndex}`"
            @click="callAction(item, `${groupIndex}-${itemIndex}`)"
          ) {{ item.triggerText }}
        template(v-if="item.type === 'toggle'")
          FCheckbox(
            :key="`${groupIndex}-${itemIndex}`"
            :model-value="item.ref.value"
            :disabled="item.disabled"
            size="tiny"
            :hover-border-color="`${controlColor}--light-1`"
            :checked-border-color="`${controlColor}--light-1`"
            :checked-color="controlColor"
            @update:model-value="updateToggleRef($event, item, `${groupIndex}-${itemIndex}`)"
            @click.stop
          )
        template(v-if="item.type === 'content'")
          code {{ item.content }}
</template>

<style lang="stylus">
scroll-theme()
  scrollbar(var(--FDebugMenu--controlColor), 'rgba(%s, 0.5)' % var(--FDebugMenu--controlColor--rgb))

.FDebugMenu
  position fixed
  z-index 1000001

  &--transition
    transition left 0.2s ease-out, top 0.2s ease-out

  &--full
    .popper
      position fixed
      transform none !important
      inset 0 0 0 0 !important

    .FPopup__content
      margin rem(8)
      position absolute
      transform none
      inset 0 0 0 0

    .FDebugMenu__content
      position relative
      height 100%

  .FPopup__content
    border-radius rem(16)
    overflow hidden

.FDebugMenu__activator
  transition box-shadow 0.5s ease

  &:hover
    box-shadow rgba(0, 0, 0, 0.2) 0 rem(6) rem(24)

.FDebugMenu__content
  font-size rem(13)
  padding rem(8) rem(16)
  box-shadow rgba(0, 0, 0, 0.2) 0 rem(6) rem(24)
  min-width rem(360)
  max-width var(--FDebugMenu--maxWidth)
  max-height var(--FDebugMenu--maxHeight)
  overflow auto
  cursor default
  position relative
  scroll-theme()

  .FExpandable__content
    position static

  .FExpandable__title
    color var(--FDebugMenu--groupColor)

.FDebugMenu__message
  z-index 1
  position absolute
  top 0
  left 0
  right 0
  margin rem(8)
  padding rem(8) rem(6) rem(8) rem(8)
  border-radius rem(8)
  background-color var(--color--success--dark-1)
  display flex
  align-items center
  justify-content space-between

  &--error
    background-color var(--color--danger--dark-1)

  &--transition
    &-enter-active,
    &-leave-active
      transition transform 200ms, opacity 200ms

    &-enter-to,
    &-leave-from
      opacity 1
      transform translateY(0)

    &-enter-from,
    &-leave-to
      opacity 0
      transform translateY(rem(-16))

.FDebugMenu__header
  margin-right rem(-10)
  display flex
  align-items center
  justify-content space-between

  &__icon
    transition transform 0.5s ease

  &__icon--expand
    transform rotate(45deg)

  &__icon--reduce
    transform rotate(0)

.FDebugMenu__item
  display flex
  align-items center
  justify-content space-between
  gap rem(8)
  padding rem(8) rem(8) rem(8) rem(8)
  border-radius rem(8)
  transition background-color 0.3s ease

  &--block
    display block

  &--disabled
    opacity 0.5

    .FButton--disabled
      background-color rgba(255, 255, 255, 0.15)

    .FCheckbox--disabled .FCheckbox__checkbox
      &,
      &:hover
        outline none
        background-color rgba(255, 255, 255, 0.15)
        border 2px solid rgba(255, 255, 255, 0.2)

  &:not(.FDebugMenu__item--disabled)
    &:hover
      background-color rgba(255, 255, 255, 0.05)

    &.FDebugMenu__item--clickable
      cursor pointer

  code
    --code--background-color rgba(0, 0, 0, 0.3)
    margin-top rem(8)
    padding rem(4) rem(8)
    font-size rem(12)
    overflow auto
    width 100%
    scroll-theme()

    &::selection
      background-color 'rgba(%s, 0.4)' % var(--FDebugMenu--controlColor--rgb)

  &__text
    margin-right rem(8)
    display flex
    flex-direction column
    overflow hidden
    flex 1 1 auto
    gap rem(2)

  &__description
    font-size rem(12)
    opacity 0.73
    width 100%
    white-space nowrap
    overflow hidden
    text-overflow ellipsis

  .FCheckbox
    margin 0

  .FCheckbox__labelText
    margin 0
</style>

<script setup lang="ts">
import { useVModelProxy } from '@fifteen/shared-lib';

import { FCard, FPopup, genSize } from '@/index';
import { arrowExpand, printedCircuitBoard, close } from '@/.generated/icons';

import type { Ref, MaybeRef, WritableComputedRef } from 'vue';
import type { BaseColorDesignToken, Color } from '@/index';

export type DebugMenuItemType = 'trigger' | 'toggle' | 'content';

interface DebugMenuItemBase {
  /**
   * Title of the menu item.
   */
  title: string;
  /**
   * Optional description of the menu item.
   */
  description?: string;
  /**
   * Whether the menu item is disabled.
   */
  disabled?: boolean;
}

export type DebugMenuItem<T extends DebugMenuItemType = DebugMenuItemType> =
  DebugMenuItemBase &
    (T extends 'trigger'
      ? {
          /**
           * Type of the menu item.
           */
          type: 'trigger';
          /**
           * Text to display on the action button.
           */
          triggerText: string;
          /**
           * Action to be executed when the menu item is clicked.
           * Returns a message to display on success,
           * and throws an error to display an error message on failure.
           */
          action: () =>
            | Promise<string | undefined | void>
            | string
            | undefined
            | void;
        }
      : T extends 'toggle'
      ? {
          /**
           * Type of the menu item.
           */
          type: 'toggle';
          /**
           * Reference to the boolean value to toggle.
           */
          ref: Ref<boolean> | WritableComputedRef<boolean>;
        }
      : T extends 'content'
      ? {
          /**
           * Type of the menu item.
           */
          type: 'content';
          /**
           * Any content to display. Will be stringified by Vue template rendering.
           */
          content: MaybeRef<unknown>;
          /**
           * Whether the menu item is disabled.
           */
          disabled?: false;
        }
      : never);

export interface DebugMenuGroup {
  /**
   * Title of the debug group.
   */
  title: string;
  /**
   * Whether the group is initially expanded.
   */
  expanded?: boolean;
  /**
   * Debug items of the debug group.
   */
  items: DebugMenuItem[];
}

export type DebugMenuConfig = DebugMenuGroup[];

export interface FDebugMenuProps {
  /**
   * Controls the menu open state.
   * @model
   */
  modelValue?: boolean;
  /**
   * Debug menu configuration.
   */
  config?: DebugMenuConfig;
  /**
   * Color of the debug menu.
   */
  color?: Color;
  /**
   * Color of the text.
   */
  textColor?: Color;
  /**
   * Color of the control elements.
   */
  controlColor?: BaseColorDesignToken;
  /**
   * Max width of the debug menu.
   */
  maxWidth?: number | string;
  /**
   * Snap mode ('free' is almost free, we avoid overflowing the edges)
   */
  snapMode?: 'free' | 'edges' | 'corners';
  /**
   * Override default 'Debug menu' name.
   */
  name?: string;
}

const props = withDefaults(defineProps<FDebugMenuProps>(), {
  modelValue: false,
  config: () => [],
  color: 'secondary',
  textColor: 'neutral--light-4',
  controlColor: 'primary',
  maxWidth: 460,
  snapMode: 'edges',
  name: 'Debug menu',
});

registerIcons('icons', {
  arrowExpand,
  printedCircuitBoard,
  close,
});

const popupRef = ref<InstanceType<typeof FPopup> | null>(null);
const elementRef = computed(() => popupRef.value?.$el);
const isMoved = ref(false);
const isTransitioning = ref(false);
const isFullscreen = ref(false);
const itemLoadingKey = ref<string | null>(null);

const isOpen = useVModelProxy({ props });

// Whenever re-opening the menu, make sure it's not in fullscreen mode
watch(isOpen, value => value && (isFullscreen.value = false));

// Whenever content height changes, trigger a resize event so that popper repositions
const contentRef = ref<InstanceType<typeof FCard> | null>(null);
const { height: contentHeight } = useElementSize(contentRef);
watch(contentHeight, () => window.dispatchEvent(new Event('resize')));

const offset = 8;

interface DebugMenuStore {
  position: { x: number; y: number };
  values: Record<string, unknown>;
}

const debugMenuStore = useLocalStorage<DebugMenuStore>('debug-menu', {
  position: { x: offset, y: offset },
  values: {},
});

function restoreDebugValues(): void {
  for (const [key, value] of Object.entries(
    debugMenuStore.value?.values ?? {}
  )) {
    props.config.forEach((group, groupIndex) => {
      group.items.forEach((item, itemIndex) => {
        if (item.type === 'toggle' && key === `${groupIndex}-${itemIndex}`) {
          updateToggleRef(value as boolean, item, key);
        }
      });
    });
  }
}

restoreDebugValues();

const { width, height } = useElementSize(elementRef);
const { x, y } = useDraggable(elementRef, {
  initialValue: {
    x: debugMenuStore.value.position.x,
    y: debugMenuStore.value.position.y,
  },
  onStart: (_, event) => {
    if ((event.target as HTMLElement)?.closest('.FDebugMenu__content')) {
      return false;
    }
  },
  onMove: () => {
    isOpen.value = false;
    isMoved.value = true;
  },
  onEnd: () => snap(true),
});

function snapFree(coordinate: number, containerSize: number): number {
  if (coordinate < offset) return offset;
  else if (containerSize - offset < coordinate) return containerSize - offset;
  return coordinate;
}

function snapCorners(coordinate: number, containerSize: number): number {
  if (coordinate < containerSize / 2) return offset;
  return containerSize - offset;
}

function snap(withTransition?: boolean): void {
  if (withTransition) {
    isTransitioning.value = true;
    setTimeout(() => (isTransitioning.value = false), 200);
  }
  switch (props.snapMode) {
    case 'edges':
      /**
       * To compute if the point should be snapped to the edge, consider two
       * diagonals from the window corners, defining four quadrants. Then we
       * whange the frame of reference to the center of the window, we normalize
       * the coordinates to be restricted between 0 and 1 and we compute
       * the angle of the point in polar coordinates. This easily allows us
       * to determine the quadrant the point is in, based on the angle value.
       */
      const pi = Math.PI;
      const X = x.value / window.innerWidth - 0.5;
      const Y = 0.5 - y.value / window.innerHeight;
      const angle = Math.atan2(Y, X);
      if (-pi / 4 < angle && angle < pi / 4) {
        x.value = window.innerWidth - width.value - offset;
      } else if (pi / 4 < angle && angle < (3 * pi) / 4) {
        y.value = offset;
      } else if (-pi / 4 > angle && angle > (-3 * pi) / 4) {
        y.value = window.innerHeight - height.value - offset;
      } else {
        x.value = offset;
      }
      // Also avoid overflowing the edges
      x.value = snapFree(x.value, window.innerWidth - width.value);
      y.value = snapFree(y.value, window.innerHeight - height.value);
      break;
    case 'free':
      x.value = snapFree(x.value, window.innerWidth - width.value);
      y.value = snapFree(y.value, window.innerHeight - height.value);
      break;
    case 'corners':
      x.value = snapCorners(x.value, window.innerWidth - width.value);
      y.value = snapCorners(y.value, window.innerHeight - height.value);
      break;
  }
}

addEventListener(
  'resize',
  useDebounceFn(() => snap(true), 300)
);
watchOnce([width, height], () => snap(false));
watch([x, y], () => {
  debugMenuStore.value.position = { x: x.value, y: y.value };
});

const maxHeight = computed(
  () =>
    Math.max(y.value, window.innerHeight - height.value - y.value) - offset * 2
);

function toggle(): void {
  if (isMoved.value) {
    isMoved.value = false;
    return;
  }
  isOpen.value = !isOpen.value;
}

function getItemClasses(
  item: DebugMenuItem
): Record<string, boolean | undefined> {
  return {
    'FDebugMenu__item--disabled': item.disabled,
    'FDebugMenu__item--clickable': item.type === 'toggle',
    'FDebugMenu__item--block': item.type === 'content',
  };
}

function clickItemHandler(item: DebugMenuItem): void {
  if (item.disabled) return;
  if (item.type === 'toggle') {
    item.ref.value = !item.ref.value;
  }
}

function updateToggleRef(
  value: boolean | null,
  item: DebugMenuItem<'toggle'>,
  key: string
): void {
  item.ref.value = value ?? false;
  debugMenuStore.value.values[key] = item.ref.value;
}

const message = ref<string | null>(null);
const hasError = ref(false);
const messageTimeout = ref<NodeJS.Timeout | null>(null);
watch(message, () => {
  if (messageTimeout.value) {
    clearTimeout(messageTimeout.value);
  }
  if (message.value) {
    messageTimeout.value = setTimeout(() => (message.value = null), 5000);
  }
});

async function callAction(item: DebugMenuItem, key: string): Promise<void> {
  if (item.disabled || item.type !== 'trigger') return;
  try {
    itemLoadingKey.value = key;
    const actionMessage = await item.action();
    hasError.value = false;
    message.value = actionMessage ?? null;
  } catch (error) {
    hasError.value = true;
    message.value = (error as Error).message;
  } finally {
    itemLoadingKey.value = null;
  }
}

const classes = computed(() => ({
  'FDebugMenu--transition': isTransitioning.value,
  'FDebugMenu--full': isFullscreen.value,
}));

const style = computed(() => ({
  left: `${x.value}px`,
  top: `${y.value}px`,
  '--FDebugMenu--groupColor': `var(--color--${props.controlColor}--light-2)`,
  '--FDebugMenu--controlColor': `var(--color--${props.controlColor})`,
  '--FDebugMenu--controlColor--rgb': `var(--color--${props.controlColor}--rgb)`,
  '--FDebugMenu--maxWidth': isFullscreen.value
    ? 'none'
    : genSize(props.maxWidth),
  '--FDebugMenu--maxHeight': isFullscreen.value
    ? 'none'
    : genSize(maxHeight.value),
}));
</script>
