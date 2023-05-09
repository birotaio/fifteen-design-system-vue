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
  'FLocaleSelect',
  'FSkeleton',
  'FSvgImage',
  'FTextarea',
  'FTextContent',
  'FFieldHint',
  'FFieldLabel',
  'FFlagIcon',
  'FCreditCardIcon',
  'FMenu',
  'FField',
  'FRadio',
  'FFileUpload',
  'FAutocomplete',
  'FToggle'
];

const routerComponents = ['FRouterLink', 'FButtonLink'];

export function FifteenComponentsResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (components.includes(name)) {
        return { name, from: '@fifteen/design-system-vue' };
      }
      if (routerComponents.includes(name)) {
        return { name, from: '@fifteen/design-system-vue/router' };
      }
    },
  };
}
