/**
 * Shared style
 */
import '@/styles/elements.styl';
/**
 * Components
 */
export { default as FCard } from '@/components/FCard.vue';
export { default as FAvatar } from '@/components/FAvatar.vue';
export { default as FBackgroundImage } from '@/components/FBackgroundImage.vue';
export { default as FBreadcrumbs } from '@/components/FBreadcrumbs.vue';
export { default as FButton } from '@/components/FButton.vue';
export { default as FDivider } from '@/components/FDivider.vue';
export { default as FExpandable } from '@/components/FExpandable.vue';
export { default as FFieldHint } from '@/components/form/FFieldHint.vue';
export { default as FFieldLabel } from '@/components/form/FFieldLabel.vue';
export { default as FForm } from '@/components/form/FForm.vue';
export { default as FGrid } from '@/components/FGrid.vue';
export { default as FGridItem } from '@/components/FGridItem.vue';
export { default as FIcon } from '@/components/FIcon.vue';
export { default as FImage } from '@/components/FImage.vue';
export { default as FLink } from '@/components/FLink.vue';
export { default as FLoader } from '@/components/FLoader.vue';
export { default as FLogo } from '@/components/FLogo.vue';
export { default as FLogoAnimatable } from '@/components/FLogoAnimatable.vue';
export { default as FProgressBar } from '@/components/FProgressBar.vue';
export { default as FSkeleton } from '@/components/FSkeleton.vue';
export { default as FSvgImage } from '@/components/FSvgImage.vue';
export { default as FFlagIcon } from '@/components/FFlagIcon.vue';
export { default as FCreditCardIcon } from '@/components/FCreditCardIcon.vue';
export { default as FMenu } from '@/components/FMenu.vue';
/**
 * Form components
 */
export { default as FField } from '@/components/form/FField.vue';
export { default as FCheckbox } from '@/components/form/FCheckbox.vue';
export { default as FCreditCardInput } from '@/components/form/FCreditCardInput.vue';
export { default as FDigitsInput } from '@/components/form/FDigitsInput.vue';
export { default as FInput } from '@/components/form/FInput.vue';
export { default as FPhoneInput } from '@/components/form/FPhoneInput.vue';
export { default as FRadio } from '@/components/form/FRadio.vue';
export { default as FRadioGroup } from '@/components/form/FRadioGroup.vue';
export { default as FSelect } from '@/components/form/FSelect.vue';
export { default as FTextarea } from '@/components/form/FTextarea.vue';
export { default as FFileUpload } from '@/components/form/FFileUpload.vue';
export { default as FAutocompleteInput } from '@/components/form/FAutocompleteInput.vue';

/**
 * Components props interfaces
 */
export type { FAvatarProps } from '@/components/FAvatar.vue';
export type { FBackgroundImageProps } from '@/components/FBackgroundImage.vue';
export type {
  FButtonProps,
  FButtonAnchorPoint,
  FButtonSize,
} from '@/components/FButton.vue';
export type {
  FBreadcrumbsProps,
  FBreadcrumbLink,
} from '@/components/FBreadcrumbs.vue';
export type { FCardProps } from '@/components/FCard.vue';
export type { FCheckboxProps } from '@/components/form/FCheckbox.vue';
export type { FCreditCardInputProps } from '@/components/form/FCreditCardInput.vue';
export type { FDigitsInputProps } from '@/components/form/FDigitsInput.vue';
export type { FDividerProps } from '@/components/FDivider.vue';
export type { FExpandableProps } from '@/components/FExpandable.vue';
export type { FFieldHintProps } from '@/components/form/FFieldHint.vue';
export type { FFieldLabelProps } from '@/components/form/FFieldLabel.vue';
export type { FCreditCardIconProps } from '@/components/FCreditCardIcon.vue';
export type { FFlagIconProps } from '@/components/FFlagIcon.vue';
export type { FFormProps } from '@/components/form/FForm.vue';
export type { FGridItemProps } from '@/components/FGridItem.vue';
export type { FGridProps } from '@/components/FGrid.vue';
export type { FIconProps } from '@/components/FIcon.vue';
export type { FImageProps } from '@/components/FImage.vue';
export type { FInputProps } from '@/components/form/FInput.vue';
export type { FLinkProps } from '@/components/FLink.vue';
export type { FLoaderProps } from '@/components/FLoader.vue';
export type {
  FLogoAnimatableProps,
  FLogoLineDelta,
  FLogoLineNumber,
} from '@/components/FLogoAnimatable.vue';
export type { FLogoProps, FLogoVariant } from '@/components/FLogo.vue';
export type { FPhoneInputProps } from '@/components/form/FPhoneInput.vue';
export type { FProgressBarProps } from '@/components/FProgressBar.vue';
export type { FMenuProps, FMenuOption } from '@/components/FMenu.vue';
export type { FFieldProps } from '@/components/form/FField.vue';
export type { FSelectProps } from '@/components/form/FSelect.vue';
export type { FRadioGroupProps } from '@/components/form/FRadioGroup.vue';
export type { FRadioProps } from '@/components/form/FRadio.vue';
export type { FSkeletonProps } from '@/components/FSkeleton.vue';
export type { FSvgImageProps } from '@/components/FSvgImage.vue';
export type { FTextareaProps } from '@/components/form/FTextarea.vue';
export type { FFileUploadProps } from '@/components/form/FFileUpload.vue';
export type { FAutocompleteInputProps } from '@/components/form/FAutocompleteInput.vue';

/**
 * Composables
 */
export { useFBreakpoints } from '@/composables/useFBreakpoints';
export { useFieldWithValidation } from '@/composables/useFieldWithValidation';
export { useIcon } from '@/composables/useIcon';
export { useInputEventBindings } from '@/composables/useInputEventBindings';
export { useLazyImage } from '@/composables/useLazyImage';
export { useVModelProxy } from '@/composables/useVModelProxy';

/**
 * Utils
 */
export { genSize } from '@/utils/genSize';
export { getCssColor } from '@/utils/getCssColor';
export { removeDiacritics } from '@/utils/text';

/**
 * Config constants
 */
export { breakpointsValues } from '@/config/breakpoints';
export { baseColorDesignTokens, colorDesignTokens } from '@/config/colors';
export { columns, spanValues } from '@/config/grid';
export { typographies } from '@/config/typography';

/**
 * Types
 */
export type { Breakpoint } from '@/types/breakpoints';
export type { Typography } from '@/types/typography';
export type {
  Color,
  BaseColorDesignToken,
  ColorDesignToken,
} from '@/types/colors';
export type { FontFamily } from '@/types/font';
export type { ValidationRule } from '@/types/forms';
export type { Span } from '@/types/grid';
export type { Icon } from '@/types/icons';
export type { CSSVariable, Style } from '@/types/styles';
