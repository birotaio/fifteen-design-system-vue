import * as path from 'path';
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

export function FifteenComponentsResolver(
  base = '@fifteen/design-system-vue'
): ComponentResolver {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (components.includes(name)) {
        return { from: path.join(base, 'components', `${name}.vue`) };
      }
    },
  };
}
