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
