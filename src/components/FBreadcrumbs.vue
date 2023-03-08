<template lang="pug">
.FBreadcrumbs(:style="style")
  span.FBreadcrumbs__item(
    v-for="(item, index) in props.items"
    :key="index"
    :data-separator="separator"
  )
    FLink(
      v-if="item.href"
      :location="item.href"
      :hover-color="activeItemColor"
      hide-arrow
      uppercase
    ) {{ item.text }}
    span(v-else) {{ item.text }}
</template>

<style lang="stylus">
.FBreadcrumbs__item
  text-transform uppercase
  color var(--fbreadcrumbs--color)

  span,
  a
    font-weight 700

  &::after
    content attr(data-separator)
    padding 0 1ch

.FBreadcrumbs__item:last-child
  .FLink__content,
  span
    color var(--fbreadcrumbs--active-item-color)

  &::after
    content ''
    padding 0
</style>

<script setup lang="ts">
import { computed } from 'vue';

import FLink from '@/components/FLink.vue';
import { getCssColor } from '@/utils/getCssColor';

import type { FLinkProps } from '@/components/FLink.vue';

export interface FBreadcrumbLink extends FLinkProps {
  text: string;
}

export interface FBreadcrumbsProps {
  /**
   * List of breadcrumb items
   */
  items: FBreadcrumbLink[];
  /**
   * Text color of breadcrumb items
   */
  color?: Color;
  /**
   * Text color of the last breadcrumb item
   */
  activeItemColor?: Color;
  /**
   * Separator between breadcrumbs
   */
  separator?: '>' | '-';
}

const props = withDefaults(defineProps<FBreadcrumbsProps>(), {
  color: '',
  itemsColor: 'secondary',
  activeItemColor: 'primary',
  separator: '>',
});

const style = computed(
  (): Style => ({
    '--fbreadcrumbs--color': getCssColor(props.color),
    '--fbreadcrumbs--active-item-color': getCssColor(props.activeItemColor),
  })
);
</script>
