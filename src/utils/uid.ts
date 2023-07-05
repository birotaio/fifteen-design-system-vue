import { getCurrentInstance } from 'vue';

import type { ComponentInternalInstance } from 'vue';

let _uid = 0;
const _map = new WeakMap<ComponentInternalInstance, number>();

/**
 * Returns an unique id for current component instance
 * Inspired by Vuetify: https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/util/getCurrentInstance.ts#L26
 * @returns An UID
 */
export function getUid(): number {
  const vm = getCurrentInstance();
  if (!vm) return -1;

  if (_map.has(vm)) return _map.get(vm) as number;
  else {
    const uid = _uid++;
    _map.set(vm, uid);
    return uid;
  }
}
