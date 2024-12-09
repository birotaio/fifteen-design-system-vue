import "./setup-addons.js";
import { importFn as p } from "./storybook-stories.js";
const { composeConfigs: R, PreviewWeb: E, ClientApi: c } = __STORYBOOK_MODULE_PREVIEW_API__, S = async (_ = []) => {
  const O = await Promise.all([
    _[0] ?? import("../vendor/@storybook/vue3/dist/entry-preview.js"),
    _[1] ?? import("../vendor/@storybook/vue3/dist/entry-preview-docs.js"),
    _[2] ?? import("../vendor/@storybook/addon-links/dist/preview.js"),
    _[3] ?? import("../vendor/@storybook/addon-essentials/dist/docs/preview.js"),
    _[4] ?? import("../vendor/@storybook/addon-essentials/dist/actions/preview.js"),
    _[5] ?? import("../vendor/@storybook/addon-essentials/dist/backgrounds/preview.js"),
    _[6] ?? import("../vendor/@storybook/addon-essentials/dist/viewport/preview.js"),
    _[7] ?? import("../vendor/@storybook/addon-essentials/dist/measure/preview.js"),
    _[8] ?? import("../vendor/@storybook/addon-essentials/dist/outline/preview.js"),
    _[9] ?? import("../vendor/@storybook/addon-essentials/dist/highlight/preview.js"),
    _[10] ?? import("../.storybook/preview.js")
  ]);
  return R(O);
};
window.__STORYBOOK_PREVIEW__ = window.__STORYBOOK_PREVIEW__ || new E(p, S);
window.__STORYBOOK_STORY_STORE__ = window.__STORYBOOK_STORY_STORE__ || window.__STORYBOOK_PREVIEW__.storyStore;
