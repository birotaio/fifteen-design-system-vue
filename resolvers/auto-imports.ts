import type { Resolver } from 'unplugin-auto-import/types';

const composables = [
  'useFBreakpoints',
  'useFieldWithValidation',
  'useIcon',
  'useInputEventBindings',
  'useLazyImage',
  'useVModelProxy',
];

const utils = ['getCssColor', 'genSize', 'removeDiacritics'];

export function FifteenAutoImportsResolver(): Resolver {
  return {
    type: 'component',
    resolve: async (name: string) => {
      if (composables.includes(name)) {
        return { name, from: '@fifteen/design-system-vue' };
      }
      if (utils.includes(name)) {
        return { name, from: '@fifteen/design-system-vue' };
      }
    },
  };
}
