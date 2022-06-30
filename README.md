# Fifteen Design System - Vue

This is the implementation of Fifteen’s design system in Vue3 + Composition API + Typescript.
It is based on `vue`, `@vueuse/core` and `vee-validate` which are made external.
It is also based on `vue3-popper` which is built and bundled in the lib.

## Installation

```
npm install @fifteen/design-system-vue
```

or

```
yarn add @fifteen/design-system-vue
```

## Usage

### Basics

You can use directly the design system components, composables, utils, constants and types exported by the lib, _e.g._:

```
import { FButton, FButtonProps, useFBreakpoints, colorDesignTokens, Color } from '@fifteen/design-system-vue';
```

You also need to add the lib CSS to your project.

```
import '@fifteen/design-system-vue/dist/style.css';
```

If you want to use the library with Fifteen’s style, you also need to import the built-in theme CSS:

```
import '@fifteen/design-system-vue/dist/theme.css';
```

Alternatively, if you want to customize the theme, you can look for all the CSS variables that are exposed in `@fifteen/design-system-vue/dist/theme.css` and declare yours.

### Auto imports with Vite

The lib ships two resolvers for auto-importing the components, and the composables and utils with Vite. They are based on [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import) and [unplugin-vue-components](https://www.npmjs.com/package/unplugin-vue-components), and can be used with the vite plugins exposed by these packages:

```ts
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import {
  FifteenAutoImportsResolver,
  FifteenComponentsResolver,
} from '@fifteen/design-system-vue/resolvers';

export default {
  plugins: [
    AutoImport({
      resolvers: [FifteenAutoImportsResolver()],
    }),
    Components({
      resolvers: [FifteenComponentsResolver()],
    }),
  ],
};
```

### Stylus helpers

The lib also ships Stylus helpers that can be very useful when authoring components. You must import `@fifteen/design-system-vue/styles/components.styl` in the component’s style tag when you need them.
An other systematic way is to enable them for all components using vite config:

```ts
// vite.config.ts
export default {
  css: {
    preprocessorOptions: {
      stylus: {
        imports: ['@fifteen/design-system-vue/styles/components.styl'],
      },
    },
  },
};
```

Available helpers are:
**Sizes:**

- `rem(value)` converts a value in pixel into rem (`value` can be unitless)

**Fonts:**

- `use-font(name)` applies font style from its name. `name` can be `bigger-(1|2|3|4) | heading-(1|2|3|4|5|6) | subtitle-(1|2) | body-(1|2) | button | caption | overline`
- `clamped-fluid-size(xmin, ymin, xmax, ymax)` returns a clamped size, interpolated between two breakpoints `xmin` and `xmax` (must be unitless pixel values or CSS vars).

**Colors:**

- `bg-color-transition()` applies a transition to the background color
- `bg-color(name)` applies a background color based on a color name
- `text-color-transition()` applies a transition to the text color
- `text-color(name)` applies a text color based on a color name (also sets child svg `path` fill property)
  Color `name` can be all the ones defined in lib’s `colorDesignTokens` array.

**Elevations:**

- `elevation-transition()` applies a transition to the elevation (box-shadow and background color)
- `elevation(value)` applies an elevation where `value` can be `1` to `6`.
- `elevation-light(value)` applies a light elevation where `value` can be `1` to `6`.

**Media queries:**

- `media-down(breakpoint)`
- `media-up(breakpoint)`
- `media-between(breakpoint)`
  which takes a breakpoint name as argument: `'xxs' | 'xs' | 'sm' | 'md' | 'lg'`.
  These mixins must be called with `+` prefix, _e.g._:

```
+media-down('xs')
  // style for screens smaller than xs
```

**Others:**

- `scrollbars(thumbColor, trackColor)` to add custom scrollbar style
- `merge-transition` and `merge-will-change` to apply several transitions on the same element

### Validation rules

The lib exposes some validation rules under `@fifteen/design-system-vue/rules` folder, which are mainly picked from the `@vee-validate/rules` library. In addition, some validation rules are included:

- `phone`: validates a phone number
- `mask`: validates a string regarding to a mask passed as parameter

## Development

### Setup

If you want to develop the library, you can clone the repository and install the dependencies using yarn:

```
yarn install
```

Install also the husky hooks by running:

```
yarn husky
```

Then you run `yarn sb` (or `yarn dev` which is an alias) and Storybook will launch with the components stories on port 3003.

### Authoring

After having created a new component or modifying an existing one, must create or update the corresponding story.

### Release

To create a new release as an `npm` package, you just need to increment the version in `package.json` and run `yarn release`.
