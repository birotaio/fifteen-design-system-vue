import { getCurrentInstance } from 'vue';

import type { ComponentInternalInstance } from 'vue';

let _uid = 0;
const componentInstancesMap = new WeakMap<ComponentInternalInstance, number>();

/**
 * Returns an unique id for current component instance
 * Inspired by Vuetify: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/getCurrentInstance.ts#L26
 * @returns An UID
 */
export function getUid(): number {
  const componentInstance = getCurrentInstance();
  if (!componentInstance) return -1;

  if (componentInstancesMap.has(componentInstance)) {
    return componentInstancesMap.get(componentInstance) as number;
  }

  const uid = _uid++;
  componentInstancesMap.set(componentInstance, uid);
  return uid;
}
