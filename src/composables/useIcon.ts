import type { Ref, ComputedRef, InjectionKey } from 'vue';
import type { CreditCardBrandId } from '@/utils/credit-cards';

type IconCollection<T extends Icon | FlagCode | CreditCardBrandId> = {
  [key in T]?: string;
};

export type Icons = IconCollection<Icon>;
export type FlagIcons = IconCollection<FlagCode>;
export type CreditCardIcons = IconCollection<CreditCardBrandId>;

export type IconCollectionName = 'icons' | 'flags' | 'creditCards';

export const iconsInjectionKeys = {
  icons: Symbol.for('icons') as InjectionKey<Icons>,
  flags: Symbol.for('flagIcons') as InjectionKey<FlagIcons>,
  creditCards: Symbol.for('creditCardIcons') as InjectionKey<CreditCardIcons>,
};

type IconCollectionMap = {
  icons: Icon;
  flags: FlagCode;
  creditCards: CreditCardBrandId;
};

export interface UseIconReturn {
  /**
   * Icon svg markup as string
   */
  markup: ComputedRef<string | null | undefined>;
}

/**
 * Get SVG makup for an icon name given an icon collection injection key
 * @param injectionKey - Injection key of the icon collection
 * @param name - Name of the icon
 */
export function useIcon<C extends IconCollectionName>(
  collectionName: C,
  iconName: Ref<IconCollectionMap[C] | null> | IconCollectionMap[C] | null
): UseIconReturn {
  const injectionKey = iconsInjectionKeys[collectionName];
  const icons = inject<IconCollection<IconCollectionMap[C]>>(injectionKey);
  const markup = computed(() => {
    const name = unref(iconName);
    return name ? icons?.[name] : null;
  });
  watch(
    markup,
    value => {
      if (!value) {
        console.warn(
          `[FDS] Markup for icon "${
            unref(iconName) as string
          }" was not found for collection "${Symbol.keyFor(
            injectionKey as symbol
          )}". For tree-shaking purpose, you must import and declare it in \`createFds\` options in your app entrypoint.'`
        );
      }
    },
    { immediate: true }
  );
  return { markup };
}
