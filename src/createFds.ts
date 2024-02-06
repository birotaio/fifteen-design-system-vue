import { iconsInjectionKeys } from '@/composables/useIcon';

import type { Plugin } from 'vue';
import type { Icons, FlagIcons, CreditCardIcons } from '@/composables/useIcon';

export interface FdsOptions {
  icons?: Icons;
  flagIcons?: FlagIcons;
  creditCardIcons?: CreditCardIcons;
}

const defaultOptions: FdsOptions = {
  icons: {},
  flagIcons: {},
  creditCardIcons: {},
};

export function createFds(
  options: FdsOptions = defaultOptions
): Plugin<[FdsOptions?]> {
  return {
    install(app) {
      app.provide(iconsInjectionKeys.icons, {
        ...options?.icons,
      });
      app.provide(iconsInjectionKeys.flags, {
        ...options?.flagIcons,
      });
      app.provide(iconsInjectionKeys.creditCards, {
        ...options?.creditCardIcons,
      });
    },
  };
}
