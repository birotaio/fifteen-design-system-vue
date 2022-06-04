import type { ComponentResolver } from 'unplugin-vue-components/types';

const components = [
  'FInput',
  'FAvatar',
  'FBackgroundImage',
  'FBreadcrumbs',
  'FButton',
  'FCard',
  'FCheckbox',
  'FDivider',
  'FExpandable',
  'FFieldHint',
  'FForm',
  'FGrid',
  'FGridItem',
  'FIcon',
  'FImage',
  'FLink',
  'FLogo',
  'FLogoAnimatable',
  'FProgressBar',
  'FSelect',
  'FSkeleton',
  'FSvgImage',
  'FTextarea',
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
