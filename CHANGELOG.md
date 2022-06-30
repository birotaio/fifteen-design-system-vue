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