import * as path from 'path';
import type { Resolver } from 'unplugin-auto-import/types';

const composables = [
  'useFBreakpoints',
  'useFieldWithValidation',
  'useIcon',
  'useInputEventBindings',
  'useLazyImage',
  'useVModelProxy',
];

const utils = ['getCssColor', 'genSize'];

export function FifteenAutoImportsResolver(
  base = '@fifteen/design-system-vue'
): Resolver {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (composables.includes(name)) {
        return { name, from: path.join(base, 'composables', name) };
      }
      if (utils.includes(name)) {
        return { name, from: path.join(base, 'utils', name) };
      }
    },
  };
}
