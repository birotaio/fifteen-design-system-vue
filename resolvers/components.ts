import type { ComponentResolver } from 'unplugin-vue-components/types';

const components = [
  'FAvatar',
  'FBackgroundImage',
  'FBreadcrumbs',
  'FButton',
  'FCard',
  'FCheckbox',
  'FCreditCardInput',
  'FDigitsInput',
  'FDivider',
  'FExpandable',
  'FForm',
  'FGrid',
  'FGridItem',
  'FIcon',
  'FImage',
  'FInput',
  'FLink',
  'FLoader',
  'FLogo',
  'FLogoAnimatable',
  'FPhoneInput',
  'FProgressBar',
  'FRadioGroup',
  'FSelect',
  'FSkeleton',
  'FSvgImage',
  'FTextarea',
  'FFieldHint',
  'FFieldLabel',
  'FFlagIcon',
  'FCreditCardIcon',
  'FMenu',
  'FField',
  'FRadio',
  'FFileUpload',
  'FAutocompleteInput',
];

export function FifteenComponentsResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (components.includes(name)) {
        return { name, from: '@fifteen/design-system-vue' };
      }
    },
  };
}
