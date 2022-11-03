# Changelog Unreleased

### Features

- [FAutocompleteInput] Add `FAutocompleteInput` component

### Changes

- [FInput] Update story to show `type="number"` in action
- [FInput] Improve `type="number` for iOS Safari (opens a numeric keyboard)
- [FDigitsInput] Display input type as number with numeric keyboard, while hiding browser spin box
- [forms] Rename functions `handleValidation` to `validate`, `handleResetValidation` to `resetValidation`

### Fixes

- [Style] Reset user-agent padding on inputs, causing invisible content for FDigitsInput on iOS Safari
- [FDigitsInput] Fix alignment of input content that was not properly centered
- [FInput] Allow all the input area to be clickable, as an input should be
- [Core] Expose `removeDiacritics` util
- [forms] Remove emits inside custom rules causing events to fire twice
