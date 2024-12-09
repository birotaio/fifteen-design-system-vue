## 0.25.2 (December 9, 2024)

### Changes

- [Chore] Use properly published private npm package for vue3-popper fork
- [Chore] Allow dependabot to fetch private npm packages
- [Chore] Upgrade dependencies (dependabot)

## 0.25.1 (October 3, 2024)

### Fixes

- [Chore] Remove missed `console.log`

## 0.25.0 (September 24, 2024)

### Changes

- [Chore] Upgrade dependencies to fix security vulnerabilities
- [Chore] Upgrade Vue to version 3.5, use `useId` [BREAKING]
- [Storybook] Migrate from version 7 to version 8

## 0.24.1 (June 20, 2024)

### Fixes

- [useSmartLink] Prevent issues in contexts with no Vue Router context
- [FTextContent] Add missing default allowed tags ([SVC-13387](https://zoov-eu.atlassian.net/browse/SVC-13387))

## 0.24.0 (April 4, 2024)

### Features

- [FDebugMenu] Add `input` type for menu items
- [FDebugMenu] Add `select` type for menu items

### Changes

- [FDebugMenu] Explicitly store data in local storage if a key is set in config
- [Storybook] Bump Node version to 18.17.1 for Storybook build (github.io page)

## 0.23.3 (March 20, 2024)

### Fixes

- [Lib] Add `types` for all icon paths

## 0.23.2 (March 20, 2024)

### Fixes

- [Lib] Add `types` for all export paths

## 0.23.1 (February 13, 2024)

### Fixes

- [FDebugMenu] Fix property name for trigger text

## 0.23.0 (February 13, 2024)

### Features

- [UI] Add /ui subpath and build config to expose a UI kit
- [FDebugMenu] Add `FDebugMenu` component to UI kit
- [FPopup] Add `FPopup` component

### Changes

- [Core] All components are now responsible for registering the icons they rely on

### Fixes

- [FToggle/FCheckbox] Generate unique id to ensure they work correctly if no name is given
- [Stories] Make sure spread args are kept reactive in stories

## 0.22.4 (January 17, 2024)

### Fixes

- [FAutocomplete] Prevent `input` event emit when emitted by maska

## 0.22.3 (November 29, 2023)

### Fixes

- [FSelect] Prevent retriggering validation when resetting to empty value

## 0.22.2 (November 29, 2023)

### Fixes

- [FSelect] Retrigger validation when value changes

## 0.22.1 (November 27, 2023)

### Fixes

- [FPhoneInput] Properly handle form reset logic
- [FPhoneInput] Bump `maska` to avoid sometimes buggy mask behavior
- [Typing] Upgrade tsconfig and ensure components link
- [FForm] Add story to document validation behavior
- [Icons] Warn about missing icon only if name is not null
- [FSelect] Remove sync watcher conflicting with form reset
- [FLocaleSelect] Properly send name to FSelect to ensure from reset

## 0.22.0 (November 10, 2023)

### Features

- [FCard] Add `hoverColor` and `hoverTextColor` props

## 0.21.2 (October 24, 2023)

### Fixes

- [Icons] Add padding to X icon

## 0.21.0 (October 23, 2023)

### Features

- [Icons] Add X icon

## 0.20.3 (September 25, 2023)

### Changes

- [Build] Expose dist with a wildcard (works for js files)

### Fixes

- [Utils] Simplify `luhnCheck` implementation

## 0.20.2 (September 20, 2023)

### Fixes

- [Build] Set `vue-router` as an external dependency
- [Composables] Avoid instance context being lost in useFBreakpoints composable, causing warnings whenever used

## 0.20.1 (September 19, 2023)

### Fixes

- [Storybook] Fix wrong import causing build fail
- [TypeScript] Fix wrong resolution of global types in exported props interfaces

## 0.20.0 (September 4, 2023)

### Changes

- [Build] Enable code tree-shaking
- [Build] Dramatically improve and simplify build steps
- !BREAKING! [Core] Rework icons registration, enabling tree-shaking

## 0.19.2 (August 31, 2023)

### Changes

- [getCardInfo] Export `getCardInfo` helper, add tests

## 0.19.1 (July 31, 2023)

### Fixes

- [FPhoneInput] Fix validation rules

## 0.19.0 (July 31, 2023)

### Fixes

- [FInput] Fix disabled input style on focus

### Changes

- [DX] Add auto-imports for Vue, Vue-Router, components and composables
- [FFileUpload] Code cleanup

## 0.18.6 (July 13, 2023)

### Features

- [FForm] Make submit return form `errors` and `values`
- [FForm] Add `error` event to emits

## 0.18.5 (July 11, 2023)

### Fixes

- [FRadio] Add an UID to radio to make the label clickable
- [forms] Prevent some initial values to be ignored

## 0.18.4 (June 29, 2023)

### Fixes

- [FLogo] Fix font and alignment to ensure cross-browser consistency

## 0.18.3 (June 21, 2023)

### Changes

- [icons] Move `icons` from `assets` to root and include it in package `files`

## 0.18.2 (June 19, 2023)

### Fixes

- [FFileUpload] Fix a bug with the mime types rule
- [FFileUpload] Correctly display the uploaded file when `multiple` is false

## 0.18.1 (June 1, 2023)

### Fixes

- [FPhoneInput] Fix initial value and add `countryCode` prop

## 0.18.0 (May 9, 2023)

### Features

- [FToggle] Add FToggle component and stories

## 0.17.2 (May 4, 2023)

### Features

- Isolate components in dedicated stacking contexts to avoid overlapping at usage

## 0.17.1 (May 2, 2023)

### Fixes

- [FMenu] Remove select on space

## 0.17.0 (April 25, 2023)

### Features

- [FCheckbox] Add linkColor prop on FCheckbox
- [FCheckbox] Add label prop rendered as HTML
- [scripts] Add release scripts with @fifteen/tooling library

### 0.16.0 (April 6, 2023)

### Features

- [a11y] Add plugin `vuejs-accessibility` to improve accessibility on form components

### 0.15.3 (March 21, 2023)

### Changes

- [types] Expose `CountryCode` and `FlagCode` types
- [FFlagIcon] Deprecate `countryCode`, replaced by `flagCode`

### Fixes

- [FLocaleSelect] Forward `menuWidth` prop to FSelect

## 0.15.2 (March 17, 2023)

### Changes

- [icons] Add icon `phone`

## 0.15.1 (March 14, 2023)

### Changes

- [icons] Add icons `bike-sharing`, `bike-leasing`

## 0.15.0 (March 10, 2023)

### Features

- [FExpandable] Add titleVerticalPadding prop on FExpandable
- [FExpandable] Add hover behaviour (desktop only) on FExpandable
- [styles/utils] Add hover mixin `hover-desktop-only()` to add hover behaviour only on desktop

## 0.14.0 (March 8, 2023)

### Features

- [FLocaleSelect] Add locale select component
- [FSelect] Add size prop, handling `medium` and `small` values
- [FFlagIcon] Add asturian (`AST`) flag

### Fixes

- [FSelect] Prevent interactions when loading

## 0.13.2 (March 6, 2023)

### Features

- [useVModelProxy] Replaced useVModelProxy composable to useVModelProxy in shared-lib

## 0.13.1 (March 6, 2023)

### Features

- [FExpandable] Fix FExpandable with hover animation, zIndex incorrect for highlighter

## 0.13.0 (March 3, 2023)

### Features

- [FExpandable] Update FExpandable with hover animation

## 0.12.2 (February 14, 2023)

### Changes

- [Types] Update `Style` to be exactly Vue’s updated `CSSProperties` type

## 0.12.1 (February 8, 2023)

### Fixes

- [FTextContent] Export `FTextContentProps` and expose `FTextContent` in resolver
- [FTextContent] Remove style on `u` tags

## 0.12.0 (January 25, 2023)

### Features

- [icons] Add `microphone`, `pause`, `rfid-card` and `zoov-bike-elect` icons

## 0.11.2 (January 19, 2023)

### Fixes

- [Composables] Improve useFBreakpoint to be SSR-ready

## 0.11.1 (January 11, 2023)

### Fixes

- [Lib] Fix `rules` and `router` exports

## 0.11.0 (January 11, 2023)

### Features

- [Lib] Add `FRouterLink`, `FButtonLink` and `FTextContent` components from `@fifteen/shared-lib`

### Changes

- [Lib] Move text utilities to `@fifteen/shared-lib`
- Code reorganization

## 0.10.2 (January 2, 2023)

### Fixes

- [FAvatar] Avoid duplicate parenthesis being added by stylus-supremacy, causing incorrectly parsed CSS by Nuxt
- [FPhoneInput] Prevent menu activation on enter key

## 0.10.1 (December 30, 2022)

### Fixes

- [FPhoneInput] Avoid input click to open menu

## 0.10.0 (December 27, 2022)

### Features

- [FMenu] Add `zIndex`, `offsetSkid` and `offsetDistance` props to manage popup spatial positioning
- [FMenu] Use `fixed` position strategy, add `absolute` prop to override it
- [FMenu] Improve keyboard navigation (a11y)
- [FInput] Make clear icon focusable (a11y)
- [FLink] Allow tabindex override by props (a11y)

### Changed

- [Chore] Use a forked version of vue3-popper with exposed `strategy` prop

## 0.9.0 (December 26, 2022)

### Features

- [FImage] Expose a prop to define background color
- [FAvatar] Expose props to display initial letter and define background and text color

## 0.8.0 (December 14, 2022)

### Features

- [FLogo] Add "product" variant to create logos variations with sub-texts for our different products

## 0.7.8 (December 1, 2022)

### Fixes

- [Build] Fix postinstall command

## 0.7.7 (November 28, 2022)

### Fixes

- [FMenu] Watch mutation updates on menu content to trigger popper update
- [FAutocompleteInput] Fix clear of input
- [FTextarea] Fix icon and loader positions

## 0.7.6 (November 23, 2022)

### Fixes

- [FAutocompleteInput] Allow empty input to be a valid state
- [FPhoneInput] Prevent potential crash on parsing modelValue

## 0.7.5 (November 22, 2022)

### Changes

- [FAutocompleteInput] Add more fixes, improve component logic

### Fixes

- [FPhoneInput] Handle initial value

## 0.7.4 (November 21, 2022)

### Changes

- [Chore] Upgrade @vueuse/core to 9.5.0

### Fixes

- [FPhoneInput] Consider empty input value as a valid value
- [FPhoneInput] Allow field to be reset
- [CI] Makes Storybook static build working with Github pages

## 0.7.3 (November 15, 2022)

### Fixes

- [FPhoneInput] Stop propagation on click that toggles the menu

## 0.7.2 (November 14, 2022)

### Changes

- [Chore] Update Vue version

## 0.7.1 (November 14, 2022)

### Changes

- [FAutocompleteInput] Fixes and enhancements for component `FAutocompleteInput`

## 0.7.0 (November 3, 2022)

### Features

- [FAutocompleteInput] Add `FAutocompleteInput` component

### Changes

- [FInput] Update story to show `type="number"` in action
- [FInput] Improve `type="number` for iOS Safari (opens a numeric keyboard)
- [FDigitsInput] Display input type as number with numeric keyboard, while hiding browser spin box
- [forms] Rename functions `handleValidation` to `validate`, `handleResetValidation` to `resetValidation`
- [FImage] Change Fifteen logo to `landscape` icon

### Fixes

- [Style] Reset user-agent padding on inputs, causing invisible content for FDigitsInput on iOS Safari
- [FDigitsInput] Fix alignment of input content that was not properly centered
- [FInput] Allow all the input area to be clickable, as an input should be
- [Core] Expose `removeDiacritics` util
- [forms] Remove emits inside custom rules causing events to fire twice

## 0.6.1 (October 5, 2022)

### Fixes

- [FFileUpload] Export `FFileUpload`, `FFileUploadProps`

## 0.6.0 (October 3, 2022)

### Features

- [FFileUpload] Add `FFileUpload` component
- [icons] Add `upload` icon

## 0.5.1 (September 27, 2022)

### Fixes

- [FLink] Change internal div tags to span to avoid issue when link is used in p

## 0.5.0 (September 15, 2022)

### Features

- [utils] Allow getCssColor to return css custom property name only

## 0.4.0 (Septemeber 12, 2022)

### Features

- [icons] Add `youtube` icon

## 0.3.2 (August 24, 2022)

### Fixes

- [forms] Add missing props to some input components

## 0.3.1 (August 12, 2022)

### Features

- [FCreditCardInput] Handle all Stripe credit cards, improve field validation

## 0.3.0 (August 11, 2022)

### Features

- [forms] Expose `focus` function for each form field
- [FLoader] Add loader component
- [FCreditCardInput] Add loading prop
- [FDigitsInput] Add loading prop
- [FInput] Add loading prop
- [FPhoneInput] Add loading prop
- [FSelect] Add loading prop
- [FTextarea] Add loading prop
- [FMenu] Add disabled prop

### Fixes

- [FMenu] Remove selection behavior on menu open when option is preselected

### Changes

- [FMenu] Add openMenu and closeMenu to slot scope
- [FMenu] Replace `is-open` v-model by a `toggle` event

## 0.2.10 (August 4, 2022)

### Features

- [FButton] Prevent button from being selected when loading
- [FLink] Make FLink a `span` tag if no `href` was provided

### Changes

- [FForm] Expose `reset` instead of `resetForm`

### Fixes

- [FDigitsInput] Add full theming
- [FCreditCardInput] Add error outline display and full theming
- [FPhoneInput] Add error outline display and full theming

## 0.2.9 (July 21, 2022)

### Features

- [FForm] Expose resetForm in slot and in defineExpose
- [FCreditCardInput] Add credit card component

### Fixes

- [lib] Expose all form components in resolver
- [forms] Fix placeholder text color
- [FMenu] Prevent menu toggling on Enter keypress

## 0.2.8 (July 13, 2022)

### Fixes

- [build] Build resolvers and rules with vite for proper bundle generation

## 0.2.7 (July 13, 2022)

### Fixes

- [useFBreakpoints] Handle all screen sizes in composable

## 0.2.6 (July 12, 2022)

### Fixes

- [FButton] Avoid padding breaks when FButton is in a flex container

## 0.2.5 (July 4, 2022

### Fixes

- [FPhoneInput] Emit phone number in international format

## 0.2.4 (July 4, 2022)

### Improvements

- [build] Treat `libphonenumber-js` as an external dep
- [doc] Fix a prop comment

## 0.2.3 (July 1, 2022)

### Fixes

- [build] Build and expose validation rules
- [package] Expose resolvers and rules types properly

## 0.2.2 (June 30, 2022)

### Fixes

- [build] Expose /rules to npm package
- [FSelect] Forward FMenu options slot scopes

## 0.2.1 (June 30, 2022)

### Fixes

- [a11y] Add alt (aria-label) with the country code to FFlagIcon component
- [FSelect] Forward FMenu options slots, preventSelection prop and `select-option` event properly

## 0.2.0 (June 30, 2022)

### Features

- [FFlagIcon] Add `size` prop
- [FMenu] remove diacritics from preselect search
- [Build] Properly build lib in CJS and ESM, alongside /resolvers
- [Rules] Expose vee-validate + custom validation rules under `/rules` subfolder
- [FRadioGroup] Add `hint` prop
- [useFieldWithValidation] Allow v-model usage outside of form context
- [form] Add missing trigger validation events

### Fixes

- [FDigitsInput] Ensure all digits are registered when emit complete
- [FSelect] Fix value not correctly cleared on icon click

## 0.1.7 (June 20, 2022)

### Fixes

- [FDigitsInput] Fix value update issues

## 0.1.6 (June 20, 2022)

### Features

- [FDigitsInput] Add `complete` event

## 0.1.5 (June 17, 2022)

### Features

- [FForm] Add documentation story

### Changes

- [FSelect] Harmonize default theme with other input components
- [FPhoneInput] Add rounded flags

### Fixes

- [FPhoneInput] Fix broken form integration
- [FDigitsInput] Fix broken form integration
- [FDivider] Fix margins prop not working
- [utils] Make genId function compatible with SSR

## 0.1.3 (June 14, 2022)

### Features

- [FMenu] Add menu component
- [FInput] Add label prop with documentation (storybook)
- [FSelect] Add label prop with documentation (storybook)
- [FTextarea] Add label prop with documentation (storybook)
- [FRadio] Add radio component
- [FRadioGroup] Add radio group component
- [FDigitsInput] Add digits input component
- [FPhoneInput] Add phone input component
- [FFlagIcon] Add flag icon component
